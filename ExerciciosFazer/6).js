function jurosSimples(C, I, T){
    var juros = C * I * T
    var montante = C + juros 
    return montante 

}

console.log(jurosSimples(100, 5/100, 2))

function jurosComposto(C, I, T) {
    var montante = C *(1 + I)** T
    var juros = montante - C
    return juros
}

console.log(jurosComposto(100, 5/100, 2))