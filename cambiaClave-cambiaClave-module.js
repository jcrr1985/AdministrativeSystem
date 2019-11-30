(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cambiaClave-cambiaClave-module"],{

/***/ "./src/app/routes/cambiaClave/cambiaClave.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/cambiaClave/cambiaClave.module.ts ***!
  \**********************************************************/
/*! exports provided: CambiaClaveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CambiaClaveModule", function() { return CambiaClaveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cambiaClave_cambiaClave_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cambiaClave/cambiaClave.component */ "./src/app/routes/cambiaClave/cambiaClave/cambiaClave.component.ts");
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-table/ng2-table */ "./node_modules/ng2-table/ng2-table.js");
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _commonPopUp_commonPopUp_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../commonPopUp/commonPopUp.module */ "./src/app/routes/commonPopUp/commonPopUp.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'cambiaClave', component: _cambiaClave_cambiaClave_component__WEBPACK_IMPORTED_MODULE_3__["CambiaClaveComponent"] }
];
var CambiaClaveModule = /** @class */ (function () {
    function CambiaClaveModule() {
    }
    CambiaClaveModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_4__["Ng2TableModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _commonPopUp_commonPopUp_module__WEBPACK_IMPORTED_MODULE_8__["CommonPopUpModule"]
            ],
            declarations: [_cambiaClave_cambiaClave_component__WEBPACK_IMPORTED_MODULE_3__["CambiaClaveComponent"]],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], CambiaClaveModule);
    return CambiaClaveModule;
}());



/***/ }),

/***/ "./src/app/routes/cambiaClave/cambiaClave/cambiaClave.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/routes/cambiaClave/cambiaClave/cambiaClave.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"block-center mt-xl wd-xl\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-dark panel-flat\">\r\n            <div class=\"panel-heading text-center\">\r\n                <a href=\"#\">\r\n                    <img class=\"block-center img-rounded\" src=\"assets/img/logo.png\" alt=\"Image\" />\r\n                </a>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <p class=\"text-center pv\">Cambio Contraseña Usuario</p>\r\n                <p class=\"text-center pv\">                   \r\n                    {{titulo}}\r\n                </p>\r\n                <form  [formGroup]=\"forma \" form-validate class=\"mb-lg\">\r\n                    <!-- [formGroup]=\"forma\" -->\r\n                    <!-- form-validate -->\r\n                    <div class=\"form-group has-feedback\">\r\n                        <p>Contraseña Actual:</p>\r\n                        <input class=\"form-control\" id=\"actualPass\" type=\"password\" name=\"pass\" placeholder=\"Contraseña Actual\" formControlName=\"actualPass\" required />\r\n                    </div>                 \r\n                    <div class=\"form-group has-feedback\">\r\n                        <p>Nueva Contraseña :</p>\r\n                        <input class=\"form-control\" id=\"nuevaPass\" type=\"password\" name=\"pass\" placeholder=\"Nueva Contraseña\" formControlName=\"nuevaPass\" required />\r\n                    </div>   \r\n                    <div class=\"form-group has-feedback\">\r\n                        <p>Confirma Contraseña :</p>\r\n                        <input class=\"form-control\" id=\"confirmaPass\" type=\"password\" name=\"pass\" placeholder=\"Confirmar Contraseña\" formControlName=\"confirmaPass\" required/>\r\n                    </div>            \r\n\r\n                    <div class=\"col-sm-12\">\r\n                      <div class=\"col-sm-6\">                  \r\n                          <button class=\"btn btn-block btn-primary mt-lg\" type=\"submit\" (click)=\"cambiar()\">Cambiar</button>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                          <button class=\"btn btn-block btn-primary mt-lg\" type=\"submit\" routerLink=\"/home\">Cancelar</button>\r\n                      </div>\r\n                    </div>                  \r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n        <!-- <div class=\"p-lg text-center\">\r\n            <span>&copy;</span>\r\n            <span>{{ settings.app.year }}</span>\r\n            <span>-</span>\r\n            <span>{{ settings.app.name }}</span>\r\n            <br/>\r\n            <span>{{ settings.app.description }}</span>\r\n        </div> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cambiaClave/cambiaClave/cambiaClave.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/routes/cambiaClave/cambiaClave/cambiaClave.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cambiaClave/cambiaClave/cambiaClave.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/routes/cambiaClave/cambiaClave/cambiaClave.component.ts ***!
  \*************************************************************************/
