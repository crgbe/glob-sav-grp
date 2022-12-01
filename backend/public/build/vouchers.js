"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["vouchers"],{

/***/ "./assets/router.js":
/*!**************************!*\
  !*** ./assets/router.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./assets/vouchers/js/vouchers.js":
/*!****************************************!*\
  !*** ./assets/vouchers/js/vouchers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _vouchers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../vouchers */ "./assets/vouchers/vouchers.vue");


(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_vouchers__WEBPACK_IMPORTED_MODULE_1__["default"]).mount('#app');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vouchers/vouchers.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vouchers/vouchers.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../router */ "./assets/router.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "vouchers",
  data: function data() {
    return {
      'name': "Credo"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vouchers/vouchers.vue?vue&type=template&id=30d5895e":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vouchers/vouchers.vue?vue&type=template&id=30d5895e ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("h1", null, "Hello App!", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("router-link");
  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("router-view");
  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("h1", null, "Is this thing working " + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)($data.name) + "?", 1 /* TEXT */), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(" use the router-link component for navigation. "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(" specify the link by passing the `to` prop. "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(" `<router-link>` will render an `<a>` tag with the correct `href` attribute "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_router_link, {
    to: "/"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_1__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)("Go to Home")];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_router_link, {
    to: "/about"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_1__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)("Go to About")];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(" route outlet "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(" component matched by the route will render here "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_router_view)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./assets/vouchers/vouchers.vue":
/*!**************************************!*\
  !*** ./assets/vouchers/vouchers.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vouchers_vue_vue_type_template_id_30d5895e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vouchers.vue?vue&type=template&id=30d5895e */ "./assets/vouchers/vouchers.vue?vue&type=template&id=30d5895e");
/* harmony import */ var _vouchers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vouchers.vue?vue&type=script&lang=js */ "./assets/vouchers/vouchers.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_vouchers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_vouchers_vue_vue_type_template_id_30d5895e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/vouchers/vouchers.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/vouchers/vouchers.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./assets/vouchers/vouchers.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_vouchers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_vouchers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vouchers.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vouchers/vouchers.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/vouchers/vouchers.vue?vue&type=template&id=30d5895e":
/*!********************************************************************!*\
  !*** ./assets/vouchers/vouchers.vue?vue&type=template&id=30d5895e ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_vouchers_vue_vue_type_template_id_30d5895e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_vouchers_vue_vue_type_template_id_30d5895e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vouchers.vue?vue&type=template&id=30d5895e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vouchers/vouchers.vue?vue&type=template&id=30d5895e");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_function-name_js-node_modules_core-js_internals_object-792382","vendors-node_modules_core-js_modules_es_function_name_js-node_modules_vue-loader_dist_exportH-259f7e"], () => (__webpack_exec__("./assets/vouchers/js/vouchers.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm91Y2hlcnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXFCO0FBQ1U7QUFFL0JBLCtDQUFPLENBQUNDLGtEQUFNLENBQUM7QUFFZixpRUFBZUUsTUFBTTs7Ozs7Ozs7Ozs7OztBQ0xVO0FBQ0E7QUFFL0JDLDhDQUFTLENBQUNDLGlEQUFHLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDY0c7QUFFL0IsaUVBQWU7RUFDWEMsSUFBSSxFQUFFLFVBQVU7RUFDaEJDLElBQUksa0JBQUc7SUFDSCxPQUFPO01BQ0gsTUFBTSxFQUFFO0lBQ1o7RUFDSjtBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBdkJHQyx1REFBQUEsQ0FBbUIsWUFBZixZQUFVOzs7OztxS0FGZEEsdURBQUFBLENBQTBDLFlBQXRDLHdCQUFzQix3REFBR0MsVUFBSSxJQUFHLEdBQUMsaUJBRXJDQyxVQUFtQixFQUNuQkYsdURBQUFBLENBTUksWUFMQUcsdURBQUFBLG1EQUFzRCxFQUN0REEsdURBQUFBLGdEQUFtRCxFQUNuREEsdURBQUFBLGdGQUFtRixFQUNuRkMsZ0RBQUFBLENBQTRDQztJQUEvQkMsRUFBRSxFQUFDO0VBQUc7NERBQUM7TUFBQSxPQUFVLHNEQUFWLFlBQVU7OztNQUM5QkYsZ0RBQUFBLENBQWtEQztJQUFyQ0MsRUFBRSxFQUFDO0VBQVE7NERBQUM7TUFBQSxPQUFXLHNEQUFYLGFBQVc7OztRQUV4Q0gsdURBQUFBLGtCQUFxQixFQUNyQkEsdURBQUFBLHFEQUF3RCxFQUN4REMsZ0RBQUFBLENBQTJCRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnNDO0FBQ1Y7QUFDTDs7QUFFdEQsQ0FBd0Y7QUFDeEYsaUNBQWlDLHNHQUFlLENBQUMsNkVBQU0sYUFBYSwrRUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUN0QndMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdm91Y2hlcnMvanMvdm91Y2hlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZvdWNoZXJzL3ZvdWNoZXJzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdm91Y2hlcnMvdm91Y2hlcnMudnVlP2EyZTMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZvdWNoZXJzL3ZvdWNoZXJzLnZ1ZT85YWYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFJvdXRlciBmcm9tICd2dWUtcm91dGVyJ1xuXG5WdWUudXNlKFJvdXRlcilcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyIiwiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJ1xuaW1wb3J0IEFwcCBmcm9tICcuLy4uL3ZvdWNoZXJzJ1xuXG5jcmVhdGVBcHAoQXBwKS5tb3VudCgnI2FwcCcpIiwiPHRlbXBsYXRlPlxuICAgIDxoMT5JcyB0aGlzIHRoaW5nIHdvcmtpbmcge3sgbmFtZSB9fT88L2gxPlxuICAgIFxuICAgIDxoMT5IZWxsbyBBcHAhPC9oMT5cbiAgICA8cD5cbiAgICAgICAgPCEtLSB1c2UgdGhlIHJvdXRlci1saW5rIGNvbXBvbmVudCBmb3IgbmF2aWdhdGlvbi4gLS0+XG4gICAgICAgIDwhLS0gc3BlY2lmeSB0aGUgbGluayBieSBwYXNzaW5nIHRoZSBgdG9gIHByb3AuIC0tPlxuICAgICAgICA8IS0tIGA8cm91dGVyLWxpbms+YCB3aWxsIHJlbmRlciBhbiBgPGE+YCB0YWcgd2l0aCB0aGUgY29ycmVjdCBgaHJlZmAgYXR0cmlidXRlIC0tPlxuICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvXCI+R28gdG8gSG9tZTwvcm91dGVyLWxpbms+XG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9hYm91dFwiPkdvIHRvIEFib3V0PC9yb3V0ZXItbGluaz5cbiAgICA8L3A+XG4gICAgPCEtLSByb3V0ZSBvdXRsZXQgLS0+XG4gICAgPCEtLSBjb21wb25lbnQgbWF0Y2hlZCBieSB0aGUgcm91dGUgd2lsbCByZW5kZXIgaGVyZSAtLT5cbiAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vLi4vcm91dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJ2b3VjaGVyc1wiLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnbmFtZSc6IFwiQ3JlZG9cIlxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vdm91Y2hlcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwZDU4OTVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdm91Y2hlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZvdWNoZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi92YXIvd3d3L2h0bWwvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy92b3VjaGVycy92b3VjaGVycy52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMzBkNTg5NWVcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczMGQ1ODk1ZScsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzMwZDU4OTVlJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi92b3VjaGVycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzBkNTg5NWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMzBkNTg5NWUnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3ZvdWNoZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3ZvdWNoZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIl0sIm5hbWVzIjpbIlZ1ZSIsIlJvdXRlciIsInVzZSIsInJvdXRlciIsImNyZWF0ZUFwcCIsIkFwcCIsIm1vdW50IiwibmFtZSIsImRhdGEiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiJGRhdGEiLCJfaG9pc3RlZF8xIiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl9jb21wb25lbnRfcm91dGVyX2xpbmsiLCJ0byIsIl9jb21wb25lbnRfcm91dGVyX3ZpZXciXSwic291cmNlUm9vdCI6IiJ9