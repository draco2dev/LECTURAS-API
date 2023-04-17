const express = require("express");

//importar esquemas
const userSchema = require("../models/user");

//const dataSchema = require("../models/data");

const router = express.Router();

//Crear Usuario
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Obtener todos los usuarios 
router.get("/users", (req, res) => {
    //const user = userSchema(req.body);
     userSchema
    .find() //obtener todos los usuarios - find (encontar)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//encontar un usuario especifico 
router.get("/users/:id", (req, res) => {
    //parametro
    const { id } = req.params;
    //const user = userSchema(req.body);
     userSchema
    .findById(id) //obtener todos los usuarios - find (encontar)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Actualizar un usuario especifico 
router.put("/users/:id", (req, res) => {
    //parametro
    const { id } = req.params;
    //const user = userSchema(req.body);
    //estraer datos a actualizar
    const {name, age, email } = req.body;
     userSchema
    .updateOne({ _id: id}, { $set: {name, age, email} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Eliminar un usuario especifico 
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;