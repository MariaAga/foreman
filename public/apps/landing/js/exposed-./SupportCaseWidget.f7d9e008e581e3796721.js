(self["webpackChunklanding"] = self["webpackChunklanding"] || []).push([["exposed-./SupportCaseWidget"],{

/***/ "./node_modules/@patternfly/react-component-groups/dist/esm/SkeletonTable/SkeletonTable.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-component-groups/dist/esm/SkeletonTable/SkeletonTable.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Tr.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Td.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Table.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Caption.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Thead.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Th.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Tbody.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/components/Skeleton/Skeleton.js");



function hasCustomColumns(props) {
    return Array.isArray(props.columns);
}
const SkeletonTable = (props) => {
    const { variant, rows = 5, caption } = props;
    const rowCells = hasCustomColumns(props) ? props.columns.length : props.numberOfColumns;
    const rowArray = [...new Array(rowCells)];
    const bodyRows = [...new Array(rows)].map((_, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__.Tr, { key: index }, rowArray.map((_, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__.Td, { key: index },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Skeleton, null)))))));
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.Table, { "aria-label": "Loading", variant: variant },
        caption && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Caption, null, caption),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.Thead, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__.Tr, null, hasCustomColumns(props)
                ? props.columns.map((c, index) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__.Th, { key: index }, c))
                : rowArray.map((_, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__.Th, { key: index },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Skeleton, null)))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_8__.Tbody, null, bodyRows)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonTable);


/***/ }),

/***/ "./node_modules/@patternfly/react-component-groups/dist/esm/SkeletonTable/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-component-groups/dist/esm/SkeletonTable/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkeletonTable: () => (/* reexport safe */ _SkeletonTable__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (/* reexport safe */ _SkeletonTable__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _SkeletonTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SkeletonTable */ "./node_modules/@patternfly/react-component-groups/dist/esm/SkeletonTable/SkeletonTable.js");




/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/esm/components/Skeleton/Skeleton.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/esm/components/Skeleton/Skeleton.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Skeleton: () => (/* binding */ Skeleton)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_styles_css_components_Skeleton_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-styles/css/components/Skeleton/skeleton */ "./node_modules/@patternfly/react-styles/css/components/Skeleton/skeleton.mjs");
/* harmony import */ var _patternfly_react_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");




const Skeleton = (_a) => {
    var { className, width, height, fontSize, shape, screenreaderText } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["className", "width", "height", "fontSize", "shape", "screenreaderText"]);
    const fontHeightClassName = fontSize
        ? Object.values(_patternfly_react_styles_css_components_Skeleton_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"].modifiers).find((key) => key === `pf-m-text-${fontSize}`)
        : undefined;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", Object.assign({}, props, { className: (0,_patternfly_react_styles__WEBPACK_IMPORTED_MODULE_3__.css)(_patternfly_react_styles_css_components_Skeleton_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"].skeleton, fontSize && fontHeightClassName, shape === 'circle' && _patternfly_react_styles_css_components_Skeleton_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"].modifiers.circle, shape === 'square' && _patternfly_react_styles_css_components_Skeleton_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"].modifiers.square, className) }, ((width || height) && {
        style: Object.assign({ '--pf-v5-c-skeleton--Width': width ? width : undefined, '--pf-v5-c-skeleton--Height': height ? height : undefined }, props.style)
    })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "pf-v5-screen-reader" }, screenreaderText)));
};
Skeleton.displayName = 'Skeleton';
//# sourceMappingURL=Skeleton.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-styles/css/components/Skeleton/skeleton.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-styles/css/components/Skeleton/skeleton.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _skeleton_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skeleton.css */ "?e4ee");
/* harmony import */ var _skeleton_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_skeleton_css__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "dirRtl": "pf-v5-m-dir-rtl",
  "modifiers": {
    "circle": "pf-m-circle",
    "square": "pf-m-square",
    "widthSm": "pf-m-width-sm",
    "widthMd": "pf-m-width-md",
    "widthLg": "pf-m-width-lg",
    "width_25": "pf-m-width-25",
    "width_33": "pf-m-width-33",
    "width_50": "pf-m-width-50",
    "width_66": "pf-m-width-66",
    "width_75": "pf-m-width-75",
    "heightSm": "pf-m-height-sm",
    "heightMd": "pf-m-height-md",
    "heightLg": "pf-m-height-lg",
    "height_25": "pf-m-height-25",
    "height_33": "pf-m-height-33",
    "height_50": "pf-m-height-50",
    "height_66": "pf-m-height-66",
    "height_75": "pf-m-height-75",
    "height_100": "pf-m-height-100",
    "text_4xl": "pf-m-text-4xl",
    "text_3xl": "pf-m-text-3xl",
    "text_2xl": "pf-m-text-2xl",
    "textXl": "pf-m-text-xl",
    "textLg": "pf-m-text-lg",
    "textMd": "pf-m-text-md",
    "textSm": "pf-m-text-sm"
  },
  "skeleton": "pf-v5-c-skeleton",
  "themeDark": "pf-v5-theme-dark"
});

