//Funciones Declaradas - Hoisting
console.log(saludar())

function saludar(nombre){
    //return `Hola, buenas noches! ${nombre}`
}

console.log(saludar("Nicholas"))

//Funcion flecha - No Hoisting
let saludo=(nombre2)=> `Hola, buenas noches!  ${nombre2}`  

console.log(saludo("Roberto"))

/*Crea una función que reciba como parámetro un número entero y un carácter, 
retornar el carácter multiplicado por el número entero. 
Por ejemplo, generar_caracteres(7, a), debería retornar "aaaaaaa".*/ 

let generarCaracteres=(numero,caracter)=>{
    let respuesta=""
    for(let i=0;i<numero;i++){
        respuesta+=caracter
    }
    return respuesta
}

console.log(generarCaracteres(7,"a"))

/*Crear una función que tome como parámetro un arreglo de números, 
retornar la suma de todos los números del arreglo.*/

let sumaArreglo=(arreglo)=>{
    let suma=0
    let longitud=arreglo.lenght
    for(let i=0; i<longitud; i++){
        suma+=arreglo[i];
    }
    return suma
}

console.log(sumaArreglo([2,7,4]))

/*Crea una función que tome un objeto como parámetro y devuelva un array con
todas las propiedades del objeto:*/

let objeto=(obj)=>{
    return Object.keys(obj)
} 

console.log(objeto({nombre:"Nicholas", edad:20}))

/*Crear una función que a partir del precio y descuento de un producto calcule:
El precio neto, aplicando el descuento pero no el impuesto del IVA.
La cantidad que corresponde al IVA.
El precio final, es decir, el precio neto más el IVA calculado. - prompt*/

let precio = parseFloat(prompt("Ingrese el precio del producto: "))
let descuento = parseFloat(prompt("Ingrese el descuento: "))
let calcularPrecio=(precio, descuento)=>{
    let iva=0.12
    let precioNeto=precio-descuento
    let cantidadIva=precioNeto*iva
    let precioFinal=precioNeto+cantidadIva
    let resultado=[precioNeto, cantidadIva, precioFinal]

    return resultado

}

document.writeln(`Precio Neto: ${calcularPrecio(precio,descuento) [0]} dolares <br>`)
document.writeln(`Precio Final: ${calcularPrecio(precio, descuento) [1]} dolares <br> `)
document.writeln(`Iva: ${calcularPrecio(precio,descuento) [2]}%`)

/*Crear una función que ingrese dos números por teclado, realizar un menú de opciones para: Sumar -- Restar -- Multiplicar y Dividir.
Crear una función que lea tres notas de un alumno,
calcula el promedio e indica si está suspendido o aprobado. (<=6 "Suspendido" -- >=7 "Aprobado").*/

let num1 = parseInt(prompt("Ingrese un numero:"))
let num2 = parseInt(prompt("Ingrese otro numero:"))





