<?php

$id = $_POST['phpId'];
$saved = $_POST['inpCode'];

try{

    $conex = new PDO("mysql:host=localhost;dbname=u147693105_portfolio", 'u147693105_federicogs', 'Portfolio20102022');
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    echo json_encode('connected');
    $pdo = $conex->prepare("UPDATE tio SET producto='$saved' WHERE id='$id'");
    $pdo->execute() or die(print($pdo->errorInfo()));
}catch (PDOException $error){
    echo $error->getMessage();
    die();
}


?>
