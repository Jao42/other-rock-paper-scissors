choices = ['ROCK', 'PAPER', 'SCISSORS']
buttons = document.querySelectorAll('button');
let winner;

function getRoundWinner(userPlay, computerPlay=getComputerPlay()) {
  if (computerPlay === userPlay) {
    return 'tie';

  } 
  else if ((computerPlay === 0 && userPlay === 2) ||
      (computerPlay === 1 && userPlay === 0) ||
      (computerPlay === 2 && userPlay === 1)) {
    
    return 'computer';
  }
  
  else {
    return 'user';
  } 

}

function getComputerPlay() {
  const computerChoice = Math.round(Math.random() * 2);
  return computerChoice;
}



let countUser = 0;
let countComputer = 0;
let count = 0;
function MD(n) {
  winner = getRoundWinner(userPlay, computerPlay = getComputerPlay());

    if (winner === 'computer') {
      countComputer++;
      play = `${choices[computerPlay]} beats ${choices[userPlay]}!`;
    }

    else if (winner === 'user') {
      countUser++;
      play = `${choices[userPlay]} beats ${choices[computerPlay]}!`;
    }

    if (winner != 'tie') {
    alert(`${winner} wins!\n${play}\n${countUser}x${countComputer}`);
    }
    
    else {
      alert('tie!');
    }
  count++;
  if (count === n) {

  (countComputer > countUser) ? alert('computer Wins!'): alert('User Wins!');
  count = 0; countUser = 0; countComputer = 0;

  }
}

let userPlay;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
  userPlay = parseInt(button.id);
  MD(5);
})
})
