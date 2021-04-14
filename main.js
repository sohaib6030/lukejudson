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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(snackBar, swUpdate) {
        this.snackBar = snackBar;
        this.swUpdate = swUpdate;
        this.title = 'app';
    }
    AppComponent.prototype.getUpdatedUI = function () {
        if (navigator.onLine) {
            document.querySelector('body').style = '';
        }
        else {
            document.querySelector('body').style = 'filter: grayscale(1)';
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Check for SW update status
        if (this.swUpdate.isEnabled) {
            this.swUpdate.activated.subscribe(function () {
                var sw = _this.snackBar.open('New version Available', 'Install Now', { duration: 4000 });
                sw.onAction().subscribe(function () {
                    window.location.reload();
                });
            });
        }
        // Checking Network Status
        this.getUpdatedUI();
        window.addEventListener('online', this.getUpdatedUI);
        window.addEventListener('pffline', this.getUpdatedUI);
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        if (navigator.standalone === false) {
            // This is an iOS device and we are in the Browser.
            this.snackBar.open('You can add this PWA to the Home sceen', '', { duration: 3000 });
        }
        if (navigator.standalone === undefined) {
            // this not iOS
            if (window.matchMedia('(display-mode: browser').matches) {
                // we are in the broswer
                window.addEventListener('beforeinstallprompt', function (event) {
                    event.preventDefault();
                    var sb = _this.snackBar.open('Do you want to install this App?', 'Install', { duration: 5000 });
                    sb.onAction().subscribe(function () {
                        event.prompt();
                        event.userChoice.then(function (result) {
                            if (result.outcome === 'dismissed') {
                                // TODO: Track no installations
                            }
                            else {
                                // TODO: It was installed
                            }
                        });
                    });
                });
            }
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geolocation.service */ "./src/app/geolocation.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vehicle/vehicle.component */ "./src/app/vehicle/vehicle.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _trailer_trailer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./trailer/trailer.component */ "./src/app/trailer/trailer.component.ts");
/* harmony import */ var _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./equipment/equipment.component */ "./src/app/equipment/equipment.component.ts");
/* harmony import */ var _createvehicle_createvehicle_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./createvehicle/createvehicle.component */ "./src/app/createvehicle/createvehicle.component.ts");
/* harmony import */ var _createcontact_createcontact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./createcontact/createcontact.component */ "./src/app/createcontact/createcontact.component.ts");
/* harmony import */ var _createtrailer_createtrailer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./createtrailer/createtrailer.component */ "./src/app/createtrailer/createtrailer.component.ts");
/* harmony import */ var _createequipment_createequipment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./createequipment/createequipment.component */ "./src/app/createequipment/createequipment.component.ts");
/* harmony import */ var _truck_truck_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./truck/truck.component */ "./src/app/truck/truck.component.ts");
/* harmony import */ var _createtruck_createtruck_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./createtruck/createtruck.component */ "./src/app/createtruck/createtruck.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { ListComponent } from './list/list.component';
// import { CreateVehicleComponent } from './createvehicle/createvehicle.component';

















