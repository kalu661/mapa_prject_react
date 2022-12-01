// api.js

// Importamos los paquetes para crear la ruta
const express = require("express");

// La clase Router permite crear rutas modulares.
const router = express.Router();

// Importamos el archivo del controlador
const demo = (req, res) => {
	console.log(req.body);
	res.status(200).send("ok");
};

// Definimos la ruta para el método GET y añadimos como middleware la función del controlador
router.post("/", demo);

// Exportamos el código
module.exports = router;
