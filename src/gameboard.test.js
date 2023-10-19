import GameboardFactory from "./gameboard";
import ShipFactory from "./ships";

describe("test placement of ships", () => {
  const destroyer = ShipFactory("destroyer");
  const board1 = GameboardFactory();

  test("correctly position ship horizontaly", () => {
    expect(board1.placeShip([1, 3], "horizontal", destroyer)).toEqual([
      undefined,
      undefined,
      undefined,
      destroyer.getShipId(),
      destroyer.getShipId(),
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]);
  });
});
