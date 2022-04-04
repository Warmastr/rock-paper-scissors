/* This program is intended to be played vs. the computer and has a random chance to win. First to five wins the game! */
const newGame = document.querySelector('.newGame');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const message = document.querySelector('.messages');

newGame.addEventListener('click', () => {
    game();
});

let buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener(click, () => {
        playRound();
    });
}); 





function computerPlay() {
    const compOptions = [0, 1, 2];
    let compChoice = Math.floor(Math.random() * compOptions.length);
    // convert indexes to strings
    if (compChoice === 0) {
        compChoice = 'rock';
    } else if (compChoice === 1) {
        compChoice = 'paper';
    } else {
        compChoice = 'scissors';
    }
    return compChoice;
}
/* Allows players to select either rock, paper, or scissors for their weapon. */
function playerSelection() {
    let playerChoice = buttons;
    
    return playerChoice;
}
// One round of player vs. computer.
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection();
    computerSelection = computerPlay();
    let result; //display all to a div
    let weapons = playerSelection + computerSelection;
    let roundWinner;
    if (weapons === 'rockpaper') {
        result = `Computer wins, ${computerSelection} covers ${playerSelection}`;
        roundWinner = "computer";
    } else if (weapons === 'rockscissors') {
        result = `Your ${playerSelection} beats the computer's ${computerSelection}`;
        roundWinner = "player";
    } else if (weapons === 'paperrock') {
        result = `You win because ${playerSelection} covers ${computerSelection}`;
        roundWinner = "player";
    } else if (weapons === 'paperscissors') {
        result = `The computers' ${computerSelection} cut your ${playerSelection}.`;
        roundWinner = "computer";
    }else if (weapons === 'scissorsrock') {
        result = `You lose ${computerSelection} smashes your ${playerSelection}!`;
        roundWinner = "computer";
    }else if (weapons === 'scissorspaper') {
        result = `Winner Winner Chicken Dinner, ${playerSelection} cut ${computerSelection}!`;
        roundWinner = "player";
    } else {
        result = `It's a tie! You chose ${playerSelection}, the same as the computer! `;
        roundWinner = "tie";
    }
    console.log(result); //remove this...
    return roundWinner; // restructure this
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    message.textContent = "This game is you vs. the computer, best out of five games! Choose your weapon by clicking on 'rock', 'paper', or 'scissors'!"
    
    /* (think about if player score plus the computer score is equal to 5, then terminate the game)*/
    let winner = playRound(playerSelection, computerPlay); // This assigns the round winner to the "winner" variable from the call to playRound()
    if (winner === 'player') {
        playerScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }

    if (playerScore > computerScore) {
        gameWinner = 'You win, Great job!';
    } else if (playerScore == computerScore) {
        gameWinner = 'You tied the computer, try again!';
    } else {
        gameWinner = 'The computer whooped ya! Better luck next time!';
    }
    console.log(`You have ${playerScore} points. The computer has ${computerScore} point`);
    console.log(gameWinner); // some variable.textContent = `${gameWinner}`;
    return gameWinner;
}


