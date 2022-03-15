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
    if (playerWeapon == 'rock' && computerWeapon == 'paper') {
        result = 'Welp, computer won, they got lucky and chose paper. Paper covers rock.';
    } else if (playerWeapon == 'rock' && computerWeapon == 'scissors') {
        result = 'You win, computer chose scissors and rock smashes the crap outta scissors!';
    } else if (playerWeapon == 'paper' && computerWeapon == 'rock') {
        result = 'You win, computer chose rock. Paper covers Rock!';
    } else if (playerWeapon == 'paper' && computerWeapon == 'scissors') {
        result = 'Computer chose scissors and wins :( scissors cut paper.';
    } else if (playerWeapon == 'scissors' && computerWeapon == 'rock') {
        result = 'Computer chose rock and wins, rock smashes scissors.';
    } else if (playerWeapon == 'scissors' && computerWeapon == 'paper') {
        result = 'You win, computer chose paper like an idiot! Scissors cut paper!';
    } else {
        result = 'It\'s a tie, keep trying!';
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
        if (playRound() == playerRock || playRound() == playerPaper || playRound() == playerScissors) {
            playerScore += 1;
        } else if (playRound() == computerRock || playRound() == computerPaper || playRound == computerScissors) {
            computerScore += 1;
        } else if (playRound() == tie) {
            i += 1;
        } else {
            console.log("Something is way wrong, close this tab and try again.")
        }
        
    }
}

game();