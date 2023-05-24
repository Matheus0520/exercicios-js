/*function criarProduto() {
    return {
        nome: [ 'produto0', 'produto1', 'produto2'],
        valor: [10.30, 98.83, 84.30]
    }
}
console.log(criarProduto())*/

function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('notebook', 2199.00))
console.log(criarProduto('ipad', 1999.00))