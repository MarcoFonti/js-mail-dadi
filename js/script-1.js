// Check 
console.log('JS OK DADI');

/* RECUPER ELEMENTI IN BASE ID */
const player1Element = document.getElementById('player1');
const player2Element = document.getElementById('player2');
const playerVincElement = document.getElementById('playerVinc');
const buttonPlayElement = document.getElementById('button-play');


/* CONTROLLO RISPOSTA */
console.log(player1Element, player2Element);


/* AL CLICK SUL BOTTONE GIOCHIAMO CREO UN EVENTO */
buttonPlayElement.addEventListener('click', function () {


    /* CREO DUE VARIBILI PER VALORE MAX E MIN NEL RANDOMIZZATORE */
    let min = 1
    let max = 6


    /* CREO E SALVO IN UNA VARIBILE PER OGNI PLAYER UN NUMERO RANDOM */
    const randomPlayer1 = Math.floor(Math.random() * (max + 1 - min)) + min;
    const randomPlayer2 = Math.floor(Math.random() * (max + 1 - min)) + min;


    /* CONTROLLO RISPOSTA */
    console.log(randomPlayer1, randomPlayer2);


    /* STAMPO IN PAGINA I DUE NUMERI RANDOM  */
    player1Element.innerHTML = randomPlayer1;
    player2Element.innerHTML = randomPlayer2


    /* CREO UNA VARIBILE DA MANIPOLARE NELLA CONDIZIONE */
    let vincent = '';


    /* SE IL NUMERO RANDOM DEL PLAYER1 E MAGGIORE DI QUELLA DEL PLAYER2 */
    if (randomPlayer1 > randomPlayer2) {

        /* MODIFICO LA VARIBILE E ASSEGNO IL PLAYER1 */
        vincent = 'PLAYER 1'

        /* ALTRIMENTI SE IL NUMERO RANDOM DEL PLAYER2 E MAGGIORE DI QUELLA DEL PLAYER1 */
    } else if (randomPlayer2 > randomPlayer1) {

        /* MODIFICO LA VARIBILE E ASSEGNO IL PLAYER2 */
        vincent = 'PLAYER 2'

        /* ALTRIMENTI SE I DUE NUMERI RANDOM SONO IDENTICI */
    } else if (randomPlayer1 === randomPlayer2) {

        /* MODIFICO LA VARIBILE E ASSEGNO IL PAREGGIO */
        vincent = 'PAREGGIO'
    }


    /* STAMPO IN PAGINA IL RISULTATO DEL VINCITORE */
    playerVincElement.innerText = vincent;


})

