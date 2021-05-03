/** 
    Snack 3
    
    Crea un array composto da 10 brand famosi (Sony, Gucci, Apple, Samsung, Dolce&Gabbana). 
        
    - Partendo da questo array creare un nuovo array dove tutti i brand dovranno essere "normalizzati" (le lettere maiuscole saranno convertite in minuscolo quindi Gucci diventerà gucci) e aggiungere, sempre in questo contesto di "clonazione", una nuova proprietà denominata "foundationYear". 
    
    Quest'ultima proprietà conterrà l'anno (mettete un valore voi, è necessario inserire valore reale) in cui l'azienda è stata fondata. 
  

*/
/************************************************************************************
 
const brands = [ 'Apple', 'Samsung', 'Oppo', 'Nokia'];
console.log(brands);


const brandLower = [];

brands.forEach( (brand) => {
    brandLower.push(brand.toLocaleLowerCase());
});
console.log(brandLower);


const brandsYear = [];

for (let i = 0; i < brandLower.length; i++) {
    brandsYear.push({
    name: brandLower[i],
    foundationYear: prompt(`Inserisci l'anno di fondazione per il brand ${brandLower[i]} :`),
    });
 }

 console.log(brandsYear);

/*********************************************************************************** */

const brands = [
    {
    nome: 'Apple',
    },
    {
    nome: 'Samsung',
    },
    {
    nome: 'Oppo',
    },
    {
    nome: 'Nokia',
    },
 ];

/**
* MAP
*/
const newArray = brands.map( (obj) => {
    
    let newObj = {
        name: obj.nome.toLocaleLowerCase(),
        foundationYear: randomNumber(1920, 2000),
    }
    return newObj;
 });
 console.log(newArray);
 


/**
 * FOREACH
 
const newArray = [];

brands.forEach( (obj) => {
    newArray.push({
        name: obj.name.toLowerCase(),
        foundationYear: '',
    })
});

console.log(newArray);
*/

/**************************************************** 
 * FUNCTION UTILITIES
*****************************************************/
/**
 * GENERA NUMERO RANDOM
 */

 function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}