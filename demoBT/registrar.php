<?php

$saved = isset($_POST['inpCode']) ? $_POST['inpCode'] : '';
    
try{

    $conex = new PDO("mysql:host=localhost;port=3306;dbname=DB_prueba",'root','');
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    echo json_encode('connected');
    $pdo = $conex->prepare('INSERT INTO tio(producto) VALUES(?)');
    $pdo->bindParam(1, $saved);
    $pdo->execute() or die(print($pdo->errorInfo()));


}catch (PDOException $error){
    echo $error->getMessage();
    die();
}


?>