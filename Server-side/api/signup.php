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
    //print_r($request);

    // Sanitize
    $role = $request->role;
    $email = $request->email;
    $password = $request->password;

    $check_query = "SELECT * FROM Users WHERE email = '$email' LIMIT 1";
    $result = mysqli_query($conn, $check_query);
    $user = mysqli_fetch_assoc($result);

    if ($user) {
        if ($user['email'] === $email) {
            array_push($errors, "email already exists");
        }
    }

    if (count($errors) == 0) {
        $password = md5($password);
        $sql = "INSERT INTO Users (role, email, password)
        VALUES ('{$role}', '{$email}', '{$password}')";
        if ($conn->query($sql) === true) {
            http_response_code(200);
            echo json_encode(array("message" => "User was successfully registered."));
        } else {
            http_response_code(400);
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        http_response_code(400);
        echo json_encode(array("error" => "email exists", "email" => $email));
    }

    $conn->close();
}
