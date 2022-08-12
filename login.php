<?php

$name = strip_tags(htmlspecialchars($_POST['name']));
$lastname = strip_tags(htmlspecialchars($_POST['lastname']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$studio = strip_tags(htmlspecialchars($_POST['localization']));
$query_string = $_POST['query_string'];
if(isset($_POST['label2'])) {
    $consent_sms = 1;
    $consent_mail = 1;
}


$lp2leader = array(
   'studio'=>$studio,
   'first_name'=>$name,
   'last_name'=>$lastname,
   'email'=>$email_address,
   'phone'=>$phone,
   'notes'=>'',
   'query_string'=>$query_string,
   'consent_sms'=>$consent_sms,
   'consent_mail'=>$consent_mail
);

include '../inc.php';







foreach($_POST as $post_var) {
    echo($post_var) . "<br />";
}



?>