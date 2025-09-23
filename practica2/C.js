
const personas =[
    {nombre:"Ana", edad:22},
    {nombre:"Luis", edad:35},
    {nombre:"Angel", edad:35},
    {nombre:"Maria", edad:28},
    {nombre:"Marcos", edad:25}
];

const busqueda = personas.find(elemento=>elemento.nombre=="Luis");

console.log(busqueda);
personas.forEach(persona => {if(persona.edad===35){
    console.log(persona.nombre + " tiene " + persona.edad + "años.")
}}
);

let sumaT = personas.reduce((sum,persona)=>sum + persona.edad,0);
console.log("la suma de las edade es: "+ sumaT);
