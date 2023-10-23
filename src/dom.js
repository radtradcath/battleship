const playerBoardContainer = document.querySelector(".player-board-container");
const computerBoardContainer = document.querySelector(
  ".computer-board-container",
);

const renderPlayerGameboard = (() => {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement("button");
      cell.classList.add("player-board-cell", `${[i, j]}`);
      playerBoardContainer.appendChild(cell);
    }
  }
})();

const renderComputerGameboard = (() => {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement("button");
      cell.classList.add("computer-board-cell", `${[i, j]}`);
      computerBoardContainer.appendChild(cell);
    }
  }
})();

const playerBoardCells = document.querySelectorAll(".player-board-cell");
const computerBoardCells = document.querySelectorAll(".computer-board-cell");

const placeShipsInBoard = (board, player) => {
  if (player.getName() === "Player") {
    playerBoardCells.forEach((cell) => {
      const cellPos = cell.classList[1];
      const splitPos = cellPos.split(",");
      splitPos[0] = Number(splitPos[0]);
      splitPos[1] = Number(splitPos[1]);

      if (board.getGameboard()[splitPos[0]][splitPos[1]] !== undefined) {
        cell.style.backgroundColor = "green";
        cell.setAttribute(
          "id",
          board.getGameboard()[splitPos[0]][splitPos[1]].getShipId(),
        );
      }
    });
  }

  if (player.getName() === "Computer") {
    computerBoardCells.forEach((cell) => {
      const cellPos = cell.classList[1];
      const splitPos = cellPos.split(",");
      splitPos[0] = Number(splitPos[0]);
      splitPos[1] = Number(splitPos[1]);

      if (board.getGameboard()[splitPos[0]][splitPos[1]] !== undefined) {
        cell.style.backgroundColor = "green";
        cell.setAttribute(
          "id",
          board.getGameboard()[splitPos[0]][splitPos[1]].getShipId(),
        );
      }
    });
  }
};

export { placeShipsInBoard };

// const renderAttack = (e) => {
//   const cellPos = e.target.classList[1];
//   const splitPos = cellPos.split(",");
//   splitPos[0] = Number(splitPos[0]);
//   splitPos[1] = Number(splitPos[1]);
//   playerGameboard.receiveAttack(splitPos);
// };
