(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["existencias-existencias-module"],{

/***/ "./src/app/routes/existencias/abastecimiento/abastecimiento.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/routes/existencias/abastecimiento/abastecimiento.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Abastecimiento desde OC</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Fecha Desde</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input #fechaDesde class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaDesde\" name=\"fechaDesde\" type=\"date\" (focusout)=\"validarFechas(fechaDesde)\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Fecha Hasta</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input #fechaHasta class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaHasta\" name=\"fechaHasta\" type=\"date\" (focusout)=\"validarFechas(fechaHasta)\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label ph-0\">Orden de Compra</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input appNaturalNumber formControlName=\"ordenCompra\" name=\"ordenCompra\" class=\"form-control text-right\" type=\"number\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"row pull-left mb-4\">\r\n            <div class=\"col-sm-3 ml-1 mr-2\">\r\n                <button class=\"btn btn-oval btn-sm\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <th class=\"text-center\">Nº OC</th>\r\n                            <th class=\"text-center\">Fecha Creación</th>\r\n                            <th class=\"text-center\">Fecha Est. Rec.</th>\r\n                            <th class=\"text-center\">Volumen</th>\r\n                            <th class=\"text-center\">Peso</th>\r\n                            <th class=\"text-center\">Ver</th>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let orden of ordenesCompra | paginate: {itemsPerPage: 7, currentPage: pageActual};\">\r\n                                <td class=\"text-right\">{{orden.orc_nidordencompra}}</td>\r\n                                <td class=\"text-center\">{{orden.orc_dfhocreacion | fecha}}</td>\r\n                                <td class=\"text-center\">{{orden.orc_dfhorecepcionestimada | fecha}}</td>\r\n                                <td class=\"text-right\">{{orden.orc_nvolumen | number:'':'es'}}</td>\r\n                                <td class=\"text-right\">{{orden.orc_nkilos | number:'':'es'}}</td>\r\n                                <td class=\"text-center\">\r\n                                    <span class=\"table-remove\">\r\n                                        <a class=\"text\" data-toggle=\"tooltip\" title=\"Ver Detalle\" (click)=\"editarOrdenCompra(orden)\">\r\n                                            <em class=\"fa fa-search\"></em>\r\n                                        </a>\r\n                                    </span>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"text-right mt-2\">\r\n                        <pagination-controls (pageChange)=\"pageActual = $event\" autoHide=\"true\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\"></pagination-controls>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/existencias/abastecimiento/abastecimiento.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/routes/existencias/abastecimiento/abastecimiento.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/existencias/abastecimiento/abastecimiento.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/existencias/abastecimiento/abastecimiento.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AbastecimientoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimientoComponent", function() { return AbastecimientoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_existencias_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/consultaService/existencias.service */ "./src/app/core/consultaService/existencias.service.ts");
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
var AbastecimientoComponent = /** @class */ (function () {
    function AbastecimientoComponent(utilService, authService, cargador, existenciasService, router) {
        this.utilService = utilService;
        this.authService = authService;
        this.cargador = cargador;
        this.existenciasService = existenciasService;
        this.router = router;
        this.fechaActual = new Date();
        this.request = {};
        this.ordenesCompra = [];
        this.pageActual = 1;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fechaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fechaHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ordenCompra: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    AbastecimientoComponent.prototype.ngOnInit = function () {
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5___default.a);
        this.forma.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.forma.controls.fechaHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
    };
    AbastecimientoComponent.prototype.validarFechas = function (fecha) {
        var dateValid = this.utilService.DateValidator(fecha.value);
        if (!dateValid) {
            fecha.value = this.utilService.dateToStringFormat(this.fechaActual);
        }
    };
    AbastecimientoComponent.prototype.editarOrdenCompra = function (orden) {
        this.existenciasService.selectedOrdenDeCompra = Object.assign({}, orden);
        this.router.navigate(['/existencias/abastecimientoDetalleOC']);
    };
    AbastecimientoComponent.prototype.buscar = function () {
        var _this = this;
        this.request.nNumOrdenCompra = this.forma.controls.ordenCompra.value === '' ? 0 : this.forma.controls.ordenCompra.value;
        this.request.nRutOperador = parseInt(this.authService.getDatosUser().nrutoperador);
        this.request.sCodEstado = 'SOLIC';
        this.request.sCodSucursal = JSON.parse(localStorage.getItem('SucursalUsuario')).sus_scodsucursal;
        this.request.sFhoRecepEstimDesde = (this.forma.controls.fechaDesde.value).replace(/-/g, '') + "000000";
        this.request.sFhoRecepEstimHasta = (this.forma.controls.fechaHasta.value).replace(/-/g, '') + "000000";
        console.log('request buscar', this.request);
        this.cargador.show();
        this.ordenesCompra = [];
        this.existenciasService.getOrdenesCompra(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            console.log('data OC', data);
            if (data.ordenCompra) {
                if (data.ordenCompra.length == 0 && data.error.codError == 0) {
                    swal('Atención', 'No se encontraron documentos', 'info');
                }
                else {
                    _this.ordenesCompra = data.ordenCompra;
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
    AbastecimientoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-abastecimiento',
            template: __webpack_require__(/*! ./abastecimiento.component.html */ "./src/app/routes/existencias/abastecimiento/abastecimiento.component.html"),
            styles: [__webpack_require__(/*! ./abastecimiento.component.scss */ "./src/app/routes/existencias/abastecimiento/abastecimiento.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _core_consultaService_existencias_service__WEBPACK_IMPORTED_MODULE_8__["ExistenciasService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AbastecimientoComponent);
    return AbastecimientoComponent;
}());



/***/ }),

/***/ "./src/app/routes/existencias/abastecimiento/abastecimientoDetalleOC/abastecimientoDetalleOC.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/routes/existencias/abastecimiento/abastecimientoDetalleOC/abastecimientoDetalleOC.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Abastecimiento desde OC<em class=\"fa fa-angle-right mh-2\"></em>Detalle OC</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Nº Factura</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input appNaturalNumber formControlName=\"factura\" name=\"factura\" class=\"form-control\" type=\"number\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                    </div>\r\n                    <div class=\"col-sm-1 pl-0\">\r\n                        <button class=\"btn btn-oval btn-sm\" type=\"button\">Agregar</button>\r\n                    </div>\r\n                    <div class=\"col-sm-1 col-sm-offset-5\">\r\n                        <a routerLink=\"/existencias/abastecimiento\" class=\"btn btn-oval btn-sm\" role=\"button\">Volver</a>\r\n                    </div>\r\n                    <div class=\"col-sm-1 pl-2\">\r\n                        <button class=\"btn btn-oval btn-sm\" type=\"button\">Asignar</button>\r\n                    </div>\r\n                    <div class=\"col-sm-1 pl-2\">\r\n                        <button class=\"btn btn-oval btn-sm\" type=\"button\">Guardar</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Monto</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input appNaturalNumber formControlName=\"monto\" name=\"monto \" class=\"form-control\" type=\"number\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                    </div>\r\n                    <div class=\"col-sm-1 pl-0\">\r\n                        <button class=\"btn btn-oval btn-sm\" type=\"button\">Eliminar</button>\r\n                    </div>\r\n                    <div class=\"col-sm-1 col-sm-offset-5\">\r\n                        <button class=\"btn btn-oval btn-sm\" type=\"button\">Confirmar</button>\r\n                    </div>\r\n                    <div class=\"col-sm-2 text-right pr-0\">\r\n                        <button class=\"btn btn-oval btn-sm\" type=\"button\">Confirmar Parcial</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-9\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <th class=\"text-center\">Op.</th>\r\n                            <th class=\"text-center\">Artículo</th>\r\n                            <th class=\"text-center\">Cod. SAP</th>\r\n                            <th class=\"text-center\">Descripción</th>\r\n                            <th class=\"text-center\">Medida</th>\r\n                            <th class=\"text-center\">Precio B.</th>\r\n                            <th class=\"text-center\">Solicitado</th>\r\n                            <th class=\"text-center\">Recibido</th>\r\n                            <th class=\"text-center\">Nº Factura</th>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let detalle of detallesOC\">\r\n                                <td>\r\n                                    <div class=\"checkbox c-checkbox needsclick pt-1\">\r\n                                        <label class=\"needsclick\">\r\n                                            <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckDetalle(detalle)\" [checked]=\"detalle.bCheck\" />\r\n                                            <span class=\"fa fa-check\"></span>\r\n                                        </label>\r\n                                    </div>\r\n                                </td>\r\n                                <td>{{detalle.doc_scodformato}}-{{detalle.doc_scodvariedad}}</td>\r\n                                <td>{{detalle.art_scodsap}}</td>\r\n                                <td>{{detalle.art_sdescripcion}}</td>\r\n                                <td>{{detalle.art_smedida}}</td>\r\n                                <td class=\"text-right\">{{detalle.doc_nprecio | number:'':'es'}}</td>\r\n                                <td class=\"text-right\">{{detalle.doc_ncantpedida}}</td>\r\n\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <th class=\"text-center\">Op.</th>\r\n                            <th class=\"text-center\">Nº Factura</th>\r\n                            <th class=\"text-center\">Monto</th>\r\n                        </thead>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/existencias/abastecimiento/abastecimientoDetalleOC/abastecimientoDetalleOC.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/routes/existencias/abastecimiento/abastecimientoDetalleOC/abastecimientoDetalleOC.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/existencias/abastecimiento/abastecimientoDetalleOC/abastecimientoDetalleOC.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/routes/existencias/abastecimiento/abastecimientoDetalleOC/abastecimientoDetalleOC.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AbastecimientoDetalleOCComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimientoDetalleOCComponent", function() { return AbastecimientoDetalleOCComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_consultaService_existencias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/consultaService/existencias.service */ "./src/app/core/consultaService/existencias.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
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
var AbastecimientoDetalleOCComponent = /** @class */ (function () {
    function AbastecimientoDetalleOCComponent(existenciasService, authService) {
        this.existenciasService = existenciasService;
        this.authService = authService;
        this.request = {};
        this.detallesOC = [];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            factura: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            monto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    AbastecimientoDetalleOCComponent.prototype.ngOnInit = function () {
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_3___default.a);
        console.log(this.existenciasService.selectedOrdenDeCompra);
        if (this.existenciasService.selectedOrdenDeCompra !== undefined) {
            this.cargarDatos();
        }
    };
    AbastecimientoDetalleOCComponent.prototype.cargarDatos = function () {
        var _this = this;
        this.request.nIdOrdenCompra = this.existenciasService.selectedOrdenDeCompra.orc_nidordencompra;
        this.request.nRutOperador = Number(this.authService.getDatosUser().nrutoperador);
        //carga detalle Orden de Compra
        this.existenciasService.getCargaDetalleOrdenDeCompra(this.request)
            .subscribe(function (data) {
            console.log('data detalle Orden de Compra', data);
            if (data.ordenCompraDetalle) {
                _this.cargarOrdenCompraDetalle(data.ordenCompraDetalle);
                // //Validar Fecha Vigencia
                // this.validaVigencia(data.cargaEncabezadoAccionComercial);
                // //Validar Inhabilitar
                // this.validaInhabilitar(data.cargaEncabezadoAccionComercial)
                // this.verModales();
            }
            if (data.error.codError != 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    AbastecimientoDetalleOCComponent.prototype.cargarOrdenCompraDetalle = function (detalleOC) {
        for (var i in detalleOC) {
            var detalle = {
                bCheck: false,
                art_scodsap: detalleOC[i].art_scodsap,
                art_sdescripcion: detalleOC[i].art_sdescripcion,
                art_smedida: detalleOC[i].art_smedida,
                doc_ncantpedida: detalleOC[i].doc_ncantpedida,
                doc_nprecio: detalleOC[i].doc_nprecio,
                doc_scodformato: detalleOC[i].doc_scodformato,
                doc_scodvariedad: detalleOC[i].doc_scodvariedad,
                sto_nstockcritico: detalleOC[i].sto_nstockcritico,
                sto_nstockdisponible: detalleOC[i].sto_nstockdisponible,
                sto_nstockminimo: detalleOC[i].sto_nstockminimo
            };
            this.detallesOC.push(detalle);
        }
    };
    AbastecimientoDetalleOCComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-abastecimiento-detalle-oc',
            template: __webpack_require__(/*! ./abastecimientoDetalleOC.component.html */ "./src/app/routes/existencias/abastecimiento/abastecimientoDetalleOC/abastecimientoDetalleOC.component.html"),
            styles: [__webpack_require__(/*! ./abastecimientoDetalleOC.component.scss */ "./src/app/routes/existencias/abastecimiento/abastecimientoDetalleOC/abastecimientoDetalleOC.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_consultaService_existencias_service__WEBPACK_IMPORTED_MODULE_4__["ExistenciasService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], AbastecimientoDetalleOCComponent);
    return AbastecimientoDetalleOCComponent;
}());



/***/ }),

/***/ "./src/app/routes/existencias/buscaOrdenesDeCompra/buscaOrdenesDeCompra.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/existencias/buscaOrdenesDeCompra/buscaOrdenesDeCompra.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <h4> Busca Ordenes de Compras</h4>\r\n  </div>\r\n\r\n  <div class=\"panel-body\">\r\n    <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n      <div class=\"form-group\">\r\n          <div class=\"col-sm-12\">\r\n              <label class=\"col-sm-3 control-label\">Fecha de Recepción Estimada</label>\r\n              <div class=\"col-sm-3\">\r\n                  <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaRecepcion\" name=\"fechaRecepcion\" type=\"date\" />\r\n              </div>\r\n              <div class=\"col-sm-6\">                 \r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n    </form>\r\n    <div class=\"row pull-left mb-4\">\r\n      <div class=\"col-sm-3 mr-1\">\r\n        <button class=\"btn btn-oval btn-sm\"  (click)=\"buscar($event)\" type=\"button\">Buscar </button>\r\n      </div>\r\n      <div class=\"col-sm-3 mr-1\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <button routerLink=\"/existencias/detalleOrdenDeCompra\" class=\"btn btn-oval btn-sm\" >Generar</button>\r\n        <!-- (click)=\"generateExcel()\" -->\r\n\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <br>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">N° OC</th>\r\n                <th scope=\"col\">Fecha Creación</th>\r\n                <th scope=\"col\">Fecha Est. Rec.</th>\r\n                <th scope=\"col\">Volumen</th>\r\n                <th scope=\"col\">Peso</th>\r\n                <th scope=\"col\"> </th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n                <!--  -->\r\n              <tr *ngFor=\"let orden of ordenesDeCompra | paginate: {itemsPerPage: 7, currentPage: pageActual};\" \r\n              (click)=\"detalleOrden(orden)\">\r\n                  <td>{{orden.orc_nidordencompra}}</td>\r\n                  <td>{{orden.orc_dfhocreacion | fecha}} </td>\r\n                  <td>{{orden.orc_dfhorecepcionestimada | fecha}}</td>\r\n                  <td>{{orden.orc_nvolumen}}</td>\r\n                  <td>{{orden.orc_nkilos}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <br>\r\n          <div class=\"text-right\">\r\n              <pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\"\r\n                nextLabel=\"Siguiente\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/existencias/buscaOrdenesDeCompra/buscaOrdenesDeCompra.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/existencias/buscaOrdenesDeCompra/buscaOrdenesDeCompra.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/existencias/buscaOrdenesDeCompra/buscaOrdenesDeCompra.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/routes/existencias/buscaOrdenesDeCompra/buscaOrdenesDeCompra.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BuscaOrdenesDeCompraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscaOrdenesDeCompraComponent", function() { return BuscaOrdenesDeCompraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_existencias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/existencias.service */ "./src/app/core/consultaService/existencias.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
var BuscaOrdenesDeCompraComponent = /** @class */ (function () {
    function BuscaOrdenesDeCompraComponent(authService, existenciasService, utilService, excelService, cargador, router) {
        this.authService = authService;
        this.existenciasService = existenciasService;
        this.utilService = utilService;
        this.excelService = excelService;
        this.cargador = cargador;
        this.router = router;
        this.fechaActual = new Date();
        this.pageActual = 1;
        this.request = {};
        this.ordenesDeCompra = [];
        this.user = {};
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fechaRecepcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    BuscaOrdenesDeCompraComponent.prototype.ngOnInit = function () {
        this.forma.controls.fechaRecepcion.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.user = this.authService.getDatosUser();
    };
    BuscaOrdenesDeCompraComponent.prototype.buscar = function ($event) {
        var _this = this;
        this.cargador.show();
        this.ordenesDeCompra = [];
        this.request.nNumOrdenCompra = 0;
        console.log(this.user.nrutoperador);
        this.request.nRutOperador = this.user.nrutoperador;
        // this.request.sCodEstado 
        // this.request.sCodSucursal
        this.request.sFhoRecepEstimDesde = this.utilService.stringFormatSinSeparador(this.forma.controls.fechaRecepcion.value);
        this.request.sFhoRecepEstimHasta = this.utilService.stringFormatSinSeparador(this.forma.controls.fechaRecepcion.value);
        console.log('sFhoRecepEstimDesde' + this.request.sFhoRecepEstimDesde.value);
        this.existenciasService.getOrdenesCompra(this.request)
            .subscribe(function (data) {
            _this.ordenesDeCompra = data.ordenCompra;
            _this.cargador.hide();
            // console.log('data   ' + this.ordenesDeCompra);
            if (_this.ordenesDeCompra != null) {
                // this.generar = true;
            }
            else {
                swal('Atencion', 'No existen datos para la fecha seleccionada.', 'warning');
            }
        }),
            function (error) {
                console.log('error en el request', _this.ordenesDeCompra);
            };
    };
    BuscaOrdenesDeCompraComponent.prototype.detalleOrden = function (orden) {
        this.existenciasService.selectedOrdenDeCompra = Object.assign({}, orden);
        this.router.navigate(['/existencias/detalleOrdenDeCompra']);
    };
    BuscaOrdenesDeCompraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buscaOrdenesDeCompra',
            template: __webpack_require__(/*! ./buscaOrdenesDeCompra.component.html */ "./src/app/routes/existencias/buscaOrdenesDeCompra/buscaOrdenesDeCompra.component.html"),
            styles: [__webpack_require__(/*! ./buscaOrdenesDeCompra.component.scss */ "./src/app/routes/existencias/buscaOrdenesDeCompra/buscaOrdenesDeCompra.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _core_consultaService_existencias_service__WEBPACK_IMPORTED_MODULE_3__["ExistenciasService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], BuscaOrdenesDeCompraComponent);
    return BuscaOrdenesDeCompraComponent;
}());



/***/ }),

/***/ "./src/app/routes/existencias/consultaStock/consultaStock.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/existencias/consultaStock/consultaStock.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h4> Consulta Stock</h4>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t<form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<label class=\"col-sm-1 control-label\">L&iacute;nea</label>\r\n\t\t\t\t\t<div class=\"col-sm-5 pl-0\">\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t<input formControlName=\"codLinea\" name=\"codLinea\" class=\"form-control\" (change)=\"validaLinea()\" type=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input formControlName=\"descLinea\" name=\"linea\" class=\"form-control\" type=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalLineas()\">\r\n\t\t\t\t\t\t\t\t<em class=\"icon-magnifier\"></em>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<label class=\"col-sm-1 control-label text-right\">Categor&iacute;a</label>\r\n\t\t\t\t\t<div class=\"col-sm-5\">\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t<input formControlName=\"codCategoria\" name=\"codCategoria\" class=\"form-control\"\r\n\t\t\t\t\t\t\t(change)=\"validaCategoria()\" type=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input formControlName=\"descCategoria\" name=\"descCategoria\" class=\"form-control\"\r\n\t\t\t\t\t\t\ttype=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCategorias()\">\r\n\t\t\t\t\t\t\t\t<em class=\"icon-magnifier\"></em>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<label class=\"col-sm-1 control-label\">Agrupaci&oacute;n</label>\r\n\t\t\t\t\t<div class=\"col-sm-5 pl-0\">\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t<input formControlName=\"codAgrupacion\" name=\"codAgrupacion\" class=\"form-control\"\r\n\t\t\t\t\t\t\t(change)=\"validaAgrupacion()\"  type=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input formControlName=\"descAgrupacion\" name=\"descAgrupacion\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\ttype=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalAgrupacion()\">\r\n\t\t\t\t\t\t\t\t<em class=\"icon-magnifier\"></em>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<label class=\"col-sm-1 control-label text-right\">Prod. Base</label>\r\n\t\t\t\t\t<div class=\"col-sm-5\">\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t<input formControlName=\"codProdBase\" name=\"codProdBase\" class=\"form-control\" (change)=\"validaProdBase()\"\r\n\t\t\t\t\t\t\t type=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input formControlName=\"descProdBase\" name=\"descProdBase\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\ttype=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalProdBase()\">\r\n\t\t\t\t\t\t\t\t<em class=\"icon-magnifier\"></em>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<label class=\"col-sm-1 control-label\">cod. Articulo</label>\r\n\t\t\t\t\t<div class=\"col-sm-5 pl-0\">\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t<input formControlName=\"codArticulo\" name=\"codArticulo\" class=\"form-control\" type=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t<input formControlName=\"codArtVariedad\" name=\"codArtVariedad\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\ttype=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<label class=\"col-sm-1 control-label text-right\">Sucursal</label>\r\n\t\t\t\t\t<div class=\"col-sm-5\">\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t<input formControlName=\"codSucursal\" name=\"codSucursal\" class=\"form-control\" (change)=\"validaSucursal()\"\r\n\t\t\t\t\t\t\t type=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input formControlName=\"descSucursal\" name=\"descSucursal\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\ttype=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalSucursales()\">\r\n\t\t\t\t\t\t\t\t<em class=\"icon-magnifier\"></em>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<label class=\"col-sm-1 control-label\">Bodega</label>\r\n\t\t\t\t\t<div class=\"col-sm-5 pl-0\">\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t<input formControlName=\"codBodega\" name=\"codBodega\" class=\"form-control\"\r\n\t\t\t\t\t\t\t(change)=\"validaBodega()\" type=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input formControlName=\"descBodega\" name=\"descBodega\" class=\"form-control\" type=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalBodega()\">\r\n\t\t\t\t\t\t\t\t<em class=\"icon-magnifier\"></em>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t\t<div class=\"row pull-left mb-4\">\r\n\t\t\t<div class=\"col-sm-3 mr-1\">\r\n\t\t\t\t<button class=\"btn btn-oval btn-sm\" (click)=\"buscar($event)\" type=\"button\">Buscar</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-3 mr-1\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t<button class=\"btn btn-oval btn-sm\" (click)=\"generateExcel()\" [disabled]='!exportar'>Exportar</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<br>\r\n\t\t<br>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"> </th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"> </th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"> </th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"> </th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"> </th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"> </th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"> </th>\r\n\t\t\t\t\t\t\t\t<th class=\"col\">Disponibles</th>\r\n\t\t\t\t\t\t\t\t<th class=\"col\"></th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">Reservado</th>\r\n\t\t\t\t\t\t\t\t<th class=\"col\"></th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">Mal Estado</th>\r\n\t\t\t\t\t\t\t\t<th class=\"col\"></th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">Total</th>\r\n\t\t\t\t\t\t\t\t<th class=\"col\"></th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">LN</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">CT</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">AG</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">PB</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">Cod. Articulo</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">Descripcion</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">Medida</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">u.v - Frac</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"></th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">u.v - Frac.</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"></th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">u.v - Frac.</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"></th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">u.v - Frac.</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"></th>\r\n\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr\r\n\t\t\t\t\t\t\t\t*ngFor=\"let articulo of stockArticulos \t| paginate: {itemsPerPage: 7, currentPage: pageActual};\">\r\n\t\t\t\t\t\t\t\t<td>{{articulo.jli_sdeslinea}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{articulo.jca_sdescategoria}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{articulo.jag_sdesagrupacion}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{articulo.jpb_sdesproductobase}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{articulo.art_scodformato}} - {{articulo.art_scodvariedad}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{articulo.art_sdescripcion }}</td>\r\n\t\t\t\t\t\t\t\t<td>{{articulo.art_smedida}}</td>\r\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{articulo.uventadisponibles}} - {{articulo.fraccionesdisponibles}} </td>\r\n\t\t\t\t\t\t\t\t<td class=\"text-center\"></td>\r\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{articulo.uventareserva}} - {{articulo.fraccionesreserva}}\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td class=\"text-center\"></td>\r\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{articulo.uvtamalestado}} - {{articulo.fraccionesvtamalestado}}\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td class=\"text-center\"></td>\r\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{articulo.uvtatotales}} - {{articulo.fraccionestotales}} </td>\r\n\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<div class=\"text-right\">\r\n\t\t\t\t\t\t<pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\"\r\n\t\t\t\t\t\t\tnextLabel=\"Siguiente\"></pagination-controls>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/existencias/consultaStock/consultaStock.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/existencias/consultaStock/consultaStock.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/existencias/consultaStock/consultaStock.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/routes/existencias/consultaStock/consultaStock.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConsultaStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaStockComponent", function() { return ConsultaStockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_existencias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/existencias.service */ "./src/app/core/consultaService/existencias.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/consultaService/articulo.service */ "./src/app/core/consultaService/articulo.service.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../commonPopUp/sucursalesPopUp/sucursalesPopUp.component */ "./src/app/routes/commonPopUp/sucursalesPopUp/sucursalesPopUp.component.ts");
/* harmony import */ var _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component */ "./src/app/routes/commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component.ts");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _commonPopUp_bodegaPopUp_bodegaPopUp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../commonPopUp/bodegaPopUp/bodegaPopUp.component */ "./src/app/routes/commonPopUp/bodegaPopUp/bodegaPopUp.component.ts");
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
var ConsultaStockComponent = /** @class */ (function () {
    function ConsultaStockComponent(existenciasService, cargador, authService, excelService, utilService, consultasService, modalService, articuloService, administracionOperativaServiceDatos) {
        this.existenciasService = existenciasService;
        this.cargador = cargador;
        this.authService = authService;
        this.excelService = excelService;
        this.utilService = utilService;
        this.consultasService = consultasService;
        this.modalService = modalService;
        this.articuloService = articuloService;
        this.administracionOperativaServiceDatos = administracionOperativaServiceDatos;
        this.fechaActual = new Date();
        this.pageActual = 1;
        this.request = {};
        this.user = {};
        this.stockArticulos = [];
        this.origen = '';
        this.exportar = false;
        this.datos = [];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            codLinea: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descLinea: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            codCategoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descCategoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            codAgrupacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descAgrupacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            codProdBase: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descProdBase: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            codArticulo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            codArtVariedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            codSucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descSucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            codBodega: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descBodega: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            composicion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            descriptor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ConsultaStockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.getDatosUser();
        // console.log('user Stock ' + this.user.nrutoperador);
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14___default.a);
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    ConsultaStockComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
    };
    ConsultaStockComponent.prototype.validaLinea = function () {
        var _this = this;
        if (this.forma.controls.codLinea.value === '') {
            this.forma.controls.codLinea.setValue('');
            this.forma.controls.descLinea.setValue('');
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
                            _this.forma.controls.descLinea.setValue(_this.datos[0].jli_sdeslinea);
                        }
                        else {
                            _this.forma.controls.codLinea.setValue('');
                            _this.forma.controls.descLinea.setValue('');
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
    ConsultaStockComponent.prototype.validaCategoria = function () {
        var _this = this;
        if (this.forma.controls.codCategoria.value === '') {
            this.forma.controls.codCategoria.setValue('');
            this.forma.controls.descCategoria.setValue('');
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
                            _this.forma.controls.descCategoria.setValue(_this.datos[0].jca_sdescategoria);
                        }
                        else {
                            _this.forma.controls.codCategoria.setValue('');
                            _this.forma.controls.descCategoria.setValue('');
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
    ConsultaStockComponent.prototype.validaAgrupacion = function () {
        var _this = this;
        if (this.forma.controls.codAgrupacion.value === '') {
            this.forma.controls.codAgrupacion.setValue('');
            this.forma.controls.descAgrupacion.setValue('');
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
                            _this.forma.controls.descAgrupacion.setValue(_this.datos[0].jag_sdesagrupacion);
                        }
                        else {
                            _this.forma.controls.codAgrupacion.setValue('');
                            _this.forma.controls.descAgrupacion.setValue('');
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
    ConsultaStockComponent.prototype.validaProdBase = function () {
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
    ConsultaStockComponent.prototype.validaBodega = function () {
        var _this = this;
        if (this.forma.controls.codBodega.value === '') {
            this.forma.controls.codBodega.setValue('');
            this.forma.controls.descBodega.setValue('');
        }
        else {
            this.request.runOperador = this.user.nrutoperador;
            this.request.sCodBodega = this.forma.controls.codBodega.value;
            this.cargador.show();
            this.administracionOperativaServiceDatos.getBodegas(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                if (data) {
                    if (data.error.codError != 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.bodegas;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.descBodega.setValue(_this.datos[0].bod_sdescbodega);
                        }
                        else {
                            _this.forma.controls.codBodega.setValue('');
                            _this.forma.controls.descBodega.setValue('');
                            swal('Atención', 'No Existe Bodega', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    ConsultaStockComponent.prototype.validaSucursal = function () {
        var _this = this;
        if (this.forma.controls.codSucursal.value === '') {
            this.forma.controls.codSucursal.setValue('');
            this.forma.controls.descSucursal.setValue('');
        }
        else {
            this.request.nRutOperador = this.user.nrutoperador;
            this.request.sCodSucursal = this.forma.controls.codSucursal.value;
            console.log(this.request);
            this.cargador.show();
            this.administracionOperativaServiceDatos.getSucursales(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                if (data) {
                    if (data.error.codError != 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.sucursalExistencia;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.descSucursal.setValue(_this.datos[0].suc_sdireccion);
                        }
                        else {
                            _this.forma.controls.codSucursal.setValue('');
                            _this.forma.controls.descSucursal.setValue('');
                            swal('Atención', 'No Existe Sucursal', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    ConsultaStockComponent.prototype.openModalLineas = function () {
        this.origen = 'linea';
        var initialState = {
            titulo: 'Líneas',
            origen: 'linea'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_13__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    ConsultaStockComponent.prototype.openModalCategorias = function () {
        this.origen = 'categoria';
        var initialState = {
            titulo: 'Categorías',
            origen: 'categoria'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_13__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    ConsultaStockComponent.prototype.openModalAgrupacion = function () {
        this.origen = 'agrupacion';
        var initialState = {
            titulo: 'Agrupaciones',
            origen: 'agrupacion'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_13__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    ConsultaStockComponent.prototype.openModalProdBase = function () {
        this.origen = 'prodbase';
        var initialState = {
            titulo: 'Productos Base',
            origen: 'prodbase'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_13__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    ConsultaStockComponent.prototype.openModalSucursales = function () {
        console.log("entra al modal sucursal");
        this.origen = 'sucursales';
        var initialState = {
            titulo: 'Sucursales',
            origen: 'sucursales'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_12__["SucursalesPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    ConsultaStockComponent.prototype.openModalBodega = function () {
        this.origen = 'bodega';
        var initialState = {
            titulo: 'Bodegas',
            origen: 'bodega'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_bodegaPopUp_bodegaPopUp_component__WEBPACK_IMPORTED_MODULE_15__["BodegaPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    ConsultaStockComponent.prototype.setData = function (resData) {
        if (resData != 0) {
            switch (this.origen) {
                case 'linea': {
                    this.forma.controls.codLinea.setValue(resData.jli_scodlinea);
                    this.forma.controls.descLinea.setValue(resData.jli_sdeslinea);
                    break;
                }
                case 'categoria': {
                    this.forma.controls.codCategoria.setValue(resData.jca_scodcategoria);
                    this.forma.controls.descCategoria.setValue(resData.jca_sdescategoria);
                    break;
                }
                case 'agrupacion': {
                    this.forma.controls.codAgrupacion.setValue(resData.jag_scodagrupacion);
                    this.forma.controls.descAgrupacion.setValue(resData.jag_sdesagrupacion);
                    break;
                }
                case 'prodbase': {
                    this.forma.controls.codProdBase.setValue(resData.jpb_scodproductobase);
                    this.forma.controls.descProdBase.setValue(resData.jpb_sdesproductobase);
                    break;
                }
                case 'sucursales': {
                    console.log("entra al case");
                    console.log(resData.suc_scodsucursal);
                    this.forma.controls.codSucursal.setValue(resData.suc_scodsucursal);
                    this.forma.controls.descSucursal.setValue(resData.suc_sdireccion);
                    break;
                }
                case 'bodega': {
                    console.log("entra al case bodega");
                    this.forma.controls.codBodega.setValue(resData.bod_scodbodega);
                    this.forma.controls.descBodega.setValue(resData.bod_sdescbodega);
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    ConsultaStockComponent.prototype.buscar = function ($event) {
        var _this = this;
        this.exportar = false;
        this.stockArticulos = [];
        console.log('entra al metodo');
        this.request.nRutOperador = this.user.nrutoperador;
        console.log(this.request.nRutOperador);
        this.request.sCodAgrupacion = this.forma.controls.codAgrupacion.value;
        this.request.sCodBodega = this.forma.controls.codBodega.value;
        this.request.sCodCategoria = this.forma.controls.codCategoria.value;
        this.request.sCodFormato = this.forma.controls.codArticulo.value;
        this.request.sCodLinea = this.forma.controls.codLinea.value;
        this.request.sCodProductoBase = this.forma.controls.codProdBase.value;
        this.request.sCodVariedad = this.forma.controls.codArtVariedad.value;
        this.existenciasService.getArticulosExistencia(this.request)
            .subscribe(function (data) {
            _this.stockArticulos = data.articulosExistencia;
            console.log('data Service' + _this.stockArticulos);
            _this.exportar = true;
        }),
            function (error) {
                console.log('error en el request');
            };
    };
    ConsultaStockComponent.prototype.generateExcel = function () {
        console.log('entra al metodo generarExel');
        var headerExcel = [
            "Línea", "Categoría", "Agrupación", "Prod. Base", "Cod. Articulo", "Medidas", " Disponible U.v - Frac.",
            "Reservado U.v - Frac.", "Mal Estado U.v - Frac.", "Total U.v - Frac."
        ];
        var dataExcel = [];
        for (var i in this.stockArticulos) {
            var articulo = [
                this.stockArticulos[i].jli_sdeslinea,
                this.stockArticulos[i].jca_sdescategoria,
                this.stockArticulos[i].jag_sdesagrupacion,
                this.stockArticulos[i].jpb_sdesproductobase,
                this.stockArticulos[i].art_scodformato + " - " + this.stockArticulos[i].art_scodvariedad,
                this.stockArticulos[i].art_smedida,
                this.stockArticulos[i].uventadisponibles + " - " + this.stockArticulos[i].fraccionesdisponibles,
                this.stockArticulos[i].uventareserva + " - " + this.stockArticulos[i].fraccionesreserva,
                this.stockArticulos[i].uvtamalestado + " - " + this.stockArticulos[i].fraccionesvtamalestado,
                this.stockArticulos[i].uvtatotales + " - " + this.stockArticulos[i].fraccionestotales,
            ];
            dataExcel.push(articulo);
        }
        var fechaExcel = this.utilService.dateToLocalStringFormat(this.fechaActual);
        this.excelService.generateExcel('Listado de Artículos', headerExcel, dataExcel, fechaExcel);
        swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
    };
    ConsultaStockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultaStock',
            template: __webpack_require__(/*! ./consultaStock.component.html */ "./src/app/routes/existencias/consultaStock/consultaStock.component.html"),
            styles: [__webpack_require__(/*! ./consultaStock.component.scss */ "./src/app/routes/existencias/consultaStock/consultaStock.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_consultaService_existencias_service__WEBPACK_IMPORTED_MODULE_3__["ExistenciasService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_7__["ConsultasService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["BsModalService"],
            _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_8__["ArticuloService"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_9__["AdministracionOperativaService"]])
    ], ConsultaStockComponent);
    return ConsultaStockComponent;
}());



/***/ }),

/***/ "./src/app/routes/existencias/detalleOrdenDeCompra/detalleOrdenDeCompra.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/existencias/detalleOrdenDeCompra/detalleOrdenDeCompra.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4> Detalle Orden De Compra</h4>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Fecha de Recepción </label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fecha\" name=\"fecha\" type=\"date\" />\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"col-sm-4\"></div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button class=\"btn btn-oval btn-sm\" routerLink=\"/existencias/buscaOrdenesDeCompra\" type=\"button\">Volver\r\n              </button>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button class=\"btn btn-oval btn-sm\" (click)=\"eliminar()\" type=\"button\">Eliminar</button>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button class=\"btn btn-oval btn-sm\" (click)=\"guardar(articulo)\" type=\"button\">Guardar</button>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button class=\"btn btn-oval btn-sm\" (click)=\"confirmar()\" type=\"button\">Confirmar</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Sucursal</label>\r\n                    <div class=\"col-sm-5 pl-0\">\r\n                        <div class=\"col-sm-3\">\r\n                            <input formControlName=\"codSucursal\" name=\"codSucursal\" class=\"form-control\" (change)=\"validaSucursal()\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-5\">\r\n                            <input formControlName=\"descSucursal\" name=\"descSucursal\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                            <button type=\"button\" (click)=\"openModalSucursales()\" class=\"btn btn-primary\">\r\n                <em class=\"icon-magnifier\"></em>\r\n              </button>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <label class=\"col-sm-1 control-label\">Bodega</label>\r\n                    <div class=\"col-sm-5 pl-0\">\r\n                        <div class=\"col-sm-3\">\r\n                            <input formControlName=\"codBodega\" name=\"codBodega\" class=\"form-control\" (change)=\"validaBodega()\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-5\">\r\n                            <input formControlName=\"descBodega\" name=\"descBodega\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                            <button type=\"button\" (click)=\"openModalBodega()\" class=\"btn btn-primary\">\r\n                <em class=\"icon-magnifier\"></em>\r\n              </button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <br>\r\n        <br>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table\">\r\n                    <table class=\"table table-bordered table-hover jerarquiaProductos\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"align-middle\">op</th>\r\n                                <th class=\"align-middle\">Artículo</th>\r\n                                <th class=\"align-middle\">Código Nestlé</th>\r\n                                <th class=\"align-middle\">Descripcion</th>\r\n                                <th class=\"align-middle\">Medida</th>\r\n                                <th class=\"align-middle\">Precio B</th>\r\n                                <th class=\"align-middle\">Disponible</th>\r\n                                <th class=\"align-middle\">Mínimo</th>\r\n                                <th class=\"align-middle\">Crítico</th>\r\n                                <th class=\"align-middle\">Sugerido / Solicitado</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"align-top\">\r\n                                    <div class=\"checkbox c-checkbox needsclick pt-1\">\r\n                                        <label class=\"needsclick\">\r\n                            <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckTitulo()\" [checked]=\"checkTituloSeleccionado\" />\r\n                            <span class=\"fa fa-check\"></span>\r\n                        </label>\r\n                                    </div>\r\n                                </td>\r\n                                <td class=\"w-100 align-top\">\r\n                                    <input #articulo type=\"text\" [(ngModel)]=\"filterData\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control mw-100\" (input)=\"setArticulo(articulo)\" (keydown.Tab)=\"validaArticulo(articulo,descripcion)\" />\r\n                                    <ul *ngIf=\"verListaArticulo\" class=\"list-group filter-list\">\r\n                                        <li *ngFor=\"let data of parametrosAutocomplete | filter:filterData\" (click)=\"seleccionaArticulo(data, articulo, descripcion,sugerido)\">\r\n                                            <a class=\"list-group-item\">{{data.art_scodformato}}-{{data.art_scodvariedad}}</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </td>\r\n\r\n                                <td class=\"align-top\">\r\n                                    <input #descripcion type=\"text\" [(ngModel)]=\"filterDesc\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control width-desc\" />\r\n                                    <ul *ngIf=\"verListaDescripcion\" class=\"list-group filter-list\">\r\n                                        <li *ngFor=\"let data of parametrosAutocomplete | filterDesc:filterDesc\" (click)=\"seleccionaDescripcion(data, articulo, descripcion)\">\r\n                                            <a class=\"list-group-item\"></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </td>\r\n                                <td>\r\n                                    <ul *ngIf=\"verDescripcion\">\r\n                                        <td *ngFor=\"let articulo of articulosOrdenDeCompra\">\r\n                                            {{articulo.art_sdescripcion}}\r\n                                        </td>\r\n                                    </ul>\r\n                                </td>\r\n                                <td>\r\n                                    <ul *ngIf=\"verDescripcion\">\r\n                                        <td *ngFor=\"let articulo of articulosOrdenDeCompra\">\r\n                                            {{articulo.art_smedida}}\r\n                                        </td>\r\n                                    </ul>\r\n                                </td>\r\n                                <td>\r\n                                    <ul *ngIf=\"verDescripcion\">\r\n                                        <td *ngFor=\"let articulo of articulosOrdenDeCompra\">\r\n                                            {{articulo.npreciobase}}\r\n                                        </td>\r\n                                    </ul>\r\n                                </td>\r\n                                <td>\r\n                                    <ul *ngIf=\"verDescripcion\">\r\n                                        <td *ngFor=\"let articulo of articulosOrdenDeCompra\">\r\n                                            {{articulo.nstockdisponible}}\r\n                                        </td>\r\n                                    </ul>\r\n                                </td>\r\n                                <td>\r\n                                    <ul *ngIf=\"verDescripcion\">\r\n                                        <td *ngFor=\"let articulo of articulosOrdenDeCompra\">\r\n                                            {{articulo.nstockminimo}}\r\n                                        </td>\r\n                                    </ul>\r\n                                </td>\r\n                                <td>\r\n                                    <ul *ngIf=\"verDescripcion\">\r\n                                        <td *ngFor=\"let articulo of articulosOrdenDeCompra\">\r\n                                            {{articulo.nstockcritico}}\r\n                                        </td>\r\n                                    </ul>\r\n                                </td>\r\n                                <td class=\"w-100 align-top\">\r\n                                    <input #sugerido type=\"number\" class=\"form-control mw-100\" (keydown.enter)=\"setSugerido(sugerido,articulo,descripcion)\" />\r\n                                </td>\r\n                            </tr>\r\n                            <tr *ngFor=\"let articulo of articulosOrdenDeCompra2\">\r\n                                <td class=\"pt-0\">\r\n                                    <div class=\"checkbox c-checkbox needsclick\">\r\n                                        <label class=\"needsclick\">\r\n                      <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckJerarquia(articulo)\"\r\n                        [checked]=\"articulo.bCheck\" />\r\n                      <span class=\"fa fa-check\"></span>\r\n                    </label>\r\n                                    </div>\r\n                                </td>\r\n                                <td>{{articulo.art_scodformato}}-{{articulo.art_scodvariedad}}</td>\r\n                                <td>{{articulo.art_scodsap}}</td>\r\n                                <td>{{articulo.art_sdescripcion}}</td>\r\n                                <td>{{articulo.art_smedida}}</td>\r\n                                <td>{{articulo.npreciobase}}</td>\r\n                                <td>{{articulo.nstockdisponible}}</td>\r\n                                <td>{{articulo.nstockminimo}}</td>\r\n                                <td>{{articulo.nstockcritico}}</td>\r\n                                <td><input type=\"number\" class=\"form-control mw-100\" placeholder=\"{{articulo.nSugerido}}\" /></td>\r\n                            </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n            <br>\r\n            <div class=\"text-right\">\r\n                <!-- <pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\"\r\n                  nextLabel=\"Siguiente\"></pagination-controls> -->\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/existencias/detalleOrdenDeCompra/detalleOrdenDeCompra.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/existencias/detalleOrdenDeCompra/detalleOrdenDeCompra.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".width-desc{width:60%}.filter-list{list-style:none;max-height:200px;overflow-y:scroll}\n"

/***/ }),

/***/ "./src/app/routes/existencias/detalleOrdenDeCompra/detalleOrdenDeCompra.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/routes/existencias/detalleOrdenDeCompra/detalleOrdenDeCompra.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DetalleOrdenDeCompraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleOrdenDeCompraComponent", function() { return DetalleOrdenDeCompraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_existencias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/consultaService/existencias.service */ "./src/app/core/consultaService/existencias.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _commonPopUp_bodegaPopUp_bodegaPopUp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commonPopUp/bodegaPopUp/bodegaPopUp.component */ "./src/app/routes/commonPopUp/bodegaPopUp/bodegaPopUp.component.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component */ "./src/app/routes/commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component.ts");
/* harmony import */ var _commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../commonPopUp/sucursalesPopUp/sucursalesPopUp.component */ "./src/app/routes/commonPopUp/sucursalesPopUp/sucursalesPopUp.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/consultaService/articulo.service */ "./src/app/core/consultaService/articulo.service.ts");
/* harmony import */ var _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/consultaService/pedidos.service */ "./src/app/core/consultaService/pedidos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
var DetalleOrdenDeCompraComponent = /** @class */ (function () {
    function DetalleOrdenDeCompraComponent(modalService, authService, utilService, existenciasService, consultasService, cargador, administracionOperativaServiceDatos, articuloService, pedidosService, router) {
        this.modalService = modalService;
        this.authService = authService;
        this.utilService = utilService;
        this.existenciasService = existenciasService;
        this.consultasService = consultasService;
        this.cargador = cargador;
        this.administracionOperativaServiceDatos = administracionOperativaServiceDatos;
        this.articuloService = articuloService;
        this.pedidosService = pedidosService;
        this.router = router;
        this.filterData = '';
        this.filterDesc = '';
        this.fechaHoy = new Date();
        this.origen = '';
        this.descripcionArticulo = '';
        this.combinatoriaValido = false;
        this.checkTituloSeleccionado = false;
        this.user = {};
        this.request = {};
        this.ordenCompra = {};
        this.creaOrdenCompraRequest = {};
        this.aSRV_EntDetOrdenCompra = [];
        this.sucursales = [];
        this.articulosOrdenDeCompra = [];
        this.articulosOrdenDeCompra2 = [];
        this.articulosOrdenDeCompra3 = [];
        this.articulosOrdenDeCompraRequest = [];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            codSucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            descSucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            codBodega: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            descBodega: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required)
        });
    }
    DetalleOrdenDeCompraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.forma.controls.fecha.setValue(this.utilService.dateToStringFormat(this.fechaHoy));
        this.user = this.authService.getDatosUser();
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.parametrosAutocomplete = this.authService.getArticuloAutocomplete();
        this.setDataOrdenDeComrpa();
    };
    DetalleOrdenDeCompraComponent.prototype.setDataOrdenDeComrpa = function () {
        var _this = this;
        console.log('setea orden::: ', this.existenciasService.selectedOrdenDeCompra);
        if (this.existenciasService.selectedOrdenDeCompra === undefined) {
            console.log('es nuevo');
            this.editaOrden = false;
            this.idOrdenCompra = 0;
        }
        else {
            this.editaOrden = true;
            this.idOrdenCompra = this.existenciasService.selectedOrdenDeCompra.orc_nidordencompra;
            console.log(' this.idOrdenCompra;;;;;', this.idOrdenCompra);
            this.request = {};
            this.request.nIdOrdenCompra = this.existenciasService.selectedOrdenDeCompra.orc_nidordencompra;
            this.request.nRutOperador = this.user.nrutoperador;
            console.log('this.request: ', this.request);
            this.cargador.show();
            this.existenciasService.getCargaDetalleOrdenDeCompra(this.request)
                .subscribe(function (data) {
                if (data) {
                    if (data.error.codError != 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.forma.controls.codSucursal.setValue(data.ordenCompraEncabezado[0].suc_scodsucursal);
                        _this.forma.controls.descSucursal.setValue(data.ordenCompraEncabezado[0].suc_sdescsucursal);
                        _this.forma.controls.codBodega.setValue(data.ordenCompraEncabezado[0].bod_scodbodega);
                        _this.forma.controls.descBodega.setValue(data.ordenCompraEncabezado[0].bod_sdescbodega);
                        if (data.ordenCompraDetalle.length > 0) {
                            for (var i in data.ordenCompraDetalle) {
                                var artSelected = {
                                    art_scodformato: data.ordenCompraDetalle[i].doc_scodformato,
                                    art_scodvariedad: data.ordenCompraDetalle[i].doc_scodvariedad,
                                    art_scodsap: data.ordenCompraDetalle[i].art_scodsap,
                                    art_sdescripcion: data.ordenCompraDetalle[i].art_sdescripcion,
                                    art_smedida: data.ordenCompraDetalle[i].art_smedida,
                                    npreciobase: data.ordenCompraDetalle[i].doc_nprecio,
                                    nstockminimo: data.ordenCompraDetalle[i].sto_nstockcritico,
                                    nstockcritico: data.ordenCompraDetalle[i].sto_nstockminimo,
                                    nSugerido: data.ordenCompraDetalle[i].doc_ncantpedida
                                };
                                _this.articulosOrdenDeCompra2.push(artSelected);
                                _this.articulosOrdenDeCompra3.push(artSelected);
                            }
                        }
                        _this.cargador.hide();
                    }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    DetalleOrdenDeCompraComponent.prototype.ngOnDestroy = function () {
        if (this.subData != undefined) {
            this.subData.unsubscribe();
        }
    };
    DetalleOrdenDeCompraComponent.prototype.openModal = function (origen, titulo) {
        this.origen = origen;
        var initialState = {
            titulo: titulo,
            origen: origen,
            forma: this.forma
        };
        if (this.forma.controls.tipoEstructura.value === 'COMBI') {
            this.validaCombinatoria();
            if (this.combinatoriaValido) {
                this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_7__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
            }
            else {
                swal('Atención', 'Sólo puede seleccionar un item a la vez. Agregue el seleccionado, o limpie antes de continuar.', 'info');
            }
        }
        else if (this.forma.controls.tipoEstructura.value === 'LINEA') {
            this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_7__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        }
        else {
            swal('Atención', 'Debe seleccionar el tipo de estructura antes de continuar', 'info');
        }
    };
    DetalleOrdenDeCompraComponent.prototype.setArticulo = function (articulo) {
        if (articulo.value === '') {
            this.verListaArticulo = false;
        }
        else {
            this.verListaArticulo = true;
        }
    };
    DetalleOrdenDeCompraComponent.prototype.validaCombinatoria = function () {
        if (this.forma.controls.desFuerzaVenta.value === '' && this.forma.controls.descOperador.value === '' && this.forma.controls.desCatNegocio.value === '' && this.forma.controls.nombreCliente.value === '') {
            this.combinatoriaValido = true;
        }
        else {
            this.combinatoriaValido = false;
        }
    };
    DetalleOrdenDeCompraComponent.prototype.validaSucursal = function () {
        var _this = this;
        if (this.forma.controls.codSucursal.value === '') {
            this.forma.controls.codSucursal.setValue('');
            this.forma.controls.descSucursal.setValue('');
        }
        else {
            this.request.nRutOperador = this.user.nrutoperador;
            this.request.sCodSucursal = this.forma.controls.codSucursal.value;
            console.log(this.request);
            this.cargador.show();
            this.administracionOperativaServiceDatos.getSucursales(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                if (data) {
                    if (data.error.codError != 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.sucursalExistencia;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.descSucursal.setValue(_this.datos[0].suc_sdireccion);
                        }
                        else {
                            _this.forma.controls.codSucursal.setValue('');
                            _this.forma.controls.descSucursal.setValue('');
                            swal('Atención', 'No Existe Sucursal', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    DetalleOrdenDeCompraComponent.prototype.validaBodega = function () {
        var _this = this;
        if (this.forma.controls.codBodega.value === '') {
            this.forma.controls.codBodega.setValue('');
            this.forma.controls.descBodega.setValue('');
        }
        else {
            this.request.runOperador = this.user.nrutoperador;
            this.request.sCodBodega = this.forma.controls.codBodega.value;
            this.cargador.show();
            this.administracionOperativaServiceDatos.getBodegas(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                if (data) {
                    if (data.error.codError != 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.articulos = data.bodegas;
                        if (_this.articulos.length > 0) {
                            _this.forma.controls.descBodega.setValue(_this.articulos[0].bod_sdescbodega);
                            console.log('Articulo bodega ', _this.articulos[0].bod_sdescbodega);
                        }
                        else {
                            _this.forma.controls.codBodega.setValue('');
                            _this.forma.controls.descBodega.setValue('');
                            swal('Atención', 'No Existe Bodega', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    DetalleOrdenDeCompraComponent.prototype.validaArticulo = function (articulo, descripcion) {
        console.log('validaArticulo');
        var articuloExiste = false;
        if (articulo.value !== '') {
            for (var i in this.parametrosAutocomplete) {
                var str = this.parametrosAutocomplete[i].art_scodformato + "-" + this.parametrosAutocomplete[i].art_scodvariedad;
                if (str.startsWith("" + articulo.value)) {
                    console.log('Articulo valida', str, this.parametrosAutocomplete[i]);
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
    DetalleOrdenDeCompraComponent.prototype.seleccionaArticulo = function (data, articulo, descripcion) {
        var _this = this;
        if (this.forma.invalid) {
            swal('Atención', 'Ingrese Sucursal y Bodega', 'warning');
        }
        else {
            console.log('seleccionaArticulo::::  ', data);
            this.puedeAgregar = false;
            this.verDescripcion = true;
            this.request.nNumLocal = 0;
            this.request.nRutCliente = 0;
            this.request.nRutOperador = Number(this.user.nrutoperador);
            this.request.sCodBodega = null;
            this.request.sCodFormato = data.art_scodformato;
            this.request.sCodRelacionComer = null;
            this.request.sCodVariedad = data.art_scodvariedad;
            console.log('data this.request.:   ', this.request);
            this.cargador.show();
            this.articulosOrdenDeCompra = [];
            this.pedidosService.getCargaArticuloAutoComplete(this.request)
                .subscribe(function (data) {
                console.log('data articuloautocomplete:   ', data);
                _this.cargador.hide();
                if (data) {
                    if (data.error.codError !== 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.articulo;
                        console.log('datos:', _this.datos);
                        if (_this.datos.length > 0) {
                            console.log('PUEDEAGREGAR');
                            articulo.value = _this.datos[0].art_scodformato + "-" + _this.datos[0].art_scodvariedad;
                            descripcion.value = _this.datos[0].art_scodsap;
                            _this.verListaArticulo = false;
                            _this.verListaDescripcion = false;
                            _this.articulosOrdenDeCompra.push(_this.datos[0]);
                        }
                        else {
                            swal('Atención', 'No Existe este Articulo', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
            articulo.value = data.art_scodformato + '-' + data.art_scodvariedad;
            this.descripcionArticulo = '';
            this.verListaArticulo = false;
        }
    };
    DetalleOrdenDeCompraComponent.prototype.setSugerido = function (sugerido, articulo, descripcion) {
        console.log('setSugerido', sugerido.value);
        if (sugerido.value != 0) {
            if (this.articulosOrdenDeCompra.length > 0) {
                var artSelected = {
                    art_scodformato: this.articulosOrdenDeCompra[0].art_scodformato,
                    art_scodvariedad: this.articulosOrdenDeCompra[0].art_scodvariedad,
                    art_scodsap: this.articulosOrdenDeCompra[0].art_scodsap,
                    art_sdescripcion: this.articulosOrdenDeCompra[0].art_sdescripcion,
                    art_smedida: this.articulosOrdenDeCompra[0].art_smedida,
                    npreciobase: this.articulosOrdenDeCompra[0].npreciobase,
                    nstockminimo: this.articulosOrdenDeCompra[0].nstockminimo,
                    nstockcritico: this.articulosOrdenDeCompra[0].nstockcritico,
                    nSugerido: sugerido.value
                };
                if (this.articulosOrdenDeCompra2.length > 0) {
                    for (var i in this.articulosOrdenDeCompra2) {
                        if (articulo.value === this.articulosOrdenDeCompra2[i].art_scodformato + "-" + this.articulosOrdenDeCompra2[i].art_scodvariedad) {
                            this.puedeAgregar = false;
                            break;
                        }
                        else {
                            this.puedeAgregar = true;
                        }
                    }
                    if (this.puedeAgregar === true && this.editaOrden === false) {
                        console.log('puedeAgregar  && editaOrden === false:');
                        this.articulosOrdenDeCompra2.push(artSelected);
                    }
                    else if (this.puedeAgregar === true && this.editaOrden === true) {
                        console.log('argrega al nuevo articulo y llama al servicio agregaArticuloEdit::');
                        this.agregaArticuloEdit(artSelected);
                        this.articulosOrdenDeCompra2.push(artSelected);
                    }
                    else {
                        swal('Atención', 'Seleccione otro Articulo', 'error');
                    }
                }
                else {
                    console.log('argrega this.articulosOrdenDeCompra2.length = 0');
                    this.articulosOrdenDeCompra2.push(artSelected);
                }
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
            this.articulosOrdenDeCompra = [];
            sugerido.value = '';
            articulo.value = '';
            descripcion.value = '';
        }
        else {
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        }
    };
    DetalleOrdenDeCompraComponent.prototype.agregaArticuloEdit = function (artSelected) {
        var _this = this;
        console.log(' getGuardaDetalleOrdenDeCompra  ', artSelected);
        this.request = {};
        this.request.nCantPedida = 0;
        this.request.nCantRecibida = artSelected.nSugerido;
        this.request.nIdOrdenCompra = this.idOrdenCompra;
        this.request.nNumFactura = 0;
        this.request.nRutOperador = Number(this.user.nrutoperador);
        this.request.sCodFormato = artSelected.art_scodformato;
        this.request.sCodVariedad = artSelected.art_scodvariedad;
        this.existenciasService.getGuardaDetalleOrdenDeCompra(this.request)
            .subscribe(function (data) {
            if (data) {
                console.log('respuesta Servicio: ', data);
                if (data.error.codError != 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
                else {
                    console.log('respuesta Servicio agregaArticuloEdit: ', data);
                }
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    DetalleOrdenDeCompraComponent.prototype.openModalSucursales = function () {
        console.log("entra al modal sucursal");
        this.origen = 'sucursales';
        var initialState = {
            titulo: 'Sucursales',
            origen: 'sucursales'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_8__["SucursalesPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleOrdenDeCompraComponent.prototype.openModalBodega = function () {
        this.origen = 'bodega';
        var initialState = {
            titulo: 'Bodegas',
            origen: 'bodega'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_bodegaPopUp_bodegaPopUp_component__WEBPACK_IMPORTED_MODULE_4__["BodegaPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleOrdenDeCompraComponent.prototype.setData = function (resData) {
        if (resData != 0) {
            switch (this.origen) {
                case 'sucursales': {
                    console.log("entra al case Sucursal");
                    console.log(resData.suc_scodsucursal);
                    this.forma.controls.codSucursal.setValue(resData.suc_scodsucursal);
                    this.forma.controls.descSucursal.setValue(resData.suc_sdireccion);
                    break;
                }
                case 'bodega': {
                    console.log("entra al case bodega");
                    this.forma.controls.codBodega.setValue(resData.bod_scodbodega);
                    this.forma.controls.descBodega.setValue(resData.bod_sdescbodega);
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    DetalleOrdenDeCompraComponent.prototype.validaCheckTitulo = function () {
        this.checkTituloSeleccionado = !this.checkTituloSeleccionado;
        if (this.checkTituloSeleccionado) {
            console.log('realizar accion');
            for (var i in this.articulosOrdenDeCompra2) {
                this.articulosOrdenDeCompra2[i].bCheck = true;
            }
        }
        else {
            console.log('deshacer accion');
            for (var i in this.articulosOrdenDeCompra2) {
                this.articulosOrdenDeCompra2[i].bCheck = false;
            }
        }
    };
    DetalleOrdenDeCompraComponent.prototype.validaCheckEstructura = function (estructura) {
        estructura.bCheck = !estructura.bCheck;
        if (estructura.bCheck) {
            console.log('checkeado');
        }
        else {
            console.log('NO checkeado');
        }
    };
    DetalleOrdenDeCompraComponent.prototype.validaCheckJerarquia = function (articulo) {
        articulo.bCheck = !articulo.bCheck;
        if (articulo.bCheck) {
            console.log('checkeado');
        }
        else {
            console.log('NO checkeado');
        }
    };
    DetalleOrdenDeCompraComponent.prototype.cargarListadoJerarquiasComerciales = function (data) {
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
                jpb_sdesproductobase: data[i].jpb_sdesproductobase,
                jpb_medida: data[i].art_smedida
            };
            this.articulosOrdenDeCompra.push(estructura);
            console.log('articulo:' + this.articulosOrdenDeCompra);
        }
        if (this.articulosOrdenDeCompra.length > 0) {
            this.forma.controls.porcDescuento.setValue(this.articulosOrdenDeCompra[0].dac_nporcdescto);
        }
    };
    DetalleOrdenDeCompraComponent.prototype.volver = function () {
        console.log('Volver');
    };
    DetalleOrdenDeCompraComponent.prototype.eliminar = function () {
        var _this = this;
        console.log('eliminar', this.articulosOrdenDeCompra2);
        if (this.articulosOrdenDeCompra2.length > 0) {
            if (this.checkTituloSeleccionado && this.editaOrden === false) {
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
                    _this.articulosOrdenDeCompra2 = [];
                    _this.checkTituloSeleccionado = false;
                });
            }
            else if (this.checkTituloSeleccionado && this.editaOrden === true) {
                console.log('elimina articulos editados');
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
                    for (var i in _this.articulosOrdenDeCompra2) {
                        var articulo = {
                            nCantPedida: 0,
                            nCantRecibida: _this.articulosOrdenDeCompra2[i].nSugerido,
                            nIdOrdenCompra: _this.idOrdenCompra,
                            nRutOperador: Number(_this.user.nrutoperador),
                            sCodFormato: _this.articulosOrdenDeCompra2[i].art_scodformato,
                            sCodVariedad: _this.articulosOrdenDeCompra2[i].art_scodvariedad,
                        };
                        _this.eliminaArticulo(articulo);
                    }
                    _this.articulosOrdenDeCompra2 = [];
                    _this.checkTituloSeleccionado = false;
                });
            }
            else {
                if (this.articulosOrdenDeCompra2.length > 0 && this.editaOrden === false) {
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
                        var j = _this.articulosOrdenDeCompra2.length;
                        for (var i = 0; i < j; i++) {
                            if (_this.articulosOrdenDeCompra2[i].bCheck === true) {
                                _this.articulosOrdenDeCompra2.splice(_this.articulosOrdenDeCompra2.indexOf(_this.articulosOrdenDeCompra2[i]), 1);
                                i--;
                                j--;
                            }
                        }
                    });
                }
                else if (this.articulosOrdenDeCompra2.length > 0 && this.editaOrden === true) {
                    console.log('elimina articulo editado uno a uno this.editaOrden === true');
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
                        var j = _this.articulosOrdenDeCompra2.length;
                        for (var i = 0; i < j; i++) {
                            if (_this.articulosOrdenDeCompra2[i].bCheck === true) {
                                var articulo = {
                                    nCantPedida: 0,
                                    nCantRecibida: _this.articulosOrdenDeCompra2[i].nSugerido,
                                    nIdOrdenCompra: _this.idOrdenCompra,
                                    nRutOperador: Number(_this.user.nrutoperador),
                                    sCodFormato: _this.articulosOrdenDeCompra2[i].art_scodformato,
                                    sCodVariedad: _this.articulosOrdenDeCompra2[i].art_scodvariedad,
                                };
                                console.log('elimina articulo editado uno a uno this.editaOrden === true', articulo);
                                _this.articulosOrdenDeCompra2.splice(_this.articulosOrdenDeCompra2.indexOf(_this.articulosOrdenDeCompra2[i]), 1);
                                _this.eliminaArticulo(articulo);
                                i--;
                                j--;
                            }
                        }
                    });
                }
            }
        }
    };
    DetalleOrdenDeCompraComponent.prototype.eliminaArticulo = function (articulo) {
        var _this = this;
        console.log('entra al metodo eliminar', articulo);
        this.cargador.show();
        this.existenciasService.getEliminaArticuloCompra(articulo)
            .subscribe(function (data) {
            if (data) {
                console.log('respuesta Servicio: ', data);
                if (data.error.codError != 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
                else {
                    _this.idOrdenCompra = data.idOrdenCompra;
                    _this.cargador.hide();
                    swal('Exito!', 'Se han eliminado correctamente los articulos seleccionado!', 'success');
                }
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    DetalleOrdenDeCompraComponent.prototype.guardar = function (articulo) {
        var _this = this;
        console.log('guardar ::::::::::::::::');
        this.aSRV_EntDetOrdenCompra = [];
        if (this.editaOrden == true) {
            console.log('editar orden');
            this.actualizaOrden();
        }
        if (this.articulosOrdenDeCompra2.length > 0) {
            for (var i in this.articulosOrdenDeCompra2) {
                var artSelected = {
                    nCantPedida: this.articulosOrdenDeCompra2[i].nSugerido,
                    nCantRecibida: 0,
                    nNumFactura: 0,
                    nRutOperador: Number(this.user.nrutoperador),
                    sCodFormato: this.articulosOrdenDeCompra2[i].art_scodformato,
                    sCodVariedad: this.articulosOrdenDeCompra2[i].art_scodvariedad
                };
                this.aSRV_EntDetOrdenCompra.push(artSelected);
                this.creaOrdenCompraRequest.aSRV_EntDetOrdenCompra = this.aSRV_EntDetOrdenCompra;
                this.creaOrdenCompraRequest.lSalIdOrdCompra = this.idOrdenCompra;
                this.creaOrdenCompraRequest.nRunUsuarioCrea = this.user.nrunusuario;
                console.log(' this.idOrdenCompra2 :::', this.idOrdenCompra);
                this.ordenCompra.dFhoRecepcionEstimada = '2009050200000000',
                    this.ordenCompra.nIdOrdenCompra = this.idOrdenCompra;
                this.ordenCompra.nRutOperador = this.user.nrutoperador,
                    this.ordenCompra.sCodBodega = this.forma.controls.codBodega.value,
                    this.ordenCompra.sCodSucursal = this.forma.controls.codSucursal.value;
                this.creaOrdenCompraRequest.ordenCompra = this.ordenCompra;
            }
        }
        console.log('this.creaOrdenCompraRequest: ', this.creaOrdenCompraRequest);
        this.cargador.show();
        this.existenciasService.getCreaDetalleOrdenDeCompra(this.creaOrdenCompraRequest)
            .subscribe(function (data) {
            if (data) {
                console.log('respuesta Servicio: ', data);
                if (data.error.codError != 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
                else {
                    _this.idOrdenCompra = data.idOrdenCompra;
                    _this.cargador.hide();
                    swal({
                        title: "Atención",
                        text: "Se ha guardado temporalmente la orden de compra N\u00B0 " + _this.idOrdenCompra,
                        icon: "success",
                        buttons: ["Exportar", "Agregar"],
                    });
                }
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    DetalleOrdenDeCompraComponent.prototype.confirmar = function () {
        var _this = this;
        console.log('this.creaOrdenCompraRequest: ', this.creaOrdenCompraRequest);
        this.cargador.show();
        if (this.idOrdenCompra.isNullOrUndefined) {
            console.log('idOrdenCompra1 ', this.idOrdenCompra);
            this.request = {};
            this.request.nIdOrdenCompra = this.idOrdenCompra;
            this.request.nRunUsuario = this.user.nrunusuario;
            this.request.nRutOperador = Number(this.user.nrutoperador);
            this.request.sCodBodega = this.forma.controls.codBodega.value;
            this.request.sCodEstado = 'SOLIC';
            this.request.sCodSucursal = this.forma.controls.codSucursal.value;
            console.log('this.request:::: ', this.request);
            this.existenciasService.getActualizaOrdenDeCompra(this.request)
                .subscribe(function (data) {
                if (data) {
                    // if (data.error.codError != 0) {
                    // 	swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    // } else {
                    console.log('this.getActualizaOrdenDeCompra :::  ', data);
                    _this.cargador.hide();
                    // }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    DetalleOrdenDeCompraComponent.prototype.actualizaOrden = function () {
        var _this = this;
        console.log('');
        console.log('idOrdenCompra1 ', this.idOrdenCompra);
        this.request = {};
        this.request.nIdOrdenCompra = this.idOrdenCompra;
        this.request.nRunUsuario = this.user.nrunusuario;
        this.request.nRutOperador = Number(this.user.nrutoperador);
        this.request.sCodBodega = this.forma.controls.codBodega.value;
        this.request.sCodEstado = 'CREAD';
        this.request.sCodSucursal = this.forma.controls.codSucursal.value;
        console.log('this.request:::: ', this.request);
        this.existenciasService.getActualizaOrdenDeCompra(this.request)
            .subscribe(function (data) {
            if (data) {
                // if (data.error.codError != 0) {
                // 	swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                // } else {
                console.log('this.getActualizaOrdenDeCompra :::  ', data);
                _this.cargador.hide();
                // }
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    DetalleOrdenDeCompraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalleOrdenDeCompra',
            template: __webpack_require__(/*! ./detalleOrdenDeCompra.component.html */ "./src/app/routes/existencias/detalleOrdenDeCompra/detalleOrdenDeCompra.component.html"),
            styles: [__webpack_require__(/*! ./detalleOrdenDeCompra.component.scss */ "./src/app/routes/existencias/detalleOrdenDeCompra/detalleOrdenDeCompra.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"], _core_consultaService_existencias_service__WEBPACK_IMPORTED_MODULE_2__["ExistenciasService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__["ConsultasService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_6__["AdministracionOperativaService"],
            _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_12__["ArticuloService"], _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_13__["PedidosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]])
    ], DetalleOrdenDeCompraComponent);
    return DetalleOrdenDeCompraComponent;
}());



/***/ }),

/***/ "./src/app/routes/existencias/detalleSalidaVaria/detalleSalidaVaria.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/routes/existencias/detalleSalidaVaria/detalleSalidaVaria.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <h4>Salidas Varias<em class=\"fa fa-angle-right mh-2\"></em>Detalle</h4>\r\n  </div>\r\n\r\n  <div class=\"panel-body\">\r\n    <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n      <div class=\"form-group\">\r\n\r\n        <!-- <div class=\"col-sm-12\">\r\n          <label class=\"col-sm-1 control-label\">Nº Salida Varia</label>\r\n          <div class=\"col-sm-2\">\r\n            <input class=\"form-control w-110 ph-1 text-center\" appNaturalNumber formControlName=\"salidaVaria\" name=\"salidaVaria\" type=\"number\"\r\n              maxlength=\"10\"\r\n              oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n          </div>\r\n        </div> -->\r\n\r\n        <div class=\"col-sm-12\">\r\n          <label class=\"col-sm-1 control-label\">Nro Salida Varia</label>\r\n          <div class=\"col-sm-5 pl-0\">\r\n            <div class=\"col-sm-4\">\r\n              <input class=\"form-control\" appNaturalNumber formControlName=\"salidaVaria\" name=\"salidaVaria\" type=\"number\" maxlength=\"10\" \r\n              oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12\">\r\n          <label class=\"col-sm-1 control-label\">Bodega</label>\r\n          <div class=\"col-sm-5 pl-0\">\r\n            <div class=\"col-sm-4\">\r\n              <input formControlName=\"codBodega\" name=\"codBodega\" class=\"form-control\" (change)=\"validaBodega()\"\r\n                type=\"text\" />\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <input formControlName=\"descBodega\" name=\"descBodega\" class=\"form-control\" type=\"text\" />\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalBodega()\">\r\n                <em class=\"icon-magnifier\"></em>\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n          <label class=\"col-sm-1 control-label text-right\">Tipo Movimiento</label>\r\n          <div class=\"col-sm-5\">\r\n            <div class=\"col-sm-5\">\r\n              <select class=\"form-control pv-0\" formControlName=\"codTipoMovimiento\" name=\"codTipoMovimiento\">\r\n                <option *ngFor=\"let tipoMovimiento of tiposMovimiento\" [ngValue]=\"tipoMovimiento.par_codparametro01\">\r\n                  {{tipoMovimiento.par_deslargo01}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12\">\r\n          <label class=\"col-sm-1 control-label\">Estado</label>\r\n          <div class=\"col-sm-5 pl-0\">\r\n            <div class=\"col-sm-4\">\r\n              <input formControlName=\"codEstado\" name=\"codEstado\" class=\"form-control\" type=\"text\" />\r\n            </div>\r\n          </div>\r\n          <label class=\"col-sm-1 control-label text-right\">Fecha Estado</label>\r\n          <div class=\"col-sm-5\">\r\n            <div class=\"col-sm-4\">\r\n              <input formControlName=\"fechaEstado\" name=\"fechaEstado\" class=\"form-control\" (change)=\"validaSucursal()\"\r\n                type=\"text\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12\">\r\n          <label class=\"col-sm-1 control-label\">Creador</label>\r\n          <div class=\"col-sm-5 pl-0\">\r\n            <div class=\"col-sm-4\">\r\n              <input formControlName=\"codCreador\" name=\"codCreador\" class=\"form-control\" type=\"text\" />\r\n            </div>\r\n          </div>\r\n          <label class=\"col-sm-1 control-label text-right\">Fecha Emisión</label>\r\n          <div class=\"col-sm-5\">\r\n            <div class=\"col-sm-4\">\r\n              <input formControlName=\"fechaEmision\" name=\"fechaEmision\" class=\"form-control\" (change)=\"validaSucursal()\"\r\n                type=\"text\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12\">\r\n          <label class=\"col-sm-1 control-label\">Autorizador</label>\r\n          <div class=\"col-sm-5 pl-0\">\r\n            <div class=\"col-sm-4\">\r\n              <input formControlName=\"codAutorizador\" name=\"codAutorizador\" class=\"form-control\" type=\"text\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12\">\r\n          <label class=\"col-sm-1 control-label\">Observación</label>\r\n          <div class=\"col-sm-5 pl-0\">\r\n            <div class=\"col-sm-12\">\r\n              <textarea formControlName=\"observacion\" name=\"observacion\" class=\"form-control\" rows=\"4\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row pull-left mb-4\">\r\n        <div class=\"col-sm-3\">\r\n          <a routerLink=\"/administracionComercial/accionesComerciales\" class=\"btn btn-oval btn-sm\">Volver</a>\r\n        </div>\r\n        <div class=\"col-sm-3 mr-2\">\r\n          <button class=\"btn btn-oval btn-sm\" type=\"button\" [disabled]=\"noVigente\"\r\n            (click)=\"guardaBonificacion()\">Aprobar</button>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <button class=\"btn btn-oval btn-sm\" type=\"button\" [disabled]=\"inhabilitar || nuevaAccionComercial\"\r\n            (click)=\"inhabilitarAccion()\">Rechazar</button>\r\n        </div>\r\n      </div>\r\n\r\n      <br>\r\n      <br>\r\n      <hr>\r\n\r\n      <div class=\"panel-heading pl-0 mt-4\">\r\n        <h4 class=\"mv-0\">Artículos</h4>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"panel\">\r\n            <div>\r\n              <div class=\"row pull-left mb-4\">\r\n                <div class=\"col-sm-3 mr-3\">\r\n                  <button class=\"btn btn-oval btn-sm\" type=\"button\" [disabled]='noVigente'\r\n                    (click)=\"eliminarJerarquia()\">Eliminar</button>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"table\">\r\n                <table class=\"table table-bordered table-hover jerarquiaProductos\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"no-border-bottom\"></th>\r\n                      <th class=\"no-border-bottom\"></th>\r\n                      <th class=\"no-border-bottom\"></th>\r\n                      <th colspan=\"2\">Cantidad</th>\r\n                      <!-- <th class=\"no-border-bottom\"></th> -->\r\n                      <!-- <th class=\"no-border-bottom\"></th> -->\r\n                      <!-- <th colspan=\"2\">Cantidad</th> -->\r\n                    </tr>\r\n                    <tr>\r\n                      <th class=\"w-60\">\r\n                        <div class=\"checkbox c-checkbox needsclick pt-1 w-40 pl-1\">\r\n                          <label class=\"needsclick\">\r\n                            <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckTituloJerarquia()\"\r\n                              [checked]=\"checkTituloJerarquiaSeleccionado\" />\r\n                            <span class=\"fa fa-check\"></span>\r\n                          </label>\r\n                        </div>\r\n                      </th>\r\n\r\n                      <th class=\"align-middle\">Artículo</th>\r\n                      <th class=\"align-middle width-30-porc\">Descripción</th>\r\n                      <th class=\"align-middle\">Medida</th>\r\n\r\n\r\n                      <th class=\"align-middle\">Unid. Venta</th>\r\n                      <th class=\"align-middle\">Fracción</th>\r\n                      <!-- <th class=\"align-middle\">Art.Bonificado</th> -->\r\n                      <!-- <th class=\"align-middle width-30-porc\">Descripción Artículo</th> -->\r\n                      <!-- <th class=\"align-middle\">Unid. Venta</th>\r\n                      <th class=\"align-middle\">Fracción</th> -->\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let articulo of articulosJerarquia\">\r\n\r\n                      <td class=\"pt-0\">\r\n                        <div class=\"checkbox c-checkbox needsclick\">\r\n                          <label class=\"needsclick\">\r\n                            <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckJerarquia(articulo)\"\r\n                              [checked]=\"articulo.bCheck\" />\r\n                            <span class=\"fa fa-check\"></span>\r\n                          </label>\r\n                        </div>\r\n                      </td>\r\n\r\n                      <td class=\"w-80\">{{articulo.sCodFormato}}-{{articulo.sCodVariedad}}</td>\r\n\r\n                      <td>{{articulo.sDescripcion}}</td>\r\n\r\n                      <td class=\"w-80 text-right\"\r\n                        *ngIf=\"articulo.sCodFormato + '-' + articulo.sCodVariedad !== editRowID\">\r\n                        {{articulo.nCantidad}}</td>\r\n\r\n                      <td *ngIf=\"articulo.sCodFormato + '-' + articulo.sCodVariedad === editRowID\">\r\n                        <input appNaturalNumber #cantidad type=\"number\" class=\"form-control w-80 ph-1 text-right\"\r\n                          [(ngModel)]=\"articulo.nCantidad\" [ngModelOptions]=\"{standalone: true}\"\r\n                          (keydown.Tab)=\"validaCantidad(cantidad)\" maxlength=\"10\"\r\n                          oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                      </td>\r\n\r\n                      <td class=\"w-80 text-right\"\r\n                        *ngIf=\"articulo.sCodFormato + '-' + articulo.sCodVariedad !== editRowID\">\r\n                        {{articulo.nFraccion}}</td>\r\n\r\n\r\n                      <td *ngIf=\"articulo.sCodFormato + '-' + articulo.sCodVariedad === editRowID\">\r\n                        <input appNaturalNumber #fraccion type=\"number\" class=\"form-control w-80 ph-1 text-right\"\r\n                          [(ngModel)]=\"articulo.nFraccion\" [ngModelOptions]=\"{standalone: true}\"\r\n                          (keydown.Tab)=\"validaCantidad(fraccion)\" maxlength=\"10\"\r\n                          oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                      </td>\r\n\r\n                      <td class=\"w-80\">{{articulo.sCodFormatoBonificado}}-{{articulo.sCodVariedadBonificado}}</td>\r\n                      \r\n                      <td>{{articulo.sDescripcionBonificado}}</td>\r\n                      \r\n                      <td class=\"w-80 text-right\"\r\n                        *ngIf=\"articulo.sCodFormato + '-' + articulo.sCodVariedad !== editRowID\">\r\n                        {{articulo.nCantidadBonificado}}</td>\r\n                      <td *ngIf=\"articulo.sCodFormato + '-' + articulo.sCodVariedad === editRowID\">\r\n                        <input appNaturalNumber #cantidadBoni type=\"number\" class=\"form-control w-80 ph-1 text-right\"\r\n                          [(ngModel)]=\"articulo.nCantidadBonificado\" [ngModelOptions]=\"{standalone: true}\"\r\n                          (keydown.Tab)=\"validaCantidad(cantidadBoni)\" maxlength=\"10\"\r\n                          oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                      </td>\r\n                      <td class=\"w-80 text-right\"\r\n                        *ngIf=\"articulo.sCodFormato + '-' + articulo.sCodVariedad !== editRowID\">\r\n                        {{articulo.nFraccionBonificado}}</td>\r\n                      <td *ngIf=\"articulo.sCodFormato + '-' + articulo.sCodVariedad === editRowID\">\r\n                        <input appNaturalNumber #fraccionBoni type=\"number\" class=\"form-control w-80 ph-1 text-right\"\r\n                          [(ngModel)]=\"articulo.nFraccionBonificado\" [ngModelOptions]=\"{standalone: true}\"\r\n                          (keydown.Tab)=\"validaCantidad(fraccionBoni)\" maxlength=\"10\"\r\n                          oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                      </td>\r\n                      <td *ngIf=\"!noVigente\">\r\n                        <span *ngIf=\"!articulo.verOK\" class=\"table-remove\">\r\n                          <a class=\"text\" (click)=\"edit(articulo)\" data-toggle=\"tooltip\" data-placement=\"bottom\"\r\n                            title=\"Editar\">\r\n                            <em class=\"fa fa-edit\"></em>\r\n                          </a>\r\n                        </span>\r\n                        <span *ngIf=\"articulo.verOK\" class=\"table-remove\">\r\n                          <a class=\"text\" (click)=\"save(articulo)\" data-toggle=\"tooltip\" data-placement=\"bottom\"\r\n                            title=\"Guardar\">\r\n                            <em class=\"fa fa-check\"></em>\r\n                          </a>\r\n                        </span>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td></td>\r\n                      <td class=\"w-100 align-top\">\r\n                        <input #articulo type=\"text\" [(ngModel)]=\"filterData\" [ngModelOptions]=\"{standalone: true}\"\r\n                          class=\"form-control w-80\" (input)=\"setArticulo(articulo)\"\r\n                          (keydown.Tab)=\"validaArticulo(articulo,descripcion,cantidad)\" />\r\n                        <ul *ngIf=\"verListaArticulo\" class=\"list-group filter-list\">\r\n                          <li *ngFor=\"let data of parametrosAutocomplete | filter:filterData\"\r\n                            (click)=\"seleccionaArticulo(data, articulo, descripcion, cantidad)\">\r\n                            <a class=\"list-group-item\">{{data.art_scodformato}}-{{data.art_scodvariedad}}</a>\r\n                          </li>\r\n                        </ul>\r\n                      </td>\r\n                      <td class=\"align-top\">\r\n                        <input #descripcion type=\"text\" [(ngModel)]=\"filterDesc\" [ngModelOptions]=\"{standalone: true}\"\r\n                          class=\"form-control width-desc\" (input)=\"setDescripcion(descripcion)\"\r\n                          (keydown.Tab)=\"validaDescripcion(articulo,descripcion,cantidad)\" />\r\n                        <ul *ngIf=\"verListaDescripcion\" class=\"list-group filter-list\">\r\n                          <li *ngFor=\"let data of parametrosAutocomplete | filterDesc:filterDesc\"\r\n                            (click)=\"seleccionaDescripcion(data, articulo, descripcion, cantidad)\">\r\n                            <a class=\"list-group-item\">{{data.art_sdescripcion}}</a>\r\n                          </li>\r\n                        </ul>\r\n                      </td>\r\n                      <td class=\"align-top\">\r\n                        <input appNaturalNumber #cantidad type=\"number\" class=\"form-control w-80 ph-1 text-right\"\r\n                          (keydown.Tab)=\"validaCantidad(cantidad)\" maxlength=\"10\"\r\n                          oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                      </td>\r\n                      <td class=\"align-top\">\r\n                        <input appNaturalNumber #fraccion type=\"number\" class=\"form-control w-80 ph-1 text-right\"\r\n                          (keydown.Tab)=\"validaCantidad(fraccion)\" maxlength=\"10\"\r\n                          oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                      </td>\r\n                      <!-- <td class=\"w-100 align-top\">\r\n                        <input #articuloBoni type=\"text\" [(ngModel)]=\"filterDataB\" [ngModelOptions]=\"{standalone: true}\"\r\n                          class=\"form-control w-80\" (input)=\"setArticuloBoni(articuloBoni)\"\r\n                          (keydown.Tab)=\"validaArticuloBoni(articuloBoni,descripcionBoni,cantidadBoni)\" />\r\n                        <ul *ngIf=\"verListaArticuloBoni\" class=\"list-group filter-list\">\r\n                          <li *ngFor=\"let data of parametrosAutocomplete | filter:filterDataB\"\r\n                            (click)=\"seleccionaArticuloBoni(data, articuloBoni, descripcionBoni, cantidadBoni)\">\r\n                            <a class=\"list-group-item\">{{data.art_scodformato}}-{{data.art_scodvariedad}}</a>\r\n                          </li>\r\n                        </ul>\r\n                      </td> -->\r\n                      <!-- <td class=\"align-top\">\r\n                        <input #descripcionBoni type=\"text\" [(ngModel)]=\"filterDescB\"\r\n                          [ngModelOptions]=\"{standalone: true}\" class=\"form-control width-desc\"\r\n                          (input)=\"setDescripcionBoni(descripcionBoni)\"\r\n                          (keydown.Tab)=\"validaDescripcionBoni(articuloBoni,descripcionBoni,cantidadBoni)\" />\r\n                        <ul *ngIf=\"verListaDescripcionBoni\" class=\"list-group filter-list\">\r\n                          <li *ngFor=\"let data of parametrosAutocomplete | filterDesc:filterDescB\"\r\n                            (click)=\"seleccionaDescripcionBoni(data, articuloBoni, descripcionBoni, cantidadBoni)\">\r\n                            <a class=\"list-group-item\">{{data.art_sdescripcion}}</a>\r\n                          </li>\r\n                        </ul>\r\n                      </td> -->\r\n                      <!-- <td class=\"align-top\">\r\n                        <input appNaturalNumber #cantidadBoni type=\"number\" class=\"form-control w-80 ph-1 text-right\"\r\n                          (keydown.Tab)=\"validaCantidad(cantidadBoni)\" maxlength=\"10\"\r\n                          oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                      </td>\r\n                      <td class=\"align-top\">\r\n                        <input appNaturalNumber #fraccionBoni type=\"number\" class=\"form-control w-80 ph-1 text-right\"\r\n                          (keydown.Tab)=\"validaCantidad(fraccionBoni)\"\r\n                          (keyup.enter)=\"agregarRegla(articulo, descripcion, cantidad, fraccion, articuloBoni, descripcionBoni, cantidadBoni,fraccionBoni)\"\r\n                          maxlength=\"10\"\r\n                          oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                      </td> -->\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/existencias/detalleSalidaVaria/detalleSalidaVaria.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/routes/existencias/detalleSalidaVaria/detalleSalidaVaria.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-border-bottom{border-bottom:1px solid #85b3cd !important}.filter-list{list-style:none;max-height:200px;overflow-y:scroll}.width-30-porc{width:30% !important}\n"

/***/ }),

/***/ "./src/app/routes/existencias/detalleSalidaVaria/detalleSalidaVaria.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/routes/existencias/detalleSalidaVaria/detalleSalidaVaria.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DetalleSalidaVariaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleSalidaVariaComponent", function() { return DetalleSalidaVariaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_consultaService_administracionComercial_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/consultaService/administracionComercial.service */ "./src/app/core/consultaService/administracionComercial.service.ts");
/* harmony import */ var _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component */ "./src/app/routes/commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component.ts");
/* harmony import */ var _commonPopUp_clienteACPopUp_clienteACPopUp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../commonPopUp/clienteACPopUp/clienteACPopUp.component */ "./src/app/routes/commonPopUp/clienteACPopUp/clienteACPopUp.component.ts");
/* harmony import */ var _commonPopUp_clienteRelComercialPopUp_clienteRelComercialPopUp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../commonPopUp/clienteRelComercialPopUp/clienteRelComercialPopUp.component */ "./src/app/routes/commonPopUp/clienteRelComercialPopUp/clienteRelComercialPopUp.component.ts");
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
var DetalleSalidaVariaComponent = /** @class */ (function () {
    function DetalleSalidaVariaComponent(administracionComercialService, authService, utilService, consultasService, modalService, cargador, router) {
        this.administracionComercialService = administracionComercialService;
        this.authService = authService;
        this.utilService = utilService;
        this.consultasService = consultasService;
        this.modalService = modalService;
        this.cargador = cargador;
        this.router = router;
        this.fechaActual = new Date();
        this.nuevaAccionComercial = false;
        this.request = {};
        this.requestGrabar = {};
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
        this.tiposMovimiento = [];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            salidaVaria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            codBodega: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            descBodega: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            codTipoMovimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            codEstado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            fechaEstado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            codCreador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            fechaEmision: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            codAutorizador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            observacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
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
    DetalleSalidaVariaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parametrosAutocomplete = this.authService.getArticuloAutocomplete();
        if (this.administracionComercialService.selectedAccionComercial.aco_nidaccion) {
            this.forma.controls.fechaCreacion.disable();
            this.forma.controls.numero.disable();
            this.forma.controls.desctipoEstructura.disable();
            // this.forma.controls.tipo.disable();
            this.cargarDatosAccionComercial();
        }
        else {
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
    DetalleSalidaVariaComponent.prototype.ngOnDestroy = function () {
        if (this.subData != undefined) {
            this.subData.unsubscribe();
        }
    };
    DetalleSalidaVariaComponent.prototype.openModal = function (origen, titulo) {
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
    DetalleSalidaVariaComponent.prototype.openModalFzaVta = function () {
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
    DetalleSalidaVariaComponent.prototype.openModalOperador = function () {
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
    DetalleSalidaVariaComponent.prototype.openModalcatNegocio = function () {
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
    DetalleSalidaVariaComponent.prototype.openModalCliente = function () {
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
    DetalleSalidaVariaComponent.prototype.openModalClienteLocalRC = function () {
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
    DetalleSalidaVariaComponent.prototype.validaCombinatoria = function () {
        if (this.forma.controls.desFuerzaVenta.value === '' && this.forma.controls.descOperador.value === '' && this.forma.controls.desCatNegocio.value === '' && this.forma.controls.nombreCliente.value === '') {
            this.combinatoriaValido = true;
        }
        else {
            this.combinatoriaValido = false;
        }
    };
    DetalleSalidaVariaComponent.prototype.cargarDatosAccionComercial = function () {
        var _this = this;
        this.request.nIdAccionComercial = this.administracionComercialService.selectedAccionComercial.aco_nidaccion;
        this.request.sCodTipoDescuento = '00000';
        //carga encabezado Accion Comercial
        this.administracionComercialService.getEncabezadoAccionComercial(this.request)
            .subscribe(function (data) {
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
    DetalleSalidaVariaComponent.prototype.cargaCombos = function () {
        this.tipo = this.authService.getParametrosTipoDescuento();
        this.tipoEstructura = this.authService.getParametrosTipoEstructura();
    };
    DetalleSalidaVariaComponent.prototype.cargarEncabezadoEstructurasComerciales = function (data) {
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
    DetalleSalidaVariaComponent.prototype.cargarListadoEstructurasComerciales = function (data) {
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
    DetalleSalidaVariaComponent.prototype.cargarListadoJerarquiasComerciales = function (data) {
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
                verOK: false
                // aba_ncantidad: data[i].aba_ncantidad,
                // aba_ncantidadbonificado: data[i].aba_ncantidadbonificado,
                // aba_nidaccion: data[i].aba_nidaccion,
                // aba_scodformato: data[i].aba_scodformato,
                // aba_scodformatobonificado: data[i].aba_scodformatobonificado,
                // aba_scodtipodescuento: data[i].aba_scodtipodescuento,
                // aba_scodvariedad: data[i].aba_scodvariedad,
                // aba_scodvariedadbonificado: data[i].aba_scodvariedadbonificado,
                // nunidadventa: data[i].nunidadventa,
                // nunidadventabonificado: data[i].nunidadventabonificado,
                // sdescripcion: data[i].sdescripcion,
                // sdescripcionbonificado: data[i].sdescripcionbonificado
            };
            this.articulosJerarquia.push(estructura);
        }
    };
    DetalleSalidaVariaComponent.prototype.validaVigencia = function (data) {
        this.noVigente = false;
        var fechaTermino = new Date(this.utilService.dateStringServiceToStringFormat(data[0].aco_dfhoinicio) + " " + this.utilService.timeStringServiceToStringFormat(data[0].aco_dfhoinicio));
        var fechaInhabilitar = new Date(this.utilService.dateStringServiceToStringFormat(data[0].aco_dfhotermino) + " " + this.utilService.timeStringServiceToStringFormat(data[0].aco_dfhotermino));
        if (data[0].aco_scodestado === 'NOVIG') {
            this.noVigente = true;
        }
        else if (this.fechaActual > fechaTermino) {
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
    DetalleSalidaVariaComponent.prototype.validaInhabilitar = function (data) {
        //inhabilitar
        this.inhabilitar = false;
        var fechaInhabilitar = new Date(this.utilService.dateStringServiceToStringFormat(data[0].aco_dfhotermino) + " " + this.utilService.timeStringServiceToStringFormat(data[0].aco_dfhotermino));
        if (data[0].aco_scodestado === 'NOVIG') {
            this.inhabilitar = true;
        }
        else if (this.fechaActual > fechaInhabilitar) {
            this.inhabilitar = true;
        }
    };
    DetalleSalidaVariaComponent.prototype.verModales = function () {
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
    };
    DetalleSalidaVariaComponent.prototype.validarFechas = function (fecha) {
        var dateValid = this.utilService.DateValidator(fecha.value);
        if (!dateValid) {
            fecha.value = this.utilService.dateToStringFormat(this.fechaActual);
        }
    };
    DetalleSalidaVariaComponent.prototype.validaCheckTitulo = function () {
        this.checkTituloSeleccionado = !this.checkTituloSeleccionado;
        if (this.checkTituloSeleccionado) {
            for (var i in this.estructurasAccionesComerciales) {
                this.estructurasAccionesComerciales[i].bCheck = true;
            }
        }
        else {
            for (var i in this.estructurasAccionesComerciales) {
                this.estructurasAccionesComerciales[i].bCheck = false;
            }
        }
    };
    DetalleSalidaVariaComponent.prototype.validaCheckEstructura = function (estructura) {
        estructura.bCheck = !estructura.bCheck;
        if (estructura.bCheck) {
        }
        else {
        }
    };
    DetalleSalidaVariaComponent.prototype.validaCheckTituloJerarquia = function () {
        this.checkTituloJerarquiaSeleccionado = !this.checkTituloJerarquiaSeleccionado;
        if (this.checkTituloJerarquiaSeleccionado) {
            for (var i in this.articulosJerarquia) {
                this.articulosJerarquia[i].bCheck = true;
            }
        }
        else {
            for (var i in this.articulosJerarquia) {
                this.articulosJerarquia[i].bCheck = false;
            }
        }
    };
    DetalleSalidaVariaComponent.prototype.validaCheckJerarquia = function (articulo) {
        articulo.bCheck = !articulo.bCheck;
        if (articulo.bCheck) {
        }
        else {
        }
    };
    DetalleSalidaVariaComponent.prototype.agregar = function () {
        this.puedeAgregar = false;
        if (this.forma.controls.tipoEstructura.value === '') {
            swal('Atención', 'Debe seleccionar el tipo de estructura antes de continuar', 'info');
        }
        else if (this.forma.controls.tipoEstructura.value === 'COMBI' && !this.enUsoFzaVtas && !this.enOperador && !this.enCatNegocio && !this.enCliente) {
            swal('Atención', 'Debe seleccionar algun elemento de la estructura para agregar', 'info');
        }
        else {
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
    DetalleSalidaVariaComponent.prototype.comparaObjetos = function (estructurasAccionesComerciales, objeto) {
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
    DetalleSalidaVariaComponent.prototype.eliminar = function () {
        var _this = this;
        if (this.estructurasAccionesComerciales.length > 0) {
            if (this.checkTituloSeleccionado) {
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
                    _this.estructurasAccionesComerciales = [];
                    _this.checkTituloSeleccionado = false;
                });
            }
            else {
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
                });
            }
        }
    };
    DetalleSalidaVariaComponent.prototype.eliminarJerarquia = function () {
        var _this = this;
        if (this.articulosJerarquia.length > 0) {
            if (this.checkTituloJerarquiaSeleccionado) {
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
                    _this.articulosJerarquia = [];
                    _this.checkTituloJerarquiaSeleccionado = false;
                });
            }
            else {
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
                });
            }
        }
    };
    DetalleSalidaVariaComponent.prototype.limpiar = function () {
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
    DetalleSalidaVariaComponent.prototype.setArticulo = function (articulo) {
        if (articulo.value === '') {
            this.verListaArticulo = false;
        }
        else {
            this.verListaArticulo = true;
        }
    };
    DetalleSalidaVariaComponent.prototype.setArticuloBoni = function (articuloBoni) {
        if (articuloBoni.value === '') {
            this.verListaArticuloBoni = false;
        }
        else {
            this.verListaArticuloBoni = true;
        }
    };
    DetalleSalidaVariaComponent.prototype.setDescripcion = function (descripcion) {
        if (descripcion.value === '') {
            this.verListaDescripcion = false;
        }
        else {
            this.verListaDescripcion = true;
        }
    };
    DetalleSalidaVariaComponent.prototype.setDescripcionBoni = function (descripcionBoni) {
        if (descripcionBoni.value === '') {
            this.verListaDescripcionBoni = false;
        }
        else {
            this.verListaDescripcionBoni = true;
        }
    };
    DetalleSalidaVariaComponent.prototype.seleccionaArticulo = function (data, articulo, descripcion, cantidad) {
        articulo.value = data.art_scodformato + "-" + data.art_scodvariedad;
        descripcion.value = data.art_sdescripcion;
        // cantidad.focus();
        this.verListaArticulo = false;
    };
    DetalleSalidaVariaComponent.prototype.seleccionaArticuloBoni = function (data, articuloBoni, descripcionBoni, cantidadBoni) {
        articuloBoni.value = data.art_scodformato + "-" + data.art_scodvariedad;
        descripcionBoni.value = data.art_sdescripcion;
        // cantidadBoni.focus();
        this.verListaArticuloBoni = false;
    };
    DetalleSalidaVariaComponent.prototype.seleccionaDescripcion = function (data, articulo, descripcion, cantidad) {
        articulo.value = data.art_scodformato + "-" + data.art_scodvariedad;
        descripcion.value = data.art_sdescripcion;
        // cantidad.focus();
        this.verListaDescripcion = false;
    };
    DetalleSalidaVariaComponent.prototype.seleccionaDescripcionBoni = function (data, articuloBoni, descripcionBoni, cantidadBoni) {
        articuloBoni.value = data.art_scodformato + "-" + data.art_scodvariedad;
        descripcionBoni.value = data.art_sdescripcion;
        // cantidadBoni.focus();
        this.verListaDescripcionBoni = false;
    };
    DetalleSalidaVariaComponent.prototype.validaArticulo = function (articulo, descripcion, cantidad) {
        var articuloExiste = false;
        if (articulo.value !== '') {
            for (var i in this.parametrosAutocomplete) {
                var str = this.parametrosAutocomplete[i].art_scodformato + "-" + this.parametrosAutocomplete[i].art_scodvariedad;
                if (str.startsWith("" + articulo.value)) {
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
        }
    };
    DetalleSalidaVariaComponent.prototype.validaArticuloBoni = function (articuloBoni, descripcionBoni, cantidadBoni) {
        var articuloExiste = false;
        if (articuloBoni.value !== '') {
            for (var i in this.parametrosAutocomplete) {
                var str = this.parametrosAutocomplete[i].art_scodformato + "-" + this.parametrosAutocomplete[i].art_scodvariedad;
                if (str.startsWith("" + articuloBoni.value)) {
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
        }
    };
    DetalleSalidaVariaComponent.prototype.validaDescripcion = function (articulo, descripcion, cantidad) {
        var articuloExiste = false;
        if (descripcion.value !== '') {
            for (var i in this.parametrosAutocomplete) {
                var str = (this.parametrosAutocomplete[i].art_sdescripcion).toLowerCase();
                if (str.startsWith("" + (descripcion.value).toLowerCase())) {
                    articulo.value = this.parametrosAutocomplete[i].art_scodformato + "-" + this.parametrosAutocomplete[i].art_scodvariedad;
                    descripcion.value = this.parametrosAutocomplete[i].art_sdescripcion;
                    articuloExiste = true;
                    this.verListaDescripcion = false;
                    cantidad.focus();
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
    DetalleSalidaVariaComponent.prototype.validaDescripcionBoni = function (articuloBoni, descripcionBoni, cantidadBoni) {
        var articuloExiste = false;
        if (descripcionBoni.value !== '') {
            for (var i in this.parametrosAutocomplete) {
                var str = (this.parametrosAutocomplete[i].art_sdescripcion).toLowerCase();
                if (str.startsWith("" + (descripcionBoni.value).toLowerCase())) {
                    articuloBoni.value = this.parametrosAutocomplete[i].art_scodformato + "-" + this.parametrosAutocomplete[i].art_scodvariedad;
                    descripcionBoni.value = this.parametrosAutocomplete[i].art_sdescripcion;
                    articuloExiste = true;
                    this.verListaDescripcionBoni = false;
                    cantidadBoni.focus();
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
    DetalleSalidaVariaComponent.prototype.validaCantidad = function (valor) {
        if (valor.value === '') {
            valor.value = 0;
        }
    };
    DetalleSalidaVariaComponent.prototype.agregarRegla = function (articulo, descripcion, cantidad, fraccion, articuloBoni, descripcionBoni, cantidadBoni, fraccionBoni) {
        this.articuloRegla = false;
        this.descripcionRegla = false;
        this.articuloBoniRegla = false;
        this.descripcionBoniRegla = false;
        if (!this.noVigente) {
            if (articulo.value !== '' && descripcion.value !== '' && articuloBoni.value !== '' && descripcionBoni.value !== '') {
                this.articuloRegla = this.validaArticuloRegla(articulo.value);
                this.articuloBoniRegla = this.validaArticuloRegla(articuloBoni.value);
                if (!this.articuloRegla || !this.articuloBoniRegla) {
                    swal('Atención', 'Artículo no existe', 'warning');
                }
                else {
                    this.agregaRegla(articulo, descripcion, cantidad, fraccion, articuloBoni, descripcionBoni, cantidadBoni, fraccionBoni);
                }
            }
            else {
                articulo.focus();
                swal('Atención', 'Debe ingresar ambos artículos', 'warning');
            }
        }
    };
    DetalleSalidaVariaComponent.prototype.agregaRegla = function (articulo, descripcion, cantidad, fraccion, articuloBoni, descripcionBoni, cantidadBoni, fraccionBoni) {
        this.puedeAgregar = false;
        var articuloSplit = articulo.value.split('-');
        var articuloBoniSplit = articuloBoni.value.split('-');
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
            verOK: false
        };
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
    DetalleSalidaVariaComponent.prototype.validaArticuloRegla = function (articuloTxt) {
        for (var i in this.parametrosAutocomplete) {
            if (articuloTxt === this.parametrosAutocomplete[i].art_scodformato + "-" + this.parametrosAutocomplete[i].art_scodvariedad) {
                return true;
            }
        }
        return false;
    };
    DetalleSalidaVariaComponent.prototype.guardaBonificacion = function () {
        var _this = this;
        if (this.estructurasAccionesComerciales.length === 0) {
            swal('Atención', 'Debe ingresar datos en la Estructura Comercial', 'warning');
        }
        else {
            this.grabaEstructuras = true;
            if (this.forma.valid) {
                $('*').removeClass('error-form');
                this.grabaEncabezado = true;
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
                    nCantidad: this.articulosJerarquia[i].nCantidad,
                    nCantidadBonificado: this.articulosJerarquia[i].nCantidadBonificado,
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
            this.cargador.show();
            this.administracionComercialService.creaAccionComercialBonif(this.requestGrabar)
                .subscribe(function (data) {
                _this.cargador.hide();
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
    DetalleSalidaVariaComponent.prototype.edit = function (articulo) {
        this.editRowID = articulo.sCodFormato + "-" + articulo.sCodVariedad;
        articulo.verOK = true;
    };
    DetalleSalidaVariaComponent.prototype.save = function (articulo) {
        this.editRowID = null;
        articulo.verOK = false;
    };
    DetalleSalidaVariaComponent.prototype.validaBodega = function () { };
    DetalleSalidaVariaComponent.prototype.openModalBodega = function () { };
    DetalleSalidaVariaComponent.prototype.validaSucursal = function () { };
    DetalleSalidaVariaComponent.prototype.inhabilitarAccion = function () {
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
            _this.cargador.show();
            _this.administracionComercialService.inhabilitaAccionComercial(_this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
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
    DetalleSalidaVariaComponent.prototype.setData = function (resData) {
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
                    this.forma.controls.codZona.setValue(resData.zon_scodzona);
                    this.forma.controls.descZona.setValue(resData.zon_sdeszona);
                    break;
                }
                case 'territorioAC': {
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
    DetalleSalidaVariaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalleSalidaVaria',
            template: __webpack_require__(/*! ./detalleSalidaVaria.component.html */ "./src/app/routes/existencias/detalleSalidaVaria/detalleSalidaVaria.component.html"),
            styles: [__webpack_require__(/*! ./detalleSalidaVaria.component.scss */ "./src/app/routes/existencias/detalleSalidaVaria/detalleSalidaVaria.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_consultaService_administracionComercial_service__WEBPACK_IMPORTED_MODULE_8__["AdministracionComercialService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_7__["ConsultasService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetalleSalidaVariaComponent);
    return DetalleSalidaVariaComponent;
}());



/***/ }),

/***/ "./src/app/routes/existencias/existencias.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/existencias/existencias.module.ts ***!
  \**********************************************************/
/*! exports provided: ExistenciasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistenciasModule", function() { return ExistenciasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _commonPopUp_commonPopUp_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../commonPopUp/commonPopUp.module */ "./src/app/routes/commonPopUp/commonPopUp.module.ts");
/* harmony import */ var _consultaStock_consultaStock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultaStock/consultaStock.component */ "./src/app/routes/existencias/consultaStock/consultaStock.component.ts");
/* harmony import */ var _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component */ "./src/app/routes/commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component.ts");
/* harmony import */ var _commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../commonPopUp/sucursalesPopUp/sucursalesPopUp.component */ "./src/app/routes/commonPopUp/sucursalesPopUp/sucursalesPopUp.component.ts");
/* harmony import */ var _commonPopUp_bodegaPopUp_bodegaPopUp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../commonPopUp/bodegaPopUp/bodegaPopUp.component */ "./src/app/routes/commonPopUp/bodegaPopUp/bodegaPopUp.component.ts");
/* harmony import */ var _buscaOrdenesDeCompra_buscaOrdenesDeCompra_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./buscaOrdenesDeCompra/buscaOrdenesDeCompra.component */ "./src/app/routes/existencias/buscaOrdenesDeCompra/buscaOrdenesDeCompra.component.ts");
/* harmony import */ var _salidaVaria_salidaVaria_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./salidaVaria/salidaVaria.component */ "./src/app/routes/existencias/salidaVaria/salidaVaria.component.ts");
/* harmony import */ var _detalleSalidaVaria_detalleSalidaVaria_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./detalleSalidaVaria/detalleSalidaVaria.component */ "./src/app/routes/existencias/detalleSalidaVaria/detalleSalidaVaria.component.ts");
/* harmony import */ var _detalleOrdenDeCompra_detalleOrdenDeCompra_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./detalleOrdenDeCompra/detalleOrdenDeCompra.component */ "./src/app/routes/existencias/detalleOrdenDeCompra/detalleOrdenDeCompra.component.ts");
/* harmony import */ var _movimientosDiarios_movimientosDiarios_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./movimientosDiarios/movimientosDiarios.component */ "./src/app/routes/existencias/movimientosDiarios/movimientosDiarios.component.ts");
/* harmony import */ var _abastecimiento_abastecimiento_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./abastecimiento/abastecimiento.component */ "./src/app/routes/existencias/abastecimiento/abastecimiento.component.ts");
/* harmony import */ var _abastecimiento_abastecimientoDetalleOC_abastecimientoDetalleOC_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./abastecimiento/abastecimientoDetalleOC/abastecimientoDetalleOC.component */ "./src/app/routes/existencias/abastecimiento/abastecimientoDetalleOC/abastecimientoDetalleOC.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: 'consultaStock', component: _consultaStock_consultaStock_component__WEBPACK_IMPORTED_MODULE_6__["ConsultaStockComponent"] },
    { path: 'buscaOrdenesDeCompra', component: _buscaOrdenesDeCompra_buscaOrdenesDeCompra_component__WEBPACK_IMPORTED_MODULE_10__["BuscaOrdenesDeCompraComponent"] },
    { path: 'detalleOrdenDeCompra', component: _detalleOrdenDeCompra_detalleOrdenDeCompra_component__WEBPACK_IMPORTED_MODULE_13__["DetalleOrdenDeCompraComponent"] },
    { path: 'salidaVaria', component: _salidaVaria_salidaVaria_component__WEBPACK_IMPORTED_MODULE_11__["SalidaVariaComponent"] },
    { path: 'detalleSalidaVaria', component: _detalleSalidaVaria_detalleSalidaVaria_component__WEBPACK_IMPORTED_MODULE_12__["DetalleSalidaVariaComponent"] },
    { path: 'movimientosDiariosStock', component: _movimientosDiarios_movimientosDiarios_component__WEBPACK_IMPORTED_MODULE_14__["MovimientosDiariosComponent"] },
    { path: 'abastecimiento', component: _abastecimiento_abastecimiento_component__WEBPACK_IMPORTED_MODULE_15__["AbastecimientoComponent"] },
    { path: 'abastecimientoDetalleOC', component: _abastecimiento_abastecimientoDetalleOC_abastecimientoDetalleOC_component__WEBPACK_IMPORTED_MODULE_16__["AbastecimientoDetalleOCComponent"] }
];
var ExistenciasModule = /** @class */ (function () {
    function ExistenciasModule() {
    }
    ExistenciasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                _commonPopUp_commonPopUp_module__WEBPACK_IMPORTED_MODULE_5__["CommonPopUpModule"]
            ],
            declarations: [
                _consultaStock_consultaStock_component__WEBPACK_IMPORTED_MODULE_6__["ConsultaStockComponent"],
                _buscaOrdenesDeCompra_buscaOrdenesDeCompra_component__WEBPACK_IMPORTED_MODULE_10__["BuscaOrdenesDeCompraComponent"],
                _detalleOrdenDeCompra_detalleOrdenDeCompra_component__WEBPACK_IMPORTED_MODULE_13__["DetalleOrdenDeCompraComponent"],
                _salidaVaria_salidaVaria_component__WEBPACK_IMPORTED_MODULE_11__["SalidaVariaComponent"],
                _detalleSalidaVaria_detalleSalidaVaria_component__WEBPACK_IMPORTED_MODULE_12__["DetalleSalidaVariaComponent"],
                _movimientosDiarios_movimientosDiarios_component__WEBPACK_IMPORTED_MODULE_14__["MovimientosDiariosComponent"],
                _abastecimiento_abastecimiento_component__WEBPACK_IMPORTED_MODULE_15__["AbastecimientoComponent"],
                _abastecimiento_abastecimientoDetalleOC_abastecimientoDetalleOC_component__WEBPACK_IMPORTED_MODULE_16__["AbastecimientoDetalleOCComponent"]
            ],
            entryComponents: [
                _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_7__["BuscarArticuloPopUpComponent"],
                _commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_8__["SucursalesPopUpComponent"],
                _commonPopUp_bodegaPopUp_bodegaPopUp_component__WEBPACK_IMPORTED_MODULE_9__["BodegaPopUpComponent"]
            ]
        })
    ], ExistenciasModule);
    return ExistenciasModule;
}());



/***/ }),

/***/ "./src/app/routes/existencias/movimientosDiarios/movimientosDiarios.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/routes/existencias/movimientosDiarios/movimientosDiarios.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Movimientos Diarios Stock</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Operador</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input formControlName=\"nombOperador\" name=\"nombOperador\" class=\"form-control\" type=\"text\" maxlength=\"100\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label lh-11\">Fecha</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"sFechaDesde\" name=\"sFechaDesde\" type=\"date\" />\r\n                    </div>\r\n                    <label class=\"col-sm-2 control-label\">D&iacute;as de Consulta</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"nDiasConsulta\" name=\"nDiasConsulta\" class=\"form-control\" type=\"text\" maxlength=\"100\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"col-sm-4 pl-0\">\r\n                        <label class=\"col-sm-3 control-label\">Prod. Base</label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input formControlName=\"nomFormato\" name=\"nomFormato\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-1 pl-0\">\r\n                            <button type=\"button\" class=\"btn btn-primary\">\r\n                          <em class=\"icon-magnifier\"></em>\r\n                        </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-5\">\r\n                        <label class=\"col-sm-2 control-label pl-0\">Cod.Art&iacute;culo</label>\r\n                        <div class=\"col-sm-3\">\r\n                            <input formControlName=\"sCodVariedad\" name=\"sCodVariedad\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6 pl-0\">\r\n                            <input formControlName=\"nomVariedad\" name=\"nomVariedad\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-1 pl-0\">\r\n                            <button type=\"button\" class=\"btn btn-primary\">\r\n                        <em class=\"icon-magnifier\"></em>\r\n                      </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        <label class=\"col-sm-2 control-label pl-0\">Medida</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input formControlName=\"nomVariedad\" name=\"nomVariedad\" class=\"form-control\" type=\"text\" maxlength=\"100\" />\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"col-sm-5 pl-0\">\r\n                        <label class=\"col-sm-1 control-label pl-0\">Sucursal</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input formControlName=\"nomVariedad\" name=\"nomVariedad\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6 pl-0\">\r\n                            <input formControlName=\"nomVariedad\" name=\"nomVariedad\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-1 pl-0\">\r\n                            <button type=\"button\" class=\"btn btn-primary\">\r\n                        <em class=\"icon-magnifier\"></em>\r\n                      </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-5\">\r\n                        <label class=\"col-sm-1 control-label pl-0\">Bodega</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input formControlName=\"sCodBodega\" name=\"sCodBodega\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6 pl-0\">\r\n                            <input formControlName=\"nomBodega\" name=\"nomBodega\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-1 pl-0\">\r\n                            <button type=\"button\" class=\"btn btn-primary\">\r\n                        <em class=\"icon-magnifier\"></em>\r\n                      </button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- <div class=\"col-sm-12\" (click)=\"openModalCliente()\"  (change)=\"validaCliente()\">\r\n\t\t\t\t\t<label class=\"col-sm-1 control-label\">cod. Articulo</label>\r\n\t\t\t\t\t<div class=\"col-sm-5 pl-0\">\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t<input formControlName=\"codArticulo\" name=\"codArticulo\" class=\"form-control\" type=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t<input formControlName=\"codArtVariedad\" name=\"codArtVariedad\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\ttype=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<label class=\"col-sm-1 control-label text-right\">Sucursal</label>\r\n\t\t\t\t\t<div class=\"col-sm-5\">\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t<input formControlName=\"codSucursal\" name=\"codSucursal\" class=\"form-control\" (change)=\"validaSucursal()\"\r\n\t\t\t\t\t\t\t type=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input formControlName=\"descSucursal\" name=\"descSucursal\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\ttype=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalSucursales()\">\r\n\t\t\t\t\t\t\t\t<em class=\"icon-magnifier\"></em>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<label class=\"col-sm-1 control-label\">Bodega</label>\r\n\t\t\t\t\t<div class=\"col-sm-5 pl-0\">\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t<input formControlName=\"codBodega\" name=\"codBodega\" class=\"form-control\"\r\n\t\t\t\t\t\t\t(change)=\"validaBodega()\" type=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input formControlName=\"descBodega\" name=\"descBodega\" class=\"form-control\" type=\"text\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalBodega()\">\r\n\t\t\t\t\t\t\t\t<em class=\"icon-magnifier\"></em>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n            </div>\r\n        </form>\r\n        <!-- <div class=\"row pull-left mb-4\">\r\n\t\t\t<div class=\"col-sm-3 mr-1\">\r\n\t\t\t\t<button class=\"btn btn-oval btn-sm\" (click)=\"buscar($event)\" type=\"button\">Buscar</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-3 mr-1\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t<button class=\"btn btn-oval btn-sm\" (click)=\"generateExcel()\" [disabled]='!exportar'>Exportar</button>\r\n\t\t\t</div>\r\n\t\t</div> -->\r\n        <br>\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th scope=\"col\"> </th>\r\n                                <th scope=\"col\"> </th>\r\n                                <th scope=\"col\"> </th>\r\n                                <th scope=\"col\"> </th>\r\n                                <th scope=\"col\"> </th>\r\n                                <th scope=\"col\"> </th>\r\n                                <th scope=\"col\"> </th>\r\n                                <th class=\"col\">Disponibles</th>\r\n                                <th class=\"col\"></th>\r\n                                <th scope=\"col\">Reservado</th>\r\n                                <th class=\"col\"></th>\r\n                                <th scope=\"col\">Mal Estado</th>\r\n                                <th class=\"col\"></th>\r\n                                <th scope=\"col\">Total</th>\r\n                                <th class=\"col\"></th>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"col\">LN</th>\r\n                                <th scope=\"col\">CT</th>\r\n                                <th scope=\"col\">AG</th>\r\n                                <th scope=\"col\">PB</th>\r\n                                <th scope=\"col\">Cod. Articulo</th>\r\n                                <th scope=\"col\">Descripcion</th>\r\n                                <th scope=\"col\">Medida</th>\r\n                                <th scope=\"col\">u.v - Frac</th>\r\n                                <th scope=\"col\"></th>\r\n                                <th scope=\"col\">u.v - Frac.</th>\r\n                                <th scope=\"col\"></th>\r\n                                <th scope=\"col\">u.v - Frac.</th>\r\n                                <th scope=\"col\"></th>\r\n                                <th scope=\"col\">u.v - Frac.</th>\r\n                                <th scope=\"col\"></th>\r\n\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <!-- <tr *ngFor=\"let articulo of stockArticulos \t| paginate: {itemsPerPage: 7, currentPage: pageActual};\">\r\n                                <td>{{articulo.jli_sdeslinea}}</td>\r\n                                <td>{{articulo.jca_sdescategoria}}</td>\r\n                                <td>{{articulo.jag_sdesagrupacion}}</td>\r\n                                <td>{{articulo.jpb_sdesproductobase}}</td>\r\n                                <td>{{articulo.art_scodformato}} - {{articulo.art_scodvariedad}}</td>\r\n                                <td>{{articulo.art_sdescripcion }}</td>\r\n                                <td>{{articulo.art_smedida}}</td>\r\n                                <td class=\"text-center\">{{articulo.uventadisponibles}} - {{articulo.fraccionesdisponibles}} </td>\r\n                                <td class=\"text-center\"></td>\r\n                                <td class=\"text-center\">{{articulo.uventareserva}} - {{articulo.fraccionesreserva}}\r\n                                </td>\r\n                                <td class=\"text-center\"></td>\r\n                                <td class=\"text-center\">{{articulo.uvtamalestado}} - {{articulo.fraccionesvtamalestado}}\r\n                                </td>\r\n                                <td class=\"text-center\"></td>\r\n                                <td class=\"text-center\">{{articulo.uvtatotales}} - {{articulo.fraccionestotales}} </td>\r\n\r\n                            </tr> -->\r\n                        </tbody>\r\n                    </table>\r\n                    <br>\r\n                    <!-- <div class=\"text-right\">\r\n                        <pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\"></pagination-controls>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/existencias/movimientosDiarios/movimientosDiarios.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/routes/existencias/movimientosDiarios/movimientosDiarios.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/existencias/movimientosDiarios/movimientosDiarios.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/routes/existencias/movimientosDiarios/movimientosDiarios.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MovimientosDiariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimientosDiariosComponent", function() { return MovimientosDiariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/clientes.service */ "./src/app/core/consultaService/clientes.service.ts");
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
var MovimientosDiariosComponent = /** @class */ (function () {
    function MovimientosDiariosComponent(http, clientesService, fb, loader, authService, router, utilService) {
        this.http = http;
        this.clientesService = clientesService;
        this.loader = loader;
        this.authService = authService;
        this.router = router;
        this.utilService = utilService;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nDiasConsulta: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            nRutOperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            nombOperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sCodBodega: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            nomBodega: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sCodFormato: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            nomFormato: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sCodVariedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            nomVariedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sFechaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    MovimientosDiariosComponent.prototype.ngOnInit = function () {
    };
    MovimientosDiariosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movimientosDiarios',
            template: __webpack_require__(/*! ./movimientosDiarios.component.html */ "./src/app/routes/existencias/movimientosDiarios/movimientosDiarios.component.html"),
            styles: [__webpack_require__(/*! ./movimientosDiarios.component.scss */ "./src/app/routes/existencias/movimientosDiarios/movimientosDiarios.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ClientesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
    ], MovimientosDiariosComponent);
    return MovimientosDiariosComponent;
}());



/***/ }),

/***/ "./src/app/routes/existencias/salidaVaria/salidaVaria.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/routes/existencias/salidaVaria/salidaVaria.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Salidas Varias</h4>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n\r\n            <div class=\"form-group\">\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label lh-11\">Nº Salida</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input appNaturalNumber formControlName=\"salidaVaria\" name=\"salidaVaria\" class=\"form-control\"\r\n                            type=\"number\" maxlength=\"10\"\r\n                            oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                    </div>\r\n\r\n                    <label class=\"col-sm-1 control-label\">Desde</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaDesde\"\r\n                            name=\"fechaDesde\" type=\"date\" />\r\n                    </div>\r\n\r\n                    <label class=\"col-sm-1 control-label\">Hasta</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaHasta\"\r\n                            name=\"fechaHasta\" type=\"date\" />\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n\r\n                    <label class=\"col-sm-1 control-label\">Tipo Movimiento</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"codTipoMovimiento\" name=\"codTipoMovimiento\">\r\n                            <option *ngFor=\"let tipoMovimiento of tiposMovimiento\"\r\n                                [ngValue]=\"tipoMovimiento.par_codparametro01\">\r\n                                {{tipoMovimiento.par_deslargo01}}</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <label class=\"col-sm-1 control-label lh-11\">Estado</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"codEstado\" name=\"codEstado\">\r\n                            <option value=\"\" selected>(Todos)</option>\r\n                            <option *ngFor=\"let estado of estados\" [ngValue]=\"estado.codigoEstado\">\r\n                                {{estado.estado}}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div class=\"row pull-left mb-4\">\r\n            <div class=\"col-sm-2 mr-3\">\r\n                <button class=\"btn btn-oval btn-sm\" type=\"button\" (click)=\"listarSalidasVarias()\">Buscar</button>\r\n            </div>\r\n\r\n            <div class=\"col-sm-4 ml-4\">\r\n                <a class=\"btn btn-oval btn-sm\" type=\"button\" (click)=\"desplegarPopUp(null)\">Nuevo</a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-sm-12\">\r\n\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Fecha</th>\r\n                                <th>Nº Salida</th>\r\n                                <th>Tipo</th>\r\n                                <th>Estado</th>\r\n                                <th class=\"align-middle\">Ver</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr\r\n                                *ngFor=\"let salidaVaria of listadoSalidasVarias | paginate: {itemsPerPage: 7, currentPage: pageActual};\">\r\n                                <td class=\"text-right\">{{salidaVaria.sal_dfhocreacion | fecha }}</td>\r\n                                <td class=\"text-center\">{{salidaVaria.sal_nidentrasalida}}</td>\r\n                                <td class=\"text-center\">{{salidaVaria.sal_sdestipomovimiento}}</td>\r\n                                <td class=\"text-center\">{{salidaVaria.sal_sdesestado}}</td>\r\n                                <td class=\"text-center\">\r\n                                    <span class=\"table-remove\">\r\n                                        <a class=\"text\" data-toggle=\"tooltip\" title=\"Ver Detalle\"\r\n                                            (click)=\"redirigirDetalleSalidaVaria(salidaVaria)\">\r\n                                            <em class=\"fa fa-search\"></em>\r\n                                        </a>\r\n                                    </span>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <br>\r\n                    <div class=\"text-right\">\r\n                        <pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\"\r\n                            nextLabel=\"Siguiente\">\r\n                        </pagination-controls>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/existencias/salidaVaria/salidaVaria.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/routes/existencias/salidaVaria/salidaVaria.component.ts ***!
  \*************************************************************************/
/*! exports provided: SalidaVariaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalidaVariaComponent", function() { return SalidaVariaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_consultaService_administracionComercial_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/administracionComercial.service */ "./src/app/core/consultaService/administracionComercial.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_existencias_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/consultaService/existencias.service */ "./src/app/core/consultaService/existencias.service.ts");
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
var SalidaVariaComponent = /** @class */ (function () {
    function SalidaVariaComponent(fb, spinner, utilService, administracionComercialService, router, authService, modalService, existenciasService) {
        this.fb = fb;
        this.spinner = spinner;
        this.utilService = utilService;
        this.administracionComercialService = administracionComercialService;
        this.router = router;
        this.authService = authService;
        this.modalService = modalService;
        this.existenciasService = existenciasService;
        this.pageActual = 1;
        this.fechaActual = new Date();
        this.listadoSalidasVarias = [];
        this.user = {};
        this.suscripciones = [];
        this.tiposMovimiento = [];
        this.estadosNuevo = [
            {
                codigoEstado: 'PAPRO',
                estado: 'PENDIENTE APROBACION'
            },
            {
                codigoEstado: 'APROB',
                estado: 'APROBADA'
            },
            {
                codigoEstado: 'RECHA',
                estado: 'RECHAZADA'
            },
            {
                codigoEstado: 'NUEVO',
                estado: 'ESTADO NUEVO'
            }
        ];
        this.estados = [
            {
                codigoEstado: 'PAPRO',
                estado: 'PENDIENTE APROBACION'
            },
            {
                codigoEstado: 'APROB',
                estado: 'APROBADA'
            },
            {
                codigoEstado: 'RECHA',
                estado: 'RECHAZADA'
            }
        ];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            salidaVaria: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            fechaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            fechaHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            codTipoMovimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            codEstado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    SalidaVariaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.estadosNuevo.forEach(function (estadoNuevo) {
            var _existe;
            _existe = _this.estados.find(function (estado) { return estado.codigoEstado !== estadoNuevo.codigoEstado; });
            console.log(_existe);
        });
        this.cargarInformacionInicial();
    };
    SalidaVariaComponent.prototype.cargarInformacionInicial = function () {
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4___default.a);
        this.user = this.authService.getDatosUser();
        this.tiposMovimiento = this.authService.getParametrosTipoMovimiento();
        this.forma.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.forma.controls.fechaHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
    };
    SalidaVariaComponent.prototype.listarSalidasVarias = function () {
        var _this = this;
        if (this.validarEntradasFormulario()) {
            this.spinner.show();
            var request = {
                nRutOperador: this.user.nrutoperador,
                nSalidaVaria: this.forma.controls.salidaVaria.value === null ? 0 : this.forma.controls.salidaVaria.value,
                sCodEstado: this.forma.controls.codEstado.value,
                sCodTipoMovimiento: this.forma.controls.codTipoMovimiento.value,
                sFechaDesde: (this.forma.controls.fechaDesde.value).replace(/-/g, ''),
                sFechaHasta: (this.forma.controls.fechaHasta.value).replace(/-/g, '')
            };
            this.suscripciones.push(this.existenciasService.listarSalidasVarias(request)
                .subscribe(function (salidasVarias) {
                _this.listadoSalidasVarias = salidasVarias.salidasVarias;
                if (salidasVarias.error.codError !== 0) {
                    _this.spinner.hide();
                    swal('Atención', 'Ha ocurrido un error inesperado!', salidasVarias.error);
                }
                if (salidasVarias.salidasVarias.length === 0) {
                    _this.spinner.hide();
                    swal('Atención', 'No se encontraron coincidencias', 'info');
                }
                else {
                    _this.listadoSalidasVarias.forEach(function (salidaVarias, i) {
                        _this.listadoSalidasVarias[i]['sal_sdesestado'] =
                            _this.estados.find(function (estado) { return estado.codigoEstado === salidaVarias.sal_scodestado; }).estado;
                    });
                }
                _this.spinner.hide();
            }, function (error) {
                _this.spinner.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', error);
            }));
        }
    };
    SalidaVariaComponent.prototype.inicializarFechaDesdeInvalida = function () {
        if (this.forma.controls.fechaDesde.value === '') {
            this.forma.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
        if (!this.utilService.DateValidator(this.forma.controls.fechaDesde.value)) {
            this.forma.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
    };
    SalidaVariaComponent.prototype.inicializarFechaHastaInvalida = function () {
        if (this.forma.controls.fechaHasta.value === '') {
            this.forma.controls.fechaHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
        if (!this.utilService.DateValidator(this.forma.controls.fechaHasta.value)) {
            this.forma.controls.fechaHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
    };
    SalidaVariaComponent.prototype.redirigirDetalleSalidaVaria = function (salidaSeleccionada) {
        if (salidaSeleccionada.sal_sdesestado === 'APROBADA' || salidaSeleccionada.sal_sdesestado === 'RECHAZADA') {
            this.router.navigate(['/existencias/detalleSalidaVaria']);
        }
    };
    SalidaVariaComponent.prototype.validarEntradasFormulario = function () {
        var _validarEntradasFormulario = true;
        if (new Date(this.forma.controls.fechaHasta.value) < new Date(this.forma.controls.fechaDesde.value)) {
            swal('Atención', 'Fecha Hasta debe ser mayor a la Fecha Desde!', 'error');
            _validarEntradasFormulario = false;
        }
        return _validarEntradasFormulario;
    };
    SalidaVariaComponent.prototype.desplegarPopUp = function (salida) {
    };
    SalidaVariaComponent.prototype.ngOnDestroy = function () {
        this.suscripciones.forEach(function (suscripcion) { return suscripcion.unsubscribe(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('montoInversion'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SalidaVariaComponent.prototype, "montoInversion", void 0);
    SalidaVariaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salidaVaria',
            template: __webpack_require__(/*! ./salidaVaria.component.html */ "./src/app/routes/existencias/salidaVaria/salidaVaria.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"],
            _core_consultaService_administracionComercial_service__WEBPACK_IMPORTED_MODULE_7__["AdministracionComercialService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
            _core_consultaService_existencias_service__WEBPACK_IMPORTED_MODULE_10__["ExistenciasService"]])
    ], SalidaVariaComponent);
    return SalidaVariaComponent;
}());



/***/ })

}]);
//# sourceMappingURL=existencias-existencias-module.js.map