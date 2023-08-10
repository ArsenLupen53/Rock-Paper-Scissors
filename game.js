const rockbut = document.getElementById("rock");
const paperbut = document.getElementById("paper");
const scissorsbut = document.getElementById("scissors");
const result = document.getElementById("resultdiv");
const score = document.getElementById("scorediv");


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

function playRound(userChoice) {

    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        alert("Invalid choice. Please choose rock, paper, or scissors.");
        return;
    }

    const computerChoice = getComputerChoice();
    alert(`Computer chose: ${computerChoice}`);

    const result = determineWinner(userChoice, computerChoice);

    resultdiv.textContent = `Computer chose : ${computerChoice}. ${result}`;

    scorediv.textContent = `Score : You ${userScore} - Computer ${computerScore}`;

    if (userScore === 5) {
        resultdiv.textContent = "You win the game";
    }
    else if (computerScore === 5 ) {
        resultdiv.textContent = "Computer win the game";
    }

}


// Run the game
rockbut.addEventListener("click", function () { playRound("rock")});
paperbut.addEventListener("click", function () { playRound("paper")});
scissorsbut.addEventListener("click", function() { playRound("scissors") });

// Run the game
playGame();