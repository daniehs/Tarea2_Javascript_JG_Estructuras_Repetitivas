// 5.6 Realice y represente mediante diagrama de flujo y pseudocódigo un
// algoritmo que lea los nombres y las edades de diez alumnos, y que los
// datos se almacenen en dos vectores, y con base en esto se determine
// el nombre del alumno con la edad mayor del arreglo.


//Entrada: Arreglos de nombres y edades
//Variable:nombres_alumnos[], edades_alumnos[]
//Proceso: calculo del alumno con mayor edad
//Variable:se crean las variables mayor_nombre para el nombre del alumno de mayor edad 
//y mayor_edad para la edad del alumno de mayor edad
//Salida: mensaje con nombre y edad de alumno mayor

const nalumnos=10;
const nombres_alumnos= [];
const edades_alumnos= [];
let mayor_nombre;
let mayor_edad;

for (let i=0;i<nalumnos;i++){
  nombres_alumnos[i]=prompt(
    `Ingrese el nombre del alumno ${i+1}: ` 
  );
  edades_alumnos[i]=+prompt(
    `Ingrese la edad del alumno ${i+1}: ` 
  );
}

mayor_edad=edades_alumnos[0];
for (let i=0;i<nalumnos;i++){
 if (edades_alumnos[i]>mayor_edad){
  mayor_edad=edades_alumnos[i];
  mayor_nombre=nombres_alumnos[i];
 }

}

console.log(`${mayor_nombre} es el alumno de mayor edad con ${mayor_edad} años `);


console.log("Fin del programa, hasta pronto! 😷");
