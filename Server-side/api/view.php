<?php
require 'connect.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

error_reporting(E_ERROR);
$events = [];
$rsvp = [];
$sql = "SELECT * FROM events";
$sql2 = "SELECT COUNT(userEmail), eventId FROM AttendeeList
            GROUP BY eventId";

if ($result = mysqli_query($conn, $sql)) {
    if ($result->num_rows > 0) {
        $cr = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $events[$cr]['eventId'] = $row['eventId'];
            $events[$cr]['title'] = $row['title'];
            $events[$cr]['location'] = $row['location'];
            $events[$cr]['description'] = $row['description'];
            $events[$cr]['event_date'] = $row['event_date'];
            $events[$cr]['event_time'] = $row['event_time'];

            if ($result2 = mysqli_query($conn, $sql2)) {
                if ($result2->num_rows > 0) {
                    while ($row2 = mysqli_fetch_assoc($result2)) {
                        if ($row['eventId'] == $row2['eventId']) {
                            $events[$cr]['RSVP'] = $row2['COUNT(userEmail)'];
                        }
                    }
                }
            }
            $cr++;
        }
    } else {
        echo "0 results";
    }
    //print_r($events);
    echo json_encode($events);
} else {
    http_response_code(404);
}
