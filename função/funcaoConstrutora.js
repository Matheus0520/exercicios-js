function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado 
    let velocidadeAtual = 0

    // metodo publico 
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico 
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar() 
console.log(ferrari.getVelocidadeAtual())

// exemplo

class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    saudacao() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
  }
  
const pessoa1 = new Pessoa('João', 30);
const pessoa2 = new Pessoa('Maria', 25);

console.log(pessoa1)
console.log(pessoa2)