function SnakesLadders() {
  this.playersPosition = [0,0];
  this.activePlayer = 0;
  this.snakes = {16:6,49:11,46:25,62:19,64:60,74:53,89:68,92:88,95:75,99:80};
  this.stairs = {2:38,7:14,8:31,15:26,21:42,28:84,36:44,51:67,71:91,78:98,87:94};
  this.maxPosition = 100;
};

SnakesLadders.prototype.play = function(die1, die2) {
  let index = this.activePlayer
  if(this.playersPosition.some((position, playerIndex) => position === 100 && index !== playerIndex)) return 'Game over!';  
  this.playersPosition[index] += die1 + die2;
  this.playersPosition[index] = this.accespFinishPosition(this.playersPosition[index]);
  this.playersPosition[index] = this.checkSnake(this.playersPosition[index]);
  this.playersPosition[index] = this.checkStairs(this.playersPosition[index]);
  this.activePlayer = this.completeMove(die1,die2);
  return this.getMessage(index);
}

SnakesLadders.prototype.checkSnake = function(position) {
  return this.snakes[position] || position;
}

SnakesLadders.prototype.checkStairs = function(position) {
  return this.stairs[position] || position;
}

SnakesLadders.prototype.completeMove = function(die1, die2) {
  if( die1 === die2 ) return this.activePlayer;
  else if( this.activePlayer === this.playersPosition.length - 1 ) {
    return 0;
  } else {
    return this.activePlayer + 1
  }
}
SnakesLadders.prototype.accespFinishPosition = function(position) {
  if(position > 100) {
    return 200 - position;
  } else {
    return position
  }
}
SnakesLadders.prototype.getMessage = function(activePlayer) {
  if (this.playersPosition[activePlayer] === 100) return 'Player ' + (activePlayer + 1) + ' Wins!';
  else return 'Player ' + (activePlayer + 1) + ' is on square ' + this.playersPosition[activePlayer];
}