<?php

session_start();

$email = isset($_POST['email']) ? $_POST['email'] : '';
$pass = isset($_POST['pass']) ? $_POST['pass'] : '';
$pass = hash('sha512', $pass);

try {

    $conex = new PDO("mysql:host=localhost;dbname=u147693105_portfolio", 'u147693105_federicogs', 'Portfolio20102022');
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    $verificarLogin = $conex->query("SELECT * FROM usuarioswm WHERE email='$email' and pass='$pass'");
    if($verificarLogin->fetchColumn() > 0 ){
        $_SESSION['usuario'] = $email;
        echo json_encode('Sesion iniciada');
        exit();
    }else{
        echo json_encode('Datos incorrectos');
        exit();
    };


} catch (PDOException $error) {

    echo $error->getMessage();
    die();
}
