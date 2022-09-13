
//const { argv } = require('process');
const { options, boolean } = require('yargs');
const yargs = require('yargs');
const colors = require('colors');
// es lo mismo que lo de arriba,si no uso la constante 
//require ('colors');
const { crearArchivo} = require ('./helpers/multiplicar');
const argv =require ('./config/yargs');

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
.then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch( err => console.log(err));

//console.log(process.argv);
//console.log(argv)
//console.log('base: yargs', argv.base);
//const base = 2;
//const [ , , arg3 = 'base = 5'] = process.argv;
//const [, base = 5] = arg3.split('=');