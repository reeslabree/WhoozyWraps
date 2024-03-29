webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/team-section.js":
/*!**************************************!*\
  !*** ./src/sections/team-section.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_team_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/team-card */ "./src/components/team-card.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/team/member-1.png */ "./src/assets/team/member-1.png");
/* harmony import */ var assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/team/member-2.png */ "./src/assets/team/member-2.png");
/* harmony import */ var assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Will's Gaming PC\\Documents\\Development\\WhoozyWraps\\src\\sections\\team-section.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






 // import Member3 from 'assets/team/member-3.png';
// import Member4 from 'assets/team/member-4.png';
// import Member5 from 'assets/team/member-5.png';
// import Member6 from 'assets/team/member-6.png';

var data = [{
  id: 1,
  imgSrc: assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'Ethan Phamvan',
  title: 'Ethan Phamvan',
  designation: 'CEO and Founder',
  socialProfile: [{
    id: 1,
    name: 'facebook',
    path: 'https://www.facebook.com/WhoozysWraps',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }
    })
  }, {
    id: 2,
    name: 'instagram',
    path: 'https://www.instagram.com/whoozys_wraps/?hl=en',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    })
  }]
}, {
  id: 2,
  imgSrc: assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Andrew Chum',
  title: 'Adrew Chum',
  designation: 'Installer',
  socialProfile: [{
    id: 1,
    name: 'facebook',
    path: 'https://www.facebook.com/proninjaperv',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    })
  }, {
    id: 2,
    name: 'instagram',
    path: 'https://www.instagram.com/proninjaperv/',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    })
  }]
} // {
//   id: 3,
//   imgSrc: Member2,
//   altText: 'Andrew Chum',
//   title: 'Adrew Chum',
//   designation: 'Installer',
//   socialProfile: [
//     {
//       id: 1,
//       name: 'facebook',
//       path: 'https://www.facebook.com/proninjaperv',
//       icon: <FaFacebookF />,
//     },
//     {
//       id: 2,
//       name: 'instagram',
//       path: 'https://www.instagram.com/proninjaperv/',
//       icon: <FaInstagram />,
//     },
//   ],
// },
];
function TeamSection() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Meet the team",
    title: "Our talented individuals",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_team_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      src: item.imgSrc,
      altText: item.altText,
      title: item.title,
      designation: item.designation,
      social: item.socialProfile,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 15
      }
    });
  }))));
}
_c = TeamSection;
var styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: ['repeat(2,1fr)', null, 'repeat(2,1fr)', null // 'repeat(3,1fr)',
    ]
  }
};

var _c;

