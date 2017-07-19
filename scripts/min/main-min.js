//First, set all variables based on html classes////

var randomNumber = Math.ceil(Math.random() * 100);

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

guessField.addEventListener("keyup", keyUpHandler);
var guessCount = 1;
var resetButton;


//Next, build first function to check and list guesses///
function keyUpHandler(event) {
  if(event.keyCode === 13) {
    guessSubmit.click()
  }

  }


function checkGuess(){
  var userGuess = Number(guessField.value);

  if(userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
    lastResult.textContent = "That wasn't a valid guess, try again!";
    lastResult.style.backgroundColor = "yellow";
    lastResult.style.color = "black"
    guessField.value = " ";
    guessField.focus();
    return;
  }


  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";

  }
  guesses.textContent += userGuess + " ";

  //Insert logic here--did the user guess the right number?//

  if(userGuess === randomNumber) {
  lastResult.textContent = "Congratulations, you got it right!";
  lastResult.style.backgroundColor = "green";
  lowOrHi.textContent = " ";
  setGameOver();
} else if (guessCount === 10) {
  //user is out of guesses////
  lastResult.textContent = "Game over!!!";
  lastResult.style.backgroundColor = "red";
  setGameOver();
} else {
  //user has guesses left, still hasn't guessed correctly//
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "orange";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else {
      lowOrHi.textContent = "Last guess was too high!";
    }

  }

  guessCount++;
  guessField.value = " ";
  guessField.focus();
}
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.querySelector(".form").appendChild(resetButton);
    resetButton.style.backgroundColor = "cornflowerblue";
    resetButton.style.color = "white";
    resetButton.addEventListener("click", resetGame);
  }

function resetGame() {
    guessCount = 1;

    var resetParas = document.querySelectorAll(".resultParas p");
    for (var i = 0; i < resetParas.length; i++) {
      resetParas[i].textContent = "";
    }

      lastResult.style.backgroundColor = "white";

      guessSubmit.disabled = false;
      guessField.disabled = false;
      resetButton.parentNode.removeChild(resetButton);

      guessField.value = " ";
      guessField.focus();

      randomNumber = Math.ceil(Math.random() * 100);


}

guessSubmit.addEventListener("click", checkGuess);


