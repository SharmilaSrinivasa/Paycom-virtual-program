<?php
require 'connect.php';

$postdata = file_get_contents("php://input");

$errors = array();

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    print_r($request);

    // Sanitize
    $firstname = $request->firstname;
    $lastname = $request->lastname;
    $email = $request->email;
    $password = $request->password;

    $check_query = "SELECT * FROM Users WHERE Email='$email' LIMIT 1";
    $result = mysqli_query($conn, $check_query);
    $user = mysqli_fetch_assoc($result);

    if ($user) {
        if ($user['Email'] === $email) {
            array_push($errors, "email already exists");
        }
    }

    if(count($errors) == 0)
    {
        $password = md5($password);
        $sql = "INSERT INTO Users (Fname, Lname, Email, Password) 
        VALUES ( '{$firstname}', '{$lastname}', '{$email}', '{$password}')";
        mysqli_query($conn, $sql);
        $_SESSION['firstname'] = $firstname;
  	    $_SESSION['success'] = "You are now logged in";
  	    
    }
   
    
    $conn->close();
}
?> 