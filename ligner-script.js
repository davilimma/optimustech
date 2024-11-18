const textos = {
    pergunta1: "Insira aqui um texto falando sobre quem são vocês.",
    pergunta2: "Insira aqui um texto falando sobre como tudo começou.",
    pergunta3: "Insira aqui um texto falando sobre quais foram seus primeiros desafios.",
    pergunta4: "Insira aqui um texto falando sobre como permaneceram no mercado.",
    pergunta5: "Insira aqui um texto falando sobre o que querem para o futuro."
};

const pergunta1 = document.getElementById("pergunta1");
const pergunta2 = document.getElementById("pergunta2");
const pergunta3 = document.getElementById("pergunta3");
const pergunta4 = document.getElementById("pergunta4");
const pergunta5 = document.getElementById("pergunta5");

pergunta1.addEventListener("click", mostrarPergunta);
pergunta2.addEventListener("click", mostrarPergunta);
pergunta3.addEventListener("click", mostrarPergunta);
pergunta4.addEventListener("click", mostrarPergunta);
pergunta5.addEventListener("click", mostrarPergunta);

function mostrarPergunta(evento) {
    evento.preventDefault()
    const id = evento.target.id;
    const resultadoElement = document.getElementById("resultado");

    resultadoElement.textContent = textos[id];
}