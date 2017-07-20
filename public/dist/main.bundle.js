webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browse_browse_component__ = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listings_listings_component__ = __webpack_require__("../../../../../src/app/listings/listings.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__browse_browse_component__["a" /* BrowseComponent */] },
    { path: 'my_listings', component: __WEBPACK_IMPORTED_MODULE_4__listings_listings_component__["a" /* ListingsComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet (createUserEvent)=\"propagateUser($event)\"></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_userService) {
        this._userService = _userService;
        this.title = 'app';
        this.current_user = {};
    }
    AppComponent.prototype.propagateUser = function (user) {
        console.log('in the app component...');
        this.current_user = user;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__browse_browse_component__ = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__listings_listings_component__ = __webpack_require__("../../../../../src/app/listings/listings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bike_service__ = __webpack_require__("../../../../../src/app/bike.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Modules





//Components





//Services


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__browse_browse_component__["a" /* BrowseComponent */],
            __WEBPACK_IMPORTED_MODULE_9__listings_listings_component__["a" /* ListingsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_11__bike_service__["a" /* BikeService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bike.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BikeService = (function () {
    function BikeService(_http) {
        this._http = _http;
    }
    BikeService.prototype.getBikes = function () {
        return this._http.get('/bikes').map(function (data) { return data.json(); }).toPromise();
    };
    BikeService.prototype.updateBike = function (bike) {
        return this._http.patch("/bikes/" + bike._id, bike).map(function (data) { return data.json(); }).toPromise();
    };
    BikeService.prototype.destroyBike = function (id) {
        return this._http.delete("/bikes/" + id).map(function (data) { return data.json(); }).toPromise();
    };
    BikeService.prototype.createBike = function (newBike) {
        console.log(newBike);
        return this._http.post('/bikes', newBike).map(function (data) { return data.json(); }).toPromise();
    };
    return BikeService;
}());
BikeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BikeService);

var _a;
//# sourceMappingURL=bike.service.js.map

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul>\n    <li [routerLink]=\"['/dashboard']\" class=\"inline\">Browse</li>\n    <li [routerLink]=\"['/my_listings']\" class=\"inline\">My Listings</li>\n    <li (click)=\"logout()\" class=\"inline\">Log Off</li>\n  </ul>\n</div>\n<div *ngFor=\"let bike of bikes; let idx = index\">\n  <p>{{ bike.title}}</p>\n  <p>{{ bike.description }}</p>\n  <p>{{ bike.price }}</p>\n  <p>{{ bike.location }}</p>\n  <button *ngIf=\"bike.user._id == currentUser._id\" (click)=\"destroyBike(bike._id, idx)\">Delete</button>\n  <button *ngIf=\"bike.user._id != currentUser._id\" (click)=\"alertUserInfo(idx)\">Contact</button>\n  <div *ngIf=\"bike.display\">\n    <h4>{{ bike.user.name }}</h4>\n    <h4>{{ bike.user.email }}</h4>\n    <button (click)=\"hideUserInfo(idx)\">Hide</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bike_service__ = __webpack_require__("../../../../../src/app/bike.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrowseComponent = (function () {
    function BrowseComponent(_bikeService, _userService, _router) {
        this._bikeService = _bikeService;
        this._userService = _userService;
        this._router = _router;
        this.bikes = [];
        this.currentUser = {};
        this.currentUser = this._userService.getCurrentUser();
        this.getBikes();
    }
    BrowseComponent.prototype.getBikes = function () {
        var _this = this;
        return this._bikeService.getBikes()
            .then(function (data) {
            console.log(data);
            _this.bikes = data;
            for (var _i = 0, _a = _this.bikes; _i < _a.length; _i++) {
                var bike = _a[_i];
                bike.display = false;
            }
        })
            .catch(function (err) { console.log(err); });
    };
    BrowseComponent.prototype.alertUserInfo = function (idx) {
        this.bikes[idx].display = true;
    };
    BrowseComponent.prototype.hideUserInfo = function (idx) {
        this.bikes[idx].display = false;
    };
    BrowseComponent.prototype.destroyBike = function (id, idx) {
        var _this = this;
        return this._bikeService.destroyBike(id)
            .then(function (bike) {
            _this.bikes.splice(idx, 1);
        })
            .catch(function (err) { console.log(err); });
    };
    BrowseComponent.prototype.logout = function () {
        this._userService.logout();
        this._router.navigateByUrl('/');
    };
    BrowseComponent.prototype.ngOnInit = function () {
        this.getBikes();
    };
    return BrowseComponent;
}());
BrowseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-browse',
        template: __webpack_require__("../../../../../src/app/browse/browse.component.html"),
        styles: [__webpack_require__("../../../../../src/app/browse/browse.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bike_service__["a" /* BikeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bike_service__["a" /* BikeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BrowseComponent);

var _a, _b, _c;
//# sourceMappingURL=browse.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Bicycle Marketplace</h1>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/listings/listings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listings/listings.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul>\n    <li [routerLink]=\"['/dashboard']\" class=\"inline\">Browse</li>\n    <li [routerLink]=\"['/my_listings']\" class=\"inline\">My Listings</li>\n    <li (click)=\"logout()\" class=\"inline\">Log Off</li>\n  </ul>\n</div>\n<div>\n  {{ currentUser | json }}\n  <h3>New Bike</h3>\n  <form (submit)=\"createBike(newBike)\" #bikeForm=\"ngForm\">\n    <div>\n      <label>Title</label>\n      <input type=\"text\" name=\"title\" [(ngModel)]=\"newBike.title\">\n    </div>\n    <div>\n      <label>Description</label>\n      <input type=\"text\" name=\"description\" [(ngModel)]=\"newBike.description\">\n    </div>\n    <div>\n      <label>Location</label>\n      <input type=\"text\" name=\"location\" [(ngModel)]=\"newBike.location\">\n    </div>\n    <div>\n      <label>Price</label>\n      $<input type=\"number\" min=\"1\" name=\"price\" [(ngModel)]=\"newBike.price\">\n    </div>\n    <input type=\"submit\" value=\"Submit\">\n  </form>\n</div>\n<div>\n  <h3>My Listings</h3>\n  <div *ngFor=\"let bike of currentUser.bikes; let idx = index\">\n    {{ bike | json}}\n    <form (submit)=\"updateBike(bike)\">\n      <div>\n        <label>Title</label>\n        <input type=\"text\" name=\"title\" [(ngModel)]=\"bike.title\">\n      </div>\n      <div>\n        <label>Description</label>\n        <input type=\"text\" name=\"description\" [(ngModel)]=\"bike.description\">\n      </div>\n      <div>\n        <label>Price</label>\n        <input type=\"number\" min=\"1\" name=\"price\" [(ngModel)]=\"bike.price\">\n      </div>\n      <div>\n        <label>Location</label>\n        <input type=\"text\" name=\"location\" [(ngModel)]=\"bike.location\">\n      </div>\n      <input type=\"submit\" value=\"Update\">\n      <button (click)=\"destroyBike(bike._id, idx)\">Delete</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/listings/listings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bike_service__ = __webpack_require__("../../../../../src/app/bike.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListingsComponent = (function () {
    function ListingsComponent(_bikeService, _userService, _router) {
        var _this = this;
        this._bikeService = _bikeService;
        this._userService = _userService;
        this._router = _router;
        this.newBike = {};
        this.currentUser = { _id: 0, bikes: [] };
        this.bikeErrors = [];
        this.displayBike = {};
        this.setCurrentUser();
        this._userService.show(this.currentUser._id)
            .then(function (user) { _this.currentUser = user; })
            .catch(function (err) { console.log(err); });
        console.log(this.currentUser);
    }
    ListingsComponent.prototype.setCurrentUser = function () {
        this.currentUser = this._userService.getCurrentUser();
    };
    ListingsComponent.prototype.destroyBike = function (id, idx) {
        var _this = this;
        return this._bikeService.destroyBike(id)
            .then(function (bike) {
            _this.currentUser.bikes.splice(idx, 1);
        })
            .catch(function (err) { console.log(err); });
    };
    ListingsComponent.prototype.logout = function () {
        this._userService.logout();
        this._router.navigateByUrl('/');
    };
    ListingsComponent.prototype.updateBike = function (bike) {
        return this._bikeService.updateBike(bike)
            .then(function (bike) {
            console.log(bike);
        })
            .catch(function (err) { console.log(err); });
    };
    ListingsComponent.prototype.createBike = function (newBike) {
        var _this = this;
        newBike.user = this.currentUser._id;
        return this._bikeService.createBike(newBike)
            .then(function (bike) {
            if (bike.errors) {
                for (var key in bike.errors) {
                    var error = bike.errors[key];
                    _this.bikeErrors.push(error.message);
                }
            }
            else {
                //push Bike object to currentUser.bikes
                _this.currentUser.bikes.push(bike);
                //or make an API call?
            }
        })
            .catch(function (err) { console.log(err); });
    };
    ListingsComponent.prototype.ngOnInit = function () {
        //go get session data here and attach to the controller
    };
    return ListingsComponent;
}());
ListingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-listings',
        template: __webpack_require__("../../../../../src/app/listings/listings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/listings/listings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bike_service__["a" /* BikeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bike_service__["a" /* BikeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ListingsComponent);

var _a, _b, _c;
//# sourceMappingURL=listings.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Login</h3>\n  <form (submit)=\"login(loginUser); loginForm.reset()\" #loginForm=\"ngForm\">\n    <div>\n      <label>Email</label>\n      <input type=\"text\" name=\"email\" [(ngModel)]=\"loginUser.email\">\n    </div>\n    <div>\n      <label>Password</label>\n      <input type=\"text\" name=\"password\" [(ngModel)]=\"loginUser.password\">\n    </div>\n    <input type=\"submit\" value=\"Login\">\n  </form>\n  <p *ngFor=\"let error of loginErrors\">{{ error }}</p>\n</div>\n<div>\n  <h3>Register</h3>\n  <form (submit)=\"createUser(newUser); registerForm.reset()\" #registerForm=\"ngForm\">\n    <div>\n      <label>Name</label>\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"newUser.name\">\n    </div>\n    <div>\n      <label>Email</label>\n      <input type=\"text\" name=\"email\" [(ngModel)]=\"newUser.email\">\n    </div>\n    <div>\n      <label>Password</label>\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"newUser.password\">\n    </div>\n    <div>\n      <label>Confirm PW</label>\n      <input type=\"password\" name=\"password_confirmation\" [(ngModel)]=\"newUser.password_confirmation\">\n    </div>\n    <input type=\"submit\" value=\"Register\">\n    <p [ngStyle]=\"{'color':'red'}\" *ngFor=\"let error of registrationErrors\">{{ error }}</p>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.createUserEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */];
        this.loginUser = {};
        this.newUser = {};
        this.registrationErrors = [];
        this.loginErrors = [];
        console.log(localStorage);
    }
    // propagateUser(newUser){
    //   this.createUserEvent.emit(newUser)
    // }
    LoginComponent.prototype.login = function (loginUser) {
        var _this = this;
        console.log(loginUser);
        return this._userService.authenticate(loginUser)
            .then(function (user) {
            console.log(user);
            if (user.errors) {
                console.log('here');
                for (var key in user.errors) {
                    var error = user.errors[key];
                    _this.loginErrors.push(error.message);
                    console.log(_this.loginErrors);
                }
            }
            else {
                _this._userService.storeCurrentUser(user);
                _this._router.navigateByUrl('/dashboard');
            }
        })
            .catch(function (err) { console.log(err); });
    };
    LoginComponent.prototype.createUser = function (newUser) {
        var _this = this;
        console.log('in app component');
        console.log(newUser);
        return this._userService.create(newUser)
            .then(function (user) {
            console.log(user);
            if (user.errors) {
                for (var key in user.errors) {
                    var error = user.errors[key];
                    _this.registrationErrors.push(error.message);
                }
            }
            else {
                _this._userService.storeCurrentUser(user);
                _this._router.navigateByUrl('/dashboard');
            }
        })
            .catch(function (err) { console.log(err); });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "createUserEvent", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem('currentUser'));
    };
    UserService.prototype.storeCurrentUser = function (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    };
    UserService.prototype.create = function (newUser) {
        return this._http.post('/users', newUser).map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.show = function (id) {
        return this._http.get("/users/" + id).map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.session = function () {
        return this._http.get('/session').map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.authenticate = function (loginUser) {
        console.log(loginUser);
        return this._http.post('/session', loginUser).map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map