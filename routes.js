cookieParser = require('cookie-parser'); 
const mongoose = require('mongoose');
var ControllerPublicaciones = require('./Controllers/ControllerPublicaciones.js')
var ControllerPersona = require('./Controllers/ControllerPersona.js')
var ControllerComentarios = require('./Controllers/ControllerComentarios.js')
module.exports = function(app){
    app.use(cookieParser());
    
    app.put('/api/agregarP',ControllerPublicaciones.Guardar);
    app.post('/api/modificarP',ControllerPublicaciones.Modificar);
    app.delete('/api/eliminardelabase', ControllerPublicaciones.Eliminar);
    app.post('/api/peliculaporid', ControllerPublicaciones.Seleccionarporid);
    app.get('/api/listar', ControllerPublicaciones.Listar);
    app.get('/api/ListarPorID', ControllerPublicaciones.ListarPorID);
    app.get('/api/ListarPorUsuario/:userId', ControllerPublicaciones.ListarPorUsuario);
    app.get('/api/ListarTodo', ControllerPublicaciones.ListarTodo);

    app.put('/api/agregarC',ControllerComentarios.Guardar);
    app.post('/api/modificarC',ControllerComentarios.Modificar);
    app.delete('/api/eliminardelabaseC', ControllerComentarios.Eliminar);
    app.post('/api/peliculaporidC', ControllerComentarios.Seleccionarporid);
    app.get('/api/listarC', ControllerComentarios.Listar);
   
    app.post('/api/Login',ControllerPersona.Login);
    app.get('/api/Logout',ControllerPersona.Logout);
    app.put('/api/agregarPersona',ControllerPersona.GuardarP);
    app.post('/api/modificarPersona',ControllerPersona.ModificarP);
    app.post('/api/actualizarImagenPerfil',ControllerPersona.actualizarImagenPerfil);
    app.delete('/api/eliminardelabaseP', ControllerPersona.EliminarP);
    app.get('/api/usuario', ControllerPersona.obtenerUsuario);
    app.get('/api/usuarioPublico/:id', ControllerPersona.obtenerUsuarioPublico);
    app.get('/api/verificarCookieUsuario', ControllerPersona.verificarCookieUsuario);
    app.get('/api/listarP', ControllerPersona.ListarP);


//Login y registro
app.get('/nuevaP', function(req,res)
{
    res.sendfile('front-end/Login&Registro/AgregarPersona.html');
});

app.get('/Login', function(req,res)
{
    res.sendfile('front-end/Login&Registro/Login.html');
});

app.get('/persona.js', function(req,res)
{
    res.sendfile('front-end/Login&Registro/persona.js');
});

app.get('/LCSS', function(req,res)
{
    res.sendfile('front-end/CSS/LCSS.css');
});

app.get('/LCSS2', function(req,res)
{
    res.sendfile('front-end/CSS/LCSS2.css');
});

app.get('/MCSS1', function(req,res)
{
    res.sendfile('front-end/CSS/menu1.css');
});




//Soporte y contacto
app.get('/soporte', function(req,res)
{
    res.sendfile('front-end/Home/soporte.html');
});




// Apartados barra izquierda 

app.get('/noticias', function(req,res)
{
    res.sendfile('front-end/apartados/noticias/noticias.html');
});
app.get('/intercambios', function(req,res)
{
    res.sendfile('front-end/apartados/intercambiosinfo/intercambios.html');
});

app.get('/Historia', function(req,res)
{
    res.sendfile('front-end/apartados/historiaExpo/historia.html');
});
app.get('/help', function(req,res)
{
    res.sendfile('front-end/apartados/help/help.html');
});
app.get('/guia', function(req,res)
{
    res.sendfile('front-end/apartados/guia/guia.html');
});
app.get('/chat', function(req,res)
{
    res.sendfile('front-endapartados/chat/chat.html');
});




//Perfil
app.get('/Usuario', function(req,res) {
    res.sendfile('front-end/Home/Usuario.html');
});
app.get('/CCSS2', function(req,res)
{
    res.sendfile('front-end/CSS/cardU.css');
});
app.get('/UsuarioPublico/:id', function(req, res) {
    res.sendfile('front-end/Home/UsuarioPublico.html');
});





//Home
app.get('/index', function(req,res) {
    res.sendfile('front-end/Home/Index.html');
});

app.get('/publicaciones.js', function(req,res)
{
    res.sendfile('front-end/Home/publicaciones.js');
});

app.get('/Desarrollo', function(req,res)
{
    res.sendfile('imagenes/Desarrollo.png');
});

app.get('/inform', function(req,res)
{
    res.sendfile('imagenes/textoS.jpg');
});

app.get('/informeres', function(req,res)
{
    res.sendfile('imagenes/textores.jpg');
});


app.get('/rompecabezas', function(req,res)
{
    res.sendfile('imagenes/Byronsefeliz.png');
});
app.get('/ImagenRegistro', function(req,res)
{
    res.sendfile('imagenes/ImagenRegistro.png');
});
app.get('/Perfil', function(req,res)
{
    res.sendfile('imagenes/Perfil.png');
});
app.get('/Logo', function(req,res)
{
    res.sendfile('imagenes/Logo.png');
});
app.get('/Carrusel1', function(req,res)
{
    res.sendfile('imagenes/paracarrusel.png');
});

app.get('/Logo2', function(req,res)
{
    res.sendfile('imagenes/Logo2.png');
});
app.get('/imagenP', function(req,res)
{
    res.sendfile('imagenes/imagenP.png');
});
app.get('/CCSS', function(req,res)
{
    res.sendfile('front-end/CSS/card.css');
});

app.get('/CCSS4', function(req,res)
{
    res.sendfile('front-end/CSS/cardBlog.css');
});

app.get('/indexEst', function(req,res)
{
    res.sendfile('front-end/CSS/indexEstilos.css');
});

app.get('/MCSS', function(req,res)
{
    res.sendfile('front-end/CSS/menu.css');
});

app.get('/CarruselNormal1', function(req,res)
{
    res.sendfile('imagenes/carruseln1.jpg');
});
app.get('/CarruselNormal2', function(req,res)
{
    res.sendfile('imagenes/carruseln2.jpg');
});

app.get('/CarruselResponsive1', function(req,res)
{
    res.sendfile('imagenes/carruselr1.jpg');
});
app.get('/CarruselResponsive2', function(req,res)
{
    res.sendfile('imagenes/carruselr2.jpg');
});




//Blog
app.get('/Comentarios.js', function(req,res)
{
    res.sendfile('front-end/Blog/Comentarios.js');
});

app.get('/Blog', function(req,res)
{
    res.sendfile('front-end/Blog/Blog.html');
});

app.get('/fondoBlog', function(req,res)
{
    res.sendfile('imagenes/FondoBlog.jpg');
});




//Publicaciones
app.get('/MainPublicaciones', function(req,res)
{
    res.sendfile('front-end/Buscador&Publicaciones/MainPublicaciones.html');
});

app.get('/PCSS', function(req,res)
{
    res.sendfile('front-end/Buscador&Publicaciones/Carrusel.css');
});

app.get('/CJS', function(req,res)
{
    res.sendfile('front-end/Buscador&Publicaciones/Carrusel.js');
});




//Chatbot
app.get('/BotCSS', function(req,res)
{
    res.sendfile('front-end/Chatbot/Chatbot.css');
});
app.get('/Chatbot', function(req,res)
{
    res.sendfile('front-end/Chatbot/ChatBotR.html');
});
app.get('/BotJS', function(req,res)
{
    res.sendfile('front-end/Chatbot/Bot.js');
});
app.get('/SkillBotLogo', function(req,res)
{
    res.sendfile('imagenes/Skillbot.jpg');
});
app.get('/User', function(req,res)
{
    res.sendfile('imagenes/User.jpg');
});



//Footer
app.get('/Servicios', function(req,res)
{
    res.sendfile('Apartados_footer/Servicios.html');
});

app.get('/Acerca_de', function(req,res)
{
    res.sendfile('Apartados_footer/Acerca_de.html');
});

app.get('/Terminos', function(req,res)
{
    res.sendfile('Apartados_footer/Terminos.html');
});

app.get('/Politicas', function(req,res)
{
    res.sendfile('Apartados_footer/Politicas_de_Privacidad.html');
});

app.get('/FCSS', function(req,res)
{
    res.sendfile('front-end/CSS/footer.css');
});




//Extenciones
app.get('/BootstrapCSS', function(req,res)
{
    res.sendfile('front-end/Extenciones/Bootstrap2.css');
});

app.get('/BootstrapCSS2', function(req,res)
{
    res.sendfile('front-end/Extenciones/Bootstrap.css');
});

app.get('/BootstrapJS', function(req,res)
{
    res.sendfile('front-end/Extenciones/Bootstrap.js');
});
app.get('/Jquery', function(req,res)
{
    res.sendfile('front-end/Extenciones/Jquery.js');
});
};

