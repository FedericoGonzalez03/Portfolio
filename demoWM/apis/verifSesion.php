<?php

session_start();

if(isset($_SESSION['usuario'])){
    echo json_encode('true');
}else{
    echo json_encode('false');
    session_destroy();
}

?>