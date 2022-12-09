const fs = require('fs');   
const colors = require('colors')
const crearArchivo = async ( base = 5 ,listar=false,hasta=10)=>{
    
    try {

        let salida,consola = '';
    
        for (let i = 1; i < (hasta+1); i++) {
            //cocatenamos 
            salida += `${base} ${'X'.green} ${i} ${'='.green} ${base*i} \n` ;
            consola += `${base} X ${i} = ${base*i} \n` ;
        }
    
        if(listar){
            console.log('==================='.green)
            console.log(`TABLA DEL ${ colors.blue( base )}`)
            console.log('==================='.green)
            console.log(salida)
        }
    
        fs.writeFileSync(`salida/tabla-${base}.txt`,consola);
        return  `tabla-${base}.txt Creada` ;
    } catch (error) {
        throw error;   
    }

   
};

module.exports={
    crearArchivo:crearArchivo
}