/***/ }),

/***/ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Caption.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@patternfly/react-table/dist/esm/components/Table/Caption.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Caption: () => (/* binding */ Caption)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_styles_css_components_Table_table_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-styles/css/components/Table/table.mjs */ "./node_modules/@patternfly/react-styles/css/components/Table/table.mjs");
/* harmony import */ var _patternfly_react_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");




const Caption = (_a) => {
    var { children, className } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "className"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("caption", Object.assign({ className: (0,_patternfly_react_styles__WEBPACK_IMPORTED_MODULE_2__.css)(_patternfly_react_styles_css_components_Table_table_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].tableCaption, className) }, props), children));
};
Caption.displayName = 'Caption';
//# sourceMappingURL=Caption.js.map

/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/useChrome/useChrome.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/useChrome/useChrome.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/components/widgets/support-case-table-filter.tsx":
/*!**************************************************************!*\
  !*** ./src/components/widgets/support-case-table-filter.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportCaseWidgetTableFilter: () => (/* binding */ SupportCaseWidgetTableFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Toolbar */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Toolbar/@patternfly/react-core/dist/dynamic/components/Toolbar");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/MenuToggle */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/MenuToggle/@patternfly/react-core/dist/dynamic/components/MenuToggle");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Select */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Select/@patternfly/react-core/dist/dynamic/components/Select");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_filter_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/filter-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/filter-icon/@patternfly/react-icons/dist/dynamic/icons/filter-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_filter_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_dynamic_icons_filter_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_consts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/consts */ "./src/utils/consts.tsx");






