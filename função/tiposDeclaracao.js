console.log(soma(3, 4))

// funtion declaration = funciona mesmo se o valor for dada antes da função 
function soma(x, y) {
    return x + y
}

// function expression = não funciona se o valor for dado antes da função 
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression = não funciona se o valor for dado antes da função 
const mult = function mult(x, y) {
    return x * y
}
