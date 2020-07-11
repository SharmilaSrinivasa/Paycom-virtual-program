<?php
require 'connect.php';

header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

$userEmail = $_GET['sendto'];

if ($userEmail) {
    require '../vendor/autoload.php';

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'apptestuser208@gmail.com';
        $mail->Password = 'passtest123';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('apptestuser208@gmail.com', 'Paycom');
        $mail->addAddress($userEmail);
        $mail->addReplyTo('no-reply@paycom.com', 'No reply');

        $mail->isHTML(true);
        $mail->Subject = 'Password reset for program planner';
        $mail->Body = 'Hi there, <br />
        You requested to reset your password for Program Planner. To do so, click the link below. <br />
        <b> http://localhost:3000/passwordreset/' . $userEmail . '</b> <br />
        <br />
        Thanks, <br />
        Paycom Team';
        $mail->AltBody = 'Password reset for program planner';

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo 'Enter your email account';
}
