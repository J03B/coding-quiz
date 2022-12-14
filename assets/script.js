// Setting document variables for text editing/interactive sections
var timeLeftEl = document.querySelector(".time");
var question = document.querySelector(".question");
var subtext = document.querySelector(".subtext");
var result = document.querySelector(".result");
var startQuizBtn = document.getElementById("sq");
var choiceBtn = document.querySelectorAll(".choice");
var submitBtn = document.querySelector(".submit-btn");
var initialsInput = document.querySelector(".form-input");
var viewHS = document.querySelector(".view-highscores");
var scoresEl = document.getElementById("scores");
var submitScoreEl = document.getElementById("submit-score");
var choices = ["c1","c2","c3","c4"];
var timeLeft = 0;
let curQIndex = 0;
let userScore = 0;

// Setting initial home screen to remove placeholders
function initializeScreen() {
    curQIndex = 0;
    userScore = 0;
    startQuizBtn.style.display = "block";
    question.innerHTML = "Welcome to J03B's Coding Quiz Challenge";
    subtext.innerHTML = "Try to answer as many of the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by five seconds.";
    result.innerHTML = "";
    startQuizBtn.innerHTML = "Start Quiz";
    submitScoreEl.style.display = "none";
    for (let i = 0; i < choices.length; i++) {
        const cID = choices[i];
        document.getElementById(cID).style.display = "flex";
        document.getElementById(cID).style.visibility = "hidden";
    }
}
initializeScreen();

// Once the quiz starts, we can change all texts but,
// First set an array for each question, its choices, and answers
questionArray = allQuestions;
choicesArray = allChoices;
resultArray = allResults;
var choiceOrder = ["A","B","C","D"];

// Start Timer Function - once it ends, show scores
function startTimer() {
    var timeInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timeLeftEl.textContent = timeLeft;
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
}

// Shuffle questions function
function nextQuestion(inIndex) {
    if (inIndex < allChoices.length) {
        var que = allQuestions[inIndex];
        var cho = allChoices[inIndex];
        question.innerHTML = que;
        for (let i = 0; i < 4; i++) {
            const cID = choices[i];
            let choEl = document.getElementById(cID);
            choEl.innerHTML = cho[i];
            choEl.style.visibility = "visible";
        }
        result.innerHTML = "";
    }
    else {
        result.innerHTML = "nice try...";
    }
}

// Function for when the user answers a question
function answerQuestion(queIndex,choDN) {
    let choiceIndex = choDN - 1;
    let correctChoice = choiceOrder.indexOf(resultArray[queIndex]);
    if (choiceIndex == correctChoice) {
        result.innerHTML = "Correct!";
        userScore++;
    } else {
        result.innerHTML = "Wrong!";
        timeLeft -= 5;
    }
}

// Function to delay switching to the next question by 1.5 seconds
function delay(dt) {
    return new Promise(resolve => setTimeout(resolve, dt));
}

// START OF QUIZ EVENT LISTENER
//var startQuiz = document.getElementById("sq");
startQuizBtn.addEventListener("click", function () {
    timeLeft = 90;
    startTimer();
    startQuizBtn.style.display = "none";
    subtext.style.display = "none";
    nextQuestion(curQIndex);
});

// Adding event listener for when the user answers a question
choiceBtn.forEach(function(cBtn) {
    cBtn.addEventListener("click", function() {
        var choice = this.getAttribute("data-number");
        answerQuestion(curQIndex,choice);
        curQIndex++;
        if (curQIndex < questionArray.length) {
            // Note - if the user spams the MC buttons, the delay will cause an error in the console 
            delay(1200).then(() => nextQuestion(curQIndex));
        }
        else {
            timeLeft = 0;
            endGame();
        }
    });
});

// END OF QUIZ - SUBMIT SCORE EVENT LISTENER
function endGame() {
    question.innerHTML = "TIME'S UP!!!"
    delay(800).then(() => question.innerHTML = "TIME'S UP!!!"); // In case the user was spamming the choice buttons
    subtext.innerHTML = "Your final score is " + userScore;
    subtext.style.display = "block";
    result.innerHTML = "";
    for (let i = 0; i < choices.length; i++) {
        const cID = choices[i];
        document.getElementById(cID).style.display = "none";
    }
    // Ensure the proper elements are visible (in case of 'View Highscores' selection)
    submitScoreEl.firstElementChild.style.display = "flex";
    document.querySelector(".form-input").style.display = "flex";
    submitBtn.style.display = "flex";
    scoresEl.style.visibility = "visible";
    submitScoreEl.style.display = "block";
    submitBtn.style.visibility = "visible";
    renderHighScores();
}

// Event listener for initials submission
submitBtn.addEventListener("click", function() {
    submitBtn.style.visibility = "hidden";
    var userData = {
        userInitials: initialsInput.value,
        quizScore: userScore
    };

    // Update local storage then save it all
    var allScores = JSON.parse(localStorage.getItem("scoring")) || [];
    allScores.push(userData);
    localStorage.setItem("scoring", JSON.stringify(allScores));
    initialsInput.value = "";
    renderHighScores();
    delay(5000).then(() => initializeScreen());
});

// Clear scores to then render them again
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// render the high scores for the high scores list
function renderHighScores() {
    removeAllChildNodes(scoresEl);
    var lastScores = JSON.parse(localStorage.getItem("scoring"));
    if (lastScores !== null) {
        for (let i = 0; i < lastScores.length; i++) {
            const last = lastScores[i];
            const nextScore = document.createElement("li");
            nextScore.textContent = last.userInitials + ":\t" + last.quizScore;
            document.querySelector(".scores").append(nextScore);
        }
    }
}

// Event listener for viewing all submitted highscores
viewHS.addEventListener("click", function() {
    if (timeLeft > 1) {
        result.innerHTML = "You're taking a quiz! You can't view highscores right now!";
    }
    else {
        // ensure that all the proper elements are hidden/displayed
        for (let i = 0; i < choices.length; i++) {
            const cID = choices[i];
            document.getElementById(cID).style.display = "none";
        }
        startQuizBtn.style.display = "none";
        question.innerHTML = "High Scores!";
        subtext.innerHTML = "Try taking the quiz to add yourself to the leaderboard.";
        submitScoreEl.style.display = "block";
        submitScoreEl.firstElementChild.style.display = "none";
        document.querySelector(".form-input").style.display = "none";
        submitBtn.style.display = "none";
        scoresEl.style.display = "block";
        scoresEl.style.visibility = "visible";
        renderHighScores();
        delay(5000).then(() => initializeScreen());
    }
});