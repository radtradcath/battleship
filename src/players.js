import GameboardFactory from "./gameboard";

const PlayerFactory = (name) => {
  const playerName = name;

  const getName = () => playerName;

  return {
    getName,
  };
};

export default PlayerFactory;