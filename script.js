
function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors");
    return humanChoice;
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) +1;
    if (computerChoice === 1) {
        computerChoice = "rock";
    }
    if (computerChoice === 2) {
        computerChoice = "paper";
    }
    if (computerChoice === 3) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playRound() {
    let computerChoice = 0;
    let humanChoice = 0;
    let winner = 0;
    computerChoice = getComputerChoice();

    humanChoice = getHumanChoice();

    if (computerChoice === "rock" && humanChoice === "paper") {
        winner = "human";
    }
    if (computerChoice === "rock" && humanChoice === "scissors") {
        winner = "computer";
    }
    if (computerChoice === "paper" && humanChoice === "rock") {
        winner = "computer";
    }
    if (computerChoice === "paper" && humanChoice === "scissors") {
        winner = "human";
    }
    if (computerChoice === "scissors" && humanChoice === "paper") {
        winner = "computer";
    }
    if (computerChoice === "scissors" && humanChoice === "rock") {
        winner = "human";
    }
    if (computerChoice === humanChoice) {
        winner = "tie";
    }

    console.log("Computer pick - " + computerChoice);
    console.log("Your pick - " + humanChoice);
    
    return winner;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    
    while (humanScore < 5 && computerScore < 5) {
    
        let outcome = playRound();
    
        if (outcome === "human") {
            humanScore++;
            console.log("You won! Your score - " + humanScore + " vs. Computer score -" + computerScore);
        }
        if (outcome === "computer") {
            computerScore++;
            console.log("You lost! Your score - " + humanScore + " vs. Computer score -" + computerScore);
        }
        if (outcome === "tie") {
            console.log("it's a tie! Your score - " + humanScore + " vs. Computer score -" + computerScore);
        } 
    }
    if (humanScore === 5) {
        console.log("Game over! You Won! Final score - " + humanScore + " vs. Computer score -" + computerScore);
    }
    if (computerScore === 5) {
        console.log("Game over! You Lost! Final score - " + humanScore + " vs. Computer score -" + computerScore);
    }
    
}

playGame();