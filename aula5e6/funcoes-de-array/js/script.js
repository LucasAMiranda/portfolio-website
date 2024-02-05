//Declarando as variáveis 
let arrayDespesa = [];
let listaDespesa = document.getElementById("listaDespesa");
let valorMax = document.getElementById("maximo");
let valorMin = document.getElementById("minimo");
let tipo2 = document.getElementById("option2");
let despesa;

const ValidarCadastro = () =>{
    let valor = document.getElementById("valor");
    let descricao = document.getElementById("descricao");
    let tipo1 = document.getElementById("option1");


    if(valor.value === "" || descricao.value === "" || tipo1 === ""){
        alert("Preencha os campos , por gentileza!")
    }
    else{
        despesa = {
            valor: valor.value,
            descricao: descricao.value,
            tipo1: tipo1.value, 
        }

        arrayDespesa.push(despesa);
        MostrarDespesa(despesa);

    }
}


const MostrarDespesa = (despesa) => {
    let tabelaDespesa = listaDespesa.querySelector('table');
    
    //condição para verificar se existe tabela dentro da listaDespesa, senão tiver crie uma tabela com as colunas com o conteúdo.
    if(!tabelaDespesa){
        tabelaDespesa = document.createElement('table');
        tabelaDespesa.innerHTML = '<thead><tr><th>Valor</th><th>Descrição</th><th>Tipo</th></tr></thead>';
        listaDespesa.appendChild(tabelaDespesa);

    }

    //cria e selecina a tbody
    let tbody = tabelaDespesa.querySelector('table');
    if (!tbody){
        tbody = document.createElement('tbody');
        tabelaDespesa.appendChild(tbody);
    }

    //Adiciona uma nova linha à tabela
    tbody.innerHTML += `
        <tr>
            <td>${despesa.valor}</td>
            <td>${despesa.descricao}</td>
            <td>${despesa.tipo1}</td>
        </tr>
    
    `;
}

const LimparCadastro = () =>{
    document.getElementById("valor").value="";
    document.getElementsByName("maximo").value = "";
    document.getElementById("minimo").value = "";
    document.getElementById("descricao").value ="";
}