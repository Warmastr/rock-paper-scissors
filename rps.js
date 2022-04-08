const newGame = document.querySelector('.newGame');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const message = document.querySelector('.messages');
//const result = document.querySelector('.result');
const button = document.querySelector('.button');

newGame.addEventListener('click', () => {
    game();
});

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
// start a game
function game() {
    let playerScore;
    let computerScore;
    let playerChoice = ''; // set this as global then reconfigure the playRound() function
    let gameWinner;
    let roundWinner;
    let computerSelection = computerPlay();
    
    // IF the player hasn't clicked anything, then wait for a 'click' to happen, get the computers' weapon choice and store it in computerSelection and store the weapon choice for the player in playerChoice
    if (playerChoice === '') {
        rock.addEventListener('click', () => {
            // if the rock button is clicked, set playerChoice = to 'rock'
            playerChoice = "rock";
        });
        paper.addEventListener('click', () => {
            playerChoice = "paper";
        });
        scissors.addEventListener('click', () => {
            playerChoice = "scissors";
        });
    }
    console.log(playerChoice);

    // set a variable for the weapons of player and computer and concatenate them for the logic flow. set the winner to the 'result' variable for display to the player
    let weapons = playerChoice + computerSelection;
    if (weapons === 'rockpaper') {
        result = `Computer wins, ${computerSelection} covers ${playerChoice}`;
        roundWinner = "computer";
    } else if (weapons === 'rockscissors') {
        result = `Your ${playerChoice} beats the computer's ${computerSelection}`;
        roundWinner = "player";
    } else if (weapons === 'paperrock') {
        result = `You win because ${playerChoice} covers ${computerSelection}`;
        roundWinner = "player";
    } else if (weapons === 'paperscissors') {
        result = `The computers' ${computerSelection} cut your ${playerChoice}.`;
        roundWinner = "computer";
    }else if (weapons === 'scissorsrock') {
        result = `You lose ${computerSelection} smashes your ${playerChoice}!`;
        roundWinner = "computer";
    }else if (weapons === 'scissorspaper') {
        result = `Winner Winner Chicken Dinner, ${playerChoice} cut ${computerSelection}!`;
        roundWinner = "player";
    } else {
        result = `It's a tie! You chose ${playerChoice}, the same as the computer! `;
        roundWinner = "tie";
    }
    console.log(result);
    if (roundWinner === 'player') {
        playerScore += 1;
    } else if (roundWinner === 'computer') {
        computerScore += 1;
    }
    console.log(`You have ${playerScore} points. The computer has ${computerScore} point`);

    // When the combined scores of player and computer === 5, the game is over and a winner is declared in the gameWinner variable. 
    if (playerScore + computerScore === 5) {
        if (playerScore > computerScore) {
            gameWinner = "Player Wins.";
            console.log("You've Won!!!");
        } else if (computerScore > playerScore) {
            gameWinner = "Computer Wins."
            console.log("The computer wins, better luck next time.");
        // no one won the round so keep playing
        } else {
            game();
        }
    }
    console.log(gameWinner);
    return gameWinner;
}

/* function playerSelection() {
    let playerChoice;
    let rockClick;
    let paperClick;
    let scissorsClick;
    document.getElementById('rock').onclick = () => {
        rockClick = true;
    }
    document.getElementById('paper').onclick = () => {
        paperClick = true;
    }
    document.getElementById('scissors').onclick = () => {
        scissorsClick = true;
    }
    document.getElementsByClassName('.button').onclick = () => {
        clicked = true;
    }
    if (rockClick) {
        playerChoice = 'rock';
    } else if (paperClick) {
        playerChoice = 'paper';
    } else if (scissorsClick) {
        playerChoice = 'scissors';
    }
    return playerChoice;
} */

/* function playRound(playerPlay, computerSelection) {
    playerPlay = playerSelection();
    computerSelection = computerPlay();
    let result; //display all 'results' to a div
    let weapons = playerPlay + computerSelection;
    let roundWinner;
    if (weapons === 'rockpaper') {
        result = `Computer wins, ${computerSelection} covers ${playerPlay}`;
        roundWinner = "computer";
    } else if (weapons === 'rockscissors') {
        result = `Your ${playerPlay} beats the computer's ${computerSelection}`;
        roundWinner = "player";
    } else if (weapons === 'paperrock') {
        result = `You win because ${playerPlay} covers ${computerSelection}`;
        roundWinner = "player";
    } else if (weapons === 'paperscissors') {
        result = `The computers' ${computerSelection} cut your ${playerPlay}.`;
        roundWinner = "computer";
    }else if (weapons === 'scissorsrock') {
        result = `You lose ${computerSelection} smashes your ${playerPlay}!`;
        roundWinner = "computer";
    }else if (weapons === 'scissorspaper') {
        result = `Winner Winner Chicken Dinner, ${playerPlay} cut ${computerSelection}!`;
        roundWinner = "player";
    } else {
        result = `It's a tie! You chose ${playerPlay}, the same as the computer! `;
        roundWinner = "tie";
    }
    console.log(result); //remove this...
    return roundWinner; // restructure this
}
let roundWinner = playRound; */
