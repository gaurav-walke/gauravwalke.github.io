(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile/mobile.component */ "./src/app/mobile/mobile.component.ts");
/* harmony import */ var _electronic_electronic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./electronic/electronic.component */ "./src/app/electronic/electronic.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _computer_computer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./computer/computer.component */ "./src/app/computer/computer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _power_bank_power_bank_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./power-bank/power-bank.component */ "./src/app/power-bank/power-bank.component.ts");
/* harmony import */ var _mobile_accessories_mobile_accessories_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mobile-accessories/mobile-accessories.component */ "./src/app/mobile-accessories/mobile-accessories.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");











var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'mobile', component: _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_3__["MobileComponent"],
        children: [{ path: 'power-bank', component: _power_bank_power_bank_component__WEBPACK_IMPORTED_MODULE_8__["PowerBankComponent"] },
            { path: 'mobile-accessories', component: _mobile_accessories_mobile_accessories_component__WEBPACK_IMPORTED_MODULE_9__["MobileAccessoriesComponent"] }]
    },
    { path: 'electronics', component: _electronic_electronic_component__WEBPACK_IMPORTED_MODULE_4__["ElectronicComponent"] },
    { path: 'books', component: _books_books_component__WEBPACK_IMPORTED_MODULE_5__["BooksComponent"] },
    { path: 'computer', component: _computer_computer_component__WEBPACK_IMPORTED_MODULE_6__["ComputerComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin2x > .s-1, .margin2x > .s-2, .margin2x > .s-five, .margin2x > .s-3, .margin2x > .s-4, .margin2x > .s-5, .margin2x > .s-6, .margin2x > .s-7, .margin2x > .s-8, .margin2x > .s-9, .margin2x > .s-10, .margin2x > .s-11, .margin2x > .s-12, .margin2x > .m-1, .margin2x > .m-2, .margin2x > .m-five, .margin2x > .m-3, .margin2x > .m-4, .margin2x > .m-5, .margin2x > .m-6, .margin2x > .m-7, .margin2x > .m-8, .margin2x > .m-9, .margin2x > .m-10, .margin2x > .m-11, .margin2x > .m-12, .margin2x > .l-1, .margin2x > .l-2, .margin2x > .l-five, .margin2x > .l-3, .margin2x > .l-4, .margin2x > .l-5, .margin2x > .l-6, .margin2x > .l-7, .margin2x > .l-8, .margin2x > .l-9, .margin2x > .l-10, .margin2x > .l-11, .margin2x > .l-12, .margin2x > .xl-1, .margin2x > .xl-2, .margin2x > .xl-five, .margin2x > .xl-3, .margin2x > .xl-4, .margin2x > .xl-5, .margin2x > .xl-6, .margin2x > .xl-7, .margin2x > .xl-8, .margin2x > .xl-9, .margin2x > .xl-10, .margin2x > .xl-11, .margin2x > .xl-12, .margin2x > .xxl-1, .margin2x > .xxl-2, .margin2x > .xxl-five, .margin2x > .xxl-3, .margin2x > .xxl-4, .margin2x > .xxl-5, .margin2x > .xxl-6, .margin2x > .xxl-7, .margin2x > .xxl-8, .margin2x > .xxl-9, .margin2x > .xxl-10, .margin2x > .xxl-11, .margin2x > .xxl-12 {\r\n    padding: 0 1.25rem!important;\r\n}\r\n\r\n  .hov-img0:hover img {\r\n    -webkit-transform: scale(1.1);\r\n    transform: scale(1.1);\r\n  }\r\n\r\n  .carthover:hover {\r\n    cursor: pointer;\r\n    text-decoration:none;\r\n    color:red;\r\n    transition:color 0.20s linear 0s;\r\n    -o-transition:color 0.20s linear 0s;\r\n    -ms-transition:color 0.20s linear 0s;\r\n    -moz-transition:color 0.20s linear 0s;\r\n    -webkit-transition:color 0.20s linear 0s;\r\n  }  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7Q0FDaEM7O0VBRUM7SUFDRSw4QkFBOEI7SUFJOUIsc0JBQXNCO0dBQ3ZCOztFQUVEO0lBQ0UsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsaUNBQWlDO0lBQ2pDLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsc0NBQXNDO0lBQ3RDLHlDQUF5QztHQUMxQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbjJ4ID4gLnMtMSwgLm1hcmdpbjJ4ID4gLnMtMiwgLm1hcmdpbjJ4ID4gLnMtZml2ZSwgLm1hcmdpbjJ4ID4gLnMtMywgLm1hcmdpbjJ4ID4gLnMtNCwgLm1hcmdpbjJ4ID4gLnMtNSwgLm1hcmdpbjJ4ID4gLnMtNiwgLm1hcmdpbjJ4ID4gLnMtNywgLm1hcmdpbjJ4ID4gLnMtOCwgLm1hcmdpbjJ4ID4gLnMtOSwgLm1hcmdpbjJ4ID4gLnMtMTAsIC5tYXJnaW4yeCA+IC5zLTExLCAubWFyZ2luMnggPiAucy0xMiwgLm1hcmdpbjJ4ID4gLm0tMSwgLm1hcmdpbjJ4ID4gLm0tMiwgLm1hcmdpbjJ4ID4gLm0tZml2ZSwgLm1hcmdpbjJ4ID4gLm0tMywgLm1hcmdpbjJ4ID4gLm0tNCwgLm1hcmdpbjJ4ID4gLm0tNSwgLm1hcmdpbjJ4ID4gLm0tNiwgLm1hcmdpbjJ4ID4gLm0tNywgLm1hcmdpbjJ4ID4gLm0tOCwgLm1hcmdpbjJ4ID4gLm0tOSwgLm1hcmdpbjJ4ID4gLm0tMTAsIC5tYXJnaW4yeCA+IC5tLTExLCAubWFyZ2luMnggPiAubS0xMiwgLm1hcmdpbjJ4ID4gLmwtMSwgLm1hcmdpbjJ4ID4gLmwtMiwgLm1hcmdpbjJ4ID4gLmwtZml2ZSwgLm1hcmdpbjJ4ID4gLmwtMywgLm1hcmdpbjJ4ID4gLmwtNCwgLm1hcmdpbjJ4ID4gLmwtNSwgLm1hcmdpbjJ4ID4gLmwtNiwgLm1hcmdpbjJ4ID4gLmwtNywgLm1hcmdpbjJ4ID4gLmwtOCwgLm1hcmdpbjJ4ID4gLmwtOSwgLm1hcmdpbjJ4ID4gLmwtMTAsIC5tYXJnaW4yeCA+IC5sLTExLCAubWFyZ2luMnggPiAubC0xMiwgLm1hcmdpbjJ4ID4gLnhsLTEsIC5tYXJnaW4yeCA+IC54bC0yLCAubWFyZ2luMnggPiAueGwtZml2ZSwgLm1hcmdpbjJ4ID4gLnhsLTMsIC5tYXJnaW4yeCA+IC54bC00LCAubWFyZ2luMnggPiAueGwtNSwgLm1hcmdpbjJ4ID4gLnhsLTYsIC5tYXJnaW4yeCA+IC54bC03LCAubWFyZ2luMnggPiAueGwtOCwgLm1hcmdpbjJ4ID4gLnhsLTksIC5tYXJnaW4yeCA+IC54bC0xMCwgLm1hcmdpbjJ4ID4gLnhsLTExLCAubWFyZ2luMnggPiAueGwtMTIsIC5tYXJnaW4yeCA+IC54eGwtMSwgLm1hcmdpbjJ4ID4gLnh4bC0yLCAubWFyZ2luMnggPiAueHhsLWZpdmUsIC5tYXJnaW4yeCA+IC54eGwtMywgLm1hcmdpbjJ4ID4gLnh4bC00LCAubWFyZ2luMnggPiAueHhsLTUsIC5tYXJnaW4yeCA+IC54eGwtNiwgLm1hcmdpbjJ4ID4gLnh4bC03LCAubWFyZ2luMnggPiAueHhsLTgsIC5tYXJnaW4yeCA+IC54eGwtOSwgLm1hcmdpbjJ4ID4gLnh4bC0xMCwgLm1hcmdpbjJ4ID4gLnh4bC0xMSwgLm1hcmdpbjJ4ID4gLnh4bC0xMiB7XHJcbiAgICBwYWRkaW5nOiAwIDEuMjVyZW0haW1wb3J0YW50O1xyXG59XHJcblxyXG4gIC5ob3YtaW1nMDpob3ZlciBpbWcge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgfVxyXG4gXHJcbiAgLmNhcnRob3Zlcjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIHRyYW5zaXRpb246Y29sb3IgMC4yMHMgbGluZWFyIDBzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjpjb2xvciAwLjIwcyBsaW5lYXIgMHM7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjpjb2xvciAwLjIwcyBsaW5lYXIgMHM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246Y29sb3IgMC4yMHMgbGluZWFyIDBzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOmNvbG9yIDAuMjBzIGxpbmVhciAwcztcclxuICB9ICBcclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\" style=\"font-size: 16px;\">\n\n<head>\n  <meta charset=\"utf-8\" />\n\n  <base href=\"/\" />\n\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\" />\n  <link href=\"http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800&subset=latin,latin-ext\" rel=\"stylesheet\"\n    type=\"text/css\" />\n  <script src=\"https://apis.google.com/js/platform.js\" async defer></script>\n  <style>\n    .sticky {\n        position: fixed;\n        top: 0;\n        width: 100%;\n        z-index: 1;\n      }\n    </style>\n</head>\n\n<body>\n  <!-- HEADER -->\n  <header>\n    <div class=\"line\">\n      <div class=\"box\">\n        <div class=\"s-12 l-2\">\n          <img class=\"full-img logo\" src=\"../assets/img/logo.jpg\" />\n        </div>\n        <div class=\"s-12 l-8 right\">\n          <div class=\"margin\">\n            <form class=\"customform s-12 l-8\" method=\"get\" action=\"http://google.com/\">\n              <div class=\"s-9\">\n                <input type=\"text\" placeholder=\"Search Products\" title=\"Search Products\" />\n              </div>\n              <div class=\"s-3\"><button type=\"submit\">Search</button></div>\n            </form>\n            <div class=\"col-sm-8 l-4\">\n                <div class=\"col-sm-8 \">\n                <p class=\"right cart\">\n                  <i class=\"glyphicon glyphicon-shopping-cart\">&nbsp; </i>\n                  <b> 3 items</b> / EUR 199.90\n                </p>\n                </div>\n                <div class=\"col-sm-4 l-4 \">\n                    <div class=\"carthover\"><a>\n                      <p class=\"right cart\">\n                      <b> Login </b>&nbsp;&nbsp;\n                      <i class=\"glyphicon glyphicon-user\">&nbsp; </i> <br>\n                      Hi                     \n                    </p>\n                  </a>\n                    </div>\n                </div>\n          </div>\n            \n          </div>\n        </div>\n      </div>\n     \n    </div>\n    <!-- TOP NAV -->\n\n    <div class=\"line\" id=\" myHeader\">\n      <nav>\n        <p class=\"nav-text\">Menu</p>\n        <div class=\"top-nav\">\n          <ul class=\"right\">\n            <li><a a [routerLink]=\"['/']\">Home</a></li>\n            <li>\n              <a>Catalogue</a>\n              <ul>\n                <li><a [routerLink]=\"['/mobile']\">Mobiles</a></li>\n                <li><a [routerLink]=\"['/electronics']\">Electronics</a></li>\n                <li><a [routerLink]=\"['/books']\">Books</a></li>\n                <li><a [routerLink]=\"['/computer']\">Computer</a></li>\n              </ul>\n            </li>\n            <li><a>About Us</a></li>\n            <li><a>Contacts</a></li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n    \n  </header>\n  <!-- ASIDE NAV AND CONTENT -->\n\n<router-outlet></router-outlet>\n\n  <!-- FOOTER\n    <footer>\n      <div class=\"line\">\n        <div class=\"s-12 l-12\"><p>Copyright 2018</p></div>\n      </div>\n    </footer>  -->\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myShop';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mobile/mobile.component */ "./src/app/mobile/mobile.component.ts");
/* harmony import */ var _electronic_electronic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./electronic/electronic.component */ "./src/app/electronic/electronic.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _computer_computer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./computer/computer.component */ "./src/app/computer/computer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _power_bank_power_bank_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./power-bank/power-bank.component */ "./src/app/power-bank/power-bank.component.ts");
/* harmony import */ var _mobile_accessories_mobile_accessories_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mobile-accessories/mobile-accessories.component */ "./src/app/mobile-accessories/mobile-accessories.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _mob_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mob-data.service */ "./src/app/mob-data.service.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_8__["MobileComponent"],
                _electronic_electronic_component__WEBPACK_IMPORTED_MODULE_9__["ElectronicComponent"],
                _books_books_component__WEBPACK_IMPORTED_MODULE_10__["BooksComponent"],
                _computer_computer_component__WEBPACK_IMPORTED_MODULE_11__["ComputerComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _power_bank_power_bank_component__WEBPACK_IMPORTED_MODULE_13__["PowerBankComponent"],
                _mobile_accessories_mobile_accessories_component__WEBPACK_IMPORTED_MODULE_14__["MobileAccessoriesComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot()
            ],
            providers: [_mob_data_service__WEBPACK_IMPORTED_MODULE_16__["MobDataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books/books.component.css":
/*!*******************************************!*\
  !*** ./src/app/books/books.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL2Jvb2tzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/books/books.component.html":
/*!********************************************!*\
  !*** ./src/app/books/books.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"line\">\n    <div class=\"box margin-bottom\">\n      <div class=\"margin2x\">\n        <!-- ASIDE NAV -->\n        <aside class=\"s-12 m-4 l-3 xl-2\">\n          <h4 class=\"margin-bottom heading\">Select Category</h4>\n          <div class=\"aside-nav minimize-on-small\">\n            <ul>\n              <li><a [routerLink]=\"['/mobile']\">Mobiles</a></li>\n              <li><a [routerLink]=\"['/electronics']\">Electronics</a></li>\n              <li><a [routerLink]=\"['/books']\">Books</a></li>\n              <li><a [routerLink]=\"['/computer']\">Computer</a></li>\n              <li><a [routerLink]=\"['/mobile']\">Others</a></li>\n            </ul>\n          </div>\n        </aside>\n        <section class=\"s-12 m-8 l-9 xl-10 cutPadding\">\n      \n  \n\n<h1 class=\"margin-bottom heading\">Books</h1>\n<div class=\"margin2x\">\n  <div *ngFor=\"let book of books\" class=\"s-12 m-12 l-4 xl-3 xxl-3 product-box\">\n    <a href=\"#.\" class=\"img-height\"><img class=\"full-img\" [src]=\"book.image\" height=\"200\"></a>\n    <h4 class=\"prod-title\"><strong>{{book.name | uppercase}}</strong></h4>\n    <!--<div [ngClass]=\"{'margin-bottom':true}\">{{book.info}}</div>-->\n    <div><strong>Price:</strong><span class=\"prc\"> {{book.price | currency : 'INR' }}</span></div>\n    <div [ngClass]=\"{'margin-bottom':true}\"><strong>Discount: </strong><span class=\"prc\"> {{book.discount | currency : 'INR' }}</span></div>\n    <div *ngIf=\"book.inStock > 0\" [ngClass]=\"{'margin-bottom':true}\" class=\"highlight\"><mark>{{book.inStock}} Left Now</mark>\n    \t <!-- <button (click)=\"dwQuantity(book)\" class=\"btn\">-</button>\n          <input type=\"text\" [ngStyle]=\"{'width.px':50,'padding.px':3}\" value=\"{{book.quty}}\">\n            <!--{{book.quty}}-->\n          <!--<button (click)=\"upQuantity(book)\" class=\"btn\">+</button>-->\n    </div>\n    <div *ngIf=\"book.inStock === 0\" [ngClass]=\"{'margin-bottom':true}\" class=\"highlight\"> <mark>Out of Stock</mark></div>\n    <form class=\"customform s-12\" action=\"\">\n    <!--<div><button class=\"button rounded-btn submit-btn s-12\" type=\"submit\">Add to Cart</button></div>-->\n    </form>\n  </div>\n</div>\n</section>\n</div>\n</div>\n</div>       "

/***/ }),

/***/ "./src/app/books/books.component.ts":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/books/data.ts");



var BooksComponent = /** @class */ (function () {
    function BooksComponent() {
    }
    BooksComponent.prototype.ngOnInit = function () {
        this.books = _data__WEBPACK_IMPORTED_MODULE_2__["BOOK"];
    };
    BooksComponent.prototype.totalmobiles = function () {
        var sum = 0;
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book_1 = _a[_i];
            sum += book_1.inStock;
        }
        return sum;
    };
    BooksComponent.prototype.upQuantity = function (book) {
        if (book.quty < book.inStock) {
            book.quty++;
        }
    };
    BooksComponent.prototype.dwQuantity = function (book) {
        if (book.quty != 0) {
            book.quty--;
        }
    };
    BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/books/books.component.css")]
        })
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/books/data.ts":
/*!*******************************!*\
  !*** ./src/app/books/data.ts ***!
  \*******************************/
/*! exports provided: BOOK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOK", function() { return BOOK; });
var BOOK = [
    {
        image: 'assets/img/book/angular2-component.jpg',
        name: "apple iphone Black 4s 1GB",
        info: "RAM:512 MB, Screen Size (in cm):10.16 cm (4), Front Camera:8 MP, Internal Memory:1GB, Rear Camera:8 MP",
        price: 9999,
        discount: 4489,
        inStock: 5,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/book/Cyber-Law.jpg',
        name: "Redmi 6 (32GB, 3GB RAM)",
        info: "RAM:3 GB, Screen Size (in cm):13.716 cm (5.4), Rear Camera:12 MP, Front Camera:5 MP, Internal Memory:32GB, Battery Capacity (in mAh):3000",
        price: 8999,
        discount: 7999,
        inStock: 2,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/book/HUMAN-RIGHTS.jpg',
        name: "Lenovo K8 NOTE (64GB, 4GB RAM)",
        info: "RAM:4 GB, Screen Size (in cm):13.97 cm (5.5, Rear Camera:13MP + 5MP, Front Camera:13 MP, Internal Memory:64GB",
        price: 14999,
        discount: 9500,
        inStock: 4,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/book/jeet-Aapki.jpeg',
        name: "Samsung Galaxy J2 2018",
        info: "RAM:4 GB, Screen Size (in cm):13.97 cm (5.5, Rear Camera:13MP + 5MP, Front Camera:13 MP, Internal Memory:64GB",
        price: 8990,
        discount: 6990,
        inStock: 0,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/book/master-angular2.jpg',
        name: "apple iphone Black 4s 1GB",
        info: "RAM:512 MB, Screen Size (in cm):10.16 cm (4), Front Camera:8 MP, Internal Memory:1GB, Rear Camera:8 MP",
        price: 9999,
        discount: 4489,
        inStock: 5,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/book/ninja.jpg',
        name: "Redmi 6 (32GB, 3GB RAM)",
        info: "RAM:3 GB, Screen Size (in cm):13.716 cm (5.4), Rear Camera:12 MP, Front Camera:5 MP, Internal Memory:32GB, Battery Capacity (in mAh):3000",
        price: 8999,
        discount: 7999,
        inStock: 2,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/book/The-Alchemist.jpeg',
        name: "Lenovo K8 NOTE (64GB, 4GB RAM)",
        info: "RAM:4 GB, Screen Size (in cm):13.97 cm (5.5, Rear Camera:13MP + 5MP, Front Camera:13 MP, Internal Memory:64GB",
        price: 14999,
        discount: 9500,
        inStock: 4,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/book/The-Subtle.jpeg',
        name: "Samsung Galaxy J2 2018",
        info: "RAM:4 GB, Screen Size (in cm):13.97 cm (5.5, Rear Camera:13MP + 5MP, Front Camera:13 MP, Internal Memory:64GB",
        price: 8990,
        discount: 6990,
        inStock: 2,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/book/web-applications.jpg',
        name: "apple iphone Black 4s 1GB",
        info: "RAM:512 MB, Screen Size (in cm):10.16 cm (4), Front Camera:8 MP, Internal Memory:1GB, Rear Camera:8 MP",
        price: 9999,
        discount: 4489,
        inStock: 5,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/book/Wildlife.jpg',
        name: "Redmi 6 (32GB, 3GB RAM)",
        info: "RAM:3 GB, Screen Size (in cm):13.716 cm (5.4), Rear Camera:12 MP, Front Camera:5 MP, Internal Memory:32GB, Battery Capacity (in mAh):3000",
        price: 8999,
        discount: 7999,
        inStock: 2,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/book/TNPSC.jpg',
        name: "Samsung Galaxy J2 2018",
        info: "RAM:4 GB, Screen Size (in cm):13.97 cm (5.5, Rear Camera:13MP + 5MP, Front Camera:13 MP, Internal Memory:64GB",
        price: 8990,
        discount: 6990,
        inStock: 2,
        addToCart: true,
        quty: 0
    }
];


/***/ }),

