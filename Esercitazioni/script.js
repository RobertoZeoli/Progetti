var data = new Date (2023,4,26,12,30,45);
console.log(data);

var nuovaData= new Date();
console.log(nuovaData);

var nuovaData2= new Date("May 26, 1992")
console.log(nuovaData2);

let numeri = [1,3,6,25,64,82];
function maggiore(valore){
    return (valore>10);
}
let maggiori= numeri.filter(maggiore);
console.log(maggiori);

let body = document.querySelector("body");
let newDiv = document.createElement("div");

newDiv.innerHTML= "Hello World"
newDiv.style.backgroundColor= "red"

body.appendChild(newDiv);

function text(){
    let button = document.querySelector("button")
    let h1 = document.createElement("h1")

    h1.innerHTML= "CIAO BELLO"
    body.appendChild(h1)
}