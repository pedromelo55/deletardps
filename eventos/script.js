// EVENTOS

function print() {
    console.log('print')
}

// eventos de teclado
const input = document.querySelector('input')

input.onkeydown = function() {
    console.log('rodei')
}


const h1 = document.querySelector('h1');
h1.addEventListener('mouseover', print)