<!DOCTYPE html>
<html>
<body>

<?php

$to = 'selvana.naguib4@gmail.com';

$subject = 'My Contact Form - '. $_GET['name'];

$message =  $_GET['msg']. "\r\n" . "\r\n" .
            "phone: ".$_GET['phone'] . "\r\n" .
            "email: " .$_GET['email']. "\r\n";

$headers = 'From: '. $_GET['email'] . "\r\n" .
    'Reply-To: '. $_GET['email'] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message , $headers );

echo 'Message Sent Successfully';
?>

</body>
</html>
