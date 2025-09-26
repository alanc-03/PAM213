
function simularPeticionAPI(id){
    return new Promise(resolve => {
        setTimeout(() => {
        resolve("Datos recibidor correctamente");
        

    }, 5000);
});
}

async function obtenerDatos(){
    try{
        console.log("iniciando pedido");
        const fila = await simularPeticionAPI(303);
        console.log("obteniendo datos\n\n", fila);

    } catch(error){
        console.error("ocurrio un error", error);
    }
}

obtenerDatos();