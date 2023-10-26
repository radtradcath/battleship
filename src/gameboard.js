import ShipFactory from "./ships";

const GameboardFactory = (player) => {
  const arrOfShips = [];

  let sunkShips = 0;

  const isAllSunk = () => {
    if (sunkShips === arrOfShips.length) {
      return true;
    }

    return false;
  };

  const gameboard = [
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
  ];

  const getGameboard = () => gameboard;

  const getArrOfShips = () => arrOfShips;

  const addNewShip = (ship) => arrOfShips.push(ship);

  const placeShip = (coord, orient, ship) => {
    const startingY = coord[0];
    const startingX = coord[1];
    const shipLength = ship.getShipLength();

    const necessaryPos = [];

    if (orient === "horizontal") {
      if (startingX + shipLength > 10) {
        return false;
      }
      for (let i = 0; i < shipLength; i += 1) {
        necessaryPos.push(gameboard[startingY][startingX + i]);
      }

      if (!necessaryPos.every((value) => value === undefined)) {
        return false;
      }

      for (let i = 0; i < shipLength; i += 1) {
        gameboard[startingY][startingX + i] = ship;
      }

      return gameboard;
    }

    if (orient === "vertical") {
      if (startingY + shipLength > 10) {
        return false;
      }
      for (let i = 0; i < shipLength; i += 1) {
        necessaryPos.push(gameboard[startingY + i][startingX]);
      }

      if (!necessaryPos.every((value) => value === undefined)) {
        return false;
      }

      for (let i = 0; i < shipLength; i += 1) {
        gameboard[startingY + i][startingX] = ship;
      }

      return gameboard;
    }
  };

  const returnRandomCoord = () => Math.floor(Math.random() * 10);

  const returnRandomOrient = () => {
    const randomOrient = Math.floor(Math.random() * 2);
    if (randomOrient === 0) {
      return "vertical";
    }
    if (randomOrient === 1) {
      return "horizontal";
    }
  };

  const findRandomAvailablePos = (ship) => {
    const shipLength = ship.getShipLength();
    let randomPos;
    const randomOrient = returnRandomOrient();

    do {
      randomPos = [returnRandomCoord(), returnRandomCoord()];
    } while (randomPos[0] + shipLength > 10 || randomPos[1] + shipLength > 10);

    if (placeShip(randomPos, randomOrient, ship) === false) {
      return findRandomAvailablePos(ship);
    }

    placeShip(randomPos, randomOrient, ship);
  };

  const missedShots = [];
  const hitShots = [];

  const getMissedShots = () => missedShots;
  const getHitShots = () => hitShots;

  const receiveAttack = (coord) => {
    const coordY = coord[0];
    const coordX = coord[1];

    if (
      gameboard[coordY][coordX] === "miss" ||
      gameboard[coordY][coordX] === "hit"
    ) {
      return "Not available";
    }

    if (gameboard[coordY][coordX] === undefined) {
      gameboard[coordY][coordX] = "miss";
      missedShots.push(coord);

      return missedShots;
    }

    const hitShip = gameboard[coordY][coordX];
    hitShip.hit();
    gameboard[coordY][coordX] = "hit";
    if (hitShip.isSunk()) {
      sunkShips += 1;
    }

    hitShots.push(coord);

    return hitShip.getShipId();
  };

  if (player === "Player") {
    return {
      placeShip,
      getGameboard,
      getMissedShots,
      receiveAttack,
      addNewShip,
      getArrOfShips,
      isAllSunk,
      getHitShots,
    };
  }

  if (player === "Computer") {
    return {
      placeShip,
      getGameboard,
      getMissedShots,
      receiveAttack,
      addNewShip,
      getArrOfShips,
      isAllSunk,
      findRandomAvailablePos,
      getHitShots,
    };
  }
};

export default GameboardFactory;
