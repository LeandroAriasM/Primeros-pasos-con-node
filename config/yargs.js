const argv = require ('yargs')
.option('b',{
    //crea un alias para base mas corto
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar.'

})
.option('h',{
    //crea un alias para base mas corto
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Hasta aquie llega la tabla'

})
.options('l',{
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    default: false,
    describe: 'Muestra la tabla en consola'

})
//checkea que sea un numero
.check((argv,options)=>{
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un numero'
    }
    return true;
}).argv;

module.exports = argv;