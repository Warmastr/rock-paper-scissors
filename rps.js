const newGame = document.querySelector('.newGame');
/* const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors'); */
const message = document.querySelector('.messages');
const result = document.querySelector('.result');
result.setAttribute('style', 'white-space: pre;');
let scoreDiv = document.createElement('div');
scoreDiv.setAttribute('style', 'white-space: pre');
scoreDiv.setAttribute('class', 'score');
result.parentNode.insertBefore(scoreDiv, message);
const score = document.querySelector('.score');
score.setAttribute('style', 'white-space: pre');
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

        result.textContent = result.textContent + ` Computer wins, ${computerSelection} covers ${playerChoice}\r\n\n`;
        roundWinner = "computer";
    } else if (weapons === 'rockscissors') {
        result.textContent  = result.textContent + ` Your ${playerChoice} beats the computer's ${computerSelection}\r\n\n`;
        roundWinner = "player";
    } else if (weapons === 'paperrock') {
        result.textContent  = result.textContent + ` You win because ${playerChoice} covers ${computerSelection}\r\n\n`;
        roundWinner = "player";
    } else if (weapons === 'paperscissors') {
        result.textContent  = result.textContent + ` The computers' ${computerSelection} cut your ${playerChoice}.\r\n\n`;
        roundWinner = "computer";
    }else if (weapons === 'scissorsrock') {
        result.textContent  = result.textContent + ` You lose ${computerSelection} smashes your ${playerChoice}!\r\n\n`;
        roundWinner = "computer";
    }else if (weapons === 'scissorspaper') {
        result.textContent  = result.textContent + ` Winner Winner Chicken Dinner, ${playerChoice} cut ${computerSelection}!\r\n\n`;
        roundWinner = "player";
    } else {
        result.textContent  = result.textContent + ` It's a tie! You chose ${playerChoice}, the same as the computer! \r\n\n`;
        roundWinner = "tie";
    }
    if (roundWinner === 'player') {
        playerScore += 1;
    } else if (roundWinner === 'computer') {
        computerScore += 1;
    }
    score.textContent  = `You have ${playerScore} points. The computer has ${computerScore} point\r\n\n`;
    if (playerScore + computerScore === 5) {
        if (playerScore > computerScore) {
            gameWinner = "Player Wins.";
            message.textContent = "You've Won!!!";
            disableBtn();
        } else if (computerScore > playerScore) {
            gameWinner = "Computer Wins."
            message.textContent = "The computer wins, better luck next time.";
            disableBtn();
        }
    }
    return roundWinner;
}

function game() {
    result.textContent = '';
    message.textContent = '';
    score.textContent = '';
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
disableBtn();