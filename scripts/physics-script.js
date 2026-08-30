//Questions and answers (yes/no)
const questions = [
    "Acoustics is the science of sound?",
    "Mechanics is an important branch of Physics?",
    "Radio waves are studied in Optics?"
]

const answers = [
    "yes",
    "yes",
    "no"
]

let current=0;
let score=0;

//load first question
document.getElementById("questionText").textContent=questions[current];
document.getElementById("scoreText").textContent="Score: "+score+" of "+questions.length;

document.getElementById("quizForm").addEventListener("submit", function name(e) {
    e.preventDefault();

    // get selected radio button
    const selected=document.querySelector('input[name="answer"]:checked');

    // before checking value of the selected radio button, we need to verify that
    // it has indeed been selected.
    if (!selected) {
        // we want to finish the function if the user did not select yes or no,
        // not update the score etc.
        console.warn("User submitted an invalid answer. Ignoring it!");

        // shake the form to warn the user
        const form = document.getElementById("quizForm");
        form.classList.add("shake");
        // remove the class after the animation is finished so it can be used again 
        // if needed. Need to give the animation time to complete, hence the 300ms.
        setTimeout(function() {
            form.classList.remove("shake")
        }, 300);
        return;
    }

    const userAnswer=selected.value;
    const correctAnswer=answers[current];

    const resultIcon = document.getElementById("resultIcon");

    if (userAnswer===correctAnswer) {
        score++;
        resultIcon.textContent="Correct \u2714"; // unicode for tick
        resultIcon.style.color="green";
    } else {
        resultIcon.textContent="Wrong \u274C"; // unicode for cross
        resultIcon.style.color="red";
    }

    // update the score
    document.getElementById("scoreText").textContent="Score: "+score+" out of "+questions.length;
    // move to next question
    current++;
    // reset radio buttons;
    selected.checked=false;

    //load next question or finish
    if (current<questions.length) {
        document.getElementById("questionText").textContent=questions[current];
    } else {
        document.getElementById("questionText").textContent="Test complete!";
        // Give a short delay of 1.5s so the user can see the result of the last
        // question, then provide the final score.
        setTimeout(function(){
            // hide the form and question result because we are finished with it.
            document.getElementById("quizForm").style.display = "none";
            resultIcon.textContent="";
            document.getElementById("scoreText").textContent="Final Score is "+score+" out of "+questions.length;
        },1500);
    }
});