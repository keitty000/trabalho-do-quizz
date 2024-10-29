const perguntas = [
    {
        pergunta: "De onde é a invenção do chuveiro elétrico?",
        opcoes: [
            "Inglaterra",
            "Estados Unidos",
            "Brasil",
            "França"
        ],
        resposta: 2 // índice da resposta correta
    },
    {
        pergunta: "O que a palavra legend significa em português?",
        opcoes: [
            "Lenda",
            "Legenda",
            "Língua",
            "Legendário"
        ],
        resposta: 0
    },
    {
        pergunta: "Quanto tempo a luz do Sol demora para chegar à Terra?",
        opcoes: [
            "12 horas",
            "8 minutos",
            "1 dia",
            "12 minutos"
        ],
        resposta: 1
    },
    {
        pergunta: "Qual tipo sanguíneo é considerado doador universal?",
        opcoes: [
            "Tipo B",
            "Tipo AB",
            "Tipo O",
            "Tipo A"
        ],
        resposta: 2
    },
    {
        pergunta: "Qual o metal cujo símbolo químico é o Au?",
        opcoes: [
            "Cobre",
            "Prata",
            "Ouro",
            "Alumínio"
        ],
        resposta: 2
    },
    {
        pergunta: "Quem pintou o teto da capela sistina?",
        opcoes: [
            "Leonardo da Vinci",
            "Donatello",
            "Michelangelo",
            "Van Gogh"
        ],
        resposta: 2
    }
    
];

// Função para gerar os flashcards
function criarFlashcards() {
    const container = document.getElementById("container");

    perguntas.forEach((pergunta, index) => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao");

        cartao.innerHTML = `
            <div class="cartao__conteudo">
                <h3>Questão ${index + 1}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="cartao__conteudo__opcoes">
                    ${pergunta.opcoes.map((opcao, i) => `
                        <label>
                            <input type="radio" name="pergunta${index}" value="${i}">
                            ${opcao}
                        </label>
                    `).join('')}
                </div>
                <button onclick="verificarResposta(${index})">Responder</button>
                <div class="resultado" id="resultado${index}" style="display:none;"></div>
            </div>
        `;
        
        container.appendChild(cartao);
    });
}

// Função para verificar a resposta
function verificarResposta(index) {
    const opcoes = document.getElementsByName(`pergunta${index}`);
    const resultadoDiv = document.getElementById(`resultado${index}`);
    let respostaSelecionada;

    opcoes.forEach((opcao, i) => {
        if (opcao.checked) {
            respostaSelecionada = i;
        }
    });

    if (respostaSelecionada === undefined) {
        resultadoDiv.innerHTML = "Por favor, selecione uma opção.";
    } else if (respostaSelecionada === perguntas[index].resposta) {
        resultadoDiv.innerHTML = "Resposta correta!";
    } else {
        resultadoDiv.innerHTML = "Resposta errada! A resposta correta é: " + perguntas[index].opcoes[perguntas[index].resposta];
    }

    resultadoDiv.style.display = "block";
}

// Chama a função para criar os flashcards ao carregar a página
window.onload = criarFlashcards;
