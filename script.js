function playSingleRound (playerSelection, computerSelection) {
    const playerSelectionNormalized = normalizedString(playerSelection);
    if (playerSelectionNormalized === computerSelection) {
        return "It's a tie"
    } 

    if (playerSelectionNormalized === "Rock" && computerSelection === "Paper") {
        return `You lose, ${computerSelection} beats ${playerSelectionNormalized}`
    } else if(playerSelectionNormalized === "Rock" && computerSelection === "Scissors") {
        return `You win, ${playerSelectionNormalized} beats ${computerSelection}`
    }

    if (playerSelectionNormalized === "Paper" && computerSelection === "Rock") {
        return `You win, ${playerSelectionNormalized} beats ${computerSelection}`
    } else if (playerSelectionNormalized === "Paper" && computerSelection === "Scissors") {
        return `You lose, ${computerSelection} beats ${playerSelectionNormalized}`
    }

    if (playerSelectionNormalized === "Scissors" && computerSelection === "Rock") {
        return `You lose, ${computerSelection} beats ${playerSelectionNormalized}` 
    } else if (playerSelectionNormalized === "Scissors" && computerSelection === "Paper") {
        return `You win, ${playerSelectionNormalized} beats ${computerSelection}`
    }
}

function play() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = normalizedString(prompt("Ingresa tu elección", "Rock/Paper/Scissors"));
        const computerSelection = getComputerChoice();
        
        console.log(`Selección del usuario: ${playerSelection}\nSelección del computador: ${computerSelection}`);
        console.log(playSingleRound(playerSelection,computerSelection));
    }
}

function getComputerChoice() {
    const choicePossible = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choicePossible.length);
    return choicePossible[randomChoice];
}

function normalizedString(String) {
    const firstCharacter = String.charAt(0);
    const remainingCharacters = String.slice(1);
    return firstCharacter.toUpperCase() + remainingCharacters.toLowerCase();
}

// const user = "Scissors";
// const computed = getComputerChoice();
// console.log(`Selección del usuario: ${user}\nSelección del computador: ${computed}`);
// console.log(playSingleRound(user,computed));

play();