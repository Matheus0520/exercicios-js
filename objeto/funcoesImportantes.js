const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // chave 
console.log(Object.values(pessoa)) // valor
console.log(Object.entries(pessoa)) // entradas

Object.entries(pessoa).forEach(([chave, valor]) => { 
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // coloca na lista
    writable: false, // mudavel
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' // como não é mudavel o valor não é alterado mesmo quando dado outro
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))