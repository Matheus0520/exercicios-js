const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

//exemplo

function exterior() {
    const mensagem = "Olá, mundo!";
  
    function interior() {
      console.log(mensagem); // A função interior tem acesso à variável "mensagem" definida no contexto léxico da função exterior
    }
  
    interior(); // Chamando a função interior
  }
  
  exterior(); // Chamando a função exterior
  