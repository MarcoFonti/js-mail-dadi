// Check 
console.log('JS OK DADI');

//Prendo gli elementi id
const player1Element = document.getElementById('player1');
const player2Element = document.getElementById('player2');
const playerVincElement = document.getElementById('playerVinc');

// Verifco in Console
console.log(player1Element, player2Element);

// Creo le variabili Min e Max
let min = 1
let max = 6

// Numeri Random 
const randomPlayer1 = Math.floor(Math.random()*(max + 1 -min)) + min;
const randomPlayer2 = Math.floor(Math.random()*(max + 1 -min)) + min;

// Verifico in Console
console.log(randomPlayer1, randomPlayer2);

// Metto in Pagina
player1Element.innerHTML = randomPlayer1;
player2Element.innerHTML = randomPlayer2

// Creo la variabile vuota 
let vincent = '';

// Creo le condizioni 
if (randomPlayer1 > randomPlayer2) {
    vincent = 'PLAYER 1'
} else if (randomPlayer2 > randomPlayer1) {
    vincent = 'PLAYER 2'
} else if (randomPlayer1 === randomPlayer2){
    vincent = 'PAREGGIO'
}

// Metto in pagina il risultato
playerVincElement.innerText = vincent;