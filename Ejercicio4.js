/*
12) programa una funcion que determine si un numero es primo
13) programa una funcion que determine si un numero es par o impar
14) programa una funcion para convertir grados celsius a farenheit
*/

//12
const numeroPrimo = (numero = undefined) =>{
  if(numero === undefined) return console.warn("No ingresaste un numero");
  if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado, No es un numero`);
  if(numero === 0) return console.error("El numero no puede ser 0");
  if(numero === 1) return console.error("EL numero no puede ser 1");
  if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo");

  let divisible = false;

  for(let i = 2; i < numero; i++){
    if(numero %i ===0){
      divisible = true;
      break;
    }
  }

  return(divisible)
    ? console.log(`El numero ${numero}, NO es primo`)
    : console.log(`El numero ${numero}, Si es primo`);
}

numeroPrimo();
numeroPrimo("8");
numeroPrimo(false);
numeroPrimo(13)
numeroPrimo(14)

//13)

const parOImpar = (numero = undefined) => {
  if(numero === undefined) return console.error("No ingresaste un numero");
  if(typeof numero !== "number") return console.error(`El valor ${numero} no es un numero`)
  if(numero == 0) return console.error(`EL numero ${nummero} es neutro`)

  if(numero % 2 === 0){
    console.log(`El numero ${numero} es par`)
  }else{
    console.log(`El numero ${numero} es impar`)
  }
}

parOImpar(-5)

//14)

  const convertirGrados = (grados = undefined, unidad = undefined) => {
    if(grados === undefined) return console.warn("no ingresaste grados a convertir");
    
    if(unidad === undefined) return console.warn("No ingresaste el tipo de grados a convertir")

    if(typeof grados !== "number") return console.error(`El valor ${grados} ingresado, No es un numero`);

    if(typeof unidad !== "string") return console.error(`El valor "${unidad}" ingresado, No es una cadena de texto`)

    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido")
    
    if(unidad === "C"){
      return console.info(`${grados}°C = ${Math.round((grados * (9/5) + 32))}°F`)
    }else if(unidad === "F"){
      return console.info(`${grados}°F = ${Math.round(((grados -32) * (5/9)))}°C`)
    }

    
    console.info("sexo")
  }

  convertirGrados()
  convertirGrados(5, "F");
  convertirGrados(100, "C")
  convertirGrados(100, "F")

  


