const container = document.querySelector(".container");
const cells = document.querySelectorAll(".cell");

// each players will have their score displayed
const xScore = document.getElementById("x-score");
const oScore = document.getElementById("o-score");

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

  function reset() {
    cells.forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("p1", "p2");
    });
    turn = true;
  }

// check for a winner
function checkWinner(player) {
    return winCombinations.some((combo) => {
      return combo.every((index) => {
        return cells[index].textContent === player.symbol;
      });
    });
   }

// checks for a draw
function draw(p1, p2) {
    return winCombinations.every((combo) => {
      return combo.every((index) => {
        return (
          cells[index].textContent === p1.symbol ||
          cells[index].textContent === p2.symbol
        );
      });
    });
  }


// outputs the winner or a draw if there is no winner
function winner(player) {
    setTimeout(() => {
      if (draw(player1, player2)) {
        alert("Draw");
        reset();
      }
      if (checkWinner(player)) {
        alert(`Player ${player.num} Wins!`);
        reset();
      }
    }, 200);
  }


function game(e) {
    if (e.target.textContent) return;
    if (turn) {
      e.target.textContent = player1.symbol;
      e.target.classList.add("p1");
      turn = !turn;
    } else {
      e.target.textContent = player2.symbol;
      e.target.classList.add("p2");
      turn = !turn;
    }
    winner(player1);
    winner(player2);
  }

container.addEventListener("click", game);
