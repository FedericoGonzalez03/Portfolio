<?php

    $nombreFant = isset($_POST['nombreFant']) ? $_POST['nombreFant'] : '';
    $razonSocial = isset($_POST['razonSocial']) ? $_POST['razonSocial'] : '';
    $rut = isset($_POST['rut']) ? $_POST['rut'] : '';
    $telefono = isset($_POST['telefono']) ? $_POST['telefono'] : '';
    $contacto = isset($_POST['contacto']) ? $_POST['contacto'] : '';
    $direccion = isset($_POST['direccion']) ? $_POST['direccion'] : '';


    try{

        $conex = new PDO("mysql:host=localhost;port=3306;dbname=DB_prueba",'root','');
        $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
        echo json_encode('connected');
        $pdo = $conex->prepare('INSERT INTO clientes(nombreFantasia,razonSocial,rut,telefono,contacto,direccion) VALUES(?,?,?,?,?,?)');
        $pdo->bindParam(1, $nombreFant);
        $pdo->bindParam(2, $razonSocial);
        $pdo->bindParam(3, $rut);
        $pdo->bindParam(4, $telefono);
        $pdo->bindParam(5, $contacto);
        $pdo->bindParam(6, $direccion);
        $pdo->execute() or die(print($pdo->errorInfo()));


    }catch (PDOException $error){
        echo $error->getMessage();
        die();
    }


?>