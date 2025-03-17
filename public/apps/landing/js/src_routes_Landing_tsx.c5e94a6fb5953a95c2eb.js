"use strict";
(self["webpackChunklanding"] = self["webpackChunklanding"] || []).push([["src_routes_Landing_tsx"],{

/***/ "./src/routes/Landing.tsx":
/*!********************************!*\
  !*** ./src/routes/Landing.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @unleash/proxy-client-react */ "webpack/sharing/consume/default/@unleash/proxy-client-react/@unleash/proxy-client-react");
/* harmony import */ var _unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scalprum/react-core */ "webpack/sharing/consume/default/@scalprum/react-core");
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scalprum_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redhat_cloud_services_frontend_components_useChrome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/useChrome */ "./node_modules/@redhat-cloud-services/frontend-components/esm/useChrome/useChrome.js");




const Landing = ({ layoutType }) => {
    const scope = 'widgetLayout';
    const { isBeta } = (0,_redhat_cloud_services_frontend_components_useChrome__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const widgetLayoutLandingPageEnabled = (isBeta() && (0,_unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_1__.useFlag)('platform.landing-page.widgetization')) ||
        (!isBeta() && (0,_unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_1__.useFlag)('platform.landing-page.widgetization-stable'));
    const props = {
        ...(layoutType && { layoutType: layoutType }),
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, widgetLayoutLandingPageEnabled ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_scalprum_react_core__WEBPACK_IMPORTED_MODULE_2__.ScalprumComponent, { fallback: null, LoadingComponent: () => react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), scope: scope, module: "./WidgetLayout", ...props })) : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);


/***/ })

}]);
//# sourceMappingURL=../sourcemaps/src_routes_Landing_tsx.99a4b3d91945c3a3790b34cc496cd5e1.js.map