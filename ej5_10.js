// Realice un algoritmo que lea dos vectores de n elementos y que calcule
// la suma de éstos guardando su resultado en otro vector, el cual se
// debe presentar en forma impresa.

//Entrada: Arreglo de n elementos, numero de elementos
//Variable:nelementos, primer_arreglo[];
//Proceso: Se llena informacion del primer vector
//Variable:se crean las variables mayor_nombre para el nombre del alumno de mayor edad 
//y mayor_edad para la edad del alumno de mayor edad
//Salida: segudo vector con contenido cambiado

const nelementos=5;
const primer_arreglo= [];
const segundo_arreglo= [];
const arreglo_suma=[];


for (let i=0;i<nelementos;i++){
  primer_arreglo[i]=+prompt(
    `Ingrese el valor del elemento ${i+1} del primer arreglo ` 
  );
  segundo_arreglo[i]=+prompt(
    `Ingrese el valor del elemento ${i+1} del segundo arreglo ` 
  );
  arreglo_suma[i]=primer_arreglo[i]+segundo_arreglo[i]
}

console.log(`El primer arreglo es: ${primer_arreglo}` );
console.log(`El segundo arreglo es: ${segundo_arreglo}` );
console.log(`La suma de los vectores es: ${arreglo_suma}` );


console.log("Fin del programa, hasta pronto! 😷");