var routes = [
    { path: '', component: _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_15__["VehicleComponent"] },
    { path: 'Createvehicle', component: _createvehicle_createvehicle_component__WEBPACK_IMPORTED_MODULE_19__["CreateVehicleComponent"] },
    { path: 'CreateVehicle/:id', component: _createvehicle_createvehicle_component__WEBPACK_IMPORTED_MODULE_19__["CreateVehicleComponent"] },
    { path: 'Createcontact', component: _createcontact_createcontact_component__WEBPACK_IMPORTED_MODULE_20__["CreatecontactComponent"] },
    { path: 'Createcontact/:id', component: _createcontact_createcontact_component__WEBPACK_IMPORTED_MODULE_20__["CreatecontactComponent"] },
    { path: 'Createtrailer', component: _createtrailer_createtrailer_component__WEBPACK_IMPORTED_MODULE_21__["CreatetrailerComponent"] },
    { path: 'Createtariler/:id', component: _createtrailer_createtrailer_component__WEBPACK_IMPORTED_MODULE_21__["CreatetrailerComponent"] },
    { path: 'Createequipment', component: _createequipment_createequipment_component__WEBPACK_IMPORTED_MODULE_22__["CreateequipmentComponent"] },
    { path: 'Createequipment/:id', component: _createequipment_createequipment_component__WEBPACK_IMPORTED_MODULE_22__["CreateequipmentComponent"] },
    { path: 'Createtruck', component: _createtruck_createtruck_component__WEBPACK_IMPORTED_MODULE_24__["CreatetruckComponent"] },
    { path: 'Createtruck/:id', component: _createtruck_createtruck_component__WEBPACK_IMPORTED_MODULE_24__["CreatetruckComponent"] },
    { path: 'VehicleComponent', component: _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_15__["VehicleComponent"] },
    { path: 'TrailerComponent', component: _trailer_trailer_component__WEBPACK_IMPORTED_MODULE_17__["TrailerComponent"] },
    { path: 'ContactsComponent', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_16__["ContactsComponent"] },
    { path: 'EquipmentComponent', component: _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_18__["EquipmentComponent"] },
    { path: 'TruckComponent', component: _truck_truck_component__WEBPACK_IMPORTED_MODULE_23__["TruckComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                // ListComponent,
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_15__["VehicleComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_16__["ContactsComponent"],
                _trailer_trailer_component__WEBPACK_IMPORTED_MODULE_17__["TrailerComponent"],
                _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_18__["EquipmentComponent"],
                _createvehicle_createvehicle_component__WEBPACK_IMPORTED_MODULE_19__["CreateVehicleComponent"],
                _createequipment_createequipment_component__WEBPACK_IMPORTED_MODULE_22__["CreateequipmentComponent"],
                _createcontact_createcontact_component__WEBPACK_IMPORTED_MODULE_20__["CreatecontactComponent"],
                _createtrailer_createtrailer_component__WEBPACK_IMPORTED_MODULE_21__["CreatetrailerComponent"],
                _truck_truck_component__WEBPACK_IMPORTED_MODULE_23__["TruckComponent"],
                _createtruck_createtruck_component__WEBPACK_IMPORTED_MODULE_24__["CreatetruckComponent"],
            ],
            imports: [
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes, { useHash: false }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatLineModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPseudoCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"]
            ],
            providers: [_geolocation_service__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacts/contacts.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    font-family: Lato;\r\n  }\r\n  \r\n  mat-card-content{\r\n    margin-bottom: 50px;\r\n    float: left;\r\n    margin-top: 185px;\r\n    width: 100%;\r\n  }\r\n  \r\n  mat-card{\r\n    text-align: start !important;\r\n\r\n  }\r\n  \r\n  .btnbtpm{\r\n    position: fixed;\r\n    z-index: 999999;\r\n    bottom: -5px;\r\n    width: 100%;\r\n    margin: 0% 0%;\r\n  }\r\n  \r\n  .example-card {\r\n    max-width: 96%;\r\n    margin: 12px;\r\n    padding: 15px 0px 0px 10px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('img2.png');\r\n    background-size: cover;\r\n  }\r\n  \r\n  .mat-card-avatar{\r\n    height: inherit;\r\n    width: 120px;\r\n    margin: 0 0 5px 0;\r\n    border-radius: 0px !important;\r\n    flex-shrink: 0;\r\n  }\r\n  \r\n  .mat-card-header-text {\r\n    margin: 0 0 0 10px;\r\n    text-align: start;\r\n  }\r\n  \r\n  .mat-card-actions, .mat-card-content, .mat-card-subtitle, .mat-card-title{\r\n    margin-bottom: 10px !important;\r\n  }\r\n  \r\n  .matpad{\r\n    text-align: center;\r\n    margin-bottom:60px!important;\r\n    text-align: center !important;\r\n    width: 100%;\r\n    background-color: white;\r\n    padding: 7px 0;\r\n  }\r\n  \r\n  .matpad a{\r\n    background: #e9e9e9;\r\n    width: 80%;\r\n  }\r\n  \r\n  .Pagename{\r\n    text-align: center;\r\n    font-size: 30px;\r\n    color: black;\r\n    background-color: white;\r\n    top: 13%;\r\n    position: fixed;\r\n    z-index: 9999999;\r\n    padding: 2% 0% 2%;\r\n    width: 100%;\r\n\r\n  }\r\n  \r\n  .mt-anchor{\r\n    text-align: center;\r\n  }\r\n  \r\n  .mt-plus{\r\n    font-size: 50px;\r\n  }\r\n  \r\n  .pad-top{\r\n    padding: 42px 0 0 0 !important;\r\n}\r\n  \r\n  .pad-bottom{\r\n  padding: 0 0 42px 0  !important;\r\n}\r\n  \r\n  .mat-card-avatar{\r\n  min-height: 130px !important;\r\n  max-width: 130px !important;\r\n  max-height: 140px !important;\r\n  min-width: 120px !important;\r\n  margin: 0 0 5px !important;\r\n  /* border-radius: 0!important; */\r\n  flex-shrink: 0 !important;\r\n}\r\n  \r\n  .searchbar{\r\n  text-align: center;\r\n  font-size: 30px;\r\n  color: #000;\r\n  top: 20%;\r\n  background: white;\r\n  position: fixed;\r\n  z-index: 9999999;\r\n  padding: 0 0 2%;\r\n  width: 100%;\r\n}\r\n  \r\n  .searchbar input{\r\n  width: 80%;\r\n  text-align: center;\r\n  font-size: 18px;\r\n}\r\n  \r\n  .footercard{\r\n  margin-bottom: 15% !important;\r\n}\r\n  \r\n  @media screen and (max-width: 1024px) {\r\n  .footercard{\r\n    margin-bottom: 10% !important;\r\n  }\r\n}\r\n  \r\n  @media screen and (orientation: landscape) {\r\n  .footercard{\r\n    margin-bottom: 10% !important;\r\n  }\r\n}\r\n  \r\n  mat-focused{\r\n  color: red;\r\n}\r\n  \r\n  .anchor-card{\r\n  text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-title class=\"Pagename\">Contacts</mat-card-title>\n<mat-card-title class=\"searchbar\">\n  <input placeholder=\"Search\" type=\"search\" name=\"Search\">\n</mat-card-title>\n\n<mat-card-content>\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title class=\"pad-top\">Office</mat-card-title>\n      <mat-card-subtitle class=\"pad-bottom\">807-482-2237</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title class=\"pad-top\">Office</mat-card-title>\n      <mat-card-subtitle class=\"pad-bottom\">807-482-2237</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title class=\"pad-top\">Office</mat-card-title>\n      <mat-card-subtitle class=\"pad-bottom\">807-482-2237</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title class=\"pad-top\">Office</mat-card-title>\n      <mat-card-subtitle class=\"pad-bottom\">807-482-2237</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title class=\"pad-top\">Office</mat-card-title>\n      <mat-card-subtitle class=\"pad-bottom\">807-482-2237</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title class=\"pad-top\">Office</mat-card-title>\n      <mat-card-subtitle class=\"pad-bottom\">807-482-2237</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title class=\"pad-top\">Office</mat-card-title>\n      <mat-card-subtitle class=\"pad-bottom\">807-482-2237</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title class=\"pad-top\">Office</mat-card-title>\n      <mat-card-subtitle class=\"pad-bottom\">807-482-2237</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n  <mat-divider></mat-divider>\n\n  <mat-divider class=\"footercard\"></mat-divider>\n</mat-card-content>\n\n<!-- <mat-card class=\"matpad btnbtpm\">\n  <a mat-button [routerLink]=\"['/Createcontact']\">\n    <mat-icon>add</mat-icon>\n    Add New Contact\n  </a>\n</mat-card> -->\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/createcontact/createcontact.component.css":
/*!***********************************************************!*\
  !*** ./src/app/createcontact/createcontact.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    margin: 20px;\r\n}\r\nmat-card-actions{\r\n    margin-bottom: 0 !important;\r\n}\r\nmat-form-field, mat-select {\r\n    width: 100%\r\n}\r\nmat-card-title {\r\n    font-size: large;\r\n}\r\nmat-slider {\r\n    width: 90%;\r\n}\r\nform {\r\n    margin: 160px 0 160px 0;\r\n}\r\n.top-mar2{\r\n    z-index: 20;\r\n    position: fixed;\r\n    font-size: 30px;\r\n    top: 100px;\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: white;\r\n\r\n}\r\n.save-btn {\r\n    background: red;\r\n    margin: 0px 0px 0 20px;\r\n    color: white;\r\n}\r\n.btns{\r\n    position: fixed;\r\n    bottom: 65px;\r\n    padding: 10px 0 20px 0;\r\n    background: white !important;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n}\r\nmat-card.mat-profile-img {\r\n    height: 225px !important;\r\n}\r\nmat-card.mat-profile-img picture img{\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0 !important;\r\n}\r\n.mat-form-field .ng-tns-c8-0 .mat-primary .mat-form-field-type-mat-input .mat-form-field-appearance-legacy .mat-form-field-can-float .mat-form-field-hide-placeholder .ng-star-inserted .mat-form-field-should-float .mat-focused{\r\n    color:#d00000;\r\n}\r\n@media (max-width: 599px){\r\n.mat-card-image {\r\n    width: calc(100% + 32px);\r\n    margin: 0 !important;\r\n}\r\n}\r\n@media screen and (max-width: 768px) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (orientation: landscape) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (orientation: portrait) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (max-width: 1024px) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (orientation: landscape) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 50%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (orientation: portrait) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/createcontact/createcontact.component.html":
/*!************************************************************!*\
  !*** ./src/app/createcontact/createcontact.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-title class=\"top-mar2\">\n  New Contact\n</mat-card-title>\n<form>\n<mat-card>\n\n  <div>\n    <mat-card class=\"mat-profile-img\">\n      <picture>\n        <source  srcset=\"https://media.istockphoto.com/vectors/london-red-phone-booth-vector-illustration-vector-id473247994\">\n        <img mat-card-image src=\"\" alt=\"Profile image\">\n      </picture>\n    </mat-card>\n    <mat-card>\n      <button mat-button color=\"black\">\n        <mat-icon>add</mat-icon>\n        Upload an Image\n      </button>\n    </mat-card>\n\n    <mat-card>\n      <!-- <mat-card-content> -->\n        <!-- <ul> -->\n          <!-- <li *ngFor=\"let file of files\"> -->\n             <!-- <mat-progress-bar [value]=\"file.progress\"></mat-progress-bar>  -->\n             <!-- <span id=\"file-label\">  -->\n            <!-- </span> -->\n          <!-- </li> -->\n        <!-- </ul> -->\n      <!-- </mat-card-content> -->\n  <mat-card-actions>\n    <button mat-button color=\"black\">\n      <mat-icon>add</mat-icon>\n      Upload an PDF\n    </button>\n  </mat-card-actions>\n</mat-card>\n<input type=\"file\" #fileInput id=\"fileUpload\" name=\"fileUpload\" multiple=\"multiple\" accept=\"image/*\"style=\"display:none;\" />\n</div>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Name/Company Name\" name=\"name\" >\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Number\" name=\"number\" >\n    </mat-form-field>\n    <!-- <mat-form-field>\n      <input matInput placeholder=\"Model\" name=\"model name\" >\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Year\" name=\"year\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Serial No.\" name=\"Serial\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"License Plate\" name=\"License\" >\n    </mat-form-field>\n  </mat-card> -->\n</mat-card>\n</form>\n<mat-card-title class=\"btns\">\n  <button mat-raised-button  [routerLink]=\"['/ContactsComponent']\">Cancel</button>\n  <button mat-raised-button class=\"save-btn\" >Save</button>\n  <!-- (click)=\"save()\" -->\n</mat-card-title>\n\n"

/***/ }),

/***/ "./src/app/createcontact/createcontact.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/createcontact/createcontact.component.ts ***!
  \**********************************************************/
/*! exports provided: CreatecontactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatecontactComponent", function() { return CreatecontactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreatecontactComponent = /** @class */ (function () {
    function CreatecontactComponent() {
    }
    CreatecontactComponent.prototype.ngOnInit = function () {
    };
    CreatecontactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createcontact',
            template: __webpack_require__(/*! ./createcontact.component.html */ "./src/app/createcontact/createcontact.component.html"),
            styles: [__webpack_require__(/*! ./createcontact.component.css */ "./src/app/createcontact/createcontact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreatecontactComponent);
    return CreatecontactComponent;
}());



/***/ }),

/***/ "./src/app/createequipment/createequipment.component.css":
/*!***************************************************************!*\
  !*** ./src/app/createequipment/createequipment.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    margin: 20px;\r\n}\r\nmat-card-actions{\r\n    margin-bottom: 0 !important;\r\n}\r\nmat-form-field, mat-select {\r\n    width: 100%\r\n}\r\nmat-card-title {\r\n    font-size: large;\r\n}\r\nmat-slider {\r\n    width: 90%;\r\n}\r\nform {\r\n    margin: 160px 0 160px 0;\r\n}\r\n.top-mar2{\r\n    z-index: 20;\r\n    position: fixed;\r\n    font-size: 30px;\r\n    top: 100px;\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: white !important;\r\n}\r\n.save-btn {\r\n    background: red;\r\n    margin: 0px 0px 0 20px;\r\n    color: white;\r\n}\r\n.btns{\r\n    position: fixed;\r\n    bottom: 65px;\r\n    padding: 10px 0 20px 0;\r\n    background: white !important;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n}\r\n.mat-focused {\r\n    border: 1px solid #d00000;\r\n}\r\n/* Border */\r\n/* .mat-form-field-appearance-outline .mat-form-field-outline {\r\n    color:#d00000 !important;\r\n  } */\r\n/* Font color */\r\n/* input.mat-input-element {\r\n    color:#d00000 !important;\r\n  } */\r\nmat-card.mat-profile-img {\r\n    height: 225px !important;\r\n}\r\nmat-card.mat-profile-img picture img{\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0 !important;\r\n}\r\n.mat-form-field .ng-tns-c8-0 .mat-primary .mat-form-field-type-mat-input .mat-form-field-appearance-legacy .mat-form-field-can-float .mat-form-field-hide-placeholder .ng-star-inserted .mat-form-field-should-float .mat-focused{\r\n    color:#d00000;\r\n}\r\n@media (max-width: 599px){\r\n.mat-card-image {\r\n    width: calc(100% + 32px);\r\n    margin: 0 !important;\r\n}\r\n}\r\n@media screen and (max-width: 768px) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (orientation: landscape) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (orientation: portrait) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (max-width: 1024px) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (orientation: landscape) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 50%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (orientation: portrait) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/createequipment/createequipment.component.html":
/*!****************************************************************!*\
  !*** ./src/app/createequipment/createequipment.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <mat-card-title class=\"top-mar2\">\n      New Equipment\n    </mat-card-title>\n\n<form>\n  <mat-card>\n\n\n    <div>\n      <mat-card class=\"mat-profile-img\">\n        <picture>\n          <source  srcset=\"https://www.pngkit.com/png/full/72-726691_hydro-crane-service-crane-ace.png\">\n          <img mat-card-image src=\"\" alt=\"Profile image\">\n        </picture>\n      </mat-card>\n      <mat-card>\n        <button mat-button color=\"black\">\n          <mat-icon>add</mat-icon>\n          Upload an Image\n        </button>\n      </mat-card>\n      <mat-card>\n        <!-- <mat-card-content> -->\n          <!-- <ul> -->\n            <!-- <li *ngFor=\"let file of files\"> -->\n               <!-- <mat-progress-bar [value]=\"file.progress\"></mat-progress-bar>  -->\n               <!-- <span id=\"file-label\">  -->\n              <!-- </span> -->\n            <!-- </li> -->\n          <!-- </ul> -->\n        <!-- </mat-card-content> -->\n    <mat-card-actions>\n      <button mat-button color=\"black\">\n        <mat-icon>add</mat-icon>\n        Upload an PDF\n      </button>\n    </mat-card-actions>\n  </mat-card>\n  <input type=\"file\" #fileInput id=\"fileUpload\" name=\"fileUpload\" multiple=\"multiple\" accept=\"image/*\"style=\"display:none;\" />\n</div>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Unit No.\" name=\"name\" >\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Make\" name=\"company name\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Model\" name=\"model name\" >\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Year\" name=\"year\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Description\" name=\"License\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Serial No.\" name=\" Serial\" >\n    </mat-form-field>\n  </mat-card>\n\n  <mat-card-title class=\"btns\">\n    <button mat-raised-button   [routerLink]=\"['/EquipmentComponent']\">Cancel</button>\n    <button mat-raised-button class=\"save-btn\" >Save</button>\n  </mat-card-title>\n\n</form>\n"

/***/ }),

/***/ "./src/app/createequipment/createequipment.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/createequipment/createequipment.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateequipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateequipmentComponent", function() { return CreateequipmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateequipmentComponent = /** @class */ (function () {
    function CreateequipmentComponent() {
    }
    CreateequipmentComponent.prototype.ngOnInit = function () {
    };
    CreateequipmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createequipment',
            template: __webpack_require__(/*! ./createequipment.component.html */ "./src/app/createequipment/createequipment.component.html"),
            styles: [__webpack_require__(/*! ./createequipment.component.css */ "./src/app/createequipment/createequipment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateequipmentComponent);
    return CreateequipmentComponent;
}());



/***/ }),

/***/ "./src/app/createtrailer/createtrailer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/createtrailer/createtrailer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    margin: 20px;\r\n}\r\nmat-card-actions{\r\n    margin-bottom: 0 !important;\r\n}\r\nmat-form-field, mat-select {\r\n    width: 100%\r\n}\r\nmat-card-title {\r\n    font-size: large;\r\n}\r\nmat-slider {\r\n    width: 90%;\r\n}\r\nform {\r\n    margin: 160px 0 160px 0;\r\n}\r\n.top-mar2{\r\n    z-index: 20;\r\n    position: fixed;\r\n    font-size: 30px;\r\n    top: 100px;\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: white;\r\n\r\n}\r\n.save-btn {\r\n    background: red;\r\n    margin: 0px 0px 0 20px;\r\n    color: white;\r\n}\r\n.btns{\r\n    position: fixed;\r\n    bottom: 65px;\r\n    padding: 10px 0 20px 0;\r\n    background: white !important;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n}\r\n/* .mat-focused {\r\n    border: 1px solid #d00000;\r\n}\r\nBorder */\r\n/* .mat-form-field-appearance-outline .mat-form-field-outline {\r\n    color:#d00000 !important;\r\n  } */\r\n/* Font color */\r\n/* input.mat-input-element {\r\n    color:#d00000 !important;\r\n  } */\r\nmat-card.mat-profile-img {\r\n    height: 225px !important;\r\n}\r\nmat-card.mat-profile-img picture img{\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0 !important;\r\n}\r\n.mat-form-field .ng-tns-c8-0 .mat-primary .mat-form-field-type-mat-input .mat-form-field-appearance-legacy .mat-form-field-can-float .mat-form-field-hide-placeholder .ng-star-inserted .mat-form-field-should-float .mat-focused{\r\n    color:#d00000;\r\n}\r\n@media (max-width: 599px){\r\n.mat-card-image {\r\n    width: calc(100% + 32px);\r\n    margin: 0 !important;\r\n}\r\n}\r\n@media screen and (max-width: 768px) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (orientation: landscape) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (orientation: portrait) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (max-width: 1024px) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (orientation: landscape) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 50%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (orientation: portrait) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/createtrailer/createtrailer.component.html":
/*!************************************************************!*\
  !*** ./src/app/createtrailer/createtrailer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-title class=\"top-mar2\">\n  New Trailer\n</mat-card-title>\n<form>\n  <mat-card>\n\n\n    <div>\n      <mat-card class=\"mat-profile-img\">\n        <picture>\n          <source  srcset=\"https://www.vhv.rs/dpng/d/280-2800841_transparent-camion-de-carga-png-trailer-png-png.png\">\n          <img mat-card-image src=\"\" alt=\"Profile image\">\n        </picture>\n      </mat-card>\n      <mat-card>\n        <button mat-button color=\"black\">\n          <mat-icon>add</mat-icon>\n          Upload an Image\n        </button>\n      </mat-card>\n\n      <mat-card>\n        <!-- <mat-card-content> -->\n          <!-- <ul> -->\n            <!-- <li *ngFor=\"let file of files\"> -->\n               <!-- <mat-progress-bar [value]=\"file.progress\"></mat-progress-bar>  -->\n               <!-- <span id=\"file-label\">  -->\n              <!-- </span> -->\n            <!-- </li> -->\n          <!-- </ul> -->\n        <!-- </mat-card-content> -->\n    <mat-card-actions>\n      <button mat-button color=\"black\">\n        <mat-icon>add</mat-icon>\n        Upload an PDF\n      </button>\n    </mat-card-actions>\n  </mat-card>\n  <input type=\"file\" #fileInput id=\"fileUpload\" name=\"fileUpload\" multiple=\"multiple\" accept=\"image/*\"style=\"display:none;\" />\n</div>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Unit No.\" name=\"name\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Make\" name=\"company name\" >\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Model\" name=\"model name\" >\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Year\" name=\"year\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Serial No.\" name=\"Serial\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"License Plate\" name=\"License\" >\n    </mat-form-field>\n  </mat-card>\n</form>\n<mat-card-title class=\"btns\">\n  <button mat-raised-button [routerLink]=\"['/TrailerComponent']\" >Cancel</button>\n  <button mat-raised-button class=\"save-btn\" >Save</button>\n</mat-card-title>\n\n"

/***/ }),

