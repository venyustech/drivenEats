let i = 0;
function selectFood(bottom){
    const botaoSelecionado = document.querySelector(".foodWrapper .selected");
   
    if(botaoSelecionado !== null)
    {
        botaoSelecionado.classList.remove("selected");
        i--
    }
    bottom.classList.add("selected");
    i++;
    finishRequest();

    
}

function selectDrink(bottom){
    const botaoSelecionado = document.querySelector(".drinkWrapper .selected");
    
    if(botaoSelecionado !== null)
    {
        botaoSelecionado.classList.remove("selected");
        i--
    }

    bottom.classList.add("selected");
    i++;
    finishRequest();

}
function selectDessert(bottom){
    const botaoSelecionado = document.querySelector(".dessertWrapper .selected");

    if(botaoSelecionado !== null)
    {
        botaoSelecionado.classList.remove("selected");
        i--
    }

    bottom.classList.add("selected");
    i++;
    finishRequest();

}

function finishRequest(){
    const nREquestsTotal = 3; //numero de pedidos igual a 3
    if(i == nREquestsTotal){
        const requestFinished = document.querySelector('.bottomRequests');
        requestFinished.classList.remove('hide');
        const request = document.querySelector('.bottomRequests p');
        request.innerHTML='Fechar pedido';
    }
}

function send(){
    if(i == 3){
        const food = document.querySelector('.foodWrapper .selected .title');
        const foodPrice = document.querySelector('.foodWrapper .selected .price');

        const drink = document.querySelector('.drinkWrapper .selected .title');
        const drinkPrice = document.querySelector('.drinkWrapper .selected .price');

        const dessert = document.querySelector('.dessertWrapper .selected .title');
        const dessertPrice = document.querySelector('.dessertWrapper .selected .price');

        const nfoodPrice = foodPrice.innerHTML.replace("R$","").replace(",",".");
        const ndrinkPrice = drinkPrice.innerHTML.replace("R$","").replace(",",".");
        const ndessertPrice = dessertPrice.innerHTML.replace("R$","").replace(",",".");
        
        const t1 = parseFloat(nfoodPrice)
        const t2 = parseFloat( ndrinkPrice)
        const t3 = parseFloat( ndessertPrice)
        const total = (t1+t2+t3).toFixed(2);


        let mensagem =  ` Olá, gostaria de fazer o pedido:
        - Prato: ${food.innerHTML} 
        - Bebida: ${drink.innerHTML}
        - Sobremesa: ${dessert.innerHTML}
        Total: R$ ${total}`
        

        const send = encodeURIComponent(mensagem);
        window.location.href = `https://wa.me/5581997850393?text=${send}`

    }
}
