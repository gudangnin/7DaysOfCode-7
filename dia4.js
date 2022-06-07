let numeroaleatorio = Math.floor(Math.random() * (10 - 0 + 1) + 0)
let tentativas = 1

while(tentativas <= 3){
    let resposta = prompt("Escolha um numero de 1 a 10")
    if (resposta == numeroaleatorio){
        console.log("Parabéns você acertou o número secreto")
        break
    }else {
        console.log(`Você chutou ${resposta} e você errou, tentativa ${tentativas} de 3.`)
    }
        
    tentativas +=1
    
    if (numeroaleatorio != resposta && tentativas == 4){
    console.log(`Você perdeu, o numero secreto é ${numeroaleatorio}`)
    }

}






