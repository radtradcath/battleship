import ShipFactory from "./ships";
import PlayerFactory from "./players";
import GameboardFactory from "./gameboard";
import DOMGameboardHandler from "./dom";

const dom = DOMGameboardHandler();

const BoardHandler = () => {
  // Create Players
  const player = (() => PlayerFactory("Player"))();
  const computer = (() => PlayerFactory("Computer"))();

  // Create player gameboard and position ships
  const playerBoard = (() => {
    const playerGameboard = GameboardFactory(player.getName());

    const carrier = ShipFactory("carrier"); // 5
    const battleship = ShipFactory("battleship"); // 4
    const cruiser = ShipFactory("cruiser"); // 3
    const destroyer1 = ShipFactory("destroyer"); // 2
    const destroyer2 = ShipFactory("destroyer"); // 2
    const submarine1 = ShipFactory("submarine"); // 1
    const submarine2 = ShipFactory("submarine"); // 1

    playerGameboard.placeShip([0, 0], "horizontal", carrier);
    playerGameboard.placeShip([2, 2], "vertical", battleship);
    playerGameboard.placeShip([0, 6], "vertical", cruiser);
    playerGameboard.placeShip([4, 7], "horizontal", destroyer1);
    playerGameboard.placeShip([8, 6], "horizontal", destroyer2);
    playerGameboard.placeShip([9, 3], "horizontal", submarine1);
    playerGameboard.placeShip([3, 9], "horizontal", submarine2);

    return playerGameboard;
  })();

  // Create computer gameboard and position ships
  const computerBoard = (() => {
    const computerGameboard = GameboardFactory(computer.getName());

    const carrier = ShipFactory("carrier"); // 5
    const battleship = ShipFactory("battleship"); // 4
    const cruiser = ShipFactory("cruiser"); // 3
    const destroyer1 = ShipFactory("destroyer"); // 2
    const destroyer2 = ShipFactory("destroyer"); // 2
    const submarine1 = ShipFactory("submarine"); // 1
    const submarine2 = ShipFactory("submarine"); // 1

    computerGameboard.addNewShip(carrier);
    computerGameboard.addNewShip(battleship);
    computerGameboard.addNewShip(cruiser);
    computerGameboard.addNewShip(destroyer1);
    computerGameboard.addNewShip(destroyer2);
    computerGameboard.addNewShip(submarine1);
    computerGameboard.addNewShip(submarine2);

    computerGameboard.getArrOfShips().forEach((ship) => {
      computerGameboard.findRandomAvailablePos(ship);
    });

    return computerGameboard;
  })();

  const getComputerBoard = () => computerBoard
  const getPlayerBoard = () => playerBoard

  // Call to link gameboard to board cells
  dom.placeShipsInBoard(playerBoard, player);
  dom.placeShipsInBoard(computerBoard, computer);

  
  return {
    getComputerBoard,
    getPlayerBoard,
    player,
    computer
  }
};

export { BoardHandler, dom };
