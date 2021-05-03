/** 
    Snack 2
  
    A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
    Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16 

*/



const numbers = [1, 2, 3, 4, 5];

// pass a function to map

const numbersQuad = numbers.map( number => number * number);


// forEach
const potenze = [];

numbers.forEach( (number) =>{
    potenze.push(number * number);
});


console.log(`Array originale: ${numbers}`);
console.log(`Potenze al quadrato: ${numbersQuad}`);