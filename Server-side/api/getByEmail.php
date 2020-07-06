<?php
require 'connect.php';

header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$emailId = $_GET['emailId'];

$sql = "SELECT * FROM Users
WHERE email = '{$emailId}' LIMIT 1";

$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
//print_r($row);

echo $json = json_encode($row);
//echo json_encode(['data'=>$json]);

$conn->close();