/***/ "./src/app/createtrailer/createtrailer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/createtrailer/createtrailer.component.ts ***!
  \**********************************************************/
/*! exports provided: CreatetrailerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatetrailerComponent", function() { return CreatetrailerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreatetrailerComponent = /** @class */ (function () {
    function CreatetrailerComponent() {
    }
    CreatetrailerComponent.prototype.ngOnInit = function () {
    };
    CreatetrailerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createtrailer',
            template: __webpack_require__(/*! ./createtrailer.component.html */ "./src/app/createtrailer/createtrailer.component.html"),
            styles: [__webpack_require__(/*! ./createtrailer.component.css */ "./src/app/createtrailer/createtrailer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreatetrailerComponent);
    return CreatetrailerComponent;
}());



/***/ }),

/***/ "./src/app/createtruck/createtruck.component.css":
/*!*******************************************************!*\
  !*** ./src/app/createtruck/createtruck.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    margin: 20px;\r\n}\r\nmat-card-actions{\r\n    margin-bottom: 0 !important;\r\n}\r\nmat-form-field, mat-select {\r\n    width: 100%\r\n}\r\nmat-card-title {\r\n    font-size: large;\r\n}\r\nmat-slider {\r\n    width: 90%;\r\n}\r\nform {\r\n    margin: 160px 0 160px 0;\r\n}\r\n.top-mar2{\r\n    z-index: 20;\r\n    position: fixed;\r\n    font-size: 30px;\r\n    top: 100px;\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: white;\r\n\r\n}\r\n.save-btn {\r\n    background: red;\r\n    margin: 0px 0px 0 20px;\r\n    color: white;\r\n}\r\n.btns{\r\n    position: fixed;\r\n    bottom: 65px;\r\n    padding: 10px 0 20px 0;\r\n    background: white !important;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n}\r\n.mat-focused {\r\n    border: 1px solid #d00000;\r\n}\r\n/* Border */\r\n.mat-form-field-appearance-outline .mat-form-field-outline {\r\n    color:#d00000 !important;\r\n  }\r\n/* Font color */\r\ninput.mat-input-element {\r\n    color:#d00000 !important;\r\n  }\r\nmat-card {\r\n    margin: 20px;\r\n}\r\nmat-card-actions{\r\n    margin-bottom: 0 !important;\r\n}\r\nmat-form-field, mat-select {\r\n    width: 100%\r\n}\r\nmat-card-title {\r\n    font-size: large;\r\n}\r\nmat-slider {\r\n    width: 90%;\r\n}\r\nform {\r\n    margin: 160px 0 160px 0;\r\n}\r\n.top-mar2{\r\n    z-index: 20;\r\n    position: fixed;\r\n    font-size: 30px;\r\n    top: 100px;\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: white;\r\n\r\n}\r\n.save-btn {\r\n    background: red;\r\n    margin: 0px 0px 0 20px;\r\n    color: white;\r\n}\r\n.btns{\r\n    position: fixed;\r\n    bottom: 65px;\r\n    padding: 10px 0 20px 0;\r\n    background: white !important;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n}\r\n.mat-focused {\r\n    border: 1px solid #d00000;\r\n}\r\n/* Border */\r\n.mat-form-field-appearance-outline .mat-form-field-outline {\r\n    color:#d00000 !important;\r\n  }\r\n/* Font color */\r\ninput.mat-input-element {\r\n    color:#d00000 !important;\r\n  }\r\nmat-card {\r\n    margin: 20px;\r\n}\r\nmat-card-actions{\r\n    margin-bottom: 0 !important;\r\n}\r\nmat-form-field, mat-select {\r\n    width: 100%\r\n}\r\nmat-card-title {\r\n    font-size: large;\r\n}\r\nmat-slider {\r\n    width: 90%;\r\n}\r\nform {\r\n    margin: 160px 0 160px 0;\r\n}\r\n.top-mar2{\r\n    z-index: 20;\r\n    position: fixed;\r\n    font-size: 30px;\r\n    top: 100px;\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: white;\r\n\r\n}\r\n.save-btn {\r\n    background: red;\r\n    margin: 0px 0px 0 20px;\r\n    color: white;\r\n}\r\n.btns{\r\n    position: fixed;\r\n    bottom: 65px;\r\n    padding: 10px 0 20px 0;\r\n    background: white !important;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n}\r\n/* .mat-focused {\r\n    border: 1px solid #d00000;\r\n} */\r\n/* Border */\r\n/* .mat-form-field-appearance-outline .mat-form-field-outline {\r\n    color:#d00000 !important;\r\n  } */\r\n/* Font color */\r\n/* input.mat-input-element {\r\n    color:#d00000 !important;\r\n  } */\r\nmat-card.mat-profile-img {\r\n    height: 225px !important;\r\n}\r\nmat-card.mat-profile-img picture img{\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0 !important;\r\n}\r\n.mat-form-field .ng-tns-c8-0 .mat-primary .mat-form-field-type-mat-input .mat-form-field-appearance-legacy .mat-form-field-can-float .mat-form-field-hide-placeholder .ng-star-inserted .mat-form-field-should-float .mat-focused{\r\n    color:#d00000;\r\n}\r\n@media (max-width: 599px){\r\n.mat-card-image {\r\n    width: calc(100% + 32px);\r\n    margin: 0 !important;\r\n}\r\n}\r\n@media screen and (max-width: 768px) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (orientation: landscape) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (orientation: portrait) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (max-width: 1024px) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (orientation: landscape) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 50%;\r\n        margin: 0 !important;\r\n    }\r\n  }\r\n@media screen and (orientation: portrait) {\r\n    mat-card.mat-profile-img picture img{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 !important;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/createtruck/createtruck.component.html":
/*!********************************************************!*\
  !*** ./src/app/createtruck/createtruck.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-title class=\"top-mar2\">\n  New Truck\n</mat-card-title>\n<form>\n  <mat-card>\n\n\n    <div>\n      <mat-card class=\"mat-profile-img\">\n        <picture>\n          <source  srcset=\"https://www.freepnglogos.com/uploads/truck-png/heavy-truck-27.png\">\n          <img mat-card-image src=\"\" alt=\"Profile image\">\n        </picture>\n      </mat-card>\n      <mat-card>\n        <button mat-button color=\"black\">\n          <mat-icon>add</mat-icon>\n          Upload an Image\n        </button>\n      </mat-card>\n\n      <mat-card>\n        <!-- <mat-card-content> -->\n          <!-- <ul> -->\n            <!-- <li *ngFor=\"let file of files\"> -->\n               <!-- <mat-progress-bar [value]=\"file.progress\"></mat-progress-bar>  -->\n               <!-- <span id=\"file-label\">  -->\n              <!-- </span> -->\n            <!-- </li> -->\n          <!-- </ul> -->\n        <!-- </mat-card-content> -->\n    <mat-card-actions>\n      <button mat-button color=\"black\">\n        <mat-icon>add</mat-icon>\n        Upload an PDF\n      </button>\n    </mat-card-actions>\n  </mat-card>\n  <input type=\"file\" #fileInput id=\"fileUpload\" name=\"fileUpload\" multiple=\"multiple\" accept=\"image/*\"style=\"display:none;\" />\n</div>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Unit No.\" name=\"name\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Make\" name=\"company name\" >\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Model\" name=\"model name\" >\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Year\" name=\"year\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Serial No.\" name=\"Serial\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"License Plate\" name=\"License\" >\n    </mat-form-field>\n  </mat-card>\n</form>\n<mat-card-title class=\"btns\">\n  <button mat-raised-button  [routerLink]=\"['/TruckComponent']\">Cancel</button>\n  <button mat-raised-button class=\"save-btn\" >Save</button>\n</mat-card-title>\n\n"

/***/ }),

