let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo) // { ! } é usado como sinal de negação. E usado duas vezes resulta em resposta 'verdadeiro'.

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1) // numero negativo
console.log(!!' ') // espaço 'vazio'
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(NaN) // 'not a nunmber'
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')