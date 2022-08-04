<?php

try {

    $conex = new PDO("mysql:host=localhost;port=3306;dbname=distribuidoreswm", 'root', '');
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $res = $conex->query('SELECT * FROM productos');
    $datas = [];

    while ($item = $res->fetch(PDO::FETCH_OBJ)) {

        $datas[] = [
            'id' => $item->id,
            'codigo' => $item->codigo,
            'nombre' => $item->nombre,
            'descripcion' => $item->descripcion,
            'categoria' => $item->categoria,
            'medida' => $item->medida,
            'precio' => $item->precio,
            'imagen' => $item->imagen
        ];
    }
    echo json_encode($datas);
} catch (PDOException $error) {
    echo $error->getMessage();
    die();
}

?>