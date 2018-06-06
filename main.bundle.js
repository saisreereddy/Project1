webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n<div class=\"font_animate2\">Application developed using <a style=\"color:palegreen;\" href=\"https://developer.oxforddictionaries.com/documentation\">Oxford Dictionary</a> API</div>\n\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".title_style{\r\n    color:black;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n.img1_style{\r\n    height:6rem;\r\n    margin:0 auto;\r\n}\r\n.container-fluid-1{\r\n    margin-top:auto;\r\n    padding-top:4px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\" class=\"bg-img\">\n  <div class=\"container-fluid container-fluid-1\">\n    \n    <nav class=\"navbar navbar-inverse\" >\n      <div class=\"bg-navbar\"></div>\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n    \n    \n   \n       \n          <ul class=\"nav navbar-nav\">\n            <li><a [routerLink]=\"['/home']\">Home</a></li>\n            <li><a [routerLink]=\"['/about']\">About</a></li>\n           \n            \n          </ul>\n          <ul  class=\"nav navbar-nav navbar-right\">\n              <li> <a class=\"btn font-weight\" (click)=\"goBackToPreviousPage()\">Go Back </a></li>\n              </ul>\n     \n      </div>\n    </nav>\n  \n<!--\n\n    <div class=\"row header\">\n        <div class=\"col-md-12\">\n            \n      <span style=\"display:inline-block;font-size:22px;font-weight:bold;color:lightskyblue\" class=\"font-small\">Inspired By</span>    <a style=\"display:inline-block;vertical-align:middle;\" class=\"title_style\" [routerLink]=\"['/']\"><img src=\"assets\\Images\\oxford.png\" class=\"img-responsive img1_style_main\"></a>\n      \n    </div>\n      </div>\n    -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <div class=\"slide-left font_animate\">\n      <p>Welcome to the world of <span style='color: blue'>W</span>\n        <span style='color: red'>o</span>\n        <span style='color: burlywood'>r</span>\n        <span style='color: blue'>d</span>\n        <span style='color: green'>s</span>\n         inspired by <span style=\"color:skyblue;text-decoration:none;\"><a style=\"color:skyblue;text-decoration:none;\"href=\"https://www.oxforddictionaries.com/\">Oxford Dictionaries</a></span></p>\n      </div>\n\n\n\n\n      \n\n \n  </div>\n  \n  <br/>\n <router-outlet></router-outlet>\n \n "

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(location, toastr, vcr) {
        this.location = location;
        this.toastr = toastr;
        this.vcr = vcr;
        this.title = 'Personal Dictionary';
        this.state = 'small';
        this.toastr.setRootViewContainerRef(vcr);
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.state = (this.state === 'small' ? 'large' : 'small');
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* trigger */])('myAwesomeAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('small', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                        transform: 'scale(1)',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('large', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                        transform: 'scale(1.2)',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('small => large', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('100ms ease-in')),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__got_http_service_service__ = __webpack_require__("./src/app/got-http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filter_pipe__ = __webpack_require__("./src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__fullpageview_fullpageview_component__ = __webpack_require__("./src/app/fullpageview/fullpageview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__errornotfound_errornotfound_component__ = __webpack_require__("./src/app/errornotfound/errornotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__errorbadrequest_errorbadrequest_component__ = __webpack_require__("./src/app/errorbadrequest/errorbadrequest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__errorauthenticationfailed_errorauthenticationfailed_component__ = __webpack_require__("./src/app/errorauthenticationfailed/errorauthenticationfailed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__errorurltoolong_errorurltoolong_component__ = __webpack_require__("./src/app/errorurltoolong/errorurltoolong.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_carouselamos__ = __webpack_require__("./node_modules/ng2-carouselamos/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular_bootstrap_md__ = __webpack_require__("./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng4_click_outside__ = __webpack_require__("./node_modules/ng4-click-outside/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng4_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng4_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular_image_slider__ = __webpack_require__("./node_modules/angular-image-slider/esm5/angular-image-slider.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_9__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_13__fullpageview_fullpageview_component__["a" /* FullpageviewComponent */],
                __WEBPACK_IMPORTED_MODULE_14__errornotfound_errornotfound_component__["a" /* ErrornotfoundComponent */],
                __WEBPACK_IMPORTED_MODULE_15__errorbadrequest_errorbadrequest_component__["a" /* ErrorbadrequestComponent */],
                __WEBPACK_IMPORTED_MODULE_16__errorauthenticationfailed_errorauthenticationfailed_component__["a" /* ErrorauthenticationfailedComponent */],
                __WEBPACK_IMPORTED_MODULE_17__errorurltoolong_errorurltoolong_component__["a" /* ErrorurltoolongComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_18_ng2_carouselamos__["a" /* Ng2CarouselamosModule */],
                __WEBPACK_IMPORTED_MODULE_19_angular_bootstrap_md__["a" /* CarouselModule */],
                __WEBPACK_IMPORTED_MODULE_22_angular_image_slider__["a" /* SliderModule */],
                __WEBPACK_IMPORTED_MODULE_21_ng4_click_outside__["ClickOutsideModule"],
                __WEBPACK_IMPORTED_MODULE_19_angular_bootstrap_md__["b" /* WavesModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot([
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'fullpageview', component: __WEBPACK_IMPORTED_MODULE_13__fullpageview_fullpageview_component__["a" /* FullpageviewComponent */] },
                    { path: 'errornotfound', component: __WEBPACK_IMPORTED_MODULE_14__errornotfound_errornotfound_component__["a" /* ErrornotfoundComponent */] },
                    { path: 'errorbadrequest', component: __WEBPACK_IMPORTED_MODULE_15__errorbadrequest_errorbadrequest_component__["a" /* ErrorbadrequestComponent */] },
                    { path: 'errorauthenticationfailed', component: __WEBPACK_IMPORTED_MODULE_16__errorauthenticationfailed_errorauthenticationfailed_component__["a" /* ErrorauthenticationfailedComponent */] },
                    { path: 'errorurltoolong', component: __WEBPACK_IMPORTED_MODULE_17__errorurltoolong_errorurltoolong_component__["a" /* ErrorurltoolongComponent */] },
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__["a" /* NotFoundComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__got_http_service_service__["a" /* GotHttpService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/errorauthenticationfailed/errorauthenticationfailed.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/errorauthenticationfailed/errorauthenticationfailed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"myDiv\" style=\"border:1px solid lightgray;background-color:#FCFCE8;margin-top:2vh;margin-left:4vw;margin-right:4vw;\">\n    \n    <div class=\"col-md-10 col-md-offset-2 border_bottom\" style=\"border-bottom:1px solid darkgray;margin-top:12vh;\">\n        <span style=\"padding-bottom:2vh;display:inline-block;font-size:18px;font-variant-caps:all-petite-caps;\">  No information available or the requested URL was not found on the server.\n            \n            Please check that the app_id and app_key are correct, and that the URL you are trying to access is correct. These can be found in the API Credentials page.\n           </span>\n        </div>\n        <div class=\"col-md-10 col-md-offset-2 border_bottom\" style=\"border-bottom:1px solid darkgray;margin-bottom:12vh;\">\n                <span style=\"padding-bottom:2vh;display:inline-block;font-size:18px;font-variant-caps:all-petite-caps;\">  Please visit <a style=\"color:skyblue;text-decoration:none;\" href=\"https://developer.oxforddictionaries.com/documentation\">Oxford Dictionary API Documentation</a> for any assistance.\n             \n                   </span>\n                </div>\n    </div>"

/***/ }),

