import "./style.css";
import BoardHandler from "./gamelogic";
import DOMGameboardHandler from "./dom";

const initializeGame = () => {
  // Render initial boards
  const dom = DOMGameboardHandler();

  // Initialize players, create boards and position ships
  const boardHandler = BoardHandler();

  // Call to link gameboard to board cells
  dom.placeShipsInBoard(boardHandler.getPlayerBoard(), boardHandler.player);
  dom.placeShipsInBoard(boardHandler.getComputerBoard(), boardHandler.computer);

  const body = document.querySelector("body");

  const computerBoardCells = document.querySelectorAll(".computer-board-cell");
  const playerBoardCells = document.querySelectorAll(".player-board-cell");

  const attack = (e) => {
    // If cell already been attacked, disable button
    if (e.target.classList.contains("true")) {
      return;
    }

    // Attack computer board
    e.target.classList.add("true");
    const cellPos = e.target.classList[1];
    const splitPos = cellPos.split(",");
    splitPos[0] = Number(splitPos[0]);
    splitPos[1] = Number(splitPos[1]);
    boardHandler.getComputerBoard().receiveAttack(splitPos);

    // Update board
    dom.updateRenderBoard(
      boardHandler.getPlayerBoard(),
      boardHandler.getComputerBoard(),
    );
    
    // Check if ship hit is sunk...
    if (
      e.target.classList[2] !== "true" &&
      e.target.classList[2] !== undefined
    ) {
      const hitShipId = e.target.classList[2];
      const hitShip = boardHandler.computerBoard
        .getArrOfShips()
        .find((ship) => ship.getShipId() === hitShipId);
      console.log(hitShip);

    // ...if it is, notify in yellow
      if (hitShip.isSunk()) {
        computerBoardCells.forEach((cell) => {
          if (cell.classList[2] === hitShipId) {
            cell.style.backgroundColor = "yellow";
            cell.textContent = 'SUNK';
          }
        });
      }
    }

    // If all computer ships sunk, end game
    if (boardHandler.getComputerBoard().isAllSunk()) {
      endGame("Player");
    }

    // Else, computer attack
    const hit = boardHandler
      .getPlayerBoard()
      .receiveAttack(
        boardHandler.computer.chooseAttackCell(boardHandler.getPlayerBoard()),
      );

    // Update boards
    dom.updateRenderBoard(
      boardHandler.getPlayerBoard(),
      boardHandler.getComputerBoard(),
    );

    // Find the ship hit...
    if (
      hit !== "Not available" &&
      hit !== boardHandler.getPlayerBoard().getMissedShots()
    ) {
      const hitShip = boardHandler
        .getPlayerBoard()
        .getArrOfShips()
        .find((ship) => ship.getShipId() === hit);

      // ...If it's sunk, notify in yellow
      if (hitShip.isSunk()) {
        playerBoardCells.forEach((cell) => {
          if (cell.classList[2] === hitShip.getShipId()) {
            cell.style.backgroundColor = "yellow";
            cell.textContent = 'SUNK'
          }
        });
      }
    }

    // If all player ships sunk, endgame
    if (boardHandler.getPlayerBoard().isAllSunk()) {
      endGame("Computer");
    }
  };

  const resetGame = () => {
    const resetButton = document.querySelector(".resetBtn");
    const winnerContainer = document.querySelector(".winner");

    // Remove all elements from container
    body.removeChild(resetButton);
    body.removeChild(winnerContainer);
    playerBoardCells.forEach((cell) => {
      cell.remove();
    });
    computerBoardCells.forEach((cell) => {
      cell.remove();
    });

    // Rerun this module
    initializeGame();
  };

  const endGame = (winner) => {
    const resetButton = document.createElement("button");
    const winnerContainer = document.createElement("div");

    resetButton.classList.add("resetBtn");
    winnerContainer.classList.add("winner");

    resetButton.textContent = "RESET";
    winnerContainer.textContent = `${winner} is the Winner!`;

    body.appendChild(resetButton);
    body.appendChild(winnerContainer);

    computerBoardCells.forEach((cell) => {
      cell.removeEventListener("click", attack);
    });

    resetButton.addEventListener("click", resetGame);
  };

  // Attach click event to each computer board cell
  computerBoardCells.forEach((cell) => {
    cell.addEventListener("click", attack);
  });
};

initializeGame();