/***/ "./src/app/createtruck/createtruck.component.ts":
/*!******************************************************!*\
  !*** ./src/app/createtruck/createtruck.component.ts ***!
  \******************************************************/
/*! exports provided: CreatetruckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatetruckComponent", function() { return CreatetruckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreatetruckComponent = /** @class */ (function () {
    function CreatetruckComponent() {
    }
    CreatetruckComponent.prototype.ngOnInit = function () {
    };
    CreatetruckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createtruck',
            template: __webpack_require__(/*! ./createtruck.component.html */ "./src/app/createtruck/createtruck.component.html"),
            styles: [__webpack_require__(/*! ./createtruck.component.css */ "./src/app/createtruck/createtruck.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreatetruckComponent);
    return CreatetruckComponent;
}());



/***/ }),

/***/ "./src/app/createvehicle/createvehicle.component.css":
/*!***********************************************************!*\
  !*** ./src/app/createvehicle/createvehicle.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n    margin: 20px;\n}\nmat-card-actions{\n    margin-bottom: 0 !important;\n}\nmat-form-field, mat-select {\n    width: 100%\n}\nmat-card-title {\n    font-size: large;\n}\nmat-slider {\n    width: 90%;\n}\nform {\n    margin: 160px 0 160px 0;\n}\n.top-mar2{\n    z-index: 20;\n    position: fixed;\n    font-size: 30px;\n    top: 100px;\n    width: 100%;\n    text-align: center;\n    background-color: white;\n\n}\n.save-btn {\n    background: red;\n    margin: 0px 0px 0 20px;\n    color: white;\n}\n.btns{\n    position: fixed;\n    bottom: 65px;\n    padding: 10px 0 20px 0;\n    background: white !important;\n    width: 100%;\n    margin-bottom: 0;\n}\n/* .mat-focused {\n    border: 1px solid #d00000;\n} */\n/* Border */\n/* .mat-form-field-appearance-outline .mat-form-field-outline {\n    color:#d00000 !important;\n  } */\n/* Font color */\n/* input.mat-input-element {\n    color:#d00000 !important;\n  } */\nmat-card.mat-profile-img {\n    height: 225px !important;\n}\nmat-card.mat-profile-img picture img{\n    height: 100%;\n    width: 100%;\n    margin: 0 !important;\n}\n.mat-form-field .ng-tns-c8-0 .mat-primary .mat-form-field-type-mat-input .mat-form-field-appearance-legacy .mat-form-field-can-float .mat-form-field-hide-placeholder .ng-star-inserted .mat-form-field-should-float .mat-focused{\n    color:#d00000;\n}\n@media (max-width: 599px){\n.mat-card-image {\n    width: calc(100% + 32px);\n    margin: 0 !important;\n}\n}\n@media screen and (max-width: 768px) {\n    mat-card.mat-profile-img picture img{\n        height: 100%;\n        width: 100%;\n        margin: 0 !important;\n    }\n  }\n@media screen and (orientation: landscape) {\n    mat-card.mat-profile-img picture img{\n        height: 100%;\n        width: 100%;\n        margin: 0 !important;\n    }\n  }\n@media screen and (orientation: portrait) {\n    mat-card.mat-profile-img picture img{\n        height: 100%;\n        width: 100%;\n        margin: 0 !important;\n    }\n  }\n@media screen and (max-width: 1024px) {\n    mat-card.mat-profile-img picture img{\n        height: 100%;\n        width: 100%;\n        margin: 0 !important;\n    }\n  }\n@media screen and (orientation: landscape) {\n    mat-card.mat-profile-img picture img{\n        height: 100%;\n        width: 50%;\n        margin: 0 !important;\n    }\n  }\n@media screen and (orientation: portrait) {\n    mat-card.mat-profile-img picture img{\n        height: 100%;\n        width: 100%;\n        margin: 0 !important;\n    }\n  }"

/***/ }),

/***/ "./src/app/createvehicle/createvehicle.component.html":
/*!************************************************************!*\
  !*** ./src/app/createvehicle/createvehicle.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-title class=\"top-mar2\">\n  New Vehicle\n</mat-card-title>\n<form>\n  <mat-card>\n\n\n    <div>\n      <mat-card class=\"mat-profile-img\">\n        <picture>\n          <source  srcset=\"https://media.ed.edmunds-media.com/chevrolet/cruze/2014/carbuying/2014_chevrolet_cruze_f34_carbuying_510131_717.jpg\">\n          <img mat-card-image src=\"\" alt=\"Profile image\">\n        </picture>\n      </mat-card>\n      <mat-card>\n        <button mat-button color=\"black\">\n          <mat-icon>add</mat-icon>\n          Upload an Image\n        </button>\n      </mat-card>\n\n      <mat-card>\n        <!-- <mat-card-content> -->\n          <!-- <ul> -->\n            <!-- <li *ngFor=\"let file of files\"> -->\n               <!-- <mat-progress-bar [value]=\"file.progress\"></mat-progress-bar>  -->\n               <!-- <span id=\"file-label\">  -->\n              <!-- </span> -->\n            <!-- </li> -->\n          <!-- </ul> -->\n        <!-- </mat-card-content> -->\n    <mat-card-actions>\n      <button mat-button color=\"black\">\n        <mat-icon>add</mat-icon>\n        Upload an PDF\n      </button>\n    </mat-card-actions>\n  </mat-card>\n  <input type=\"file\" #fileInput id=\"fileUpload\" name=\"fileUpload\" multiple=\"multiple\" accept=\"image/*\"style=\"display:none;\" />\n</div>\n    <mat-form-field>\n      <input matInput placeholder=\"Unit No.\" name=\"name\" [(ngModel)]=\"createvehicle.name\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Make\" name=\"company name\" [(ngModel)]=\"createvehicle.place\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Model\" name=\"model name\" >\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Year\" name=\"year\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Serial No.\" name=\"Serial\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"License Plate\" name=\"License\" >\n    </mat-form-field>\n  </mat-card>\n</form>\n<mat-card-title class=\"btns\">\n  <button mat-raised-button  [routerLink]=\"['/VehicleComponent']\">Cancel</button>\n  <button mat-raised-button class=\"save-btn\" >Save</button>\n</mat-card-title>\n\n"

/***/ }),

