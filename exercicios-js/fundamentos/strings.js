const escola = "Cod3r"

console.log(escola.charAt(4))// pegar determinado caracteri dentro da string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // indicaçâo do indice na tabela
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + ("!"))
console.log(escola.replace(3, 'e')) // PESQUISAR O QUE É REGEX!!!

console.log('Ana,Maria,Pedro'.split(','))