const botaoGerarConselho = document.querySelector(".botao-atualizar-conselho");
const identificadorConselho = document.querySelector(".id-conselho");
const descricaoConselho = document.querySelector(".conselho-descricao");

botaoGerarConselho.addEventListener("click", GerarConselho);

async function GerarConselho() {

    try {
        const resposta = await fetch("https://api.adviceslip.com/advice");

        if (!resposta.ok) {
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API.")
        };

        const converterResposta = await resposta.json();
        identificadorConselho.textContent = `Conselho número: ${converterResposta.slip.id}`;
        descricaoConselho.textContent = converterResposta.slip.advice;
    } catch (error) {
        identificadorConselho.textContent = "ERROR";
        descricaoConselho.textContent = error;
    };

};