const SupportCaseWidgetTableFilter = () => {
    const [isSeverityExpanded, setIsSeverityExpanded] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
    const [isStatusExpanded, setIsStatusExpanded] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
    const [filters, setFilters] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
        severity: [],
        status: [],
    });
    const onSelect = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback((type, event, value) => {
        if (!event || typeof value !== 'string') {
            return;
        }
        const checked = event.target.checked;
        setFilters((prev) => {
            const prevSelections = prev[type] || [];
            return {
                ...prev,
                [type]: checked
                    ? [...prevSelections, value]
                    : prevSelections.filter((v) => v !== v),
            };
        });
    }, []);
    const onSeveritySelect = (event, value) => {
        onSelect('severity', event, value);
    };
    const onStatusSelect = (event, value) => {
        onSelect('status', event, value);
    };
    const onDelete = (type, id) => {
        const filterTypes = {
            severity: filters.severity.filter((fil) => fil !== id),
            status: filters.status.filter((fil) => fil !== id),
        };
        setFilters({
            severity: type === 'Severity' ? filterTypes[type] : filters.severity,
            status: type === 'Status' ? filterTypes[type] : filters.status,
        });
    };
    const onDeleteGroup = (type) => {
        const newFilters = {
            severity: type === 'Severity' ? [] : filters.severity,
            status: type === 'Status' ? [] : filters.status,
        };
        setFilters(newFilters);
    };
    const onSeverityToggle = () => {
        setIsSeverityExpanded(!isSeverityExpanded);
    };
    const onStatusToggle = () => {
        setIsStatusExpanded(!isStatusExpanded);
    };
    const statusVariants = [
        _utils_consts__WEBPACK_IMPORTED_MODULE_5__.statusTypes.closed,
        _utils_consts__WEBPACK_IMPORTED_MODULE_5__.statusTypes.customerWaiting,
        _utils_consts__WEBPACK_IMPORTED_MODULE_5__.statusTypes.redHatWaiting,
    ];
    const severityVariants = [
        _utils_consts__WEBPACK_IMPORTED_MODULE_5__.severityTypes.high,
        _utils_consts__WEBPACK_IMPORTED_MODULE_5__.severityTypes.low,
        _utils_consts__WEBPACK_IMPORTED_MODULE_5__.severityTypes.normal,
        _utils_consts__WEBPACK_IMPORTED_MODULE_5__.severityTypes.urgent,
    ];
    const statusMenuItems = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__.SelectList, null, statusVariants.map((statusType) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__.SelectOption, { hasCheckbox: true, key: statusType, value: statusType, isSelected: filters.status.includes(statusType) }, statusType)))));
    const severityMenuItems = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__.SelectList, null, severityVariants.map((severityType) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__.SelectOption, { hasCheckbox: true, key: severityType, value: severityType, isSelected: filters.severity.includes(severityType) }, severityType)))));
    const toggleGroupItems = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, { variant: "filter-group" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_1__.ToolbarFilter, { chips: filters.severity, deleteChip: (category, chip) => onDelete(category, chip), deleteChipGroup: (category) => onDeleteGroup(category), categoryName: "Severity" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__.Select, { "aria-label": "Severity", role: "menu", toggle: (toggleRef) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_2__.MenuToggle, { ref: toggleRef, onClick: onSeverityToggle, isExpanded: isSeverityExpanded, style: {
                            width: '140px',
                        } }, "Severity")), onSelect: (event, value) => onSeveritySelect(event, value), selected: filters.severity, isOpen: isSeverityExpanded, onOpenChange: (isOpen) => setIsSeverityExpanded(isOpen) }, severityMenuItems)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_1__.ToolbarFilter, { chips: filters.status, deleteChip: (category, chip) => onDelete(category, chip), deleteChipGroup: (category) => onDeleteGroup(category), categoryName: "Status" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__.Select, { "aria-label": "Status", role: "menu", toggle: (toggleRef) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_2__.MenuToggle, { ref: toggleRef, onClick: onStatusToggle, isExpanded: isStatusExpanded, style: {
                            width: '140px',
                        } }, "Status")), onSelect: (event, value) => onStatusSelect(event, value), selected: filters.status, isOpen: isStatusExpanded, onOpenChange: (isOpen) => setIsStatusExpanded(isOpen) }, statusMenuItems)))));
    const toolbarItems = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_1__.ToolbarToggleGroup, { toggleIcon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_patternfly_react_icons_dist_dynamic_icons_filter_icon__WEBPACK_IMPORTED_MODULE_4___default()), null), breakpoint: "xl" }, toggleGroupItems)));
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_1__.Toolbar, { id: "toolbar-with-filter", className: "pf-m-toggle-group-container", collapseListedFiltersBreakpoint: "xl" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_1__.ToolbarContent, null, toolbarItems)));
};


/***/ }),

/***/ "./src/components/widgets/support-case-widget.scss":
/*!*********************************************************!*\
  !*** ./src/components/widgets/support-case-widget.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/widgets/support-case-widget.tsx":
/*!********************************************************!*\
  !*** ./src/components/widgets/support-case-widget.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/SortColumn.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Table.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/TableTypes.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Thead.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Tr.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Th.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Tbody.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Td.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button?210c");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/EmptyState */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/EmptyState/@patternfly/react-core/dist/dynamic/components/EmptyState");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Stack */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Stack/@patternfly/react-core/dist/dynamic/layouts/Stack");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Title */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Title/@patternfly/react-core/dist/dynamic/components/Title");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/external-link-alt-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/external-link-alt-icon/@patternfly/react-icons/dist/dynamic/icons/external-link-alt-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_dynamic_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_headset_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/headset-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/headset-icon/@patternfly/react-icons/dist/dynamic/icons/headset-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_headset_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_dynamic_icons_headset_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redhat_cloud_services_frontend_components_useChrome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/useChrome */ "./node_modules/@redhat-cloud-services/frontend-components/esm/useChrome/useChrome.js");
