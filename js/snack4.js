/** 
Snack 4
    
Crea un array composto da 10 automobili. 

Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).

    - Dividi in 3 array separati. Inserire nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo e ultimo il resto delle auto. 
    - Infine stampa separatamente i 3 array.
  
*/

const automobile = [
    {
        marca: 'AAAAAAA',
        modello: 'aaaaa',
        alimentazione: 'benzina',
    },
    {
        marca: 'BBBBB',
        modello: 'bbbbb',
        alimentazione: 'diesel',
    },
    {
        marca: 'CCCCCC',
        modello: 'ccccc',
        alimentazione: 'benzina',
    },
    {
        marca: 'DDDDDDD',
        modello: 'dddddd',
        alimentazione: 'gpl',
    },
    {
        marca: 'EEEEEE',
        modello: 'eeeeee',
        alimentazione: 'diesel',
    },
    {
        marca: 'FFFFFFF',
        modello: 'fffffffff',
        alimentazione: 'benzina',
    },
    {
        marca: 'GGGGGGGG',
        modello: 'ggggggggg',
        alimentazione: 'elettrico',
    },
    {
        marca: 'HHHHHHHHH',
        modello: 'hhhhhhhhh',
        alimentazione: 'gpl',
    },
    {
        marca: 'IIIIIIIII',
        modello: 'iiiiiiiiii',
        alimentazione: 'metano',
    },
    {
        marca: 'LLLLLLLLL',
        modello: 'llllllllll',
        alimentazione: 'metano',
    },
 ];

const autoBenzina = automobile.filter( (auto) => {
    return auto.alimentazione === 'benzina';
});


const autoDiesel = automobile.filter( (auto) => {
    return auto.alimentazione === 'diesel';
});

const altre = automobile.filter( (auto) => {
    return auto.alimentazione !== 'benzina' && auto.alimentazione !== 'diesel';
});

console.log(autoBenzina);
console.log(autoDiesel);
console.log(altre);


