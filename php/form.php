<?php

// Variables
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$titulo = $_POST['titulo'];
$mensaje = $_POST['mensaje'];

// Mi mail
$mensaje = "Nombre de quien envió el mensaje " . $nombre . "\r\n";
$mensaje = "Apellido de quien envió el mensaje " . $apellido . "\r\n";
$mensaje .= "Su email es " . $correo . "\r\n";
$mensaje .= "Su teléfono es " . $telefono . "\r\n";
$mensaje .= "El título del mensaje es " . $titulo . "\r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . "\r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$destinatario = 'taller@mecanicajorge.com';
$asunto = 'Contacto desde formulario de mecanicajorge.com';

// Función mail

mail($destinatario, $asunto, utf8_decode($mensaje), $header);

// Redirección por envío de form

// header('Location:index.html');






?>