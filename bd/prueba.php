<?php
// Recibir datos del formulario
$fecha = $_POST['fecha'];
$nombreUsuario = $_POST['nombreUsuario'];
$nacionalidad = $_POST['nacionalidad'];
$tipoDocu = $_POST['tipoDocu'];
$numDocu = $_POST['numDocu'];
$numlector = $_POST['numlector'];

// Crear un array asociativo para los datos
$datos = array(
    'Fecha' => $fecha,
    'Encargado' => $nombreUsuario,
    'Pais' => $nacionalidad,
    'Documento' => $tipoDocu,
    'Numero Documento' => $numDocu,
    
);

// URL de tu script de Google Apps Script
$url = 'https://script.google.com/macros/s/AKfycbwKx1o1icHpTk5E7IpU3E-FggCQ5w_SmjbbTDCAHE0/dev';

// Configurar la solicitud HTTP con cURL
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $datos);

// Ejecutar la solicitud y obtener la respuesta
$respuesta = curl_exec($ch);

// Cerrar la conexión cURL
curl_close($ch);

// Manejar la respuesta (puedes personalizar según tu lógica)
if ($respuesta === false) {
    echo 'Error al enviar los datos al script de Google Apps Script.';
} else {
    echo '<script>';
    echo 'history.pushState(null, null, location.href);';
    echo 'window.onpopstate = function() { history.go(1); };';
    echo '</script>';

    header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
    header('Cache-Control: post-check=0, pre-check=0', false);
    header('Pragma: no-cache');

    header('refresh:5;url=../pages/usuarios/agregarVisitas.html'); // Redirige a la página principal después de 5 segundos
    echo '¡Los datos se enviaron correctamente! Serás redirigido en 5 segundos. Si no, haz clic <a href="../web/formularioVisitantes.php">aquí</a>.';
    exit;
}
?>
