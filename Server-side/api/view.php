<?php
require 'connect.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

error_reporting(E_ERROR);
$events = [];
$sql = "SELECT * FROM events";

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
            $cr++;
        }

        echo json_encode($events);
    } else {
        echo "0 results";
    }
} else {
    http_response_code(404);
}
