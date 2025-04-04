let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    // Adiciona o produto ao carrinho
    carrinho.push({ nome, preco });
    
    // Atualiza o total
    total += preco;
    
    // Atualiza o HTML do carrinho
    atualizarCarrinho();
}

function removerDoCarrinho(index) {
    // Remove o produto selecionado
    const produtoRemovido = carrinho.splice(index, 1)[0];
    total -= produtoRemovido.preco;
    
    // Atualiza o carrinho após remoção
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById("lista-carrinho");
    const totalElemento = document.getElementById("total");
    
    // Limpa a lista atual
    listaCarrinho.innerHTML = "";
    
    // Adiciona cada item ao carrinho com a opção de excluir
    carrinho.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        
        // Botão de excluir
        const excluirBtn = document.createElement("button");
        excluirBtn.textContent = "Excluir";
        excluirBtn.onclick = () => removerDoCarrinho(index);
        
        // Adiciona o botão de excluir ao item
        li.appendChild(excluirBtn);
        listaCarrinho.appendChild(li);
    });
    
    // Atualiza o total
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
}
