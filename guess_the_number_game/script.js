const guessInput = document.getElementById('guessInput');
const checkButton = document.getElementById('checkButton');
const restartButton = document.getElementById('restartButton');
const message = document.getElementById('message');
const guessesLeftSpan = document.getElementById('guessesLeft');

let randomNumber;
let guessesRemaining;
const maxGuesses = 10;

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Number between 1 and 100
    guessesRemaining = maxGuesses;
    guessesLeftSpan.textContent = guessesRemaining;
    message.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    checkButton.disabled = false;
    restartButton.style.display = 'none'; // Hide restart button initially
    guessInput.focus();
}

function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    guessesRemaining--;
    guessesLeftSpan.textContent = guessesRemaining;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} correctly!`;
        endGame(true);
    } else if (guessesRemaining === 0) {
        message.textContent = `Game Over! The number was ${randomNumber}.`;
        endGame(false);
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
    } else {
        message.textContent = 'Too high! Try again.';
    }

    guessInput.value = ''; // Clear input after guess
}

function endGame(won) {
    guessInput.disabled = true;
    checkButton.disabled = true;
    restartButton.style.display = 'block'; // Show restart button
}

checkButton.addEventListener('click', checkGuess);
restartButton.addEventListener('click', initializeGame);

// Initialize the game when the page loads
initializeGame();
