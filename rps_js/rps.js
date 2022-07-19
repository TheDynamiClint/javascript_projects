function getComputerChoice() {

    let comp_choice = '';
    let rando = Math.floor(Math.random() * 3) + 1;

    switch (rando) {
    case 1:
        comp_choice = 'rock';
        break;
    case 2:
        comp_choice = 'paper';
        break;
    case 3:
        comp_choice = 'scissors';
        break;
    }
    return comp_choice;
}

console.log(getComputerChoice());