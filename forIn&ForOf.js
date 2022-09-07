// for in 

const libro =  {
    titulo: 'Harry potter y el misterio de JS',
    autor: 'Victor',
    paginas: 300
};

/**Las dos formas de obtener las porpiedades de un objeto */
libro.titulo
libro['titulo']

for(let nombrePropiedad in libro) {
    console.log(nombrePropiedad, libro[nombrePropiedad]);
}

//for of

let frutas = ['fresa', 'mango', 'melon'];

frutas[0] // fresa
frutas[1] // mango
frutas[2] //melon
1
for(let fruta of frutas) {         // lo primero es la palabra resrvado for y despues of
    console.log(fruta);            // el valor del arreglo de izquierda a derecha
}

let obj = {
    frutas: [],
    personajes: [],
}

for(let propiedad in obj) {
    for(let elemento of obj[propiedad]){
        console.log(lemento);
    }
}
/** Funciones repaso */


function imprimirNombre() {
    //
    console.log('Mi nombre es ' + nombre);
    return;
}

imprimirNombre('Victor');


function hacerGelatina() {
    return `Esta es la gelatina de sabor ${sabor} y con forma ${forma}`
}

let gelatinaDeIsra = hacerGelatina('jerez', 'gato');

let gelatinaDeVictor = hacerGelatina('fresa', 'redonda');

console.log(gelatinaDeVictor);

let fecha = '06/09/2022';
function hacerGelatina() {
    return `Esta es la gelatina de sabor ${sabor} y con forma ${forma}`
}