/***/ "./src/app/computer/computer.component.css":
/*!*************************************************!*\
  !*** ./src/app/computer/computer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXB1dGVyL2NvbXB1dGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/computer/computer.component.html":
/*!**************************************************!*\
  !*** ./src/app/computer/computer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"line\">\n    <div class=\"box margin-bottom\">\n      <div class=\"margin2x\">\n        <!-- ASIDE NAV -->\n        <aside class=\"s-12 m-4 l-3 xl-2\">\n          <h4 class=\"margin-bottom heading\">Select Category</h4>\n          <div class=\"aside-nav minimize-on-small\">\n            <ul>\n              <li><a [routerLink]=\"['/mobile']\">Mobiles</a></li>\n              <li><a [routerLink]=\"['/electronics']\">Electronics</a></li>\n              <li><a [routerLink]=\"['/books']\">Books</a></li>\n              <li><a [routerLink]=\"['/computer']\">Computer</a></li>\n              <li><a [routerLink]=\"['/mobile']\">Others</a></li>\n            </ul>\n          </div>\n        </aside>\n        <section class=\"s-12 m-8 l-9 xl-10 cutPadding\">\n      \n  \n\n\n\n<h1 class=\"margin-bottom heading\">Computer</h1>\n<div class=\"margin2x\">\n  <div *ngFor=\"let computer of computers\" class=\"s-12 m-12 l-4 xl-3 xxl-3 product-box\">\n    <a href=\"#.\" class=\"img-height\"><img class=\"full-img\" [src]=\"computer.image\" height=\"200\"></a>\n    <h4 class=\"prod-title\"><strong>{{computer.name | uppercase}}</strong></h4>\n    <!--<div [ngClass]=\"{'margin-bottom':true}\">{{computer.info}}</div>-->\n    <div><strong>Price:</strong><span class=\"prc\"> {{computer.price | currency : 'INR' }}</span></div>\n    <div [ngClass]=\"{'margin-bottom':true}\"><strong>Discount: </strong><span class=\"prc\"> {{computer.discount | currency : 'INR' }}</span></div>\n    <div *ngIf=\"computer.inStock > 0\" [ngClass]=\"{'margin-bottom':true}\" class=\"highlight\"><mark>{{computer.inStock}} Left Now</mark>\n    \t <!-- <button (click)=\"dwQuantity(computer)\" class=\"btn\">-</button>\n          <input type=\"text\" [ngStyle]=\"{'width.px':50,'padding.px':3}\" value=\"{{computer.quty}}\">\n            <!--{{computer.quty}}-->\n          <!--<button (click)=\"upQuantity(computer)\" class=\"btn\">+</button>-->\n    </div>\n    <div *ngIf=\"computer.inStock === 0\" [ngClass]=\"{'margin-bottom':true}\" class=\"highlight\"> <mark>Out of Stock</mark></div>\n    <form class=\"customform s-12\" action=\"\">\n    <!--<div><button class=\"button rounded-btn submit-btn s-12\" type=\"submit\">Add to Cart</button></div>-->\n    </form>\n  </div>\n</div>\n</section>\n</div>\n</div>\n</div>       "

/***/ }),

