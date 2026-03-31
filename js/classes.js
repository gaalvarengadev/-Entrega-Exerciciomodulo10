export class Categoria {
    //encapsulamento dos campos privados

    #nome;
    #valor;
    constructor(nome){
        this.#nome = nome;
        this.#valor = 0;
    }
    //Uso de getters
    get valor() {
        return this.#valor;
    }
    get nome() {
        return this.#nome;
    }
    //funcao
    adicionarValor(valor){
        this.#valor +=parseFloat(valor);
    }
}

export class ListaGastosPorCategoria {
    #categorias;
    //rest operator
    constructor(...categorias){
        this.#categorias = categorias;
    }
    get categorias(){
        return this.#categorias
    }
    obterCategoriaPorNome(nome){
        return this.#categorias.find((categoria) => categoria.nome == nome)
    }
    obterTotal() {
        //reducao com reduce
        return this.#categorias.reduce((total,categoria) => total + categoria.valor,0)
    }
}