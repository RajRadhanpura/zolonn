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
$projectType = trim(preg_replace('/[\r\n]+/', ' ', (string)($input['projectType'] ?? '')));
$message = trim((string)($input['message'] ?? ''));

if ($name === '' || $phone === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'Please provide a valid name, email, mobile number and message.']);
}
if (mb_strlen($name) > 100 || mb_strlen($phone) > 30 || mb_strlen($projectType) > 100) {
    respond(422, ['ok' => false, 'error' => 'Invalid input.']);
}
if (mb_strlen($message) > 5000) {
    respond(422, ['ok' => false, 'error' => 'Message is too long.']);
}

$e = fn(string $s) => htmlspecialchars($s, ENT_QUOTES, 'UTF-8');

$customerHtml = '<div style="font-family:Arial,sans-serif;color:#222;line-height:1.6">'
    . '<p>Hello ' . $e($name) . ',</p>'
    . '<p>Thank you for contacting ZOLON Hardware. We have received your request and a senior '
    . 'architectural hardware consultant will get back to you shortly.</p>'
    . '<p>Regards,<br>ZOLON Hardware</p></div>';

$leadHtml = '<div style="font-family:Arial,sans-serif;color:#222;line-height:1.6"><h3>New contact form submission</h3>'
    . '<p><b>Name:</b> ' . $e($name) . '<br>'
    . '<b>Email:</b> ' . $e($email) . '<br>'
    . '<b>Mobile:</b> ' . $e($phone) . '<br>'
    . ($projectType !== '' ? '<b>Project Type:</b> ' . $e($projectType) . '<br>' : '')
    . '</p>'
    . '<p><b>Message:</b><br>' . nl2br($e($message)) . '</p></div>';

try {
    send_mail(NOTIFY_EMAIL, 'New contact form submission: ' . $name, $leadHtml, $email);
} catch (Throwable $ex) {
    error_log('Contact lead mail failed: ' . $ex->getMessage());
    respond(500, ['ok' => false, 'error' => 'Could not send your message. Please try again.']);
}

try {
    send_mail($email, 'Thank you for contacting ZOLON Hardware', $customerHtml, NOTIFY_EMAIL);
} catch (Throwable $ex) {
    error_log('Contact confirmation mail failed: ' . $ex->getMessage());
}

respond(200, ['ok' => true]);