/***/ "./src/app/errorauthenticationfailed/errorauthenticationfailed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorauthenticationfailedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__got_http_service_service__ = __webpack_require__("./src/app/got-http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorauthenticationfailedComponent = /** @class */ (function () {
    function ErrorauthenticationfailedComponent(_route, router, gotHttpService, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.gotHttpService = gotHttpService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    ErrorauthenticationfailedComponent.prototype.ngOnInit = function () {
        this.toastr.error('OOPS 403!!!', 'Error!');
    };
    ErrorauthenticationfailedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-errorauthenticationfailed',
            template: __webpack_require__("./src/app/errorauthenticationfailed/errorauthenticationfailed.component.html"),
            styles: [__webpack_require__("./src/app/errorauthenticationfailed/errorauthenticationfailed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__got_http_service_service__["a" /* GotHttpService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ErrorauthenticationfailedComponent);
    return ErrorauthenticationfailedComponent;
}());



/***/ }),

/***/ "./src/app/errorbadrequest/errorbadrequest.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/errorbadrequest/errorbadrequest.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"myDiv\" style=\"border:1px solid lightgray;background-color:#FCFCE8;margin-top:2vh;margin-left:4vw;margin-right:4vw;\">\n    \n\n    <div class=\"col-md-10 col-md-offset-2 border_bottom\" style=\"border-bottom:1px solid darkgray;margin-top:12vh;\">\n        <span style=\"padding-bottom:2vh;display:inline-block;font-size:18px;font-variant-caps:all-petite-caps;\">  No information available or the requested URL was not found on the server.\n            \n            The request was invalid or cannot be otherwise served. An accompanying error message will explain further.\n            \n            For example, when the filters provided are unknown, the source and target languages in the translation endpoint are the same, or a numeric parameter such as offset and limit in the wordlist endpoint cannot be evaluated as a number.\n           </span>\n        </div>\n\n        <div class=\"col-md-10 col-md-offset-2 border_bottom\" style=\"border-bottom:1px solid darkgray;margin-bottom:12vh;\">\n                <span style=\"padding-bottom:2vh;display:inline-block;font-size:18px;font-variant-caps:all-petite-caps;\">  Please visit <a style=\"color:skyblue;text-decoration:none;\" href=\"https://developer.oxforddictionaries.com/documentation\">Oxford Dictionary API Documentation</a> for any assistance.\n             \n                   </span>\n                </div>\n    </div>"

/***/ }),

