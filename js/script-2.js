// Check 
console.log('JS OK LOGIN');

/* RECUPERO ELEMENTI ID  */
const buttonElement = document.getElementById('button-user');
const inputElement = document.getElementById('email');
const answerElement = document.getElementById('answer');


/* CREO UN ARRAY CON AL SUO INTERNO DELL'EMAIL */
const email = ['marcofonti@gmail.com', 'matteoconti@gmail.com', 'jenniferfonti@gmail.com'];


/* CONTROLLO RISPOSTA */
console.table(email);



/* AL CLICK SUL BOTTONO INVIA CREO UN EVENTO */
buttonElement.addEventListener ('click', function(){


    /* CREO UNA VARIBILE IN CUI MI SALVO L'AMAIL DEL UTENTE */
    const userEmail = inputElement.value;


    /* CREO UNA VARIBILE PER MANIPOLARLA NELLA CONDIZIONE */
    let userIsAllowed = false;


    /* CICLO FOR FINCHE' LA I E' MINORE DELLA LUNGHEZZA DELL'ARRAY E CHE SE LA VARIBILE USERISALLOWED E' FALSA CONTINUA IL CICLO */
    for (let i = 0; i < email.length && !userIsAllowed; i++){


        /* CONTROLLO RISPOSTA DEL VALORE E DELL'INDECE DEL MIO ARRAY CREATO */
        console.log (email[i]);


        /* CONTROLLO EMAIL INSERITA DALL'UTENTE */
        console.log (userEmail);


        /* SE EMAIL DELL'UTENTE E IDENTICA A UNA DELLE MIE EMAIL DELL'ARRAY */
        if (email[i] === userEmail) {

            /* RISPOSTA */
            console.log('trovata')

            /* LA VARIBILE USERISALLOWED E' TRUE QUINDI FERMO IL CICLO */
            userIsAllowed = true;
        } 
    }


    /* CONTROLLO IN CONSOLE SE L'UTENTE E' IN LISTA O NO */
    console.log ('utente autorizzato: ', userIsAllowed)


    /* SE LA MIA VARIBILE CHE FERMA IL CICLO E' INDENTICA A TRUE */
    if (userIsAllowed === true) {

        /* STAMPO IN PAGINA */
        answerElement.innerText = 'Benvetuto'

        /* ALTRIMENTI */
    } else {

        /* STAMPO IN PAGINA */
        answerElement.innerText = 'Non sei in lista'
    }

})

