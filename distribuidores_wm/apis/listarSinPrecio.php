<?php
$file = $_POST['cat'];
try {

    $conex = new PDO("mysql:host=localhost;dbname=u147693105_distwm", 'u147693105_wm', 'distWM2022');
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    if($file == null){
        $res = $conex->query('SELECT * FROM productos');
    }else{
        $res = $conex->query('SELECT * FROM productos WHERE categoria="'.$file.'"');
    }
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

    $sortArray = array();

    foreach($datas as $art){
        foreach($art as $key=>$value){
            if(!isset($sortArray[$key])){
                $sortArray[$key] = array();
            }
            $sortArray[$key][] = $value;
        }
    }
    $orderby = "precio";
    array_multisort($sortArray[$orderby],SORT_ASC,$datas);

    $page = 0;
    $prodsPerActualPage = 0;
    $prods = [];
    foreach($datas as $data){
        $prodsPerActualPage++;
        if($page == 0){
            $prods[$page] .= 
    '                  <div class="card text-center">
                            <span class="visually-hidden content">'.$data['categoria'].' '.$data['nombre'].' '.$data['descripcion'].'</span>
                            <img class="card-img-top" src="'.$data['imagen'].'" alt="'.$data['nombre'].'" style="object-fit:cover;height:100px;">
                            <div class="card-body">
                                <h5 class="productos card-title">'.$data['nombre'].'</h5>
                                <p class="card-text" style="font-size:14px;">'.$data['descripcion'].'</p>
                            </div>
                            <div class="card-footer">
                                <p class="card-text text-danger" style="font-size:14px;">Inicia sesión para ver más detalles.</p>
                            </div>
                        </div>       
';
        }else{
            $prods[$page] .= 
    '                  <div class="card text-center">
                            <span class="visually-hidden content">'.$data['categoria'].' '.$data['nombre'].' '.$data['descripcion'].'</span>
                            <img class="card-img-top" src="'.$data['imagen'].'" alt="'.$data['nombre'].'" style="object-fit:cover;height:100px;">
                            <div class="card-body">
                                <h5 class="productos card-title">'.$data['nombre'].'</h5>
                                <p class="card-text" style="font-size:14px;">'.$data['descripcion'].'</p>
                            </div>
                            <div class="card-footer">
                                <p class="card-text text-danger" style="font-size:14px;">Inicia sesión para ver más detalles.</p>
                            </div>
                        </div>       
';
        }
        if($prodsPerActualPage == 36){
            $page++;
            $prodsPerActualPage = 0;
        }
    }
    echo json_encode($prods);
} catch (PDOException $error) {
    echo $error->getMessage();
    die();
}
