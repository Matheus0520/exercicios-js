// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // não fazer isso, mexe com a informação fonte em si na cadeia

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' } // como o attr3 tem no objeto filho, ele é sobre escrito pela informção dada
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing // substitui o valor dado pelo valor atual
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100) // mesmo se colocar um valor acima do permitido ele não ultrapassa
console.log(volvo.status())

ferrari.acelerarMais(300) // como o valor foi alterado no 'const ferari', ele tem um novo limite definido 
console.log(ferrari.status())
