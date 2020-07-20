// Una compañía de transporte cuenta con cinco choferes, de los cuales
// se conoce: nombre, horas trabajadas cada día de la semana (seis días)
// y sueldo por hora. Realice un algoritmo que:
// a) Calcule el total de horas trabajadas a la semana para cada trabajador.
// b) Calcule el sueldo semanal para cada uno de ellos.
// c) Calcule el total que pagará la empresa.
// d) Indique el nombre del trabajador que labora más horas el día lunes.
// e) Imprima un reporte con todos los datos anteriores.

//Se conoce el nombre de los trabajadores por lo tanto se asumen los siguientes:
const nombre_trabajadores = ["Daniel", "Alejandro", "Maria", "Jose", "Isaac"];
//Se conoce las horas trabajadas por dia a la semana(6) por trabajador por lo tanto se asumen los siguientes:
let horas_trabajadas = [];
//Horas trabajadas Daniel
horas_trabajadas[0] = [6, 8, 8, 8, 5, 4];
//Horas trabajadas Alejandro
horas_trabajadas[1] = [7, 8, 6, 6, 5, 4];
//Horas trabajadas Maria
horas_trabajadas[2] = [8, 8, 8, 8, 8, 0];
//Horas trabajadas Jose
horas_trabajadas[3] = [9, 8, 8, 7, 7, 3];
//Horas trabajadas Isaac
horas_trabajadas[4] = [10, 6, 8, 8, 8, 4];

//Se conoce el sueldo por hora por cada trabajador trabajador por lo tanto se asumen los siguientes:
const sueldo_hora = [20, 25, 30, 50, 35];

//inicializamos los arreglos que contendran las horas trabajadas por semana por trabajador con ceros
// let horas_semana=new Array(5).fill(0);
let horas_semana = [0, 0, 0, 0, 0];
// let sueldo_semana =new Array(6).fill(0);
//inicializamos los arreglos que contendran el sueldo por semana por trabajador con ceros
let sueldo_semana = [0, 0, 0, 0, 0, 0];
//inicializamos la variable que contendra la suma total de sueldos a pagar a todos los trabajadores
let total_sueldos=0;
//inicializamos la variable que contendra el mayor numero de horas trabajadas el dia lunes con el primer dato 
//que son las horas trabajadas por daniel que en total son 6 horas con este se compararan los siguientes
let horas_lunes=horas_trabajadas[0][0];
//en esta variable se guaradara el indice de la persona que trabajo mas horas el lunes
let indice_trabajador_lunes;

for (let i = 0; i < nombre_trabajadores.length; i++) {
  
  for (let j = 0; j < sueldo_semana.length; j++) {
    // a) Calcule el total de horas trabajadas a la semana para cada trabajador.
    horas_semana[i] += horas_trabajadas[i][j];
    // b) Calcule el sueldo semanal para cada uno de ellos.
    sueldo_semana[i]=horas_semana[i]*sueldo_hora[0];
    // c) Calcule el total que pagará la empresa.
    total_sueldos+=sueldo_semana[i];

    if (j===0){
      if (horas_trabajadas[i][j]>horas_lunes){
          indice_trabajador_lunes=i;
          horas_lunes=horas_trabajadas[i][j];
      }
    }
  }
}

// e) Imprima un reporte con todos los datos anteriores.
for (let i = 0; i < nombre_trabajadores.length; i++){
console.log(`
${nombre_trabajadores[i]} trabajo ${horas_semana[i]} horas esta semana y le corresponde un sueldo semanal de: S/.${ sueldo_semana[i]}
.
`)
}

console.log(`La empresa desmbolsará en total: S/.${total_sueldos}.`);

// d) Indique el nombre del trabajador que labora más horas el día lunes.
console.log(`El trabajador que más horas laboró el lunes es ${nombre_trabajadores[indice_trabajador_lunes]} con un total de ${horas_trabajadas[indice_trabajador_lunes][0]} horas.`)

