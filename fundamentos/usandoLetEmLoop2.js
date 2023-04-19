const funcs = []

for (let i = 0; i < 10; i++ ) {
    funcs.push(function() {
        console.log(i)
    })
}
funcs[2]()
funcs[6]()
funcs[8]()

// como 'let' tem o escopo de bloco ele tem a memoria do "i" dentro da funcão e do bloco, entao nao so imprimira o resultado final dele