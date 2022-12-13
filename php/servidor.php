<?php
    include "conexion.php";
    $accion = $_GET["accion"];
    //evaluamos la accion
    switch($accion){
        case 'agregarUsuario':
        //Recinimos los datos del formulario
        $clave=$_GET["clave"];
        $nombre=$_GET["nombre"];
        $edad=$_GET["edad"];
        $frecuencia=$_GET["frecuencia"];
        $oxigenacion=$_GET["oxigenacion"];
        $sql="insert into usuarios values (0,'$clave','$nombre','$edad','$frecuencia','$oxigenacion')";
        //ejecutar sentencia
        $ejecutarSQL=$conexion->query($sql) or die ("Error");
        //echo $sql;
        // comprobamos is la conexion es correcta
        if($ejecutarSQL){
            echo "1";

        }else{
            echo "0";
        }
        break;
        case 'eliminarUsuario':
        //Recinimos los datos del formulario
        $id=$_GET["id"];
        $sql="delete from usuarios where id='$id'";
        //ejecutar sentencia
        $ejecutarSQL=$conexion->query($sql);
        // comprobamos is la conexion es correcta
        if($ejecutarSQL){
            echo "1";

        }else{
            echo "0";
        }
        break;
        case 'editarUsuario':
            //Recinimos los datos del formulario
            $clave=$_GET["clave"];
            $nombre=$_GET["nombre"];
            $edad=$_GET["edad"];
            $sql="update usuarios set nombre='$nombre', edad='$edad' where clave='$clave'";
            //ejecutar sentencia
            $ejecutarSQL=$conexion->query($sql) or die ("Error");
            //echo $sql;
            // comprobamos is la conexion es correcta
            if($ejecutarSQL){
                echo "1";
    
            }else{
                echo "0";
            }
            break;
    }
?>