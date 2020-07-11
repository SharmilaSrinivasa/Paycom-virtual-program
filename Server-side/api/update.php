<?php
require 'connect.php';

header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Get the posted data.
$postdata = file_get_contents("php://input");
$errors = array();

if (isset($postdata) && !empty($postdata)) {
    //Extract the data.
    $request = json_decode($postdata);
    //Sanitize.
    $id = $_GET['id'];
    $title = $request->event_title;
    $event_date = $request->event_date;
    $event_time = $request->event_time;
    $location = $request->location;
    $description = $request->description;
    $event_time = strtotime($event_time);
    $event_time_12hr = date('h:i a', $event_time);

    $check_query = "SELECT * FROM events
    WHERE event_date = '$event_date' AND event_time = '$event_time_12hr' AND eventId != '$id'";
    $result = mysqli_query($conn, $check_query);
    $eventMatch = mysqli_fetch_assoc($result);

    if ($eventMatch) {
        array_push($errors, "This date and time were already taken");
    }

    if (count($errors) == 0) {
        $updateEvent = "UPDATE events SET title = '$title', event_date = '$event_date',
        event_time = '$event_time_12hr', location = '$location', description = '$description'
        WHERE eventId = '{$id}' LIMIT 1";

        if (mysqli_query($conn, $updateEvent)) {
            http_response_code(200);
            echo "Record updated successfully!";
        } else {
            return http_response_code(422);
        }
    } else {
        http_response_code(401);
        echo json_encode(array("error" => "date and time exists", "date" => $event_date, "time" => $event_time));
    }

}
