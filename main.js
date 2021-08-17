/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code/computer.js":
/*!******************************!*\
  !*** ./src/code/computer.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/code/player.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* eslint-disable no-undef */\n\n\nconst Computer = () => {\n  const enemyPositionsAttacked = [];\n\n  const gameboardSize = 10;\n\n  const { getName, getGameboard, isValidAttack } = (0,_player__WEBPACK_IMPORTED_MODULE_0__.default)('Computer');\n\n  const getRandomCoordinate = () => {\n    return Math.floor(Math.random * gameboardSize);\n  };\n\n  const attack = () => {\n    let x = getRandomCoordinate();\n    let y = getRandomCoordinate();\n    while (!isValidAttack(x, y)) {\n      x = getRandomCoordinate();\n      y = getRandomCoordinate();\n    }\n    enemyPositionsAttacked.push({ x, y });\n    return { x, y };\n  };\n\n  return {\n    getName,\n    getGameboard,\n    attack,\n  };\n};\n\nmodule.exports = Computer;\n\n\n//# sourceURL=webpack:///./src/code/computer.js?");

/***/ }),

/***/ "./src/code/domLogic.js":
/*!******************************!*\
  !*** ./src/code/domLogic.js ***!
  \******************************/
/***/ ((module) => {

eval("const DOMLogic = () => {\n  const playerGameboard = document.querySelector('.player_gameboard');\n  const computerGameboard = document.querySelector('.computer_gameboard');\n  const createPlayerGameboard = (size) => {\n    for (let y = 0; y < size; y++) {\n      for (let x = 0; x < size; x++) {\n        let div = document.createElement('div');\n        div.classList.add('position');\n        div.dataset.x = x;\n        div.dataset.y = y;\n        playerGameboard.appendChild(div);\n      }\n    }\n  };\n\n  const createComputerGameboard = (size) => {\n    for (let y = 0; y < size; y++) {\n      for (let x = 0; x < size; x++) {\n        let div = document.createElement('div');\n        div.classList.add('position');\n        div.dataset.x = x;\n        div.dataset.y = y;\n        computerGameboard.appendChild(div);\n      }\n    }\n  };\n  return {\n    createPlayerGameboard,\n    createComputerGameboard,\n  }\n};\n\nmodule.exports = DOMLogic;\n\n//# sourceURL=webpack:///./src/code/domLogic.js?");

/***/ }),

/***/ "./src/code/gameboard.js":
/*!*******************************!*\
  !*** ./src/code/gameboard.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/code/ship.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ship__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* eslint-disable no-undef */\n\n\nconst Gameboard = () => {\n  const gameboardSize = 10;\n  const positions = Array.from({ length: 10 }, () =>\n    Array.from({ length: 10 }, () => ({ isHit: false }))\n  );\n\n  const isValidShipPlacement = (xStart, yStart, xEnd, yEnd) => {\n    // if ship is outside gameboard\n    if (\n      xStart < 0 ||\n      xEnd < 0 ||\n      yStart < 0 ||\n      yEnd < 0 ||\n      xStart >= gameboardSize ||\n      xEnd >= gameboardSize ||\n      yStart >= gameboardSize ||\n      yEnd >= gameboardSize\n    ) {\n      return false;\n    }\n\n    // if there is already a ship at the spot\n    for (let x = xStart; x < xEnd; x++) {\n      for (let y = yStart; y < yEnd; y++) {\n        if (positions[x][y].ship) {\n          return false;\n        }\n      }\n    }\n    return true;\n  };\n\n  const placeShip = (xStart, yStart, shipLength, shipOrientation) => {\n    const xEnd =\n      shipOrientation === 'horizontal' ? xStart + shipLength : xStart + 1;\n    const yEnd =\n      shipOrientation === 'vertical' ? yStart + shipLength : yStart + 1;\n    if (!isValidShipPlacement(xStart, yStart, xEnd, yEnd)) {\n      return false;\n    }\n    const newShip = _ship__WEBPACK_IMPORTED_MODULE_0___default()(shipLength);\n    let shipPosition = 0;\n    for (let x = xStart; x < xEnd; x++) {\n      for (let y = yStart; y < yEnd; y++) {\n        positions[x][y].ship = newShip;\n        positions[x][y].shipPosition = shipPosition;\n        shipPosition++;\n      }\n    }\n    return true;\n  };\n\n  const receiveAttack = (x, y) => {\n    if (\n      x < 0 ||\n      y < 0 ||\n      x >= gameboardSize ||\n      y >= gameboardSize ||\n      positions[x][y].isHit\n    ) {\n      return false;\n    }\n    if (positions[x][y].ship) {\n      positions[x][y].ship.hit(positions[x][y].shipPosition);\n      positions[x][y].isHit = true;\n      return true;\n    }\n    positions[x][y].isHit = true;\n    return false;\n  };\n\n  const allShipsSunk = () => {\n    for (let x = 0; x < gameboardSize; x++) {\n      for (let y = 0; y < gameboardSize; y++) {\n        if (positions[x][y].ship && !positions[x][y].ship.isSunk()) {\n          return false;\n        }\n      }\n    }\n    return true;\n  };\n\n  const getPositions = () => {\n    return positions;\n  };\n\n  return {\n    placeShip,\n    receiveAttack,\n    allShipsSunk,\n    getPositions,\n  };\n};\n\n// eslint-disable-next-line no-undef\nmodule.exports = Gameboard;\n\n\n//# sourceURL=webpack:///./src/code/gameboard.js?");

/***/ }),

