const argv = require('yargs')
                .option('b',{
                        alias:'base',
                        type:'number',
                        demandOption:true,
                        describe:'es la base de la tabla de multiplicar'

                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    demandOption:true,
                    default: false,
                    describe: 'Muestra la tabla de multiplicar en consola'

                })
                .check( (argv,options)=>{
                    if( isNaN(argv.b) ){
                        throw 'la base debe ser un numero';
                    }
                    return true;
                } )
                .argv;

module.exports = argv;