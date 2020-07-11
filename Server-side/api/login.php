<?php
require 'connect.php';
require "../vendor/autoload.php";
use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$postdata = file_get_contents("php://input");
$errors = array();
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    $role = $request->role;
    $email = $request->email;
    $password = $request->password;

    $query = "SELECT * FROM Users
    WHERE email = '$email'";

    if ($result = mysqli_query($conn, $query)) {
        $rowCount = $result->num_rows;
        if ($rowCount > 0) {
            $userData = $result->fetch_object();
            $user_id = $userData->user_id;
            $password2 = $userData->password;

            if (password_verify($password, $password2)) {
                $secret_key = bin2hex(random_bytes(32));
                $issuedat_claim = time(); // issued at
                $notbefore_claim = $issuedat_claim + 10; //not before in seconds
                $expire_claim = $issuedat_claim + 60; // expire time in seconds
                $token = array(
                    "iat" => $issuedat_claim,
                    "nbf" => $notbefore_claim,
                    "exp" => $expire_claim,
                    "data" => array(
                        "user_id" => $user_id,
                        "role" => $role,
                        "email" => $email,
                    ));

                http_response_code(200);

                $jwt = JWT::encode($token, $secret_key);
                echo json_encode(
                    array(
                        "message" => "Successful login.",
                        "jwt" => $jwt,
                        "email" => $email,
                        "expireAt" => $expire_claim,
                    ));
            } else {
                http_response_code(401);
                echo json_encode(array("message" => "Login failed, password does not match", "password" => $password));
            }
        } else {
            http_response_code(401);
            echo json_encode(array("message" => "Login failed, email does not exists", "Email" => $email));

        }
    }

}
