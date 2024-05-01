//verificar connexion con html
console.log("hola soy registro");
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", e=>{
    e.preventDefault()
});
//crear mi funcion para registro 

const registrarUsuario = async () => {
    //PENDIENTE obtener los datos de nuestro formulario 

    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    console.log(nombreCompleto, correo, contrasena);

    //crear un objeto con los datos del usuario 

    const datosUsuario = {
        nombreCompleto,
        correo,
        contrasena,
    }
    console.log(datosUsuario);

    //PENDINETE hacer la peticion para crear usuario en nuetra base de datos 
    try {
        // PENDIENTE aca estamos creando el usuario en la base de datos 
        const respuesta = await fetch("http://localhost:3000/api/crearUsuario",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datosUsuario)

            }
        );
        const nuevoUsuario = await respuesta.json();
        console.log("usuario creado exitosamente", nuevoUsuario);
        if(nuevoUsuario.correo){
            alert("registrado exitosamente");
            window.location.href = "./ingreso.html"
        }


    } catch (error) {
        console.error("error al registrar usuario" +error);
    }



}