/***/ "./src/app/computer/computer.component.ts":
/*!************************************************!*\
  !*** ./src/app/computer/computer.component.ts ***!
  \************************************************/
/*! exports provided: ComputerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputerComponent", function() { return ComputerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/computer/data.ts");



var ComputerComponent = /** @class */ (function () {
    function ComputerComponent() {
    }
    ComputerComponent.prototype.ngOnInit = function () {
        this.computers = _data__WEBPACK_IMPORTED_MODULE_2__["COMPUTER"];
    };
    ComputerComponent.prototype.totalcomputers = function () {
        var sum = 0;
        for (var _i = 0, _a = this.computers; _i < _a.length; _i++) {
            var computer_1 = _a[_i];
            sum += computer_1.inStock;
        }
        return sum;
    };
    ComputerComponent.prototype.upQuantity = function (computer) {
        if (computer.quty < computer.inStock) {
            computer.quty++;
        }
    };
    ComputerComponent.prototype.dwQuantity = function (computer) {
        if (computer.quty != 0) {
            computer.quty--;
        }
    };
    ComputerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-computer',
            template: __webpack_require__(/*! ./computer.component.html */ "./src/app/computer/computer.component.html"),
            styles: [__webpack_require__(/*! ./computer.component.css */ "./src/app/computer/computer.component.css")]
        })
    ], ComputerComponent);
    return ComputerComponent;
}());



