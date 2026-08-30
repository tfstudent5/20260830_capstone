console.log("biology-script.js has arrived!!");

document.addEventListener("DOMContentLoaded",()=> {
    console.log("DOM ready!")
});

/* references to the buttons used by the event handlers */
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const resetBtn = document.getElementById("resetBtn");
/* reference to the paragraph where I put responses to the button presses
i.e the contents of responseLabel is changed dynamically */
const responseLabel = document.getElementById("responseLabel");

/* Code for clicking the YES button */
/* The user chose YES so the paragraph background and text
   changed colour and the message changed to "YES! ... ".
   The reset button is made visible so the user can reset the
   paragraph so the message and colours are set to their starting
   values */
yesBtn.addEventListener("click",function () {
    console.log("The user clikced the YES button");
    responseLabel.textContent = "YES! I am so happy.";
    responseLabel.style.color="white";
    responseLabel.style.backgroundColor="green";
    /* make answer reset button available */
    resetBtn.style.display="inline";
});

/* code for clicking the NO button */
/* The user chose NO and the label is changed to red background
   with white text, the message changes to "NO! etc.." and the
   reset button becomes visible to allow a reset */
noBtn.addEventListener("click", function () {
    console.log("The user clicked the NO button");
    responseLabel.textContent="NO! That makes me sad.";
    responseLabel.style.color="white";
    responseLabel.style.backgroundColor="red";
    /* make answer reset button available */
    resetBtn.style.display="inline";
});

/* Code for clicking on the reset button */
/* This button becomes visible when the user clicks on YES or NO
   and by clicking on it (1) resets the message in the paragraph called
   responseLabel, (2) changes the colour of the response label back to
   light green background with black text, (3) Hides the reset button
   until it is next needed after the user selects YES or NO. */
resetBtn.addEventListener("click", function() {
    console.log("The user has reset their answer");
    responseLabel.textContent="Please click YES or NO.";
    responseLabel.style.color="black";
    responseLabel.style.backgroundColor="#e8f5e9";
    resetBtn.style.display="none";
})