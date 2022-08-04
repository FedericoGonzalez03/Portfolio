<?php

session_start();

if(isset($_SESSION['usuario'])){


    $id =  $_POST['id'];
    
    if(isset($_SESSION['carrito'][$id])){

        unset($_SESSION['carrito'][$id]);

    }

    echo json_encode('Producto eliminado del carrito');

}else{

    echo json_encode('false');
    session_destroy();

}

?>