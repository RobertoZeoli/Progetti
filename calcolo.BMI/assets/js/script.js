//BMI = PESO(KG)/ALTEZZA(M) AL QUADRATO

let form = document.getElementById('form')
let risultato = document.getElementById('risultato');
let calcoloBmi = document.getElementById('bmi')

form.addEventListener("submit", function(event){
    event.preventDefault();

    var nomeValore = form.elements.nome.value;
    var cognomeValore = form.elements.cognome.value;
    var altezzaValore = form.elements.altezza.value;
    var pesoValore = form.elements.peso.value;
    var bmi = pesoValore/ (altezzaValore*altezzaValore);

    risultato.innerHTML = "Ciao " + nomeValore + " " + cognomeValore + "!";
    calcoloBmi.innerHTML = "Il tuo BMI è " + bmi;

    if(bmi<18 | bmi>30){
        calcoloBmi.style.color='red';
    }
});