/***/ "./src/app/createvehicle/createvehicle.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/createvehicle/createvehicle.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVehicleComponent", function() { return CreateVehicleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logic_createvehicle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/createvehicle */ "./src/app/logic/createvehicle.ts");
/* harmony import */ var _geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geolocation.service */ "./src/app/geolocation.service.ts");
/* harmony import */ var _logic_tastingRating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logic/tastingRating */ "./src/app/logic/tastingRating.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateVehicleComponent = /** @class */ (function () {
    function CreateVehicleComponent(geolocation, router, data, activated) {
        this.geolocation = geolocation;
        this.router = router;
        this.data = data;
        this.activated = activated;
        this.tastingEnabled = false;
        this.types = ['Brustino', 'Nigerianno', 'Americano', 'Mexicanno', 'Icelanno'];
    }
    CreateVehicleComponent.prototype.tastingRatingChanged = function (checked) {
        if (checked) {
            this.createvehicle.tastingRating = new _logic_tastingRating__WEBPACK_IMPORTED_MODULE_3__["TastingRating"]();
        }
        else {
            this.createvehicle.tastingRating = null;
        }
    };
    CreateVehicleComponent.prototype.cancel = function () {
        this.router.navigate(['/']);
    };
    CreateVehicleComponent.prototype.save = function () {
        var _this = this;
        this.data.save(this.createvehicle, function (result) {
            if (result) {
                _this.router.navigate(['/']);
            }
        });
    };
    CreateVehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createvehicle = new _logic_createvehicle__WEBPACK_IMPORTED_MODULE_1__["CreateVehicle"]();
        this.routeringPages = this.activated.params.subscribe(function (params) {
            console.log(params['id']);
            if (params['id']) {
                _this.data.get(params['id'], function (response) {
                    _this.createvehicle = response;
                    if (_this.createvehicle.tastingRating) {
                        _this.tastingEnabled = true;
                    }
                });
            }
        });
        this.geolocation.requestLocation(function (location) {
            if (location) {
                _this.createvehicle.location.latitude = location.latitude;
                _this.createvehicle.location.longitude = location.longitude;
            }
        });
    };
    CreateVehicleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createvehicle',
            template: __webpack_require__(/*! ./createvehicle.component.html */ "./src/app/createvehicle/createvehicle.component.html"),
            styles: [__webpack_require__(/*! ./createvehicle.component.css */ "./src/app/createvehicle/createvehicle.component.css")]
        }),
        __metadata("design:paramtypes", [_geolocation_service__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CreateVehicleComponent);
    return CreateVehicleComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.endpoint = 'https://pwadb.azurewebsites.net/';
    }
    DataService.prototype.get = function (coffeeId, callback) {
        this.http.get(this.endpoint + "coffees/" + coffeeId).subscribe(function (response) {
            callback(response);
        });
    };
    DataService.prototype.getList = function (callback) {
        // Change to a real web service
        // const list = [
        //   new Coffee('Double Beer', "Sunny Cafe", new PlaceLocation("123 market", "San Fransciso" )),
        //   new Coffee('DSmirn off', "hahaha", new PlaceLocation("Gran", "Madrid" )),
        // ]
        this.http.get(this.endpoint + "coffees").subscribe(function (response) {
            console.log(response);
            callback(response);
        });
    };
    DataService.prototype.save = function (coffee, callback) {
        // Change to a real web service
        if (coffee._id) {
            // It's an update
            this.http.put(this.endpoint + "coffees/" + coffee._id, coffee).subscribe(function (response) {
                callback(true);
            });
        }
        else {
            // It's an insert
            this.http.post(this.endpoint + "coffees", coffee).subscribe(function (response) {
                callback(true);
            });
        }
    };
    DataService.prototype.delete = function (coffee, callback) {
        this.http.delete(this.endpoint + "coffees/" + coffee._id, coffee).subscribe(function (response) {
            callback(true);
        });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/equipment/equipment.component.css":
/*!***************************************************!*\
  !*** ./src/app/equipment/equipment.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    font-family: Lato;\r\n  }\r\n  \r\n  mat-card-content{\r\n    margin-bottom: 10px;\r\n    float: left;\r\n    margin-top: 185px;\r\n    width: 100%;\r\n  }\r\n  \r\n  mat-card{\r\n    text-align: start !important;\r\n\r\n  }\r\n  \r\n  .btnbtpm{\r\n    position: fixed;\r\n    z-index: 999999;\r\n    bottom: -5px;\r\n    width: 100%;\r\n    margin: 0% 0%;\r\n  }\r\n  \r\n  .example-card {\r\n    max-width: 96%;\r\n    margin: 12px;\r\n    padding: 15px 0px 0px 10px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('img3.png');\r\n    background-size: cover;\r\n  }\r\n  \r\n  .mat-card-avatar{\r\n    height: inherit;\r\n    width: 120px;\r\n    margin: 0 0 5px 0;\r\n    border-radius: 0px !important;\r\n    flex-shrink: 0;\r\n  }\r\n  \r\n  .mat-card-header-text {\r\n    margin: 0 0 0 10px;\r\n    text-align: start;\r\n  }\r\n  \r\n  .mat-card-actions, .mat-card-subtitle, .mat-card-title{\r\n    margin-bottom: 10px !important;\r\n  }\r\n  \r\n  .matpad{\r\n    text-align: center;\r\n    margin-bottom:60px!important;\r\n    text-align: center !important;\r\n    width: 100%;\r\n    background-color: white;\r\n    padding: 7px 0;\r\n  }\r\n  \r\n  .matpad a{\r\n    background: #e9e9e9;\r\n    width: 80%;\r\n  }\r\n  \r\n  .Pagename{\r\n    text-align: center;\r\n    font-size: 30px;\r\n    color: #000;\r\n    top: 13%;\r\n    background: white;\r\n    position: fixed;\r\n    z-index: 9999999;\r\n    padding: 2% 0 2%;\r\n    width: 100%;\r\n  }\r\n  \r\n  .searchbar{\r\n  text-align: center;\r\n  font-size: 30px;\r\n  color: #000;\r\n  top: 20%;\r\n  background: white;\r\n  position: fixed;\r\n  z-index: 9999999;\r\n  padding: 0 0 2%;\r\n  width: 100%;\r\n}\r\n  \r\n  .searchbar input{\r\n  width: 80%;\r\n  text-align: center;\r\n  font-size: 18px;\r\n}\r\n  \r\n  .footercard{\r\n  margin-bottom: 15% !important;\r\n}\r\n  \r\n  @media screen and (max-width: 1024px) {\r\n  .footercard{\r\n    margin-bottom: 10% !important;\r\n  }\r\n}\r\n  \r\n  @media screen and (orientation: landscape) {\r\n  .footercard{\r\n    margin-bottom: 10% !important;\r\n  }\r\n}\r\n  \r\n  .example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 80%;\r\n  }\r\n  \r\n  .mat-form-field{\r\n    font-size: inherit;\r\n    font-weight: 400;\r\n    line-height: 1.125;\r\n    z-index: 9999999;\r\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n    margin: 120px 0 0 0;\r\n  }\r\n  \r\n  mat-focused{\r\n    color: red;\r\n  }\r\n  \r\n  .anchor-card{\r\n    text-decoration: none;\r\n  }"

/***/ }),

/***/ "./src/app/equipment/equipment.component.html":
/*!****************************************************!*\
  !*** ./src/app/equipment/equipment.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-title class=\"Pagename\">Equipment</mat-card-title>\n<mat-card-title class=\"searchbar\">\n  <input placeholder=\"Search\" type=\"search\" name=\"Search\">\n</mat-card-title>\n<mat-card-content>\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 205\n      </mat-card-title>\n      <mat-card-subtitle>Make : Caterpillar\n      </mat-card-subtitle>\n      <mat-card-subtitle>Model :140H\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1998\n      </mat-card-subtitle>\n      <mat-card-subtitle>Description : Grader\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2ZK02867\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 205\n      </mat-card-title>\n      <mat-card-subtitle>Make : Caterpillar\n      </mat-card-subtitle>\n      <mat-card-subtitle>Model :140H\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1998\n      </mat-card-subtitle>\n      <mat-card-subtitle>Description : Grader\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2ZK02867\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 205\n      </mat-card-title>\n      <mat-card-subtitle>Make : Caterpillar\n      </mat-card-subtitle>\n      <mat-card-subtitle>Model :140H\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1998\n      </mat-card-subtitle>\n      <mat-card-subtitle>Description : Grader\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2ZK02867\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 205\n      </mat-card-title>\n      <mat-card-subtitle>Make : Caterpillar\n      </mat-card-subtitle>\n      <mat-card-subtitle>Model :140H\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1998\n      </mat-card-subtitle>\n      <mat-card-subtitle>Description : Grader\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2ZK02867\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 205\n      </mat-card-title>\n      <mat-card-subtitle>Make : Caterpillar\n      </mat-card-subtitle>\n      <mat-card-subtitle>Model :140H\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1998\n      </mat-card-subtitle>\n      <mat-card-subtitle>Description : Grader\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2ZK02867\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 205\n      </mat-card-title>\n      <mat-card-subtitle>Make : Caterpillar\n      </mat-card-subtitle>\n      <mat-card-subtitle>Model :140H\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1998\n      </mat-card-subtitle>\n      <mat-card-subtitle>Description : Grader\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2ZK02867\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 205\n      </mat-card-title>\n      <mat-card-subtitle>Make : Caterpillar\n      </mat-card-subtitle>\n      <mat-card-subtitle>Model :140H\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1998\n      </mat-card-subtitle>\n      <mat-card-subtitle>Description : Grader\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2ZK02867\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 205\n      </mat-card-title>\n      <mat-card-subtitle>Make : Caterpillar\n      </mat-card-subtitle>\n      <mat-card-subtitle>Model :140H\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1998\n      </mat-card-subtitle>\n      <mat-card-subtitle>Description : Grader\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2ZK02867\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n  <mat-divider></mat-divider>\n\n  <mat-divider></mat-divider>\n\n\n\n  <mat-divider class=\"footercard\"></mat-divider>\n</mat-card-content>\n\n<!-- <mat-card class=\"matpad btnbtpm\">\n  <a mat-button [routerLink]=\"['/Createequipment']\">\n    <mat-icon>add</mat-icon>\n    <label>Add New Equipment</label>\n  </a>\n</mat-card> -->\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/equipment/equipment.component.ts":
/*!**************************************************!*\
  !*** ./src/app/equipment/equipment.component.ts ***!
  \**************************************************/
