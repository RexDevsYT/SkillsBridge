class  blogdb{ 
    constructor(_id, NOMBRE, COMENTARIO, FOTO) {
        this._id = _id;
        this.NOMBRE = NOMBRE;
        this.COMENTARIO = COMENTARIO;
        this.FOTO = FOTO;
    }

  
    Guardar(){  //Llama la api para guardar los datos
        var objetoaenviar = this;
        return new Promise(function(resolve, reject){
            try{
                var xhr = new XMLHttpRequest();
                xhr.open("PUT", "https://m9hhnbk6-8000.use2.devtunnels.ms/api/agregarC");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload = function(){
                    if(xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else{
                        reject(xhr);
                    }
                };
                xhr.send(JSON.stringify(objetoaenviar));
            }
            catch(err){
                reject(err.message);
            }
        });
    }

    Modificar(){
        var objetoaenviar = this;
        return new Promise(function(resolve, reject){
            try{
                var xhr = new XMLHttpRequest();
                xhr.open("POST", "https://m9hhnbk6-8000.use2.devtunnels.ms/api/modificarC");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload = function(){
                    if(xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else{
                        reject(xhr);
                    }
                };
                xhr.send(JSON.stringify(objetoaenviar));
            }
            catch(err){
                reject(err.message);
            }
        });
    }

    Eliminar(){ // llama la api para eliminar
        var objetoaenviar = this;
        return new Promise(function(resolve, reject){
            try{
                var xhr = new XMLHttpRequest();
                xhr.open("DELETE", "https://m9hhnbk6-8000.use2.devtunnels.ms/api/eliminardelabaseC");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload = function(){
                    if(xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else{
                        reject(xhr);
                    }
                };
                xhr.send(JSON.stringify(objetoaenviar));
            }
            catch(err){
                reject(err.message);
            }
        });
    }

    Seleccionarporid(){
        var objetoaenviar = this;
        return new Promise(function(resolve, reject){
            try{
                var xhr = new XMLHttpRequest();
                xhr.open("POST", "https://m9hhnbk6-8000.use2.devtunnels.ms/api/peliculaporid");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload = function(){
                    if(xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else{
                        reject(xhr);
                    }
                };
                xhr.send(JSON.stringify(objetoaenviar));
            }
            catch(err){
                reject(err.message);
            }
        });
    }

    Listar(){ //funcion que llama la api del routes, con el objetivo de mostrar los datos de la base de datos
        return new Promise((resolve, reject) => {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", "https://m9hhnbk6-8000.use2.devtunnels.ms/api/listarC");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload = function(){
                    if(xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else{
                        reject(xhr);
                    }
                };
                xhr.send();
            }
            catch(err){
                reject(err.message);
            }
        });
    }
}



