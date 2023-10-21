const boardContainer = document.querySelector(".board-container");

const renderGameboard = () => {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement("div");
      cell.setAttribute("id", `${[i, j]}`);
      cell.classList.add("board-cell");
      boardContainer.appendChild(cell);
    }
  }
};

export { renderGameboard };
