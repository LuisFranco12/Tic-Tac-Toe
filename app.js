const container = document.querySelector(".container");
const cells = document.querySelectorAll(".cell");

let turn = true;

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
