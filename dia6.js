//arrays
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];



let fazerLista = "sim"

while(fazerLista == "sim"){

    fazerLista = prompt ("Gostaria de adcionar uma comida na sua lista de compras? Responda 'sim' ou 'não'")
    
    while(fazerLista != "sim" && fazerLista != "não"){
        alert("Por favor responda com 'sim' ou 'não'")
        fazerLista = prompt ("Gostaria de adcionar uma comida na sua lista de compras? Responda 'sim' ou 'não'")
    }

    let listaDeCompras = `Lista de Compras\nFrutas: ${frutas}\nLaticínios: ${laticinios}\nCongelados: ${congelados}\nDoces: ${doces}\nOutros: ${outros}`

    if (fazerLista == "não"){
        console.log(listaDeCompras)
        break
    }else {
        
    }

    let produto = prompt ("Qual produto você gostaria de incluir na lista?")

    let tipo = prompt("Em qual das categorias a seguir o produto se encaixa?\nFrutas, Laticínios, Congelados, Doces, Outros.")

    
    if (tipo == "frutas"){
        frutas.push(produto);
    }else if (tipo == "laticinios"){
        laticinios.push(produto);
    }else if (tipo == "congelados"){
        congelados.push(produto);
    }else if (tipo == "doces"){
        doces.push(produto);
    }else{
        outros.push(produto);
    }
    
    alert(`Lista de Compras\nFrutas: ${frutas}\nLaticínios: ${laticinios}\nCongelados: ${congelados}\nDoces: ${doces}\nOutros: ${outros}`)
    let removeItem = prompt("Gostaria de remover algum item da lista? Sim ou Não?")

    
    
    while(removeItem == "sim"){
        let categoria = prompt("De qual categoria você quer retirar um item?")
        

        if (categoria == "frutas"){
            alert(frutas)   
        }else if (categoria == "laticinios"){
            alert(laticinios)           
        }else if (categoria == "congelados"){
            alert(congelados)            
        }else if (categoria == "doces"){
            alert(doces)           
        }else{
            alert(outros)   
        }
        
        produtoDescartado = prompt ("Qual produto você gostaria de excluir da lista?")

        if (categoria == "frutas" && frutas.includes(produtoDescartado) == true){
            let posFrutas = frutas.indexOf(produtoDescartado)
            frutas.splice(posFrutas, 1)       
        }else if (categoria == "laticinios" && laticinios.includes(produtoDescartado) == true){
            let posLaticinios = laticinios.indexOf(produtoDescartado)
            laticinios.splice(posLaticinios, 1)                      
        }else if (categoria == "congelados" && congelados.includes(produtoDescartado) == true){
            let posCongelados = congelados.indexOf(produtoDescartado)
            congelados.splice(posCongelados, 1)            
        }else if (categoria == "doces" && doces.includes(produtoDescartado) == true){
            let posDoces = doces.indexOf(produtoDescartado)
            doces.splice(posDoces, 1)          
        }else if (categoria == "outros" && outros.includes(produtoDescartado) == true){
            let posOutros = outros.indexOf(produtoDescartado)
            outros.splice(posOutros, 1)  
        }
        
        //Laço para verificar se o item existe na lista
         
        msg = "Produto não encontrado"

        if (categoria == "frutas" && frutas.includes(produtoDescartado) == false){
            alert(msg)       
        }else if (categoria == "laticinios" && laticinios.includes(produtoDescartado) === false){
            alert(msg)                      
        }else if (categoria == "congelados" && congelados.includes(produtoDescartado) === false){
            alert(msg)            
        }else if (categoria == "doces" && doces.includes(produtoDescartado) === false){
            alert(msg)          
        }else if (categoria == "outros" && outros.includes(produtoDescartado) === false){
            alert(msg) 
        }

        alert(`Lista de Compras\nFrutas: ${frutas}\nLaticínios: ${laticinios}\nCongelados: ${congelados}\nDoces: ${doces}\nOutros: ${outros}`)
        break

    }
    

}