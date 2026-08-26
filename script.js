// CÓDIGO DO MODAL
let btnAjuda = document.querySelector(".botao-ajuda");
let modal = document.querySelector(".secao-ajuda");

btnAjuda.addEventListener("click", abreModal);

function abreModal() {
    modal.style.display = "block";
}

// ==========================================================
// LEITURA DA PÁGINA
// ==========================================================

let btnLerPagina = document.getElementById("btnLerPagina");
let btnPararLeitura = document.getElementById("btnPararLeitura");

// Função para ler a página
function lerPagina() {
    // Para qualquer leitura anterior
    speechSynthesis.cancel();

    // Pega o conteúdo principal da página
    let conteudo = document.querySelector("main");

    if (!conteudo) {
        return;
    }

    // Pega somente o texto da página
    let texto = conteudo.innerText;

    // Cria a leitura
    let leitura = new SpeechSynthesisUtterance(texto);

    // Define o idioma como português do Brasil
    leitura.lang = "pt-BR";

    // Velocidade da leitura
    leitura.rate = 0.9;

    // Volume
    leitura.volume = 1;

    // Começa a leitura
    speechSynthesis.speak(leitura);
}

// Função para parar a leitura
function pararLeitura() {
    speechSynthesis.cancel();
}

// Eventos dos botões
btnLerPagina.addEventListener("click", lerPagina);
btnPararLeitura.addEventListener("click", pararLeitura);

