const quizData = [
    {
        question: "What is the capital of Nepal?",
        options: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"],
        correct: 0
    },
    {
        question: "Which is the national flower of Nepal?",
        options: ["Sunflower", "Rhododendron", "Lotus", "Rose"],
        correct: 1
    },
    {
        question: "What is the highest mountain in Nepal?",
        options: ["K2", "Kanchenjunga", "Everest", "Lhotse"],
        correct: 2
    },
    {
        question: "What is the currency of Nepal?",
        options: ["Rupee", "Dollar", "Yen", "Euro"],
        correct: 0
    },
    {
        question: "Who is the founder of Buddhism born in Nepal?",
        options: ["Mahavira", "Siddhartha Gautama", "Confucius", "Laozi"],
        correct: 1
    }
];

const quizContainer = document.getElementById('quiz');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const options = document.querySelectorAll('.option');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    options.forEach((option, index) => {
        option.nextElementSibling.innerText = currentQuizData.options[index];
        option.checked = false;
    });
}

function getSelected() {
    let answer;
    options.forEach(option => {
        if (option.checked) {
            answer = option.value;
        }
    });
    return answer;
}

submitButton.addEventListener('click', () => {
    const answer = getSelected();
    if (answer !== undefined) {
        if (answer == quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            showResult();
        }
    }
});

function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.innerText = `${score} out of ${quizData.length}`;
}

restartButton.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    questionContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    loadQuiz();
});
