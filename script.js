
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const personScore = document.getElementById("your");
const computerScore = document.getElementById("computer");
const humanChoice = 0;
let computerChoice = 0;
let humanCount = 0;
let computerCount = 0;

rock.addEventListener('click', (e) => {
    let humanChoice = 0;
    humanChoice = "rock";
    playGame(humanChoice);
})
paper.addEventListener('click', (e) => {
    let humanChoice = 0;
    humanChoice = "paper";
    playGame(humanChoice);
})
scissors.addEventListener('click', (e) => {
    let humanChoice = 0;
    humanChoice = "scissors";
    playGame(humanChoice);
})


function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3) +1;

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

function playRound(humanChoice) {
    
    let winner = 0;
    computerChoice = getComputerChoice();

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
    return winner;
}

function playGame(humanChoice) {

    let outcome = playRound(humanChoice);

    if (outcome === "human") {
        humanCount++;
        personScore.textContent = humanCount + "\n" + humanChoice;
        computerScore.textContent = computerCount + "\n" + computerChoice;
        console.log("your score - " + humanCount);
    }
    if (outcome === "computer") {
        computerCount++;
        personScore.textContent = humanCount + "\n" + humanChoice;
        computerScore.textContent = computerCount + "\n" + computerChoice;
        console.log("computer score - " + computerCount);
    }
    if (outcome === "tie") {
        personScore.textContent = humanCount + "\n" + humanChoice;
        computerScore.textContent = computerCount + "\n" + computerChoice;
    } 
}

