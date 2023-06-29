/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */


//Esta es mi solucion al ejercicio #1 del ejercicio
function contarCadena (cadena){
    if(typeof cadena == String){
    }else if (typeof cadena != String){
        cadena = String(cadena);
    }
    var str = cadena.length;
    console.log(str);
}
contarCadena(50);
contarCadena("maria");
contarCadena(4.5);
//Esta es la solucion del profesor al ejercicio #1

//Esta es mi solucion al ejercicio #2 del ejercicio
function recortarCadena(hola, tamaño){
    console.log(hola.slice(0, tamaño));   
}
recortarCadena("hola", 4);

//Esta es la solucion del profesor al ejercicio #2

//Esta es mi solucion al ejercicio #3
function cadenaToArreglo(cadena, txt){
    console.log(cadena.split(txt))
}
cadenaToArreglo("hola que tal soy colosal tengo una polla descomunal", " ");

//Esta es la solucion al ejercicio #3 del profesor

//Esta es mi solucion al ejercio #4 
function repetirCadena(texto, veces){
    console.log(texto.repeat(veces));
}
repetirCadena("hola", 6);

//Esta es la solucion al ejercicio #4 del profesor
