


function soma(){
    return parseFloat(valor1) + parseFloat(valor2)
}

function subtracao(){
    return parseFloat(valor1) - parseFloat(valor2)
}

function divisao(){
    return parseFloat(valor1) / parseFloat(valor2)
}

function multiplicacao(){
    return parseFloat(valor1) * parseFloat(valor2)
}

let valor1;
let valor2;
let operacao = ''



while (operacao != "Sair"){

    operacao = prompt("Olá digite qual operação você quer fazer a seguir: Soma, Subtração, Divisao, Multiplicação ou Sair")
    operacaoFormatada = operacao.toLowerCase();

    if (operacaoFormatada == "sair"){
        break
    }

    valor1 = prompt("Digite o primeiro valor da operação")
    valor2 = prompt("Digite o segundo valor da operação")
    
    

    switch (operacaoFormatada){
        case 'soma': 
            console.log(soma());
            break    
        case 'subtração':
            console.log(subtracao()); 
            break   
        case 'divisão': 
            console.log(divisao());
            break     
        case 'multiplicação':
            console.log(multiplicacao());
            break        
        case 'sair':
            break  
        default:
            alert("Por favor selecione uma opção válida")                 
    }


}