"use strict";
(self["webpackChunklanding"] = self["webpackChunklanding"] || []).push([["exposed-./RecentlyVisited"],{

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/useChrome/useChrome.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/useChrome/useChrome.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scalprum/react-core */ "webpack/sharing/consume/default/@scalprum/react-core");
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scalprum_react_core__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var useChrome = function (selector) {
    var _a;
    var state = (0,_scalprum_react_core__WEBPACK_IMPORTED_MODULE_0__.useScalprum)();
    var chrome = ((_a = state.api) === null || _a === void 0 ? void 0 : _a.chrome) || {};
    chrome = __assign(__assign({}, chrome), { initialized: state.initialized });
    if (typeof selector === 'function') {
        return selector(chrome);
    }
    return chrome;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useChrome);
//# sourceMappingURL=useChrome.js.map

/***/ }),

/***/ "./src/components/widgets/recently-visited.scss":
/*!******************************************************!*\
  !*** ./src/components/widgets/recently-visited.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/widgets/recently-visited.tsx":
/*!*****************************************************!*\
  !*** ./src/components/widgets/recently-visited.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Text */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Text/@patternfly/react-core/dist/dynamic/components/Text?3756");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Gallery */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Gallery/@patternfly/react-core/dist/dynamic/layouts/Gallery");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redhat_cloud_services_chrome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/chrome */ "webpack/sharing/consume/default/@redhat-cloud-services/chrome");
/* harmony import */ var _redhat_cloud_services_chrome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_chrome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redhat_cloud_services_frontend_components_useChrome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/useChrome */ "./node_modules/@redhat-cloud-services/frontend-components/esm/useChrome/useChrome.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _recently_visited_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recently-visited.scss */ "./src/components/widgets/recently-visited.scss");







const LinkWrapper = ({ pathname, title, }) => {
    const { updateDocumentTitle } = (0,_redhat_cloud_services_frontend_components_useChrome__WEBPACK_IMPORTED_MODULE_6__["default"])();
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, { onClick: () => updateDocumentTitle(title), to: pathname }, title));
};
const RecentlyVisited = () => {
    const lastVisited = (0,_redhat_cloud_services_chrome__WEBPACK_IMPORTED_MODULE_3__.useLastVisited)();
    const lastVisitedData = lastVisited.slice(0, 10);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_1__.Gallery, { hasGutter: true, className: "widget-recently-visited pf-v5-u-m-md" }, lastVisitedData.map(({ bundle, pathname, title }, index) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, { key: index },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_0__.TextContent, null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(LinkWrapper, { title: title, pathname: pathname }),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_0__.Text, { component: _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_0__.TextVariants.small }, bundle)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecentlyVisited);


/***/ })

}]);
//# sourceMappingURL=../../sourcemaps/exposed-./RecentlyVisited.e19f2012e900c2f04b976e07c41c1f56.js.map