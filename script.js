choices = ['rock', 'paper', 'scissors']
let winner;

function getRoundWinner(userPlay) {
  computerPlay = getComputerPlay();
  if (computerPlay === userPlay) {
    return 'tie!';

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


let contUser = 0;
let contComputer = 0;

function MD(n) {
  while (contComputer < Math.ceil(n/2) && contUser < Math.ceil(n/2)) {
    winner = getRoundWinner(parseInt(prompt()));

    if (winner === 'computer') {
      contComputer++;
    }

    else if (winner === 'user') {
      contUser++;
    }

    if (winner != 'tie!') {
    alert(`${winner} wins!\n${contUser}x${contComputer}`);
    }

    else {
      alert('tie!');
    }
  }
}

MD(5);

if (contComputer > contUser) {alert('computer Wins!')}
else {alert('User Wins!');}


