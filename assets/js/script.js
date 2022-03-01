let timeRemaining = 75;
let questions = ['this is a test question'];
let answers = [];
let correctAnswers = [];
let result = false ;
let questionEl = document.querySelector("#questions")
let answerEl = document.querySelector("#answers")

function startquiz() {
    quiz()
    timer()
}

function quiz() {
    let questionAskEl = document.createElement("h2")
    questionAskEl.className = "question"
    questionAskEl.textContent = questions[0];
    questionEl.appendChild(questionAskEl);
    // while (timeRemaining > 0) {

    // }
}

function endquiz() {

}

function timer() {

}

quiz();