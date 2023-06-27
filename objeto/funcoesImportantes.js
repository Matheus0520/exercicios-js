const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // chave 
console.log(Object.values(pessoa)) // valor
console.log(Object.entries(pessoa)) // entradas

objectentries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})