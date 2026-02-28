let userScore = 0;
let compScore = 0;

function play(userChoice) {

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let resultText = "";

    if (userChoice === computerChoice) {
        resultText = "It's a Draw!";
    }
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        resultText = "You Win! 🎉";
        userScore++;
    }
    else {
        resultText = "Computer Wins! 🤖";
        compScore++;
    }

    document.getElementById("result").textContent =
        `You chose ${userChoice} | Computer chose ${computerChoice} → ${resultText}`;

    document.getElementById("userScore").textContent = userScore;
    document.getElementById("compScore").textContent = compScore;
}