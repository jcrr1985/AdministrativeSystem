(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracionComercial-administracionComercial-module"],{

/***/ "./src/app/routes/administracionComercial/accionesComerciales/accionesComerciales.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/accionesComerciales/accionesComerciales.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Acciones Comerciales</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label lh-11\">N° Acción Comercial</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input appNaturalNumber formControlName=\"numAccionComercial\" name=\"numAccionComercial\" class=\"form-control\" type=\"number\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Tipo Acción</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"tipoAccion\" name=\"tipoAccion\">\r\n                            <option *ngFor=\"let userTipoAccion of tipoAccion\" [ngValue]=\"userTipoAccion.codtipoAccion\">{{userTipoAccion.desctipoAccion}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label lh-11\">Tipo Descuento</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"tipoDescuento\" name=\"tipoDescuento\">\r\n                            <option value=\"\" selected>(Todos)</option>\r\n                            <option *ngFor=\"let userTipoDescuento of tipoDescuento\" [ngValue]=\"userTipoDescuento.par_codparametro01\">{{userTipoDescuento.par_deslargo01}}</option>\r\n                      </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Desde</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaDesde\" name=\"fechaDesde\" type=\"date\" (focusout)=\"actualizarFechaDesde()\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Hasta</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaHasta\" name=\"fechaHasta\" type=\"date\" (focusout)=\"actualizarFechaHasta()\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div class=\"row pull-left mb-4\">\r\n            <div class=\"col-sm-2 mr-3\">\r\n                <button class=\"btn btn-oval btn-sm\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <a routerLink=\"/administracionComercial/detalleDescuentoComercial\" (click)=\"nuevoDescuento()\" class=\"btn btn-oval btn-sm\" type=\"button\">Nuevo Descuento</a>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <a routerLink=\"/administracionComercial/detalleBonificacionComercial\" (click)=\"nuevaBonificacion()\" class=\"btn btn-oval btn-sm\">Nueva Bonificación</a>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>N° Acción</th>\r\n                                <th>Fecha Inicio</th>\r\n                                <th>Fecha Término</th>\r\n                                <th>Tipo</th>\r\n                                <th>Tipo Descuento</th>\r\n                                <th>Ver</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let accionComercial of accionesComerciales | paginate: {itemsPerPage: 7, currentPage: pageActual};\">\r\n                                <td>{{ accionComercial.aco_nidaccion }}</td>\r\n                                <td class=\"text-center\">{{ accionComercial.aco_dfhoinicio | fecha }}</td>\r\n                                <td class=\"text-center\">{{ accionComercial.aco_dfhotermino | fecha }}</td>\r\n                                <td>{{ accionComercial.aco_scodtipoaccion === 'DESCU' ? 'Descuento' : 'Bonificación' }}</td>\r\n                                <td>{{ accionComercial.sdestipodescuento }}</td>\r\n                                <td class=\"text-center\">\r\n                                    <span class=\"table-remove\">\r\n                                        <a class=\"text\" data-toggle=\"tooltip\" title=\"Ver Detalle\" (click)=\"editarAccionComercial(accionComercial)\">\r\n                                            <em class=\"fa fa-search\"></em>\r\n                                        </a>\r\n                                    </span>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <br>\r\n                    <div class=\"text-right\">\r\n                        <pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\"></pagination-controls>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionComercial/accionesComerciales/accionesComerciales.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/accionesComerciales/accionesComerciales.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pad-3{padding-top:3px}\n"

/***/ }),

