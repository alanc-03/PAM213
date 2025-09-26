function verificarUsuario(usuario){
    return new Promise((resolve, reject) => {
    
        setTimeout(() => {
            if(usuario==="admin"){
            resolve("acceso concedido.")
        } else {
            reject("los datos no concuerdan.")
        }
        }, 2000);
        
    });
}


verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.error(err));

verificarUsuario("Ivan")
    .then(res => console.log(res))
    .catch(err => console.error(err));

