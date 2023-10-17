const ShipFactory = (type) => {
  const typeSizes = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    destroyer: 2,
    submarine: 1,
  };

  const shipType = () => type;

  return {
    shipType,
  }
};

const newShip = ShipFactory('carrier');

console.log(newShip.shipType())