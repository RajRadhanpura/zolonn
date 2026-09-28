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
require __DIR__ . '/mailer.php';

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
