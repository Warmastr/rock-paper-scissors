/* This program is intended to be played vs. the computer and has a random chance to win. First to five wins the game! */
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

function playerSelection() {
    let flag = true;
    let playerSelection = prompt("Choose your weapon! Type: 'rock', 'paper', or, 'scissors' to choose!");
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    // make sure the player types 'rock', 'paper', or 'scissors'
    while (flag) {
        if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
            playerSelection = playerSelection.toLowerCase();
            console.log(playerSelection);
            flag = false;
        } else {
            playerSelection = prompt("Choose your weapon! Type: 'rock', 'paper', or, 'scissors' to choose!");
            console.log(playerSelection);
        }
    }
    return playerSelection;
}

/* function playRound(playerSelection, computerPlay) {
    
} */
playerSelection();
