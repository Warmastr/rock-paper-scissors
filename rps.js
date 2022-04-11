const newGame = document.querySelector('.newGame');
/* const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors'); */
const message = document.querySelector('.messages');
const result = document.querySelector('.result');
let playerChoice = '';
let playerScore = 0;
let computerScore = 0;
let gameWinner;

newGame.addEventListener('click', () => {
    game();
});

// Controls the start/end of the game. 
function disableBtn() {
    document.querySelectorAll(".button").forEach(e => e.disabled = true);
}
function enableBtn() {
    document.querySelectorAll(".button").forEach(e => e.disabled = false);
}
// Randomly chooses computer weapon.
function computerPlay() {
    const compOptions = [0, 1, 2];
    let compChoice = Math.floor(Math.random() * compOptions.length);
    // convert array elements to strings
    if (compChoice === 0) {
        compChoice = 'rock';
    } else if (compChoice === 1) {
        compChoice = 'paper';
    } else {
        compChoice = 'scissors';
    }
    return compChoice;
}

function playRound(computerSelection) {
    computerSelection = computerPlay();
    let weapons = playerChoice + computerSelection;
    let roundWinner;
    if (weapons === 'rockpaper') {
        result.textContent = `Computer wins, ${computerSelection} covers ${playerChoice}`;
        roundWinner = "computer";
    } else if (weapons === 'rockscissors') {
        result.textContent  = `Your ${playerChoice} beats the computer's ${computerSelection}`;
        roundWinner = "player";
    } else if (weapons === 'paperrock') {
        result.textContent  = `You win because ${playerChoice} covers ${computerSelection}`;
        roundWinner = "player";
    } else if (weapons === 'paperscissors') {
        result.textContent  = `The computers' ${computerSelection} cut your ${playerChoice}.`;
        roundWinner = "computer";
    }else if (weapons === 'scissorsrock') {
        result.textContent  = `You lose ${computerSelection} smashes your ${playerChoice}!`;
        roundWinner = "computer";
    }else if (weapons === 'scissorspaper') {
        result.textContent  = `Winner Winner Chicken Dinner, ${playerChoice} cut ${computerSelection}!`;
        roundWinner = "player";
    } else {
        result.textContent  = `It's a tie! You chose ${playerChoice}, the same as the computer! `;
        roundWinner = "tie";
    }
    if (roundWinner === 'player') {
        playerScore += 1;
    } else if (roundWinner === 'computer') {
        computerScore += 1;
    }
    result.textContent  = `You have ${playerScore} points. The computer has ${computerScore} point`;
    console.log(result);
    if (playerScore + computerScore >= 5) {
        if (playerScore > computerScore) {
            gameWinner = "Player Wins.";
            result.textContent = "You've Won!!!";
            disableBtn();
        } else if (computerScore > playerScore) {
            gameWinner = "Computer Wins."
            result.textContent = "The computer wins, better luck next time.";
            disableBtn();
        }
    }
    return roundWinner;
}

function game() {
    result.textContent = '';
    enableBtn();
    playerScore = 0;
    computerScore = 0;
    if (playerChoice === '') {
        rock.addEventListener('click', () => {
            playerChoice = "rock";
            playRound();
        });
        paper.addEventListener('click', () => {
            playerChoice = "paper";
            playRound();
        });
        scissors.addEventListener('click', () => {
            playerChoice = "scissors";
            playRound();
        });
    } 
}