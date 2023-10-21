var Item = require('../db/blogdb');

exports.Guardar = function(req,res){ //funcion de guardar los datos, 
    Item.create({
        
        NOMBRE: req.body.NOMBRE, 
        COMENTARIO: req.body.COMENTARIO,
        FOTO: req.body.FOTO
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
        COMENTARIO: req.body.COMENTARIO,
        FOTO: req.body.FOTO
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
        });
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

exports.Listar = function(req, res) { //funcion de listar los datos, para mostrar la tabla
    Item.find(function(err, items) {
        if(err) {
            res.send(err);
        } else {
            res.json(items);
        }
    });
}
