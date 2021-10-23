const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break
    default:
        console.log('Comando no reconocido');
}

/* let base = 1; */

/* console.log(process.argv); */

/* let argv2 = process.argv; */

/* console.log(argv); *//*
console.log('Limite', argv.limite); */
/* console.log(argv2); */



// Process es una variable global ya de node. es un objecto con diferentes propiedades.
/* let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]; */ // El split sirve para separar elementos, de un string a un arreglo

/* Al ejecutar la aplicacion si ponemos node app base=5, creara de igual mente el archivo porque lo que esta antes del igual lo toma como
    primer parametro, y nosotros le estamos indicando que tome el segundo o el 1 y que lo separe con un =*/

/* console.log(base);*/
