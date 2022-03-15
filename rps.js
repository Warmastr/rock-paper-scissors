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
    const computerPaper = 'Welp, computer won, they got lucky and chose paper. Paper covers rock.';
    const playerRock = 'You win, computer chose scissors and rock smashes the crap outta scissors!';
    const playerPaper = 'You win, computer chose rock. Paper covers Rock!';
    const computerScissors = 'Computer chose scissors and wins :( scissors cut paper.';
    const computerRock = 'Computer chose rock and wins, rock smashes scissors.';
    const playerScissors = 'You win, computer chose paper like an idiot! Scissors cut paper!';
    const tie = 'It\'s a tie, keep trying!';
    if (playerWeapon == 'rock' && computerWeapon == 'paper') {
        result = computerPaper;
    } else if (playerWeapon == 'rock' && computerWeapon == 'scissors') {
        result = playerRock;
    } else if (playerWeapon == 'paper' && computerWeapon == 'rock') {
        result = playerPaper;
    } else if (playerWeapon == 'paper' && computerWeapon == 'scissors') {
        result = computerScissors;
    } else if (playerWeapon == 'scissors' && computerWeapon == 'rock') {
        result = computerRock;
    } else if (playerWeapon == 'scissors' && computerWeapon == 'paper') {
        result = playerScissors;
    } else {
        result = tie;
    }
    return result;
}
console.log(playRound());
// Play a game of 5 rounds and return a winner
/* function game() {
    let playerScore;
    let computerScore;
    let tie;
    for (let i = 0; i < 5; i++) {
        playRound();
        // tracking scores
        if (playRound() == 'You win, rock smashes the crap outta scissors!' || playRound() == 'You win, paper covers Rock!' || playRound() == 'You win, scissors cut paper!') {
            playerScore += 1;
        } else if (playRound() == 'Welp, computer won. Paper covers rock.' || playRound() == 'Computer wins :( scissors cut paper.' || playRound() == 'Computer wins, rock smashes scissors.') {
            computerScore += 1;
        } else if (playRound() == 'It\'s a tie, keep trying!') {
            tie += 1;
        } 
        if (playerScore == 5) { 
            console.log("You win!");
        } else if (computerScore == 5) {
            console.log("Sadly, the computer wins.");
        } else {
            i += 1; // add 1 to the loop so the game continues. 
        }
    }
}

game(); */