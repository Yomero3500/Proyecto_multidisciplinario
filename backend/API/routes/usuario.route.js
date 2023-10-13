const router = require("express").Router();
const Usuario = require("../models/usuario.model");
const Cliente = require("../models/cliente.model");

router.get("/", async (req, res) => {
  try {
    const usuario = await Usuario.find();
    res.json(usuario);
    console.log(usuario);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

router.post("/usuario", async (req, res) => {
  try {
    const newUser = await Usuario.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

router.put("/:nombre", (req, res) => {
  try {
    const { nombre } = req.params;
    const { usuario, contraseña } = req.body;
    Usuario.updateOne(
      {
        nombre: nombre,
      },
      {
        $set: { usuario: usuario, contraseña: contraseña },
      }
    )
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

router.put("/todo/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, rol, telefono, usuario, contraseña } = req.body;
    Usuario.updateMany(
      {
        _id: id,
      },
      {
        $set: {
          nombre: nombre,
          rol: rol,
          telefono: telefono,
          usuario: usuario,
          contraseña: contraseña,
        },
      }
    )
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

router.put("/remplazar/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, rol, telefono, usuario, contraseña } = req.body;
    Usuario.replaceOne(
      {
        _id: id,
      },
      {
        nombre: nombre,
        rol: rol,
        telefono: telefono,
        usuario: usuario,
        contraseña: contraseña,
      }
    )
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

router.delete("/:usuarioId", async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.usuarioId);
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});


/* Clientes */
router.get("/clientes", async (req, res) => {
  try {
    const cliente = await Cliente.find();
    res.json(cliente);
    console.log(cliente);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

router.post("/clientes", async (req, res) => {
  try {
    const newCliente = await Cliente.create(req.body);
    res.json(newCliente);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

router.put("/clientes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, telefono, referencia } = req.body;
    Cliente.updateMany(
      {
        Cliente_id: id,
      },
      {
        $set: {
          nombre: nombre,
          telefono: telefono,
          referencia: referencia,
        },
      }
    )
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

router.delete("/clientes/:clienteId", async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndDelete(req.params.clienteId);
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});
module.exports = router;

