(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cajaCobranza-cajaCobranza-module"],{

/***/ "./src/app/routes/cajaCobranza/agregarReversaPago/agregarReversaPago.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/agregarReversaPago/agregarReversaPago.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Agregar Reversa de Pago</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Cliente</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <input appRutFormat formControlName=\"rutCliente\" name=\"rutCliente\" class=\"form-control\"\r\n                            placeholder=\"R.U.T\" type=\"text\" (change)=\"validaRut()\" formatRut />\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <input formControlName=\"nombreCliente\" name=\"nombreCliente\" class=\"form-control\" type=\"text\"\r\n                            placeholder=\"Nombre\" />\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCliente()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Fecha Desde</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <input #fechaDesde class=\"form-control  text-center\" formControlName=\"fechaDesde\"\r\n                            name=\"fechaDesde\" type=\"date\" style=\"line-height: 1\" [max]='max'\r\n                            (ngModelChange)=\"fechaDesdeChanged($event)\" />\r\n                    </div>\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Fecha Hasta</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <input #fechaHasta class=\"form-control text-center\" formControlName=\"fechaHasta\"\r\n                            name=\"fechaHasta\" type=\"date\" style=\"line-height: 1\" [min]='min'\r\n                            (ngModelChange)=\"fechaHastaChanged($event)\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Tipo de pago</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <input formControlName=\"tipoPagoCod\" name=\"tipoPagoCod\" class=\"form-control\" type=\"text\"\r\n                            (change)=\"buscarTipoPago()\" placeholder=\"Código\"/>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <input formControlName=\"tipoPagoDesc\" name=\"tipoPagoDesc\" class=\"form-control\" type=\"text\" placeholder=\"Descripción\"/>\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalTiposPago()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Monto</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <input class=\"form-control\" formControlName=\"monto\" name=\"monto\" type=\"text\"\r\n                        currencyMask  [options]=\"{ prefix: ' ', thousands: '.', decimal: ',', align: 'left', nullable: true, precision: 0 }\"/>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                    <button class=\"btn btn-oval btn-sm mr-1\" [routerLink]=\"['/cajaCobranza/buscarReversaPago']\"\r\n                        type=\"button\">Volver</button>\r\n                    <button class=\"btn btn-oval btn-sm\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"align-middle\">RUT Cliente</th>\r\n                                <th class=\"align-middle\">Cliente</th>\r\n                                <th class=\"align-middle\">Tipo</th>\r\n                                <th class=\"align-middle\">Número</th>\r\n                                <th class=\"align-middle\">Fecha</th>\r\n                                <th class=\"align-middle\">Monto</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let dato of datos | paginate: {itemsPerPage: 7, currentPage: pageActual};\"\r\n                                (dblclick)=\"openModalDetalleReversaPago(dato)\" style=\"cursor: pointer\">\r\n                                <td class=\"text-right\">{{dato.cte_nrutcliente + dato.cli_sdigverificador | rut}}</td>\r\n                                <td>{{dato.cli_snombre}}</td>\r\n                                <td>{{dato.cte_sdestipodocto}}</td>\r\n                                <td class=\"text-right\">{{dato.numdoctopago}}</td>\r\n                                <td>{{convertirFecha(dato.fecha) | date:'dd/MM/yyyy'}}</td>\r\n                                <td class=\"text-right\">{{dato.cte_nabono | number: '': 'es'}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"text-right mt-2\">\r\n                        <pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\"\r\n                            nextLabel=\"Siguiente\"></pagination-controls>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/agregarReversaPago/agregarReversaPago.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/agregarReversaPago/agregarReversaPago.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/agregarReversaPago/agregarReversaPago.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/agregarReversaPago/agregarReversaPago.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AgregarReversaPagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarReversaPagoComponent", function() { return AgregarReversaPagoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _commonPopUp_rutAsociadoPopUp_rutAsociadoPopUp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commonPopUp/rutAsociadoPopUp/rutAsociadoPopUp.component */ "./src/app/routes/commonPopUp/rutAsociadoPopUp/rutAsociadoPopUp.component.ts");
/* harmony import */ var _commonPopUp_tiposPagoReversaPopUp_tiposPagoReversaPopUp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../commonPopUp/tiposPagoReversaPopUp/tiposPagoReversaPopUp.component */ "./src/app/routes/commonPopUp/tiposPagoReversaPopUp/tiposPagoReversaPopUp.component.ts");
/* harmony import */ var _commonPopUp_detalleReversaPagoPopUp_detalleReversaPagoPopUp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../commonPopUp/detalleReversaPagoPopUp/detalleReversaPagoPopUp.component */ "./src/app/routes/commonPopUp/detalleReversaPagoPopUp/detalleReversaPagoPopUp.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/consultaService/clientes.service */ "./src/app/core/consultaService/clientes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14__);
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
var AgregarReversaPagoComponent = /** @class */ (function () {
    function AgregarReversaPagoComponent(modalService, cajaCobranzaService, utilService, authService, cargador, setearDatos, clientesService, router) {
        this.modalService = modalService;
        this.cajaCobranzaService = cajaCobranzaService;
        this.utilService = utilService;
        this.authService = authService;
        this.cargador = cargador;
        this.setearDatos = setearDatos;
        this.clientesService = clientesService;
        this.router = router;
        this.datos = [];
        this.user = {};
        this.fechaActual = new Date();
        this.pageActual = 1;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            rutCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            nombreCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            fechaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fechaHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            tipoPagoCod: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tipoPagoDesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            monto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
    }
    AgregarReversaPagoComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14___default.a);
        this.user = this.authService.getDatosUser();
        this.subDataCliente = this.setearDatos.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.forma.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.forma.controls.fechaHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.min = '1900-01-01';
        this.max = this.utilService.dateToStringFormat(this.fechaActual);
    };
    AgregarReversaPagoComponent.prototype.buscarTipoPago = function () {
        var _this = this;
        if (this.forma.controls.tipoPagoCod.value === '') {
            this.forma.controls.tipoPagoCod.setValue('');
            this.forma.controls.tipoPagoDesc.setValue('');
            return;
        }
        var request = {};
        var tipoPagoCod = this.forma.controls.tipoPagoCod.value;
        this.cargador.show();
        this.cajaCobranzaService.buscaTiposPagoReversa(request)
            .subscribe(function (data) {
            if (data) {
                if (data.tipoPago.length > 0 && data.error.codError === 0) {
                    console.log('tipoPagoCod', tipoPagoCod);
                    var pago = data.tipoPago.find(function (e) { return e.par_codparametro01 == tipoPagoCod; });
                    if (pago) {
                        _this.forma.controls.tipoPagoCod.setValue(pago.par_codparametro01);
                        _this.forma.controls.tipoPagoDesc.setValue(pago.par_deslargo01);
                    }
                    else {
                        _this.forma.controls.tipoPagoCod.setValue('');
                        _this.forma.controls.tipoPagoDesc.setValue('');
                        swal('Atención', 'No se encontraron resultados', 'info');
                    }
                }
                else {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
            _this.cargador.hide();
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    AgregarReversaPagoComponent.prototype.ngOnDestroy = function () {
        if (this.subDataCliente !== undefined) {
            this.subDataCliente.unsubscribe();
        }
    };
    AgregarReversaPagoComponent.prototype.openModalCliente = function () {
        this.origen = 'clientePedido';
        var initialState = {
            titulo: 'Cliente',
            origen: 'clientePedido'
        };
        this.clienteModal = this.modalService.show(_commonPopUp_rutAsociadoPopUp_rutAsociadoPopUp_component__WEBPACK_IMPORTED_MODULE_5__["RutAsociadoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    AgregarReversaPagoComponent.prototype.openModalTiposPago = function () {
        this.origen = 'tipoPago';
        var initialState = {
            titulo: 'Tipos Pago',
            origen: 'tipoPago'
        };
        this.clienteModal = this.modalService.show(_commonPopUp_tiposPagoReversaPopUp_tiposPagoReversaPopUp_component__WEBPACK_IMPORTED_MODULE_6__["TiposPagoReversaPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    AgregarReversaPagoComponent.prototype.openModalDetalleReversaPago = function (dato) {
        var initialState = {
            titulo: 'Detalle Reversa de Pago',
            parametros: {
                formulario: {
                    rutCliente: this.forma.controls.rutCliente.value,
                    nombreCliente: this.forma.controls.nombreCliente.value,
                    fechaDesde: this.forma.controls.fechaDesde.value,
                    fechaHasta: this.forma.controls.fechaHasta.value,
                    tipoPagoCod: this.forma.controls.tipoPagoCod.value,
                    tipoPagoDesc: this.forma.controls.tipoPagoDesc.value,
                    monto: this.forma.controls.monto.value,
                },
                dato: {
                    cli_sdigverificador: dato.cli_sdigverificador,
                    cli_snombre: dato.cli_snombre,
                    cte_nabono: dato.cte_nabono,
                    cte_nidoperacion: dato.cte_nidoperacion,
                    cte_nrutcliente: dato.cte_nrutcliente,
                    cte_nrutoperador: dato.cte_nrutoperador,
                    cte_scodtipodocto: dato.cte_scodtipodocto,
                    cte_sdestipodocto: dato.cte_sdestipodocto,
                    fecha: dato.fecha,
                    fechavencimiento: dato.fechavencimiento,
                }
            },
        };
        this.clienteModal = this.modalService.show(_commonPopUp_detalleReversaPagoPopUp_detalleReversaPagoPopUp_component__WEBPACK_IMPORTED_MODULE_7__["DetalleReversaPagoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    AgregarReversaPagoComponent.prototype.setData = function (resData) {
        if (resData) {
            switch (this.origen) {
                case 'clientePedido': {
                    this.forma.controls.rutCliente.setValue(resData.cli_nrutcliente + resData.cli_sdigverificador);
                    this.forma.controls.nombreCliente.setValue(resData.cli_snombre);
                    break;
                }
                case 'tipoPago': {
                    this.forma.controls.tipoPagoCod.setValue(resData.par_codparametro01);
                    this.forma.controls.tipoPagoDesc.setValue(resData.par_deslargo01);
                    break;
                }
            }
        }
    };
    AgregarReversaPagoComponent.prototype.buscar = function () {
        var _this = this;
        if (this.validarForm()) {
            return;
        }
        this.cargador.show();
        var request = {
            nRutOperador: Number(this.user.nrutoperador),
            sFechaDesde: (this.forma.controls.fechaDesde.value).replace(/-/g, ''),
            sFechaHasta: (this.forma.controls.fechaHasta.value).replace(/-/g, ''),
            sCodTipoPago: this.forma.controls.tipoPagoCod.value === '' ? 'TODOS' : this.forma.controls.tipoPagoCod.value,
            nMonto: this.forma.controls.monto.value === null ? 0 : Number(this.forma.controls.monto.value),
            nRutCliente: this.forma.controls.rutCliente.value === '' ? 0 : Number(this.forma.controls.rutCliente.value.slice(0, -1)),
        };
        this.cajaCobranzaService.buscaDocumentosPagos(request)
            .subscribe(function (data) {
            _this.cargador.hide();
            if (data) {
                if (data.documentos.length > 0 && data.error.codError === 0) {
                    _this.datos = data.documentos;
                }
                else {
                    _this.datos = [];
                    swal('Atención', 'No se encontraron resultados', 'info');
                }
            }
            else {
                _this.datos = [];
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.datos = [];
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    AgregarReversaPagoComponent.prototype.validarForm = function () {
        if (this.forma.controls.fechaDesde.value !== '' && this.forma.controls.fechaHasta.value !== '') {
            if (new Date(this.forma.controls.fechaDesde.value) > new Date(this.forma.controls.fechaHasta.value)) {
                swal('Atención', 'Fecha Desde debe ser menor a la Fecha Hasta!', 'error');
                return true;
            }
            if (new Date(this.forma.controls.fechaHasta.value) < new Date(this.forma.controls.fechaDesde.value)) {
                swal('Atención', 'Fecha Hasta debe ser mayor a la Fecha Desde!', 'error');
                return true;
            }
        }
        return false;
    };
    AgregarReversaPagoComponent.prototype.fechaDesdeChanged = function (fecha) {
        this.min = fecha;
    };
    AgregarReversaPagoComponent.prototype.fechaHastaChanged = function (fecha) {
        this.max = fecha;
    };
    AgregarReversaPagoComponent.prototype.enviarInfo = function (dato) {
        var data = {
            formulario: {
                rutCliente: this.forma.controls.rutCliente.value,
                nombreCliente: this.forma.controls.nombreCliente.value,
                fechaDesde: this.forma.controls.fechaDesde.value,
                fechaHasta: this.forma.controls.fechaHasta.value,
                tipoPagoCod: this.forma.controls.tipoPagoCod.value,
                tipoPagoDesc: this.forma.controls.tipoPagoDesc.value,
                monto: this.forma.controls.monto.value,
            },
            dato: {
                cli_sdigverificador: dato.cli_sdigverificador,
                cli_snombre: dato.cli_snombre,
                cte_nabono: dato.cte_nabono,
                cte_nidoperacion: dato.cte_nidoperacion,
                cte_nrutcliente: dato.cte_nrutcliente,
                cte_nrutoperador: dato.cte_nrutoperador,
                cte_scodtipodocto: dato.cte_scodtipodocto,
                cte_sdestipodocto: dato.cte_sdestipodocto,
                fecha: dato.fecha,
                fechavencimiento: dato.fechavencimiento,
            }
        };
        var myJson = JSON.stringify(data);
        this.router.navigate(['/cajaCobranza/detalleReversaPago'], { queryParams: { data: myJson } });
    };
    AgregarReversaPagoComponent.prototype.convertirFecha = function (fecha) {
        var regexp = /(\d{4})(\d{2})(\d{2})$/;
        var tag = fecha.match(regexp);
        return new Date(tag[1], tag[2] - 1, tag[3]);
    };
    AgregarReversaPagoComponent.prototype.validaRut = function () {
        var _this = this;
        if (this.forma.controls.rutCliente.value === '') {
            this.forma.controls.nombreCliente.setValue('');
            return;
        }
        if (!this.utilService.isValidRUT(this.forma.controls.rutCliente.value)) {
            this.forma.controls.rutCliente.setValue('');
            this.forma.controls.nombreCliente.setValue('');
            swal('Atención', 'El RUT es incorrecto', 'error');
            return true;
        }
        else {
            this.cargador.show();
            var rutCliente = this.forma.controls.rutCliente.value;
            rutCliente = rutCliente.substring(0, rutCliente.length - 1);
            var request = {
                rutClientes: Number(rutCliente),
                rutOperador: Number(this.user.nrutoperador),
            };
            this.clientesService.getDetallesClientes(request)
                .subscribe(function (data) {
                if (data) {
                    if (data.error.codError !== 0) {
                        _this.forma.controls.rutCliente.setValue('');
                        _this.forma.controls.nombreCliente.setValue('');
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                        return;
                    }
                    if (data.cliente.length === 0 && data.error.codError === 0) {
                        _this.forma.controls.rutCliente.setValue('');
                        _this.forma.controls.nombreCliente.setValue('');
                        swal('Atención', 'No se encontraron resultados', 'info');
                    }
                    else {
                        var cliente = data.cliente[0];
                        _this.forma.controls.rutCliente.setValue(cliente.cli_nrutcliente + '' + cliente.cli_sdigverificador);
                        _this.forma.controls.nombreCliente.setValue(cliente.cli_snombre);
                    }
                }
                else {
                    _this.forma.controls.rutCliente.setValue('');
                    _this.forma.controls.nombreCliente.setValue('');
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
                _this.cargador.hide();
            }, function (error) {
                _this.forma.controls.rutCliente.setValue('');
                _this.forma.controls.nombreCliente.setValue('');
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                _this.cargador.hide();
            });
            return false;
        }
    };
    AgregarReversaPagoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agregar-reversa-pago',
            template: __webpack_require__(/*! ./agregarReversaPago.component.html */ "./src/app/routes/cajaCobranza/agregarReversaPago/agregarReversaPago.component.html"),
            styles: [__webpack_require__(/*! ./agregarReversaPago.component.scss */ "./src/app/routes/cajaCobranza/agregarReversaPago/agregarReversaPago.component.scss")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_2__["CajaCobranzaService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_11__["ConsultasService"],
            _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_12__["ClientesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]])
    ], AgregarReversaPagoComponent);
    return AgregarReversaPagoComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/buscaClienteCtaCte/buscaClienteCtaCte.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/buscaClienteCtaCte/buscaClienteCtaCte.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Buscar Cliente</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Rut Cliente</label>\r\n                    <div class=\"col-sm-2 pl-0\">\r\n                        <input appRutFormat formControlName=\"rutCliente\" name=\"rutCliente\" class=\"form-control\"\r\n                            type=\"text\" (change)=\"validaRut()\" placeholder=\"R.U.T\" formatRut />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label text-right\">Nombre</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input formControlName=\"nombreCliente\" name=\"nombreCliente\" class=\"form-control\" type=\"text\"\r\n                            placeholder=\"Nombre\" />\r\n                    </div>\r\n                    <div class=\"col-sm-2 ml-1 mr-2\">\r\n                        <button class=\"btn btn-oval btn-sm\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"align-middle w-80\">R.U.T.</th>\r\n                                <th class=\"align-middle w-270\">Nombres</th>\r\n                                <th class=\"align-middle w-200\">Nombre Fantasía</th>\r\n                                <th class=\"align-middle\">Giro</th>\r\n                                <th class=\"align-middle\">Tipo Cliente</th>\r\n                                <th class=\"align-middle w-50\">Ver</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr\r\n                                *ngFor=\"let cliente of clientes | paginate: {itemsPerPage: 7, currentPage: pageActual};\">\r\n                                <td class=\"text-right\">{{cliente.cli_nrutcliente}}-{{cliente.cli_sdigverificador}}</td>\r\n                                <td>{{cliente.cli_snombre}}</td>\r\n                                <td>{{cliente.cli_snombrefantasia}}</td>\r\n                                <td>{{cliente.cli_sdesgiro}}</td>\r\n                                <td class=\"text-center\">{{cliente.cli_stipocliente}}</td>\r\n                                <td class=\"text-center\">\r\n                                    <span class=\"table-remove\">\r\n                                        <a class=\"text\" data-toggle=\"tooltip\" title=\"Ver Detalle\"\r\n                                            (click)=\"detalleCliente(cliente)\">\r\n                                            <em class=\"fa fa-search\"></em>\r\n                                        </a>\r\n                                    </span>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"text-right mt-2\">\r\n                        <pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\"\r\n                            nextLabel=\"Siguiente\"></pagination-controls>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/buscaClienteCtaCte/buscaClienteCtaCte.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/buscaClienteCtaCte/buscaClienteCtaCte.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/buscaClienteCtaCte/buscaClienteCtaCte.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/buscaClienteCtaCte/buscaClienteCtaCte.component.ts ***!
  \****************************************************************************************/
/*! exports provided: BuscaClienteCtaCteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscaClienteCtaCteComponent", function() { return BuscaClienteCtaCteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/consultaService/pedidos.service */ "./src/app/core/consultaService/pedidos.service.ts");
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
var BuscaClienteCtaCteComponent = /** @class */ (function () {
    function BuscaClienteCtaCteComponent(utilService, router, pedidosService, cargador, authService, clientesService) {
        this.utilService = utilService;
        this.router = router;
        this.pedidosService = pedidosService;
        this.cargador = cargador;
        this.authService = authService;
        this.clientesService = clientesService;
        this.pageActual = 1;
        this.clientes = [];
        this.request = {};
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            rutCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nombreCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    BuscaClienteCtaCteComponent.prototype.ngOnInit = function () {
    };
    BuscaClienteCtaCteComponent.prototype.validaRut = function () {
        this.rutValido = false;
        if (this.forma.controls.rutCliente.value !== '') {
            if (!this.utilService.isValidRUT(this.forma.controls.rutCliente.value)) {
                this.forma.controls.rutCliente.setValue('');
                this.forma.controls.nombreCliente.setValue('');
                swal('Atención', 'El RUT es incorrecto', 'error');
            }
            else {
                this.rutValido = true;
            }
        }
    };
    BuscaClienteCtaCteComponent.prototype.buscar = function () {
        var _this = this;
        if (this.rutValido || this.forma.controls.rutCliente.value === '') {
            this.clientes = [];
            this.request.nombre = this.forma.controls.nombreCliente.value === '' ? null : this.forma.controls.nombreCliente.value;
            this.request.rutCliente = this.forma.controls.rutCliente.value === '' ? 0 : parseInt(this.forma.controls.rutCliente.value.substr(0, this.forma.controls.rutCliente.value.length - 1));
            this.request.rutOperador = this.authService.getDatosUser().nrutoperador;
            this.cargador.show();
            this.pedidosService.getClientesPedido(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                if (data.buscaClientes) {
                    if (data.buscaClientes.length == 0 && data.error.codError == 0) {
                        swal('Atención', 'No se encontraron coincidencias', 'info');
                    }
                    else {
                        _this.clientes = data.buscaClientes;
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
    BuscaClienteCtaCteComponent.prototype.detalleCliente = function (cliente) {
        this.clientesService.selectedCliente = Object.assign({}, cliente);
        this.router.navigate(['/cajaCobranza/detalleCliente']);
    };
    BuscaClienteCtaCteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-busca-cliente-cta-cte',
            template: __webpack_require__(/*! ./buscaClienteCtaCte.component.html */ "./src/app/routes/cajaCobranza/buscaClienteCtaCte/buscaClienteCtaCte.component.html"),
            styles: [__webpack_require__(/*! ./buscaClienteCtaCte.component.scss */ "./src/app/routes/cajaCobranza/buscaClienteCtaCte/buscaClienteCtaCte.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_5__["PedidosService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ClientesService"]])
    ], BuscaClienteCtaCteComponent);
    return BuscaClienteCtaCteComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/buscaTransportistaCtaCte/buscaTransportistaCtaCte.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/buscaTransportistaCtaCte/buscaTransportistaCtaCte.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Buscar Transportista</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label lh-11\">Rut Transportista</label>\r\n                    <div class=\"col-sm-2 pl-0\">\r\n                        <input appRutFormat formControlName=\"rutTrasnportista\" name=\"rutTrasnportista\" class=\"form-control\" type=\"text\" (change)=\"validaRut()\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label text-right\">Nombre</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input formControlName=\"nombreTrasnportista\" name=\"nombreTrasnportista\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"col-sm-2 ml-1 mr-2\">\r\n                        <button class=\"btn btn-oval btn-sm\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"align-middle w-150\">R.U.T.</th>\r\n                                <th class=\"align-middle\">Razón Social</th>\r\n                                <th class=\"align-middle w-50\">Ver</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let transportista of transportistas | paginate: {itemsPerPage: 7, currentPage: pageActual};\">\r\n                                <td class=\"text-right\">{{transportista.rut}}</td>\r\n                                <td>{{transportista.nombre}}</td>\r\n                                <td class=\"text-center\">\r\n                                    <span class=\"table-remove\">\r\n                                      <a class=\"text\" data-toggle=\"tooltip\" title=\"Ver Detalle\" (click)=\"detalleTransportista(transportista)\">\r\n                                          <em class=\"fa fa-search\"></em>\r\n                                      </a>\r\n                                  </span>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"text-right mt-2\">\r\n                        <pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\"></pagination-controls>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/buscaTransportistaCtaCte/buscaTransportistaCtaCte.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/buscaTransportistaCtaCte/buscaTransportistaCtaCte.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/buscaTransportistaCtaCte/buscaTransportistaCtaCte.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/buscaTransportistaCtaCte/buscaTransportistaCtaCte.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: BuscaTransportistaCtaCteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscaTransportistaCtaCteComponent", function() { return BuscaTransportistaCtaCteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
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
var BuscaTransportistaCtaCteComponent = /** @class */ (function () {
    function BuscaTransportistaCtaCteComponent(utilService, router) {
        this.utilService = utilService;
        this.router = router;
        this.pageActual = 1;
        this.transportistas = [];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            rutTrasnportista: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nombreTrasnportista: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    BuscaTransportistaCtaCteComponent.prototype.ngOnInit = function () {
    };
    BuscaTransportistaCtaCteComponent.prototype.validaRut = function () {
        // this.rutValido = false;
        if (!this.utilService.isValidRUT(this.forma.controls.rutTrasnportista.value)) {
            this.forma.controls.rutTrasnportista.setValue('');
            this.forma.controls.nombreTrasnportista.setValue('');
            swal('Atención', 'El RUT es incorrecto', 'error');
            // this.datosCliente = [];
        }
        else {
            // this.rutValido =  true;
            console.log('rut valido');
            // this.request.rutClientes = parseInt(this.forma.controls.rutCliente.value.substr(0, this.forma.controls.rutCliente.value.length - 1));
            // this.request.rutOperador = parseInt(this.authService.getDatosUser().nrutoperador);
            // console.log('request', this.request);
            // this.cargador.show();
        }
    };
    BuscaTransportistaCtaCteComponent.prototype.buscar = function () {
        this.transportistas = [
            {
                rut: '11111111-1',
                nombre: 'GARCIA SOTO PILAR'
            },
            {
                rut: '22222222-2',
                nombre: 'SOTO ALVARADO ANDRES'
            },
            {
                rut: '33333333-3',
                nombre: 'SOTO SOTO ARMIN'
            }
        ];
    };
    BuscaTransportistaCtaCteComponent.prototype.detalleTransportista = function (transportista) {
        this.router.navigate(['/cajaCobranza/detalleTransportista']);
    };
    BuscaTransportistaCtaCteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-busca-transportista-cta-cte',
            template: __webpack_require__(/*! ./buscaTransportistaCtaCte.component.html */ "./src/app/routes/cajaCobranza/buscaTransportistaCtaCte/buscaTransportistaCtaCte.component.html"),
            styles: [__webpack_require__(/*! ./buscaTransportistaCtaCte.component.scss */ "./src/app/routes/cajaCobranza/buscaTransportistaCtaCte/buscaTransportistaCtaCte.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BuscaTransportistaCtaCteComponent);
    return BuscaTransportistaCtaCteComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/buscarReversaPago/buscarReversaPago.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/buscarReversaPago/buscarReversaPago.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Buscar Reversa de Pago</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Fecha Desde</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <input #fechaDesde class=\"form-control  text-center\" formControlName=\"fechaDesde\"\r\n                            name=\"fechaDesde\" type=\"date\" style=\"line-height: 1\" [max]='max'\r\n                            (ngModelChange)=\"fechaDesdeChanged($event)\" />\r\n                    </div>\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Fecha Hasta</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <input #fechaHasta class=\"form-control text-center\" formControlName=\"fechaHasta\"\r\n                            name=\"fechaHasta\" type=\"date\" style=\"line-height: 1\" [min]='min'\r\n                            (ngModelChange)=\"fechaHastaChanged($event)\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                    <button class=\"btn btn-oval btn-sm mr-1\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n                    <button class=\"btn btn-oval btn-sm\" [routerLink]=\"['/cajaCobranza/agregarReversaPago']\"\r\n                        type=\"button\">Agregar</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"align-middle\">Fecha</th>\r\n                                <th class=\"align-middle\">RUT Cliente</th>\r\n                                <th class=\"align-middle\">Nombre Cliente</th>\r\n                                <th class=\"align-middle\">Tipo Pago</th>\r\n                                <th class=\"align-middle\">Monto</th>\r\n                                <th class=\"align-middle\">Regularización</th>\r\n                                <th class=\"align-middle\">Estado</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let dato of datos | paginate: {itemsPerPage: 7, currentPage: pageActual};\"\r\n                                (dblclick)=\"openModalDetalleReversaPago(dato)\" style=\"cursor: pointer\">\r\n                                <td>{{convertirFecha(dato.ere_dfhocreacion) | date:'dd/MM/yyyy'}}</td>\r\n                                <td class=\"text-right\">{{dato.ere_nrutcliente + dato.cli_sdigverificador | rut }}</td>\r\n                                <td>{{dato.cli_snombre}}</td>\r\n                                <td>{{dato.tipopago}}</td>\r\n                                <td class=\"text-right\">{{dato.ere_nmontopago | number: '': 'es' }}</td>\r\n                                <td>{{dato.indicador}}</td>\r\n                                <td>{{dato.ere_scodestado}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"text-right mt-2\">\r\n                        <pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\"\r\n                            nextLabel=\"Siguiente\">\r\n                        </pagination-controls>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/buscarReversaPago/buscarReversaPago.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/buscarReversaPago/buscarReversaPago.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/buscarReversaPago/buscarReversaPago.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/buscarReversaPago/buscarReversaPago.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BuscarReversaPagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarReversaPagoComponent", function() { return BuscarReversaPagoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _commonPopUp_detalleReversaPagoInfoPopUp_detalleReversaPagoInfoPopUp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../commonPopUp/detalleReversaPagoInfoPopUp/detalleReversaPagoInfoPopUp.component */ "./src/app/routes/commonPopUp/detalleReversaPagoInfoPopUp/detalleReversaPagoInfoPopUp.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_9__);
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
var BuscarReversaPagoComponent = /** @class */ (function () {
    function BuscarReversaPagoComponent(cajaCobranzaService, authService, cargador, utilService, modalService) {
        this.cajaCobranzaService = cajaCobranzaService;
        this.authService = authService;
        this.cargador = cargador;
        this.utilService = utilService;
        this.modalService = modalService;
        this.datos = [];
        this.user = {};
        this.fechaActual = new Date();
        this.pageActual = 1;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fechaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fechaHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    BuscarReversaPagoComponent.prototype.ngOnInit = function () {
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_9___default.a);
        this.user = this.authService.getDatosUser();
        this.forma.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.forma.controls.fechaHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.min = '1900-01-01';
        this.max = this.utilService.dateToStringFormat(this.fechaActual);
    };
    BuscarReversaPagoComponent.prototype.ngOnDestroy = function () { };
    BuscarReversaPagoComponent.prototype.openModalDetalleReversaPago = function (dato) {
        console.log(dato);
        var initialState = {
            titulo: 'Detalle Reversa de Pago',
            parametros: {
                formulario: {
                    rutCliente: dato.ere_nrutcliente + '' + dato.cli_sdigverificador,
                    nombreCliente: dato.cli_snombre,
                    fecha: dato.ere_dfhocreacion,
                    tipoPagoDesc: dato.tipopago,
                    montoPagar: dato.ere_nmontopago,
                    montoReversa: dato.ere_nmontoreversa,
                    indicador: dato.indicador,
                    ere_nidreversa: dato.ere_nidreversa,
                },
            },
        };
        this.modalService.show(_commonPopUp_detalleReversaPagoInfoPopUp_detalleReversaPagoInfoPopUp_component__WEBPACK_IMPORTED_MODULE_7__["DetalleReversaPagoInfoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    BuscarReversaPagoComponent.prototype.buscar = function () {
        var _this = this;
        if (this.validarFormulario()) {
            return;
        }
        this.cargador.show();
        this.datos = [];
        var request = {
            nRutOperador: this.user.nrutoperador,
            sFechaDesde: (this.forma.controls.fechaDesde.value).replace(/-/g, ''),
            sFechaHasta: (this.forma.controls.fechaHasta.value).replace(/-/g, ''),
        };
        this.cajaCobranzaService.buscarReversaPago(request)
            .subscribe(function (data) {
            _this.cargador.hide();
            if (data) {
                if (data.documentos.length > 0 && data.error.codError === 0) {
                    _this.datos = data.documentos;
                }
                else {
                    swal('Atención', 'No se encontraron resultados', 'info');
                }
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    BuscarReversaPagoComponent.prototype.validarFormulario = function () {
        if (this.forma.controls.fechaDesde.value !== '' && this.forma.controls.fechaHasta.value !== '') {
            if (new Date(this.forma.controls.fechaDesde.value) > new Date(this.forma.controls.fechaHasta.value)) {
                swal('Atención', 'Fecha Desde debe ser menor a la Fecha Hasta!', 'error');
                return true;
            }
            if (new Date(this.forma.controls.fechaHasta.value) < new Date(this.forma.controls.fechaDesde.value)) {
                swal('Atención', 'Fecha Hasta debe ser mayor a la Fecha Desde!', 'error');
                return true;
            }
        }
        return false;
    };
    BuscarReversaPagoComponent.prototype.convertirFecha = function (fecha) {
        var regexp = /(\d{4})(\d{2})(\d{2})$/;
        var tag = fecha.match(regexp);
        return new Date(tag[1], tag[2] - 1, tag[3]);
    };
    BuscarReversaPagoComponent.prototype.fechaDesdeChanged = function (fecha) {
        this.min = fecha;
    };
    BuscarReversaPagoComponent.prototype.fechaHastaChanged = function (fecha) {
        this.max = fecha;
    };
    BuscarReversaPagoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buscar-reversa-pago',
            template: __webpack_require__(/*! ./buscarReversaPago.component.html */ "./src/app/routes/cajaCobranza/buscarReversaPago/buscarReversaPago.component.html"),
            styles: [__webpack_require__(/*! ./buscarReversaPago.component.scss */ "./src/app/routes/cajaCobranza/buscarReversaPago/buscarReversaPago.component.scss")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_2__["CajaCobranzaService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]])
    ], BuscarReversaPagoComponent);
    return BuscarReversaPagoComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/cajaCobranza.module.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/cajaCobranza.module.ts ***!
  \************************************************************/
/*! exports provided: CajaCobranzaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CajaCobranzaModule", function() { return CajaCobranzaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-table/ng2-table */ "./node_modules/ng2-table/ng2-table.js");
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _commonPopUp_commonPopUp_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../commonPopUp/commonPopUp.module */ "./src/app/routes/commonPopUp/commonPopUp.module.ts");
/* harmony import */ var ng2_rut__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-rut */ "./node_modules/ng2-rut/dist/ng2-rut.module.js");
/* harmony import */ var ng2_rut__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_rut__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-currency */ "./node_modules/ngx-currency/index.js");
/* harmony import */ var _cajaCobranza_cheques_cheques_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cajaCobranza/cheques/cheques.component */ "./src/app/routes/cajaCobranza/cheques/cheques.component.ts");
/* harmony import */ var _commonPopUp_clienteCajaCobranzaPopUp_clienteCajaCobranzaPopUp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../commonPopUp/clienteCajaCobranzaPopUp/clienteCajaCobranzaPopUp.component */ "./src/app/routes/commonPopUp/clienteCajaCobranzaPopUp/clienteCajaCobranzaPopUp.component.ts");
/* harmony import */ var _protestos_protestos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./protestos/protestos.component */ "./src/app/routes/cajaCobranza/protestos/protestos.component.ts");
/* harmony import */ var _commonPopUp_documentosClientePopUp_documentosClientePopUp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../commonPopUp/documentosClientePopUp/documentosClientePopUp.component */ "./src/app/routes/commonPopUp/documentosClientePopUp/documentosClientePopUp.component.ts");
/* harmony import */ var _buscaClienteCtaCte_buscaClienteCtaCte_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./buscaClienteCtaCte/buscaClienteCtaCte.component */ "./src/app/routes/cajaCobranza/buscaClienteCtaCte/buscaClienteCtaCte.component.ts");
/* harmony import */ var _detalleClienteCtaCte_detalleClienteCtaCte_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./detalleClienteCtaCte/detalleClienteCtaCte.component */ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/detalleClienteCtaCte.component.ts");
/* harmony import */ var _detalleClienteCtaCte_navDetalleClienteCtaCte_totales_totales_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./detalleClienteCtaCte/navDetalleClienteCtaCte/totales/totales.component */ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/totales/totales.component.ts");
/* harmony import */ var _detalleClienteCtaCte_navDetalleClienteCtaCte_pendientes_pendientes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./detalleClienteCtaCte/navDetalleClienteCtaCte/pendientes/pendientes.component */ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/pendientes/pendientes.component.ts");
/* harmony import */ var _detalleClienteCtaCte_navDetalleClienteCtaCte_periodo_periodo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./detalleClienteCtaCte/navDetalleClienteCtaCte/periodo/periodo.component */ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/periodo/periodo.component.ts");
/* harmony import */ var _buscaTransportistaCtaCte_buscaTransportistaCtaCte_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./buscaTransportistaCtaCte/buscaTransportistaCtaCte.component */ "./src/app/routes/cajaCobranza/buscaTransportistaCtaCte/buscaTransportistaCtaCte.component.ts");
/* harmony import */ var _detalleTransportistaCtaCte_detalleTransportistaCtaCte_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./detalleTransportistaCtaCte/detalleTransportistaCtaCte.component */ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/detalleTransportistaCtaCte.component.ts");
/* harmony import */ var _detalleTransportistaCtaCte_navDetalleTransportistaCtaCte_totalesTransportista_totalesTransportista_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/totalesTransportista/totalesTransportista.component */ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/totalesTransportista/totalesTransportista.component.ts");
/* harmony import */ var _detalleTransportistaCtaCte_navDetalleTransportistaCtaCte_pendientesTransportista_pendientesTransportista_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/pendientesTransportista/pendientesTransportista.component */ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/pendientesTransportista/pendientesTransportista.component.ts");
/* harmony import */ var _detalleTransportistaCtaCte_navDetalleTransportistaCtaCte_periodoTransportista_periodoTransportista_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/periodoTransportista/periodoTransportista.component */ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/periodoTransportista/periodoTransportista.component.ts");
/* harmony import */ var _pagos_pagos_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pagos/pagos.component */ "./src/app/routes/cajaCobranza/pagos/pagos.component.ts");
/* harmony import */ var _pagoTransportista_pagoTransportista_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pagoTransportista/pagoTransportista.component */ "./src/app/routes/cajaCobranza/pagoTransportista/pagoTransportista.component.ts");
/* harmony import */ var _commonPopUp_transportistaPagoPopUp_transportistaPagoPopUp_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../commonPopUp/transportistaPagoPopUp/transportistaPagoPopUp.component */ "./src/app/routes/commonPopUp/transportistaPagoPopUp/transportistaPagoPopUp.component.ts");
/* harmony import */ var _cierraCaja_cierreCaja_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./cierraCaja/cierreCaja.component */ "./src/app/routes/cajaCobranza/cierraCaja/cierreCaja.component.ts");
/* harmony import */ var _informesCaja_informesCaja_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./informesCaja/informesCaja.component */ "./src/app/routes/cajaCobranza/informesCaja/informesCaja.component.ts");
/* harmony import */ var _partidasAbiertas_partidasAbiertas_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./partidasAbiertas/partidasAbiertas.component */ "./src/app/routes/cajaCobranza/partidasAbiertas/partidasAbiertas.component.ts");
/* harmony import */ var _partidasAbiertasTransportista_partidasAbiertasTransportista_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./partidasAbiertasTransportista/partidasAbiertasTransportista.component */ "./src/app/routes/cajaCobranza/partidasAbiertasTransportista/partidasAbiertasTransportista.component.ts");
/* harmony import */ var _resumenCuentasCorrientes_resumenCuentasCorrientes_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./resumenCuentasCorrientes/resumenCuentasCorrientes.component */ "./src/app/routes/cajaCobranza/resumenCuentasCorrientes/resumenCuentasCorrientes.component.ts");
/* harmony import */ var _buscarReversaPago_buscarReversaPago_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./buscarReversaPago/buscarReversaPago.component */ "./src/app/routes/cajaCobranza/buscarReversaPago/buscarReversaPago.component.ts");
/* harmony import */ var _agregarReversaPago_agregarReversaPago_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./agregarReversaPago/agregarReversaPago.component */ "./src/app/routes/cajaCobranza/agregarReversaPago/agregarReversaPago.component.ts");
/* harmony import */ var _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component */ "./src/app/routes/commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component.ts");
/* harmony import */ var _commonPopUp_documentosAsociadosPopUp_documentosAsociadosPopUp_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../commonPopUp/documentosAsociadosPopUp/documentosAsociadosPopUp.component */ "./src/app/routes/commonPopUp/documentosAsociadosPopUp/documentosAsociadosPopUp.component.ts");
/* harmony import */ var _resumenDocumentosCobranza_resumenDocumentosCobranza_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./resumenDocumentosCobranza/resumenDocumentosCobranza.component */ "./src/app/routes/cajaCobranza/resumenDocumentosCobranza/resumenDocumentosCobranza.component.ts");
/* harmony import */ var _resumenProtestos_resumenProtestos_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./resumenProtestos/resumenProtestos.component */ "./src/app/routes/cajaCobranza/resumenProtestos/resumenProtestos.component.ts");
/* harmony import */ var _documentosDeposito_documentosDeposito_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./documentosDeposito/documentosDeposito.component */ "./src/app/routes/cajaCobranza/documentosDeposito/documentosDeposito.component.ts");
/* harmony import */ var _documentosCartera_documentosCartera_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./documentosCartera/documentosCartera.component */ "./src/app/routes/cajaCobranza/documentosCartera/documentosCartera.component.ts");
/* harmony import */ var _detalleDocumentosCobranza_detalleDocumentosCobranza_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./detalleDocumentosCobranza/detalleDocumentosCobranza.component */ "./src/app/routes/cajaCobranza/detalleDocumentosCobranza/detalleDocumentosCobranza.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var routes = [
    { path: 'cheques', component: _cajaCobranza_cheques_cheques_component__WEBPACK_IMPORTED_MODULE_9__["ChequesComponent"] },
    { path: 'protestos', component: _protestos_protestos_component__WEBPACK_IMPORTED_MODULE_11__["ProtestosComponent"] },
    { path: 'cuentaCorriente', component: _buscaClienteCtaCte_buscaClienteCtaCte_component__WEBPACK_IMPORTED_MODULE_13__["BuscaClienteCtaCteComponent"] },
    { path: 'detalleCliente', component: _detalleClienteCtaCte_detalleClienteCtaCte_component__WEBPACK_IMPORTED_MODULE_14__["DetalleClienteCtaCteComponent"] },
    { path: 'cuentaCorrienteTransportista', component: _buscaTransportistaCtaCte_buscaTransportistaCtaCte_component__WEBPACK_IMPORTED_MODULE_18__["BuscaTransportistaCtaCteComponent"] },
    { path: 'detalleTransportista', component: _detalleTransportistaCtaCte_detalleTransportistaCtaCte_component__WEBPACK_IMPORTED_MODULE_19__["DetalleTransportistaCtaCteComponent"] },
    { path: 'pagos', component: _pagos_pagos_component__WEBPACK_IMPORTED_MODULE_23__["PagosComponent"] },
    { path: 'pagosTransportista', component: _pagoTransportista_pagoTransportista_component__WEBPACK_IMPORTED_MODULE_24__["PagoTransportistaComponent"] },
    { path: 'cierreCaja', component: _cierraCaja_cierreCaja_component__WEBPACK_IMPORTED_MODULE_26__["CierreCajaComponent"] },
    { path: 'informesCaja', component: _informesCaja_informesCaja_component__WEBPACK_IMPORTED_MODULE_27__["InformesCajaComponent"] },
    { path: 'partidasAbiertas', component: _partidasAbiertas_partidasAbiertas_component__WEBPACK_IMPORTED_MODULE_28__["PartidasAbiertasComponent"] },
    { path: 'partidasAbiertasTransportista', component: _partidasAbiertasTransportista_partidasAbiertasTransportista_component__WEBPACK_IMPORTED_MODULE_29__["PartidasAbiertasTransportistaComponent"] },
    { path: 'resumenCuentasCorrientes', component: _resumenCuentasCorrientes_resumenCuentasCorrientes_component__WEBPACK_IMPORTED_MODULE_30__["ResumenCuentasCorrientesComponent"] },
    { path: 'buscarReversaPago', component: _buscarReversaPago_buscarReversaPago_component__WEBPACK_IMPORTED_MODULE_31__["BuscarReversaPagoComponent"] },
    { path: 'agregarReversaPago', component: _agregarReversaPago_agregarReversaPago_component__WEBPACK_IMPORTED_MODULE_32__["AgregarReversaPagoComponent"] },
    { path: 'resumenDocumentosCobranza', component: _resumenDocumentosCobranza_resumenDocumentosCobranza_component__WEBPACK_IMPORTED_MODULE_35__["ResumenDocumentosCobranzaComponent"] },
    { path: 'resumenProtestos', component: _resumenProtestos_resumenProtestos_component__WEBPACK_IMPORTED_MODULE_36__["ResumenProtestosPagoComponent"] },
    { path: 'documentosDeposito', component: _documentosDeposito_documentosDeposito_component__WEBPACK_IMPORTED_MODULE_37__["DocumentosDepositoComponent"] },
    { path: 'documentosCartera', component: _documentosCartera_documentosCartera_component__WEBPACK_IMPORTED_MODULE_38__["DocumentosCarteraComponent"] },
    { path: 'detalleDocumentosCobranza', component: _detalleDocumentosCobranza_detalleDocumentosCobranza_component__WEBPACK_IMPORTED_MODULE_39__["DetalleDocumentosCobranzaComponent"] },
];
var CajaCobranzaModule = /** @class */ (function () {
    function CajaCobranzaModule() {
    }
    CajaCobranzaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_2__["Ng2TableModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _commonPopUp_commonPopUp_module__WEBPACK_IMPORTED_MODULE_6__["CommonPopUpModule"],
                ng2_rut__WEBPACK_IMPORTED_MODULE_7__["Ng2Rut"],
                ngx_currency__WEBPACK_IMPORTED_MODULE_8__["NgxCurrencyModule"]
            ],
            declarations: [
                _cajaCobranza_cheques_cheques_component__WEBPACK_IMPORTED_MODULE_9__["ChequesComponent"],
                _protestos_protestos_component__WEBPACK_IMPORTED_MODULE_11__["ProtestosComponent"],
                _buscaClienteCtaCte_buscaClienteCtaCte_component__WEBPACK_IMPORTED_MODULE_13__["BuscaClienteCtaCteComponent"],
                _detalleClienteCtaCte_detalleClienteCtaCte_component__WEBPACK_IMPORTED_MODULE_14__["DetalleClienteCtaCteComponent"],
                _detalleClienteCtaCte_navDetalleClienteCtaCte_totales_totales_component__WEBPACK_IMPORTED_MODULE_15__["TotalesComponent"],
                _detalleClienteCtaCte_navDetalleClienteCtaCte_pendientes_pendientes_component__WEBPACK_IMPORTED_MODULE_16__["PendientesComponent"],
                _detalleClienteCtaCte_navDetalleClienteCtaCte_periodo_periodo_component__WEBPACK_IMPORTED_MODULE_17__["PeriodoComponent"],
                _buscaTransportistaCtaCte_buscaTransportistaCtaCte_component__WEBPACK_IMPORTED_MODULE_18__["BuscaTransportistaCtaCteComponent"],
                _detalleTransportistaCtaCte_detalleTransportistaCtaCte_component__WEBPACK_IMPORTED_MODULE_19__["DetalleTransportistaCtaCteComponent"],
                _detalleTransportistaCtaCte_navDetalleTransportistaCtaCte_totalesTransportista_totalesTransportista_component__WEBPACK_IMPORTED_MODULE_20__["TotalesTransportistaComponent"],
                _detalleTransportistaCtaCte_navDetalleTransportistaCtaCte_pendientesTransportista_pendientesTransportista_component__WEBPACK_IMPORTED_MODULE_21__["PendientesTransportistaComponent"],
                _detalleTransportistaCtaCte_navDetalleTransportistaCtaCte_periodoTransportista_periodoTransportista_component__WEBPACK_IMPORTED_MODULE_22__["PeriodoTransportistaComponent"],
                _pagos_pagos_component__WEBPACK_IMPORTED_MODULE_23__["PagosComponent"],
                _pagoTransportista_pagoTransportista_component__WEBPACK_IMPORTED_MODULE_24__["PagoTransportistaComponent"],
                _cierraCaja_cierreCaja_component__WEBPACK_IMPORTED_MODULE_26__["CierreCajaComponent"],
                _informesCaja_informesCaja_component__WEBPACK_IMPORTED_MODULE_27__["InformesCajaComponent"],
                _partidasAbiertas_partidasAbiertas_component__WEBPACK_IMPORTED_MODULE_28__["PartidasAbiertasComponent"],
                _partidasAbiertasTransportista_partidasAbiertasTransportista_component__WEBPACK_IMPORTED_MODULE_29__["PartidasAbiertasTransportistaComponent"],
                _resumenCuentasCorrientes_resumenCuentasCorrientes_component__WEBPACK_IMPORTED_MODULE_30__["ResumenCuentasCorrientesComponent"],
                _buscarReversaPago_buscarReversaPago_component__WEBPACK_IMPORTED_MODULE_31__["BuscarReversaPagoComponent"],
                _agregarReversaPago_agregarReversaPago_component__WEBPACK_IMPORTED_MODULE_32__["AgregarReversaPagoComponent"],
                _resumenDocumentosCobranza_resumenDocumentosCobranza_component__WEBPACK_IMPORTED_MODULE_35__["ResumenDocumentosCobranzaComponent"],
                _resumenProtestos_resumenProtestos_component__WEBPACK_IMPORTED_MODULE_36__["ResumenProtestosPagoComponent"],
                _documentosDeposito_documentosDeposito_component__WEBPACK_IMPORTED_MODULE_37__["DocumentosDepositoComponent"],
                _documentosCartera_documentosCartera_component__WEBPACK_IMPORTED_MODULE_38__["DocumentosCarteraComponent"],
                _detalleDocumentosCobranza_detalleDocumentosCobranza_component__WEBPACK_IMPORTED_MODULE_39__["DetalleDocumentosCobranzaComponent"]
            ],
            entryComponents: [
                _commonPopUp_clienteCajaCobranzaPopUp_clienteCajaCobranzaPopUp_component__WEBPACK_IMPORTED_MODULE_10__["ClienteCajaCobranzaPopUpComponent"],
                _commonPopUp_documentosClientePopUp_documentosClientePopUp_component__WEBPACK_IMPORTED_MODULE_12__["DocumentosClientePopUpComponent"],
                _commonPopUp_transportistaPagoPopUp_transportistaPagoPopUp_component__WEBPACK_IMPORTED_MODULE_25__["TransportistaPagoPopUpComponent"],
                _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_33__["BuscarArticuloPopUpComponent"],
                _commonPopUp_documentosAsociadosPopUp_documentosAsociadosPopUp_component__WEBPACK_IMPORTED_MODULE_34__["DocumentosAsociadosPopUpComponent"]
            ]
        })
    ], CajaCobranzaModule);
    return CajaCobranzaModule;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/cheques/cheques.component.html":
/*!********************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/cheques/cheques.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Cheques</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Fecha Desde</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input #fechaDesde class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaDesde\" name=\"fechaDesde\" type=\"date\" (focusout)=\"validarFechas(fechaDesde)\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Fecha Hasta</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input #fechaHasta class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaHasta\" name=\"fechaHasta\" type=\"date\" (focusout)=\"validarFechas(fechaHasta)\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Banco</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"codBanco\" name=\"codBanco\">\r\n                            <option value=\"\" selected>(Todos)</option>\r\n                            <option *ngFor=\"let banco of bancos\" [ngValue]=\"banco.par_codparametro01\">{{banco.par_deslargo01}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Cliente</label>\r\n                    <div class=\"col-sm-5 pl-0\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input formatRut formControlName=\"rutCliente\" name=\"rutCliente\" class=\"form-control\" type=\"text\" (change)=\"validaRut()\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"nombreCliente\" name=\"nombreCliente\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                          </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n        <div class=\"row pull-left mb-4\">\r\n            <div class=\"col-sm-3 mr-1\">\r\n                <button class=\"btn btn-oval btn-sm\" type=\"button\" (click)=\"depositar()\">Depositar</button>\r\n            </div>\r\n            <div class=\"col-sm-3 ml-1 mr-2\">\r\n                <button class=\"btn btn-oval btn-sm\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n            </div>\r\n            <div class=\"col-sm-4 pl-0\">\r\n                <button class=\"btn btn-oval btn-sm\" (click)=\"generateExcel()\" [disabled]='!exportar'>Exportar</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>\r\n                                    <div class=\"checkbox c-checkbox needsclick pt-1\">\r\n                                        <label class=\"needsclick\">\r\n                                            <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckTitulo()\" [checked]=\"checkTituloSeleccionado\" />\r\n                                            <span class=\"fa fa-check\"></span>\r\n                                        </label>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"align-middle\">R.U.T.</th>\r\n                                <th class=\"align-middle\">Nombres</th>\r\n                                <th class=\"align-middle\">Banco</th>\r\n                                <th class=\"align-middle\">Nro. Cuenta</th>\r\n                                <th class=\"align-middle\">Nro. Docto</th>\r\n                                <th class=\"align-middle\">Monto</th>\r\n                                <th class=\"align-middle\">Fecha</th>\r\n                                <th class=\"align-middle\">Ver</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let garantia of garantias | paginate: {itemsPerPage: 7, currentPage: pageActual};\">\r\n                                <td>\r\n                                    <div class=\"checkbox c-checkbox needsclick pt-1\">\r\n                                        <label class=\"needsclick\">\r\n                                            <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheck(garantia)\" [checked]=\"garantia.bCheck\" />\r\n                                            <span class=\"fa fa-check\"></span>\r\n                                        </label>\r\n                                    </div>\r\n                                </td>\r\n                                <td class=\"text-right\">{{garantia.gar_nrutcliente | number:'':'es'}}-{{garantia.cli_sdigverificador}}</td>\r\n                                <td>{{garantia.cli_snombre}}</td>\r\n                                <td>{{garantia.banco}}</td>\r\n                                <td>{{garantia.gar_snumcuenta}}</td>\r\n                                <td class=\"text-right\">{{garantia.gar_niddocto}}</td>\r\n                                <td class=\"text-right\">{{garantia.gar_nmonto | number:'':'es'}}</td>\r\n                                <td class=\"text-center\">{{garantia.gar_dfhovencimiento | fecha }}</td>\r\n                                <td class=\"text-center\">\r\n                                    <span class=\"table-remove\">\r\n                                        <a class=\"text\" data-toggle=\"tooltip\" title=\"Modificación de Garantía\" (click)=\"editarGarantia(garantia)\">\r\n                                            <em class=\"fa fa-search\"></em>\r\n                                        </a>\r\n                                    </span>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"text-right mt-2\">\r\n                        <pagination-controls (pageChange)=\"pageActual = $event\" autoHide=\"true\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\"></pagination-controls>\r\n                    </div>\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"form-horizontal col-sm-3 pl-0\">\r\n                            <label class=\"col-sm-2 control-label\">Total</label>\r\n                            <div class=\"col-sm-7\">\r\n                                <label class=\"col-sm-5 form-control text-right pad-sup-2\">{{total | number:'':'es'}}</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-horizontal col-sm-3 pl-0\">\r\n                            <label class=\"col-sm-4 control-label lh-11\">Nro. Documentos</label>\r\n                            <div class=\"col-sm-5\">\r\n                                <label class=\"col-sm-5 form-control text-right pad-sup-2\">{{documentos | number:'':'es'}}</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/cheques/cheques.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/cheques/cheques.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pad-sup-2{padding-top:2px}\n"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/cheques/cheques.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/cheques/cheques.component.ts ***!
  \******************************************************************/
/*! exports provided: ChequesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequesComponent", function() { return ChequesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _commonPopUp_clienteCajaCobranzaPopUp_clienteCajaCobranzaPopUp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../commonPopUp/clienteCajaCobranzaPopUp/clienteCajaCobranzaPopUp.component */ "./src/app/routes/commonPopUp/clienteCajaCobranzaPopUp/clienteCajaCobranzaPopUp.component.ts");
/* harmony import */ var _commonPopUp_modificacionGarantiaPopUp_modificacionGarantiaPopUp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../commonPopUp/modificacionGarantiaPopUp/modificacionGarantiaPopUp.component */ "./src/app/routes/commonPopUp/modificacionGarantiaPopUp/modificacionGarantiaPopUp.component.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/consultaService/clientes.service */ "./src/app/core/consultaService/clientes.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
/* harmony import */ var _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/consultaService/pedidos.service */ "./src/app/core/consultaService/pedidos.service.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
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
var ChequesComponent = /** @class */ (function () {
    function ChequesComponent(modalService, consultasService, utilService, clientesService, authService, cargador, cajaCobranzaService, pedidosService, datePipe, excelService) {
        this.modalService = modalService;
        this.consultasService = consultasService;
        this.utilService = utilService;
        this.clientesService = clientesService;
        this.authService = authService;
        this.cargador = cargador;
        this.cajaCobranzaService = cajaCobranzaService;
        this.pedidosService = pedidosService;
        this.datePipe = datePipe;
        this.excelService = excelService;
        this.pageActual = 1;
        this.fechaActual = new Date();
        this.request = {};
        this.requestBuscar = {};
        this.datos = [];
        this.bancos = [];
        this.exportar = false;
        this.garantias = [];
        this.garantiasDeposito = [];
        this.total = 0;
        this.documentos = 0;
        this.checkTituloSeleccionado = false;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fechaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fechaHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            codBanco: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            rutCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nombreCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
        });
    }
    ChequesComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5___default.a);
        this.cargaCombos();
        this.forma.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.forma.controls.fechaHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    ChequesComponent.prototype.ngOnDestroy = function () {
        if (this.subData != undefined) {
            this.subData.unsubscribe();
        }
    };
    ChequesComponent.prototype.cargaCombos = function () {
        this.bancos = this.authService.getParametrosBancos();
    };
    ChequesComponent.prototype.openModal = function () {
        this.origen = 'cliente';
        var initialState = {
            titulo: 'Clientes',
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_clienteCajaCobranzaPopUp_clienteCajaCobranzaPopUp_component__WEBPACK_IMPORTED_MODULE_6__["ClienteCajaCobranzaPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    ChequesComponent.prototype.editarGarantia = function (garantia) {
        this.origen = 'garantia';
        var initialState = {
            titulo: 'Modificación de Garantía',
            garantia: garantia
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_modificacionGarantiaPopUp_modificacionGarantiaPopUp_component__WEBPACK_IMPORTED_MODULE_7__["ModificacionGarantiaPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    ChequesComponent.prototype.validarFechas = function (fecha) {
        var dateValid = this.utilService.DateValidator(fecha.value);
        if (!dateValid) {
            fecha.value = this.utilService.dateToStringFormat(this.fechaActual);
        }
    };
    ChequesComponent.prototype.validaRut = function () {
        var _this = this;
        if (this.forma.controls.rutCliente.value === '') {
            this.forma.controls.rutCliente.setValue('');
            this.forma.controls.nombreCliente.setValue('');
        }
        else {
            this.rutValido = false;
            if (!this.utilService.isValidRUT(this.forma.controls.rutCliente.value)) {
                this.forma.controls.rutCliente.setValue('');
                this.forma.controls.nombreCliente.setValue('');
                swal('Atención', 'El RUT es incorrecto', 'error');
            }
            else {
                this.rutValido = true;
                this.request.rutCliente = parseInt(this.forma.controls.rutCliente.value.substr(0, this.forma.controls.rutCliente.value.length - 1));
                this.request.rutOperador = this.authService.getDatosUser().nrutoperador;
                this.cargador.show();
                this.pedidosService.getClientesPedido(this.request)
                    .subscribe(function (data) {
                    _this.cargador.hide();
                    if (data) {
                        if (data.error.codError != 0) {
                            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                        }
                        else {
                            _this.datos = data.buscaClientes;
                            if (_this.datos.length > 0) {
                                _this.forma.controls.nombreCliente.setValue(_this.datos[0].cli_snombre);
                            }
                            else {
                                _this.forma.controls.rutCliente.setValue('');
                                _this.forma.controls.nombreCliente.setValue('');
                                swal('Atención', 'No Existe Cliente', 'warning');
                            }
                        }
                    }
                }, function (error) {
                    _this.cargador.hide();
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                });
            }
        }
    };
    ChequesComponent.prototype.depositar = function () {
        var _this = this;
        this.garantiasDeposito = [];
        if (this.garantias.length === 0) {
            swal('Atención', 'No hay Cheques que Depositar', 'warning');
        }
        else {
            for (var i in this.garantias) {
                if (this.garantias[i].bCheck) {
                    var deposito = {
                        idGarantia: this.garantias[i].gar_nidgarantia,
                        nRutOperador: this.garantias[i].gar_nrutoperador
                    };
                    this.garantiasDeposito.push(deposito);
                }
            }
            if (this.garantiasDeposito.length === 0) {
                swal('Atención', 'No existen itemes seleccionados', 'warning');
            }
            else {
                this.cargador.show();
                this.request.aSRV_EntGarantias = this.garantiasDeposito;
                this.request.nRunUsuario = parseInt(this.authService.getDatosUser().nrunusuario);
                this.cajaCobranzaService.depositaGarantia(this.request)
                    .subscribe(function (data) {
                    _this.cargador.hide();
                    if (data) {
                        if (data.error.codError != 0) {
                            swal('Atención', data.error.msjError, 'error');
                        }
                        else {
                            swal('Atención', 'Los Documentos fueron depositados correctamente', 'success');
                            _this.checkTituloSeleccionado = false;
                            _this.buscar();
                        }
                    }
                }, function (error) {
                    _this.cargador.hide();
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                });
            }
        }
    };
    ChequesComponent.prototype.buscar = function () {
        var _this = this;
        this.total = 0;
        this.documentos = 0;
        this.garantias = [];
        if (this.forma.controls.rutCliente.value !== '') {
            this.validaRut();
        }
        if (this.rutValido || this.forma.controls.rutCliente.value === '') {
            this.requestBuscar.nRutCliente = this.forma.controls.rutCliente.value === '' ? 0 : parseInt(this.forma.controls.rutCliente.value.substr(0, this.forma.controls.rutCliente.value.length - 1));
            this.requestBuscar.nRutOperador = parseInt(this.authService.getDatosUser().nrutoperador);
            this.requestBuscar.sCodBanco = this.forma.controls.codBanco.value === '' ? null : this.forma.controls.codBanco.value;
            this.requestBuscar.sCodEstado = 'PORDE';
            this.requestBuscar.sFhoVencimientoDesde = (this.forma.controls.fechaDesde.value).replace(/-/g, '') + "000000";
            this.requestBuscar.sFhoVencimientoHasta = (this.forma.controls.fechaHasta.value).replace(/-/g, '') + "000000";
            this.requestBuscar.sNumCuenta = null;
            console.log('request cheque', this.requestBuscar);
            this.cargador.show();
            this.datos = [];
            this.exportar = false;
            this.cajaCobranzaService.getGarantias(this.requestBuscar)
                .subscribe(function (data) {
                _this.cargador.hide();
                console.log('data cheque', data);
                if (data.garantia) {
                    if (data.garantia.length == 0 && data.error.codError == 0) {
                        swal('Atención', 'No se encontraron documentos', 'info');
                    }
                    else {
                        _this.exportar = true;
                        _this.cargarListadoGarantias(data.garantia);
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
    ChequesComponent.prototype.cargarListadoGarantias = function (data) {
        for (var i in data) {
            var garantia = {
                bCheck: false,
                banco: data[i].banco,
                cli_sapematerno: data[i].cli_sapematerno,
                cli_sapepaterno: data[i].cli_sapepaterno,
                cli_sdigverificador: data[i].cli_sdigverificador,
                cli_snombre: data[i].cli_snombre,
                gar_dfhodeposito: data[i].gar_dfhodeposito,
                gar_dfhovencimiento: data[i].gar_dfhovencimiento,
                gar_niddocto: data[i].gar_niddocto,
                gar_nidgarantia: data[i].gar_nidgarantia,
                gar_nmonto: data[i].gar_nmonto,
                gar_nrutcliente: data[i].gar_nrutcliente,
                gar_nrutoperador: data[i].gar_nrutoperador,
                gar_scodbanco: data[i].gar_scodbanco,
                gar_snumcuenta: data[i].gar_snumcuenta
            };
            this.garantias.push(garantia);
            this.total = this.total + data[i].gar_nmonto;
            this.documentos++;
        }
    };
    ChequesComponent.prototype.validaCheck = function (garantia) {
        garantia.bCheck = !garantia.bCheck;
        if (garantia.bCheck) {
            console.log('checkeado');
        }
        else {
            console.log('NO checkeado');
        }
    };
    ChequesComponent.prototype.validaCheckTitulo = function () {
        this.checkTituloSeleccionado = !this.checkTituloSeleccionado;
        if (this.checkTituloSeleccionado) {
            console.log('realizar accion');
            for (var i in this.garantias) {
                this.garantias[i].bCheck = true;
            }
        }
        else {
            console.log('deshacer accion');
            for (var i in this.garantias) {
                this.garantias[i].bCheck = false;
            }
        }
    };
    ChequesComponent.prototype.setData = function (resData) {
        if (resData != 0) {
            switch (this.origen) {
                case 'cliente': {
                    this.forma.controls.rutCliente.setValue("" + resData.cli_nrutcliente + resData.cli_sdigverificador);
                    this.forma.controls.nombreCliente.setValue(resData.cli_snombre);
                    break;
                }
                case 'garantia': {
                    if (resData === 'OK') {
                        this.buscar();
                    }
                    break;
                }
            }
        }
    };
    ChequesComponent.prototype.generateExcel = function () {
        var headerExcel = ["R.U.T.", "Nombres", "Banco", "Nro. Cuenta", "Nro. Documento", "Monto", "Fecha"];
        var dataExcel = [];
        for (var i in this.garantias) {
            var garantia = [
                this.garantias[i].gar_nrutcliente + "-" + this.garantias[i].cli_sdigverificador,
                this.garantias[i].cli_snombre,
                this.garantias[i].banco,
                this.garantias[i].gar_snumcuenta,
                this.garantias[i].gar_niddocto,
                this.garantias[i].gar_nmonto,
                this.utilService.dateStringServiceToLocalStringFormat(this.garantias[i].gar_dfhovencimiento)
                // this.datePipe.transform(this.utilService.dateStringServiceToStringFormat(this.garantias[i].gar_dfhovencimiento),"dd/MM/yyyy")
            ];
            dataExcel.push(garantia);
        }
        var fechaExcel = this.utilService.dateToLocalStringFormat(this.fechaActual);
        var titulo = "Cheques_" + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        this.excelService.generateExcel(titulo, headerExcel, dataExcel, fechaExcel);
        swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
        this.exportar = false;
    };
    ChequesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cheques',
            template: __webpack_require__(/*! ./cheques.component.html */ "./src/app/routes/cajaCobranza/cheques/cheques.component.html"),
            styles: [__webpack_require__(/*! ./cheques.component.scss */ "./src/app/routes/cajaCobranza/cheques/cheques.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_8__["ConsultasService"], _services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"],
            _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_10__["ClientesService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_12__["CajaCobranzaService"], _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_13__["PedidosService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_14__["ExcelService"]])
    ], ChequesComponent);
    return ChequesComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/cierraCaja/cierreCaja.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/cierraCaja/cierreCaja.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Cierre de Caja</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 text-center\">\r\n                <h4>Fecha Actual Caja </h4>\r\n                <h4>{{fechaProceso}}</h4>\r\n            </div>\r\n            <div class=\"col-sm-6 text-center\">\r\n                <button class=\"btn btn-oval btn-sm\" type=\"button\" (click)=\"openModal()\">\r\n                    Finalizar Caja\r\n                </button></div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/cierraCaja/cierreCaja.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/cierraCaja/cierreCaja.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/cierraCaja/cierreCaja.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/cierraCaja/cierreCaja.component.ts ***!
  \************************************************************************/
/*! exports provided: CierreCajaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CierreCajaComponent", function() { return CierreCajaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _commonPopUp_validacionUsuarioPopUp_validacionUsuarioPopUp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commonPopUp/validacionUsuarioPopUp/validacionUsuarioPopUp.component */ "./src/app/routes/commonPopUp/validacionUsuarioPopUp/validacionUsuarioPopUp.component.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
var CierreCajaComponent = /** @class */ (function () {
    function CierreCajaComponent(modalService, consultasService, authService) {
        this.modalService = modalService;
        this.consultasService = consultasService;
        this.authService = authService;
        this.user = {};
    }
    CierreCajaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.getDatosUser();
        this.subDataCliente = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.getFechaProceso();
    };
    CierreCajaComponent.prototype.ngOnDestroy = function () {
        if (this.subDataCliente !== undefined) {
            this.subDataCliente.unsubscribe();
        }
    };
    CierreCajaComponent.prototype.openModal = function () {
        var initialState = {
            titulo: 'Validación de Cierre',
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_validacionUsuarioPopUp_validacionUsuarioPopUp_component__WEBPACK_IMPORTED_MODULE_3__["ValidacionUsuarioPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    CierreCajaComponent.prototype.getFechaProceso = function () {
        var _this = this;
        var request = {
            nRutOperador: Number(this.user.nrutoperador),
            sCodProceso: 'CAJA'
        };
        this.consultasService.getFechaProceso(request)
            .subscribe(function (data) {
            if (data) {
                if (data.error.codError !== 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    return;
                }
                if (data.fechaProceso.length === 0 && data.error.codError === 0) {
                    swal('Atención', 'No se encontraron resultados', 'info');
                }
                else {
                    var fechaProceso = data.fechaProceso[0];
                    _this.fechaProceso = _this.convertirFecha(fechaProceso.fpr_dfhoproceso);
                }
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        });
    };
    CierreCajaComponent.prototype.convertirFecha = function (fecha) {
        if (fecha) {
            var regexp = /(\d{4})(\d{2})(\d{2})$/;
            var tag = fecha.match(regexp);
            return tag[3] + '/' + tag[2] + '/' + tag[1];
        }
        return '';
    };
    CierreCajaComponent.prototype.setData = function (data) {
        this.getFechaProceso();
    };
    CierreCajaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cierre-caja',
            template: __webpack_require__(/*! ./cierreCaja.component.html */ "./src/app/routes/cajaCobranza/cierraCaja/cierreCaja.component.html"),
            styles: [__webpack_require__(/*! ./cierreCaja.component.scss */ "./src/app/routes/cajaCobranza/cierraCaja/cierreCaja.component.scss")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_2__["ConsultasService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], CierreCajaComponent);
    return CierreCajaComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/detalleClienteCtaCte.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleClienteCtaCte/detalleClienteCtaCte.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Detalle Cliente</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">R.U.T.</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input class=\"form-control\" formControlName=\"rut\" name=\"rut\" type=\"text\" formatRut\r\n                            [readonly]=\"true\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label lh-11\">Nombre/<br>Razón Social</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <input class=\"form-control\" formControlName=\"nombre\" name=\"nombre\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label text-right\">Estado</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input class=\"form-control\" formControlName=\"estado\" name=\"estado\" type=\"text\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label lh-11\">Motivo Estado</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input class=\"form-control\" formControlName=\"motivoEstado\" name=\"motivoEstado\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label lh-11\">Bloqueo</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input class=\"form-control\" formControlName=\"bloqueo\" name=\"bloqueo\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label text-right lh-11\">Motivo Bloqueo</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <input class=\"form-control\" formControlName=\"motivoBloqueo\" name=\"motivoBloqueo\" type=\"text\" />\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n\r\n        <div class=\"row pull-left mb-4\">\r\n            <div class=\"col-sm-3\">\r\n                <a routerLink=\"/cajaCobranza/cuentaCorriente\" class=\"btn btn-oval btn-sm\">Volver</a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"panel\">\r\n                    <tabset>\r\n                        <tab>\r\n                            <ng-template tabHeading>Totales</ng-template>\r\n                            <app-totales></app-totales>\r\n                        </tab>\r\n                        <tab>\r\n                            <ng-template tabHeading>Pendientes</ng-template>\r\n                            <app-pendientes></app-pendientes>\r\n                        </tab>\r\n                        <tab>\r\n                            <ng-template tabHeading>Período</ng-template>\r\n                            <app-periodo></app-periodo>\r\n                        </tab>\r\n                    </tabset>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/detalleClienteCtaCte.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleClienteCtaCte/detalleClienteCtaCte.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/detalleClienteCtaCte.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleClienteCtaCte/detalleClienteCtaCte.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DetalleClienteCtaCteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleClienteCtaCteComponent", function() { return DetalleClienteCtaCteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/clientes.service */ "./src/app/core/consultaService/clientes.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
var DetalleClienteCtaCteComponent = /** @class */ (function () {
    function DetalleClienteCtaCteComponent(clientesService, authService, cargador, router) {
        this.clientesService = clientesService;
        this.authService = authService;
        this.cargador = cargador;
        this.router = router;
        this.request = {};
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            rut: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            motivoEstado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            bloqueo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            motivoBloqueo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
        });
    }
    DetalleClienteCtaCteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parametrosCliente = this.authService.getParametrosCliente();
        if (this.clientesService.selectedCliente) {
            this.request.rutClientes = this.clientesService.selectedCliente.cli_nrutcliente;
            this.request.rutOperador = this.clientesService.selectedCliente.cli_nrutoperador;
            this.cargador.show();
            this.clientesService.getDetallesClientes(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                if (data) {
                    if (data.cliente) {
                        _this.cargarDataEncabezado(data.cliente);
                    }
                    if (data.error.codError != 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
        else {
            this.router.navigate(['/cajaCobranza/cuentaCorriente']);
        }
    };
    DetalleClienteCtaCteComponent.prototype.cargarDataEncabezado = function (data) {
        this.forma.controls.rut.setValue("" + data[0].cli_nrutcliente + data[0].cli_sdigverificador);
        this.forma.controls.nombre.setValue(data[0].cli_snombre);
        switch (data[0].cli_scodestado) {
            case 'VIGEN': {
                this.forma.controls.estado.setValue('Activo');
                break;
            }
            case 'NOVIG': {
                this.forma.controls.estado.setValue('Inactivo');
                break;
            }
            default:
                this.forma.controls.estado.setValue('');
        }
        var parMotivoEstado = this.parametrosCliente.filter(function (param) { return param.par_numparametro === 33; });
        if (parMotivoEstado[0].par_codparametro01 === data[0].cli_scodmotivoestado) {
            this.forma.controls.motivoEstado.setValue(parMotivoEstado[0].par_deslargo01);
        }
        switch (data[0].cli_sindbloqueo) {
            case 'N': {
                this.forma.controls.bloqueo.setValue('Activo');
                break;
            }
            case 'S': {
                this.forma.controls.bloqueo.setValue('Bloqueado');
                break;
            }
            default:
                this.forma.controls.bloqueo.setValue('');
        }
        var parMotivoBloqueo = this.parametrosCliente
            .find(function (param) { return param.par_codparametro01 === data[0].cli_scodmotivobloqueo && param.par_numparametro === 34; });
        if (parMotivoBloqueo) {
            this.forma.controls.motivoBloqueo.setValue(parMotivoBloqueo.par_deslargo01);
        }
    };
    DetalleClienteCtaCteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalle-cliente-cta-cte',
            template: __webpack_require__(/*! ./detalleClienteCtaCte.component.html */ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/detalleClienteCtaCte.component.html"),
            styles: [__webpack_require__(/*! ./detalleClienteCtaCte.component.scss */ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/detalleClienteCtaCte.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ClientesService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], DetalleClienteCtaCteComponent);
    return DetalleClienteCtaCteComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/pendientes/pendientes.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/pendientes/pendientes.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading mt-2\">\r\n        <b>Cuenta Corriente - Pendientes</b>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"col-sm-6 col-sm-offset-6\">\r\n                        <div class=\"col-sm-2 col-sm-offset-8\">\r\n                            <button class=\"btn btn-oval btn-sm\" type=\"button\" (click)=\"buscar()\">Buscar</button>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button class=\"btn btn-oval btn-sm\" type=\"button\" (click)=\"exportar()\">Exportar</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"align-middle\">Fecha Operación</th>\r\n                                <th class=\"align-middle\">Fecha Emisión</th>\r\n                                <th class=\"align-middle\">Fecha Vencimiento</th>\r\n                                <th class=\"align-middle\">Tipo Docto.</th>\r\n                                <th class=\"align-middle\">Nº Docto.</th>\r\n                                <th class=\"align-middle\">Observación</th>\r\n                                <th class=\"align-middle\">Cargo</th>\r\n                                <th class=\"align-middle\">Abono</th>\r\n                                <th class=\"align-middle\">Saldo</th>\r\n                                <th class=\"align-middle\">Pago</th>\r\n                                <th class=\"align-middle\"></th> \r\n                            </tr>\r\n                        </thead>\r\n\r\n                        <tbody>\r\n                            <tr\r\n                                *ngFor=\"let movimiento of movimientos | paginate: {id: '2', itemsPerPage: 7, currentPage: pageActualPendiente};\">\r\n                                <td class=\"text-center\">{{movimiento.smc_dfhocreacion | fecha}}</td>\r\n                                <td class=\"text-center\">{{movimiento.smc_nidoperacion | fecha}}</td>\r\n                                <td class=\"text-center\">{{movimiento.smc_scodtipooperacion | fecha}}</td>\r\n                                <td class=\"text-center\">{{movimiento.smc_scodtipodocto}}</td>\r\n                                <td class=\"text-right\">{{movimiento.nnumdocto}}</td>\r\n                                <td>{{movimiento.smc_sglosa}}</td>\r\n                                <td class=\"text-right\">{{movimiento.smc_ncargo | number: '': 'es'}}</td>\r\n                                <td class=\"text-right\">{{movimiento.abono | number: '': 'es'}}</td>\r\n                                <td class=\"text-right\">{{movimiento.smc_nsaldodocto | number: '': 'es'}}</td>\r\n\r\n                                <td *ngIf=\"movimiento.smc_scodtipodocto !== 'EFECT';  else elseBlock\"\r\n                                    class=\"text-center\" templateName>\r\n                                    <a class=\"text\" data-toggle=\"tooltip\" title=\"Ver Detalle Factura\"\r\n                                        (click)=\"verDetalleProtesto(movimiento)\">\r\n                                        <em class=\"fa fa-search\"></em>\r\n                                    </a>\r\n                                </td>\r\n\r\n                                <ng-template #elseBlock>\r\n                                    <td></td>\r\n                                </ng-template>\r\n\r\n                                <td *ngIf=\"movimiento.cte_scodtipodocto !== 'EFECT'; else elseBlockB\">\r\n                                    <span class=\"table-remove\">\r\n                                        <a class=\"text\" data-toggle=\"tooltip\" title=\"Ver Detalle Factura\"\r\n                                            (click)=\"verDetalleFactura(movimiento)\">\r\n                                            <em class=\"fa fa-info\"></em>\r\n                                        </a>\r\n                                    </span>\r\n                                </td>\r\n                                <ng-template #elseBlockB>\r\n                                    <td></td>\r\n                                </ng-template>\r\n\r\n                            </tr>\r\n                        </tbody>\r\n\r\n                    </table>\r\n                    <div class=\"text-right mt-4\">\r\n                        <pagination-controls id=\"2\" (pageChange)=\"pageActualPendiente = $event\" autoHide=\"true\" previousLabel=\"Anterior\"\r\n                            nextLabel=\"Siguiente\"></pagination-controls>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/pendientes/pendientes.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/pendientes/pendientes.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/pendientes/pendientes.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/pendientes/pendientes.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: PendientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendientesComponent", function() { return PendientesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/consultaService/clientes.service */ "./src/app/core/consultaService/clientes.service.ts");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
/* harmony import */ var _commonPopUp_detalleProtestoPopUp_detalleProtestoPopUp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../commonPopUp/detalleProtestoPopUp/detalleProtestoPopUp.component */ "./src/app/routes/commonPopUp/detalleProtestoPopUp/detalleProtestoPopUp.component.ts");
/* harmony import */ var _commonPopUp_detalleFacturaPopUp_detalleFacturaPopUp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../commonPopUp/detalleFacturaPopUp/detalleFacturaPopUp.component */ "./src/app/routes/commonPopUp/detalleFacturaPopUp/detalleFacturaPopUp.component.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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






var PendientesComponent = /** @class */ (function () {
    function PendientesComponent(clientesService, cargador, cajaCobranzaService, modalService, excelService, utilService, decimalPipe) {
        this.clientesService = clientesService;
        this.cargador = cargador;
        this.cajaCobranzaService = cajaCobranzaService;
        this.modalService = modalService;
        this.excelService = excelService;
        this.utilService = utilService;
        this.decimalPipe = decimalPipe;
        this.request = {};
        this.movimientos = [];
        this.pageActualPendiente = 1;
    }
    PendientesComponent.prototype.ngOnInit = function () {
    };
    PendientesComponent.prototype.verDetalleProtesto = function (movimiento) {
        var initialState = {
            titulo: "Detalle Protesto (" + movimiento.nnumdocto + ")",
            cliente: this.clientesService.selectedCliente,
            movimiento: movimiento
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_detalleProtestoPopUp_detalleProtestoPopUp_component__WEBPACK_IMPORTED_MODULE_6__["DetalleProtestoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    PendientesComponent.prototype.verDetalleFactura = function (movimiento) {
        var initialState = {
            titulo: 'Detalle Factura',
            cliente: this.clientesService.selectedCliente,
            movimiento: movimiento
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_detalleFacturaPopUp_detalleFacturaPopUp_component__WEBPACK_IMPORTED_MODULE_7__["DetalleFacturaPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    PendientesComponent.prototype.buscar = function () {
        this.opcion = 'buscar';
        this.buscaCuentasCorrientesPendiente();
    };
    PendientesComponent.prototype.construirReporte = function (data) {
        var _this = this;
        var headerExcel = [
            'Fecha Operación',
            'Fecha Emisión',
            'Fecha Vencimiento',
            'Tipo Documento',
            'Nro. Documento',
            'Observación',
            'Cargo',
            'Abono',
            'Saldo',
        ];
        var dataExcel = [];
        data.forEach(function (e) {
            dataExcel.push([
                _this.utilService.dateStringServiceToLocalStringFormat(e.smc_dfhocreacion),
                _this.utilService.dateStringServiceToLocalStringFormat(e.smc_nidoperacion),
                e.smc_scodtipooperacion ? _this.utilService.dateStringServiceToLocalStringFormat(e.smc_scodtipooperacion) : '',
                e.smc_scodtipodocto,
                e.nnumdocto,
                e.smc_sglosa,
                e.smc_ncargo,
                _this.decimalPipe.transform(e.abono, '', 'es'),
                _this.decimalPipe.transform(e.smc_nsaldodocto, '', 'es'),
            ]);
        });
        var nombreArchivo = "Cuentas_Pendientes_" + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        var titulo = 'Listado Documentos Pendientes';
        var fechas = ["Fecha: " + this.utilService.dateToLocalStringFormat(new Date())];
        this.excelService.buildReportCajaCobranza(titulo, headerExcel, dataExcel, fechas, nombreArchivo);
    };
    PendientesComponent.prototype.exportar = function () {
        this.opcion = 'exportar';
        this.buscaCuentasCorrientesPendiente();
    };
    PendientesComponent.prototype.buscaCuentasCorrientesPendiente = function () {
        var _this = this;
        this.request.nRutCliente = this.clientesService.selectedCliente.cli_nrutcliente;
        this.request.nRutOperador = this.clientesService.selectedCliente.cli_nrutoperador;
        this.cargador.show();
        this.cajaCobranzaService.buscaCuentasCorrientesPendiente(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            if (data) {
                if (data.movimientos.length > 0 && data.error.codError === 0) {
                    _this.cargarMovimientosArray(data.movimientos);
                    if (_this.opcion === 'exportar') {
                        _this.construirReporte(_this.movimientos);
                    }
                }
                else {
                    _this.movimientos = [];
                    swal('Atención', 'No se encontraron resultados', 'info');
                }
                if (data.error.codError !== 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    PendientesComponent.prototype.cargarMovimientosArray = function (data) {
        var _this = this;
        this.movimientos = [];
        data.forEach(function (e) {
            var observacion = e.smc_sglosa.trim();
            if (e.sinddocumentado === 'S') {
                if (observacion.trim() === '') {
                    observacion = 'Factura Documentada';
                }
                else {
                    observacion += ' - Factura Documentada';
                }
            }
            var movimiento = {
                smc_dfhocreacion: e.smc_dfhocreacion,
                smc_nidoperacion: e.smc_nidoperacion,
                smc_scodtipooperacion: e.smc_scodtipooperacion,
                smc_sdestipooperacion: e.smc_sdestipooperacion,
                smc_scodtipodocto: e.smc_scodtipodocto,
                smc_sdestipodocto: e.smc_sdestipodocto,
                smc_niddocto: e.smc_niddocto,
                nnumdocto: e.nnumdocto,
                smc_sglosa: observacion,
                smc_ncargo: e.smc_ncargo,
                smc_nabono: e.smc_nabono,
                smc_nsaldodocto: e.smc_nsaldodocto,
                sinddocumentado: e.sinddocumentado,
                abono: e.smc_ncargo - e.smc_nsaldodocto,
            };
            _this.movimientos.push(movimiento);
        });
    };
    PendientesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pendientes',
            template: __webpack_require__(/*! ./pendientes.component.html */ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/pendientes/pendientes.component.html"),
            styles: [__webpack_require__(/*! ./pendientes.component.scss */ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/pendientes/pendientes.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_4__["ClientesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"],
            _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_5__["CajaCobranzaService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExcelService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]])
    ], PendientesComponent);
    return PendientesComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/periodo/periodo.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/periodo/periodo.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading mt-2\">\r\n        <b>Cuenta Corriente - Periodo</b>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label lh-11\">Período desde</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input #fechaDesde class=\"form-control w-110 ph-1 text-center\" style=\"line-height: 1\"\r\n                            formControlName=\"fechaDesde\" name=\"fechaDesde\" type=\"date\"\r\n                            (focusout)=\"actualizarFecha(fechaDesde)\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label text-right lh-11\">Período hasta</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input #fechaHasta class=\"form-control w-110 ph-1 text-center\" style=\"line-height: 1\"\r\n                            formControlName=\"fechaHasta\" name=\"fechaHasta\" type=\"date\"\r\n                            (focusout)=\"actualizarFecha(fechaHasta)\" />\r\n                    </div>\r\n                    <div class=\"col-sm-4 pl-1\">\r\n                        <div class=\"col-sm-3 col-sm-offset-6\">\r\n                            <button class=\"btn btn-oval btn-sm\" type=\"button\" (click)=\"buscar()\">Buscar</button>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <button class=\"btn btn-oval btn-sm\" type=\"button\" (click)=\"exportar()\">Exportar</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"align-middle\">Fecha Operación</th>\r\n                                <th class=\"align-middle\">Nº Operación</th>\r\n                                <th class=\"align-middle\">Tipo Operación</th>\r\n                                <th class=\"align-middle\">Tipo Docto.</th>\r\n                                <th class=\"align-middle\">Nº Docto.</th>\r\n                                <th class=\"align-middle\">Observación</th>\r\n                                <th class=\"align-middle\">Cargo</th>\r\n                                <th class=\"align-middle\">Abono</th>\r\n                                <th class=\"align-middle\">Saldo</th>\r\n                                <th class=\"align-middle\">Pago</th>  \r\n                                <th class=\"align-middle\"></th>  \r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngIf=\"verData && pageActualPeriodo === 1\">\r\n                                <td class=\"text-center\">{{fechaOperacionSaldo | date:'dd/MM/yyyy'}}</td>\r\n                                <td></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                                <td>Saldo Anterior</td>\r\n                                <td class=\"text-right\">{{(saldoAnterior > 0 ? saldoAnterior : 0) | number:'':'es'}}</td>\r\n                                <td class=\"text-right\">{{(saldoAnterior\r\n                                            < 0 ? (saldoAnterior * -1) : 0) | number: '': 'es'}} </td>\r\n                                <td class=\"text-right\">{{saldoAnterior | number:'':'es'}}</td>\r\n                            </tr>\r\n\r\n                            <tr\r\n                                *ngFor=\"let movimiento of movimientos | paginate: { id: '3', itemsPerPage: 7, currentPage: pageActualPeriodo};\">\r\n                                <td class=\"text-center\">{{movimiento.cte_dfhocreacion | fecha}}</td>\r\n                                <td class=\"text-right\">{{movimiento.cte_nidoperacion}}</td>\r\n                                <td class=\"text-center\">{{movimiento.cte_scodtipooperacion}}</td>\r\n                                <td class=\"text-center\">{{movimiento.cte_scodtipodocto}}</td>\r\n                                <td class=\"text-right\">{{movimiento.nnumdocto}}</td>\r\n                                <td>{{movimiento.cte_sglosa}}</td>\r\n                                <td class=\"text-right\">{{movimiento.cte_ncargo | number: '': 'es'}}</td>\r\n                                <td class=\"text-right\">{{movimiento.cte_nabono | number: '': 'es'}}</td>\r\n                                <td class=\"text-right\">{{movimiento.nSaldoAnterior | number: '': 'es'}}</td>\r\n\r\n                                <td *ngIf=\"movimiento.sinddocasociados ==='S'; else elseBlockPago\" class=\"text-center\">\r\n                                    <span class=\"table-remove\">\r\n                                        <a class=\"text\" data-toggle=\"tooltip\" title=\"Ver Documentos Asociados\"\r\n                                            (click)=\"verDetallePago(movimiento)\">\r\n                                            <em class=\"fa fa-search\"></em>\r\n                                        </a>\r\n                                    </span>\r\n                                </td>\r\n                                \r\n                                <ng-template #elseBlockPago>\r\n                                    <td></td>\r\n                                </ng-template>\r\n\r\n                                <td *ngIf=\"movimiento.cte_scodtipodocto !== 'EFECT'; else elseBlockFactura\"\r\n                                    class=\"text-center\">\r\n                                    <a class=\"text\" data-toggle=\"tooltip\" title=\"Ver Detalle Factura\"\r\n                                        (click)=\"verDetalleFactura(movimiento)\">\r\n                                        <em class=\"fa fa-info\"></em>\r\n                                    </a>\r\n                                </td>\r\n\r\n                                <ng-template #elseBlockFactura>\r\n                                    <td></td>\r\n                                </ng-template>\r\n\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                    <div class=\"text-right mt-4\">\r\n                        <pagination-controls id=\"3\" (pageChange)=\"pageActualPeriodo = $event\" autoHide=\"true\" previousLabel=\"Anterior\"\r\n                            nextLabel=\"Siguiente\"></pagination-controls>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/periodo/periodo.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/periodo/periodo.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/periodo/periodo.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/periodo/periodo.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PeriodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodoComponent", function() { return PeriodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/consultaService/clientes.service */ "./src/app/core/consultaService/clientes.service.ts");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
/* harmony import */ var _commonPopUp_documentosAsociadosPopUp_documentosAsociadosPopUp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../commonPopUp/documentosAsociadosPopUp/documentosAsociadosPopUp.component */ "./src/app/routes/commonPopUp/documentosAsociadosPopUp/documentosAsociadosPopUp.component.ts");
/* harmony import */ var _commonPopUp_detalleFacturaPopUp_detalleFacturaPopUp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../commonPopUp/detalleFacturaPopUp/detalleFacturaPopUp.component */ "./src/app/routes/commonPopUp/detalleFacturaPopUp/detalleFacturaPopUp.component.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
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





var PeriodoComponent = /** @class */ (function () {
    function PeriodoComponent(utilService, clientesService, cargador, cajaCobranzaService, modalService, excelService) {
        this.utilService = utilService;
        this.clientesService = clientesService;
        this.cargador = cargador;
        this.cajaCobranzaService = cajaCobranzaService;
        this.modalService = modalService;
        this.excelService = excelService;
        this.fechaActual = new Date();
        this.request = {};
        this.movimientos = [];
        this.pageActualPeriodo = 1;
        this.saldoAnterior = 0;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fechaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fechaHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    PeriodoComponent.prototype.ngOnInit = function () {
        this.forma.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.forma.controls.fechaHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
    };
    PeriodoComponent.prototype.actualizarFecha = function (fecha) {
        if (fecha.value === '') {
            fecha.value = this.utilService.dateToStringFormat(this.fechaActual);
        }
        if (!this.utilService.DateValidator(fecha.value)) {
            fecha.value = this.utilService.dateToStringFormat(this.fechaActual);
        }
    };
    PeriodoComponent.prototype.verDetallePago = function (movimiento) {
        var initialState = {
            titulo: 'Documentos Asociados',
            cliente: this.clientesService.selectedCliente,
            movimiento: movimiento
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_documentosAsociadosPopUp_documentosAsociadosPopUp_component__WEBPACK_IMPORTED_MODULE_7__["DocumentosAsociadosPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    PeriodoComponent.prototype.verDetalleFactura = function (movimiento) {
        var initialState = {
            titulo: 'Detalle Factura',
            cliente: this.clientesService.selectedCliente,
            movimiento: movimiento
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_detalleFacturaPopUp_detalleFacturaPopUp_component__WEBPACK_IMPORTED_MODULE_8__["DetalleFacturaPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    PeriodoComponent.prototype.validarForm = function () {
        if (this.forma.controls.fechaDesde.value !== '' && this.forma.controls.fechaHasta.value !== '') {
            if (new Date(this.forma.controls.fechaDesde.value) > new Date(this.forma.controls.fechaHasta.value)) {
                swal('Atención', 'Periodo Desde debe ser menor a la Periodo Hasta!', 'error');
                return true;
            }
            if (new Date(this.forma.controls.fechaHasta.value) < new Date(this.forma.controls.fechaDesde.value)) {
                swal('Atención', 'Periodo Hasta debe ser mayor a la Periodo Desde!', 'error');
                return true;
            }
        }
        else {
            swal('Atención', 'Seleccione un periodo de fecha!', 'error');
            return true;
        }
        return false;
    };
    PeriodoComponent.prototype.buscar = function () {
        this.opcion = 'buscar';
        this.verData = false;
        this.buscaCuentasCorrientesPeriodo();
    };
    PeriodoComponent.prototype.buscaCuentasCorrientesPeriodo = function () {
        var _this = this;
        if (this.validarForm()) {
            return;
        }
        this.fechaOperacionSaldo = new Date(this.forma.controls.fechaDesde.value);
        this.request.fechaDesde = (this.forma.controls.fechaDesde.value).replace(/-/g, ''),
            this.request.fechaHasta = (this.forma.controls.fechaHasta.value).replace(/-/g, ''),
            this.request.nRutCliente = this.clientesService.selectedCliente.cli_nrutcliente;
        this.request.nRutOperador = this.clientesService.selectedCliente.cli_nrutoperador;
        this.cargador.show();
        this.cajaCobranzaService.buscaCuentasCorrientesPeriodo(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            _this.verData = true;
            if (data) {
                if (data.movimientos.length > 0 && data.error.codError === 0) {
                    _this.saldoAnterior = 0;
                    var fechaDesde_1 = Number(_this.request.fechaDesde.replace(/-/g, '') + '000000');
                    var fechaHasta_1 = Number(_this.request.fechaHasta.replace(/-/g, '') + '000000');
                    var filteredData = data.movimientos.filter(function (e) {
                        return Number(e.cte_dfhocreacion) >= fechaDesde_1 && Number(e.cte_dfhocreacion) <= fechaHasta_1;
                    });
                    var filteredFechaMenor = data.movimientos.filter(function (e) {
                        return Number(e.cte_dfhocreacion) < fechaDesde_1;
                    });
                    if (filteredFechaMenor.length > 0) {
                        for (var i = 0; i < filteredFechaMenor.length; i++) {
                            var e = filteredFechaMenor[i];
                            _this.saldoAnterior = _this.saldoAnterior + e.cte_ncargo - e.cte_nabono;
                        }
                    }
                    _this.cargarMovimientosArray(filteredData, _this.saldoAnterior);
                    if (_this.opcion === 'exportar') {
                        _this.construirReporte(_this.movimientos);
                    }
                }
                else {
                    _this.movimientos = [];
                    swal('Atención', 'No se encontraron resultados', 'info');
                }
                if (data.error.codError !== 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    PeriodoComponent.prototype.construirReporte = function (data) {
        var _this = this;
        var headerExcel = [
            'Fecha Operación',
            'Nº Operación',
            'Tipo Operación',
            'Tipo Documento',
            'Nro. Documento',
            'Observación',
            'Cargo',
            'Abono',
            'Saldo',
        ];
        var dataExcel = [];
        dataExcel.push([
            this.utilService.dateToLocalStringFormat(this.fechaOperacionSaldo),
            '',
            '',
            '',
            '',
            '',
            this.saldoAnterior > 0 ? this.saldoAnterior : 0,
            this.saldoAnterior < 0 ? (this.saldoAnterior * -1) : 0,
            this.saldoAnterior,
        ]);
        data.forEach(function (e) {
            dataExcel.push([
                _this.utilService.dateStringServiceToLocalStringFormat(e.cte_dfhocreacion),
                e.cte_nidoperacion,
                e.cte_scodtipooperacion,
                e.cte_scodtipodocto,
                e.nnumdocto,
                e.cte_sglosa,
                e.cte_ncargo,
                e.cte_nabono,
                e.nSaldoAnterior,
            ]);
        });
        var nombreArchivo = "Cuentas_Periodo_" + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        var titulo = 'Listado Cuentas Periodo';
        var fechas = [
            "Fecha Desde: " + this.utilService.dateToLocalStringFormat(new Date(this.forma.controls.fechaDesde.value.replace(/-/g, '\/'))),
            "Fecha Hasta: " + this.utilService.dateToLocalStringFormat(new Date(this.forma.controls.fechaHasta.value.replace(/-/g, '\/'))),
        ];
        this.excelService.buildReportCajaCobranza(titulo, headerExcel, dataExcel, fechas, nombreArchivo);
    };
    PeriodoComponent.prototype.exportar = function () {
        this.opcion = 'exportar';
        this.buscaCuentasCorrientesPeriodo();
    };
    PeriodoComponent.prototype.cargarMovimientosArray = function (data, saldoAnterior) {
        var _this = this;
        this.movimientos = [];
        var saldo = saldoAnterior;
        data.forEach(function (e) {
            var observacion = e.cte_sglosa.trim();
            if (e.sinddocumentado === 'S') {
                if (observacion === '') {
                    observacion = 'Factura Documentada';
                }
                else {
                    observacion += ' - Factura Documentada';
                }
            }
            saldo = saldo + (e.cte_ncargo - e.cte_nabono);
            var movimiento = {
                cte_dfhocreacion: e.cte_dfhocreacion,
                cte_nidoperacion: e.cte_nidoperacion,
                cte_scodtipooperacion: e.cte_scodtipooperacion,
                cte_sdestipooperacion: e.cte_sdestipooperacion,
                cte_scodtipodocto: e.cte_scodtipodocto,
                cte_sdestipodocto: e.cte_sdestipodocto,
                cte_niddocto: e.cte_niddocto,
                nnumdocto: e.nnumdocto,
                cte_sglosa: observacion,
                cte_ncargo: e.cte_ncargo,
                cte_nabono: e.cte_nabono,
                sinddocasociados: e.sinddocasociados,
                nSaldoAnterior: saldo,
            };
            _this.movimientos.push(movimiento);
        });
    };
    PeriodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-periodo',
            template: __webpack_require__(/*! ./periodo.component.html */ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/periodo/periodo.component.html"),
            styles: [__webpack_require__(/*! ./periodo.component.scss */ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/periodo/periodo.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"],
            _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_5__["ClientesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_6__["CajaCobranzaService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_9__["ExcelService"]])
    ], PeriodoComponent);
    return PeriodoComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/totales/totales.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/totales/totales.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading mt-2\">\r\n        <b>Cuenta Corriente</b>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Mes</label>\r\n                    <div class=\"col-sm-2 pl-0\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"mes\" name=\"mes\">\r\n                            <option *ngFor=\"let mes of meses\" [ngValue]=\"mes.codMes\">{{mes.descMes}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label text-right\">Año</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"anio\" name=\"anio\">\r\n                            <option *ngFor=\"let anio of anios\" [ngValue]=\"anio.codAnio\">{{anio.descAnio}}</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    \r\n                    <div class=\"col-sm-6 pr-0\">\r\n                        <div class=\"col-sm-2 col-sm-offset-6\">\r\n                            <button class=\"btn btn-oval btn-sm\" type=\"button\" (click)=\"buscar()\">Buscar</button>\r\n                        </div>\r\n                        <div class=\"col-sm-2 ml-2\">\r\n                            <button class=\"btn btn-oval btn-sm\" type=\"button\" (click)=\"exportar()\">Exportar</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"align-middle\">Fecha Operación</th>\r\n                                <th class=\"align-middle\">Nº Operación</th>\r\n                                <th class=\"align-middle\">Tipo Operación</th>\r\n                                <th class=\"align-middle\">Tipo Docto.</th>\r\n                                <th class=\"align-middle\">Nº Docto.</th>\r\n                                <th class=\"align-middle\">Observación</th>\r\n                                <th class=\"align-middle\">Cargo</th>\r\n                                <th class=\"align-middle\">Abono</th>\r\n                                <th class=\"align-middle\">Saldo</th>\r\n                                <th class=\"align-middle\">Pago</th>\r\n                                <th class=\"align-middle\"></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n\r\n                            <tr *ngIf=\"verData && pageActualTotal === 1\">\r\n                                <td class=\"text-center\">{{fechaOperacionSaldo | date:'dd/MM/yyyy'}}</td>\r\n                                <td></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                                <td>Saldo Anterior</td>\r\n                                <td class=\"text-right\">{{(saldoAnterior > 0 ? saldoAnterior : 0) | number:'':'es'}}</td>\r\n                                <td class=\"text-right\">{{(saldoAnterior\r\n                                    < 0 ? (saldoAnterior * -1) : 0) | number: '': 'es'}} </td>\r\n                                <td class=\"text-right\">{{saldoAnterior | number:'':'es'}}</td>\r\n                            </tr>\r\n\r\n                            <tr\r\n                                *ngFor=\"let movimiento of movimientos | paginate: {id: '1', itemsPerPage: 7, currentPage: pageActualTotal};\">\r\n                                <td class=\"text-center\">{{movimiento.cte_dfhocreacion | fecha}}</td>\r\n                                <td class=\"text-right\">{{movimiento.cte_nidoperacion}}</td>\r\n                                <td class=\"text-center\">{{movimiento.cte_scodtipooperacion}}</td>\r\n                                <td>{{movimiento.cte_scodtipodocto}}</td>\r\n                                <td class=\"text-right\">{{movimiento.nnumdocto}}</td>\r\n                                <td>{{movimiento.cte_sglosa}}</td>\r\n                                <td class=\"text-right\">{{movimiento.cte_ncargo | number: '': 'es'}}</td>\r\n                                <td class=\"text-right\">{{movimiento.cte_nabono | number: '': 'es'}}</td>\r\n                                <td class=\"text-right\">{{movimiento.nSaldoAnterior | number: '': 'es'}}</td>\r\n                                <td *ngIf=\"movimiento.sinddocasociados ==='S'; else elseBlock\" class=\"text-center\">\r\n                                    <span class=\"table-remove\">\r\n                                        <a class=\"text\" data-toggle=\"tooltip\" title=\"Ver Documentos Asociados\"\r\n                                            (click)=\"verDetallePago(movimiento)\">\r\n                                            <em class=\"fa fa-search\"></em>\r\n                                        </a>\r\n                                    </span>\r\n                                </td>\r\n                                <ng-template #elseBlock>\r\n                                    <td></td>\r\n                                </ng-template>\r\n\r\n                                <td *ngIf=\"movimiento.cte_scodtipodocto !== 'EFECT'; else elseBlockB\">\r\n                                    <span class=\"table-remove\">\r\n                                        <a class=\"text\" data-toggle=\"tooltip\" title=\"Ver Detalle Factura\"\r\n                                            (click)=\"verDetalleFactura(movimiento)\">\r\n                                            <em class=\"fa fa-info\"></em>\r\n                                        </a>\r\n                                    </span>\r\n                                </td>\r\n                                <ng-template #elseBlockB>\r\n                                    <td></td>\r\n                                </ng-template>\r\n\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"text-right mt-4\">\r\n                            <pagination-controls id=\"1\" (pageChange)=\"pageActualTotal = $event\" autoHide=\"true\" previousLabel=\"Anterior\"\r\n                                nextLabel=\"Siguiente\"></pagination-controls>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/totales/totales.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/totales/totales.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/totales/totales.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/totales/totales.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: TotalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalesComponent", function() { return TotalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/consultaService/clientes.service */ "./src/app/core/consultaService/clientes.service.ts");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
/* harmony import */ var _commonPopUp_documentosAsociadosPopUp_documentosAsociadosPopUp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../commonPopUp/documentosAsociadosPopUp/documentosAsociadosPopUp.component */ "./src/app/routes/commonPopUp/documentosAsociadosPopUp/documentosAsociadosPopUp.component.ts");
/* harmony import */ var _commonPopUp_detalleFacturaPopUp_detalleFacturaPopUp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../commonPopUp/detalleFacturaPopUp/detalleFacturaPopUp.component */ "./src/app/routes/commonPopUp/detalleFacturaPopUp/detalleFacturaPopUp.component.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../../services/util.service */ "./src/app/services/util.service.ts");
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






var TotalesComponent = /** @class */ (function () {
    function TotalesComponent(clientesService, cargador, cajaCobranzaService, modalService, excelService, utilService, datePipe) {
        this.clientesService = clientesService;
        this.cargador = cargador;
        this.cajaCobranzaService = cajaCobranzaService;
        this.modalService = modalService;
        this.excelService = excelService;
        this.utilService = utilService;
        this.datePipe = datePipe;
        this.request = {};
        this.fechaActual = new Date();
        this.meses = [
            { codMes: 1, descMes: 'Enero' },
            { codMes: 2, descMes: 'Febrero' },
            { codMes: 3, descMes: 'Marzo' },
            { codMes: 4, descMes: 'Abril' },
            { codMes: 5, descMes: 'Mayo' },
            { codMes: 6, descMes: 'Junio' },
            { codMes: 7, descMes: 'Julio' },
            { codMes: 8, descMes: 'Agosto' },
            { codMes: 9, descMes: 'Septiembre' },
            { codMes: 10, descMes: 'Octubre' },
            { codMes: 11, descMes: 'Noviembre' },
            { codMes: 12, descMes: 'Diciembre' }
        ];
        this.anios = [];
        this.movimientos = [];
        this.pageActualTotal = 1;
        this.saldoAnterior = 0;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            mes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.fechaActual.getMonth() + 1),
            anio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.fechaActual.getFullYear())
        });
    }
    TotalesComponent.prototype.ngOnInit = function () {
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4___default.a);
        this.cargaComboAnios();
    };
    TotalesComponent.prototype.cargaComboAnios = function () {
        var anioActual = this.fechaActual.getFullYear() + 100;
        for (var i = 1900; i <= anioActual; i++) {
            var anio = {
                codAnio: i,
                descAnio: "" + i
            };
            this.anios.push(anio);
        }
    };
    TotalesComponent.prototype.verDetallePago = function (movimiento) {
        // this.origen = 'garantia';
        var initialState = {
            titulo: 'Documentos Asociados',
            cliente: this.clientesService.selectedCliente,
            movimiento: movimiento
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_documentosAsociadosPopUp_documentosAsociadosPopUp_component__WEBPACK_IMPORTED_MODULE_8__["DocumentosAsociadosPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    TotalesComponent.prototype.verDetalleFactura = function (movimiento) {
        // this.origen = 'garantia';
        var initialState = {
            titulo: 'Detalle Factura',
            cliente: this.clientesService.selectedCliente,
            movimiento: {
                cte_niddocto: movimiento.cte_nidoperacion,
                nnumdocto: movimiento.nnumdocto,
            }
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_detalleFacturaPopUp_detalleFacturaPopUp_component__WEBPACK_IMPORTED_MODULE_9__["DetalleFacturaPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    TotalesComponent.prototype.validarForm = function () {
        if (this.forma.controls.anio.value > this.fechaActual.getFullYear()) {
            swal('Atención', 'El período seleccionado debe ser menor o igual al período actual', 'info');
            return true;
        }
        if (this.forma.controls.mes.value > this.fechaActual.getMonth() + 1 &&
            this.forma.controls.anio.value == this.fechaActual.getFullYear()) {
            swal('Atención', 'El período seleccionado debe ser menor o igual al período actual', 'info');
            return true;
        }
        return false;
    };
    TotalesComponent.prototype.buscaCuentasCorrientes = function () {
        var _this = this;
        if (this.validarForm()) {
            return;
        }
        this.verData = false;
        this.request.nAno = this.forma.controls.anio.value;
        this.request.nMes = this.forma.controls.mes.value;
        this.request.nRutCliente = this.clientesService.selectedCliente.cli_nrutcliente;
        this.request.nRutOperador = this.clientesService.selectedCliente.cli_nrutoperador;
        this.cargador.show();
        this.cajaCobranzaService.buscaCuentasCorrientes(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            if (data) {
                _this.saldoAnterior = data.nSaldoAnterior;
                _this.verData = true;
                if (data.movimientos.length > 0 && data.error.codError === 0) {
                    _this.cargarMovimientosArray(data.movimientos, data.nSaldoAnterior);
                    if (_this.opcion === 'exportar') {
                        _this.construirReporte(_this.movimientos);
                    }
                }
                else {
                    _this.movimientos = [];
                    swal('Atención', 'No se encontraron resultados', 'info');
                }
                if (data.error.codError != 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    TotalesComponent.prototype.buscar = function () {
        this.opcion = 'buscar';
        this.buscaCuentasCorrientes();
    };
    TotalesComponent.prototype.cargarMovimientosArray = function (data, saldoAnterior) {
        var _this = this;
        this.fechaOperacionSaldo = this.lastday(this.forma.controls.anio.value, this.forma.controls.mes.value - 1);
        this.movimientos = [];
        var saldo = saldoAnterior;
        data.forEach(function (e) {
            saldo = saldo + (e.cte_ncargo - e.cte_nabono);
            var movimiento = {
                cte_dfhocreacion: e.cte_dfhocreacion,
                cte_nidoperacion: e.cte_nidoperacion,
                cte_scodtipooperacion: e.cte_scodtipooperacion,
                cte_scodtipodocto: e.cte_scodtipodocto,
                cte_sdestipodocto: e.cte_sdestipodocto,
                nnumdocto: e.nnumdocto,
                cte_sglosa: e.cte_sglosa,
                cte_ncargo: e.cte_ncargo,
                cte_nabono: e.cte_nabono,
                sinddocasociados: e.sinddocasociados,
                nSaldoAnterior: saldo,
            };
            _this.movimientos.push(movimiento);
        });
    };
    TotalesComponent.prototype.construirReporte = function (data) {
        var _this = this;
        var headerExcel = [
            'Fecha Operación',
            'Nº Operación',
            'Tipo Operación',
            'Tipo Documento',
            'Nro. Documento',
            'Observación',
            'Cargo',
            'Abono',
            'Saldo',
        ];
        var dataExcel = [];
        var saldoFecha = this.lastday(this.forma.controls.anio.value, this.forma.controls.mes.value - 1);
        dataExcel.push([
            this.utilService.dateToLocalStringFormat(saldoFecha),
            '',
            '',
            '',
            '',
            '',
            this.saldoAnterior > 0 ? this.saldoAnterior : 0,
            this.saldoAnterior < 0 ? (this.saldoAnterior * -1) : 0,
            this.saldoAnterior,
        ]);
        data.forEach(function (e) {
            dataExcel.push([
                _this.utilService.dateStringServiceToLocalStringFormat(e.cte_dfhocreacion),
                e.cte_nidoperacion,
                e.cte_scodtipooperacion,
                e.cte_scodtipodocto,
                e.nnumdocto,
                e.cte_sglosa,
                e.cte_ncargo,
                e.cte_nabono,
                e.nSaldoAnterior,
            ]);
        });
        var nombreArchivo = "Cuentas_" + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        var titulo = null;
        var fechas = [
            "Fecha: " + this.utilService.dateToLocalStringFormat(new Date()),
        ];
        this.excelService.buildReportCajaCobranza(titulo, headerExcel, dataExcel, fechas, nombreArchivo);
    };
    TotalesComponent.prototype.exportar = function () {
        this.opcion = 'exportar';
        this.buscaCuentasCorrientes();
    };
    TotalesComponent.prototype.lastday = function (y, m) {
        return new Date(y, m, 0);
    };
    TotalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-totales',
            template: __webpack_require__(/*! ./totales.component.html */ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/totales/totales.component.html"),
            styles: [__webpack_require__(/*! ./totales.component.scss */ "./src/app/routes/cajaCobranza/detalleClienteCtaCte/navDetalleClienteCtaCte/totales/totales.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ClientesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_7__["CajaCobranzaService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_10__["ExcelService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], TotalesComponent);
    return TotalesComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleDocumentosCobranza/detalleDocumentosCobranza.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleDocumentosCobranza/detalleDocumentosCobranza.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Detalle Documentos Cobranza</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Fecha de Caja</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <input #fecha class=\"form-control  text-center\" formControlName=\"fecha\" name=\"fecha\" type=\"date\" style=\"line-height: 1\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                    <button class=\"btn btn-oval btn-sm mr-1\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n                    <button class=\"btn btn-oval btn-sm\" [routerLink]=\"['/cajaCobranza/informesCaja']\" type=\"button\">Cancelar</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleDocumentosCobranza/detalleDocumentosCobranza.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleDocumentosCobranza/detalleDocumentosCobranza.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleDocumentosCobranza/detalleDocumentosCobranza.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleDocumentosCobranza/detalleDocumentosCobranza.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DetalleDocumentosCobranzaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleDocumentosCobranzaComponent", function() { return DetalleDocumentosCobranzaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
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
var DetalleDocumentosCobranzaComponent = /** @class */ (function () {
    function DetalleDocumentosCobranzaComponent(cajaCobranzaService, authService, cargador, utilService, excelService) {
        this.cajaCobranzaService = cajaCobranzaService;
        this.authService = authService;
        this.cargador = cargador;
        this.utilService = utilService;
        this.excelService = excelService;
        this.user = {};
        this.fechaActual = new Date();
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    DetalleDocumentosCobranzaComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getDatosUser();
        this.forma.controls.fecha.setValue(this.utilService.dateToStringFormat(this.fechaActual));
    };
    DetalleDocumentosCobranzaComponent.prototype.ngOnDestroy = function () { };
    DetalleDocumentosCobranzaComponent.prototype.buscar = function () {
        var _this = this;
        if (this.validarFormulario()) {
            return;
        }
        this.cargador.show();
        var request = {
            nRutOperador: this.user.nrutoperador,
            sFecha: (this.forma.controls.fecha.value).replace(/-/g, ''),
            sCodSucursal: null,
        };
        this.cajaCobranzaService.buscaRptLiquidacionRecorridos(request)
            .subscribe(function (data) {
            _this.cargador.hide();
            if (data) {
                if (data.error.codError !== 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    return;
                }
                if (data.recorridos.length === 0 && data.error.codError === 0) {
                    // Generar Excel
                    _this.construirReporte(data);
                }
                else {
                    // Generar Excel
                    _this.construirReporte(data);
                }
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    DetalleDocumentosCobranzaComponent.prototype.validarFormulario = function () {
        if (this.forma.controls.fecha.value === '') {
            swal('Atención', 'Campo fecha requerido', 'error');
            return true;
        }
        return false;
    };
    DetalleDocumentosCobranzaComponent.prototype.convertirFecha = function (fecha) {
        var regexp = /(\d{4})(\d{2})(\d{2})$/;
        var tag = fecha.match(regexp);
        return new Date(tag[1], tag[2] - 1, tag[3]);
    };
    DetalleDocumentosCobranzaComponent.prototype.construirReporte = function (data) {
        var _this = this;
        var headerExcel = [
            'Sucursal',
            'Recorrido',
            'Cliente',
            'Tipo',
            'Documento Cancelado',
            'Valor',
            'Código',
            'Descripción',
            'Monto Pago',
            'Número',
            'Cod. Banco',
            'Banco',
            'F. Vencimiento',
        ];
        var dataExcel = [];
        data.recorridos.forEach(function (e) {
            dataExcel.push([
                e.suc_sdescsucursal,
                e.rlr_nidrecorrido,
                e.rlr_nrutcliente + '-' + e.rlr_sdigverificador,
                e.rlr_stipodocto,
                e.rlr_nnumdocto,
                e.rlr_nmontodocto,
                //Forma de Pago
                e.rlr_scodtipopago,
                e.rlr_sdestipopago,
                e.rlr_nmontopago,
                //Pago con Documento
                e.rlr_nnumdocto,
                e.rlr_scodbanco,
                e.rlr_sdesbanco,
                _this.utilService.dateStringServiceToLocalStringFormat(e.rlr_dfhodocto),
            ]);
        });
        /*const additionalData = [];

        if (data.otros.length > 0) {
            let dataAdicional = [];

            data.otros.forEach(e => {
                dataAdicional.push([
                    e.rpa_sdestipopago,
                    '',
                    e.nmontopago,
                    e.nmontopago
                ]);
            });
            dataAdicional.push([]);
            dataAdicional.push([
                'Total',
                0,
                data.otros.reduce((acc, obj) => acc + obj.nmontopago, 0),
                data.otros.reduce((acc, obj) => acc + obj.nmontopago, 0),
            ]);
            const item = {
                headerExcel: [
                    'Forma Pago',
                    'Liquidación',
                    'Otros Pagos',
                    'SubTotal',
                ],
                dataExcel: dataAdicional,
            };

            additionalData.push(item);
        }*/
        var nombreArchivo = "Resumen_Liquidacion_" + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        var titulo = 'Informe de Caja Resumen Liquidación Recaudación';
        var fechas = [
            "Fecha de Caja: " + this.utilService.dateToLocalStringFormat(new Date(this.forma.controls.fecha.value.replace(/-/g, '\/'))),
        ];
        this.excelService.buildReportCajaCobranza(titulo, headerExcel, dataExcel, fechas, nombreArchivo);
    };
    DetalleDocumentosCobranzaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalle-documentos-cobranza',
            template: __webpack_require__(/*! ./detalleDocumentosCobranza.component.html */ "./src/app/routes/cajaCobranza/detalleDocumentosCobranza/detalleDocumentosCobranza.component.html"),
            styles: [__webpack_require__(/*! ./detalleDocumentosCobranza.component.scss */ "./src/app/routes/cajaCobranza/detalleDocumentosCobranza/detalleDocumentosCobranza.component.scss")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_2__["CajaCobranzaService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"]])
    ], DetalleDocumentosCobranzaComponent);
    return DetalleDocumentosCobranzaComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/detalleTransportistaCtaCte.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/detalleTransportistaCtaCte.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Detalle Transportista</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">R.U.T.</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input class=\"form-control\" formControlName=\"rut\" name=\"rut\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label text-right\">Razón Social</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <input class=\"form-control\" formControlName=\"razonSocial\" name=\"razonSocial\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label text-right\">Estado</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input class=\"form-control\" formControlName=\"estado\" name=\"estado\" type=\"text\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Dirección</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input class=\"form-control\" formControlName=\"direccion\" name=\"direccion\" type=\"text\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Región</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input class=\"form-control\" formControlName=\"region\" name=\"region\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label text-right\">Ciudad</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input class=\"form-control\" formControlName=\"ciudad\" name=\"ciudad\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label text-right\">Comuna</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input class=\"form-control\" formControlName=\"comuna\" name=\"comuna\" type=\"text\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"row pull-left mb-4\">\r\n            <div class=\"col-sm-3\">\r\n                <a routerLink=\"/cajaCobranza/cuentaCorrienteTransportista\" class=\"btn btn-oval btn-sm\">Volver</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"panel\">\r\n                    <tabset>\r\n                        <tab>\r\n                            <ng-template tabHeading>Totales</ng-template>\r\n                            <app-totales-transportista></app-totales-transportista>\r\n                        </tab>\r\n                        <tab>\r\n                            <ng-template tabHeading>Pendientes</ng-template>\r\n                            <app-pendientes-transportista></app-pendientes-transportista>\r\n                        </tab>\r\n                        <tab>\r\n                            <ng-template tabHeading>Período</ng-template>\r\n                            <app-periodo-transportista></app-periodo-transportista>\r\n                        </tab>\r\n                    </tabset>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/detalleTransportistaCtaCte.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/detalleTransportistaCtaCte.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/detalleTransportistaCtaCte.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/detalleTransportistaCtaCte.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: DetalleTransportistaCtaCteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleTransportistaCtaCteComponent", function() { return DetalleTransportistaCtaCteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetalleTransportistaCtaCteComponent = /** @class */ (function () {
    function DetalleTransportistaCtaCteComponent() {
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            rut: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            razonSocial: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            region: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            comuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
        });
    }
    DetalleTransportistaCtaCteComponent.prototype.ngOnInit = function () {
    };
    DetalleTransportistaCtaCteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalle-transportista-cta-cte',
            template: __webpack_require__(/*! ./detalleTransportistaCtaCte.component.html */ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/detalleTransportistaCtaCte.component.html"),
            styles: [__webpack_require__(/*! ./detalleTransportistaCtaCte.component.scss */ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/detalleTransportistaCtaCte.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DetalleTransportistaCtaCteComponent);
    return DetalleTransportistaCtaCteComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/pendientesTransportista/pendientesTransportista.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/pendientesTransportista/pendientesTransportista.component.html ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading mt-2\">\r\n        <b>Cuenta Corriente Transportista - Pendientes</b>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"col-sm-6 col-sm-offset-6\">\r\n                        <div class=\"col-sm-2 col-sm-offset-8\">\r\n                            <button class=\"btn btn-oval btn-sm\" type=\"button\">Buscar</button>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button class=\"btn btn-oval btn-sm\" type=\"button\">Exportar</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"align-middle\">Fecha Operación</th>\r\n                                <th class=\"align-middle\">Fecha Emisión</th>\r\n                                <th class=\"align-middle\">Fecha Vencimiento</th>\r\n                                <th class=\"align-middle\">Tipo Docto.</th>\r\n                                <th class=\"align-middle\">Nº Docto.</th>\r\n                                <th class=\"align-middle\">Observación</th>\r\n                                <th class=\"align-middle\">Cargo</th>\r\n                                <th class=\"align-middle\">Abono</th>\r\n                                <th class=\"align-middle\">Saldo</th>\r\n                            </tr>\r\n                        </thead>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/pendientesTransportista/pendientesTransportista.component.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/pendientesTransportista/pendientesTransportista.component.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/pendientesTransportista/pendientesTransportista.component.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/pendientesTransportista/pendientesTransportista.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: PendientesTransportistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendientesTransportistaComponent", function() { return PendientesTransportistaComponent; });
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

var PendientesTransportistaComponent = /** @class */ (function () {
    function PendientesTransportistaComponent() {
    }
    PendientesTransportistaComponent.prototype.ngOnInit = function () {
    };
    PendientesTransportistaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pendientes-transportista',
            template: __webpack_require__(/*! ./pendientesTransportista.component.html */ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/pendientesTransportista/pendientesTransportista.component.html"),
            styles: [__webpack_require__(/*! ./pendientesTransportista.component.scss */ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/pendientesTransportista/pendientesTransportista.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PendientesTransportistaComponent);
    return PendientesTransportistaComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/periodoTransportista/periodoTransportista.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/periodoTransportista/periodoTransportista.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading mt-2\">\r\n        <b>Cuenta Corriente Transportista - Periodo</b>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label lh-11\">Período desde</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input #fechaDesde class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaDesde\" name=\"fechaDesde\" type=\"date\" (focusout)=\"actualizarFecha(fechaDesde)\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label text-right lh-11\">Período hasta</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input #fechaHasta class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaHasta\" name=\"fechaHasta\" type=\"date\" (focusout)=\"actualizarFecha(fechaHasta)\" />\r\n                    </div>\r\n                    <div class=\"col-sm-4 pl-1\">\r\n                        <div class=\"col-sm-3 col-sm-offset-6\">\r\n                            <button class=\"btn btn-oval btn-sm\" type=\"button\">Buscar</button>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <button class=\"btn btn-oval btn-sm\" type=\"button\">Exportar</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"align-middle\">Fecha Operación</th>\r\n                                <th class=\"align-middle\">Nº Operación</th>\r\n                                <th class=\"align-middle\">Tipo Operación</th>\r\n                                <th class=\"align-middle\">Tipo Docto.</th>\r\n                                <th class=\"align-middle\">Nº Docto.</th>\r\n                                <th class=\"align-middle\">Observación</th>\r\n                                <th class=\"align-middle\">Cargo</th>\r\n                                <th class=\"align-middle\">Abono</th>\r\n                                <th class=\"align-middle\">Saldo</th>\r\n                                <th class=\"align-middle\">Pago</th>\r\n                            </tr>\r\n                        </thead>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/periodoTransportista/periodoTransportista.component.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/periodoTransportista/periodoTransportista.component.scss ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/periodoTransportista/periodoTransportista.component.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/periodoTransportista/periodoTransportista.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: PeriodoTransportistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodoTransportistaComponent", function() { return PeriodoTransportistaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/util.service */ "./src/app/services/util.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeriodoTransportistaComponent = /** @class */ (function () {
    function PeriodoTransportistaComponent(utilService) {
        this.utilService = utilService;
        this.fechaActual = new Date();
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fechaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            fechaHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    PeriodoTransportistaComponent.prototype.ngOnInit = function () {
        this.forma.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.forma.controls.fechaHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
    };
    PeriodoTransportistaComponent.prototype.actualizarFecha = function (fecha) {
        if (fecha.value === '') {
            fecha.value = this.utilService.dateToStringFormat(this.fechaActual);
        }
        if (!this.utilService.DateValidator(fecha.value)) {
            fecha.value = this.utilService.dateToStringFormat(this.fechaActual);
        }
    };
    PeriodoTransportistaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-periodo-transportista',
            template: __webpack_require__(/*! ./periodoTransportista.component.html */ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/periodoTransportista/periodoTransportista.component.html"),
            styles: [__webpack_require__(/*! ./periodoTransportista.component.scss */ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/periodoTransportista/periodoTransportista.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], PeriodoTransportistaComponent);
    return PeriodoTransportistaComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/totalesTransportista/totalesTransportista.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/totalesTransportista/totalesTransportista.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading mt-2\">\r\n        <b>Cuenta Corriente Transportista</b>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Mes</label>\r\n                    <div class=\"col-sm-2 pl-0\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"mes\" name=\"mes\">\r\n                            <option value=\"septiembre\">Septiembre</option>\r\n                      </select>\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label text-right\">Año</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"anio\" name=\"anio\">\r\n                            <option value=\"2019\">2019</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"col-sm-2 col-sm-offset-8\">\r\n                            <button class=\"btn btn-oval btn-sm\" type=\"button\">Buscar</button>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button class=\"btn btn-oval btn-sm\" type=\"button\">Exportar</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"align-middle\">Fecha Operación</th>\r\n                                <th class=\"align-middle\">Nº Operación</th>\r\n                                <th class=\"align-middle\">Tipo Operación</th>\r\n                                <th class=\"align-middle\">Tipo Docto.</th>\r\n                                <th class=\"align-middle\">Nº Docto.</th>\r\n                                <th class=\"align-middle\">Observación</th>\r\n                                <th class=\"align-middle\">Cargo</th>\r\n                                <th class=\"align-middle\">Abono</th>\r\n                                <th class=\"align-middle\">Saldo</th>\r\n                                <th class=\"align-middle\">Pago</th>\r\n                            </tr>\r\n                        </thead>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/totalesTransportista/totalesTransportista.component.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/totalesTransportista/totalesTransportista.component.scss ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/totalesTransportista/totalesTransportista.component.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/totalesTransportista/totalesTransportista.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: TotalesTransportistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalesTransportistaComponent", function() { return TotalesTransportistaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TotalesTransportistaComponent = /** @class */ (function () {
    function TotalesTransportistaComponent() {
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            mes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('septiembre'),
            anio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](2019)
        });
    }
    TotalesTransportistaComponent.prototype.ngOnInit = function () {
    };
    TotalesTransportistaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-totales-transportista',
            template: __webpack_require__(/*! ./totalesTransportista.component.html */ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/totalesTransportista/totalesTransportista.component.html"),
            styles: [__webpack_require__(/*! ./totalesTransportista.component.scss */ "./src/app/routes/cajaCobranza/detalleTransportistaCtaCte/navDetalleTransportistaCtaCte/totalesTransportista/totalesTransportista.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TotalesTransportistaComponent);
    return TotalesTransportistaComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/documentosCartera/documentosCartera.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/documentosCartera/documentosCartera.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Documentos en Cartera</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Fecha de Caja</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <input #fecha class=\"form-control  text-center\" formControlName=\"fecha\" name=\"fecha\" type=\"date\" style=\"line-height: 1\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                    <button class=\"btn btn-oval btn-sm mr-1\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n                    <button class=\"btn btn-oval btn-sm\" [routerLink]=\"['/cajaCobranza/informesCaja']\" type=\"button\">Cancelar</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/documentosCartera/documentosCartera.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/documentosCartera/documentosCartera.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/documentosCartera/documentosCartera.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/documentosCartera/documentosCartera.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DocumentosCarteraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosCarteraComponent", function() { return DocumentosCarteraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
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
var DocumentosCarteraComponent = /** @class */ (function () {
    function DocumentosCarteraComponent(cajaCobranzaService, authService, cargador, utilService, excelService) {
        this.cajaCobranzaService = cajaCobranzaService;
        this.authService = authService;
        this.cargador = cargador;
        this.utilService = utilService;
        this.excelService = excelService;
        this.user = {};
        this.fechaActual = new Date();
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    DocumentosCarteraComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getDatosUser();
        this.forma.controls.fecha.setValue(this.utilService.dateToStringFormat(this.fechaActual));
    };
    DocumentosCarteraComponent.prototype.ngOnDestroy = function () { };
    DocumentosCarteraComponent.prototype.buscar = function () {
        var _this = this;
        if (this.validarFormulario()) {
            return;
        }
        this.cargador.show();
        var request = {
            nRutOperador: this.user.nrutoperador,
            sFechaReporte: (this.forma.controls.fecha.value).replace(/-/g, ''),
        };
        this.cajaCobranzaService.buscaRptBuscaGarantias(request)
            .subscribe(function (data) {
            _this.cargador.hide();
            if (data) {
                if (data.error.codError !== 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    return;
                }
                if (data.garantia.length === 0 && data.error.codError === 0) {
                    // Generar Excel
                    _this.construirReporte(data);
                }
                else {
                    // Generar Excel
                    _this.construirReporte(data);
                }
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    DocumentosCarteraComponent.prototype.validarFormulario = function () {
        if (this.forma.controls.fecha.value === '') {
            swal('Atención', 'Campo fecha requerido', 'error');
            return true;
        }
        return false;
    };
    DocumentosCarteraComponent.prototype.convertirFecha = function (fecha) {
        var regexp = /(\d{4})(\d{2})(\d{2})$/;
        var tag = fecha.match(regexp);
        return new Date(tag[1], tag[2] - 1, tag[3]);
    };
    DocumentosCarteraComponent.prototype.construirReporte = function (data) {
        var _this = this;
        var headerExcel = [
            'Fecha Depósito',
            'Banco',
            'Número Documento',
            'Monto',
        ];
        var dataExcel = [];
        data.garantia.forEach(function (e) {
            dataExcel.push([
                _this.utilService.dateStringServiceToLocalStringFormat(e.rlr_dfhodocto),
                e.rlr_sdesbanco,
                e.rlr_nnumdoctopago,
                e.rlr_nmontopago,
            ]);
        });
        var nombreArchivo = "Resumen_Garantias_" + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        var titulo = 'Informe de Caja Documentos en Cartera';
        var fechas = [
            "Fecha de Caja: " + this.utilService.dateToLocalStringFormat(new Date(this.forma.controls.fecha.value.replace(/-/g, '\/'))),
        ];
        this.excelService.buildReportCajaCobranza(titulo, headerExcel, dataExcel, fechas, nombreArchivo);
    };
    DocumentosCarteraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documentos-cartera',
            template: __webpack_require__(/*! ./documentosCartera.component.html */ "./src/app/routes/cajaCobranza/documentosCartera/documentosCartera.component.html"),
            styles: [__webpack_require__(/*! ./documentosCartera.component.scss */ "./src/app/routes/cajaCobranza/documentosCartera/documentosCartera.component.scss")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_2__["CajaCobranzaService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"]])
    ], DocumentosCarteraComponent);
    return DocumentosCarteraComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/documentosDeposito/documentosDeposito.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/documentosDeposito/documentosDeposito.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Documentos a Depósito</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Fecha de Caja</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <input #fecha class=\"form-control  text-center\" formControlName=\"fecha\" name=\"fecha\" type=\"date\" style=\"line-height: 1\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                    <button class=\"btn btn-oval btn-sm mr-1\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n                    <button class=\"btn btn-oval btn-sm\" [routerLink]=\"['/cajaCobranza/informesCaja']\" type=\"button\">Cancelar</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/documentosDeposito/documentosDeposito.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/documentosDeposito/documentosDeposito.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/documentosDeposito/documentosDeposito.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/documentosDeposito/documentosDeposito.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DocumentosDepositoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosDepositoComponent", function() { return DocumentosDepositoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
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
var DocumentosDepositoComponent = /** @class */ (function () {
    function DocumentosDepositoComponent(cajaCobranzaService, authService, cargador, utilService, excelService) {
        this.cajaCobranzaService = cajaCobranzaService;
        this.authService = authService;
        this.cargador = cargador;
        this.utilService = utilService;
        this.excelService = excelService;
        this.user = {};
        this.fechaActual = new Date();
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    DocumentosDepositoComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getDatosUser();
        this.forma.controls.fecha.setValue(this.utilService.dateToStringFormat(this.fechaActual));
    };
    DocumentosDepositoComponent.prototype.ngOnDestroy = function () { };
    DocumentosDepositoComponent.prototype.buscar = function () {
        var _this = this;
        if (this.validarFormulario()) {
            return;
        }
        this.cargador.show();
        var request = {
            nRutOperador: this.user.nrutoperador,
            sFhoDeposito: (this.forma.controls.fecha.value).replace(/-/g, ''),
        };
        this.cajaCobranzaService.buscaDataInfDocRepos(request)
            .subscribe(function (data) {
            _this.cargador.hide();
            if (data) {
                if (data.error.codError !== 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    return;
                }
                if (data.dataInforme.length === 0 && data.error.codError === 0) {
                    // Generar Excel
                    _this.construirReporte(data);
                }
                else {
                    // Generar Excel
                    _this.construirReporte(data);
                }
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    DocumentosDepositoComponent.prototype.validarFormulario = function () {
        if (this.forma.controls.fecha.value === '') {
            swal('Atención', 'Campo fecha requerido', 'error');
            return true;
        }
        return false;
    };
    DocumentosDepositoComponent.prototype.convertirFecha = function (fecha) {
        var regexp = /(\d{4})(\d{2})(\d{2})$/;
        var tag = fecha.match(regexp);
        return new Date(tag[1], tag[2] - 1, tag[3]);
    };
    DocumentosDepositoComponent.prototype.construirReporte = function (data) {
        var _this = this;
        var headerExcel = [
            'F. Depósito',
            'Banco',
            'Documento',
            'Monto',
            'Cliente',
        ];
        var dataExcel = [];
        data.dataInforme.forEach(function (e) {
            dataExcel.push([
                _this.utilService.dateStringServiceToLocalStringFormat(e.gar_dfhodeposito),
                e.banco,
                e.gar_niddocto,
                e.gar_nmonto,
                e.gar_nrutcliente + '-' + e.cli_sdigverificador,
            ]);
        });
        var additionalData = [];
        if (data.dataResumenInforme.length > 0) {
            var dataAdicional_1 = [];
            data.dataResumenInforme.forEach(function (e) {
                dataAdicional_1.push([
                    e.banco,
                    e.cantdoctos,
                    e.sumamontos,
                ]);
            });
            var item = {
                headerExcel: [
                    'Banco',
                    'Cant Doctos',
                    'Monto',
                ],
                dataExcel: dataAdicional_1,
            };
            additionalData.push(item);
        }
        var nombreArchivo = "Documento_Deposito_" + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        var titulo = 'Informe de Caja Informe de Documentos a Depósito';
        var fechas = [
            "Fecha de Dep\u00F3sito: " + this.utilService.dateToLocalStringFormat(new Date(this.forma.controls.fecha.value.replace(/-/g, '\/'))),
        ];
        this.excelService.buildReportCajaCobranza(titulo, headerExcel, dataExcel, fechas, nombreArchivo, null, additionalData);
    };
    DocumentosDepositoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documentos-deposito',
            template: __webpack_require__(/*! ./documentosDeposito.component.html */ "./src/app/routes/cajaCobranza/documentosDeposito/documentosDeposito.component.html"),
            styles: [__webpack_require__(/*! ./documentosDeposito.component.scss */ "./src/app/routes/cajaCobranza/documentosDeposito/documentosDeposito.component.scss")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_2__["CajaCobranzaService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"]])
    ], DocumentosDepositoComponent);
    return DocumentosDepositoComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/informesCaja/informesCaja.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/informesCaja/informesCaja.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Informes de Caja</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"panel-heading\">\r\n                <ul>\r\n                    <li *ngFor=\"let informe of informes\" [routerLink]=\"informe.link\" style=\"cursor: pointer\">\r\n                        {{ informe.nombre }}\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/informesCaja/informesCaja.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/informesCaja/informesCaja.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/informesCaja/informesCaja.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/informesCaja/informesCaja.component.ts ***!
  \****************************************************************************/
/*! exports provided: InformesCajaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformesCajaComponent", function() { return InformesCajaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InformesCajaComponent = /** @class */ (function () {
    function InformesCajaComponent() {
        this.informes = [
            { nombre: 'Detalle Documentos Cobranza por Sucursal', link: '/cajaCobranza/detalleDocumentosCobranza' },
            { nombre: 'Documentos a Depósito', link: '/cajaCobranza/documentosDeposito' },
            { nombre: 'Resumen Documentos Cobranza por Sucursal', link: '/cajaCobranza/resumenDocumentosCobranza' },
            { nombre: 'Documentos en Cartera', link: '/cajaCobranza/documentosCartera' },
            { nombre: 'Resumen Protestos', link: '/cajaCobranza/resumenProtestos' },
        ];
    }
    InformesCajaComponent.prototype.ngOnInit = function () { };
    InformesCajaComponent.prototype.ngOnDestroy = function () { };
    InformesCajaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-informes-caja',
            template: __webpack_require__(/*! ./informesCaja.component.html */ "./src/app/routes/cajaCobranza/informesCaja/informesCaja.component.html"),
            styles: [__webpack_require__(/*! ./informesCaja.component.scss */ "./src/app/routes/cajaCobranza/informesCaja/informesCaja.component.scss")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [])
    ], InformesCajaComponent);
    return InformesCajaComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/pagoTransportista/pagoTransportista.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/pagoTransportista/pagoTransportista.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Ingresar Pago a Transportistas</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Transportista</label>\r\n                    <div class=\"col-sm-5 pl-0\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input formatRut formControlName=\"rutCliente\" name=\"rutCliente\"\r\n                                class=\"w-130 form-control\" type=\"text\" (change)=\"validaRut()\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"nombreCliente\" name=\"nombreCliente\" class=\"form-control\"\r\n                                type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalTransportistas()\">\r\n                                <em class=\"icon-magnifier\"></em>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <form ngNativeValidate [formGroup]=\"formaTipoPago\" class=\"form-horizontal\">\r\n                        <label class=\"col-sm-1 control-label\">Tipo de pago</label>\r\n                        <div class=\"col-sm-5 pl-0\">\r\n                            <div class=\"col-sm-4\">\r\n                                <input appNaturalNumber formControlName=\"tipoPagoCod\" name=\"tipoPagoCod\"\r\n                                    class=\"w-130 form-control\" type=\"number\" (change)=\"validaTipoPago()\" maxlength=\"2\"\r\n                                    oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <input formControlName=\"tipoPagoDesc\" name=\"tipoPagoDesc\" class=\"form-control\"\r\n                                    type=\"text\" />\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalTiposPago()\">\r\n                                    <em class=\"icon-magnifier\"></em>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n\r\n                <div *ngIf=\"tipoPago === 1\" class=\"col-sm-12\">\r\n                    <!-- efectivo -->\r\n                    <form ngNativeValidate [formGroup]=\"formaEfectivo\" class=\"form-horizontal\">\r\n                        <label class=\"col-sm-1 control-label\">Monto</label>\r\n                        <div class=\"col-sm-5 pl-0\">\r\n                            <div class=\"col-sm-4\">\r\n                                <input #montoEfectivo appNaturalNumber formControlName=\"montoEfectivo\"\r\n                                    name=\"montoEfectivo\" class=\"w-130 form-control text-right\" type=\"number\"\r\n                                    (focusout)=\"validaCero(montoEfectivo)\" />\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <div *ngIf=\"tipoPago === 9\" class=\"col-sm-12\">\r\n                    <!-- Ajuste de débitos -->\r\n                    <form ngNativeValidate [formGroup]=\"formaCompensacionFactura\" class=\"form-horizontal\">\r\n                        <div class=\"col-sm-12 ph-0\">\r\n                            <label class=\"col-sm-1 control-label\">Nº Factura</label>\r\n                            <div class=\"col-sm-5 pl-0\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <input #numeroFactura appNaturalNumber formControlName=\"numeroFactura\"\r\n                                        name=\"numeroFactura\" class=\"w-130 form-control text-right\" type=\"number\"\r\n                                        (focusout)=\"validaCero(numeroFactura)\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 ph-0\">\r\n                            <label class=\"col-sm-1 control-label\">Monto</label>\r\n                            <div class=\"col-sm-5 pl-0\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <input #montoFactura appNaturalNumber formControlName=\"montoFactura\"\r\n                                        name=\"montoFactura\" class=\"w-130 form-control text-right\" type=\"number\"\r\n                                        (focusout)=\"validaCero(montoFactura)\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div class=\"row pull-left mb-4\">\r\n            <div class=\"col-sm-3 mr-1\">\r\n                <button class=\"btn btn-oval btn-sm\" type=\"button\"\r\n                    (click)=\"canalizarSeleccionTipoPago()\">Guardar</button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th colspan=\"5\">Facturas Pendientes</th>\r\n                            </tr>\r\n                            <tr>\r\n                                <th class=\"w-50\">\r\n                                    <div class=\"checkbox c-checkbox needsclick pt-1\">\r\n                                        <label class=\"needsclick\">\r\n                                            <input class=\"needsclick\" type=\"checkbox\"\r\n                                                (change)=\"validaCheckTituloFacturas()\"\r\n                                                [checked]=\"checkTituloFacturasSeleccionado\" />\r\n                                            <span class=\"fa fa-check\"></span>\r\n                                        </label>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"align-middle w-270\">Fecha Vencimiento</th>\r\n                                <th class=\"align-middle\">Factura</th>\r\n                                <th class=\"align-middle\">Total</th>\r\n                                <th class=\"align-middle\">Saldo</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr\r\n                                *ngFor=\"let facturaPendiente of listadoFacturasPendientes | paginate: {itemsPerPage: 7, currentPage: pageActual};\">\r\n                                <td class=\"pt-0\">\r\n                                    <div class=\"checkbox c-checkbox needsclick\">\r\n                                        <label class=\"needsclick\">\r\n                                            <input class=\"needsclick\" type=\"checkbox\"\r\n                                                (change)=\"validaCheckFacturas(facturaPendiente)\"\r\n                                                [checked]=\"facturaPendiente.bCheck\" />\r\n                                            <span class=\"fa fa-check\"></span>\r\n                                        </label>\r\n                                    </div>\r\n                                </td>\r\n                                <td class=\"text-center\">{{facturaPendiente.fac_dfhovencimiento  | fecha }}</td>\r\n                                <td class=\"text-center\">{{facturaPendiente.fac_nnumfactura}}</td>\r\n                                <td class=\"text-right\">{{facturaPendiente.fac_ntotal | number:'':'es'}}</td>\r\n                                <td class=\"text-right\">{{facturaPendiente.cte_nsaldodocto | number:'':'es'}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div class=\"form-horizontal col-sm-3 col-sm-offset-9 mt-4\">\r\n                    <label class=\"col-sm-5 control-label\">Total Facturas</label>\r\n                    <div class=\"col-sm-7\">\r\n                        <label\r\n                            class=\"col-sm-5 form-control text-right pad-sup-2\">{{totalFacturas | number:'':'es'}}</label>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"text-right\">\r\n                    <pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\"\r\n                        nextLabel=\"Siguiente\"></pagination-controls>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/pagoTransportista/pagoTransportista.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/pagoTransportista/pagoTransportista.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pad-sup-2{padding-top:2px}\n"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/pagoTransportista/pagoTransportista.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/pagoTransportista/pagoTransportista.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PagoTransportistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoTransportistaComponent", function() { return PagoTransportistaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
/* harmony import */ var _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/consultaService/pedidos.service */ "./src/app/core/consultaService/pedidos.service.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _commonPopUp_transportistaPagoPopUp_transportistaPagoPopUp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../commonPopUp/transportistaPagoPopUp/transportistaPagoPopUp.component */ "./src/app/routes/commonPopUp/transportistaPagoPopUp/transportistaPagoPopUp.component.ts");
/* harmony import */ var _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component */ "./src/app/routes/commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component.ts");
/* harmony import */ var _pagos_models_crearPagoCajaTransportista__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pagos/models/crearPagoCajaTransportista */ "./src/app/routes/cajaCobranza/pagos/models/crearPagoCajaTransportista.ts");
/* harmony import */ var _pagos_models_asrvitem_pago__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pagos/models/asrvitem-pago */ "./src/app/routes/cajaCobranza/pagos/models/asrvitem-pago.ts");
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
var InformacionBancaria = /** @class */ (function () {
    function InformacionBancaria() {
    }
    return InformacionBancaria;
}());
var PagoTransportistaComponent = /** @class */ (function () {
    function PagoTransportistaComponent(modalService, utilService, spinner, consultasService, cajaCobranzaService, authService, pedidosService, administracionOperativaService) {
        this.modalService = modalService;
        this.utilService = utilService;
        this.spinner = spinner;
        this.consultasService = consultasService;
        this.cajaCobranzaService = cajaCobranzaService;
        this.authService = authService;
        this.pedidosService = pedidosService;
        this.administracionOperativaService = administracionOperativaService;
        this.pageActual = 1;
        this.request = {};
        this.rutClienteSeleccionado = 0;
        this.ultimoPopUpLevantado = '';
        this.rutValido = false;
        this.user = {};
        this.listadoFacturasPendientes = [];
        this.suscripciones = [];
        this.tipoPago = 0;
        this.checkTituloFacturasSeleccionado = false;
        this.fechaActual = new Date();
        this.garantia = {};
        this.datos = [];
        this.CrearPagoCajaTransportista = new _pagos_models_crearPagoCajaTransportista__WEBPACK_IMPORTED_MODULE_14__["CrearPagoCajaTransportista"]();
        this.cuentasBancarias = [];
        this.notasCredito = [];
        this.ajusteDebito = [];
        this.sucursalUsuario = {};
        this.totalFacturas = 0;
        this.formaTipoPago = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            tipoPagoCod: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tipoPagoDesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true })
        });
        this.formaEfectivo = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            montoEfectivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0)
        });
        this.formaCompensacionFactura = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            numeroFactura: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            montoFactura: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0)
        });
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            rutCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nombreCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            tipoPagoCod: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tipoPagoDesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true })
        });
    }
    PagoTransportistaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.getDatosUser();
        this.sucursalUsuario = JSON.parse(localStorage.getItem('SucursalUsuario')).sus_scodsucursal;
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5___default.a);
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.inicializaControlesFormulario(_this.formaEfectivo);
            _this.inicializaControlesFormulario(_this.formaCompensacionFactura);
            _this.setData(resData);
        });
    };
    PagoTransportistaComponent.prototype.desmarcarSeleccionTabla = function (tabla) {
        if (tabla === 'facturas') {
            this.checkTituloFacturasSeleccionado = false;
            this.listadoFacturasPendientes.forEach(function (facturaPendiente) { return facturaPendiente.bCheck = false; });
        }
    };
    PagoTransportistaComponent.prototype.validarCabeceraFormulario = function () {
        var _validarCabeceraFormulario = true;
        var facturasSeleccionadas = false;
        this.listadoFacturasPendientes.forEach(function (facturaPendiente) {
            if (facturaPendiente.bCheck !== undefined && facturaPendiente.bCheck === true) {
                facturasSeleccionadas = true;
            }
        });
        if (!facturasSeleccionadas) {
            swal('Atención', 'Debe seleccionar alguna factura', 'error');
            _validarCabeceraFormulario = false;
        }
        if (this.forma.controls.tipoPagoCod.value === '') {
            swal('Atención', 'Debe seleccionar tipo de pago', 'error');
            _validarCabeceraFormulario = false;
        }
        if (this.forma.controls.rutCliente.value === '' || this.rutClienteSeleccionado === 0) {
            swal('Atención', 'Debe seleccionar un transportista', 'error');
            _validarCabeceraFormulario = false;
        }
        return _validarCabeceraFormulario;
    };
    PagoTransportistaComponent.prototype.listarMovimientosPendientesTransportistas = function () {
        var _this = this;
        this.spinner.show();
        var request = {
            nRutTransportista: this.rutClienteSeleccionado,
            nRutOperador: this.user.nrutoperador
        };
        this.suscripciones.push(this.cajaCobranzaService.listarMovimientosPendientesTransportistas(request)
            .subscribe(function (facturasPendientes) {
            if (facturasPendientes.facturas.length > 0) {
                _this.listadoFacturasPendientes = facturasPendientes.facturas;
                _this.listadoFacturasPendientes.forEach(function (facturaPendiente) { return _this.totalFacturas += facturaPendiente.cte_nsaldodocto; });
            }
            else {
                _this.listadoFacturasPendientes = [];
                _this.totalFacturas = 0;
                _this.forma.controls.rutCliente.setValue('');
                _this.rutClienteSeleccionado = 0;
                _this.forma.controls.nombreCliente.setValue('');
                if (facturasPendientes.error.codError !== 0) {
                    _this.spinner.hide();
                    swal('Atención', 'Ha ocurrido un error inesperado!', facturasPendientes.error);
                }
                if (facturasPendientes.facturas.length === 0) {
                    _this.spinner.hide();
                    swal('Atención', 'No se encontraron coincidencias', 'info');
                }
                _this.spinner.hide();
            }
        }, function (error) {
            _this.spinner.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', error);
        }));
        this.spinner.hide();
    };
    PagoTransportistaComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
    };
    PagoTransportistaComponent.prototype.openModalTransportistas = function () {
        this.ultimoPopUpLevantado = 'transportistas';
        var initialState = {
            titulo: 'Transportistas',
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_transportistaPagoPopUp_transportistaPagoPopUp_component__WEBPACK_IMPORTED_MODULE_12__["TransportistaPagoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    PagoTransportistaComponent.prototype.openModalTiposPago = function () {
        if (this.rutClienteSeleccionado > 0) {
            this.ultimoPopUpLevantado = 'tiposPagoTransportista';
            var initialState = {
                titulo: 'Tipos de Pago',
                origen: 'tipoPagoTransportista',
                rutCliente: this.rutClienteSeleccionado
            };
            this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_13__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        }
        else {
            swal('Atención', 'Debe seleccionar un cliente', 'info');
        }
    };
    PagoTransportistaComponent.prototype.validaRut = function () {
        this.rutClienteSeleccionado = 0;
        this.listadoFacturasPendientes = [];
        this.totalFacturas = 0;
        if (this.forma.controls.rutCliente.value === '') {
            this.forma.controls.rutCliente.setValue('');
            this.forma.controls.nombreCliente.setValue('');
        }
        else {
            this.rutValido = false;
            if (!this.utilService.isValidRUT(this.forma.controls.rutCliente.value)) {
                this.forma.controls.rutCliente.setValue('');
                this.forma.controls.nombreCliente.setValue('');
                swal('Atención', 'El RUT es incorrecto', 'error');
            }
            else {
                this.rutValido = true;
                this.rutClienteSeleccionado = parseInt(this.forma.controls.rutCliente.value
                    .substr(0, this.forma.controls.rutCliente.value.length - 1), 10);
                this.obtenerTransportista(this.rutClienteSeleccionado);
                this.spinner.show();
                this.listarMovimientosPendientesTransportistas();
                this.spinner.hide();
            }
        }
    };
    PagoTransportistaComponent.prototype.obtenerTransportista = function (rutCliente) {
        var _this = this;
        this.request.codEstadoTrans = '';
        this.request.razonSocialTrans = '';
        this.request.rutOperador = Number(this.authService.getDatosUser().nrutoperador);
        this.request.rutTransportista = Number(rutCliente);
        this.administracionOperativaService.getTransportista(this.request)
            .subscribe(function (transportista) {
            if (transportista.buscaTransportistaDTO) {
                if (transportista.buscaTransportistaDTO.length === 0 && transportista.error.codError === 0) {
                    _this.forma.controls.rutCliente.setValue('');
                    _this.forma.controls.nombreCliente.setValue('');
                    swal('Atención', 'No existe transportista', 'info');
                }
                else if (transportista.error.codError !== 0) {
                    swal('Atención', "Ha ocurrido el siguiente error en obtenerTransportista() => : " + transportista.error.msjError, 'error');
                }
                else {
                    _this.forma.controls.nombreCliente.setValue(transportista.buscaTransportistaDTO[0].tra_srazonsocial);
                }
            }
        }, function (error) {
            swal('Atención', "Ha ocurrido el siguiente error en obtenerTransportista() => : " + error, 'error');
        });
    };
    PagoTransportistaComponent.prototype.setData = function (resData) {
        switch (this.ultimoPopUpLevantado) {
            case 'transportistas':
                this.forma.controls.rutCliente.setValue("" + resData.tra_nruttransportista + resData.tra_sdigitoverificador);
                this.forma.controls.nombreCliente.setValue(resData.tra_srazonsocial);
                this.rutClienteSeleccionado = resData.tra_nruttransportista;
                this.listarMovimientosPendientesTransportistas();
                break;
            case 'tiposPagoTransportista':
                this.forma.controls.tipoPagoCod.setValue(resData.par_codparametro01);
                this.forma.controls.tipoPagoDesc.setValue(resData.par_deslargo01);
                this.formaTipoPago.controls.tipoPagoCod.setValue(resData.par_codparametro01);
                this.formaTipoPago.controls.tipoPagoDesc.setValue(resData.par_deslargo01);
                this.tipoPago = parseInt(resData.par_codparametro01, 10);
                // limpia valores
                this.formaEfectivo.controls.montoEfectivo.setValue(0);
                this.formaCompensacionFactura.controls.numeroFactura.setValue(0);
                this.formaCompensacionFactura.controls.montoFactura.setValue(0);
                break;
            default:
                break;
        }
    };
    PagoTransportistaComponent.prototype.validaCheckFacturas = function (facturaPendiente) {
        facturaPendiente.bCheck = !facturaPendiente.bCheck;
        if (facturaPendiente.bCheck) {
            this.desmarcarSeleccionTabla('protestos');
        }
        else {
        }
    };
    PagoTransportistaComponent.prototype.validaCheckTituloFacturas = function () {
        this.checkTituloFacturasSeleccionado = !this.checkTituloFacturasSeleccionado;
        if (this.checkTituloFacturasSeleccionado) {
            this.listadoFacturasPendientes.forEach(function (facturaPendiente) { return facturaPendiente.bCheck = true; });
            this.desmarcarSeleccionTabla('protestos');
        }
        else {
            this.listadoFacturasPendientes.forEach(function (facturaPendiente) { return facturaPendiente.bCheck = false; });
        }
    };
    PagoTransportistaComponent.prototype.validaCheckProtestos = function (protestoVigente) {
        protestoVigente.bCheck = !protestoVigente.bCheck;
        if (protestoVigente.bCheck) {
            this.desmarcarSeleccionTabla('facturas');
        }
        else {
        }
    };
    PagoTransportistaComponent.prototype.canalizarSeleccionTipoPago = function () {
        if (this.validarCabeceraFormulario()) {
            switch (this.forma.controls.tipoPagoCod.value) {
                case '01':// 'Efectivo'
                    if (this.agregarEfectivo()) {
                        var informacionBancaria = new InformacionBancaria();
                        informacionBancaria.nMonto = this.formaEfectivo.controls.montoEfectivo.value;
                        informacionBancaria.nNumeroDocto = 0;
                        informacionBancaria.sCodBanco = '';
                        informacionBancaria.sNumCuenta = '';
                        this.cargarModeloCrearPagoCajaTransportista(informacionBancaria);
                    }
                    break;
                case '09':// 'Compensación de Facturas'
                    if (this.agregarCompensacionFactura()) {
                        var informacionBancaria = new InformacionBancaria();
                        informacionBancaria.nMonto = this.formaCompensacionFactura.controls.montoFactura.value;
                        informacionBancaria.nNumeroDocto = 0;
                        informacionBancaria.sCodBanco = '';
                        informacionBancaria.sNumCuenta = '';
                        this.cargarModeloCrearPagoCajaTransportista(informacionBancaria);
                    }
                    break;
                default:
                    break;
            }
        }
    };
    PagoTransportistaComponent.prototype.determinarTablaSeleccionada = function () {
        var _determinarTablaSeleccionada = '';
        this.listadoFacturasPendientes.forEach(function (facturaPendiente) {
            if (facturaPendiente.bCheck !== null && facturaPendiente.bCheck !== undefined && facturaPendiente.bCheck === true) {
                return _determinarTablaSeleccionada = 'factura';
            }
        });
        return _determinarTablaSeleccionada;
    };
    PagoTransportistaComponent.prototype.cargarModeloCrearPagoCajaTransportista = function (informacionBancaria) {
        var _arrayASRV_ItemPago = [];
        var _crearPagoCaja = new _pagos_models_crearPagoCajaTransportista__WEBPACK_IMPORTED_MODULE_14__["CrearPagoCajaTransportista"]();
        this.listadoFacturasPendientes.forEach(function (facturaPendiente) {
            if (facturaPendiente.bCheck !== null && facturaPendiente.bCheck !== undefined && facturaPendiente.bCheck === true) {
                var _objectASRV_ItemPago = new _pagos_models_asrvitem_pago__WEBPACK_IMPORTED_MODULE_15__["ASRVItemPago"]();
                _objectASRV_ItemPago.nIdPago = facturaPendiente.fac_nidfactura;
                _objectASRV_ItemPago.nMonto = informacionBancaria.nMonto;
                _objectASRV_ItemPago.sIndProtesto = 'N';
                _arrayASRV_ItemPago.push(_objectASRV_ItemPago);
            }
        });
        _crearPagoCaja.nMonto = informacionBancaria.nMonto;
        _crearPagoCaja.nNumeroDocto = informacionBancaria.nNumeroDocto;
        _crearPagoCaja.nRutOperador = Number(this.user.nrutoperador);
        _crearPagoCaja.nRutTransportista = Number(this.rutClienteSeleccionado);
        _crearPagoCaja.nRutUsuarioCrea = Number(this.user.nrunusuario);
        _crearPagoCaja.sCodSucursal = this.sucursalUsuario;
        _crearPagoCaja.sCodTipoPago = this.forma.controls.tipoPagoCod.value;
        _crearPagoCaja.aSRV_ItemPago = _arrayASRV_ItemPago;
        this.ejecutarServicio(_crearPagoCaja);
    };
    PagoTransportistaComponent.prototype.ejecutarServicio = function (objetoCreacion) {
        var _this = this;
        this.spinner.show();
        this.request = new Object();
        this.request = objetoCreacion;
        this.cajaCobranzaService.crearPagoCajaTransportista(this.request)
            .subscribe(function (pagoCaja) {
            _this.spinner.hide();
            if (pagoCaja) {
                if (pagoCaja.error.codError !== 0) {
                    swal('Atención', "Ha ocurrido un error inesperado : " + pagoCaja.error.msjError, 'error');
                }
                else {
                    _this.listarMovimientosPendientesTransportistas();
                    _this.desmarcarSeleccionTabla('facturas');
                    _this.desmarcarSeleccionTabla('protestos');
                    swal('Atención', 'Se ha realizado el pago correctamente', 'success');
                }
            }
        }, function (error) {
            _this.spinner.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', error);
        });
    };
    PagoTransportistaComponent.prototype.agregarEfectivo = function () {
        var _agregarEfectivo = true;
        if (this.formaEfectivo.controls.montoEfectivo.value === 0 || this.formaEfectivo.controls.montoEfectivo.value === null) {
            _agregarEfectivo = false;
            swal('Atención', 'El monto ingresado debe ser mayor a cero', 'warning');
        }
        return _agregarEfectivo;
    };
    PagoTransportistaComponent.prototype.agregarCompensacionFactura = function () {
        var agregarCompensacionFactura = true;
        if (this.formaCompensacionFactura.controls.numeroFactura.value === 0 ||
            this.formaCompensacionFactura.controls.numeroFactura.value === null) {
            agregarCompensacionFactura = false;
            swal('Atención', 'Debe ingresar el número de factura', 'warning');
        }
        else if (this.formaCompensacionFactura.controls.montoFactura.value === 0 ||
            this.formaCompensacionFactura.controls.montoFactura.value === null) {
            agregarCompensacionFactura = false;
            swal('Atención', 'Debe ingresar el monto de la factura', 'warning');
        }
        else {
            var pago = {
                id: Math.floor(Math.random() * (10000 - 0)) + 1,
                monto: this.formaCompensacionFactura.controls.montoFactura.value,
                nDocto: 0,
                nIdGarantia: this.garantia.gar_nidgarantia,
                nRutCliente: this.garantia.gar_nrutcliente,
                nRutOperador: this.garantia.gar_nrutoperador,
                sCodBanco: '',
                sCodSucursal: this.sucursalUsuario,
                sCodTipoPago: '07',
                sFhoVencimiento: '',
                sNumCuenta: ''
            };
        }
        return agregarCompensacionFactura;
    };
    PagoTransportistaComponent.prototype.validaCero = function (monto) {
        if (monto.value === '') {
            monto.value = 0;
        }
    };
    PagoTransportistaComponent.prototype.validaTipoPago = function () {
        var _this = this;
        if (this.formaTipoPago.controls.tipoPagoCod.value === null) {
            this.tipoPago = null;
            this.formaTipoPago.controls.tipoPagoDesc.setValue('');
        }
        else {
            this.request = {
                'nIdRecorrido': 0,
                'nNumLocal': 0,
                'nRutCliente': this.rutClienteSeleccionado,
                'nRutOperador': this.user.nrutoperador,
                'opcion': 'TRANSPORTISTA'
            };
            this.spinner.show();
            this.cajaCobranzaService.buscaTiposPago(this.request)
                .subscribe(function (data) {
                _this.spinner.hide();
                if (data) {
                    if (data.error.codError !== 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        var existeTipoPago = false;
                        _this.datos = data.tipoPago;
                        if (_this.datos.length > 0) {
                            for (var i in _this.datos) {
                                if (Number(_this.datos[i].par_codparametro01) === _this.formaTipoPago.controls.tipoPagoCod.value) {
                                    _this.formaTipoPago.controls.tipoPagoDesc.setValue(_this.datos[i].par_deslargo01);
                                    _this.tipoPago = parseInt(_this.datos[i].par_codparametro01, 10);
                                    existeTipoPago = true;
                                    break;
                                }
                            }
                        }
                        if (!existeTipoPago) {
                            _this.formaTipoPago.controls.tipoPagoCod.setValue(null);
                            _this.formaTipoPago.controls.tipoPagoDesc.setValue('');
                            _this.tipoPago = null;
                            swal('Atención', 'Forma de pago no existe o no está habilitado para utilizarla', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.spinner.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    PagoTransportistaComponent.prototype.inicializaControlesFormulario = function (formulario) {
        Object.keys(formulario.controls).forEach(function (control) {
            var typedControl = formulario.controls[control];
            typedControl.setValue('');
        });
    };
    PagoTransportistaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pago-transportista',
            template: __webpack_require__(/*! ./pagoTransportista.component.html */ "./src/app/routes/cajaCobranza/pagoTransportista/pagoTransportista.component.html"),
            styles: [__webpack_require__(/*! ./pagoTransportista.component.scss */ "./src/app/routes/cajaCobranza/pagoTransportista/pagoTransportista.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_7__["ConsultasService"],
            _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_9__["CajaCobranzaService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_10__["PedidosService"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_11__["AdministracionOperativaService"]])
    ], PagoTransportistaComponent);
    return PagoTransportistaComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/pagos/models/asrvitem-pago.ts":
/*!*******************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/pagos/models/asrvitem-pago.ts ***!
  \*******************************************************************/
/*! exports provided: ASRVItemPago */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASRVItemPago", function() { return ASRVItemPago; });
var ASRVItemPago = /** @class */ (function () {
    function ASRVItemPago() {
    }
    return ASRVItemPago;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/pagos/models/crearPagoCaja.ts":
/*!*******************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/pagos/models/crearPagoCaja.ts ***!
  \*******************************************************************/
/*! exports provided: CrearPagoCaja */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearPagoCaja", function() { return CrearPagoCaja; });
var CrearPagoCaja = /** @class */ (function () {
    function CrearPagoCaja() {
    }
    return CrearPagoCaja;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/pagos/models/crearPagoCajaTransportista.ts":
/*!********************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/pagos/models/crearPagoCajaTransportista.ts ***!
  \********************************************************************************/
/*! exports provided: CrearPagoCajaTransportista */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearPagoCajaTransportista", function() { return CrearPagoCajaTransportista; });
var CrearPagoCajaTransportista = /** @class */ (function () {
    function CrearPagoCajaTransportista() {
    }
    return CrearPagoCajaTransportista;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/pagos/pagos.component.html":
/*!****************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/pagos/pagos.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Ingresar Pago</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Cliente</label>\r\n                    <div class=\"col-sm-5 pl-0\">\r\n                        <div class=\"col-sm-4\">\r\n                            \r\n                            <input formatRut formControlName=\"rutCliente\" name=\"rutCliente\"\r\n                                class=\"w-130 form-control\" type=\"text\" (change)=\"validaRut()\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"nombreCliente\" name=\"nombreCliente\" class=\"form-control\"\r\n                                type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalClientes()\">\r\n                                <em class=\"icon-magnifier\"></em>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <form ngNativeValidate [formGroup]=\"formaTipoPago\" class=\"form-horizontal\">\r\n                        <label class=\"col-sm-1 control-label\">Tipo de pago</label>\r\n                        <div class=\"col-sm-5 pl-0\">\r\n                            <div class=\"col-sm-4\">\r\n                                <input appNaturalNumber formControlName=\"tipoPagoCod\" name=\"tipoPagoCod\"\r\n                                    class=\"w-130 form-control\" type=\"number\" (change)=\"validaTipoPago()\" maxlength=\"2\"\r\n                                    oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <input formControlName=\"tipoPagoDesc\" name=\"tipoPagoDesc\" class=\"form-control\"\r\n                                    type=\"text\" />\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalTiposPago()\">\r\n                                    <em class=\"icon-magnifier\"></em>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n\r\n                <div *ngIf=\"tipoPago === 1\" class=\"col-sm-12\">\r\n                    <!-- efectivo -->\r\n                    <form ngNativeValidate [formGroup]=\"formaEfectivo\" class=\"form-horizontal\">\r\n                        <label class=\"col-sm-1 control-label\">Monto</label>\r\n                        <div class=\"col-sm-5 pl-0\">\r\n                            <div class=\"col-sm-4\">\r\n                                <input #montoEfectivo appNaturalNumber formControlName=\"montoEfectivo\"\r\n                                    name=\"montoEfectivo\" class=\"w-130 form-control text-right\" type=\"number\"\r\n                                    (focusout)=\"validaCero(montoEfectivo)\" />\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <div *ngIf=\"tipoPago === 2\" class=\"col-sm-12\">\r\n                    <!-- cheque al día -->\r\n                    <form ngNativeValidate [formGroup]=\"formaChequeDia\" class=\"form-horizontal\">\r\n                        <label class=\"col-sm-1 control-label\">Cuenta</label>\r\n                        <div class=\"col-sm-5 pl-0\">\r\n                            <div class=\"col-sm-4\">\r\n                                <select class=\"w-130 form-control pv-0\" formControlName=\"cuenta\" name=\"cuenta\">\r\n                                    <option #opcion value=\"\" selected>(Sin Selección)</option>\r\n                                    <option *ngFor=\"let cuenta of cuentasBancarias\"\r\n                                        [ngValue]=\"cuenta.cbc_scodbanco + '&' + cuenta.cbc_snumcuentacte\">\r\n                                        {{cuenta.cbc_snumcuentacte}}-{{cuenta.par_deslargo01}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 ph-0\">\r\n                            <label class=\"col-sm-1 control-label\">N° Cheque</label>\r\n                            <div class=\"col-sm-5 pl-0\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <input formControlName=\"numCheque\" name=\"numCheque\" class=\"w-130 form-control\"\r\n                                        type=\"text\" maxlength=\"10\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 ph-0\">\r\n                            <label class=\"col-sm-1 control-label\">Fecha</label>\r\n                            <div class=\"col-sm-5 pl-0\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <input class=\"w-130 form-control ph-1 text-center\" formControlName=\"fecha\"\r\n                                        name=\"fecha\" type=\"date\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 ph-0\">\r\n                            <label class=\"col-sm-1 control-label\">Monto</label>\r\n                            <div class=\"col-sm-5 pl-0\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <input #montoChequeDia appNaturalNumber formControlName=\"montoChequeDia\"\r\n                                        name=\"montoChequeDia\" class=\"w-130 form-control text-right\" type=\"number\"\r\n                                        (focusout)=\"validaCero(montoChequeDia)\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <div *ngIf=\"tipoPago === 3\" class=\"col-sm-12\">\r\n                    <!-- cheque a fecha -->\r\n                    <form ngNativeValidate [formGroup]=\"formaChequeFecha\" class=\"form-horizontal\">\r\n                        <label class=\"col-sm-1 control-label\">Cuenta</label>\r\n                        <div class=\"col-sm-5 pl-0\">\r\n                            <div class=\"col-sm-4 w-128\">\r\n                                <select class=\"w-130 form-control pv-0\" formControlName=\"cuenta\" name=\"cuenta\">\r\n                                    <option value=\"\" selected>(Sin Selección)</option>\r\n                                    <option *ngFor=\"let cuenta of cuentasBancarias\"\r\n                                        [ngValue]=\"cuenta.cbc_scodbanco + '&' + cuenta.cbc_snumcuentacte\">\r\n                                        {{cuenta.cbc_snumcuentacte}}-{{cuenta.par_deslargo01}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 ph-0\">\r\n                            <label class=\"col-sm-1 control-label\">N° Cheque</label>\r\n                            <div class=\"col-sm-5 pl-0\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <input formControlName=\"numCheque\" name=\"numCheque\" class=\"w-130 form-control\"\r\n                                        type=\"text\" maxlength=\"10\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 ph-0\">\r\n                            <label class=\"col-sm-1 control-label\">Fecha</label>\r\n                            <div class=\"col-sm-5 pl-0\">\r\n                                <div class=\"col-sm-4 w-128\">\r\n                                    <input #fechaCh class=\"w-130 form-control text-center\" formControlName=\"fechaCh\"\r\n                                        name=\"fechaCh\" type=\"date\" (focusout)=\"validaFechaCheque(fechaCh)\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 ph-0\">\r\n                            <label class=\"col-sm-1 control-label\">Monto</label>\r\n                            <div class=\"col-sm-5 pl-0\">\r\n                                <div class=\"col-sm-4 w-128\">\r\n                                    <input #montoChequeFecha appNaturalNumber formControlName=\"montoChequeFecha\"\r\n                                        name=\"montoChequeFecha\" class=\"w-130 form-control text-right\" type=\"number\"\r\n                                        (focusout)=\"validaCero(montoChequeFecha)\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <div *ngIf=\"tipoPago === 4\" class=\"col-sm-12\">\r\n                    <!-- Nota de Crédito -->\r\n                    <form ngNativeValidate [formGroup]=\"formaNotasCredito\" class=\"form-horizontal\">\r\n                        <div class=\"col-sm-12 ph-0\">\r\n                            <label class=\"col-sm-1 control-label\">N° Nota Crédito</label>\r\n                            <div class=\"col-sm-5 pl-0\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <select class=\"w-130 form-control pv-0\" formControlName=\"notaCredito\"\r\n                                        name=\"notaCredito\" (change)=\"cambiaMonto()\">\r\n                                        <option value=\"\" selected>(Sin Selección)</option>\r\n                                        <option *ngFor=\"let nota of notasCredito\" [ngValue]=\"nota.cte_nidoperacion\">\r\n                                            {{nota.cte_niddocto}}-(${{nota.cte_nsaldodocto}})</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 ph-0\">\r\n                            <label class=\"col-sm-1 control-label\">Monto</label>\r\n                            <div class=\"col-sm-5 pl-0\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <input #montoNotaCredito appNaturalNumber formControlName=\"montoNotaCredito\"\r\n                                        name=\"montoNotaCredito\" class=\"w-130 form-control text-right\" type=\"number\"\r\n                                        (focusout)=\"validaCero(montoNotaCredito)\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <div *ngIf=\"tipoPago === 7\" class=\"col-sm-12\">\r\n                    <!-- Ajuste de débitos -->\r\n                    <form ngNativeValidate [formGroup]=\"formaAjusteDebito\" class=\"form-horizontal\">\r\n                        <div class=\"col-sm-12 ph-0\">\r\n                            <label class=\"col-sm-1 control-label\">A Favor</label>\r\n                            <div class=\"col-sm-5 pl-0\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <input formControlName=\"aFavor\" name=\"aFavor\" class=\"w-130 form-control text-right\"\r\n                                        type=\"number\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 ph-0\">\r\n                            <label class=\"col-sm-1 control-label\">Monto</label>\r\n                            <div class=\"col-sm-5 pl-0\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <input #montoAjuste appNaturalNumber formControlName=\"montoAjuste\"\r\n                                        name=\"montoAjuste\" class=\"w-130 form-control text-right\" type=\"number\"\r\n                                        (focusout)=\"validaCero(montoAjuste)\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"row pull-left mb-4\">\r\n            <div class=\"col-sm-3 mr-1\">\r\n                <button class=\"btn btn-oval btn-sm\" type=\"button\"\r\n                    (click)=\"canalizarSeleccionTipoPago()\">Guardar</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th colspan=\"5\">Facturas Pendientes</th>\r\n                            </tr>\r\n                            <tr>\r\n                                <th class=\"w-50\">\r\n                                    <div class=\"checkbox c-checkbox needsclick pt-1\">\r\n                                        <label class=\"needsclick\">\r\n                                            <input class=\"needsclick\" type=\"checkbox\"\r\n                                                (change)=\"validaCheckTituloFacturas()\"\r\n                                                [checked]=\"checkTituloFacturasSeleccionado\" />\r\n                                            <span class=\"fa fa-check\"></span>\r\n                                        </label>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"align-middle w-270\">Fecha Vencimiento</th>\r\n                                <th class=\"align-middle\">Factura</th>\r\n                                <th class=\"align-middle\">Total</th>\r\n                                <th class=\"align-middle\">Saldo</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr\r\n                                *ngFor=\"let facturaPendiente of listadoFacturasPendientes | paginate: {itemsPerPage: 7, currentPage: pageActual};\">\r\n                                <td class=\"pt-0\">\r\n                                    <div class=\"checkbox c-checkbox needsclick\">\r\n                                        <label class=\"needsclick\">\r\n                                            <input class=\"needsclick\" type=\"checkbox\"\r\n                                                (change)=\"validaCheckFacturas(facturaPendiente)\"\r\n                                                [checked]=\"facturaPendiente.bCheck\" />\r\n                                            <span class=\"fa fa-check\"></span>\r\n                                        </label>\r\n                                    </div>\r\n                                </td>\r\n                                <td class=\"text-center\">{{facturaPendiente.fac_dfhovencimiento  | fecha }}</td>\r\n                                <td class=\"text-center\">{{facturaPendiente.fac_nnumfactura}}</td>\r\n                                <td class=\"text-right\">{{facturaPendiente.fac_ntotal | number:'':'es'}}</td>\r\n                                <td class=\"text-right\">{{facturaPendiente.cte_nsaldodocto | number:'':'es'}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div class=\"form-horizontal col-sm-3 col-sm-offset-9 mt-4\">\r\n                    <label class=\"col-sm-5 control-label\">Total Facturas</label>\r\n                    <div class=\"col-sm-7\">\r\n                        <label\r\n                            class=\"col-sm-5 form-control text-right pad-sup-2\">{{totalFacturas | number:'':'es'}}</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-4\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th colspan=\"9\">Protestos Vigentes</th>\r\n                            </tr>\r\n                            <tr>\r\n                                <th class=\"w-50\">\r\n                                    <div class=\"checkbox c-checkbox needsclick pt-1\">\r\n                                        <label class=\"needsclick\">\r\n                                            <input class=\"needsclick\" type=\"checkbox\"\r\n                                                (change)=\"validaCheckTituloProtestos()\"\r\n                                                [checked]=\"checkTituloProtestosSeleccionado\" />\r\n                                            <span class=\"fa fa-check\"></span>\r\n                                        </label>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"align-middle\">Fecha Vencimiento</th>\r\n                                <th class=\"align-middle\">Banco</th>\r\n                                <th class=\"align-middle\">Nro. Cta. Cte.</th>\r\n                                <th class=\"align-middle\">N° Documento</th>\r\n                                <th class=\"align-middle\">Fecha Protesto</th>\r\n                                <th class=\"align-middle\">Total</th>\r\n                                <th class=\"align-middle\">Abonado</th>\r\n                                <th class=\"align-middle\">Saldo</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr\r\n                                *ngFor=\"let protestoPendiente of listadoProtestosVigentes | paginate: {itemsPerPage: 7, currentPage: pageActual};\">\r\n                                <td class=\"pt-0\">\r\n                                    <div class=\"checkbox c-checkbox needsclick\">\r\n                                        <label class=\"needsclick\">\r\n                                            <input class=\"needsclick\" type=\"checkbox\"\r\n                                                (change)=\"validaCheckProtestos(protestoPendiente)\"\r\n                                                [checked]=\"protestoPendiente.bCheck\" />\r\n                                            <span class=\"fa fa-check\"></span>\r\n                                        </label>\r\n                                    </div>\r\n                                </td>\r\n                                <td class=\"text-right\">{{protestoPendiente.gar_dfhovencimiento | fecha}}</td>\r\n                                <td class=\"text-center\">{{protestoPendiente.banco}}</td>\r\n                                <td class=\"text-center\">{{protestoPendiente.gar_snumcuenta}}</td>\r\n                                <td class=\"text-right\">{{protestoPendiente.pro_nidprotesto}}</td>\r\n                                <td class=\"text-center\">{{protestoPendiente.pro_dfhoprotesto | fecha}}</td>\r\n                                <td class=\"text-right\">{{protestoPendiente.gar_nmonto | number:'':'es'}}</td>\r\n                                <td class=\"text-right\">\r\n                                    {{protestoPendiente.gar_nmonto - protestoPendiente.pro_nsaldo | number:'':'es'}}\r\n                                </td>\r\n                                <td class=\"text-right\">{{protestoPendiente.pro_nsaldo | number:'':'es'}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div class=\"form-horizontal col-sm-3 col-sm-offset-9 mt-4\">\r\n                    <label class=\"col-sm-5 control-label\">Total Protestos</label>\r\n                    <div class=\"col-sm-7\">\r\n                        <label\r\n                            class=\"col-sm-5 form-control text-right pad-sup-2\">{{totalProtestos | number:'':'es'}}</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"text-right\">\r\n                    <pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\"\r\n                        nextLabel=\"Siguiente\"></pagination-controls>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/pagos/pagos.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/pagos/pagos.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pad-sup-2{padding-top:2px}\n"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/pagos/pagos.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/pagos/pagos.component.ts ***!
  \**************************************************************/
/*! exports provided: PagosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagosComponent", function() { return PagosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
/* harmony import */ var _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/consultaService/pedidos.service */ "./src/app/core/consultaService/pedidos.service.ts");
/* harmony import */ var _commonPopUp_clienteCajaCobranzaPopUp_clienteCajaCobranzaPopUp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../commonPopUp/clienteCajaCobranzaPopUp/clienteCajaCobranzaPopUp.component */ "./src/app/routes/commonPopUp/clienteCajaCobranzaPopUp/clienteCajaCobranzaPopUp.component.ts");
/* harmony import */ var _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component */ "./src/app/routes/commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component.ts");
/* harmony import */ var _models_crearPagoCaja__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./models/crearPagoCaja */ "./src/app/routes/cajaCobranza/pagos/models/crearPagoCaja.ts");
/* harmony import */ var _models_asrvitem_pago__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./models/asrvitem-pago */ "./src/app/routes/cajaCobranza/pagos/models/asrvitem-pago.ts");
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
var InformacionBancaria = /** @class */ (function () {
    function InformacionBancaria() {
    }
    return InformacionBancaria;
}());
var PagosComponent = /** @class */ (function () {
    function PagosComponent(modalService, utilService, spinner, consultasService, cajaCobranzaService, authService, pedidosService) {
        this.modalService = modalService;
        this.utilService = utilService;
        this.spinner = spinner;
        this.consultasService = consultasService;
        this.cajaCobranzaService = cajaCobranzaService;
        this.authService = authService;
        this.pedidosService = pedidosService;
        this.pageActual = 1;
        this.request = {};
        this.rutClienteSeleccionado = 0;
        this.ultimoPopUpLevantado = '';
        this.rutValido = false;
        this.user = {};
        this.listadoFacturasPendientes = [];
        this.listadoProtestosVigentes = [];
        this.suscripciones = [];
        this.tipoPago = 0;
        this.checkTituloFacturasSeleccionado = false;
        this.checkTituloProtestosSeleccionado = false;
        this.fechaActual = new Date();
        this.garantia = {};
        this.datos = [];
        this.crearPagoCaja = new _models_crearPagoCaja__WEBPACK_IMPORTED_MODULE_13__["CrearPagoCaja"]();
        this.cuentasBancarias = [];
        this.notasCredito = [];
        this.ajusteDebito = [];
        this.sucursalUsuario = {};
        this.totalFacturas = 0;
        this.totalProtestos = 0;
        this.formaTipoPago = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            tipoPagoCod: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tipoPagoDesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true })
        });
        this.formaEfectivo = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            montoEfectivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0)
        });
        this.formaChequeDia = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            cuenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            numCheque: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.utilService.dateToStringFormat(this.fechaActual), disabled: true }),
            montoChequeDia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0)
        });
        this.formaChequeFecha = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            cuenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            numCheque: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fechaCh: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.utilService.dateToStringFormat(this.fechaActual)),
            montoChequeFecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0)
        });
        this.formaNotasCredito = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            notaCredito: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            montoNotaCredito: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: 0, disabled: true })
        });
        this.formaAjusteDebito = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            aFavor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: 0, disabled: true }),
            montoAjuste: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0)
        });
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            rutCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nombreCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            tipoPagoCod: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tipoPagoDesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true })
        });
    }
    PagosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.getDatosUser();
        this.sucursalUsuario = JSON.parse(localStorage.getItem('SucursalUsuario')).sus_scodsucursal;
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5___default.a);
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    PagosComponent.prototype.desmarcarSeleccionTabla = function (tabla) {
        if (tabla === 'protestos') {
            this.checkTituloProtestosSeleccionado = false;
            this.listadoProtestosVigentes.forEach(function (protestoVigente) { return protestoVigente.bCheck = false; });
        }
        else {
            this.checkTituloFacturasSeleccionado = false;
            this.listadoFacturasPendientes.forEach(function (facturaPendiente) { return facturaPendiente.bCheck = false; });
        }
    };
    PagosComponent.prototype.validarCabeceraFormulario = function () {
        var _validarCabeceraFormulario = true;
        var facturasSeleccionadas = false;
        var protestosSeleccionados = false;
        this.listadoFacturasPendientes.forEach(function (facturaPendiente) {
            if (facturaPendiente.bCheck !== undefined && facturaPendiente.bCheck === true) {
                facturasSeleccionadas = true;
            }
        });
        this.listadoProtestosVigentes.forEach(function (protestoVigente) {
            if (protestoVigente.bCheck !== undefined && protestoVigente.bCheck === true) {
                protestosSeleccionados = true;
            }
        });
        if (!facturasSeleccionadas && !protestosSeleccionados) {
            swal('Atención', 'Debe seleccionar alguna factura o protesto', 'error');
            _validarCabeceraFormulario = false;
        }
        if (this.forma.controls.tipoPagoCod.value === '') {
            swal('Atención', 'Debe seleccionar tipo de pago', 'error');
            _validarCabeceraFormulario = false;
        }
        if (this.forma.controls.rutCliente.value === '' || this.rutClienteSeleccionado === 0) {
            swal('Atención', 'Debe seleccionar un cliente', 'error');
            _validarCabeceraFormulario = false;
        }
        return _validarCabeceraFormulario;
    };
    PagosComponent.prototype.listarFacturasPendientes = function () {
        var _this = this;
        this.spinner.show();
        var request = {
            nRutCliente: this.rutClienteSeleccionado,
            nRutOperador: this.user.nrutoperador
        };
        this.suscripciones.push(this.cajaCobranzaService.listarFacturasPendientes(request)
            .subscribe(function (facturasPendientes) {
            if (facturasPendientes.facturas.length > 0) {
                _this.listadoFacturasPendientes = facturasPendientes.facturas;
                _this.listadoFacturasPendientes.forEach(function (facturaPendiente) { return _this.totalFacturas += facturaPendiente.cte_nsaldodocto; });
            }
            else {
                _this.listadoFacturasPendientes = [];
                _this.totalFacturas = 0;
                if (facturasPendientes.error.codError !== 0) {
                    _this.spinner.hide();
                    swal('Atención', 'Ha ocurrido un error inesperado!', facturasPendientes.error);
                }
                _this.spinner.hide();
            }
        }, function (error) {
            _this.spinner.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', error);
        }));
        this.spinner.hide();
    };
    PagosComponent.prototype.listarProtestosVigentes = function () {
        var _this = this;
        this.spinner.show();
        var request = {
            nRutCliente: this.rutClienteSeleccionado,
            nRutOperador: this.user.nrutoperador
        };
        this.suscripciones.push(this.cajaCobranzaService.listarProtestosVigentes(request)
            .subscribe(function (protestosVidentes) {
            if (protestosVidentes.protesto.length > 0) {
                _this.listadoProtestosVigentes = protestosVidentes.protesto;
                _this.listadoProtestosVigentes.forEach(function (protestoPendiente) { return _this.totalProtestos += protestoPendiente.pro_nsaldo; });
            }
            else {
                _this.listadoProtestosVigentes = [];
                _this.totalProtestos = 0;
                if (protestosVidentes.error.codError !== 0) {
                    _this.spinner.hide();
                    swal('Atención', 'Ha ocurrido un error inesperado!', protestosVidentes.error);
                }
                _this.spinner.hide();
            }
        }, function (error) {
            _this.spinner.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', error);
        }));
        this.spinner.hide();
    };
    PagosComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
    };
    PagosComponent.prototype.openModalClientes = function () {
        this.ultimoPopUpLevantado = 'clientes';
        var initialState = {
            titulo: 'Clientes',
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_clienteCajaCobranzaPopUp_clienteCajaCobranzaPopUp_component__WEBPACK_IMPORTED_MODULE_11__["ClienteCajaCobranzaPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    PagosComponent.prototype.openModalTiposPago = function () {
        if (this.rutClienteSeleccionado > 0) {
            this.ultimoPopUpLevantado = 'tiposPago';
            var initialState = {
                titulo: 'Tipos de Pago',
                origen: 'tipoPago',
                rutCliente: this.rutClienteSeleccionado
            };
            this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_12__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        }
        else {
            swal('Atención', 'Debe seleccionar un cliente', 'info');
        }
    };
    PagosComponent.prototype.validaRut = function () {
        this.rutClienteSeleccionado = 0;
        this.listadoFacturasPendientes = [];
        this.listadoProtestosVigentes = [];
        this.totalFacturas = 0;
        this.totalProtestos = 0;
        if (this.forma.controls.rutCliente.value === '') {
            this.forma.controls.rutCliente.setValue('');
            this.forma.controls.nombreCliente.setValue('');
        }
        else {
            this.rutValido = false;
            if (!this.utilService.isValidRUT(this.forma.controls.rutCliente.value)) {
                this.forma.controls.rutCliente.setValue('');
                this.forma.controls.nombreCliente.setValue('');
                swal('Atención', 'El RUT es incorrecto', 'error');
            }
            else {
                this.spinner.show();
                this.rutValido = true;
                this.rutClienteSeleccionado = parseInt(this.forma.controls.rutCliente.value
                    .substr(0, this.forma.controls.rutCliente.value.length - 1), 10);
                this.obtenerCliente(this.rutClienteSeleccionado);
                this.listarFacturasPendientes();
                this.listarProtestosVigentes();
                this.spinner.hide();
            }
        }
    };
    PagosComponent.prototype.obtenerCliente = function (rutCliente) {
        var _this = this;
        this.request.nombre = this.forma.controls.nombreCliente.value;
        this.request.rutCliente = rutCliente;
        this.request.rutOperador = this.authService.getDatosUser().nrutoperador;
        this.pedidosService.getClientesPedido(this.request)
            .subscribe(function (cliente) {
            if (cliente.buscaClientes) {
                if (cliente.buscaClientes.length === 0 && cliente.error.codError === 0) {
                    _this.forma.controls.rutCliente.setValue('');
                    _this.forma.controls.nombreCliente.setValue('');
                    swal('Atención', 'No existe cliente', 'info');
                }
                else if (cliente.error.codError !== 0) {
                    swal('Atención', "Ha ocurrido el siguiente error en obtenerCliente() => : " + cliente.error.msjError, 'error');
                }
                else {
                    _this.forma.controls.nombreCliente.setValue(cliente.buscaClientes[0].cli_snombre);
                }
            }
        }, function (error) {
            swal('Atención', "Ha ocurrido el siguiente error en obtenerCliente() => : " + error, 'error');
        });
    };
    PagosComponent.prototype.setData = function (resData) {
        if (resData.length !== 0) {
            this.inicializaControlesFormulario(this.formaAjusteDebito);
            this.inicializaControlesFormulario(this.formaChequeDia);
            this.inicializaControlesFormulario(this.formaChequeFecha);
            this.inicializaControlesFormulario(this.formaEfectivo);
            this.inicializaControlesFormulario(this.formaNotasCredito);
            this.formaChequeFecha.controls.fechaCh.setValue(this.utilService.dateToStringFormat(this.fechaActual));
            this.formaChequeDia.controls.fecha.setValue(this.utilService.dateToStringFormat(this.fechaActual));
            switch (this.ultimoPopUpLevantado) {
                case 'clientes':
                    this.forma.controls.rutCliente.setValue("" + resData.cli_nrutcliente + resData.cli_sdigverificador);
                    this.forma.controls.nombreCliente.setValue(resData.cli_snombre);
                    this.rutClienteSeleccionado = resData.cli_nrutcliente;
                    this.listarFacturasPendientes();
                    this.listarProtestosVigentes();
                    break;
                case 'tiposPago':
                    this.forma.controls.tipoPagoCod.setValue(resData.par_codparametro01);
                    this.forma.controls.tipoPagoDesc.setValue(resData.par_deslargo01);
                    this.formaTipoPago.controls.tipoPagoCod.setValue(resData.par_codparametro01);
                    this.formaTipoPago.controls.tipoPagoDesc.setValue(resData.par_deslargo01);
                    this.tipoPago = parseInt(resData.par_codparametro01, 10);
                    break;
                default:
                    break;
            }
        }
    };
    PagosComponent.prototype.inicializaControlesFormulario = function (formulario) {
        Object.keys(formulario.controls).forEach(function (control) {
            var typedControl = formulario.controls[control];
            typedControl.setValue(null);
        });
    };
    PagosComponent.prototype.validaCheckFacturas = function (facturaPendiente) {
        facturaPendiente.bCheck = !facturaPendiente.bCheck;
        if (facturaPendiente.bCheck) {
            this.desmarcarSeleccionTabla('protestos');
        }
        else {
        }
    };
    PagosComponent.prototype.validaCheckTituloFacturas = function () {
        this.checkTituloFacturasSeleccionado = !this.checkTituloFacturasSeleccionado;
        if (this.checkTituloFacturasSeleccionado) {
            this.listadoFacturasPendientes.forEach(function (facturaPendiente) { return facturaPendiente.bCheck = true; });
            this.desmarcarSeleccionTabla('protestos');
        }
        else {
            this.listadoFacturasPendientes.forEach(function (facturaPendiente) { return facturaPendiente.bCheck = false; });
        }
    };
    PagosComponent.prototype.validaCheckProtestos = function (protestoVigente) {
        protestoVigente.bCheck = !protestoVigente.bCheck;
        if (protestoVigente.bCheck) {
            this.desmarcarSeleccionTabla('facturas');
        }
        else {
        }
    };
    PagosComponent.prototype.validaCheckTituloProtestos = function () {
        this.checkTituloProtestosSeleccionado = !this.checkTituloProtestosSeleccionado;
        if (this.checkTituloProtestosSeleccionado) {
            this.listadoProtestosVigentes.forEach(function (protestoVigente) { return protestoVigente.bCheck = true; });
            this.desmarcarSeleccionTabla('facturas');
        }
        else {
            this.listadoProtestosVigentes.forEach(function (protestoVigente) { return protestoVigente.bCheck = false; });
        }
    };
    PagosComponent.prototype.canalizarSeleccionTipoPago = function () {
        if (this.validarCabeceraFormulario()) {
            switch (this.forma.controls.tipoPagoCod.value) {
                case '01':// 'Efectivo'
                    if (this.agregarEfectivo()) {
                        var informacionBancaria = new InformacionBancaria();
                        informacionBancaria.nMonto = this.formaEfectivo.controls.montoEfectivo.value;
                        informacionBancaria.nNumeroDocto = 0;
                        informacionBancaria.sCodBanco = '';
                        informacionBancaria.sNumCuenta = '';
                        this.cargarModeloCrearPagoCaja(informacionBancaria);
                    }
                    break;
                case '02':// 'Cheque al Dia'
                    if (this.agregarChequeDia()) {
                        var bcoCta = this.formaChequeDia.controls.cuenta.value.split('&');
                        var informacionBancaria = new InformacionBancaria();
                        informacionBancaria.nMonto = this.formaChequeDia.controls.montoChequeDia.value;
                        informacionBancaria.nNumeroDocto = this.formaChequeDia.controls.numCheque.value;
                        informacionBancaria.sCodBanco = bcoCta[0];
                        informacionBancaria.sNumCuenta = bcoCta[1];
                        this.cargarModeloCrearPagoCaja(informacionBancaria);
                    }
                    break;
                case '03':// 'Cheque a Fecha'
                    if (this.agregarChequeFecha()) {
                        var bcoCta = this.formaChequeDia.controls.cuenta.value.split('&');
                        var informacionBancaria = new InformacionBancaria();
                        informacionBancaria.nMonto = this.formaChequeFecha.controls.montoChequeFecha.value;
                        informacionBancaria.nNumeroDocto = this.formaChequeFecha.controls.numCheque.value;
                        informacionBancaria.sCodBanco = bcoCta[0];
                        informacionBancaria.sNumCuenta = bcoCta[1];
                        this.cargarModeloCrearPagoCaja(informacionBancaria);
                    }
                    break;
                case '04':// 'Nota de Credito':
                    if (this.agregarNotaCredito()) {
                        var informacionBancaria = new InformacionBancaria();
                        informacionBancaria.nMonto = this.formaNotasCredito.controls.montoNotaCredito.value;
                        informacionBancaria.nNumeroDocto = 0;
                        informacionBancaria.sCodBanco = '';
                        informacionBancaria.sNumCuenta = '';
                        this.cargarModeloCrearPagoCaja(informacionBancaria);
                    }
                    break;
                case '07':// 'Ajuste de Débitos'
                    if (this.agregarAjusteDebito()) {
                        var informacionBancaria = new InformacionBancaria();
                        informacionBancaria.nMonto = this.formaAjusteDebito.controls.montoAjuste.value;
                        informacionBancaria.nNumeroDocto = 0;
                        informacionBancaria.sCodBanco = '';
                        informacionBancaria.sNumCuenta = '';
                        this.cargarModeloCrearPagoCaja(informacionBancaria);
                    }
                    break;
                default:
                    break;
            }
        }
    };
    PagosComponent.prototype.determinarTablaSeleccionada = function () {
        var _determinarTablaSeleccionada = '';
        this.listadoFacturasPendientes.forEach(function (facturaPendiente) {
            if (facturaPendiente.bCheck !== null && facturaPendiente.bCheck !== undefined && facturaPendiente.bCheck === true) {
                return _determinarTablaSeleccionada = 'factura';
            }
        });
        this.listadoProtestosVigentes.forEach(function (protestoVigente) {
            if (protestoVigente.bCheck !== null && protestoVigente.bCheck !== undefined && protestoVigente.bCheck === true) {
                return _determinarTablaSeleccionada = 'protesto';
            }
        });
        return _determinarTablaSeleccionada;
    };
    PagosComponent.prototype.cargarModeloCrearPagoCaja = function (informacionBancaria) {
        var _arrayASRV_ItemPago = [];
        var _crearPagoCaja = new _models_crearPagoCaja__WEBPACK_IMPORTED_MODULE_13__["CrearPagoCaja"]();
        switch (this.determinarTablaSeleccionada()) {
            case 'factura':
                this.listadoFacturasPendientes.forEach(function (facturaPendiente) {
                    if (facturaPendiente.bCheck !== null && facturaPendiente.bCheck !== undefined && facturaPendiente.bCheck === true) {
                        var _objectASRV_ItemPago = new _models_asrvitem_pago__WEBPACK_IMPORTED_MODULE_14__["ASRVItemPago"]();
                        _objectASRV_ItemPago.nIdPago = facturaPendiente.fac_nidfactura;
                        _objectASRV_ItemPago.nMonto = informacionBancaria.nMonto;
                        _objectASRV_ItemPago.sIndProtesto = 'N';
                        _arrayASRV_ItemPago.push(_objectASRV_ItemPago);
                    }
                });
                _crearPagoCaja.nMonto = informacionBancaria.nMonto;
                _crearPagoCaja.nNumeroDocto = informacionBancaria.nNumeroDocto;
                _crearPagoCaja.nRunUsuarioCrea = Number(this.user.nrunusuario);
                _crearPagoCaja.nRutCliente = this.rutClienteSeleccionado;
                _crearPagoCaja.nRutOperador = Number(this.user.nrutoperador);
                _crearPagoCaja.sCodBanco = informacionBancaria.sCodBanco;
                _crearPagoCaja.sCodSucursal = this.sucursalUsuario;
                _crearPagoCaja.sCodTipoPago = this.forma.controls.tipoPagoCod.value;
                _crearPagoCaja.sFhoDocto = this.utilService.dateToStringDateFullFormat(new Date());
                _crearPagoCaja.sNumCuenta = informacionBancaria.sNumCuenta;
                _crearPagoCaja.aSRV_ItemPago = _arrayASRV_ItemPago;
                this.ejecutarServicio(_crearPagoCaja);
                break;
            case 'protesto':
                this.listadoProtestosVigentes.forEach(function (protestoVigente) {
                    if (protestoVigente.bCheck !== null && protestoVigente.bCheck !== undefined && protestoVigente.bCheck === true) {
                        var _objectASRV_ItemPago = new _models_asrvitem_pago__WEBPACK_IMPORTED_MODULE_14__["ASRVItemPago"]();
                        _objectASRV_ItemPago.nIdPago = protestoVigente.pro_nidprotesto;
                        _objectASRV_ItemPago.nMonto = informacionBancaria.nMonto;
                        _objectASRV_ItemPago.sIndProtesto = 'S';
                        _arrayASRV_ItemPago.push(_objectASRV_ItemPago);
                    }
                });
                _crearPagoCaja.nMonto = informacionBancaria.nMonto;
                _crearPagoCaja.nNumeroDocto = informacionBancaria.nNumeroDocto;
                _crearPagoCaja.nRunUsuarioCrea = Number(this.user.nrunusuario);
                _crearPagoCaja.nRutCliente = this.rutClienteSeleccionado;
                _crearPagoCaja.nRutOperador = Number(this.user.nrutoperador);
                _crearPagoCaja.sCodBanco = informacionBancaria.sCodBanco;
                _crearPagoCaja.sCodSucursal = this.sucursalUsuario;
                _crearPagoCaja.sCodTipoPago = this.forma.controls.tipoPagoCod.value;
                _crearPagoCaja.sFhoDocto = this.utilService.dateToStringDateFullFormat(new Date());
                _crearPagoCaja.sNumCuenta = informacionBancaria.sNumCuenta;
                _crearPagoCaja.aSRV_ItemPago = _arrayASRV_ItemPago;
                this.ejecutarServicio(_crearPagoCaja);
                break;
            default:
                break;
        }
    };
    PagosComponent.prototype.ejecutarServicio = function (objetoCreacion) {
        var _this = this;
        this.spinner.show();
        this.request = objetoCreacion;
        this.cajaCobranzaService.crearPagoCaja(this.request)
            .subscribe(function (pagoCaja) {
            _this.spinner.hide();
            if (pagoCaja) {
                if (pagoCaja.error.codError !== 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
                else {
                    _this.listarFacturasPendientes();
                    _this.listarProtestosVigentes();
                    _this.desmarcarSeleccionTabla('facturas');
                    _this.desmarcarSeleccionTabla('protestos');
                    swal('Atención', 'Se ha realizado el pago correctamente', 'success');
                }
            }
        }, function (error) {
            _this.spinner.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', error);
        });
    };
    PagosComponent.prototype.agregarEfectivo = function () {
        var _agregarEfectivo = true;
        if (this.formaEfectivo.controls.montoEfectivo.value === 0 || this.formaEfectivo.controls.montoEfectivo.value === null) {
            _agregarEfectivo = false;
            swal('Atención', 'El monto ingresado debe ser mayor a cero', 'warning');
        }
        return _agregarEfectivo;
    };
    PagosComponent.prototype.agregarChequeDia = function () {
        var _agregarChequeDia = true;
        if (this.formaChequeDia.valid) {
            $('*').removeClass('error-form');
            if (this.formaChequeDia.controls.montoChequeDia.value === 0 || this.formaChequeDia.controls.montoChequeDia.value === null) {
                _agregarChequeDia = false;
                swal('Atención', 'El monto ingresado debe ser mayor a cero', 'warning');
            }
        }
        else {
            swal('Atención', 'Debe ingresar todos los datos requeridos', 'warning');
            if (!this.formaChequeDia.controls.cuenta.valid) {
                $('[name=cuenta]').addClass('error-form');
            }
            else {
                $('[name=cuenta]').removeClass('error-form');
            }
            if (!this.formaChequeDia.controls.numCheque.valid) {
                $('[name=numCheque]').addClass('error-form');
            }
            else {
                $('[name=numCheque]').removeClass('error-form');
            }
        }
        return _agregarChequeDia;
    };
    PagosComponent.prototype.agregarChequeFecha = function () {
        var _agregarChequeFecha = true;
        if (this.formaChequeFecha.valid) {
            $('*').removeClass('error-form');
            if (this.formaChequeFecha.controls.montoChequeFecha.value === 0 || this.formaChequeFecha.controls.montoChequeFecha.value === null) {
                _agregarChequeFecha = false;
                swal('Atención', 'El monto ingresado debe ser mayor a cero', 'warning');
            }
        }
        else {
            swal('Atención', 'Debe ingresar todos los datos requeridos', 'warning');
            if (!this.formaChequeFecha.controls.cuenta.valid) {
                $('[name=cuenta]').addClass('error-form');
            }
            else {
                $('[name=cuenta]').removeClass('error-form');
            }
            if (!this.formaChequeFecha.controls.numCheque.valid) {
                $('[name=numCheque]').addClass('error-form');
            }
            else {
                $('[name=numCheque]').removeClass('error-form');
            }
        }
        return _agregarChequeFecha;
    };
    PagosComponent.prototype.agregarNotaCredito = function () {
        var _agregarNotaCredito = true;
        if (this.formaNotasCredito.valid) {
            $('*').removeClass('error-form');
        }
        else {
            swal('Atención', 'Debe ingresar todos los datos requeridos', 'warning');
            _agregarNotaCredito = false;
            if (!this.formaNotasCredito.controls.notaCredito.valid) {
                $('[name=notaCredito]').addClass('error-form');
            }
            else {
                $('[name=notaCredito]').removeClass('error-form');
            }
        }
        return _agregarNotaCredito;
    };
    PagosComponent.prototype.agregarAjusteDebito = function () {
        var _agregarAjusteDebito = true;
        if (this.formaAjusteDebito.controls.montoAjuste.value === 0 || this.formaAjusteDebito.controls.montoAjuste.value === null) {
            _agregarAjusteDebito = false;
            swal('Atención', 'El monto ingresado debe ser mayor a cero', 'warning');
        }
        else if (this.formaAjusteDebito.controls.montoAjuste.value > this.formaAjusteDebito.controls.aFavor.value) {
            _agregarAjusteDebito = false;
            swal('Atención', 'El monto ingresado sobrepasa el monto a favor', 'warning');
        }
        return _agregarAjusteDebito;
    };
    PagosComponent.prototype.validaCero = function (monto) {
        if (monto.value === '') {
            monto.value = 0;
        }
    };
    PagosComponent.prototype.validaTipoPago = function () {
        var _this = this;
        if (this.formaTipoPago.controls.tipoPagoCod.value === null) {
            this.tipoPago = null;
            this.formaTipoPago.controls.tipoPagoDesc.setValue('');
        }
        else {
            this.request = {
                'nIdRecorrido': 0,
                'nNumLocal': 0,
                'nRutCliente': this.rutClienteSeleccionado,
                'nRutOperador': this.user.nrutoperador,
                'opcion': 'PAGOS'
            };
            this.spinner.show();
            this.cajaCobranzaService.buscaTiposPago(this.request)
                .subscribe(function (data) {
                _this.spinner.hide();
                if (data) {
                    if (data.error.codError !== 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        var existeTipoPago = false;
                        _this.datos = data.tipoPago;
                        if (_this.datos.length > 0) {
                            for (var i in _this.datos) {
                                if (Number(_this.datos[i].par_codparametro01) === _this.formaTipoPago.controls.tipoPagoCod.value) {
                                    _this.formaTipoPago.controls.tipoPagoDesc.setValue(_this.datos[i].par_deslargo01);
                                    _this.tipoPago = parseInt(_this.datos[i].par_codparametro01, 10);
                                    existeTipoPago = true;
                                    break;
                                }
                            }
                            if (!existeTipoPago) {
                                _this.formaTipoPago.controls.tipoPagoCod.setValue(null);
                                _this.formaTipoPago.controls.tipoPagoDesc.setValue('');
                                _this.tipoPago = null;
                                swal('Atención', 'Forma de pago no existe o no está habilitado para utilizarla', 'warning');
                            }
                        }
                        else {
                            _this.formaTipoPago.controls.tipoPagoCod.setValue(null);
                            _this.formaTipoPago.controls.tipoPagoDesc.setValue('');
                            _this.tipoPago = null;
                            swal('Atención', 'Forma de pago no existe o no está habilitado para utilizarla', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.spinner.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', error);
            });
        }
    };
    PagosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagos',
            template: __webpack_require__(/*! ./pagos.component.html */ "./src/app/routes/cajaCobranza/pagos/pagos.component.html"),
            styles: [__webpack_require__(/*! ./pagos.component.scss */ "./src/app/routes/cajaCobranza/pagos/pagos.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_7__["ConsultasService"],
            _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_9__["CajaCobranzaService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_10__["PedidosService"]])
    ], PagosComponent);
    return PagosComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/partidasAbiertas/partidasAbiertas.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/partidasAbiertas/partidasAbiertas.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Partidas Abiertas</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Cliente</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <input formControlName=\"nRutCliente\" name=\"nRutCliente\" class=\"form-control\" type=\"text\"\r\n                            (change)=\"validaRut()\" appRutFormat placeholder=\"R.U.T\" formatRut />\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <input formControlName=\"nombreCliente\" name=\"nombreCliente\" class=\"form-control\" type=\"text\"\r\n                            placeholder=\"Nombre\" />\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCliente()\" title=\"Buscar\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Territorio</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <input formControlName=\"sCodTerritorio\" name=\"sCodTerritorio\" class=\"form-control\"\r\n                            type=\"text\" />\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <input formControlName=\"descTerritorio\" name=\"descTerritorio\" class=\"form-control\"\r\n                            type=\"text\" />\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        <button type=\"button\" class=\"btn btn-primary mr-1\" (click)=\"openModalTerritorios()\">\r\n                            <em class=\"icon-magnifier\" title=\"Buscar\"></em>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"limpiarTerritorio()\" title=\"Limpiar\">\r\n                            <em class=\"icon-trash\"></em>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Tipo Pago</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"tipoPago\" name=\"tipoPago\">\r\n                            <option *ngFor=\"let pago of tipoPagos\" [ngValue]=\"pago.par_codparametro01\">\r\n                                {{pago.par_deslargo01}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                    <button class=\"btn btn-oval btn-sm\" (click)=\"buscar()\" type=\"button\">Generar</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/partidasAbiertas/partidasAbiertas.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/partidasAbiertas/partidasAbiertas.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/partidasAbiertas/partidasAbiertas.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/partidasAbiertas/partidasAbiertas.component.ts ***!
  \************************************************************************************/
/*! exports provided: PartidasAbiertasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidasAbiertasComponent", function() { return PartidasAbiertasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _commonPopUp_zonasTodasPopUp_zonasTodasPopUp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../commonPopUp/zonasTodasPopUp/zonasTodasPopUp.component */ "./src/app/routes/commonPopUp/zonasTodasPopUp/zonasTodasPopUp.component.ts");
/* harmony import */ var _commonPopUp_rutAsociadoPopUp_rutAsociadoPopUp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../commonPopUp/rutAsociadoPopUp/rutAsociadoPopUp.component */ "./src/app/routes/commonPopUp/rutAsociadoPopUp/rutAsociadoPopUp.component.ts");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
/* harmony import */ var _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/consultaService/clientes.service */ "./src/app/core/consultaService/clientes.service.ts");
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
var PartidasAbiertasComponent = /** @class */ (function () {
    function PartidasAbiertasComponent(modalService, authService, loader, utilService, setearDatos, clientesService, excelService, cajaCobranzaService) {
        this.modalService = modalService;
        this.authService = authService;
        this.loader = loader;
        this.utilService = utilService;
        this.setearDatos = setearDatos;
        this.clientesService = clientesService;
        this.excelService = excelService;
        this.cajaCobranzaService = cajaCobranzaService;
        this.request = {};
        this.user = {};
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nRutCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nombreCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            sCodTerritorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            descTerritorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            tipoPago: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    PartidasAbiertasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.getDatosUser();
        this.subDataCliente = this.setearDatos.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.subDataGeo = this.setearDatos.datosGeo$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.getTiposPagoReversa();
    };
    PartidasAbiertasComponent.prototype.ngOnDestroy = function () {
        if (this.subDataCliente !== undefined) {
            this.subDataCliente.unsubscribe();
        }
        if (this.subDataGeo !== undefined) {
            this.subDataGeo.unsubscribe();
        }
    };
    PartidasAbiertasComponent.prototype.openModalTerritorios = function () {
        this.origen = 'territoriosPedidos';
        var initialState = {
            parametro: this.user.nrutoperador,
            origen: 'territoriosPedidos'
        };
        this.territoriosTodosModal = this.modalService.show(_commonPopUp_zonasTodasPopUp_zonasTodasPopUp_component__WEBPACK_IMPORTED_MODULE_8__["ZonasTodasPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    PartidasAbiertasComponent.prototype.openModalCliente = function () {
        this.origen = 'clientePedido';
        var initialState = {
            titulo: 'Cliente',
            origen: 'clientePedido'
        };
        this.clienteModal = this.modalService.show(_commonPopUp_rutAsociadoPopUp_rutAsociadoPopUp_component__WEBPACK_IMPORTED_MODULE_9__["RutAsociadoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    PartidasAbiertasComponent.prototype.validaRut = function () {
        var _this = this;
        if (this.forma.controls.nRutCliente.value === '') {
            return;
        }
        if (!this.utilService.isValidRUT(this.forma.controls.nRutCliente.value)) {
            this.forma.controls.nRutCliente.setValue('');
            this.forma.controls.nombreCliente.setValue('');
            swal('Atención', 'El RUT es incorrecto', 'error');
            return true;
        }
        else {
            this.loader.show();
            var rutCliente = this.forma.controls.nRutCliente.value;
            rutCliente = rutCliente.substring(0, rutCliente.length - 1);
            var request = {
                rutClientes: Number(rutCliente),
                rutOperador: Number(this.user.nrutoperador),
            };
            this.clientesService.getDetallesClientes(request)
                .subscribe(function (data) {
                _this.loader.hide();
                if (data) {
                    if (data.error.codError !== 0) {
                        _this.forma.controls.nRutCliente.setValue('');
                        _this.forma.controls.nombreCliente.setValue('');
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                        return;
                    }
                    if (data.cliente.length === 0 && data.error.codError === 0) {
                        _this.forma.controls.nRutCliente.setValue('');
                        _this.forma.controls.nombreCliente.setValue('');
                        swal('Atención', 'No se encontraron resultados', 'info');
                    }
                    else {
                        var cliente = data.cliente[0];
                        _this.forma.controls.nRutCliente.setValue(cliente.cli_nrutcliente + cliente.cli_sdigverificador);
                        _this.forma.controls.nombreCliente.setValue(cliente.cli_snombre);
                    }
                }
                else {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
            }, function (error) {
                _this.loader.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                _this.forma.controls.nRutCliente.setValue('');
                _this.forma.controls.nombreCliente.setValue('');
            });
            return false;
        }
    };
    PartidasAbiertasComponent.prototype.getTiposPagoReversa = function () {
        var _this = this;
        this.cajaCobranzaService.getTiposPagoReversa()
            .subscribe(function (data) {
            if (data) {
                if (data.tipoPago.length === 0 && data.error.codError === 0) {
                    swal('Atención', 'No se encontraron resultados', 'info');
                }
                else {
                    _this.tipoPagos = data.tipoPago;
                    _this.tipoPagos.unshift({
                        par_codparametro01: '',
                        par_deslargo01: '(Ninguno)'
                    });
                }
            }
        }, function (error) {
        });
    };
    PartidasAbiertasComponent.prototype.buscar = function () {
        var _this = this;
        this.loader.show();
        var request = {
            nRutCliente: this.forma.controls.nRutCliente.value === '' ? 0 : Number(this.forma.controls.nRutCliente.value.slice(0, -1)),
            nRutOperador: Number(this.user.nrutoperador),
            sCodTerritorio: this.forma.controls.sCodTerritorio.value === '' ? null : this.forma.controls.sCodTerritorio.value,
            sCodTipoCobro: this.forma.controls.tipoPago.value === '' ? null : this.forma.controls.tipoPago.value
        };
        this.cajaCobranzaService.getPartidasAbiertas(request)
            .subscribe(function (data) {
            _this.loader.hide();
            if (data) {
                if (data.error.codError !== 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    return;
                }
                if (data.partidasAbiertas.length === 0 && data.error.codError === 0) {
                    swal('Atención', 'No se encontraron documentos protestados', 'info');
                }
                else {
                    // Generar Excel
                    _this.construirReporte(data);
                }
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.loader.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    PartidasAbiertasComponent.prototype.setData = function (resData) {
        if (resData) {
            switch (this.origen) {
                case 'clientePedido': {
                    this.forma.controls.nRutCliente.setValue(resData.cli_nrutcliente + resData.cli_sdigverificador);
                    this.forma.controls.nombreCliente.setValue(resData.cli_snombre);
                    break;
                }
                case 'territoriosPedidos': {
                    this.forma.controls.sCodTerritorio.setValue(resData.ter_scodterritorio);
                    this.forma.controls.descTerritorio.setValue(resData.ter_sdesterritorio);
                    break;
                }
            }
        }
    };
    PartidasAbiertasComponent.prototype.limpiarTerritorio = function () {
        this.forma.controls.sCodTerritorio.setValue('');
        this.forma.controls.descTerritorio.setValue('');
    };
    PartidasAbiertasComponent.prototype.construirReporte = function (data) {
        var _this = this;
        var headerExcel = [
            'RUT CLIENTE',
            'Nº LOCAL',
            'NOMBRE CLIENTE',
            'TIPO DOCUMENTO',
            'OBSERVACION',
            'Nº DOCUMENTO',
            'SALDO',
            'CONDICION DE PAGO',
            'FECHA EMISION',
            'FECHA VENCIMIENTO REAL',
            'TRAMO VCTO',
            'NOMBRE ZONA',
            'CODIGO SUPERVISOR',
            'NOMBRE SUPERVISOR',
            'CODIGO TERRITORIO',
            'NOMBRE TERRITORIO'
        ];
        var dataExcel = [];
        data.partidasAbiertas.forEach(function (e) {
            dataExcel.push([
                e.rutCliente,
                e.numLocal,
                e.nomcliente,
                e.codtipodocto,
                '',
                e.numDocto,
                e.saldo,
                e.desformapago,
                _this.convertirFecha(e.fechaemision),
                _this.convertirFecha(e.fechavencimiento),
                e.tramo,
                e.deszona,
                e.ter_scodsupervisor,
                e.sup_snombre,
                e.codterritorio,
                e.desterritorio
            ]);
        });
        this.excelService.generateExcel('Partidas Abiertas', headerExcel, dataExcel, this.utilService.dateToLocalStringFormat(new Date()));
    };
    PartidasAbiertasComponent.prototype.convertirFecha = function (fecha) {
        if (fecha) {
            var regexp = /(\d{4})(\d{2})(\d{2})$/;
            var tag = fecha.match(regexp);
            return tag[3] + '/' + tag[2] + '/' + tag[1];
        }
        return '';
    };
    PartidasAbiertasComponent.prototype.isNumberKey = function (evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    PartidasAbiertasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partidas-abiertas',
            template: __webpack_require__(/*! ./partidasAbiertas.component.html */ "./src/app/routes/cajaCobranza/partidasAbiertas/partidasAbiertas.component.html"),
            styles: [__webpack_require__(/*! ./partidasAbiertas.component.scss */ "./src/app/routes/cajaCobranza/partidasAbiertas/partidasAbiertas.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_6__["ConsultasService"],
            _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_11__["ClientesService"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"],
            _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_10__["CajaCobranzaService"]])
    ], PartidasAbiertasComponent);
    return PartidasAbiertasComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/partidasAbiertasTransportista/partidasAbiertasTransportista.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/partidasAbiertasTransportista/partidasAbiertasTransportista.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Partidas Abiertas Transportista</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Transportista</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <input appRutFormat formControlName=\"rutTransportista\" name=\"rutTransportista\"\r\n                            class=\"form-control\" type=\"text\" (change)=\"validaRut()\" appRutFormat placeholder=\"R.U.T\"\r\n                            formatRut />\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <input formControlName=\"nombreTransportista\" name=\"nombreTransportista\" class=\"form-control\"\r\n                            type=\"text\" placeholder=\"Nombre\" />\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                    <button class=\"btn btn-oval btn-sm\" (click)=\"buscar()\" type=\"button\">Generar</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/partidasAbiertasTransportista/partidasAbiertasTransportista.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/partidasAbiertasTransportista/partidasAbiertasTransportista.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/partidasAbiertasTransportista/partidasAbiertasTransportista.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/partidasAbiertasTransportista/partidasAbiertasTransportista.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: PartidasAbiertasTransportistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidasAbiertasTransportistaComponent", function() { return PartidasAbiertasTransportistaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _commonPopUp_buscaTransportistaPopUp_buscaTransportistaPopUp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../commonPopUp/buscaTransportistaPopUp/buscaTransportistaPopUp.component */ "./src/app/routes/commonPopUp/buscaTransportistaPopUp/buscaTransportistaPopUp.component.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
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
var PartidasAbiertasTransportistaComponent = /** @class */ (function () {
    function PartidasAbiertasTransportistaComponent(modalService, utilService, cajaCobranzaService, authService, consultasService, loader, excelService, administracionOperativaService) {
        this.modalService = modalService;
        this.utilService = utilService;
        this.cajaCobranzaService = cajaCobranzaService;
        this.authService = authService;
        this.consultasService = consultasService;
        this.loader = loader;
        this.excelService = excelService;
        this.administracionOperativaService = administracionOperativaService;
        this.user = {};
        this.request = {};
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            rutTransportista: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }),
            nombreTransportista: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
        });
    }
    PartidasAbiertasTransportistaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.getDatosUser();
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    PartidasAbiertasTransportistaComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
    };
    PartidasAbiertasTransportistaComponent.prototype.openModal = function () {
        var initialState = {
            titulo: 'Transportista',
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscaTransportistaPopUp_buscaTransportistaPopUp_component__WEBPACK_IMPORTED_MODULE_8__["BuscaTransportistaPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    PartidasAbiertasTransportistaComponent.prototype.validarForm = function () {
        if (this.forma.controls.rutTransportista.value === '' || this.forma.controls.rutTransportista.value === undefined) {
            swal('Atención', 'Campo Transportista es requerido', 'info');
            return true;
        }
        return false;
    };
    PartidasAbiertasTransportistaComponent.prototype.validaRut = function () {
        var _this = this;
        if (this.forma.controls.rutTransportista.value === '') {
            return;
        }
        if (!this.utilService.isValidRUT(this.forma.controls.rutTransportista.value)) {
            this.forma.controls.rutTransportista.setValue('');
            this.forma.controls.nombreTransportista.setValue('');
            swal('Atención', 'El RUT es incorrecto', 'error');
            return true;
        }
        else {
            this.loader.show();
            var rutTransportista = this.forma.controls.rutTransportista.value;
            rutTransportista = rutTransportista.substring(0, rutTransportista.length - 1);
            var request = {
                rutClientes: Number(rutTransportista),
                rutOperador: Number(this.user.nrutoperador),
            };
            this.loader.hide();
            this.request.rutTransportista = Number(rutTransportista);
            this.request.rutOperador = Number(this.user.nrutoperador);
            this.loader.show();
            this.administracionOperativaService.getTransportista(this.request)
                .subscribe(function (data) {
                _this.loader.hide();
                if (data) {
                    if (data.buscaTransportistaDTO.length > 0 && data.error.codError === 0) {
                        var transportista = data.buscaTransportistaDTO[0];
                        _this.forma.controls.rutTransportista.setValue(transportista.tra_nruttransportista + transportista.tra_sdigitoverificador);
                        _this.forma.controls.nombreTransportista.setValue(transportista.tra_srazonsocial);
                    }
                    else if (data.buscaTransportistaDTO.length === 0 && data.error.codError === 0) {
                        _this.forma.controls.rutTransportista.setValue('');
                        _this.forma.controls.nombreTransportista.setValue('');
                        swal('Atención', 'No se encontraron resultados!', 'error');
                    }
                    else {
                        _this.forma.controls.rutTransportista.setValue('');
                        _this.forma.controls.nombreTransportista.setValue('');
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                }
                else {
                    _this.forma.controls.rutTransportista.setValue('');
                    _this.forma.controls.nombreTransportista.setValue('');
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
            }, function (error) {
                _this.forma.controls.rutTransportista.setValue('');
                _this.forma.controls.nombreTransportista.setValue('');
                _this.bsModalRef.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    PartidasAbiertasTransportistaComponent.prototype.buscar = function () {
        var _this = this;
        if (this.validarForm()) {
            return;
        }
        this.loader.show();
        var request = {
            nRutOperador: Number(this.user.nrutoperador),
            nRutTransportista: this.forma.controls.rutTransportista.value === '' ? 0 : Number(this.forma.controls.rutTransportista.value.slice(0, -1)),
            sCodTipoCobro: null
        };
        this.cajaCobranzaService.getPartidasAbiertasTransportista(request)
            .subscribe(function (data) {
            _this.loader.hide();
            if (data) {
                if (data.error.codError !== 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    return;
                }
                if (data.partidadsAbiertas.length === 0 && data.error.codError === 0) {
                    swal('Atención', 'No se encontraron documentos protestados', 'info');
                }
                else {
                    // Generar Excel
                    _this.construirReporte(data);
                }
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.loader.hide();
        });
    };
    PartidasAbiertasTransportistaComponent.prototype.setData = function (data) {
        if (data) {
            this.forma.controls.rutTransportista.setValue(data.tra_nruttransportista + data.tra_sdigitoverificador);
            this.forma.controls.nombreTransportista.setValue(data.tra_srazonsocial);
        }
    };
    PartidasAbiertasTransportistaComponent.prototype.construirReporte = function (data) {
        var _this = this;
        var headerExcel = [
            'RUT TRANSPORTISTA',
            'NOMBRE TRANSPORTISTA',
            'TIPO DOCUMENTO',
            'OBSERVACION',
            'Nº DOCUMENTO',
            'SALDO',
            'CONDICION DE PAGO',
            'FECHA EMISION',
            'FECHA VENCIMIENTO REAL',
        ];
        var dataExcel = [];
        data.partidadsAbiertas.forEach(function (e) {
            dataExcel.push([
                e.ruttransportista,
                e.nomtransportista,
                e.codtipodocto,
                '',
                e.numdocto,
                e.saldo,
                e.desformapago,
                _this.convertirFecha(e.fechaemision),
                _this.convertirFecha(e.fechavencimiento),
            ]);
        });
        var nombreArchivo = "Partidas Abiertas " + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        var titulo = 'Reporte Partidas Abiertas';
        var fechas = [
            "Fecha: " + this.utilService.dateToLocalStringFormat(new Date()),
        ];
        this.excelService.buildReportCajaCobranza(titulo, headerExcel, dataExcel, fechas, nombreArchivo);
    };
    PartidasAbiertasTransportistaComponent.prototype.convertirFecha = function (fecha) {
        if (fecha) {
            var regexp = /(\d{4})(\d{2})(\d{2})$/;
            var tag = fecha.match(regexp);
            return tag[3] + '/' + tag[2] + '/' + tag[1];
        }
        return '';
    };
    PartidasAbiertasTransportistaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partidas-abiertas-transportista',
            template: __webpack_require__(/*! ./partidasAbiertasTransportista.component.html */ "./src/app/routes/cajaCobranza/partidasAbiertasTransportista/partidasAbiertasTransportista.component.html"),
            styles: [__webpack_require__(/*! ./partidasAbiertasTransportista.component.scss */ "./src/app/routes/cajaCobranza/partidasAbiertasTransportista/partidasAbiertasTransportista.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_6__["CajaCobranzaService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_9__["ConsultasService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_10__["AdministracionOperativaService"]])
    ], PartidasAbiertasTransportistaComponent);
    return PartidasAbiertasTransportistaComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/protestos/protestos.component.html":
/*!************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/protestos/protestos.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Ingresar Protesto</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Cliente</label>\r\n                    <div class=\"col-sm-5 pl-0\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input formatRut formControlName=\"rutCliente\" name=\"rutCliente\" class=\"form-control\" type=\"text\" (change)=\"validaRut()\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"nombreCliente\" name=\"nombreCliente\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                          </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 lh-11 control-label\">Número Documento</label>\r\n                    <div class=\"col-sm-5 pl-0\">\r\n                        <div class=\"col-sm-4\">\r\n                            <!-- <input formControlName=\"nroDocto\" class=\"form-control\" type=\"text\" /> -->\r\n                            <span name=\"nroDocto\" class=\"form-control pad-sup-2 bg-disabled\">{{nroDocto}}</span>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalDocumentos()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                          </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 lh-11 control-label\">Cuenta Corriente</label>\r\n                    <div class=\"col-sm-8 pl-0\">\r\n                        <div class=\"col-sm-5\">\r\n                            <input formControlName=\"cuentaCte\" name=\"cuentaCte\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Banco</label>\r\n                    <div class=\"col-sm-8 pl-0\">\r\n                        <div class=\"col-sm-5\">\r\n                            <input formControlName=\"banco\" name=\"banco\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 lh-11 control-label\">Fecha Vencimiento</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaVto\" name=\"fechaVto\" type=\"date\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 lh-11 control-label\">Monto</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <!-- <input class=\"form-control w-110 text-right\" formControlName=\"monto\" name=\"monto\" type=\"number\" /> -->\r\n                        <span class=\"form-control w-110 text-right pad-sup-2 bg-disabled\">{{monto | number:'':'es'}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Motivo</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"motivo\" name=\"motivo\">\r\n                                <option value=\"\" selected>(Ninguno)</option>\r\n                                <option *ngFor=\"let motivo of motivos\" [ngValue]=\"motivo.par_codparametro01\">{{motivo.par_deslargo01}}</option>\r\n                          </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Observación</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <textarea class=\"form-control\" formControlName=\"observacion\" name=\"observacion\" cols=\"50\" rows=\"5\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"row pull-left mb-4\">\r\n            <div class=\"col-sm-3 mr-1\">\r\n                <button class=\"btn btn-oval btn-sm\" type=\"button\" (click)=\"guardar()\">Guardar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/protestos/protestos.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/protestos/protestos.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/protestos/protestos.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/protestos/protestos.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProtestosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtestosComponent", function() { return ProtestosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _commonPopUp_clienteCajaCobranzaPopUp_clienteCajaCobranzaPopUp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../commonPopUp/clienteCajaCobranzaPopUp/clienteCajaCobranzaPopUp.component */ "./src/app/routes/commonPopUp/clienteCajaCobranzaPopUp/clienteCajaCobranzaPopUp.component.ts");
/* harmony import */ var _commonPopUp_documentosClientePopUp_documentosClientePopUp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../commonPopUp/documentosClientePopUp/documentosClientePopUp.component */ "./src/app/routes/commonPopUp/documentosClientePopUp/documentosClientePopUp.component.ts");
/* harmony import */ var _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/consultaService/pedidos.service */ "./src/app/core/consultaService/pedidos.service.ts");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
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
var ProtestosComponent = /** @class */ (function () {
    function ProtestosComponent(utilService, authService, modalService, consultasService, cargador, pedidosService, cajaCobranzaService) {
        this.utilService = utilService;
        this.authService = authService;
        this.modalService = modalService;
        this.consultasService = consultasService;
        this.cargador = cargador;
        this.pedidosService = pedidosService;
        this.cajaCobranzaService = cajaCobranzaService;
        this.request = {};
        this.origen = '';
        this.datos = [];
        this.motivos = [];
        this.monto = 0;
        this.nroDocto = '';
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            rutCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            nombreCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            nroDocto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cuentaCte: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            banco: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            fechaVto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            monto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: 0, disabled: true }),
            motivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            observacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            idGarantia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ProtestosComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5___default.a);
        this.cargaCombos();
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    ProtestosComponent.prototype.ngOnDestroy = function () {
        if (this.subData != undefined) {
            this.subData.unsubscribe();
        }
    };
    ProtestosComponent.prototype.cargaCombos = function () {
        this.motivos = this.authService.getParametrosMotivoProtesto();
    };
    ProtestosComponent.prototype.openModal = function () {
        this.origen = 'cliente';
        var initialState = {
            titulo: 'Clientes',
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_clienteCajaCobranzaPopUp_clienteCajaCobranzaPopUp_component__WEBPACK_IMPORTED_MODULE_9__["ClienteCajaCobranzaPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    ProtestosComponent.prototype.openModalDocumentos = function () {
        this.origen = 'documento';
        var initialState = {
            titulo: 'Documentos Clientes',
            cli_nrutcliente: this.forma.controls.rutCliente.value
            // origen: 'linea'
        };
        if (this.forma.controls.rutCliente.value === '') {
            swal('Atención', 'Debe Seleccionar Cliente', 'warning');
        }
        else {
            this.bsModalRef = this.modalService.show(_commonPopUp_documentosClientePopUp_documentosClientePopUp_component__WEBPACK_IMPORTED_MODULE_10__["DocumentosClientePopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        }
    };
    ProtestosComponent.prototype.validaRut = function () {
        var _this = this;
        if (this.forma.controls.rutCliente.value === '') {
            this.forma.controls.rutCliente.setValue('');
            this.forma.controls.nombreCliente.setValue('');
            this.forma.controls.nroDocto.setValue('');
            this.forma.controls.cuentaCte.setValue('');
            this.forma.controls.banco.setValue('');
            this.forma.controls.fechaVto.setValue('');
            this.forma.controls.monto.setValue(0);
            this.forma.controls.observacion.setValue('');
        }
        else {
            this.rutValido = false;
            if (!this.utilService.isValidRUT(this.forma.controls.rutCliente.value)) {
                this.forma.controls.rutCliente.setValue('');
                this.forma.controls.nombreCliente.setValue('');
                swal('Atención', 'El RUT es incorrecto', 'error');
            }
            else {
                this.rutValido = true;
                this.request.rutCliente = parseInt(this.forma.controls.rutCliente.value.substr(0, this.forma.controls.rutCliente.value.length - 1));
                this.request.rutOperador = this.authService.getDatosUser().nrutoperador;
                this.cargador.show();
                this.pedidosService.getClientesPedido(this.request)
                    .subscribe(function (data) {
                    _this.cargador.hide();
                    if (data) {
                        if (data.error.codError != 0) {
                            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                        }
                        else {
                            _this.datos = data.buscaClientes;
                            if (_this.datos.length > 0) {
                                _this.forma.controls.rutCliente.setValue(_this.datos[0].cli_nrutcliente + "-" + _this.datos[0].cli_sdigverificador);
                                _this.forma.controls.nombreCliente.setValue(_this.datos[0].cli_snombre);
                            }
                            else {
                                _this.forma.controls.rutCliente.setValue('');
                                _this.forma.controls.nombreCliente.setValue('');
                                swal('Atención', 'No Existe Cliente', 'warning');
                            }
                        }
                    }
                }, function (error) {
                    _this.cargador.hide();
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                });
            }
        }
    };
    ProtestosComponent.prototype.guardar = function () {
        var _this = this;
        console.log(this.forma);
        if (this.forma.valid) {
            $('*').removeClass('error-form');
            this.request.nIdGarantia = this.forma.controls.idGarantia.value;
            this.request.nRunUsuario = parseInt(this.authService.getDatosUser().nrunusuario);
            this.request.nRutCliente = parseInt(this.forma.controls.rutCliente.value.substr(0, this.forma.controls.rutCliente.value.length - 1));
            this.request.nRutOperador = parseInt(this.authService.getDatosUser().nrutoperador);
            this.request.sCodMotivo = this.forma.controls.motivo.value;
            this.request.sObservacion = this.forma.controls.observacion.value === '' ? null : this.forma.controls.observacion.value;
            console.log('request guradar protesto', this.request);
            this.cargador.show();
            this.cajaCobranzaService.creaProtesto(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                if (data) {
                    if (data.error.codError != 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        swal('Atención', 'Se ha creado correctamente el Protesto', 'success');
                        _this.forma.controls.nroDocto.setValue('');
                        _this.forma.controls.cuentaCte.setValue('');
                        _this.forma.controls.banco.setValue('');
                        _this.forma.controls.fechaVto.setValue('');
                        _this.forma.controls.monto.setValue(0);
                        _this.forma.controls.motivo.setValue('');
                        _this.forma.controls.observacion.setValue('');
                        _this.monto = 0;
                        _this.nroDocto = '';
                    }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
        else {
            swal('Atención', 'Debe ingresar todos los datos requeridos', 'warning');
            if (!this.forma.controls.rutCliente.valid) {
                $('[name=rutCliente]').addClass('error-form');
            }
            else {
                $('[name=rutCliente]').removeClass('error-form');
            }
            if (!this.forma.controls.nroDocto.valid) {
                $('[name=nroDocto]').addClass('error-form');
            }
            else {
                $('[name=nroDocto]').removeClass('error-form');
            }
            if (!this.forma.controls.motivo.valid) {
                $('[name=motivo]').addClass('error-form');
            }
            else {
                $('[name=motivo]').removeClass('error-form');
            }
        }
    };
    ProtestosComponent.prototype.setData = function (resData) {
        console.log(resData);
        console.log('origen', this.origen);
        if (resData != 0) {
            switch (this.origen) {
                case 'cliente': {
                    this.forma.controls.rutCliente.setValue(resData.cli_nrutcliente + "-" + resData.cli_sdigverificador);
                    this.forma.controls.nombreCliente.setValue(resData.cli_snombre);
                    this.forma.controls.nroDocto.setValue('');
                    this.forma.controls.cuentaCte.setValue('');
                    this.forma.controls.banco.setValue('');
                    this.forma.controls.fechaVto.setValue('');
                    this.forma.controls.monto.setValue(0);
                    this.forma.controls.motivo.setValue('');
                    this.forma.controls.observacion.setValue('');
                    break;
                }
                case 'documento': {
                    this.forma.controls.nroDocto.setValue(resData.gar_niddocto);
                    this.forma.controls.cuentaCte.setValue(resData.gar_snumcuenta);
                    this.forma.controls.banco.setValue(resData.banco);
                    this.forma.controls.fechaVto.setValue(this.utilService.dateStringServiceToStringFormat(resData.gar_dfhovencimiento));
                    this.forma.controls.monto.setValue(resData.gar_nmonto);
                    this.forma.controls.idGarantia.setValue(resData.gar_nidgarantia);
                    this.monto = this.forma.controls.monto.value;
                    this.nroDocto = this.forma.controls.nroDocto.value;
                    break;
                }
            }
        }
    };
    ProtestosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-protestos',
            template: __webpack_require__(/*! ./protestos.component.html */ "./src/app/routes/cajaCobranza/protestos/protestos.component.html"),
            styles: [__webpack_require__(/*! ./protestos.component.scss */ "./src/app/routes/cajaCobranza/protestos/protestos.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_8__["ConsultasService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_11__["PedidosService"],
            _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_12__["CajaCobranzaService"]])
    ], ProtestosComponent);
    return ProtestosComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/resumenCuentasCorrientes/resumenCuentasCorrientes.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/resumenCuentasCorrientes/resumenCuentasCorrientes.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Resumen Cuentas Corrientes</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/resumenCuentasCorrientes/resumenCuentasCorrientes.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/resumenCuentasCorrientes/resumenCuentasCorrientes.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/resumenCuentasCorrientes/resumenCuentasCorrientes.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/resumenCuentasCorrientes/resumenCuentasCorrientes.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ResumenCuentasCorrientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumenCuentasCorrientesComponent", function() { return ResumenCuentasCorrientesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
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
var ResumenCuentasCorrientesComponent = /** @class */ (function () {
    function ResumenCuentasCorrientesComponent(excelService, utilService, cajaCobranzaService, authService, cargador) {
        this.excelService = excelService;
        this.utilService = utilService;
        this.cajaCobranzaService = cajaCobranzaService;
        this.authService = authService;
        this.cargador = cargador;
        this.user = {};
    }
    ResumenCuentasCorrientesComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getDatosUser();
        this.generateExcel();
    };
    ResumenCuentasCorrientesComponent.prototype.ngOnDestroy = function () { };
    ResumenCuentasCorrientesComponent.prototype.generateExcel = function () {
        var _this = this;
        this.cargador.show();
        var request = {
            nRutOperador: Number(this.user.nrutoperador)
        };
        this.cajaCobranzaService.getResumenCuentaCorriente(request).subscribe(function (data) {
            _this.cargador.hide();
            if (data) {
                if (data.error.codError !== 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    return;
                }
                if (data.resumenCTACTE.length === 0 && data.error.codError === 0) {
                    swal('Atención', 'No se encontraron resultados', 'info');
                }
                else {
                    // Generar Excel
                    _this.construirReporte(data);
                }
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    ResumenCuentasCorrientesComponent.prototype.construirReporte = function (data) {
        var headerExcel = [
            'ZONA',
            'TERRITORIO',
            'CORPORATIVO',
            'DIVISIONAL',
            'TOTAL',
        ];
        var dataExcel = [];
        data.resumenCTACTE.forEach(function (e) {
            dataExcel.push([
                e.ter_scodzona,
                e.ter_sdesterritorio,
                e.corporativo,
                e.divisional,
                e.corporativo + e.divisional,
            ]);
        });
        var additionalDataHeader = [];
        var otrosMontos = [];
        data.otrosMontos.forEach(function (e) {
            otrosMontos.push([
                e.smc_sdestipodocto,
                e.saldo,
            ]);
        });
        var corporativoPorcentaje = 0;
        var divPorcentaje = 0;
        if (data.nMontoVencidoCorp !== 0 && data.nMontoTotalCorp !== 0) {
            corporativoPorcentaje = data.nMontoVencidoCorp / data.nMontoTotalCorp;
        }
        else {
            corporativoPorcentaje = 0;
        }
        if (corporativoPorcentaje !== 0) {
            corporativoPorcentaje = corporativoPorcentaje * 100;
        }
        else {
            corporativoPorcentaje = 0;
        }
        if (data.nMontoVencidoDivi !== 0 && data.nMontoTotalDivi !== 0) {
            divPorcentaje = data.nMontoVencidoDivi / data.nMontoTotalDivi;
        }
        else {
            divPorcentaje = 0;
        }
        if (divPorcentaje !== 0) {
            divPorcentaje = divPorcentaje * 100;
        }
        else {
            divPorcentaje = 0;
        }
        additionalDataHeader = [
            {
                headerExcel: [
                    'DIAS CARTERA'
                ],
                dataExcel: [],
            },
            {
                headerExcel: [
                    '',
                    'DIAS CARTERA',
                    'PORCENTAJE VENCIDO',
                ],
                dataExcel: [
                    [
                        'CORPORATIVO',
                        data.nDiasCarteraCorp,
                        corporativoPorcentaje.toFixed(1) + ' %',
                    ],
                    [
                        'DIVISIONAL',
                        data.nDiasCarteraDivi,
                        divPorcentaje.toFixed(1) + ' %',
                    ],
                ],
            },
            {
                headerExcel: [],
                dataExcel: [],
            },
            {
                headerExcel: [
                    'SALDO OTROS MOVIMIENTOS',
                ],
                dataExcel: [],
            },
            {
                headerExcel: [
                    'TIPO',
                    'MONTO',
                ],
                dataExcel: otrosMontos,
            },
            {
                headerExcel: [],
                dataExcel: [],
            },
        ];
        var saldosPorVencer = [];
        data.saldoPorVencer.forEach(function (e) {
            saldosPorVencer.push([
                e.ter_scodzona,
                e.ter_sdesterritorio,
                e.corporativo,
                e.divisional,
                e.corporativo + e.divisional
            ]);
        });
        saldosPorVencer.push([]);
        var saldosVencidos = [];
        data.saldosVencidos.forEach(function (e) {
            saldosVencidos.push([
                e.ter_scodzona,
                e.ter_sdesterritorio,
                e.rg1_corporativo,
                e.rg1_divisional,
                e.rg2_corporativo,
                e.rg2_divisional,
                e.rg3_corporativo,
                e.rg3_divisional,
                e.rg4_corporativo,
                e.rg4_divisional,
                e.rg5_corporativo,
                e.rg5_divisional,
                e.rg6_corporativo,
                e.rg6_divisional,
            ]);
        });
        var additionalDataBody = [
            {
                headerExcel: [
                    'SALDOS POR VENCER FACTURAS'
                ],
                dataExcel: [],
            },
            {
                headerExcel: [
                    'ZONA',
                    'TERRITORIO',
                    'CORPORATIVO',
                    'DIVISIONAL',
                    'MONTO'
                ],
                dataExcel: saldosPorVencer,
            },
            {
                headerExcel: [
                    'VENCIDO REAL FACTURAS'
                ],
                dataExcel: [],
            },
            {
                headerExcel: [
                    'ZONA',
                    'TERRITORIO',
                    '1-5 DIAS CORPORATIVO',
                    '1-5 DIAS DIVISIONAL',
                    '6-10 DIAS CORPORATIVO',
                    '6-10 DIAS DIVISIONAL',
                    '11-20 DIAS CORPORATIVO',
                    '11-20 DIAS DIVISIONAL',
                    '21-30 DIAS CORPORATIVO',
                    '21-30 DIAS DIVISIONAL',
                    '31-60 DIAS CORPORATIVO',
                    '31-60 DIAS DIVISIONAL',
                    '61 Ó MÁS DIAS CORPORATIVO',
                    '61 Ó MÁS DIAS DIVISIONAL',
                ],
                dataExcel: saldosVencidos,
            },
        ];
        var nombreArchivo = "Resumen_CtasCtes_" + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        var titulo = 'Reporte Resumen Cuentas Corrientes';
        var fechas = [
            "Fecha: " + this.utilService.dateToLocalStringFormat(new Date()),
        ];
        this.excelService.buildReportCajaCobranza(titulo, headerExcel, dataExcel, fechas, nombreArchivo, null, additionalDataBody, additionalDataHeader);
    };
    ResumenCuentasCorrientesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resumen-cuentas-corrientes',
            template: __webpack_require__(/*! ./resumenCuentasCorrientes.component.html */ "./src/app/routes/cajaCobranza/resumenCuentasCorrientes/resumenCuentasCorrientes.component.html"),
            styles: [__webpack_require__(/*! ./resumenCuentasCorrientes.component.scss */ "./src/app/routes/cajaCobranza/resumenCuentasCorrientes/resumenCuentasCorrientes.component.scss")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_core_excel_excel_service__WEBPACK_IMPORTED_MODULE_2__["ExcelService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_4__["CajaCobranzaService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], ResumenCuentasCorrientesComponent);
    return ResumenCuentasCorrientesComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/resumenDocumentosCobranza/resumenDocumentosCobranza.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/resumenDocumentosCobranza/resumenDocumentosCobranza.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Resumen Documentos Cobranza</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Fecha de Caja</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <input #fecha class=\"form-control  text-center\" formControlName=\"fecha\" name=\"fecha\" type=\"date\" style=\"line-height: 1\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                    <button class=\"btn btn-oval btn-sm mr-1\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n                    <button class=\"btn btn-oval btn-sm\" [routerLink]=\"['/cajaCobranza/informesCaja']\" type=\"button\">Cancelar</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/resumenDocumentosCobranza/resumenDocumentosCobranza.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/resumenDocumentosCobranza/resumenDocumentosCobranza.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/resumenDocumentosCobranza/resumenDocumentosCobranza.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/resumenDocumentosCobranza/resumenDocumentosCobranza.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ResumenDocumentosCobranzaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumenDocumentosCobranzaComponent", function() { return ResumenDocumentosCobranzaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8__);
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
var ResumenDocumentosCobranzaComponent = /** @class */ (function () {
    function ResumenDocumentosCobranzaComponent(cajaCobranzaService, authService, cargador, utilService, excelService, decimalPipe) {
        this.cajaCobranzaService = cajaCobranzaService;
        this.authService = authService;
        this.cargador = cargador;
        this.utilService = utilService;
        this.excelService = excelService;
        this.decimalPipe = decimalPipe;
        this.user = {};
        this.fechaActual = new Date();
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    ResumenDocumentosCobranzaComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getDatosUser();
        this.forma.controls.fecha.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8___default.a);
    };
    ResumenDocumentosCobranzaComponent.prototype.ngOnDestroy = function () { };
    ResumenDocumentosCobranzaComponent.prototype.buscar = function () {
        var _this = this;
        if (this.validarFormulario()) {
            return;
        }
        this.cargador.show();
        var request = {
            nRutOperador: this.user.nrutoperador,
            sFecha: (this.forma.controls.fecha.value).replace(/-/g, ''),
            sCodSucursal: null,
        };
        this.cajaCobranzaService.buscaRptResumenLiquidacion(request)
            .subscribe(function (data) {
            _this.cargador.hide();
            if (data) {
                if (data.error.codError !== 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    return;
                }
                if (data.resumen.length === 0 && data.error.codError === 0) {
                    // Generar Excel
                    _this.construirReporte(data);
                }
                else {
                    // Generar Excel
                    _this.construirReporte(data);
                }
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    ResumenDocumentosCobranzaComponent.prototype.validarFormulario = function () {
        if (this.forma.controls.fecha.value === '') {
            swal('Atención', 'Campo fecha requerido', 'error');
            return true;
        }
        return false;
    };
    ResumenDocumentosCobranzaComponent.prototype.construirReporte = function (data) {
        var headerExcel = [
            'Sucursal',
            'Id Recorrido',
            'Efectivo',
            'Cheque al día',
            'Cheque a fecha',
            'Aplicación Cré',
            'Crédito Directo',
            'Totales',
        ];
        var dataExcel = [];
        data.resumen.forEach(function (e) {
            var total = e.efectivo + e.cheque + e.chequefecha + e.creditoaplicado + e.creditodirecto;
            dataExcel.push([
                e.suc_sdescsucursal,
                e.rlr_nidrecorrido,
                e.efectivo,
                e.cheque,
                e.chequefecha,
                e.creditoaplicado,
                e.creditodirecto,
                total,
            ]);
        });
        var additionalData = [];
        if (data.otros.length > 0) {
            var dataAdicional_1 = [];
            data.otros.forEach(function (e) {
                dataAdicional_1.push([
                    e.rpa_sdestipopago,
                    '',
                    e.nmontopago,
                    e.nmontopago
                ]);
            });
            dataAdicional_1.push([]);
            var subtotal = data.otros.reduce(function (acc, obj) { return acc + obj.nmontopago; }, 0);
            var total = data.otros.reduce(function (acc, obj) { return acc + obj.nmontopago; }, 0);
            dataAdicional_1.push([
                'Total',
                0,
                this.decimalPipe.transform(subtotal, '', 'es'),
                this.decimalPipe.transform(total, '', 'es'),
            ]);
            var item = {
                headerExcel: [
                    'Forma Pago',
                    'Liquidación',
                    'Otros Pagos',
                    'SubTotal',
                ],
                dataExcel: dataAdicional_1,
            };
            additionalData.push(item);
        }
        var nombreArchivo = "Resumen_Liquidacion_" + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        var titulo = 'Informe de Caja Resumen Liquidación Recaudación';
        var fechas = [
            "Fecha de Caja: " + this.utilService.dateToLocalStringFormat(new Date(this.forma.controls.fecha.value.replace(/-/g, '\/'))),
        ];
        this.excelService.buildReportCajaCobranza(titulo, headerExcel, dataExcel, fechas, nombreArchivo, null, additionalData);
    };
    ResumenDocumentosCobranzaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resumen-documentos-cobranza',
            template: __webpack_require__(/*! ./resumenDocumentosCobranza.component.html */ "./src/app/routes/cajaCobranza/resumenDocumentosCobranza/resumenDocumentosCobranza.component.html"),
            styles: [__webpack_require__(/*! ./resumenDocumentosCobranza.component.scss */ "./src/app/routes/cajaCobranza/resumenDocumentosCobranza/resumenDocumentosCobranza.component.scss")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_2__["CajaCobranzaService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]])
    ], ResumenDocumentosCobranzaComponent);
    return ResumenDocumentosCobranzaComponent;
}());



/***/ }),

/***/ "./src/app/routes/cajaCobranza/resumenProtestos/resumenProtestos.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/resumenProtestos/resumenProtestos.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Resumen Protestos</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Fecha Desde</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <input #fechaDesde class=\"form-control  text-center\" formControlName=\"fechaDesde\"\r\n                            name=\"fechaDesde\" type=\"date\" style=\"line-height: 1\" [max]='max'\r\n                            (ngModelChange)=\"fechaDesdeChanged($event)\" />\r\n                    </div>\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Fecha Hasta</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <input #fechaHasta class=\"form-control text-center\" formControlName=\"fechaHasta\"\r\n                            name=\"fechaHasta\" type=\"date\" style=\"line-height: 1\" [min]='min'\r\n                            (ngModelChange)=\"fechaHastaChanged($event)\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Estado</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"estado\" name=\"estado\">\r\n                            <option *ngFor=\"let estado of estados\" [ngValue]=\"estado.par_codparametro01\">\r\n                                {{estado.par_deslargo01}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-md-1 col-lg-1 control-label\">Cliente</label>\r\n                    <div class=\"col-sm-10 col-md-3 col-lg-3\">\r\n                        <input appRutFormat formControlName=\"rutCliente\" name=\"rutCliente\" class=\"form-control\"\r\n                            placeholder=\"RUT\" type=\"text\" (change)=\"validaRut()\" formatRut/>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <input formControlName=\"nombreCliente\" name=\"nombreCliente\" class=\"form-control\" type=\"text\"\r\n                            placeholder=\"Nombre\" />\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCliente()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\">\r\n                    <button class=\"btn btn-oval btn-sm mr-1\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n                    <button class=\"btn btn-oval btn-sm\" [routerLink]=\"['/cajaCobranza/informesCaja']\"\r\n                        type=\"button\">Cancelar</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/cajaCobranza/resumenProtestos/resumenProtestos.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/resumenProtestos/resumenProtestos.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/cajaCobranza/resumenProtestos/resumenProtestos.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/routes/cajaCobranza/resumenProtestos/resumenProtestos.component.ts ***!
  \************************************************************************************/
/*! exports provided: ResumenProtestosPagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumenProtestosPagoComponent", function() { return ResumenProtestosPagoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _commonPopUp_rutAsociadoPopUp_rutAsociadoPopUp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commonPopUp/rutAsociadoPopUp/rutAsociadoPopUp.component */ "./src/app/routes/commonPopUp/rutAsociadoPopUp/rutAsociadoPopUp.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/consultaService/clientes.service */ "./src/app/core/consultaService/clientes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13__);
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
var ResumenProtestosPagoComponent = /** @class */ (function () {
    function ResumenProtestosPagoComponent(modalService, cajaCobranzaService, utilService, authService, cargador, setearDatos, clientesService, router, decimalPipe, excelService) {
        this.modalService = modalService;
        this.cajaCobranzaService = cajaCobranzaService;
        this.utilService = utilService;
        this.authService = authService;
        this.cargador = cargador;
        this.setearDatos = setearDatos;
        this.clientesService = clientesService;
        this.router = router;
        this.decimalPipe = decimalPipe;
        this.excelService = excelService;
        this.datos = [];
        this.user = {};
        this.fechaActual = new Date();
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            rutCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            nombreCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            fechaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fechaHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    ResumenProtestosPagoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.getDatosUser();
        this.subDataCliente = this.setearDatos.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.forma.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.forma.controls.fechaHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.min = '1900-01-01';
        this.max = this.utilService.dateToStringFormat(this.fechaActual);
        this.getEstados();
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13___default.a);
    };
    ResumenProtestosPagoComponent.prototype.ngOnDestroy = function () {
        if (this.subDataCliente !== undefined) {
            this.subDataCliente.unsubscribe();
        }
    };
    ResumenProtestosPagoComponent.prototype.openModalCliente = function () {
        this.origen = 'clientePedido';
        var initialState = {
            titulo: 'Cliente',
            origen: 'clientePedido'
        };
        this.clienteModal = this.modalService.show(_commonPopUp_rutAsociadoPopUp_rutAsociadoPopUp_component__WEBPACK_IMPORTED_MODULE_5__["RutAsociadoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    ResumenProtestosPagoComponent.prototype.setData = function (resData) {
        if (resData) {
            switch (this.origen) {
                case 'clientePedido': {
                    this.forma.controls.rutCliente.setValue(resData.cli_nrutcliente + '' + resData.cli_sdigverificador);
                    this.forma.controls.nombreCliente.setValue(resData.cli_snombre);
                    break;
                }
            }
        }
    };
    ResumenProtestosPagoComponent.prototype.getEstados = function () {
        var _this = this;
        var request = {
            parcodparametro01: '',
            parcodparametro02: '',
            parcodparametro03: '',
            parcodparametro04: '',
            parcodparametro05: '',
            parnumparametro: 45
        };
        this.setearDatos.getParametros(request)
            .subscribe(function (data) {
            if (data) {
                if (data.general.length === 0 && data.error.codError === 0) {
                    swal('Atención', 'No se encontraron resultados', 'info');
                }
                else {
                    _this.estados = data.general;
                    _this.estados.unshift({
                        par_codparametro01: '',
                        par_deslargo01: '(Todos)'
                    });
                }
            }
        }, function (error) {
        });
    };
    ResumenProtestosPagoComponent.prototype.buscar = function () {
        var _this = this;
        if (this.validarForm()) {
            return;
        }
        this.cargador.show();
        var request = {
            nRutOperador: Number(this.user.nrutoperador),
            dFhoProtesto1: (this.forma.controls.fechaDesde.value).replace(/-/g, ''),
            dFhoProtesto2: (this.forma.controls.fechaHasta.value).replace(/-/g, ''),
            sCodEstado: this.forma.controls.estado.value === '' ? null : this.forma.controls.estado.value,
            nRutCliente: this.forma.controls.rutCliente.value === '' ? 0 : Number(this.forma.controls.rutCliente.value.slice(0, -1)),
        };
        this.cajaCobranzaService.buscaRptBuscaProtestos(request)
            .subscribe(function (data) {
            _this.cargador.hide();
            if (data) {
                if (data.error.codError !== 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    return;
                }
                if (data.protesto.length === 0 && data.error.codError === 0) {
                    _this.construirReporte(data);
                    //swal('Atención', 'No se encontraron resumen protestos', 'info');
                }
                else {
                    //console.log(data);
                    // Generar Excel
                    _this.construirReporte(data);
                }
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    ResumenProtestosPagoComponent.prototype.validarForm = function () {
        if (this.forma.controls.fechaDesde.value !== '' && this.forma.controls.fechaHasta.value !== '') {
            if (new Date(this.forma.controls.fechaDesde.value) > new Date(this.forma.controls.fechaHasta.value)) {
                swal('Atención', 'Fecha Desde debe ser menor a la Fecha Hasta!', 'error');
                return true;
            }
            if (new Date(this.forma.controls.fechaHasta.value) < new Date(this.forma.controls.fechaDesde.value)) {
                swal('Atención', 'Fecha Hasta debe ser mayor a la Fecha Desde!', 'error');
                return true;
            }
        }
        return false;
    };
    ResumenProtestosPagoComponent.prototype.fechaDesdeChanged = function (fecha) {
        this.min = fecha;
    };
    ResumenProtestosPagoComponent.prototype.fechaHastaChanged = function (fecha) {
        this.max = fecha;
    };
    ResumenProtestosPagoComponent.prototype.validaRut = function () {
        var _this = this;
        if (this.forma.controls.rutCliente.value === '') {
            return;
        }
        if (!this.utilService.isValidRUT(this.forma.controls.rutCliente.value)) {
            this.forma.controls.rutCliente.setValue('');
            this.forma.controls.nombreCliente.setValue('');
            swal('Atención', 'El RUT es incorrecto', 'error');
            return true;
        }
        else {
            this.cargador.show();
            var rutCliente = this.forma.controls.rutCliente.value;
            rutCliente = rutCliente.substring(0, rutCliente.length - 1);
            var request = {
                rutClientes: Number(rutCliente),
                rutOperador: Number(this.user.nrutoperador),
            };
            this.clientesService.getDetallesClientes(request)
                .subscribe(function (data) {
                if (data) {
                    if (data.error.codError !== 0) {
                        _this.forma.controls.rutCliente.setValue('');
                        _this.forma.controls.nombreCliente.setValue('');
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                        return;
                    }
                    if (data.cliente.length === 0 && data.error.codError === 0) {
                        _this.forma.controls.rutCliente.setValue('');
                        _this.forma.controls.nombreCliente.setValue('');
                        swal('Atención', 'No se encontraron resultados', 'info');
                    }
                    else {
                        var cliente = data.cliente[0];
                        _this.forma.controls.rutCliente.setValue(cliente.cli_nrutcliente + '' + cliente.cli_sdigverificador);
                        _this.forma.controls.nombreCliente.setValue(cliente.cli_snombre);
                    }
                }
                else {
                    _this.forma.controls.rutCliente.setValue('');
                    _this.forma.controls.nombreCliente.setValue('');
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
                _this.cargador.hide();
            }, function (error) {
                _this.forma.controls.rutCliente.setValue('');
                _this.forma.controls.nombreCliente.setValue('');
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                _this.cargador.hide();
            });
            return false;
        }
    };
    ResumenProtestosPagoComponent.prototype.construirReporte = function (data) {
        var _this = this;
        var headerExcel = [
            'Nº Protesto',
            'Fecha Prot.',
            'Rut Cliente',
            'Nom Cliente',
            'Banco',
            'Nº Documento',
            'Motivo',
            'Obs.',
            'Monto',
            'Estado',
            'Fecha Liber.',
        ];
        var dataExcel = [];
        if (data.protesto.length > 0) {
            var sorted = data.protesto.sort(function (x, y) {
                return x.pro_dfhoprotesto - y.pro_dfhoprotesto;
            });
            sorted.forEach(function (e) {
                var rut = e.cli_nrutcliente + '' + e.cli_sdigverificador;
                dataExcel.push([
                    e.pro_nidprotesto,
                    _this.utilService.dateStringServiceToReverseStringFormat(e.pro_dfhoprotesto),
                    _this.utilService.formateaRut(rut),
                    e.cli_snombre,
                    e.nombanco,
                    e.gar_niddocto,
                    e.nommotivo,
                    e.pro_sobservacion,
                    _this.decimalPipe.transform(e.gar_nmonto, '', 'es'),
                    e.estado,
                    _this.utilService.dateStringServiceToReverseStringFormat(e.pro_dfholiberacion.toString()),
                ]);
            });
            var total = data.protesto.reduce(function (acc, obj) { return acc + obj.gar_nmonto; }, 0);
            dataExcel.push([
                '',
                'Total Protestos',
                data.protesto.length,
                this.decimalPipe.transform(total, '', 'es'),
            ]);
        }
        else {
            dataExcel.push([
                'NO SE ENCONTRARON DOCUMENTOS PROTESTADOS'
            ]);
        }
        var nombreArchivo = "Resumen_Protestos_" + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        var titulo = 'Informe de Caja Resumen de Protestos';
        var fechas = [
            "Fecha Desde: " + this.utilService.dateToLocalStringFormat(new Date(this.forma.controls.fechaDesde.value.replace(/-/g, '\/'))),
            "Fecha Hasta: " + this.utilService.dateToLocalStringFormat(new Date(this.forma.controls.fechaHasta.value.replace(/-/g, '\/'))),
        ];
        this.excelService.buildReportCajaCobranza(titulo, headerExcel, dataExcel, fechas, nombreArchivo);
    };
    ResumenProtestosPagoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resumen-protestos',
            template: __webpack_require__(/*! ./resumenProtestos.component.html */ "./src/app/routes/cajaCobranza/resumenProtestos/resumenProtestos.component.html"),
            styles: [__webpack_require__(/*! ./resumenProtestos.component.scss */ "./src/app/routes/cajaCobranza/resumenProtestos/resumenProtestos.component.scss")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_2__["CajaCobranzaService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_9__["ConsultasService"],
            _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_10__["ClientesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_12__["ExcelService"]])
    ], ResumenProtestosPagoComponent);
    return ResumenProtestosPagoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=cajaCobranza-cajaCobranza-module.js.map