// importando questões
import questoes from "./questoes.js";

// arrumando a nav
const conteudo = document.querySelector('.conteudo'); 

btnMenu.addEventListener('click', () => {
    if (btnMenu.classList.contains('active')) {
        conteudo.style.display = 'none';
    } else {
        conteudo.style.display = 'flex';
    }
});

// adquirindo elementos
const questao = document.querySelector('.questao');
const respostas = document.querySelector('.respostas');
const progress = document.querySelector('progress');
const txtFinal = document.querySelector('.txt-final');
const txtFinalNegrito = document.querySelector(".txt-final-negrito");
const qtdAcertos = document.querySelector('.qtd-acertos');
const questoesContainer = document.querySelector('.questoes');
const final = document.querySelector('.final');

let questaoAtual = 0;
let respostasCorretas = 0;

progress.max = questoes.length;

function proximaQuestao(e) {
    if (e.target.getAttribute("data-correta") === "true") {
        respostasCorretas++;
    };

    if (questaoAtual < questoes.length - 1) {
        questaoAtual++;
        carregarQuestao();
    } else {
        finalizar();
    }
};

function finalizar() {
    qtdAcertos.textContent = `Você acertou ${respostasCorretas} de ${questoes.length}`
    questoesContainer.style.display = "none";
    final.style.display = "flex";

    if (respostasCorretas <= questoes.length && respostasCorretas >= questoes.length * 0.9) {
        txtFinal.textContent = "Parabéns!!! Você é realmente uma Stay ✌️!"
    } else {
        if (respostasCorretas <= questoes.length * 0.8 && respostasCorretas >= questoes.length * 0.7) {
            txtFinal.textContent = "Quase lá! Não desista, "
            txtFinalNegrito.textContent = "You can make Stray Kids stay!";
        } else {  
            if (respostasCorretas <= questoes.length * 0.6 && respostasCorretas >= questoes.length / 2) {
                txtFinal.textContent = "Você tem um conhecimento mediano sobre Stray Kids";
            } else {
                txtFinal.textContent = "Você precisa conhecer mais sobre Stray Kids! (Vale a pena! 😉)";
            }
        } 
    }

    progress.style.display = 'none';
};

function carregarQuestao() {
    progress.value = questaoAtual;
    progress.innerHTML = `${questaoAtual + 1} / ${questoes.length}`;
    const item = questoes[questaoAtual];
    respostas.innerHTML = "";
    questao.innerHTML = item.questao;

    item.alternativas.forEach(opcao => {
        const div = document.createElement("div");
        div.classList = 'resposta-container';

        div.innerHTML = `<button class="resposta" data-correta="${opcao.correta}">${opcao.resposta}</button>`;

        respostas.appendChild(div);
    });

    document.querySelectorAll(".resposta").forEach(item => {
        item.addEventListener("click", proximaQuestao);
    });
};

carregarQuestao();
