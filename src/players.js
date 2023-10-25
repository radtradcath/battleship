import GameboardFactory from "./gameboard";

const PlayerFactory = (name) => {
  const playerName = name;

  const getName = () => playerName;

  const isIncluded = (value, arr) => {
    const first = value[0];
    const second = value[1];

    for (let i = 0; i < arr.length; i += 1) {
      if (first === arr[i][0] && second === arr[i][1]) {
        return true;
      }
    }
    return false;
  };

  const chooseAttackCell = (board) => {
    let x;
    let y;

    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (
      isIncluded([x, y], board.getMissedShots()) &&
      isIncluded([x, y], board.getHitShots())
    );

    return [x, y];
  };

  if (playerName === "Player") {
    return {
      getName,
    };
  }

  if (playerName === "Computer") {
    return {
      getName,
      chooseAttackCell,
    };
  }
};

export default PlayerFactory;
