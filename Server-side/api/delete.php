<?php
require 'connect.php';
$id=$_GET['id'];

$sql = "DELETE FROM events 
WHERE eventId = '{$id}' LIMIT 1";

if(mysqli_query($conn, $sql))
{
    http_response_code(204);
}
else{
    return http_response_code(422);
}
