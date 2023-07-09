var questions = [
    {
        question: "Which of the following is a programming language?",
        answers: [
            { text: "HTML", },
            { text: "Shark" },
            { text: "Google", },
            { text: "Adope scan" },
        ], correct: 0
    },
    {
        question: "What does the CSS acronym stand for?",
        answers: [
            { text: "Cascading Style Sheets", },
            { text: "Float", },
            { text: "String", },
            { text: ".Txt", },
        ], correct: 0
    },
    {
        question: "Which operator is used for concatenation in most programming languages?",
        answers: [
            { text: "/", },
            { text: "+", },
            { text: "%", },
            { text: "boolean", },
        ], correct: 1
    },
    {
        question: "Which keyword is used to define a function in JavaScript? ",
        answers: [
            { text: "Def", },
            { text: "Python", },
            { text: "Return", },
            { text: "function", },
        ], correct: 3
    }
];

var questionElement = document.querySelector("#question");
var answerBtns = document.querySelectorAll(".btn");
var startBtn = document.querySelector("#startBtn");
var startIntro = document.querySelector(".startIntro")
console.log("startIntro");
var currentQuestionIndex = 0;
var score = 0;
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startIntro.setAttribute("style", "display:none");
    showQuestion();
}

function showQuestion() { }
var currentQuestion = questions[currentQuestionIndex];
var questionNo = currentQuestionIndex + 1;
questionElement.textContent = questionNo + ". " + currentQuestion.
    question;
currentQuestion.answers.forEach(function (answers, index) {
    // answerBtns[index].textContent = questions[currentQuestion].answers[index];
    console.log('answers', index);
    answerBtns[index].textContent = currentQuestion.answers[index].text;


})


startBtn.addEventListener("click", startQuiz);