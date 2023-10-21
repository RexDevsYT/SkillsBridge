var Item = require('../db/PUBLICACIONESDB');

exports.Guardar = function(req,res){ //funcion de guardar los datos, 
    const userId = req.cookies.user_id;
    Item.create({
        NOMBRE: req.body.NOMBRE, 
        INTERES: req.body.INTERES, 
        SABE: req.body.SABE, 
        NUMERO: req.body.NUMERO, 
        FOTO: req.body.FOTO,
        FECHAACTUAL: req.body.FECHAACTUAL,
        userId: userId
        },
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

exports.Modificar = function(req,res){ //funcion de modificar los datos
    Item.update({_id:req.body._id},{$set:{ 
        NOMBRE: req.body.NOMBRE, 
        INTERES: req.body.INTERES, 
        SABE: req.body.SABE, 
        NUMERO: req.body.NUMERO, 
        FOTO: req.body.FOTO,
        
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

exports.Eliminar = function(req,res){ //funcion de eliminar los datos
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

exports.Seleccionartodos = function(req,res){ 
    Item.find(function(err,item){ 
        if(err){
            res.send(err);
        }else{
            res.json(item); 
        }
    });
}

exports.Seleccionarporid = function(req,res){ 
    Item.find({_id:req.body._id}, 
        function(err,item){
            if(err){
                res.send(err);
            }else{
                res.json(item);
            }
        })
        .populate('itemRegistrados','nombre');
}



exports.Seleccionarpornombre = function(req,res){ 
    Item.find({NOMBRE:req.body.NOMBRE},
        function(err,item){ 
            if(err){
                res.send(err); 
            }else{
                res.json(item);
            }
        });
}

exports.Listar = function(req, res) {
    // Obtener las últimas 3 publicaciones ordenadas por la fecha de guardado en orden descendente
    Item.find({})
      .sort({ FECHAACTUAL: -1 }) // Ordenar por fecha de guardado en orden descendente (-1)
      .limit(3) // Limitar el resultado a 3 documentos
      .exec(function(err, items) {
        if (err) {
          res.send(err);
        } else {
          res.json(items);
        }
      });
  }

  exports.ListarTodo = function(req, res) {
    // Obtener las últimas 3 publicaciones ordenadas por la fecha de guardado en orden descendente
    Item.find({})
      .sort({ FECHAACTUAL: -1 }) // Ordenar por fecha de guardado en orden descendente (-1)
      .limit(2000) // Limitar el resultado a 3 documentos
      .exec(function(err, items) {
        if (err) {
          res.send(err);
        } else {
          res.json(items);
        }
      });
  }

exports.ListarPorID = function(req, res) {
    // Obtener el ID del usuario autenticado desde la cookie o token
    const userId = req.cookies.user_id; // Suponiendo que la cookie se llama 'user_id'
    Item.find({ userId: userId }, function(err, items) {
        if (err) {
          res.send(err);
        } else {
          res.json(items);
        }
      });
}
  
exports.ListarPorUsuario = function(req, res) {
    const userId = req.params.userId; // obtener el ID desde la URL
    Item.find({ userId: userId }, function(err, items) {
        if(err) {
            res.send(err);
        } else {
            res.json(items);
        }
    });
}
