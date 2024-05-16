const express = require("express");
const ConectarBD = require("./config/db");
const cors = require ("cors");

//  creamos el servidor 
const app = express();
//configuramos el puerto en una variable
const PORT = process.env.PORT || 5000;
// conectar base de datos
ConectarBD();
// habilitar cors
app.use(cors());
// habilitar express json
app.use(express.json({ extended : true}));

// creamos las rutas del proyecto
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/clientes", require("./routes/clientes"));


//configuracion del servidor
app.listen(PORT, () =>{
    console.log("El servidor esta conectado ");
});