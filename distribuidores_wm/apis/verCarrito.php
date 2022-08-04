<?php

session_start();

if(isset($_SESSION['carrito'])){

    $data = [];

    foreach($_SESSION['carrito'] as $indice => $arr){

        foreach($arr as $key => $value){
            $data[$indice][$key] = $value;
            
        }
        
    }
    echo json_encode($data);


}

?>