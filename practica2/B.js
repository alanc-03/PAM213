
const productos = [
    {nombre:"laptop", precio: 12000},
    {nombre:"Mouse", precio:250},
    {nombre:"Teclado", precio:750},
    {nombre:"Monitor", precio:3000}
];

const precio = productos.filter(p=>p.precio>1000);

let nombres = precio.map(p=>p.nombre);

console.log(nombres); 