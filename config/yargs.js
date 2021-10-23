/* Comando en la consola

    node app.js listar --limite 20 --base 5 ( o por su alias) --b 5

*/

const opts = {
    base: {
        demand: true, /* Le decimos que ese comando es obligatorio */
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: '10'
    }
}

const argv = require('yargs')
    /* command recibe 3 parametros. el primero el nombre del comando, el segundo informacion o ayuda que se le muestra al usuario, y el tercero es un objeto que va recibir la 
    configuracion de parametros o de flags que ese comando puede recibir */
    .command('listar', 'Imprime en consola la tabla de multiplciar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}