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
    // Logic for game: one variable for the result of the round.
    if (playerWeapon == 'rock' && computerWeapon == 'paper') {
        result = 2; // computer wins
    } else if (playerWeapon == 'rock' && computerWeapon == 'scissors') {
        result = 1; // player wins
    } else if (playerWeapon == 'paper' && computerWeapon == 'rock') {
        result = 1; /* console.log("Computer wins. Paper covers rock!") */;
    } else if (playerWeapon == 'paper' && computerWeapon == 'scissors') {
        result = 2;/* console.log("You lose. Scissors cut paper!"); */
    } else if (playerWeapon == 'scissors' && computerWeapon == 'rock') {
        result = 2;
    } else if (playerWeapon == 'scissors' && computerWeapon == 'paper') {
        result = 1;
    } else {
        result = 3; // results in tie
    }
    return result;
}

// Play a game of 5 rounds and return a winner
function game() {
    let playerScore;
    let computerScore;
    let tie;
    for (let i = 0; i < 5; i++) {
        playRound();
        // tracking scores
        if (playRound() == 1) {
            console.log("You win!");
            playerScore += 1;
        } else if (playRound == 2) {
            console.log("Computer wins.");
            computerScore += 1;
        } else {
            console.log("It's a tie");
            tie += 1;
        }
    }
    if (playerScore == 5) {
        console.log("Congratulations, you're a winner!");
    } else if (computerScore == 5) {
        console.log("Sadly, the computer has won this time.");
    }
    }
}