/*! exports provided: EquipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentComponent", function() { return EquipmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EquipmentComponent = /** @class */ (function () {
    function EquipmentComponent() {
    }
    EquipmentComponent.prototype.ngOnInit = function () {
    };
    EquipmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipment',
            template: __webpack_require__(/*! ./equipment.component.html */ "./src/app/equipment/equipment.component.html"),
            styles: [__webpack_require__(/*! ./equipment.component.css */ "./src/app/equipment/equipment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EquipmentComponent);
    return EquipmentComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .anchor1{\r\n    text-align: center;\r\n    width: 20% !important;\r\n    margin: 0 !important;\r\n    padding: 0px !important;\r\n    color: black;\r\n    font-size: 35px;\r\n     padding: 0% 9% 0 0%;   \r\n}\r\n.anchor2{\r\n    text-align: center;\r\n    width: 20% !important;\r\n    margin: 0 !important;\r\n    padding: 0px !important;\r\n    color: black;\r\n    font-size: 35px;\r\n    padding: 0% 9% 0 5%;  \r\n}\r\n.anchor3{\r\n    text-align: center;\r\n    width: 20% !important;\r\n    margin: 0 !important;\r\n    padding: 0px !important;\r\n    color: black;\r\n    font-size: 35px;\r\n    padding: 0% 10% 0 4%;  \r\n}\r\n.anchor4{\r\n    text-align: center;\r\n    width: 20% !important;\r\n    margin: 0 !important;\r\n    padding: 0px !important;\r\n    color: #000;\r\n    font-size: 35px;\r\n    padding: 0 8% 0 5%;\r\n    margin: 0 -2% 0 2%;  \r\n} \r\nmat-card {\r\n    margin: 0 !important;\r\n    padding: 0px !important;\r\n    width: 100%;\r\n    position: fixed;\r\n    bottom: 0;\r\n    background: white;\r\n    margin: 20px;\r\n} label {\r\n    padding: 0 6% 10% 6%;\r\n} */\r\n\r\nmat-icon {\r\n    font-size: 35px;\r\n}\r\n\r\n/* \r\n.name {\r\n    margin: 0;\r\n    padding:0 ;\r\n    margin-bottom: 10px !important;\r\n} */\r\n\r\n/* .label1 {\r\n    padding: 0 4% 0% 3%;\r\n}\r\n\r\n.label12 {\r\n    padding: 0% 3% 0% 4%;\r\n}\r\n\r\n.label3 {\r\n    padding: 0% 3% 0% 4%;\r\n}\r\n\r\n.label4 {\r\n    padding: 0% 2% 0% 3%;;\r\n} */\r\n\r\n/* .parent-mat{\r\n    padding: 0 !important;\r\n    margin: 0 !important;\r\n    width: 100%;\r\n} */\r\n\r\n.toolbarNav{  \r\n    text-align: center;\r\n    position: fixed;\r\n    bottom: 0; \r\n    z-index: 1000;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 0 4rem 0 4rem;\r\n    background-color: white;\r\n    width: 100%;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */  /* Firefox 3.5 - 3.6 */\r\n  box-shadow:        2px 2px 4px 5px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */\r\n}\r\n\r\n.anchor{\r\n    text-decoration: none;\r\n}\r\n\r\n.material-icons.color_blue{\r\n    margin: 0 1rem 0 1rem;\r\n    color: black;\r\n}\r\n\r\n.anchor:hover mat-icon { \r\n    color: red;\r\n  }\r\n\r\n.anchor:hover mat-card-title { \r\n    color: red;\r\n  }\r\n\r\n.material-icons.color_blue:active{\r\n      color: red;\r\n  }\r\n\r\n.material-icons.color_blue:focus{\r\n    color: red;\r\n}\r\n\r\n.anchortext{\r\n    font-size: 10px;\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\na  mat-card-title{\r\n    text-decoration: none;\r\n    font-size: 13px;\r\n    color: black;\r\n}\r\n\r\n.mat-card-subtitle:not(:first-child), .mat-card-title:not(:first-child) {\r\n    margin-top: -20px;\r\n    margin-bottom: -10px;\r\n    margin-left: 8px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h5>\n  footer works!\n</h5> -->\n\n<!-- <mat-card class=\"parent-mat\">\n  <mat-card-actions>\n    <a class=\"anchor1\"  routerLink=\"VehicleComponent\">\n      <mat-icon>drive_eta</mat-icon>\n      <mat-card-subtitle>Vehicle</mat-card-subtitle>\n    </a>\n    <a class=\"anchor2\"   routerLink=\"ContactsComponent\">\n      <mat-icon> phone</mat-icon>\n      <mat-card-subtitle>Phone</mat-card-subtitle>\n    </a>\n    <a class=\"anchor3\"  routerLink=\"TrailerComponent\" >\n      <mat-icon>local_shipping</mat-icon>\n      <mat-card-subtitle>Trailer</mat-card-subtitle>\n    </a>\n    <a class=\"anchor4\"  routerLink=\"EquipmentComponent\">\n      <mat-icon>local_play</mat-icon>\n      <mat-card-subtitle>Equipment</mat-card-subtitle>\n    </a>\n  </mat-card-actions>\n</mat-card> -->\n<!-- <mat-card-actions class=\"name\">\n    <label class=\"label1\">Vehicles</label>\n    <label class=\"label2\">Contacts</label>\n    <label class=\"label3\">Trailers</label>\n    <label class=\"label4\">Equipments</label>\n  </mat-card-actions> -->\n\n\n\n<mat-toolbar class=\"toolbarNav\">\n  <a class=\"anchor\" routerLink=\"ContactsComponent\">\n    <mat-icon class=\"material-icons color_blue\">phone</mat-icon>\n    <br>\n    <mat-card-title class=\"anchortext\">Phone</mat-card-title>\n  </a>\n  <a class=\"anchor\" routerLink=\"VehicleComponent\">\n    <mat-icon class=\"material-icons color_blue\">drive_eta</mat-icon>\n    <br>\n    <mat-card-title class=\"anchortext\">Vehicle</mat-card-title>\n  </a>\n  <a class=\"anchor\" routerLink=\"TruckComponent\">\n    <mat-icon class=\"material-icons color_blue\">local_shipping</mat-icon>\n    <br>\n    <mat-card-title class=\"anchortext\">Truck</mat-card-title>\n  </a>\n  <a class=\"anchor\" routerLink=\"EquipmentComponent\">\n    <mat-icon class=\"material-icons color_blue\">local_play</mat-icon>\n    <br>\n    <mat-card-title class=\"anchortext\">Equipment</mat-card-title>\n  </a>\n  <a class=\"anchor\" routerLink=\"TrailerComponent\">\n    <mat-icon class=\"material-icons color_blue\">rv_hookup</mat-icon>\n    <br>\n    <mat-card-title class=\"anchortext\">Trailer</mat-card-title>\n  </a>\n  <!-- <a class=\"anchortext\" routerLink=\"ContactsComponent\">\n    Phone\n  </a>\n  <a class=\"anchortext\" routerLink=\"VehicleComponent\">\n    Vehicles\n  </a>\n  <a class=\"anchortext\" routerLink=\"TruckComponent\">\n    Truck\n  </a>\n  <a class=\"anchortext\" routerLink=\"EquipmentComponent\">\n    Equipment\n  </a>\n  <a class=\"anchortext\" routerLink=\"TrailerComponent\">\n    Trailer\n  </a> -->\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/geolocation.service.ts":
/*!****************************************!*\
  !*** ./src/app/geolocation.service.ts ***!
  \****************************************/
/*! exports provided: GeolocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationService", function() { return GeolocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GeolocationService = /** @class */ (function () {
    function GeolocationService() {
    }
    GeolocationService.prototype.requestLocation = function (callback) {
        // W3C Geolocation API
        navigator.geolocation.getCurrentPosition(function (position) {
            callback(position.coords);
        }, function (error) {
            callback(null);
        });
    };
    GeolocationService.prototype.getMapLink = function (location) {
        // Universal link
        var query = '';
        if (location.latitude) {
            query = "" + location.latitude + ',' + location.longitude;
        }
        else {
            query = location.address + ", " + location.city;
        }
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            return "https://maps.apple.com/?=" + query;
        }
        else {
            return "https://google.com/maps/?=" + query;
        }
    };
    GeolocationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GeolocationService);
    return GeolocationService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5{\r\n    padding: 10px 0 0 0;\r\n    background-color: #fff;\r\n    margin: 0;\r\n    text-align: center;\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 10;\r\n    width: 100%;\r\n}\r\n\r\nh5 img{\r\n    height: 70px;\r\n    width: 50%;\r\n    margin-bottom: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>\n  <img src=\"icons/header.png\" alt=\"\">\n</h5>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/logic/PlaceLocation.ts":
/*!****************************************!*\
  !*** ./src/app/logic/PlaceLocation.ts ***!
  \****************************************/
/*! exports provided: PlaceLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceLocation", function() { return PlaceLocation; });
var PlaceLocation = /** @class */ (function () {
    function PlaceLocation(address, city, latitude, longitude) {
        if (address === void 0) { address = ''; }
        if (city === void 0) { city = ''; }
        if (latitude === void 0) { latitude = null; }
        if (longitude === void 0) { longitude = null; }
        this.address = address;
        this.city = city;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return PlaceLocation;
}());



/***/ }),

/***/ "./src/app/logic/createvehicle.ts":
/*!****************************************!*\
  !*** ./src/app/logic/createvehicle.ts ***!
  \****************************************/
/*! exports provided: CreateVehicle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVehicle", function() { return CreateVehicle; });
/* harmony import */ var _PlaceLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlaceLocation */ "./src/app/logic/PlaceLocation.ts");
/* harmony import */ var _tastingRating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tastingRating */ "./src/app/logic/tastingRating.ts");


var CreateVehicle = /** @class */ (function () {
    function CreateVehicle(name, place, location) {
        if (name === void 0) { name = ''; }
        if (place === void 0) { place = ''; }
        if (location === void 0) { location = null; }
        this.name = name;
        this.place = place;
        this.location = location;
        this.location = new _PlaceLocation__WEBPACK_IMPORTED_MODULE_0__["PlaceLocation"]();
        this.tastingRating = new _tastingRating__WEBPACK_IMPORTED_MODULE_1__["TastingRating"]();
    }
    return CreateVehicle;
}());



/***/ }),

/***/ "./src/app/logic/tastingRating.ts":
/*!****************************************!*\
  !*** ./src/app/logic/tastingRating.ts ***!
  \****************************************/
/*! exports provided: TastingRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TastingRating", function() { return TastingRating; });
var TastingRating = /** @class */ (function () {
    function TastingRating() {
    }
    return TastingRating;
}());



/***/ }),

