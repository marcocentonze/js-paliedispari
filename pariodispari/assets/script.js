/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
  
   Consigli del giorno
-Scriviamo sempre in italiano i passaggi che vogliamo fare
-Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
non partiamo a bomba con la scrittura delle funzioni, ma prima scriviamo la logica come facciamo di solito, poi passiamo al refactoring e cerchiamo di capire cosa sia meglio creare come funzione.*/


//prompt pari o dispari
const pariODispari = prompt("pari o dispari?");
console.log(pariODispari);

//prompt numero da 1 a 5
const numeroUtente = Number(prompt("Scegli un numero da 1 a 5"));
console.log(numeroUtente);

//generiamo numero random(da 1 a 5)con una funzione
let numeroRandomPc = Math.floor(Math.random() * 5 + 1);
console.log(numeroRandomPc);
//sommiamo i due numeri
let sum = 0;
sum = numeroUtente + numeroRandomPc;
console.log(sum);
//creiamo una variabile per dire se è pari o dispari
//let numeroPari = "pari";
//let numeroDispari = "dispari";
//stabiliamo se la somma dei due numeri è pari o dispari
/*if (sum % 2 === 0) {
  sum = numeroPari;
  console.log(sum);        //ok ma devo usare la funzione
} else {
  sum % 2 !== 0;
  sum = numeroDispari;
  console.log(sum);
} */

function isEven(sum) {
   if (sum % 2 === 0) {
    return "pari" ;
   } 
   return "dispari";
}
console.log(isEven(sum));

//dichiariamo il vincitore
if (isEven(sum) == pariODispari) {
  console.log("Complimenti hai vinto");
} else {
  console.log("Mi dispiace,hai perso");
}  




