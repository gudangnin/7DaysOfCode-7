alert ("Bem-Vindo ao jogo da carreira de programador");

const caminho = prompt("Você quer seguir para qual area? Digite '1' para Front-End ou Digite '2' para Back-End");
const caminhofrontend = 1
const caminhobackend = 2

while (caminho == 1){
    alert("Notei que você curte Front-End");  
    
    const caminhofrontend = prompt("Digite '1' se quer aprender React ou '2' se quer aprender Vue"); 
    
    if (caminhofrontend == 1){
        alert("Vi que voce quer aprender React, parabéns!!");
    }else {
        alert("Vi que quer aprender Vue, parabéns pela escolha!!");
    }

    break
}

while (caminho == 2){
    alert("Notei que você curte Back-End");  
    
    const caminhobackend = prompt("Digite '1' se quer aprender C# ou '2' se quer aprender Java"); 
    
    if (caminhobackend == 1){
        alert("Vi que voce quer aprender C#, parabéns!!");
    }else {
        alert("Vi que quer aprender Java, parabéns pela escolha!!");
    }

    break
}

const carreira = prompt("Digite '1' para seguir se especializando na área escolhida ou '2' para seguir se desenvolvendo para se tornar Fullstack");

if (carreira == 1){
    alert("Se especializar na área escolhida é uma ótima ideia");
}else{
    alert("Se desenvolver para se tornar Fullstack parece uma ótima ideia");
}
    
const tecnologias = prompt("Qual outra tecnologia você gostaria de aprender? Digite uma ou mais se preferir");

const msg = `Você ainda quer aprender ${tecnologias}, aposto que vai ser divertido!!`

alert (msg)
while(tecnologias == tecnologias){
    maistecnologias = prompt ("Gostaria de aprender mais alguma tecnologia? Se não digite 'não' ");

    const msg1 = `Você ainda quer aprender ${maistecnologias}, aposto que vai ser divertido!!`

    if (maistecnologias != "não"){
        alert(msg1);
    }else {
        alert("Obrigado por compartilhar seus anseios com essa maquina!!");
        break
    }
        
}
