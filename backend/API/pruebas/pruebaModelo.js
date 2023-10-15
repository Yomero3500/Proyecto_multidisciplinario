const mongoose = require("mongoose");
const Usuario = require("../models/usuario.model");
const Cliente = require("../models/cliente.model")

(async () => {
  await mongoose.connect("mongodb://127.0.0.1/Cenaduria-Ardon");

  const newCliente = await Cliente.create({
    Cliente_id: 9612231234,
    nombre: "Juan Jose",
    telefono: 9612231234,
    referencia: "1234sadsad5678"
  });

  console.log(newCliente);
});