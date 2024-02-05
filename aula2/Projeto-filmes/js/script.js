const CapturarFilme = () => {
    
    let arrayDeFilmes = []

    let titulo = document.getElementById("titulo");
    let autor = document.getElementById("autor");
    let descricao= document.getElementById("descricao");
    let textoDigitadoNaTela = document.getElementById("container-filme");

    //Regra de Negócio para capturar os dados do filme(titulo, autor , descrição).
    if((titulo.value != "")  && (autor.value != "") && (descricao.value != "")){
       textoDigitadoNaTela.innerHTML += `<p>${titulo.value}</p><p>${autor.value}</p><p>${descricao.value}`;
       let filmes = {
         titulo : titulo.value,
         autor : autor.value,
         descricao : descricao.value,
       }
      
       /*
       for(let i=0; arrayDeFilmes.length; i++){
          arrayDeFilmes.push(filmes);
       }
        */

       arrayDeFilmes.push(filmes);

       // Usando forEach para logar os filmes no array
       arrayDeFilmes.forEach(filme => {
           console.log(filme);
       });

    }

}