/***/ }),

/***/ "./src/app/computer/data.ts":
/*!**********************************!*\
  !*** ./src/app/computer/data.ts ***!
  \**********************************/
/*! exports provided: COMPUTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPUTER", function() { return COMPUTER; });
var COMPUTER = [
    {
        image: 'assets/img/computer/HP-14.jpeg',
        name: "apple iphone Black 4s 1GB",
        info: "RAM:512 MB, Screen Size (in cm):10.16 cm (4), Front Camera:8 MP, Internal Memory:1GB, Rear Camera:8 MP",
        price: 9999,
        discount: 4489,
        inStock: 5,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/computer/Anwesha-s-wireless.jpeg',
        name: "Redmi 6 (32GB, 3GB RAM)",
        info: "RAM:3 GB, Screen Size (in cm):13.716 cm (5.4), Rear Camera:12 MP, Front Camera:5 MP, Internal Memory:32GB, Battery Capacity (in mAh):3000",
        price: 8999,
        discount: 7999,
        inStock: 2,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/computer/Zebronics-Dash.jpeg',
        name: "Lenovo K8 NOTE (64GB, 4GB RAM)",
        info: "RAM:4 GB, Screen Size (in cm):13.97 cm (5.5, Rear Camera:13MP + 5MP, Front Camera:13 MP, Internal Memory:64GB",
        price: 14999,
        discount: 9500,
        inStock: 4,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/computer/HP-2621.jpeg',
        name: "Samsung Galaxy J2 2018",
        info: "RAM:4 GB, Screen Size (in cm):13.97 cm (5.5, Rear Camera:13MP + 5MP, Front Camera:13 MP, Internal Memory:64GB",
        price: 8990,
        discount: 6990,
        inStock: 0,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/computer/Dell-Latitude.jpeg',
        name: "apple iphone Black 4s 1GB",
        info: "RAM:512 MB, Screen Size (in cm):10.16 cm (4), Front Camera:8 MP, Internal Memory:1GB, Rear Camera:8 MP",
        price: 9999,
        discount: 4489,
        inStock: 5,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/computer/Microsoft-Windows-7.jpeg',
        name: "Redmi 6 (32GB, 3GB RAM)",
        info: "RAM:3 GB, Screen Size (in cm):13.716 cm (5.4), Rear Camera:12 MP, Front Camera:5 MP, Internal Memory:32GB, Battery Capacity (in mAh):3000",
        price: 8999,
        discount: 7999,
        inStock: 2,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/computer/Mini-Wireless-Keyboard.jpeg',
        name: "Lenovo K8 NOTE (64GB, 4GB RAM)",
        info: "RAM:4 GB, Screen Size (in cm):13.97 cm (5.5, Rear Camera:13MP + 5MP, Front Camera:13 MP, Internal Memory:64GB",
        price: 14999,
        discount: 9500,
        inStock: 4,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/computer/LG-24MP59G.jpeg',
        name: "Samsung Galaxy J2 2018",
        info: "RAM:4 GB, Screen Size (in cm):13.97 cm (5.5, Rear Camera:13MP + 5MP, Front Camera:13 MP, Internal Memory:64GB",
        price: 8990,
        discount: 6990,
        inStock: 2,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/computer/Leoxsys-Leoxsys.jpeg',
        name: "apple iphone Black 4s 1GB",
        info: "RAM:512 MB, Screen Size (in cm):10.16 cm (4), Front Camera:8 MP, Internal Memory:1GB, Rear Camera:8 MP",
        price: 9999,
        discount: 4489,
        inStock: 5,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/computer/Generic-Motherboard.JPEG',
        name: "Redmi 6 (32GB, 3GB RAM)",
        info: "RAM:3 GB, Screen Size (in cm):13.716 cm (5.4), Rear Camera:12 MP, Front Camera:5 MP, Internal Memory:32GB, Battery Capacity (in mAh):3000",
        price: 8999,
        discount: 7999,
        inStock: 2,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/computer/Dell-Vostro.jpeg',
        name: "Samsung Galaxy J2 2018",
        info: "RAM:4 GB, Screen Size (in cm):13.97 cm (5.5, Rear Camera:13MP + 5MP, Front Camera:13 MP, Internal Memory:64GB",
        price: 8990,
        discount: 6990,
        inStock: 2,
        addToCart: true,
        quty: 0
    }
];


/***/ }),

