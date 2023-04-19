function tratarErrorELançar(erro) { // 'Throw' passa uma mensagem defina pelo criador quando o codigo gera um erro 
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensage'
    throw {
        nome: erro.name,
        msg: erro.mesage,
        date: new Date
    }
    
}

function imprimirNomeGritado(obj) {
    try { // Bloco que pode potencialmente pode gerar um erro 
        console.log(obj.name.toUpperCase() + '!!!' )
    } catch (e) { // Pode relançar o erro e passar alguma mensagem definida pelo criador 
            tratarErrorELançar(e)
    } finally { // Será lançado de qualquer forma, independente dos erros dos blocos anteriores 
        console.log('final')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)