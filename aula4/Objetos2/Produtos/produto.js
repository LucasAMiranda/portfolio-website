class Produto {
    constructor() {
        // Atributos do objeto Produto 
        this.id;
        this.name; 
        this.preco;
    }

    salvar() {
        // Criar um id automático
        this.id = Produto.dados.length + 1;
        Produto.dados.push(this);
    }

    static qtdMenoresQue50() {
        let quantidade = 0;
        for (let i = 0; i < Produto.dados.length; i++) {
            let p = Produto.dados[i];
            if (parseFloat(p.preco) < 50) {
                quantidade++;
            }
        }
        return quantidade;
    }

    static nomeProdutoEntre50e100() {
        let nomes = [];
        for (let i = 0; i < Produto.dados.length; i++) {
            let p = Produto.dados[i];
            if (parseFloat(p.preco) >= 50 && parseFloat(p.preco) <= 100) {
                nomes.push(p.name);
            }
        }
        return nomes.join(" , ");
    }

    static mediaPrecoAcimaDe100() {
        let somaSuperior100 = 0;
        let qtdSuperior100 = 0;
        for (let i = 0; i < Produto.dados.length; i++) {
            let p = Produto.dados[i];
            if (parseFloat(p.preco)) {
                somaSuperior100 += parseFloat(p.preco);
                qtdSuperior100++;
            }
        }

        let media = somaSuperior100 / qtdSuperior100;

        return media;
    }
}

Produto.dados = [];

let produtos = new Produto();
produtos.name = nomeProduto.value;
produtos.preco = valorProduto.value;
produtos.salvar();