/*! exports provided: CambiaClaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CambiaClaveComponent", function() { return CambiaClaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/settings/settings.service */ "./src/app/core/settings/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_consultaService_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/consultaService/login.service */ "./src/app/core/consultaService/login.service.ts");
/* harmony import */ var _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/consultaService/articulo.service */ "./src/app/core/consultaService/articulo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var md5_typescript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! md5-typescript */ "./node_modules/md5-typescript/dist/index.js");
/* harmony import */ var _core_consultaService_existencias_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/consultaService/existencias.service */ "./src/app/core/consultaService/existencias.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var swal = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/lib/sweetalert.js");
var CambiaClaveComponent = /** @class */ (function () {
    function CambiaClaveComponent(settings, fb, http, userService, cargador, router, consultasService, articuloService, existencia, loginService, utilService) {
        this.settings = settings;
        this.http = http;
        this.userService = userService;
        this.cargador = cargador;
        this.router = router;
        this.consultasService = consultasService;
        this.articuloService = articuloService;
        this.existencia = existencia;
        this.loginService = loginService;
        this.utilService = utilService;
        this.request = {};
        this.user = {};
        this.dataValidaLog = {};
        this.titulo = 'Para cambiar su contraseña Ud. deberá ingresar su actual contraseña y luego escribir la nueva contraseña dos veces, de manera de asegurar la digitación.';
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            actualPass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            nuevaPass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            confirmaPass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
    }
    CambiaClaveComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getDatosUser();
    };
    CambiaClaveComponent.prototype.cambiar = function () {
        this.passValido = false;
        if (this.forma.valid) {
            this.validaLogueo();
            if (!this.utilService.isValidaPassword(this.forma.controls.nuevaPass.value)) {
                this.forma.controls.nuevaPass.setValue('');
                this.forma.controls.confirmaPass.setValue('');
                swal('Atención', 'La nueva contraseña es incorrecta.', 'error');
            }
            else {
                this.passValido = true;
                if (this.passValido = true) {
                    this.pass = md5_typescript__WEBPACK_IMPORTED_MODULE_10__["Md5"].init(this.forma.controls.actualPass.value).toUpperCase();
                    this.newPass = this.forma.controls.nuevaPass.value;
                    this.confPass = this.forma.controls.confirmaPass.value;
                }
                else {
                    swal('Atención', 'La nueva contraseña debe cumplir con almenos una Mayuscula letras y un puntos.', 'error');
                }
            }
        }
        else {
            swal('Atención', 'Complete los campos requeridos.', 'error');
        }
    };
    CambiaClaveComponent.prototype.validaLogueo = function () {
        var _this = this;
        this.request = {};
        this.request.scodaplicacion = this.user.scodaplicacion;
        this.request.scontrasena = this.pass;
        this.request.snomusuario = this.user.snomusuario;
        this.loginService.getValidaLogeo(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            _this.dataValidaLog = data.validaLogeo[0];
            if (_this.dataValidaLog.ses_sidsesion !== 'null') {
                _this.actualizaContrasena();
                ;
            }
            else {
                swal('Atención', 'La contraseña ingresada no corresponde a su contraseña actual.', 'error');
                _this.forma.controls.nuevaPass.setValue('');
                _this.forma.controls.actualPass.setValue('');
                _this.forma.controls.confirmaPass.setValue('');
            }
        }),
            function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            };
    };
    CambiaClaveComponent.prototype.actualizaContrasena = function () {
        var _this = this;
        if (this.pass === this.newPass) {
            swal('Atención', 'La nueva contraseña no puede ser igual a la actual!', 'error');
            this.forma.controls.confirmaPass.setValue('');
            this.forma.controls.nuevaPass.setValue('');
        }
        else if (this.confPass != this.newPass) {
            swal('Atención', 'Confirme nuevamente su contraseña!', 'error');
            this.forma.controls.confirmaPass.setValue('');
        }
        else {
            this.pass = md5_typescript__WEBPACK_IMPORTED_MODULE_10__["Md5"].init(this.forma.controls.actualPass.value).toUpperCase();
            this.request = {};
            this.request.nRutOperador = this.user.nrutoperador;
            this.request.nRutUsuario = this.user.nrunusuario;
            this.request.sContrasena = this.pass;
            this.request.sContrasenaNueva = this.newPass;
            this.loginService.getActualizaContrasena(this.request)
                .subscribe(function (data) {
                if (data.error.codError === 0) {
                    swal('Exito', 'Su contraseña fue actualizada!', 'success');
                    _this.forma.controls.nuevaPass.setValue('');
                    _this.forma.controls.actualPass.setValue('');
                    _this.forma.controls.confirmaPass.setValue('');
                    _this.request = {};
                    _this.router.navigate(['/home']);
                }
                else if (data.error.codError === 1) {
                    swal('Atención', 'La Clave ingresada ya existe en el historial!', 'error');
                    _this.forma.controls.actualPass.setValue('');
                    _this.forma.controls.confirmaPass.setValue('');
                }
                else if (data.error.codError === 2) {
                    swal('Atención', 'La clave ingresada no es valida!', 'error');
                    _this.forma.controls.nuevaPass.setValue('');
                    _this.forma.controls.actualPass.setValue('');
                    _this.forma.controls.confirmaPass.setValue('');
                }
            }),
                function (error) {
                    _this.cargador.hide();
                    _this.forma.controls.nuevaPass.setValue('');
                    _this.forma.controls.actualPass.setValue('');
                    _this.forma.controls.confirmaPass.setValue('');
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                };
        }
    };
    CambiaClaveComponent.prototype.cancelar = function () {
        console.log('cancelar');
    };
    CambiaClaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cambia-clave',
            template: __webpack_require__(/*! ./cambiaClave.component.html */ "./src/app/routes/cambiaClave/cambiaClave/cambiaClave.component.html"),
            styles: [__webpack_require__(/*! ./cambiaClave.component.scss */ "./src/app/routes/cambiaClave/cambiaClave/cambiaClave.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_6__["ConsultasService"],
            _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_8__["ArticuloService"], _core_consultaService_existencias_service__WEBPACK_IMPORTED_MODULE_11__["ExistenciasService"],
            _core_consultaService_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"], _services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"]])
    ], CambiaClaveComponent);
    return CambiaClaveComponent;
}());



/***/ })

}]);
//# sourceMappingURL=cambiaClave-cambiaClave-module.js.map