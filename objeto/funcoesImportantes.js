const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // chave 
console.log(Object.values(pessoa)) // valor
console.log(Object.entries(pessoa)) // entradas

Object.entries(pessoa).forEach(([chave, valor]) => { // faz a separação de chave e valor por cada elemento da string
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

// object.assign (ECMAScrpt 2015)
const dest = { a: 1 }
const o1 =  { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2 ) // pega o primeiro objeto a assimila todos os outros a ele, até se tiver uma nova informação

Object.freeze(obj)
obj.c = 1234
console.log(obj)