/***/ "./src/app/trailer/trailer.component.css":
/*!***********************************************!*\
  !*** ./src/app/trailer/trailer.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n  font-family: Lato;\r\n}\r\n\r\nmat-card-content{\r\n  margin-bottom: 10px;\r\n  float: left;\r\n  margin-top: 185px;\r\n  width: 100%;\r\n}\r\n\r\nmat-card{\r\n  text-align: start !important;\r\n\r\n}\r\n\r\n.btnbtpm{\r\n  position: fixed;\r\n  z-index: 999999;\r\n  bottom: -5px;\r\n  width: 100%;\r\n  margin: 0% 0%;\r\n}\r\n\r\n.example-card {\r\n  max-width: 96%;\r\n  margin: 12px;\r\n  padding: 15px 0px 0px 10px;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('img.png');\r\n  background-size: cover;\r\n}\r\n\r\n.mat-card-avatar{\r\n  height: inherit;\r\n  width: 120px;\r\n  margin: 0 0 5px 0;\r\n  border-radius: 0px !important;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.mat-card-header-text {\r\n  margin: 0 0 0 10px;\r\n  text-align: start;\r\n}\r\n\r\n.mat-card-actions, .mat-card-subtitle, .mat-card-title{\r\n  margin-bottom: 10px !important;\r\n}\r\n\r\n.matpad{\r\n  text-align: center;\r\n  margin-bottom:60px!important;\r\n  text-align: center !important;\r\n  width: 100%;\r\n  background-color: white;\r\n  padding: 7px 0;\r\n}\r\n\r\n.matpad a{\r\n  background: #e9e9e9;\r\n  width: 80%;\r\n}\r\n\r\n.Pagename{\r\n  text-align: center;\r\n  font-size: 30px;\r\n  color: #000;\r\n  top: 13%;\r\n  background: white;\r\n  position: fixed;\r\n  z-index: 9999999;\r\n  padding: 2% 0 2%;\r\n  width: 100%;\r\n}\r\n\r\n.searchbar{\r\ntext-align: center;\r\nfont-size: 30px;\r\ncolor: #000;\r\ntop: 20%;\r\nbackground: white;\r\nposition: fixed;\r\nz-index: 9999999;\r\npadding: 0 0 2%;\r\nwidth: 100%;\r\n}\r\n\r\n.searchbar input{\r\nwidth: 80%;\r\ntext-align: center;\r\nfont-size: 18px;\r\n}\r\n\r\n.footercard{\r\n  margin-bottom: 15% !important;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n  .footercard{\r\n    margin-bottom: 10% !important;\r\n  }\r\n}\r\n\r\n@media screen and (orientation: landscape) {\r\n  .footercard{\r\n    margin-bottom: 10% !important;\r\n  }\r\n}\r\n\r\n/* .example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n.example-full-width {\r\n  width: 80%;\r\n}\r\n.mat-form-field{\r\n  font-size: inherit;\r\n  font-weight: 400;\r\n  line-height: 1.125;\r\n  z-index: 9999999;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin: 120px 0 0 0;\r\n} */\r\n\r\nmat-focused{\r\n  color: red;\r\n}\r\n\r\n.anchor-card{\r\n  text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/trailer/trailer.component.html":
/*!************************************************!*\
  !*** ./src/app/trailer/trailer.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n  <mat-card-title class=\"Pagename\">Trailer</mat-card-title>\n  <mat-card-title class=\"searchbar\">\n  <input placeholder=\"Search\" type=\"search\"  name=\"Search\">\n</mat-card-title>\n\n<mat-card-content>\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 300\n      </mat-card-title>\n      <mat-card-subtitle>Make : Arnes\n      </mat-card-subtitle>\n      <mat-card-subtitle>Type : Lowbed\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1997\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2A9105743VA003193\n      </mat-card-subtitle>\n      <mat-card-subtitle>License Plate : M8843S\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n  \n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 300\n      </mat-card-title>\n      <mat-card-subtitle>Make : Arnes\n      </mat-card-subtitle>\n      <mat-card-subtitle>Type : Lowbed\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1997\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2A9105743VA003193\n      </mat-card-subtitle>\n      <mat-card-subtitle>License Plate : M8843S\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 300\n      </mat-card-title>\n      <mat-card-subtitle>Make : Arnes\n      </mat-card-subtitle>\n      <mat-card-subtitle>Type : Lowbed\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1997\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2A9105743VA003193\n      </mat-card-subtitle>\n      <mat-card-subtitle>License Plate : M8843S\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  \n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 300\n      </mat-card-title>\n      <mat-card-subtitle>Make : Arnes\n      </mat-card-subtitle>\n      <mat-card-subtitle>Type : Lowbed\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1997\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2A9105743VA003193\n      </mat-card-subtitle>\n      <mat-card-subtitle>License Plate : M8843S\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 300\n      </mat-card-title>\n      <mat-card-subtitle>Make : Arnes\n      </mat-card-subtitle>\n      <mat-card-subtitle>Type : Lowbed\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1997\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2A9105743VA003193\n      </mat-card-subtitle>\n      <mat-card-subtitle>License Plate : M8843S\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  \n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 300\n      </mat-card-title>\n      <mat-card-subtitle>Make : Arnes\n      </mat-card-subtitle>\n      <mat-card-subtitle>Type : Lowbed\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1997\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2A9105743VA003193\n      </mat-card-subtitle>\n      <mat-card-subtitle>License Plate : M8843S\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  \n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 300\n      </mat-card-title>\n      <mat-card-subtitle>Make : Arnes\n      </mat-card-subtitle>\n      <mat-card-subtitle>Type : Lowbed\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1997\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2A9105743VA003193\n      </mat-card-subtitle>\n      <mat-card-subtitle>License Plate : M8843S\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  \n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 300\n      </mat-card-title>\n      <mat-card-subtitle>Make : Arnes\n      </mat-card-subtitle>\n      <mat-card-subtitle>Type : Lowbed\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1997\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2A9105743VA003193\n      </mat-card-subtitle>\n      <mat-card-subtitle>License Plate : M8843S\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  <mat-divider></mat-divider>\n    \n  <mat-divider></mat-divider>\n \n\n <mat-divider class=\"footercard\"></mat-divider>\n</mat-card-content>\n<!-- \n<mat-card class=\"matpad btnbtpm\" >\n  <a mat-button  [routerLink]=\"['/Createtrailer']\" >\n  <mat-icon>add</mat-icon>\n  Add New Trailer\n</a>\n</mat-card> -->\n\n\n <router-outlet></router-outlet> "

/***/ }),

/***/ "./src/app/trailer/trailer.component.ts":
/*!**********************************************!*\
  !*** ./src/app/trailer/trailer.component.ts ***!
  \**********************************************/
/*! exports provided: TrailerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailerComponent", function() { return TrailerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrailerComponent = /** @class */ (function () {
    function TrailerComponent() {
    }
    TrailerComponent.prototype.ngOnInit = function () {
    };
    TrailerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trailer',
            template: __webpack_require__(/*! ./trailer.component.html */ "./src/app/trailer/trailer.component.html"),
            styles: [__webpack_require__(/*! ./trailer.component.css */ "./src/app/trailer/trailer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrailerComponent);
    return TrailerComponent;
}());



/***/ }),

/***/ "./src/app/truck/truck.component.css":
/*!*******************************************!*\
  !*** ./src/app/truck/truck.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n  font-family: Lato;\r\n}\r\n\r\nmat-card-content{\r\n  margin-bottom: 10px;\r\n  float: left;\r\n  margin-top: 185px;\r\n  width: 100%;\r\n}\r\n\r\nmat-card{\r\n  text-align: start !important;\r\n\r\n}\r\n\r\n.btnbtpm{\r\n  position: fixed;\r\n  z-index: 999999;\r\n  bottom: -5px;\r\n  width: 100%;\r\n  margin: 0% 0%;\r\n}\r\n\r\n.example-card {\r\n  max-width: 96%;\r\n  margin: 12px;\r\n  padding: 15px 0px 0px 10px;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('img.png');\r\n  background-size: cover;\r\n}\r\n\r\n.mat-card-avatar{\r\n  height: inherit;\r\n  width: 120px;\r\n  margin: 0 0 5px 0;\r\n  border-radius: 0px !important;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.mat-card-header-text {\r\n  margin: 0 0 0 10px;\r\n  text-align: start;\r\n}\r\n\r\n.mat-card-actions, .mat-card-subtitle, .mat-card-title{\r\n  margin-bottom: 10px !important;\r\n}\r\n\r\n.matpad{\r\n  text-align: center;\r\n  margin-bottom:60px!important;\r\n  text-align: center !important;\r\n  width: 100%;\r\n  background-color: white;\r\n  padding: 7px 0;\r\n}\r\n\r\n.matpad a{\r\n  background: #e9e9e9;\r\n  width: 80%;\r\n}\r\n\r\n.Pagename{\r\n  text-align: center;\r\n  font-size: 30px;\r\n  color: #000;\r\n  top: 13%;\r\n  background: white;\r\n  position: fixed;\r\n  z-index: 9999999;\r\n  padding: 2% 0 2%;\r\n  width: 100%;\r\n}\r\n\r\n.searchbar{\r\ntext-align: center;\r\nfont-size: 30px;\r\ncolor: #000;\r\ntop: 20%;\r\nbackground: white;\r\nposition: fixed;\r\nz-index: 9999999;\r\npadding: 0 0 2%;\r\nwidth: 100%;\r\n}\r\n\r\n.searchbar input{\r\nwidth: 80%;\r\ntext-align: center;\r\nfont-size: 18px;\r\n}\r\n\r\n.footercard{\r\n  margin-bottom: 15% !important;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n  .footercard{\r\n    margin-bottom: 10% !important;\r\n  }\r\n}\r\n\r\n@media screen and (orientation: landscape) {\r\n  .footercard{\r\n    margin-bottom: 10% !important;\r\n  }\r\n}\r\n\r\n/* .example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n.example-full-width {\r\n  width: 80%;\r\n}\r\n.mat-form-field{\r\n  font-size: inherit;\r\n  font-weight: 400;\r\n  line-height: 1.125;\r\n  z-index: 9999999;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin: 120px 0 0 0;\r\n} */\r\n\r\nmat-focused{\r\n  color: red;\r\n}\r\n\r\n.anchor-card{\r\n  text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/truck/truck.component.html":
/*!********************************************!*\
  !*** ./src/app/truck/truck.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n  <mat-card-title class=\"Pagename\">Truck</mat-card-title>\n  <mat-card-title class=\"searchbar\">\n  <input placeholder=\"Search\" type=\"search\"  name=\"Search\">\n</mat-card-title>\n\n<mat-card-content>\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 300\n      </mat-card-title>\n      <mat-card-subtitle>Make : Arnes\n      </mat-card-subtitle>\n      <mat-card-subtitle>Type : Lowbed\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1997\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2A9105743VA003193\n      </mat-card-subtitle>\n      <mat-card-subtitle>License Plate : M8843S\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n  \n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 300\n      </mat-card-title>\n      <mat-card-subtitle>Make : Arnes\n      </mat-card-subtitle>\n      <mat-card-subtitle>Type : Lowbed\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1997\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2A9105743VA003193\n      </mat-card-subtitle>\n      <mat-card-subtitle>License Plate : M8843S\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  \n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 300\n      </mat-card-title>\n      <mat-card-subtitle>Make : Arnes\n      </mat-card-subtitle>\n      <mat-card-subtitle>Type : Lowbed\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1997\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2A9105743VA003193\n      </mat-card-subtitle>\n      <mat-card-subtitle>License Plate : M8843S\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  \n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 300\n      </mat-card-title>\n      <mat-card-subtitle>Make : Arnes\n      </mat-card-subtitle>\n      <mat-card-subtitle>Type : Lowbed\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1997\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2A9105743VA003193\n      </mat-card-subtitle>\n      <mat-card-subtitle>License Plate : M8843S\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  \n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 300\n      </mat-card-title>\n      <mat-card-subtitle>Make : Arnes\n      </mat-card-subtitle>\n      <mat-card-subtitle>Type : Lowbed\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1997\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2A9105743VA003193\n      </mat-card-subtitle>\n      <mat-card-subtitle>License Plate : M8843S\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  \n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 300\n      </mat-card-title>\n      <mat-card-subtitle>Make : Arnes\n      </mat-card-subtitle>\n      <mat-card-subtitle>Type : Lowbed\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1997\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2A9105743VA003193\n      </mat-card-subtitle>\n      <mat-card-subtitle>License Plate : M8843S\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  \n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 300\n      </mat-card-title>\n      <mat-card-subtitle>Make : Arnes\n      </mat-card-subtitle>\n      <mat-card-subtitle>Type : Lowbed\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1997\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2A9105743VA003193\n      </mat-card-subtitle>\n      <mat-card-subtitle>License Plate : M8843S\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  \n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 300\n      </mat-card-title>\n      <mat-card-subtitle>Make : Arnes\n      </mat-card-subtitle>\n      <mat-card-subtitle>Type : Lowbed\n      </mat-card-subtitle>\n      <mat-card-subtitle>Year : 1997\n      </mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 2A9105743VA003193\n      </mat-card-subtitle>\n      <mat-card-subtitle>License Plate : M8843S\n      </mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  <mat-divider></mat-divider>\n    \n  <mat-divider></mat-divider>\n \n\n <mat-divider class=\"footercard\"></mat-divider>\n</mat-card-content>\n<!-- \n<mat-card class=\"matpad btnbtpm\" >\n  <a mat-button  [routerLink]=\"['/Createtruck']\">\n  <mat-icon>add</mat-icon>\n  Add New Truck\n</a>\n</mat-card> -->\n\n\n <router-outlet></router-outlet> \n\n\n\n\n "

/***/ }),

