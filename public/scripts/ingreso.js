const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", e => {
    e.preventDefault()
});
const iniciarSesion = async () => {
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    console.log(correo, contrasena)
    try {
        const obtenerUsuario = await fetch("http://localhost:3000/api/obtenerUsuario")
        const usuarios = await obtenerUsuario.json()
        const usuarioRegistrado = usuarios.find(usuario => usuario.correo == correo && usuario.contrasena == contrasena);
        if(usuarioRegistrado){
            alert("ingreso exitoso");
            window.location.href = "./index.html"

        }else{
            alert("no existe el usuario");
            window.location.href = "./registro.html"
     
        }

    } catch(error) {
        console.log("hubo un error"+ error)

    }

}