/***/ "./src/app/electronic/data.ts":
/*!************************************!*\
  !*** ./src/app/electronic/data.ts ***!
  \************************************/
/*! exports provided: ELECTRONIC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELECTRONIC", function() { return ELECTRONIC; });
var ELECTRONIC = [
    {
        image: 'assets/img/electronic/LG-260.jpeg',
        name: "LG 260 Ltr 3 Star GL-C292RPDU Double Door Refrigerator - Purple",
        info: "LG  Model:GL-C292RPDU, Star Rating:3 Star, Colour:Purple, Technology:Frost Free, Type:Double Door",
        price: 31190,
        discount: 27799,
        inStock: 5,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/electronic/IFB-6-Kg-Diva-Aqua.jpeg',
        name: "IFB 6 Kg Diva Aqua SX Fully Automatic Front Load Washing Machine",
        info: "Type:Fully Automatic Front Load, Washing Capacity (kg):6, Warranty (in Years):1, Body Colour:Sliver, RPM:800",
        price: 23490,
        discount: 21900,
        inStock: 2,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/electronic/Philips.jpeg',
        name: "Philips 24PFL3951 60 cm ( 24)",
        info: "Full HD (FHD) LED Television, Connectivity:2 X HDMI 2 X USB, Total Sound Output:20W, Functionality:Standard, Screen Resolution:1920 x 1080 (Full HD), Refresh Rate/Motion Rate (In Hz):5",
        price: 14500,
        discount: 9990,
        inStock: 4,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/electronic/Exosis-Mini-ipod.jpeg',
        name: "Exosis Mini ipod Mp3 Player iPod",
        info: " Exosis  Type:iPod  Color:Silver  FM Tuner:No  Audio Playback Time (in Hrs):5",
        price: 999,
        discount: 269,
        inStock: 0,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/electronic/Sundum-SN4.jpeg',
        name: "Sundum SN4.13827HTM 4.1 Component Home Theatre System",
        info: "Sundum  Type:Component Home Theatre  Power Output - Total (RMS in watts):22000W  Connecting Ports:AUX | USB  Features:FM Radio  Subwoofer Connectivity:Wired",
        price: 5200,
        discount: 3800,
        inStock: 6,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/electronic/Activa-ACT.jpeg',
        name: "Activa ACT-32 SMART 80 cm ( 32 )",
        info: "Smart Full HD (FHD) LED Television With 1+1 Year Extended Warranty, Connectivity:2 X HDMI 2 X USB  Total Sound Output:20W  Functionality:Smart  Screen Resolution:1920 x 1080 (Full HD)",
        price: 23990,
        discount: 12599,
        inStock: 2,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/electronic/LG-7-5-Kg.jpeg',
        name: "LG 7.5 Kg P8541R3SA Semi Automatic Top Load Washing Machine",
        info: " Type:Semi Automatic Top Load  Washing Capacity (kg):7.5  Warranty (in Years):2  Body Colour:Burgundy  RPM:1000",
        price: 14390,
        discount: 13460,
        inStock: 4,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/electronic/Samsung-145.jpeg',
        name: "Samsung 324 Ltr 3 Star RT34M5538BS Double Door Refrigerator - Black",
        info: "Samsung  Model:RT34M5538BS  Star Rating:3 Star  Colour:Black  Technology:Frost Free",
        price: 40990,
        discount: 40990,
        inStock: 2,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/electronic/Drumstone.jpeg',
        name: "Redmi 6 (32GB, 3GB RAM)",
        info: "RAM:3 GB, Screen Size (in cm):13.716 cm (5.4), Rear Camera:12 MP, Front Camera:5 MP, Internal Memory:32GB, Battery Capacity (in mAh):3000",
        price: 8999,
        discount: 7999,
        inStock: 8,
        addToCart: true,
        quty: 0
    },
    {
        image: 'assets/img/electronic/LONGWAY.jpeg',
        name: "Lenovo K8 NOTE (64GB, 4GB RAM)",
        info: "RAM:4 GB, Screen Size (in cm):13.97 cm (5.5, Rear Camera:13MP + 5MP, Front Camera:13 MP, Internal Memory:64GB",
        price: 14999,
        discount: 9500,
        inStock: 4,
        addToCart: true,
        quty: 0
    }
];


/***/ }),

