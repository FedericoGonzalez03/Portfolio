<?php

try{
    $conex = new PDO("mysql:host=localhost;dbname=u147693105_portfolio", 'u147693105_federicogs', 'Portfolio20102022');
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