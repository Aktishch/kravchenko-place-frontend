<?php

$token = '1801197024:AAGOtZiy7ZdGKZOp2xsNePLdabtWXDj0y-c';
$chat_id = '179128970';
$txt = '--- Form --- %0A';

$name = ($_POST['name']);
$tel = ($_POST['tel']);
$email = ($_POST['email']);
$number = ($_POST['number']);
$select = ($_POST['select']);
$reviews = ($_POST['reviews']);

if ($name) {
    $txt .= 'Name: ' . $name . '%0A';
}

if ($tel) {
    $txt .= 'Telephone: ' . $tel . '%0A';
}

if ($email) {
    $txt .= 'Email: ' . $email . '%0A';
}

if ($number) {
    $txt .= 'Number: ' . $number . '%0A';
}

if ($select) {
    $txt .= 'Select: ' . $select . '%0A';
}

if ($reviews) {
    $txt .= 'Reviews: ' . $reviews . '%0A';
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>