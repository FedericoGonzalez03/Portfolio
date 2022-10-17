<?php

$code = isset($_POST['consCode']) ? $_POST['consCode'] : '';

try{

    $conex = new PDO("mysql:host=localhost;port=3306;dbname=DB_prueba",'root','');
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $res = $conex->query('SELECT * FROM tio');
    $datas = [];

    while($item = $res->fetch(PDO::FETCH_OBJ)){
        
        $datas[] = [
            'id' => $item->id,
            'producto' => $item->producto
        ];

    
    }
    echo json_encode($datas);


}catch (PDOException $error){
    echo $error->getMessage();
    die();
}


?>