/* harmony import */ var _patternfly_react_component_groups_dist_dynamic_SkeletonTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-component-groups/dist/dynamic/SkeletonTable */ "./node_modules/@patternfly/react-component-groups/dist/esm/SkeletonTable/index.js");
/* harmony import */ var _utils_consts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/consts */ "./src/utils/consts.tsx");
/* harmony import */ var _support_case_widget_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./support-case-widget.scss */ "./src/components/widgets/support-case-widget.scss");
/* harmony import */ var _support_case_table_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./support-case-table-filter */ "./src/components/widgets/support-case-table-filter.tsx");

















const SUPPORT_CASE_URL = 'https://access.redhat.com/support/cases/#/case/new/get-support?caseCreate=true';
const SupportCaseWidget = () => {
    const [cases, setCases] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const chrome = (0,_redhat_cloud_services_frontend_components_useChrome__WEBPACK_IMPORTED_MODULE_11__["default"])();
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        index: 0,
        direction: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_12__.SortByDirection.asc,
    });
    const columns = [
        {
            name: 'Case ID',
            sort: (a, b) => a.caseNumber.localeCompare(b.caseNumber),
        },
        {
            name: 'Issue summary',
            sort: (a, b) => a.summary.localeCompare(b.summary),
        },
        {
            name: 'Modified by',
            sort: (a, b) => a.lastModifiedById.localeCompare(b.lastModifiedById),
        },
        {
            name: 'Severity',
            sort: (a, b) => a.severity.localeCompare(b.severity),
        },
        {
            name: 'Status',
            sort: (a, b) => a.status.localeCompare(b.status),
        },
    ];
    const onSort = (_event, index, direction) => {
        setSortBy({ index, direction });
        const sortedCases = [...cases].sort((a, b) => {
            const sortFunc = columns[index].sort;
            if (direction === _patternfly_react_table__WEBPACK_IMPORTED_MODULE_12__.SortByDirection.asc) {
                return sortFunc(a, b);
            }
            else {
                return sortFunc(b, a);
            }
        });
        setCases([...sortedCases]);
    };
    const fetchSupportCases = async () => {
        const token = await chrome.auth.getToken();
        const user = await chrome.auth.getUser();
        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                createdBySSOName: `${user?.identity.user?.username}`,
            }),
        };
        try {
            const response = await fetch((0,_utils_consts__WEBPACK_IMPORTED_MODULE_8__.getUrl)(chrome.getEnvironment()), options);
            const { cases } = await response.json();
            setCases(cases || []);
            setIsLoading(false);
        }
        catch (error) {
            console.error('Unable to fetch support cases', error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setIsLoading(true);
        fetchSupportCases();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isLoading ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_component_groups_dist_dynamic_SkeletonTable__WEBPACK_IMPORTED_MODULE_7__["default"], { rows: 3, columns: [
            _utils_consts__WEBPACK_IMPORTED_MODULE_8__.columnNames.caseId,
            _utils_consts__WEBPACK_IMPORTED_MODULE_8__.columnNames.issueSummary,
            _utils_consts__WEBPACK_IMPORTED_MODULE_8__.columnNames.modifiedBy,
            _utils_consts__WEBPACK_IMPORTED_MODULE_8__.columnNames.severity,
            _utils_consts__WEBPACK_IMPORTED_MODULE_8__.columnNames.status,
        ] })) : cases.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_2__.EmptyState, { variant: _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_2__.EmptyStateVariant.lg },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_2__.EmptyStateIcon, { icon: (_patternfly_react_icons_dist_dynamic_icons_headset_icon__WEBPACK_IMPORTED_MODULE_6___default()) }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_4__.Title, { headingLevel: "h4", size: "lg" }, "No open support cases"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_2__.EmptyStateBody, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_3__.Stack, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_3__.StackItem, null, "We can't find any active support cases opened by you."))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "link", icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_patternfly_react_icons_dist_dynamic_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_5___default()), null), iconPosition: "end", href: SUPPORT_CASE_URL, onClick: () => {
                window.open(SUPPORT_CASE_URL, '_blank');
            } }, "Open a support case"))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__.Table, { "aria-label": "Support case table widget", variant: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_14__.TableVariant.compact },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__.Thead, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_support_case_table_filter__WEBPACK_IMPORTED_MODULE_10__.SupportCaseWidgetTableFilter, null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_16__.Tr, null, columns.map((col, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_17__.Th, { key: index, sort: {
                        sortBy,
                        onSort,
                        columnIndex: index,
                    } }, col.name)))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_18__.Tbody, null, cases?.slice(0, _utils_consts__WEBPACK_IMPORTED_MODULE_8__.MAX_ROWS).map((c) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_16__.Tr, { key: c.id },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_19__.Td, { dataLabel: _utils_consts__WEBPACK_IMPORTED_MODULE_8__.columnNames.caseId },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, { className: "pf-v5-u-pl-0", variant: "link", icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_patternfly_react_icons_dist_dynamic_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_5___default()), null), iconPosition: "end", component: "a", href: `https://access.redhat.com/support/cases/#/case/${c.caseNumber}` }, c.caseNumber)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_19__.Td, { dataLabel: _utils_consts__WEBPACK_IMPORTED_MODULE_8__.columnNames.issueSummary }, c.summary),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_19__.Td, { dataLabel: _utils_consts__WEBPACK_IMPORTED_MODULE_8__.columnNames.modifiedBy }, c.lastModifiedById),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_19__.Td, { dataLabel: _utils_consts__WEBPACK_IMPORTED_MODULE_8__.columnNames.severity }, (0,_utils_consts__WEBPACK_IMPORTED_MODULE_8__.labelColor)(c.severity)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_19__.Td, { dataLabel: _utils_consts__WEBPACK_IMPORTED_MODULE_8__.columnNames.status }, c.status)))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SupportCaseWidget);


