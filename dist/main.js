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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --color-blue: #389F91;\\n  --color-red: #E8373A;\\n  --color-light-red: #f28d8f;\\n  --color-navy: #031627;\\n  --color-white: whitesmoke;\\n}\\n\\nbody {\\n  display: grid;\\n  grid-template-rows: max-content max-content 1fr;\\n  justify-content: center;\\n  text-align: center;\\n  height: 100vh;\\n  width: 100vw;\\n  box-sizing: border-box;\\n  background-color: var(--color-navy);\\n  color: var(--color-white);\\n  font-family: 'Fredoka One', cursive;\\n  text-transform: uppercase;\\n  line-height: 1.2;\\n}\\n\\nh1 {\\n  font-size: 3em;\\n}\\n\\nh2 {\\n  font-size: 2em;\\n}\\n\\nh3 {\\n  font-size: 1.5em;\\n}\\n\\n.game {\\n  display: grid;\\n  grid-template-columns: 50% 50%;\\n  gap: 2em;\\n}\\n\\n.player_gameboard,\\n.computer_gameboard {\\n  height: 400px;\\n  width: 400px;\\n  display: grid;\\n  grid-template-columns: repeat(10, 1fr);\\n  grid-template-rows: repeat(10, 1fr);\\n}\\n\\n.position {\\n  border: 1px solid var(--color-white);\\n}\\n\\n.player_gameboard .position.ship {\\n  background-color: var(--color-light-red);\\n}\\n\\n.computer_gameboard .position:hover {\\n  background-color: var(--color-white);\\n  cursor: pointer;\\n}\\n\\n.position.hit,\\n.computer_gameboard .position.hit:hover {\\n  background-color: var(--color-red);\\n}\\n\\n.position.miss,\\n.computer_gameboard .position.miss:hover {\\n  background-color: var(--color-blue);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/code/computer.js":
/*!******************************!*\
  !*** ./src/code/computer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/code/gameboard.js\");\n\n\nconst Computer = () => {\n  const enemyPositionsAttacked = [];\n\n  const gameboardSize = 10;\n\n  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n  const name = 'Computer';\n\n  const getName = () => name;\n\n  const getGameboard = () => gameboard;\n\n  const isValidAttack = (x, y) => {\n    for (let i = 0; i < enemyPositionsAttacked.length; i++) {\n      let enemyPositions = enemyPositionsAttacked[i];\n      if (enemyPositions.x === x && enemyPositions.y === y) {\n        return false;\n      }\n    }\n    return true;\n  };\n\n  const getRandomCoordinate = () => {\n    return Math.floor(Math.random() * gameboardSize);\n  };\n\n  const getRandomOrientation = () => {\n    let orientations = ['horizontal', 'vertical'];\n    return orientations[Math.floor(Math.random() * 2)];\n  };\n\n  const placeShipRandomly = (shipLength) => {\n    let x = getRandomCoordinate();\n    let y = getRandomCoordinate();\n    let orientation = getRandomOrientation();\n    let isSuccessfulShipPlacement = getGameboard().placeShip(\n      x,\n      y,\n      shipLength,\n      orientation\n    );\n    while (!isSuccessfulShipPlacement) {\n      x = getRandomCoordinate();\n      y = getRandomCoordinate();\n      orientation = getRandomOrientation();\n      isSuccessfulShipPlacement = getGameboard().placeShip(\n        x,\n        y,\n        shipLength,\n        orientation\n      );\n    }\n  };\n\n  const attack = () => {\n    let x = getRandomCoordinate();\n    let y = getRandomCoordinate();\n    while (!isValidAttack(x, y)) {\n      x = getRandomCoordinate();\n      y = getRandomCoordinate();\n    }\n    enemyPositionsAttacked.push({ x, y });\n    return { x, y };\n  };\n\n  return {\n    getName,\n    getGameboard,\n    attack,\n    placeShipRandomly,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Computer);\n\n\n//# sourceURL=webpack:///./src/code/computer.js?");

/***/ }),

