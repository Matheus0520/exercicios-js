function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1) // não muda quase nada, mas é a unica expessao em que a chamada vem no final do bloco
// e como vem no final, só lê a condição depois de rodar o codigo sem dar erro

console.log('Até a próxima!')
