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
$sql = "SELECT * FROM AttendeeList
WHERE userEmail = '{$userEmail}'";

if ($result = mysqli_query($conn, $sql)) {
    if ($result->num_rows > 0) {
        $cr = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $regiteredEvents[$cr]['eventId'] = $row['eventId'];
            $cr++;
        }

        //print_r($regiteredEvents);

        $i1 = 0;

        foreach ($regiteredEvents as $request) {
            foreach ($request as $key => $value) {
                $arr1[$i1] = $value;
                $i1++;
            }
        }
    } //else {
    //echo "result: 0 results";
    // }
} //else {
// echo "result:";
// http_response_code(404);
//}

//echo "test1";
//print_r($arr1);

$sql2 = "SELECT * FROM events";
$i2 = 0;

if ($viewResult = mysqli_query($conn, $sql2)) {
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
    } //else {
    //  echo "viewResult: 0 results";
    // }

} //else {
// echo "viewResult:";
// http_response_code(404);
//}

//echo "test2";
///print_r($arr2);

$diffResult = array_diff($arr2, $arr1);

////echo "test3";
//print_r($diffResult);

$index = 0;
foreach ($diffResult as $request) {
    //print_r($request);
    $sql3 = "SELECT * FROM events WHERE eventId = '{$request}'";
    if ($result2 = mysqli_query($conn, $sql3)) {
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
//echo "test4";
//print_r($details);
echo json_encode($details);
