import GameboardFactory from "./gameboard";

const CreatePlayer = (name) => {
  const playerName = name;

  const getName = () => playerName;

  if (name === "Computer") {
    const chooseRandom = () => {};
  }

  return {
    getName,
  };
};

export default CreatePlayer;