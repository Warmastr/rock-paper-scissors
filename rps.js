/* This program is intended to be played vs. the computer and has a random chance to win. First to five wins the game! */
let playerScore = 0;
let computerScore = 0;

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
    let flag = true;
    let playerSelection = prompt("Choose your weapon! Type: 'rock', 'paper', or, 'scissors' to choose!");
    playerSelection = playerSelection.toLowerCase();
    // make sure the player types 'rock', 'paper', or 'scissors'
    while (flag) {
        if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
            playerSelection = playerSelection.toLowerCase();
            flag = false;
        } else { // player chose something other than 'rock', 'paper', or 'scissors'
            alert("Please type the correct weapon type, 'rock', 'paper' or 'scissors'.");
            playerSelection = prompt("Choose your weapon! Type: 'rock', 'paper', or, 'scissors' to choose!");
        }
    }
    return playerSelection;
}
// One round of player vs. computer.
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection();
    computerSelection = computerPlay();
    let result;
    let weapons = playerSelection + computerSelection;
    let winner;
    if (weapons === 'rockpaper') {
        result = `Computer wins ${computerSelection} covers ${playerSelection}`;
        winner = "computer";
    } else if (weapons === 'rockscissors') {
        result = `Your ${playerSelection} beats the computer's ${computerSelection}`;
        winner = "player";
    } else if (weapons === 'paperrock') {
        result = `You win because ${playerSelection} covers ${computerSelection}`;
        winner = "player";
    } else if (weapons === 'paperscissors') {
        result = `The computers' ${computerSelection} cut your ${playerSelection}.`;
        winner = "computer";
    }else if (weapons === 'scissorsrock') {
        result = `You lose ${computerSelection} smashes your ${playerSelection}!`;
        winner = "computer";
    }else if (weapons === 'scissorspaper') {
        result = `Winner Winner Chicken Dinner, ${playerSelection} cut ${computerSelection}!`;
        winner = "player";
    } else {
        result = `It's a tie! You chose ${playerSelection}, the same as the computer! `;
        winner = "tie";
    }
    console.log(result);
    return winner;
}

function game() {
    let score;
    for (let i = 0; i < 5; i++) {
        playRound();

    }

game();