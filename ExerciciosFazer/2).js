function tiposDeTriangulos(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return "Equilátero"
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return "Isósceles"
    } else (lado1 != lado2 || lado2 != lado3 || lado1 != lado3) 
        return "Escaleno"
    
}

console.log(tiposDeTriangulos(5,5,5))
console.log(tiposDeTriangulos(5,5,6))
console.log(tiposDeTriangulos(8,3,5))