/***/ "./src/app/electronic/electronic.component.css":
/*!*****************************************************!*\
  !*** ./src/app/electronic/electronic.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZWN0cm9uaWMvZWxlY3Ryb25pYy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/electronic/electronic.component.html":
/*!******************************************************!*\
  !*** ./src/app/electronic/electronic.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"line\">\n  <div class=\"box margin-bottom\">\n    <div class=\"margin2x\">\n      <!-- ASIDE NAV -->\n      <aside class=\"s-12 m-4 l-3 xl-2\" *ngIf=\"lestAside\">\n        <h4 class=\"margin-bottom heading\">Select Category</h4>\n        <div class=\"aside-nav minimize-on-small\">\n          <ul>\n            <li><a [routerLink]=\"['/mobile']\">Mobiles</a></li>\n            <li><a [routerLink]=\"['/electronics']\">Electronics</a></li>\n            <li><a [routerLink]=\"['/books']\">Books</a></li>\n            <li><a [routerLink]=\"['/computer']\">Computer</a></li>\n            <li><a [routerLink]=\"['/mobile']\">Others</a></li>\n          </ul>\n        </div>\n      </aside>\n      <section class=\"s-12 m-8 l-9 xl-10 cutPadding\">\n        <h1 class=\"margin-bottom heading\">Electronics</h1>\n        <div class=\"margin2x\">\n          <div *ngFor=\"let electronic of electronics; let i = index\">\n         \n            <div *ngIf=\"lestAside\">\n              <div class=\"s-12 m-12 l-4 xl-3 xxl-3 product-box\">\n                <a href=\"#.\" class=\"img-height\"\n                  ><img class=\"full-img\" [src]=\"electronic.image\" height=\"200\"\n                /></a>\n                <h4 class=\"prod-title\">\n                  <strong>{{ electronic.name | uppercase }}</strong>\n                </h4>\n                <!--<div [ngClass]=\"{'margin-bottom':true}\">{{electronic.info}}</div>-->\n                <div>\n                  <strong>Price:</strong\n                  ><span class=\"prc\">\n                    {{ electronic.price | currency: \"INR\" }}</span\n                  >\n                </div>\n                <div [ngClass]=\"{ 'margin-bottom': true }\">\n                  <strong>Discount: </strong\n                  ><span class=\"prc\">\n                    {{ electronic.discount | currency: \"INR\" }}</span\n                  >\n                </div>\n                <div\n                  *ngIf=\"electronic.inStock > 0\"\n                  [ngClass]=\"{ 'margin-bottom': true }\"\n                  class=\"highlight\"\n                >\n                  <mark>{{ electronic.inStock }} Left Now</mark>\n                  <!-- <button (click)=\"dwQuantity(electronic)\" class=\"btn\">-</button>\n                <input type=\"text\" [ngStyle]=\"{'width.px':50,'padding.px':3}\" value=\"{{electronic.quty}}\">\n                  <!--{{electronic.quty}}-->\n                  <!--<button (click)=\"upQuantity(electronic)\" class=\"btn\">+</button>-->\n                </div>\n                <div\n                  *ngIf=\"electronic.inStock === 0\"\n                  [ngClass]=\"{ 'margin-bottom': true }\"\n                  class=\"highlight\"\n                >\n                  <mark>Out of Stock</mark>\n                </div>\n                <form class=\"customform s-12\" action=\"\">\n                  <!--<div><button class=\"button rounded-btn submit-btn s-12\" type=\"submit\">Add to Cart</button></div>-->\n                </form>\n              </div>\n            </div>\n\n            <div *ngIf=\"lestAside == false\">\n              <div class=\"s-12 m-12 l-4 xl-3 xxl-3 product-box\" *ngIf=\"i < 4\">\n                <a href=\"#.\" class=\"img-height\"\n                  ><img class=\"full-img\" [src]=\"electronic.image\" height=\"200\"\n                /></a>\n                <h4 class=\"prod-title\">\n                  <strong>{{ electronic.name | uppercase }}</strong>\n                </h4>\n                <!--<div [ngClass]=\"{'margin-bottom':true}\">{{electronic.info}}</div>-->\n                <div>\n                  <strong>Price:</strong\n                  ><span class=\"prc\">\n                    {{ electronic.price | currency: \"INR\" }}</span\n                  >\n                </div>\n                <div [ngClass]=\"{ 'margin-bottom': true }\">\n                  <strong>Discount: </strong\n                  ><span class=\"prc\">\n                    {{ electronic.discount | currency: \"INR\" }}</span\n                  >\n                </div>\n                <div\n                  *ngIf=\"electronic.inStock > 0\"\n                  [ngClass]=\"{ 'margin-bottom': true }\"\n                  class=\"highlight\"\n                >\n                  <mark>{{ electronic.inStock }} Left Now</mark>\n                  <!-- <button (click)=\"dwQuantity(electronic)\" class=\"btn\">-</button>\n                  <input type=\"text\" [ngStyle]=\"{'width.px':50,'padding.px':3}\" value=\"{{electronic.quty}}\">\n                    <!--{{electronic.quty}}-->\n                  <!--<button (click)=\"upQuantity(electronic)\" class=\"btn\">+</button>-->\n                </div>\n                <div\n                  *ngIf=\"electronic.inStock === 0\"\n                  [ngClass]=\"{ 'margin-bottom': true }\"\n                  class=\"highlight\"\n                >\n                  <mark>Out of Stock</mark>\n                </div>\n                <form class=\"customform s-12\" action=\"\">\n                  <!--<div><button class=\"button rounded-btn submit-btn s-12\" type=\"submit\">Add to Cart</button></div>-->\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/electronic/electronic.component.ts":
/*!****************************************************!*\
  !*** ./src/app/electronic/electronic.component.ts ***!
  \****************************************************/
/*! exports provided: ElectronicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectronicComponent", function() { return ElectronicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/electronic/data.ts");



var ElectronicComponent = /** @class */ (function () {
    function ElectronicComponent() {
    }
    ElectronicComponent.prototype.ngOnInit = function () {
        this.electronics = _data__WEBPACK_IMPORTED_MODULE_2__["ELECTRONIC"];
        var url = window.location.href;
        var index = url.lastIndexOf("/");
        var pageurl = url.substring(index + 1, url.length);
        if (pageurl === "") {
            this.lestAside = false;
        }
        else {
            this.lestAside = true;
        }
    };
    ElectronicComponent.prototype.totalelectronic = function () {
        var sum = 0;
        for (var _i = 0, _a = this.electronics; _i < _a.length; _i++) {
            var electronic_1 = _a[_i];
            sum += electronic_1.inStock;
        }
        return sum;
    };
    ElectronicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-electronic',
            template: __webpack_require__(/*! ./electronic.component.html */ "./src/app/electronic/electronic.component.html"),
            styles: [__webpack_require__(/*! ./electronic.component.css */ "./src/app/electronic/electronic.component.css")]
        })
    ], ElectronicComponent);
    return ElectronicComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- CONTENT -->\n<div class=\"line\">\n  <div class=\"box margin-bottom\">\n    <div class=\"margin2x\">\n      <!-- ASIDE NAV -->\n      <aside class=\"s-12 m-4 l-3 xl-2\">\n        <h4 class=\"margin-bottom heading\">Select Category</h4>\n        <div class=\"aside-nav minimize-on-small\">\n          <ul>\n            <li><a [routerLink]=\"['/mobile']\">Mobiles</a></li>\n            <li><a [routerLink]=\"['/electronics']\">Electronics</a></li>\n            <li><a [routerLink]=\"['/books']\">Books</a></li>\n            <li><a [routerLink]=\"['/computer']\">Computer</a></li>\n            <li><a [routerLink]=\"['/mobile']\">Others</a></li>\n          </ul>\n        </div>\n      </aside>\n\n      <section class=\"s-12 m-8 l-9 xl-10 cutPadding\">\n        <!-- Carousel\n   ================================================== -->\n        <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n          <!-- Indicators -->\n          <!-- <ol class=\"carousel-indicators\">\n     <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n     <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n     <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n     <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li>\n     <li data-target=\"#myCarousel\" data-slide-to=\"5\"></li>\n   </ol> -->\n          <div class=\"carousel-inner\" role=\"listbox\">\n            <div class=\"item active\">\n              <img\n                class=\"first-slide\"\n                src=\"../assets/img/banner/banner-1.jpg\"\n                alt=\"Slide 1\"\n                width=\"100%\"\n              />\n              <div class=\"container\"><div class=\"carousel-caption\"></div></div>\n            </div>\n            <div class=\"item\">\n              <img\n                class=\"second-slide\"\n                src=\"../assets/img/banner/banner-2.jpg\"\n                alt=\"Slide 2\"\n                width=\"100%\"\n              />\n              <div class=\"container\"><div class=\"carousel-caption\"></div></div>\n            </div>\n            <div class=\"item\">\n              <img\n                class=\"third-slide\"\n                src=\"../assets/img/banner/banner-3.jpg\"\n                alt=\"Slide 3\"\n                width=\"100%\"\n              />\n              <div class=\"container\"><div class=\"carousel-caption\"></div></div>\n            </div>\n            <div class=\"item\">\n              <img\n                class=\"forth-slide\"\n                src=\"../assets/img/banner/banner-4.jpg\"\n                alt=\"Slide 4\"\n                width=\"100%\"\n              />\n              <div class=\"container\"><div class=\"carousel-caption\"></div></div>\n            </div>\n            <div class=\"item\">\n              <img\n                class=\"fifth-slide\"\n                src=\"../assets/img/banner/banner-5.jpg\"\n                alt=\"Slide 5\"\n                width=\"100%\"\n              />\n              <div class=\"container\"><div class=\"carousel-caption\"></div></div>\n            </div>\n          </div>\n          <a\n            class=\"left carousel-control\"\n            href=\"#myCarousel\"\n            role=\"button\"\n            data-slide=\"prev\"\n          >\n            <span\n              class=\"glyphicon glyphicon-chevron-left\"\n              aria-hidden=\"true\"\n            ></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a\n            class=\"right carousel-control\"\n            href=\"#myCarousel\"\n            role=\"button\"\n            data-slide=\"next\"\n          >\n            <span\n              class=\"glyphicon glyphicon-chevron-right\"\n              aria-hidden=\"true\"\n            ></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </div>\n        <!-- /.carousel -->\n        <!-- Breadcrumb -->\n        <app-mobile></app-mobile>\n        <app-electronic></app-electronic>\n        <app-books></app-books>\n        <app-computer></app-computer>\n      </section>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.styl":
