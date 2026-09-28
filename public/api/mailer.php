<?php
// Shared minimal SMTP mailer used by the contact and catalogue endpoints.

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
