const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // 'length' conta a contidade de itens no array

valores.push({id: 3}, false, null, 'teste') // 'push' adiciona elementos na array mesmo que seja de outros tipos 
console.log(valores)// para adicionar no primeiro elemento se usa 'shift'//

console.log(valores.pop()) // retira o ultimo elemento da array 
delete valores [0] // delete 'apaga' o valor indicado da array
console.log(valores)

console.log(typeof valores)

// para adicionar um elemento no inicio da array se usa 'unshift'
// para remover um elemento pelo indice se usa 'splice'

function somaNota() {
    var nota = []
    nota.push = prompt("Entre com a nota 1")
    nota.push = prompt("Entre com a nota 2")
    console.log(nota)
}
somaNota();


function armazenaNota() {
    var nota = []
    nota.push[0]= prompt("Entre com a nota 1")
    nota.push[1]= prompt("Entre com a nota 2")
    nota.push[2]= prompt("Entre com a nota 3")
    console.log(nota)
}
armazenaNota();

function somaNota() {
    let nota1, nota2 = []
    nota1.push = prompt("Entre com a nota 1")
    nota2.push = prompt("Entre com a nota 2")
    console.log(nota1, nota2)
}
somaNota();