/***/ "./src/app/errorbadrequest/errorbadrequest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorbadrequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__got_http_service_service__ = __webpack_require__("./src/app/got-http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorbadrequestComponent = /** @class */ (function () {
    function ErrorbadrequestComponent(_route, router, gotHttpService, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.gotHttpService = gotHttpService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    ErrorbadrequestComponent.prototype.ngOnInit = function () {
        this.toastr.error('OOPS 400!!!', 'Error!');
    };
    ErrorbadrequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-errorbadrequest',
            template: __webpack_require__("./src/app/errorbadrequest/errorbadrequest.component.html"),
            styles: [__webpack_require__("./src/app/errorbadrequest/errorbadrequest.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__got_http_service_service__["a" /* GotHttpService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ErrorbadrequestComponent);
    return ErrorbadrequestComponent;
}());



/***/ }),

/***/ "./src/app/errornotfound/errornotfound.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/errornotfound/errornotfound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"myDiv\" style=\"border:1px solid lightgray;background-color:#FCFCE8;margin-top:2vh;margin-left:4vw;margin-right:4vw;\">\n    \n\n    <div class=\"col-md-10 col-md-offset-1 border_bottom\" style=\"border-bottom:1px solid darkgray;margin-top:12vh;\">\n        <span style=\"padding-bottom:2vh;display:inline-block;font-size:18px;font-variant-caps:all-petite-caps;\">  No information available or the requested URL was not found on the server.\n            \n      For example, when the headword could not be found, a region or domain identifier do not exist, or the headword does not contain any attribute that match the filters in the request. It may also be the case that the URL is misspelled or incomplete.\n           </span>\n        </div>\n\n\n\n        <div class=\"col-md-10 col-md-offset-1 border_bottom\" style=\"border-bottom:1px solid darkgray;margin-bottom:12vh;\">\n                <span style=\"padding-bottom:2vh;display:inline-block;font-size:18px;font-variant-caps:all-petite-caps;\">  Please visit <a  href=\"https://developer.oxforddictionaries.com/documentation\">Oxford Dictionary API Documentation</a> for any assistance.\n             \n                   </span>\n                </div>\n    </div>"

/***/ }),

/***/ "./src/app/errornotfound/errornotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrornotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__got_http_service_service__ = __webpack_require__("./src/app/got-http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrornotfoundComponent = /** @class */ (function () {
    function ErrornotfoundComponent(_route, router, gotHttpService, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.gotHttpService = gotHttpService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    ErrornotfoundComponent.prototype.ngOnInit = function () {
        this.toastr.error('OOPS 404!!!', 'Error!');
    };
    ErrornotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-errornotfound',
            template: __webpack_require__("./src/app/errornotfound/errornotfound.component.html"),
            styles: [__webpack_require__("./src/app/errornotfound/errornotfound.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__got_http_service_service__["a" /* GotHttpService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ErrornotfoundComponent);
    return ErrornotfoundComponent;
}());



/***/ }),

/***/ "./src/app/errorurltoolong/errorurltoolong.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/errorurltoolong/errorurltoolong.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"myDiv\" style=\"border:1px solid lightgray;background-color:#FCFCE8;margin-top:2vh;margin-left:4vw;margin-right:4vw;\">\n    \n    <div class=\"col-md-10 col-md-offset-2 border_bottom\" style=\"border-bottom:1px solid darkgray;margin-top:12vh;\">\n        <span style=\"padding-bottom:2vh;display:inline-block;font-size:18px;font-variant-caps:all-petite-caps;\">  No information available or the requested URL was not found on the server.\n            \n            Your word_id exceeds the maximum 128 characters. Reduce the string that is passed to the API by calling only individual words.\n           </span>\n        </div>\n\n        <div class=\"col-md-10 col-md-offset-2 border_bottom\" style=\"border-bottom:1px solid darkgray;margin-bottom:12vh;\">\n                <span style=\"padding-bottom:2vh;display:inline-block;font-size:18px;font-variant-caps:all-petite-caps;\">  Please visit <a style=\"color:skyblue;text-decoration:none;\" href=\"https://developer.oxforddictionaries.com/documentation\">Oxford Dictionary API Documentation</a> for any assistance.\n             \n                   </span>\n                </div>\n    </div>"

/***/ }),

