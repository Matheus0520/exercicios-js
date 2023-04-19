var numero = 1

{
    var numero = 2
    console.log('Dentro =', numero)
}
console.log('Fora =', numero)

// a separação por '{}' não deixa fora do escopo global, por isso o valor é imprimido 2 vezes// o 'var' não tem escopo de bloco
