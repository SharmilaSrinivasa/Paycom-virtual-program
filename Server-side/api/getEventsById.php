<?php
require 'connect.php';

header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$userEmail = $_GET['userEmail'];
$events = [];
$details = [];
$queryForAttendeeList = "SELECT * FROM AttendeeList
WHERE userEmail = '{$userEmail}'";

if ($result = mysqli_query($conn, $queryForAttendeeList)) {
    if ($result->num_rows > 0) {
        $cr = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $events[$cr]['ticketId'] = $row['ticketId'];
            $events[$cr]['eventId'] = $row['eventId'];
            $events[$cr]['userEmail'] = $row['userEmail'];
            $cr++;
        }
        $index = 0;
        foreach ($events as $request) {
            foreach ($request as $key => $value) {
                if ($key == "eventId") {
                    $queryForEvent = "SELECT * FROM events WHERE eventId = '{$value}'";
                    if ($result2 = mysqli_query($conn, $queryForEvent)) {
                        $row2 = mysqli_fetch_assoc($result2);
                        $details[$index] = $row2;
                    } else {
                        http_response_code(404);
                    }
                }
            }
            $index++;
        }
        echo json_encode($details);
    } else {
        echo "0 results";
    }
} else {
    http_response_code(404);
}
