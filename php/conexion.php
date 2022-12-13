<?php
//$variable = "Alex";
//$Valor2 = 2
    $server="localhost";
    $user="root";
    $password = "00000000";
    $db="sistemas502"; 

    //creamos la conexion
    $conexion = new mysqli($server,$user,$password,$db) or die ("Error en la conexión".$conexion->error);
    $conexion->set_charset("utf8");
?>