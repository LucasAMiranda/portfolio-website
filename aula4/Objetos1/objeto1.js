//UM objeto compõe atributos e métodos
//Atributo - São as características de um objeto 
//Método - São ações que objeto vai fazer.
//Herança - Um objeto herda atributos e métodos de um objeto maior 


const Pessoa = new Object();
Pessoa.nome = 'Luiz';
Pessoa.idade = 30;
Pessoa.saudacao = function(){
    console.log(`Olá, eu sou ${this.nome}!`);
}

Pessoa.saudacao()