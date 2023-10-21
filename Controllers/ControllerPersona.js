var Item = require('../db/personaP');
var cookieParser = require('cookie-parser');
// se encriptan las contraseñas

//se encriptan la contraseñas
exports.Login = function(req, res) {
    console.log('EMAIL:', req.body.EMAIL);
    console.log('PASSWORD:', req.body.PASSWORD);

    Item.find({ EMAIL: req.body.EMAIL, PASSWORD: req.body.PASSWORD }, function(err, usuarios) {
        if (err) {
            res.send(err);
        } else {
            if (usuarios.length > 0) {
                console.log("Usuarios encontrados:", usuarios);

                // Establecer la cookie aquí
                const userId = usuarios[0]._id;
                res.cookie('user_id', userId);

                // Enviar los datos del usuario y la foto de perfil en la respuesta
                res.json({ usuario: usuarios[0]});
            } else {
                res.status(401).json({ error: 'Credenciales incorrectas' });
            }
        }
    });
}

exports.Logout = function(req, res) {
    // Borrar la cookie estableciendo su fecha de vencimiento en el pasado
    res.clearCookie('user_id');
    // Redirigir al usuario a la página de inicio de sesión u otra página de tu elección
    res.redirect('/Login'); // Reemplaza '/Login' con la URL de tu página de inicio de sesión
}


exports.GuardarP = function(req, res) {
    Item.create({
        NOMBRE: req.body.NOMBRE, 
        APELLIDO: req.body.APELLIDO,
        EMAIL: req.body.EMAIL,
        GENERO: req.body.GENERO,
        FECHAN: req.body.FECHAN,
        TIPOUSUARIO: req.body.TIPOUSUARIO,
        PASSWORD: req.body.PASSWORD, 
        FOTO: req.body.FOTO
    }, function(err, item) {
        if (err) {
            return res.send(err); 
        } 


        res.json(item); 
    });
};



exports.ModificarP = function(req,res){ //funcion de modificar los datos
    Item.update({_id:req.body._id},{$set:{ 
        NOMBRE: req.body.NOMBRE, 
        APELLIDO: req.body.APELLIDO,
        EMAIL: req.body.EMAIL,
        TIPOUSUARIO: req.body.TIPOUSUARIO,
        PASSWORD: req.body.PASSWORD, 
        FOTO:req.body.FOTO 
    }},
    function(err,item){
        if(err){
            res.send(err);
        }else{
            Item.find(function(err,item){
                if(err){
                    res.send(err); 
                }else{
                    res.json(item); 
                }
            });}});
}

exports.EliminarP = function(req,res){ //funcion de eliminar los datos
    Item.remove({_id:req.body._id},
        function(err,item){
        if(err){
            res.send(err); 
        }else{
            Item.find(function(err,item){ 
                if(err){
                    res.send(err); 
                }else{
                    res.json(item);
                }
            });}});
}

exports.verificarCookieUsuario = function(req, res) {
    const userId = req.cookies.user_id;
    return !!userId; // Devuelve true si la cookie 'user_id' está presente, de lo contrario, devuelve false
};

exports.obtenerUsuario = function(req, res) {
    // Obtener el ID del usuario de la cookie (asumiendo que el nombre de la cookie es "user_id")
    const userId = req.cookies.user_id;
    console.log("Usuarios encontrados:", userId);
    
    // Verificar si el usuario ha iniciado sesión y la cookie está presente
    if (!userId) {
        // Si no hay una cookie de usuario, redirige al usuario a la página de inicio de sesión
        return res.redirect('/login'); // Reemplaza '/login' con la URL de tu página de inicio de sesión
    }

    // Utilizar el ID del usuario para buscar los datos del usuario en la base de datos
    Item.findById(userId, function(err, user) {
        if (err) {
            return res.status(500).json({ error: 'Error en el servidor' });
        }

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Supongamos que la URL de la imagen de perfil se almacena en la propiedad "FOTO" del objeto usuario
        const imagenPerfilUrl = user.FOTO;

        // Devolver los datos del usuario, incluida la URL de la imagen de perfil, como respuesta
        res.json({
            _id: user._id,
            NOMBRE: user.NOMBRE,
            APELLIDO: user.APELLIDO,
            EMAIL: user.EMAIL,
            GENERO: user.GENERO,
            FECHAN: user.FECHAN,
            TIPOUSUARIO: user.TIPOUSUARIO,
            FOTO: imagenPerfilUrl, // Agrega la propiedad FOTO a la respuesta JSON
        });
    });
};



  exports.obtenerUsuarioPublico = function(req, res) {
    const userId = req.params.id; // Asumiendo que pasas el ID como parámetro en la URL.
    
    Item.findById(userId, function(err, user) {
        if (err) {
            return res.status(500).json({ error: 'Error en el servidor' });
        }

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        
        // Devuelve solo la información pública.
        res.json({
            _id: user._id,
            NOMBRE: user.NOMBRE,
            APELLIDO: user.APELLIDO,
            EMAIL: user.EMAIL,
            GENERO: user.GENERO,
            FECHAN: user.FECHAN,
            TIPOUSUARIO: user.TIPOUSUARIO,
            FOTO: user.FOTO,
        });
    });
};


exports.ListarP = function(req, res) { //funcion de listar los datos, para mostrar la tabla
    Item.find(function(err, items) {
        if(err) {
            res.send(err);
        } else {
            res.json(items);
        }
    });
}


exports.actualizarImagenPerfil = async (req, res) => {
    try {
        console.log("Inicio de la función actualizarImagenPerfil");
        
        const imagenBase64 = req.body.imagen;
        const userId = req.cookies.user_id;
        console.log("ID del Usuario:", userId);
        
        

        console.log("ID del Usuario:", userId);
        console.log("Imagen recibida (primeros 100 caracteres):", imagenBase64.substring(0, 100));

        const result = await Item.updateOne({ _id: userId }, { $set: { FOTO: imagenBase64 } });
        
        console.log("Resultado de la actualización:", result);

        if (result.nModified === 1) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        console.error("Error en actualizarImagenPerfil:", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};



