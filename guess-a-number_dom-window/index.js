let rndNum = randomNum(1, 10);
function randomNum(min, max) {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

function guessingGame() {
    let numberToGuess = rndNum;
    let count = 1;
    // user input is parsed as string > parseInt transform to number
    let guess = parseInt(prompt('Guess a number 1-10.'));

    while ((guess !== numberToGuess) && (count < 3)) {
        guess = parseInt(prompt('Your guess is not correct! Please try again with a number between 1 - 10:'))
        count++;
    }

    if ((guess === numberToGuess) && (count <= 3)) {
        alert(`Success, the number was ${numberToGuess}! Attempts: ${count}`);
    } else {
        alert(`Sorry, you failed to guess the number in three attempts. The number was ${numberToGuess}!`);
    }
}

guessingGame();