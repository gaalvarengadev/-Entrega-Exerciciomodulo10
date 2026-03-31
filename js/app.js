import { Categoria, ListaGastosPorCategoria } from "./classes.js"; //import da classe categoria
import { valorNegativo,atualizarInterface } from "./utils.js";
//array com as categorias 

const gastosPorCategoria = new ListaGastosPorCategoria(
    new Categoria("Alimentação"),
    new Categoria("Transporte"),
    new Categoria("Lazer"),
    new Categoria("Outros")
)

//manipulação DOM
const formulario = document.querySelector("form")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const valorInformado = formulario.elements.valor.value
    const categoriaInformada = formulario.elements.categoria.value

    if(valorNegativo(valorInformado)){
        alert("Valor Invalido. O valor não pode ser negativo")
        return
    }
    const categoria = gastosPorCategoria.obterCategoriaPorNome(categoriaInformada)
    categoria.adicionarValor(valorInformado)

    atualizarInterface(gastosPorCategoria)
    formulario.reset()
})