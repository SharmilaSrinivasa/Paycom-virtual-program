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
if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    $role = $request->role;
    $email = $request->email;
    $password = $request->password; 
    
    $query = "SELECT * FROM Users 
    WHERE email = '$email'"; 

    $result = mysqli_query($conn, $sql);
    $rowCount = $result->num_rows;
          
    if($rowCount > 0)
    {
        $userData = $result->fetch_object();
        $user_id = $userData->user_id;
        $password2 = $userData->password;

        if($password === $password2)
        {
            http_response_code(200);
        }
        else
        {

            http_response_code(401);
            echo json_encode(array("message" => "Login failed.", "password" => $password));
        }

       /* if(password_verify($password, $password2))
        {
            $secret_key = "YOUR_SECRET_KEY";
            $issuer_claim = "THE_ISSUER"; // this can be the servername
            $audience_claim = "THE_AUDIENCE";
            $issuedat_claim = time(); // issued at
            $notbefore_claim = $issuedat_claim + 10; //not before in seconds
            $expire_claim = $issuedat_claim + 60; // expire time in seconds
            $token = array(
                "iss" => $issuer_claim,
                "aud" => $audience_claim,
                "iat" => $issuedat_claim,
                "nbf" => $notbefore_claim,
                "exp" => $expire_claim,
                "data" => array(
                    "user_id" => $user_id,
                    "role" => $role,
                    "email" => $email
            ));

            http_response_code(200);

            $jwt = JWT::encode($token, $secret_key);
            echo json_encode(
                array(
                    "message" => "Successful login.",
                    "jwt" => $jwt,
                    "email" => $email,
                    "expireAt" => $expire_claim
                ));
        }
        else
        {

            http_response_code(401);
            echo json_encode(array("message" => "Login failed.", "password" => $password));
        }*/

}

?>

