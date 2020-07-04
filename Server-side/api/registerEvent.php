<?php
require 'connect.php';

header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$postdata = file_get_contents("php://input");
 
//print_r($postdata);

if(isset($postdata) && !empty($postdata))
{
    //Extract the data.
    $request = json_decode($postdata);

    print_r($request);

    //Sanitize.
    $event_id = $_GET['myparam1'];
    $user_id = $request->user_id;

    $sql = "INSERT INTO AttendeeList (eventId, userId) VALUES ( '{$event_id}', '{$user_id}')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } 
    else 
    {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();



?> 
