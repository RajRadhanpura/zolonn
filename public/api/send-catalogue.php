<?php
header('Content-Type: application/json');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

require __DIR__ . '/config.php';

$input = json_decode(file_get_contents('php://input'), true) ?: [];
$name = trim(preg_replace('/[\r\n]+/', ' ', (string)($input['name'] ?? '')));
$email = trim((string)($input['email'] ?? ''));
$phone = trim(preg_replace('/[\r\n]+/', ' ', (string)($input['phone'] ?? '')));
$catalogueKey = trim((string)($input['catalogue'] ?? ''));

if ($name === '' || $phone === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'Please provide a valid name, email and mobile number.']);
}
if (mb_strlen($name) > 100 || mb_strlen($phone) > 30) {
    respond(422, ['ok' => false, 'error' => 'Invalid input.']);
}
if (!isset(CATALOGUES[$catalogueKey])) {
    respond(422, ['ok' => false, 'error' => 'Please select a valid catalogue.']);
}
$catalogue = CATALOGUES[$catalogueKey];

function smtp_read($conn): string
{
    $response = '';
    while (($line = fgets($conn, 515)) !== false) {
        $response .= $line;
        if (strlen($line) < 4 || $line[3] === ' ') {
            break;
        }
    }
    return $response;
}

function smtp_cmd($conn, string $cmd, string $expect): void
{
    fwrite($conn, $cmd . "\r\n");
    $response = smtp_read($conn);
    if (strpos($response, $expect) !== 0) {
        throw new RuntimeException('SMTP error: ' . trim($response));
    }
}

function send_mail(string $to, string $subject, string $html, ?string $replyTo = null): void
{
    $conn = stream_socket_client(SMTP_HOST . ':' . SMTP_PORT, $errno, $errstr, 15);
    if (!$conn) {
        throw new RuntimeException("SMTP connect failed: $errstr");
    }
    stream_set_timeout($conn, 15);
    try {
        if (strpos(smtp_read($conn), '220') !== 0) {
            throw new RuntimeException('SMTP greeting failed');
        }
        smtp_cmd($conn, 'EHLO localhost', '250');
        smtp_cmd($conn, 'STARTTLS', '220');
        if (!stream_socket_enable_crypto($conn, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            throw new RuntimeException('TLS failed');
        }
        smtp_cmd($conn, 'EHLO localhost', '250');
        smtp_cmd($conn, 'AUTH LOGIN', '334');
        smtp_cmd($conn, base64_encode(SMTP_USERNAME), '334');
        smtp_cmd($conn, base64_encode(SMTP_PASSWORD), '235');
        smtp_cmd($conn, 'MAIL FROM:<' . SMTP_FROM_EMAIL . '>', '250');
        smtp_cmd($conn, 'RCPT TO:<' . $to . '>', '250');
        smtp_cmd($conn, 'DATA', '354');

        $headers = [
            'Date: ' . date('r'),
            'From: =?UTF-8?B?' . base64_encode(SMTP_FROM_NAME) . '?= <' . SMTP_FROM_EMAIL . '>',
            'To: <' . $to . '>',
            'Subject: =?UTF-8?B?' . base64_encode($subject) . '?=',
            'MIME-Version: 1.0',
            'Content-Type: text/html; charset=UTF-8',
            'Content-Transfer-Encoding: base64',
        ];
        if ($replyTo) {
            $headers[] = 'Reply-To: <' . $replyTo . '>';
        }
        $body = chunk_split(base64_encode($html));
        fwrite($conn, implode("\r\n", $headers) . "\r\n\r\n" . $body . "\r\n.\r\n");
        if (strpos(smtp_read($conn), '250') !== 0) {
            throw new RuntimeException('Message rejected');
        }
        fwrite($conn, "QUIT\r\n");
    } finally {
        fclose($conn);
    }
}

$scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
$dir = rtrim(dirname(dirname($_SERVER['SCRIPT_NAME'])), '/\\');
$base = $scheme . '://' . $_SERVER['HTTP_HOST'] . $dir . '/catalogue/';

$e = fn(string $s) => htmlspecialchars($s, ENT_QUOTES, 'UTF-8');

$links = '';
foreach ($catalogue['files'] as $label => $file) {
    $links .= '<li style="margin:6px 0"><a href="' . $e($base . $file) . '" style="color:#ae8128;font-weight:bold">'
        . $e($label) . '</a></li>';
}

$catalogueTitle = $catalogue['title'];

$customerHtml = '<div style="font-family:Arial,sans-serif;color:#222;line-height:1.6">'
    . '<p>Hello ' . $e($name) . ',</p>'
    . '<p>Thank you for your interest in ZOLON Hardware. Download the ' . $e($catalogueTitle)
    . ' catalogue using the link below:</p>'
    . '<ul>' . $links . '</ul>'
    . '<p>For pricing or product guidance, simply reply to this email.</p>'
    . '<p>Regards,<br>ZOLON Hardware</p></div>';

$leadHtml = '<div style="font-family:Arial,sans-serif;color:#222"><h3>New catalogue request</h3>'
    . '<p><b>Catalogue:</b> ' . $e($catalogueTitle) . '</p>'
    . '<p><b>Name:</b> ' . $e($name) . '<br><b>Email:</b> ' . $e($email)
    . '<br><b>Mobile:</b> ' . $e($phone) . '</p></div>';

try {
    send_mail($email, 'Your ZOLON ' . $catalogueTitle . ' Catalogue', $customerHtml, NOTIFY_EMAIL);
} catch (Throwable $ex) {
    error_log('Catalogue mail failed: ' . $ex->getMessage());
    respond(500, ['ok' => false, 'error' => 'Could not send the email. Please try again.']);
}

try {
    send_mail(NOTIFY_EMAIL, 'New catalogue request (' . $catalogueTitle . '): ' . $name, $leadHtml, $email);
} catch (Throwable $ex) {
    error_log('Lead notification failed: ' . $ex->getMessage());
}

respond(200, ['ok' => true]);
