const fs = require('fs');   

const crearArchivo = async ( base = 5 ,listar=false)=>{
    
    try {

        let salida = '';
    
        for (let i = 1; i < 11; i++) {
            //cocatenamos 
            salida += `${base} X ${i} = ${base*i} \n` ;
        }
    
        if(listar){
            console.log('===================')
            console.log(`TABLA DEL ${base}`)
            console.log('===================')
            console.log(salida)
        }

    
        fs.writeFileSync(`tabla-${base}.txt`,salida);
        return  `tabla-${base}.txt Creada` ;
    } catch (error) {
        throw error;   
    }

   
};

module.exports={
    crearArchivo:crearArchivo
}