const SHA256 = require('crypto-js/sha256');

class Block {
    //Index = posicion del bloque en la cadena(que lugar ocupa) 
    //Data = EL contenido de la cadena de bloques 
    // previousHash = Valor del bloque anterior que la cadena 
    //date = fecha de creacion del bloque. 
    //hash =  
    //nounce = numero aleatorio 

    constructor(index, data, previousHash=''){
        this.index = index;
        this.data = data;
        this.previousHash = previousHash;
        this.date = new Date();
        this.hash = this.createdHash();
        this.nounce = 0;
    }


    createdHash(){
        const originalChain = `${this.index} ${this.data} ${this.date} ${this.nounce}`;
        return SHA256(originalChain).toString();
    }




    mine(dif){

        while(!this.hash.startsWith(dif)){
            this.nounce++;
            this.hash = this.createdHash();

        }
    }

}
module.exports = Block;