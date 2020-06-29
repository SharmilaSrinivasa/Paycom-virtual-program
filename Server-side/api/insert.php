<?php
require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    print_r($request);

    // Sanitize
    $event_title = $request->event_title;
    $event_date = $request->event_date;
    $event_time = $request->event_time;
    $location = $request->location;
    $description = $request->description;

    $sql = "INSERT INTO events (title, event_date, event_time, location, description)
    VALUES ( '{$event_title}', '{$event_date}', '{$event_time}', '{$location}', '{$description}')";

    if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
    } 
    else 
    {
    echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?> 

