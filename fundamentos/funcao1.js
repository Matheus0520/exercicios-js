// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)// valor 'b' não definido 
imprimirSoma(2, 10, 4, 5, 6, 7, 8)// flexibilidade da linguagem 
imprimirSoma()

//Funcao com retorno 
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // NaN = not a number 

// teste !!

function calcularArea() {
    var a, b, h;
    h = prompt("entre com uma altura")
    b = prompt("entre com uma base")
    return a = b * h
}
console.log(calcularArea())