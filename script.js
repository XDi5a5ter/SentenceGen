// Array de citações
const quotes = [
    "A vida é o que acontece enquanto você está ocupado fazendo outros planos. - John Lennon",
    "A melhor maneira de prever o futuro é criá-lo. - Peter Drucker",
    "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original. - Albert Einstein",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia. - Robert Collier",
    "A persistência é o caminho do êxito. - Charlie Chaplin",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário. - Vidal Sassoon",
    "A vida é como andar de bicicleta. Para ter equilíbrio, você precisa se manter em movimento. - Albert Einstein",
    "O verdadeiro segredo da felicidade está em ter um genuíno interesse por todos os detalhes da vida cotidiana. - William Morris",
    "A imaginação é mais importante que o conhecimento. - Albert Einstein",
    "Nada é impossível, basta acreditar e lutar. - Autor desconhecido",
    "O sucesso é construído à medida que você supera seus próprios limites. - Autor desconhecido",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário. - Vidal Sassoon",
    "A vida é como andar de bicicleta. Para ter equilíbrio, você precisa se manter em movimento. - Albert Einstein",
    "O verdadeiro segredo da felicidade está em ter um genuíno interesse por todos os detalhes da vida cotidiana. - William Morris",
    "A imaginação é mais importante que o conhecimento. - Albert Einstein",
    "Nada é impossível, basta acreditar e lutar. - Autor desconhecido",
    "O sucesso é construído à medida que você supera seus próprios limites. - Autor desconhecido"
];

// Função para gerar uma cor aleatória em formato RGB
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Função para exibir uma citação aleatória com cores aleatórias
function novaCitação() {
    const body = document.querySelector('body');
    const quoteText = document.querySelector('.quote-text');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomColor = getRandomColor(); // Gerar cor de texto aleatória
    const randomBgColor = getRandomColor(); // Gerar cor de fundo aleatória
    quoteText.textContent = quotes[randomIndex];
    quoteText.style.color = randomColor; // Aplicar cor de texto aleatória
    body.style.backgroundColor = randomBgColor; // Aplicar cor de fundo aleatória para o body
}

// Exibir uma citação aleatória ao carregar a página
window.onload = novaCitação;

