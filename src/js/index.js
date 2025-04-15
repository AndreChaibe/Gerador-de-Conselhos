const botaoGerarConselho = document.querySelector(".botao-atualizar-conselho");
const identificadorConselho = document.querySelector(".id-conselho");
const descricaoConselho = document.querySelector(".conselho-descricao");

botaoGerarConselho.addEventListener("click", () => {
    GerarConselho()
})

async function  GerarConselho() {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    const converterResposta = await resposta.json();
    identificadorConselho.textContent = converterResposta.slip.id;
    descricaoConselho.textContent = converterResposta.slip.advice;
};