/*!******************************************!*\
  !*** ./src/app/home/home.component.styl ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/home/home.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJEQUEyRCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc3R5bCJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.styl */ "./src/app/home/home.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mob-data.service.ts":
/*!*************************************!*\
  !*** ./src/app/mob-data.service.ts ***!
  \*************************************/
/*! exports provided: MobDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobDataService", function() { return MobDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var MobDataService = /** @class */ (function () {
    function MobDataService(http) {
        this.http = http;
    }
    MobDataService.prototype.getMobParts = function () {
        //  return MOBILE;
        return this.http
            .get('assets/data/APIdata.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json().data; }));
    };
    MobDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], MobDataService);
    return MobDataService;
}());



/***/ }),

/***/ "./src/app/mobile-accessories/mobile-accessories.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/mobile-accessories/mobile-accessories.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mobile-accessories works!\n</p>\n"

/***/ }),

/***/ "./src/app/mobile-accessories/mobile-accessories.component.styl":
/*!**********************************************************************!*\
  !*** ./src/app/mobile-accessories/mobile-accessories.component.styl ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/mobile-accessories/mobile-accessories.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlLWFjY2Vzc29yaWVzL21vYmlsZS1hY2Nlc3Nvcmllcy5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RkFBdUYiLCJmaWxlIjoic3JjL2FwcC9tb2JpbGUtYWNjZXNzb3JpZXMvbW9iaWxlLWFjY2Vzc29yaWVzLmNvbXBvbmVudC5zdHlsIn0= */"

/***/ }),

/***/ "./src/app/mobile-accessories/mobile-accessories.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/mobile-accessories/mobile-accessories.component.ts ***!
  \********************************************************************/
/*! exports provided: MobileAccessoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileAccessoriesComponent", function() { return MobileAccessoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MobileAccessoriesComponent = /** @class */ (function () {
    function MobileAccessoriesComponent() {
    }
    MobileAccessoriesComponent.prototype.ngOnInit = function () {
    };
    MobileAccessoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile-accessories',
            template: __webpack_require__(/*! ./mobile-accessories.component.html */ "./src/app/mobile-accessories/mobile-accessories.component.html"),
            styles: [__webpack_require__(/*! ./mobile-accessories.component.styl */ "./src/app/mobile-accessories/mobile-accessories.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MobileAccessoriesComponent);
    return MobileAccessoriesComponent;
}());



/***/ }),

