(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedidos-pedidos-module"],{

/***/ "./src/app/routes/pedidos/cierreProceso/cierreProceso.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/routes/pedidos/cierreProceso/cierreProceso.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Cierre de Proceso</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"col-sm-6\">\r\n                        <label class=\"col-sm-4 control-label\">Fecha Actual O2C</label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input formControlName=\"fpr_dfhoproceso\" name=\"fpr_dfhoproceso\" class=\"form-control\" type=\"date\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <button class=\"btn btn-oval btn-sm\" (click)=\"cierraProceso()\" type=\"button\">Finalizar O2C</button>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/pedidos/cierreProceso/cierreProceso.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/routes/pedidos/cierreProceso/cierreProceso.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/pedidos/cierreProceso/cierreProceso.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/routes/pedidos/cierreProceso/cierreProceso.component.ts ***!
  \*************************************************************************/
/*! exports provided: CierreProcesoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CierreProcesoComponent", function() { return CierreProcesoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/pedidos.service */ "./src/app/core/consultaService/pedidos.service.ts");
/* harmony import */ var _commonPopUp_validacionUsuarioPedidoPopUp_validacionUsuarioPedidoPopUp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../commonPopUp/validacionUsuarioPedidoPopUp/validacionUsuarioPedidoPopUp.component */ "./src/app/routes/commonPopUp/validacionUsuarioPedidoPopUp/validacionUsuarioPedidoPopUp.component.ts");
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
var CierreProcesoComponent = /** @class */ (function () {
    function CierreProcesoComponent(fb, modalService, authService, loader, router, utilService, pedidosService) {
        this.modalService = modalService;
        this.authService = authService;
        this.loader = loader;
        this.router = router;
        this.utilService = utilService;
        this.pedidosService = pedidosService;
        this.request = {};
        this.user = {};
        this.datos = [];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fpr_dfhoproceso: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true })
        });
    }
    CierreProcesoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.getDatosUser();
        this.subData = this.pedidosService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.fechaActualProceso();
    };
    CierreProcesoComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
    };
    CierreProcesoComponent.prototype.fechaActualProceso = function () {
        var _this = this;
        this.request.nRutOperador = Number(this.user.nrutoperador);
        this.request.sCodProceso = 'O2C';
        this.pedidosService.getFechaProceso(this.request)
            .subscribe(function (data) {
            _this.loader.hide();
            if (data) {
                if (data.error.codError !== 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
                else {
                    _this.datos = data.fechaProceso;
                    if (_this.datos.length > 0) {
                        console.log(_this.datos);
                        _this.forma.controls.fpr_dfhoproceso.setValue(_this.utilService.dateStringServiceToStringFormat(_this.datos[0].fpr_dfhoproceso));
                        console.log(_this.forma.controls.fpr_dfhoproceso.value);
                    }
                    else {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                }
            }
        }, function (error) {
            _this.loader.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    CierreProcesoComponent.prototype.cierraProceso = function () {
        this.origen = 'validacionProceso';
        var initialState = {
            titulo: 'Validación de Usuario',
            origen: 'validacionProceso'
        };
        this.validacionModal = this.modalService.show(_commonPopUp_validacionUsuarioPedidoPopUp_validacionUsuarioPedidoPopUp_component__WEBPACK_IMPORTED_MODULE_8__["ValidacionUsuarioPedidoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    CierreProcesoComponent.prototype.setData = function (resData) {
        console.log(resData);
        if (resData !== 0) {
            switch (this.origen) {
                case 'validacionProceso': {
                    console.log('CERRO');
                    this.fechaActualProceso();
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    CierreProcesoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cierreProceso',
            template: __webpack_require__(/*! ./cierreProceso.component.html */ "./src/app/routes/pedidos/cierreProceso/cierreProceso.component.html"),
            styles: [__webpack_require__(/*! ./cierreProceso.component.scss */ "./src/app/routes/pedidos/cierreProceso/cierreProceso.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_7__["PedidosService"]])
    ], CierreProcesoComponent);
    return CierreProcesoComponent;
}());



/***/ }),

/***/ "./src/app/routes/pedidos/confirmacionRecorridos/confirmacionRecorridos.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/pedidos/confirmacionRecorridos/confirmacionRecorridos.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Confirmar Recorrido</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"col-sm-2 p-0\">\r\n                    </div>\r\n                    <div class=\"col-sm-4 m-0 pull-right\">\r\n                        <div class=\"col-sm-4 p-0\">\r\n                            <button name=\"espera\" class=\"btn btn-oval btn\" type=\"button\" (click)=\"preConfirmacion()\">Confirmar</button>\r\n                        </div>\r\n                        <div class=\"col-sm-4 p-0\">\r\n                            <button name=\"espera\" class=\"btn btn-oval btn\" type=\"button\" (click)=\"preReasignar()\">Reasignar</button>\r\n                        </div>\r\n                        <div class=\"col-sm-4 p-0\">\r\n                            <button name=\"espera\" class=\"btn btn-oval btn\" type=\"button\" (click)=\"preDevolver()\">Devolver</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-hover\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th width=\"250\" class=\"align-middle\">Recorrido</th>\r\n                                    <th width=\"120\" class=\"align-middle\">Ruta</th>\r\n                                    <th width=\"60\" class=\"align-right\">Kg</th>\r\n                                    <th width=\"70\" class=\"align-right\">Volumen</th>\r\n                                    <th width=\"50\" class=\"align-right\">Pedidos</th>\r\n                                    <th width=\"80\" class=\"align-right\">Valor</th>\r\n                                    <th width=\"60\" class=\"align-right\">Tot.Prod</th>\r\n                                    <th width=\"130\" class=\"align-middle\">Chofer</th>\r\n                                    <th width=\"40\" class=\"align-middle\">R.R</th>\r\n                                    <th colspan=\"2\" width=\"40\" class=\"align-middle\">Ver</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody *ngFor=\"let recorrido of pedidosCompleto\">\r\n                                <tr>\r\n                                    <td nowrap>({{recorrido.rec_nidrecorrido}}) {{recorrido.rec_sdesrecorrido}}</td>\r\n                                    <td>{{recorrido.srutas}}</td>\r\n                                    <td>{{recorrido.nkilos}}</td>\r\n                                    <td>{{recorrido.nvolumen}}</td>\r\n                                    <td>{{recorrido.ncantpedidos}}</td>\r\n                                    <td>${{recorrido.nprecioneto}}</td>\r\n                                    <td>{{recorrido.ncantarticulos}}</td>\r\n                                    <td width=\"130\">{{recorrido.cho_snombre}} {{recorrido.cho_sapepaterno}} {{recorrido.cho_sapematerno}}</td>\r\n                                    <td *ngIf=\"!recorrido.icono\">\r\n                                        <span class=\"table-remove\">\r\n                                            <a class=\"text\">\r\n                                                <em class=\"fa fa-check-square\"></em>\r\n                                            </a>\r\n                                        </span>\r\n                                    </td>\r\n                                    <td *ngIf=\"recorrido.icono\">\r\n                                        <span class=\"table-remove\">\r\n                                            <a class=\"text\">\r\n                                                <em class=\"fa fa-close\"></em>\r\n                                            </a>\r\n                                        </span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"checkbox c-checkbox needsclick\">\r\n                                            <label class=\"needsclick\">\r\n                                                    <input class=\"needsclick\" type=\"checkbox\"\r\n                                                        (change)=\"validaCheckPack(recorrido)\" [checked]=\"recorrido.bCheck\" />\r\n                                                    <span class=\"fa fa-check\"></span>\r\n                                                </label>\r\n                                        </div>\r\n                                    </td>\r\n\r\n                                    <td>\r\n                                        <span class=\"table-remove\">\r\n                                                <a class=\"text\" (click)=\"mostrar(recorrido.rec_nidrecorrido)\">\r\n                                                    <em class=\"fa fa-search\"></em>\r\n                                                </a>\r\n                                            </span>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td colspan=\"8\" style=\"padding-left:30px;\">\r\n                                        <div class=\"hidden\" #stepgroup1 [id]=\"recorrido.rec_nidrecorrido\">\r\n                                            <div id=\"collapse01\">\r\n                                                <div class=\"table-responsive\">\r\n                                                    <table class=\"table table-hover\">\r\n                                                        <thead>\r\n                                                            <tr>\r\n                                                                <th width=\"220\" class=\"align-middle\">Ruta</th>\r\n                                                                <th width=\"60\" class=\"align-right\">Kg</th>\r\n                                                                <th width=\"70\" class=\"align-right\">Volumen</th>\r\n                                                                <th width=\"40\" class=\"align-right\">Pedidos</th>\r\n                                                                <th width=\"80\" class=\"align-right\">Valor</th>\r\n                                                                <th width=\"40\" class=\"align-middle\">R.R</th>\r\n                                                                <th width=\"100\" class=\"align-left\">Ver</th>\r\n                                                            </tr>\r\n                                                        </thead>\r\n                                                        <tbody *ngFor=\"let rutas of recorrido.rutasDefinitivas\">\r\n                                                            <tr>\r\n                                                                <td nowrap>({{rutas.rre_scodruta}}) {{rutas.rre_sdesruta}}</td>\r\n                                                                <td nowrap>{{rutas.rre_nkilos}}</td>\r\n                                                                <td nowrap>{{rutas.rre_nvolumen}}</td>\r\n                                                                <td nowrap>{{rutas.rre_ncantpedidos}}</td>\r\n                                                                <td nowrap>${{rutas.rre_nprecioneto}}</td>\r\n                                                                <td *ngIf=\"!rutas.icono\">\r\n                                                                    <span class=\"table-remove\">\r\n                                                                            <a class=\"text\">\r\n                                                                                <em class=\"fa fa-check-square\"></em>\r\n                                                                            </a>\r\n                                                                        </span>\r\n                                                                </td>\r\n                                                                <td *ngIf=\"rutas.icono\">\r\n                                                                    <span class=\"table-remove\">\r\n                                                                            <a class=\"text\">\r\n                                                                                <em class=\"fa fa-close\"></em>\r\n                                                                            </a>\r\n                                                                        </span>\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <span class=\"table-remove\">\r\n                                                                            <a class=\"text\" (click)=\"mostrarDos(rutas.rre_nidruta)\">\r\n                                                                                <em class=\"fa fa-search\"></em>\r\n                                                                            </a>\r\n                                                                        </span>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td colspan=\"8\" style=\"padding-left:20px;\">\r\n                                                                    <div class=\"hidden\" #stepgroup2 [id]=\"rutas.rre_nidruta\">\r\n                                                                        <div id=\"collapse02\">\r\n                                                                            <div class=\"table-responsive\">\r\n                                                                                <table class=\"table table-hover\">\r\n                                                                                    <thead>\r\n                                                                                        <tr>\r\n                                                                                            <th width=\"80\" class=\"align-middle\">Id Pedido</th>\r\n                                                                                            <th width=\"80\" class=\"align-right\">Rut</th>\r\n                                                                                            <th width=\"80\" class=\"align-middle\">Cliente</th>\r\n                                                                                            <th width=\"60\" class=\"align-right\">Rel.Com</th>\r\n                                                                                            <th width=\"60\" class=\"align-right\">Local</th>\r\n                                                                                            <th width=\"90\" class=\"align-middle\">Direcci&oacute;n</th>\r\n                                                                                            <th width=\"90\" class=\"align-middle\">Comuna</th>\r\n                                                                                            <th width=\"60\" class=\"align-right\">Kg</th>\r\n                                                                                            <th width=\"70\" class=\"align-right\">Volumen</th>\r\n                                                                                            <th width=\"80\" class=\"align-right\">Valor</th>\r\n                                                                                            <th width=\"40\" class=\"align-middle\">R.R</th>\r\n                                                                                            <th width=\"20\" class=\"align-middle\">Ver</th>\r\n                                                                                        </tr>\r\n                                                                                    </thead>\r\n                                                                                    <tbody *ngFor=\"let pedidos of rutas.pedidosDefinitivos\">\r\n                                                                                        <tr>\r\n                                                                                            <td nowrap>{{pedidos.ped_nidpedido}}</td>\r\n                                                                                            <td nowrap>{{pedidos.cli_nrutcliente + pedidos.cli_sdigverificador | rut}}</td>\r\n                                                                                            <td nowrap>{{pedidos.cli_snombre}}</td>\r\n                                                                                            <td nowrap>{{pedidos.ped_scodrelacioncomer}}</td>\r\n                                                                                            <td nowrap>{{pedidos.loc_nnumlocal}}</td>\r\n                                                                                            <td nowrap>{{pedidos.dic_sdireccion}}</td>\r\n                                                                                            <td nowrap>{{pedidos.dic_sdescomuna}}</td>\r\n                                                                                            <td nowrap>{{pedidos.ped_nkilos}}</td>\r\n                                                                                            <td nowrap>{{pedidos.ped_nkilos}}</td>\r\n                                                                                            <td nowrap>${{pedidos.ped_nprecio}}</td>\r\n                                                                                            <td *ngIf=\"!pedidos.icono\">\r\n                                                                                                <span class=\"table-remove\">\r\n                                                                                                    <a class=\"text\">\r\n                                                                                                        <em class=\"fa fa-check-square\"></em>\r\n                                                                                                    </a>\r\n                                                                                                </span>\r\n                                                                                            </td>\r\n                                                                                            <td *ngIf=\"pedidos.icono\">\r\n                                                                                                <span class=\"table-remove\">\r\n                                                                                                    <a class=\"text\">\r\n                                                                                                        <em class=\"fa fa-close\"></em>\r\n                                                                                                    </a>\r\n                                                                                                </span>\r\n                                                                                            </td>\r\n                                                                                            <td>\r\n                                                                                                <span class=\"table-remove\">\r\n                                                                                                        <a class=\"text\" (click)=\"editarPedido(pedidos)\">\r\n                                                                                                                <em class=\"fa fa-pencil\"></em>\r\n                                                                                                        </a>\r\n                                                                                                    </span>\r\n                                                                                            </td>\r\n                                                                                        </tr>\r\n\r\n                                                                                    </tbody>\r\n                                                                                </table>\r\n                                                                                <br>\r\n                                                                                <div class=\"text-right\">\r\n                                                                                    <pagination-controls (pageChange)=\"pActualPedidoRecorrido = $event\" id=\"pagePedidoRecorrido\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n                                                                                </div>\r\n                                                                            </div>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </td>\r\n                                                            </tr>\r\n\r\n                                                        </tbody>\r\n                                                    </table>\r\n                                                    <br>\r\n                                                    <div class=\"text-right\">\r\n                                                        <pagination-controls (pageChange)=\"pActualRutaPedido = $event\" id=\"pageRutaPedido\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </td>\r\n                                </tr>\r\n\r\n                            </tbody>\r\n                        </table>\r\n                        <br>\r\n                        <div class=\"text-right\">\r\n                            <pagination-controls (pageChange)=\"pActualRecorrido = $event\" id=\"pageRecorrido\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/pedidos/confirmacionRecorridos/confirmacionRecorridos.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/pedidos/confirmacionRecorridos/confirmacionRecorridos.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/pedidos/confirmacionRecorridos/confirmacionRecorridos.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/routes/pedidos/confirmacionRecorridos/confirmacionRecorridos.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ConfirmacionRecorridosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmacionRecorridosComponent", function() { return ConfirmacionRecorridosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/consultaService/pedidos.service */ "./src/app/core/consultaService/pedidos.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
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
var ConfirmacionRecorridosComponent = /** @class */ (function () {
    function ConfirmacionRecorridosComponent(fb, modalService, authService, loader, router, utilService, pedidosService, setearDatos, excelService) {
        this.modalService = modalService;
        this.authService = authService;
        this.loader = loader;
        this.router = router;
        this.utilService = utilService;
        this.pedidosService = pedidosService;
        this.setearDatos = setearDatos;
        this.excelService = excelService;
        this.pActualRecorrido = 1;
        this.pActualRutaPedido = 1;
        this.pActualPedidoRecorrido = 1;
        this.requestdos = {};
        this.request = {};
        this.confirma = {};
        this.user = {};
        this.sucursal = {};
        this.detalleClientes = {};
        this.dataPrueba = {};
        this.pedidos = [];
        this.nuevosPedidos = [];
        this.pedidosRecorrido = [];
        this.recorrido = [];
        this.pedidosCompleto = [];
        this.actionBtns = false;
        this.apruebaRecorrido = {};
        //accordionTemplate: AccordionTemplate;
        this.step1 = false;
        this.step2 = false;
        this.step3 = false;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            sFhoDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sFhoHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    ConfirmacionRecorridosComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getDatosUser();
        this.setFecha();
        this.sucursal = JSON.parse(localStorage.getItem("SucursalUsuario"));
        this.setearRecorridos();
    };
    ConfirmacionRecorridosComponent.prototype.mostrar = function (recorrido) {
        document.getElementById(recorrido).classList.toggle('hidden');
    };
    ConfirmacionRecorridosComponent.prototype.mostrarDos = function (ruta) {
        document.getElementById(ruta).classList.toggle('hidden');
    };
    ConfirmacionRecorridosComponent.prototype.setFecha = function () {
        /*  var currentDate = moment();
         var futureMonth = moment(currentDate).add(1, 'M');
         var futureMonthEnd = moment(futureMonth).endOf('month');
         if(currentDate.date() != futureMonth.date() && futureMonth.isSame(futureMonthEnd.format('YYYY-MM-DD'))) {
             futureMonth = futureMonth.add(1, 'd');
         }
         this.desde = currentDate.format('YYYY-MM-DD');
         this.hasta = futureMonth.format('YYYY-MM-DD');
         this.forma.controls.sFhoHasta.setValue(this.hasta);
         this.forma.controls.sFhoDesde.setValue(this.desde ); */
        var today = moment__WEBPACK_IMPORTED_MODULE_5__();
        today = today.subtract(1, 'months');
        var month = today.format('M');
        var day = today.format('D');
        var year = today.format('YYYY');
        var startDate = moment__WEBPACK_IMPORTED_MODULE_5__([year, month, '1']);
        var endDate = moment__WEBPACK_IMPORTED_MODULE_5__([year, month, '30']);
        //var prueba = moment(startDate).format('YYYY-MM-DD');
        this.desde = moment__WEBPACK_IMPORTED_MODULE_5__(startDate).format('YYYY-MM-DD');
        this.hasta = moment__WEBPACK_IMPORTED_MODULE_5__(endDate).format('YYYY-MM-DD');
        this.forma.controls.sFhoHasta.setValue(this.hasta);
        this.forma.controls.sFhoDesde.setValue(this.desde);
    };
    ConfirmacionRecorridosComponent.prototype.setearRecorridos = function () {
        var _this = this;
        this.request.nRutOperador = Number(this.user.nrutoperador);
        this.request.sCodEstado = 'STASI';
        this.request.sCodSucursal = this.sucursal.sus_scodsucursal;
        this.request.sFhoDesde = this.utilService.stringFormatSinSeparador(this.forma.controls.sFhoDesde.value);
        this.request.sFhoHasta = this.utilService.stringFormatSinSeparador(this.forma.controls.sFhoHasta.value);
        console.log(this.request);
        this.pedidosService.getGestionRecorridos(this.request)
            .subscribe(function (data) {
            console.log(data);
            _this.dataPrueba = data;
            _this.nuevosPedidos = data.nuevosPedidos;
            _this.estructuraRecorridos(_this.dataPrueba);
        });
    };
    ConfirmacionRecorridosComponent.prototype.estructuraRecorridos = function (data) {
        var recorridos = data.recorrido;
        var rutas = data.rutaPedidos;
        var pedidos = data.pedidosRecorrido;
        var rutasAux2 = [];
        var rutasAux4 = "";
        var pedidosAux2 = [];
        var pedidosAux4 = "";
        var d = 0;
        var g = 0;
        var l = 0;
        var estamalo = false;
        for (var i in recorridos) {
            recorridos[i].rutas = rutas;
        }
        for (var h in rutas) {
            rutas[h].pedidos = pedidos;
        }
        for (var o in rutas) {
            d = 0;
            for (var p in rutas[o].pedidos) {
                if (rutas[o].rre_nidrecorrido === rutas[o].pedidos[p].rec_nidrecorrido && rutas[o].rre_nidruta === rutas[o].pedidos[p].ped_nidruta) {
                    console.log('entra pedidos', rutas[o].rre_nidrecorrido, rutas[o].pedidos[p].rec_nidrecorrido);
                    pedidosAux4 = rutas[o].pedidos[p];
                    pedidosAux2[d] = pedidosAux4;
                    d = d + 1;
                }
            }
            rutas[o].pedidosDefinitivos = pedidosAux2;
            pedidosAux2 = [];
        }
        for (var x in recorridos) {
            g = 0;
            for (var y in recorridos[x].rutas) {
                if (recorridos[x].rec_nidrecorrido === recorridos[x].rutas[y].rre_nidrecorrido) {
                    rutasAux4 = recorridos[x].rutas[y];
                    rutasAux2[g] = rutasAux4;
                    g = g + 1;
                }
            }
            recorridos[x].rutasDefinitivas = rutasAux2;
            rutasAux2 = [];
        }
        this.pedidosCompleto = recorridos;
        console.log('arreglocompleto', this.pedidosCompleto);
        var recorridosIconos = this.pedidosCompleto;
        for (var i in recorridosIconos) {
            for (var j in recorridosIconos[i].rutasDefinitivas) {
                for (var k in recorridosIconos[i].rutasDefinitivas[j].pedidosDefinitivos) {
                    if (recorridosIconos[i].rutasDefinitivas[j].pedidosDefinitivos[k].ped_sindcupoinsuficiente === 'S' || recorridosIconos[i].rutasDefinitivas[j].pedidosDefinitivos[k].ped_sindquiebrestock === 'S') {
                        recorridosIconos[i].rutasDefinitivas[j].pedidosDefinitivos[k].icono = true;
                    }
                    else {
                        recorridosIconos[i].rutasDefinitivas[j].pedidosDefinitivos[k].icono = false;
                    }
                }
            }
        }
        for (var i in recorridosIconos) {
            for (var j in recorridosIconos[i].rutasDefinitivas) {
                for (var k in recorridosIconos[i].rutasDefinitivas[j].pedidosDefinitivos) {
                    if (recorridosIconos[i].rutasDefinitivas[j].pedidosDefinitivos[k].icono) {
                        recorridosIconos[i].rutasDefinitivas[j].icono = true;
                        recorridosIconos[i].icono = true;
                        break;
                    }
                }
            }
        }
        console.log('ARREGLO ICONOS', recorridosIconos);
        this.pedidosCompleto = recorridosIconos;
    };
    ConfirmacionRecorridosComponent.prototype.validaCheckPack = function (recorrido) {
        recorrido.bCheck = !recorrido.bCheck;
        console.log('checkeado', this.pedidosCompleto);
        if (recorrido.bCheck) {
            console.log('checkeado');
            this.actionBtns = true;
        }
        else {
            this.actionBtns = false;
            console.log('NO checkeado ');
        }
    };
    ConfirmacionRecorridosComponent.prototype.validarRecorridos = function () {
        var _validarRecorrido = true;
        var recorridoSeleccionado = false;
        this.pedidosCompleto.forEach(function (recorrido) {
            if (recorrido.bCheck !== undefined && recorrido.bCheck === true) {
                recorridoSeleccionado = true;
            }
        });
        if (!recorridoSeleccionado) {
            swal('Atención', 'Debe seleccionar algun Recorrido', 'error');
            _validarRecorrido = false;
        }
        return _validarRecorrido;
    };
    ConfirmacionRecorridosComponent.prototype.confirmarRecorrido = function (data) {
        var _this = this;
        this.confirma.aSRV_EntRecorridos = data;
        this.confirma.nIdLoteOrigen = 0;
        this.confirma.nIdRecorrido = 0;
        this.confirma.nRunUsuario = Number(this.user.nrunusuario);
        this.confirma.nRutOperador = Number(this.user.nrutoperador);
        this.confirma.sCodSucursal = this.sucursal.sus_scodsucursal;
        console.log(this.confirma);
        this.pedidosService.getConfirmaRecorridos(this.confirma)
            .subscribe(function (data) {
            console.log(data);
            if (data) {
                if (data.error.codError === 0) {
                    swal('Bien', 'Los datos han sido actualizados satisfactoriamente', 'success');
                    _this.setearRecorridos();
                    _this.loader.hide();
                }
                else {
                    swal('Atención', data.error.msjError, 'error');
                    _this.loader.hide();
                }
            }
            else {
                swal('Atención', data.error.msjError, 'error');
                _this.loader.hide();
            }
        }, function (error) {
            _this.loader.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    ConfirmacionRecorridosComponent.prototype.preConfirmacion = function () {
        this.loader.show();
        var arregloId = [];
        var z = 0;
        if (this.validarRecorridos()) {
            console.log(this.pedidosCompleto);
            this.pedidosCompleto.forEach(function (recorrido) {
                if (recorrido.bCheck !== null && recorrido.bCheck !== undefined && recorrido.bCheck === true) {
                    var recorridoObj = {};
                    recorridoObj.nIdRecorrido = recorrido.rec_nidrecorrido;
                    arregloId.push(recorridoObj);
                }
            });
            this.loader.hide();
            this.confirmarRecorrido(arregloId);
            console.log('IDS CHEKEADOS', arregloId);
        }
        else {
            this.loader.hide();
        }
    };
    ConfirmacionRecorridosComponent.prototype.preReasignar = function () {
        this.loader.show();
        var arregloIdRecorridos = [];
        var z = 0;
        var recorridosCompletos = this.pedidosCompleto;
        console.log('recorridos completos dentro de funcion', recorridosCompletos);
        // tslint:disable-next-line: forin
        if (this.validarRecorridos()) {
            for (var i in recorridosCompletos) {
                if (recorridosCompletos[i].bCheck !== null && recorridosCompletos[i].bCheck !== undefined && recorridosCompletos[i].bCheck === true) {
                    var recorridoObj = {};
                    recorridoObj.cantPedidos = recorridosCompletos[i].ncantpedidos;
                    recorridoObj.nIdLoteImpresion = 0;
                    recorridoObj.nIdRecorrido = recorridosCompletos[i].rec_nidrecorrido;
                    recorridoObj.nRunUsuario = Number(this.user.nrunusuario);
                    recorridoObj.nRutOperador = Number(this.user.nrutoperador);
                    recorridoObj.sCodEstado = 'PORAS';
                    arregloIdRecorridos.push(recorridoObj);
                    console.log('ID DE RECORRIDOS SELECCIONADOS', recorridoObj);
                }
            }
            console.log('ARREGLO DE RUTAS CHEQUEADOS', arregloIdRecorridos);
            this.loader.hide();
            this.reasignarRecorrido(arregloIdRecorridos);
        }
        else {
            this.loader.hide();
        }
    };
    ConfirmacionRecorridosComponent.prototype.reasignarRecorrido = function (arregloIdRecorridos) {
        var _this = this;
        this.apruebaRecorrido.aSRV_EntRecorridos = arregloIdRecorridos;
        console.log(this.apruebaRecorrido);
        this.pedidosService.updateEstadoRecorrido(this.apruebaRecorrido)
            .subscribe(function (data) {
            console.log(data);
            if (data) {
                if (data.error.codError === 0) {
                    swal('Bien', 'Los datos han sido actualizados satisfactoriamente', 'success');
                    _this.setearRecorridos();
                    _this.loader.hide();
                }
                else {
                    swal('Atención', data.error.msjError, 'error');
                    _this.loader.hide();
                }
            }
            else {
                swal('Atención', data.error.msjError, 'error');
                _this.loader.hide();
            }
        }, function (error) {
            _this.loader.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    ConfirmacionRecorridosComponent.prototype.preDevolver = function () {
        this.loader.show();
        var arregloIdRecorridos = [];
        var z = 0;
        var recorridosCompletos = this.pedidosCompleto;
        console.log('recorridos completos dentro de funcion', recorridosCompletos);
        // tslint:disable-next-line: forin
        if (this.validarRecorridos()) {
            for (var i in recorridosCompletos) {
                if (recorridosCompletos[i].bCheck !== null && recorridosCompletos[i].bCheck !== undefined && recorridosCompletos[i].bCheck === true) {
                    var recorridoObj = {};
                    recorridoObj.cantPedidos = recorridosCompletos[i].ncantpedidos;
                    recorridoObj.nIdLoteImpresion = 0;
                    recorridoObj.nIdRecorrido = recorridosCompletos[i].rec_nidrecorrido;
                    recorridoObj.nRunUsuario = Number(this.user.nrunusuario);
                    recorridoObj.nRutOperador = Number(this.user.nrutoperador);
                    recorridoObj.sCodEstado = 'PODAS';
                    arregloIdRecorridos.push(recorridoObj);
                    console.log('ID DE RECORRIDOS SELECCIONADOS', recorridoObj);
                }
            }
            console.log('ARREGLO DE RUTAS CHEQUEADOS', arregloIdRecorridos);
            this.loader.hide();
            this.devolverRecorrido(arregloIdRecorridos);
        }
        else {
            this.loader.hide();
        }
    };
    ConfirmacionRecorridosComponent.prototype.devolverRecorrido = function (arregloIdRecorridos) {
        var _this = this;
        this.apruebaRecorrido.aSRV_EntRecorridos = arregloIdRecorridos;
        console.log(this.apruebaRecorrido);
        this.pedidosService.updateEstadoRecorrido(this.apruebaRecorrido)
            .subscribe(function (data) {
            console.log(data);
            if (data) {
                if (data.error.codError === 0) {
                    swal('Bien', 'Los datos han sido actualizados satisfactoriamente', 'success');
                    _this.setearRecorridos();
                    _this.loader.hide();
                }
                else {
                    swal('Atención', data.error.msjError, 'error');
                    _this.loader.hide();
                }
            }
            else {
                swal('Atención', data.error.msjError, 'error');
                _this.loader.hide();
            }
        }, function (error) {
            _this.loader.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    ConfirmacionRecorridosComponent.prototype.editarPedido = function (pedido) {
        this.pedidosService.selectedPedido = {
            tipoOperacion: 'editar',
            idPedido: pedido.ped_nidpedido
        };
        this.router.navigate(['/pedidos/crearPedido']);
    };
    ConfirmacionRecorridosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmacionRecorridos',
            template: __webpack_require__(/*! ./confirmacionRecorridos.component.html */ "./src/app/routes/pedidos/confirmacionRecorridos/confirmacionRecorridos.component.html"),
            styles: [__webpack_require__(/*! ./confirmacionRecorridos.component.scss */ "./src/app/routes/pedidos/confirmacionRecorridos/confirmacionRecorridos.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
            _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_8__["PedidosService"], _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_9__["ConsultasService"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_10__["ExcelService"]])
    ], ConfirmacionRecorridosComponent);
    return ConfirmacionRecorridosComponent;
}());



/***/ }),

/***/ "./src/app/routes/pedidos/consultarPedidos/consultarPedidos.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/routes/pedidos/consultarPedidos/consultarPedidos.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Consulta de Pedidos</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"col-sm-6\">\r\n                        <label class=\"col-sm-2 control-label\">Territorio</label>\r\n                        <div class=\"col-sm-3\">\r\n                            <input formControlName=\"sCodTerritorio\" name=\"sCodTerritorio\" class=\"form-control\" type=\"text\" disabled/>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"descTerritorio\" name=\"descTerritorio\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-1 pl-0\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalTerritorios()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                          </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <label class=\"col-sm-2 control-label\">Cliente</label>\r\n                        <div class=\"col-sm-3\">\r\n                            <input formControlName=\"nRunCliente\" name=\"nRunCliente\" class=\"form-control\" type=\"text\" (change)=\"validaCliente()\"/>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"nombreCliente\" name=\"nombreCliente\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-1 pl-0\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCliente()\">\r\n                          <em class=\"icon-magnifier\"></em>\r\n                        </button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"col-sm-6\">\r\n                        <label class=\"col-sm-2 control-label lh-11\">Fecha Desde</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"sFhoDesde\" name=\"sFhoDesde\" type=\"date\" />\r\n                        </div>\r\n                        <label class=\"col-sm-2 control-label\">Hora</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input class=\"form-control pr-1 w-110 text-center\" formControlName=\"horaDesde\" name=\"horaDesde\" type=\"time\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <label class=\"col-sm-2 control-label\">Estado</label>\r\n                        <div class=\"col-sm-8\">\r\n                            <select class=\"form-control pv-0\" formControlName=\"sCodEstado\" name=\"sCodEstado\">\r\n                                <option *ngFor=\"let userEstado of estadoPedidos\" [ngValue]=\"userEstado.par_codparametro01\">{{userEstado.par_deslargo01 | titlecase}}</option>\r\n                          </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"col-sm-6\">\r\n                        <label class=\"col-sm-2 control-label lh-11\">Fecha Hasta</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"sFhoHasta\" name=\"sFhoHasta\" type=\"date\" />\r\n                        </div>\r\n                        <label class=\"col-sm-2 control-label\">Hora</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input class=\"form-control pr-1 w-110 text-center\" formControlName=\"horaHasta\" name=\"horaHasta\" type=\"time\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"row pull-left\">\r\n                        <div class=\"col-sm-4\">\r\n                            <button class=\"btn btn-oval btn-sm\" (click)=\"buscar($event)\" type=\"button\">Buscar</button>\r\n                        </div>\r\n                        <div class=\"col-sm-4 ml-1\">\r\n                            <button class=\"btn btn-oval btn-sm\" [disabled]=\"!actionBtns\" (click)=\"generateExcel()\">Exportar</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th nowrap>N&uacute;mero</th>\r\n                                <th nowrap>Fecha</th>\r\n                                <th nowrap>Rut Cliente</th>\r\n                                <th nowrap>Cliente</th>\r\n                                <th nowrap>Local</th>\r\n                                <th nowrap>Rel Comercial</th>\r\n                                <th nowrap>Territorio</th>\r\n                                <th nowrap>Ruta</th>\r\n                                <th nowrap>Monto</th>\r\n                                <th nowrap>Estado</th>\r\n                                <th nowrap>Tipo</th>\r\n                                <th nowrap>Ver</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let pedido of pedidos | paginate: {itemsPerPage: 7, currentPage: pActualBuscaPedido, id: 'pageBuscaPedido'};\">\r\n                                <td nowrap>{{pedido.ped_nidpedido}}</td>\r\n                                <td nowrap>{{pedido.ped_dfhopedido | fecha}}</td>\r\n                                <td nowrap>{{pedido.ped_nrutcliente | number:'':'es'}}-{{pedido.cli_sdigverificador}}</td>\r\n                                <td nowrap>{{pedido.cli_snombre}}</td>\r\n                                <td nowrap>({{pedido.ped_nnumlocal}}){{pedido.loc_snombre}}</td>\r\n                                <td nowrap>({{pedido.ped_scodrelacioncomer}}){{pedido.rel_sdescripcionrelacioncomerc}}</td>\r\n                                <td nowrap>({{pedido.ter_scodterritorio}}){{pedido.ter_sdesterritorio}}</td>\r\n                                <td nowrap>{{pedido.ped_scodruta}}</td>\r\n                                <td class=\"text-right\" nowrap>{{pedido.ped_nprecio | number:'':'es'}}</td>\r\n                                <td nowrap>{{pedido.ped_scodestado | estadoPedidos}}</td>\r\n                                <td nowrap>{{pedido.tipoPedidoModif}}</td>\r\n                                <td>\r\n                                    <span class=\"table-remove\">\r\n                                        <a class=\"text\" (click)=\"redirigirPagina(pedido)\">\r\n                                            <em class=\"fa fa-search\"></em>\r\n                                        </a>\r\n                                    </span>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <br>\r\n                    <div class=\"text-right\">\r\n                        <pagination-controls (pageChange)=\"pActualBuscaPedido = $event\" id=\"pageBuscaPedido\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"row pull-right\">\r\n                    <div class=\"col-sm-3\">\r\n                        <label class=\"col-sm-4 control-label p-0\">P. Manuales</label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input class=\"form-control\" type=\"text\" value=\"{{pManuales}}\" readonly/>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        <label class=\"col-sm-4 control-label p-0\">P. HEY</label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input class=\"form-control\" type=\"text\" value=\"{{pHey}}\" readonly/>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        <label class=\"col-sm-4 control-label p-0\">P.Autom&aacute;ticos</label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input class=\"form-control\" type=\"text\" value=\"{{pAutomaticos}}\" readonly/>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        <label class=\"col-sm-4 control-label p-0\">Total Pedidos</label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input class=\"form-control\" type=\"text\" value=\"{{totalPedidos}}\" readonly/>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/pedidos/consultarPedidos/consultarPedidos.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/routes/pedidos/consultarPedidos/consultarPedidos.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/pedidos/consultarPedidos/consultarPedidos.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/pedidos/consultarPedidos/consultarPedidos.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ConsultarPedidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarPedidosComponent", function() { return ConsultarPedidosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/pedidos.service */ "./src/app/core/consultaService/pedidos.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _commonPopUp_zonasTodasPopUp_zonasTodasPopUp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../commonPopUp/zonasTodasPopUp/zonasTodasPopUp.component */ "./src/app/routes/commonPopUp/zonasTodasPopUp/zonasTodasPopUp.component.ts");
/* harmony import */ var _commonPopUp_rutAsociadoPopUp_rutAsociadoPopUp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../commonPopUp/rutAsociadoPopUp/rutAsociadoPopUp.component */ "./src/app/routes/commonPopUp/rutAsociadoPopUp/rutAsociadoPopUp.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/consultaService/clientes.service */ "./src/app/core/consultaService/clientes.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
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
var ConsultarPedidosComponent = /** @class */ (function () {
    function ConsultarPedidosComponent(fb, modalService, authService, loader, router, utilService, pedidosService, setearDatos, excelService, consultasCliente) {
        this.modalService = modalService;
        this.authService = authService;
        this.loader = loader;
        this.router = router;
        this.utilService = utilService;
        this.pedidosService = pedidosService;
        this.setearDatos = setearDatos;
        this.excelService = excelService;
        this.consultasCliente = consultasCliente;
        this.estado = [
            {
                sCodEstado: null,
                descEstado: '(Todos)'
            }
        ];
        this.pedidos = [];
        this.fechaActual = new Date();
        this.fechaDesde = new Date();
        this.requestEstado = {};
        this.estadoPedidos = [];
        this.user = {};
        this.request = {};
        this.pManuales = 0;
        this.pHey = 0;
        this.pAutomaticos = 0;
        this.totalPedidos = 0;
        this.actionBtns = false;
        this.requestdos = {};
        this.datos = [];
        this.pActualBuscaPedido = 1;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nRunCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nombreCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            nRutOperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sCodEstado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sCodTerritorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            descTerritorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            sFhoDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            horaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sFhoHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            horaHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ConsultarPedidosComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_12__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13___default.a);
        this.inicializarFechas();
        this.estadoPedido();
        this.subData = this.setearDatos.datosGeo$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.subData2 = this.setearDatos.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.user = this.authService.getDatosUser();
    };
    ConsultarPedidosComponent.prototype.inicializarFechas = function () {
        this.fechaDesde = moment__WEBPACK_IMPORTED_MODULE_15__().subtract(1, 'months').toDate();
        this.forma.controls.sFhoDesde.setValue(this.utilService.dateToStringFormat(this.fechaDesde));
        this.forma.controls.sFhoHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
    };
    ConsultarPedidosComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
        if (this.subData2 !== undefined) {
            this.subData2.unsubscribe();
        }
    };
    ConsultarPedidosComponent.prototype.estadoPedido = function () {
        var _this = this;
        this.requestEstado.parnumparametro = 43;
        this.pedidosService.getParametrosEstadoPedido(this.requestEstado)
            .subscribe(function (data) {
            (_this.estadoPedidos = data.general);
        });
    };
    ConsultarPedidosComponent.prototype.openModalTerritorios = function () {
        this.origen = 'territoriosPedidos';
        var initialState = {
            parametro: this.user.nrutoperador,
            origen: 'territoriosPedidos'
        };
        this.territoriosTodosModal = this.modalService.show(_commonPopUp_zonasTodasPopUp_zonasTodasPopUp_component__WEBPACK_IMPORTED_MODULE_10__["ZonasTodasPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    ConsultarPedidosComponent.prototype.inicializarValoresControles = function () {
        // TODO: implementar funcionalidad
    };
    ConsultarPedidosComponent.prototype.openModalCliente = function () {
        this.origen = 'clientePedido';
        var initialState = {
            titulo: 'Cliente',
            origen: 'clientePedido'
        };
        this.clienteModal = this.modalService.show(_commonPopUp_rutAsociadoPopUp_rutAsociadoPopUp_component__WEBPACK_IMPORTED_MODULE_11__["RutAsociadoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    ConsultarPedidosComponent.prototype.setData = function (resData) {
        if (resData !== 0) {
            switch (this.origen) {
                case 'territoriosPedidos': {
                    this.forma.controls.sCodTerritorio.setValue(resData.ter_scodterritorio);
                    this.forma.controls.descTerritorio.setValue(resData.ter_sdesterritorio);
                    break;
                }
                case 'clientePedido': {
                    this.forma.controls.nRunCliente.setValue(resData.cli_nrutcliente);
                    this.forma.controls.nombreCliente.setValue(resData.cli_snombre);
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    ConsultarPedidosComponent.prototype.buscar = function ($event) {
        var _this = this;
        this.pedidos = [];
        this.pManuales = 0;
        this.pHey = 0;
        this.pAutomaticos = 0;
        this.totalPedidos = 0;
        this.loader.show();
        if (this.forma.controls.nRunCliente.value === '') {
            this.forma.controls.nRunCliente.setValue(0);
        }
        if (this.forma.controls.horaHasta.value === '00:00') {
            this.forma.controls.horaHasta.setValue('23:59');
        }
        if (this.forma.controls.horaDesde.value !== '') {
            // this.forma.controls.sFhoDesde.setValue((this.forma.controls.sFhoDesde.value).replace(/-/g, '') +
            //   (this.forma.controls.horaDesde.value).replace(/:/g, '') + '00');
            this.fechaHoraDesde = this.forma.controls.sFhoDesde.value.replace(/-/g, '') +
                this.forma.controls.horaDesde.value.replace(/:/g, '') + '00';
        }
        else {
            // this.forma.controls.sFhoDesde.setValue((this.forma.controls.sFhoDesde.value).replace(/-/g, '') +
            //   (this.forma.controls.horaDesde.value).replace(/:/g, '') + '000000');
            this.fechaHoraDesde = this.forma.controls.sFhoDesde.value.replace(/-/g, '') +
                this.forma.controls.horaDesde.value.replace(/:/g, '') + '000000';
        }
        if (this.forma.controls.horaHasta.value !== '') {
            // this.forma.controls.sFhoHasta.setValue((this.forma.controls.sFhoHasta.value).replace(/-/g, '') +
            //   (this.forma.controls.horaHasta.value).replace(/:/g, '') + '59');
            this.fechaHoraHasta = this.forma.controls.sFhoHasta.value.replace(/-/g, '') +
                this.forma.controls.horaHasta.value.replace(/:/g, '') + '59';
        }
        else {
            this.fechaHoraHasta = this.forma.controls.sFhoHasta.value.replace(/-/g, '') +
                this.forma.controls.horaHasta.value.replace(/:/g, '') + '235959';
        }
        this.forma.controls.nRutOperador.setValue(this.user.nrutoperador);
        this.request.nRunCliente = this.forma.controls.nRunCliente.value !== undefined ? this.forma.controls.nRunCliente.value : 0;
        this.request.nRutOperador = this.user.nrutoperador;
        this.request.sCodEstado = this.forma.controls.sCodEstado.value !== undefined ? this.forma.controls.sCodEstado.value : '';
        this.request.sCodTerritorio = this.forma.controls.sCodTerritorio.value !== undefined ? this.forma.controls.sCodTerritorio.value : 0;
        this.request.sFhoDesde = this.fechaHoraDesde;
        // this.request.sFhoDesde = '20181230000000';
        this.request.sFhoHasta = this.fechaHoraHasta;
        // this.request.sFhoHasta = '20181231000000';
        this.pedidosService.getPedidos(this.request)
            .subscribe(function (data) {
            console.log('pedidos => : ', data);
            _this.loader.hide();
            if (data) {
                if (data.consultaPedidos.length === 0 && data.error.codError === 0) {
                    swal('Atención', 'No se encontraron resultados', 'info');
                    _this.inicializarFechas();
                }
                else {
                    if (data.consultaPedidos === null) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                        _this.inicializarFechas();
                    }
                    else {
                        _this.actionBtns = true;
                        _this.cargarPedidos(data.consultaPedidos);
                    }
                }
                if (data.error.codError !== 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    _this.inicializarFechas();
                }
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                _this.inicializarFechas();
            }
        }, function (error) {
            _this.loader.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', error);
            _this.inicializarFechas();
        });
    };
    ConsultarPedidosComponent.prototype.cargarPedidos = function (data) {
        var _this = this;
        data.forEach(function (pedido, i) {
            _this.tiposPedidos = '';
            if (data[i].ped_nnumpedido === 0) {
                _this.tiposPedidos = 'M';
                _this.pManuales += 1;
            }
            else {
                if (data[i].tipoterritorio === 'PADRE') {
                    _this.tiposPedidos = 'A';
                    _this.pAutomaticos += 1;
                }
                else {
                    _this.tiposPedidos = 'H';
                    _this.pHey += 1;
                }
            }
            var objetoPedido = {
                cli_sapematerno: data[i].cli_sapematerno,
                cli_sapepaterno: data[i].cli_sapepaterno,
                cli_sdigverificador: data[i].cli_sdigverificador,
                cli_snombre: data[i].cli_snombre,
                desestado: data[i].desestado,
                loc_snombre: data[i].loc_snombre,
                ped_dfhoentrega: data[i].ped_dfhoentrega,
                ped_dfhopedido: data[i].ped_dfhopedido,
                ped_niddireccionentrega: data[i].ped_niddireccionentrega,
                ped_nidpedido: data[i].ped_nidpedido,
                ped_nidruta: data[i].ped_nidruta,
                ped_nkilos: data[i].ped_nkilos,
                ped_nnumlocal: data[i].ped_nnumlocal,
                ped_nnumpedido: data[i].ped_nnumpedido,
                ped_nprecio: data[i].ped_nprecio,
                ped_nrunvendedor: data[i].ped_nrunvendedor,
                ped_nrutcliente: data[i].ped_nrutcliente,
                ped_nrutoperador: data[i].ped_nrutoperador,
                ped_nvolumen: data[i].ped_nvolumen,
                ped_scodestado: data[i].ped_scodestado,
                ped_scodrelacioncomer: data[i].ped_scodrelacioncomer,
                ped_scodruta: data[i].ped_scodruta,
                ped_sdesruta: data[i].ped_sdesruta,
                ped_sindcupoinsuficiente: data[i].ped_sindcupoinsuficiente,
                ped_sindquiebrestock: data[i].ped_sindquiebrestock,
                ped_sobservacion: data[i].ped_sobservacion,
                rel_sdescripcionrelacioncomerc: data[i].rel_sdescripcionrelacioncomerc,
                ter_scodterritorio: data[i].ter_scodterritorio,
                ter_sdesterritorio: data[i].ter_sdesterritorio,
                tipoterritorio: data[i].tipoterritorio,
                tipoPedidoModif: _this.tiposPedidos
            };
            _this.pedidos.push(objetoPedido);
            _this.totalPedidos = _this.pManuales + _this.pAutomaticos + _this.pHey;
        });
    };
    ConsultarPedidosComponent.prototype.generateExcel = function () {
        var _this = this;
        var headerExcel = [
            'Número', 'Fecha', 'Rut Cliente', 'Cliente', 'Local', 'Rel. Comercial', 'Territorio',
            'Ruta', 'Monto', 'Estado', 'Tipo'
        ];
        var dataExcel = [];
        this.pedidos.forEach(function (element, i) {
            var pedido = [
                _this.pedidos[i].ped_nidpedido,
                _this.utilService.dateStringServiceToStringFormatFull(_this.pedidos[i].ped_dfhopedido),
                _this.pedidos[i].ped_nrutcliente + " - " + _this.pedidos[i].cli_sdigverificador,
                _this.pedidos[i].cli_snombre,
                "(" + _this.pedidos[i].ped_nnumlocal + ") - " + _this.pedidos[i].loc_snombre,
                "(" + _this.pedidos[i].ped_scodrelacioncomer + ") - " + _this.pedidos[i].rel_sdescripcionrelacioncomerc,
                "(" + _this.pedidos[i].ter_scodterritorio + ") - " + _this.pedidos[i].ter_sdesterritorio,
                _this.pedidos[i].ped_scodruta,
                _this.pedidos[i].ped_nprecio,
                _this.utilService.estadoPedido(_this.pedidos[i].ped_scodestado),
                _this.utilService.tipoPedido(_this.pedidos[i].tipoPedidoModif)
            ];
            dataExcel.push(pedido);
        });
        this.excelService.generateExcel('Listado de Pedidos', headerExcel, dataExcel, this.utilService.dateToLocalStringFormat(this.fechaActual));
        swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
    };
    ConsultarPedidosComponent.prototype.validaCliente = function () {
        var _this = this;
        this.loader.show();
        if (this.forma.controls.nRunCliente.value === '') {
            this.loader.hide();
            this.forma.controls.nRunCliente.setValue('');
            this.forma.controls.nombreCliente.setValue('');
        }
        else {
            this.requestdos.rutClientes =
                Number(this.forma.controls.nRunCliente.value.substr(0, this.forma.controls.nRunCliente.value.length - 1));
            this.requestdos.rutOperador = Number(this.user.nrutoperador);
            this.consultasCliente.getDetallesClientes(this.requestdos)
                .subscribe(function (data) {
                _this.loader.hide();
                if (data) {
                    if (data.error.codError !== 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.cliente;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.nombreCliente.setValue(_this.datos[0].cli_snombre);
                        }
                        else {
                            _this.forma.controls.nRunCliente.setValue('');
                            _this.forma.controls.nombreCliente.setValue('');
                            swal('Atención', 'No Existe este Cliente', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.loader.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', error);
            });
        }
    };
    ConsultarPedidosComponent.prototype.redirigirPagina = function (pedido) {
        // const company = {
        //   id: 'companyId',
        //   name: 'some name'
        // };
        // this.router.navigate(['/pedidos/crearPedido',
        //   { id: company.id, company: JSON.stringify(company) }]);
        if (pedido.desestado.toUpperCase() === 'CREADO') {
            this.pedidosService.selectedPedido = {
                tipoOperacion: 'editar',
                idPedido: pedido.ped_nidpedido
            };
            this.router.navigate(['/pedidos/crearPedido']);
        }
    };
    ConsultarPedidosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultarPedidos',
            template: __webpack_require__(/*! ./consultarPedidos.component.html */ "./src/app/routes/pedidos/consultarPedidos/consultarPedidos.component.html"),
            styles: [__webpack_require__(/*! ./consultarPedidos.component.scss */ "./src/app/routes/pedidos/consultarPedidos/consultarPedidos.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_7__["PedidosService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_8__["ConsultasService"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_9__["ExcelService"],
            _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_14__["ClientesService"]])
    ], ConsultarPedidosComponent);
    return ConsultarPedidosComponent;
}());



/***/ }),

/***/ "./src/app/routes/pedidos/crearPedido/crearPedido.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/routes/pedidos/crearPedido/crearPedido.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>{{tipoOperacion | titlecase }} Pedido <span>{{idPedido}}</span></h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\" novalidate>\r\n            <div class=\"col-sm-12 pl-0\">\r\n                <div class=\"col-sm-10 pl-0\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-12 pl-0\">\r\n                            <div class=\"col-sm-6\">\r\n                                <label class=\"col-sm-2 control-label\">Cliente</label>\r\n                                <div class=\"col-sm-3 pr-0\">\r\n                                    <input formControlName=\"nRutCliente\" name=\"nRutCliente\" class=\"form-control\"\r\n                                        id=\"nRutCliente\" type=\"text\" (change)=\"validaCliente()\" required />\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input formControlName=\"nombreCliente\" name=\"nombreCliente\" class=\"form-control\"\r\n                                        type=\"text\" data-toggle=\"tooltip\" title=\"Ver Detalle Factura\"/>\r\n                                </div>\r\n                                <div class=\"col-sm-1 pl-0\">\r\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCliente()\"\r\n                                        [disabled]=\"tipoOperacion\">\r\n                                        <!-- <em class=\"icon-magnifier\"></em> -->\r\n                                        <a class=\"text\" data-toggle=\"tooltip\" data-placement=\"bottom\" [title]=\"estadoCliente\">\r\n                                            <em class=\"icon-magnifier\"></em>\r\n                                        </a>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <label class=\"col-sm-2 control-label\">Local</label>\r\n                                <div class=\"col-sm-3 pr-0\">\r\n                                    <input formControlName=\"numLocal\" name=\"numLocal\" class=\"form-control\"\r\n                                        (change)=\"validaLocal()\" type=\"text\" maxlength=\"2\" required />\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input formControlName=\"descLocal\" name=\"descLocal\" class=\"form-control\"\r\n                                        type=\"text\" />\r\n                                </div>\r\n                                <div class=\"col-sm-1 pl-0\">\r\n                                    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!localBtns\"\r\n                                        (click)=\"openModalLocales()\">\r\n                                        <em class=\"icon-magnifier\"></em>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12 pl-0\">\r\n                            <div class=\"col-sm-6\">\r\n                                <label class=\"col-sm-2 control-label\">Rel.Comercial</label>\r\n                                <div class=\"col-sm-3 pr-0\">\r\n                                    <input formControlName=\"sCodRelacionComer\" name=\"sCodRelacionComer\"\r\n                                        class=\"form-control\" (change)=\"validaRelacion()\" type=\"text\" required />\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input formControlName=\"descRelaComercial\" name=\"descRelaComercial\"\r\n                                        class=\"form-control\" type=\"text\" />\r\n                                </div>\r\n                                <div class=\"col-sm-1 pl-0\">\r\n                                    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!relacionBtns\"\r\n                                        (click)=\"openModalRelaciones()\">\r\n                                        <em class=\"icon-magnifier\"></em>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <label class=\"col-sm-2 control-label\">Sucursal</label>\r\n                                <div class=\"col-sm-3 pr-0\">\r\n                                    <input formControlName=\"codSucursal\" name=\"codSucursal\" class=\"form-control\"\r\n                                        (change)=\"validaSucursales()\" type=\"text\" required />\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input formControlName=\"descSucursal\" name=\"descSucursal\" class=\"form-control\"\r\n                                        type=\"text\" />\r\n                                </div>\r\n                                <div class=\"col-sm-1 pl-0\">\r\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalSucursales()\"\r\n                                        [disabled]=\"!habilitarFuncionalidades && tipoOperacion !== 'editar'\">\r\n                                        <em class=\"icon-magnifier\"></em>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12 pl-0\">\r\n                            <div class=\"col-sm-6\">\r\n                                <label class=\"col-sm-2 control-label\">Ruta</label>\r\n                                <div class=\"col-sm-3 pr-0\">\r\n                                    <input formControlName=\"sCodRuta\" name=\"sCodRuta\" class=\"form-control\"\r\n                                        (change)=\"validaRutas()\" type=\"text\"\r\n                                        [disabled]=\"habilitarFuncionalidades || tipoOperacion !== 'editar'\" required />\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input formControlName=\"descRuta\" name=\"descRuta\" class=\"form-control\"\r\n                                        type=\"text\" />\r\n                                </div>\r\n                                <div class=\"col-sm-1 pl-0\">\r\n                                    <button id=\"btnSucursal\" #btnSucursal type=\"button\" class=\"btn btn-primary\"\r\n                                        (click)=\"openModalRutas()\" [attr.disabled]=\"habilitarFuncionalidades\"\r\n                                        [disabled]=\"!habilitarFuncionalidades && tipoOperacion !== 'editar'\">\r\n                                        <em class=\"icon-magnifier\"></em>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12 pl-0\">\r\n                            <div class=\"col-sm-6\">\r\n                                <label class=\"col-sm-2 control-label\">Territorio</label>\r\n                                <div class=\"col-sm-3 pr-0\">\r\n                                    <input formControlName=\"sCodTerritorio\" name=\"sCodTerritorio\" class=\"form-control\"\r\n                                        type=\"text\" required />\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input formControlName=\"descTerritorio\" name=\"descTerritorio\" class=\"form-control\"\r\n                                        type=\"text\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <label class=\"col-sm-2 control-label\">Direcci&oacute;n</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input formControlName=\"direccionPedido\" name=\"direccionPedido\" class=\"form-control\"\r\n                                        type=\"text\" required />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12 pl-0\">\r\n                            <div class=\"col-sm-6\">\r\n                                <label class=\"col-sm-2 control-label\">Dir. Entrega</label>\r\n                                <div class=\"col-sm-3 pr-0\">\r\n                                    <input formControlName=\"idDireccionEntrega\" name=\"idDireccionEntrega\"\r\n                                        class=\"form-control\" type=\"text\" (change)=\"validarDireccionEntrega()\"\r\n                                        [disabled]=\"!habilitarFuncionalidades\" required />\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input formControlName=\"descDirEntrega\" name=\"descDirEntrega\" class=\"form-control\"\r\n                                        type=\"text\" />\r\n                                </div>\r\n                                <div class=\"col-sm-1 pl-0\">\r\n                                    <button type=\"button\" [disabled]=\"!direccionBtns\" class=\"btn btn-primary\"\r\n                                        [disabled]=\"!habilitarFuncionalidades && tipoOperacion !== 'editar'\"\r\n                                        (click)=\"openModalDireBanco(data='direEntregas')\">\r\n                                        <em class=\"icon-magnifier\"></em>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <label class=\"col-sm-2 control-label pr-0\">Forma Pago</label>\r\n                                <div class=\"col-sm-4\">\r\n                                    <input formControlName=\"formPago\" name=\"formPago\" class=\"form-control\" type=\"text\"\r\n                                        required />\r\n                                </div>\r\n                                <label class=\"col-sm-2 control-label\">Cupo</label>\r\n                                <div *ngIf=\"tipoOperacion !== 'editar'\" class=\"col-sm-4\">\r\n                                    <!-- <input formControlName=\"cupos\" name=\"cupos\" class=\"form-control\" type=\"text\" /> -->\r\n                                    <label class=\"form-control\"\r\n                                        disabled=\"true\">{{this.datos[0]?.rco_ncupodisponible | number:'':'es' }}</label>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"tipoOperacion === 'editar'\" class=\"col-sm-4\">\r\n                                    <!-- <input formControlName=\"cupos\" name=\"cupos\" class=\"form-control\" type=\"text\" /> -->\r\n                                    <label class=\"form-control\"\r\n                                        disabled=\"true\">{{this.cupoEditar | number:'':'es' }}</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"col-sm-6 pl-0\">\r\n                                <label class=\"col-sm-2 control-label lh-11 pr-0\">Fec. Pedido</label>\r\n                                <div class=\"col-sm-10\">\r\n                                    <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fhoPedido\"\r\n                                        name=\"fhoPedido\" type=\"date\" required />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6 pl-2\">\r\n                                <label class=\"col-sm-2 control-label lh-11 pr-0\">Fec.Entrega</label>\r\n                                <div class=\"col-sm-10\">\r\n                                    <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fhoEntrega\"\r\n                                        name=\"fhoEntrega\" type=\"date\" required />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <label class=\"col-sm-1 control-label lh-11 pr-0\">Observaciones</label>\r\n                            <div class=\"col-sm-11\">\r\n                                <input formControlName=\"sObservacion\" name=\"sObservacion\" class=\"form-control\"\r\n                                    type=\"text\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"row pull-left\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <button class=\"btn btn-oval btn-sm\" (click)=\"cargarModeloCrearPedido()\"\r\n                                        type=\"button\">Guardar</button>\r\n                                </div>\r\n                                <div class=\"col-sm-4 ml-1\">\r\n                                    <button class=\"btn btn-oval btn-sm\" [disabled]=\"!actionBtns\"\r\n                                        (click)=\"eliminarArticuloPack()\">Eliminar</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-hover\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th nowrap>Protestos</th>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th nowrap>Fecha</th>\r\n                                    <th nowrap>Monto</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr\r\n                                    *ngFor=\"let protesto of listadoProtestos | paginate: {itemsPerPage: 7, currentPage: pActualCreaPedidoProtesto, id: 'pageCreaPedidoProtesto'};\">\r\n                                    <td nowrap>{{protesto.pro_dfhoprotesto | fecha}}</td>\r\n                                    <td class=\"text-right\" nowrap>{{protesto.gar_nmonto | number:'':'es'}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <br>\r\n                        <div class=\"text-right\">\r\n                            <pagination-controls (pageChange)=\"pActualCreaPedidoProtesto = $event\"\r\n                                id=\"pageCreaPedidoProtesto\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\"\r\n                                autoHide=\"true\"></pagination-controls>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <!-- inicio tabla de articulos tipo operacion crear -->\r\n            <div *ngIf=\"tipoOperacion !== 'editar'\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"dash-table-container\">\r\n                        <table class=\"table table-hover\">\r\n                            <thead>\r\n                                <th class=\"w-60\">\r\n                                    <div class=\"checkbox c-checkbox needsclick pt-1 w-40 pl-1\">\r\n                                        <label class=\"needsclick\">\r\n                                            <!-- <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckTituloJerarquia()\" [checked]=\"checkTituloJerarquiaSeleccionado\" />\r\n                                                <span class=\"fa fa-check\"></span> -->\r\n                                        </label>\r\n                                    </div>\r\n                                </th>\r\n                                <th>Art&iacute;culo</th>\r\n                                <th>Descripci&oacute;n</th>\r\n                                <th>Medida</th>\r\n                                <th>U.V.</th>\r\n                                <th>Fracci&oacute;n</th>\r\n                                <th>($) Valor U.V.</th>\r\n                                <th>Total s/d</th>\r\n                                <th>% Desc.</th>\r\n                                <th>Total</th>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let articulo of packArticulo\">\r\n                                    <td class=\"pt-0\">\r\n                                        <div class=\"checkbox c-checkbox needsclick\">\r\n                                            <label class=\"needsclick\">\r\n                                                <input class=\"needsclick\" type=\"checkbox\"\r\n                                                    (change)=\"validaCheckPack(articulo)\" [checked]=\"articulo.bCheck\" />\r\n                                                <span class=\"fa fa-check\"></span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>{{articulo.articulo}}</td>\r\n                                    <td>{{articulo.descripcion}}</td>\r\n                                    <td>{{articulo.medidaUV}}</td>\r\n                                    <td class=\"text-right\" *ngIf=\"!articuloNuevo\">{{articulo.uv}}</td>\r\n                                    <td *ngIf=\"articuloNuevo\">\r\n                                        <input appNaturalNumber #uv type=\"number\"\r\n                                            class=\"form-control w-70 ph-1 text-right\" [(ngModel)]=\"articulo.uv\"\r\n                                            [ngModelOptions]=\"{standalone: true}\"\r\n                                            (focusout)=\"validaCantidad(uv, articulo)\"\r\n                                            (keydown.Tab)=\"validaCantidad(uv, articulo)\" maxlength=\"6\"\r\n                                            oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                    </td>\r\n                                    <td class=\"text-right\" *ngIf=\"!articuloNuevo\">{{articulo.fraccion}}</td>\r\n                                    <td *ngIf=\"articuloNuevo\">\r\n                                        <input appNaturalNumber #fraccion type=\"number\"\r\n                                            class=\"form-control w-70 ph-1 text-right\" [(ngModel)]=\"articulo.fraccion\"\r\n                                            [ngModelOptions]=\"{standalone: true}\"\r\n                                            (focusout)=\"validaCantidad(fraccion, articulo)\"\r\n                                            (keydown.Tab)=\"validaCantidad(fraccion, articulo)\" maxlength=\"6\"\r\n                                            oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                    </td>\r\n                                    <td class=\"text-right\">{{articulo.valorUV | number:'':'es'}}</td>\r\n                                    <td class=\"text-right\">{{articulo.totalSD | number:'':'es'}}</td>\r\n                                    <td class=\"text-right\" *ngIf=\"!articuloNuevo\">\r\n                                        {{articulo.porcentaje | number:'.2-2':'es'}}</td>\r\n                                    <td *ngIf=\"articuloNuevo\">\r\n                                        <input appDecimalNumber #porcentaje type=\"number\" step=\"0.01\"\r\n                                            class=\"form-control w-50 ph-1 text-right\" [(ngModel)]=\"articulo.porcentaje\"\r\n                                            [ngModelOptions]=\"{standalone: true}\"\r\n                                            (focusout)=\"validaPorcentaje(porcentaje)\"\r\n                                            (keydown.Tab)=\"validaPorcentaje(porcentaje, articulo)\" maxlength=\"4\"\r\n                                            oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                    </td>\r\n                                    <td class=\"text-right\">{{articulo.total | number:'':'es'}}</td>\r\n                                </tr>\r\n                                <tr *ngIf=\"articuloNuevo\">\r\n                                    <td></td>\r\n                                    <td class=\"align-top pl-0 w-80\">\r\n                                        <input #articulo type=\"text\" [(ngModel)]=\"filterData\"\r\n                                            [ngModelOptions]=\"{standalone: true}\" class=\"form-control w-80\"\r\n                                            (input)=\"setArticulo(articulo)\"\r\n                                            (keydown.Tab)=\"validaArticulo(articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\" />\r\n                                        <ul *ngIf=\"verListaArticulo\" class=\"list-group filter-list\">\r\n                                            <li *ngFor=\"let data of parametrosAutocomplete | filter:filterData\"\r\n                                                (click)=\"seleccionaArticulo(data, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\">\r\n                                                <a\r\n                                                    class=\"list-group-item\">{{data.art_scodformato}}-{{data.art_scodvariedad}}</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </td>\r\n                                    <td class=\"align-top pl-0\">\r\n                                        <input #descripcion type=\"text\" [(ngModel)]=\"filterDesc\"\r\n                                            [ngModelOptions]=\"{standalone: true}\" class=\"form-control w-200 \"\r\n                                            (input)=\"setDescripcion(descripcion)\"\r\n                                            (keydown.Tab)=\"validaDescripcion(articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\" />\r\n                                        <ul *ngIf=\"verListaDescripcion\" class=\"list-group filter-list\">\r\n                                            <li *ngFor=\"let data of parametrosAutocomplete | filterDesc:filterDesc\"\r\n                                                (click)=\"seleccionaArticulo(data, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\">\r\n                                                <a class=\"list-group-item\">{{data.art_sdescripcion}}</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </td>\r\n                                    <td class=\"align-top pl-0\">\r\n                                        <input #medida type=\"text\" class=\"form-control w-100\" disabled>\r\n                                    </td>\r\n                                    <td class=\"align-top pl-0\">\r\n                                        <input appNaturalNumber #uv type=\"number\"\r\n                                            class=\"form-control w-70 ph-1 text-right\" (focusout)=\"validaCantidad(uv)\"\r\n                                            (keydown.Tab)=\"validaCantidad(uv)\" maxlength=\"6\"\r\n                                            oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                    </td>\r\n                                    <td class=\"align-top pl-0\">\r\n                                        <input appNaturalNumber #fraccion type=\"number\"\r\n                                            class=\"form-control w-70 ph-1 text-right\"\r\n                                            (focusout)=\"validaCantidad(fraccion)\"\r\n                                            (keydown.Tab)=\"validaCantidad(fraccion)\" maxlength=\"6\"\r\n                                            oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                    </td>\r\n                                    <td class=\"align-top pl-0\">\r\n                                        <input #valorUV type=\"number\" class=\"form-control w-80 text-right\" disabled>\r\n                                    </td>\r\n                                    <td class=\"align-top pl-0\">\r\n                                        <input #totalSD type=\"number\" class=\"form-control w-90\" disabled>\r\n                                    </td>\r\n                                    <td class=\"align-top pl-0\">\r\n                                        <input appDecimalNumber #porcentaje type=\"number\" step=\"0.01\"\r\n                                            class=\"form-control w-50 ph-1 text-right\"\r\n                                            (focusout)=\"validaPorcentaje(porcentaje)\"\r\n                                            (keydown.Tab)=\"validaPorcentaje(porcentaje)\" maxlength=\"4\"\r\n                                            oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                            (keyup.enter)=\"agregarArticuloPack(articulo, descripcion, medida, uv, fraccion, valorUV, totalSD, porcentaje, total)\">\r\n                                    </td>\r\n                                    <td class=\"align-top pl-0\">\r\n                                        <input #total type=\"number\" class=\"form-control w-90 text-right\" disabled>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"col-sm-12 ph-0 mt-8\">\r\n                            <div class=\"col-sm-2 col-sm-offset-2\">\r\n                                <label class=\"col-sm-4 control-label pl-0 lh-11\">Total Neto</label>\r\n                                <div class=\"col-sm-8 ph-0\">\r\n                                    <label\r\n                                        class=\"col-sm-5 form-control text-right pad-sup-2\">{{iTotalNeto | number:'':'es'}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                                <label class=\"col-sm-4 control-label\">I.V.A.</label>\r\n                                <div class=\"col-sm-8 ph-0\">\r\n                                    <label\r\n                                        class=\"col-sm-5 form-control text-right pad-sup-2\">{{iIva | number:'':'es'}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-2 pr-0\">\r\n                                <label class=\"col-sm-4 control-label\">I.A.B.A.</label>\r\n                                <div class=\"col-sm-8 ph-0\">\r\n                                    <label\r\n                                        class=\"col-sm-5 form-control text-right pad-sup-2\">{{iIaba | number:'':'es'}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                                <label class=\"col-sm-4 control-label\">Total</label>\r\n                                <div class=\"col-sm-8 ph-0\">\r\n                                    <label\r\n                                        class=\"col-sm-5 form-control text-right pad-sup-2\">{{iTotal | number:'':'es'}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-2 pr-0\">\r\n                                <label class=\"col-sm-4 control-label pl-0\">Volumen</label>\r\n                                <div class=\"col-sm-8 ph-0\">\r\n                                    <label\r\n                                        class=\"col-sm-5 form-control text-right pad-sup-2\">{{iVolumen | number:'.2-2':'es'}}</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                </div>\r\n            </div>\r\n            <!-- fin tabla de articulos tipo operacion crear -->\r\n            <!-- inicio tabla de articulos tipo operacion editar -->\r\n            <div *ngIf=\"tipoOperacion === 'editar'\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"dash-table-container\">\r\n                        <table class=\"table table-hover\">\r\n                            <thead>\r\n                                <th class=\"w-60\">\r\n                                    <div class=\"checkbox c-checkbox needsclick pt-1 w-40 pl-1\">\r\n                                        <label class=\"needsclick\">\r\n                                            <!-- <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckTituloJerarquia()\" [checked]=\"checkTituloJerarquiaSeleccionado\" />\r\n                                                <span class=\"fa fa-check\"></span> -->\r\n                                        </label>\r\n                                    </div>\r\n                                </th>\r\n                                <th>Art&iacute;culo</th>\r\n                                <th>Descripci&oacute;n</th>\r\n                                <th>Medida</th>\r\n                                <th>U.V.</th>\r\n                                <th>Fracci&oacute;n</th>\r\n                                <th>($) Valor U.V.</th>\r\n                                <th>Total s/d</th>\r\n                                <th>% Desc.</th>\r\n                                <th>Total</th>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let articulo of packArticulo\">\r\n                                    <td class=\"pt-0\">\r\n                                        <div class=\"checkbox c-checkbox needsclick\">\r\n                                            <label class=\"needsclick\">\r\n                                                <input class=\"needsclick\" type=\"checkbox\"\r\n                                                    (change)=\"validaCheckPack(articulo)\" [checked]=\"articulo.bCheck\" />\r\n                                                <span class=\"fa fa-check\"></span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>{{articulo.articulo}}</td>\r\n                                    <td>{{articulo.descripcion}}</td>\r\n                                    <td>{{articulo.medidaUV}}</td>\r\n                                    <td class=\"text-right\" *ngIf=\"!articuloNuevo\">{{articulo.uv}}</td>\r\n                                    <td *ngIf=\"articuloNuevo\">\r\n                                        <input appNaturalNumber #uv type=\"number\"\r\n                                            class=\"form-control w-70 ph-1 text-right\" [(ngModel)]=\"articulo.uv\"\r\n                                            [ngModelOptions]=\"{standalone: true}\"\r\n                                            (focusout)=\"validaCantidad(uv, articulo)\"\r\n                                            (keydown.Tab)=\"validaCantidad(uv, articulo)\" maxlength=\"6\"\r\n                                            oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                    </td>\r\n                                    <td class=\"text-right\" *ngIf=\"!articuloNuevo\">{{articulo.fraccion}}</td>\r\n                                    <td *ngIf=\"articuloNuevo\">\r\n                                        <input appNaturalNumber #fraccion type=\"number\"\r\n                                            class=\"form-control w-70 ph-1 text-right\" [(ngModel)]=\"articulo.fraccion\"\r\n                                            [ngModelOptions]=\"{standalone: true}\"\r\n                                            (focusout)=\"validaCantidad(fraccion, articulo)\"\r\n                                            (keydown.Tab)=\"validaCantidad(fraccion, articulo)\" maxlength=\"6\"\r\n                                            oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                    </td>\r\n                                    <td class=\"text-right\">{{articulo.valorUV | number:'':'es'}}</td>\r\n                                    <td class=\"text-right\">{{articulo.totalSD | number:'':'es'}}</td>\r\n                                    <td class=\"text-right\" *ngIf=\"!articuloNuevo\">\r\n                                        {{articulo.porcentaje | number:'.2-2':'es'}}</td>\r\n                                    <td *ngIf=\"articuloNuevo\">\r\n                                        <input appDecimalNumber #porcentaje type=\"number\" step=\"0.01\"\r\n                                            class=\"form-control w-50 ph-1 text-right\" [(ngModel)]=\"articulo.porcentaje\"\r\n                                            [ngModelOptions]=\"{standalone: true}\"\r\n                                            (focusout)=\"validaPorcentaje(porcentaje)\"\r\n                                            (keydown.Tab)=\"validaPorcentaje(porcentaje, articulo)\" maxlength=\"4\"\r\n                                            oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                    </td>\r\n                                    <td class=\"text-right\">{{articulo.total | number:'':'es'}}</td>\r\n                                </tr>\r\n                                <tr *ngIf=\"articuloNuevo\">\r\n                                    <td></td>\r\n                                    <td class=\"align-top pl-0 w-80\">\r\n                                        <input #articulo type=\"text\" [(ngModel)]=\"filterData\"\r\n                                            [ngModelOptions]=\"{standalone: true}\" class=\"form-control w-80\"\r\n                                            (input)=\"setArticulo(articulo)\"\r\n                                            (keydown.Tab)=\"validaArticulo(articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\" />\r\n                                        <ul *ngIf=\"verListaArticulo\" class=\"list-group filter-list\">\r\n                                            <li *ngFor=\"let data of parametrosAutocomplete | filter:filterData\"\r\n                                                (click)=\"seleccionaArticulo(data, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\">\r\n                                                <a\r\n                                                    class=\"list-group-item\">{{data.art_scodformato}}-{{data.art_scodvariedad}}</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </td>\r\n                                    <td class=\"align-top pl-0\">\r\n                                        <input #descripcion type=\"text\" [(ngModel)]=\"filterDesc\"\r\n                                            [ngModelOptions]=\"{standalone: true}\" class=\"form-control w-200 \"\r\n                                            (input)=\"setDescripcion(descripcion)\"\r\n                                            (keydown.Tab)=\"validaDescripcion(articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\" />\r\n                                        <ul *ngIf=\"verListaDescripcion\" class=\"list-group filter-list\">\r\n                                            <li *ngFor=\"let data of parametrosAutocomplete | filterDesc:filterDesc\"\r\n                                                (click)=\"seleccionaArticulo(data, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\">\r\n                                                <a class=\"list-group-item\">{{data.art_sdescripcion}}</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </td>\r\n                                    <td class=\"align-top pl-0\">\r\n                                        <input #medida type=\"text\" class=\"form-control w-100\" disabled>\r\n                                    </td>\r\n                                    <td class=\"align-top pl-0\">\r\n                                        <input appNaturalNumber #uv type=\"number\"\r\n                                            class=\"form-control w-70 ph-1 text-right\" (focusout)=\"validaCantidad(uv)\"\r\n                                            (keydown.Tab)=\"validaCantidad(uv)\" maxlength=\"6\"\r\n                                            oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                    </td>\r\n                                    <td class=\"align-top pl-0\">\r\n                                        <input appNaturalNumber #fraccion type=\"number\"\r\n                                            class=\"form-control w-70 ph-1 text-right\"\r\n                                            (focusout)=\"validaCantidad(fraccion)\"\r\n                                            (keydown.Tab)=\"validaCantidad(fraccion)\" maxlength=\"6\"\r\n                                            oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                    </td>\r\n                                    <td class=\"align-top pl-0\">\r\n                                        <input #valorUV type=\"number\" class=\"form-control w-80 text-right\" disabled>\r\n                                    </td>\r\n                                    <td class=\"align-top pl-0\">\r\n                                        <input #totalSD type=\"number\" class=\"form-control w-90\" disabled>\r\n                                    </td>\r\n                                    <td class=\"align-top pl-0\">\r\n                                        <input appDecimalNumber #porcentaje type=\"number\" step=\"0.01\"\r\n                                            class=\"form-control w-50 ph-1 text-right\"\r\n                                            (focusout)=\"validaPorcentaje(porcentaje)\"\r\n                                            (keydown.Tab)=\"validaPorcentaje(porcentaje)\" maxlength=\"4\"\r\n                                            oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                            (keyup.enter)=\"agregarArticuloPack(articulo, descripcion, medida, uv, fraccion, valorUV, totalSD, porcentaje, total)\">\r\n                                    </td>\r\n                                    <td class=\"align-top pl-0\">\r\n                                        <input #total type=\"number\" class=\"form-control w-90 text-right\" disabled>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"col-sm-12 ph-0 mt-8\">\r\n                            <div class=\"col-sm-2 col-sm-offset-2\">\r\n                                <label class=\"col-sm-4 control-label pl-0 lh-11\">Total Neto</label>\r\n                                <div class=\"col-sm-8 ph-0\">\r\n                                    <label\r\n                                        class=\"col-sm-5 form-control text-right pad-sup-2\">{{iTotalNeto | number:'':'es'}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                                <label class=\"col-sm-4 control-label\">I.V.A.</label>\r\n                                <div class=\"col-sm-8 ph-0\">\r\n                                    <label\r\n                                        class=\"col-sm-5 form-control text-right pad-sup-2\">{{iIva | number:'':'es'}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-2 pr-0\">\r\n                                <label class=\"col-sm-4 control-label\">I.A.B.A.</label>\r\n                                <div class=\"col-sm-8 ph-0\">\r\n                                    <label\r\n                                        class=\"col-sm-5 form-control text-right pad-sup-2\">{{iIaba | number:'':'es'}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                                <label class=\"col-sm-4 control-label\">Total</label>\r\n                                <div class=\"col-sm-8 ph-0\">\r\n                                    <label\r\n                                        class=\"col-sm-5 form-control text-right pad-sup-2\">{{iTotal | number:'':'es'}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-2 pr-0\">\r\n                                <label class=\"col-sm-4 control-label pl-0\">Volumen</label>\r\n                                <div class=\"col-sm-8 ph-0\">\r\n                                    <label\r\n                                        class=\"col-sm-5 form-control text-right pad-sup-2\">{{iVolumen | number:'.2-2':'es'}}</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                </div>\r\n            </div>\r\n            <!-- fin tabla de articulos tipo operacion editar -->\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/pedidos/crearPedido/crearPedido.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/routes/pedidos/crearPedido/crearPedido.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".width-desc{width:60%}.filter-list{list-style:none;max-height:200px;overflow-y:scroll}\n"

/***/ }),

/***/ "./src/app/routes/pedidos/crearPedido/crearPedido.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/routes/pedidos/crearPedido/crearPedido.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListadoPedidoArticulos, CargaDetallePedido, CargaPedido, PreciosBaseVenta, CrearPedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoPedidoArticulos", function() { return ListadoPedidoArticulos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaDetallePedido", function() { return CargaDetallePedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaPedido", function() { return CargaPedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreciosBaseVenta", function() { return PreciosBaseVenta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearPedidoComponent", function() { return CrearPedidoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/pedidos.service */ "./src/app/core/consultaService/pedidos.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/consultaService/clientes.service */ "./src/app/core/consultaService/clientes.service.ts");
/* harmony import */ var _commonPopUp_rutAsociadoPopUp_rutAsociadoPopUp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../commonPopUp/rutAsociadoPopUp/rutAsociadoPopUp.component */ "./src/app/routes/commonPopUp/rutAsociadoPopUp/rutAsociadoPopUp.component.ts");
/* harmony import */ var _commonPopUp_listaLocalesPopUp_listaLocalesPopUp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../commonPopUp/listaLocalesPopUp/listaLocalesPopUp.component */ "./src/app/routes/commonPopUp/listaLocalesPopUp/listaLocalesPopUp.component.ts");
/* harmony import */ var _commonPopUp_relaComerPedidoPopUp_relaComerPedidoPopUp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../commonPopUp/relaComerPedidoPopUp/relaComerPedidoPopUp.component */ "./src/app/routes/commonPopUp/relaComerPedidoPopUp/relaComerPedidoPopUp.component.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../commonPopUp/sucursalesPopUp/sucursalesPopUp.component */ "./src/app/routes/commonPopUp/sucursalesPopUp/sucursalesPopUp.component.ts");
/* harmony import */ var _commonPopUp_rutasPopUp_rutasPopUp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../commonPopUp/rutasPopUp/rutasPopUp.component */ "./src/app/routes/commonPopUp/rutasPopUp/rutasPopUp.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _models_aSRV_EntPedido__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../models/aSRV_EntPedido */ "./src/app/routes/pedidos/models/aSRV_EntPedido.ts");
/* harmony import */ var _models_aSRV_EntArticulos__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../models/aSRV_EntArticulos */ "./src/app/routes/pedidos/models/aSRV_EntArticulos.ts");
/* harmony import */ var _commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../commonPopUp/utilGeoPopUp/utilGeoPopUp.component */ "./src/app/routes/commonPopUp/utilGeoPopUp/utilGeoPopUp.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















// inicio cambios jl





var ListadoPedidoArticulos = /** @class */ (function () {
    function ListadoPedidoArticulos() {
    }
    return ListadoPedidoArticulos;
}());

var CargaDetallePedido = /** @class */ (function () {
    function CargaDetallePedido() {
    }
    return CargaDetallePedido;
}());

var CargaPedido = /** @class */ (function () {
    function CargaPedido() {
    }
    return CargaPedido;
}());

var PreciosBaseVenta = /** @class */ (function () {
    function PreciosBaseVenta() {
    }
    return PreciosBaseVenta;
}());

var swal = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/lib/sweetalert.js");
var CrearPedidoComponent = /** @class */ (function () {
    // fin cambios jl
    function CrearPedidoComponent(modalService, authService, loader, utilService, pedidosService, setearDatos, consultasCliente, sucursalService, route, router) {
        this.modalService = modalService;
        this.authService = authService;
        this.loader = loader;
        this.utilService = utilService;
        this.pedidosService = pedidosService;
        this.setearDatos = setearDatos;
        this.consultasCliente = consultasCliente;
        this.sucursalService = sucursalService;
        this.route = route;
        this.router = router;
        this.fechaActual = new Date();
        this.fechaDespacho = new Date();
        this.user = {};
        this.localesClient = {};
        this.cargaLocalPedidos = {};
        this.cargaRelPedidos = {};
        this.datos = [];
        this.diaHabilitado = 'N';
        this.cantDias = 0;
        this.numDia = 0;
        this.pActualCreaPedido = 1;
        this.pActualCreaPedidoProtesto = 1;
        this.pManuales = 0;
        this.pHey = 0;
        this.pAutomaticos = 0;
        this.totalPedidos = 0;
        this.pedidos = [];
        this.actionBtns = false;
        this.requestdos = {};
        this.cargaRutaPedidos = {};
        this.localBtns = false;
        this.relacionBtns = false;
        this.direccionBtns = false;
        this.articulosPedidos = [];
        this.filterData = '';
        this.filterDesc = '';
        this.cargaArticuloPedido = {};
        this.dataArticulo = [];
        // inicio cambios jl
        this.articuloNuevo = true;
        this.packArticulo = [];
        this.hidUnidadesVta = 0;
        this.articuloSeleccionado = {};
        this.requestAutocomplete = {};
        this.existeArticuloPack = false;
        this.habilitarFuncionalidades = false;
        this.request = {};
        this.tipoOperacion = 'Crear';
        // suscripciones: any;
        this.suscripciones = [];
        this.cupoEditar = 0;
        this.listadoProtestos = [];
        this.estadoCliente = '';
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nRutCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nombreCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            numLocal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            descLocal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            sCodRelacionComer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            descRelaComercial: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            codSucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            descSucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            sCodRuta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            descRuta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            sCodTerritorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            descTerritorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            direccionPedido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            idDireccionEntrega: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            descDirEntrega: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            formPago: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            cupos: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            fhoPedido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            fhoEntrega: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            sObservacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true })
        });
    }
    CrearPedidoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // inicio cambios jl
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_16__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_17___default.a);
        //fin cambios jl
        this.forma.controls.fhoPedido.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.subData = this.setearDatos.datosGeo$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.subData2 = this.setearDatos.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.subData3 = this.sucursalService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.user = this.authService.getDatosUser();
        this.parametrosAutocomplete = this.authService.getArticuloAutocomplete();
        if (this.pedidosService.selectedPedido.tipoOperacion === 'editar') {
            this.tipoOperacion = this.pedidosService.selectedPedido.tipoOperacion;
            this.idPedido = this.pedidosService.selectedPedido.idPedido;
            //console.log('selectedPedido => : ', this.pedidosService.selectedPedido);
            this.deshabilitaControlesFormulario(this.forma);
            this.habilitarControlesEditar();
            this.listarPedidoArticulos();
        }
    };
    CrearPedidoComponent.prototype.habilitarControlesEditar = function () {
        this.forma.controls.codSucursal.enable();
        this.forma.controls.sCodRuta.enable();
        this.forma.controls.idDireccionEntrega.enable();
        this.forma.controls.fhoEntrega.enable();
        this.forma.controls.sObservacion.enable();
        this.forma.controls.nRutCliente.disable();
    };
    CrearPedidoComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
        if (this.subData2 !== undefined) {
            this.subData2.unsubscribe();
        }
        if (this.subData3 !== undefined) {
            this.subData3.unsubscribe();
        }
        this.tipoOperacion = '';
        this.pedidosService.selectedPedido = {
            tipoOperacion: 'crear',
            idPedido: 0
        };
    };
    CrearPedidoComponent.prototype.openModalCliente = function () {
        this.origen = 'clientePedido';
        var initialState = {
            titulo: 'Cliente',
            origen: 'clientePedido'
        };
        this.clienteModal = this.modalService.show(_commonPopUp_rutAsociadoPopUp_rutAsociadoPopUp_component__WEBPACK_IMPORTED_MODULE_10__["RutAsociadoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    CrearPedidoComponent.prototype.validaCliente = function () {
        var _this = this;
        this.loader.show();
        if (this.forma.controls.nRutCliente.value === '') {
            this.loader.hide();
            this.forma.controls.nRutCliente.setValue('');
            this.forma.controls.nombreCliente.setValue('');
            this.forma.controls.numLocal.disable();
            this.localBtns = false;
        }
        else {
            this.requestdos.rutClientes =
                Number(this.forma.controls.nRutCliente.value.substr(0, this.forma.controls.nRutCliente.value.length - 1));
            this.requestdos.rutOperador = Number(this.user.nrutoperador);
            //console.log(this.requestdos);
            this.consultasCliente.getDetallesClientes(this.requestdos)
                .subscribe(function (data) {
                _this.loader.hide();
                if (data) {
                    if (data.error.codError !== 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.cliente;
                        if (_this.datos.length > 0) {
                            _this.estadoCliente = _this.datos[0].cli_scodestado;
                            _this.forma.controls.nombreCliente.setValue(_this.datos[0].cli_snombre);
                            _this.forma.controls.numLocal.enable();
                            _this.localBtns = true;
                            _this.listarProtestos();
                        }
                        else {
                            _this.forma.controls.nRutCliente.setValue('');
                            _this.forma.controls.nombreCliente.setValue('');
                            swal('Atención', 'No Existe este Cliente', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.loader.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    CrearPedidoComponent.prototype.openModalLocales = function () {
        this.origen = 'localesPedido';
        this.rutLocal = Number(this.forma.controls.nRutCliente.value.toString().
            substr(0, this.forma.controls.nRutCliente.value.toString().length - 1));
        var initialState = {
            parametro: this.user.nrutoperador,
            parametrodos: this.rutLocal,
            origen: 'localesPedido'
        };
        this.localesPedidosModal = this.modalService.show(_commonPopUp_listaLocalesPopUp_listaLocalesPopUp_component__WEBPACK_IMPORTED_MODULE_11__["ListaLocalesPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    CrearPedidoComponent.prototype.validaLocal = function () {
        var _this = this;
        this.loader.show();
        if (this.forma.controls.numLocal.value === '') {
            this.loader.hide();
            this.forma.controls.numLocal.setValue('');
            this.forma.controls.descLocal.setValue('');
            this.forma.controls.sCodRelacionComer.disable();
            this.relacionBtns = false;
        }
        else {
            this.cargaLocalPedidos.numLocal = Number(this.forma.controls.numLocal.value);
            this.cargaLocalPedidos.rutCliente = Number(this.forma.controls.nRutCliente.value.
                substr(0, this.forma.controls.nRutCliente.value.length - 1));
            this.cargaLocalPedidos.rutOperador = Number(this.user.nrutoperador);
            //console.log(this.cargaLocalPedidos);
            this.pedidosService.getCargaLocalPedidos(this.cargaLocalPedidos)
                .subscribe(function (data) {
                _this.loader.hide();
                if (data) {
                    if (data.error.codError !== 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.cargaLocal;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.descLocal.setValue(_this.datos[0].loc_snombre);
                            _this.forma.controls.sCodRelacionComer.enable();
                            _this.relacionBtns = true;
                        }
                        else {
                            _this.forma.controls.numLocal.setValue('');
                            _this.forma.controls.descLocal.setValue('');
                            _this.relacionBtns = false;
                            _this.forma.controls.sCodRelacionComer.disable();
                            swal('Atención', 'No Existe este Local', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.loader.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    CrearPedidoComponent.prototype.openModalRelaciones = function () {
        this.origen = 'relacionesPedidos';
        var initialState = {
            parametro: this.user.nrutoperador,
            parametrodos: this.forma.controls.nRutCliente.value.substr(0, this.forma.controls.nRutCliente.value.length - 1),
            parametrotres: this.forma.controls.numLocal.value,
            origen: 'relacionesPedidos'
        };
        this.relacionesPedidosModal = this.modalService.show(_commonPopUp_relaComerPedidoPopUp_relaComerPedidoPopUp_component__WEBPACK_IMPORTED_MODULE_12__["RelaComerPedidoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    CrearPedidoComponent.prototype.validaRelacion = function () {
        var _this = this;
        this.loader.show();
        this.forma.controls.descRelaComercial.setValue('');
        if (this.forma.controls.sCodRelacionComer.value === '') {
            this.loader.hide();
            this.forma.controls.sCodRelacionComer.setValue('');
            this.forma.controls.descRelaComercial.setValue('');
            this.forma.controls.idDireccionEntrega.disable();
            this.direccionBtns = false;
        }
        else {
            this.cargaRelPedidos.nNumLocal = Number(this.forma.controls.numLocal.value);
            this.cargaRelPedidos.nRutCliente = Number(this.forma.controls.nRutCliente.value.
                substr(0, this.forma.controls.nRutCliente.value.length - 1));
            this.cargaRelPedidos.nRutOperador = Number(this.user.nrutoperador);
            this.cargaRelPedidos.sCodRelacionComercial = this.forma.controls.sCodRelacionComer.value;
            //console.log(this.cargaRelPedidos);
            this.cupoEditar = 0;
            this.pedidosService.getCargaRelacionesPedidos(this.cargaRelPedidos)
                .subscribe(function (data) {
                //console.log(data);
                _this.loader.hide();
                if (data) {
                    if (data.error.codError !== 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.relacionComercial;
                        if (_this.datos.length > 0) {
                            _this.fechaDespacho = (_this.utilService.formatStringToDate(_this.forma.controls.fhoPedido.value));
                            _this.cupoEditar = _this.datos[0].rco_ncupodisponible;
                            _this.forma.controls.descRelaComercial.setValue(_this.datos[0].rel_sdescripcionrelacioncomerc);
                            console.log('this.cupoEditar => : ', _this.cupoEditar);
                            while ((_this.diaHabilitado === 'N') && (_this.cantDias <= 8)) {
                                _this.numDia = _this.fechaDespacho.getDay();
                                if ((_this.numDia === 1) && (_this.datos[0].rco_sindlunes !== 'N')) {
                                    _this.forma.controls.sCodRuta.setValue(_this.datos[0].rco_scodrutalunes);
                                    _this.forma.controls.descRuta.setValue(_this.datos[0].sdesrutalunes);
                                    _this.forma.controls.codSucursal.setValue(_this.datos[0].scodsuclunes);
                                    _this.forma.controls.descSucursal.setValue(_this.datos[0].sdessuclunes);
                                    _this.diaHabilitado = 'S';
                                }
                                if ((_this.numDia === 2) && (_this.datos[0].rco_sindmartes !== 'N')) {
                                    _this.forma.controls.sCodRuta.setValue(_this.datos[0].rco_scodrutamartes);
                                    _this.forma.controls.descRuta.setValue(_this.datos[0].sdesrutamartes);
                                    _this.forma.controls.codSucursal.setValue(_this.datos[0].scodsucmartes);
                                    _this.forma.controls.descSucursal.setValue(_this.datos[0].sdessucmartes);
                                    _this.diaHabilitado = 'S';
                                }
                                if ((_this.numDia === 3) && (_this.datos[0].rco_sindmiercoles !== 'N')) {
                                    _this.forma.controls.sCodRuta.setValue(_this.datos[0].rco_scodrutamiercoles);
                                    _this.forma.controls.descRuta.setValue(_this.datos[0].sdesrutamiercoles);
                                    _this.forma.controls.codSucursal.setValue(_this.datos[0].scodsucmiercoles);
                                    _this.forma.controls.descSucursal.setValue(_this.datos[0].sdessucmiercoles);
                                    _this.diaHabilitado = 'S';
                                }
                                if ((_this.numDia === 4) && (_this.datos[0].rco_sindjueves !== 'N')) {
                                    _this.forma.controls.sCodRuta.setValue(_this.datos[0].rco_scodrutajueves);
                                    _this.forma.controls.descRuta.setValue(_this.datos[0].sdesrutajueves);
                                    _this.forma.controls.codSucursal.setValue(_this.datos[0].scodsucjueves);
                                    _this.forma.controls.descSucursal.setValue(_this.datos[0].sdesrutajueves);
                                    _this.diaHabilitado = 'S';
                                }
                                if ((_this.numDia === 5) && (_this.datos[0].rco_sindviernes !== 'N')) {
                                    _this.forma.controls.sCodRuta.setValue(_this.datos[0].rco_scodrutaviernes);
                                    _this.forma.controls.descRuta.setValue(_this.datos[0].sdesrutaviernes);
                                    _this.forma.controls.codSucursal.setValue(_this.datos[0].scodsucviernes);
                                    _this.forma.controls.descSucursal.setValue(_this.datos[0].sdessucviernes);
                                    _this.diaHabilitado = 'S';
                                }
                                if ((_this.numDia === 6) && (_this.datos[0].rco_sindviernes !== 'N')) {
                                    _this.forma.controls.sCodRuta.setValue(_this.datos[0].rco_scodrutasabado);
                                    _this.forma.controls.descRuta.setValue(_this.datos[0].sdesrutasabado);
                                    _this.forma.controls.codSucursal.setValue(_this.datos[0].scodsucsabado);
                                    _this.forma.controls.descSucursal.setValue(_this.datos[0].sdessucsabado);
                                    _this.diaHabilitado = 'S';
                                }
                                _this.cantDias++;
                                _this.fechaDespacho = new Date(_this.fechaDespacho.getTime() + 1 * 24 * 60 * 60 * 1000);
                            }
                            _this.forma.controls.fhoEntrega.setValue(_this.utilService.dateToStringFormat(_this.fechaDespacho));
                            _this.forma.controls.idDireccionEntrega.setValue(_this.datos[0].rco_niddireccionentrega);
                            _this.forma.controls.descDirEntrega.setValue(_this.datos[0].dic_sdireccionentrega);
                            _this.forma.controls.direccionPedido.setValue(_this.datos[0].dic_sdireccionlocal);
                            _this.forma.controls.sCodTerritorio.setValue(_this.datos[0].ter_scodterritorio);
                            _this.forma.controls.descTerritorio.setValue(_this.datos[0].ter_sdesterritorio);
                            _this.forma.controls.formPago.setValue(_this.datos[0].rco_sdestipopago);
                            _this.forma.controls.cupos.setValue(_this.datos[0].rco_ncupodisponible);
                            _this.forma.controls.sObservacion.setValue(_this.datos[0].loc_snombre);
                            _this.forma.controls.idDireccionEntrega.enable();
                            _this.direccionBtns = true;
                        }
                        else if (_this.datos.length === 0) {
                            _this.fechaDespacho = (_this.utilService.formatStringToDate(_this.forma.controls.fhoPedido.value));
                            _this.fechaDespacho = new Date(_this.fechaDespacho.getTime() + 24 * 60 * 60 * 1000);
                            _this.forma.controls.fhoEntrega.setValue(_this.utilService.dateToStringFormat(_this.fechaDespacho));
                            _this.forma.controls.codSucursal.setValue('');
                            _this.forma.controls.descSucursal.setValue('');
                            _this.forma.controls.idDireccionEntrega.setValue('');
                            _this.forma.controls.descDirEntrega.setValue('');
                            _this.forma.controls.direccionPedido.setValue('');
                            _this.forma.controls.sCodTerritorio.setValue('');
                            _this.forma.controls.descTerritorio.setValue('');
                            _this.forma.controls.formPago.setValue('');
                            _this.forma.controls.cupos.setValue('');
                            _this.forma.controls.sObservacion.setValue('');
                            _this.forma.controls.sCodRuta.setValue('');
                            _this.forma.controls.descRuta.setValue('');
                            _this.forma.controls.idDireccionEntrega.enable();
                            _this.direccionBtns = true;
                            _this.forma.controls.sCodRelacionComer.setValue('');
                            swal('Atención', 'No Existe esta Relación', 'warning');
                        }
                        else {
                            _this.forma.controls.sCodRelacionComer.setValue('');
                            _this.forma.controls.descRelaComercial.setValue('');
                            _this.forma.controls.idDireccionEntrega.setValue('');
                            _this.forma.controls.descDirEntrega.setValue('');
                            _this.forma.controls.direccionPedido.setValue('');
                            _this.forma.controls.descRelaComercial.setValue('');
                            _this.forma.controls.sCodTerritorio.setValue('');
                            _this.forma.controls.descTerritorio.setValue('');
                            _this.forma.controls.formPago.setValue('');
                            _this.forma.controls.cupos.setValue('');
                            _this.forma.controls.sObservacion.setValue('');
                            _this.forma.controls.codSucursal.setValue('');
                            _this.forma.controls.descSucursal.setValue('');
                            _this.forma.controls.sCodRuta.setValue('');
                            _this.forma.controls.descRuta.setValue('');
                        }
                    }
                } // aqui ifdata
            }, function (error) {
                _this.loader.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    CrearPedidoComponent.prototype.habilitarSeleccionControles = function () {
        this.habilitarFuncionalidades = true;
        this.forma.controls.codSucursal.enable();
        this.forma.controls.sCodRuta.enable();
        this.forma.controls.idDireccionEntrega.enable();
        this.forma.controls.fhoEntrega.enable();
        this.forma.controls.sObservacion.enable();
    };
    CrearPedidoComponent.prototype.openModalSucursales = function () {
        this.origen = 'sucursales';
        var initialState = {
            parametro: Number(this.user.nrutoperador),
            origen: 'sucursales'
        };
        this.sucursalesPeidosModal = this.modalService.show(_commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_14__["SucursalesPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    CrearPedidoComponent.prototype.validaSucursales = function () {
        var _this = this;
        this.loader.show();
        if (this.forma.controls.codSucursal.value === '') {
            this.loader.hide();
            this.forma.controls.codSucursal.setValue('');
            this.forma.controls.descSucursal.setValue('');
        }
        else {
            this.requestdos.nRutOperador = Number(this.user.nrutoperador);
            this.requestdos.sCodSucursal = this.forma.controls.codSucursal.value;
            //console.log(this.requestdos);
            this.sucursalService.getCargaSucursales(this.requestdos)
                .subscribe(function (data) {
                //console.log(data);
                _this.loader.hide();
                if (data) {
                    if (data.error.codError !== 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.sucursal;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.descSucursal.setValue(_this.datos[0].suc_sdescsucursal);
                            _this.forma.controls.sCodRuta.setValue('');
                            _this.forma.controls.descRuta.setValue('');
                        }
                        else {
                            _this.forma.controls.codSucursal.setValue('');
                            _this.forma.controls.descSucursal.setValue('');
                            swal('Atención', 'No Existe esta Sucursal', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.loader.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    CrearPedidoComponent.prototype.openModalRutas = function () {
        if (this.forma.controls.fhoEntrega.value !== '') {
            this.origen = 'rutaPedido';
            var initialState = {
                parametro: this.forma.controls.codSucursal.value,
                parametroDos: this.forma.controls.fhoEntrega.value,
                origen: 'rutaPedido'
            };
            this.rutasPedidosModal = this.modalService.show(_commonPopUp_rutasPopUp_rutasPopUp_component__WEBPACK_IMPORTED_MODULE_15__["RutasPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        }
        else {
            if (this.forma.controls.fhoEntrega.value === '') {
                swal('Atención', 'Introduzca una fecha valida de entrega', 'error');
                $('[name=fhoEntrega]').addClass('error-form');
            }
            else {
                $('[name=fhoEntrega]').removeClass('error-form');
            }
        }
    };
    CrearPedidoComponent.prototype.validaRutas = function () {
        var _this = this;
        this.loader.show();
        if (this.forma.controls.sCodRuta.value === '') {
            this.loader.hide();
            this.forma.controls.sCodRuta.setValue('');
            this.forma.controls.descRuta.setValue('');
        }
        else {
            this.cargaRutaPedidos.codRuta = this.forma.controls.sCodRuta.value;
            this.cargaRutaPedidos.codSucursal = this.forma.controls.codSucursal.value;
            this.cargaRutaPedidos.rutOperador = this.user.nrutoperador;
            //console.log(this.cargaRutaPedidos);
            this.pedidosService.getCargaRutasPedidos(this.cargaRutaPedidos)
                .subscribe(function (data) {
                //console.log(data);
                _this.loader.hide();
                if (data) {
                    if (data.error.codError !== 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.cargaRutas;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.descRuta.setValue(_this.datos[0].rut_sdesruta);
                        }
                        else {
                            _this.forma.controls.sCodRuta.setValue('');
                            _this.forma.controls.descRuta.setValue('');
                            swal('Atención', 'No Existe esta Ruta', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.loader.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    CrearPedidoComponent.prototype.openModalDirecciones = function () {
        this.origen = 'rutaPedido';
        var initialState = {
            parametro: this.forma.controls.codSucursal.value,
            parametroDos: this.forma.controls.fhoEntrega.value,
            origen: 'rutaPedido'
        };
        this.rutasPedidosModal = this.modalService.show(_commonPopUp_rutasPopUp_rutasPopUp_component__WEBPACK_IMPORTED_MODULE_15__["RutasPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    CrearPedidoComponent.prototype.buscar = function () { };
    CrearPedidoComponent.prototype.generateExcel = function () { };
    CrearPedidoComponent.prototype.setData = function (resData) {
        if (resData !== 0) {
            switch (this.origen) {
                case 'clientePedido': {
                    this.forma.reset();
                    this.estadoCliente = resData.cli_scodestado;
                    this.forma.controls.fhoPedido.setValue(this.utilService.dateToStringFormat(this.fechaActual));
                    this.forma.controls.nRutCliente.setValue("" + resData.cli_nrutcliente + resData.cli_sdigverificador);
                    this.forma.controls.nombreCliente.setValue(resData.cli_snombre);
                    this.forma.controls.numLocal.enable();
                    this.requestdos.rutClientes =
                        Number(this.forma.controls.nRutCliente.value.substr(0, this.forma.controls.nRutCliente.value.length - 1));
                    this.requestdos.rutOperador = Number(this.user.nrutoperador);
                    this.localBtns = true;
                    this.listarProtestos();
                    break;
                }
                case 'localesPedido': {
                    this.forma.controls.numLocal.setValue(resData.loc_nnumlocal);
                    this.forma.controls.descLocal.setValue(resData.loc_snombre);
                    this.forma.controls.sCodRelacionComer.enable();
                    this.relacionBtns = true;
                    break;
                }
                case 'relacionesPedidos': {
                    this.forma.controls.sCodRelacionComer.setValue(resData.rco_scodrelacioncomercial);
                    this.forma.controls.descRelaComercial.setValue(resData.rel_sdescripcionrelacioncomerc);
                    this.validaRelacion();
                    this.forma.controls.idDireccionEntrega.enable();
                    this.direccionBtns = true;
                    this.habilitarSeleccionControles();
                    break;
                }
                case 'sucursales': {
                    this.forma.controls.codSucursal.setValue(resData.suc_scodsucursal);
                    this.forma.controls.descSucursal.setValue(resData.suc_sdescsucursal);
                    this.validaSucursales();
                    break;
                }
                case 'rutaPedido': {
                    this.forma.controls.sCodRuta.setValue(resData.rut_scodruta);
                    this.forma.controls.descRuta.setValue(resData.rut_sdeSruta);
                    this.validaRutas();
                    break;
                }
                case 'direEntregas': {
                    this.forma.controls.idDireccionEntrega.setValue(resData.dic_niddireccion);
                    this.forma.controls.descDirEntrega.setValue(resData.dic_sdireccion);
                    this.validaRutas();
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    CrearPedidoComponent.prototype.setDataArticuloGrilla = function (data, articulo, descripcion, medida, unidadVenta, fraccion, valorUV, descuento) {
        var _this = this;
        this.loader.show();
        //console.log(data);
        this.cargaArticuloPedido.nNumLocal = 0; // campo local
        this.cargaArticuloPedido.nRutCliente = 0; // campo cliente
        this.cargaArticuloPedido.nRutOperador = Number(this.user.nrutoperador);
        this.cargaArticuloPedido.sCodBodega = null; // sucursal o relacion comercial
        this.cargaArticuloPedido.sCodFormato = data.art_scodformato;
        this.cargaArticuloPedido.sCodRelacionComer = null;
        this.cargaArticuloPedido.sCodVariedad = data.art_scodvariedad;
        this.pedidosService.getCargaArticuloAutoComplete(this.cargaArticuloPedido)
            .subscribe(function (data) {
            //console.log(data);
            _this.loader.hide();
            if (data) {
                if (data.error.codError !== 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
                else {
                    _this.datos = data.articulo;
                    if (_this.datos.length > 0) {
                        //console.log('PUEDEAGREGAR');
                        articulo.value = _this.datos[0].art_scodformato + "-" + _this.datos[0].art_scodvariedad;
                        descripcion.value = _this.datos[0].art_sdescripcion;
                        medida.value = _this.datos[0].art_smedida;
                        unidadVenta.value = 0;
                        fraccion.value = 0;
                        valorUV.value = _this.datos[0].nprecioventa;
                        descuento.value = 0;
                        _this.verListaArticulo = false;
                        _this.verListaDescripcion = false;
                        _this.dataArticulo = _this.datos;
                    }
                    else {
                        swal('Atención', 'No Existe este Articulo', 'warning');
                    }
                }
            }
        }, function (error) {
            _this.loader.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    CrearPedidoComponent.prototype.setArticulo = function (articulo) {
        if (articulo.value === '') {
            this.verListaArticulo = false;
        }
        else {
            this.verListaArticulo = true;
        }
    };
    CrearPedidoComponent.prototype.validaArticulo = function (articulo, descripcion, medida, unidadVenta, fraccion, valorUV, descuento) {
        var articuloExiste = false;
        this.loader.show();
        if (articulo.value !== '') {
            // tslint:disable-next-line: forin
            for (var i in this.parametrosAutocomplete) {
                var str = this.parametrosAutocomplete[i].art_scodformato + "-" + this.parametrosAutocomplete[i].art_scodvariedad;
                if (str.startsWith("" + articulo.value)) {
                    //console.log(str, this.parametrosAutocomplete[i]);
                    articulo.value = str;
                    descripcion.value = this.parametrosAutocomplete[i].art_sdescripcion;
                    articuloExiste = true;
                    this.verListaArticulo = false;
                    this.setDataArticuloGrilla(this.parametrosAutocomplete[i], articulo, descripcion, medida, unidadVenta, fraccion, valorUV, descuento);
                    this.loader.hide();
                    break;
                }
            }
            if (!articuloExiste) {
                //console.log(articuloExiste);
                articulo.value = '';
                descripcion.value = '';
                this.verListaArticulo = false;
                this.verListaDescripcion = false;
                this.loader.hide();
                swal('Atención', 'Artículo no existe', 'warning');
            }
        }
    };
    CrearPedidoComponent.prototype.agregarArticulo = function (articulo, descripcion, medida, unidadVenta, fraccion, valorUV, descuento) {
        this.puedeAgregar = false;
        var artSelected = {
            art_scodformato: this.dataArticulo[0].art_scodformato,
            art_scodvariedad: this.dataArticulo[0].art_scodvariedad,
            art_sdescripcion: this.dataArticulo[0].art_sdescripcion,
            art_scodsap: '',
            art_smedida: this.dataArticulo[0].art_smedida,
            art_nunidadventa: '',
            art_scodformatofraccion: '',
            formato: '',
            art_nunidaddistribucion: 0,
            art_nunidadexpedicion: 0,
            npreciobase: 0,
            nprecioventa: this.dataArticulo[0].nprecioventa,
            art_sindiaba: '',
            nstockdisponible: 0,
            nstockminimo: 0,
            nstockcritico: 0,
            art_nlargovta: 0,
            art_nanchovta: 0,
            art_naltovta: 0,
            nconvermedidavta: 0,
            art_nlargofraccion: 0,
            art_nanchofraccion: 0,
            art_naltofraccion: 0,
            nconvermedidafraccion: this.dataArticulo[0].art_smedida,
            relacioncomercial: ''
        };
        //console.log(artSelected);
        //console.log(this.articulosPedidos);
        if (this.articulosPedidos.length > 0) {
            for (var i in this.articulosPedidos) {
                // tslint:disable-next-line: max-line-length
                if (this.articulosPedidos[i].art_scodformato === artSelected.art_scodformato && this.articulosPedidos[i].art_scodvariedad === artSelected.art_scodvariedad) {
                    this.puedeAgregar = false;
                    break;
                }
                else {
                    this.puedeAgregar = true;
                }
            }
            if (this.puedeAgregar) {
                this.articulosPedidos.push(artSelected);
            }
            else {
                swal('Atención', 'Artículo registrado', 'warning');
            }
        }
        else {
            this.articulosPedidos.push(artSelected);
        }
        articulo.value = '';
        descripcion.value = '';
        medida.value = '';
        unidadVenta.value = '';
        fraccion.value = '';
        valorUV.value = '';
        descuento.value = '';
        this.verListaArticulo = false;
        this.puedeAgregar = false;
    };
    CrearPedidoComponent.prototype.setDescripcion = function (descripcion) {
        if (descripcion.value === '') {
            this.verListaDescripcion = false;
        }
        else {
            this.verListaDescripcion = true;
        }
    };
    CrearPedidoComponent.prototype.validaDescripcion = function (articulo, descripcion) {
        var articuloExiste = false;
        if (descripcion.value !== '') {
            // tslint:disable-next-line: forin
            for (var i in this.parametrosAutocomplete) {
                var str = (this.parametrosAutocomplete[i].art_sdescripcion).toLowerCase();
                if (str.startsWith("" + (descripcion.value).toLowerCase())) {
                    //console.log(str, this.parametrosAutocomplete[i]);
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
    CrearPedidoComponent.prototype.seleccionaDescripcion = function (data, articulo, descripcion) {
        this.puedeAgregar = false;
        //console.log('ENTRO', this.articulosPedidos.length);
        var artSelected = {
            dac_scodformato: data.art_scodformato,
            dac_scodvariedad: data.art_scodvariedad,
            art_sdescripcion: data.art_sdescripcion
        };
        if (this.articulosPedidos.length > 0) {
            for (var i in this.articulosPedidos) {
                if (this.articulosPedidos[i].dac_scodformato === data.art_scodformato && this.articulosPedidos[i].dac_scodvariedad === data.art_scodvariedad) {
                    this.puedeAgregar = false;
                    break;
                }
                else {
                    this.puedeAgregar = true;
                }
            }
            if (this.puedeAgregar) {
                //console.log('en el puedeAgregar');
                this.articulosPedidos.push(artSelected);
            }
            else {
                swal('Atención', 'Artículo registrado', 'warning');
            }
        }
        else {
            //console.log('en el push');
            this.articulosPedidos.push(artSelected);
        }
        descripcion.value = '';
        articulo.value = '';
        this.verListaDescripcion = false;
    };
    // inicio cambios jl
    CrearPedidoComponent.prototype.seleccionaArticulo = function (data, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje) {
        //console.log('seleccionaArticulo');
        //console.log('articulosPack.length', this.packArticulo.length);
        if (this.packArticulo.length === 0) {
            this.cargaInfoArticuloAutoComplete(data.art_scodformato, data.art_scodvariedad, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje);
        }
        else {
            //console.log('validar existe prod.');
            var str = data.art_scodformato + "-" + data.art_scodvariedad;
            this.existeArticuloPack = this.validaExisteProducto(str);
            //console.log('this.existeArticuloPack', this.existeArticuloPack);
            if (!this.existeArticuloPack) {
                //console.log('buscar info');
                this.cargaInfoArticuloAutoComplete(data.art_scodformato, data.art_scodvariedad, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje);
            }
            else {
                articulo.value = '';
                descripcion.value = '';
                articulo.focus();
            }
        }
        this.verListaArticulo = false;
        this.verListaDescripcion = false;
    };
    CrearPedidoComponent.prototype.validaExisteProducto = function (str) {
        //console.log('str', str);
        for (var i in this.packArticulo) {
            if (str === this.packArticulo[i].articulo) {
                //console.log('existe');
                return true;
            }
        }
        return false;
    };
    CrearPedidoComponent.prototype.validaCantidad = function (valor, articulo) {
        if (valor.value === '') {
            valor.value = 0;
        }
        if (articulo !== undefined) {
            this.recalcularMontos(articulo);
            this.calcularTotales();
        }
    };
    CrearPedidoComponent.prototype.recalcularMontos = function (articulo) {
        //console.log('recalcular', articulo);
        var iTotalUniVta = (articulo.uv * articulo.valorUV);
        var dPrecioFraccion = (articulo.valorUV / articulo.hidUnidadesVta);
        var iTotalFraccion = articulo.fraccion * Math.round(dPrecioFraccion);
        articulo.totalSD = iTotalUniVta + iTotalFraccion;
        articulo.total = Math.round(articulo.totalSD - ((articulo.totalSD * (parseFloat(articulo.porcentaje)) / 100)));
    };
    CrearPedidoComponent.prototype.calcularTotales = function () {
        var _this = this;
        this.iTotalNetoIaba = 0;
        this.iTotalNeto = 0;
        this.iIva = 0;
        this.iIaba = 0;
        this.iTotal = 0;
        this.iVolumen = 0;
        this.packArticulo.forEach(function (articulo) {
            //Totales
            _this.iTotalNeto = _this.iTotalNeto + articulo.total;
            //console.log('this.iTotalNeto', this.iTotalNeto);
            if (_this.hidIndIaba === 'S') {
                _this.iTotalNetoIaba = _this.iTotalNetoIaba + articulo.total;
            }
            //IVA
            var iva = _this.authService.getParametrosIvaIaba().filter(function (item) { return item.par_codparametro01 === '00001'; });
            _this.iIva = Math.round((_this.iTotalNeto * iva[0].par_numero01) / 100);
            //IABA
            var iaba = _this.authService.getParametrosIvaIaba().filter(function (item) { return item.par_codparametro01 === '00002'; });
            _this.iIaba = Math.round((_this.iTotalNetoIaba * iaba[0].par_numero01) / 100);
            //Total
            _this.iTotal = _this.iTotalNeto + _this.iIva + _this.iIaba;
            //Volumen
            var iVolumenArticulo = _this.utilService.calculaVolumen(articulo.art_nlargovta, articulo.art_nanchovta, articulo.art_naltovta, articulo.nconvermedidavta) * articulo.uv;
            _this.iVolumen = _this.iVolumen + iVolumenArticulo;
            iVolumenArticulo = _this.utilService.calculaVolumen(articulo.art_nlargofraccion, articulo.art_nanchofraccion, articulo.art_naltofraccion, articulo.nconvermedidafraccion) * articulo.fraccion;
            _this.iVolumen = _this.iVolumen + iVolumenArticulo;
        });
    };
    CrearPedidoComponent.prototype.validaPorcentaje = function (porcentaje, articulo) {
        if (porcentaje.value === '' && this.puedeAgregar) {
            porcentaje.value = 0;
        }
        if (porcentaje.value > 100) {
            porcentaje.value = 100;
        }
        if (articulo !== undefined) {
            this.recalcularMontos(articulo);
            this.calcularTotales();
        }
    };
    CrearPedidoComponent.prototype.agregarArticuloPack = function (articulo, descripcion, medida, uv, fraccion, valorUV, totalSD, porcentaje, total) {
        //valida tipo de impuesto
        if (this.packArticulo.length > 0) {
            //console.log('this.packArticulo[0].art_sindiaba', this.packArticulo[0].art_sindiaba);
            //console.log('this.articuloSeleccionado.art_sindiaba', this.articuloSeleccionado.art_sindiaba);
            if (this.packArticulo[0].art_sindiaba !== this.articuloSeleccionado.art_sindiaba) {
                this.puedeAgregar = false;
                swal('Atención', 'No Puede Agregar Articulos con diferente tipo de manejo de Impuesto', 'warning');
                articulo.value = '';
                descripcion.value = '';
                medida.value = '';
                uv.value = '';
                fraccion.value = '';
                valorUV.value = '';
                totalSD.value = '';
                porcentaje.value = '';
                total.value = '';
            }
        }
        if (this.puedeAgregar) {
            this.validaPorcentaje(porcentaje);
            //console.log('en agregar art. pack');
            //console.log('uv.value', uv.value, 'fraccion.value', fraccion.value);
            if (uv.value === '0' && fraccion.value === '0') {
                swal('Atención', 'Debe Agregar fracciones o Unidades al Articulo', 'warning');
            }
            else {
                //console.log('this.hidUnidadesVta', this.hidUnidadesVta);
                var iUV = Math.round((parseInt(fraccion.value, 10) / this.hidUnidadesVta) + parseInt(uv.value, 10));
                var iFraccion = (parseInt(fraccion.value, 10) % this.hidUnidadesVta);
                //console.log('iUV', iUV);
                //console.log('iFraccion', iFraccion);
                var iTotalUniVta = (iUV * parseInt(valorUV.value, 10));
                var dPrecioFraccion = (parseInt(valorUV.value, 10) / this.hidUnidadesVta);
                var iTotalFraccion = iFraccion * Math.round(dPrecioFraccion);
                var iTotalSD = iTotalUniVta + iTotalFraccion;
                var iNetoDetalle = Math.round(iTotalSD - ((iTotalSD * (parseFloat(porcentaje.value)) / 100)));
                //console.log('iTotalUniVta', iTotalUniVta);
                //console.log('dPrecioFraccion', dPrecioFraccion);
                //console.log('iTotalFraccion', iTotalFraccion);
                //console.log('totalSD', iTotalSD);
                //console.log('iNetoDetalle', iNetoDetalle);
                //console.log('articulo.value => : ', articulo.value);
                //console.log('descripcion.value => : ', descripcion.value);
                var objeto = {
                    bCheck: false,
                    articulo: articulo.value,
                    descripcion: descripcion.value,
                    medidaUV: medida.value,
                    uv: iUV,
                    fraccion: iFraccion,
                    valorUV: parseInt(valorUV.value, 10),
                    totalSD: iTotalSD,
                    porcentaje: parseFloat(porcentaje.value),
                    total: iNetoDetalle,
                    art_nlargovta: this.articuloSeleccionado.art_nlargovta,
                    art_nanchovta: this.articuloSeleccionado.art_nanchovta,
                    art_naltovta: this.articuloSeleccionado.art_naltovta,
                    nconvermedidavta: this.articuloSeleccionado.nconvermedidavta,
                    art_nlargofraccion: this.articuloSeleccionado.art_nlargofraccion,
                    art_nanchofraccion: this.articuloSeleccionado.art_nanchofraccion,
                    art_naltofraccion: this.articuloSeleccionado.art_naltofraccion,
                    nconvermedidafraccion: this.articuloSeleccionado.nconvermedidafraccion,
                    hidUnidadesVta: this.hidUnidadesVta,
                    art_nunidadventa: this.articuloSeleccionado.art_nunidadventa,
                    art_sindiaba: this.articuloSeleccionado.art_sindiaba,
                    relacioncomercial: this.articuloSeleccionado.relacioncomercial
                };
                this.packArticulo.push(objeto);
                this.calcularTotales();
                this.puedeAgregar = false;
                articulo.value = '';
                descripcion.value = '';
                medida.value = '';
                uv.value = '';
                fraccion.value = '';
                valorUV.value = '';
                totalSD.value = '';
                porcentaje.value = '';
                total.value = '';
                articulo.focus();
            }
        }
    };
    CrearPedidoComponent.prototype.editarArticuloPack = function (articulo, descripcion, medida, uv, fraccion, valorUV, totalSD, porcentaje, total) {
        //valida tipo de impuesto
        if (this.packArticulo.length > 0) {
            //console.log('this.packArticulo[0].art_sindiaba', this.packArticulo[0].art_sindiaba);
            //console.log('this.articuloSeleccionado.art_sindiaba', this.articuloSeleccionado.art_sindiaba);
            if (this.packArticulo[0].art_sindiaba !== this.articuloSeleccionado.art_sindiaba) {
                this.puedeAgregar = false;
                swal('Atención', 'No Puede Agregar Articulos con diferente tipo de manejo de Impuesto', 'warning');
                articulo.value = '';
                descripcion.value = '';
                medida.value = '';
                uv.value = '';
                fraccion.value = '';
                valorUV.value = '';
                totalSD.value = '';
                porcentaje.value = '';
                total.value = '';
            }
        }
        if (this.puedeAgregar) {
            this.validaPorcentaje(porcentaje);
            //console.log('en agregar art. pack - editar');
            //console.log('uv.value - editar', uv, 'fraccion.value', fraccion);
            if (uv.value === '0' && fraccion.value === '0') {
                swal('Atención', 'Debe Agregar fracciones o Unidades al Articulo', 'warning');
            }
            else {
                //console.log('this.hidUnidadesVta', this.hidUnidadesVta);
                var iUV = Math.round((parseInt(fraccion, 10) / this.hidUnidadesVta) + parseInt(uv, 10));
                // console.log(object);
                var iFraccion = (parseInt(fraccion, 10) % this.hidUnidadesVta);
                //console.log('iUV', iUV);
                //console.log('iFraccion', iFraccion);
                var iTotalUniVta = (iUV * parseInt(valorUV.value, 10));
                var dPrecioFraccion = (parseInt(valorUV.value, 10) / this.hidUnidadesVta);
                var iTotalFraccion = iFraccion * Math.round(dPrecioFraccion);
                var iTotalSD = iTotalUniVta + iTotalFraccion;
                var iNetoDetalle = Math.round(iTotalSD - ((iTotalSD * (parseFloat(porcentaje.value)) / 100)));
                //console.log('iTotalUniVta', iTotalUniVta);
                //console.log('dPrecioFraccion', dPrecioFraccion);
                //console.log('iTotalFraccion', iTotalFraccion);
                //console.log('totalSD', iTotalSD);
                //console.log('iNetoDetalle', iNetoDetalle);
                //console.log('articulo.value => : ', articulo.value);
                //console.log('descripcion.value => : ', descripcion.value);
                var objeto = {
                    bCheck: false,
                    articulo: articulo,
                    descripcion: descripcion,
                    medidaUV: medida,
                    // uv: iUV,
                    uv: uv,
                    // fraccion: iFraccion,
                    fraccion: fraccion,
                    // valorUV: parseInt(valorUV.value, 10),
                    valorUV: valorUV,
                    totalSD: totalSD,
                    // porcentaje: parseFloat(porcentaje.value),
                    porcentaje: porcentaje,
                    total: total,
                    art_nlargovta: this.articuloSeleccionado.art_nlargovta,
                    art_nanchovta: this.articuloSeleccionado.art_nanchovta,
                    art_naltovta: this.articuloSeleccionado.art_naltovta,
                    nconvermedidavta: this.articuloSeleccionado.nconvermedidavta,
                    art_nlargofraccion: this.articuloSeleccionado.art_nlargofraccion,
                    art_nanchofraccion: this.articuloSeleccionado.art_nanchofraccion,
                    art_naltofraccion: this.articuloSeleccionado.art_naltofraccion,
                    nconvermedidafraccion: this.articuloSeleccionado.nconvermedidafraccion,
                    hidUnidadesVta: this.hidUnidadesVta,
                    art_nunidadventa: this.articuloSeleccionado.art_nunidadventa,
                    art_sindiaba: this.articuloSeleccionado.art_sindiaba,
                    relacioncomercial: this.articuloSeleccionado.relacioncomercial
                };
                this.packArticulo.push(objeto);
                this.calcularTotales();
                this.puedeAgregar = false;
                // articulo.value = '';
                // descripcion.value = '';
                // medida.value = '';
                // uv.value = '';
                // fraccion.value = '';
                // valorUV.value = '';
                // totalSD.value = '';
                // porcentaje.value = '';
                // total.value = '';
                // articulo.focus();
            }
        }
    };
    CrearPedidoComponent.prototype.cargaInfoArticuloAutoComplete = function (codFormato, codVariedad, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje) {
        var _this = this;
        this.puedeAgregar = false;
        this.loader.show();
        this.requestAutocomplete.nNumLocal = 0;
        this.requestAutocomplete.nRutCliente = 0;
        this.requestAutocomplete.nRutOperador = Number(this.user.nrutoperador);
        this.requestAutocomplete.sCodBodega = null;
        this.requestAutocomplete.sCodFormato = codFormato;
        this.requestAutocomplete.sCodRelacionComer = null;
        this.requestAutocomplete.sCodVariedad = codVariedad;
        this.pedidosService.getCargaArticuloAutoComplete(this.requestAutocomplete)
            .subscribe(function (data) {
            _this.loader.hide();
            _this.articuloSeleccionado = data.articulo[0];
            //console.log('this.articuloSeleccionado', this.articuloSeleccionado);
            articulo.value = _this.articuloSeleccionado.art_scodformato + "-" + _this.articuloSeleccionado.art_scodvariedad;
            descripcion.value = _this.articuloSeleccionado.art_sdescripcion;
            medida.value = _this.articuloSeleccionado.art_smedida;
            valorUV.value = _this.articuloSeleccionado.nprecioventa;
            uv.value = 0;
            fraccion.value = 0;
            porcentaje.value = 0.0;
            _this.hidUnidadesVta = _this.articuloSeleccionado.art_nunidadventa;
            //console.log('this.articuloSeleccionado.art_nunidadventa => HIDDEN : ', this.articuloSeleccionado.art_nunidadventa);
            _this.hidIndIaba = _this.articuloSeleccionado.art_sindiaba;
            _this.puedeAgregar = true;
        }, function (error) {
            _this.loader.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    CrearPedidoComponent.prototype.editarInfoArticuloAutoComplete = function (codFormato, codVariedad) {
        var _this = this;
        this.puedeAgregar = false;
        this.loader.show();
        this.requestAutocomplete.nNumLocal = 0;
        this.requestAutocomplete.nRutCliente = 0;
        this.requestAutocomplete.nRutOperador = Number(this.user.nrutoperador);
        this.requestAutocomplete.sCodBodega = null;
        this.requestAutocomplete.sCodFormato = codFormato;
        this.requestAutocomplete.sCodRelacionComer = null;
        this.requestAutocomplete.sCodVariedad = codVariedad;
        this.pedidosService.getCargaArticuloAutoComplete(this.requestAutocomplete)
            .subscribe(function (data) {
            _this.loader.hide();
            _this.articuloSeleccionado = data.articulo[0];
            //console.log('this.articuloSeleccionado', this.articuloSeleccionado);
            // articulo.value = `${this.articuloSeleccionado.art_scodformato}-${this.articuloSeleccionado.art_scodvariedad}`;
            // descripcion.value = this.articuloSeleccionado.art_sdescripcion;
            // medida.value = this.articuloSeleccionado.art_smedida;
            // valorUV.value = this.articuloSeleccionado.nprecioventa;
            // uv.value = 0;
            // fraccion.value = 0;
            // porcentaje.value = 0.0;
            _this.hidUnidadesVta = _this.articuloSeleccionado.art_nunidadventa;
            //console.log('this.articuloSeleccionado.art_nunidadventa => EDITAR : ', this.articuloSeleccionado.art_nunidadventa);
            _this.hidIndIaba = _this.articuloSeleccionado.art_sindiaba;
            _this.puedeAgregar = true;
        }, function (error) {
            _this.loader.hide();
            swal('Atención', "Ha ocurrido un error inesperado! " + error, 'error');
        });
    };
    CrearPedidoComponent.prototype.eliminarArticuloPack = function () {
        var _this = this;
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
            var j = _this.packArticulo.length;
            for (var i = 0; i < j; i++) {
                if (_this.packArticulo[i].bCheck === true) {
                    _this.packArticulo.splice(_this.packArticulo.indexOf(_this.packArticulo[i]), 1);
                    i--;
                    j--;
                }
            }
            _this.calcularTotales();
        });
    };
    CrearPedidoComponent.prototype.validaCheckPack = function (articulo) {
        articulo.bCheck = !articulo.bCheck;
        if (articulo.bCheck) {
            //console.log('checkeado');
            this.actionBtns = true;
        }
        else {
            this.actionBtns = false;
            //console.log('NO checkeado');
        }
    };
    CrearPedidoComponent.prototype.validarInformacionObligatoria = function () {
        var _this = this;
        var _validarInformacionObligatoria = true;
        var _ingresoArticulo = false;
        if (this.packArticulo.length === 0) {
            _validarInformacionObligatoria = this.errorSeleccionArticulo(_validarInformacionObligatoria);
        }
        this.packArticulo.forEach(function (articulo) {
            if (articulo.articulo !== null || articulo.articulo !== undefined || articulo.articulo !== '' || articulo.articulo !== 0) {
                _ingresoArticulo = true;
            }
            if (!_ingresoArticulo) {
                _validarInformacionObligatoria = _this.errorSeleccionArticulo(_validarInformacionObligatoria);
            }
        });
        if (this.forma.controls.fhoEntrega.invalid) {
            _validarInformacionObligatoria = false;
            swal('Atención', 'Debe ingresar fecha entrega', 'error');
        }
        if (this.forma.controls.fhoPedido.invalid) {
            _validarInformacionObligatoria = false;
            swal('Atención', 'Debe ingresar fecha pedido', 'error');
        }
        if (this.cupoEditar === 0) {
            _validarInformacionObligatoria = false;
            swal('Atención', 'No posee cupo', 'error');
        }
        if (this.iTotal > this.cupoEditar) {
            _validarInformacionObligatoria = false;
            swal('Atención', 'El total sobrepasa el límite cupo del cliente', 'error');
        }
        if (this.forma.controls.formPago.invalid) {
            _validarInformacionObligatoria = false;
            swal('Atención', 'Debe ingresar forma de pago', 'error');
        }
        if (this.forma.controls.idDireccionEntrega.invalid) {
            _validarInformacionObligatoria = false;
            swal('Atención', 'Debe ingresar dirección de entrega', 'error');
        }
        if (this.forma.controls.sCodTerritorio.invalid) {
            _validarInformacionObligatoria = false;
            swal('Atención', 'Debe ingresar territorio', 'error');
        }
        if (this.forma.controls.sCodRuta.invalid) {
            _validarInformacionObligatoria = false;
            swal('Atención', 'Debe ingresar ruta', 'error');
        }
        if (this.forma.controls.codSucursal.invalid) {
            _validarInformacionObligatoria = false;
            swal('Atención', 'Debe ingresar sucursal', 'error');
        }
        if (this.forma.controls.sCodRelacionComer.invalid) {
            _validarInformacionObligatoria = false;
            swal('Atención', 'Debe ingresar relación comercial', 'error');
        }
        if (this.forma.controls.numLocal.invalid) {
            _validarInformacionObligatoria = false;
            swal('Atención', 'Debe ingresar local', 'error');
        }
        if (this.forma.controls.nRutCliente.invalid) {
            _validarInformacionObligatoria = false;
            swal('Atención', 'Debe ingresar rut del cliente', 'error');
        }
        this.packArticulo.forEach(function (articulo) {
            if (articulo.relacioncomercial.indexOf(_this.forma.controls.sCodRelacionComer.value.toString()) === -1) {
                swal('Atención', 'Producto elegido no corresponde a la relación comercial', 'error');
            }
        });
        return _validarInformacionObligatoria;
    };
    CrearPedidoComponent.prototype.errorSeleccionArticulo = function (_validarInformacionObligatoria) {
        _validarInformacionObligatoria = false;
        swal('Atención', 'Debe ingresar artículo', 'error');
        return _validarInformacionObligatoria;
    };
    CrearPedidoComponent.prototype.cargarModeloCrearPedido = function () {
        var _this = this;
        if (!this.validarInformacionObligatoria()) {
            return;
        }
        this.idPedido = this.idPedido !== undefined ? this.idPedido : 0;
        var _arrayASRV_EntArticulos = [];
        var _aSRV_EntPedido = new _models_aSRV_EntPedido__WEBPACK_IMPORTED_MODULE_18__["aSRV_EntPedido"]();
        var _esSeparadorGuion = this.forma.controls.nRutCliente.value.toString().indexOf('-') > -1;
        var _rutCliente;
        if (_esSeparadorGuion) {
            _rutCliente = this.forma.controls.nRutCliente.value.substr(0, this.forma.controls.nRutCliente.value.length - 2);
        }
        else {
            _rutCliente = this.forma.controls.nRutCliente.value.substr(0, this.forma.controls.nRutCliente.value.length - 1);
        }
        this.packArticulo.forEach(function (articulo) {
            // if (articulo.bCheck !== null && articulo.bCheck !== undefined && articulo.bCheck === true) {
            var _objectASRV_EntArticulos = new _models_aSRV_EntArticulos__WEBPACK_IMPORTED_MODULE_19__["ASRV_EntArticulos"]();
            _objectASRV_EntArticulos.nCantFrancciones = articulo.uv;
            _objectASRV_EntArticulos.nIdPedido = _this.idPedido;
            _objectASRV_EntArticulos.nNumLocal = _this.forma.controls.numLocal.value;
            _objectASRV_EntArticulos.nPorcDescuento = articulo.porcentaje;
            _objectASRV_EntArticulos.nRutCliente = _rutCliente;
            _objectASRV_EntArticulos.nRutOperador = _this.user.nrutoperador;
            _objectASRV_EntArticulos.sCodCanalVenta = '';
            _objectASRV_EntArticulos.sCodFormato = articulo.articulo.substring(0, articulo.articulo.toString().length - 2);
            _objectASRV_EntArticulos.sCodRelacionComer = _this.forma.controls.sCodRelacionComer.value;
            _objectASRV_EntArticulos.sCodVariedad = articulo.articulo.substring(articulo.articulo.length - 1);
            _arrayASRV_EntArticulos.push(_objectASRV_EntArticulos);
            // }
        });
        _aSRV_EntPedido.aSRV_EntPedido.fhoEntrega = this.utilService.dateToStringDateFullFormat(new Date(this.forma.controls.fhoEntrega.value));
        _aSRV_EntPedido.aSRV_EntPedido.fhoPedido = this.utilService.dateToStringDateFullFormat(new Date(this.forma.controls.fhoPedido.value));
        _aSRV_EntPedido.aSRV_EntPedido.idDireccionEntrega = this.forma.controls.idDireccionEntrega.value;
        _aSRV_EntPedido.aSRV_EntPedido.idPedido = this.idPedido;
        _aSRV_EntPedido.aSRV_EntPedido.nRunUsuarioCrea = this.user.nrunusuario;
        _aSRV_EntPedido.aSRV_EntPedido.nRutCliente = _rutCliente;
        _aSRV_EntPedido.aSRV_EntPedido.numLocal = this.forma.controls.numLocal.value;
        _aSRV_EntPedido.aSRV_EntPedido.numPedido = 0;
        _aSRV_EntPedido.aSRV_EntPedido.rutOperador = this.user.nrutoperador;
        _aSRV_EntPedido.aSRV_EntPedido.sCodEstado = '';
        _aSRV_EntPedido.aSRV_EntPedido.sCodRelacionComer = this.forma.controls.sCodRelacionComer.value;
        _aSRV_EntPedido.aSRV_EntPedido.sCodRuta = this.forma.controls.sCodRuta.value;
        _aSRV_EntPedido.aSRV_EntPedido.sObservacion = this.forma.controls.sObservacion.value;
        _aSRV_EntPedido.aSRV_EntArticulos = _arrayASRV_EntArticulos;
        this.ejecutarServicio(_aSRV_EntPedido);
    };
    CrearPedidoComponent.prototype.ejecutarServicio = function (objetoCreacion) {
        var _this = this;
        this.loader.show();
        this.request = new Object();
        this.request = objetoCreacion;
        this.pedidosService.crearPedido(this.request)
            .subscribe(function (pedido) {
            _this.loader.hide();
            if (pedido) {
                if (pedido.error.codError !== 0) {
                    swal('Atención', "Ha ocurrido un error inesperado : " + pedido.error.msjError, 'error');
                }
                else {
                    // this.listarMovimientosPendientesTransportistas();
                    // this.desmarcarSeleccionTabla('facturas');
                    _this.pedidosService.selectedPedido.idPedido = pedido.lSRV_SalIdPedido;
                    _this.listarPedidoArticulos();
                    swal('Atención', "Se ha creado el pedido N\u00B0 " + pedido.lSRV_SalIdPedido + " correctamente", 'success');
                }
            }
        }, function (error) {
            _this.loader.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', error);
        });
    };
    CrearPedidoComponent.prototype.openModalDireBanco = function (data) {
        this.origen = data;
        var initialState = {
            titulo: 'Dirección',
            origen: data,
            rutcliente: this.requestdos.rutClientes,
            rutoperador: this.user.nrutoperador
        };
        this.utilGeoModal = this.modalService.show(_commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_20__["UtilGeoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    // fin cambios jl
    CrearPedidoComponent.prototype.validarDireccionEntrega = function () {
        var _this = this;
        var direccion;
        var direccionesClient = {
            nRutCliente: this.requestdos.rutClientes,
            nRutOperador: this.user.nrutoperador
        };
        this.consultasCliente.getDireccionesCliente(direccionesClient)
            .subscribe(function (data) {
            (_this.datos = data.direccionCliente);
            if (data.error.codError !== 0) {
                _this.utilGeoModal.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
            else {
                direccion = data.direccionCliente.find(function (direccion) { return direccion.dic_niddireccion ===
                    Number(_this.forma.controls.idDireccionEntrega.value); });
                if (direccion !== undefined) {
                    _this.forma.controls.descDirEntrega.setValue(direccion.dic_sdireccion);
                }
                else {
                    _this.forma.controls.idDireccionEntrega.setValue('');
                    _this.forma.controls.descDirEntrega.setValue('');
                    swal('Atención', 'No existe dirección de entrega', 'warning');
                }
            }
        }, function (error) {
            _this.utilGeoModal.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', error);
        });
    };
    CrearPedidoComponent.prototype.deshabilitaControlesFormulario = function (formulario) {
        Object.keys(formulario.controls).forEach(function (control) {
            var typedControl = formulario.controls[control];
            typedControl.disable();
        });
    };
    CrearPedidoComponent.prototype.listarPedidoArticulos = function () {
        var _this = this;
        this.articuloSeleccionado = [];
        this.packArticulo = [];
        this.loader.show();
        var _bodyParams = {
            idPedido: this.pedidosService.selectedPedido.idPedido,
            nRutOperador: this.user.nrutoperador
        };
        this.pedidosService.listarPedidosArticulos(_bodyParams)
            .subscribe(function (pedidosArticulos) {
            _this.loader.hide();
            if (pedidosArticulos) {
                if (pedidosArticulos.error.codError !== 0) {
                    swal('Atención', "Ha ocurrido un error inesperado! " + JSON.stringify(pedidosArticulos.error), 'error');
                }
                else {
                    console.log('pedidosArticulos.cargaPedido => : ', pedidosArticulos.cargaPedido);
                    if (pedidosArticulos.cargaPedido.length > 0) {
                        _this.cargarInformacionPedido(pedidosArticulos.cargaPedido[0]);
                    }
                    if (pedidosArticulos.cargaDetallePedido.length > 0) {
                        pedidosArticulos.cargaDetallePedido.forEach(function (articulo) {
                            console.log('pedidosArticulos => : ', pedidosArticulos);
                            var _npreciobase = 0;
                            var _nprecioventa = 0;
                            _this.articuloNuevo = true;
                            _this.requestAutocomplete.nNumLocal = 0;
                            _this.requestAutocomplete.nRutCliente = 0;
                            _this.requestAutocomplete.nRutOperador = Number(_this.user.nrutoperador);
                            _this.requestAutocomplete.sCodBodega = null;
                            _this.requestAutocomplete.sCodFormato = articulo.dpe_scodformato;
                            _this.requestAutocomplete.sCodRelacionComer = null;
                            _this.requestAutocomplete.sCodVariedad = articulo.dpe_scodvariedad;
                            _this.pedidosService.getCargaArticuloAutoComplete(_this.requestAutocomplete)
                                .subscribe(function (data) {
                                _this.loader.hide();
                                _this.articuloSeleccionado = data.articulo[0];
                                _npreciobase = _this.articuloSeleccionado.npreciobase;
                                _nprecioventa = _this.articuloSeleccionado.nprecioventa;
                                _this.hidUnidadesVta = _this.articuloSeleccionado.art_nunidadventa;
                                _this.hidIndIaba = _this.articuloSeleccionado.art_sindiaba;
                                _this.puedeAgregar = true;
                                var iUnidadesVenta = Math.floor(articulo.dpe_ncantfracciones / articulo.art_nunidadventa);
                                var iFracciones = articulo.dpe_ncantfracciones % articulo.art_nunidadventa;
                                var dPrecioFraccion = articulo.precio / articulo.art_nunidadventa;
                                var iTotalUniVta = iUnidadesVenta * _nprecioventa;
                                var iTotalFraccion = iFracciones * Math.round(dPrecioFraccion);
                                var iTotalSinDescto = iTotalUniVta + iTotalFraccion;
                                var iNetoDetalle = Math.round(iTotalSinDescto - ((iTotalSinDescto * (articulo.dpe_nporcdescuento) / 100)));
                                var lTotalNeto = iNetoDetalle;
                                _this.editarArticuloPack(articulo.dpe_scodformato + "-" + articulo.dpe_scodvariedad, articulo.art_sdescripcion, articulo.art_smedida, iUnidadesVenta, iFracciones, _nprecioventa, iTotalSinDescto, articulo.dpe_nporcdescuento, lTotalNeto);
                            }, function (error) {
                                _this.loader.hide();
                                swal('Atención', "Ha ocurrido un error inesperado! " + error, 'error');
                            });
                        });
                    }
                    else {
                        swal('Atención', 'No Existe pedido', 'warning');
                    }
                }
            }
        }, function (error) {
            _this.loader.hide();
            swal('Atención', "Ha ocurrido un error inesperado! " + error, 'error');
        });
    };
    CrearPedidoComponent.prototype.cargarInformacionPedido = function (informacionPedido) {
        this.forma.controls.nRutCliente.setValue(informacionPedido.cli_nrutcliente + "-" + informacionPedido.cli_sdigverificador);
        this.forma.controls.nombreCliente.setValue(informacionPedido.cli_snombre);
        this.forma.controls.numLocal.setValue(informacionPedido.ped_nnumlocal);
        this.forma.controls.descLocal.setValue(informacionPedido.loc_snombre);
        this.forma.controls.sCodRelacionComer.setValue(informacionPedido.ped_scodrelacioncomer);
        this.forma.controls.descRelaComercial.setValue(informacionPedido.rel_sdescripcionrelacioncomerc);
        this.forma.controls.codSucursal.setValue('');
        this.forma.controls.descSucursal.setValue('');
        this.forma.controls.sCodRuta.setValue(informacionPedido.ped_scodruta);
        this.forma.controls.descRuta.setValue(informacionPedido.ped_sdesruta);
        this.forma.controls.sCodTerritorio.setValue(informacionPedido.ter_scodterritorio);
        this.forma.controls.descTerritorio.setValue(informacionPedido.ter_sdesterritorio);
        this.forma.controls.direccionPedido.setValue(informacionPedido.dic_sdireccion);
        this.forma.controls.idDireccionEntrega.setValue(informacionPedido.ped_niddireccionentrega);
        this.forma.controls.descDirEntrega.setValue(informacionPedido.dic_sdireccionentrega);
        this.forma.controls.formPago.setValue("(" + informacionPedido.rco_scodtipopago + ")" + informacionPedido.rco_sdestipopago);
        this.cupoEditar = informacionPedido.rco_ncupodisponible;
        console.log('this.cupoEditar EDICION => : ', this.cupoEditar);
        this.forma.controls.fhoPedido.setValue(this.utilService.dateStringServiceToStringFormat(informacionPedido.ped_dfhopedido));
        this.forma.controls.fhoEntrega.setValue(this.utilService.dateStringServiceToStringFormat(informacionPedido.ped_dfhoentrega));
        this.forma.controls.sObservacion.setValue(informacionPedido.ped_sobservacion);
    };
    CrearPedidoComponent.prototype.listarProtestos = function () {
        var _this = this;
        var _parametrosListarProtestos = {
            nRutCliente: this.requestdos.rutClientes,
            nRutOperador: this.user.nrutoperador
        };
        this.pedidosService.listarProtestos(_parametrosListarProtestos)
            .subscribe(function (protestos) {
            _this.loader.hide();
            if (protestos) {
                if (protestos.protestos.length === 0 && protestos.error.codError === 0) {
                    _this.loader.hide();
                    // swal('Atención', 'No se encontraron protestos', 'info');
                }
                else if (protestos.error.codError !== 0) {
                    _this.loader.hide();
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
                else {
                    _this.listadoProtestos = protestos.protestos;
                }
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.loader.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btnSucursal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CrearPedidoComponent.prototype, "btnSucursal", void 0);
    CrearPedidoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crearPedido',
            template: __webpack_require__(/*! ./crearPedido.component.html */ "./src/app/routes/pedidos/crearPedido/crearPedido.component.html"),
            styles: [__webpack_require__(/*! ./crearPedido.component.scss */ "./src/app/routes/pedidos/crearPedido/crearPedido.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_7__["PedidosService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_8__["ConsultasService"],
            _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_9__["ClientesService"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_13__["AdministracionOperativaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CrearPedidoComponent);
    return CrearPedidoComponent;
}());



/***/ }),

/***/ "./src/app/routes/pedidos/gestionRecorridos/gestionRecorridos.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/routes/pedidos/gestionRecorridos/gestionRecorridos.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Gestionar Recorrido</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"col-sm-6\">\r\n                        <label class=\"col-sm-1 control-label lh-11\">Desde</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"sFhoDesde\" name=\"sFhoDesde\" type=\"date\" />\r\n                        </div>\r\n                        <label class=\"col-sm-1 control-label lh-11\">Hasta</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"sFhoHasta\" name=\"sFhoHasta\" type=\"date\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2 p-0\">\r\n                            <button name=\"espera\" class=\"btn btn-oval btn\" type=\"button\" (click)=\"buscar()\">Buscar</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-2 p-0\">\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-4 m-0\">\r\n                        <div class=\"col-sm-4 p-0\">\r\n                            <button name=\"espera\" class=\"btn btn-oval btn\" type=\"button\" (click)=\"preRecorrido()\">Aprobar Rec.</button>\r\n                        </div>\r\n                        <div class=\"col-sm-4 p-0\">\r\n                            <button name=\"espera\" class=\"btn btn-oval btn\" type=\"button\" (click)=\"preRuta()\">Mover Rutas</button>\r\n                        </div>\r\n                        <div class=\"col-sm-4 p-0\">\r\n                            <button name=\"espera\" class=\"btn btn-oval btn\" type=\"button\" (click)=\"prePedido()\">Mover Pedido</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-hover\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th width=\"250\" class=\"align-middle\">Recorrido</th>\r\n                                    <th width=\"120\" class=\"align-middle\">Ruta</th>\r\n                                    <th width=\"60\" class=\"align-right\">Kg</th>\r\n                                    <th width=\"70\" class=\"align-right\">Volumen</th>\r\n                                    <th width=\"50\" class=\"align-right\">Pedidos</th>\r\n                                    <th width=\"80\" class=\"align-right\">Valor</th>\r\n                                    <th width=\"60\" class=\"align-right\">Tot.Prod</th>\r\n                                    <th width=\"160\" class=\"align-middle\">Chofer</th>\r\n                                    <th width=\"40\" class=\"align-middle\">R.R</th>\r\n                                    <th colspan=\"2\" width=\"200\" class=\"align-middle\">Ver</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody *ngFor=\"let recorrido of pedidosCompleto\">\r\n                                <tr>\r\n                                    <td nowrap>({{recorrido.rec_nidrecorrido}}) {{recorrido.rec_sdesrecorrido}}</td>\r\n                                    <td>{{recorrido.srutas}}</td>\r\n                                    <td>{{recorrido.nkilos}}\r\n                                        <span *ngIf=\"recorrido.iconoCarga\" class=\"table-remove\">\r\n                                                <a class=\"text\">\r\n                                                    <em class=\"fa fa-close\"></em>\r\n                                                </a>\r\n                                            </span>\r\n                                    </td>\r\n                                    <td>{{recorrido.nvolumen}}<span *ngIf=\"recorrido.iconoVolumen\" class=\"table-remove\">\r\n                                        <a class=\"text\">\r\n                                            <em class=\"fa fa-close\"></em>\r\n                                        </a>\r\n                                    </span></td>\r\n                                    <td>{{recorrido.ncantpedidos}}<span *ngIf=\"recorrido.iconoPedidopro\" class=\"table-remove\">\r\n                                        <a class=\"text\">\r\n                                            <em class=\"fa fa-close\"></em>\r\n                                        </a>\r\n                                    </span></td>\r\n                                    <td>${{recorrido.nprecioneto}}</td>\r\n                                    <td>{{recorrido.ncantarticulos}}</td>\r\n                                    <td>{{recorrido.cho_snombre}} {{recorrido.cho_sapepaterno}} -<span class=\"table-remove\">\r\n                                            <a class=\"text\" (click)=\"editChofer(recorrido)\">\r\n                                                <em class=\"fa fa-pencil\"></em>\r\n                                            </a>\r\n                                        </span></td>\r\n                                    <td *ngIf=\"!recorrido.icono\">\r\n                                        <span class=\"table-remove\">\r\n                                            <a class=\"text\">\r\n                                                <em class=\"fa fa-check-square\"></em>\r\n                                            </a>\r\n                                        </span>\r\n                                    </td>\r\n                                    <td *ngIf=\"recorrido.icono\">\r\n                                        <span class=\"table-remove\">\r\n                                            <a class=\"text\">\r\n                                                <em class=\"fa fa-close\"></em>\r\n                                            </a>\r\n                                        </span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"checkbox c-checkbox needsclick\">\r\n                                            <label class=\"needsclick\">\r\n                                                    <input class=\"needsclick\" type=\"checkbox\"\r\n                                                        (change)=\"validaCheckPack(recorrido)\" [checked]=\"recorrido.bCheck\" />\r\n                                                    <span class=\"fa fa-check\"></span>\r\n                                                </label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <span class=\"table-remove\">\r\n                                                <a class=\"text\" (click)=\"mostrar(recorrido.rec_nidrecorrido)\">\r\n                                                    <em class=\"fa fa-search\"></em>\r\n                                                </a>\r\n                                            </span>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td colspan=\"8\" style=\"padding-left:30px;\">\r\n                                        <div class=\"hidden\" #stepgroup1 [id]=\"recorrido.rec_nidrecorrido\">\r\n                                            <div id=\"collapse01\">\r\n                                                <div class=\"table-responsive\">\r\n                                                    <table class=\"table table-hover\">\r\n                                                        <thead>\r\n                                                            <tr>\r\n                                                                <th width=\"220\" class=\"align-middle\">Ruta</th>\r\n                                                                <th width=\"60\" class=\"align-right\">Kg</th>\r\n                                                                <th width=\"70\" class=\"align-right\">Volumen</th>\r\n                                                                <th width=\"40\" class=\"align-right\">Pedidos</th>\r\n                                                                <th width=\"80\" class=\"align-right\">Valor</th>\r\n                                                                <th width=\"40\" class=\"align-middle\">R.R</th>\r\n                                                                <th colspan=\"2\" width=\"350\" class=\"align-middle\">Ver</th>\r\n                                                            </tr>\r\n                                                        </thead>\r\n                                                        <tbody *ngFor=\"let rutas of recorrido.rutasDefinitivas\">\r\n                                                            <tr>\r\n                                                                <td nowrap>({{rutas.rre_scodruta}}) {{rutas.rre_sdesruta}}</td>\r\n                                                                <td nowrap>{{rutas.rre_nkilos}}</td>\r\n                                                                <td nowrap>{{rutas.rre_nvolumen}}</td>\r\n                                                                <td nowrap>{{rutas.rre_ncantpedidos}}</td>\r\n                                                                <td nowrap>${{rutas.rre_nprecioneto}}</td>\r\n                                                                <td *ngIf=\"!rutas.icono\">\r\n                                                                    <span class=\"table-remove\">\r\n                                                                            <a class=\"text\">\r\n                                                                                <em class=\"fa fa-check-square\"></em>\r\n                                                                            </a>\r\n                                                                        </span>\r\n                                                                </td>\r\n                                                                <td *ngIf=\"rutas.icono\">\r\n                                                                    <span class=\"table-remove\">\r\n                                                                            <a class=\"text\">\r\n                                                                                <em class=\"fa fa-close\"></em>\r\n                                                                            </a>\r\n                                                                        </span>\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <div class=\"checkbox c-checkbox needsclick\">\r\n                                                                        <label class=\"needsclick\">\r\n                                                                                <input class=\"needsclick\" type=\"checkbox\"\r\n                                                                                    (change)=\"validaCheckRutas(rutas)\" [checked]=\"recorrido.rutasDefinitivas.bCheck\" />\r\n                                                                                <span class=\"fa fa-check\"></span>\r\n                                                                            </label>\r\n                                                                    </div>\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <span class=\"table-remove\">\r\n                                                                            <a class=\"text\" (click)=\"mostrarDos(rutas.rre_nidruta)\">\r\n                                                                                <em class=\"fa fa-search\"></em>\r\n                                                                            </a>\r\n                                                                        </span>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td colspan=\"8\" style=\"padding-left:20px;\">\r\n\r\n                                                                    <div class=\"hidden\" #stepgroup2 [id]=\"rutas.rre_nidruta\">\r\n                                                                        <div id=\"collapse02\">\r\n                                                                            <div class=\"table-responsive\">\r\n                                                                                <table class=\"table table-hover\">\r\n                                                                                    <thead>\r\n                                                                                        <tr>\r\n                                                                                            <th width=\"20\" class=\"align-middle\"></th>\r\n                                                                                            <th width=\"80\" class=\"align-middle\">Id Pedido</th>\r\n                                                                                            <th width=\"80\" class=\"align-right\">Rut</th>\r\n                                                                                            <th width=\"80\" class=\"align-middle\">Cliente</th>\r\n                                                                                            <th width=\"60\" class=\"align-right\">Rel.Com</th>\r\n                                                                                            <th width=\"60\" class=\"align-right\">Local</th>\r\n                                                                                            <th width=\"90\" class=\"align-middle\">Direcci&oacute;n</th>\r\n                                                                                            <th width=\"90\" class=\"align-middle\">Comuna</th>\r\n                                                                                            <th width=\"60\" class=\"align-right\">Kg</th>\r\n                                                                                            <th width=\"70\" class=\"align-right\">Volumen</th>\r\n                                                                                            <th width=\"80\" class=\"align-right\">Valor</th>\r\n                                                                                            <th width=\"40\" class=\"align-middle\">R.R</th>\r\n                                                                                            <th colspan=\"2\" width=\"20\" class=\"align-middle\">Ver</th>\r\n                                                                                        </tr>\r\n                                                                                    </thead>\r\n                                                                                    <tbody *ngFor=\"let pedidos of rutas.pedidosDefinitivos\">\r\n                                                                                        <tr>\r\n                                                                                            <td>\r\n                                                                                                <div class=\"checkbox c-checkbox needsclick\">\r\n                                                                                                    <label class=\"needsclick\">\r\n                                                                                                            <input class=\"needsclick\" type=\"checkbox\"\r\n                                                                                                                (change)=\"validaCheckPedidos(pedidos)\" [checked]=\"rutas.pedidosDefinitivos.bCheck\" />\r\n                                                                                                            <span class=\"fa fa-check\"></span>\r\n                                                                                                        </label>\r\n                                                                                                </div>\r\n                                                                                            </td>\r\n                                                                                            <td nowrap>{{pedidos.ped_nidpedido}}</td>\r\n                                                                                            <td nowrap>{{pedidos.cli_nrutcliente + pedidos.cli_sdigverificador | rut}}</td>\r\n                                                                                            <td nowrap>{{pedidos.cli_snombre}}</td>\r\n                                                                                            <td nowrap>{{pedidos.ped_scodrelacioncomer}}</td>\r\n                                                                                            <td nowrap>{{pedidos.loc_nnumlocal}}</td>\r\n                                                                                            <td nowrap>{{pedidos.dic_sdireccion}}</td>\r\n                                                                                            <td nowrap>{{pedidos.dic_sdescomuna}}</td>\r\n                                                                                            <td nowrap>{{pedidos.ped_nkilos}}</td>\r\n                                                                                            <td nowrap>{{pedidos.ped_nkilos}}</td>\r\n                                                                                            <td nowrap>${{pedidos.ped_nprecio}}</td>\r\n                                                                                            <td *ngIf=\"!pedidos.icono\">\r\n                                                                                                <span class=\"table-remove\">\r\n                                                                                                    <a class=\"text\">\r\n                                                                                                        <em class=\"fa fa-check-square\"></em>\r\n                                                                                                    </a>\r\n                                                                                                </span>\r\n                                                                                            </td>\r\n                                                                                            <td *ngIf=\"pedidos.icono\">\r\n                                                                                                <span class=\"table-remove\">\r\n                                                                                                    <a class=\"text\">\r\n                                                                                                        <em class=\"fa fa-close\"></em>\r\n                                                                                                    </a>\r\n                                                                                                </span>\r\n                                                                                            </td>\r\n                                                                                            <td>\r\n                                                                                                <span class=\"table-remove\">\r\n                                                                                                        <a class=\"text\" (click)=\"editarPedido(pedidos)\">\r\n                                                                                                                <em class=\"fa fa-pencil\"></em>\r\n                                                                                                        </a>\r\n                                                                                                    </span>\r\n                                                                                            </td>\r\n                                                                                        </tr>\r\n\r\n                                                                                    </tbody>\r\n                                                                                </table>\r\n\r\n                                                                            </div>\r\n                                                                        </div>\r\n                                                                    </div>\r\n\r\n                                                                </td>\r\n                                                            </tr>\r\n\r\n                                                        </tbody>\r\n                                                    </table>\r\n\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </td>\r\n                                </tr>\r\n\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n\r\n\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h4>Pedidos Nuevos</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-hover\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th nowrap>Rut</th>\r\n                                    <th nowrap>Cliente</th>\r\n                                    <th nowrap>Rel.Com</th>\r\n                                    <th nowrap>Local</th>\r\n                                    <th nowrap>Direcci&oacute;n</th>\r\n                                    <th nowrap>Comuna</th>\r\n                                    <th nowrap>Kg</th>\r\n                                    <th nowrap>Volumen</th>\r\n                                    <th nowrap>Valor</th>\r\n                                    <th nowrap>Ver</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let nuevosPedidos of nuevosPedidos | paginate: {itemsPerPage: 7, currentPage: pActualPedidoNuevo, id: 'pagePedidoNuevo'};\">\r\n                                    <!-- <td nowrap>{{nuevosPedidos.cli_nrutcliente}}-{{nuevosPedidos.cli_sdigverificador}} <span class=\"table-remove\">\r\n                                                <a class=\"text\" (click)=\"editarCliente(nuevosPedidos)\">\r\n                                                    <em class=\"fa fa-search\"></em>\r\n                                                </a>\r\n                                            </span></td> -->\r\n                                    <td nowrap>{{nuevosPedidos.cli_nrutcliente + nuevosPedidos.cli_sdigverificador | rut}} <span class=\"table-remove\">\r\n                                        <a class=\"text\" (click)=\"editarCliente(nuevosPedidos)\">\r\n                                            <em class=\"fa fa-search\"></em>\r\n                                        </a>\r\n                                    </span></td>\r\n                                    <td nowrap>{{nuevosPedidos.cli_snombre}}</td>\r\n                                    <td nowrap>{{nuevosPedidos.ped_scodrelacioncomer}}</td>\r\n                                    <td nowrap>{{nuevosPedidos.loc_nnumlocal}}</td>\r\n                                    <td nowrap>{{nuevosPedidos.dic_sdireccion}}</td>\r\n                                    <td nowrap>{{nuevosPedidos.dic_sdescomuna}}</td>\r\n                                    <td nowrap>{{nuevosPedidos.ped_nkilos}}</td>\r\n                                    <td nowrap>{{nuevosPedidos.ped_nvolumen}}</td>\r\n                                    <td nowrap>{{nuevosPedidos.ped_nprecio}}</td>\r\n                                    <td>\r\n                                        <span class=\"table-remove\">\r\n                                                <a class=\"text\" (click)=\"editarPedido(nuevosPedidos)\">\r\n                                                    <em class=\"fa fa-search\"></em>\r\n                                                </a>\r\n                                            </span>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <br>\r\n                        <div class=\"text-right\">\r\n                            <pagination-controls (pageChange)=\"pActualPedidoNuevo = $event\" id=\"pagePedidoNuevo\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/pedidos/gestionRecorridos/gestionRecorridos.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/routes/pedidos/gestionRecorridos/gestionRecorridos.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/pedidos/gestionRecorridos/gestionRecorridos.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/routes/pedidos/gestionRecorridos/gestionRecorridos.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GestionRecorridosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionRecorridosComponent", function() { return GestionRecorridosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/consultaService/pedidos.service */ "./src/app/core/consultaService/pedidos.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/consultaService/clientes.service */ "./src/app/core/consultaService/clientes.service.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _commonPopUp_gestionRecorridoPopUp_gestionRecorridoPopUp_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../commonPopUp/gestionRecorridoPopUp/gestionRecorridoPopUp.component */ "./src/app/routes/commonPopUp/gestionRecorridoPopUp/gestionRecorridoPopUp.component.ts");
/* harmony import */ var _commonPopUp_transportistasPopUp_transportistasPopUp_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../commonPopUp/transportistasPopUp/transportistasPopUp.component */ "./src/app/routes/commonPopUp/transportistasPopUp/transportistasPopUp.component.ts");
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
var GestionRecorridosComponent = /** @class */ (function () {
    function GestionRecorridosComponent(fb, modalService, authService, loader, router, utilService, pedidosService, setearDatos, excelService, consultasCliente, sucursalService) {
        this.modalService = modalService;
        this.authService = authService;
        this.loader = loader;
        this.router = router;
        this.utilService = utilService;
        this.pedidosService = pedidosService;
        this.setearDatos = setearDatos;
        this.excelService = excelService;
        this.consultasCliente = consultasCliente;
        this.sucursalService = sucursalService;
        this.pActualRecorrido = 1;
        this.pActualRutaPedido = 1;
        this.pActualPedidoRecorrido = 1;
        this.pActualPedidoNuevo = 1;
        this.requestdos = {};
        this.request = {};
        this.apruebaRecorrido = {};
        this.user = {};
        this.sucursal = {};
        this.detalleClientes = {};
        this.dataPrueba = {};
        this.pedidos = [];
        this.nuevosPedidos = [];
        this.pedidosRecorrido = [];
        this.recorrido = [];
        this.pedidosCompleto = [];
        this.fechaActual = new Date();
        //accordionTemplate: AccordionTemplate;
        //prettier
        this.step1 = false;
        this.step2 = false;
        this.actionBtns = false;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            sFhoDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sFhoHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        //this.accordionTemplate = GestionRecorridosComponent.buildTemplate();
    }
    GestionRecorridosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setFecha();
        this.subData = this.pedidosService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.user = this.authService.getDatosUser();
        this.sucursal = JSON.parse(localStorage.getItem("SucursalUsuario"));
        this.setearRecorridos();
    };
    GestionRecorridosComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
    };
    GestionRecorridosComponent.prototype.setFecha = function () {
        /*  var currentDate = moment();
         var futureMonth = moment(currentDate).add(1, 'M');
         var futureMonthEnd = moment(futureMonth).endOf('month');
         if(currentDate.date() != futureMonth.date() && futureMonth.isSame(futureMonthEnd.format('YYYY-MM-DD'))) {
             futureMonth = futureMonth.add(1, 'd');
         }
         this.desde = currentDate.format('YYYY-MM-DD');
         this.hasta = futureMonth.format('YYYY-MM-DD');
         this.forma.controls.sFhoHasta.setValue(this.hasta);
         this.forma.controls.sFhoDesde.setValue(this.desde ); */
        var today = moment__WEBPACK_IMPORTED_MODULE_5__();
        today = today.subtract(1, 'months');
        var month = today.format('M');
        var day = today.format('D');
        var year = today.format('YYYY');
        var startDate = moment__WEBPACK_IMPORTED_MODULE_5__([year, month, '1']);
        var endDate = moment__WEBPACK_IMPORTED_MODULE_5__([year, month, '30']);
        //var prueba = moment(startDate).format('YYYY-MM-DD');
        this.desde = moment__WEBPACK_IMPORTED_MODULE_5__(startDate).format('YYYY-MM-DD');
        this.hasta = moment__WEBPACK_IMPORTED_MODULE_5__(endDate).format('YYYY-MM-DD');
        this.forma.controls.sFhoHasta.setValue(this.hasta);
        this.forma.controls.sFhoDesde.setValue(this.desde);
    };
    GestionRecorridosComponent.prototype.setearRecorridos = function () {
        var _this = this;
        this.request.nRutOperador = Number(this.user.nrutoperador);
        this.request.sCodEstado = 'CREAD';
        this.request.sCodSucursal = this.sucursal.sus_scodsucursal;
        this.request.sFhoDesde = this.utilService.stringFormatSinSeparador(this.forma.controls.sFhoDesde.value);
        this.request.sFhoHasta = this.utilService.stringFormatSinSeparador(this.forma.controls.sFhoHasta.value);
        this.pedidosService.getGestionRecorridos(this.request)
            .subscribe(function (data) {
            console.log(data);
            _this.dataPrueba = data;
            _this.nuevosPedidos = data.nuevosPedidos;
            _this.estructuraRecorridos(_this.dataPrueba);
        });
    };
    GestionRecorridosComponent.prototype.mostrar = function (recorrido) {
        document.getElementById(recorrido).classList.toggle('hidden');
    };
    GestionRecorridosComponent.prototype.mostrarDos = function (ruta) {
        document.getElementById(ruta).classList.toggle('hidden');
    };
    GestionRecorridosComponent.prototype.estructuraRecorridos = function (data) {
        var recorridos = data.recorrido;
        var rutas = data.rutaPedidos;
        var pedidos = data.pedidosRecorrido;
        var rutasAux2 = [];
        var rutasAux4 = "";
        var pedidosAux2 = [];
        var pedidosAux4 = "";
        var d = 0;
        var g = 0;
        var l = 0;
        // tslint:disable-next-line: forin
        for (var i in recorridos) {
            recorridos[i].rutas = rutas;
        }
        // tslint:disable-next-line: forin
        for (var h in rutas) {
            rutas[h].pedidos = pedidos;
        }
        // tslint:disable-next-line: forin
        for (var o in rutas) {
            d = 0;
            for (var p in rutas[o].pedidos) {
                if (rutas[o].rre_nidrecorrido === rutas[o].pedidos[p].rec_nidrecorrido && rutas[o].rre_nidruta === rutas[o].pedidos[p].ped_nidruta) {
                    console.log('entra pedidos', rutas[o].rre_nidrecorrido, rutas[o].pedidos[p].rec_nidrecorrido);
                    pedidosAux4 = rutas[o].pedidos[p];
                    pedidosAux2[d] = pedidosAux4;
                    d = d + 1;
                }
            }
            rutas[o].pedidosDefinitivos = pedidosAux2;
            pedidosAux2 = [];
        }
        // tslint:disable-next-line: forin
        for (var x in recorridos) {
            g = 0;
            for (var y in recorridos[x].rutas) {
                if (recorridos[x].rec_nidrecorrido === recorridos[x].rutas[y].rre_nidrecorrido) {
                    rutasAux4 = recorridos[x].rutas[y];
                    rutasAux2[g] = rutasAux4;
                    g = g + 1;
                }
            }
            recorridos[x].rutasDefinitivas = rutasAux2;
            rutasAux2 = [];
        }
        this.pedidosCompleto = recorridos;
        var recorridosIconos = this.pedidosCompleto;
        for (var i in recorridosIconos) {
            for (var j in recorridosIconos[i].rutasDefinitivas) {
                for (var k in recorridosIconos[i].rutasDefinitivas[j].pedidosDefinitivos) {
                    if (recorridosIconos[i].rutasDefinitivas[j].pedidosDefinitivos[k].ped_sindcupoinsuficiente === 'S' || recorridosIconos[i].rutasDefinitivas[j].pedidosDefinitivos[k].ped_sindquiebrestock === 'S') {
                        recorridosIconos[i].rutasDefinitivas[j].pedidosDefinitivos[k].icono = true;
                    }
                    else {
                        recorridosIconos[i].rutasDefinitivas[j].pedidosDefinitivos[k].icono = false;
                    }
                }
            }
        }
        for (var i in recorridosIconos) {
            for (var j in recorridosIconos[i].rutasDefinitivas) {
                for (var k in recorridosIconos[i].rutasDefinitivas[j].pedidosDefinitivos) {
                    if (recorridosIconos[i].rutasDefinitivas[j].pedidosDefinitivos[k].icono) {
                        recorridosIconos[i].rutasDefinitivas[j].icono = true;
                        recorridosIconos[i].icono = true;
                        if (recorridosIconos[i].sindprobcarga === 'S') {
                            recorridosIconos[i].iconoCarga = true;
                        }
                        else {
                            recorridosIconos[i].iconoCarga = false;
                        }
                        if (recorridosIconos[i].sindprobpedidos === 'S') {
                            recorridosIconos[i].iconoPedidopro = true;
                        }
                        else {
                            recorridosIconos[i].iconoPedidopro = false;
                        }
                        if (recorridosIconos[i].sindprobvolumen === 'S') {
                            recorridosIconos[i].iconoVolumen = true;
                        }
                        else {
                            recorridosIconos[i].iconoVolumen = false;
                        }
                        break;
                    }
                }
            }
        }
        console.log('ARREGLO ICONOS', recorridosIconos);
        this.pedidosCompleto = recorridosIconos;
        console.log('ARREGLO ICONOS', this.pedidosCompleto);
    };
    GestionRecorridosComponent.prototype.validaCheckPack = function (recorrido) {
        recorrido.bCheck = !recorrido.bCheck;
        console.log('checkeado', this.pedidosCompleto);
        if (recorrido.bCheck) {
            console.log('checkeado');
            this.actionBtns = true;
        }
        else {
            this.actionBtns = false;
            console.log('NO checkeado ');
        }
    };
    GestionRecorridosComponent.prototype.validaCheckRutas = function (rutas) {
        rutas.bCheck = !rutas.bCheck;
        console.log('checkeado', this.pedidosCompleto);
        if (rutas.bCheck) {
            console.log('checkeado');
            this.actionBtns = true;
        }
        else {
            this.actionBtns = false;
            console.log('NO checkeado ');
        }
    };
    GestionRecorridosComponent.prototype.validaCheckPedidos = function (pedidos) {
        pedidos.bCheck = !pedidos.bCheck;
        console.log('checkeado', this.pedidosCompleto);
        if (pedidos.bCheck) {
            console.log('checkeado');
            this.actionBtns = true;
        }
        else {
            this.actionBtns = false;
            console.log('NO checkeado ');
        }
    };
    //Botones
    GestionRecorridosComponent.prototype.prePedido = function () {
        this.loader.show();
        var arregloIdPedidos = [];
        var z = 0;
        var recorridosCompletos = this.pedidosCompleto;
        console.log('recorridos completos dentro de funcion', recorridosCompletos);
        if (this.validarPedidos()) {
            for (var i in recorridosCompletos) {
                for (var j in recorridosCompletos[i].rutasDefinitivas) {
                    for (var k in recorridosCompletos[i].rutasDefinitivas[j].pedidosDefinitivos) {
                        if (recorridosCompletos[i].rutasDefinitivas[j].pedidosDefinitivos[k].bCheck !== null && recorridosCompletos[i].rutasDefinitivas[j].pedidosDefinitivos[k].bCheck !== undefined && recorridosCompletos[i].rutasDefinitivas[j].pedidosDefinitivos[k].bCheck === true) {
                            var pedidosObj = {};
                            pedidosObj.idPedido = recorridosCompletos[i].rutasDefinitivas[j].pedidosDefinitivos[k].ped_nidpedido;
                            pedidosObj.codRuta = recorridosCompletos[i].rutasDefinitivas[j].rre_scodruta;
                            pedidosObj.indPedidoNuevo = 'N';
                            pedidosObj.rutOperador = Number(this.user.nrutoperador);
                            console.log('AAAsignacion', pedidosObj);
                            //arregloIdPedidos[z] = pedidosObj;
                            arregloIdPedidos.push(pedidosObj);
                        }
                    }
                }
            }
            console.log('ARREGLO DE PEDIDOS CHEQUEADOS', arregloIdPedidos);
            this.openModalPedidos(arregloIdPedidos);
            this.loader.hide();
        }
        else {
            this.loader.hide();
        }
    };
    GestionRecorridosComponent.prototype.validarPedidos = function () {
        var _validarPedidos = true;
        var recorridoSeleccionado = false;
        for (var i in this.pedidosCompleto) {
            for (var j in this.pedidosCompleto[i].rutasDefinitivas) {
                for (var k in this.pedidosCompleto[i].rutasDefinitivas[j].pedidosDefinitivos) {
                    if (this.pedidosCompleto[i].rutasDefinitivas[j].pedidosDefinitivos[k].bCheck !== null && this.pedidosCompleto[i].rutasDefinitivas[j].pedidosDefinitivos[k].bCheck !== undefined && this.pedidosCompleto[i].rutasDefinitivas[j].pedidosDefinitivos[k].bCheck === true) {
                        recorridoSeleccionado = true;
                    }
                }
            }
        }
        if (!recorridoSeleccionado) {
            swal('Atención', 'Debe seleccionar algun Pedido', 'error');
            _validarPedidos = false;
        }
        return _validarPedidos;
    };
    GestionRecorridosComponent.prototype.preRuta = function () {
        this.loader.show();
        var arregloIdRutas = [];
        var z = 0;
        var recorridosCompletos = this.pedidosCompleto;
        console.log('recorridos completos dentro de funcion', recorridosCompletos);
        if (this.validarRutas()) {
            for (var i in recorridosCompletos) {
                for (var j in recorridosCompletos[i].rutasDefinitivas) {
                    if (recorridosCompletos[i].rutasDefinitivas[j].bCheck !== null && recorridosCompletos[i].rutasDefinitivas[j].bCheck !== undefined && recorridosCompletos[i].rutasDefinitivas[j].bCheck === true) {
                        var rutasObj = {};
                        rutasObj.codRecorrido = recorridosCompletos[i].rec_scodrecorrido;
                        rutasObj.idRuta = recorridosCompletos[i].rutasDefinitivas[j].rre_nidruta;
                        rutasObj.rutOperador = Number(this.user.nrutoperador);
                        console.log('ID DE RUTAS SELECCIONADAS', rutasObj);
                        arregloIdRutas.push(rutasObj);
                    }
                }
            }
            this.openModalRutas(arregloIdRutas);
            console.log('ARREGLO DE RUTAS CHEQUEADOS', arregloIdRutas);
            this.loader.hide();
        }
        else {
            this.loader.hide();
        }
    };
    GestionRecorridosComponent.prototype.validarRutas = function () {
        var _validarRutas = true;
        var rutaSeleccionado = false;
        // tslint:disable-next-line: forin
        for (var i in this.pedidosCompleto) {
            for (var j in this.pedidosCompleto[i].rutasDefinitivas) {
                // tslint:disable-next-line: max-line-length
                if (this.pedidosCompleto[i].rutasDefinitivas[j].bCheck !== null && this.pedidosCompleto[i].rutasDefinitivas[j].bCheck !== undefined && this.pedidosCompleto[i].rutasDefinitivas[j].bCheck === true) {
                    rutaSeleccionado = true;
                }
            }
        }
        if (!rutaSeleccionado) {
            swal('Atención', 'Debe seleccionar alguna Ruta', 'error');
            _validarRutas = false;
        }
        return _validarRutas;
    };
    GestionRecorridosComponent.prototype.preRecorrido = function () {
        this.loader.show();
        var arregloIdRecorridos = [];
        var z = 0;
        var recorridosCompletos = this.pedidosCompleto;
        console.log('recorridos completos dentro de funcion', recorridosCompletos);
        // tslint:disable-next-line: forin
        if (this.validarRecorridos()) {
            for (var i in recorridosCompletos) {
                if (recorridosCompletos[i].bCheck !== null && recorridosCompletos[i].bCheck !== undefined && recorridosCompletos[i].bCheck === true) {
                    var recorridoObj = {};
                    recorridoObj.cantPedidos = recorridosCompletos[i].ncantpedidos;
                    recorridoObj.nIdLoteImpresion = 0;
                    recorridoObj.nIdRecorrido = recorridosCompletos[i].rec_nidrecorrido;
                    recorridoObj.nRunUsuario = Number(this.user.nrunusuario);
                    recorridoObj.nRutOperador = Number(this.user.nrutoperador);
                    recorridoObj.sCodEstado = 'POAST';
                    arregloIdRecorridos.push(recorridoObj);
                    console.log('ID DE RECORRIDOS SELECCIONADOS', recorridoObj);
                }
            }
            console.log('ARREGLO DE RUTAS CHEQUEADOS', arregloIdRecorridos);
            this.loader.hide();
            this.aprobarRecorrido(arregloIdRecorridos);
        }
        else {
            this.loader.hide();
        }
    };
    GestionRecorridosComponent.prototype.validarRecorridos = function () {
        var _validarRecorrido = true;
        var recorridoSeleccionado = false;
        // tslint:disable-next-line: forin
        for (var i in this.pedidosCompleto) {
            if (this.pedidosCompleto[i].bCheck !== null && this.pedidosCompleto[i].bCheck !== undefined && this.pedidosCompleto[i].bCheck === true) {
                recorridoSeleccionado = true;
            }
        }
        if (!recorridoSeleccionado) {
            swal('Atención', 'Debe seleccionar algun Recorrido', 'error');
            _validarRecorrido = false;
        }
        return _validarRecorrido;
    };
    GestionRecorridosComponent.prototype.openModalRutas = function (arregloIdRutas) {
        this.origen = 'recorridoRuta';
        var initialState = {
            titulo: 'Recorridos',
            gestion: 'recorridoRuta',
            moverPedidos: 0,
            arregloRuta: arregloIdRutas
        };
        this.gestionesModal = this.modalService.show(_commonPopUp_gestionRecorridoPopUp_gestionRecorridoPopUp_component__WEBPACK_IMPORTED_MODULE_13__["GestionRecorridoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    GestionRecorridosComponent.prototype.openModalPedidos = function (arregloIdPedidos) {
        this.origen = 'moverPedido';
        var initialState = {
            titulo: 'Recorridos',
            gestion: 'moverPedido',
            moverPedidos: 1,
            arregloPedido: arregloIdPedidos
        };
        this.gestionesModal = this.modalService.show(_commonPopUp_gestionRecorridoPopUp_gestionRecorridoPopUp_component__WEBPACK_IMPORTED_MODULE_13__["GestionRecorridoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    GestionRecorridosComponent.prototype.aprobarRecorrido = function (arregloIdRecorridos) {
        var _this = this;
        console.log(arregloIdRecorridos);
        this.apruebaRecorrido.aSRV_EntRecorridos = arregloIdRecorridos;
        console.log(this.apruebaRecorrido);
        this.pedidosService.updateEstadoRecorrido(this.apruebaRecorrido)
            .subscribe(function (data) {
            if (data) {
                if (data.error.codError === 0) {
                    swal('Bien', 'Los datos han sido actualizados satisfactoriamente', 'success');
                    _this.setearRecorridos();
                    _this.loader.hide();
                }
                else {
                    swal('Atención', data.error.msjError, 'error');
                    _this.loader.hide();
                }
            }
            else {
                swal('Atención', data.error.msjError, 'error');
                _this.loader.hide();
            }
        }, function (error) {
            _this.loader.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    GestionRecorridosComponent.prototype.buscar = function () {
        this.setearRecorridos();
    };
    GestionRecorridosComponent.prototype.editChofer = function (data) {
        /* this.request.idRecorrido = data.rec_nidrecorrido;
        this.request.patente = "string",
        this.request.runChofer = 0,
        this.request.rutOperador = Number(this.user.nrutoperador);
        this.request.rutTransportista = 0  */
        this.origen = 'choferPedido';
        var initialState = {
            origen: 'choferPedido',
            titulo: 'Transportistas',
            recorrido: data.rec_nidrecorrido
        };
        this.gestionesModal = this.modalService.show(_commonPopUp_transportistasPopUp_transportistasPopUp_component__WEBPACK_IMPORTED_MODULE_14__["TransportistasPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    //Botones Fin
    GestionRecorridosComponent.prototype.setData = function (resData) {
        console.log(resData);
        if (resData === 'refresh') {
            this.setearRecorridos();
        }
        $('body').removeClass('modal-open');
    };
    GestionRecorridosComponent.prototype.editarCliente = function (nuevosPedidos) {
        var _this = this;
        this.loader.show();
        this.requestdos.rutClientes = Number(nuevosPedidos.cli_nrutcliente);
        this.requestdos.rutOperador = Number(this.user.nrutoperador);
        this.consultasCliente.getDetallesClientes(this.requestdos)
            .subscribe(function (data) {
            if (data.cliente != null) {
                (_this.detalleClientes = data.cliente);
                _this.consultasCliente.selectedCliente = Object.assign({}, _this.detalleClientes[0]);
                _this.consultasCliente.setGestion('PEDIDOS');
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                _this.loader.hide();
            }
            if (_this.consultasCliente.selectedCliente !== undefined) {
                _this.router.navigate(['/buscaCliente/detalleCliente']);
            }
            else {
                _this.loader.hide();
            }
            _this.loader.hide();
        }, function (error) {
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            _this.loader.hide();
        });
    };
    GestionRecorridosComponent.prototype.editarPedido = function (pedido) {
        this.pedidosService.selectedPedido = {
            tipoOperacion: 'editar',
            idPedido: pedido.ped_nidpedido
        };
        this.router.navigate(['/pedidos/crearPedido']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepgroup1'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GestionRecorridosComponent.prototype, "stepgroup1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepgroup2'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GestionRecorridosComponent.prototype, "stepgroup2", void 0);
    GestionRecorridosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gestionRecorridos',
            template: __webpack_require__(/*! ./gestionRecorridos.component.html */ "./src/app/routes/pedidos/gestionRecorridos/gestionRecorridos.component.html"),
            styles: [__webpack_require__(/*! ./gestionRecorridos.component.scss */ "./src/app/routes/pedidos/gestionRecorridos/gestionRecorridos.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
            _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_8__["PedidosService"], _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_9__["ConsultasService"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_11__["ExcelService"], _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_10__["ClientesService"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_12__["AdministracionOperativaService"]])
    ], GestionRecorridosComponent);
    return GestionRecorridosComponent;
}());



/***/ }),

/***/ "./src/app/routes/pedidos/models/aSRV_EntArticulos.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/pedidos/models/aSRV_EntArticulos.ts ***!
  \************************************************************/
/*! exports provided: ASRV_EntArticulos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASRV_EntArticulos", function() { return ASRV_EntArticulos; });
var ASRV_EntArticulos = /** @class */ (function () {
    function ASRV_EntArticulos() {
    }
    return ASRV_EntArticulos;
}());



/***/ }),

/***/ "./src/app/routes/pedidos/models/aSRV_EntPedido.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/pedidos/models/aSRV_EntPedido.ts ***!
  \*********************************************************/
/*! exports provided: aSRV_EntPedido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aSRV_EntPedido", function() { return aSRV_EntPedido; });
var aSRV_EntPedido = /** @class */ (function () {
    function aSRV_EntPedido() {
        this.aSRV_EntPedido = {
            fhoEntrega: '',
            fhoPedido: '',
            idDireccionEntrega: 0,
            idPedido: 0,
            nRunUsuarioCrea: 0,
            nRutCliente: 0,
            numLocal: 0,
            numPedido: 0,
            rutOperador: 0,
            sCodEstado: '',
            sCodRelacionComer: '',
            sCodRuta: '',
            sObservacion: ''
        };
    }
    return aSRV_EntPedido;
}());



/***/ }),

/***/ "./src/app/routes/pedidos/pedidos.module.ts":
/*!**************************************************!*\
  !*** ./src/app/routes/pedidos/pedidos.module.ts ***!
  \**************************************************/
/*! exports provided: PedidosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosModule", function() { return PedidosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-table/ng2-table */ "./node_modules/ng2-table/ng2-table.js");
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _commonPopUp_commonPopUp_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../commonPopUp/commonPopUp.module */ "./src/app/routes/commonPopUp/commonPopUp.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_rut__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-rut */ "./node_modules/ng2-rut/dist/ng2-rut.module.js");
/* harmony import */ var ng2_rut__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_rut__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _consultarPedidos_consultarPedidos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./consultarPedidos/consultarPedidos.component */ "./src/app/routes/pedidos/consultarPedidos/consultarPedidos.component.ts");
/* harmony import */ var _crearPedido_crearPedido_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crearPedido/crearPedido.component */ "./src/app/routes/pedidos/crearPedido/crearPedido.component.ts");
/* harmony import */ var _commonPopUp_zonasTodasPopUp_zonasTodasPopUp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../commonPopUp/zonasTodasPopUp/zonasTodasPopUp.component */ "./src/app/routes/commonPopUp/zonasTodasPopUp/zonasTodasPopUp.component.ts");
/* harmony import */ var _commonPopUp_rutAsociadoPopUp_rutAsociadoPopUp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../commonPopUp/rutAsociadoPopUp/rutAsociadoPopUp.component */ "./src/app/routes/commonPopUp/rutAsociadoPopUp/rutAsociadoPopUp.component.ts");
/* harmony import */ var _commonPopUp_listaLocalesPopUp_listaLocalesPopUp_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../commonPopUp/listaLocalesPopUp/listaLocalesPopUp.component */ "./src/app/routes/commonPopUp/listaLocalesPopUp/listaLocalesPopUp.component.ts");
/* harmony import */ var _commonPopUp_relaComerPedidoPopUp_relaComerPedidoPopUp_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../commonPopUp/relaComerPedidoPopUp/relaComerPedidoPopUp.component */ "./src/app/routes/commonPopUp/relaComerPedidoPopUp/relaComerPedidoPopUp.component.ts");
/* harmony import */ var _commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../commonPopUp/sucursalesPopUp/sucursalesPopUp.component */ "./src/app/routes/commonPopUp/sucursalesPopUp/sucursalesPopUp.component.ts");
/* harmony import */ var _commonPopUp_rutasPopUp_rutasPopUp_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../commonPopUp/rutasPopUp/rutasPopUp.component */ "./src/app/routes/commonPopUp/rutasPopUp/rutasPopUp.component.ts");
/* harmony import */ var _cierreProceso_cierreProceso_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cierreProceso/cierreProceso.component */ "./src/app/routes/pedidos/cierreProceso/cierreProceso.component.ts");
/* harmony import */ var _commonPopUp_validacionUsuarioPedidoPopUp_validacionUsuarioPedidoPopUp_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../commonPopUp/validacionUsuarioPedidoPopUp/validacionUsuarioPedidoPopUp.component */ "./src/app/routes/commonPopUp/validacionUsuarioPedidoPopUp/validacionUsuarioPedidoPopUp.component.ts");
/* harmony import */ var _gestionRecorridos_gestionRecorridos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./gestionRecorridos/gestionRecorridos.component */ "./src/app/routes/pedidos/gestionRecorridos/gestionRecorridos.component.ts");
/* harmony import */ var _confirmacionRecorridos_confirmacionRecorridos_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./confirmacionRecorridos/confirmacionRecorridos.component */ "./src/app/routes/pedidos/confirmacionRecorridos/confirmacionRecorridos.component.ts");
/* harmony import */ var _commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../commonPopUp/utilGeoPopUp/utilGeoPopUp.component */ "./src/app/routes/commonPopUp/utilGeoPopUp/utilGeoPopUp.component.ts");
/* harmony import */ var _commonPopUp_gestionRecorridoPopUp_gestionRecorridoPopUp_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../commonPopUp/gestionRecorridoPopUp/gestionRecorridoPopUp.component */ "./src/app/routes/commonPopUp/gestionRecorridoPopUp/gestionRecorridoPopUp.component.ts");
/* harmony import */ var _commonPopUp_transportistasPopUp_transportistasPopUp_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../commonPopUp/transportistasPopUp/transportistasPopUp.component */ "./src/app/routes/commonPopUp/transportistasPopUp/transportistasPopUp.component.ts");
/* harmony import */ var _commonPopUp_actualizaclientepopup_actualizaclientepopup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../commonPopUp/actualizaclientepopup/actualizaclientepopup.component */ "./src/app/routes/commonPopUp/actualizaclientepopup/actualizaclientepopup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var routes = [
    { path: 'crearPedido', component: _crearPedido_crearPedido_component__WEBPACK_IMPORTED_MODULE_10__["CrearPedidoComponent"] },
    { path: 'consultarPedidos', component: _consultarPedidos_consultarPedidos_component__WEBPACK_IMPORTED_MODULE_9__["ConsultarPedidosComponent"] },
    { path: 'cierreProceso', component: _cierreProceso_cierreProceso_component__WEBPACK_IMPORTED_MODULE_17__["CierreProcesoComponent"] },
    { path: 'gestionRecorridos', component: _gestionRecorridos_gestionRecorridos_component__WEBPACK_IMPORTED_MODULE_19__["GestionRecorridosComponent"] },
    { path: 'confirmaRecorridos', component: _confirmacionRecorridos_confirmacionRecorridos_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmacionRecorridosComponent"] }
];
var PedidosModule = /** @class */ (function () {
    function PedidosModule() {
    }
    PedidosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_2__["Ng2TableModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                _commonPopUp_commonPopUp_module__WEBPACK_IMPORTED_MODULE_6__["CommonPopUpModule"],
                ng2_rut__WEBPACK_IMPORTED_MODULE_8__["Ng2Rut"]
            ],
            declarations: [_consultarPedidos_consultarPedidos_component__WEBPACK_IMPORTED_MODULE_9__["ConsultarPedidosComponent"],
                _crearPedido_crearPedido_component__WEBPACK_IMPORTED_MODULE_10__["CrearPedidoComponent"],
                _cierreProceso_cierreProceso_component__WEBPACK_IMPORTED_MODULE_17__["CierreProcesoComponent"],
                _gestionRecorridos_gestionRecorridos_component__WEBPACK_IMPORTED_MODULE_19__["GestionRecorridosComponent"],
                _confirmacionRecorridos_confirmacionRecorridos_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmacionRecorridosComponent"]
            ],
            entryComponents: [
                _commonPopUp_zonasTodasPopUp_zonasTodasPopUp_component__WEBPACK_IMPORTED_MODULE_11__["ZonasTodasPopUpComponent"],
                _commonPopUp_rutAsociadoPopUp_rutAsociadoPopUp_component__WEBPACK_IMPORTED_MODULE_12__["RutAsociadoPopUpComponent"],
                _commonPopUp_listaLocalesPopUp_listaLocalesPopUp_component__WEBPACK_IMPORTED_MODULE_13__["ListaLocalesPopUpComponent"],
                _commonPopUp_relaComerPedidoPopUp_relaComerPedidoPopUp_component__WEBPACK_IMPORTED_MODULE_14__["RelaComerPedidoPopUpComponent"],
                _commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_15__["SucursalesPopUpComponent"],
                _commonPopUp_rutasPopUp_rutasPopUp_component__WEBPACK_IMPORTED_MODULE_16__["RutasPopUpComponent"],
                _commonPopUp_validacionUsuarioPedidoPopUp_validacionUsuarioPedidoPopUp_component__WEBPACK_IMPORTED_MODULE_18__["ValidacionUsuarioPedidoPopUpComponent"],
                _commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_21__["UtilGeoPopUpComponent"],
                _commonPopUp_gestionRecorridoPopUp_gestionRecorridoPopUp_component__WEBPACK_IMPORTED_MODULE_22__["GestionRecorridoPopUpComponent"],
                _commonPopUp_transportistasPopUp_transportistasPopUp_component__WEBPACK_IMPORTED_MODULE_23__["TransportistasPopUpComponent"],
                _commonPopUp_actualizaclientepopup_actualizaclientepopup_component__WEBPACK_IMPORTED_MODULE_24__["ActualizaclientepopupComponent"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], PedidosModule);
    return PedidosModule;
}());



/***/ })

}]);
//# sourceMappingURL=pedidos-pedidos-module.js.map