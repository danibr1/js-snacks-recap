/** 
    Snack 1
    A:
        Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
        - Età
        - Media punti fatti per partita
        - Percentuale di successo per tiri da 3 punti
        - Codice giocatore

    Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
        - l'età deve essere compresa tra 18 e 40
        - la media punti fatti per partita deve essere compresa tra 0 e 50
        - la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
        - il codice giocatore deve essere formato da 3 lettere maiuscole casuali (array di lettere) e 3 cifre casuali

    Stampare poi Codice giocatore, Media punti e percentuale tiri da 3 punti.

    B:
        Creare un array di 10 giocatori di basket, con le regole sopra indicate
        Dopo aver creato l'array, stampa codice giocatore e media punti per ogni giocatore.

    C:
        Creare un nuovo array con i giocatori che hanno una media di punti superiore a 25 e
        la percentuale di successo per i tiri da 3 punti superiore all’50%.
*/

/*************************************************************
 * SNACK A
 *************************************************************/

const giocatore = {
    eta: randomNumber(18, 40),
    mediaPunti: randomNumber(0, 50),
    trePunti: randomNumber(0, 100),
    codiceGiocatore: genPlayerCode (),
};

console.log(giocatore);
console.log(`Codice del giocatore: ${giocatore.codiceGiocatore}, media punti: ${giocatore.mediaPunti}, percentuale successo: ${giocatore.trePunti}%`);

/*************************************************************
 * SNACK B
 *************************************************************/

const giocatori = [];

for (let i = 0; i < 10; i++) {
   giocatori.push({
    eta: randomNumber(18, 40),
    mediaPunti: randomNumber(0, 50),
    trePunti: randomNumber(0, 100),
    codiceGiocatore: genPlayerCode (),
   });
}

console.table(giocatori)

giocatori.forEach((giocatore) => {
    console.log(`Codice Giocatore: ${giocatore.codiceGiocatore} | Media punti: ${giocatore.mediaPunti}`);
})


/*************************************************************
 * SNACK C
 *************************************************************/

const bestPlayers = giocatori.filter( (element) => {
    return element.mediaPunti > 25 && element.trePunti > 50;
});

console.table(bestPlayers);


/**************************************************** 
 * FUNCTION UTILITIES
*****************************************************/
/**
 * GENERA NUMERO RANDOM
 */

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * GENERA CODICE GIOCATORE: LETTERE+CIFRE
 */

function genPlayerCode (){
   
    const lettere = ['A', 'B', 'C', 'D', 'E',];

    let chars = '';
    let numbers = '';

    for (let i = 0; i < 3; i++) {
        chars += lettere[randomNumber(0, lettere.length - 1)];
        numbers += randomNumber(0,9);
    }
    return  chars + numbers;
}





