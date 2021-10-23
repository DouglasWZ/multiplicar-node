// require
const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');


// Funciones

let listarTabla = (base, limite = 10) => {

    console.log('=========================='.green);
    console.log(`       Tabla del ${base}`.red);
    console.log('=========================='.green);


    for (let c = 1; c <= limite; c++) {
        let resultado = base;
        resultado = resultado * c;
        console.log(`${base} X ${c} = ${resultado}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return
        }

        for (let c = 1; c <= limite; c++) {
            let resultado = base;
            resultado = resultado * c;
            data += (`${base} X ${c} = ${resultado}\n`);
        }

        fs.writeFile(`tablas/tabla-${base} al ${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`Archivo creado: tabla-${base}-al-${limite}.txt`);
            }
        });
    })

}

module.exports = {  // Exportamos el modulo para poder usarlo en otro archivo
    /* crearArchivo: crearArchivo; */ // Esto ya no es necesario con el EMSC 6
    crearArchivo,
    listarTabla
}