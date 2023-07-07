/*15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste el numero a convertir")
  
    if(base === undefined) return console.warn("No ingresaste la base a convertir")
  
    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un numero`)
  
    if(typeof base !== "number") return console.error(`El valor ${base}, ingresado no es un numero`)
  
    if(base === 2){
      return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`)
    } else if(base === 10){
      return console.info(`${numero} base ${base} = ${numero.toString(2)}`)
    } else {
      return console.error("El tipo de base a convertir no es valido");
    }
  }
  
  convertirBinarioDecimal(100011,2);
  convertirBinarioDecimal(4,10)
  convertirBinarioDecimal(5,3)
  /*
  16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
  */
  
  const montoFinal = (monto = undefined, descuento = undefined) => {
    if(monto === undefined) return console.warn("No ingresaste el monto")
  
    if(descuento === undefined) return console.warn("No ingresaste el descuento")
  
    if(typeof descuento !== "number") return console.error(`El valor ingresado de descuento "${descuento}" no es valido`)
  
    if(typeof monto !== "number") return console.error(`El valor ${monto} no es un numero`)
  
    let montoFinal = (monto / 100) * descuento
  
    return console.log(`El ${descuento}% de ${monto} es ${montoFinal}`)
  
  }
  
  montoFinal(80,20)
  
  /*
  17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
  */
  
  const calcularAnios = (fecha = undefined) => {
    if(fecha === undefined) return console.warn("No ingresaste la fecha");
  
    if(!(fecha instanceof Date)) return console.error("El valor que ingresaste  no es una fecha valida")
  
    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
      aniosEnMS = 1000 * 60 * 60 * 24 * 365
    let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);
  
    return(Math.sign(aniosHumanos) === -1)
    ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    : (Math.sign(aniosHumanos) === 1)
      ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
      : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
  }
  
  calcularAnios(new Date(1969, 5, 5))