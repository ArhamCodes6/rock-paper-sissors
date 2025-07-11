// Step 1: Check console log
console.log("Hello World");

// Global scores
let humanScore = 0;
let computerScore = 0;

// Cache DOM elements
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');
const buttons = document.querySelectorAll('#buttons button');

// Step 2: Get computer choice
function getComputerChoice() {
  const randomNum = Math.random();
  if (randomNum < 0.33) {
    return "rock";
  } else if (randomNum < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Step 4 & 5: Play a single round (adapted for UI)
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  humanChoice = humanChoice.toLowerCase();
  const compChoiceLower = computerChoice.toLowerCase();

  if (humanChoice === compChoiceLower) {
    resultsDiv.textContent = `Draw! Both chose ${humanChoice}`;
    updateScore();
    return;
  }

  if (
    (humanChoice === "rock" && compChoiceLower === "scissors") ||
    (humanChoice === "paper" && compChoiceLower === "rock") ||
    (humanChoice === "scissors" && compChoiceLower === "paper")
  ) {
    humanScore++;
    resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  updateScore();

  // Check for game winner
  if (humanScore === 5 || computerScore === 5) {
    declareWinner();
    disableButtons();
  }
}

function updateScore() {
  scoreDiv.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;
}

function declareWinner() {
  if (humanScore === 5) {
    resultsDiv.textContent += " 🎉 You won the game!";
  } else if (computerScore === 5) {
    resultsDiv.textContent += " 😢 You lost the game!";
  }
}

function disableButtons() {
  buttons.forEach(btn => btn.disabled = true);
}

// Add event listeners to buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
