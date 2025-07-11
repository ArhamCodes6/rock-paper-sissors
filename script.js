// Step 1: Check console log
console.log("Hello World");

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

// Step 3: Get human choice
function getHumanChoice() {
  const input = prompt("Enter Rock, Paper, or Scissors:");
  return input.toLowerCase();
}

// Step 4 & 5: Play a single round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`Draw! Both chose ${humanChoice}`);
    return "draw";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return "human";
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return "computer";
  }
}

// Step 6: Play the entire game
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const result = playRound(humanChoice, computerChoice);

    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }

    console.log(`Scores => You: ${humanScore} | Computer: ${computerScore}`);
    console.log('-------------------------');
  }

  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("😢 You lost the game!");
  } else {
    console.log("🤝 It's a tie!");
  }
}

// Run the game
playGame();
