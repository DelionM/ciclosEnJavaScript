// el ciclo do while me permite ejecutar almenos una vez la instruccion
// mientras que while si no se cumple la condicion no ejecuta ni una vez

let contador = 7;
while (contador <= 5) {
  console.log("hola mundo 5 veces;");
  contador += 1;
}

// do whilw
let contador2 = 11;
do {
  console.log("hola mundo varias veces");
  contador2 += 1;
} while (contador2 <= 10);
// for
let contador3 = 5;
for (let i = 1; i <= contador3; i++) {
  console.log("hola 5 veces alv");
}

// for - in 
// sirve para sacar las propiedades de un objeto
var persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 48
}

for (let clave in persona){
    console.log(clave, persona[clave]);
}

// for of recorre lo que esta dentro de un arreglo o string
var arreglo = [1,2,3,5,6];
var nombre = 'Giovanni';
for(let valor of arreglo){
    console.log(valor);
}

// TABLA DEL DOS EN LOS DIFERENTES CICLOS 

for (let i = 1; i<=10; i++){
    let tabla = i*2;
    console.log(tabla);
}

// let i = 1
do{
    let tabla = i*2;
    console.log(tabla);
    i++
}while(i<=10)

let i = 1
while(i<=10){
    let tabla = i*2;
    console.log(tabla);
    i++;
}