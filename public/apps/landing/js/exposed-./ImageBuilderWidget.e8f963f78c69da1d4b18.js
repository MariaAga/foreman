"use strict";
(self["webpackChunklanding"] = self["webpackChunklanding"] || []).push([["exposed-./ImageBuilderWidget"],{

/***/ "./node_modules/@patternfly/react-icons/dist/js/createIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@patternfly/react-icons/dist/js/createIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createIcon = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
let currentId = 0;
/**
 * Factory to create Icon class components for consumers
 */
function createIcon({ name, xOffset = 0, yOffset = 0, width, height, svgPath }) {
    var _a;
    return _a = class SVGIcon extends React.Component {
            constructor() {
                super(...arguments);
                this.id = `icon-title-${currentId++}`;
            }
            render() {
                const _a = this.props, { title, className } = _a, props = tslib_1.__rest(_a, ["title", "className"]);
                const classes = className ? `pf-v5-svg ${className}` : 'pf-v5-svg';
                const hasTitle = Boolean(title);
                const viewBox = [xOffset, yOffset, width, height].join(' ');
                return (React.createElement("svg", Object.assign({ className: classes, viewBox: viewBox, fill: "currentColor", "aria-labelledby": hasTitle ? this.id : null, "aria-hidden": hasTitle ? null : true, role: "img", width: "1em", height: "1em" }, props),
                    hasTitle && React.createElement("title", { id: this.id }, title),
                    React.createElement("path", { d: svgPath })));
            }
        },
        _a.displayName = name,
        _a;
}
exports.createIcon = createIcon;
//# sourceMappingURL=createIcon.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-icons/dist/js/icons/arrow-right-icon.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@patternfly/react-icons/dist/js/icons/arrow-right-icon.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.ArrowRightIconConfig = {
  name: 'ArrowRightIcon',
  height: 512,
  width: 448,
  svgPath: 'M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z',
  yOffset: 0,
  xOffset: 0,
};
exports.ArrowRightIcon = (__webpack_require__(/*! ../createIcon */ "./node_modules/@patternfly/react-icons/dist/js/createIcon.js").createIcon)(exports.ArrowRightIconConfig);
exports["default"] = exports.ArrowRightIcon;

/***/ }),

/***/ "./node_modules/@patternfly/react-icons/dist/js/icons/external-link-alt-icon.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-icons/dist/js/icons/external-link-alt-icon.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.ExternalLinkAltIconConfig = {
  name: 'ExternalLinkAltIcon',
  height: 512,
  width: 512,
  svgPath: 'M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z',
  yOffset: 0,
  xOffset: 0,
};
exports.ExternalLinkAltIcon = (__webpack_require__(/*! ../createIcon */ "./node_modules/@patternfly/react-icons/dist/js/createIcon.js").createIcon)(exports.ExternalLinkAltIconConfig);
exports["default"] = exports.ExternalLinkAltIcon;

/***/ }),

/***/ "./src/components/widgets/image-builder-widget.tsx":
/*!*********************************************************!*\
  !*** ./src/components/widgets/image-builder-widget.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _simple_service_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-service-widget */ "./src/components/widgets/simple-service-widget.tsx");


const ImageBuilderWidget = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_simple_service_widget__WEBPACK_IMPORTED_MODULE_1__.SimpleServiceWidget, { id: 3, body: "Create customized system images for disks, VMs, and cloud platforms. Image Builder automates configurations, saving you time and ensuring consistent, deployment-ready images every time.", linkTitle: "Images", url: "/insights/image-builder" })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageBuilderWidget);


/***/ }),

/***/ "./src/components/widgets/simple-service-widget.scss":
/*!***********************************************************!*\
  !*** ./src/components/widgets/simple-service-widget.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/widgets/simple-service-widget.tsx":
/*!**********************************************************!*\
  !*** ./src/components/widgets/simple-service-widget.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleServiceWidget: () => (/* binding */ SimpleServiceWidget)
/* harmony export */ });
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Card */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Card/@patternfly/react-core/dist/dynamic/components/Card?4c06");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Icon */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Icon/@patternfly/react-core/dist/dynamic/components/Icon");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Text */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Text/@patternfly/react-core/dist/dynamic/components/Text?3756");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/arrow-right-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/arrow-right-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/external-link-alt-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/external-link-alt-icon.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _simple_service_widget_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simple-service-widget.scss */ "./src/components/widgets/simple-service-widget.scss");










const SimpleServiceWidget = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_0__.Card, { isPlain: true },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_0__.CardBody, { className: "pf-v5-u-p-md" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3__.TextContent, { key: props.id, className: "pf-v5-u-display-flex pf-v5-u-flex-direction-column" },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3__.Text, { component: "p", className: "pf-v5-u-flex-grow-1" },
                        props.body,
                        ' '))),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_0__.CardFooter, { className: "pf-v5-u-p-md" }, props.isExternal ? (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { href: props.url },
                props.linkTitle,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_1__.Icon, { className: "pf-v5-u-ml-sm", isInline: true },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_icons_dist_js_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_6__["default"], null)))) : (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, { to: props.url },
                props.linkTitle,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_1__.Icon, { className: "pf-v5-u-ml-sm", isInline: true },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_icons_dist_js_icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_7__["default"], null))))))));
};


/***/ })

}]);
//# sourceMappingURL=../../sourcemaps/exposed-./ImageBuilderWidget.b15e50dca1a245af52470b1d77482de0.js.map