<?php

session_start();

if(isset($_SESSION['usuario'])){


    $id = isset($_POST['id'])? $_POST['id']: '';
    $nombre = isset($_POST['nombre'])? $_POST['nombre']: '';
    $precio = isset($_POST['precio'])? (float)$_POST['precio']: '';
    $cant = isset($_POST['cant'])? (int)$_POST['cant']: '';
    
    if(isset($_SESSION['carrito'][$id])){

        $_SESSION['carrito'][$id]['cant'] += $cant;

    }else{

        $_SESSION['carrito'][$id]['nombre'] = $nombre;
        $_SESSION['carrito'][$id]['precio'] = $precio;
        $_SESSION['carrito'][$id]['cant'] = $cant;

    }
    
    echo json_encode('Producto agregado al carrito');

}else{

    echo json_encode('false');
    session_destroy();

}

?>