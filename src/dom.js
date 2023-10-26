const DOMGameboardHandler = () => {
  const orientationBtn = document.querySelector(".orientation");

  const playerBoardContainer = document.querySelector(
    ".player-board-container",
  );
  const computerBoardContainer = document.querySelector(
    ".computer-board-container",
  );

  orientationBtn.addEventListener("click", () => {
    orientationBtn.textContent =
      orientationBtn.textContent === "horizontal"
        ? (orientationBtn.textContent = "vertical")
        : (orientationBtn.textContent = "horizontal");
  });

  // Render player board
  const renderPlayerGameboard = (() => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const cell = document.createElement("button");
        cell.classList.add("player-board-cell", `${[i, j]}`);
        playerBoardContainer.appendChild(cell);
      }
    }
  })();

  // Render computer board
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

  // Link gameboard to DOM cells
  const placeShipsInBoard = (board, player) => {
    if (player.getName() === "Player") {
      playerBoardCells.forEach((cell) => {
        const cellPos = cell.classList[1];
        const splitPos = cellPos.split(",");
        splitPos[0] = Number(splitPos[0]);
        splitPos[1] = Number(splitPos[1]);

        if (board.getGameboard()[splitPos[0]][splitPos[1]] !== undefined) {
          cell.classList.add(
            `${board.getGameboard()[splitPos[0]][splitPos[1]].getShipId()}`,
          );
          cell.style.border = "6px solid azure";
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
          cell.classList.add(
            `${board.getGameboard()[splitPos[0]][splitPos[1]].getShipId()}`,
          );
        }
      });
    }
  };

  // Update DOM with correct rendering
  const updateRenderBoard = (board1, board2) => {
    playerBoardCells.forEach((cell) => {
      const cellPos = cell.classList[1];
      const splitPos = cellPos.split(",");
      splitPos[0] = Number(splitPos[0]);
      splitPos[1] = Number(splitPos[1]);

      if (board1.getGameboard()[splitPos[0]][splitPos[1]] === "miss") {
        cell.textContent = "miss";
      }

      if (board1.getGameboard()[splitPos[0]][splitPos[1]] === "hit") {
        cell.style.border = "6px solid red";
      }
    });

    computerBoardCells.forEach((cell) => {
      const cellPos = cell.classList[1];
      const splitPos = cellPos.split(",");
      splitPos[0] = Number(splitPos[0]);
      splitPos[1] = Number(splitPos[1]);

      if (board2.getGameboard()[splitPos[0]][splitPos[1]] === "miss") {
        cell.textContent = "miss";
      }

      if (board2.getGameboard()[splitPos[0]][splitPos[1]] === "hit") {
        cell.style.border = "6px solid red";
      }
    });
  };
  return {
    placeShipsInBoard,
    updateRenderBoard,
  };
};

export default DOMGameboardHandler;
