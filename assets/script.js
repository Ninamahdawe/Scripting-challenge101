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

var questionElement = document.getElementById(".question");
var answer = document.getElementById(".answer");
var startBtn = document.getElementById("#startBtn");
var startIntro = document.getElementById(".startIntro")
console.log("startIntro");
var currentQuestionIndex = 0;
var score = 0;
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startIntro.setAttribute("style", "display:none");
}

startBtn.addEventListener("click", startQuiz);