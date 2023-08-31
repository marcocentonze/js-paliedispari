/*Palidroma
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma*/

// Chiedo all'utente di inserire una parola
const parolaUtente = prompt("Inserisci una parola:").toLowerCase();

// Funzione per capire se una parola è un palindromo
function isPalindrome(parola) {

  //creo una variabile per ottenere la lunghezza della parola
  const length = parola.length;

  //ciclo per scorrere tra le lettere della parola
  for (let i = 0; i < length; i++) {

    // Confronta la prima lettera con l'ultima(della stessa parola).Esempio "Anna". 1 ciclo a(la prima) e a(la ultima).2 ciclo n(la prima) e n(l'ultima).
    if (parola[i] !== parola[length - 1 - i]) {


      // Se le lettere non corrispondono, restituisce 'false' (non è un palindromo)
      return false;
    }
  } //altrimenti restituisce vero...
  return true;
}

// Verifica se la parola inserita è un palindromo (if + stampa in console)
if (isPalindrome(parolaUtente)) {

  console.log(`${parolaUtente} è un palindromo.`);

} else {

  console.log(`${parolaUtente} non è un palindromo.`);
}
