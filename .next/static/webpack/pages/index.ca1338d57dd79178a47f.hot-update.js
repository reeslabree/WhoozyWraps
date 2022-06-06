webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/core-feature.js":
/*!**************************************!*\
  !*** ./src/sections/core-feature.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CoreFeature; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/text-feature */ \"./src/components/text-feature.js\");\nvar _jsxFileName = \"/Users/willhuynh/Documents/Development/Personal Projects/WhoozyWraps/src/sections/core-feature.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\nvar data = {\n  subTitle: 'Why wrap a car?',\n  title: 'Versatility and Economical ',\n  description: 'Explore our brands and the benefits of wrapping your car.',\n  btnName: 'Learn more',\n  btnURL: '#'\n};\nfunction CoreFeature() {\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"section\", {\n    sx: {\n      variant: 'section.coreFeature'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 4\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    sx: styles.containerBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.contentBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_text_feature__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    subTitle: data.subTitle,\n    title: data.title,\n    description: data.description,\n    btnName: data.btnName,\n    btnURL: data.btnURL,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"video\", {\n    sx: {\n      variant: 'section.coreFeature'\n    },\n    autoPlay: true,\n    loop: true,\n    muted: true,\n    height: 300,\n    width: 600,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"source\", {\n    src: \"/SPTruck.mp4\",\n    type: \"video/mp4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }))));\n}\n_c = CoreFeature;\nvar styles = {\n  containerBox: {\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'space-between',\n    flexWrap: ['wrap', null, null, 'nowrap'],\n    pb: [0, 7, 0, null, 7] //fontFamily: 'text',\n\n  },\n  contentBox: {\n    flexShrink: 0,\n    px: [0, null, '30px', 0],\n    textAlign: ['center', null, null, 'left'],\n    width: ['100%', '80%', null, 340, 400, 430, null, 485],\n    pb: ['50px', '60px', null, 0],\n    mx: ['auto', null, null, 0],\n    '.description': {\n      pr: [0, null, 6, 7, 6],\n      fontFamily: 'text'\n    }\n  },\n  thumbnail: {\n    display: 'inline-flex',\n    position: 'relative',\n    mr: 'auto',\n    ml: ['auto', null, null, null, 7],\n    '> img': {\n      position: 'relative',\n      zIndex: 1,\n      height: [310, 'auto']\n    }\n  },\n  shapeBox: {\n    position: 'absolute',\n    bottom: -65,\n    right: -165,\n    zIndex: -1,\n    display: ['none', 'inline-block', 'none', null, 'inline-block']\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"CoreFeature\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvcmUtZmVhdHVyZS5qcz82YjFmIl0sIm5hbWVzIjpbImRhdGEiLCJzdWJUaXRsZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJidG5OYW1lIiwiYnRuVVJMIiwiQ29yZUZlYXR1cmUiLCJ2YXJpYW50Iiwic3R5bGVzIiwiY29udGFpbmVyQm94IiwiY29udGVudEJveCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsInBiIiwiZmxleFNocmluayIsInB4IiwidGV4dEFsaWduIiwid2lkdGgiLCJteCIsInByIiwiZm9udEZhbWlseSIsInRodW1ibmFpbCIsInBvc2l0aW9uIiwibXIiLCJtbCIsInpJbmRleCIsImhlaWdodCIsInNoYXBlQm94IiwiYm90dG9tIiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsVUFBUSxFQUFFLGlCQURDO0FBRVhDLE9BQUssRUFBRSw2QkFGSTtBQUdYQyxhQUFXLEVBQ1QsMkRBSlM7QUFLWEMsU0FBTyxFQUFFLFlBTEU7QUFNWEMsUUFBTSxFQUFFO0FBTkcsQ0FBYjtBQVNlLFNBQVNDLFdBQVQsR0FBdUI7QUFDcEMsU0FDQztBQUFTLE1BQUUsRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBVixLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxxREFBQyxrREFBRDtBQUFXLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0UsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLCtEQUFEO0FBQ0UsWUFBUSxFQUFFVixJQUFJLENBQUNDLFFBRGpCO0FBRUUsU0FBSyxFQUFFRCxJQUFJLENBQUNFLEtBRmQ7QUFHRSxlQUFXLEVBQUVGLElBQUksQ0FBQ0csV0FIcEI7QUFJRSxXQUFPLEVBQUVILElBQUksQ0FBQ0ksT0FKaEI7QUFLRSxVQUFNLEVBQUVKLElBQUksQ0FBQ0ssTUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVVFO0FBQU8sTUFBRSxFQUFFO0FBQUNFLGFBQU8sRUFBRTtBQUFWLEtBQVg7QUFDQSxZQUFRLE1BRFI7QUFFQSxRQUFJLE1BRko7QUFHQSxTQUFLLE1BSEw7QUFJQSxVQUFNLEVBQUUsR0FKUjtBQUtBLFNBQUssRUFBRSxHQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPSTtBQUFRLE9BQUcsRUFBQyxjQUFaO0FBQTJCLFFBQUksRUFBQyxXQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosQ0FWRixDQURELENBREQ7QUF3QkQ7S0F6QnVCRCxXO0FBMkJ4QixJQUFNRSxNQUFNLEdBQUc7QUFDYkMsY0FBWSxFQUFFO0FBQ1pFLFdBQU8sRUFBRSxNQURHO0FBRVpDLGNBQVUsRUFBRSxRQUZBO0FBR1pDLGtCQUFjLEVBQUUsZUFISjtBQUlaQyxZQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsUUFBckIsQ0FKRTtBQUtaQyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxJQUFWLEVBQWdCLENBQWhCLENBTFEsQ0FNWjs7QUFOWSxHQUREO0FBU2JMLFlBQVUsRUFBRTtBQUNWTSxjQUFVLEVBQUUsQ0FERjtBQUVWQyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLE1BQVYsRUFBa0IsQ0FBbEIsQ0FGTTtBQUdWQyxhQUFTLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QixNQUF2QixDQUhEO0FBSVZDLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLElBQWhCLEVBQXNCLEdBQXRCLEVBQTJCLEdBQTNCLEVBQWdDLEdBQWhDLEVBQXFDLElBQXJDLEVBQTJDLEdBQTNDLENBSkc7QUFLVkosTUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsSUFBakIsRUFBdUIsQ0FBdkIsQ0FMTTtBQU1WSyxNQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsQ0FBckIsQ0FOTTtBQU9WLG9CQUFnQjtBQUNkQyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBRFU7QUFFZEMsZ0JBQVUsRUFBRTtBQUZFO0FBUE4sR0FUQztBQXFCYkMsV0FBUyxFQUFFO0FBQ1RaLFdBQU8sRUFBRSxhQURBO0FBRVRhLFlBQVEsRUFBRSxVQUZEO0FBR1RDLE1BQUUsRUFBRSxNQUhLO0FBSVRDLE1BQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQixDQUpLO0FBS1QsYUFBUztBQUNQRixjQUFRLEVBQUUsVUFESDtBQUVQRyxZQUFNLEVBQUUsQ0FGRDtBQUdQQyxZQUFNLEVBQUUsQ0FBQyxHQUFELEVBQU0sTUFBTjtBQUhEO0FBTEEsR0FyQkU7QUFnQ2JDLFVBQVEsRUFBRTtBQUNSTCxZQUFRLEVBQUUsVUFERjtBQUVSTSxVQUFNLEVBQUUsQ0FBQyxFQUZEO0FBR1JDLFNBQUssRUFBRSxDQUFDLEdBSEE7QUFJUkosVUFBTSxFQUFFLENBQUMsQ0FKRDtBQUtSaEIsV0FBTyxFQUFFLENBQUMsTUFBRCxFQUFTLGNBQVQsRUFBeUIsTUFBekIsRUFBaUMsSUFBakMsRUFBdUMsY0FBdkM7QUFMRDtBQWhDRyxDQUFmIiwiZmlsZSI6Ii4vc3JjL3NlY3Rpb25zL2NvcmUtZmVhdHVyZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xuXG5jb25zdCBkYXRhID0ge1xuICBzdWJUaXRsZTogJ1doeSB3cmFwIGEgY2FyPycsXG4gIHRpdGxlOiAnVmVyc2F0aWxpdHkgYW5kIEVjb25vbWljYWwgJyxcbiAgZGVzY3JpcHRpb246XG4gICAgJ0V4cGxvcmUgb3VyIGJyYW5kcyBhbmQgdGhlIGJlbmVmaXRzIG9mIHdyYXBwaW5nIHlvdXIgY2FyLicsXG4gIGJ0bk5hbWU6ICdMZWFybiBtb3JlJyxcbiAgYnRuVVJMOiAnIycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3JlRmVhdHVyZSgpIHtcbiAgcmV0dXJuIChcbiAgIDxzZWN0aW9uIHN4PXt7dmFyaWFudDogJ3NlY3Rpb24uY29yZUZlYXR1cmUnfX0+XG4gICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XG4gICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudEJveH0+XG4gICAgICAgIDxUZXh0RmVhdHVyZSBcbiAgICAgICAgICBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX1cbiAgICAgICAgICB0aXRsZT17ZGF0YS50aXRsZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17ZGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBidG5OYW1lPXtkYXRhLmJ0bk5hbWV9XG4gICAgICAgICAgYnRuVVJMPXtkYXRhLmJ0blVSTH1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgICAgPHZpZGVvIHN4PXt7dmFyaWFudDogJ3NlY3Rpb24uY29yZUZlYXR1cmUnfX0gXG4gICAgICBhdXRvUGxheSBcbiAgICAgIGxvb3AgXG4gICAgICBtdXRlZFxuICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICB3aWR0aD17NjAwfVxuICAgICAgPlxuICAgICAgICAgIDxzb3VyY2Ugc3JjPScvU1BUcnVjay5tcDQnIHR5cGU9J3ZpZGVvL21wNCcvPlxuICAgICAgPC92aWRlbz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXJCb3g6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBmbGV4V3JhcDogWyd3cmFwJywgbnVsbCwgbnVsbCwgJ25vd3JhcCddLFxuICAgIHBiOiBbMCwgNywgMCwgbnVsbCwgN10sXG4gICAgLy9mb250RmFtaWx5OiAndGV4dCcsXG4gIH0sXG4gIGNvbnRlbnRCb3g6IHtcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIHB4OiBbMCwgbnVsbCwgJzMwcHgnLCAwXSxcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsIG51bGwsIDM0MCwgNDAwLCA0MzAsIG51bGwsIDQ4NV0sXG4gICAgcGI6IFsnNTBweCcsICc2MHB4JywgbnVsbCwgMF0sXG4gICAgbXg6IFsnYXV0bycsIG51bGwsIG51bGwsIDBdLFxuICAgICcuZGVzY3JpcHRpb24nOiB7XG4gICAgICBwcjogWzAsIG51bGwsIDYsIDcsIDZdLFxuICAgICAgZm9udEZhbWlseTogJ3RleHQnLFxuICAgIH0sXG4gIH0sXG4gIHRodW1ibmFpbDoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgbXI6ICdhdXRvJyxcbiAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgN10sXG4gICAgJz4gaW1nJzoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBoZWlnaHQ6IFszMTAsICdhdXRvJ10sXG4gICAgfSxcbiAgfSxcbiAgc2hhcGVCb3g6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IC02NSxcbiAgICByaWdodDogLTE2NSxcbiAgICB6SW5kZXg6IC0xLFxuICAgIGRpc3BsYXk6IFsnbm9uZScsICdpbmxpbmUtYmxvY2snLCAnbm9uZScsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/core-feature.js\n");

/***/ })

})