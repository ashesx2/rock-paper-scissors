/**
 * Computes and return the computer opponent's choice of
 * either rock, paper, or scissors. 
 *
 * @return {string} Computer's choice.
 */
function computerPlay()
{
    // Randomly generate a number from 0-2, which correspond
    // to three choices of the game. 
    let choiceNum = Math.floor(Math.random() * Math.floor(3));
    let computerChoice = ""; 

    switch (choiceNum)
    {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors"; 
    }

    return computerChoice;
}

/**
 * Plays a round of rock paper scissors with inputs from the
 * user and the computer and determines the winner of the round.
 *
 * @param {string} playerSelection The user's choice from button inputs.
 * @param {string} computerSelection The computer's randomly generated choice.
 */
function playRound(playerSelection, computerSelection)
{
    if (playerSelection == computerSelection)
    {
        generateResult("Tie!");
    }
    else if (playerSelection == "rock")
    {
        if (computerSelection == "paper")
        {
            computerWins++;
            generateResult("You lose! Paper beats rock.");
        }
        else
        {
            playerWins++;
            generateResult("You win! Rock beats scissors.");
        }
    }
    else if (playerSelection == "paper")
    {
        if (computerSelection == "rock")
        {
            playerWins++;
            generateResult("You win! Paper beats rock.");
        }
        else 
        {
            computerWins++;
            generateResult("You lose! Scissors beat paper.");
        }
    }
    else if (playerSelection == "scissors")
    {
        if (computerSelection == "rock")
        {
            computerWins++;
            generateResult("You lose! Rock beats scissors.");
        }
        else
        {
            playerWins++;
            generateResult("You win! Scissors beat paper.");
        }
    }
}

/**
 * Initiates a round of the game when user makes their choice. 
 *
 * @param {object} e The button click event. 
 */
function startRound(e)
{
    let compChoice = computerPlay();
    playRound(e.target.id, compChoice);
}

/**
 * Outputs result of each round, running total of the player's 
 * and the computer's score, and final result of the game.
 *
 * @param {string} message The result of a round.
 */
function generateResult(message)
{
    document.getElementById("round-result").textContent = message;
    document.getElementById("player-score").textContent = `Player's Score: ${playerWins}`;
    document.getElementById("computer-score").textContent = `Computer's Score: ${computerWins}`;
    
    // Stop the game when one of them wins. 
    if (playerWins >= 5)
    {
        document.getElementById("final-results").textContent += "You are the winner!";
        disableButtons();
    }
    else if (computerWins >= 5)
    {
        document.getElementById("final-results").textContent += "The computer wins!";
        disableButtons();
    }
}

/**
 * Disables the three buttons so that the player can no longer
 * play the game. 
 */
function disableButtons() 
{
    buttons.forEach(button => button.disabled = true);
}

// A running total of the players' scores.
let playerWins = 0;
let computerWins = 0;

// When a button is clicked, a round is initiated.
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', startRound));