$RefreshReg$(_c, "TeamSection");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3RlYW0tc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJpbWdTcmMiLCJNZW1iZXIxIiwiYWx0VGV4dCIsInRpdGxlIiwiZGVzaWduYXRpb24iLCJzb2NpYWxQcm9maWxlIiwibmFtZSIsInBhdGgiLCJpY29uIiwiTWVtYmVyMiIsIlRlYW1TZWN0aW9uIiwic3R5bGVzIiwiZ3JpZCIsIm1hcCIsIml0ZW0iLCJtdCIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFQywrREFGVjtBQUdFQyxTQUFPLEVBQUUsZUFIWDtBQUlFQyxPQUFLLEVBQUUsZUFKVDtBQUtFQyxhQUFXLEVBQUUsaUJBTGY7QUFNRUMsZUFBYSxFQUFFLENBQ2I7QUFDRU4sTUFBRSxFQUFFLENBRE47QUFFRU8sUUFBSSxFQUFFLFVBRlI7QUFHRUMsUUFBSSxFQUFFLHVDQUhSO0FBSUVDLFFBQUksRUFBRSxxREFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlIsR0FEYSxFQU9iO0FBQ0VULE1BQUUsRUFBRSxDQUROO0FBRUVPLFFBQUksRUFBRSxXQUZSO0FBR0VDLFFBQUksRUFBRSxnREFIUjtBQUlFQyxRQUFJLEVBQUUscURBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpSLEdBUGE7QUFOakIsQ0FEVyxFQXNCWDtBQUNFVCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFNLEVBQUVTLCtEQUZWO0FBR0VQLFNBQU8sRUFBRSxhQUhYO0FBSUVDLE9BQUssRUFBRSxZQUpUO0FBS0VDLGFBQVcsRUFBRSxXQUxmO0FBTUVDLGVBQWEsRUFBRSxDQUNiO0FBQ0VOLE1BQUUsRUFBRSxDQUROO0FBRUVPLFFBQUksRUFBRSxVQUZSO0FBR0VDLFFBQUksRUFBRSx1Q0FIUjtBQUlFQyxRQUFJLEVBQUUscURBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpSLEdBRGEsRUFPYjtBQUNFVCxNQUFFLEVBQUUsQ0FETjtBQUVFTyxRQUFJLEVBQUUsV0FGUjtBQUdFQyxRQUFJLEVBQUUseUNBSFI7QUFJRUMsUUFBSSxFQUFFLHFEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKUixHQVBhO0FBTmpCLENBdEJXLENBMkNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9EVyxDQUFiO0FBa0VlLFNBQVNFLFdBQVQsR0FBdUI7QUFBQTs7QUFDcEMsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGlFQUFEO0FBQ0UsVUFBTSxFQUFFLGVBRFY7QUFFRSxTQUFLLEVBQUMsMEJBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0kscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZCxJQUFJLENBQUNlLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsV0FDUixxREFBQyw0REFBRDtBQUNFLFNBQUcsRUFBRUEsSUFBSSxDQUFDZixFQURaO0FBRUUsU0FBRyxFQUFFZSxJQUFJLENBQUNkLE1BRlo7QUFHRSxhQUFPLEVBQUVjLElBQUksQ0FBQ1osT0FIaEI7QUFJRSxXQUFLLEVBQUVZLElBQUksQ0FBQ1gsS0FKZDtBQUtFLGlCQUFXLEVBQUVXLElBQUksQ0FBQ1YsV0FMcEI7QUFNRSxZQUFNLEVBQUVVLElBQUksQ0FBQ1QsYUFOZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFE7QUFBQSxHQUFULENBREgsQ0FMSixDQURGLENBREY7QUF1QkQ7S0F4QnVCSyxXO0FBMEJ4QixJQUFNQyxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFO0FBQ0pHLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBQyxDQUFYLEVBQWMsSUFBZCxFQUFvQixDQUFDLENBQXJCLENBREE7QUFFSkMsV0FBTyxFQUFFLENBQUMsVUFBRCxFQUFhLElBQWIsRUFBbUIsQ0FBbkIsRUFBc0IsSUFBdEIsRUFBNEIsSUFBNUIsRUFBa0MsV0FBbEMsQ0FGTDtBQUdKQyx1QkFBbUIsRUFBRSxDQUNuQixlQURtQixFQUVuQixJQUZtQixFQUduQixlQUhtQixFQUluQixJQUptQixDQUtuQjtBQUxtQjtBQUhqQjtBQURPLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTQ2YjYxZmM1YzZkNmM0ZTFjYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCBUZWFtQ2FyZCBmcm9tICdjb21wb25lbnRzL3RlYW0tY2FyZCc7XHJcbmltcG9ydCB7IEZhRmFjZWJvb2tGLCBGYVR3aXR0ZXIsIEZhSW5zdGFncmFtIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuaW1wb3J0IE1lbWJlcjEgZnJvbSAnYXNzZXRzL3RlYW0vbWVtYmVyLTEucG5nJztcclxuaW1wb3J0IE1lbWJlcjIgZnJvbSAnYXNzZXRzL3RlYW0vbWVtYmVyLTIucG5nJztcclxuLy8gaW1wb3J0IE1lbWJlcjMgZnJvbSAnYXNzZXRzL3RlYW0vbWVtYmVyLTMucG5nJztcclxuLy8gaW1wb3J0IE1lbWJlcjQgZnJvbSAnYXNzZXRzL3RlYW0vbWVtYmVyLTQucG5nJztcclxuLy8gaW1wb3J0IE1lbWJlcjUgZnJvbSAnYXNzZXRzL3RlYW0vbWVtYmVyLTUucG5nJztcclxuLy8gaW1wb3J0IE1lbWJlcjYgZnJvbSAnYXNzZXRzL3RlYW0vbWVtYmVyLTYucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWdTcmM6IE1lbWJlcjEsXHJcbiAgICBhbHRUZXh0OiAnRXRoYW4gUGhhbXZhbicsXHJcbiAgICB0aXRsZTogJ0V0aGFuIFBoYW12YW4nLFxyXG4gICAgZGVzaWduYXRpb246ICdDRU8gYW5kIEZvdW5kZXInLFxyXG4gICAgc29jaWFsUHJvZmlsZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcclxuICAgICAgICBwYXRoOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1dob296eXNXcmFwcycsXHJcbiAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogJ2luc3RhZ3JhbScsXHJcbiAgICAgICAgcGF0aDogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vd2hvb3p5c193cmFwcy8/aGw9ZW4nLFxyXG4gICAgICAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltZ1NyYzogTWVtYmVyMixcclxuICAgIGFsdFRleHQ6ICdBbmRyZXcgQ2h1bScsXHJcbiAgICB0aXRsZTogJ0FkcmV3IENodW0nLFxyXG4gICAgZGVzaWduYXRpb246ICdJbnN0YWxsZXInLFxyXG4gICAgc29jaWFsUHJvZmlsZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcclxuICAgICAgICBwYXRoOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Byb25pbmphcGVydicsXHJcbiAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogJ2luc3RhZ3JhbScsXHJcbiAgICAgICAgcGF0aDogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcHJvbmluamFwZXJ2LycsXHJcbiAgICAgICAgaWNvbjogPEZhSW5zdGFncmFtIC8+LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIC8vIHtcclxuICAvLyAgIGlkOiAzLFxyXG4gIC8vICAgaW1nU3JjOiBNZW1iZXIyLFxyXG4gIC8vICAgYWx0VGV4dDogJ0FuZHJldyBDaHVtJyxcclxuICAvLyAgIHRpdGxlOiAnQWRyZXcgQ2h1bScsXHJcbiAgLy8gICBkZXNpZ25hdGlvbjogJ0luc3RhbGxlcicsXHJcbiAgLy8gICBzb2NpYWxQcm9maWxlOiBbXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICBpZDogMSxcclxuICAvLyAgICAgICBuYW1lOiAnZmFjZWJvb2snLFxyXG4gIC8vICAgICAgIHBhdGg6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vcHJvbmluamFwZXJ2JyxcclxuICAvLyAgICAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICBpZDogMixcclxuICAvLyAgICAgICBuYW1lOiAnaW5zdGFncmFtJyxcclxuICAvLyAgICAgICBwYXRoOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wcm9uaW5qYXBlcnYvJyxcclxuICAvLyAgICAgICBpY29uOiA8RmFJbnN0YWdyYW0gLz4sXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICBdLFxyXG4gIC8vIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFtU2VjdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbiA9XCJNZWV0IHRoZSB0ZWFtXCJcclxuICAgICAgICAgIHRpdGxlPVwiT3VyIHRhbGVudGVkIGluZGl2aWR1YWxzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8VGVhbUNhcmRcclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWdTcmN9XHJcbiAgICAgICAgICAgICAgICBhbHRUZXh0PXtpdGVtLmFsdFRleHR9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgIGRlc2lnbmF0aW9uPXtpdGVtLmRlc2lnbmF0aW9ufVxyXG4gICAgICAgICAgICAgICAgc29jaWFsPXtpdGVtLnNvY2lhbFByb2ZpbGV9XHJcblxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZ3JpZDoge1xyXG4gICAgbXQ6IFswLCBudWxsLCAtNiwgbnVsbCwgLTRdLFxyXG4gICAgZ3JpZEdhcDogWyczNXB4IDBweCcsIG51bGwsIDAsIG51bGwsIG51bGwsICczMHB4IDM1cHgnXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcclxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDIsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIC8vICdyZXBlYXQoMywxZnIpJyxcclxuICAgIF0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==