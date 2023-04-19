for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i =', i)

// como a palavra 'let' funciona por escopo de bloco ela não é anunciada na segundo chamada gerando um erro, 
// pois só é anunciada dentro do bloco for 