/***/ "./src/code/domLogic.js":
/*!******************************!*\
  !*** ./src/code/domLogic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst DOMLogic = (function () {\n  const playerGameboard = document.querySelector('.player_gameboard');\n  const computerGameboard = document.querySelector('.computer_gameboard');\n  let gameStatus = document.querySelector('.game-status');\n  let playerInGame;\n  let computerInGame;\n\n  const renderPlayerGameboard = (player) => {\n    playerGameboard.innerHTML = '';\n    playerInGame = player;\n    let positions = player.getGameboard().getPositions();\n    for (let y = 0; y < positions.length; y++) {\n      for (let x = 0; x < positions.length; x++) {\n        let div = document.createElement('div');\n        div.classList.add('position');\n        div.dataset.x = x;\n        div.dataset.y = y;\n        if (positions[x][y].isHit) {\n          if (positions[x][y].ship) {\n            div.classList.add('hit');\n          } else {\n            div.classList.add('miss');\n          }\n        } else if (positions[x][y].ship) {\n          div.classList.add('ship');\n        }\n        playerGameboard.appendChild(div);\n      }\n    }\n  };\n\n  const renderComputerGameboard = (computer) => {\n    computerGameboard.innerHTML = '';\n    computerInGame = computer;\n    let positions = computer.getGameboard().getPositions();\n    for (let y = 0; y < positions.length; y++) {\n      for (let x = 0; x < positions.length; x++) {\n        let div = document.createElement('div');\n        div.classList.add('position');\n        div.dataset.x = x;\n        div.dataset.y = y;\n        if (positions[x][y].isHit) {\n          if (positions[x][y].ship) {\n            div.classList.add('hit');\n          } else {\n            div.classList.add('miss');\n          }\n        }\n        computerGameboard.appendChild(div);\n      }\n    }\n  };\n\n  const toggleActiveComputerGameboard = () => {\n    computerGameboard.classList.toggle('active');\n  };\n\n  const isGameOver = () => {\n    if (\n      playerInGame.getGameboard().allShipsSunk() ||\n      computerInGame.getGameboard().allShipsSunk()\n    ) {\n      return true;\n    }\n    return false;\n  };\n\n  const handleGameEnd = () => {\n    computerGameboard.removeEventListener('click', handlePlayerAttack);\n    gameStatus.textContent = playerInGame.getGameboard().allShipsSunk()\n      ? 'Computer Won!'\n      : 'Player Won!';\n  };\n\n  const handleComputerAttack = () => {\n    const { x, y } = computerInGame.attack();\n    playerInGame.getGameboard().receiveAttack(x, y);\n    renderPlayerGameboard(playerInGame);\n    renderComputerGameboard(computerInGame);\n    if (isGameOver()) {\n      handleGameEnd();\n    } else {\n      toggleActiveComputerGameboard();\n    }\n  };\n\n  const handlePlayerAttack = (e) => {\n    gameStatus.textContent = '...Battle In Progress...';\n    let parentClassList = e.target.parentNode.classList;\n    if (!parentClassList.contains('active')) {\n      return;\n    }\n    let x = e.target.dataset.x;\n    let y = e.target.dataset.y;\n\n    if (playerInGame.attack(x, y)) {\n      computerInGame.getGameboard().receiveAttack(x, y);\n      toggleActiveComputerGameboard();\n      renderPlayerGameboard(playerInGame);\n      renderComputerGameboard(computerInGame);\n      if (isGameOver()) {\n        handleGameEnd();\n      } else {\n        handleComputerAttack();\n      }\n    }\n  };\n  return {\n    renderPlayerGameboard,\n    renderComputerGameboard,\n    handlePlayerAttack,\n    toggleActiveComputerGameboard,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMLogic);\n\n\n//# sourceURL=webpack:///./src/code/domLogic.js?");

/***/ }),

/***/ "./src/code/gameboard.js":
/*!*******************************!*\
  !*** ./src/code/gameboard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/code/ship.js\");\n\n\nconst Gameboard = () => {\n  const gameboardSize = 10;\n  const positions = Array.from({ length: 10 }, () =>\n    Array.from({ length: 10 }, () => ({ isHit: false }))\n  );\n\n  const isValidShipPlacement = (xStart, yStart, xEnd, yEnd) => {\n    // if ship is outside gameboard\n    if (\n      xStart < 0 ||\n      xEnd < 0 ||\n      yStart < 0 ||\n      yEnd < 0 ||\n      xStart >= gameboardSize ||\n      xEnd >= gameboardSize ||\n      yStart >= gameboardSize ||\n      yEnd >= gameboardSize\n    ) {\n      return false;\n    }\n\n    // if there is already a ship at the spot\n    for (let x = xStart; x < xEnd; x++) {\n      for (let y = yStart; y < yEnd; y++) {\n        if (positions[x][y].ship) {\n          return false;\n        }\n      }\n    }\n    return true;\n  };\n\n  const placeShip = (xStart, yStart, shipLength, shipOrientation) => {\n    const xEnd =\n      shipOrientation === 'horizontal' ? xStart + shipLength : xStart + 1;\n    const yEnd =\n      shipOrientation === 'vertical' ? yStart + shipLength : yStart + 1;\n    if (!isValidShipPlacement(xStart, yStart, xEnd, yEnd)) {\n      return false;\n    }\n    const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.default)(shipLength);\n    let shipPosition = 0;\n    for (let x = xStart; x < xEnd; x++) {\n      for (let y = yStart; y < yEnd; y++) {\n        positions[x][y].ship = newShip;\n        positions[x][y].shipPosition = shipPosition;\n        shipPosition++;\n      }\n    }\n    return true;\n  };\n\n  const receiveAttack = (x, y) => {\n    if (\n      x < 0 ||\n      y < 0 ||\n      x >= gameboardSize ||\n      y >= gameboardSize ||\n      positions[x][y].isHit\n    ) {\n      return false;\n    }\n    if (positions[x][y].ship) {\n      positions[x][y].ship.hit(positions[x][y].shipPosition);\n      positions[x][y].isHit = true;\n      return true;\n    }\n    positions[x][y].isHit = true;\n    return false;\n  };\n\n  const allShipsSunk = () => {\n    for (let x = 0; x < gameboardSize; x++) {\n      for (let y = 0; y < gameboardSize; y++) {\n        if (positions[x][y].ship && !positions[x][y].ship.isSunk()) {\n          return false;\n        }\n      }\n    }\n    return true;\n  };\n\n  const getPositions = () => {\n    return positions;\n  };\n\n  return {\n    placeShip,\n    receiveAttack,\n    allShipsSunk,\n    getPositions,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack:///./src/code/gameboard.js?");

/***/ }),

