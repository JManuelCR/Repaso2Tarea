/**Ejercicio 1 
 * Generar una variable con el nombre que quieras con 
 * cada tipo de dato
 */

let edad = 30;

let estado = 'solido';

const minombre = 'Manu';

let esMexicano = true;

let sabeMaquetado = undefined;

let conocimientoJs = null;

let mesesSinIntereses = [3, 6, 12, 18];

let bebida = {
    color: "amarillo",
    sabor: "frutas",
    contenido: 355,
    marca: "coca-cola company",
    origen: "Mexico"
}

let tipoDeDato = typeof bebida;

/** Ejercicio 2
 * Generar una variable de tipo objeto que represnte un
 * auto
 */

const auto = {
    marca: 'nissan',
    color: 'Negro',
    puertas: 4,
    vidrios: 'electricos',
    trasmision: 'VSG',
    calibracionDeRuedas: [32, 32, 35, 35],
    radio: true,
    propietario: undefined,
    descuento: null,
}

/**Ejercicio 3
 * Generar una variable de tipo arreglo con el nombre
 * que quieras
 */

const kodersG21 = [
    rodri,
    fanny,
    cintia,
    deni,
    annie,
    fer,
    benja,
    rafa,
    jona,
    manu,
    christian,
    javi,
    xavy,
    hector,
    victor,
    emanuel,
];

/**Ejercicio 4
 * Generar un script que imprima 10 vecess el nombre de tu
 * mascota
 */

let miMascota = 'Danna';

for(let i = 0; i < 10; i++) {
    console.log('El nombre de mi mascota es: ' + miMascota);
}

/**Ejercicio 5
 * Generar un programa que el prima el nombre de una 
 * persona siempre y cuando sea mayor de edad
 */

function validarPersonaMayorDeEdad(nombre, edad) {
    if(edad > 18){
        console.log(`${nombre},\nSe ha impreso tu nombre parque eres mayor de edad`);
    }else{
        console.log('Lo siento no eres mayor de edad');
    }
}

validarPersonaMayorDeEdad(Carlos, 16);



/**Ejercicio 6
 * Generar un programa que imprima los 
 */


