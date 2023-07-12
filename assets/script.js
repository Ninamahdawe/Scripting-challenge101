document.addEventListener("DOMContentLoaded", function () {
    var questions = [
        {
            question: "Which of the following is a programming language?",
            answers: [
                { text: "HTML" },
                { text: "Shark" },
                { text: "Google" },
                { text: "Adobe scan" },
            ],
            correct: 0,
        },
        {
            question: "What does the CSS acronym stand for?",
            answers: [
                { text: "Cascading Style Sheets" },
                { text: "Float" },
                { text: "String" },
                { text: ".Txt" },
            ],
            correct: 0,
        },
        {
            question:
                "Which operator is used for concatenation in most programming languages?",
            answers: [
                { text: "/" },
                { text: "+" },
                { text: "%" },
                { text: "boolean" },
            ],
            correct: 1,
        },
        {
            question: "Which keyword is used to define a function in JavaScript?",
            answers: [
                { text: "Def" },
                { text: "Python" },
                { text: "Return" },
                { text: "function" },
            ],
            correct: 3,
        },
    ];

    var currentQuestionIndex = 0;
    var time = 0;
    var timeInterval;

    // start section
    var startButton = document.getElementById("startbtn");
    startButton.addEventListener("click", startQuiz);

    // time section
    var timerElement = document.getElementById("time");
    // questions section
    var questionElement = document.getElementById("question");

    //  TODO :  CHECK if needed var answersElement = document.getElementById("answers");
    // answers section
    var answerBtns = document.querySelectorAll(".answerButton");
    var resultEl = document.querySelector("#results");
    for (var i = 0; i < answerBtns.length; i++) {
        answerBtns[i].setAttribute("id", i);
        answerBtns[i].addEventListener("click", selectAnswer);
    }

    // score value section
    var scoreElement = document.getElementById("score-value");
    // intials section
    var initialsElement = document.getElementById("initials");
    var saveButton = document.getElementById("savebtn");

    saveButton.addEventListener("click", saveScore);

    function startQuiz() {
        time = 60;
        startTimer();

        //startButton.style.display = "none";
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
        console.log(question);
        questionElement.textContent = question.question;
        // answersElement.innerHTML = "";

        for (var i = 0; i < question.answers.length; i++) {
            var answer = question.answers[i];
            console.log(answerBtns[i]);
            answerBtns[i].textContent = answer.text;
        }
    }

    function selectAnswer(event) {
        var answerButton = event.target;
        // if (selectedAnswerIndex === (".btn")) {
        //     return;
        // }
        if (
            Number.parseInt(answerButton.getAttribute("id")) !==
            questions[currentQuestionIndex].correct
        ) {
            time -= 10;
            if (time < 0) {
                time = 0;
            }
            resultEl.textContent = "Incorrect";
        } else {
            resultEl.textContent = "Correct";
        }
        document
            .querySelector("#results")
            .setAttribute("style", "display:inline-block");

        setTimeout(function () {
            document.querySelector("#results").setAttribute("style", "display:none;");
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
        var highScores = JSON.parse(localStorage.getItem("Highscore")) || [];
        highScores.push({ initials, score });
        localStorage.setItem("Highscore", JSON.stringify(highScores));
        alert("Score saved! Initials: " + initials + ", Score: " + score);
        highScorelist(highScores);
    }
    function highScorelist(highScores) {
        document.querySelector("#score").style.display = "none";
        document.querySelector("#highscore").style.display = "block";
        highScores.sort(function (a, b) {
            return b.score - a.score;
        })
        for (var i = 0; i < highScores.length; i++) {
            var highScoreEl = document.createElement("li")
            highScoreEl.textContent = highScores[i].score + " . " + highScores[i].initials
            document.getElementById("highscorelist").appendChild(highScoreEl)

        }

    }

});

// function add(num1, num2) {
//     var total = num1 + num2
//     return total
// }
// var somenum = 213423
// add(somenum,123122321)