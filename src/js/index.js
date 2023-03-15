/*
OBJETIVO - quando clicarmos no botão do carrossel, temos que mostrar a imagem de fundo correspodente

PASSO 1 - dar um jeito de pegar o elemento HTML dos botões.
PASSO 2 - dar um jeito de identificar o clique do usuário no botao.
PASSO 3 - desmarcar o botão selecionado anterior.
PASSO 4 - marcar o botão clicado como se estivesse selecionado.
PASSO 5 - esconder a imagem de fundo correspondente ao botão clicado.
PASSO 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado.
*/

//Passo 1
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

//Passo 2
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //Passo 3
        desativarBotaoSelecionado();

        //Passo 4
        selecionarBotaoCarrossel(botao);

        //Passo 5
        esconderImagemAtiva();

        //Passo 6
        mostrarImagemFundo(indice);

    })
})

function mostrarImagemFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