/***/ "./src/app/errorurltoolong/errorurltoolong.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorurltoolongComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__got_http_service_service__ = __webpack_require__("./src/app/got-http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorurltoolongComponent = /** @class */ (function () {
    function ErrorurltoolongComponent(_route, router, gotHttpService, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.gotHttpService = gotHttpService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    ErrorurltoolongComponent.prototype.ngOnInit = function () {
        this.toastr.error('OOPS 414!!!', 'Error!');
    };
    ErrorurltoolongComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-errorurltoolong',
            template: __webpack_require__("./src/app/errorurltoolong/errorurltoolong.component.html"),
            styles: [__webpack_require__("./src/app/errorurltoolong/errorurltoolong.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__got_http_service_service__["a" /* GotHttpService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ErrorurltoolongComponent);
    return ErrorurltoolongComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        console.log(items);
        console.log(searchText);
        return items.filter(function (it) {
            console.log(it);
            if (it.name.includes(searchText)) {
                return it;
            }
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/fullpageview/fullpageview.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fullpageview/fullpageview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"myDiv\" style=\"border:1px solid lightgray;background-color:#FCFCE8;margin-top:2vh;margin-left:4vw;margin-right:4vw;\">\n\n\n  <div *ngFor=\"let result of results\">\n    <div class=\"col-md-10 col-md-offset-1 border_bottom\" style=\"padding-bottom:2vh;margin-top:12vh;;display:inline-block;font-size:18px;text-align:left;font-variant:small-caps\">Definition of <span style=\"color:coral;\"> {{result.word}} </span> in English</div>\n  <div class=\"col-md-10 col-md-offset-1 border_bottom\" style=\"border-bottom:1px solid darkgray;\">\n    <span style=\"padding-bottom:2vh;display:inline-block;font-size:18px;font-weight:normal;font-variant-caps:all-petite-caps;\"> <span style=\"color:coral;\"> {{result.word}} </span></span>\n    </div>\n  </div>\n\n  <div *ngFor=\"let result of results\">\n    <div *ngFor=\"let each of result.lexicalEntries\">\n      \n      <div class=\"col-md-10 col-md-offset-1 border_bottom\" style=\"border-bottom:1px solid darkgray;\">\n        <span style=\"padding-bottom:2vh;display:inline-block;font-size:16px;font-weight:normal;color: #f15a24;text-transform: uppercase;letter-spacing: 0.8px;font-weight:bold;\">  {{each.lexicalCategory}} </span>\n      </div>\n\n<div *ngFor=\"let entries of each.entries\">\n<div *ngFor=\"let senses of entries.senses; let rowIndex=index\">\n    <div *ngIf=\"senses.definitions\">\n    <div class=\"well col-md-10 col-md-offset-1 border_bottom\" >\n<span style=\"color:green;font-style:normal;font-weight: normal;padding-bottom:2vh;display:inline-block;font-size:16px;text-transform:normal;\"> def:</span>        <span style=\"color: black;font-style:normal;font-weight: normal;padding-bottom:2vh;display:inline-block;font-size:16px;font-weight:normal;text-transform:normal;\"> {{senses.definitions}} </span>\n      </div>\n    </div>\n    <div *ngFor=\"let examples of senses.examples\">\n        <div class=\"col-md-10 col-md-offset-1 border_bottom\" >\n            <span style=\"color:black;font-style:normal;font-weight: normal;padding-bottom:2vh;display:inline-block;font-size:16px;font-weight:normal;text-transform:normal;color:green;\"> Phrase:</span>        <span style=\"padding-bottom:2vh;display:inline-block;font-size:16px\"> ' {{examples.text}} ' </span>\n          </div>\n    </div>\n    \n    \n    \n    \n    </div>\n</div>\n\n\n\n\n      </div>\n      <div style=\"display:inline-block;text-align:left;margin-bottom:2vh;\" class=\"col-md-10 col-md-offset-1\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"MoreSentences(result.word)\">\n              <span class=\"glyphicon glyphicon-plus\" id =\"myId\" #myId></span>More Example Sentences\n              \n            </button>\n      </div>\n      <div *ngIf=\"showMore\">\n      <div *ngFor=\"let results of dictDataSentencesResults\">\n          <div *ngFor=\"let each of results.lexicalEntries\">\n          <div class=\"col-md-10 col-md-offset-1 border_bottom\" style=\"border-bottom:1px solid darkgray;\">\n              <span style=\"padding-bottom:2vh;display:inline-block;font-size:16px;font-weight:normal;color: #f15a24;text-transform: uppercase;letter-spacing: 0.8px;\">  {{each.lexicalCategory}} </span>\n              </div>\n              <div *ngFor=\"let sentences of each.sentences\">\n                  <div class=\"col-md-10 col-md-offset-1 border_bottom\">\n                      <span style=\"color:black;font-style:normal;font-weight: normal;padding-bottom:2vh;display:inline-block;font-size:16px;font-weight:normal;text-transform:normal;color:green;\"> Phrase:</span>          <span style=\"padding-bottom:2vh;display:inline-block;font-size:16px;\"> ' {{sentences.text}} '</span>\n                      </div>\n                </div>\n      \n              </div>\n      </div>\n </div>\n\n      \n\n      <div style=\"display:inline-block;text-align:left;margin-bottom:2vh;\" class=\"col-md-10 col-md-offset-1\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"synonyms(result.word)\">\n              <span class=\"glyphicon glyphicon-plus\"></span>Synonyms\n            </button>\n      </div>\n      <div *ngIf=\"showMore\">\n      <div *ngFor=\"let results of dictDataSynonymsResults\">\n      \n      \n        <div *ngFor=\"let each of results.lexicalEntries\">\n      \n            <div class=\"col-md-10 col-md-offset-1 border_bottom\" style=\"border-bottom:1px solid darkgray;\">\n                <span style=\"padding-bottom:2vh;display:inline-block;font-size:16px;font-weight:normal;color:#f15a24;text-transform:uppercase;letter-spacing:0.8px;\">  {{each.lexicalCategory}} </span>\n                </div>\n      \n      \n                <div *ngFor=\"let entries of each.entries\">\n      \n      <div *ngFor=\"let senses of entries.senses;let rowIndex=index\">\n      \n      \n        <div *ngFor=\"let examples of senses.examples \">\n      \n      \n            <div class=\"col-md-10 col-md-offset-1 border_bottom\" style=\"border-bottom:1px solid darkgray;\">\n                    <span style=\"color:black;font-style:normal;font-weight: normal;padding-bottom:2vh;display:inline-block;font-size:16px;font-weight:normal;text-transform:normal;color:green;\"> Phrase:</span>            <span style=\"padding-bottom:2vh;display:inline-block;font-size:16px;\"> ' {{examples.text}} '</span>\n                </div>\n                <div class=\"col-md-10 col-md-offset-1\" style=\"text-align:left;padding-bottom:2vh;display:inline-block;font-size:16px;font-weight:normal;color:#656565;text-transform:uppercase;letter-spacing:0.8px;\">SYNONYMS</div>\n      <div *ngFor=\"let synonyms of senses.synonyms\">\n      \n   \n\n          <div class=\"col-md-10 col-md-offset-1 border_bottom\">\n              <span style=\"padding-bottom:2vh;display:inline-block;font-size:16px;color:darkgreen\"> {{synonyms.text}} </span>\n              </div>  \n           \n    \n      \n      \n      </div>\n          \n      \n        </div>\n      </div>\n      \n                </div>\n      \n        </div>\n      </div>\n      </div>\n      \n      <div style=\"display:inline-block;text-align:left;margin-bottom:12vh;\" class=\"col-md-10 col-md-offset-1\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"antonyms(result.word)\">\n              <span class=\"glyphicon glyphicon-plus\"></span>Antonyms\n            </button>\n      </div>\n     \n      \n      \n      \n      <div *ngIf=\"showMore\">\n      <div *ngFor=\"let results of dictDataAntonymsResults\">\n          \n          \n            <div *ngFor=\"let each of results.lexicalEntries\">\n          \n                <div class=\"col-md-10 col-md-offset-1 border_bottom\" style=\"border-bottom:1px solid darkgray;\">\n                    <span style=\"padding-bottom:2vh;display:inline-block;font-size:16px;font-weight:normal;color: #f15a24;text-transform: uppercase;letter-spacing: 0.8px;\">  {{each.lexicalCategory}} </span>\n                    </div>\n          \n          \n                    <div *ngFor=\"let entries of each.entries\">\n          \n          <div *ngFor=\"let senses of entries.senses;let rowIndex=index\">\n          \n          \n            <div *ngFor=\"let examples of senses.examples\">\n          \n          \n                <div class=\"col-md-10 col-md-offset-1 border_bottom\" style=\"border-bottom:1px solid darkgray;\">\n                        <span style=\"color:black;font-style:normal;font-weight: normal;padding-bottom:2vh;display:inline-block;font-size:16px;font-weight:normal;text-transform:normal;color:green;\"> Phrase:</span>       <span style=\"padding-bottom:2vh;display:inline-block;font-size:16px;\"> ' {{examples.text}} '</span>\n                    </div>\n                    <div class=\"col-md-10 col-md-offset-1\" style=\"text-align:left;padding-bottom:2vh;display:inline-block;font-size:16px;font-weight:normal;color:#656565;text-transform:uppercase;letter-spacing:0.8px;\">ANTONYMS</div>\n          \n          <div *ngFor=\"let antonyms of senses.antonyms\">\n          \n          \n      \n          \n          \n              <div class=\"col-md-10 col-md-offset-1 border_bottom\">\n                  <span style=\"padding-bottom:2vh;display:inline-block;font-size:16px;color:mediumvioletred;\">  {{antonyms.text}} </span>\n                  </div>  \n          \n        \n          \n          </div>\n              \n          \n            </div>\n          </div>\n          \n                    </div>\n          \n            </div>\n          </div>\n   </div>\n\n      \n\n    \n\n\n    \n\n\n\n\n\n\n\n\n\n\n\n\n\n    </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/fullpageview/fullpageview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullpageviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__got_http_service_service__ = __webpack_require__("./src/app/got-http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FullpageviewComponent = /** @class */ (function () {
    function FullpageviewComponent(_route, router, gotHttpService, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.gotHttpService = gotHttpService;
        this.toastr = toastr;
        this.showMore = false;
        this.toastr.setRootViewContainerRef(vcr);
    }
    FullpageviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var myWord = this._route.snapshot.paramMap.get('fullpageviewword');
        console.log(myWord);
        this.gotHttpService.getDictonaryData(myWord).subscribe(function (data) {
            _this.dictData = data;
            console.log(_this.dictData);
            _this.results = data.results;
            console.log(_this.results);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
            if (error.status === 400) {
                _this.router.navigate(['/errorbadrequest']);
            }
            if (error.status === 404) {
                _this.router.navigate(['/errornotfound']);
            }
            if (error.status === 403) {
                _this.router.navigate(['/errorauthenticationfailed']);
            }
            if (error.status === 414) {
                _this.router.navigate(['/errorurltoolong']);
            }
        });
    };
    FullpageviewComponent.prototype.MoreSentences = function (val) {
        var _this = this;
        console.log(val);
        console.log(this.myId);
        this.showMore = !this.showMore;
        if (this.showMore) {
            __WEBPACK_IMPORTED_MODULE_7_jquery__(event.srcElement.children[0]).removeClass('glyphicon glyphicon-plus').addClass('glyphicon glyphicon-minus');
        }
        if (!this.showMore) {
            __WEBPACK_IMPORTED_MODULE_7_jquery__(event.srcElement.children[0]).removeClass('glyphicon glyphicon-minus').addClass('glyphicon glyphicon-plus');
        }
        this.gotHttpService.getDictonaryDataSentences(val).subscribe(function (data) {
            _this.dictDataSentences = data;
            console.log(_this.dictDataSentences);
            _this.dictDataSentencesResults = data.results;
            console.log(_this.dictDataSentencesResults);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
            if (error.status === 400) {
                _this.router.navigate(['/errorbadrequest']);
            }
            if (error.status === 404) {
                _this.router.navigate(['/errornotfound']);
            }
            if (error.status === 403) {
                _this.router.navigate(['/errorauthenticationfailed']);
            }
            if (error.status === 414) {
                _this.router.navigate(['/errorurltoolong']);
            }
        });
    };
    FullpageviewComponent.prototype.synonyms = function (val) {
        var _this = this;
        console.log(val);
        this.showMore = !this.showMore;
        if (this.showMore) {
            __WEBPACK_IMPORTED_MODULE_7_jquery__(event.srcElement.children[0]).removeClass('glyphicon glyphicon-plus').addClass('glyphicon glyphicon-minus');
        }
        if (!this.showMore) {
            __WEBPACK_IMPORTED_MODULE_7_jquery__(event.srcElement.children[0]).removeClass('glyphicon glyphicon-minus').addClass('glyphicon glyphicon-plus');
        }
        this.gotHttpService.getDictonaryDataSynonyms(val).subscribe(function (data) {
            // this.toastr.success('Good to go!!!', 'Success!');
            _this.dictDataSynonyms = data;
            console.log(_this.dictDataSynonyms);
            _this.dictDataSynonymsResults = data.results;
            console.log(_this.dictDataSynonymsResults);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
            if (error.status === 400) {
                _this.router.navigate(['/errorbadrequest']);
            }
            if (error.status === 404) {
                _this.router.navigate(['/errornotfound']);
            }
            if (error.status === 403) {
                _this.router.navigate(['/errorauthenticationfailed']);
            }
            if (error.status === 414) {
                _this.router.navigate(['/errorurltoolong']);
            }
        });
    };
    FullpageviewComponent.prototype.antonyms = function (val) {
        var _this = this;
        console.log(val);
        this.showMore = !this.showMore;
        if (this.showMore) {
            __WEBPACK_IMPORTED_MODULE_7_jquery__(event.srcElement.children[0]).removeClass('glyphicon glyphicon-plus').addClass('glyphicon glyphicon-minus');
        }
        if (!this.showMore) {
            __WEBPACK_IMPORTED_MODULE_7_jquery__(event.srcElement.children[0]).removeClass('glyphicon glyphicon-minus').addClass('glyphicon glyphicon-plus');
        }
        this.gotHttpService.getDictonaryDataAntonyms(val).subscribe(function (data) {
            //    this.toastr.success('Good to go!!!', 'Success!');
            _this.dictDataAntonyms = data;
            console.log(_this.dictDataAntonyms);
            _this.dictDataAntonymsResults = data.results;
            console.log(_this.dictDataAntonymsResults);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
            if (error.status === 400) {
                _this.router.navigate(['/errorbadrequest']);
            }
            if (error.status === 404) {
                _this.router.navigate(['/errornotfound']);
            }
            if (error.status === 403) {
                _this.router.navigate(['/errorauthenticationfailed']);
            }
            if (error.status === 414) {
                _this.router.navigate(['/errorurltoolong']);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myId'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FullpageviewComponent.prototype, "myId", void 0);
    FullpageviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fullpageview',
            template: __webpack_require__("./src/app/fullpageview/fullpageview.component.html"),
            styles: [__webpack_require__("./src/app/fullpageview/fullpageview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__got_http_service_service__["a" /* GotHttpService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], FullpageviewComponent);
    return FullpageviewComponent;
}());



/***/ }),

/***/ "./src/app/got-http-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GotHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_ratelimiter__ = __webpack_require__("./node_modules/rxjs-ratelimiter/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_ratelimiter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_ratelimiter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GotHttpService = /** @class */ (function () {
    function GotHttpService(_http) {
        this._http = _http;
        this.rateLimiter = new __WEBPACK_IMPORTED_MODULE_6_rxjs_ratelimiter___default.a(1, 1000);
        console.log("BlogHttpService is called");
    }
    GotHttpService.prototype.handleError = function (err) {
        console.log("Handle error Http calls");
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err.message);
    };
    GotHttpService.prototype.getDictonaryData = function (name) {
        var myResponse = this._http.get('/oxfordapi/' + name);
        return this.rateLimiter.limit(myResponse);
    };
    GotHttpService.prototype.getDictonaryDataSentences = function (name) {
        var myResponse = this._http.get('/oxfordapi/' + name + '/sentences');
        return this.rateLimiter.limit(myResponse);
    };
    GotHttpService.prototype.getDictonaryDataSynonyms = function (name) {
        var myResponse = this._http.get('/oxfordapi/' + name + '/synonyms');
        return this.rateLimiter.limit(myResponse);
    };
    GotHttpService.prototype.getDictonaryDataAntonyms = function (name) {
        var myResponse = this._http.get('/oxfordapi/' + name + '/antonyms');
        return this.rateLimiter.limit(myResponse);
    };
    GotHttpService.prototype.getAutocompleteDictonaryData = function (name) {
        var myResponse = this._http.get('/oxfordapiauto/' + 'en' + '?q=' + name + '&prefix=true' + '&limit=10');
        return this.rateLimiter.limit(myResponse);
    };
    GotHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GotHttpService);
    return GotHttpService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin-left:2vw;\r\n    margin-bottom: 2vh;\r\n    \r\n}\r\n.red{\r\n    border:2px solid indianred;\r\n}\r\n.green{\r\n    border:2px solid chartreuse;\r\n}\r\n.blue{\r\n    border:2px solid lightblue;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row\" style=\"text-align:center\">\n    <div>\n    <!--  <input id=\"name\" type=\"text\" [(ngModel)]=\"name\" (change)=\"getDictonaryData(name)\"/>-->\n      <br><br>\n      <br/>\n    \n<!--<div *ngFor=\"let item of autoDictDataresults\">\n{{item.word}}\n\n\n<select class=\"form-control-custom\"  placeholder=\"Filter Category By\">\n  <option  [ngValue]=\"undefined\"selected >Get similar names</option>\n\n    <option *ngFor=\"let item of autoDictDataresults\"> {{item.word}}</option>\n\n</select>-->\n\n<!--<div class=\"container\" >\n  <div class=\"input-field col s12\">\n\n    <input type=\"text\" name=\"query\"  [(ngModel)]=\"name\" (change)=\"getDictonaryData(name)\" id=\"query\" placeholder=\"Type word or phrase\" autocomplete=\"off\" maxlength=\"100\" autocapitalize=\"none\" class=\"autocomplete active-query\">\n\n  </div>\n  <div class=\"suggestions\">\n      <ul *ngFor=\"let item of autoDictDataresults\">\n          <li >\n              <a (click)=\"select(item)\">{{item.word}}</a>\n          </li>\n      </ul>\n  </div>\n</div>  \t-->\n\n\n\n<section class=\"filter-wrapper\">\n    <div class=\"keyword-wrapper col-md-10 col-xs-4\" style=\"margin-top:5vh;\">\n      \n   <input title=\"Please enter atleast three characters for auto suggestion\"class=\"form-control-custom\" #textbox (keyup.enter)=\"methodInsideYourComponent($event)\" [formControl]=\"queryField\" type=\"text\"  placeholder=\"Type Word or Phrase\"/>\n   <button type=\"submit\" (click)=\"methodInsideYourComponent2(textbox.value)\"><i class=\"fa fa-search\"></i></button>\n\n  </div>\n     <ul class=\"filter-select\" (clickOutside)=\"onClickedOutside($event)\">\n        <li *ngFor=\"let result of autoDictDataresults\" class=\"filter-select-list\" (click)=\"methodInsideYourComponent2(result.word)\"><p class=\"artist-name\">\n          {{result.word}}</p></li>\n\n      </ul>\n   </section>\n<div class=\"col-md-4\"  style=\"margin-left:3vw;\">\n   <div class=\"card\" style=\"height:30vh;margin-top: 5vh;border:1px solid #F0F0F0;width:86%;overflow:auto;background:#FCFCE8\">\n      <div class=\"card-body\">\n       <div class=\"word_year margin_t_b\"> Word of the year</div>\n    \n      </div>\n      <div class=\"card-body\">\n       <div class=\"margin_t_b word_year_border\"></div>\n      </div>\n      <div class=\"card-body\">\n          <div class=\"margin_t_b word_year\">2017</div>\n         </div>\n         <div class=\"card-body\">\n            <div class=\"margin_t_b word_year word\">YOUTHQUAKE</div>\n           </div>\n           <div class=\"card-body\">\n              <div class=\"margin_t_b word_year\">A significant cultural, political, or social change arising from the actions or influence of young people.</div>\n             </div>\n    </div>\n  </div>\n\n\n  <div class=\"col-md-4\" style=\"float:right;margin-right:3vw;\">\n      <div class=\"card\" style=\"height:30vh;margin-top: 5vh;border:1px solid #F0F0F0;width:86%;overflow:auto;background:#FCFCE8\">\n         <div class=\"card-body\">\n          <div class=\"word_year margin_t_b\"> Word of the year</div>\n       \n         </div>\n         <div class=\"card-body\">\n          <div class=\"margin_t_b word_year_border\"></div>\n         </div>\n         <div class=\"card-body\">\n             <div class=\"margin_t_b word_year\">2016</div>\n            </div>\n            <div class=\"card-body\">\n               <div class=\"margin_t_b word_year word\">POST-TRUTH</div>\n              </div>\n              <div class=\"card-body\">\n                 <div class=\"margin_t_b word_year\">Relating to or denoting circumstances in which objective facts are less influential in shaping public opinion than appeals to emotion and personal belief.</div>\n                </div>\n       </div>\n     </div>\n   \n\n  \n\n\n<!--   <ngx-slick class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"slideConfig\">\n    <div ngxSlickItem *ngFor=\"let slide of slides\" class=\"slide\">\n          <img src=\"{{ slide.img }}\" alt=\"\" width=\"100%\">\n    </div>\n</ngx-slick>-->\n\n  </div>\n\n\n</div>\n<angular-image-slider [images]=\"imagesUrl\"></angular-image-slider>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__got_http_service_service__ = __webpack_require__("./src/app/got-http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = /** @class */ (function () {
    function HomeComponent(_route, router, gotHttpService, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.gotHttpService = gotHttpService;
        this.toastr = toastr;
        this.items = [];
        this.resultsforms = [];
        this.queryField = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]();
        this.toastr.setRootViewContainerRef(vcr);
        this.items = [
            { name: 'assets/Images/home.png' },
            { name: 'assets/Images/home.png' },
        ];
    }
    HomeComponent.prototype.onClickedOutside = function (e) {
        console.log('Clicked outside:', e);
        event.stopPropagation();
        // $(event.srcElement);
        // this.isOpen = !this.isOpen;
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imagesUrl = [
            'http://www.graphics99.com/wp-content/uploads/2012/02/the-vacublary-of-the-average-person.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzZdDay4ZD8VvuAkEhK2DYYE5X4GUTwB1WY-x_ZGaOusQOLWM',
            'https://i.pinimg.com/originals/67/02/aa/6702aae3724fd6dd735f96882dedb2a9.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzuxsu86FqJ-9UpIv39nHlNQBVm_PBYYD7X6RKdDQYXJYi7qBYQ',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXTq2ZuW1tv7wZ4c6XcHXMM9bdVbNwKBmvid3gRBxtqxEuV8LiA',
            'http://tse2.mm.bing.net/th?id=OIP.0VGEZ-ffoe37CZgGlR9M_wHaFl',
            'https://i.pinimg.com/originals/54/ab/08/54ab087174827adfd17ab31066807e88.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlY2pkmOrpwtDzGL0bTk7ivut_8sdEj7TuT_0ZcUI8P6Bh9t_9',
            'https://i.pinimg.com/originals/24/58/53/2458537f7a982b8ac600ff2a68548a88.png',
            'https://i.pinimg.com/originals/0c/a1/0e/0ca10ed68635e24bf1f0cdcd595a264e.jpg'
        ];
        this.queryField.valueChanges
            .subscribe(function (result) {
            _this.sample = result;
            console.log(result);
            console.log(_this.sample);
        });
        //  this.gotHttpService.getDictonaryData().subscribe(
        //   data => {
        //   this.dictData = data;
        //   console.log(this.dictData);
        //  } ,
        //  error => {
        //   console.log("some error occured");
        //   console.log(error.errorMessage);
        // }
        // );
        // Do code to fetch from this.dictData
        console.log(this.queryField.valueChanges);
        this.queryField.valueChanges
            .debounceTime(200).distinctUntilChanged().subscribe(function (result) { return _this.gotHttpService.getDictonaryData(result).subscribe(function (data) {
            _this.dictData = data;
            console.log(_this.dictData);
            _this.results = data.results;
            console.log(_this.results);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        }); });
        this.queryField.valueChanges
            .debounceTime(200).distinctUntilChanged().subscribe(function (result) { return result.length >= 3 ? _this.gotHttpService.getAutocompleteDictonaryData(result).subscribe(function (data) {
            _this.autoDictData = data;
            console.log(_this.autoDictData);
            _this.autoDictDataresults = data.results;
            console.log(_this.autoDictDataresults);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        }) : _this.toastr.clearToast; });
    };
    HomeComponent.prototype.methodInsideYourComponent = function (val) {
        console.log(val);
        this.someProperty = val.target.value;
        console.log(this.someProperty);
        // if (this.someProperty === 'books') {
        //  this.toastr.success('Redirecting to books', 'Success!');
        //   this.allData = this.allData.filter(x => x.value === val);
        //  console.log(this.allData);
        this.router.navigate(['/fullpageview', { fullpageviewword: this.someProperty }]);
        // }
    };
    HomeComponent.prototype.methodInsideYourComponent2 = function (val) {
        console.log(val);
        this.someProperty2 = val;
        // if (this.someProperty === 'books') {
        //  this.toastr.success('Redirecting to books', 'Success!');
        //   this.allData = this.allData.filter(x => x.value === val);
        //  console.log(this.allData);
        this.router.navigate(['/fullpageview', { fullpageviewword: this.someProperty2 }]);
        // }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__got_http_service_service__["a" /* GotHttpService */], __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map