// Modelo do exercicio
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// Resultado do prefessor
function Pessoa3(nome) {
     this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new Pessoa3('João')
p3.falar()

// Meu resultado
function Pessoa2(nome) {
    this.nome = nome
}

const p2 = new Pessoa2('João')
console.log(p2)