

<?php
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];
$tel = $_POST['tel'];
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$text = htmlspecialchars($text);
$tel = htmlspecialchars($tel);
$name = urldecode($name);
$email = urldecode($email);
$text = urldecode($text);
$tel = urldecode($tel);
$fio = trim($fio);
$email = trim($email);
$text = trim($text);
$tel = trim($tel);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("admin@xn--b1ali0a3coj.xn--p1ai", "Заявка с сайта", "Имя: ".$name.". E-mail: ".$email.". Тел.: " .$tel.". Сообщение: ".$text,"From: admin@xn--b1ali0a3coj.xn--p1ai \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>