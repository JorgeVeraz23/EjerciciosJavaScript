/*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

/*
const contarLetras = (cadena = "") => {
    if(!cadena) return console.warn("No ingresaste una cadena de texto");

    if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`)

    let vocales = 0,
        consonates = 0;
    
    cadena = cadena.toLocaleLowerCase();

    for(let letra of cadena){
        if(/[aeiouáéíóú]/.test(letra)){
            vocales++;
        }

        if(/[bcdfghjkmnlrstvwxyz]/.test(letra)){
            consonates++;
        }
    }   
    return console.info({
        cadena,
        vocales,
        consonates
    }) 
}*/

/*contarLetras("hola");*/

/*19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/
/*
const validarNombre = (nombre = "") => {
    if(!nombre) return console.warn("No ingresaste un nombre");

    if(typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresado NO es una cadena de texto`)

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre);

    return(expReg)
        ? console.info(`"${nombre}", es un nombre valido`)
        : console.warn(`"${nombre}", NO es un nombre valido`)
}
validarNombre();
validarNombre(3);
validarNombre("Jorge Vera")*/
/*20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.*/

const validarEmail = (email = "") => {
    if(!email) return console.warn("No ingresaste un nombre");

    if(typeof email !== "string") return console.error(`El valor "${email}" ingresado NO es una cadena de texto`)

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);


    return(expReg)
        ? console.info(`"${email}", es un correo valido`)
        : console.error(`"${email}", NO es un correo valido`)
}
validarEmail();
validarEmail(3);
validarEmail("Jor,Ver,a@gmail")
validarEmail("jorgeveraug@gmail.com")