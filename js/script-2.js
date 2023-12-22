// Check 
console.log('JS OK LOGIN');

// Prendo Id in pagina
const buttonElement = document.getElementById('button-user');
const inputElement = document.getElementById('email');
const email = ['marcofonti@gmail.com', 'matteoconti@gmail.com', 'jenniferfonti@gmail.com'];
const answerElement = document.getElementById('answer')
// Valore di email in Console
console.table(email);



// Al momento del click 
buttonElement.addEventListener ('click', function(){

    // Mi salvi l'email
    const userEmail = inputElement.value;

    // Presumo subito che non sia nella lista
    let userIsAllowed = false;

    // Creo il conteggio 
    for (let i = 0; i< email.length && !userIsAllowed; i++){

        // Stampo email che ho gia e quella dell'utente in console
        console.log (email[i]);
        console.log (userEmail);

        // Se l'email dellutentem è identica a quella della lista allora stampo in console e diventa true
        if (email[i] === userEmail) {
            console.log('trovata')
            userIsAllowed = true;
        } 
    }

    // Stampo se l'utente è in lista o no (false o true)
    console.log ('utente autorizzato: ', userIsAllowed)

    // Stampo in pagina
    if (userIsAllowed === true) {
        answerElement.innerText = 'Benvetuto'
    } else {
        answerElement.innerText = 'Non sei in lista'
    }

})

