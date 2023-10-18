import ShipFactory from "./ships";

describe("ships tests", () => {
  const newShip = ShipFactory("carrier");

  test("get correct ship length", () => {
    expect(newShip.getShipLength()).toBe(5);
  });

  test("get correct type", () => {
    expect(newShip.getShipType()).toBe("carrier");
  });

  test('sink ship correctly', () => {
    newShip.hit();
    newShip.hit();
    newShip.hit();
    newShip.hit();
    newShip.hit();
    
    expect(newShip.isSunk()).toBeTruthy();
  })
});