/***/ "./src/code/player.js":
/*!****************************!*\
  !*** ./src/code/player.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/code/gameboard.js\");\n\n\nconst Player = (name) => {\n  const enemyPositionsAttacked = [];\n  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.default)();\n  const gameboardSize = 10;\n\n  const getName = () => name;\n\n  const getGameboard = () => gameboard;\n\n  const getRandomCoordinate = () => {\n    return Math.floor(Math.random() * gameboardSize);\n  };\n\n  const getRandomOrientation = () => {\n    let orientations = ['horizontal', 'vertical'];\n    return orientations[Math.floor(Math.random() * 2)];\n  };\n\n  const placeShipRandomly = (shipLength) => {\n    let x = getRandomCoordinate();\n    let y = getRandomCoordinate();\n    let orientation = getRandomOrientation();\n    let isSuccessfulShipPlacement = getGameboard().placeShip(\n      x,\n      y,\n      shipLength,\n      orientation\n    );\n    while (!isSuccessfulShipPlacement) {\n      x = getRandomCoordinate();\n      y = getRandomCoordinate();\n      orientation = getRandomOrientation();\n      isSuccessfulShipPlacement = getGameboard().placeShip(\n        x,\n        y,\n        shipLength,\n        orientation\n      );\n    }\n  };\n\n  const isValidAttack = (x, y) => {\n    for (let i = 0; i < enemyPositionsAttacked.length; i++) {\n      let enemyPositions = enemyPositionsAttacked[i];\n      if (enemyPositions.x === x && enemyPositions.y === y) {\n        return false;\n      }\n    }\n    return true;\n  };\n\n  const attack = (x, y) => {\n    if (!isValidAttack(x, y)) {\n      return false;\n    }\n    enemyPositionsAttacked.push({ x, y });\n    return true;\n  };\n\n  return {\n    getName,\n    getGameboard,\n    isValidAttack,\n    attack,\n    placeShipRandomly,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack:///./src/code/player.js?");

/***/ }),

/***/ "./src/code/ship.js":
/*!**************************!*\
  !*** ./src/code/ship.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (length) => {\n  const positionsHit = Array(length).fill(0);\n\n  const hit = (position) => {\n    if (position >= 0 && position < length && !positionsHit[position]) {\n      positionsHit[position] = 1;\n      return true;\n    }\n    return false;\n  };\n\n  const isSunk = () => {\n    return positionsHit.reduce((sum, current) => sum + current, 0) === length;\n  };\n\n  return {\n    hit,\n    isSunk,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack:///./src/code/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _code_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code/player */ \"./src/code/player.js\");\n/* harmony import */ var _code_computer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code/computer */ \"./src/code/computer.js\");\n/* harmony import */ var _code_domLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code/domLogic */ \"./src/code/domLogic.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* eslint-disable no-unused-vars */\n\n\n\n\n\nlet player;\nlet computer;\n\nfunction initiateGame() {\n  player = (0,_code_player__WEBPACK_IMPORTED_MODULE_0__.default)('Player');\n  player.placeShipRandomly(4);\n  player.placeShipRandomly(3);\n  player.placeShipRandomly(3);\n  player.placeShipRandomly(2);\n  player.placeShipRandomly(2);\n  player.placeShipRandomly(2);\n  player.placeShipRandomly(1);\n  player.placeShipRandomly(1);\n  player.placeShipRandomly(1);\n  player.placeShipRandomly(1);\n  _code_domLogic__WEBPACK_IMPORTED_MODULE_2__.default.renderPlayerGameboard(player);\n  computer = (0,_code_computer__WEBPACK_IMPORTED_MODULE_1__.default)();\n  computer.placeShipRandomly(4);\n  computer.placeShipRandomly(3);\n  computer.placeShipRandomly(3);\n  computer.placeShipRandomly(2);\n  computer.placeShipRandomly(2);\n  computer.placeShipRandomly(2);\n  computer.placeShipRandomly(1);\n  computer.placeShipRandomly(1);\n  computer.placeShipRandomly(1);\n  computer.placeShipRandomly(1);\n  _code_domLogic__WEBPACK_IMPORTED_MODULE_2__.default.renderComputerGameboard(computer);\n\n  _code_domLogic__WEBPACK_IMPORTED_MODULE_2__.default.toggleActiveComputerGameboard();\n}\n\ninitiateGame();\n\ndocument\n  .querySelector('.computer_gameboard')\n  .addEventListener('click', _code_domLogic__WEBPACK_IMPORTED_MODULE_2__.default.handlePlayerAttack);\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;