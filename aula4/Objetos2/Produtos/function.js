function mostrarProdutosEstoque(){
    let objetoTabela = document.getElementById("produtos");
    let html = "<tr><th>Nome</th><th>Preço</th></tr>";
    for(i=0; i<Produto.dados.length; i++){
        let p = Produto.dados[i];
        html += "<tr>";
        html += "<td>" + p.nome + "</td>";
        html += "<td>" + p.preco + "</td>";
        html += "</tr>";
    }

    objetoTabela.innerHTML = html
    console.log(objetoTabela)

}

function salvarProduto(){
    let nomeProduto = document.getElementById("nomeProduto");
    let valorProduto = document.getElementById("valorProduto");


    if(nomeProduto.value === ""){
        alert("Preencha o campo nome do Produto")
        nomeProduto.focus();
        return;
    }

    if(valorProduto.value === ""){
        alert("Preencha o campo valor do Produto")
        valorProduto.focus()
        return;
    }

  

    mostrarProdutosEstoque();
    mostrarResumo();
}

function mostrarResumo(){
    document.getElementById("qtdMenoresQue50").innerHTML = Produto.qtdMenoresQue50();
    document.getElementById("nomeProdutosEntre50e100").innerHTML = Produto.nomeProdutoEntre50e100();
    document.getElementById("mediaPrecoAcimaDe100").innerHTML = Produto.mediaPrecoAcimaDe100();
}