//importamos dependencias, lo que necesitemos para el funcionamiento del codigo 
import usuarioModel from "../models/usuario.model.js";


/*

->PETICIONES 
GET -> MUESTRA MIS USUARIOS
POST -> CREAR USUARIOS 
PUT -> ME ODIFICA MIS USUARIOS 
DELETE -> ELIMINA MIS USUARIOS

*/


// prueba inicial

// logica para mostrar usuarios 
export const getUsuario =async(req, res) => { 
   //manejo de errores con try y catch

   try{
    let usuarios = await usuarioModel.find();
    return res.send(usuarios);

   }catch(error){
    return res.json({error: "error al mostrar los datos" + error});

   }  
}

//logica para crear usuarios 

export const postUsuario = async(req, res) => {
    //manejo de errores con try y catch

    try{
        let datosUsuario = req.body; 
        let nuevoUsuario = await usuarioModel.create(datosUsuario);
        return res.json(nuevoUsuario);

    }catch(error){
        //para que me muestre un mensaje que me indique cual es el error
        return res.json({error: "error al crear al usuario", message:error.message});

    }
}

//logica para modificar usuarios por id
export const putUsuario =async(req, res) => {
    try{
        let datosModificar = req.body;
        let idModificar = req.params._id;

        await usuarioModel.findByIdAndUpdate(idModificar,datosModificar);
        return res.json({message:"usuario actualizado correctamente"});

    }catch(error){
         //para que me muestre un mensaje que me indique cual es el error
         return res.json({error: "error al crear al usuario", message:error.message});

    }
}


//logica para eliminar usuarios por id 
export const deleteUsuario =async(req, res) => { 
    try{
        let idEliminar = req.params._id;
        let usuarioEliminado = await usuarioModel.findByIdAndDelete(idEliminar);

        if(usuarioEliminado){
            return res.json({message: "usuario eliminado correctamente"});      

        } else{
            return res.json({message:"ups! no se pudo eliminar ese usuario"});
        }

    }catch(error){
         //para que me muestre un mensaje que me indique cual es el error
         return res.json({error: "error al eliminar el usuario", message:error.message});


    }



} 
