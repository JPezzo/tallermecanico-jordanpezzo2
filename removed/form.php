<?php

// Variables
$nombre = $_POST['name'];
$correo = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['textarea'];

// Mi mail
$mensaje2 = "El mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje2 .= "Su email es " . $correo . " \r\n";
$mensaje2 .= "Su teléfono es " . $telefono . " \r\n";
$mensaje2 .= "El título del mensaje es " . $titulo . " \r\n";
$mensaje2 .= "Mensaje: " . $_POST['textarea'] . " \r\n";
$mensaje2 .= "Enviado el " . date('d/m/Y', time());

$para = 'taller@mecanicajorge.com';
$asunto = 'Contacto desde formulario de mecanicajorge.com';

// Función mail

mail($para, $asunto, utf8_decode($mensaje2), $header);

// Redirección por envío de form

header('Location:../index.html');






?>