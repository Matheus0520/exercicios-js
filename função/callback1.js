const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))



//Criei um array de números
let arrayNumeros = [1, 2, 3, 4, 5]
 
//Criei uma função que será passada como a callback do forEach
//Observe deve obedecer a ordem da assinatura das callbacks do forEach: 
//Primeiro o valor corrente (numero a ser dobrado), depois o índice(index do array)
//Observe também você só precisa passar os parâmetros que for usar na função.
let dobro = function (numero, indice) {
    //A função apenas imprimirá o índice do elemento + 1 e o seu valor corrente * 2. 
    console.log(`O dobro do elemento ${indice+1} é igual a ${numero*2})`)
}
 
//Aqui ele chama o forEach à partir do array e passando a callback como parâmetro.
arrayNumeros.forEach(dobro)

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[2] = 9
