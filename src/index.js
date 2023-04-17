const express = require('express');
const mongoose = require("mongoose");
//Variable de ambiente 
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

//routes
app.get('/', (req, res) => {
    res.send("Vienvenido a mi servidor API");
});

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Conectado a MongoDB Atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));
