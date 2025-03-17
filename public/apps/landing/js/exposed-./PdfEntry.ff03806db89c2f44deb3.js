(self["webpackChunklanding"] = self["webpackChunklanding"] || []).push([["exposed-./PdfEntry"],{

/***/ "./src/moduleEntries/PdfEntry.tsx":
/*!****************************************!*\
  !*** ./src/moduleEntries/PdfEntry.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fetchData: () => (/* binding */ fetchData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Table.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Thead.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Tr.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Th.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Tbody.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Td.js");
/* eslint-disable @typescript-eslint/ban-ts-comment */


const fetchData = async (createAsyncRequest) => {
    const requestGenerated = createAsyncRequest('chrome-service', {
        method: 'GET',
        url: '/api/chrome-service/v1/static/beta/stage/services/services-generated.json',
    });
    const requestStatic = createAsyncRequest('chrome-service', {
        method: 'GET',
        url: '/api/chrome-service/v1/static/beta/stage/services/services.json',
    });
    const requestWithAuth = createAsyncRequest('chrome-service', {
        method: 'GET',
        url: '/api/chrome-service/v1/user',
    });
    const data = await Promise.all([
        requestGenerated,
        requestStatic,
        requestWithAuth,
    ]);
    return data;
};
const PdfEntry = ({ asyncData, }) => {
    const { data } = asyncData;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Services"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "pf-v5-u-m-xl" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__.Table, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__.Thead, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__.Tr, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.Th, null, "ID"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.Th, null, "Description"))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Tbody, null, data.slice(0, 2).map((service, i) => service.map((row, h) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__.Tr, { key: `${i}-${h}` },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.Td, null, row?.id),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.Td, null, row.description))))))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "user data?!"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", null, JSON.stringify(data[2], null, 2))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PdfEntry);


/***/ }),

/***/ "?06bf":
/*!***********************************!*\
  !*** ./menu-toggle.css (ignored) ***!
  \***********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?0f3c":
/*!*****************************!*\
  !*** ./table.css (ignored) ***!
  \*****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?2d3a":
/*!***************************************!*\
  !*** ./table-tree-view.css (ignored) ***!
  \***************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?3421":
/*!*****************************!*\
  !*** ./check.css (ignored) ***!
  \*****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?446c":
/*!**********************************!*\
  !*** ./table-grid.css (ignored) ***!
  \**********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?50cd":
/*!**********************************!*\
  !*** ./breadcrumb.css (ignored) ***!
  \**********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?650f":
/*!*******************************!*\
  !*** ./spinner.css (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?91f5":
/*!***************************************************************************!*\
  !*** @patternfly/react-styles/css/components/Popper/Popper.css (ignored) ***!
  \***************************************************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?9754":
/*!********************************!*\
  !*** ./dropdown.css (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?9cc8":
/*!****************************!*\
  !*** ./menu.css (ignored) ***!
  \****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?9d45":
/*!*******************************!*\
  !*** ./divider.css (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?afff":
/*!*******************************!*\
  !*** ./tooltip.css (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?b296":
/*!*******************************!*\
  !*** ./popover.css (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c5e4":
/*!***********************************!*\
  !*** ./inline-edit.css (ignored) ***!
  \***********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?cf22":
/*!*****************************!*\
  !*** ./badge.css (ignored) ***!
  \*****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?d031":
/*!******************************!*\
  !*** ./button.css (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?df0d":
/*!****************************************!*\
  !*** ./table-scrollable.css (ignored) ***!
  \****************************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=../../sourcemaps/exposed-./PdfEntry.dae4d52b7e1637449516fceda4caac4d.js.map