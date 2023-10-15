const express = require("express");
const mongoose = require("mongoose");
const rutasUsuarios = require("./routes/usuario.route");
const app = express();
app.use(express.json());
mongoose.set("strictQuery", false);

let port = 3006;
app.use("/api", rutasUsuarios);

app.listen(port, () => console.log("Escuchando en el puerto ", port));
//conexion
mongoose
  .connect("mongodb://127.0.0.1/Cenaduria-Ardon")
  .then(() => console.log("conectado"))
  .catch(() => console.log("Error"));

module.exports = app;
