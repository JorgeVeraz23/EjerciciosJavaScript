/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */
//21)
let arregloDatos = [];

const arregloAlCuadrado = (...arreglo) => {
    if(arreglo.length === 0) return console.warn("No hay ningun dato ingresado")

    for (let i = 0; i < arreglo.length; i++){
        const dato = arreglo[i]
        if(typeof dato !== "number"){
            console.warn(`La entrada "${dato}" no es un dato numerico`)
            continue;
        }

        arregloDatos.push(dato);
        console.log(dato * dato)
}
}
arregloAlCuadrado(2, 4, 8)


//resolucion del profesor


const devolverCuadrados = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros")
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")
    if(arr.length === 0) return console.error("El arreglo esta vacio");

    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor "${num}, ingresado, NO es un numero"`)
    }

    const newArr = arr.map(el => el * el);

    return console.info(`Arreglo original: ${arr}, \nArreglo elevado al cuadrado ${newArr}`)
}

devolverCuadrados([5,2,4,8])
//22)

const quicksort = (...arr) => {
    if (arr.length <= 1) {
      return arr; // Si el arreglo tiene 0 o 1 elemento, ya está ordenado
    }
  
    const pivot = arr[Math.floor(arr.length / 2)]; // Elegimos el pivote como el elemento del medio
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i === Math.floor(arr.length / 2)) {
        continue; // Saltamos el pivote
      }
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    // Concatenamos las sublistas ordenadas junto con el pivote en el medio
    return [...quicksort(...left), pivot, ...quicksort(...right)];
  }
  
  console.log(quicksort(9, 8, 7, 6, 5, 4, 1, 3, 2)); // Imprime [1, 2, 3, 4, 5, 6, 7, 8, 9]

//22)

const arrayMinMax = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros")
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")
    if(arr.length === 0) return console.error("El arreglo esta vacio");
    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor "${num}, ingresado, NO es un numero"`)
    }

    return console.info(`Arreglo original: ${arr} \nValor mayor: ${Math.max(...arr)},\nValor menor: ${Math.min(...arr)}`)
}

arrayMinMax([1,5,4,8,7,100])
//23)
const numeros = {
    pares: [],
    impares: [],
    neutro : []
}
const arregloAObjeto = (...vector) => {
    if(vector.length === 0){
        return console.log("No hay valores ingresados")
    }
    for(let i = 0; i < vector.length; i++){
        const numero = vector[i]
        /*if(typeof numero !== "number"){
            console.warn(`La entrada "${numero}" no es un dato numerico`)
            continue;
        }*/
        if(numero %2 == 0 && numero !==0){
            numeros.pares.push(numero)
        }else if(numero %2 === 1){
            numeros.impares.push(numero)
        }else{
            numeros.neutro.push(numero)
        }
    }
    return console.log(numeros)
}

arregloAObjeto(5,4,3,5,0)

const separarParesImpares = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros")
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")
    if(arr.length === 0) return console.error("El arreglo esta vacio");

    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor "${num}, ingresado, NO es un numero"`)
    }

    return console.info({
        pares: arr.filter(num => num %2 === 0),
        impares: arr.filter(num => num %2 === 1)
    })
}

separarParesImpares([5,4,3,2,8])