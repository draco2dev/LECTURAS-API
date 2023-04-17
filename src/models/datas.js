const mongoose = require("mongoose");

const datasSchema = mongoose.Schema({
    
intencidad: {
    type: Number,
    require: true
},
potencia: {
    type: Number,
    require: true
}
});

module.exports = mongoose.model('Datas', datasSchema);