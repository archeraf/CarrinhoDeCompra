let totalGeral = 0;
let quantidadeItens = 0;
limpar();

function adicionar(){

    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split(' - ')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let valorTotal = document.getElementById('valor-total');

    
    if(quantidade > 0){
        //calcula o valor da compra 
        let preco = quantidade * valorUnitario;
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
        quantidadeItens = quantidadeItens + parseInt(quantidade);
        totalGeral = totalGeral + preco;

        valorTotal.textContent = `R$${totalGeral}`;
        document.getElementById('quantidade').value = 0;

        document.getElementById('produtos-carrinho-texto').textContent = `Produtos no carrinho(${quantidadeItens})`
    } else[
        alert('Insira uma quantidade válida!')
    ]
}

function limpar(){

    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = '0';

}