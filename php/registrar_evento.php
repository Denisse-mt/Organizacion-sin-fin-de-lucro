<?php
include 'Event.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $descripcion = htmlspecialchars($_POST['descripcion']);
    $tipo = htmlspecialchars($_POST['tipo']);
    $lugar = htmlspecialchars($_POST['lugar']);
    $fecha = htmlspecialchars($_POST['fecha']);
    $hora = htmlspecialchars($_POST['hora']);
    
    $evento = new Event($descripcion, $tipo, $lugar, $fecha, $hora);
    
    // Aquí puedes guardar el evento en una base de datos o en un archivo
    echo "Evento registrado: <br>";
    echo "Descripción: " . $evento->getDescripcion() . "<br>";
    echo "Tipo: " . $evento->getTipo() . "<br>";
    echo "Lugar: " . $evento->getLugar() . "<br>";
    echo "Fecha: " . $evento->getFecha() . "<br>";
    echo "Hora: " . $evento->getHora() . "<br>";
}
?>
