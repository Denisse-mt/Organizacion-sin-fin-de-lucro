<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $monto = htmlspecialchars($_POST['monto']);
    
    // Simular el proceso de donación
    echo "Gracias, $nombre, por tu generosa donación de \$" . number_format($monto, 2) . ". Tu apoyo es fundamental para nuestra causa.";
    
    // Aquí podrías guardar la información en una base de datos o enviarla por email
}
?>