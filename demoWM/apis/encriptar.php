<?php

$pass = isset($_POST['pass']) ? $_POST['pass'] : '';
$pass = hash('sha512', $pass);


    echo json_encode($pass);


?>