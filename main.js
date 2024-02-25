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

sfidaDadi()

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

//ESERCIZIO 3

function contatorediCifre (numero){
    
        if (numero <= 9) {
            console.log("1 Cifra")
        } else if (numero <= 99 && numero > 9){
            console.log("2 Cifre")
        } else if (numero <= 999 && numero > 99){
            console.log("3 Cifre")
        } else if (numero <= 9999 && numero > 999){
            console.log("4 Cifre")
        } else {
            console.log("Numero Troppo Grande.");
        }
    
}

contatorediCifre(parseInt(prompt("inserisci un numero da 0 a 9999 e ti dirò da quante cifre è composto!")))