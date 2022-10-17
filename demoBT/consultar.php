<?php

$code = isset($_POST['consCode']) ? $_POST['consCode'] : '';

try{

    $conex = new PDO("mysql:host=localhost;dbname=u147693105_portfolio", 'u147693105_federicogs', 'Portfolio20102022');
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
