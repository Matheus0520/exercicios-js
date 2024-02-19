// Object.preventExtensions
const produto = Object.preventExtensions ({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto) // a função previne que voce adicione novos atributos, mas vc pode alterar ou deletar alguns.

// Object.seal
const pessoa = {nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa) // te impede diminuir ou acrestar informaçoes, mas te permiti alterar o valor das existentes

// Object.freeze = selado + valores constantes // ou seja não se pode alterar valores ou acrescentar nem diminuilos