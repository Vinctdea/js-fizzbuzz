// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const container = document.querySelector(".container");

// fare un ciclo che genera numeri da 1 a 100
for (let i = 1; i <= 100; i++){
console.log(i);
const elem = `<div class="box"> ${i} </div>`;
console.log(elem);
container.innerHTML += elem;

if( i % 3 === 0 ){
    elem.classList.add ("diviso3");
}else if ( i % 5 === 0){
    elem.classList.add ("diviso5");
}else if ( i % 15 === 0){
    elem.classList.add ("diviso15");
}
}


