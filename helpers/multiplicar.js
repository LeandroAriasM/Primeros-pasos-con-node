const fs = require('fs');  // Importacion de la libreria file system de node.

const colors = require('colors');


const crearArchivo = async(base = 5, listar = false, hasta =10) =>{
    try {  
    let salida ='';
    let salconsola= '';
    
    for (let i = 1; i<=hasta ; i++ ){
        salconsola+= `${base} ${colors.green('x')} ${i} = ${colors.red(base * i) }\n`;
        salida +=`${base} x ${i} = ${base * i}\n`;
    
    }

if(listar){
    console.log('====================');
    console.log('   Tabla del:', base);
    console.log('====================');
    console.log(salconsola);

}    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
    return `tabla-${base}.txt`;
    } catch (err) {
        throw (err);
    }
}


// exportar objeto en node 

module.exports = {

    //crearArchivo: crearArchivo

    //esto es igual a lo comentado arriba
    crearArchivo
}