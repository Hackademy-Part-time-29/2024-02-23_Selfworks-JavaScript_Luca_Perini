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