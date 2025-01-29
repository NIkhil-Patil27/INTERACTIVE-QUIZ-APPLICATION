const questions = [
    {
        question: "Where was Shivaji Maharaj born?",
        options: ["Pune", "Junnar", "Raigad", "Shivneri Fort"],
        correct: 3
    },
    {
        question: "Who was the mother of Shivaji Maharaj?",
        options: ["Jijabai", "Tarabai", "Kashibai", "Sakhu Bai"],
        correct: 0
    },
    {
        question: "Which year did Shivaji Maharaj coronate himself as the king?",
        options: ["1645", "1674", "1659", "1680"],
        correct: 1
    },
    {
        question: "Shivaji Maharaj's famous horse was named?",
        options: ["Chetak", "Baadal", "Kesar", "Shivaji's horse had no name"],
        correct: 1
    },
    {
        question: "What was the name of Shivaji Maharaj's first fort?",
        options: ["Raigad", "Sindhudurg", "Lohagad", "Torana"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    
    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = ""; // Clear previous options

    question.options.forEach((option, index) => {
        const answerButton = document.createElement("button");
        answerButton.textContent = option;
        answerButton.onclick = () => checkAnswer(index);
        answersContainer.appendChild(answerButton);
    });

    document.getElementById("feedback").textContent = "";
    document.getElementById("next-button").style.display = "none"; // Hide next button initially
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const feedbackElement = document.getElementById("feedback");

    if (selectedIndex === question.correct) {
        score++;
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Wrong!";
        feedbackElement.style.color = "red";
    }

    document.getElementById("next-button").style.display = "inline-block"; // Show next button
    document.getElementById("score").textContent = score;
}

function loadNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result").style.display = "block";
}

function retryQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("result").style.display = "none";
    loadQuestion();
}

// Initial call to load the first question
loadQuestion();
