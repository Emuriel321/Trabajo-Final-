
//verificar conexion html 
console.log("hola soy ema ema");

// funcion para obtener los datos de mi base de dato 
const mostrarUsuarios = async () => {
    try{
const respuesta = await fetch("http://localhost:3000/api/obtenerUsuario");

const usuarios = await respuesta.json();
console.log(usuarios);
mostrarTabla(usuarios);
    }catch(error){
console.error("error al obtener los usuarios", error);
    }
}
//funcion para crear una fila en mi tabla porcada usuario 
async function mostrarTabla(usuarios){
const tabla = document.getElementById("miTabla");
tabla.innerHTML = "";

await usuarios.forEach(usuario => {
    //por cada usuario me va a crear una fila en la tabla 

    tabla.innerHTML += `
    
    <tr>
            <td>${usuario.nombreCompleto}</td>
            <td>${usuario.correo}</td>
            <td>
                <button type="button" class="btn btn-danger" id="${usuario._id}"><i class="bi bi-trash"><i>Eliminar</button>
            </td>
    </tr>
    `
 const button = document.getElementById(`${usuario._id}`);
 console.log(button)
button.addEventListener("click", e=>{
    console.log(button)
   if(button){
    eliminarUsuario(button)
   } 
})
})

}
mostrarUsuarios();



//funcion para eliminar usuario por id 
function eliminarUsuario(button){
    console.log("eliminando el usuario con el id"+button.id);

const idUsuarioEliminar = button.id; 
console.log(idUsuarioEliminar);


fetch(`http://localhost:3000/api/eliminarUsuario/${idUsuarioEliminar}` , {method:"DELETE"}).then(
    response => {
        if(!response.ok){
            console.error("error! no se pudo eliminar usuario");

        }else{

        alert("usuario eliminado correctamente"); 
        mostrarUsuarios();
        }
    }).catch(error => {
        console.log("Error al emilinar usuario", error);
    })
};