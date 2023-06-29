/*
5) Programa una funcion que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolvera "odmuM aloH"
6) Programa una funcion para contar el numero de veces que se repite una palabra en un texto largo, pe. miFuncion("Hola mundo adios mundo", "mundo") devolvera 2
7) Programa una funcion que valide si una palabra o frase dada, es un palindromo (que se lee igual en un sentido que en otro), pe.miFuncion("Salas") devolvera true
8) Programa una funcion que elimine cierto patron de caracteres de un texto dado, pe.miFuncion ("xyz1, xyz2, xyz3") devolvera "1,2,3,4,5"
*/

//5)
function invertirCadena(cad = ""){
    if(!cad){
        console.log("la cadena no existe");
        return;
    }

    if(typeof cad !== "string"){
        console.log("El argumento debe ser una cadena de texto")
        return;
    }

    let newcad = cad.split("").reverse().join("");
    console.log(`la cadena normal es "${cad}" la cadena invertida es "${newcad}"`);
}

invertirCadena("");
//6)
function palabraRepetida(texto = "", palabra = ""){
    if(!texto || !palabra){
        return 0;
    }

    let textoE = texto.toLowerCase();
    let palabraE = palabra.toLowerCase();

    let palabras = texto.split(" ");
    let contador = 0;
    for(let i = 0; i <= palabras.length; i++){
        if(palabras[i] === palabraE){
            contador++;
        }
    }
    return console.log(contador);
}

palabraRepetida("hola hola hola hola", "hola");

//7)
function esPalidroma(cad = ""){
    if(!cad){
        console.log("la cadena no existe");
        return;
    }

    if(typeof cad !== "string"){
        console.log("El argumento debe ser una cadena de texto")
        return;
    }
    if(typeof cad === "string"){
        let newcad = cad.split("").reverse().join("");
        if(newcad == cad){
            console.log(`la cadena de texto "${cad}" es igual su inversion "${newcad}" por lo tanto es palindroma`);
        }else{
            console.log(`la palabra "${cad}" no es palindroma`);
        }
    }
}

esPalidroma("ANA");

//8) 
    const eliminarCaracteres = (texto = "", patron = "") =>
    (!texto)
    ? console.warn("No ingresaste un texto")
    : (!patron)
        ? console.warn("No ingresaste un patron de caracteres")
        : console.info(texto.replace(new RegExp(patron, "ig"),""));

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4", "xyz");