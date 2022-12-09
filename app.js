const fs = require('fs');
//const { argv } = require('process');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')
const colors = require('colors')

//console.clear();
//console.log(argv);
//console.log('base_yargs:',argv.b);
//const [,,arg3='base=5'] = process.argv;
//const [, base = 5] = arg3.split("=")


//console.log(base);
crearArchivo(argv.b,argv.l,argv.h).then(nombreArchivo => console.log( `${nombreArchivo.rainbow} creado` ))
                  .catch( err => console.log(err) );