function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function playRound(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();
  
    // Check for a tie
    if (playerSelection === computerSelection.toLowerCase()) {
      return "It's a tie! Replay the round.";
    }
  
    // Check for win/lose scenarios
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }

  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Enter 'Rock', 'Paper', or 'Scissors':");
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
  
      // Update scores based on the result
      if (playRound(playerSelection, computerSelection).includes("win")) {
        playerScore++;
      } else if (playRound(playerSelection, computerSelection).includes("lose")) {
        computerScore++;
      }
    }
  
    // Determine the overall winner
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie! No overall winner.");
    }
  }
  
  // Call the game function to start the game
  game();
  