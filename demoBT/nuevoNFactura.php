<?php

    
try{

    $conex = new PDO("mysql:host=localhost;port=3306;dbname=DB_prueba",'root','');
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    echo json_encode('connected');
    $pdo2 = $conex->prepare('INSERT INTO `factn`(`numero`) VALUES ("[value-1]")');
    $pdo2->execute() or die(print($pdo->errorInfo()));



}catch (PDOException $error){
    echo $error->getMessage();
    die();
}


?>