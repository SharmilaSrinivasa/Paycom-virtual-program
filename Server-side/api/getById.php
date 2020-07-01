<?php
require 'connect.php';
$id=$_GET['id'];

$sql = "SELECT * FROM events 
WHERE eventId = '{$id}' LIMIT 1";

$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
//print_r($row);

echo $json = json_encode($row);
//echo json_encode(['data'=>$json]);

exit;
