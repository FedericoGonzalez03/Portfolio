<?php

try {

    $conex = new PDO("mysql:host=localhost;dbname=u147693105_distwm", 'u147693105_wm', 'distWM2022');
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
    $prods = '';
    foreach($datas as $data){
        
        $prods .=  
        '           <div class="card text-center">
                        <img class="card-img-top" src="'.$data['imagen'].'" alt="'.$data['nombre'].'" style="object-fit:cover;height:100px;">
                        <div class="card-body">
                            <h5 class="productos card-title">'.$data['nombre'].'</h5>
                            <span class="text-primary" style="font-weight:700;">$$'.$data['precio'].' + IVA</span>
                            <p class="card-text" style="font-size:14px;">'.$data['descripcion'].'</p>
                        </div>
                        <div class="card-footer">
                            <form action="#" method="POST" id="'.$data['id'].'">
                                <input hidden type="text" name="id" value="'.$data['id'].'">
                                <input hidden type="text" name="nombre" value="'.$data['nombre'].'">
                                <input hidden type="number" name="precio" value="'.$data['precio'].'">
                                <input type="number" name="cant" class="p-0 text-center mx-0 d-inline form-control w-25 cant align-middle" min="1" value="1">
                                <input type="submit" onclick="agregarCarrito('.$data['id'].')" class="mx-0 btn btn-primary agregarCarrito" value="Agregar" style="font-size:14px;">
                            </form>
                        </div>
                    </div>
                    
                    ';
    }
    echo $prods;
} catch (PDOException $error) {
    echo $error->getMessage();
    die();
}

?>