/***/ "./src/app/truck/truck.component.ts":
/*!******************************************!*\
  !*** ./src/app/truck/truck.component.ts ***!
  \******************************************/
/*! exports provided: TruckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckComponent", function() { return TruckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TruckComponent = /** @class */ (function () {
    function TruckComponent() {
    }
    TruckComponent.prototype.ngOnInit = function () {
    };
    TruckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truck',
            template: __webpack_require__(/*! ./truck.component.html */ "./src/app/truck/truck.component.html"),
            styles: [__webpack_require__(/*! ./truck.component.css */ "./src/app/truck/truck.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TruckComponent);
    return TruckComponent;
}());



/***/ }),

/***/ "./src/app/vehicle/vehicle.component.css":
/*!***********************************************!*\
  !*** ./src/app/vehicle/vehicle.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    font-family: Lato;\r\n  }\r\n  \r\n  mat-card-content{\r\n    margin-bottom: 10px;\r\n    float: left;\r\n    margin-top: 185px;\r\n    width: 100%;\r\n  }\r\n  \r\n  mat-card{\r\n    text-align: start !important;\r\n\r\n  }\r\n  \r\n  .btnbtpm{\r\n    position: fixed;\r\n    z-index: 999999;\r\n    bottom: -5px;\r\n    width: 100%;\r\n    margin: 0% 0%;\r\n  }\r\n  \r\n  .example-card {\r\n    max-width: 96%;\r\n    margin: 12px;\r\n    padding: 15px 0px 0px 10px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('car.png');\r\n    background-size: cover;\r\n  }\r\n  \r\n  .mat-card-avatar{\r\n    height: inherit;\r\n    width: 120px;\r\n    margin: 0 0 5px 0;\r\n    border-radius: 0px !important;\r\n    flex-shrink: 0;\r\n  }\r\n  \r\n  .mat-card-header-text {\r\n    margin: 0 0 0 10px;\r\n    text-align: start;\r\n  }\r\n  \r\n  .mat-card-actions, .mat-card-subtitle, .mat-card-title{\r\n    margin-bottom: 10px !important;\r\n  }\r\n  \r\n  .matpad{\r\n    text-align: center;\r\n    margin-bottom:60px!important;\r\n    text-align: center !important;\r\n    width: 100%;\r\n    background-color: white;\r\n    padding: 7px 0;\r\n  }\r\n  \r\n  .matpad a{\r\n    background: #e9e9e9;\r\n    width: 80%;\r\n  }\r\n  \r\n  .Pagename{\r\n    text-align: center;\r\n    font-size: 30px;\r\n    color: #000;\r\n    top: 13%;\r\n    background: white;\r\n    position: fixed;\r\n    z-index: 9999999;\r\n    padding: 2% 0 2%;\r\n    width: 100%;\r\n  }\r\n  \r\n  .searchbar{\r\n  text-align: center;\r\n  font-size: 30px;\r\n  color: #000;\r\n  top: 20%;\r\n  background: white;\r\n  position: fixed;\r\n  z-index: 9999999;\r\n  padding: 0 0 2%;\r\n  width: 100%;\r\n}\r\n  \r\n  .searchbar input{\r\n  width: 80%;\r\n  text-align: center;\r\n  font-size: 18px;\r\n}\r\n  \r\n  /* .example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  .example-full-width {\r\n    width: 80%;\r\n  }\r\n  .mat-form-field{\r\n    font-size: inherit;\r\n    font-weight: 400;\r\n    line-height: 1.125;\r\n    z-index: 9999999;\r\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n    margin: 120px 0 0 0;\r\n  } */\r\n  \r\n  mat-focused{\r\n    color: red;\r\n  }\r\n  \r\n  .anchor-card{\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .footercard{\r\n    margin-bottom: 15% !important;\r\n  }\r\n  \r\n  @media screen and (max-width: 1024px) {\r\n    .footercard{\r\n      margin-bottom: 10% !important;\r\n    }\r\n  }\r\n  \r\n  @media screen and (orientation: landscape) {\r\n    .footercard{\r\n      margin-bottom: 10% !important;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/vehicle/vehicle.component.html":
/*!************************************************!*\
  !*** ./src/app/vehicle/vehicle.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card-title class=\"Pagename\">Vehicles</mat-card-title>\n<mat-card-title class=\"searchbar\">\n  <input placeholder=\"Search\" type=\"search\"  name=\"Search\">\n</mat-card-title>\n <mat-card-content>\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 18</mat-card-title>\n      <mat-card-subtitle>Make : Dodge</mat-card-subtitle>\n      <mat-card-subtitle>Model : Ram 1500</mat-card-subtitle>\n      <mat-card-subtitle>Year : 2007</mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 1D7HU18247S231278</mat-card-subtitle>\n      <mat-card-subtitle>License Plate : 5417Vl</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n  \n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 18</mat-card-title>\n      <mat-card-subtitle>Make : Dodge</mat-card-subtitle>\n      <mat-card-subtitle>Model : Ram 1500</mat-card-subtitle>\n      <mat-card-subtitle>Year : 2007</mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 1D7HU18247S231278</mat-card-subtitle>\n      <mat-card-subtitle>License Plate : 5417Vl</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 18</mat-card-title>\n      <mat-card-subtitle>Make : Dodge</mat-card-subtitle>\n      <mat-card-subtitle>Model : Ram 1500</mat-card-subtitle>\n      <mat-card-subtitle>Year : 2007</mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 1D7HU18247S231278</mat-card-subtitle>\n      <mat-card-subtitle>License Plate : 5417Vl</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  \n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 18</mat-card-title>\n      <mat-card-subtitle>Make : Dodge</mat-card-subtitle>\n      <mat-card-subtitle>Model : Ram 1500</mat-card-subtitle>\n      <mat-card-subtitle>Year : 2007</mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 1D7HU18247S231278</mat-card-subtitle>\n      <mat-card-subtitle>License Plate : 5417Vl</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  \n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 18</mat-card-title>\n      <mat-card-subtitle>Make : Dodge</mat-card-subtitle>\n      <mat-card-subtitle>Model : Ram 1500</mat-card-subtitle>\n      <mat-card-subtitle>Year : 2007</mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 1D7HU18247S231278</mat-card-subtitle>\n      <mat-card-subtitle>License Plate : 5417Vl</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  \n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 18</mat-card-title>\n      <mat-card-subtitle>Make : Dodge</mat-card-subtitle>\n      <mat-card-subtitle>Model : Ram 1500</mat-card-subtitle>\n      <mat-card-subtitle>Year : 2007</mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 1D7HU18247S231278</mat-card-subtitle>\n      <mat-card-subtitle>License Plate : 5417Vl</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  \n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 18</mat-card-title>\n      <mat-card-subtitle>Make : Dodge</mat-card-subtitle>\n      <mat-card-subtitle>Model : Ram 1500</mat-card-subtitle>\n      <mat-card-subtitle>Year : 2007</mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 1D7HU18247S231278</mat-card-subtitle>\n      <mat-card-subtitle>License Plate : 5417Vl</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  <mat-divider></mat-divider>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Unit No. : 18</mat-card-title>\n      <mat-card-subtitle>Make : Dodge</mat-card-subtitle>\n      <mat-card-subtitle>Model : Ram 1500</mat-card-subtitle>\n      <mat-card-subtitle>Year : 2007</mat-card-subtitle>\n      <mat-card-subtitle>Serial No. : 1D7HU18247S231278</mat-card-subtitle>\n      <mat-card-subtitle>License Plate : 5417Vl</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n  <mat-divider></mat-divider>\n\n<mat-divider class=\"footercard\"></mat-divider>\n\n</mat-card-content>\n\n<!-- <mat-card class=\"matpad btnbtpm\" >\n  <a mat-button  [routerLink]=\"['/Createvehicle']\" >\n    <mat-icon>add</mat-icon>\n    Add New Vehicle\n  </a>\n</mat-card> -->\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/vehicle/vehicle.component.ts":
/*!**********************************************!*\
  !*** ./src/app/vehicle/vehicle.component.ts ***!
  \**********************************************/
/*! exports provided: VehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleComponent", function() { return VehicleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VehicleComponent = /** @class */ (function () {
    function VehicleComponent() {
    }
    VehicleComponent.prototype.ngOnInit = function () {
    };
    VehicleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle',
            template: __webpack_require__(/*! ./vehicle.component.html */ "./src/app/vehicle/vehicle.component.html"),
            styles: [__webpack_require__(/*! ./vehicle.component.css */ "./src/app/vehicle/vehicle.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VehicleComponent);
    return VehicleComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sohaib\Desktop\LukeCustomer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map