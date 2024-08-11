// Assim que comenta no JS
/* Comentário em bloco é assim*/

const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes")

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desativarBotaoSelecionado();

        marcarBotaoSelecionado(botao);

        esconderImagemSelecionada();

        mostrandoImagemDeFundo(indice);

        desativarInformacaoSelecionada();

        mostrandoInformacoes(indice);
    });
});

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrandoInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function mostrandoImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function desativarInformacaoSelecionada() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function esconderImagemSelecionada() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
