<?php 


    $user = $_POST['user'];
    $password = $_POST['password'];

    if ($user == 'Admin' && $password == '@dm1n'){

        echo json_encode("TRUE"); 

    }else {

        echo json_encode("Datos incorrectos");

    }
