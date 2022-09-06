const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

let valor = document.querySelector('.valor');
let texto = document.createElement('h1');

let numero = 0;
texto.innerHTML = (numero)
valor.appendChild(texto)



btn1.addEventListener('click',(e) => {
    e.preventDefault();
    numero -= 1;
    texto.innerHTML = (numero)
    valor.appendChild(texto)
    cor();

})

btn2.addEventListener('click',(e) => {
    e.preventDefault();
    numero = 0;
    texto.innerHTML = (numero)
    valor.appendChild(texto)
    cor();
})

btn3.addEventListener('click',(e) => {
    e.preventDefault();
    numero += 1;
    texto.innerHTML = (numero)
    valor.appendChild(texto)
    cor();
})

function cor(){
    if(numero<0){
        valor.style.color = '#CF1937';
} else {
    valor.style.color = '#5F3061';
}}
