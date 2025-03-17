"use strict";
(self["webpackChunklanding"] = self["webpackChunklanding"] || []).push([["exposed-./ExploreCapabilities"],{

/***/ "./src/components/widgets/explore-capabilities.scss":
/*!**********************************************************!*\
  !*** ./src/components/widgets/explore-capabilities.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/widgets/explore-capabilities.tsx":
/*!*********************************************************!*\
  !*** ./src/components/widgets/explore-capabilities.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Card */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Card/@patternfly/react-core/dist/dynamic/components/Card?4c06");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Gallery */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Gallery/@patternfly/react-core/dist/dynamic/layouts/Gallery");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Text */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Text/@patternfly/react-core/dist/dynamic/components/Text?3756");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _explore_capabilities_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-capabilities.scss */ "./src/components/widgets/explore-capabilities.scss");






const ExploreCapabilities = () => {
    const cardData = [
        {
            id: 'card1',
            img: '/apps/frontend-assets/console-landing/widget-explore/logo_hat-only.svg',
            title: 'Get started with a tour',
            body: "Take a quick guided tour to understand how the Red Hat Hybrid Cloud Console's capabilities will increase your efficiency.",
            ouiaId: 'start-guided-tour-button',
            url: '',
        },
        {
            id: 'card2',
            img: '/apps/frontend-assets/console-landing/widget-explore/Logo-Red_Hat-AWS-A-Standard-RGB.svg',
            title: 'Try OpenShift on AWS',
            body: 'Quickly build, deploy, and scale applications with Red Hat OpenShift Service on AWS (ROSA), our fully-managed turnkey application platform.',
            ouiaId: 'try-rosa-button',
            url: '/openshift/overview/rosa',
        },
        {
            id: 'card3',
            img: '/apps/frontend-assets/console-landing/widget-explore/Logo-Red_Hat-Developer-A-Standard-RGB.svg',
            title: 'Try our products in the Developer Sandbox',
            body: 'The Developer Sandbox offers no-cost access to Red Hat products and technologies for trial use—no setup or configuration necessary.',
            ouiaId: 'explore-sandbox-button',
            url: '/openshift/sandbox',
        },
        {
            id: 'card4',
            img: '/apps/frontend-assets/console-landing/widget-explore/Explore_Insights-analyze.svg',
            title: 'Analyze RHEL environments',
            body: 'Analyze platforms and applications from the console to better manage your hybrid cloud environments.',
            ouiaId: 'analyze-risk-button',
            url: '/insights/dashboard#SIDs=&tags=',
        },
        {
            id: 'card5',
            img: '/apps/frontend-assets/console-landing/widget-explore/Explore_CentOS-to-RHEL.svg',
            title: 'Convert from CentOS to RHEL',
            body: 'CentOS Linux 7 has reached End of Life (EOL). Prep your systems from conversion from CentOS to RHEL.',
            ouiaId: 'cent-os-button',
            url: '/insights/tasks/available/convert-to-rhel-analysis?quickstart=insights-tasks-pre-conversion',
        },
    ];
    const cardContent = cardData.map((cardData) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: cardData.id, className: "pf-v5-u-m-0" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, { to: cardData.url },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_1__.Card, { isFullHeight: true, isFlat: true },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_1__.CardBody, { className: "pf-v5-u-p-md pf-v5-u-text-align-center land-c-card__body-explore" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "pf-v5-u-justify-content-center", src: cardData.img }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3__.TextContent, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3__.Text, { component: "p", className: "pf-v5-u-mb-0 pf-v5-u-font-size-sm" }, cardData.title),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3__.Text, { component: "small", className: "pf-v5-u-font-size-xs" }, cardData.body)))))))));
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_2__.Gallery, { className: "widget-explore pf-v5-u-p-md" }, cardContent)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExploreCapabilities);


/***/ })

}]);
//# sourceMappingURL=../../sourcemaps/exposed-./ExploreCapabilities.db42f324560296a9558b5e34a59c1fd4.js.map