<?php 

$type = $_GET['tp']; 
if($type=='signup') signup(); 
elseif($type=='login') login(); 

function signup() {
    
    require 'config.php'; 
    
    $json = json_decode(file_get_contents('php://input'), true);
    $firstname = $json['firstname'];
    $lastname = $json['lastname'];
    $email = $json['email'];
    $password = $json['password'];

    $firstname_check = preg_match("/^[A-Za-z]{4,10}$/i", $firstname);
    $lastname_check = preg_match("/^[A-Za-z]{4,10}$/i", $lastname);
    $email_check = preg_match('/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]{2,4})$/i', $email);
    $password_check = preg_match('/^[A-Za-z0-9!@#$%^&*()_]{4,20}$/i', $password);
   
    if($firstname_check == 0) 
        echo '{"error":"Required firstname"}';
    elseif($email_check == 0) 
        echo '{"error":"Invalid email"}';
    elseif($password_check == 0) 
        echo '{"error":"Invalid password"}';
    elseif (strlen(trim($firstname)) > 0 && strlen(trim($password)) > 0 && strlen(trim($email)) > 0 && 
        $email_check > 0 && $firstname_check > 0 && $password_check > 0)
    {
        $userData = '';
        $result = $db->query("select * from Users where Email='$email'");
        $rowCount=$result->num_rows;
        //echo '{"text": "'.$rowCount.'"}';
       
        if($rowCount == 0)
        {             
            $db->query("INSERT INTO Users(Fname,Lname,Email,Password)
                        VALUES('$firstname','$lastname','$email','$password')");
            $userData ='';
            $query = "select * from Users where Email ='$email' and Password='$password'";
            $result= $db->query($query);
            $userData = $result->fetch_object();
            $user_id=$userData->UserId;
            $userData = json_encode($userData);
            echo '{"userData":'.$userData.'}';
        } 
        else {
           echo '{"error":"email exists"}';
        }

    }
    else{
        echo '{"text":"Enter valid data"}';
    }

}

function login() 
{ 
       require 'config.php'; 
       $json = json_decode(file_get_contents('php://input'), true); 
       $email = $json['email']; 
       $password = $json['password']; 
       $userData =''; $query = "select * from Users where Email = '$email' and Password = '$password'"; 
       $result = $db->query($query);
       $rowCount = $result->num_rows;
             
        if($rowCount>0)
        {
            $userData = $result->fetch_object();
            $user_id = $userData->UserId;
            $userData = json_encode($userData);
            echo '{"userData":'.$userData.'}'; 
        }
        else 
        {
            echo '{"error":"Wrong email and password"}';
        }

    
}

?>
