let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {// "=>" A Função arrow é uma função anonima = então tem que ser armazenada em alguma variavel ou constante
    return 2 * a
}


// a seguir se tem uma forma reduzida de se escrever por só ter 1 parametro
// sem o uso das "{}" se tem um retorno umplicito na função
// uma função de uma unica linha sem o "corpo" chama o "return" implicitamente
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param 
console.log(ola())