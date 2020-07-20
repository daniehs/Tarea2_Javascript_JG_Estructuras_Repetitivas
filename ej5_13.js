// Se tiene en un arreglo 15 elementos representando calificaciones de
// los estudiantes de una escuela. Realice un algoritmo que lea el arreglo
// y calcule la calificación promedio del grupo, además, que cuente los estudiantes
// que obtuvieron calificaciones arriba del promedio del grupo.
// Represéntelo mediante diagrama de flujo, diagrama N/S y pseudocódigo.

const nelementos=15;
let arreglo_notas=[];
let suma_notas=0;
let promedio;
let contador=0;

//declaracion estatica de las notas
arreglo_notas=[12,13,15,11,14,12.5,15,16,17,11.5,13.5,14,15.5,16.7,12.5];

for (let i=0;i<nelementos;i++){
  suma_notas+=arreglo_notas[i];
}

promedio=suma_notas/arreglo_notas.length;

for (let i=0;i<nelementos;i++){
  suma_notas+=arreglo_notas[i];

  if (arreglo_notas[i]>promedio){
    contador++;
   }
}

console.log(`El promedio de notas es ${promedio}` );
console.log(`El numero de alumnos con notas mayores al promedio son: ${contador}` );


console.log("Fin del programa, hasta pronto! 😷");