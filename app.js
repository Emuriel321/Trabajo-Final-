//1. importsar las dependencias que vamos a usar 
import cors from "cors";
import express from "express"; 
import path from "path"; 
import dotenv from "dotenv";
import conexionMongo from "./src/config/baseDatos.js";
import suarioRouter from "./src/routes/usuario.routes.js"
import usuarioRouter from "./src/routes/usuario.routes.js";



//2. configurar nuestro servidor 
const app = express(); 
app.use(cors());
app.get('/', (req, res) => {
    res.json({ message: 'Hola mundo!' });
  });
const puerto = 3000; 

//2.1 configurar las variables entorno
dotenv.config();

conexionMongo();


//3. establecer la conexion con nuestro front index html
const rutaPublica =path.join(process.cwd(), "public"); 
app.use(express.json());
app.use(express.static(rutaPublica));


app.use("/api", usuarioRouter);

//especificamos que vamos hacer en nuestro index 
app.get("/", (req,res) => {
res.sendFile(path.join(rutaPublica, "index.html"))
});

//inicializamos nuestro servidor 

app.listen(puerto, () => {
    console.log(`El servidor esta escuchando en http://localhost:${puerto}`);
});