/***/ "./src/app/routes/administracionComercial/accionesComerciales/accionesComerciales.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/accionesComerciales/accionesComerciales.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AccionesComercialesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccionesComercialesComponent", function() { return AccionesComercialesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_consultaService_administracionComercial_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/administracionComercial.service */ "./src/app/core/consultaService/administracionComercial.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
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
var AccionesComercialesComponent = /** @class */ (function () {
    function AccionesComercialesComponent(fb, utilService, administracionComercialService, cargador, router, authService) {
        this.utilService = utilService;
        this.administracionComercialService = administracionComercialService;
        this.cargador = cargador;
        this.router = router;
        this.authService = authService;
        this.request = {};
        this.accionesComerciales = [];
        this.pageActual = 1;
        this.tipoAccion = [
            {
                codtipoAccion: null,
                desctipoAccion: '(Todos)'
            },
            {
                codtipoAccion: 'BONIF',
                desctipoAccion: 'Bonificación'
            },
            {
                codtipoAccion: 'DESCU',
                desctipoAccion: 'Descuento'
            }
        ];
        this.fechaActual = new Date();
        this.editFechaDesde = false;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            numAccionComercial: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            tipoAccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            tipoDescuento: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            fechaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fechaHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    AccionesComercialesComponent.prototype.ngOnInit = function () {
        console.log('forma', this.forma);
        this.cargaCombos();
        this.forma.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.forma.controls.fechaHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
    };
    AccionesComercialesComponent.prototype.cargaCombos = function () {
        this.tipoDescuento = this.authService.getParametrosTipoDescuento();
    };
    AccionesComercialesComponent.prototype.buscar = function () {
        var _this = this;
        console.log(this.forma);
        this.accionesComerciales = [];
        if (this.forma.valid) {
            if (this.forma.controls.numAccionComercial.value === null) {
                this.request.nIdAccionComercial = 0;
            }
            else {
                this.request.nIdAccionComercial = this.forma.controls.numAccionComercial.value;
            }
            this.request.sCodTipoAccion = this.forma.controls.tipoAccion.value;
            this.request.sCodTipoDscto = this.forma.controls.tipoDescuento.value;
            this.request.sFechaInicioDesde = (this.forma.controls.fechaDesde.value).replace(/-/g, '');
            this.request.sFechaTerminoHasta = (this.forma.controls.fechaHasta.value).replace(/-/g, '');
            console.log('request', this.request);
            this.cargador.show();
            this.administracionComercialService.getAccionesComerciales(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                console.log('data', data);
                if (data.accionesComerciales) {
                    console.log('existe data');
                    if (data.accionesComerciales.length == 0 && data.error.codError == 0) {
                        swal('Atención', 'No se encontraron resultados', 'info');
                    }
                    else {
                        _this.accionesComerciales = data.accionesComerciales;
                    }
                }
                if (data.error.codError != 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    AccionesComercialesComponent.prototype.actualizarFechaDesde = function () {
        if (this.forma.controls.fechaDesde.value === '') {
            this.forma.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
        if (!this.utilService.DateValidator(this.forma.controls.fechaDesde.value)) {
            this.forma.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
    };
    AccionesComercialesComponent.prototype.actualizarFechaHasta = function () {
        if (this.forma.controls.fechaHasta.value === '') {
            this.forma.controls.fechaHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
        if (!this.utilService.DateValidator(this.forma.controls.fechaHasta.value)) {
            this.forma.controls.fechaHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
    };
    AccionesComercialesComponent.prototype.editarAccionComercial = function (accionComercial) {
        this.administracionComercialService.selectedAccionComercial = Object.assign({}, accionComercial);
        if (accionComercial.aco_scodtipoaccion === 'DESCU') {
            this.router.navigate(['/administracionComercial/detalleDescuentoComercial']);
        }
        else {
            this.router.navigate(['/administracionComercial/detalleBonificacionComercial']);
        }
    };
    AccionesComercialesComponent.prototype.nuevoDescuento = function () {
        this.administracionComercialService.selectedAccionComercial = Object.assign({});
    };
    AccionesComercialesComponent.prototype.nuevaBonificacion = function () {
        this.administracionComercialService.selectedAccionComercial = Object.assign({});
    };
    AccionesComercialesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accionesComerciales',
            template: __webpack_require__(/*! ./accionesComerciales.component.html */ "./src/app/routes/administracionComercial/accionesComerciales/accionesComerciales.component.html"),
            styles: [__webpack_require__(/*! ./accionesComerciales.component.scss */ "./src/app/routes/administracionComercial/accionesComerciales/accionesComerciales.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _core_consultaService_administracionComercial_service__WEBPACK_IMPORTED_MODULE_3__["AdministracionComercialService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], AccionesComercialesComponent);
    return AccionesComercialesComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionComercial/accionesComerciales/detalleBonificacionComercial/detalleBonificacionComercial.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/accionesComerciales/detalleBonificacionComercial/detalleBonificacionComercial.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Acciones Comerciales<em class=\"fa fa-angle-right mh-2\"></em>Bonificación</h4>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label lh-11\">Fecha Creación</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaCreacion\" name=\"fechaCreacion\" type=\"date\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Número</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"numero\" name=\"numero\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label lh-11\">Tipo Estructura</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <select *ngIf=\"nuevaAccionComercial\" class=\"form-control pv-0\" formControlName=\"tipoEstructura\" name=\"tipoEstructura\" (change)=\"verModales()\">\r\n                                <option value=\"\">(Sin Selección)</option>\r\n                                <option *ngFor=\"let userTipo of tipoEstructura\" [ngValue]=\"userTipo.par_codparametro01\">{{userTipo.par_deslargo01}}</option>\r\n                        </select>\r\n                        <input style=\"display:none;\" formControlName=\"tipoEstructura\" name=\"TipoEstructura\" class=\"form-control\" type=\"text\" />\r\n                        <input *ngIf=\"!nuevaAccionComercial\" formControlName=\"desctipoEstructura\" name=\"descTipoEstructura\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label lh-11\">Fecha Vigencia</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input #fechaVigencia class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaVigencia\" name=\"fechaVigencia\" type=\"date\" (focusout)=\"validarFechas(fechaVigencia)\" required />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Hora</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input class=\"form-control pr-1 w-110 text-center\" formControlName=\"horaVigencia\" name=\"horaVigencia\" type=\"time\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Descripción</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <input formControlName=\"descripcion\" name=\"descripcion\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label lh-11\">Fecha Término</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input #fechaTermino class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaTermino\" name=\"fechaTermino\" type=\"date\" (focusout)=\"validarFechas(fechaTermino)\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Hora</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input class=\"form-control pr-1 w-110 text-center\" formControlName=\"horaTermino\" name=\"horaTermino\" type=\"time\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row pull-left mb-4\">\r\n                <div class=\"col-sm-3\">\r\n                    <a routerLink=\"/administracionComercial/accionesComerciales\" class=\"btn btn-oval btn-sm\">Volver</a>\r\n                </div>\r\n                <div class=\"col-sm-3 mr-2\">\r\n                    <button class=\"btn btn-oval btn-sm\" type=\"button\" [disabled]=\"noVigente\" (click)=\"guardaBonificacion()\">Guardar</button>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <button class=\"btn btn-oval btn-sm\" type=\"button\" [disabled]=\"inhabilitar || nuevaAccionComercial\" (click)=\"inhabilitarAccion()\">Inhabilitar</button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"panel\">\r\n                        <tabset>\r\n                            <tab>\r\n                                <ng-template tabHeading>Estructura Comercial Lineal</ng-template>\r\n                                <div>\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"col-sm-12 ph-0\">\r\n                                            <div class=\"col-sm-4\">\r\n                                                <label class=\"col-sm-2 control-label ph-0 lh-11\">Fuerza de Venta</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                    <input formControlName=\"codFuerzaVenta\" name=\"codFuerzaVenta\" class=\"form-control\" type=\"text\" style=\"display:none;\" />\r\n                                                    <input formControlName=\"desFuerzaVenta\" name=\"desFuerzaVenta\" class=\"form-control\" type=\"text\" />\r\n                                                </div>\r\n                                                <div class=\"col-sm-1\">\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalFzaVta()\" [disabled]=\"noVigente\">\r\n                                                        <em class=\"icon-magnifier\"></em>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-4\">\r\n                                                <label class=\"col-sm-2 control-label ph-0\">Operador</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                    <input formControlName=\"codOperador\" name=\"codOperador\" class=\"form-control\" type=\"text\" style=\"display:none;\" />\r\n                                                    <input formControlName=\"descOperador\" name=\"descOperador\" class=\"form-control\" type=\"text\" />\r\n                                                </div>\r\n                                                <div class=\"col-sm-1\">\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalOperador()\" [disabled]=\"noVigente\">\r\n                                                        <em class=\"icon-magnifier\"></em>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-4\">\r\n                                                <label class=\"col-sm-2 control-label\">Zona</label>\r\n                                                <div class=\"col-sm-8 pl-0\">\r\n                                                    <input formControlName=\"codZona\" name=\"codZona\" class=\"form-control\" type=\"text\" style=\"display:none;\" />\r\n                                                    <input formControlName=\"descZona\" name=\"descZona\" class=\"form-control\" type=\"text\" />\r\n                                                </div>\r\n                                                <div *ngIf=\"verModal\" class=\"col-sm-1\">\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal('zona', 'Zonas')\" [disabled]=\"noVigente\">\r\n                                                        <em class=\"icon-magnifier\"></em>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-12 ph-0\">\r\n                                            <div class=\"col-sm-4\">\r\n                                                <label class=\"col-sm-2 control-label ph-0\">Territorio</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                    <input formControlName=\"codTerritorio\" name=\"codTerritorio\" class=\"form-control\" type=\"text\" style=\"display:none;\" />\r\n                                                    <input formControlName=\"descTerritorio\" name=\"descTerritorio\" class=\"form-control\" type=\"text\" />\r\n                                                </div>\r\n                                                <div *ngIf=\"verModal\" class=\"col-sm-1\">\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal('territorioAC', 'Territorio')\" [disabled]=\"noVigente\">\r\n                                                        <em class=\"icon-magnifier\"></em>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-4\">\r\n                                                <label class=\"col-sm-2 control-label ph-0 lh-11\">Cat. Negocio</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                    <input formControlName=\"codCatNegocio\" name=\"codCatNegocio\" class=\"form-control\" type=\"text\" style=\"display:none;\" />\r\n                                                    <input formControlName=\"desCatNegocio\" name=\"desCatNegocio\" class=\"form-control\" type=\"text\" />\r\n                                                </div>\r\n                                                <div class=\"col-sm-1\">\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalcatNegocio()\" [disabled]=\"noVigente\">\r\n                                                       <em class=\"icon-magnifier\"></em>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-12 ph-0\">\r\n                                            <div class=\"col-sm-4\">\r\n                                                <label class=\"col-sm-2 control-label ph-0\">Cliente</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                    <input formControlName=\"rutCliente\" name=\"rutCliente\" class=\"form-control\" type=\"text\" style=\"display:none;\" />\r\n                                                    <input formControlName=\"dvRutCliente\" name=\"dvRutCliente\" class=\"form-control\" type=\"text\" style=\"display:none;\" />\r\n                                                    <input formControlName=\"nombreCliente\" name=\"nombreCliente\" class=\"form-control\" type=\"text\" />\r\n                                                </div>\r\n                                                <div class=\"col-sm-1\">\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCliente()\" [disabled]=\"noVigente\">\r\n                                                        <em class=\"icon-magnifier\"></em>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-4\">\r\n                                                <label class=\"col-sm-2 control-label ph-0 lh-11\">Cliente Local R/C</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                    <input formControlName=\"codNumLocal\" name=\"codNumLocal\" class=\"form-control\" type=\"number\" style=\"display:none;\" />\r\n                                                    <input formControlName=\"codClienteLocal\" name=\"codClienteLocal\" class=\"form-control\" type=\"text\" style=\"display:none;\" />\r\n                                                    <input formControlName=\"descClienteLocal\" name=\"descClienteLocal\" class=\"form-control\" type=\"text\" />\r\n                                                </div>\r\n                                                <div *ngIf=\"verModal\" class=\"col-sm-1\">\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalClienteLocalRC()\" [disabled]=\"noVigente\">\r\n                                                        <em class=\"icon-magnifier\"></em>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row pull-left mt-3 ml-0\">\r\n                                            <div class=\"col-sm-3 mr-3\">\r\n                                                <button class=\"btn btn-oval btn-sm\" type=\"button\" [disabled]='noVigente' (click)=\"agregar()\">Agregar</button>\r\n                                            </div>\r\n                                            <div class=\"col-sm-4\">\r\n                                                <button class=\"btn btn-oval btn-sm\" type=\"button\" [disabled]='noVigente' (click)=\"eliminar()\">Eliminar</button>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3 pl-1\">\r\n                                                <button class=\"btn btn-oval btn-sm\" type=\"button\" [disabled]='noVigente' (click)=\"limpiar()\">Limpiar</button>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"table\">\r\n                                        <table class=\"table table-bordered table-hover\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th>\r\n                                                        <div class=\"checkbox c-checkbox needsclick pt-1\">\r\n                                                            <label class=\"needsclick\">\r\n                                                                <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckTitulo()\" [checked]=\"checkTituloSeleccionado\" />\r\n                                                                <span class=\"fa fa-check\"></span>\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </th>\r\n                                                    <th class=\"align-middle\">Fuerza Venta</th>\r\n                                                    <th class=\"align-middle\">Operador</th>\r\n                                                    <th class=\"align-middle\">Zona</th>\r\n                                                    <th class=\"align-middle\">Territorio</th>\r\n                                                    <th class=\"align-middle\">Categoría Negocio</th>\r\n                                                    <th class=\"align-middle\">Cliente</th>\r\n                                                    <th class=\"align-middle\">Cliente Local R/C</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let estructura of estructurasAccionesComerciales\">\r\n                                                    <td>\r\n                                                        <div class=\"checkbox c-checkbox needsclick pt-1\">\r\n                                                            <label class=\"needsclick\">\r\n                                                                <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckEstructura(estructura)\" [checked]=\"estructura.bCheck\" />\r\n                                                                <span class=\"fa fa-check\"></span>\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>{{ estructura.fvt_sdesfuerzavta === ' ' && estructuraListado === 'LINEA' ? '(Todos)' : estructura.fvt_sdesfuerzavta }}</td>\r\n                                                    <td>{{ estructura.ope_snombre === ' ' && estructuraListado === 'LINEA' ? '(Todos)' : estructura.ope_snombre }}</td>\r\n                                                    <td>{{ estructura.zon_sdeszona === ' ' && estructuraListado === 'LINEA' ? '(Todos)' : estructura.zon_sdeszona }}</td>\r\n                                                    <td>{{ estructura.ter_sdesterritorio === ' ' && estructuraListado === 'LINEA' ? '(Todos)' : estructura.ter_sdesterritorio }}</td>\r\n                                                    <td>{{ estructura.can_sdescatnegocio === ' ' && estructuraListado === 'LINEA' ? '(Todos)' : estructura.can_sdescatnegocio }}</td>\r\n                                                    <td>{{ estructura.cli_snombre === ' ' && estructuraListado === 'LINEA' ? '(Todos)' : estructura.cli_snombre }}</td>\r\n                                                    <td *ngIf=\"estructuraListado === 'LINEA'\">{{ estructura.rel_sdescripcionrelacioncomerc === ' ' && estructuraListado === 'LINEA' ? '(Todos)' : 'Local ' + estructura.pea_nnumlocal + ' / ' + estructura.rel_sdescripcionrelacioncomerc }}</td>\r\n                                                    <td *ngIf=\"estructuraListado !== 'LINEA'\">{{ estructura.rel_sdescripcionrelacioncomerc }}</td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </tab>\r\n                            <tab>\r\n                                <ng-template tabHeading>Regla</ng-template>\r\n                                <div>\r\n                                    <div class=\"row pull-left mb-4\">\r\n                                        <div class=\"col-sm-3 mr-3\">\r\n                                            <button class=\"btn btn-oval btn-sm\" type=\"button\" [disabled]='noVigente' (click)=\"eliminarJerarquia()\">Eliminar</button>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"table\">\r\n                                        <table class=\"table table-bordered table-hover jerarquiaProductos\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th class=\"no-border-bottom\"></th>\r\n                                                    <th class=\"no-border-bottom\"></th>\r\n                                                    <th class=\"no-border-bottom\"></th>\r\n                                                    <th colspan=\"2\">Cantidad</th>\r\n                                                    <th class=\"no-border-bottom\"></th>\r\n                                                    <th class=\"no-border-bottom\"></th>\r\n                                                    <th colspan=\"2\">Cantidad</th>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <th class=\"w-60\">\r\n                                                        <div class=\"checkbox c-checkbox needsclick pt-1 w-40 pl-1\">\r\n                                                            <label class=\"needsclick\">\r\n                                                              <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckTituloJerarquia()\" [checked]=\"checkTituloJerarquiaSeleccionado\" />\r\n                                                              <span class=\"fa fa-check\"></span>\r\n                                                          </label>\r\n                                                        </div>\r\n                                                    </th>\r\n                                                    <th class=\"align-middle\">Artículo</th>\r\n                                                    <th class=\"align-middle width-30-porc\">Descripción Artículo</th>\r\n                                                    <th class=\"align-middle\">Unid. Venta</th>\r\n                                                    <th class=\"align-middle\">Fracción</th>\r\n                                                    <th class=\"align-middle\">Art.Bonificado</th>\r\n                                                    <th class=\"align-middle width-30-porc\">Descripción Artículo</th>\r\n                                                    <th class=\"align-middle\">Unid. Venta</th>\r\n                                                    <th class=\"align-middle\">Fracción</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let articulo of articulosJerarquia\">\r\n                                                    <td class=\"pt-0\">\r\n                                                        <div class=\"checkbox c-checkbox needsclick\">\r\n                                                            <label class=\"needsclick\">\r\n                                                                <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckJerarquia(articulo)\" [checked]=\"articulo.bCheck\" />\r\n                                                                <span class=\"fa fa-check\"></span>\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td class=\"w-80\">{{articulo.sCodFormato}}-{{articulo.sCodVariedad}}</td>\r\n                                                    <td>{{articulo.sDescripcion}}</td>\r\n                                                    <td class=\"w-80 text-right\" *ngIf=\"articulo.sCodFormato + '-' + articulo.sCodVariedad !== editRowID\">{{articulo.nCantidad | number:'':'es'}}</td>\r\n                                                    <td *ngIf=\"articulo.sCodFormato + '-' + articulo.sCodVariedad === editRowID\">\r\n                                                        <input appNaturalNumber #cantidad type=\"number\" class=\"form-control w-80 ph-1 text-right\" [(ngModel)]=\"articulo.nCantidad\" [ngModelOptions]=\"{standalone: true}\" (keydown.Tab)=\"validaCantidad(cantidad)\" (focusout)=\"validaCantidad(cantidad)\" maxlength=\"10\"\r\n                                                            oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                                    </td>\r\n                                                    <td class=\"w-80 text-right\" *ngIf=\"articulo.sCodFormato + '-' + articulo.sCodVariedad !== editRowID\">{{articulo.nFraccion | number:'':'es'}}</td>\r\n                                                    <td *ngIf=\"articulo.sCodFormato + '-' + articulo.sCodVariedad === editRowID\">\r\n                                                        <input appNaturalNumber #fraccion type=\"number\" class=\"form-control w-80 ph-1 text-right\" [(ngModel)]=\"articulo.nFraccion\" [ngModelOptions]=\"{standalone: true}\" (keydown.Tab)=\"validaCantidad(fraccion)\" (focusout)=\"validaFraccion(articulo, 1)\" maxlength=\"10\"\r\n                                                            oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"></td>\r\n                                                    <td class=\"w-80\">{{articulo.sCodFormatoBonificado}}-{{articulo.sCodVariedadBonificado}}</td>\r\n                                                    <td>{{articulo.sDescripcionBonificado}}</td>\r\n                                                    <td class=\"w-80 text-right\" *ngIf=\"articulo.sCodFormato + '-' + articulo.sCodVariedad !== editRowID\">{{articulo.nCantidadBonificado | number:'':'es'}}</td>\r\n                                                    <td *ngIf=\"articulo.sCodFormato + '-' + articulo.sCodVariedad === editRowID\">\r\n                                                        <input appNaturalNumber #cantidadBoni type=\"number\" class=\"form-control w-80 ph-1 text-right\" [(ngModel)]=\"articulo.nCantidadBonificado\" [ngModelOptions]=\"{standalone: true}\" (keydown.Tab)=\"validaCantidad(cantidadBoni)\" (focusout)=\"validaCantidad(cantidadBoni)\"\r\n                                                            maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                                    </td>\r\n                                                    <td class=\"w-80 text-right\" *ngIf=\"articulo.sCodFormato + '-' + articulo.sCodVariedad !== editRowID\">{{articulo.nFraccionBonificado | number:'':'es'}}</td>\r\n                                                    <td *ngIf=\"articulo.sCodFormato + '-' + articulo.sCodVariedad === editRowID\">\r\n                                                        <input appNaturalNumber #fraccionBoni type=\"number\" class=\"form-control w-80 ph-1 text-right\" [(ngModel)]=\"articulo.nFraccionBonificado\" [ngModelOptions]=\"{standalone: true}\" (keydown.Tab)=\"validaCantidad(fraccionBoni)\" (focusout)=\"validaFraccion(articulo, 2)\"\r\n                                                            maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                                    </td>\r\n                                                    <td *ngIf=\"!noVigente\">\r\n                                                        <span *ngIf=\"!articulo.verOK\" class=\"table-remove\">\r\n                                                            <a class=\"text\" (click)=\"edit(articulo)\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Editar\">\r\n                                                                <em class=\"fa fa-edit\"></em>\r\n                                                            </a>\r\n                                                        </span>\r\n                                                        <span *ngIf=\"articulo.verOK\" class=\"table-remove\">\r\n                                                            <a class=\"text\"(click)=\"save(articulo)\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Guardar\">\r\n                                                                <em class=\"fa fa-check\"></em>\r\n                                                            </a>\r\n                                                        </span>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td></td>\r\n                                                    <td class=\"w-100 align-top\">\r\n                                                        <input #articulo type=\"text\" [(ngModel)]=\"filterData\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control w-80\" (input)=\"setArticulo(articulo)\" (keydown.Tab)=\"validaArticulo(articulo,descripcion,cantidad)\" />\r\n                                                        <ul *ngIf=\"verListaArticulo\" class=\"list-group filter-list\">\r\n                                                            <li *ngFor=\"let data of parametrosAutocomplete | filter:filterData\" (click)=\"seleccionaArticulo(data, articulo, descripcion, cantidad)\">\r\n                                                                <a class=\"list-group-item\">{{data.art_scodformato}}-{{data.art_scodvariedad}}</a>\r\n                                                            </li>\r\n                                                        </ul>\r\n                                                    </td>\r\n                                                    <td class=\"align-top\">\r\n                                                        <input #descripcion type=\"text\" [(ngModel)]=\"filterDesc\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control width-desc\" (input)=\"setDescripcion(descripcion)\" (keydown.Tab)=\"validaDescripcion(articulo,descripcion,cantidad)\" />\r\n                                                        <ul *ngIf=\"verListaDescripcion\" class=\"list-group filter-list\">\r\n                                                            <li *ngFor=\"let data of parametrosAutocomplete | filterDesc:filterDesc\" (click)=\"seleccionaDescripcion(data, articulo, descripcion, cantidad)\">\r\n                                                                <a class=\"list-group-item\">{{data.art_sdescripcion}}</a>\r\n                                                            </li>\r\n                                                        </ul>\r\n                                                    </td>\r\n                                                    <td class=\"align-top\">\r\n                                                        <input appNaturalNumber #cantidad type=\"number\" class=\"form-control w-80 ph-1 text-right\" (keydown.Tab)=\"validaCantidad(cantidad)\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                                    </td>\r\n                                                    <td class=\"align-top\">\r\n                                                        <input appNaturalNumber #fraccion type=\"number\" class=\"form-control w-80 ph-1 text-right\" (keydown.Tab)=\"validaCantidad(fraccion)\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                                    </td>\r\n                                                    <td class=\"w-100 align-top\">\r\n                                                        <input #articuloBoni type=\"text\" [(ngModel)]=\"filterDataB\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control w-80\" (input)=\"setArticuloBoni(articuloBoni)\" (keydown.Tab)=\"validaArticuloBoni(articuloBoni,descripcionBoni,cantidadBoni)\" />\r\n                                                        <ul *ngIf=\"verListaArticuloBoni\" class=\"list-group filter-list\">\r\n                                                            <li *ngFor=\"let data of parametrosAutocomplete | filter:filterDataB\" (click)=\"seleccionaArticuloBoni(data, articuloBoni, descripcionBoni, cantidadBoni)\">\r\n                                                                <a class=\"list-group-item\">{{data.art_scodformato}}-{{data.art_scodvariedad}}</a>\r\n                                                            </li>\r\n                                                        </ul>\r\n                                                    </td>\r\n                                                    <td class=\"align-top\">\r\n                                                        <input #descripcionBoni type=\"text\" [(ngModel)]=\"filterDescB\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control width-desc\" (input)=\"setDescripcionBoni(descripcionBoni)\" (keydown.Tab)=\"validaDescripcionBoni(articuloBoni,descripcionBoni,cantidadBoni)\"\r\n                                                        />\r\n                                                        <ul *ngIf=\"verListaDescripcionBoni\" class=\"list-group filter-list\">\r\n                                                            <li *ngFor=\"let data of parametrosAutocomplete | filterDesc:filterDescB\" (click)=\"seleccionaDescripcionBoni(data, articuloBoni, descripcionBoni, cantidadBoni)\">\r\n                                                                <a class=\"list-group-item\">{{data.art_sdescripcion}}</a>\r\n                                                            </li>\r\n                                                        </ul>\r\n                                                    </td>\r\n                                                    <td class=\"align-top\">\r\n                                                        <input appNaturalNumber #cantidadBoni type=\"number\" class=\"form-control w-80 ph-1 text-right\" (keydown.Tab)=\"validaCantidad(cantidadBoni)\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                                    </td>\r\n                                                    <td class=\"align-top\">\r\n                                                        <input appNaturalNumber #fraccionBoni type=\"number\" class=\"form-control w-80 ph-1 text-right\" (keydown.Tab)=\"validaCantidad(fraccionBoni)\" (keyup.enter)=\"agregarRegla(articulo, descripcion, cantidad, fraccion, articuloBoni, descripcionBoni, cantidadBoni,fraccionBoni)\"\r\n                                                            maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </tab>\r\n                        </tabset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionComercial/accionesComerciales/detalleBonificacionComercial/detalleBonificacionComercial.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/accionesComerciales/detalleBonificacionComercial/detalleBonificacionComercial.component.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-border-bottom{border-bottom:1px solid #85b3cd !important}.filter-list{list-style:none;max-height:200px;overflow-y:scroll}.width-30-porc{width:30% !important}\n"

/***/ }),

/***/ "./src/app/routes/administracionComercial/accionesComerciales/detalleBonificacionComercial/detalleBonificacionComercial.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/accionesComerciales/detalleBonificacionComercial/detalleBonificacionComercial.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: DetalleBonificacionComercialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleBonificacionComercialComponent", function() { return DetalleBonificacionComercialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_consultaService_administracionComercial_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/consultaService/administracionComercial.service */ "./src/app/core/consultaService/administracionComercial.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component */ "./src/app/routes/commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component.ts");
/* harmony import */ var _commonPopUp_clienteACPopUp_clienteACPopUp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../commonPopUp/clienteACPopUp/clienteACPopUp.component */ "./src/app/routes/commonPopUp/clienteACPopUp/clienteACPopUp.component.ts");
/* harmony import */ var _commonPopUp_clienteRelComercialPopUp_clienteRelComercialPopUp_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../commonPopUp/clienteRelComercialPopUp/clienteRelComercialPopUp.component */ "./src/app/routes/commonPopUp/clienteRelComercialPopUp/clienteRelComercialPopUp.component.ts");
/* harmony import */ var _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../core/consultaService/pedidos.service */ "./src/app/core/consultaService/pedidos.service.ts");
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
var DetalleBonificacionComercialComponent = /** @class */ (function () {
    function DetalleBonificacionComercialComponent(administracionComercialService, authService, utilService, consultasService, modalService, cargador, router, pedidosService) {
        this.administracionComercialService = administracionComercialService;
        this.authService = authService;
        this.utilService = utilService;
        this.consultasService = consultasService;
        this.modalService = modalService;
        this.cargador = cargador;
        this.router = router;
        this.pedidosService = pedidosService;
        this.fechaActual = new Date();
        this.nuevaAccionComercial = false;
        this.request = {};
        this.requestGrabar = {};
        this.requestAutocomplete = {};
        this.estructuraListado = '';
        this.verModal = true;
        this.estructurasAccionesComerciales = [];
        this.estructurasAccionesComercialesRequest = [];
        this.articulosJerarquia = [];
        this.articulosJerarquiaRequest = [];
        this.checkTituloSeleccionado = false;
        this.checkEstructuraSeleccionada = false;
        this.checkTituloJerarquiaSeleccionado = false;
        this.checkJerarquiaSeleccionada = false;
        this.combinatoriaValido = false;
        this.origen = '';
        this.enUsoFzaVtas = false;
        this.enOperador = false;
        this.enCatNegocio = false;
        this.enCliente = false;
        this.dataAutocomplete = [];
        this.filterData = '';
        this.filterDataB = '';
        this.filterDesc = '';
        this.filterDescB = '';
        this.grabaEstructuras = false;
        this.grabaEncabezado = false;
        this.grabaJerarquias = false;
        this.hidUnidadesVta1 = 0;
        this.hidUnidadesVta2 = 0;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fechaCreacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            tipoEstructura: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            desctipoEstructura: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            fechaVigencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            horaVigencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fechaTermino: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            horaTermino: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            codFuerzaVenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            desFuerzaVenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            codOperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            descOperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            codZona: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            descZona: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            codTerritorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            descTerritorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            codCatNegocio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            desCatNegocio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            rutCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            dvRutCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nombreCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            codNumLocal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            codClienteLocal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            descClienteLocal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
        });
    }
    DetalleBonificacionComercialComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5___default.a);
        this.parametrosAutocomplete = this.authService.getArticuloAutocomplete();
        if (this.administracionComercialService.selectedAccionComercial.aco_nidaccion) {
            this.forma.controls.fechaCreacion.disable();
            this.forma.controls.numero.disable();
            this.forma.controls.desctipoEstructura.disable();
            // this.forma.controls.tipo.disable();
            this.cargarDatosAccionComercial();
        }
        else {
            console.log('nueva bonificacion');
            this.nuevaAccionComercial = true;
            this.forma.controls.fechaCreacion.setValue(this.utilService.dateToStringFormat(this.fechaActual));
            this.forma.controls.fechaCreacion.disable();
            this.forma.controls.numero.disable();
            this.cargaCombos();
        }
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    DetalleBonificacionComercialComponent.prototype.ngOnDestroy = function () {
        if (this.subData != undefined) {
            this.subData.unsubscribe();
        }
    };
    DetalleBonificacionComercialComponent.prototype.openModal = function (origen, titulo) {
        this.origen = origen;
        var initialState = {
            titulo: titulo,
            origen: origen,
            forma: this.forma
        };
        if (this.forma.controls.tipoEstructura.value === 'COMBI') {
            this.validaCombinatoria();
            if (this.combinatoriaValido) {
                this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
            }
            else {
                swal('Atención', 'Sólo puede seleccionar un item a la vez. Agregue el seleccionado, o limpie antes de continuar.', 'info');
            }
        }
        else if (this.forma.controls.tipoEstructura.value === 'LINEA') {
            this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        }
        else {
            swal('Atención', 'Debe seleccionar el tipo de estructura antes de continuar', 'info');
        }
    };
    DetalleBonificacionComercialComponent.prototype.openModalFzaVta = function () {
        this.origen = 'fuerzaVenta';
        var initialState = {
            titulo: 'Fuerza de Venta',
            origen: 'fuerzaVenta',
            forma: this.forma
        };
        if (this.forma.controls.tipoEstructura.value === 'COMBI') {
            this.validaCombinatoria();
            if (this.combinatoriaValido || this.enUsoFzaVtas) {
                this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
            }
            else {
                swal('Atención', 'Sólo puede seleccionar un item a la vez. Agregue el seleccionado, o limpie antes de continuar.', 'info');
            }
        }
        else if (this.forma.controls.tipoEstructura.value === 'LINEA') {
            this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        }
        else {
            swal('Atención', 'Debe seleccionar el tipo de estructura antes de continuar', 'info');
        }
    };
    DetalleBonificacionComercialComponent.prototype.openModalOperador = function () {
        this.origen = 'operador';
        var initialState = {
            titulo: 'Operadores',
            origen: 'operador',
            forma: this.forma
        };
        if (this.forma.controls.tipoEstructura.value === 'COMBI') {
            this.validaCombinatoria();
            if (this.combinatoriaValido || this.enOperador) {
                this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
            }
            else {
                swal('Atención', 'Sólo puede seleccionar un item a la vez. Agregue el seleccionado, o limpie antes de continuar.', 'info');
            }
        }
        else if (this.forma.controls.tipoEstructura.value === 'LINEA') {
            this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        }
        else {
            swal('Atención', 'Debe seleccionar el tipo de estructura antes de continuar', 'info');
        }
    };
    DetalleBonificacionComercialComponent.prototype.openModalcatNegocio = function () {
        this.origen = 'catNegocio';
        var initialState = {
            titulo: 'Categoría Negocio',
            origen: 'catNegocio',
            forma: this.forma
        };
        if (this.forma.controls.tipoEstructura.value === 'COMBI') {
            this.validaCombinatoria();
            if (this.combinatoriaValido || this.enCatNegocio) {
                this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
            }
            else {
                swal('Atención', 'Sólo puede seleccionar un item a la vez. Agregue el seleccionado, o limpie antes de continuar.', 'info');
            }
        }
        else if (this.forma.controls.tipoEstructura.value === 'LINEA') {
            this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        }
        else {
            swal('Atención', 'Debe seleccionar el tipo de estructura antes de continuar', 'info');
        }
    };
    DetalleBonificacionComercialComponent.prototype.openModalCliente = function () {
        this.origen = 'cliente';
        var initialState = {
            titulo: 'Clientes',
            origen: 'cliente',
            formaCli: this.forma
        };
        if (this.forma.controls.tipoEstructura.value === 'COMBI') {
            this.validaCombinatoria();
            if (this.combinatoriaValido || this.enCliente) {
                this.bsModalRef = this.modalService.show(_commonPopUp_clienteACPopUp_clienteACPopUp_component__WEBPACK_IMPORTED_MODULE_12__["ClienteACPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
            }
            else {
                swal('Atención', 'Sólo puede seleccionar un item a la vez. Agregue el seleccionado, o limpie antes de continuar.', 'info');
            }
        }
        else if (this.forma.controls.tipoEstructura.value === 'LINEA') {
            this.bsModalRef = this.modalService.show(_commonPopUp_clienteACPopUp_clienteACPopUp_component__WEBPACK_IMPORTED_MODULE_12__["ClienteACPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        }
        else {
            swal('Atención', 'Debe seleccionar el tipo de estructura antes de continuar', 'info');
        }
    };
    DetalleBonificacionComercialComponent.prototype.openModalClienteLocalRC = function () {
        this.origen = 'clienteRC';
        var initialState = {
            titulo: 'Clientes / Relación Comercial',
            origen: 'clienteRC',
            formaCli: this.forma
        };
        if (this.forma.controls.tipoEstructura.value === 'COMBI') {
            this.validaCombinatoria();
            if (this.combinatoriaValido) {
                this.bsModalRef = this.modalService.show(_commonPopUp_clienteRelComercialPopUp_clienteRelComercialPopUp_component__WEBPACK_IMPORTED_MODULE_13__["ClienteRelComercialPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
            }
            else {
                swal('Atención', 'Sólo puede seleccionar un item a la vez. Agregue el seleccionado, o limpie antes de continuar.', 'info');
            }
        }
        else if (this.forma.controls.tipoEstructura.value === 'LINEA') {
            this.bsModalRef = this.modalService.show(_commonPopUp_clienteRelComercialPopUp_clienteRelComercialPopUp_component__WEBPACK_IMPORTED_MODULE_13__["ClienteRelComercialPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        }
        else {
            swal('Atención', 'Debe seleccionar el tipo de estructura antes de continuar', 'info');
        }
    };
    DetalleBonificacionComercialComponent.prototype.validaCombinatoria = function () {
        if (this.forma.controls.desFuerzaVenta.value === '' && this.forma.controls.descOperador.value === '' && this.forma.controls.desCatNegocio.value === '' && this.forma.controls.nombreCliente.value === '') {
            this.combinatoriaValido = true;
        }
        else {
            this.combinatoriaValido = false;
        }
    };
    DetalleBonificacionComercialComponent.prototype.cargarDatosAccionComercial = function () {
        var _this = this;
        this.request.nIdAccionComercial = this.administracionComercialService.selectedAccionComercial.aco_nidaccion;
        this.request.sCodTipoDescuento = '00000';
        //carga encabezado Accion Comercial
        this.administracionComercialService.getEncabezadoAccionComercial(this.request)
            .subscribe(function (data) {
            console.log('data encabezado', data);
            if (data.cargaEncabezadoAccionComercial) {
                _this.cargarEncabezadoEstructurasComerciales(data.cargaEncabezadoAccionComercial);
                //Validar Fecha Vigencia
                _this.validaVigencia(data.cargaEncabezadoAccionComercial);
                //Validar Inhabilitar
                _this.validaInhabilitar(data.cargaEncabezadoAccionComercial);
                _this.verModales();
            }
            if (data.error.codError != 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
        //Carga Estructura Acción Comercial
        this.administracionComercialService.getEstructuraAccionComercial(this.request)
            .subscribe(function (data) {
            console.log('data estructura accion comercial', data);
            if (data.cargaEstructura) {
                _this.cargarListadoEstructurasComerciales(data.cargaEstructura);
            }
            if (data.error.codError != 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
        //Carga Bonificaciones Acción Comercial
        this.administracionComercialService.getBonificacionesAccionComercial(this.request)
            .subscribe(function (data) {
            console.log('data bonificaciones', data);
            if (data.bonificaciones) {
                _this.cargarListadoJerarquiasComerciales(data.bonificaciones);
            }
            if (data.error.codError != 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    DetalleBonificacionComercialComponent.prototype.cargaCombos = function () {
        this.tipo = this.authService.getParametrosTipoDescuento();
        this.tipoEstructura = this.authService.getParametrosTipoEstructura();
    };
    DetalleBonificacionComercialComponent.prototype.cargarEncabezadoEstructurasComerciales = function (data) {
        this.forma.controls.fechaCreacion.setValue(this.utilService.dateStringServiceToStringFormat(data[0].aco_dfhocreacion));
        this.forma.controls.numero.setValue(data[0].aco_nidaccion);
        this.forma.controls.tipoEstructura.setValue(data[0].aco_scodtipoestructura);
        this.forma.controls.desctipoEstructura.setValue(data[0].sdestipoestructura);
        this.forma.controls.fechaVigencia.setValue(this.utilService.dateStringServiceToStringFormat(data[0].aco_dfhoinicio));
        this.forma.controls.horaVigencia.setValue(this.utilService.timeStringServiceToStringFormat(data[0].aco_dfhoinicio));
        this.forma.controls.descripcion.setValue(data[0].aco_sdescripcion);
        this.forma.controls.fechaTermino.setValue(this.utilService.dateStringServiceToStringFormat(data[0].aco_dfhotermino));
        this.forma.controls.horaTermino.setValue(this.utilService.timeStringServiceToStringFormat(data[0].aco_dfhotermino));
        // this.forma.controls.codTipo.setValue(data[0].aco_scodtipodescuento);
        // this.forma.controls.tipo.setValue(data[0].sdestipodescuento);
        this.estructuraListado = data[0].aco_scodtipoestructura;
    };
    DetalleBonificacionComercialComponent.prototype.cargarListadoEstructurasComerciales = function (data) {
        console.log('data en carga estrcuruas', data);
        for (var i in data) {
            var estructura = {
                bCheck: this.checkEstructuraSeleccionada,
                pea_nidaccion: data[i].pea_nidaccion,
                pea_scodtipodescuento: data[i].pea_scodtipodescuento,
                pea_scodfuerzaventa: data[i].pea_scodfuerzaventa,
                fvt_sdesfuerzavta: data[i].fvt_sdesfuerzavta,
                pea_nrutoperador: data[i].pea_nrutoperador,
                ope_snombre: data[i].ope_snombre,
                pea_scodzona: data[i].pea_scodzona,
                zon_sdeszona: data[i].zon_sdeszona,
                pea_scodterritorio: data[i].pea_scodterritorio,
                ter_sdesterritorio: data[i].ter_sdesterritorio,
                pea_nrutcliente: data[i].pea_nrutcliente,
                pea_nnumlocal: data[i].pea_nnumlocal,
                pea_scodrelcomercial: data[i].pea_scodrelcomercial,
                rel_sdescripcionrelacioncomerc: data[i].rel_sdescripcionrelacioncomerc,
                cli_snombre: data[i].cli_snombre,
                cli_sapepaterno: data[i].cli_sapepaterno,
                cli_sapematerno: data[i].cli_sapematerno,
                pea_scodcatnegocio: data[i].pea_scodcatnegocio,
                can_sdescatnegocio: data[i].can_sdescatnegocio
            };
            this.estructurasAccionesComerciales.push(estructura);
        }
    };
    DetalleBonificacionComercialComponent.prototype.cargarListadoJerarquiasComerciales = function (data) {
        console.log('data en carga bonificaciones', data);
        for (var i in data) {
            var estructura = {
                bCheck: false,
                nCantidad: Math.floor(data[i].aba_ncantidad / data[i].nunidadventa),
                nFraccion: Math.floor(data[i].aba_ncantidad % data[i].nunidadventa),
                nCantidadBonificado: Math.floor(data[i].aba_ncantidadbonificado / data[i].nunidadventabonificado),
                nFraccionBonificado: Math.floor(data[i].aba_ncantidadbonificado % data[i].nunidadventabonificado),
                sCodFormato: data[i].aba_scodformato,
                sCodFormatoBonificado: data[i].aba_scodformatobonificado,
                sCodVariedad: data[i].aba_scodvariedad,
                sCodVariedadBonificado: data[i].aba_scodvariedadbonificado,
                sDescripcion: data[i].sdescripcion,
                sDescripcionBonificado: data[i].sdescripcionbonificado,
                verOK: false,
                hidUnidadesVta1: data[i].nunidadventa,
                hidUnidadesVta2: data[i].nunidadventabonificado
            };
            this.articulosJerarquia.push(estructura);
        }
        console.log('articulosJerarquia en carga jerarquias', this.articulosJerarquia);
    };
    DetalleBonificacionComercialComponent.prototype.validaVigencia = function (data) {
        this.noVigente = false;
        console.log('data fecha hora', data);
        var fechaTermino = new Date(this.utilService.dateStringServiceToStringFormat(data[0].aco_dfhoinicio) + " " + this.utilService.timeStringServiceToStringFormat(data[0].aco_dfhoinicio));
        var fechaInhabilitar = new Date(this.utilService.dateStringServiceToStringFormat(data[0].aco_dfhotermino) + " " + this.utilService.timeStringServiceToStringFormat(data[0].aco_dfhotermino));
        console.log(fechaTermino);
        console.log(this.fechaActual);
        console.log(data[0].aco_scodestado);
        if (data[0].aco_scodestado === 'NOVIG') {
            console.log('no vigente');
            this.noVigente = true;
        }
        else if (this.fechaActual > fechaTermino) {
            console.log('no vigente');
            this.noVigente = true;
        }
        if (this.noVigente) {
            this.forma.controls.fechaVigencia.disable();
            this.forma.controls.horaVigencia.disable();
            this.forma.controls.descripcion.disable();
            this.forma.controls.fechaTermino.disable();
            this.forma.controls.horaTermino.disable();
            // this.forma.controls.porcDescuento.disable();
        }
    };
    DetalleBonificacionComercialComponent.prototype.validaInhabilitar = function (data) {
        //inhabilitar
        this.inhabilitar = false;
        console.log('data fecha hora', data);
        var fechaInhabilitar = new Date(this.utilService.dateStringServiceToStringFormat(data[0].aco_dfhotermino) + " " + this.utilService.timeStringServiceToStringFormat(data[0].aco_dfhotermino));
        console.log(fechaInhabilitar);
        console.log(this.fechaActual);
        console.log(data[0].aco_scodestado);
        if (data[0].aco_scodestado === 'NOVIG') {
            console.log('inhabilitar');
            this.inhabilitar = true;
        }
        else if (this.fechaActual > fechaInhabilitar) {
            console.log('inhabilitar');
            this.inhabilitar = true;
        }
    };
    DetalleBonificacionComercialComponent.prototype.verModales = function () {
        if (this.estructurasAccionesComerciales.length > 0 && (this.forma.controls.tipoEstructura.value === 'COMBI' || this.forma.controls.tipoEstructura.value === '')) {
            this.forma.controls.tipoEstructura.setValue('LINEA');
            swal('Atención', 'Debe Eliminar Estructura ingresada antes de cambiar el Tipo', 'info');
        }
        else if (this.estructurasAccionesComerciales.length > 0 && (this.forma.controls.tipoEstructura.value === 'LINEA' || this.forma.controls.tipoEstructura.value === '')) {
            this.forma.controls.tipoEstructura.setValue('COMBI');
            swal('Atención', 'Debe Eliminar Estructura ingresada antes de cambiar el Tipo', 'info');
        }
        if (this.forma.controls.tipoEstructura.value === 'COMBI') {
            this.verModal = false;
        }
        else {
            this.verModal = true;
        }
        this.limpiar();
    };
    DetalleBonificacionComercialComponent.prototype.validarFechas = function (fecha) {
        var dateValid = this.utilService.DateValidator(fecha.value);
        if (!dateValid) {
            fecha.value = this.utilService.dateToStringFormat(this.fechaActual);
        }
    };
    DetalleBonificacionComercialComponent.prototype.validaCheckTitulo = function () {
        this.checkTituloSeleccionado = !this.checkTituloSeleccionado;
        if (this.checkTituloSeleccionado) {
            console.log('realizar accion');
            for (var i in this.estructurasAccionesComerciales) {
                this.estructurasAccionesComerciales[i].bCheck = true;
            }
        }
        else {
            console.log('deshacer accion');
            for (var i in this.estructurasAccionesComerciales) {
                this.estructurasAccionesComerciales[i].bCheck = false;
            }
        }
    };
    DetalleBonificacionComercialComponent.prototype.validaCheckEstructura = function (estructura) {
        estructura.bCheck = !estructura.bCheck;
        if (estructura.bCheck) {
            console.log('checkeado');
        }
        else {
            console.log('NO checkeado');
        }
    };
    DetalleBonificacionComercialComponent.prototype.validaCheckTituloJerarquia = function () {
        this.checkTituloJerarquiaSeleccionado = !this.checkTituloJerarquiaSeleccionado;
        if (this.checkTituloJerarquiaSeleccionado) {
            console.log('realizar accion');
            for (var i in this.articulosJerarquia) {
                this.articulosJerarquia[i].bCheck = true;
            }
        }
        else {
            console.log('deshacer accion');
            for (var i in this.articulosJerarquia) {
                this.articulosJerarquia[i].bCheck = false;
            }
        }
    };
    DetalleBonificacionComercialComponent.prototype.validaCheckJerarquia = function (articulo) {
        articulo.bCheck = !articulo.bCheck;
        if (articulo.bCheck) {
            console.log('checkeado');
        }
        else {
            console.log('NO checkeado');
        }
    };
    DetalleBonificacionComercialComponent.prototype.agregar = function () {
        this.puedeAgregar = false;
        if (this.forma.controls.tipoEstructura.value === '') {
            swal('Atención', 'Debe seleccionar el tipo de estructura antes de continuar', 'info');
        }
        else if (this.forma.controls.tipoEstructura.value === 'COMBI' && !this.enUsoFzaVtas && !this.enOperador && !this.enCatNegocio && !this.enCliente) {
            swal('Atención', 'Debe seleccionar algun elemento de la estructura para agregar', 'info');
        }
        else {
            console.log('agregar estructura al listado');
            if (this.forma.controls.tipoEstructura.value === 'LINEA') {
                this.estructuraListado = 'LINEA';
                var objeto = {
                    bCheck: false,
                    pea_scodfuerzaventa: this.forma.controls.codFuerzaVenta.value,
                    fvt_sdesfuerzavta: this.forma.controls.desFuerzaVenta.value === '' ? ' ' : this.forma.controls.desFuerzaVenta.value,
                    pea_nrutoperador: this.forma.controls.codOperador.value === '' ? 0 : this.forma.controls.codOperador.value,
                    ope_snombre: this.forma.controls.descOperador.value === '' ? ' ' : this.forma.controls.descOperador.value,
                    pea_scodzona: this.forma.controls.codZona.value,
                    zon_sdeszona: this.forma.controls.descZona.value === '' ? ' ' : this.forma.controls.descZona.value,
                    pea_scodterritorio: this.forma.controls.codTerritorio.value,
                    ter_sdesterritorio: this.forma.controls.descTerritorio.value === '' ? ' ' : this.forma.controls.descTerritorio.value,
                    pea_scodcatnegocio: this.forma.controls.codCatNegocio.value,
                    can_sdescatnegocio: this.forma.controls.desCatNegocio.value === '' ? ' ' : this.forma.controls.desCatNegocio.value,
                    pea_nrutcliente: this.forma.controls.rutCliente.value === '' ? 0 : this.forma.controls.rutCliente.value,
                    cli_snombre: this.forma.controls.nombreCliente.value === '' ? ' ' : this.forma.controls.nombreCliente.value,
                    pea_nnumlocal: this.forma.controls.codNumLocal.value === '' ? 0 : this.forma.controls.codNumLocal.value,
                    pea_scodrelcomercial: this.forma.controls.codClienteLocal.value,
                    rel_sdescripcionrelacioncomerc: this.forma.controls.descClienteLocal.value === '' ? ' ' : this.forma.controls.descClienteLocal.value
                };
                //comparar objetos
                this.comparaObjetos(this.estructurasAccionesComerciales, objeto);
            }
            else {
                this.estructuraListado = 'COMBI';
                var objeto = {
                    bCheck: false,
                    pea_scodfuerzaventa: this.forma.controls.codFuerzaVenta.value,
                    fvt_sdesfuerzavta: this.forma.controls.desFuerzaVenta.value,
                    pea_nrutoperador: this.forma.controls.codOperador.value === '' ? 0 : this.forma.controls.codOperador.value,
                    ope_snombre: this.forma.controls.descOperador.value,
                    pea_scodzona: this.forma.controls.codZona.value,
                    zon_sdeszona: this.forma.controls.descZona.value,
                    pea_scodterritorio: this.forma.controls.codTerritorio.value,
                    ter_sdesterritorio: this.forma.controls.descTerritorio.value,
                    pea_scodcatnegocio: this.forma.controls.codCatNegocio.value,
                    can_sdescatnegocio: this.forma.controls.desCatNegocio.value,
                    pea_nrutcliente: this.forma.controls.rutCliente.value === '' ? 0 : this.forma.controls.rutCliente.value,
                    cli_snombre: this.forma.controls.nombreCliente.value,
                    pea_nnumlocal: this.forma.controls.codNumLocal.value === '' ? 0 : this.forma.controls.codNumLocal.value,
                    pea_scodrelcomercial: this.forma.controls.codClienteLocal.value,
                    rel_sdescripcionrelacioncomerc: this.forma.controls.descClienteLocal.value
                };
                //comparar objetos
                this.comparaObjetos(this.estructurasAccionesComerciales, objeto);
            }
            this.limpiar();
        }
    };
    DetalleBonificacionComercialComponent.prototype.comparaObjetos = function (estructurasAccionesComerciales, objeto) {
        if (estructurasAccionesComerciales.length > 0) {
            for (var i in this.estructurasAccionesComerciales) {
                if (this.estructurasAccionesComerciales[i].fvt_sdesfuerzavta.trim() === objeto.fvt_sdesfuerzavta.trim() && this.estructurasAccionesComerciales[i].ope_snombre.trim() === objeto.ope_snombre.trim() &&
                    this.estructurasAccionesComerciales[i].zon_sdeszona.trim() === objeto.zon_sdeszona.trim() && this.estructurasAccionesComerciales[i].ter_sdesterritorio.trim() === objeto.ter_sdesterritorio.trim() &&
                    this.estructurasAccionesComerciales[i].can_sdescatnegocio.trim() === objeto.can_sdescatnegocio.trim() && this.estructurasAccionesComerciales[i].cli_snombre.trim() === objeto.cli_snombre.trim() &&
                    this.estructurasAccionesComerciales[i].rel_sdescripcionrelacioncomerc.trim() === objeto.rel_sdescripcionrelacioncomerc.trim()) {
                    swal('Atención', 'Ya existe una regla idéntica a la solicitada', 'warning');
                    this.puedeAgregar = false;
                    break;
                }
                else {
                    this.puedeAgregar = true;
                }
            }
            if (this.puedeAgregar) {
                this.estructurasAccionesComerciales.push(objeto);
            }
        }
        else {
            this.estructurasAccionesComerciales.push(objeto);
        }
    };
    DetalleBonificacionComercialComponent.prototype.eliminar = function () {
        var _this = this;
        if (this.estructurasAccionesComerciales.length > 0) {
            swal({
                title: 'Atención',
                text: '¿Desea eliminar los productos seleccionados?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#85b3cd',
                confirmButtonText: 'Aceptar',
                cancelButtonText: 'Cancelar',
                closeOnConfirm: true
            }, function () {
                var j = _this.estructurasAccionesComerciales.length;
                for (var i = 0; i < j; i++) {
                    if (_this.estructurasAccionesComerciales[i].bCheck === true) {
                        _this.estructurasAccionesComerciales.splice(_this.estructurasAccionesComerciales.indexOf(_this.estructurasAccionesComerciales[i]), 1);
                        i--;
                        j--;
                    }
                }
                _this.checkTituloSeleccionado = false;
            });
        }
    };
    DetalleBonificacionComercialComponent.prototype.eliminarJerarquia = function () {
        var _this = this;
        if (this.articulosJerarquia.length > 0) {
            swal({
                title: 'Atención',
                text: '¿Desea eliminar los artículos seleccionados?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#85b3cd',
                confirmButtonText: 'Aceptar',
                cancelButtonText: 'Cancelar',
                closeOnConfirm: true
            }, function () {
                var j = _this.articulosJerarquia.length;
                for (var i = 0; i < j; i++) {
                    if (_this.articulosJerarquia[i].bCheck === true) {
                        _this.articulosJerarquia.splice(_this.articulosJerarquia.indexOf(_this.articulosJerarquia[i]), 1);
                        i--;
                        j--;
                    }
                }
                _this.checkTituloJerarquiaSeleccionado = false;
            });
        }
    };
    DetalleBonificacionComercialComponent.prototype.limpiar = function () {
        this.forma.controls.codFuerzaVenta.setValue('');
        this.forma.controls.desFuerzaVenta.setValue('');
        this.forma.controls.codOperador.setValue('');
        this.forma.controls.descOperador.setValue('');
        this.forma.controls.codZona.setValue('');
        this.forma.controls.descZona.setValue('');
        this.forma.controls.codTerritorio.setValue('');
        this.forma.controls.descTerritorio.setValue('');
        this.forma.controls.codCatNegocio.setValue('');
        this.forma.controls.desCatNegocio.setValue('');
        this.forma.controls.rutCliente.setValue('');
        this.forma.controls.nombreCliente.setValue('');
        this.forma.controls.codClienteLocal.setValue('');
        this.forma.controls.descClienteLocal.setValue('');
        this.enUsoFzaVtas = false;
        this.enOperador = false;
        this.enCatNegocio = false;
        this.enCliente = false;
    };
    DetalleBonificacionComercialComponent.prototype.setArticulo = function (articulo) {
        if (articulo.value === '') {
            this.verListaArticulo = false;
        }
        else {
            this.verListaArticulo = true;
        }
    };
    DetalleBonificacionComercialComponent.prototype.setArticuloBoni = function (articuloBoni) {
        if (articuloBoni.value === '') {
            this.verListaArticuloBoni = false;
        }
        else {
            this.verListaArticuloBoni = true;
        }
    };
    DetalleBonificacionComercialComponent.prototype.setDescripcion = function (descripcion) {
        if (descripcion.value === '') {
            this.verListaDescripcion = false;
        }
        else {
            this.verListaDescripcion = true;
        }
    };
    DetalleBonificacionComercialComponent.prototype.setDescripcionBoni = function (descripcionBoni) {
        if (descripcionBoni.value === '') {
            this.verListaDescripcionBoni = false;
        }
        else {
            this.verListaDescripcionBoni = true;
        }
    };
    DetalleBonificacionComercialComponent.prototype.seleccionaArticulo = function (data, articulo, descripcion, cantidad) {
        console.log('seleccionaArticulo');
        articulo.value = data.art_scodformato + "-" + data.art_scodvariedad;
        descripcion.value = data.art_sdescripcion;
        this.cargaInfoArticuloAutoComplete(data.art_scodformato, data.art_scodvariedad, 1);
        // cantidad.focus();
        this.verListaArticulo = false;
    };
    DetalleBonificacionComercialComponent.prototype.seleccionaArticuloBoni = function (data, articuloBoni, descripcionBoni, cantidadBoni) {
        articuloBoni.value = data.art_scodformato + "-" + data.art_scodvariedad;
        descripcionBoni.value = data.art_sdescripcion;
        this.cargaInfoArticuloAutoComplete(data.art_scodformato, data.art_scodvariedad, 2);
        // cantidadBoni.focus();
        this.verListaArticuloBoni = false;
    };
    DetalleBonificacionComercialComponent.prototype.seleccionaDescripcion = function (data, articulo, descripcion, cantidad) {
        articulo.value = data.art_scodformato + "-" + data.art_scodvariedad;
        descripcion.value = data.art_sdescripcion;
        this.cargaInfoArticuloAutoComplete(data.art_scodformato, data.art_scodvariedad, 1);
        // cantidad.focus();
        this.verListaDescripcion = false;
    };
    DetalleBonificacionComercialComponent.prototype.seleccionaDescripcionBoni = function (data, articuloBoni, descripcionBoni, cantidadBoni) {
        articuloBoni.value = data.art_scodformato + "-" + data.art_scodvariedad;
        descripcionBoni.value = data.art_sdescripcion;
        this.cargaInfoArticuloAutoComplete(data.art_scodformato, data.art_scodvariedad, 2);
        // cantidadBoni.focus();
        this.verListaDescripcionBoni = false;
    };
    DetalleBonificacionComercialComponent.prototype.validaArticulo = function (articulo, descripcion, cantidad) {
        var articuloExiste = false;
        if (articulo.value !== '') {
            for (var i in this.parametrosAutocomplete) {
                var str = this.parametrosAutocomplete[i].art_scodformato + "-" + this.parametrosAutocomplete[i].art_scodvariedad;
                if (str.startsWith("" + articulo.value)) {
                    console.log(str, this.parametrosAutocomplete[i]);
                    this.cargaInfoArticuloAutoComplete(this.parametrosAutocomplete[i].art_scodformato, this.parametrosAutocomplete[i].art_scodvariedad, 1);
                    articulo.value = str;
                    descripcion.value = this.parametrosAutocomplete[i].art_sdescripcion;
                    descripcion.focus();
                    articuloExiste = true;
                    this.verListaArticulo = false;
                    // cantidad.focus();
                    break;
                }
            }
            if (!articuloExiste) {
                articulo.value = '';
                descripcion.value = '';
                articulo.focus();
                swal('Atención', 'Artículo no existe', 'warning');
            }
        }
        else {
            articulo.focus();
            swal('Atención', 'Debe ingresar el Artículo', 'warning');
            console.log('debe ingresar articulo');
        }
    };
    DetalleBonificacionComercialComponent.prototype.validaArticuloBoni = function (articuloBoni, descripcionBoni, cantidadBoni) {
        var articuloExiste = false;
        if (articuloBoni.value !== '') {
            for (var i in this.parametrosAutocomplete) {
                var str = this.parametrosAutocomplete[i].art_scodformato + "-" + this.parametrosAutocomplete[i].art_scodvariedad;
                if (str.startsWith("" + articuloBoni.value)) {
                    console.log(str, this.parametrosAutocomplete[i]);
                    this.cargaInfoArticuloAutoComplete(this.parametrosAutocomplete[i].art_scodformato, this.parametrosAutocomplete[i].art_scodvariedad, 2);
                    articuloBoni.value = str;
                    descripcionBoni.value = this.parametrosAutocomplete[i].art_sdescripcion;
                    descripcionBoni.focus();
                    articuloExiste = true;
                    this.verListaArticuloBoni = false;
                    break;
                }
            }
            if (!articuloExiste) {
                articuloBoni.value = '';
                descripcionBoni.value = '';
                articuloBoni.focus();
                swal('Atención', 'Artículo no existe', 'warning');
            }
        }
        else {
            articuloBoni.focus();
            swal('Atención', 'Debe ingresar el Artículo', 'warning');
            console.log('debe ingresar articulo');
        }
    };
    DetalleBonificacionComercialComponent.prototype.validaDescripcion = function (articulo, descripcion, cantidad) {
        var articuloExiste = false;
        if (descripcion.value !== '') {
            for (var i in this.parametrosAutocomplete) {
                var str = (this.parametrosAutocomplete[i].art_sdescripcion).toLowerCase();
                if (str.startsWith("" + (descripcion.value).toLowerCase())) {
                    console.log(str, this.parametrosAutocomplete[i]);
                    this.cargaInfoArticuloAutoComplete(this.parametrosAutocomplete[i].art_scodformato, this.parametrosAutocomplete[i].art_scodvariedad, 1);
                    articulo.value = this.parametrosAutocomplete[i].art_scodformato + "-" + this.parametrosAutocomplete[i].art_scodvariedad;
                    descripcion.value = this.parametrosAutocomplete[i].art_sdescripcion;
                    articuloExiste = true;
                    this.verListaDescripcion = false;
                    // cantidad.focus();
                    break;
                }
            }
            if (!articuloExiste) {
                articulo.value = '';
                descripcion.value = '';
                // descripcion.focus();
                swal('Atención', 'Artículo no existe', 'warning');
            }
        }
        else {
            console.log('debe ingresar articulo');
        }
    };
    DetalleBonificacionComercialComponent.prototype.validaDescripcionBoni = function (articuloBoni, descripcionBoni, cantidadBoni) {
        var articuloExiste = false;
        if (descripcionBoni.value !== '') {
            for (var i in this.parametrosAutocomplete) {
                var str = (this.parametrosAutocomplete[i].art_sdescripcion).toLowerCase();
                if (str.startsWith("" + (descripcionBoni.value).toLowerCase())) {
                    console.log(str, this.parametrosAutocomplete[i]);
                    this.cargaInfoArticuloAutoComplete(this.parametrosAutocomplete[i].art_scodformato, this.parametrosAutocomplete[i].art_scodvariedad, 2);
                    articuloBoni.value = this.parametrosAutocomplete[i].art_scodformato + "-" + this.parametrosAutocomplete[i].art_scodvariedad;
                    descripcionBoni.value = this.parametrosAutocomplete[i].art_sdescripcion;
                    articuloExiste = true;
                    this.verListaDescripcionBoni = false;
                    // cantidadBoni.focus();
                    break;
                }
            }
            if (!articuloExiste) {
                articuloBoni.value = '';
                descripcionBoni.value = '';
                descripcionBoni.focus();
                swal('Atención', 'Artículo no existe', 'warning');
            }
        }
        else {
            console.log('debe ingresar articulo');
        }
    };
    DetalleBonificacionComercialComponent.prototype.validaCantidad = function (valor) {
        if (valor.value === '') {
            valor.value = 0;
        }
    };
    DetalleBonificacionComercialComponent.prototype.validaFraccion = function (articulo, pos) {
        console.log('articulo', articulo);
        if (pos === 1) {
            if (articulo.nFraccion === null) {
                articulo.nFraccion = 0;
            }
            else {
                //recalcular UV y fracción
                articulo.nCantidad = parseInt(articulo.nCantidad + (articulo.nFraccion / articulo.hidUnidadesVta1));
                articulo.nFraccion = articulo.nFraccion % articulo.hidUnidadesVta1;
            }
        }
        else {
            if (articulo.nFraccionBonificado === null) {
                articulo.nFraccionBonificado = 0;
            }
            else {
                //recalcular UV y fracción
                articulo.nCantidadBonificado = parseInt(articulo.nCantidadBonificado + (articulo.nFraccionBonificado / articulo.hidUnidadesVta2));
                articulo.nFraccionBonificado = articulo.nFraccionBonificado % articulo.hidUnidadesVta2;
            }
        }
    };
    DetalleBonificacionComercialComponent.prototype.cargaInfoArticuloAutoComplete = function (codFormato, codVariedad, pos) {
        var _this = this;
        this.puedeAgregar = false;
        this.cargador.show();
        this.requestAutocomplete.nNumLocal = 0;
        this.requestAutocomplete.nRutCliente = 0;
        this.requestAutocomplete.nRutOperador = Number(this.authService.getDatosUser().nrutoperador);
        this.requestAutocomplete.sCodBodega = null;
        this.requestAutocomplete.sCodFormato = codFormato;
        this.requestAutocomplete.sCodRelacionComer = null;
        this.requestAutocomplete.sCodVariedad = codVariedad;
        this.pedidosService.getCargaArticuloAutoComplete(this.requestAutocomplete)
            .subscribe(function (data) {
            _this.cargador.hide();
            // this.articuloSeleccionado = data.articulo[0];
            console.log('this.articuloSeleccionado', data.articulo[0]);
            if (pos === 1) {
                _this.hidUnidadesVta1 = data.articulo[0].art_nunidadventa;
                console.log('this.hidUnidadesVta1', _this.hidUnidadesVta1);
            }
            else {
                _this.hidUnidadesVta2 = data.articulo[0].art_nunidadventa;
                console.log('this.hidUnidadesVta2', _this.hidUnidadesVta2);
            }
            // articulo.value = `${this.articuloSeleccionado.art_scodformato}-${this.articuloSeleccionado.art_scodvariedad}`;
            // descripcion.value = this.articuloSeleccionado.art_sdescripcion;
            // medida.value = this.articuloSeleccionado.art_smedida;
            // valorUV.value = this.articuloSeleccionado.nprecioventa;
            // uv.value = 0;
            // fraccion.value = 0;
            // porcentaje.value = 0.0;
            // this.hidUnidadesVta = this.articuloSeleccionado.art_nunidadventa;
            // this.hidIndIaba = this.articuloSeleccionado.art_sindiaba;
            // this.puedeAgregar = true;
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    DetalleBonificacionComercialComponent.prototype.agregarRegla = function (articulo, descripcion, cantidad, fraccion, articuloBoni, descripcionBoni, cantidadBoni, fraccionBoni) {
        this.articuloRegla = false;
        this.descripcionRegla = false;
        this.articuloBoniRegla = false;
        this.descripcionBoniRegla = false;
        if (!this.noVigente) {
            if (articulo.value !== '' && descripcion.value !== '' && articuloBoni.value !== '' && descripcionBoni.value !== '') {
                this.articuloRegla = this.validaArticuloRegla(articulo.value);
                this.articuloBoniRegla = this.validaArticuloRegla(articuloBoni.value);
                console.log(this.articuloRegla, this.articuloBoniRegla);
                if (!this.articuloRegla || !this.articuloBoniRegla) {
                    swal('Atención', 'Artículo no existe', 'warning');
                }
                else {
                    console.log('puede agregar regla');
                    this.agregaRegla(articulo, descripcion, cantidad, fraccion, articuloBoni, descripcionBoni, cantidadBoni, fraccionBoni);
                }
            }
            else {
                articulo.focus();
                swal('Atención', 'Debe ingresar ambos artículos', 'warning');
            }
        }
    };
    DetalleBonificacionComercialComponent.prototype.agregaRegla = function (articulo, descripcion, cantidad, fraccion, articuloBoni, descripcionBoni, cantidadBoni, fraccionBoni) {
        console.log(articulo.value);
        console.log(articuloBoni.value);
        this.puedeAgregar = false;
        var articuloSplit = articulo.value.split('-');
        var articuloBoniSplit = articuloBoni.value.split('-');
        console.log(articuloSplit);
        var artSelected = {
            bCheck: false,
            nCantidad: cantidad.value === '' ? 0 : parseInt(cantidad.value),
            nFraccion: fraccion.value === '' ? 0 : parseInt(fraccion.value),
            nCantidadBonificado: cantidadBoni.value === '' ? 0 : parseInt(cantidadBoni.value),
            nFraccionBonificado: fraccionBoni.value === '' ? 0 : parseInt(fraccionBoni.value),
            sCodFormato: articuloSplit[0],
            sCodFormatoBonificado: articuloBoniSplit[0],
            sCodVariedad: articuloSplit[1],
            sCodVariedadBonificado: articuloBoniSplit[1],
            sDescripcion: descripcion.value,
            sDescripcionBonificado: descripcionBoni.value,
            verOK: false,
            hidUnidadesVta1: this.hidUnidadesVta1,
            hidUnidadesVta2: this.hidUnidadesVta2
        };
        console.log('artSelected', artSelected);
        if (this.articulosJerarquia.length > 0) {
            for (var i in this.articulosJerarquia) {
                if (this.articulosJerarquia[i].sCodFormato === articuloSplit[0] && this.articulosJerarquia[i].sCodVariedad === articuloSplit[1]) {
                    this.puedeAgregar = false;
                    break;
                }
                else {
                    this.puedeAgregar = true;
                }
            }
            if (this.puedeAgregar) {
                this.articulosJerarquia.push(artSelected);
                articulo.value = '';
                descripcion.value = '';
                cantidad.value = '';
                fraccion.value = '';
                articuloBoni.value = '';
                descripcionBoni.value = '';
                cantidadBoni.value = '';
                fraccionBoni.value = '';
                articulo.focus();
            }
            else {
                swal('Atención', 'El Artículo ya existe', 'warning');
            }
        }
        else {
            this.articulosJerarquia.push(artSelected);
            articulo.value = '';
            descripcion.value = '';
            cantidad.value = '';
            fraccion.value = '';
            articuloBoni.value = '';
            descripcionBoni.value = '';
            cantidadBoni.value = '';
            fraccionBoni.value = '';
            articulo.focus();
        }
        // this.verListaArticulo = false;
    };
    DetalleBonificacionComercialComponent.prototype.validaArticuloRegla = function (articuloTxt) {
        console.log(articuloTxt);
        for (var i in this.parametrosAutocomplete) {
            if (articuloTxt === this.parametrosAutocomplete[i].art_scodformato + "-" + this.parametrosAutocomplete[i].art_scodvariedad) {
                return true;
            }
        }
        return false;
    };
    DetalleBonificacionComercialComponent.prototype.validaFechasVigenciaTermino = function () {
        this.grabaEncabezado = true;
        var vigencia = new Date(this.forma.controls.fechaVigencia.value + ":" + this.forma.controls.horaVigencia.value + ":00");
        var termino = new Date(this.forma.controls.fechaTermino.value + ":" + this.forma.controls.horaTermino.value + ":00");
        if (vigencia < new Date()) {
            swal('Atención', 'La fecha y hora de inicio y no puede ser inferior a la fecha y hora actual', 'warning');
            this.grabaEncabezado = false;
        }
        else if (termino < vigencia) {
            swal('Atención', 'La fecha y hora de término no puede ser inferior a la fecha y hora inicio', 'warning');
            this.grabaEncabezado = false;
        }
    };
    DetalleBonificacionComercialComponent.prototype.guardaBonificacion = function () {
        var _this = this;
        console.log(this.forma);
        if (this.estructurasAccionesComerciales.length === 0) {
            swal('Atención', 'Debe ingresar datos en la Estructura Comercial', 'warning');
        }
        else {
            this.grabaEstructuras = true;
            if (this.forma.valid) {
                $('*').removeClass('error-form');
                //valida fechas vigencia y termino
                this.validaFechasVigenciaTermino();
                if (this.articulosJerarquia.length === 0) {
                    swal('Atención', 'Debe ingresar datos en la Regla', 'warning');
                }
                else {
                    this.grabaJerarquias = true;
                }
            }
            else {
                swal('Atención', 'Existen campos requeridos no ingresados', 'warning');
                if (!this.forma.controls.fechaVigencia.valid) {
                    $('[name=fechaVigencia]').addClass('error-form');
                }
                else {
                    $('[name=fechaVigencia]').removeClass('error-form');
                }
                if (!this.forma.controls.horaVigencia.valid) {
                    $('[name=horaVigencia]').addClass('error-form');
                }
                else {
                    $('[name=horaVigencia]').removeClass('error-form');
                }
                if (!this.forma.controls.descripcion.valid) {
                    $('[name=descripcion]').addClass('error-form');
                }
                else {
                    $('[name=descripcion]').removeClass('error-form');
                }
                if (!this.forma.controls.fechaTermino.valid) {
                    $('[name=fechaTermino]').addClass('error-form');
                }
                else {
                    $('[name=fechaTermino]').removeClass('error-form');
                }
                if (!this.forma.controls.horaTermino.valid) {
                    $('[name=horaTermino]').addClass('error-form');
                }
                else {
                    $('[name=horaTermino]').removeClass('error-form');
                }
                // if(!this.forma.controls.tipo.valid){
                //   $('[name=tipo]').addClass('error-form');
                // }
                // else{
                //   $('[name=tipo]').removeClass('error-form');
                // }
                // if(!this.forma.controls.porcDescuento.valid || this.forma.controls.porcDescuento.value === 0 ){
                //   $('[name=porcDescuento]').addClass('error-form');
                // }
                // else{
                //   $('[name=porcDescuento]').removeClass('error-form');
                // }
            }
        }
        console.log(this.grabaEstructuras, this.grabaEncabezado, this.grabaJerarquias);
        if (this.grabaEstructuras && this.grabaEncabezado && this.grabaJerarquias) {
            //grabar descuento
            //prepara encabezadoDcto del request
            this.requestGrabar.encabezadoBonif = {
                nIdAccionComercial: this.forma.controls.numero.value === '' ? 0 : this.forma.controls.numero.value,
                nRunUsuarioCrea: this.authService.getDatosUser().nrunusuario,
                sCodTipoAccion: 'BONIF',
                sCodTipoDescuento: '00000',
                sCodTipoEstructura: this.forma.controls.tipoEstructura.value,
                sDescripcion: this.forma.controls.descripcion.value,
                sFhoinicio: (this.forma.controls.fechaVigencia.value).replace(/-/g, '') + (this.forma.controls.horaVigencia.value).replace(':', '') + '00',
                sFhotermino: (this.forma.controls.fechaTermino.value).replace(/-/g, '') + (this.forma.controls.horaTermino.value).replace(':', '') + '00',
            };
            //prepara estructuraComercial del request
            this.estructurasAccionesComercialesRequest = [];
            console.log('this.estructurasAccionesComerciales', this.estructurasAccionesComerciales);
            for (var i in this.estructurasAccionesComerciales) {
                var estructura = {
                    nIdAccionComercial: this.forma.controls.numero.value === '' ? 0 : this.forma.controls.numero.value,
                    nNomCliente: this.estructurasAccionesComerciales[i].cli_snombre.trim(),
                    nNumLocal: this.estructurasAccionesComerciales[i].pea_nnumlocal,
                    nRutCliente: this.estructurasAccionesComerciales[i].pea_nrutcliente,
                    nRutOperador: this.estructurasAccionesComerciales[i].pea_nrutoperador,
                    sCodCatNegocio: this.estructurasAccionesComerciales[i].pea_scodcatnegocio.trim(),
                    sCodFuerzaVenta: this.estructurasAccionesComerciales[i].pea_scodfuerzaventa.trim(),
                    sCodRelacionComercial: this.estructurasAccionesComerciales[i].pea_scodrelcomercial.trim(),
                    sCodTerritorio: this.estructurasAccionesComerciales[i].pea_scodterritorio.trim(),
                    sCodTipoSDescuento: '00000',
                    sCodZona: this.estructurasAccionesComerciales[i].pea_scodzona.trim()
                };
                this.estructurasAccionesComercialesRequest.push(estructura);
            }
            this.requestGrabar.estructuraComercial = this.estructurasAccionesComercialesRequest;
            //prepara jerarquiaProducto del request
            this.articulosJerarquiaRequest = [];
            for (var i in this.articulosJerarquia) {
                var articulo = {
                    nCantidad: (this.articulosJerarquia[i].nCantidad * this.articulosJerarquia[i].hidUnidadesVta1) + this.articulosJerarquia[i].nFraccion,
                    nCantidadBonificado: (this.articulosJerarquia[i].nCantidadBonificado * this.articulosJerarquia[i].hidUnidadesVta2) + this.articulosJerarquia[i].nFraccionBonificado,
                    nIdAccionComercial: this.forma.controls.numero.value === '' ? 0 : this.forma.controls.numero.value,
                    sCodFormato: this.articulosJerarquia[i].sCodFormato,
                    sCodFormatoBonificado: this.articulosJerarquia[i].sCodFormatoBonificado,
                    sCodTipoDescuento: '00000',
                    sCodVariedad: this.articulosJerarquia[i].sCodVariedad,
                    sCodVariedadBonificado: this.articulosJerarquia[i].sCodVariedadBonificado
                };
                this.articulosJerarquiaRequest.push(articulo);
            }
            this.requestGrabar.jerarquiaProducto = this.articulosJerarquiaRequest;
            this.requestGrabar.lSalIdAccionComercial = this.forma.controls.numero.value === '' ? 0 : this.forma.controls.numero.value;
            console.log('this.requestGrabar', this.requestGrabar);
            console.log('estructurasAccionesComerciales', this.estructurasAccionesComerciales);
            console.log('articulosJerarquia', this.articulosJerarquia);
            this.cargador.show();
            this.administracionComercialService.creaAccionComercialBonif(this.requestGrabar)
                .subscribe(function (data) {
                _this.cargador.hide();
                console.log('data graba Bonificación', data);
                if (data.error.codError !== 0) {
                    swal('Atención', data.error.msjError, 'error');
                }
                else {
                    swal('Atención', "Se ha guardado la Acci\u00F3n Comercial [" + data.lIdAccionComercial + "]", 'success');
                    _this.router.navigate(['/administracionComercial/accionesComerciales']);
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    DetalleBonificacionComercialComponent.prototype.edit = function (articulo) {
        console.log(articulo);
        this.editRowID = articulo.sCodFormato + "-" + articulo.sCodVariedad;
        articulo.verOK = true;
    };
    DetalleBonificacionComercialComponent.prototype.save = function (articulo) {
        this.editRowID = null;
        articulo.verOK = false;
    };
    DetalleBonificacionComercialComponent.prototype.inhabilitarAccion = function () {
        var _this = this;
        swal({
            title: 'Atención',
            text: '¿Está seguro que desea inhabilitar la Acción Comercial?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#85b3cd',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            closeOnConfirm: true
        }, function () {
            _this.request = {
                nIdAccion: _this.forma.controls.numero.value,
                nRutUsuarioActualiza: _this.authService.getDatosUser().nrunusuario,
                sCodTipoDescuento: '00000'
            };
            console.log('request inhabilitar', _this.request);
            _this.cargador.show();
            _this.administracionComercialService.inhabilitaAccionComercial(_this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                console.log(data);
                if (data.error.codError !== 0) {
                    setTimeout(function () {
                        swal('Atención', data.error.msjError, 'error');
                    }, 250);
                }
                else {
                    setTimeout(function () {
                        swal('Atención', "Se ha inhabilitado la Acci\u00F3n Comercial", 'success');
                    }, 250);
                    _this.router.navigate(['/administracionComercial/accionesComerciales']);
                }
            }, function (error) {
                _this.cargador.hide();
                setTimeout(function () {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }, 250);
            });
        });
    };
    DetalleBonificacionComercialComponent.prototype.setData = function (resData) {
        console.log(resData);
        if (resData != 0) {
            switch (this.origen) {
                case 'fuerzaVenta': {
                    this.forma.controls.codFuerzaVenta.setValue(resData.fvt_scodfuerzavta);
                    this.forma.controls.desFuerzaVenta.setValue(resData.fvt_sdesfuerzavta);
                    this.enUsoFzaVtas = true;
                    break;
                }
                case 'operador': {
                    this.forma.controls.codOperador.setValue(resData.ofv_nrutoperador);
                    this.forma.controls.descOperador.setValue(resData.ope_snombre);
                    this.enOperador = true;
                    break;
                }
                case 'zona': {
                    this.forma.controls.codFuerzaVenta.setValue(resData.fvt_scodfuerzavta);
                    this.forma.controls.codOperador.setValue(resData.ofv_nrutoperador);
                    this.forma.controls.codZona.setValue(resData.zon_scodzona);
                    this.forma.controls.descZona.setValue(resData.zon_sdeszona);
                    break;
                }
                case 'territorioAC': {
                    this.forma.controls.codFuerzaVenta.setValue(resData.fvt_scodfuerzavta);
                    this.forma.controls.codOperador.setValue(resData.ofv_nrutoperador);
                    this.forma.controls.codZona.setValue(resData.zon_scodzona);
                    this.forma.controls.codTerritorio.setValue(resData.ter_scodterritorio);
                    this.forma.controls.descTerritorio.setValue(resData.ter_sdesterritorio);
                    break;
                }
                case 'catNegocio': {
                    this.forma.controls.codCatNegocio.setValue(resData.can_scodcatnegocio);
                    this.forma.controls.desCatNegocio.setValue(resData.can_sdescatnegocio);
                    this.enCatNegocio = true;
                    break;
                }
                case 'cliente': {
                    this.forma.controls.rutCliente.setValue(resData.cli_nrutcliente);
                    this.forma.controls.dvRutCliente.setValue(resData.cli_sdigverificador);
                    this.forma.controls.nombreCliente.setValue(resData.cli_snombre);
                    this.enCliente = true;
                    break;
                }
                case 'clienteRC': {
                    this.forma.controls.codNumLocal.setValue(resData.rco_nnumlocal);
                    this.forma.controls.codClienteLocal.setValue(resData.rco_scodrelacioncomercial);
                    this.forma.controls.descClienteLocal.setValue(resData.rel_sdescripcionrelacioncomerc);
                    this.forma.controls.rutCliente.setValue(resData.cli_nrutcliente);
                    this.forma.controls.dvRutCliente.setValue(resData.cli_sdigverificador);
                    this.forma.controls.nombreCliente.setValue(resData.cli_snombre);
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    DetalleBonificacionComercialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalle-bonificacion-comercial',
            template: __webpack_require__(/*! ./detalleBonificacionComercial.component.html */ "./src/app/routes/administracionComercial/accionesComerciales/detalleBonificacionComercial/detalleBonificacionComercial.component.html"),
            styles: [__webpack_require__(/*! ./detalleBonificacionComercial.component.scss */ "./src/app/routes/administracionComercial/accionesComerciales/detalleBonificacionComercial/detalleBonificacionComercial.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_consultaService_administracionComercial_service__WEBPACK_IMPORTED_MODULE_6__["AdministracionComercialService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_8__["ConsultasService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_14__["PedidosService"]])
    ], DetalleBonificacionComercialComponent);
    return DetalleBonificacionComercialComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionComercial/accionesComerciales/detalleDescuentoComercial/detalleDescuentoComercial.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/accionesComerciales/detalleDescuentoComercial/detalleDescuentoComercial.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Acciones Comerciales<em class=\"fa fa-angle-right mh-2\"></em>Descuento</h4>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label lh-11\">Fecha Creación</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaCreacion\" name=\"fechaCreacion\" type=\"date\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Número</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"numero\" name=\"numero\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label lh-11\">Tipo Estructura</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <select *ngIf=\"nuevaAccionComercial\" class=\"form-control pv-0\" formControlName=\"tipoEstructura\" name=\"tipoEstructura\" (change)=\"verModales()\">\r\n                                <option value=\"\">(Sin Selección)</option>\r\n                                <option *ngFor=\"let userTipo of tipoEstructura\" [ngValue]=\"userTipo.par_codparametro01\">{{userTipo.par_deslargo01}}</option>\r\n                        </select>\r\n                        <input style=\"display:none;\" formControlName=\"tipoEstructura\" name=\"TipoEstructura\" class=\"form-control\" type=\"text\" />\r\n                        <input *ngIf=\"!nuevaAccionComercial\" formControlName=\"desctipoEstructura\" name=\"descTipoEstructura\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label lh-11\">Fecha Vigencia</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input #fechaVigencia class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaVigencia\" name=\"fechaVigencia\" type=\"date\" (focusout)=\"validarFechas(fechaVigencia)\" required />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Hora</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input class=\"form-control pr-1 w-110 text-center\" formControlName=\"horaVigencia\" name=\"horaVigencia\" type=\"time\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Descripción</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <input formControlName=\"descripcion\" name=\"descripcion\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label lh-11\">Fecha Término</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input #fechaTermino class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaTermino\" name=\"fechaTermino\" type=\"date\" (focusout)=\"validarFechas(fechaTermino)\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Hora</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input class=\"form-control pr-1 w-110 text-center\" formControlName=\"horaTermino\" name=\"horaTermino\" type=\"time\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Tipo</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <select *ngIf=\"nuevaAccionComercial\" class=\"form-control pv-0\" formControlName=\"tipo\" name=\"tipo\">\r\n                                <option value=\"\" selected>(Todos)</option>\r\n                                <option *ngFor=\"let userTipo of tipo\" [ngValue]=\"userTipo.par_codparametro01\">{{userTipo.par_deslargo01}}</option>\r\n                        </select>\r\n                        <input *ngIf=\"!nuevaAccionComercial\" formControlName=\"tipo\" name=\"tipo\" class=\"form-control\" type=\"text\" />\r\n                        <input formControlName=\"codTipo\" name=\"codTipo\" class=\"form-control\" type=\"text\" style=\"display:none;\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row pull-left mb-4\">\r\n                <div class=\"col-sm-3\">\r\n                    <a routerLink=\"/administracionComercial/accionesComerciales\" class=\"btn btn-oval btn-sm\">Volver</a>\r\n                </div>\r\n                <div class=\"col-sm-3 mr-2\">\r\n                    <button class=\"btn btn-oval btn-sm\" type=\"button\" [disabled]='noVigente' (click)=\"guardaDescuento()\">Guardar</button>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <button class=\"btn btn-oval btn-sm\" type=\"button\" [disabled]='inhabilitar || nuevaAccionComercial' (click)=\"inhabilitarAccion()\">Inhabilitar</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"panel\">\r\n                        <tabset>\r\n                            <tab>\r\n                                <ng-template tabHeading>Estructura Comercial Lineal</ng-template>\r\n                                <div>\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"col-sm-12 ph-0\">\r\n                                            <div class=\"col-sm-4\">\r\n                                                <label class=\"col-sm-2 control-label ph-0 lh-11\">Fuerza de Venta</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                    <input formControlName=\"codFuerzaVenta\" name=\"codFuerzaVenta\" class=\"form-control\" type=\"text\" style=\"display:none;\" />\r\n                                                    <input formControlName=\"desFuerzaVenta\" name=\"desFuerzaVenta\" class=\"form-control\" type=\"text\" />\r\n                                                </div>\r\n                                                <div class=\"col-sm-1\">\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalFzaVta()\" [disabled]=\"noVigente\">\r\n                                                        <em class=\"icon-magnifier\"></em>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-4\">\r\n                                                <label class=\"col-sm-2 control-label ph-0\">Operador</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                    <input formControlName=\"codOperador\" name=\"codOperador\" class=\"form-control\" type=\"text\" style=\"display:none;\" />\r\n                                                    <input formControlName=\"descOperador\" name=\"descOperador\" class=\"form-control\" type=\"text\" />\r\n                                                </div>\r\n                                                <div class=\"col-sm-1\">\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalOperador()\" [disabled]=\"noVigente\">\r\n                                                        <em class=\"icon-magnifier\"></em>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-4\">\r\n                                                <label class=\"col-sm-2 control-label\">Zona</label>\r\n                                                <div class=\"col-sm-8 pl-0\">\r\n                                                    <input formControlName=\"codZona\" name=\"codZona\" class=\"form-control\" type=\"text\" style=\"display:none;\" />\r\n                                                    <input formControlName=\"descZona\" name=\"descZona\" class=\"form-control\" type=\"text\" />\r\n                                                </div>\r\n                                                <div *ngIf=\"verModal\" class=\"col-sm-1\">\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal('zona', 'Zonas')\" [disabled]=\"noVigente\">\r\n                                                        <em class=\"icon-magnifier\"></em>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-12 ph-0\">\r\n                                            <div class=\"col-sm-4\">\r\n                                                <label class=\"col-sm-2 control-label ph-0\">Territorio</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                    <input formControlName=\"codTerritorio\" name=\"codTerritorio\" class=\"form-control\" type=\"text\" style=\"display:none;\" />\r\n                                                    <input formControlName=\"descTerritorio\" name=\"descTerritorio\" class=\"form-control\" type=\"text\" />\r\n                                                </div>\r\n                                                <div *ngIf=\"verModal\" class=\"col-sm-1\">\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal('territorioAC', 'Territorio')\" [disabled]=\"noVigente\">\r\n                                                        <em class=\"icon-magnifier\"></em>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-4\">\r\n                                                <label class=\"col-sm-2 control-label ph-0 lh-11\">Cat. Negocio</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                    <input formControlName=\"codCatNegocio\" name=\"codCatNegocio\" class=\"form-control\" type=\"text\" style=\"display:none;\" />\r\n                                                    <input formControlName=\"desCatNegocio\" name=\"desCatNegocio\" class=\"form-control\" type=\"text\" />\r\n                                                </div>\r\n                                                <div class=\"col-sm-1\">\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalcatNegocio()\" [disabled]=\"noVigente\">\r\n                                                       <em class=\"icon-magnifier\"></em>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-12 ph-0\">\r\n                                            <div class=\"col-sm-4\">\r\n                                                <label class=\"col-sm-2 control-label ph-0\">Cliente</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                    <input formControlName=\"rutCliente\" name=\"rutCliente\" class=\"form-control\" type=\"text\" style=\"display:none;\" />\r\n                                                    <input formControlName=\"dvRutCliente\" name=\"dvRutCliente\" class=\"form-control\" type=\"text\" style=\"display:none;\" />\r\n                                                    <input formControlName=\"nombreCliente\" name=\"nombreCliente\" class=\"form-control\" type=\"text\" />\r\n                                                </div>\r\n                                                <div class=\"col-sm-1\">\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCliente()\" [disabled]=\"noVigente\">\r\n                                                        <em class=\"icon-magnifier\"></em>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-4\">\r\n                                                <label class=\"col-sm-2 control-label ph-0 lh-11\">Cliente Local R/C</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                    <input formControlName=\"codNumLocal\" name=\"codNumLocal\" class=\"form-control\" type=\"number\" style=\"display:none;\" />\r\n                                                    <input formControlName=\"codClienteLocal\" name=\"codClienteLocal\" class=\"form-control\" type=\"text\" style=\"display:none;\" />\r\n                                                    <input formControlName=\"descClienteLocal\" name=\"descClienteLocal\" class=\"form-control\" type=\"text\" />\r\n                                                </div>\r\n                                                <div *ngIf=\"verModal\" class=\"col-sm-1\">\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalClienteLocalRC()\" [disabled]=\"noVigente\">\r\n                                                        <em class=\"icon-magnifier\"></em>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row pull-left mt-3 ml-0\">\r\n                                            <div class=\"col-sm-3 mr-3\">\r\n                                                <button class=\"btn btn-oval btn-sm\" type=\"button\" [disabled]='noVigente' (click)=\"agregar()\">Agregar</button>\r\n                                            </div>\r\n                                            <div class=\"col-sm-4\">\r\n                                                <button class=\"btn btn-oval btn-sm\" type=\"button\" [disabled]='noVigente' (click)=\"eliminar()\">Eliminar</button>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3 pl-1\">\r\n                                                <button class=\"btn btn-oval btn-sm\" type=\"button\" [disabled]='noVigente' (click)=\"limpiar()\">Limpiar</button>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"table\">\r\n                                        <table class=\"table table-bordered table-hover\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th>\r\n                                                        <div class=\"checkbox c-checkbox needsclick pt-1\">\r\n                                                            <label class=\"needsclick\">\r\n                                                                <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckTitulo()\" [checked]=\"checkTituloSeleccionado\" />\r\n                                                                <span class=\"fa fa-check\"></span>\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </th>\r\n                                                    <th class=\"align-middle\">Fuerza Venta</th>\r\n                                                    <th class=\"align-middle\">Operador</th>\r\n                                                    <th class=\"align-middle\">Zona</th>\r\n                                                    <th class=\"align-middle\">Territorio</th>\r\n                                                    <th class=\"align-middle\">Categoría Negocio</th>\r\n                                                    <th class=\"align-middle\">Cliente</th>\r\n                                                    <th class=\"align-middle\">Cliente Local R/C</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let estructura of estructurasAccionesComerciales\">\r\n                                                    <td>\r\n                                                        <div class=\"checkbox c-checkbox needsclick pt-1\">\r\n                                                            <label class=\"needsclick\">\r\n                                                                <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckEstructura(estructura)\" [checked]=\"estructura.bCheck\" />\r\n                                                                <span class=\"fa fa-check\"></span>\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>{{ estructura.fvt_sdesfuerzavta === ' ' && estructuraListado === 'LINEA' ? '(Todos)' : estructura.fvt_sdesfuerzavta }}</td>\r\n                                                    <td>{{ estructura.ope_snombre === ' ' && estructuraListado === 'LINEA' ? '(Todos)' : estructura.ope_snombre }}</td>\r\n                                                    <td>{{ estructura.zon_sdeszona === ' ' && estructuraListado === 'LINEA' ? '(Todos)' : estructura.zon_sdeszona }}</td>\r\n                                                    <td>{{ estructura.ter_sdesterritorio === ' ' && estructuraListado === 'LINEA' ? '(Todos)' : estructura.ter_sdesterritorio }}</td>\r\n                                                    <td>{{ estructura.can_sdescatnegocio === ' ' && estructuraListado === 'LINEA' ? '(Todos)' : estructura.can_sdescatnegocio }}</td>\r\n                                                    <td>{{ estructura.cli_snombre === ' ' && estructuraListado === 'LINEA' ? '(Todos)' : estructura.cli_snombre }}</td>\r\n                                                    <td *ngIf=\"estructuraListado === 'LINEA'\">{{ estructura.rel_sdescripcionrelacioncomerc === ' ' && estructuraListado === 'LINEA' ? '(Todos)' : 'Local ' + estructura.pea_nnumlocal + ' / ' + estructura.rel_sdescripcionrelacioncomerc }}</td>\r\n                                                    <td *ngIf=\"estructuraListado !== 'LINEA'\">{{ estructura.rel_sdescripcionrelacioncomerc }}</td>\r\n                                                </tr>\r\n                                            </tbody>\r\n\r\n                                        </table>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </tab>\r\n                            <tab>\r\n                                <ng-template tabHeading>Jerarquía de Productos</ng-template>\r\n                                <div>\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"col-sm-12 ph-0\">\r\n                                            <label class=\"col-sm-1 control-label\">% Descuento</label>\r\n                                            <div class=\"col-sm-2\">\r\n                                                <input appDecimalNumber formControlName=\"porcDescuento\" name=\"porcDescuento\" class=\"form-control\" type=\"number\" step=\"0.01\" max=100 maxlength=\"6\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" (focusout)=\"validaPorcentaje()\"\r\n                                                />\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row pull-left mb-4\">\r\n                                        <div class=\"col-sm-3 mr-3\">\r\n                                            <button class=\"btn btn-oval btn-sm\" type=\"button\" [disabled]='noVigente' (click)=\"eliminarJerarquia()\">Eliminar</button>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"table\">\r\n                                        <table class=\"table table-bordered table-hover jerarquiaProductos\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th class=\"w-60\">\r\n                                                        <div class=\"checkbox c-checkbox needsclick pt-1\">\r\n                                                            <label class=\"needsclick\">\r\n                                                                <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckTituloJerarquia()\" [checked]=\"checkTituloJerarquiaSeleccionado\" />\r\n                                                                <span class=\"fa fa-check\"></span>\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </th>\r\n                                                    <th class=\"align-middle\">Artículo</th>\r\n                                                    <th class=\"align-middle\">Descripción Artículo</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let articulo of articulosJerarquia\">\r\n                                                    <td class=\"pt-0\">\r\n                                                        <div class=\"checkbox c-checkbox needsclick\">\r\n                                                            <label class=\"needsclick\">\r\n                                                                <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckJerarquia(articulo)\" [checked]=\"articulo.bCheck\" />\r\n                                                                <span class=\"fa fa-check\"></span>\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>{{articulo.dac_scodformato}}-{{articulo.dac_scodvariedad}}</td>\r\n                                                    <td>{{articulo.art_sdescripcion}}</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td></td>\r\n                                                    <td class=\"w-100 align-top\">\r\n                                                        <input #articulo type=\"text\" [(ngModel)]=\"filterData\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control mw-100\" (input)=\"setArticulo(articulo)\" (keydown.Tab)=\"validaArticulo(articulo,descripcion)\" />\r\n                                                        <ul *ngIf=\"verListaArticulo\" class=\"list-group filter-list\">\r\n                                                            <li *ngFor=\"let data of parametrosAutocomplete | filter:filterData\" (click)=\"seleccionaArticulo(data, articulo, descripcion)\">\r\n                                                                <a class=\"list-group-item\">{{data.art_scodformato}}-{{data.art_scodvariedad}}</a>\r\n                                                            </li>\r\n                                                        </ul>\r\n                                                    </td>\r\n                                                    <td class=\"align-top\">\r\n                                                        <input #descripcion type=\"text\" [(ngModel)]=\"filterDesc\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control width-desc\" (input)=\"setDescripcion(descripcion)\" (keydown.Tab)=\"validaDescripcion(articulo,descripcion)\" />\r\n                                                        <ul *ngIf=\"verListaDescripcion\" class=\"list-group filter-list\">\r\n                                                            <li *ngFor=\"let data of parametrosAutocomplete | filterDesc:filterDesc\" (click)=\"seleccionaDescripcion(data, articulo, descripcion)\">\r\n                                                                <a class=\"list-group-item\">{{data.art_sdescripcion}}</a>\r\n                                                            </li>\r\n                                                        </ul>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </tab>\r\n                        </tabset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionComercial/accionesComerciales/detalleDescuentoComercial/detalleDescuentoComercial.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/accionesComerciales/detalleDescuentoComercial/detalleDescuentoComercial.component.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".width-desc{width:60%}.filter-list{list-style:none;max-height:200px;overflow-y:scroll}\n"

/***/ }),

/***/ "./src/app/routes/administracionComercial/accionesComerciales/detalleDescuentoComercial/detalleDescuentoComercial.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/accionesComerciales/detalleDescuentoComercial/detalleDescuentoComercial.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: DetalleDescuentoComercialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleDescuentoComercialComponent", function() { return DetalleDescuentoComercialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_consultaService_administracionComercial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/consultaService/administracionComercial.service */ "./src/app/core/consultaService/administracionComercial.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component */ "./src/app/routes/commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component.ts");
/* harmony import */ var _commonPopUp_clienteACPopUp_clienteACPopUp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../commonPopUp/clienteACPopUp/clienteACPopUp.component */ "./src/app/routes/commonPopUp/clienteACPopUp/clienteACPopUp.component.ts");
/* harmony import */ var _commonPopUp_clienteRelComercialPopUp_clienteRelComercialPopUp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../commonPopUp/clienteRelComercialPopUp/clienteRelComercialPopUp.component */ "./src/app/routes/commonPopUp/clienteRelComercialPopUp/clienteRelComercialPopUp.component.ts");
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
var DetalleDescuentoComercialComponent = /** @class */ (function () {
    function DetalleDescuentoComercialComponent(fb, administracionComercialService, utilService, consultasService, modalService, authService, cargador, router) {
        this.administracionComercialService = administracionComercialService;
        this.utilService = utilService;
        this.consultasService = consultasService;
        this.modalService = modalService;
        this.authService = authService;
        this.cargador = cargador;
        this.router = router;
        this.nuevaAccionComercial = false;
        this.dataAutocomplete = [];
        this.filterData = '';
        this.filterDesc = '';
        this.origen = '';
        this.fechaActual = new Date();
        this.request = {};
        this.requestGrabar = {};
        this.articulosJerarquia = [];
        this.articulosJerarquiaRequest = [];
        this.estructurasAccionesComerciales = [];
        this.estructurasAccionesComercialesRequest = [];
        this.verModal = true;
        this.checkTituloSeleccionado = false;
        this.checkEstructuraSeleccionada = false;
        this.checkTituloJerarquiaSeleccionado = false;
        this.checkJerarquiaSeleccionada = false;
        this.combinatoriaValido = false;
        this.enUsoFzaVtas = false;
        this.enOperador = false;
        this.enCatNegocio = false;
        this.enCliente = false;
        this.grabaEstructuras = false;
        this.grabaEncabezado = false;
        this.grabaJerarquias = false;
        this.estructuraListado = '';
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fechaCreacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            tipoEstructura: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            desctipoEstructura: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            fechaVigencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            horaVigencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fechaTermino: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            horaTermino: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            codTipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            codFuerzaVenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            desFuerzaVenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            codOperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            descOperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            codZona: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            descZona: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            codTerritorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            descTerritorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            codCatNegocio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            desCatNegocio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            rutCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            dvRutCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nombreCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            codNumLocal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            codClienteLocal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            descClienteLocal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            porcDescuento: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    DetalleDescuentoComercialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parametrosAutocomplete = this.authService.getArticuloAutocomplete();
        if (this.administracionComercialService.selectedAccionComercial.aco_nidaccion) {
            this.forma.controls.fechaCreacion.disable();
            this.forma.controls.numero.disable();
            this.forma.controls.desctipoEstructura.disable();
            this.forma.controls.tipo.disable();
            this.cargarDatosAccionComercial();
        }
        else {
            console.log('nuevo');
            this.nuevaAccionComercial = true;
            this.forma.controls.fechaCreacion.setValue(this.utilService.dateToStringFormat(this.fechaActual));
            this.forma.controls.fechaCreacion.disable();
            this.forma.controls.numero.disable();
            this.cargaCombos();
        }
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    DetalleDescuentoComercialComponent.prototype.ngOnDestroy = function () {
        if (this.subData != undefined) {
            this.subData.unsubscribe();
        }
    };
    DetalleDescuentoComercialComponent.prototype.openModal = function (origen, titulo) {
        this.origen = origen;
        var initialState = {
            titulo: titulo,
            origen: origen,
            forma: this.forma
        };
        if (this.forma.controls.tipoEstructura.value === 'COMBI') {
            this.validaCombinatoria();
            if (this.combinatoriaValido) {
                this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_9__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
            }
            else {
                swal('Atención', 'Sólo puede seleccionar un item a la vez. Agregue el seleccionado, o limpie antes de continuar.', 'info');
            }
        }
        else if (this.forma.controls.tipoEstructura.value === 'LINEA') {
            this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_9__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        }
        else {
            swal('Atención', 'Debe seleccionar el tipo de estructura antes de continuar', 'info');
        }
    };
    DetalleDescuentoComercialComponent.prototype.openModalFzaVta = function () {
        this.origen = 'fuerzaVenta';
        var initialState = {
            titulo: 'Fuerza de Venta',
            origen: 'fuerzaVenta',
            forma: this.forma
        };
        if (this.forma.controls.tipoEstructura.value === 'COMBI') {
            this.validaCombinatoria();
            if (this.combinatoriaValido || this.enUsoFzaVtas) {
                this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_9__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
            }
            else {
                swal('Atención', 'Sólo puede seleccionar un item a la vez. Agregue el seleccionado, o limpie antes de continuar.', 'info');
            }
        }
        else if (this.forma.controls.tipoEstructura.value === 'LINEA') {
            this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_9__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        }
        else {
            swal('Atención', 'Debe seleccionar el tipo de estructura antes de continuar', 'info');
        }
    };
    DetalleDescuentoComercialComponent.prototype.openModalOperador = function () {
        this.origen = 'operador';
        var initialState = {
            titulo: 'Operadores',
            origen: 'operador',
            forma: this.forma
        };
        if (this.forma.controls.tipoEstructura.value === 'COMBI') {
            this.validaCombinatoria();
            if (this.combinatoriaValido || this.enOperador) {
                this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_9__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
            }
            else {
                swal('Atención', 'Sólo puede seleccionar un item a la vez. Agregue el seleccionado, o limpie antes de continuar.', 'info');
            }
        }
        else if (this.forma.controls.tipoEstructura.value === 'LINEA') {
            this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_9__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        }
        else {
            swal('Atención', 'Debe seleccionar el tipo de estructura antes de continuar', 'info');
        }
    };
    DetalleDescuentoComercialComponent.prototype.openModalcatNegocio = function () {
        this.origen = 'catNegocio';
        var initialState = {
            titulo: 'Categoría Negocio',
            origen: 'catNegocio',
            forma: this.forma
        };
        if (this.forma.controls.tipoEstructura.value === 'COMBI') {
            this.validaCombinatoria();
            if (this.combinatoriaValido || this.enCatNegocio) {
                this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_9__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
            }
            else {
                swal('Atención', 'Sólo puede seleccionar un item a la vez. Agregue el seleccionado, o limpie antes de continuar.', 'info');
            }
        }
        else if (this.forma.controls.tipoEstructura.value === 'LINEA') {
            this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_9__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        }
        else {
            swal('Atención', 'Debe seleccionar el tipo de estructura antes de continuar', 'info');
        }
    };
    DetalleDescuentoComercialComponent.prototype.openModalCliente = function () {
        this.origen = 'cliente';
        var initialState = {
            titulo: 'Clientes',
            origen: 'cliente',
            formaCli: this.forma
        };
        if (this.forma.controls.tipoEstructura.value === 'COMBI') {
            this.validaCombinatoria();
            if (this.combinatoriaValido || this.enCliente) {
                this.bsModalRef = this.modalService.show(_commonPopUp_clienteACPopUp_clienteACPopUp_component__WEBPACK_IMPORTED_MODULE_10__["ClienteACPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
            }
            else {
                swal('Atención', 'Sólo puede seleccionar un item a la vez. Agregue el seleccionado, o limpie antes de continuar.', 'info');
            }
        }
        else if (this.forma.controls.tipoEstructura.value === 'LINEA') {
            this.bsModalRef = this.modalService.show(_commonPopUp_clienteACPopUp_clienteACPopUp_component__WEBPACK_IMPORTED_MODULE_10__["ClienteACPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        }
        else {
            swal('Atención', 'Debe seleccionar el tipo de estructura antes de continuar', 'info');
        }
    };
    DetalleDescuentoComercialComponent.prototype.openModalClienteLocalRC = function () {
        this.origen = 'clienteRC';
        var initialState = {
            titulo: 'Clientes / Relación Comercial',
            origen: 'clienteRC',
            formaCli: this.forma
        };
        if (this.forma.controls.tipoEstructura.value === 'COMBI') {
            this.validaCombinatoria();
            if (this.combinatoriaValido) {
                this.bsModalRef = this.modalService.show(_commonPopUp_clienteRelComercialPopUp_clienteRelComercialPopUp_component__WEBPACK_IMPORTED_MODULE_11__["ClienteRelComercialPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
            }
            else {
                swal('Atención', 'Sólo puede seleccionar un item a la vez. Agregue el seleccionado, o limpie antes de continuar.', 'info');
            }
        }
        else if (this.forma.controls.tipoEstructura.value === 'LINEA') {
            this.bsModalRef = this.modalService.show(_commonPopUp_clienteRelComercialPopUp_clienteRelComercialPopUp_component__WEBPACK_IMPORTED_MODULE_11__["ClienteRelComercialPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        }
        else {
            swal('Atención', 'Debe seleccionar el tipo de estructura antes de continuar', 'info');
        }
    };
    DetalleDescuentoComercialComponent.prototype.validaCombinatoria = function () {
        if (this.forma.controls.desFuerzaVenta.value === '' && this.forma.controls.descOperador.value === '' && this.forma.controls.desCatNegocio.value === '' && this.forma.controls.nombreCliente.value === '') {
            this.combinatoriaValido = true;
        }
        else {
            this.combinatoriaValido = false;
        }
    };
    DetalleDescuentoComercialComponent.prototype.validaPorcentaje = function () {
        if (this.forma.controls.porcDescuento.value === '' || this.forma.controls.porcDescuento.value === 0 || this.forma.controls.porcDescuento.value > 100) {
            swal('Atención', 'Descuento inválido', 'warning');
            this.forma.controls.porcDescuento.setValue(0);
        }
        this.forma.controls.porcDescuento.setValue(parseFloat(this.forma.controls.porcDescuento.value).toFixed(2));
    };
    DetalleDescuentoComercialComponent.prototype.cargarDatosAccionComercial = function () {
        var _this = this;
        this.request.nIdAccionComercial = this.administracionComercialService.selectedAccionComercial.aco_nidaccion;
        this.request.sCodTipoDescuento = this.administracionComercialService.selectedAccionComercial.aco_scodtipodescuento;
        //carga encabezado Accion Comercial
        this.administracionComercialService.getEncabezadoAccionComercial(this.request)
            .subscribe(function (data) {
            console.log('data encabezado', data);
            if (data.cargaEncabezadoAccionComercial) {
                _this.cargarEncabezadoEstructurasComerciales(data.cargaEncabezadoAccionComercial);
                //Validar Fecha Vigencia
                _this.validaVigencia(data.cargaEncabezadoAccionComercial);
                //Validar Inhabilitar
                _this.validaInhabilitar(data.cargaEncabezadoAccionComercial);
                _this.verModales();
            }
            if (data.error.codError != 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
        //Carga Jerarquia Acción Comercial
        this.administracionComercialService.getJerarquiaAccionComercial(this.request)
            .subscribe(function (data) {
            console.log('data jerarquia', data);
            if (data.cargaJerarquia) {
                _this.cargarListadoJerarquiasComerciales(data.cargaJerarquia);
            }
            if (data.error.codError != 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
        //Carga Estructura Acción Comercial
        this.administracionComercialService.getEstructuraAccionComercial(this.request)
            .subscribe(function (data) {
            console.log('data estructura accion comercial', data);
            if (data.cargaEstructura) {
                _this.cargarListadoEstructurasComerciales(data.cargaEstructura);
            }
            if (data.error.codError != 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    DetalleDescuentoComercialComponent.prototype.cargaCombos = function () {
        this.tipo = this.authService.getParametrosTipoDescuento();
        this.tipoEstructura = this.authService.getParametrosTipoEstructura();
    };
    DetalleDescuentoComercialComponent.prototype.validaVigencia = function (data) {
        this.noVigente = false;
        console.log('data fecha hora', data);
        var fechaTermino = new Date(this.utilService.dateStringServiceToStringFormat(data[0].aco_dfhoinicio) + " " + this.utilService.timeStringServiceToStringFormat(data[0].aco_dfhoinicio));
        var fechaInhabilitar = new Date(this.utilService.dateStringServiceToStringFormat(data[0].aco_dfhotermino) + " " + this.utilService.timeStringServiceToStringFormat(data[0].aco_dfhotermino));
        console.log(fechaTermino);
        console.log(this.fechaActual);
        console.log(data[0].aco_scodestado);
        if (data[0].aco_scodestado === 'NOVIG') {
            console.log('no vigente');
            this.noVigente = true;
        }
        else if (this.fechaActual > fechaTermino) {
            console.log('no vigente');
            this.noVigente = true;
        }
        if (this.noVigente) {
            this.forma.controls.fechaVigencia.disable();
            this.forma.controls.horaVigencia.disable();
            this.forma.controls.descripcion.disable();
            this.forma.controls.fechaTermino.disable();
            this.forma.controls.horaTermino.disable();
            this.forma.controls.porcDescuento.disable();
        }
    };
    DetalleDescuentoComercialComponent.prototype.validaInhabilitar = function (data) {
        //inhabilitar
        this.inhabilitar = false;
        console.log('data fecha hora', data);
        //let fechaTermino = new Date(`${this.utilService.dateStringServiceToStringFormat(data[0].aco_dfhoinicio)} ${this.utilService.timeStringServiceToStringFormat(data[0].aco_dfhoinicio)}`);
        var fechaInhabilitar = new Date(this.utilService.dateStringServiceToStringFormat(data[0].aco_dfhotermino) + " " + this.utilService.timeStringServiceToStringFormat(data[0].aco_dfhotermino));
        console.log(fechaInhabilitar);
        console.log(this.fechaActual);
        console.log(data[0].aco_scodestado);
        if (data[0].aco_scodestado === 'NOVIG') {
            console.log('inhabilitar');
            this.inhabilitar = true;
        }
        else if (this.fechaActual > fechaInhabilitar) {
            console.log('inhabilitar');
            this.inhabilitar = true;
        }
    };
    DetalleDescuentoComercialComponent.prototype.cargarEncabezadoEstructurasComerciales = function (data) {
        this.forma.controls.fechaCreacion.setValue(this.utilService.dateStringServiceToStringFormat(data[0].aco_dfhocreacion));
        this.forma.controls.numero.setValue(data[0].aco_nidaccion);
        this.forma.controls.tipoEstructura.setValue(data[0].aco_scodtipoestructura);
        this.forma.controls.desctipoEstructura.setValue(data[0].sdestipoestructura);
        this.forma.controls.fechaVigencia.setValue(this.utilService.dateStringServiceToStringFormat(data[0].aco_dfhoinicio));
        this.forma.controls.horaVigencia.setValue(this.utilService.timeStringServiceToStringFormat(data[0].aco_dfhoinicio));
        this.forma.controls.descripcion.setValue(data[0].aco_sdescripcion);
        this.forma.controls.fechaTermino.setValue(this.utilService.dateStringServiceToStringFormat(data[0].aco_dfhotermino));
        this.forma.controls.horaTermino.setValue(this.utilService.timeStringServiceToStringFormat(data[0].aco_dfhotermino));
        this.forma.controls.codTipo.setValue(data[0].aco_scodtipodescuento);
        this.forma.controls.tipo.setValue(data[0].sdestipodescuento);
        this.estructuraListado = data[0].aco_scodtipoestructura;
    };
    DetalleDescuentoComercialComponent.prototype.cargarListadoEstructurasComerciales = function (data) {
        console.log('data en carga estrcuruas', data);
        for (var i in data) {
            var estructura = {
                bCheck: this.checkEstructuraSeleccionada,
                pea_nidaccion: data[i].pea_nidaccion,
                pea_scodtipodescuento: data[i].pea_scodtipodescuento,
                pea_scodfuerzaventa: data[i].pea_scodfuerzaventa,
                fvt_sdesfuerzavta: data[i].fvt_sdesfuerzavta,
                pea_nrutoperador: data[i].pea_nrutoperador,
                ope_snombre: data[i].ope_snombre,
                pea_scodzona: data[i].pea_scodzona,
                zon_sdeszona: data[i].zon_sdeszona,
                pea_scodterritorio: data[i].pea_scodterritorio,
                ter_sdesterritorio: data[i].ter_sdesterritorio,
                pea_nrutcliente: data[i].pea_nrutcliente,
                pea_nnumlocal: data[i].pea_nnumlocal,
                pea_scodrelcomercial: data[i].pea_scodrelcomercial,
                rel_sdescripcionrelacioncomerc: data[i].rel_sdescripcionrelacioncomerc,
                cli_snombre: data[i].cli_snombre,
                cli_sapepaterno: data[i].cli_sapepaterno,
                cli_sapematerno: data[i].cli_sapematerno,
                pea_scodcatnegocio: data[i].pea_scodcatnegocio,
                can_sdescatnegocio: data[i].can_sdescatnegocio
            };
            this.estructurasAccionesComerciales.push(estructura);
        }
    };
    DetalleDescuentoComercialComponent.prototype.cargarListadoJerarquiasComerciales = function (data) {
        console.log('data en carga jerarquias', data);
        for (var i in data) {
            var estructura = {
                bCheck: false,
                art_sdescripcion: data[i].art_sdescripcion,
                dac_nidaccion: data[i].dac_nidaccion,
                dac_nporcdescto: data[i].dac_nporcdescto,
                dac_scodagrupacion: data[i].dac_scodagrupacion,
                dac_scodcategoria: data[i].dac_scodcategoria,
                dac_scodformato: data[i].dac_scodformato,
                dac_scodlinea: data[i].dac_scodlinea,
                dac_scodpais: data[i].dac_scodpais,
                dac_scodproducto: data[i].dac_scodproducto,
                dac_scodtipodescuento: data[i].dac_scodtipodescuento,
                dac_scodvariedad: data[i].dac_scodvariedad,
                jpb_sdesproductobase: data[i].jpb_sdesproductobase
            };
            this.articulosJerarquia.push(estructura);
        }
        if (this.articulosJerarquia.length > 0) {
            this.forma.controls.porcDescuento.setValue(this.articulosJerarquia[0].dac_nporcdescto);
        }
    };
    DetalleDescuentoComercialComponent.prototype.verModales = function () {
        if (this.estructurasAccionesComerciales.length > 0 && (this.forma.controls.tipoEstructura.value === 'COMBI' || this.forma.controls.tipoEstructura.value === '')) {
            this.forma.controls.tipoEstructura.setValue('LINEA');
            swal('Atención', 'Debe Eliminar Estructura ingresada antes de cambiar el Tipo', 'info');
        }
        else if (this.estructurasAccionesComerciales.length > 0 && (this.forma.controls.tipoEstructura.value === 'LINEA' || this.forma.controls.tipoEstructura.value === '')) {
            this.forma.controls.tipoEstructura.setValue('COMBI');
            swal('Atención', 'Debe Eliminar Estructura ingresada antes de cambiar el Tipo', 'info');
        }
        if (this.forma.controls.tipoEstructura.value === 'COMBI') {
            this.verModal = false;
        }
        else {
            this.verModal = true;
        }
        this.limpiar();
    };
    DetalleDescuentoComercialComponent.prototype.validarFechas = function (fecha) {
        var dateValid = this.utilService.DateValidator(fecha.value);
        if (!dateValid) {
            fecha.value = this.utilService.dateToStringFormat(this.fechaActual);
        }
    };
    DetalleDescuentoComercialComponent.prototype.validaVigenciaTermino = function () {
        console.log(this.forma.controls.fechaVigencia.value());
        console.log(this.forma.controls.fechaTermino.value());
    };
    DetalleDescuentoComercialComponent.prototype.validaCheckTitulo = function () {
        this.checkTituloSeleccionado = !this.checkTituloSeleccionado;
        if (this.checkTituloSeleccionado) {
            console.log('realizar accion');
            for (var i in this.estructurasAccionesComerciales) {
                this.estructurasAccionesComerciales[i].bCheck = true;
            }
        }
        else {
            console.log('deshacer accion');
            for (var i in this.estructurasAccionesComerciales) {
                this.estructurasAccionesComerciales[i].bCheck = false;
            }
        }
    };
    DetalleDescuentoComercialComponent.prototype.validaCheckTituloJerarquia = function () {
        this.checkTituloJerarquiaSeleccionado = !this.checkTituloJerarquiaSeleccionado;
        if (this.checkTituloJerarquiaSeleccionado) {
            console.log('realizar accion');
            for (var i in this.articulosJerarquia) {
                this.articulosJerarquia[i].bCheck = true;
            }
        }
        else {
            console.log('deshacer accion');
            for (var i in this.articulosJerarquia) {
                this.articulosJerarquia[i].bCheck = false;
            }
        }
    };
    DetalleDescuentoComercialComponent.prototype.validaCheckEstructura = function (estructura) {
        estructura.bCheck = !estructura.bCheck;
        if (estructura.bCheck) {
            console.log('checkeado');
        }
        else {
            console.log('NO checkeado');
        }
    };
    DetalleDescuentoComercialComponent.prototype.validaCheckJerarquia = function (articulo) {
        articulo.bCheck = !articulo.bCheck;
        if (articulo.bCheck) {
            console.log('checkeado');
        }
        else {
            console.log('NO checkeado');
        }
    };
    DetalleDescuentoComercialComponent.prototype.agregar = function () {
        this.puedeAgregar = false;
        if (this.forma.controls.tipoEstructura.value === '') {
            swal('Atención', 'Debe seleccionar el tipo de estructura antes de continuar', 'info');
        }
        else if (this.forma.controls.tipoEstructura.value === 'COMBI' && !this.enUsoFzaVtas && !this.enOperador && !this.enCatNegocio && !this.enCliente) {
            swal('Atención', 'Debe seleccionar algun elemento de la estructura para agregar', 'info');
        }
        else {
            console.log('agregar estructura al listado');
            if (this.forma.controls.tipoEstructura.value === 'LINEA') {
                this.estructuraListado = 'LINEA';
                var objeto = {
                    bCheck: false,
                    pea_scodfuerzaventa: this.forma.controls.codFuerzaVenta.value,
                    fvt_sdesfuerzavta: this.forma.controls.desFuerzaVenta.value === '' ? ' ' : this.forma.controls.desFuerzaVenta.value,
                    pea_nrutoperador: this.forma.controls.codOperador.value === '' ? 0 : this.forma.controls.codOperador.value,
                    ope_snombre: this.forma.controls.descOperador.value === '' ? ' ' : this.forma.controls.descOperador.value,
                    pea_scodzona: this.forma.controls.codZona.value,
                    zon_sdeszona: this.forma.controls.descZona.value === '' ? ' ' : this.forma.controls.descZona.value,
                    pea_scodterritorio: this.forma.controls.codTerritorio.value,
                    ter_sdesterritorio: this.forma.controls.descTerritorio.value === '' ? ' ' : this.forma.controls.descTerritorio.value,
                    pea_scodcatnegocio: this.forma.controls.codCatNegocio.value,
                    can_sdescatnegocio: this.forma.controls.desCatNegocio.value === '' ? ' ' : this.forma.controls.desCatNegocio.value,
                    pea_nrutcliente: this.forma.controls.rutCliente.value === '' ? 0 : this.forma.controls.rutCliente.value,
                    cli_snombre: this.forma.controls.nombreCliente.value === '' ? ' ' : this.forma.controls.nombreCliente.value,
                    pea_nnumlocal: this.forma.controls.codNumLocal.value === '' ? 0 : this.forma.controls.codNumLocal.value,
                    pea_scodrelcomercial: this.forma.controls.codClienteLocal.value,
                    rel_sdescripcionrelacioncomerc: this.forma.controls.descClienteLocal.value === '' ? ' ' : this.forma.controls.descClienteLocal.value
                };
                //comparar objetos
                this.comparaObjetos(this.estructurasAccionesComerciales, objeto);
            }
            else {
                this.estructuraListado = 'COMBI';
                var objeto = {
                    bCheck: false,
                    pea_scodfuerzaventa: this.forma.controls.codFuerzaVenta.value,
                    fvt_sdesfuerzavta: this.forma.controls.desFuerzaVenta.value,
                    pea_nrutoperador: this.forma.controls.codOperador.value === '' ? 0 : this.forma.controls.codOperador.value,
                    ope_snombre: this.forma.controls.descOperador.value,
                    pea_scodzona: this.forma.controls.codZona.value,
                    zon_sdeszona: this.forma.controls.descZona.value,
                    pea_scodterritorio: this.forma.controls.codTerritorio.value,
                    ter_sdesterritorio: this.forma.controls.descTerritorio.value,
                    pea_scodcatnegocio: this.forma.controls.codCatNegocio.value,
                    can_sdescatnegocio: this.forma.controls.desCatNegocio.value,
                    pea_nrutcliente: this.forma.controls.rutCliente.value === '' ? 0 : this.forma.controls.rutCliente.value,
                    cli_snombre: this.forma.controls.nombreCliente.value,
                    pea_nnumlocal: this.forma.controls.codNumLocal.value === '' ? 0 : this.forma.controls.codNumLocal.value,
                    pea_scodrelcomercial: this.forma.controls.codClienteLocal.value,
                    rel_sdescripcionrelacioncomerc: this.forma.controls.descClienteLocal.value
                };
                //comparar objetos
                this.comparaObjetos(this.estructurasAccionesComerciales, objeto);
            }
            this.limpiar();
        }
    };
    DetalleDescuentoComercialComponent.prototype.comparaObjetos = function (estructurasAccionesComerciales, objeto) {
        console.log('estructurasAccionesComerciales comparaObjetos', estructurasAccionesComerciales);
        if (estructurasAccionesComerciales.length > 0) {
            for (var i in this.estructurasAccionesComerciales) {
                if (this.estructurasAccionesComerciales[i].fvt_sdesfuerzavta.trim() === objeto.fvt_sdesfuerzavta.trim() && this.estructurasAccionesComerciales[i].ope_snombre.trim() === objeto.ope_snombre.trim() &&
                    this.estructurasAccionesComerciales[i].zon_sdeszona.trim() === objeto.zon_sdeszona.trim() && this.estructurasAccionesComerciales[i].ter_sdesterritorio.trim() === objeto.ter_sdesterritorio.trim() &&
                    this.estructurasAccionesComerciales[i].can_sdescatnegocio.trim() === objeto.can_sdescatnegocio.trim() && this.estructurasAccionesComerciales[i].cli_snombre.trim() === objeto.cli_snombre.trim() &&
                    this.estructurasAccionesComerciales[i].rel_sdescripcionrelacioncomerc.trim() === objeto.rel_sdescripcionrelacioncomerc.trim()) {
                    swal('Atención', 'Ya existe una regla idéntica a la solicitada', 'warning');
                    this.puedeAgregar = false;
                    break;
                }
                else {
                    this.puedeAgregar = true;
                }
            }
            if (this.puedeAgregar) {
                this.estructurasAccionesComerciales.push(objeto);
            }
        }
        else {
            this.estructurasAccionesComerciales.push(objeto);
        }
    };
    DetalleDescuentoComercialComponent.prototype.eliminar = function () {
        var _this = this;
        if (this.estructurasAccionesComerciales.length > 0) {
            swal({
                title: 'Atención',
                text: '¿Desea eliminar los productos seleccionados?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#85b3cd',
                confirmButtonText: 'Aceptar',
                cancelButtonText: 'Cancelar',
                closeOnConfirm: true
            }, function () {
                var j = _this.estructurasAccionesComerciales.length;
                for (var i = 0; i < j; i++) {
                    if (_this.estructurasAccionesComerciales[i].bCheck === true) {
                        _this.estructurasAccionesComerciales.splice(_this.estructurasAccionesComerciales.indexOf(_this.estructurasAccionesComerciales[i]), 1);
                        i--;
                        j--;
                    }
                }
                _this.checkTituloSeleccionado = false;
            });
        }
    };
    DetalleDescuentoComercialComponent.prototype.eliminarJerarquia = function () {
        var _this = this;
        if (this.articulosJerarquia.length > 0) {
            swal({
                title: 'Atención',
                text: '¿Desea eliminar los artículos seleccionados?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#85b3cd',
                confirmButtonText: 'Aceptar',
                cancelButtonText: 'Cancelar',
                closeOnConfirm: true
            }, function () {
                var j = _this.articulosJerarquia.length;
                for (var i = 0; i < j; i++) {
                    if (_this.articulosJerarquia[i].bCheck === true) {
                        _this.articulosJerarquia.splice(_this.articulosJerarquia.indexOf(_this.articulosJerarquia[i]), 1);
                        i--;
                        j--;
                    }
                }
                _this.checkTituloJerarquiaSeleccionado = false;
            });
            // }
        }
    };
    DetalleDescuentoComercialComponent.prototype.limpiar = function () {
        this.forma.controls.codFuerzaVenta.setValue('');
        this.forma.controls.desFuerzaVenta.setValue('');
        this.forma.controls.codOperador.setValue('');
        this.forma.controls.descOperador.setValue('');
        this.forma.controls.codZona.setValue('');
        this.forma.controls.descZona.setValue('');
        this.forma.controls.codTerritorio.setValue('');
        this.forma.controls.descTerritorio.setValue('');
        this.forma.controls.codCatNegocio.setValue('');
        this.forma.controls.desCatNegocio.setValue('');
        this.forma.controls.rutCliente.setValue('');
        this.forma.controls.nombreCliente.setValue('');
        this.forma.controls.codClienteLocal.setValue('');
        this.forma.controls.descClienteLocal.setValue('');
        this.enUsoFzaVtas = false;
        this.enOperador = false;
        this.enCatNegocio = false;
        this.enCliente = false;
    };
    DetalleDescuentoComercialComponent.prototype.setArticulo = function (articulo) {
        if (articulo.value === '') {
            this.verListaArticulo = false;
        }
        else {
            this.verListaArticulo = true;
        }
    };
    DetalleDescuentoComercialComponent.prototype.validaArticulo = function (articulo, descripcion) {
        var articuloExiste = false;
        if (articulo.value !== '') {
            for (var i in this.parametrosAutocomplete) {
                var str = this.parametrosAutocomplete[i].art_scodformato + "-" + this.parametrosAutocomplete[i].art_scodvariedad;
                if (str.startsWith("" + articulo.value)) {
                    console.log(str, this.parametrosAutocomplete[i]);
                    articulo.value = str;
                    descripcion.value = this.parametrosAutocomplete[i].art_sdescripcion;
                    articuloExiste = true;
                    this.verListaArticulo = false;
                    this.seleccionaArticulo(this.parametrosAutocomplete[i], articulo, descripcion);
                    break;
                }
            }
            if (!articuloExiste) {
                articulo.value = '';
                descripcion.value = '';
                this.verListaArticulo = false;
                this.verListaDescripcion = false;
                articulo.focus();
                swal('Atención', 'Artículo no existe', 'warning');
            }
        }
    };
    DetalleDescuentoComercialComponent.prototype.seleccionaArticulo = function (data, articulo, descripcion) {
        this.puedeAgregar = false;
        var artSelected = {
            dac_scodformato: data.art_scodformato,
            dac_scodvariedad: data.art_scodvariedad,
            art_sdescripcion: data.art_sdescripcion
        };
        if (this.articulosJerarquia.length > 0) {
            for (var i in this.articulosJerarquia) {
                if (this.articulosJerarquia[i].dac_scodformato === data.art_scodformato && this.articulosJerarquia[i].dac_scodvariedad === data.art_scodvariedad) {
                    this.puedeAgregar = false;
                    break;
                }
                else {
                    this.puedeAgregar = true;
                }
            }
            if (this.puedeAgregar) {
                this.articulosJerarquia.push(artSelected);
            }
            else {
                swal('Atención', 'Artículo registrado', 'warning');
            }
        }
        else {
            this.articulosJerarquia.push(artSelected);
        }
        articulo.value = '';
        descripcion.value = '';
        this.verListaArticulo = false;
    };
    DetalleDescuentoComercialComponent.prototype.setDescripcion = function (descripcion) {
        if (descripcion.value === '') {
            this.verListaDescripcion = false;
        }
        else {
            this.verListaDescripcion = true;
        }
    };
    DetalleDescuentoComercialComponent.prototype.validaDescripcion = function (articulo, descripcion) {
        var articuloExiste = false;
        if (descripcion.value !== '') {
            for (var i in this.parametrosAutocomplete) {
                var str = (this.parametrosAutocomplete[i].art_sdescripcion).toLowerCase();
                if (str.startsWith("" + (descripcion.value).toLowerCase())) {
                    console.log(str, this.parametrosAutocomplete[i]);
                    articulo.value = this.parametrosAutocomplete[i].art_scodformato + "-" + this.parametrosAutocomplete[i].art_scodvariedad;
                    descripcion.value = this.parametrosAutocomplete[i].art_sdescripcion;
                    articuloExiste = true;
                    this.verListaDescripcion = false;
                    this.seleccionaDescripcion(this.parametrosAutocomplete[i], articulo, descripcion);
                    break;
                }
            }
            if (!articuloExiste) {
                articulo.value = '';
                descripcion.value = '';
                this.verListaArticulo = false;
                this.verListaDescripcion = false;
                articulo.focus();
                swal('Atención', 'Artículo no existe', 'warning');
            }
        }
    };
    DetalleDescuentoComercialComponent.prototype.seleccionaDescripcion = function (data, articulo, descripcion) {
        this.puedeAgregar = false;
        var artSelected = {
            dac_scodformato: data.art_scodformato,
            dac_scodvariedad: data.art_scodvariedad,
            art_sdescripcion: data.art_sdescripcion
        };
        if (this.articulosJerarquia.length > 0) {
            for (var i in this.articulosJerarquia) {
                if (this.articulosJerarquia[i].dac_scodformato === data.art_scodformato && this.articulosJerarquia[i].dac_scodvariedad === data.art_scodvariedad) {
                    this.puedeAgregar = false;
                    break;
                }
                else {
                    this.puedeAgregar = true;
                }
            }
            if (this.puedeAgregar) {
                this.articulosJerarquia.push(artSelected);
            }
            else {
                swal('Atención', 'Artículo registrado', 'warning');
            }
        }
        else {
            this.articulosJerarquia.push(artSelected);
        }
        descripcion.value = '';
        articulo.value = '';
        this.verListaDescripcion = false;
    };
    DetalleDescuentoComercialComponent.prototype.validaFechasVigenciaTermino = function () {
        this.grabaEncabezado = true;
        var vigencia = new Date(this.forma.controls.fechaVigencia.value + ":" + this.forma.controls.horaVigencia.value + ":00");
        var termino = new Date(this.forma.controls.fechaTermino.value + ":" + this.forma.controls.horaTermino.value + ":00");
        if (vigencia < new Date()) {
            swal('Atención', 'La fecha y hora de inicio y no puede ser inferior a la fecha y hora actual', 'warning');
            this.grabaEncabezado = false;
        }
        else if (termino < vigencia) {
            swal('Atención', 'La fecha y hora de término no puede ser inferior a la fecha y hora inicio', 'warning');
            this.grabaEncabezado = false;
        }
    };
    DetalleDescuentoComercialComponent.prototype.guardaDescuento = function () {
        var _this = this;
        console.log(this.forma);
        if (this.estructurasAccionesComerciales.length === 0) {
            swal('Atención', 'Debe ingresar datos en la Estructura Comercial', 'warning');
        }
        else {
            this.grabaEstructuras = true;
            if (this.forma.valid) {
                $('*').removeClass('error-form');
                //valida fechas vigencia y termino
                this.validaFechasVigenciaTermino();
                if (this.articulosJerarquia.length === 0) {
                    swal('Atención', 'Debe ingresar datos en Jerarquía de Productos', 'warning');
                }
                else {
                    this.grabaJerarquias = true;
                }
            }
            else {
                swal('Atención', 'Existen campos requeridos no ingresados', 'warning');
                if (!this.forma.controls.fechaVigencia.valid) {
                    $('[name=fechaVigencia]').addClass('error-form');
                }
                else {
                    $('[name=fechaVigencia]').removeClass('error-form');
                }
                if (!this.forma.controls.horaVigencia.valid) {
                    $('[name=horaVigencia]').addClass('error-form');
                }
                else {
                    $('[name=horaVigencia]').removeClass('error-form');
                }
                if (!this.forma.controls.descripcion.valid) {
                    $('[name=descripcion]').addClass('error-form');
                }
                else {
                    $('[name=descripcion]').removeClass('error-form');
                }
                if (!this.forma.controls.fechaTermino.valid) {
                    $('[name=fechaTermino]').addClass('error-form');
                }
                else {
                    $('[name=fechaTermino]').removeClass('error-form');
                }
                if (!this.forma.controls.horaTermino.valid) {
                    $('[name=horaTermino]').addClass('error-form');
                }
                else {
                    $('[name=horaTermino]').removeClass('error-form');
                }
                if (!this.forma.controls.tipo.valid) {
                    $('[name=tipo]').addClass('error-form');
                }
                else {
                    $('[name=tipo]').removeClass('error-form');
                }
                if (!this.forma.controls.porcDescuento.valid || this.forma.controls.porcDescuento.value === 0) {
                    $('[name=porcDescuento]').addClass('error-form');
                }
                else {
                    $('[name=porcDescuento]').removeClass('error-form');
                }
            }
        }
        console.log(this.grabaEstructuras, this.grabaEncabezado, this.grabaJerarquias);
        if (this.grabaEstructuras && this.grabaEncabezado && this.grabaJerarquias) {
            //grabar descuento
            //prepara encabezadoDcto del request
            this.requestGrabar.encabezadoDcto = {
                nIdAccionComercial: this.forma.controls.numero.value === '' ? 0 : this.forma.controls.numero.value,
                nRunUsuarioCrea: this.authService.getDatosUser().nrunusuario,
                sCodTipoAccion: 'DESCU',
                sCodTipoDescuento: this.nuevaAccionComercial ? this.forma.controls.tipo.value : this.forma.controls.codTipo.value,
                sCodTipoEstructura: this.forma.controls.tipoEstructura.value,
                sDescripcion: this.forma.controls.descripcion.value,
                sFhoinicio: (this.forma.controls.fechaVigencia.value).replace(/-/g, '') + (this.forma.controls.horaVigencia.value).replace(':', '') + '00',
                sFhotermino: (this.forma.controls.fechaTermino.value).replace(/-/g, '') + (this.forma.controls.horaTermino.value).replace(':', '') + '00',
            };
            //prepara estructuraComercial del request
            this.estructurasAccionesComercialesRequest = [];
            console.log('this.estructurasAccionesComerciales', this.estructurasAccionesComerciales);
            for (var i in this.estructurasAccionesComerciales) {
                var estructura = {
                    nIdAccionComercial: this.forma.controls.numero.value === '' ? 0 : this.forma.controls.numero.value,
                    nNomCliente: this.estructurasAccionesComerciales[i].cli_snombre.trim(),
                    nNumLocal: this.estructurasAccionesComerciales[i].pea_nnumlocal,
                    nRutCliente: this.estructurasAccionesComerciales[i].pea_nrutcliente,
                    nRutOperador: this.estructurasAccionesComerciales[i].pea_nrutoperador,
                    sCodCatNegocio: this.estructurasAccionesComerciales[i].pea_scodcatnegocio,
                    sCodFuerzaVenta: this.estructurasAccionesComerciales[i].pea_scodfuerzaventa,
                    sCodRelacionComercial: this.estructurasAccionesComerciales[i].pea_scodrelcomercial,
                    sCodTerritorio: this.estructurasAccionesComerciales[i].pea_scodterritorio,
                    sCodTipoSDescuento: this.nuevaAccionComercial ? this.forma.controls.tipo.value : this.forma.controls.codTipo.value,
                    sCodZona: this.estructurasAccionesComerciales[i].pea_scodzona
                };
                this.estructurasAccionesComercialesRequest.push(estructura);
            }
            this.requestGrabar.estructuraComercial = this.estructurasAccionesComercialesRequest;
            //prepara jerarquiaProducto del request
            this.articulosJerarquiaRequest = [];
            for (var i in this.articulosJerarquia) {
                var articulo = {
                    nIdAccionComercial: this.forma.controls.numero.value === '' ? 0 : this.forma.controls.numero.value,
                    nPorcDescto: Number(this.forma.controls.porcDescuento.value),
                    sCodFormato: this.articulosJerarquia[i].dac_scodformato,
                    sCodPais: 'CHL',
                    sCodTipoDescuento: this.nuevaAccionComercial ? this.forma.controls.tipo.value : this.forma.controls.codTipo.value,
                    sCodVariedad: this.articulosJerarquia[i].dac_scodvariedad
                };
                this.articulosJerarquiaRequest.push(articulo);
            }
            this.requestGrabar.jerarquiaProducto = this.articulosJerarquiaRequest;
            this.requestGrabar.lSalIdAccionComercial = this.forma.controls.numero.value === '' ? 0 : this.forma.controls.numero.value;
            console.log('this.requestGrabar', this.requestGrabar);
            console.log('estructurasAccionesComerciales', this.estructurasAccionesComerciales);
            console.log('articulosJerarquia', this.articulosJerarquia);
            this.cargador.show();
            this.administracionComercialService.creaAccionComercialDscto(this.requestGrabar)
                .subscribe(function (data) {
                _this.cargador.hide();
                console.log('data graba descuento', data);
                if (data.error.codError !== 0) {
                    swal('Atención', data.error.msjError, 'error');
                }
                else {
                    swal('Atención', "Se ha guardado la Acci\u00F3n Comercial [" + data.lIdAccionComercial + "]", 'success');
                    _this.router.navigate(['/administracionComercial/accionesComerciales']);
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    DetalleDescuentoComercialComponent.prototype.inhabilitarAccion = function () {
        var _this = this;
        swal({
            title: 'Atención',
            text: '¿Está seguro que desea inhabilitar la Acción Comercial?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#85b3cd',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            closeOnConfirm: true
        }, function () {
            _this.request = {
                nIdAccion: _this.forma.controls.numero.value,
                nRutUsuarioActualiza: _this.authService.getDatosUser().nrunusuario,
                sCodTipoDescuento: _this.forma.controls.codTipo.value
            };
            console.log('request inhabilitar', _this.request);
            _this.cargador.show();
            _this.administracionComercialService.inhabilitaAccionComercial(_this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                console.log(data);
                if (data.error.codError !== 0) {
                    setTimeout(function () {
                        swal('Atención', data.error.msjError, 'error');
                    }, 250);
                }
                else {
                    setTimeout(function () {
                        swal('Atención', "Se ha inhabilitado la Acci\u00F3n Comercial", 'success');
                    }, 250);
                    _this.router.navigate(['/administracionComercial/accionesComerciales']);
                }
            }, function (error) {
                _this.cargador.hide();
                setTimeout(function () {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }, 250);
            });
        });
    };
    DetalleDescuentoComercialComponent.prototype.setData = function (resData) {
        console.log(resData);
        if (resData != 0) {
            switch (this.origen) {
                case 'fuerzaVenta': {
                    this.forma.controls.codFuerzaVenta.setValue(resData.fvt_scodfuerzavta);
                    this.forma.controls.desFuerzaVenta.setValue(resData.fvt_sdesfuerzavta);
                    this.enUsoFzaVtas = true;
                    break;
                }
                case 'operador': {
                    this.forma.controls.codOperador.setValue(resData.ofv_nrutoperador);
                    this.forma.controls.descOperador.setValue(resData.ope_snombre);
                    this.enOperador = true;
                    break;
                }
                case 'zona': {
                    this.forma.controls.codFuerzaVenta.setValue(resData.fvt_scodfuerzavta);
                    this.forma.controls.codOperador.setValue(resData.ofv_nrutoperador);
                    this.forma.controls.codZona.setValue(resData.zon_scodzona);
                    this.forma.controls.descZona.setValue(resData.zon_sdeszona);
                    break;
                }
                case 'territorioAC': {
                    this.forma.controls.codFuerzaVenta.setValue(resData.fvt_scodfuerzavta);
                    this.forma.controls.codOperador.setValue(resData.ofv_nrutoperador);
                    this.forma.controls.codZona.setValue(resData.zon_scodzona);
                    this.forma.controls.codTerritorio.setValue(resData.ter_scodterritorio);
                    this.forma.controls.descTerritorio.setValue(resData.ter_sdesterritorio);
                    break;
                }
                case 'catNegocio': {
                    this.forma.controls.codCatNegocio.setValue(resData.can_scodcatnegocio);
                    this.forma.controls.desCatNegocio.setValue(resData.can_sdescatnegocio);
                    this.enCatNegocio = true;
                    break;
                }
                case 'cliente': {
                    this.forma.controls.rutCliente.setValue(resData.cli_nrutcliente);
                    this.forma.controls.dvRutCliente.setValue(resData.cli_sdigverificador);
                    this.forma.controls.nombreCliente.setValue(resData.cli_snombre);
                    this.enCliente = true;
                    break;
                }
                case 'clienteRC': {
                    this.forma.controls.codNumLocal.setValue(resData.rco_nnumlocal);
                    this.forma.controls.codClienteLocal.setValue(resData.rco_scodrelacioncomercial);
                    this.forma.controls.descClienteLocal.setValue(resData.rel_sdescripcionrelacioncomerc);
                    this.forma.controls.rutCliente.setValue(resData.cli_nrutcliente);
                    this.forma.controls.dvRutCliente.setValue(resData.cli_sdigverificador);
                    this.forma.controls.nombreCliente.setValue(resData.cli_snombre);
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    DetalleDescuentoComercialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalle-descuento-comercial',
            template: __webpack_require__(/*! ./detalleDescuentoComercial.component.html */ "./src/app/routes/administracionComercial/accionesComerciales/detalleDescuentoComercial/detalleDescuentoComercial.component.html"),
            styles: [__webpack_require__(/*! ./detalleDescuentoComercial.component.scss */ "./src/app/routes/administracionComercial/accionesComerciales/detalleDescuentoComercial/detalleDescuentoComercial.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _core_consultaService_administracionComercial_service__WEBPACK_IMPORTED_MODULE_4__["AdministracionComercialService"], _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_6__["ConsultasService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DetalleDescuentoComercialComponent);
    return DetalleDescuentoComercialComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionComercial/administracionComercial.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/administracionComercial.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AdministracionComercialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministracionComercialModule", function() { return AdministracionComercialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-table/ng2-table */ "./node_modules/ng2-table/ng2-table.js");
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _commonPopUp_commonPopUp_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../commonPopUp/commonPopUp.module */ "./src/app/routes/commonPopUp/commonPopUp.module.ts");
/* harmony import */ var _descuentosFuncionales_descuentosFuncionales_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./descuentosFuncionales/descuentosFuncionales.component */ "./src/app/routes/administracionComercial/descuentosFuncionales/descuentosFuncionales.component.ts");
/* harmony import */ var _accionesComerciales_accionesComerciales_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accionesComerciales/accionesComerciales.component */ "./src/app/routes/administracionComercial/accionesComerciales/accionesComerciales.component.ts");
/* harmony import */ var _accionesComerciales_detalleDescuentoComercial_detalleDescuentoComercial_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./accionesComerciales/detalleDescuentoComercial/detalleDescuentoComercial.component */ "./src/app/routes/administracionComercial/accionesComerciales/detalleDescuentoComercial/detalleDescuentoComercial.component.ts");
/* harmony import */ var _estructuraComercial_estructuraComercial_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./estructuraComercial/estructuraComercial.component */ "./src/app/routes/administracionComercial/estructuraComercial/estructuraComercial.component.ts");
/* harmony import */ var _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component */ "./src/app/routes/commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component.ts");
/* harmony import */ var _commonPopUp_categoriaNegocioPopUp_categoriaNegocioPopUp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../commonPopUp/categoriaNegocioPopUp/categoriaNegocioPopUp.component */ "./src/app/routes/commonPopUp/categoriaNegocioPopUp/categoriaNegocioPopUp.component.ts");
/* harmony import */ var _precios_precios_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./precios/precios.component */ "./src/app/routes/administracionComercial/precios/precios.component.ts");
/* harmony import */ var _commonPopUp_zonasPopUp_zonasPopUp_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../commonPopUp/zonasPopUp/zonasPopUp.component */ "./src/app/routes/commonPopUp/zonasPopUp/zonasPopUp.component.ts");
/* harmony import */ var _commonPopUp_territoriosPopUp_territoriosPopUp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../commonPopUp/territoriosPopUp/territoriosPopUp.component */ "./src/app/routes/commonPopUp/territoriosPopUp/territoriosPopUp.component.ts");
/* harmony import */ var _commonPopUp_clienteACPopUp_clienteACPopUp_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../commonPopUp/clienteACPopUp/clienteACPopUp.component */ "./src/app/routes/commonPopUp/clienteACPopUp/clienteACPopUp.component.ts");
/* harmony import */ var _commonPopUp_clienteRelComercialPopUp_clienteRelComercialPopUp_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../commonPopUp/clienteRelComercialPopUp/clienteRelComercialPopUp.component */ "./src/app/routes/commonPopUp/clienteRelComercialPopUp/clienteRelComercialPopUp.component.ts");
/* harmony import */ var _accionesComerciales_detalleBonificacionComercial_detalleBonificacionComercial_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./accionesComerciales/detalleBonificacionComercial/detalleBonificacionComercial.component */ "./src/app/routes/administracionComercial/accionesComerciales/detalleBonificacionComercial/detalleBonificacionComercial.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: 'accionesComerciales', component: _accionesComerciales_accionesComerciales_component__WEBPACK_IMPORTED_MODULE_8__["AccionesComercialesComponent"] },
    { path: 'descuentosFuncionales', component: _descuentosFuncionales_descuentosFuncionales_component__WEBPACK_IMPORTED_MODULE_7__["DescuentosFuncionalesComponent"] },
    { path: 'estructuraComercialOperador', component: _estructuraComercial_estructuraComercial_component__WEBPACK_IMPORTED_MODULE_10__["EstructuraComercialComponent"] },
    { path: 'precios', component: _precios_precios_component__WEBPACK_IMPORTED_MODULE_13__["PreciosComponent"] },
    { path: 'detalleDescuentoComercial', component: _accionesComerciales_detalleDescuentoComercial_detalleDescuentoComercial_component__WEBPACK_IMPORTED_MODULE_9__["DetalleDescuentoComercialComponent"] },
    { path: 'detalleBonificacionComercial', component: _accionesComerciales_detalleBonificacionComercial_detalleBonificacionComercial_component__WEBPACK_IMPORTED_MODULE_18__["DetalleBonificacionComercialComponent"] }
];
var AdministracionComercialModule = /** @class */ (function () {
    function AdministracionComercialModule() {
    }
    AdministracionComercialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_2__["Ng2TableModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _commonPopUp_commonPopUp_module__WEBPACK_IMPORTED_MODULE_6__["CommonPopUpModule"]
            ],
            declarations: [
                _descuentosFuncionales_descuentosFuncionales_component__WEBPACK_IMPORTED_MODULE_7__["DescuentosFuncionalesComponent"],
                _accionesComerciales_accionesComerciales_component__WEBPACK_IMPORTED_MODULE_8__["AccionesComercialesComponent"],
                _accionesComerciales_detalleDescuentoComercial_detalleDescuentoComercial_component__WEBPACK_IMPORTED_MODULE_9__["DetalleDescuentoComercialComponent"],
                _estructuraComercial_estructuraComercial_component__WEBPACK_IMPORTED_MODULE_10__["EstructuraComercialComponent"],
                _precios_precios_component__WEBPACK_IMPORTED_MODULE_13__["PreciosComponent"],
                _accionesComerciales_detalleBonificacionComercial_detalleBonificacionComercial_component__WEBPACK_IMPORTED_MODULE_18__["DetalleBonificacionComercialComponent"]
            ],
            entryComponents: [_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__["BuscarArticuloPopUpComponent"], _commonPopUp_categoriaNegocioPopUp_categoriaNegocioPopUp_component__WEBPACK_IMPORTED_MODULE_12__["CategoriaNegocioPopUpComponent"], _commonPopUp_zonasPopUp_zonasPopUp_component__WEBPACK_IMPORTED_MODULE_14__["ZonasPopUpComponent"],
                _commonPopUp_territoriosPopUp_territoriosPopUp_component__WEBPACK_IMPORTED_MODULE_15__["TerritoriosPopUpComponent"], _commonPopUp_clienteACPopUp_clienteACPopUp_component__WEBPACK_IMPORTED_MODULE_16__["ClienteACPopUpComponent"], _commonPopUp_clienteRelComercialPopUp_clienteRelComercialPopUp_component__WEBPACK_IMPORTED_MODULE_17__["ClienteRelComercialPopUpComponent"]]
        })
    ], AdministracionComercialModule);
    return AdministracionComercialModule;
}());



/***/ }),

/***/ "./src/app/routes/administracionComercial/descuentosFuncionales/descuentosFuncionales.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/descuentosFuncionales/descuentosFuncionales.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Descuentos Funcionales</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Línea</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input formControlName=\"codLinea\" name=\"codLinea\" class=\"form-control\" type=\"text\" (change)=\"validaLinea()\" maxlength=\"5\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"descLinea\" name=\"descLinea\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal('linea', 'Líneas')\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                          </button>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <label class=\"col-sm-1 control-label\">C&oacute;d. Art&iacute;culo</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"codArtFormato\" name=\"codArtFormato\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"codArtVariedad\" name=\"codArtVariedad\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Categor&iacute;a</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input formControlName=\"codCategoria\" name=\"codCategoria\" class=\"form-control\" type=\"text\" (change)=\"validaCategoria()\" maxlength=\"5\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"descCategoria\" name=\"descCategoria\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal('categoria', 'Categorías')\">\r\n                        <em class=\"icon-magnifier\"></em>\r\n                      </button>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <label class=\"col-sm-1 control-label\">C&oacute;d. Nestl&eacute;</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"codNestle\" name=\"codNestle\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Agrupaci&oacute;n</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input formControlName=\"codAgrupacion\" name=\"codAgrupacion\" class=\"form-control\" type=\"text\" (change)=\"validaAgrupacion()\" maxlength=\"5\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"descAgrupacion\" name=\"descAgrupacion\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal('agrupacion', 'Agrupaciones')\">\r\n                          <em class=\"icon-magnifier\"></em>\r\n                        </button>\r\n                        </div>\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Estado</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"estado\" name=\"estado\">\r\n                                <option *ngFor=\"let userEstado of estado\" [ngValue]=\"userEstado.codEstado\">{{userEstado.descEstado}}</option>\r\n                      </select>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"col-lg-12\">\r\n                    <label class=\"col-sm-1 control-label\">Prod. Base</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input formControlName=\"codProdBase\" name=\"codProdBase\" class=\"form-control\" type=\"text\" (change)=\"validaProdBase()\" maxlength=\"5\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"descProdBase\" name=\"descProdBase\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal('prodbase', 'Productos Base')\">\r\n                              <em class=\"icon-magnifier\"></em>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Cat. Negocio</label>\r\n                    <div class=\"col-sm-5 pl0\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input formControlName=\"codCatNegocio\" name=\"codCatNegocio\" class=\"form-control\" type=\"text\" (change)=\"validaCatNegocio()\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"descCatNegocio\" name=\"descCatNegocio\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCatNegocio()\">\r\n                              <em class=\"icon-magnifier\"></em>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n                <button class=\"btn btn-oval btn-sm\" (click)=\"buscar($event)\" type=\"button\">Buscar</button>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <hr>\r\n\r\n        <div class=\"panel-heading pl-0 mt-4\">\r\n            <h4 class=\"mv-0\">Coincidencias</h4>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 pl-0\">\r\n                <div class=\"col-sm-5 ph-0\">\r\n                    <div class=\"col-sm-3 pr-0\">\r\n                        <div class=\"radio c-radio\">\r\n                            <label class=\"text-bold fs-custom-11\">\r\n                            <input type=\"radio\" name=\"descFuncRadio\" value=\"global\" [disabled]='!actionBtns' (click)=\"radioGlobal()\" checked/><span class=\"fa fa-circle\"></span>Global</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-3 ph-0\">\r\n                        <div class=\"radio c-radio\">\r\n                            <label class=\"text-bold fs-custom-11\">\r\n                            <input type=\"radio\" name=\"descFuncRadio\" value=\"individual\" [disabled]='!actionBtns' (click)=\"radioIndividual()\" /><span class=\"fa fa-circle\"></span>Individual</label>\r\n                        </div>\r\n                    </div>\r\n                    <label class=\"col-sm-3 lh-40 ph-1 fs-custom-11 text-right\">Descuento Global</label>\r\n                    <div class=\"col-sm-2 ph-1 w-90\">\r\n                        <input appDecimalNumber name=\"desGlobal\" step=\"0.01\" [(ngModel)]=\"desGlobal\" class=\"form-control mt-1 ph-2 text-right\" type=\"number\" (focusout)=\"actualizarPorcentajeNuevo()\" [disabled]='verIndividual || !actionBtns' maxlength=\"9\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-5 pl-0\">\r\n                    <label class=\"col-sm-1 lh-40 ph-0 text-right fs-custom-11\">Desde</label>\r\n                    <div class=\"col-sm-4 pl-1 pr-1\">\r\n                        <input *ngIf=\"editFechaDesde\" class=\"form-control w-110 mt-1 ph-1\" name=\"fechaDesde\" type=\"date\" [(ngModel)]=\"fechaDesde\" (focusout)=\"actualizarFechaDesde()\" [disabled]='verIndividual || !actionBtns' />\r\n                        <span *ngIf=\"!editFechaDesde\" class=\"form-control w-110 mt-1 pad-3\" (click)=\"editarFechaDesde()\">{{fechaDesde | date :\"dd/MM/yyyy\"}}</span>\r\n                    </div>\r\n                    <div class=\"col-sm-3 pl-1\">\r\n                        <input class=\"form-control mt-1 pr-1\" name=\"horaDesde\" type=\"time\" [(ngModel)]=\"horaDesde\" (focusout)=\"actualizarHoraDesde()\" [disabled]='verIndividual || !actionBtns' />\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row mb-3\">\r\n            <div class=\"col-sm-1\">\r\n                <button class=\"btn btn-oval btn-sm\" type=\"button\" (click)=\"guardar()\" [disabled]='((!verGlobal && !verIndividual) || (!actionBtns))'>Guardar</button>\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n                <button class=\"btn btn-oval btn-sm\" [disabled]=\"!exportar\" (click)=\"generateExcel()\">Exportar</button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"table overflow-x-auto\">\r\n            <table class=\"table table-striped table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th colspan=\"7\"></th>\r\n                        <th colspan=\"4\">Valores Actuales</th>\r\n                        <th colspan=\"4\">Valores nuevos</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>LN</th>\r\n                        <th>CT</th>\r\n                        <th>AG</th>\r\n                        <th>PB</th>\r\n                        <th class=\"mw-80 text-center\">Cod. Art.</th>\r\n                        <th>Cod. Nestlé</th>\r\n                        <th>Descripción</th>\r\n                        <th>P. Base</th>\r\n                        <th>% Dsc.</th>\r\n                        <th>PNV</th>\r\n                        <th>Desde</th>\r\n                        <th>% Nuevo</th>\r\n                        <th colspan=\"2\">Desde</th>\r\n                        <th>$ Nuevo</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let articulo of articulos | paginate: {itemsPerPage: 7, currentPage: pageActual};\">\r\n                        <td>{{articulo.jli_scodlinea}}</td>\r\n                        <td>{{articulo.jca_scodcategoria}}</td>\r\n                        <td>{{articulo.jag_scodagrupacion}}</td>\r\n                        <td>{{articulo.jpb_scodproductobase}}</td>\r\n                        <td class=\"text-center\">{{articulo.art_scodformato}} - {{articulo.art_scodvariedad}}</td>\r\n                        <td>{{articulo.art_scodsap}}</td>\r\n                        <td>{{articulo.art_sdescripcion }}</td>\r\n                        <td class=\"text-right\">{{articulo.pra_nprecio | number:'':'es' }}</td>\r\n                        <td class=\"text-right\">{{articulo.def_nporcdescto > 100 ? 0 : articulo.def_nporcdescto}}</td>\r\n                        <td class=\"text-right\">{{ ( articulo.pra_nprecio * ((100 - (articulo.def_nporcdescto > 100 ? 0 : articulo.def_nporcdescto))/100) ) | number:'':'es' }}</td>\r\n                        <td>{{articulo.sfhoinicioactual | fecha }}</td>\r\n                        <td class=\"\" *ngIf=\"articulo.art_scodsap === editRowID\"><input appDecimalNumber type=\"number\" step=\"0.01\" [(ngModel)]=\"articulo.p_nuevo\" (focusout)=\"calcularPrecioNuevo(articulo)\" class=\"form-control w-90 mt-1 text-right\" maxlength=\"9\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"></td>\r\n                        <td class=\"text-right\" *ngIf=\"articulo.art_scodsap !== editRowID\"><span class=\"form-control w-90 mt-1 pad-3\">{{ articulo.p_nuevo | number:'.0-2':'es' }}</span></td>\r\n                        <td class=\"\" *ngIf=\"articulo.art_scodsap === editRowID\"><input type=\"date\" [(ngModel)]=\"articulo.fecha_actual\" (focusout)=\"validarFechaActual(articulo)\" class=\"form-control w-110 mt-1 pad-x-3\"></td>\r\n                        <td class=\"\" *ngIf=\"articulo.art_scodsap !== editRowID\"><span class=\"form-control w-110 mt-1 pad-3\">{{articulo.fecha_actual | date :\"dd/MM/yyyy\"}}</span></td>\r\n                        <td class=\"\" *ngIf=\"articulo.art_scodsap === editRowID\"><input type=\"time\" [(ngModel)]=\"articulo.sfhoinicionuevo\" (focusout)=\"validarHoraActual(articulo)\" class=\"form-control w-70 mt-1 pad-x-3\"></td>\r\n                        <td *ngIf=\"articulo.art_scodsap !== editRowID\"><span class=\"form-control w-70 mt-1 pad-3\">{{articulo.sfhoinicionuevo}}</span></td>\r\n                        <td class=\"\" *ngIf=\"articulo.art_scodsap === editRowID\"><input appNaturalNumber type=\"number\" [(ngModel)]=\"articulo.precio_nuevo\" (focusout)=\"calcularPorcentajeNuevo(articulo)\" class=\"form-control w-80 mt-1 text-right\"></td>\r\n                        <td class=\"text-right\" *ngIf=\"articulo.art_scodsap !== editRowID\"><span class=\"form-control w-80 mt-1 pad-3\">{{ articulo.precio_nuevo | number:'.0-0':'es' }}</span></td>\r\n                        <td *ngIf=\"verIndividual\">\r\n                            <span *ngIf=\"!articulo.verOK\" class=\"table-remove\">\r\n                                <a class=\"text\" (click)=\"edit(articulo)\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Editar\">\r\n                                    <em class=\"fa fa-edit\"></em>\r\n                                </a>\r\n                            </span>\r\n                            <span *ngIf=\"articulo.verOK\" class=\"table-remove\">\r\n                                <a class=\"text\"(click)=\"save(articulo)\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Guardar\">\r\n                                    <em class=\"fa fa-check\"></em>\r\n                                </a>\r\n                            </span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n        <div class=\"text-right pt-3\">\r\n            <pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionComercial/descuentosFuncionales/descuentosFuncionales.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/descuentosFuncionales/descuentosFuncionales.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pad-3{padding-top:3px}.pad-x-3{padding-left:3px;padding-right:3px}\n"

/***/ }),

/***/ "./src/app/routes/administracionComercial/descuentosFuncionales/descuentosFuncionales.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/descuentosFuncionales/descuentosFuncionales.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DescuentosFuncionalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescuentosFuncionalesComponent", function() { return DescuentosFuncionalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component */ "./src/app/routes/commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component.ts");
/* harmony import */ var _commonPopUp_categoriaNegocioPopUp_categoriaNegocioPopUp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../commonPopUp/categoriaNegocioPopUp/categoriaNegocioPopUp.component */ "./src/app/routes/commonPopUp/categoriaNegocioPopUp/categoriaNegocioPopUp.component.ts");
/* harmony import */ var _core_consultaService_administracionComercial_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/consultaService/administracionComercial.service */ "./src/app/core/consultaService/administracionComercial.service.ts");
/* harmony import */ var _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/consultaService/articulo.service */ "./src/app/core/consultaService/articulo.service.ts");
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
var DescuentosFuncionalesComponent = /** @class */ (function () {
    function DescuentosFuncionalesComponent(fb, http, excelService, modalService, consultasService, administracionComercialService, cargador, utilService, authService, articuloService) {
        this.http = http;
        this.excelService = excelService;
        this.modalService = modalService;
        this.consultasService = consultasService;
        this.administracionComercialService = administracionComercialService;
        this.cargador = cargador;
        this.utilService = utilService;
        this.authService = authService;
        this.articuloService = articuloService;
        this.pageActual = 1;
        this.request = {};
        this.requestGuardar = [];
        this.articulos = [];
        this.showEditTable = false;
        this.estado = [
            {
                codEstado: null,
                descEstado: '(Todos)'
            },
            {
                codEstado: 'NOVIG',
                descEstado: 'Inactivo'
            },
            {
                codEstado: 'VIGEN',
                descEstado: 'Activo'
            }
        ];
        this.composicion = [
            'Todos',
            'Inactivo'
        ];
        this.origen = '';
        this.verIndividual = false;
        this.verGlobal = true;
        this.actionBtns = false;
        this.editFechaDesde = false;
        this.datos = [];
        this.exportar = false;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            codLinea: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descLinea: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            codArtFormato: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            codArtVariedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            codCategoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descCategoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            codNestle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            codAgrupacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descAgrupacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            codProdBase: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descProdBase: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            codCatNegocio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descCatNegocio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    DescuentosFuncionalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.forma);
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5___default.a);
        this.fechaActual = new Date();
        this.fechaDesde = this.utilService.dateToStringFormat(this.fechaActual);
        console.log('fecha format', this.fechaActual.getFullYear() + "-" + (this.fechaActual.getMonth() + 1) + "-" + this.fechaActual.getDate());
        console.log('fecha', this.fechaActual);
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    DescuentosFuncionalesComponent.prototype.ngOnDestroy = function () {
        if (this.subData != undefined) {
            this.subData.unsubscribe();
        }
    };
    DescuentosFuncionalesComponent.prototype.openModal = function (origen, titulo) {
        this.origen = origen;
        var initialState = {
            titulo: titulo,
            origen: origen
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DescuentosFuncionalesComponent.prototype.openModalCatNegocio = function () {
        this.origen = 'catNegocio';
        var initialState = {
            titulo: 'Categorías de Negocio',
            origen: 'catNegocio'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_categoriaNegocioPopUp_categoriaNegocioPopUp_component__WEBPACK_IMPORTED_MODULE_12__["CategoriaNegocioPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DescuentosFuncionalesComponent.prototype.validaLinea = function () {
        var _this = this;
        if (this.forma.controls.codLinea.value === '') {
            this.forma.controls.codLinea.setValue('');
            this.forma.controls.descLinea.setValue('');
            this.forma.controls.codCategoria.setValue('');
            this.forma.controls.descCategoria.setValue('');
            this.forma.controls.codAgrupacion.setValue('');
            this.forma.controls.descAgrupacion.setValue('');
            this.forma.controls.codProdBase.setValue('');
            this.forma.controls.descProdBase.setValue('');
        }
        else {
            this.request.scodestado = 'VIGEN';
            this.request.scodlinea = this.forma.controls.codLinea.value;
            this.cargador.show();
            this.articuloService.getLineas(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                if (data) {
                    if (data.error.codError != 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.articulo;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.codLinea.setValue(_this.datos[0].jli_scodlinea);
                            _this.forma.controls.descLinea.setValue(_this.datos[0].jli_sdeslinea);
                            _this.forma.controls.codCategoria.setValue('');
                            _this.forma.controls.descCategoria.setValue('');
                            _this.forma.controls.codAgrupacion.setValue('');
                            _this.forma.controls.descAgrupacion.setValue('');
                            _this.forma.controls.codProdBase.setValue('');
                            _this.forma.controls.descProdBase.setValue('');
                        }
                        else {
                            _this.forma.controls.codLinea.setValue('');
                            _this.forma.controls.descLinea.setValue('');
                            _this.forma.controls.codCategoria.setValue('');
                            _this.forma.controls.descCategoria.setValue('');
                            _this.forma.controls.codAgrupacion.setValue('');
                            _this.forma.controls.descAgrupacion.setValue('');
                            _this.forma.controls.codProdBase.setValue('');
                            _this.forma.controls.descProdBase.setValue('');
                            swal('Atención', 'No Existe Línea', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    DescuentosFuncionalesComponent.prototype.validaCategoria = function () {
        var _this = this;
        if (this.forma.controls.codCategoria.value === '') {
            this.forma.controls.codLinea.setValue('');
            this.forma.controls.descLinea.setValue('');
            this.forma.controls.codCategoria.setValue('');
            this.forma.controls.descCategoria.setValue('');
            this.forma.controls.codAgrupacion.setValue('');
            this.forma.controls.descAgrupacion.setValue('');
            this.forma.controls.codProdBase.setValue('');
            this.forma.controls.descProdBase.setValue('');
        }
        else {
            this.request.scodestado = 'VIGEN';
            this.request.scodcategoria = this.forma.controls.codCategoria.value;
            this.cargador.show();
            this.articuloService.getCategorias(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                if (data) {
                    if (data.error.codError != 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.articulo;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.codLinea.setValue(_this.datos[0].jli_scodlinea);
                            _this.forma.controls.descLinea.setValue(_this.datos[0].jli_sdeslinea);
                            _this.forma.controls.codCategoria.setValue(_this.datos[0].jca_scodcategoria);
                            _this.forma.controls.descCategoria.setValue(_this.datos[0].jca_sdescategoria);
                            _this.forma.controls.codAgrupacion.setValue('');
                            _this.forma.controls.descAgrupacion.setValue('');
                            _this.forma.controls.codProdBase.setValue('');
                            _this.forma.controls.descProdBase.setValue('');
                        }
                        else {
                            _this.forma.controls.codLinea.setValue('');
                            _this.forma.controls.descLinea.setValue('');
                            _this.forma.controls.codCategoria.setValue('');
                            _this.forma.controls.descCategoria.setValue('');
                            _this.forma.controls.codAgrupacion.setValue('');
                            _this.forma.controls.descAgrupacion.setValue('');
                            _this.forma.controls.codProdBase.setValue('');
                            _this.forma.controls.descProdBase.setValue('');
                            swal('Atención', 'No Existe Categoría', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    DescuentosFuncionalesComponent.prototype.validaAgrupacion = function () {
        var _this = this;
        if (this.forma.controls.codAgrupacion.value === '') {
            this.forma.controls.codLinea.setValue('');
            this.forma.controls.descLinea.setValue('');
            this.forma.controls.codCategoria.setValue('');
            this.forma.controls.descCategoria.setValue('');
            this.forma.controls.codAgrupacion.setValue('');
            this.forma.controls.descAgrupacion.setValue('');
            this.forma.controls.codProdBase.setValue('');
            this.forma.controls.descProdBase.setValue('');
        }
        else {
            this.request.scodestado = 'VIGEN';
            this.request.scodagrupacion = this.forma.controls.codAgrupacion.value;
            this.cargador.show();
            this.articuloService.getAgrupacion(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                if (data) {
                    if (data.error.codError != 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.articulo;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.codLinea.setValue(_this.datos[0].jli_scodlinea);
                            _this.forma.controls.descLinea.setValue(_this.datos[0].jli_sdeslinea);
                            _this.forma.controls.codCategoria.setValue(_this.datos[0].jca_scodcategoria);
                            _this.forma.controls.descCategoria.setValue(_this.datos[0].jca_sdescategoria);
                            _this.forma.controls.codAgrupacion.setValue(_this.datos[0].jag_scodagrupacion);
                            _this.forma.controls.descAgrupacion.setValue(_this.datos[0].jag_sdesagrupacion);
                            _this.forma.controls.codProdBase.setValue('');
                            _this.forma.controls.descProdBase.setValue('');
                        }
                        else {
                            _this.forma.controls.codLinea.setValue('');
                            _this.forma.controls.descLinea.setValue('');
                            _this.forma.controls.codCategoria.setValue('');
                            _this.forma.controls.descCategoria.setValue('');
                            _this.forma.controls.codAgrupacion.setValue('');
                            _this.forma.controls.descAgrupacion.setValue('');
                            _this.forma.controls.codProdBase.setValue('');
                            _this.forma.controls.descProdBase.setValue('');
                            swal('Atención', 'No Existe Agrupación', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    DescuentosFuncionalesComponent.prototype.validaProdBase = function () {
        var _this = this;
        if (this.forma.controls.codProdBase.value === '') {
            this.forma.controls.codLinea.setValue('');
            this.forma.controls.descLinea.setValue('');
            this.forma.controls.codCategoria.setValue('');
            this.forma.controls.descCategoria.setValue('');
            this.forma.controls.codAgrupacion.setValue('');
            this.forma.controls.descAgrupacion.setValue('');
            this.forma.controls.codProdBase.setValue('');
            this.forma.controls.descProdBase.setValue('');
        }
        else {
            this.request.scodestado = 'VIGEN';
            this.request.scodproductobase = this.forma.controls.codProdBase.value;
            this.cargador.show();
            this.articuloService.getProdBase(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                console.log('data', data);
                if (data) {
                    if (data.error.codError != 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.articulo;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.codLinea.setValue(_this.datos[0].jli_scodlinea);
                            _this.forma.controls.descLinea.setValue(_this.datos[0].jli_sdeslinea);
                            _this.forma.controls.codCategoria.setValue(_this.datos[0].jca_scodcategoria);
                            _this.forma.controls.descCategoria.setValue(_this.datos[0].jca_sdescategoria);
                            _this.forma.controls.codAgrupacion.setValue(_this.datos[0].jag_scodagrupacion);
                            _this.forma.controls.descAgrupacion.setValue(_this.datos[0].jag_sdesagrupacion);
                            _this.forma.controls.codProdBase.setValue(_this.datos[0].jpb_scodproductobase);
                            _this.forma.controls.descProdBase.setValue(_this.datos[0].jpb_sdesproductobase);
                        }
                        else {
                            _this.forma.controls.codLinea.setValue('');
                            _this.forma.controls.descLinea.setValue('');
                            _this.forma.controls.codCategoria.setValue('');
                            _this.forma.controls.descCategoria.setValue('');
                            _this.forma.controls.codAgrupacion.setValue('');
                            _this.forma.controls.descAgrupacion.setValue('');
                            _this.forma.controls.codProdBase.setValue('');
                            _this.forma.controls.descProdBase.setValue('');
                            swal('Atención', 'No Existe Producto Base', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    DescuentosFuncionalesComponent.prototype.validaCatNegocio = function () {
        var _this = this;
        if (this.forma.controls.codCatNegocio.value === '') {
            this.forma.controls.codCatNegocio.setValue('');
            this.forma.controls.descCatNegocio.setValue('');
        }
        else {
            this.cargador.show();
            this.administracionComercialService.getCategoriaNegocio()
                .subscribe(function (data) {
                _this.cargador.hide();
                console.log(data);
                if (data) {
                    var catNegocioExiste = false;
                    if (data.error.codError != 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        for (var i in data.categoriaNegocio) {
                            if (data.categoriaNegocio[i].can_scodcatnegocio === _this.forma.controls.codCatNegocio.value) {
                                _this.forma.controls.descCatNegocio.setValue(data.categoriaNegocio[i].can_sdescatnegocio);
                                catNegocioExiste = true;
                                break;
                            }
                        }
                        if (!catNegocioExiste) {
                            _this.forma.controls.codCatNegocio.setValue('');
                            _this.forma.controls.descCatNegocio.setValue('');
                            swal('Atención', 'No Existe Categoría', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    DescuentosFuncionalesComponent.prototype.setData = function (resData) {
        console.log('resPrueba en setLinea', resData);
        console.log('origen', this.origen);
        if (resData != 0) {
            switch (this.origen) {
                case 'linea': {
                    this.forma.controls.codLinea.setValue(resData.jli_scodlinea);
                    this.forma.controls.descLinea.setValue(resData.jli_sdeslinea);
                    this.forma.controls.codCategoria.setValue('');
                    this.forma.controls.descCategoria.setValue('');
                    this.forma.controls.codAgrupacion.setValue('');
                    this.forma.controls.descAgrupacion.setValue('');
                    this.forma.controls.codProdBase.setValue('');
                    this.forma.controls.descProdBase.setValue('');
                    break;
                }
                case 'categoria': {
                    this.forma.controls.codLinea.setValue(resData.jli_scodlinea);
                    this.forma.controls.descLinea.setValue(resData.jli_sdeslinea);
                    this.forma.controls.codCategoria.setValue(resData.jca_scodcategoria);
                    this.forma.controls.descCategoria.setValue(resData.jca_sdescategoria);
                    this.forma.controls.codAgrupacion.setValue('');
                    this.forma.controls.descAgrupacion.setValue('');
                    this.forma.controls.codProdBase.setValue('');
                    this.forma.controls.descProdBase.setValue('');
                    break;
                }
                case 'agrupacion': {
                    this.forma.controls.codLinea.setValue(resData.jli_scodlinea);
                    this.forma.controls.descLinea.setValue(resData.jli_sdeslinea);
                    this.forma.controls.codCategoria.setValue(resData.jca_scodcategoria);
                    this.forma.controls.descCategoria.setValue(resData.jca_sdescategoria);
                    this.forma.controls.codAgrupacion.setValue(resData.jag_scodagrupacion);
                    this.forma.controls.descAgrupacion.setValue(resData.jag_sdesagrupacion);
                    this.forma.controls.codProdBase.setValue('');
                    this.forma.controls.descProdBase.setValue('');
                    break;
                }
                case 'prodbase': {
                    this.forma.controls.codLinea.setValue(resData.jli_scodlinea);
                    this.forma.controls.descLinea.setValue(resData.jli_sdeslinea);
                    this.forma.controls.codCategoria.setValue(resData.jca_scodcategoria);
                    this.forma.controls.descCategoria.setValue(resData.jca_sdescategoria);
                    this.forma.controls.codAgrupacion.setValue(resData.jag_scodagrupacion);
                    this.forma.controls.descAgrupacion.setValue(resData.jag_sdesagrupacion);
                    this.forma.controls.codProdBase.setValue(resData.jpb_scodproductobase);
                    this.forma.controls.descProdBase.setValue(resData.jpb_sdesproductobase);
                    break;
                }
                case 'catNegocio': {
                    this.forma.controls.codCatNegocio.setValue(resData.can_scodcatnegocio);
                    this.forma.controls.descCatNegocio.setValue(resData.can_sdescatnegocio);
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    DescuentosFuncionalesComponent.prototype.buscar = function ($event) {
        var _this = this;
        this.categoriaNegocio = '';
        this.articulos = [];
        this.exportar = false;
        if (this.forma.controls.codCatNegocio.value === null || this.forma.controls.codCatNegocio.value === "") {
            swal('Atención', 'Debe ingresar una Categoría de Negocio', 'info');
        }
        else {
            this.request.sCodAgrupacion = this.forma.controls.codAgrupacion.value;
            this.request.sCodCategoria = this.forma.controls.codCategoria.value;
            this.request.sCodCategoriaNegocio = this.forma.controls.codCatNegocio.value;
            this.request.sCodEstado = this.forma.controls.estado.value;
            this.request.sCodFormato = this.forma.controls.codArtFormato.value;
            this.request.sCodLinea = this.forma.controls.codLinea.value;
            this.request.sCodProductobase = this.forma.controls.codProdBase.value;
            this.request.sCodSap = this.forma.controls.codNestle.value;
            this.request.sCodVariedad = this.forma.controls.codArtVariedad.value;
            console.log('request descuentos func', this.request);
            this.categoriaNegocio = this.forma.controls.codCatNegocio.value;
            console.log('categoria negocio', this.categoriaNegocio);
            this.cargador.show();
            this.administracionComercialService.getArticulosDescuentosFuncionales(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                console.log('data', data.articulo);
                if (data.articulo) {
                    console.log('existe data');
                    if (data.articulo.length == 0 && data.error.codError == 0) {
                        swal('Atención', 'No se encontraron resultados', 'info');
                    }
                    else {
                        _this.cargarDataTable(data.articulo);
                        _this.actionBtns = true;
                        _this.exportar = true;
                    }
                }
                if (data.error.codError != 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    DescuentosFuncionalesComponent.prototype.radioGlobal = function () {
        console.log('Global');
        this.verIndividual = false;
        this.verGlobal = true;
        if (this.articulos.length > 0) {
            for (var i in this.articulos) {
                this.articulos[i].verOK = false;
                this.editRowID = null;
            }
        }
    };
    DescuentosFuncionalesComponent.prototype.radioIndividual = function () {
        console.log('Individual');
        this.verIndividual = true;
        this.verGlobal = false;
    };
    DescuentosFuncionalesComponent.prototype.edit = function (articulo) {
        this.editRowID = articulo.art_scodsap;
        articulo.verOK = true;
    };
    DescuentosFuncionalesComponent.prototype.save = function (articulo) {
        this.editRowID = null;
        articulo.verOK = false;
    };
    DescuentosFuncionalesComponent.prototype.calcularPrecioNuevo = function (articulo) {
        console.log(articulo.p_nuevo);
        if (articulo.p_nuevo > 100) {
            swal('Atención', 'Descuento no puede ser mayor al 100%', 'warning');
            articulo.p_nuevo = 0;
        }
        else {
            if (articulo.p_nuevo === null) {
                articulo.p_nuevo = 0;
            }
            articulo.precio_nuevo = Math.round(articulo.pra_nprecio * ((100 - articulo.p_nuevo) / 100));
        }
    };
    DescuentosFuncionalesComponent.prototype.calcularPorcentajeNuevo = function (articulo) {
        articulo.p_nuevo = (articulo.pra_nprecio === 0 ? 0 : (100 - ((articulo.precio_nuevo * 100) / articulo.pra_nprecio))).toFixed(2);
    };
    DescuentosFuncionalesComponent.prototype.validarFechaActual = function (articulo) {
        var fechaString = this.utilService.dateToStringFormat(this.fechaActual);
        if (articulo.fecha_actual === '') {
            articulo.fecha_actual = fechaString;
        }
        if (articulo.fecha_actual.length > 10) {
            articulo.fecha_actual = fechaString;
        }
    };
    DescuentosFuncionalesComponent.prototype.validarHoraActual = function (articulo) {
        console.log('articulo.sfhoinicionuevo', articulo.sfhoinicionuevo);
        if (articulo.sfhoinicionuevo === '') {
            articulo.sfhoinicionuevo = '00:00';
        }
    };
    DescuentosFuncionalesComponent.prototype.cargarDataTable = function (data) {
        console.log('data', data);
        this.articulos = [];
        for (var i in data) {
            if (data[i].sfhoinicionuevo === "") {
                this.shorainicionuevo = "00:00";
                this.sfechainicionuevo = this.utilService.dateToStringFormat(this.fechaActual);
            }
            else {
                this.shorainicionuevo = this.utilService.timeStringServiceToStringFormat(data[i].sfhoinicionuevo);
                this.sfechainicionuevo = this.utilService.dateStringServiceToStringFormat(data[i].sfhoinicionuevo);
            }
            var articulo = {
                art_scodestado: data[i].art_scodestado,
                art_scodformato: data[i].art_scodformato,
                art_scodsap: data[i].art_scodsap,
                art_scodvariedad: data[i].art_scodvariedad,
                art_sdescripcion: data[i].art_sdescripcion,
                art_sdesestado: data[i].art_sdesestado,
                def_nporcdescto: data[i].def_nporcdescto,
                jag_scodagrupacion: data[i].jag_scodagrupacion,
                jca_scodcategoria: data[i].jca_scodcategoria,
                jli_scodlinea: data[i].jli_scodlinea,
                jpb_scodproductobase: data[i].jpb_scodproductobase,
                p_nuevo: data[i].p_nuevo,
                pra_nprecio: data[i].pra_nprecio,
                sfhoinicioactual: data[i].sfhoinicioactual,
                sfhoinicionuevo: this.shorainicionuevo,
                fecha_actual: this.sfechainicionuevo,
                precio_nuevo: data[i].pra_nprecio * ((100 - data[i].p_nuevo) / 100),
                verOK: false,
                categoriaNegocio: this.categoriaNegocio
            };
            this.articulos.push(articulo);
        }
        console.log('articulos', this.articulos);
    };
    DescuentosFuncionalesComponent.prototype.actualizarPorcentajeNuevo = function () {
        if (this.verGlobal) {
            for (var i in this.articulos) {
                this.articulos[i].p_nuevo = this.desGlobal;
                this.articulos[i].precio_nuevo = Math.round(this.articulos[i].pra_nprecio * ((100 - this.desGlobal) / 100));
            }
        }
    };
    DescuentosFuncionalesComponent.prototype.editarFechaDesde = function () {
        this.editFechaDesde = true;
    };
    DescuentosFuncionalesComponent.prototype.actualizarFechaDesde = function () {
        console.log('fecha desde', this.fechaDesde);
        console.log('tipo dato', typeof (this.fechaDesde));
        if (this.verGlobal) {
            if (this.fechaDesde !== undefined && typeof (this.fechaDesde) !== 'object') {
                var dateValid = this.utilService.DateValidator(this.fechaDesde);
                console.log('dateValid', dateValid);
                if (!dateValid) {
                    this.fechaDesde = this.utilService.dateToStringFormat(this.fechaActual);
                }
                for (var i in this.articulos) {
                    this.articulos[i].fecha_actual = this.fechaDesde;
                }
            }
            this.editFechaDesde = false;
        }
    };
    DescuentosFuncionalesComponent.prototype.actualizarHoraDesde = function () {
        console.log('hora desde', this.horaDesde);
        console.log('tipo dato hora', typeof (this.horaDesde));
        if (this.verGlobal) {
            if (this.horaDesde !== undefined) {
                for (var i in this.articulos) {
                    this.articulos[i].sfhoinicionuevo = this.horaDesde;
                }
            }
        }
    };
    DescuentosFuncionalesComponent.prototype.guardar = function () {
        var _this = this;
        var errorFecha = false;
        for (var i in this.articulos) {
            this.articulos[i].verOK = false;
            this.editRowID = null;
            var hh = parseInt(this.articulos[i].sfhoinicionuevo.substring(0, 2));
            var mm = parseInt(this.articulos[i].sfhoinicionuevo.substring(3, 5));
            console.log(hh, mm);
            if (isNaN(hh) || isNaN(mm)) {
                errorFecha = true;
                break;
            }
            console.log('this.articulos[i].fecha_actual typeof', typeof (this.articulos[i].fecha_actual));
            if (typeof (this.articulos[i].fecha_actual) === 'object') {
                this.articulos[i].fecha_actual = this.utilService.dateToStringFormat(this.articulos[i].fecha_actual);
            }
            if ((this.utilService.formatStringToDate(this.articulos[i].fecha_actual).getFullYear()) < (this.fechaActual.getFullYear())) {
                errorFecha = true;
                break;
            }
            else if (((this.utilService.formatStringToDate(this.articulos[i].fecha_actual).getMonth()) < (this.fechaActual.getMonth())) && ((this.utilService.formatStringToDate(this.articulos[i].fecha_actual).getFullYear()) <= (this.fechaActual.getFullYear()))) {
                errorFecha = true;
                break;
            }
            else if (((this.utilService.formatStringToDate(this.articulos[i].fecha_actual).getDate()) < (this.fechaActual.getDate())) && ((this.utilService.formatStringToDate(this.articulos[i].fecha_actual).getMonth()) <= (this.fechaActual.getMonth())) && ((this.utilService.formatStringToDate(this.articulos[i].fecha_actual).getFullYear()) <= (this.fechaActual.getFullYear()))) {
                errorFecha = true;
                break;
            }
            else if ((hh < this.fechaActual.getHours()) && ((this.utilService.formatStringToDate(this.articulos[i].fecha_actual).getDate()) <= (this.fechaActual.getDate())) && ((this.utilService.formatStringToDate(this.articulos[i].fecha_actual).getMonth()) <= (this.fechaActual.getMonth())) && ((this.utilService.formatStringToDate(this.articulos[i].fecha_actual).getFullYear()) <= (this.fechaActual.getFullYear()))) {
                errorFecha = true;
                break;
            }
            else if ((mm < this.fechaActual.getMinutes()) && (hh <= this.fechaActual.getHours()) && ((this.utilService.formatStringToDate(this.articulos[i].fecha_actual).getDate()) <= (this.fechaActual.getDate())) && ((this.utilService.formatStringToDate(this.articulos[i].fecha_actual).getMonth()) <= (this.fechaActual.getMonth())) && ((this.utilService.formatStringToDate(this.articulos[i].fecha_actual).getFullYear()) <= (this.fechaActual.getFullYear()))) {
                errorFecha = true;
                break;
            }
        }
        console.log('errorFecha', errorFecha);
        if (errorFecha) {
            swal('Atención', 'Una o más fechas con hora son inferiores a la Fecha y Hora actual', 'info');
        }
        else {
            //grabar datos
            this.cargador.show();
            this.requestGuardar = [];
            for (var i in this.articulos) {
                console.log(this.articulos[i]);
                var articulo = {
                    "sCodFormato": this.articulos[i].art_scodformato,
                    "sCodVariedad": this.articulos[i].art_scodvariedad,
                    "sCodCatNegocio": this.articulos[i].categoriaNegocio,
                    "sFhoInicioVigencia": (this.articulos[i].fecha_actual).replace(/-/g, '') + (this.articulos[i].sfhoinicionuevo).replace(':', ''),
                    "nporcentaje": this.articulos[i].p_nuevo,
                    "nRunUsuario": this.authService.getDatosUser().nrunusuario
                };
                this.requestGuardar.push(articulo);
            }
            console.log('requets guardar', JSON.stringify(this.requestGuardar));
            this.administracionComercialService.guardaDescuentoFuncional(this.requestGuardar)
                .subscribe(function (data) {
                _this.cargador.hide();
                console.log('respuesta graba desc funcional', data);
                if (data.error.codError != 0) {
                    swal('Atención', data.error.msjError, 'error');
                }
                else {
                    swal('Atención', 'La operación se realizó correctamente', 'success');
                    _this.fechaDesde = _this.utilService.dateToStringFormat(_this.fechaActual);
                    _this.desGlobal = null;
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    DescuentosFuncionalesComponent.prototype.generateExcel = function () {
        var headerExcel = [
            "Línea", "Categoría", "Agrupación", "Prod. Base", "Cod. Articulo", "Cód. Nestlé", "Descripción", "Precio Base Actual", "% Descuento Actual",
            "PNV Actual", "Desde"
        ];
        var dataExcel = [];
        for (var i in this.articulos) {
            var articulo = [
                this.articulos[i].jli_scodlinea,
                this.articulos[i].jca_scodcategoria,
                this.articulos[i].jag_scodagrupacion,
                this.articulos[i].jpb_scodproductobase,
                this.articulos[i].art_scodformato + " - " + this.articulos[i].art_scodvariedad,
                this.articulos[i].art_scodsap,
                this.articulos[i].art_sdescripcion,
                this.articulos[i].pra_nprecio,
                this.articulos[i].def_nporcdescto + " %",
                this.articulos[i].pra_nprecio * ((100 - this.articulos[i].def_nporcdescto) / 100),
                this.articulos[i].sfhoinicioactual === '' ? '' : this.utilService.dateStringServiceToLocalStringFormat(this.articulos[i].sfhoinicioactual)
            ];
            dataExcel.push(articulo);
        }
        var fechaExcel = this.utilService.dateToLocalStringFormat(this.fechaActual);
        var titulo = "Articulos_" + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        this.excelService.generateExcel(titulo, headerExcel, dataExcel, fechaExcel);
        swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
        this.exportar = false;
    };
    DescuentosFuncionalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-descuentos-funcionales',
            template: __webpack_require__(/*! ./descuentosFuncionales.component.html */ "./src/app/routes/administracionComercial/descuentosFuncionales/descuentosFuncionales.component.html"),
            styles: [__webpack_require__(/*! ./descuentosFuncionales.component.scss */ "./src/app/routes/administracionComercial/descuentosFuncionales/descuentosFuncionales.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_8__["ConsultasService"], _core_consultaService_administracionComercial_service__WEBPACK_IMPORTED_MODULE_13__["AdministracionComercialService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
            _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_14__["ArticuloService"]])
    ], DescuentosFuncionalesComponent);
    return DescuentosFuncionalesComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionComercial/estructuraComercial/estructuraComercial.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/estructuraComercial/estructuraComercial.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Estructura Comercial</h4>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label ph-0\">Fuerza de Venta</label>\r\n                    <div class=\"col-sm-4\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"fuerzaVenta\" name=\"fuerzaVenta\" (change)=\"cargarZonasTerritorios()\">\r\n                            <option *ngFor=\"let usertipoFuerzaVenta of tipoFuerzaVenta\" [ngValue]=\"usertipoFuerzaVenta.ofv_scodfuerzavta\">{{usertipoFuerzaVenta.fvt_sdesfuerzavta}}</option>\r\n                      </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <form class=\"panel\">\r\n                    <tabset>\r\n                        <tab>\r\n                            <ng-template tabHeading>Zona</ng-template>\r\n                            <div>\r\n                                <div class=\"panel-heading ph-0\">\r\n                                    <h4>Zonas Vigentes</h4>\r\n                                </div>\r\n\r\n                                <div class=\"dash-table-container\">\r\n                                    <div class=\"table-add float-right\">\r\n                                        <a class=\"text\" data-toggle=\"tooltip\" title=\"Agregar Zona\" (click)=\"openAgregarZona()\">\r\n                                            <strong><em class=\"fa fa-plus\"></em></strong>\r\n                                        </a>\r\n                                    </div>\r\n\r\n                                    <table class=\"table table-hover\">\r\n                                        <thead>\r\n                                            <th>C&oacute;digo Zona</th>\r\n                                            <th>Descripci&oacute;n</th>\r\n                                            <th>Fecha Creación</th>\r\n                                            <th>Estado</th>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let zona of zonaList; let codigo = index\">\r\n                                                <td>\r\n                                                    <span>{{zona.zon_scodzona}}</span>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <span>{{zona.zon_sdeszona}}</span>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <span>{{zona.zon_dfhocreacion | fecha }}</span>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <span>{{zona.zon_scodestado | estadoVigencia}}</span>\r\n                                                </td>\r\n                                                <td class=\"text-center\">\r\n                                                    <div class=\"table-edit\">\r\n                                                        <a class=\"text\" data-toggle=\"tooltip\" title=\"Editar Zona\" (click)=\"openEditarZona(zona)\">\r\n                                                            <em class=\"fa fa-edit\"></em>\r\n                                                        </a>\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </tab>\r\n                        <tab>\r\n                            <ng-template tabHeading>Territorio</ng-template>\r\n                            <div>\r\n                                <div class=\"panel-heading ph-0\">\r\n                                    <h4>Territorios Vigentes</h4>\r\n                                </div>\r\n\r\n                                <div class=\"dash-table-container\">\r\n                                    <div class=\"table-add float-right\">\r\n                                        <a class=\"text\" data-toggle=\"tooltip\" title=\"Agregar Territorio\" (click)='openAgregarTerritorio()'>\r\n                                            <strong><em class=\"fa fa-plus\"></em></strong>\r\n                                        </a>\r\n                                    </div>\r\n\r\n                                    <table class=\"table table-hover\">\r\n                                        <thead>\r\n                                            <th>C&oacute;digo Zona</th>\r\n                                            <th>Descripci&oacute;n</th>\r\n                                            <th>C&oacute;digo Territorio</th>\r\n                                            <th>Descripci&oacute;n</th>\r\n                                            <th>Fecha Creación</th>\r\n                                            <th>Estado</th>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let territorio of territorioList; let codigo = index\">\r\n                                                <td>\r\n                                                    <span>{{territorio.ter_scodzona}}</span>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <span>{{territorio.zon_sdeszona}}</span>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <span>{{territorio.ter_scodterritorio}}</span>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <span>{{territorio.ter_sdesterritorio}}</span>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <span>{{territorio.ter_dfhocreacion | fecha}}</span>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <span>{{territorio.ter_scodestado | estadoVigencia}}</span>\r\n                                                </td>\r\n                                                <td class=\"text-center\">\r\n                                                    <div class=\"table-edit\">\r\n                                                        <a class=\"text\" data-toggle=\"tooltip\" title=\"Editar Territorio\" (click)=\"openEditarTerritorio(territorio)\">\r\n                                                            <em class=\"fa fa-edit\"></em>\r\n                                                        </a>\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </tab>\r\n                    </tabset>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionComercial/estructuraComercial/estructuraComercial.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/estructuraComercial/estructuraComercial.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/administracionComercial/estructuraComercial/estructuraComercial.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/estructuraComercial/estructuraComercial.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EstructuraComercialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstructuraComercialComponent", function() { return EstructuraComercialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_administracionComercial_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/administracionComercial.service */ "./src/app/core/consultaService/administracionComercial.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _commonPopUp_zonasPopUp_zonasPopUp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commonPopUp/zonasPopUp/zonasPopUp.component */ "./src/app/routes/commonPopUp/zonasPopUp/zonasPopUp.component.ts");
/* harmony import */ var _commonPopUp_territoriosPopUp_territoriosPopUp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../commonPopUp/territoriosPopUp/territoriosPopUp.component */ "./src/app/routes/commonPopUp/territoriosPopUp/territoriosPopUp.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
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
var EstructuraComercialComponent = /** @class */ (function () {
    function EstructuraComercialComponent(fb, authService, administracionComercialService, cargador, consultasService, modalService) {
        this.authService = authService;
        this.administracionComercialService = administracionComercialService;
        this.cargador = cargador;
        this.consultasService = consultasService;
        this.modalService = modalService;
        this.request = {};
        this.requestZonas = {};
        this.tipoFuerzaVenta = [];
        this.zonaList = [];
        this.territorioList = [];
        this.codFuerzaVenta = "";
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fuerzaVenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    EstructuraComercialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parametrosUsuario = this.authService.getDatosUser();
        console.log('parametros Usuario', this.parametrosUsuario);
        this.request.nRutOperador = this.parametrosUsuario.nrutoperador;
        console.log('request rtu operador', this.request);
        this.cargador.show();
        this.administracionComercialService.getFuerzaVentasOperador(this.request)
            .subscribe(function (data) {
            console.log(data);
            if (data.estructuraComercial) {
                _this.cargador.hide();
                _this.tipoFuerzaVenta = data.estructuraComercial;
                _this.forma.controls.fuerzaVenta.setValue(_this.tipoFuerzaVenta[0].ofv_scodfuerzavta);
                _this.cargarZonasTerritorios();
            }
            if (data.error.codError != 0) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    EstructuraComercialComponent.prototype.ngOnDestroy = function () {
        if (this.subData != undefined) {
            this.subData.unsubscribe();
        }
    };
    EstructuraComercialComponent.prototype.setData = function (resData) {
        if (resData === 'guardar') {
            this.cargarZonasTerritorios();
        }
    };
    EstructuraComercialComponent.prototype.cargarZonasTerritorios = function () {
        var _this = this;
        this.requestZonas.nRutOperador = this.parametrosUsuario.nrutoperador;
        this.requestZonas.sCodEstado = "";
        this.requestZonas.sCodFuerzaVta = this.forma.controls.fuerzaVenta.value;
        this.codFuerzaVenta = this.forma.controls.fuerzaVenta.value;
        this.cargador.show();
        this.administracionComercialService.getZonasOperador(this.requestZonas)
            .subscribe(function (data) {
            _this.cargador.hide();
            console.log('zonas:', data);
            _this.zonaList = data.zonasOperador;
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
        this.administracionComercialService.getTerritoriosOperador(this.requestZonas)
            .subscribe(function (data) {
            console.log('territorios:', data);
            _this.territorioList = data.territoriosVigentes;
        }, function (error) {
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    EstructuraComercialComponent.prototype.openEditarZona = function (zona) {
        window.scroll(0, 0);
        var initialState = {
            titulo: 'Editar',
            zona: zona,
            codFuerzaVenta: this.codFuerzaVenta
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_zonasPopUp_zonasPopUp_component__WEBPACK_IMPORTED_MODULE_5__["ZonasPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    EstructuraComercialComponent.prototype.openAgregarZona = function () {
        var initialState = {
            titulo: 'Agregar',
            codFuerzaVenta: this.codFuerzaVenta
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_zonasPopUp_zonasPopUp_component__WEBPACK_IMPORTED_MODULE_5__["ZonasPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    EstructuraComercialComponent.prototype.openEditarTerritorio = function (territorio) {
        window.scroll(0, 0);
        var initialState = {
            titulo: 'Editar',
            territorio: territorio,
            codFuerzaVenta: this.codFuerzaVenta
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_territoriosPopUp_territoriosPopUp_component__WEBPACK_IMPORTED_MODULE_6__["TerritoriosPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    EstructuraComercialComponent.prototype.openAgregarTerritorio = function () {
        var initialState = {
            titulo: 'Agregar',
            codFuerzaVenta: this.codFuerzaVenta
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_territoriosPopUp_territoriosPopUp_component__WEBPACK_IMPORTED_MODULE_6__["TerritoriosPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    EstructuraComercialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-estructuraComercial',
            template: __webpack_require__(/*! ./estructuraComercial.component.html */ "./src/app/routes/administracionComercial/estructuraComercial/estructuraComercial.component.html"),
            styles: [__webpack_require__(/*! ./estructuraComercial.component.scss */ "./src/app/routes/administracionComercial/estructuraComercial/estructuraComercial.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _core_consultaService_administracionComercial_service__WEBPACK_IMPORTED_MODULE_3__["AdministracionComercialService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_4__["ConsultasService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]])
    ], EstructuraComercialComponent);
    return EstructuraComercialComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionComercial/precios/precios.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/precios/precios.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Precios</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Línea</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input formControlName=\"codLinea\" name=\"codLinea\" class=\"form-control\" type=\"text\" (change)=\"validaLinea()\" maxlength=\"5\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"descLinea\" name=\"descLinea\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalLineas()\">\r\n                          <em class=\"icon-magnifier\"></em>\r\n                        </button>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <label class=\"col-sm-1 control-label\">Art&iacute;culo</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"codArtFormato\" name=\"codArtFormato\" class=\"form-control\" type=\"text\" maxlength=\"5\" />\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"codArtVariedad\" name=\"codArtVariedad\" class=\"form-control\" type=\"text\" maxlength=\"2\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Categor&iacute;a</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input formControlName=\"codCategoria\" name=\"codCategoria\" class=\"form-control\" type=\"text\" (change)=\"validaCategoria()\" maxlength=\"5\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"descCategoria\" name=\"descCategoria\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCategorias()\">\r\n                      <em class=\"icon-magnifier\"></em>\r\n                    </button>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <label class=\"col-sm-1 control-label lh-11\">Artículo Nestl&eacute;</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"codNestle\" name=\"codNestle\" class=\"form-control\" type=\"text\" maxlength=\"18\" />\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Agrupaci&oacute;n</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input formControlName=\"codAgrupacion\" name=\"codAgrupacion\" class=\"form-control\" type=\"text\" (change)=\"validaAgrupacion()\" maxlength=\"5\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"descAgrupacion\" name=\"descAgrupacion\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalAgrupacion()\">\r\n                        <em class=\"icon-magnifier\"></em>\r\n                      </button>\r\n                        </div>\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Estado Nestl&eacute;</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"estado\" name=\"estado\">\r\n                              <option *ngFor=\"let userEstado of estado\" [ngValue]=\"userEstado.codEstado\">{{userEstado.descEstado}}</option>\r\n                    </select>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"col-lg-12\">\r\n                    <label class=\"col-sm-1 control-label\">Prod. Base</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input formControlName=\"codProdBase\" name=\"codProdBase\" class=\"form-control\" type=\"text\" (change)=\"validaProdBase()\" maxlength=\"5\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"descProdBase\" name=\"descProdBase\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalProdBase()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                          </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div class=\"panel-heading pl-0\">\r\n            <h4>Coincidencias</h4>\r\n        </div>\r\n\r\n        <div class=\"row pull-left\">\r\n            <div class=\"col-sm-4\">\r\n                <button class=\"btn btn-oval btn-sm\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n            </div>\r\n            <div class=\"col-sm-4 pl-1\">\r\n                <button class=\"btn btn-oval btn-sm\" (click)=\"guardar()\" type=\"button\" [disabled]=\"!actionBtns\">Guardar</button>\r\n            </div>\r\n            <div class=\"col-sm-4 pl-1\">\r\n                <button class=\"btn btn-oval btn-sm\" [disabled]=\"!exportar\" (click)=\"generateExcel()\">Exportar</button>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <br>\r\n\r\n        <div class=\"table\">\r\n            <table class=\"table table-striped table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th colspan=\"7\"></th>\r\n                        <th colspan=\"2\">Valores Actuales</th>\r\n                        <th colspan=\"3\">Valores nuevos</th>\r\n                        <th colspan=\"2\">Desde</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>LN</th>\r\n                        <th>CT</th>\r\n                        <th>AG</th>\r\n                        <th>PB</th>\r\n                        <th>Cod. Artículo</th>\r\n                        <th>Descripción</th>\r\n                        <th>Medida</th>\r\n                        <th>P. Base Actual</th>\r\n                        <th>Desde</th>\r\n                        <th>P. Base Nuevo</th>\r\n                        <th>%</th>\r\n                        <th>Fecha</th>\r\n                        <th>Hora</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let articulo of articulos | paginate: {itemsPerPage: 7, currentPage: pageActual};\">\r\n                        <td>{{articulo.jli_scodlinea}}</td>\r\n                        <td>{{articulo.jca_scodcategoria}}</td>\r\n                        <td>{{articulo.jag_scodagrupacion}}</td>\r\n                        <td>{{articulo.jpb_scodproductobase}}</td>\r\n                        <td class=\"w-70\">{{articulo.art_scodformato}} - {{articulo.art_scodvariedad}}</td>\r\n                        <td class=\"w-100\">{{articulo.art_sdescripcion }}</td>\r\n                        <td>{{articulo.art_smedida }}</td>\r\n                        <td class=\"text-right\">{{articulo.p_actual | number:'':'es'}}</td>\r\n                        <td class=\"mw-130\">{{articulo.p_actual_desde | fecha: \"hora\" }}</td>\r\n                        <td><input appDecimalNumber #p_nuevo type=\"number\" step=\"0.01\" [(ngModel)]=\"articulo.p_nuevo\" (change)=\"recalPorcentaje(articulo)\" class=\"form-control w-90 ph-2 mt-1 text-right\" maxlength=\"15\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                (focusout)=\"validaFormatoDec(p_nuevo)\"></td>\r\n                        <td><input appDecimalNumber #por_nuevo type=\"number\" step=\"0.01\" [(ngModel)]=\"articulo.por_nuevo\" (change)=\"recalPrecioNuevo(articulo)\" class=\"form-control w-80 mt-1 text-right\" maxlength=\"6\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                (focusout)=\"validaFormatoDec(por_nuevo)\"></td>\r\n                        <td><input type=\"date\" [(ngModel)]=\"articulo.p_nuevo_desde\" (change)=\"validarFecha(articulo)\" class=\"form-control w-110 mt-1 pad-x-3 text-right\"></td>\r\n                        <td><input type=\"time\" [(ngModel)]=\"articulo.p_nuevo_desde_time\" (change)=\"validarHora(articulo)\" class=\"form-control w-70 mt-1 pad-x-3 text-right\"></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n\r\n        <div class=\"text-right pt-3\">\r\n            <pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n        </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionComercial/precios/precios.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/precios/precios.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pad-3{padding-top:3px}.pad-x-3{padding-left:3px;padding-right:3px}\n"

/***/ }),

/***/ "./src/app/routes/administracionComercial/precios/precios.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/routes/administracionComercial/precios/precios.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PreciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreciosComponent", function() { return PreciosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component */ "./src/app/routes/commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component.ts");
/* harmony import */ var _commonPopUp_categoriaNegocioPopUp_categoriaNegocioPopUp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../commonPopUp/categoriaNegocioPopUp/categoriaNegocioPopUp.component */ "./src/app/routes/commonPopUp/categoriaNegocioPopUp/categoriaNegocioPopUp.component.ts");
/* harmony import */ var _core_consultaService_administracionComercial_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/consultaService/administracionComercial.service */ "./src/app/core/consultaService/administracionComercial.service.ts");
/* harmony import */ var _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/consultaService/articulo.service */ "./src/app/core/consultaService/articulo.service.ts");
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
var PreciosComponent = /** @class */ (function () {
    function PreciosComponent(fb, http, excelService, modalService, consultasService, administracionComercialService, cargador, utilService, authService, articuloService) {
        this.http = http;
        this.excelService = excelService;
        this.modalService = modalService;
        this.consultasService = consultasService;
        this.administracionComercialService = administracionComercialService;
        this.cargador = cargador;
        this.utilService = utilService;
        this.authService = authService;
        this.articuloService = articuloService;
        this.pageActual = 1;
        this.request = {};
        this.requestBuscar = {};
        this.requestGuardar = {};
        this.articulos = [];
        this.actionBtns = false;
        this.estado = [
            {
                codEstado: null,
                descEstado: '(Todos)'
            },
            {
                codEstado: 'NOVIG',
                descEstado: 'Inactivo'
            },
            {
                codEstado: 'VIGEN',
                descEstado: 'Activo'
            }
        ];
        this.composicion = [
            'Todos',
            'Inactivo'
        ];
        this.origen = '';
        this.datos = [];
        this.exportar = false;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            codLinea: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descLinea: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            codArtFormato: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            codArtVariedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            codCategoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descCategoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            codNestle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            codAgrupacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descAgrupacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            codProdBase: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descProdBase: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            codCatNegocio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    PreciosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fechaActual = new Date();
        console.log(this.forma);
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5___default.a);
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    PreciosComponent.prototype.ngOnDestroy = function () {
        if (this.subData != undefined) {
            this.subData.unsubscribe();
        }
    };
    PreciosComponent.prototype.openModalLineas = function () {
        this.origen = 'linea';
        var initialState = {
            titulo: 'Líneas',
            origen: 'linea'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    PreciosComponent.prototype.openModalCategorias = function () {
        this.origen = 'categoria';
        var initialState = {
            titulo: 'Categorías',
            origen: 'categoria'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    PreciosComponent.prototype.openModalAgrupacion = function () {
        this.origen = 'agrupacion';
        var initialState = {
            titulo: 'Agrupaciones',
            origen: 'agrupacion'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    PreciosComponent.prototype.openModalProdBase = function () {
        this.origen = 'prodbase';
        var initialState = {
            titulo: 'Productos Base',
            origen: 'prodbase'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    PreciosComponent.prototype.openModalCatNegocio = function () {
        this.origen = 'catNegocio';
        var initialState = {
            titulo: 'Categorías de Negocio',
            origen: 'catNegocio'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_categoriaNegocioPopUp_categoriaNegocioPopUp_component__WEBPACK_IMPORTED_MODULE_12__["CategoriaNegocioPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    PreciosComponent.prototype.validaLinea = function () {
        var _this = this;
        if (this.forma.controls.codLinea.value === '') {
            this.forma.controls.codLinea.setValue('');
            this.forma.controls.descLinea.setValue('');
            this.forma.controls.codCategoria.setValue('');
            this.forma.controls.descCategoria.setValue('');
            this.forma.controls.codAgrupacion.setValue('');
            this.forma.controls.descAgrupacion.setValue('');
            this.forma.controls.codProdBase.setValue('');
            this.forma.controls.descProdBase.setValue('');
        }
        else {
            this.request.scodestado = 'VIGEN';
            this.request.scodlinea = this.forma.controls.codLinea.value;
            this.cargador.show();
            this.articuloService.getLineas(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                if (data) {
                    if (data.error.codError != 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.articulo;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.codLinea.setValue(_this.datos[0].jli_scodlinea);
                            _this.forma.controls.descLinea.setValue(_this.datos[0].jli_sdeslinea);
                            _this.forma.controls.codCategoria.setValue('');
                            _this.forma.controls.descCategoria.setValue('');
                            _this.forma.controls.codAgrupacion.setValue('');
                            _this.forma.controls.descAgrupacion.setValue('');
                            _this.forma.controls.codProdBase.setValue('');
                            _this.forma.controls.descProdBase.setValue('');
                        }
                        else {
                            _this.forma.controls.codLinea.setValue('');
                            _this.forma.controls.descLinea.setValue('');
                            _this.forma.controls.codCategoria.setValue('');
                            _this.forma.controls.descCategoria.setValue('');
                            _this.forma.controls.codAgrupacion.setValue('');
                            _this.forma.controls.descAgrupacion.setValue('');
                            _this.forma.controls.codProdBase.setValue('');
                            _this.forma.controls.descProdBase.setValue('');
                            swal('Atención', 'No Existe Línea', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    PreciosComponent.prototype.validaCategoria = function () {
        var _this = this;
        if (this.forma.controls.codCategoria.value === '') {
            this.forma.controls.codCategoria.setValue('');
            this.forma.controls.descCategoria.setValue('');
            this.forma.controls.codAgrupacion.setValue('');
            this.forma.controls.descAgrupacion.setValue('');
            this.forma.controls.codProdBase.setValue('');
            this.forma.controls.descProdBase.setValue('');
        }
        else {
            this.request.scodestado = 'VIGEN';
            this.request.scodcategoria = this.forma.controls.codCategoria.value;
            this.cargador.show();
            this.articuloService.getCategorias(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                if (data) {
                    if (data.error.codError != 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.articulo;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.codLinea.setValue(_this.datos[0].jli_scodlinea);
                            _this.forma.controls.descLinea.setValue(_this.datos[0].jli_sdeslinea);
                            _this.forma.controls.codCategoria.setValue(_this.datos[0].jca_scodcategoria);
                            _this.forma.controls.descCategoria.setValue(_this.datos[0].jca_sdescategoria);
                            _this.forma.controls.codAgrupacion.setValue('');
                            _this.forma.controls.descAgrupacion.setValue('');
                            _this.forma.controls.codProdBase.setValue('');
                            _this.forma.controls.descProdBase.setValue('');
                        }
                        else {
                            _this.forma.controls.codCategoria.setValue('');
                            _this.forma.controls.descCategoria.setValue('');
                            _this.forma.controls.codAgrupacion.setValue('');
                            _this.forma.controls.descAgrupacion.setValue('');
                            _this.forma.controls.codProdBase.setValue('');
                            _this.forma.controls.descProdBase.setValue('');
                            swal('Atención', 'No Existe Categoría', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    PreciosComponent.prototype.validaAgrupacion = function () {
        var _this = this;
        if (this.forma.controls.codAgrupacion.value === '') {
            this.forma.controls.codAgrupacion.setValue('');
            this.forma.controls.descAgrupacion.setValue('');
            this.forma.controls.codProdBase.setValue('');
            this.forma.controls.descProdBase.setValue('');
        }
        else {
            this.request.scodestado = 'VIGEN';
            this.request.scodagrupacion = this.forma.controls.codAgrupacion.value;
            this.cargador.show();
            this.articuloService.getAgrupacion(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                if (data) {
                    if (data.error.codError != 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.articulo;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.codLinea.setValue(_this.datos[0].jli_scodlinea);
                            _this.forma.controls.descLinea.setValue(_this.datos[0].jli_sdeslinea);
                            _this.forma.controls.codCategoria.setValue(_this.datos[0].jca_scodcategoria);
                            _this.forma.controls.descCategoria.setValue(_this.datos[0].jca_sdescategoria);
                            _this.forma.controls.codAgrupacion.setValue(_this.datos[0].jag_scodagrupacion);
                            _this.forma.controls.descAgrupacion.setValue(_this.datos[0].jag_sdesagrupacion);
                            _this.forma.controls.codProdBase.setValue('');
                            _this.forma.controls.descProdBase.setValue('');
                        }
                        else {
                            _this.forma.controls.codAgrupacion.setValue('');
                            _this.forma.controls.descAgrupacion.setValue('');
                            _this.forma.controls.codProdBase.setValue('');
                            _this.forma.controls.descProdBase.setValue('');
                            swal('Atención', 'No Existe Agrupación', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    PreciosComponent.prototype.validaProdBase = function () {
        var _this = this;
        if (this.forma.controls.codProdBase.value === '') {
            this.forma.controls.codProdBase.setValue('');
            this.forma.controls.descProdBase.setValue('');
        }
        else {
            this.request.scodestado = 'VIGEN';
            this.request.scodproductobase = this.forma.controls.codProdBase.value;
            this.cargador.show();
            this.articuloService.getProdBase(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                if (data) {
                    if (data.error.codError != 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.articulo;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.codLinea.setValue(_this.datos[0].jli_scodlinea);
                            _this.forma.controls.descLinea.setValue(_this.datos[0].jli_sdeslinea);
                            _this.forma.controls.codCategoria.setValue(_this.datos[0].jca_scodcategoria);
                            _this.forma.controls.descCategoria.setValue(_this.datos[0].jca_sdescategoria);
                            _this.forma.controls.codAgrupacion.setValue(_this.datos[0].jag_scodagrupacion);
                            _this.forma.controls.descAgrupacion.setValue(_this.datos[0].jag_sdesagrupacion);
                            _this.forma.controls.codProdBase.setValue(_this.datos[0].jpb_scodproductobase);
                            _this.forma.controls.descProdBase.setValue(_this.datos[0].jpb_sdesproductobase);
                        }
                        else {
                            _this.forma.controls.codProdBase.setValue('');
                            _this.forma.controls.descProdBase.setValue('');
                            swal('Atención', 'No Existe Producto Base', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    PreciosComponent.prototype.setData = function (resData) {
        console.log('resPrueba en setLinea', resData);
        console.log('origen', this.origen);
        if (resData != 0) {
            switch (this.origen) {
                case 'linea': {
                    this.forma.controls.codLinea.setValue(resData.jli_scodlinea);
                    this.forma.controls.descLinea.setValue(resData.jli_sdeslinea);
                    this.forma.controls.codCategoria.setValue('');
                    this.forma.controls.descCategoria.setValue('');
                    this.forma.controls.codAgrupacion.setValue('');
                    this.forma.controls.descAgrupacion.setValue('');
                    this.forma.controls.codProdBase.setValue('');
                    this.forma.controls.descProdBase.setValue('');
                    break;
                }
                case 'categoria': {
                    this.forma.controls.codLinea.setValue(resData.jli_scodlinea);
                    this.forma.controls.descLinea.setValue(resData.jli_sdeslinea);
                    this.forma.controls.codCategoria.setValue(resData.jca_scodcategoria);
                    this.forma.controls.descCategoria.setValue(resData.jca_sdescategoria);
                    this.forma.controls.codAgrupacion.setValue('');
                    this.forma.controls.descAgrupacion.setValue('');
                    this.forma.controls.codProdBase.setValue('');
                    this.forma.controls.descProdBase.setValue('');
                    break;
                }
                case 'agrupacion': {
                    this.forma.controls.codLinea.setValue(resData.jli_scodlinea);
                    this.forma.controls.descLinea.setValue(resData.jli_sdeslinea);
                    this.forma.controls.codCategoria.setValue(resData.jca_scodcategoria);
                    this.forma.controls.descCategoria.setValue(resData.jca_sdescategoria);
                    this.forma.controls.codAgrupacion.setValue(resData.jag_scodagrupacion);
                    this.forma.controls.descAgrupacion.setValue(resData.jag_sdesagrupacion);
                    this.forma.controls.codProdBase.setValue('');
                    this.forma.controls.descProdBase.setValue('');
                    break;
                }
                case 'prodbase': {
                    this.forma.controls.codLinea.setValue(resData.jli_scodlinea);
                    this.forma.controls.descLinea.setValue(resData.jli_sdeslinea);
                    this.forma.controls.codCategoria.setValue(resData.jca_scodcategoria);
                    this.forma.controls.descCategoria.setValue(resData.jca_sdescategoria);
                    this.forma.controls.codAgrupacion.setValue(resData.jag_scodagrupacion);
                    this.forma.controls.descAgrupacion.setValue(resData.jag_sdesagrupacion);
                    this.forma.controls.codProdBase.setValue(resData.jpb_scodproductobase);
                    this.forma.controls.descProdBase.setValue(resData.jpb_sdesproductobase);
                    break;
                }
                case 'catNegocio': {
                    this.forma.controls.codCatNegocio.setValue(resData.can_scodcatnegocio);
                    this.forma.controls.descCatNegocio.setValue(resData.can_sdescatnegocio);
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    PreciosComponent.prototype.buscar = function () {
        var _this = this;
        this.exportar = false;
        this.articulos = [];
        this.requestBuscar.sCodAgrupacion = this.forma.controls.codAgrupacion.value;
        this.requestBuscar.sCodCategoria = this.forma.controls.codCategoria.value;
        this.requestBuscar.sCodEstado = this.forma.controls.estado.value;
        this.requestBuscar.sCodFormato = this.forma.controls.codArtFormato.value;
        this.requestBuscar.sCodLinea = this.forma.controls.codLinea.value;
        this.requestBuscar.sCodProductoBase = this.forma.controls.codProdBase.value;
        this.requestBuscar.sCodSap = this.forma.controls.codNestle.value;
        this.requestBuscar.sCodVariedad = this.forma.controls.codArtVariedad.value;
        console.log('request descuentos func', this.requestBuscar);
        this.cargador.show();
        this.administracionComercialService.getArticulosPrecios(this.requestBuscar)
            .subscribe(function (data) {
            _this.cargador.hide();
            console.log('data', data.cliente);
            if (data.cliente) {
                console.log('existe data');
                if (data.cliente.length == 0 && data.error.codError == 0) {
                    swal('Atención', 'No se encontraron resultados', 'info');
                }
                else {
                    _this.cargarDataTable(data.cliente);
                    _this.actionBtns = true;
                    _this.exportar = true;
                }
            }
            if (data.error.codError != 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    PreciosComponent.prototype.cargarDataTable = function (data) {
        this.articulos = [];
        for (var i in data) {
            var articulo = {
                art_scodformato: data[i].art_scodformato,
                art_scodvariedad: data[i].art_scodvariedad,
                art_sdescripcion: data[i].art_sdescripcion,
                jli_scodlinea: data[i].jli_scodlinea,
                jca_scodcategoria: data[i].jca_scodcategoria,
                jag_scodagrupacion: data[i].jag_scodagrupacion,
                jpb_scodproductobase: data[i].jpb_scodproductobase,
                p_actual: data[i].p_actual,
                p_actual_desde: data[i].p_actual_desde,
                p_nuevo: data[i].p_nuevo === 0 ? 0 : parseFloat(data[i].p_nuevo).toFixed(2),
                por_nuevo: data[i].p_nuevo === 0 ? 0 : (((data[i].p_nuevo * 100) / data[i].p_actual) - 100).toFixed(2),
                p_nuevo_desde: data[i].p_nuevo_desde === '' ? '' : this.utilService.dateStringServiceToStringFormat(data[i].p_nuevo_desde),
                p_nuevo_desde_time: data[i].p_nuevo_desde === '' ? '' : this.utilService.timeStringServiceToStringFormat(data[i].p_nuevo_desde),
                art_smedida: data[i].art_smedida,
                art_modificado: false
            };
            this.articulos.push(articulo);
        }
        console.log('articulos', this.articulos);
    };
    PreciosComponent.prototype.validarFecha = function (articulo) {
        console.log('articulo.p_nuevo_desde', articulo.p_nuevo_desde);
        articulo.art_modificado = true;
        var fechaString = this.utilService.dateToStringFormat(this.fechaActual);
        console.log('fechaString', fechaString);
        if (articulo.p_nuevo_desde === '') {
            articulo.p_nuevo_desde = fechaString;
        }
        if (articulo.p_nuevo_desde.length > 10) {
            articulo.p_nuevo_desde = fechaString;
        }
    };
    PreciosComponent.prototype.validarHora = function (articulo) {
        console.log('articulo.p_nuevo_desde_time', articulo.p_nuevo_desde_time);
        articulo.art_modificado = true;
        if (articulo.p_nuevo_desde_time === '') {
            articulo.p_nuevo_desde_time = '00:00';
        }
    };
    PreciosComponent.prototype.validaFormatoDec = function (valor) {
        valor.value = (parseFloat(valor.value).toFixed(2));
    };
    PreciosComponent.prototype.recalPorcentaje = function (articulo) {
        if (articulo.p_nuevo === null) {
            articulo.p_nuevo = 0;
            articulo.por_nuevo = 0;
        }
        else {
            articulo.art_modificado = true;
            articulo.por_nuevo = (((articulo.p_nuevo * 100) / articulo.p_actual) - 100).toFixed(2);
        }
    };
    PreciosComponent.prototype.recalPrecioNuevo = function (articulo) {
        if (articulo.por_nuevo === null) {
            articulo.p_nuevo = 0;
            articulo.por_nuevo = 0;
        }
        else {
            articulo.art_modificado = true;
            articulo.p_nuevo = (((articulo.p_actual * articulo.por_nuevo) / 100) + articulo.p_actual).toFixed(2);
            console.log('articulo.p_nuevo', articulo.p_nuevo);
        }
    };
    PreciosComponent.prototype.guardar = function () {
        var _this = this;
        var errorFecha = false;
        for (var i in this.articulos) {
            if (this.articulos[i].art_modificado) {
                var hh = parseInt(this.articulos[i].p_nuevo_desde_time.substring(0, 2));
                var mm = parseInt(this.articulos[i].p_nuevo_desde_time.substring(3, 5));
                console.log(hh, mm);
                if (isNaN(hh) || isNaN(mm)) {
                    errorFecha = true;
                    break;
                }
                console.log('this.articulos[i].p_nuevo_desde typeof', typeof (this.articulos[i].p_nuevo_desde));
                if (typeof (this.articulos[i].p_nuevo_desde) === 'object') {
                    this.articulos[i].p_nuevo_desde = this.utilService.dateToStringFormat(this.articulos[i].p_nuevo_desde);
                }
                if ((this.utilService.formatStringToDate(this.articulos[i].p_nuevo_desde).getFullYear()) < (this.fechaActual.getFullYear())) {
                    errorFecha = true;
                    break;
                }
                else if (((this.utilService.formatStringToDate(this.articulos[i].p_nuevo_desde).getMonth()) < (this.fechaActual.getMonth())) && ((this.utilService.formatStringToDate(this.articulos[i].p_nuevo_desde).getFullYear()) <= (this.fechaActual.getFullYear()))) {
                    errorFecha = true;
                    break;
                }
                else if (((this.utilService.formatStringToDate(this.articulos[i].p_nuevo_desde).getDate()) < (this.fechaActual.getDate())) && ((this.utilService.formatStringToDate(this.articulos[i].p_nuevo_desde).getMonth()) <= (this.fechaActual.getMonth())) && ((this.utilService.formatStringToDate(this.articulos[i].p_nuevo_desde).getFullYear()) <= (this.fechaActual.getFullYear()))) {
                    errorFecha = true;
                    break;
                }
                else if ((hh < this.fechaActual.getHours()) && ((this.utilService.formatStringToDate(this.articulos[i].p_nuevo_desde).getDate()) <= (this.fechaActual.getDate())) && ((this.utilService.formatStringToDate(this.articulos[i].p_nuevo_desde).getMonth()) <= (this.fechaActual.getMonth())) && ((this.utilService.formatStringToDate(this.articulos[i].p_nuevo_desde).getFullYear()) <= (this.fechaActual.getFullYear()))) {
                    errorFecha = true;
                    break;
                }
                else if ((mm < this.fechaActual.getMinutes()) && (hh <= this.fechaActual.getHours()) && ((this.utilService.formatStringToDate(this.articulos[i].p_nuevo_desde).getDate()) <= (this.fechaActual.getDate())) && ((this.utilService.formatStringToDate(this.articulos[i].p_nuevo_desde).getMonth()) <= (this.fechaActual.getMonth())) && ((this.utilService.formatStringToDate(this.articulos[i].p_nuevo_desde).getFullYear()) <= (this.fechaActual.getFullYear()))) {
                    errorFecha = true;
                    break;
                }
            }
        }
        console.log('errorFecha', errorFecha);
        if (errorFecha) {
            swal('Atención', 'Una o más fechas con hora son inferiores a la Fecha y Hora actual', 'warning');
        }
        else {
            //grabar datos
            console.log('grabar');
            var grabaExito_1 = true;
            this.cargador.show();
            for (var i in this.articulos) {
                if (this.articulos[i].art_modificado) {
                    this.requestGuardar.nPrecio = Math.floor(this.articulos[i].p_nuevo);
                    this.requestGuardar.nRunUsuarioCrea = this.authService.getDatosUser().nrutoperador;
                    this.requestGuardar.sCodFormato = this.articulos[i].art_scodformato;
                    this.requestGuardar.sCodVariedad = this.articulos[i].art_scodvariedad;
                    this.requestGuardar.sFhoInicioVigencia = (this.articulos[i].p_nuevo_desde).replace(/-/g, '') + (this.articulos[i].p_nuevo_desde_time).replace(':', '') + '00';
                    console.log('this.requestGuardar', this.requestGuardar);
                    this.administracionComercialService.guardaPrecioArticulo(this.requestGuardar)
                        .subscribe(function (data) {
                        _this.cargador.hide();
                        console.log('respuesta graba precio', data);
                        if (data.error.codError !== 0) {
                            swal('Atención', data.error.msjError, 'error');
                            grabaExito_1 = false;
                        }
                        else {
                            _this.buscar();
                            swal('Atención', 'Los precios han sido actualizados correctamente', 'success');
                        }
                    }, function (error) {
                        _this.cargador.hide();
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                        grabaExito_1 = false;
                    });
                }
            }
            // this.cargador.hide();
            // if(grabaExito){
            //   swal('Atención','Los precios han sido actualizados correctamente', 'success');
            // }
        }
    };
    PreciosComponent.prototype.generateExcel = function () {
        var headerExcel = [
            "Línea", "Categoría", "Agrupación", "Prod. Base", "Cod. Articulo", "Descripción", "Medida",
            "Precio Base Actual", "Desde"
        ];
        var dataExcel = [];
        for (var i in this.articulos) {
            var articulo = [
                this.articulos[i].jli_scodlinea,
                this.articulos[i].jca_scodcategoria,
                this.articulos[i].jag_scodagrupacion,
                this.articulos[i].jpb_scodproductobase,
                this.articulos[i].art_scodformato + " - " + this.articulos[i].art_scodvariedad,
                this.articulos[i].art_sdescripcion,
                this.articulos[i].art_smedida,
                this.articulos[i].p_actual,
                this.utilService.dateStringServiceToStringFormatFull(this.articulos[i].p_actual_desde)
            ];
            dataExcel.push(articulo);
        }
        var fechaExcel = this.utilService.dateToLocalStringFormat(this.fechaActual);
        var titulo = "Articulos_" + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        this.excelService.generateExcel(titulo, headerExcel, dataExcel, fechaExcel);
        swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
        this.exportar = false;
    };
    PreciosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-precios',
            template: __webpack_require__(/*! ./precios.component.html */ "./src/app/routes/administracionComercial/precios/precios.component.html"),
            styles: [__webpack_require__(/*! ./precios.component.scss */ "./src/app/routes/administracionComercial/precios/precios.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_8__["ConsultasService"], _core_consultaService_administracionComercial_service__WEBPACK_IMPORTED_MODULE_13__["AdministracionComercialService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_14__["ArticuloService"]])
    ], PreciosComponent);
    return PreciosComponent;
}());



/***/ })

}]);
//# sourceMappingURL=administracionComercial-administracionComercial-module.js.map