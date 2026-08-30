console.log("biology-script.js has arrived!!");

document.addEventListener("DOMContentLoaded",()=> {
    console.log("DOM ready!")
});

/* variables to store whether each question is answered
   correctly or incorrectly */
let q1=false;
let q2=false;
let q3=false;

/* references to the buttons used by the event handlers */
const btnQ1 = document.getElementById("btnQ1");
const btnQ2 = document.getElementById("btnQ2");
const btnQ3 = document.getElementById("btnQ3");
const resetBtn = document.getElementById("resetBtn");


/* reference to the paragraphs where I put responses to the button presses
i.e the contents of responseLabel is changed dynamically */
const responseLabel1 = document.getElementById("responseLabel1");
const responseLabel2 = document.getElementById("responseLabel2");
const responseLabel3 = document.getElementById("responseLabel3");

/* reference to the paragraph where I put the total score */
const responseOutput = document.getElementById("responseTotalCorrect");

/* used to reference the text boxes */
const answerBox1 = document.getElementById("answerBox1");
const answerBox2 = document.getElementById("answerBox2");
const answerBox3 = document.getElementById("answerBox3");

/* checking the answer to Q1 */
btnQ1.addEventListener("click", function() {
    if (answerBox1.value.toLowerCase()==="yes"
        || answerBox1.value.toLowerCase()==="y") {
        responseLabel1.textContent="Correct!";
        responseLabel1.style.backgroundColor="green";
        responseLabel1.style.color="white";
        q1=true;
    } else {
        responseLabel1.textContent="Incorrect! Try again";
        responseLabel1.style.backgroundColor="red";
        responseLabel1.style.color="white";
        q1=false;
    }
    updateScore();
});

/* checking the answer to Q2 */
btnQ2.addEventListener("click", function() {
    if (answerBox2.value.toLowerCase()==="yes"
        || answerBox2.value.toLowerCase()==="y") {
        responseLabel2.textContent="Correct!";
        responseLabel2.style.backgroundColor="green";
        responseLabel2.style.color="white";
        q2=true;
    } else {
        responseLabel2.textContent="Incorrect! Try again";
        responseLabel2.style.backgroundColor="red";
        responseLabel2.style.color="white";
        q2=false;
    }
    updateScore();
});

/* checking the answer to Q3 */
btnQ3.addEventListener("click", function() {
    if (answerBox3.value.toLowerCase()==="ammonia"
        || answerBox3.value.toLowerCase()==="nh3") {
        responseLabel3.textContent="Correct!";
        responseLabel3.style.backgroundColor="green";
        responseLabel3.style.color="white";
        q3=true;
    } else {
        responseLabel3.textContent="Incorrect! Try again";
        responseLabel3.style.backgroundColor="red";
        responseLabel3.style.color="white";
        q3=false;
    }
    updateScore();
});

/* set up a function so I don't have to type this code in 
   every if statement! */
function updateScore() {
    let score=Number(q1)+Number(q2)+Number(q3);
    responseOutput.textContent="Your score is "+score+" out of 3.";
}

/* I need to reset the score and labels and text boxes when the
   reset button is pressed. */
resetBtn.addEventListener("click",function() {
    q1=false;
    q2=false;
    q3=false;
    responseLabel1.textContent="Awaiting your answer...";
    responseLabel1.style.color="black";
    responseLabel1.style.backgroundColor="#e6f0ff";
    responseLabel2.textContent="Awaiting your answer...";
    responseLabel2.style.color="black";
    responseLabel2.style.backgroundColor="#e6f0ff";
    responseLabel3.textContent="Awaiting your answer...";
    responseLabel3.style.color="black";
    responseLabel3.style.backgroundColor="#e6f0ff";
    answerBox1.value="";
    answerBox2.value="";
    answerBox3.value="";
    responseOutput.textContent="You have answered no questions yet. Your score is zero."
})