/***/ "./src/app/mobile/mobile.component.css":
/*!*********************************************!*\
  !*** ./src/app/mobile/mobile.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9tb2JpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mobile/mobile.component.html":
/*!**********************************************!*\
  !*** ./src/app/mobile/mobile.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"line\">\n  <div class=\"box margin-bottom\">\n    <div class=\"margin2x\">\n      <!-- ASIDE NAV -->\n      <aside class=\"s-12 m-4 l-3 xl-2\" *ngIf=\"lestAside\">\n        <div class=\"px-2\">\n        <h4 class=\"margin-bottom heading\">- Mobiles & Tablets</h4>\n        <div class=\"aside-nav  minimize-on-small\">\n          <ul class=\"aside-sub\">\n            <li><a [routerLink]=\"['power-bank']\">Power Banks</a></li>           \n            <li><a [routerLink]=\"['mobile-accessories']\">Mobile-Accessories</a></li>\n            \n          </ul>\n        </div>\n      </div>\n    \n      \n      </aside>\n      <!--END ASIDE NAV -->\n      <router-outlet></router-outlet>\n      <section class=\"s-12 m-8 l-9 xl-10 cutPadding\">\n        <nav class=\"breadcrumb-nav\">\n          <ul>\n            <li>\n              <a href=\"/\"><i class=\"icon-sli-home\"></i></a>\n            </li>\n            <li><a a [routerLink]=\"['/']\">Home</a></li>\n            <li>Mobiles</li>\n          </ul>\n        </nav>\n        \n        <h1 class=\"margin-bottom heading\">Mobiles</h1>\n        <div class=\"margin2x\">\n          <div *ngFor=\"let mobile of mobiles; let i = index\">\n            <!-------------------------------------- Main page View ------------------------------->\n            <div *ngIf=\"lestAside\">\n              <div class=\"s-12 m-12 l-4 xl-3 xxl-3 product-box\">\n                <div>\n                  <a href=\"#.\" class=\"img-height \"\n                  >\n                  <div style=\"position: relative;\">\n                  <img class=\"\"\n                    [ngClass]=\"{ 'full-img hov-img0': true }\"\n                    [src]=\"mobile.image\"\n                    height=\"2000\"\n                />\n                <img *ngIf=\"mobile.inStock === 0\" class =\"sldimg\" src=\"assets/img/sold_out_sticker3.png\" />\n              </div>\n              </a>\n                </div>\n                <h4 class=\"prod-title\">\n                  <strong>{{ mobile.name | uppercase }}</strong>\n                </h4>\n                <!--<div [ngClass]=\"{'margin-bottom':true}\">{{mobile.info}}</div>-->\n                <div>\n                  <strong>Price:</strong\n                  ><span class=\"prc\">\n                    {{ mobile.price | currency: \"INR\" }}</span\n                  >\n                </div>\n                <div [ngClass]=\"{ 'margin-bottom': true }\">\n                  <strong>Discount: </strong\n                  ><span class=\"prc\">\n                    {{ mobile.discount | currency: \"INR\" }}</span\n                  >\n                </div>\n                <div\n                  *ngIf=\"mobile.inStock > 0 && mobile.inStock < 5\"\n                  [ngClass]=\"{ 'margin-bottom': true }\"\n                  class=\"highlight\"\n                >\n                  <mark>{{ mobile.inStock }} Left Now</mark>\n                  <!-- <button (click)=\"dwQuantity(mobile)\" class=\"btn\">-</button>\n          <input type=\"text\" [ngStyle]=\"{'width.px':50,'padding.px':3}\" value=\"{{mobile.quty}}\"> -->\n            <!--{{mobile.quty}}-->\n                  <!--<button (click)=\"upQuantity(mobile)\" class=\"btn\">+</button>-->\n                </div>\n                <div\n                  *ngIf=\"mobile.inStock === 0\"\n                  [ngClass]=\"{ 'margin-bottom': true }\"\n                >\n                  <mark>Out of Stock</mark>\n                </div>\n                <form class=\"customform s-12\" action=\"\">\n                  <!--<div><button class=\"button rounded-btn submit-btn s-12\" type=\"submit\">Add to Cart</button></div>-->\n                </form>\n              </div>\n            </div>\n            <!--------------------------------------End Main page View ------------------------------->\n\n            <!-------------------------------------- Home page View ---------------------------------->\n            <div *ngIf=\"lestAside == false\">\n              <div class=\"s-12 m-12 l-4 xl-3 xxl-3 product-box\" *ngIf=\"i < 4\">\n                <a href=\"#.\" class=\"img-height \"\n                  >\n                  <div style=\"position: relative;\">\n                  <img class=\"\"\n                    [ngClass]=\"{ 'full-img hov-img0': true }\"\n                    [src]=\"mobile.image\"\n                    height=\"2000\"\n                />\n                <img *ngIf=\"mobile.inStock === 0\" class =\"sldimg\" src=\"assets/img/sold_out_sticker3.png\" />\n              </div>\n              </a>\n                <h4 class=\"prod-title\">\n                  <strong>{{ mobile.name | uppercase }}</strong>\n                </h4>\n                <!--<div [ngClass]=\"{'margin-bottom':true}\">{{mobile.info}}</div>-->\n                <div>\n                  <strong>Price:</strong\n                  ><span class=\"prc\">\n                    {{ mobile.price | currency: \"INR\" }}</span\n                  >\n                </div>\n                <div [ngClass]=\"{ 'margin-bottom': true }\">\n                  <strong>Discount: </strong\n                  ><span class=\"prc\">\n                    {{ mobile.discount | currency: \"INR\" }}</span\n                  >\n                </div>\n                <div\n                  *ngIf=\"mobile.inStock > 0\"\n                  [ngClass]=\"{ 'margin-bottom': true }\"\n                  class=\"highlight\"\n                >\n                  <mark>{{ mobile.inStock }} Left Now</mark>\n                  <!-- <button (click)=\"dwQuantity(mobile)\" class=\"btn\">-</button>\n\t\t\t\t<input type=\"text\" [ngStyle]=\"{'width.px':50,'padding.px':3}\" value=\"{{mobile.quty}}\">\n\t\t\t\t\t<!--{{mobile.quty}}-->\n                  <!--<button (click)=\"upQuantity(mobile)\" class=\"btn\">+</button>-->\n                </div>\n                <div\n                  *ngIf=\"mobile.inStock === 0\"\n                  [ngClass]=\"{ 'margin-bottom': true }\"\n                >\n                  <mark>Out of Stock</mark>\n                </div>\n                <form class=\"customform s-12\" action=\"\">\n                  <!--<div><button class=\"button rounded-btn submit-btn s-12\" type=\"submit\">Add to Cart</button></div>-->\n                </form>\n              </div>\n            </div>\n\n            <!--------------------------------------End Home page View  ------------------------------->\n          </div>\n        </div>\n      </section>\n\n    \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mobile/mobile.component.ts":
/*!********************************************!*\
  !*** ./src/app/mobile/mobile.component.ts ***!
  \********************************************/
/*! exports provided: MobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileComponent", function() { return MobileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mob_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mob-data.service */ "./src/app/mob-data.service.ts");



var MobileComponent = /** @class */ (function () {
    function MobileComponent(mobDataServices) {
        this.mobDataServices = mobDataServices;
    }
    MobileComponent.prototype.ngOnInit = function () {
        // this.mobiles = MOBILE;
        var _this = this;
        // let mobDataServices = new MobDataServices();
        //  this.mobiles = mobDataServices.getMobParts();
        this.mobDataServices
            .getMobParts()
            .subscribe(function (mobilesn) { return _this.mobiles = mobilesn; });
        /* for aside */
        var url = window.location.href;
        var index = url.lastIndexOf('/');
        var pageurl = url.substring(index + 1, url.length);
        if (pageurl === '' || pageurl === '#.') {
            this.lestAside = false;
        }
        else {
            this.lestAside = true;
        }
    };
    MobileComponent.prototype.totalmobiles = function () {
        var sum = 0;
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var mobile = _a[_i];
            sum += mobile.inStock;
        }
        return sum;
    };
    MobileComponent.prototype.upQuantity = function (mobile) {
        if (mobile.quty < mobile.inStock) {
            mobile.quty++;
        }
    };
    MobileComponent.prototype.dwQuantity = function (mobile) {
        if (mobile.quty !== 0) {
            mobile.quty--;
        }
    };
    MobileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile',
            template: __webpack_require__(/*! ./mobile.component.html */ "./src/app/mobile/mobile.component.html"),
            styles: [__webpack_require__(/*! ./mobile.component.css */ "./src/app/mobile/mobile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mob_data_service__WEBPACK_IMPORTED_MODULE_2__["MobDataService"]])
    ], MobileComponent);
    return MobileComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n <img src=\"assets/img/sorry-page-not-found.jpg\" style=\"width:100%\"/>\n</div>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.styl":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.styl ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/page-not-found/page-not-found.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnN0eWwifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.styl */ "./src/app/page-not-found/page-not-found.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/power-bank/power-bank.component.html":
/*!******************************************************!*\
  !*** ./src/app/power-bank/power-bank.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  power-bank works!\n</p>\n"

/***/ }),

/***/ "./src/app/power-bank/power-bank.component.styl":
/*!******************************************************!*\
  !*** ./src/app/power-bank/power-bank.component.styl ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/power-bank/power-bank.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG93ZXItYmFuay9wb3dlci1iYW5rLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVFQUF1RSIsImZpbGUiOiJzcmMvYXBwL3Bvd2VyLWJhbmsvcG93ZXItYmFuay5jb21wb25lbnQuc3R5bCJ9 */"

/***/ }),

/***/ "./src/app/power-bank/power-bank.component.ts":
/*!****************************************************!*\
  !*** ./src/app/power-bank/power-bank.component.ts ***!
  \****************************************************/
/*! exports provided: PowerBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerBankComponent", function() { return PowerBankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PowerBankComponent = /** @class */ (function () {
    function PowerBankComponent() {
    }
    PowerBankComponent.prototype.ngOnInit = function () {
    };
    PowerBankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-power-bank',
            template: __webpack_require__(/*! ./power-bank.component.html */ "./src/app/power-bank/power-bank.component.html"),
            styles: [__webpack_require__(/*! ./power-bank.component.styl */ "./src/app/power-bank/power-bank.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PowerBankComponent);
    return PowerBankComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular\11_ng_shoping_with_routing\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map