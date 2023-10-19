const ShipFactory = (type) => {
  const typeSizes = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    destroyer: 2,
    submarine: 1,
  };

  const shipType = type;
  const shipId = crypto.randomUUID();

  const getShipType = () => shipType;
  const getShipId = () => shipId;

  const setShipLength = (name) => {
    const typesArray = Object.keys(typeSizes);

    for (let i = 0; i < typesArray.length; i += 1) {
      if (typesArray[i] === name) {
        return typeSizes[name];
      }
    }
  };

  const shipLength = setShipLength(type);

  const getShipLength = () => shipLength;

  let hits = 0;

  const getHits = () => hits;

  const hit = () => {
    hits += 1;
  };

  const isSunk = () => {
    if (getHits() === shipLength) {
      return true;
    }

    return false;
  };

  return {
    getShipLength,
    getShipType,
    getShipId,
    getHits,
    hit,
    isSunk,    
  };
};

export default ShipFactory;
