//console.log('Hello,  world')

// acceso al DOM con querySelector 
const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');   // secciona todos los elementos p (en forma de lista)
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

// imprime valor de input
console.log(input.value)

//imprime todos los elementos en forma de objeto
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});
