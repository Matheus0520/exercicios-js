const ferrari = {
    modelo: 'F40', 
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) // restorna um objeto vazio, mas exite e esta presente
console.log(ferrari.__proto__ === Object.prototype) // 'estritamente igual' (===)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // faz a pergunta se existe um 'prototipo' antes dele

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
