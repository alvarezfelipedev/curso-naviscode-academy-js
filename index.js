// const nombre = 'Felipe'
// const edad = '21'
// const mayorDeEdad = 'true'
// const direccion = { calle: 'Marcon', numero: 2308 }
// const coloresFavoritos = ['Celeste', 'Blanco', 'Crema']
// const lenguajesFavoritos = ['JS', 'React', 'HTML']
// const mejorLenguaje = lenguajesFavoritos[0]
// const peorLenguaje = lenguajesFavoritos[lenguajesFavoritos.length - 1]

// console.log(peorLenguaje);

// const numero1 = 13
// const numero2 = 34
// console.log(numero1 + numero2);

// const numero3 = 45
// const numero4 = 2
// console.log(numero3 - numero4);
// console.log(numero3 * numero4);
// console.log(numero3 / numero4);

// let saludo = 'Hola'
// if(saludo = 'Hola'){
//     console.log('Ha saludado');
// }

// let pokemones = ['Roberto', 'Lucas', 'Marcos']
// console.log(pokemones);
// console.log(pokemones.join(', '));

// for (const key in pokemones) {
//     console.log(pokemones[key]);
// }

// let pokemones2 = [
//     {nombre: 'Josefina', tipoDePokemon: 'Agua'},
//     {nombre: 'Marcos', tipoDePokemon: 'Tierra'},
//     {nombre: 'Ricardo', tipoDePokemon: 'Tierra'}
// ]

// if(pokemones2['tipoDePokemon'] === 'Fuego') {
//     console.log('Es un pokemon de fuego');
// } else {
//     console.log('No hay pokemones de fuego');
// }

// let numero1 = 5;
// let numero2 = 4;

// let dobleDelNumero = () => {
//     console.log(numero1 * numero2);
// }

// dobleDelNumero()

// let cuadradoDeEseNumero = (cuadrado) => {
//     console.log(cuadrado * 2);
// }

// cuadradoDeEseNumero(4)

// let areaDelRectangulo = (l) => {
//     console.log(l * l);
// }
// areaDelRectangulo(5)

// let parOImpar = (numero) => {
//     return (numero % 2) == 0; 
// }
// parOImpar(2)

const personas = [

    { nombre: 'Juan', edad: 18 },

    { nombre: 'María', edad: 16 },

    { nombre: 'Pedro', edad: 20 },

    { nombre: 'Pablo', edad: 15 },

    { nombre: 'Laura', edad: 19 },

];
console.log(personas);

// const personasMayoresDeEdadBoolean = personas.some((persona) => persona.edad >= 18) 
// console.log(personasMayoresDeEdadBoolean); // devuelve booleano

const mayoresDeEdad = personas.find((persona) => persona.edad >= 18)
console.log(mayoresDeEdad); // devuelve el primer elemento q' es > 18

// const mayoresDeEdad = personas.filter((personas) => personas.edad >= 18)
// console.log(mayoresDeEdad); // muestra todos los mayores de Edad

// const personaMasJoven = personas.sort( ( a, b ) => a.edad - b.edad )
// console.log(personaMasJoven[0])

// const personaMasMayor = personas.sort( ( a, b ) => b.edad - a.edad )
// console.log(personaMasMayor[0])

let pokemones1 = [
    { nombre: 'Josefina', tipoDePokemon: 'Agua' },
    { nombre: 'Marcos', tipoDePokemon: 'Fuego' },
    { nombre: 'Ricardo', tipoDePokemon: 'Fuego' }
]

// pokemones2.forEach((element) => {
//   console.log(element.nombre); // Josefina, Marcos, Ricardo
// });

// let tipoDePokemon = pokemones1.filter((e) => e.tipoDePokemon == 'Fuego')
// console.log(tipoDePokemon);


