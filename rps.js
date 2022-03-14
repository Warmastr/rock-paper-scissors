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
        } else {
            playerSelection = prompt("Choose your weapon! Type: 'rock', 'paper', or, 'scissors' to choose!");
        }
    }
    return playerSelection;
}
// One round of player vs. computer.
function playRound() {
    // Establish each players' weapon of choice
    playerWeapon = playerSelection();
    computerWeapon = computerPlay();
    let result;
    // Logic for game: one variable for the result of the game. 1 = player win, 2 = player lose, 3 = tie
    if (playerWeapon == 'rock' && computerWeapon == 'paper') {
        result = 2;
    } else if (playerWeapon == 'rock' && computerWeapon == 'scissors') {
        result = 1;
    } else {
        result = 3;
    }

    if (playerWeapon == 'paper' && computerWeapon == 'rock') {
        result = 1; /* console.log("Computer wins. Paper covers rock!") */;
    } else if (playerWeapon == 'paper' && computerWeapon == 'scissors') {
        result = 2;/* console.log("You lose. Scissors cut paper!"); */
    } else {
        result = 3;
    }

    if (playerWeapon == 'scissors' && computerWeapon == 'rock') {
        result = 2;
    } else if (playerWeapon == 'scissors' && computerWeapon == 'paper') {
        result = 1;
    } else {
        result = 3;
    }
    return result;
}
// Play a game of 5 rounds and return a winner
/* function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        // tracking scores
        if 
    }
} */