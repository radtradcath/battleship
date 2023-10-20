import crypto from "crypto";
import GameboardFactory from "./gameboard";
import ShipFactory from "./ships";

Object.defineProperty(global, "crypto", {
  value: {
    randomUUID: () => crypto.randomUUID(),
  },
});

describe("test placement of ships", () => {
  let carrier;
  let destroyer;
  let battleship;
  let submarine;
  let board1;

  beforeEach(() => {
    carrier = ShipFactory("carrier"); // 5
    destroyer = ShipFactory("destroyer"); // 2
    battleship = ShipFactory("battleship"); // 4
    submarine = ShipFactory("submarine"); // 1
    board1 = GameboardFactory();
  });

  test("correctly position ship horizontaly", () => {
    expect(board1.placeShip([1, 1], "horizontal", carrier)).toEqual([
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
        carrier.getShipId(),
        carrier.getShipId(),
        carrier.getShipId(),
        carrier.getShipId(),
        carrier.getShipId(),
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
    ]);
  });

  test("correctly position second ship verticaly", () => {
    expect(board1.placeShip([5, 4], "vertical", destroyer)).toEqual([
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
        destroyer.getShipId(),
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
        destroyer.getShipId(),
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
    ]);
  });

  test("block overlapping ships", () => {
    board1.placeShip([5, 4], "vertical", destroyer);
    expect(board1.placeShip([5, 4], "vertical", battleship)).toBe(
      "Obstructed by another ship.",
    );
  });

  test("board record missed shot", () => {
    board1.receiveAttack([1, 0]);
    expect(board1.getMissedShots()).toEqual([[1, 0]]);
  });

  test("board record attacked ship", () => {
    board1.placeShip([1, 1], "horizontal", submarine);
    board1.addNewShip(submarine);
    expect(board1.receiveAttack([1, 1])).toBe(submarine);
  });
});
