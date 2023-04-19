const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) { // o "i" é o indice do array, sendo o valor a ser chamado
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {  // o "atributo" é o indice do array, sendo o valor a ser chamado
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

