function Bhaskara(ax2, bx, c) {
    var delta = bx**2 - 4 * ax2 * c
    if (delta < 0) {
        return "Delta é negativo"
    } else {
        var x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
        var x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
        return [x1, x2]
    } 
}

console.log(Bhaskara(3, 1, 2))
console.log(Bhaskara(1, 3, 2))