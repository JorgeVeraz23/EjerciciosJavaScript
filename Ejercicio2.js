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