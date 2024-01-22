<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $mail = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $msg = filter_var($_POST["message"], FILTER_SANITIZE_STRING);


    $formErrors = array();

    if (strlen($name) <= 3) {
        $formErrors[] = "Name must be more than 3 characters";
    }

    if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
        $formErrors[] = "The email is required field !";
    }

    if (strlen($msg) <= 10) {
        $formErrors[] = "Message must be at least 10 characters";
    }

    $headers = "From: " .$mail . "/n/r";

    if (empty($formErrors)) {

        mail("ziadelsayed2004@gmail.com", "Website Conatact", $msg, $headers );
        
        echo "Your Email Has Sent Succesfully";
    }
 }

 
?>