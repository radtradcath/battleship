import ShipFactory from "./ships";

const GameboardFactory = () => {
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

    if (orient === 'vertical') {
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

  return {
    placeShip,
    getGameboard,
  };
};

export default GameboardFactory;
// x, y
// [0,0] --> [0][0]
// [0,1] --> [0][1]
