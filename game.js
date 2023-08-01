function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
    }

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
    }

function playRound() {
    const userChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        alert("Invalid choice. Please choose rock, paper, or scissors.");
        return;
    }

    const computerChoice = getComputerChoice();
    alert(`Computer chose: ${computerChoice}`);

    const result = determineWinner(userChoice, computerChoice);
    alert(result);
    return result;
    }


// Run the game
function playGame() {
    let userScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        alert(`Round ${round}`);
        const result = playRound();

        if (result === "You win!") {
        userScore++;
        } else if (result === "Computer wins!") {
        computerScore++;
        }
    }

    // Determine the overall winner
    let winnerMessage;
    if (userScore > computerScore) {
        winnerMessage = "You win the game!";
    } else if (userScore < computerScore) {
        winnerMessage = "Computer wins the game!";
    } else {
        winnerMessage = "It's a tie!";
    }

    alert(`
        Game over!\n
        Final Score:\n
        You: ${userScore}\n
        Computer: ${computerScore}\n
        ${winnerMessage}
    `);
    }

// Run the game
playGame();