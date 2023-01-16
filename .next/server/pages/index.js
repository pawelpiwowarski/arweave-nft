"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./configureWarpClient.js":
/*!********************************!*\
  !*** ./configureWarpClient.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var warp_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warp-contracts */ \"warp-contracts\");\n/* harmony import */ var warp_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warp_contracts__WEBPACK_IMPORTED_MODULE_0__);\n\nconst transactionId = \"o9u_KYD5-Tn-VRmeNAic0kdFqrLLz0bYgMu9COr7Gk0\";\nlet warp;\nlet contract;\nasync function getContract() {\n    warp = warp_contracts__WEBPACK_IMPORTED_MODULE_0__.WarpFactory.forMainnet();\n    // obtain the signature from the user who is using ArConnect wallet\n    await window.arweaveWallet.connect([\n        \"ACCESS_ADDRESS\",\n        \"SIGN_TRANSACTION\",\n        \"SIGNATURE\"\n    ]);\n    contract = warp.contract(transactionId).connect(\"use_wallet\");\n    console.log(\"contract\", contract);\n    return {\n        transactionId,\n        contract\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getContract);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWd1cmVXYXJwQ2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyxnQkFBZ0I7QUFFdEIsSUFBSUM7QUFDSixJQUFJQztBQUVKLGVBQWVDLGNBQWM7SUFDM0JGLE9BQU9GLGtFQUFzQjtJQUU3QixtRUFBbUU7SUFFbkUsTUFBTU0sT0FBT0MsYUFBYSxDQUFDQyxPQUFPLENBQUM7UUFDakM7UUFDQTtRQUNBO0tBQ0Q7SUFFREwsV0FBV0QsS0FBS0MsUUFBUSxDQUFDRixlQUFlTyxPQUFPLENBQUM7SUFFaERDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZUDtJQUN4QixPQUFPO1FBQUVGO1FBQWVFO0lBQVM7QUFDbkM7QUFFQSxpRUFBZUMsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fyd2FldmUtbmZ0Ly4vY29uZmlndXJlV2FycENsaWVudC5qcz80YTAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdhcnBGYWN0b3J5IH0gZnJvbSBcIndhcnAtY29udHJhY3RzXCI7XG5cbmNvbnN0IHRyYW5zYWN0aW9uSWQgPSBcIm85dV9LWUQ1LVRuLVZSbWVOQWljMGtkRnFyTEx6MGJZZ011OUNPcjdHazBcIjtcblxubGV0IHdhcnA7XG5sZXQgY29udHJhY3Q7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENvbnRyYWN0KCkge1xuICB3YXJwID0gV2FycEZhY3RvcnkuZm9yTWFpbm5ldCgpO1xuXG4gIC8vIG9idGFpbiB0aGUgc2lnbmF0dXJlIGZyb20gdGhlIHVzZXIgd2hvIGlzIHVzaW5nIEFyQ29ubmVjdCB3YWxsZXRcblxuICBhd2FpdCB3aW5kb3cuYXJ3ZWF2ZVdhbGxldC5jb25uZWN0KFtcbiAgICBcIkFDQ0VTU19BRERSRVNTXCIsXG4gICAgXCJTSUdOX1RSQU5TQUNUSU9OXCIsXG4gICAgXCJTSUdOQVRVUkVcIixcbiAgXSk7XG5cbiAgY29udHJhY3QgPSB3YXJwLmNvbnRyYWN0KHRyYW5zYWN0aW9uSWQpLmNvbm5lY3QoXCJ1c2Vfd2FsbGV0XCIpO1xuXG4gIGNvbnNvbGUubG9nKFwiY29udHJhY3RcIiwgY29udHJhY3QpO1xuICByZXR1cm4geyB0cmFuc2FjdGlvbklkLCBjb250cmFjdCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDb250cmFjdDtcbiJdLCJuYW1lcyI6WyJXYXJwRmFjdG9yeSIsInRyYW5zYWN0aW9uSWQiLCJ3YXJwIiwiY29udHJhY3QiLCJnZXRDb250cmFjdCIsImZvck1haW5uZXQiLCJ3aW5kb3ciLCJhcndlYXZlV2FsbGV0IiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./configureWarpClient.js\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _configureWarpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configureWarpClient */ \"./configureWarpClient.js\");\n\n\n\nfunction HomePage() {\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [img, setImg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    async function handleLogin() {\n        const { transactionId , contract  } = await (0,_configureWarpClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        setImg(`https://arweave.net/${transactionId}`);\n        setAddress(await window.arweaveWallet.getActiveAddress());\n    }\n    return(// center the button\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLogin,\n                    children: \"Show Info\"\n                }, void 0, false, {\n                    fileName: \"/Users/pawelpiwowarski/Arweave/arwaeve-nft/pages/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, this),\n                address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"Address: \",\n                        address\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pawelpiwowarski/Arweave/arwaeve-nft/pages/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 20\n                }, this),\n                img && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: img\n                }, void 0, false, {\n                    fileName: \"/Users/pawelpiwowarski/Arweave/arwaeve-nft/pages/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 16\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/pawelpiwowarski/Arweave/arwaeve-nft/pages/index.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/pawelpiwowarski/Arweave/arwaeve-nft/pages/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 7\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFDZTtBQUVoRCxTQUFTRSxXQUFXO0lBQ25CLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBZ0IsSUFBSTtJQUMzRCxNQUFNLENBQUNLLEtBQUtDLE9BQU8sR0FBR04sK0NBQVFBLENBQWdCLElBQUk7SUFDaEQsZUFBZU8sY0FBYztRQUUzQixNQUFNLEVBQUNDLGNBQWEsRUFBRUMsU0FBUSxFQUFDLEdBQUcsTUFBTVIsZ0VBQVdBO1FBRW5ESyxPQUFPLENBQUMsb0JBQW9CLEVBQUVFLGNBQWMsQ0FBQztRQUU3Q0osV0FBVyxNQUFNTSxPQUFPQyxhQUFhLENBQUNDLGdCQUFnQjtJQUd4RDtJQUVBLE9BRUksb0JBQW9CO2tCQUNwQiw4REFBQ0M7UUFBSUMsT0FBTztZQUFDQyxTQUFTO1lBQVFDLGdCQUFnQjtRQUFRO2tCQUd0RCw0RUFBQ0g7OzhCQUNLLDhEQUFDSTtvQkFBT0MsU0FBU1g7OEJBQWE7Ozs7OztnQkFFbENKLHlCQUFXLDhEQUFDZ0I7O3dCQUFHO3dCQUFVaEI7Ozs7Ozs7Z0JBQ3pCRSxxQkFBTyw4REFBQ0E7b0JBQUllLEtBQUtmOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QjtBQUVBLGlFQUFlSCxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJ3YWV2ZS1uZnQvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdldENvbnRyYWN0IGZyb20gJy4uL2NvbmZpZ3VyZVdhcnBDbGllbnQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuY29uc3QgW2ltZywgc2V0SW1nXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVMb2dpbigpIHtcblxuICAgIGNvbnN0IHt0cmFuc2FjdGlvbklkLCBjb250cmFjdH0gPSBhd2FpdCBnZXRDb250cmFjdCgpO1xuXG4gICAgc2V0SW1nKGBodHRwczovL2Fyd2VhdmUubmV0LyR7dHJhbnNhY3Rpb25JZH1gKVxuICAgIFxuICAgIHNldEFkZHJlc3MoYXdhaXQgd2luZG93LmFyd2VhdmVXYWxsZXQuZ2V0QWN0aXZlQWRkcmVzcygpKTtcblxuXG4gIH1cblxuICByZXR1cm4gKFxuXG4gICAgICAvLyBjZW50ZXIgdGhlIGJ1dHRvblxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInfX0+XG4gICAgICBcbiAgICAgIFxuICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9naW59PlNob3cgSW5mbzwvYnV0dG9uPlxuXG4gICAgICB7IGFkZHJlc3MgJiYgPGgxPkFkZHJlc3M6IHthZGRyZXNzfTwvaDE+fVxuICAgICAgeyBpbWcgJiYgPGltZyBzcmM9e2ltZ30gLz59XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZ2V0Q29udHJhY3QiLCJIb21lUGFnZSIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwiaW1nIiwic2V0SW1nIiwiaGFuZGxlTG9naW4iLCJ0cmFuc2FjdGlvbklkIiwiY29udHJhY3QiLCJ3aW5kb3ciLCJhcndlYXZlV2FsbGV0IiwiZ2V0QWN0aXZlQWRkcmVzcyIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYnV0dG9uIiwib25DbGljayIsImgxIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "warp-contracts":
/*!*********************************!*\
  !*** external "warp-contracts" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("warp-contracts");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();