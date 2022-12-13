// Setting document variables for text editing sections
var timeLeftEl = document.querySelector(".time");
var question = document.querySelector(".question");
var subtext = document.querySelector(".subtext");
var result = document.querySelector(".result");
var startQuizBtn = document.getElementById("sq");
var choices = ["c1","c2","c3","c4"]
var timeLeft = 60;
let curQIndex = 0;

// Setting initial home screen to remove placeholders
question.innerHTML = "Welcome to J03B's Coding Quiz Challenge";
subtext.innerHTML = "Try to answer as many of the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds.";
result.innerHTML = "";
startQuizBtn.innerHTML = "Start Quiz";
for (let i = 0; i < choices.length; i++) {
    const cID = choices[i];
    document.getElementById(cID).style.visibility = "hidden";
}

// Once the quiz starts, we can change all texts but,
// First set an array for each question, its choices, and answers
questionArray = allQuestions;
choicesArray = allChoices;
resultArray = allResults;
var choiceOrder = ["A","B","C","D"];

// Start Timer Function
function startTimer() {
    var timeInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timeLeftEl.textContent = timeLeft;
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
        }
    }, 1000);
}

// Shuffle questions function
function nextQuestion(que,cho) {
    question.innerHTML = que;
    for (let i = 0; i < 4; i++) {
        const cID = choices[i];
        let choEl = document.getElementById(cID);
        choEl.innerHTML = cho[i];
        choEl.style.visibility = "visible";
    }
    result.innerHTML = "";
}

// Event Listener for when the user answers a question
function answerQuestion() {

}

// START OF QUIZ EVENT LISTENER
var startQuiz = document.getElementById("sq");
startQuiz.addEventListener("click", function () {
    startTimer();
    startQuizBtn.style.display = "none";
    subtext.style.display = "none";

    // Run through a loop of the questions
    while (timeLeft > 0) {
        let nextQ = questionArray[curQIndex];
        nextQuestion(nextQ,choicesArray[curQIndex]);
        
        let userChoice = 0;
        answerQuestion();
    }
});






// END OF QUIZ - SHOW HIGH SCORES