/***/ "./src/code/player.js":
/*!****************************!*\
  !*** ./src/code/player.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/code/gameboard.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* eslint-disable no-undef */\n\n\nconst Player = (name) => {\n  const enemyPositionsAttacked = [];\n  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n  const getName = () => name;\n\n  const getGameboard = () => gameboard;\n\n  const isValidAttack = (x, y) => {\n    for (let i = 0; i < enemyPositionsAttacked.length; i++) {\n      let enemyPositions = enemyPositionsAttacked[i];\n      if (enemyPositions.x === x && enemyPositions.y === y) {\n        return false;\n      }\n    }\n    return true;\n  };\n\n  const attack = (x, y) => {\n    if (!isValidAttack(x, y)) {\n      return false;\n    }\n    enemyPositionsAttacked.push({ x, y });\n    return true;\n  };\n\n  return {\n    getName,\n    getGameboard,\n    isValidAttack,\n    attack,\n  };\n};\n\nmodule.exports = Player;\n\n\n//# sourceURL=webpack:///./src/code/player.js?");

/***/ }),

/***/ "./src/code/ship.js":
/*!**************************!*\
  !*** ./src/code/ship.js ***!
  \**************************/
/***/ ((module) => {

eval("const Ship = (length) => {\n  const positionsHit = Array(length).fill(0);\n\n  const hit = (position) => {\n    if (position >= 0 && position < length && !positionsHit[position]) {\n      positionsHit[position] = 1;\n      return true;\n    }\n    return false;\n  };\n\n  const isSunk = () => {\n    return positionsHit.reduce((sum, current) => sum + current, 0) === length;\n  };\n\n  return {\n    hit,\n    isSunk,\n  };\n};\n\n// eslint-disable-next-line no-undef\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./src/code/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _code_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code/player */ \"./src/code/player.js\");\n/* harmony import */ var _code_computer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code/computer */ \"./src/code/computer.js\");\n/* harmony import */ var _code_domLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code/domLogic */ \"./src/code/domLogic.js\");\n/* harmony import */ var _code_domLogic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_code_domLogic__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable no-undef */\n\n\n\nconst gameboardSize = 10;\n\nlet isPlayerTurn = true;\nlet isPlayerSunk = false;\nlet isComputerSunk = false;\nlet player = (0,_code_player__WEBPACK_IMPORTED_MODULE_0__.default)('Linda');\nlet computer = (0,_code_computer__WEBPACK_IMPORTED_MODULE_1__.default)();\n\nfunction initiateGame() {\n  isPlayerTurn = true;\n  isPlayerSunk = false;\n  isComputerSunk = false;\n  player = (0,_code_player__WEBPACK_IMPORTED_MODULE_0__.default)('Linda');\n  _code_domLogic__WEBPACK_IMPORTED_MODULE_2___default().createPlayerGameboard(gameboardSize);\n  computer = (0,_code_computer__WEBPACK_IMPORTED_MODULE_1__.default)();\n  _code_domLogic__WEBPACK_IMPORTED_MODULE_2___default().createComputerGameboard(gameboardSize);\n}\n\ninitiateGame();\n\n//# sourceURL=webpack:///./src/index.js?");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;