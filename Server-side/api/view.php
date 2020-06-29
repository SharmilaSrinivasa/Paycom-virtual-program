<?php
require 'connect.php';
error_reporting(E_ERROR);
$events = [];
$sql = "SELECT * FROM events";

if($result = mysqli_query($conn, $sql))
{
    if ($result->num_rows > 0)
    {
        $cr = 0;
        while($row = mysqli_fetch_assoc($result))
        {
            $events[$cr]['eventId'] = $row['eventId'];
            $events[$cr]['title'] = $row['title'];
            $events[$cr]['location'] = $row['location'];
            $events[$cr]['description'] = $row['description'];
            $events[$cr]['event_date'] = $row['event_date'];
            $events[$cr]['event_time'] = $row['event_time'];
            $cr++;
        }

        print_r($evnets);
        echo json_encode($events);
    }
    else{
        echo "0 results";
    }
}
else{
    http_response_code(404);
}

?>

