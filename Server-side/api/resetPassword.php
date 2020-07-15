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
    $emailId = $_GET['sendto'];
    $password = $request->password;

    $queryForEmail = "SELECT * FROM Users
    WHERE email = '{$emailId}' LIMIT 1";
    if ($result = mysqli_query($conn, $queryForEmail)) {
        $rowCount = $result->num_rows;
        if ($rowCount > 0) {
            $password_hash = password_hash($password, PASSWORD_BCRYPT);
            $updatePassword = "UPDATE Users SET password = '$password_hash' WHERE email = '{$emailId}' LIMIT 1";
            if (mysqli_query($conn, $updatePassword)) {
                http_response_code(200);
                // echo "Password updated successfully!";
                echo json_encode(array("message" => "Password updated successfully!"));
            } else {
                return http_response_code(422);
            }
        } else {
            http_response_code(401);
            //  echo 'Entered email account not found!';
            echo json_encode(array("error" => "Entered email account not found!"));
        }

    }
}
