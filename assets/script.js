document.addEventListener("DOMContentLoaded", function () {
    var questions = [
        {
            question: "Which of the following is a programming language?",
            answers: [
                { text: "HTML" },
                { text: "Shark" },
                { text: "Google" },
                { text: "Adobe scan" }
            ],
            correct: 0
        },
        {
            question: "What does the CSS acronym stand for?",
            answers: [
                { text: "Cascading Style Sheets" },
                { text: "Float" },
                { text: "String" },
                { text: ".Txt" }
            ],
            correct: 0
        },
        {
            question: "Which operator is used for concatenation in most programming languages?",
            answers: [
                { text: "/" },
                { text: "+" },
                { text: "%" },
                { text: "boolean" }
            ],
            correct: 1
        },
        {
            question: "Which keyword is used to define a function in JavaScript?",
            answers: [
                { text: "Def" },
                { text: "Python" },
                { text: "Return" },
                { text: "function" }
            ],
            correct: 3
        }
    ];

    var currentQuestionIndex = 0;
    var time = 0;
    var timeInterval;

    var startButton = document.getElementById("startbtn");
    var timerElement = document.getElementById("time");
    var questionElement = document.getElementById("question");
    var answersElement = document.getElementById("answers");
    var scoreElement = document.getElementById("score-value");
    var initialsElement = document.getElementById("initials");
    var saveButton = document.getElementById("savebtn");

    startButton.addEventListener("click", startQuiz);
    saveButton.addEventListener("click", saveScore);

    function startQuiz() {
        time = 60;
        startTimer();

        startButton.style.display = "none";
        document.querySelector(".start-page").style.display = "none";
        document.querySelector(".quiz").style.display = "block";

        showQuestion();
    }

    function startTimer() {
        timerInterval = setInterval(function () {
            time--;
            timerElement.textContent = time;

            if (time <= 0) {
                clearInterval(timerInterval);
                endQuiz();
            }
        }, 1000);
    }

    function showQuestion() {
        var question = questions[currentQuestionIndex];

        questionElement.textContent = question.question;
        answersElement.innerHTML = "";

        for (var i = 0; i < question.answers.length; i++) {
            var answer = question.answers[i];
            var li = document.createElement("li");
            li.textContent = answer.text;
            li.setAttribute("answers", i);
            li.addEventListener("click", selectAnswer);
            answersElement.appendChild(li);
        }
    }

    function selectAnswer(event) {
        var answer = event.target
        if (selectedAnswerIndex === (".btn")) {
            return;
        }
        if (answer.value !== questions[currentQuestionIndex].correct) {
            secondLeft -= 10;
            if (secondLeft < 0) {
                secondLeft = 0
            }
            document.querySelector("#results").textContent = "Incorrect"
        }
        else {
            document.querySelector("#results").textContent = "Correct"
        }
        document.querySelector("#results").removeAttribute("display:none;");

        setTimeout(function () {
            document.querySelector("#results").setAttribute("style", "display:none");
        }, 1500);

        var selectedAnswerIndex = parseInt(event.target.getAttribute("answers"));
        var question = questions[currentQuestionIndex];
        var selectedAnswer = question.answers[selectedAnswerIndex];


        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(showQuestion, 1000);
        } else {
            setTimeout(endQuiz, 1000);
        }
    }

    function endQuiz() {
        clearInterval(timerInterval);

        document.querySelector(".quiz").style.display = "none";
        document.querySelector("#score").style.display = "block";
        scoreElement.textContent = time;
    }

    function saveScore() {
        var initials = initialsElement.value;
        var score = time;


        alert("Score saved! Initials: " + initials + ", Score: " + score);
    }
});