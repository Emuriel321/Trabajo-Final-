import mongoose from "mongoose";


const conexionMongo = async() => {


await mongoose.connect(process.env.BD_URL,{})

try{
    console.log("conexion exitosa");
} catch(error){
    console.log("error de conexion:", error.message);
}

}


export default conexionMongo;