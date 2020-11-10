function getWinner(userPlay) {
  computerPlay = getComputerPlay();

  if (computerPlay == userPlay) {

    return 'tie!';
  }

  else if (computerPlay === 'rock' && userPlay != 'paper') {

    return ('computer wins!');
  }
  else if (computerPlay === 'paper' &&  userPlay != 'scissors') {

    return ('computer wins!');
  }
  else if (computerPlay === 'scissors' && userPlay != 'rock') {

    return ('computer wins!');
}

  else {return ('user wins!');} 
}


function getComputerPlay() {
  let choice = Math.round(Math.random() * 2);
  if (choice === 0) {
    return 'rock';
    }
  else if (choice == 1) {
    return 'paper';
    }
  else {
    return 'scissors';
  }

}


