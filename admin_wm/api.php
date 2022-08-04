<?php

$codigo = isset($_POST['codigo']) ? $_POST['codigo'] : '';
$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
$descripcion = isset($_POST['descripcion']) ? $_POST['descripcion'] : '';
$cat = isset($_POST['cat']) ? $_POST['cat'] : '';
$medida = isset($_POST['medida']) ? $_POST['medida'] : '';
$precio = isset($_POST['precio']) ? $_POST['precio'] : '';
$imagen = isset($_POST['imagen']) ? $_POST['imagen'] : '';
try {

    $conex = new PDO("mysql:host=localhost;dbname=u147693105_distwm", 'u147693105_wm', 'distWM2022');
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    $pdo = $conex->prepare("INSERT INTO productos(codigo, nombre, descripcion, categoria, medida, precio, imagen) VALUES('$codigo','$nombre','$descripcion', '$cat','$medida','$precio','$imagen')");
    $pdo->execute() or die(print($pdo->errorInfo()));
} catch (PDOException $error) {

    echo $error->getMessage();
    die();
}
?>