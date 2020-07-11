<?php
require 'connect.php';

header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$userEmail = $_GET['userEmail'];
$regiteredEvents = [];
$allEvents = [];
$arr1 = [];
$arr2 = [];
$details = [];
$selectAttendees = "SELECT * FROM AttendeeList
WHERE userEmail = '{$userEmail}'";

if ($result = mysqli_query($conn, $selectAttendees)) {
    if ($result->num_rows > 0) {
        $cr = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $regiteredEvents[$cr]['eventId'] = $row['eventId'];
            $cr++;
        }

        $i1 = 0;

        foreach ($regiteredEvents as $request) {
            foreach ($request as $key => $value) {
                $arr1[$i1] = $value;
                $i1++;
            }
        }
    }
}
$selectEvents = "SELECT * FROM events";
$i2 = 0;

if ($viewResult = mysqli_query($conn, $selectEvents)) {
    if ($viewResult->num_rows > 0) {
        $cr = 0;
        while ($viewRow = mysqli_fetch_assoc($viewResult)) {
            $allEvents[$cr]['eventId'] = $viewRow['eventId'];
            $cr++;
        }

        foreach ($allEvents as $request) {
            foreach ($request as $key => $value) {
                $arr2[$i2] = $value;
                $i2++;
            }
        }
    }
}

$diffResult = array_diff($arr2, $arr1);

$index = 0;
foreach ($diffResult as $request) {

    $selectEventsList = "SELECT * FROM events WHERE eventId = '{$request}'";
    if ($result2 = mysqli_query($conn, $selectEventsList)) {
        if ($result2->num_rows > 0) {
            while ($row = mysqli_fetch_assoc($result2)) {
                $details[$index]['eventId'] = $row['eventId'];
                $details[$index]['title'] = $row['title'];
                $details[$index]['location'] = $row['location'];
                $details[$index]['description'] = $row['description'];
                $details[$index]['event_date'] = $row['event_date'];
                $details[$index]['event_time'] = $row['event_time'];
                $index++;
            }

        } else {
            echo "result2: 0 results";
        }
    } else {
        echo "result2:";
        http_response_code(404);
    }

}

echo json_encode($details);
