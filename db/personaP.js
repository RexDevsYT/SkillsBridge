const mongoose = require('mongoose');

// Define the schema for the personaP model
const personaPSchema = new mongoose.Schema({
    NOMBRE: String,
    APELLIDO: String,
    EMAIL: String,
    GENERO: String,
    FECHAN: String,
    TIPOUSUARIO: String,
    PASSWORD: String,
    FOTO: String,
});

// Define the toJSON method for the model
personaPSchema.methods.toJSON = function () {
    const { __v, PASSWORD, ...data } = this.toObject();
    return data;
};

// Create and export the personaP model
module.exports = mongoose.model('personaP', personaPSchema);
  
