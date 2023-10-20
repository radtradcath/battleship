import ShipFactory from "./ships";

const GameboardFactory = () => {
  const carrier = ShipFactory("carrier"); // 5
  const battleship = ShipFactory("battleship"); // 4
  const cruiser = ShipFactory("cruiser"); // 3
  const destroyer1 = ShipFactory("destroyer"); // 2
  const destroyer2 = ShipFactory("destroyer"); // 2
  const submarine1 = ShipFactory("submarine"); // 1
  const submarine2 = ShipFactory("submarine"); // 1

  const arrOfShips = [
    carrier,
    battleship,
    cruiser,
    destroyer1,
    destroyer2,
    submarine1,
    submarine2,
  ];

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

  const addNewShip = (ship) => arrOfShips.push(ship);

  const placeShip = (coord, orient, ship) => {
    const startingY = coord[0];
    const startingX = coord[1];
    const shipLength = ship.getShipLength();
    const shipId = ship.getShipId();

    const necessaryPos = [];

    if (orient === "horizontal") {
      for (let i = 0; i < shipLength; i += 1) {
        necessaryPos.push(gameboard[startingY][startingX + i]);
      }

      if (!necessaryPos.every((value) => value === undefined)) {
        return "Obstructed by another ship.";
      }

      for (let i = 0; i < shipLength; i += 1) {
        gameboard[startingY][startingX + i] = shipId;
      }

      return gameboard;
    }

    if (orient === "vertical") {
      for (let i = 0; i < shipLength; i += 1) {
        necessaryPos.push(gameboard[startingY + i][startingX]);
      }

      if (!necessaryPos.every((value) => value === undefined)) {
        return "Obstructed by another ship.";
      }

      for (let i = 0; i < shipLength; i += 1) {
        gameboard[startingY + i][startingX] = shipId;
      }

      return gameboard;
    }
  };

  const missedShots = [];

  const getMissedShots = () => missedShots;

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

    const hitId = gameboard[coordY][coordX];
    const targetShip = arrOfShips.find((ship) => ship.getShipId() === hitId);
    targetShip.hit();
    gameboard[coordY][coordX] = "hit";
    return targetShip;
    // gameboard[coordY][coordX] = "hit";
  };

  return {
    placeShip,
    getGameboard,
    getMissedShots,
    receiveAttack,
    addNewShip,
  };
};

export default GameboardFactory;
// x, y
// [0,0] --> [0][0]
// [0,1] --> [0][1]
