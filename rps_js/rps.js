function getComputerChoice() {

    let computerSelection = '';
    let rando = Math.floor(Math.random() * 3) + 1;

    switch (rando) {
    case 1:
        computerSelection = 'rock';
        break;
    case 2:
        computerSelection = 'paper';
        break;
    case 3:
        computerSelection = 'scissors';
        break;
    }
    return computerSelection;
}

function getPlayerChoice() {
    let playerSelection = prompt("Please type \"rock\", \"paper\", or \"scissors\" to play.");
    return playerSelection;
}

function playRound () {
    let comp = getComputerChoice();
    let player = getPlayerChoice().toLowerCase();
    let response = '';
    let score = 0;

    if (comp == player) {
        response = "You tied! " + comp.charAt(0).toUpperCase()+ comp.slice(1) + " and " + player + ".";
    }
    else if (comp == 'rock' && player == 'paper' ||
             comp == 'paper' && player == 'scissors' ||
             comp == 'scissors' && player =='rock') {
        
        response = "You Win! " + player.charAt(0).toUpperCase()+ player.slice(1) + " beats " + comp + ".";
        score++;
    }
    else {
        response = "You Lose! " + comp.charAt(0).toUpperCase()+ comp.slice(1) + " beats " + player + ".";
    }

    return [response, score];
}

function game() {
    let ttlScore = 0;
    const gameElement = document.getElementById('game_space'); 

    for (let i = 0; i < 5 ; i++) {
        values = playRound();
        if (values[1] > 0){
            ttlScore++;
        };

        //console.log(values[0] + " Your current score is: " + ttlScore + ".");
        gameElement.innerHTML = values[0].toString() + "<p>Your current score is: " + ttlScore.toString() + ".</p>";

    }

    //console.log("Your Score was: " + ttlScore + " out of 5.")
    let preamble = "<p>Your Score was: " + ttlScore.toString() + " out of 5.</p>";
    
    if (ttlScore < 3) {
        //console.log("Computer Wins!");
        gameElement.innerHTML  = preabmble + "<p>Computer Wins!</p>";
    }
    else {
        //console.log("You Win!");
        gameElement.innerHTML  = preamble + "<p>You Win!</p>";
    }

}

game();