const pessoa = {
    saudacao: 'Bom Dia!', 
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() 
const falar = pessoa.falar
falar() // consflito entre paradigmas: a linguagem funcional e a linguagem 'OO'

const falarDePessoa = pessoa.falar.bind(pessoa)// a palavra "bind" amarra o 'this' de volta a função primeiramente dada, por isso não gera o erro
falarDePessoa()