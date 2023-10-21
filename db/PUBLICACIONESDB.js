var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var publicacionesdb = new Schema({ //se crea el esquema de la base de datos
    NOMBRE: String,
    INTERES: String,
    SABE: String,
    NUMERO: String,
    FOTO: String,
    FECHAACTUAL: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'personaP' // Referencia al modelo de usuario
    }
});

        publicacionesdb.methods.toJSON = function() {
            const { __v, ...data  } = this.toObject();
            return data;
        }

        
        module.exports = mongoose.model('PUBLICACIONESDB', publicacionesdb);

        