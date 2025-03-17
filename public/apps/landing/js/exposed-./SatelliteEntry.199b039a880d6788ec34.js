(self["webpackChunklanding"] = self["webpackChunklanding"] || []).push([["exposed-./SatelliteEntry"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionContext: () => (/* binding */ PermissionContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   registry: () => (/* binding */ registry)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_patternfly_utilities_Text_text_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/patternfly/utilities/Text/text.css */ "./node_modules/@patternfly/patternfly/utilities/Text/text.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redhat_cloud_services_frontend_components_useChrome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/useChrome */ "./node_modules/@redhat-cloud-services/frontend-components/esm/useChrome/useChrome.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Bullseye */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Bullseye/@patternfly/react-core/dist/dynamic/layouts/Bullseye");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Spinner */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Spinner/@patternfly/react-core/dist/dynamic/components/Spinner");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_Registry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/Registry */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/Registry/Registry.js");
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-promise-middleware */ "./node_modules/redux-promise-middleware/dist/es/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications_notificationsMiddleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/notificationsMiddleware */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/esm/notificationsMiddleware/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications_NotificationPortal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/NotificationPortal */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/esm/NotificationPortal/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/redux */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/esm/redux/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_10__);














// eslint-disable-next-line @typescript-eslint/no-explicit-any
let registry;
function init(...middleware) {
    registry = (0,_redhat_cloud_services_frontend_components_utilities_Registry__WEBPACK_IMPORTED_MODULE_11__.getRegistry)({}, [
        redux_promise_middleware__WEBPACK_IMPORTED_MODULE_6__["default"],
        (0,_redhat_cloud_services_frontend_components_notifications_notificationsMiddleware__WEBPACK_IMPORTED_MODULE_7__["default"])({ errorDescriptionKey: ['detail', 'stack'] }),
        ...middleware,
    ]);
    return registry;
}
const Landing = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("webpack_sharing_consume_default_unleash_proxy-client-react_unleash_proxy-client-react"), __webpack_require__.e("src_routes_Landing_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./routes/Landing */ "./src/routes/Landing.tsx")));
const Maintenance = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("webpack_sharing_consume_default_patternfly_react-core_dist_dynamic_components_Button_patternf-6c2187"), __webpack_require__.e("webpack_sharing_consume_default_patternfly_react-core_dist_dynamic_components_EmptyState_patt-9259f9"), __webpack_require__.e("src_routes_Maintenance_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./routes/Maintenance */ "./src/routes/Maintenance.tsx")));
const NotFound = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("webpack_sharing_consume_default_patternfly_react-core_dist_dynamic_components_Button_patternf-6c2187"), __webpack_require__.e("webpack_sharing_consume_default_patternfly_react-core_dist_dynamic_components_Title_patternfl-e02308"), __webpack_require__.e("src_routes_404_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./routes/404 */ "./src/routes/404.tsx")));
const routes = {
    landing: '/',
    maintenance: '/maintenance',
};
const PermissionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const App = ({ layoutType }) => {
    const [isOrgAdmin, setIsOrgAdmin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const chrome = (0,_redhat_cloud_services_frontend_components_useChrome__WEBPACK_IMPORTED_MODULE_12__["default"])();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    const { on } = (0,_redhat_cloud_services_frontend_components_useChrome__WEBPACK_IMPORTED_MODULE_12__["default"])();
    chrome?.updateDocumentTitle?.('Hybrid Cloud Console Home', false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        chrome.auth
            .getUser()
            .then((user) => user && setIsOrgAdmin(!!user?.identity?.user?.is_org_admin));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const registry = (0,_redhat_cloud_services_frontend_components_utilities_Registry__WEBPACK_IMPORTED_MODULE_11__.getRegistry)();
        registry.register({
            notifications: _redhat_cloud_services_frontend_components_notifications_redux__WEBPACK_IMPORTED_MODULE_9__.notificationsReducer,
        });
        const unregister = on('APP_NAVIGATION', (event) => navigate(`/${event.navId}`));
        return () => {
            unregister?.();
        };
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, { store: init(...( true ? [(redux_logger__WEBPACK_IMPORTED_MODULE_10___default())] : 0)).getStore() },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PermissionContext.Provider, { value: { isOrgAdmin } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_notifications_NotificationPortal__WEBPACK_IMPORTED_MODULE_8__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_3__.Bullseye, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Spinner__WEBPACK_IMPORTED_MODULE_4__.Spinner, { size: "xl" })) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, { path: routes.landing, element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Landing, { layoutType: layoutType }) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, { path: routes.maintenance, element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Maintenance, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, { path: "*", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NotFound, null) }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/moduleEntries/SatelliteEntry.tsx":
/*!**********************************************!*\
  !*** ./src/moduleEntries/SatelliteEntry.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @unleash/proxy-client-react */ "webpack/sharing/consume/default/@unleash/proxy-client-react/@unleash/proxy-client-react");
/* harmony import */ var _unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./src/App.tsx");



const config = {
    url: `http://localhost:8080/api/featureflags/v0`,
    clientKey: 'proxy-123',
    appName: 'web',
    headerName: 'X-Unleash-Auth',
    refreshInterval: 60000,
    metricsInterval: 120000,
};
const SatelliteEntry = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_1___default()), { config: config },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SatelliteEntry);


/***/ }),

/***/ "?2268":
/*!*****************************!*\
  !*** ./stack.css (ignored) ***!
  \*****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?3eb2":
/*!*****************************!*\
  !*** ./title.css (ignored) ***!
  \*****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?45d7":
/*!***********************************!*\
  !*** ./empty-state.css (ignored) ***!
  \***********************************/
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

/***/ "?95ee":
/*!*******************************!*\
  !*** ./content.css (ignored) ***!
  \*******************************/
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

/***/ "?d94f":
/*!******************************************!*\
  !*** ./expandable-section.css (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=../../sourcemaps/exposed-./SatelliteEntry.e4505855c709f34286ca1f64d97fc262.js.map