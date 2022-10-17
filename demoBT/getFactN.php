<?php

try{
    $conex = new PDO("mysql:host=localhost;port=3306;dbname=DB_prueba",'root','');
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    $res = $conex->query('SELECT MAX(`numero`) as numero FROM factn');
    $data = $res->fetch(PDO::FETCH_OBJ)->numero;

    echo json_encode($data);

}catch (PDOException $error){
    echo $error->getMessage();
    die();
}

?>