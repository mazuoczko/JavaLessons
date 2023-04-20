let score =  JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

ubdateScoreElement();




function playGame(playermove){
const computermove = pickComputerMove();

let result = '';
if(playermove === 'scissors'){
  if(computermove === 'rock'){
    result = 'loss'
  }
  else if (computermove === 'paper'){
    result = 'win'
  }
  else if (computermove === 'scissors'){
    result = 'draw'
  }
}
else if(playermove === 'rock'){
  if(computermove === 'rock'){
    result = 'draw'
  }
  else if (computermove === 'paper'){
    result = 'loss'
  }
  else if (computermove === 'scissors'){
    result = 'win'
  }
}
else if(playermove === 'paper'){
  if(computermove === 'rock'){
    result = 'win'
  }
  else if (computermove === 'paper'){
    result = 'draw'
  }
  else if (computermove === 'scissors'){
    result = 'loss'
  }
}

if (result === 'win'){
  score.wins += +1;
}
else if(result === 'loss'){
  score.losses += 1;
}
else if(result == 'draw'){
  score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));
ubdateScoreElement();

document.querySelector('.js-result').innerHTML = `You ${result}`;

document.querySelector('.js-moves').innerHTML 
  =        
`you 
<img src="images/${playermove}-emoji.png" class="css-move-icon"> 
<img src="images/${computermove}-emoji.png" class="css-move-icon"> 
compiuter`;
}

function ubdateScoreElement() {
document.querySelector('.js-score').innerHTML 
  = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}

function pickComputerMove(){
const randomNumber = Math.random();
let computerMove = '';

if (randomNumber <= 0.3333){
  computerMove = 'paper';
}
else if (randomNumber <= 0.6666 && randomNumber > 0.3333){
  computerMove = 'rock';
}
else{
  computerMove = 'scissors';
}
return computerMove;
}
    
