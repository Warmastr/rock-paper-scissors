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
    // Logic for game
    if (playerWeapon == 'rock' && computerWeapon == 'rock') {
        result = console.log("It's a tie!")
    } else if (playerWeapon == 'rock' && computerWeapon == 'paper') {
        result = console.log("Bummer, the computer wins.");
    } else if (playerWeapon == 'rock' && computerWeapon == 'scissors') {
        result = console.log("You WIN!!!");
    } else {
        result = console.log("It's a tie, try again!");
    }
    return result;

    if(computerWeapon == 'paper' && playerWeapon == 'paper') {
        result = console.log("It's a tie!")
    }
}
// Play a game of 5 rounds and return a winner
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        // tracking scores
        if 
    }
}