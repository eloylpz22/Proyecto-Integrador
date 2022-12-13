$(document).ready(function(){
    //evento click menu inicio
            $("#menuInicio").click(function(event){
            $("#divInicio").show("slow");
            $("#divFormulario").hide("slow");
            });
//evento  
    $("#menuUsuario").click(function(event){
        $("#divInicio").hide("slow");
        //cargar datos en el div Mostrar usuarios
        $("#divMostrarUsuarios").load("./php/mostrarUser.php");
        $("#divFormulario").show("slow");
        //$("#mostrarGrafica").load("./php/grafico.php");
        });
    //funcion del Boton agregar
    $("#btnAgregar").click(function(event){
        var nombre,edad,clave,accion,valorBoton;
        //guardamos los datos
        clave=$("#txtClave").val();
        nombre=$("#txtNombre").val();
        edad=$("#txtEdad").val();
        valorBoton=$("#btnAgregar").val();
     
        if(valorBoton=="agregar"){
            accion="agregarUsuario";
        }else{
            accion="editarUsuario";
        }
        //alert("ok0");
        //usamos ajax para el envio de los datos al servidor
        $.ajax({
            url:"./php/servidor.php",
            type:"GET",
            data:{clave:clave,nombre:nombre,edad:edad,accion:accion},
            success:function(respuestaServidor){
                //comparamos que el servidor regrese un 1
                if(respuestaServidor=="1"){
                    alertify.success("Accion exitosa");
                    $("#divMostrarUsuarios").load("./php/mostrarUser.php");
                    //$("#mostrarGrafica").load("./php/grafico.php");
                    limpiar();
                    $("#btnAgregar").val("agregar");
                    $("#btnAgregar").removeClass();
                    $("#btnAgregar").addClass("btn btn-success");
                    $("#btnAgregar").html("Agregar");
                    $("#txtClave").attr("readonly", "false");
                } else{
                    alert("No se registraron los datos")
                }
            }
        });
    });
});
function limpiar(){
    $("#txtClave").val("");
    $("#txtNombre").val("");
    $("#txtEdad").val("");     
    $("#txtClave").focus();     
}
function eliminar(id)
{
    //confirmar eliminacion
    alertify.confirm("¿Seguro de eliminar el registro con Id" + "?", function(respuesta){
       
        if(respuesta){
            $.ajax({
                url: "./php/servidor.php",
                type: "Get",
                data:{id:id,accion:"eliminarUsuario"},
                success: function(respuestaServidor)
                {
                    if(respuestaServidor==1){
                        alertify.success("Eliminación correcta");
                        $("#divMostrarUsuarios").load("./php/mostrarUser.php");
                        //$("#mostrarGrafica").load("./php/grafico.php");
                    }

                }
            });
        }
    });
}
function editar(id,clave,nombre,edad)
    {
        $("#txtClave").val(clave);
        $("#txtClave").attr("readonly", "true");
        $("#txtNombre").val(nombre);
        $("#txtEdad").val(edad);
        $("#btnAgregar").removeClass();
        $("#btnAgregar").val("Actualizar");
        $("#btnAgregar").addClass("btn btn-secondary");
        $("#btnAgregar").html("Actualizar datos");
    }