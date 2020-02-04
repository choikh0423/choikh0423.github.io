<?php
    $name = $_POST['name'];
    $from_email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $body = "From: $name\n $message";

    $to = "kyuhwanchoi0423@gmail.com";
    $title = "$subject";
    $headers = "From: $from_email \r\n";
    mail($to, $title, $body);

?>