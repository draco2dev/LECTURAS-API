const express = require("express");

//importar esquemas
const datasSchema = require("../models/datas");

const router = express.Router();

//Crear Medicion (datas)
router.post("/datas", (req, res) => {
    const datas = datasSchema(req.body);
    datas
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Obtener todos los usuarios 
router.get("/datas", (req, res) => {
    //const user = userSchema(req.body);
    datasSchema
    .find() //obtener todos los usuarios - find (encontar)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//encontar un usuario especifico 
router.get("/datas/:id", (req, res) => {
    //parametro
    const { id } = req.params;
    //const user = userSchema(req.body);
    datasSchema
    .findById(id) //obtener todos los usuarios - find (encontar)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Actualizar un usuario especifico 
router.put("/datas/:id", (req, res) => {
    //parametro
    const { id } = req.params;
    //const user = userSchema(req.body);
    //estraer datos a actualizar
    const {intencidad, potencia } = req.body;
    datasSchema
    .updateOne({ _id: id}, { $set: {intencidad, potencia} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Eliminar un usuario especifico 
router.delete("/datas/:id", (req, res) => {
    const { id } = req.params;
    datasSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;