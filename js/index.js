//Comentarios de una sola linea
/*Comentarios de mas de una linea*/

//Imprimir un mensaje en consola
console.log("Hola mundo");

//Declaracion de variables 
let nombre="Nicholas";
let apellido="Barrera";
let edad=20;


//Concatenacion
console.log("Mi nombre es "+nombre+" y mi apellido es "+apellido+" tengo "+edad+" anios");

//Template de cadenas - Interpolacion de cadenas
console.log(`Mi nombre es ${nombre} ${apellido} tengo ${edad} anios`);

//Tipo de datyo undefined
let a;
console.log(a);

//Tipo de dato NAN
let b=5;
let c="hola";
let multi=b*c;
console.log(multi);

//Tipo de datos Objeto
const persona={
    nombre:"Nicholas",
    apellido: "Barrera",
    edad: 20,
    estado_civil:"Soltero",
    pasatiempos:["Leer","Escribir","Jugar"],
    estudios:{
        primaria:"Colegio Nuevo Mundo",
        secundaria:"Colegio Nuevo Mundo",
        superior:"ITSQMET"
    },
    saludar:function(){
        return "Buenas noches";;
    }
}

console.log(persona.nombre);
console.log(persona.saludar());

//Tipo de dato Array
const arreglo=["Hola", true, 20, "Chao"];
console.log(arreglo[1]);

arreglo.push("Felipe");
console.log(arreglo);
arreglo.pop();
console.log(arreglo);

//Operador Typeof
console.log(typeof a);