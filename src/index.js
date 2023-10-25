import "./style.css";
import { BoardHandler, dom } from "./gamelogic";

// Initialize players, create boards and position ships
const boardHandler = BoardHandler();

const computerBoardCells = document.querySelectorAll(".computer-board-cell");
const body = document.querySelector("body");

const attack = (e) => {
  if (e.target.classList[2] === "true") {
    return;
  }
  console.log("reclick");
  e.target.classList.add("true");
  const cellPos = e.target.classList[1];
  const splitPos = cellPos.split(",");
  splitPos[0] = Number(splitPos[0]);
  splitPos[1] = Number(splitPos[1]);
  boardHandler.getComputerBoard().receiveAttack(splitPos);

  dom.updateRenderBoard(
    boardHandler.getPlayerBoard(),
    boardHandler.getComputerBoard(),
  );

  const resetGame = () => {
    
  }

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

    resetButton.addEventListener('click', resetGame)
  };

  // If all computer ships sunk, end game
  if (boardHandler.getComputerBoard().isAllSunk()) {
    endGame("Player");
  }

  // Else, computer attack
  boardHandler
    .getPlayerBoard()
    .receiveAttack(
      boardHandler.computer.chooseAttackCell(boardHandler.getPlayerBoard()),
    );

  // Update boards
  dom.updateRenderBoard(
    boardHandler.getPlayerBoard(),
    boardHandler.getComputerBoard(),
  );
};

// Attach click event to each computer board cell
computerBoardCells.forEach((cell) => {
  cell.addEventListener("click", attack);
});
