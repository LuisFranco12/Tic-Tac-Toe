const container = document.querySelector(".container");
const cells = document.querySelectorAll(".cell");

let turn = true;

class Player {
    constructor(num, symbol) {
        this.num = num;
        this.symbol = symbol;
    }
}

const player1 = new Player(1, 'X');
const player2 = new Player(2, 'O');

// winning combinations
const winCombinations = [
    // horrizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  
    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  
    // diagonal
    [0, 4, 8],
    [2, 4, 6]
  ];

function game(e) {
    if (e.target.textContent) return;
    if (turn) {
      e.target.textContent = player1.symbol;
      turn = !turn;
    } else {
      e.target.textContent = player2.symbol;
      turn = !turn;
    }
  }

container.addEventListener("click", game);
