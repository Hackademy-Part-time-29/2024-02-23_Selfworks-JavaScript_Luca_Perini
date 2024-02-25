//ESERCIZIO 1

function sfidaDadi() {
    let numeroTiri = parseInt(prompt("Utente 1 e Utente 2: Quante volte volete tirare il dado?"));
    let sommaUno = 0;
    let sommaDue = 0;

    for (let i = 1; i <= numeroTiri; i++) {
        lancioUno = Math.floor(Math.random() * (6 - 1) + 1);
        sommaUno += lancioUno;
        lancioDue = Math.floor(Math.random() * (6 - 1) + 1);
        sommaDue += lancioDue;

    }

    console.log("La somma dei tiri effettuati con i dadi corrisponde a " + sommaUno);
    console.log("La somma dei tiri effettuati con i dadi corrisponde a " + sommaDue);

    if (sommaUno > sommaDue) {
        console.log("Utente 1 vince!")
    } else if (sommaUno == sommaDue){
        console.log("Pareggio!")
    } else {
        console.log("Utente 2 vince!")
    }

}

//sfidaDadi()

//ESERCIZIO 2

function contatoreFizzbuzz (numero){
    for(let i = 0; i<= numero; i++){
        
        if (i % 15 == 0) {
            console.log("fizzbuzz")
        } else if (i % 5 == 0){
            console.log("buzz")
        } else if (i % 3 == 0){
            console.log("fizz")
        } else {
            console.log(i);
        }
    }
}

contatoreFizzbuzz(parseInt(prompt("inserisci un numero")))