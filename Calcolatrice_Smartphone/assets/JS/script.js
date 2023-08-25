let display = document.getElementById('display')
let canc = document.getElementById('valC');
let backspace = document.getElementById('valDelete');
let perc = document.getElementById('val%');
let divisione = document.getElementById('val/');
let sette = document.getElementById('val7');
let otto = document.getElementById('val8');
let nove = document.getElementById('val9');
let moltiplicazione = document.getElementById('valX');
let quattro = document.getElementById('val4');
let cinque = document.getElementById('val5');
let sei = document.getElementById('val6');
let sottrazione = document.getElementById('val-');
let uno = document.getElementById('val1');
let due = document.getElementById('val2');
let tre = document.getElementById('val3');
let addizione = document.getElementById('val+');
let casual = document.getElementById('testo')
let zero = document.getElementById('val0');
let punto = document.getElementById('val.');
let uguale = document.getElementById('uguale');

/* NUMERI */

canc.addEventListener("click", function () {
    cancella()
})
uno.addEventListener("click", function () {
    scrivi('1')
})
due.addEventListener("click", function () {
    scrivi('2')
})
tre.addEventListener("click", function () {
    scrivi('3')
})
quattro.addEventListener("click", function () {
    scrivi('4')
})
cinque.addEventListener("click", function () {
    scrivi('5')
})
sei.addEventListener("click", function () {
    scrivi('6')
})
sette.addEventListener("click", function () {
    scrivi('7')
})
otto.addEventListener("click", function () {
    scrivi('8')
})
nove.addEventListener("click", function () {
    scrivi('9')
})
zero.addEventListener("click", function () {
    scrivi('0')
})
punto.addEventListener("click", function () {
    scrivi('.')
})

/* OPERAZIONI */

addizione.addEventListener("click", function () {
    scrivi('+')
})
sottrazione.addEventListener("click", function () {
    scrivi('-')
})
moltiplicazione.addEventListener("click", function () {
    scrivi('*')
})
divisione.addEventListener("click", function () {
    scrivi('/')
})
perc.addEventListener("click", function () {
    calcoloPercentuale()
})
uguale.addEventListener("click", function () {
    calcola()
})
backspace.addEventListener("click", function () {
    eliminaUltimoCarattere()
})
casual.addEventListener("click", function () {
    testoRandom()
})

/* FUNZIONI */

function scrivi(testo) {
    display.textContent += testo;
}

function cancella() {
    display.textContent = ""
    display.style.fontSize = '3em';
}

function calcola() {
    let espressione = display.textContent
    try {
        let risultato = eval(espressione);
        display.textContent = risultato;
    } catch (error) {
        display.textContent = "Errore";
    }
}

function calcoloPercentuale() {
    numero = display.textContent
    let percentuale = numero / 100;
    display.textContent = percentuale
}

function eliminaUltimoCarattere() {
    espressione = display.textContent
    if (espressione.length > 0) {
        let nuovoTesto = espressione.slice(0, -1)
        display.textContent = nuovoTesto
    }
}

function testoRandom() {
    let arrayFrasi = [
        'Buongiorno!',
        "Come va?",
        "Benvenuto!",
        "Mi chiamo Calculator, come posso esserti utile?",
        "Sono la calcolatrice migliore del mondo"
    ];
    let frasi = Math.floor(Math.random() * arrayFrasi.length);
    display.textContent = arrayFrasi[frasi];
    display.style.fontSize = '1.2em';
    display.style.textAlign = 'right';
}