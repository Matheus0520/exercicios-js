const imprimirResultado = function(nota) {
     if(nota >= 7 ) {
        console.log('Aprovado!')
     } else {
        console.log('Reprovado!')
     }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa') // Cuidado, a linguagem é fracamente tipada, por isso lê como falso e passa o resultado