<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Подключаем файлы PHPMailer
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

// Получаем данные из запроса
$data = json_decode(file_get_contents("php://input"));

$mail = new PHPMailer(true);

try {
    // Настройки SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.qq.com'; // Укажите SMTP-сервер для QQ
    $mail->SMTPAuth = true;
    
    // Ваш email для отправки
    $mail->Username = 'code@qq-my.pp.ua'; // Ваш email
    $mail->Password = '29Mar@00'; // Ваш пароль
    
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587; // Порт для TLS

    // Получатели
    $mail->setFrom('code@qq-my.pp.ua', 'QQ-my'); // Ваш email и имя отправителя
    $mail->addAddress('admin@qq-my.pp.ua'); // Адрес, на который отправляется почта

    // Содержимое
    $mail->isHTML(true);
    $mail->Subject = 'Заказ №' . uniqid();
    $mail->Body    = 'Клиент: ' . $data->name . '<br>Заказал: ' . $data->orderDetails . '<br>Почта клиента: ' . $data->email;

    $mail->send();
    echo 'Сообщение отправлено';
} catch (Exception $e) {
    echo "Сообщение не может быть отправлено. Ошибка: {$mail->ErrorInfo}";
}
?>