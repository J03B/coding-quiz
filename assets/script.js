// Setting document variables for text editing sections
var timeLeft = document.querySelector(".time");
var question = document.querySelector(".question");
var subtext = document.querySelector(".subtext");
var result = document.querySelector(".result");
var choices = ["c1","c2","c3","c4"]

// Setting initial home screen to remove placeholders
question.innerHTML = "Welcome to J03B's Coding Quiz Challenge";
subtext.innerHTML = "Try to answer as many of the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds.";
result.innerHTML = "";
for (let i = 0; i < choices.length; i++) {
    const cID = choices[i];
    if (i == 0) {
        document.getElementById(cID).children[0].innerHTML = "Start Quiz";
    } else {
        document.getElementById(cID).style.visibility = "hidden";
    }
}

// Once the quiz starts, we can change all texts but,
// First set an array for each question, its choices, and answers
questionArray = allQuestions;
choicesArray = allChoices;
resultArray = allResults;
var choiceOrder = ["A","B","C","D"];

// START OF QUIZ


// Run through a loop of the questions





// END OF QUIZ - SHOW HIGH SCORES