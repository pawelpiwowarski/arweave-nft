"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./configureWarpClient.js":
/*!********************************!*\
  !*** ./configureWarpClient.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var warp_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warp-contracts */ \"./node_modules/warp-contracts/lib/cjs/index.js\");\n/* harmony import */ var warp_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warp_contracts__WEBPACK_IMPORTED_MODULE_0__);\n\nconst transactionId = \"o9u_KYD5-Tn-VRmeNAic0kdFqrLLz0bYgMu9COr7Gk0\";\nlet warp;\nlet contract;\nasync function getContract() {\n    warp = warp_contracts__WEBPACK_IMPORTED_MODULE_0__.WarpFactory.forMainnet();\n    // obtain the signature from the user who is using ArConnect wallet\n    await window.arweaveWallet.connect([\n        \"ACCESS_ADDRESS\",\n        \"SIGN_TRANSACTION\",\n        \"SIGNATURE\"\n    ]);\n    contract = warp.contract(transactionId).connect(\"use_wallet\");\n    console.log(\"contract\", contract);\n    return {\n        transactionId,\n        contract\n    };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getContract);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWd1cmVXYXJwQ2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUE2QztBQUU3QyxNQUFNQyxnQkFBZ0I7QUFFdEIsSUFBSUM7QUFDSixJQUFJQztBQUVKLGVBQWVDLGNBQWM7SUFDM0JGLE9BQU9GLGtFQUFzQjtJQUU3QixtRUFBbUU7SUFFbkUsTUFBTU0sT0FBT0MsYUFBYSxDQUFDQyxPQUFPLENBQUM7UUFDakM7UUFDQTtRQUNBO0tBQ0Q7SUFFREwsV0FBV0QsS0FBS0MsUUFBUSxDQUFDRixlQUFlTyxPQUFPLENBQUM7SUFFaERDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZUDtJQUN4QixPQUFPO1FBQUVGO1FBQWVFO0lBQVM7QUFDbkM7QUFFQSwrREFBZUMsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25maWd1cmVXYXJwQ2xpZW50LmpzPzRhMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2FycEZhY3RvcnkgfSBmcm9tIFwid2FycC1jb250cmFjdHNcIjtcblxuY29uc3QgdHJhbnNhY3Rpb25JZCA9IFwibzl1X0tZRDUtVG4tVlJtZU5BaWMwa2RGcXJMTHowYllnTXU5Q09yN0drMFwiO1xuXG5sZXQgd2FycDtcbmxldCBjb250cmFjdDtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29udHJhY3QoKSB7XG4gIHdhcnAgPSBXYXJwRmFjdG9yeS5mb3JNYWlubmV0KCk7XG5cbiAgLy8gb2J0YWluIHRoZSBzaWduYXR1cmUgZnJvbSB0aGUgdXNlciB3aG8gaXMgdXNpbmcgQXJDb25uZWN0IHdhbGxldFxuXG4gIGF3YWl0IHdpbmRvdy5hcndlYXZlV2FsbGV0LmNvbm5lY3QoW1xuICAgIFwiQUNDRVNTX0FERFJFU1NcIixcbiAgICBcIlNJR05fVFJBTlNBQ1RJT05cIixcbiAgICBcIlNJR05BVFVSRVwiLFxuICBdKTtcblxuICBjb250cmFjdCA9IHdhcnAuY29udHJhY3QodHJhbnNhY3Rpb25JZCkuY29ubmVjdChcInVzZV93YWxsZXRcIik7XG5cbiAgY29uc29sZS5sb2coXCJjb250cmFjdFwiLCBjb250cmFjdCk7XG4gIHJldHVybiB7IHRyYW5zYWN0aW9uSWQsIGNvbnRyYWN0IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvbnRyYWN0O1xuIl0sIm5hbWVzIjpbIldhcnBGYWN0b3J5IiwidHJhbnNhY3Rpb25JZCIsIndhcnAiLCJjb250cmFjdCIsImdldENvbnRyYWN0IiwiZm9yTWFpbm5ldCIsIndpbmRvdyIsImFyd2VhdmVXYWxsZXQiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./configureWarpClient.js\n"));

/***/ })

});