// Get references to HTML elements
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('nextButton');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

// Function to display a question
function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

// Function to check the user's answer
function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

// Function to display the score
function displayScore() {
    scoreElement.textContent = `Your Score: ${score}/${quizData.length}`;
}

// Event listener for the next button
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        displayScore();
    }
});

// Initial display
displayQuestion();
