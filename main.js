const Block = require('./Block');
const   Blockchain = require('./Blockchain');


const blockchain= new Blockchain("Hola a mi nueva cadena ")
blockchain.addBlock("data del segundo bloque ");
blockchain.addBlock("data del tercer bloque ");
blockchain.addBlock("data del tercer bloque ");



console.log(blockchain);