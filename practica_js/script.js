//console.log('Hello,  world')

// acceso al DOM con querySelector 
const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');   // secciona todos los elementos p (en forma de lista)
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');

// seleccionar controles
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// imprime valor de input
console.log(input1.value)

//imprime todos los elementos en forma de objeto
console.log({
    h1,
    p,
    parrafito,
    pid,
    input1,
});

//modifica a nivel de texto
h1.innerText = 'Pato <br> Feo';

//modifica a nivel de HTML, inyecta código HTML
h1.innerHTML = 'Pato <br> Feo';

//retorna, lée el valor del atributo
console.log(h1.getAttribute("pantalla"))

//asigna valor a un atributo
h1.setAttribute("color", "rojo")

//agrega clases al elemento HTML
h1.classList.add('amarillo')
h1.classList.add('verde')

//elimina clases al elemento HTML
h1.classList.remove('amarillo')

//modificación directa de value de input
input1.value = "456"

//creación de elemento HTML desde cero
const img = document.createElement("img")
img.setAttribute('src', 'https://i.imgur.com/bmTatTl.jpeg')
console.log(img)

pid.append(img)

function btnOnClick(){
    console.log('Evento click.')
    //a = parseFloat(input1.value)
    //b = parseFloat(input2.value)

    const sumaInputs = input1.value + input2.value
    pResult.innerText = "Resultado: " + sumaInputs
}