<?php
require 'connect.php';

header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$id = $_GET['id'];

$sql = "DELETE FROM events
WHERE eventId = '{$id}' LIMIT 1";

if (mysqli_query($conn, $sql)) {
    http_response_code(204);
} else {
    return http_response_code(422);
}
