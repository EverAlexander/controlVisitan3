<?php
    // Datos de conexión a la base de datos
    $host = "localhost";
    $username = "root";
    $password = "63145881";
    $dbname = "controlbin";

    // Crear conexión a la base de datos
    $conn = new mysqli($host, $username, $password, $dbname);

    // Verificar conexión
    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }
?>
