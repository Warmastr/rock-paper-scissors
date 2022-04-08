const newGame = document.querySelector('.newGame');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const message = document.querySelector('.messages');
//const result = document.querySelector('.result');
const button = document.querySelector('.button');
let playerChoice = '';
let playerScore = 0;
let computerScore = 0;
let gameWinner;


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

function playRound(computerSelection) {
    computerSelection = computerPlay();
    let result; //display all 'results' to a div
    let weapons = playerChoice + computerSelection;
    let roundWinner;
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
    if (roundWinner === 'player') {
        playerScore += 1;
    } else if (roundWinner === 'computer') {
        computerScore += 1;
    }
    console.log(`You have ${playerScore} points. The computer has ${computerScore} point`);
    if (playerScore + computerScore === 5) {
        if (playerScore > computerScore) {
            gameWinner = "Player Wins.";
            console.log("You've Won!!!");
            
        } else if (computerScore > playerScore) {
            gameWinner = "Computer Wins."
            console.log("The computer wins, better luck next time.");
            
        // no one won the round so keep playing
        }
    }
    
    console.log(result); //remove this...
    return roundWinner; // restructure this
}
// start a game
function game() {
        
    // IF the player hasn't clicked anything, then wait for a 'click' to happen, get the computers' weapon choice and store it in computerSelection and store the weapon choice for the player in playerChoice
    if (playerChoice === '') {
        rock.addEventListener('click', () => {
            // if the rock button is clicked, set playerChoice = to 'rock'
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
    // When the combined scores of player and computer === 5, the game is over and a winner is declared in the gameWinner variable. 
}



