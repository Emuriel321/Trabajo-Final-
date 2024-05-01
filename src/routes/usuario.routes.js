//importamps las dependencias 

import express from "express";
import { getUsuario,postUsuario,putUsuario,deleteUsuario} from "../controllers/usuario.controller.js";

//definir una variable que me va contener toda la ruta 

const usuarioRouter = express.Router();

// definimos la ruta especifica
usuarioRouter.get("/obtenerUsuario" ,getUsuario);

// ruta para crear usuarios 

usuarioRouter.post("/crearUsuario" , postUsuario);

// ruta parta modificar usuario por su id identificador unico 
usuarioRouter.put("/modificarUsuario/:_id", putUsuario);

// ruta para eliminae usuarios por su id 
usuarioRouter.delete("/eliminarUsuario/:_id", deleteUsuario);

//exportamos las rutas 

export default usuarioRouter; 


