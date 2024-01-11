//Impremir un mensaje en el documento
document.writeln("Hola Mundo!");
alert("Hola mundo!");

//Ingresar datos por teclado
let numero1=prompt("Ingrese un numero:");
let numero2=prompt("Ingrese otro numero:");
let suma;

//Transformar a entero
let n1=parseInt(numero1);
let n2=parseInt(numero2);
suma=n1+n2;
document.writeln(suma);
console.log(`La suma es: ${suma}`)

//Tabla de multiplicar
let multip=parseInt(prompt("Ingrese el factor "))
for(let i=1; i <= 10; i++){
    let multiplicar=i*multip;
    console.log(multiplicar);
}


