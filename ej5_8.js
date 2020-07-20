// 5.8 Realice un algoritmo que lea un vector y a partir de él forme un segundo vector, de tal forma que el primer elemento pase a ser el segundo,
// el segundo pase a ser el tercero, el último pase a ser el primero, y así
// sucesivamente. Represéntelo mediante un diagrama de flujo.

//Entrada: Arreglo de n elementos, numero de elementos
//Variable:nelementos, primer_arreglo[];
//Proceso: Se llena informacion del primer vector
//Variable:se crean las variables mayor_nombre para el nombre del alumno de mayor edad 
//y mayor_edad para la edad del alumno de mayor edad
//Salida: segudo vector con contenido cambiado
const nelementos=10;
const primer_arreglo= [];
const segundo_arreglo= [];

for (let i=0;i<nelementos;i++){
  primer_arreglo[i]=prompt(
    `Ingrese el valor del elemento ${i+1}: ` 
  );
}

for (let i=0;i<nelementos;i++){
 if (i===nelementos-1){
  segundo_arreglo[0]=primer_arreglo[i];
 }else{
  segundo_arreglo[i+1]=primer_arreglo[i];
 }
 

}

console.log(primer_arreglo);
console.log(segundo_arreglo);


console.log("Fin del programa, hasta pronto! 😷");