/***/ }),

/***/ "./src/utils/consts.tsx":
/*!******************************!*\
  !*** ./src/utils/consts.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAX_ROWS: () => (/* binding */ MAX_ROWS),
/* harmony export */   columnNames: () => (/* binding */ columnNames),
/* harmony export */   getUrl: () => (/* binding */ getUrl),
/* harmony export */   labelColor: () => (/* binding */ labelColor),
/* harmony export */   severityTypes: () => (/* binding */ severityTypes),
/* harmony export */   statusTypes: () => (/* binding */ statusTypes)
/* harmony export */ });
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Label */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Label/@patternfly/react-core/dist/dynamic/components/Label");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// for the support cases widget
const getUrl = (env) => `https://api.access${env === 'stage' || env === 'frhStage' ? '.stage' : ''}.redhat.com/support/v1/cases/filter`;
const MAX_ROWS = 5;
const columnNames = {
    caseId: 'Case ID',
    issueSummary: 'Issue summary',
    modifiedBy: 'Modified by',
    severity: 'Severity',
    status: 'Status',
};
const severityTypes = {
    urgent: '1 (Urgent)',
    high: '2 (High)',
    normal: '3 (Normal)',
    low: '4 (Low)',
};
const statusTypes = {
    closed: 'Closed',
    customerWaiting: 'Waiting on Customer',
    redHatWaiting: 'Waiting on Red Hat',
};
const labelColor = (severity) => {
    const severityMapper = {
        [severityTypes.urgent]: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_0__.Label, { color: "red" }, severity),
        [severityTypes.high]: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_0__.Label, { color: "orange" }, severity),
        [severityTypes.normal]: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_0__.Label, { color: "blue" }, severity),
        [severityTypes.low]: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_0__.Label, { color: "grey" }, severity),
    };
    return severityMapper[severity] ?? '';
};


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

/***/ }),

/***/ "?e4ee":
/*!********************************!*\
  !*** ./skeleton.css (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=../../sourcemaps/exposed-./SupportCaseWidget.d1c897f0ab7d0d0a110dce2a09cdce94.js.map