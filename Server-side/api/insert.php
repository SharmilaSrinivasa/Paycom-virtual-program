<?php
require 'connect.php';

header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$postdata = file_get_contents("php://input");
$errors = array();

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    // Sanitize
    $event_title = $request->event_title;
    $event_date = $request->event_date;
    $event_time = $request->event_time;
    $location = $request->location;
    $description = $request->description;
    $event_time = strtotime($event_time);
    $event_time_12hr = date('h:i a', $event_time);

    $check_query = "SELECT * FROM events
    WHERE event_date = '$event_date' AND event_time = '$event_time_12hr'";
    $result = mysqli_query($conn, $check_query);
    $eventMatch = mysqli_fetch_assoc($result);
    print_r($eventMatch);

    if ($eventMatch) {
        array_push($errors, "This date and time were already taken");
    }

    if (count($errors) == 0) {

        $insertEvent = "INSERT INTO events (title, event_date, event_time, location, description)
    VALUES ( '{$event_title}', '{$event_date}', '{$event_time_12hr}', '{$location}', '{$description}')";

        if ($conn->query($insertEvent) === true) {
            http_response_code(200);
            echo json_encode(array("message" => "New record created successfully!"));
            // echo "New record created successfully!";
        } else {
            http_response_code(401);
            echo "Error: " . $insertEvent . "<br>" . $conn->error;
        }
    } else {
        http_response_code(400);
        echo json_encode(array("error" => "date and time exists", "date" => $event_date, "time" => $event_time));
    }

    $conn->close();
}
