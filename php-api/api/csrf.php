<?php
// Gives the static (Next.js) pages a session CSRF token for the enquiry forms.
// assets/js/forms.js calls this once, right before the first form submission.
require_once dirname(__DIR__) . '/server/form-security.php';
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex, nofollow');
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    header('Allow: GET');
    echo json_encode(['token' => null]);
    exit;
}
echo json_encode(['token' => form_csrf_token()]);
