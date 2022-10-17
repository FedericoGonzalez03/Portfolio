<?php
    try{

        $conex = new PDO("mysql:host=localhost;port=3306;dbname=DB_prueba",'root','');
        $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

        $res = $conex->query('SELECT * FROM clientes');
        $datas = [];

        while($item = $res->fetch(PDO::FETCH_OBJ)){
        
            $datas[] = [
                'id' => $item->id,
                'nombreFant' => $item->nombreFantasia,
                'razonSocial' => $item->razonSocial,
                'rut' => $item->rut,
                'telefono' => $item->telefono,
                'contacto' => $item->contacto,
                'direccion' => $item->direccion
            ];

    
        }
        echo json_encode($datas);


    }catch (PDOException $error){
        echo $error->getMessage();
        die();
    }


?>
