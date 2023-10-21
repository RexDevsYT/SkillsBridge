class personaP { 
    constructor(_id, NOMBRE, APELLIDO, EMAIL, GENERO, FECHAN, TIPOUSUARIO, PASSWORD, FOTO) {
        this._id = _id;
        this.NOMBRE = NOMBRE;
        this.APELLIDO = APELLIDO;
        this.EMAIL = EMAIL;
        this.GENERO = GENERO;
        this.FECHAN = FECHAN;
        this.TIPOUSUARIO = TIPOUSUARIO;
        this.PASSWORD = PASSWORD;
        this.FOTO = FOTO;
    }

    Guardar() {
        const objetoaenviar = {
            id: this.id,
            NOMBRE : this.NOMBRE,
            APELLIDO : this.APELLIDO,
            EMAIL : this.EMAIL,
            GENERO : this.GENERO,
            FECHAN : this.FECHAN,
            TIPOUSUARIO : this.TIPOUSUARIO,
            PASSWORD : this.PASSWORD,
            FOTO : this.FOTO
        };

        console.log(objetoaenviar)

        return new Promise((resolve, reject) => {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open("PUT", "https://m9hhnbk6-8000.use2.devtunnels.ms/api/agregarPersona");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr);
                    }
                };
                xhr.send(JSON.stringify(objetoaenviar));
            } catch (err) {
                reject(err.message);
            }
        });
    }


    Login() {
        const objetoaenviar = {
            id: this.id,
            NOMBRE : this.NOMBRE,
            APELLIDO : this.APELLIDO,
            EMAIL : this.EMAIL,
            GENERO : this.GENERO,
            FECHAN : this.FECHAN,
            TIPOUSUARIO : this.TIPOUSUARIO,
            PASSWORD : this.PASSWORD,
            FOTO : this.FOTO
        };

        console.log(objetoaenviar)

        return new Promise((resolve, reject) => {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open("POST", "https://m9hhnbk6-8000.use2.devtunnels.ms/api/Login");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr);
                    }
                };
                xhr.send(JSON.stringify(objetoaenviar));
            } catch (err) {
                reject(err.message);
            }
        });
    }

    Modificar(){
        var objetoaenviar = this;
        return new Promise(function(resolve, reject){
            try{
                var xhr = new XMLHttpRequest();
                xhr.open("POST", "https://m9hhnbk6-8000.use2.devtunnels.ms/api/modificarPersona");
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
                xhr.open("DELETE", "https://m9hhnbk6-8000.use2.devtunnels.ms/api/eliminardelabaseP");
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
                xhr.open("GET", "https://m9hhnbk6-8000.use2.devtunnels.ms/api/listarP");
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

obtenerUsuario() {
  return new Promise(function(resolve, reject) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://m9hhnbk6-8000.use2.devtunnels.ms/api/usuario");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr);
        }
      };
      xhr.send();
    } catch (err) {
      reject(err.message);
    }
  });
}

obtenerUsuarioPublico(userId) {
    return new Promise(function(resolve, reject) {
        try {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://m9hhnbk6-8000.use2.devtunnels.ms/api/usuarioPublico/" + userId);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = function() {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr);
                }
            };
            xhr.send();
        } catch (err) {
            reject(err.message);
        }
    });
}

Logout() {
    return new Promise((resolve, reject) => {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://m9hhnbk6-8000.use2.devtunnels.ms/api/Logout"); // Puedes cambiar GET a DELETE si prefieres
        xhr.onload = function() {
          if (xhr.status === 200) {
            resolve("Logout successful");
          } else {
            reject(xhr);
          }
        };
        xhr.send();
      } catch (err) {
        reject(err.message);
      }
    });
  }
  
  enviarImagen(imagenBase64) {
    return new Promise((resolve, reject) => {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "https://m9hhnbk6-8000.use2.devtunnels.ms/api/actualizarImagenPerfil");
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.onload = function() {
                if (xhr.status === 200) {
                    resolve("Imagen actualizada con éxito");
                } else {
                    reject(xhr);
                }
            };
            xhr.send(JSON.stringify({ imagen: imagenBase64 }));
        } catch (err) {
            reject(err.message);
        }
    });
}

verificarCookieUsuario() {
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "https://m9hhnbk6-8000.use2.devtunnels.ms/api/verificarCookieUsuario");
      xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr);
        }
      };
      xhr.onerror = function() {
        reject(new Error("Error en la solicitud AJAX"));
      };
      xhr.send();
    });
  }
  
  
}



