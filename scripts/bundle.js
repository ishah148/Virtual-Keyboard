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

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ (() => {

eval("/* eslint-disable*/\r\n// document.addEventListener('keyup',showThis)\r\n// document.addEventListener('keydown',showThis) // for symbols\r\ndocument.addEventListener('keypress',showThis) // for Shift,CTRL\r\n\r\n\r\n\r\n\r\nconst global = {\r\n    isShift:false,\r\n    isCtrl:false,\r\n    language:\"ru\",\r\n}\r\n\r\nconst elems = {\r\n    keyboard: document.querySelector('.keyboard'),\r\n    getKeys: function (){\r\n        return document.querySelectorAll('.keyboard *')\r\n    },\r\n}\r\n\r\nconst keyboard = new Keyboard('en')\r\n\r\n// const temp11 = new Key('Digit1', 'standart-key', {\r\n//     order: 0,\r\n//     code: 'Digit1',\r\n//     en: {\r\n//         extraValue: '!',\r\n//         mainValue: '1'\r\n//     },\r\n//     ru: {\r\n//         extraValue: '!',\r\n//         mainValue: '1'\r\n//     },\r\n//     size: 'standart-key'\r\n// })\r\n\r\nfunction showThis(event){\r\n    console.log(event.code);\r\n}\r\n\r\nfunction removeKeys(){\r\n    elems.getKeys().forEach(i => i.remove())\r\n}\r\n\r\n// keys.\r\n\r\nfunction redrawKeyboard(){\r\n    removeKeys()\r\n    // TODO drawKeyboard() or init()\r\n}\n\n//# sourceURL=webpack://keyboard/./scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/index.js"]();
/******/ 	
/******/ })()
;