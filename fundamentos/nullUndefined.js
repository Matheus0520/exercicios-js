const a = {name: 'Teste'}
console.log(a)

const b = a // atribuição por referencia, coloca os dois valores apontando pro mesmo 'link' os tornando iguais 
console.log(b)
b.name = 'Opa'
console.log(a)

let c = 3
let d = c 
d++
console.log(c)
console.log(d)

//////////////////////////////////////////////////////////////////////////////////////////////^console

let valor // não inicializada
console.log(valor)
//console.log(valor2) - not defined

valor = null // ausência de valor 
console.log(valor)
// console.log(valor.toString()) - Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined, deixar para o sisyema determinar isso 
console.log(!!produto.preco)
// delete produto.preco - Como se apaga um obejo evitando declarar ele
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)