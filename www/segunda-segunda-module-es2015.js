(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["segunda-segunda-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/segunda/segunda.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/segunda/segunda.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>segunda</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<h1> {{ argumento }}  </h1>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/segunda/segunda-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/segunda/segunda-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SegundaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegundaPageRoutingModule", function() { return SegundaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _segunda_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./segunda.page */ "./src/app/segunda/segunda.page.ts");




const routes = [
    {
        path: '',
        component: _segunda_page__WEBPACK_IMPORTED_MODULE_3__["SegundaPage"]
    }
];
let SegundaPageRoutingModule = class SegundaPageRoutingModule {
};
SegundaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SegundaPageRoutingModule);



/***/ }),

/***/ "./src/app/segunda/segunda.module.ts":
/*!*******************************************!*\
  !*** ./src/app/segunda/segunda.module.ts ***!
  \*******************************************/
/*! exports provided: SegundaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegundaPageModule", function() { return SegundaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _segunda_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./segunda-routing.module */ "./src/app/segunda/segunda-routing.module.ts");
/* harmony import */ var _segunda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./segunda.page */ "./src/app/segunda/segunda.page.ts");







let SegundaPageModule = class SegundaPageModule {
};
SegundaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _segunda_routing_module__WEBPACK_IMPORTED_MODULE_5__["SegundaPageRoutingModule"]
        ],
        declarations: [_segunda_page__WEBPACK_IMPORTED_MODULE_6__["SegundaPage"]]
    })
], SegundaPageModule);



/***/ }),

/***/ "./src/app/segunda/segunda.page.scss":
/*!*******************************************!*\
  !*** ./src/app/segunda/segunda.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlZ3VuZGEvc2VndW5kYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/segunda/segunda.page.ts":
/*!*****************************************!*\
  !*** ./src/app/segunda/segunda.page.ts ***!
  \*****************************************/
/*! exports provided: SegundaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegundaPage", function() { return SegundaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SegundaPage = class SegundaPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.argumento = null;
    }
    ngOnInit() {
        this.argumento = this.activatedRoute.snapshot.paramMap.get('id');
    }
};
SegundaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SegundaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-segunda',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./segunda.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/segunda/segunda.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./segunda.page.scss */ "./src/app/segunda/segunda.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], SegundaPage);



/***/ })

}]);
//# sourceMappingURL=segunda-segunda-module-es2015.js.map