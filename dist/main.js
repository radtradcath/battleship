/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst DOMGameboardHandler = () => {\n  const playerBoardContainer = document.querySelector(\".player-board-container\");\n  const computerBoardContainer = document.querySelector(\".computer-board-container\");\n\n  // Render player board\n  const renderPlayerGameboard = (() => {\n    for (let i = 0; i < 10; i += 1) {\n      for (let j = 0; j < 10; j += 1) {\n        const cell = document.createElement(\"button\");\n        cell.classList.add(\"player-board-cell\", `${[i, j]}`);\n        playerBoardContainer.appendChild(cell);\n      }\n    }\n  })();\n\n  // Render computer board\n  const renderComputerGameboard = (() => {\n    for (let i = 0; i < 10; i += 1) {\n      for (let j = 0; j < 10; j += 1) {\n        const cell = document.createElement(\"button\");\n        cell.classList.add(\"computer-board-cell\", `${[i, j]}`);\n        computerBoardContainer.appendChild(cell);\n      }\n    }\n  })();\n  const playerBoardCells = document.querySelectorAll(\".player-board-cell\");\n  const computerBoardCells = document.querySelectorAll(\".computer-board-cell\");\n\n  // Link gameboard to DOM cells\n  const placeShipsInBoard = (board, player) => {\n    if (player.getName() === \"Player\") {\n      playerBoardCells.forEach(cell => {\n        const cellPos = cell.classList[1];\n        const splitPos = cellPos.split(\",\");\n        splitPos[0] = Number(splitPos[0]);\n        splitPos[1] = Number(splitPos[1]);\n        if (board.getGameboard()[splitPos[0]][splitPos[1]] !== undefined) {\n          cell.classList.add(`${board.getGameboard()[splitPos[0]][splitPos[1]].getShipId()}`);\n          cell.style.border = '6px solid green';\n        }\n      });\n    }\n    if (player.getName() === \"Computer\") {\n      computerBoardCells.forEach(cell => {\n        const cellPos = cell.classList[1];\n        const splitPos = cellPos.split(\",\");\n        splitPos[0] = Number(splitPos[0]);\n        splitPos[1] = Number(splitPos[1]);\n        if (board.getGameboard()[splitPos[0]][splitPos[1]] !== undefined) {\n          cell.classList.add(`${board.getGameboard()[splitPos[0]][splitPos[1]].getShipId()}`);\n        }\n      });\n    }\n  };\n\n  // Update DOM with correct rendering\n  const updateRenderBoard = (board1, board2) => {\n    playerBoardCells.forEach(cell => {\n      const cellPos = cell.classList[1];\n      const splitPos = cellPos.split(\",\");\n      splitPos[0] = Number(splitPos[0]);\n      splitPos[1] = Number(splitPos[1]);\n      if (board1.getGameboard()[splitPos[0]][splitPos[1]] === \"miss\") {\n        cell.textContent = \"miss\";\n      }\n      if (board1.getGameboard()[splitPos[0]][splitPos[1]] === \"hit\") {\n        cell.style.border = '6px solid red';\n      }\n    });\n    computerBoardCells.forEach(cell => {\n      const cellPos = cell.classList[1];\n      const splitPos = cellPos.split(\",\");\n      splitPos[0] = Number(splitPos[0]);\n      splitPos[1] = Number(splitPos[1]);\n      if (board2.getGameboard()[splitPos[0]][splitPos[1]] === \"miss\") {\n        cell.textContent = \"miss\";\n      }\n      if (board2.getGameboard()[splitPos[0]][splitPos[1]] === \"hit\") {\n        cell.style.border = '6px solid red';\n      }\n    });\n  };\n  return {\n    placeShipsInBoard,\n    updateRenderBoard\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMGameboardHandler);\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\n\nconst GameboardFactory = player => {\n  const arrOfShips = [];\n  let sunkShips = 0;\n  const isAllSunk = () => {\n    if (sunkShips === arrOfShips.length) {\n      return true;\n    }\n    return false;\n  };\n  const gameboard = [[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]];\n  const getGameboard = () => gameboard;\n  const getArrOfShips = () => arrOfShips;\n  const addNewShip = ship => arrOfShips.push(ship);\n  const placeShip = (coord, orient, ship) => {\n    const startingY = coord[0];\n    const startingX = coord[1];\n    const shipLength = ship.getShipLength();\n    const necessaryPos = [];\n    if (orient === \"horizontal\") {\n      for (let i = 0; i < shipLength; i += 1) {\n        necessaryPos.push(gameboard[startingY][startingX + i]);\n      }\n      if (!necessaryPos.every(value => value === undefined)) {\n        return \"Obstructed by another ship.\";\n      }\n      for (let i = 0; i < shipLength; i += 1) {\n        gameboard[startingY][startingX + i] = ship;\n      }\n      return gameboard;\n    }\n    if (orient === \"vertical\") {\n      for (let i = 0; i < shipLength; i += 1) {\n        necessaryPos.push(gameboard[startingY + i][startingX]);\n      }\n      if (!necessaryPos.every(value => value === undefined)) {\n        return \"Obstructed by another ship.\";\n      }\n      for (let i = 0; i < shipLength; i += 1) {\n        gameboard[startingY + i][startingX] = ship;\n      }\n      return gameboard;\n    }\n  };\n  const returnRandomCoord = () => Math.floor(Math.random() * 10);\n  const returnRandomOrient = () => {\n    const randomOrient = Math.floor(Math.random() * 2);\n    if (randomOrient === 0) {\n      return \"vertical\";\n    }\n    if (randomOrient === 1) {\n      return \"horizontal\";\n    }\n  };\n  const findRandomAvailablePos = ship => {\n    const shipLength = ship.getShipLength();\n    let randomPos;\n    const randomOrient = returnRandomOrient();\n    do {\n      randomPos = [returnRandomCoord(), returnRandomCoord()];\n    } while (randomPos[0] + shipLength > 10 || randomPos[1] + shipLength > 10);\n    if (placeShip(randomPos, randomOrient, ship) === \"Obstructed by another ship.\") {\n      return findRandomAvailablePos(ship);\n    }\n    placeShip(randomPos, randomOrient, ship);\n  };\n  const missedShots = [];\n  const hitShots = [];\n  const getMissedShots = () => missedShots;\n  const getHitShots = () => hitShots;\n  const receiveAttack = coord => {\n    const coordY = coord[0];\n    const coordX = coord[1];\n    if (gameboard[coordY][coordX] === \"miss\" || gameboard[coordY][coordX] === \"hit\") {\n      return \"Not available\";\n    }\n    if (gameboard[coordY][coordX] === undefined) {\n      gameboard[coordY][coordX] = \"miss\";\n      missedShots.push(coord);\n      return missedShots;\n    }\n    const hitShip = gameboard[coordY][coordX];\n    hitShip.hit();\n    gameboard[coordY][coordX] = \"hit\";\n    if (hitShip.isSunk()) {\n      sunkShips += 1;\n    }\n    hitShots.push(coord);\n    return hitShip.getShipId();\n  };\n  if (player === \"Player\") {\n    return {\n      placeShip,\n      getGameboard,\n      getMissedShots,\n      receiveAttack,\n      addNewShip,\n      getArrOfShips,\n      isAllSunk,\n      getHitShots\n    };\n  }\n  if (player === \"Computer\") {\n    return {\n      placeShip,\n      getGameboard,\n      getMissedShots,\n      receiveAttack,\n      addNewShip,\n      getArrOfShips,\n      isAllSunk,\n      findRandomAvailablePos,\n      getHitShots\n    };\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameboardFactory);\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/gamelogic.js":
/*!**************************!*\
  !*** ./src/gamelogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\n/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players */ \"./src/players.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\n\nconst BoardHandler = () => {\n  // Create Players\n  const player = (() => (0,_players__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Player\"))();\n  const computer = (() => (0,_players__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Computer\"))();\n\n  // Create player gameboard and position ships\n  const playerBoard = (() => {\n    const playerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(player.getName());\n    const carrier = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"carrier\"); // 5\n    const battleship = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"battleship\"); // 4\n    const cruiser = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"cruiser\"); // 3\n    const destroyer1 = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"destroyer\"); // 2\n    const destroyer2 = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"destroyer\"); // 2\n    const submarine1 = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"submarine\"); // 1\n    const submarine2 = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"submarine\"); // 1\n\n    playerGameboard.addNewShip(carrier);\n    playerGameboard.addNewShip(battleship);\n    playerGameboard.addNewShip(cruiser);\n    playerGameboard.addNewShip(destroyer1);\n    playerGameboard.addNewShip(destroyer2);\n    playerGameboard.addNewShip(submarine1);\n    playerGameboard.addNewShip(submarine2);\n    playerGameboard.placeShip([0, 0], \"horizontal\", carrier);\n    playerGameboard.placeShip([2, 2], \"vertical\", battleship);\n    playerGameboard.placeShip([0, 6], \"vertical\", cruiser);\n    playerGameboard.placeShip([4, 7], \"horizontal\", destroyer1);\n    playerGameboard.placeShip([8, 6], \"horizontal\", destroyer2);\n    playerGameboard.placeShip([9, 3], \"horizontal\", submarine1);\n    playerGameboard.placeShip([3, 9], \"horizontal\", submarine2);\n    return playerGameboard;\n  })();\n\n  // Create computer gameboard and position ships\n  const computerBoard = (() => {\n    const computerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(computer.getName());\n    const carrier = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"carrier\"); // 5\n    const battleship = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"battleship\"); // 4\n    const cruiser = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"cruiser\"); // 3\n    const destroyer1 = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"destroyer\"); // 2\n    const destroyer2 = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"destroyer\"); // 2\n    const submarine1 = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"submarine\"); // 1\n    const submarine2 = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"submarine\"); // 1\n\n    computerGameboard.addNewShip(carrier);\n    computerGameboard.addNewShip(battleship);\n    computerGameboard.addNewShip(cruiser);\n    computerGameboard.addNewShip(destroyer1);\n    computerGameboard.addNewShip(destroyer2);\n    computerGameboard.addNewShip(submarine1);\n    computerGameboard.addNewShip(submarine2);\n    computerGameboard.getArrOfShips().forEach(ship => {\n      computerGameboard.findRandomAvailablePos(ship);\n    });\n    return computerGameboard;\n  })();\n  const getComputerBoard = () => computerBoard;\n  const getPlayerBoard = () => playerBoard;\n  return {\n    getComputerBoard,\n    getPlayerBoard,\n    player,\n    computer,\n    playerBoard,\n    computerBoard\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoardHandler);\n\n//# sourceURL=webpack://battleship/./src/gamelogic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gamelogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamelogic */ \"./src/gamelogic.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\nconst initializeGame = () => {\n  // Render initial boards\n  const dom = (0,_dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n  // Initialize players, create boards and position ships\n  const boardHandler = (0,_gamelogic__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  // Call to link gameboard to board cells\n  dom.placeShipsInBoard(boardHandler.getPlayerBoard(), boardHandler.player);\n  dom.placeShipsInBoard(boardHandler.getComputerBoard(), boardHandler.computer);\n  const body = document.querySelector(\"body\");\n  const computerBoardCells = document.querySelectorAll(\".computer-board-cell\");\n  const playerBoardCells = document.querySelectorAll(\".player-board-cell\");\n  const attack = e => {\n    // If cell already been attacked, disable button\n    if (e.target.classList.contains(\"true\")) {\n      return;\n    }\n\n    // Attack computer board\n    e.target.classList.add(\"true\");\n    const cellPos = e.target.classList[1];\n    const splitPos = cellPos.split(\",\");\n    splitPos[0] = Number(splitPos[0]);\n    splitPos[1] = Number(splitPos[1]);\n    boardHandler.getComputerBoard().receiveAttack(splitPos);\n\n    // Update board\n    dom.updateRenderBoard(boardHandler.getPlayerBoard(), boardHandler.getComputerBoard());\n\n    // Check if ship hit is sunk...\n    if (e.target.classList[2] !== \"true\" && e.target.classList[2] !== undefined) {\n      const hitShipId = e.target.classList[2];\n      const hitShip = boardHandler.computerBoard.getArrOfShips().find(ship => ship.getShipId() === hitShipId);\n      console.log(hitShip);\n\n      // ...if it is, notify in yellow\n      if (hitShip.isSunk()) {\n        computerBoardCells.forEach(cell => {\n          if (cell.classList[2] === hitShipId) {\n            cell.style.backgroundColor = \"yellow\";\n            cell.textContent = 'SUNK';\n          }\n        });\n      }\n    }\n\n    // If all computer ships sunk, end game\n    if (boardHandler.getComputerBoard().isAllSunk()) {\n      endGame(\"Player\");\n    }\n\n    // Else, computer attack\n    const hit = boardHandler.getPlayerBoard().receiveAttack(boardHandler.computer.chooseAttackCell(boardHandler.getPlayerBoard()));\n\n    // Update boards\n    dom.updateRenderBoard(boardHandler.getPlayerBoard(), boardHandler.getComputerBoard());\n\n    // Find the ship hit...\n    if (hit !== \"Not available\" && hit !== boardHandler.getPlayerBoard().getMissedShots()) {\n      const hitShip = boardHandler.getPlayerBoard().getArrOfShips().find(ship => ship.getShipId() === hit);\n\n      // ...If it's sunk, notify in yellow\n      if (hitShip.isSunk()) {\n        playerBoardCells.forEach(cell => {\n          if (cell.classList[2] === hitShip.getShipId()) {\n            cell.style.backgroundColor = \"yellow\";\n            cell.textContent = 'SUNK';\n          }\n        });\n      }\n    }\n\n    // If all player ships sunk, endgame\n    if (boardHandler.getPlayerBoard().isAllSunk()) {\n      endGame(\"Computer\");\n    }\n  };\n  const resetGame = () => {\n    const resetButton = document.querySelector(\".resetBtn\");\n    const winnerContainer = document.querySelector(\".winner\");\n\n    // Remove all elements from container\n    body.removeChild(resetButton);\n    body.removeChild(winnerContainer);\n    playerBoardCells.forEach(cell => {\n      cell.remove();\n    });\n    computerBoardCells.forEach(cell => {\n      cell.remove();\n    });\n\n    // Rerun this module\n    initializeGame();\n  };\n  const endGame = winner => {\n    const resetButton = document.createElement(\"button\");\n    const winnerContainer = document.createElement(\"div\");\n    resetButton.classList.add(\"resetBtn\");\n    winnerContainer.classList.add(\"winner\");\n    resetButton.textContent = \"RESET\";\n    winnerContainer.textContent = `${winner} is the Winner!`;\n    body.appendChild(resetButton);\n    body.appendChild(winnerContainer);\n    computerBoardCells.forEach(cell => {\n      cell.removeEventListener(\"click\", attack);\n    });\n    resetButton.addEventListener(\"click\", resetGame);\n  };\n\n  // Attach click event to each computer board cell\n  computerBoardCells.forEach(cell => {\n    cell.addEventListener(\"click\", attack);\n  });\n};\ninitializeGame();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\nconst PlayerFactory = name => {\n  const playerName = name;\n  const getName = () => playerName;\n  const isIncluded = (value, arr) => {\n    const first = value[0];\n    const second = value[1];\n    for (let i = 0; i < arr.length; i += 1) {\n      if (first === arr[i][0] && second === arr[i][1]) {\n        return true;\n      }\n    }\n    return false;\n  };\n  const chooseAttackCell = board => {\n    let x;\n    let y;\n    do {\n      x = Math.floor(Math.random() * 10);\n      y = Math.floor(Math.random() * 10);\n    } while (isIncluded([x, y], board.getMissedShots()) || isIncluded([x, y], board.getHitShots()));\n    return [x, y];\n  };\n  if (playerName === \"Player\") {\n    return {\n      getName\n    };\n  }\n  if (playerName === \"Computer\") {\n    return {\n      getName,\n      chooseAttackCell\n    };\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerFactory);\n\n//# sourceURL=webpack://battleship/./src/players.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ShipFactory = type => {\n  const typeSizes = {\n    carrier: 5,\n    battleship: 4,\n    cruiser: 3,\n    destroyer: 2,\n    submarine: 1\n  };\n  const shipType = type;\n  const shipId = crypto.randomUUID();\n  const getShipType = () => shipType;\n  const getShipId = () => shipId;\n  const setShipLength = name => {\n    const typesArray = Object.keys(typeSizes);\n    for (let i = 0; i < typesArray.length; i += 1) {\n      if (typesArray[i] === name) {\n        return typeSizes[name];\n      }\n    }\n  };\n  const shipLength = setShipLength(type);\n  const getShipLength = () => shipLength;\n  let hits = 0;\n  const getHits = () => hits;\n  const hit = () => {\n    hits += 1;\n  };\n  const isSunk = () => {\n    if (getHits() === shipLength) {\n      console.log('jaevis');\n      return true;\n    }\n    return false;\n  };\n  return {\n    getShipLength,\n    getShipType,\n    getShipId,\n    getHits,\n    hit,\n    isSunk\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipFactory);\n\n//# sourceURL=webpack://battleship/./src/ships.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  box-sizing: border-box;\n}\n\nbutton {\n  padding: 0;\n  background-color: white;\n}\n\nbody {\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: azure;\n}\n\nh3 {\n  margin-top: 0;\n}\n\nul {\n  padding: 0;\n  list-style: none;\n}\n\n.general-container {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  gap: 50px;\n  margin-bottom: 10px;\n}\n\n.player-board-container {\n  border: 1px solid black;\n  width: 500px;\n  height: 500px;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.computer-board-container {\n  border: 1px solid black;\n  width: 500px;\n  height: 500px;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.player-board-cell,\n.computer-board-cell {\n  width: 50px;\n  height: 50px;\n  border: 1px solid black;\n}\n\n.resetBtn {\n  padding: 12px 30px;\n  background-color: antiquewhite;\n  font-weight: bold;\n  font-size: 1.5em;\n}\n\n.winner {\n  font-size: 2em;\n  padding-bottom: 40px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;