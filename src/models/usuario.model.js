//importar las dependencias que ecsitamos usar 
import mongoose from "mongoose";

const Schema = mongoose.Schema;


//nos creamos nuestro esquema de datos que es lo que vamos a guardar en nuestra base de datos 

const usuarioSchema = new Schema({
nombreCompleto: {
    type: String, 
    required: true
},
correo:{
    type:String,
    required: true
},
contrasena:{
    type: String,
    required: true
}
});


//yo quiero enviar la plantilla a nuetra base de datos 
//crear nuestro modelo 


const usuarioModel = mongoose.model("usuario",usuarioSchema);
//exportamoe nuestro modelo 
export default usuarioModel;