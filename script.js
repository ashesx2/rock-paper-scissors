function computerPlay()
{
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

function startRound(e)
{
    let compChoice = computerPlay();
    playRound(e.target.id, compChoice);
}

function generateResult(message)
{
    document.getElementById("round-result").textContent = message;
    document.getElementById("player-score").textContent = `Player's Score: ${playerWins}`;
    document.getElementById("computer-score").textContent = `Computer's Score: ${computerWins}`;
    
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

function disableButtons() 
{
    buttons.forEach(button => button.disabled = true);
}

let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', startRound));