const mongoose = require('mongoose');

// Define the schema for the blogdb model
const blogdbSchema = new mongoose.Schema({
    NOMBRE: String,
    COMENTARIO: String,
    FOTO: String
});

// Define the toJSON method for the blogdb schema
blogdbSchema.methods.toJSON = function() {
    const { __v, ...data } = this.toObject();
    return data;
};

// Create and export the blogdb model
module.exports = mongoose.model('blogdb', blogdbSchema);