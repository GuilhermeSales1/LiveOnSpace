const nav = document.querySelector(".nav")
const menu = document.querySelector(".menu")
menu.addEventListener("click", () => {
    nav.classList.toggle("hidden")
})
const body = document.querySelector("body")
const botoes = document.querySelectorAll(".cores button")
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const negocio = botao.textContent
        
        switch (negocio){
            case "☀️":
                body.classList = "tema-claro"
                break
            case "🌙":
                body.classList = ""
                break
            case "🍃":
                body.classList = "tema-verde"
                break
        }
    })
})
const imagem = document.querySelector("#imagem")
const imagens = [
    "./slides/satelite.png",
    "./slides/negocio.png",
    "./slides/computador.png"
]
let atual = 0
function anterior(){
    imagem.style.opacity = "0"

    setTimeout(() => {
        atual--
    if(atual < 0){
        atual = imagens.length - 1
    }
    imagem.src = imagens[atual]
    imagem.style.opacity = "1"
}, 150)
}
function proxima(){
    imagem.style.opacity = "0"

    setTimeout(() => {
        atual++
        if(atual >= imagens.length){
            atual = 0
        }

        imagem.src = imagens[atual]
        imagem.style.opacity = "1"
    }, 150)
}
document.addEventListener("DOMContentLoaded", () => {
    carregarQuiz();
});
const perguntas = [
    { q: "Qual o principal objetivo ecológico da plataforma LiveOnSpace?", a: "Monitorar variações climáticas em tempo real para prever riscos ecológicos severos.", options: ["Criar jogos de simulação espacial interativos.", "Monitorar variações climáticas em tempo real para prever riscos ecológicos severos.", "Desenvolver novos chips para satélites industriais."] },
    { q: "Quais microcontroladores são aplicados no hardware do projeto?", a: "Arduino", options: ["Arduino", "Raspberry Pi 5", "Micro:bit"] },
    { q: "Qual grande problema ambiental serve de solução crítica para a motivacão?", a: "Grandes queimadas e a falta de dados integrados.", options: ["Grandes queimadas e a falta de dados integrados.", "Excesso de chuvas nas calçadas urbanas.", "Poluição sonora de grandes metrópoles."] },
    { q: "De onde vêm os dados integrados que se conectam aos sensores locais?", a: "APIs de dados orbitais abertas de satélites.", options: ["Dados históricos de livros didáticos.", "APIs de dados orbitais abertas de satélites.", "Apenas de estações de rádio locais."] },
    { q: "Qual conjunto de tecnologias web compõe a arquitetura do front-end?", a: "HTML5, CSS3 e JavaScript", options: ["Python, Java e C++", "HTML5, CSS3 e JavaScript", "Ruby on Rails e PHP"] },
    { q: "Como os fiscais são notificados de forma ágil sobre anomalias severas?", a: "Recebem alertas automáticos diretamente no celular.", options: ["Através de e-mails semanais informativos.", "Por cartas registradas em cartório.", "Recebem alertas automáticos diretamente no celular."] },
    { q: "Onde o usuário pode testar a simulação do circuito inteligente do projeto?", a: "Na plataforma online Wokwi.", options: ["Na plataforma online Wokwi.", "Baixando um instalador executável (.exe).", "Diretamente no GitHub Desktop."] },
    { q: "Quem compõe o público-alvo principal visado pelo LiveOnSpace?", a: "Agências governamentais, cientistas climáticos e produtores agrícolas sustentáveis.", options: ["Agências governamentais, cientistas climáticos e produtores agrícolas sustentáveis.", "Grandes redes de e-commerce e shoppings centers.", "Desenvolvedores de jogos indies."] },
    { q: "Qual o benefício financeiro direto para o setor público listado no projeto?", a: "Otimização de recursos públicos através de monitoramento estratégico e preventivo.", options: ["Criação de novos impostos sobre o uso da terra.", "Otimização de recursos públicos através de monitoramento estratégico e preventivo.", "Arrecadação com multas retroativas automáticas."] },
    { q: "Em qual ano e instituição acadêmica a Global Solution está sendo apresentada?", a: "Global Solution 2026 — Engenharia de Software FIAP", options: ["Global Solution 2024 — Engenharia de Software FIAP", "Global Solution 2026 — Engenharia de Software FIAP", "Hackathon Internacional SpaceApps 2025"] }
];
function carregarQuiz() {
    const container = document.getElementById('perguntas-container');
    if (!container) return;
    container.innerHTML = perguntas.map((p, index) => `
        <div class="quiz-pergunta">
            <p><strong>${index + 1}. ${p.q}</strong></p>
            ${p.options.map(opt => `
                <label class="quiz-opcao-label">
                    <input type="radio" name="pergunta${index}" value="${opt}">
                    ${opt}
                </label>
            `).join('')}
        </div>
    `).join('');
    const btnFinalizar = document.getElementById('btn-finalizar');
    if (btnFinalizar) btnFinalizar.onclick = calcularResultado;

    const btnReiniciar = document.getElementById('btn-reiniciar');
    if (btnReiniciar) btnReiniciar.onclick = reiniciarQuiz;
}
function calcularResultado() {
    let acertos = 0;
    let todasRespondidas = true;
    perguntas.forEach((p, index) => {
        const selecionada = document.querySelector(`input[name="pergunta${index}"]:checked`);
        if (!selecionada) {
            todasRespondidas = false;
        } else if (selecionada.value === p.a) {
            acertos++;
        }
    });
    if (!todasRespondidas) {
        alert("Por favor, responda todas as perguntas antes de finalizar.");
        return;
    }
    document.getElementById('score').innerText = acertos;
    document.getElementById('quiz-form').classList.add('hidden');
    document.getElementById('resultado-quiz').classList.remove('hidden');
    const feedbackEl = document.getElementById('mensagem-feedback');
    if (acertos >= 7) {
        feedbackEl.innerText = "Excelente desempenho! Você conhece muito bem o projeto.";
    } else {
        feedbackEl.innerText = "Bom esforço. Revise o conteúdo acima para buscar a pontuação máxima.";
    }
}
function reiniciarQuiz() {
    document.getElementById('quiz-form').reset();
    document.getElementById('quiz-form').classList.remove('hidden');
    document.getElementById('resultado-quiz').classList.add('hidden');
    const quizSec = document.getElementById('quiz');
    if (quizSec) window.scrollTo({ top: quizSec.offsetTop - 70, behavior: 'smooth' });
}