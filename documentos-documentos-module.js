(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documentos-documentos-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/take.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/take.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/take */ "./node_modules/rxjs-compat/_esm5/operator/take.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.take = _operator_take__WEBPACK_IMPORTED_MODULE_1__["take"];
//# sourceMappingURL=take.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/take.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/take.js ***!
  \*********************************************************/
/*! exports provided: take */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(count)(this);
}
//# sourceMappingURL=take.js.map

/***/ }),

/***/ "./src/app/routes/documentos/consultaFolio/consultaFolio.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/routes/documentos/consultaFolio/consultaFolio.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <h4>Consulta Folio</h4>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <form ngNativeValidate [formGroup]=\"forma\" class=\"form-hraorizontal\" novalidate>\r\n      <div class=\"row doc-row\">\r\n\r\n        <div class=\"col-sm-6\">\r\n\r\n          <!-- fecha desde-->\r\n          <label class=\"col-sm-1 control-label lh-11 documento-label\">Fecha Hesde</label>\r\n          <div class=\"col-sm-4\">\r\n            <input type=\"date\" formControlName=\"fechaDesde\" name=\"fechaDesde\" id=\"fechaDesde\" type=\"date\"\r\n              class=\"form-control\">\r\n          </div>\r\n          <!-- <span #dp=\"bsDatepicker\" bsDatepicker class=\"fa fa-search facturas col-sm-1 \" [(bsValue)]=\"fechaDesde\"></span> -->\r\n\r\n          <!-- fecha hasta-->\r\n          <label class=\"col-sm-1 control-label lh-11 documento-label\">Fecha Hasta</label>\r\n          <div class=\"col-sm-4\">\r\n            <input type=\"date\" formControlName=\"fechaHasta\" name=\"fechaHasta\" id=\"fechaHasta\" type=\"date\"\r\n              class=\"form-control\">\r\n          </div>\r\n          <!-- <em #dp=\"bsDatepicker\" bsDatepicker class=\"fa fa-search facturas col-sm-1 \" [(bsValue)]=\"fechaHasta\"></em> -->\r\n        </div>\r\n        <div class=\"col-sm-6 text-right\">\r\n          <button class=\"btn btn-oval btn-sm ml-2 \" (click)=\"creaFolio()\" type=\"button\">Nuevo</button>\r\n          <button class=\"btn btn-oval btn-sm ml-2 \" (click)=\"buscaFolios()\" type=\"button\">Buscar</button>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- SEGUNDA COLUMNA -->\r\n      <div class=\"row doc-row mt-2\">\r\n\r\n        <div class=\"col-sm-6\">\r\n\r\n          <!-- folio desde-->\r\n          <label class=\"col-sm-1 control-label lh-11 documento-label\">N° Folio Desde</label>\r\n          <div class=\"col-sm-4\">\r\n            <input type=\"date\" formControlName=\"folioDesde\" name=\"folioDesde\" id=\"folioDesde\" type=\"text\"\r\n              class=\"form-control\">\r\n          </div>\r\n          <!-- <span #dp=\"bsDatepicker\" bsDatepicker class=\"fa fa-search facturas col-sm-1 \" [(bsValue)]=\"folioDesde\"></span> -->\r\n\r\n          <!-- folio hasta-->\r\n          <label class=\"col-sm-1 control-label lh-11 documento-label\">N° Folio Hasta</label>\r\n          <div class=\"col-sm-4\">\r\n            <input type=\"date\" formControlName=\"folioHasta\" name=\"folioHasta\" id=\"folioHasta\" type=\"text\"\r\n              class=\"form-control\">\r\n          </div>\r\n          <!-- <em #dp=\"bsDatepicker\" bsDatepicker class=\"fa fa-search facturas col-sm-1 \" [(bsValue)]=\"folioHasta\"></em> -->\r\n        </div>\r\n\r\n        <div class=\"col-sm-6\">\r\n          <!-- RUT Cliente -->\r\n          <label class=\"col-sm-1 control-label lh-11 documento-label\">Tipo Documento</label>\r\n          <div class=\"col-sm-4\">\r\n\r\n            <select class=\"form-control pv-0 ml-5\" formControlName=\"tipoFactura\" name=\"tipoFactura\">\r\n              <option *ngFor=\"let tipofactura of tiposfacturas\" [ngValue]=\"tipofactura.par_codparametro01\">{{tipofactura.par_deslargo01}}</option>\r\n          </select>\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- TERCERA COLUMNA -->\r\n\r\n      <div class=\"row doc-row\">\r\n\r\n        <div class=\"col-sm-5 ph-0\">\r\n          <div class=\"col-sm-3 pr-0\">\r\n            <div class=\"radio c-radio\">\r\n              <label class=\"text-bold fs-custom-11\">\r\n                <input type=\"radio\" formControlName=\"radioInput\" name=\"radioInput\" value=\"E\" checked /><span\r\n                  class=\"fa fa-circle\"></span>Si\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-3 ph-0\">\r\n          <div class=\"radio c-radio\">\r\n            <label class=\"text-bold fs-custom-11\">\r\n              <input type=\"radio\" formControlName=\"radioInput\" name=\"radioInput\" value=\"M\" /><span\r\n                class=\"fa fa-circle\"></span>No\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n    <!--LAST ROW - TABLE-->\r\n    <div class=\"row doc-row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover\">\r\n            <thead>\r\n              <tr>\r\n                <th>Tipo documento</th>\r\n                <th>Folio desde</th>\r\n                <th>Folio hasta</th>\r\n                <th>Fecha</th>\r\n                <th>Suursal</th>\r\n                <th>Electronico</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let documentoTimbrado of documentosTimbrados  |  paginate: {itemsPerPage: 7, currentPage: pageActual};\"\r\n                (click)=\"openDetalleFacturaAmpliado(factura)\">\r\n                <td>{{ documentoTimbrado.sdestipodocto }}</td>\r\n                <td class=\"text-center\">{{ documentoTimbrado.dti_nfoliodesde  }}</td>\r\n                <td class=\"text-center\">{{ documentoTimbrado.dti_nfoliohasta  }}</td>\r\n                <td class=\"text-center\">{{ this.dateStringServiceToStringFormatFullSS(documentoTimbrado.dti_dfhocreacion)}}</td>\r\n                <td class=\"text-center\">{{ documentoTimbrado.suc_sdescsucursal  }}</td>\r\n                <td class=\"text-center\">{{ electronicoOno }}</td>\r\n                <td class=\"text-center\"></td>\r\n                <td class=\"text-center\">\r\n                  <span class=\"table-remove\">\r\n                    <a class=\"text\" (click)=\" openDetalleFacturaAmpliado(documentoTimbrado)\">\r\n                      <em class=\"fa fa-search\"></em>\r\n                    </a>\r\n                  </span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <br>\r\n          <div class=\"text-right\">\r\n            <pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\">\r\n            </pagination-controls>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/documentos/consultaFolio/consultaFolio.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/routes/documentos/consultaFolio/consultaFolio.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".consultaFolio-label-tipo{margin-left:10%}.doc-row{margin-top:1.5em;margin-bottom:1.5em}.doc-row label{font-size:11px !important}\n"

/***/ }),

/***/ "./src/app/routes/documentos/consultaFolio/consultaFolio.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/routes/documentos/consultaFolio/consultaFolio.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConsultaFolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaFolioComponent", function() { return ConsultaFolioComponent; });
/* harmony import */ var _commonPopUp_creaFoliosAutorizadosPopUp_creaFoliosAutorizados_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../commonPopUp/creaFoliosAutorizadosPopUp/creaFoliosAutorizados.component */ "./src/app/routes/commonPopUp/creaFoliosAutorizadosPopUp/creaFoliosAutorizados.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/consultaService/clientes.service */ "./src/app/core/consultaService/clientes.service.ts");
/* harmony import */ var _core_consultaService_documentos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/consultaService/documentos.service */ "./src/app/core/consultaService/documentos.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
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
var ConsultaFolioComponent = /** @class */ (function () {
    function ConsultaFolioComponent(modalService, loader, utilService, clientesService, authService, documentosService) {
        this.modalService = modalService;
        this.loader = loader;
        this.utilService = utilService;
        this.clientesService = clientesService;
        this.authService = authService;
        this.documentosService = documentosService;
        this.fechaActual = new Date();
        this.tipoDocumentos = [];
        this.request = {};
        this.tiposfacturas = [];
        this.requestDos = {};
        this.user = {};
        this.documentosTimbrados = [];
        this.pageActual = 1;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fechaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fechaHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            folioDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            folioHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            tipoFactura: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            radioInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ConsultaFolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.getDatosUser();
        this.forma.controls.fechaDesde.setValue(this.firstDayLastMonth(this.fechaActual));
        this.forma.controls.fechaHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.request.parcodparametro01 = "";
        this.request.parcodparametro02 = "";
        this.request.parcodparametro03 = "";
        this.request.parcodparametro04 = "";
        this.request.parcodparametro05 = "";
        this.request.parnumparametro = 21;
        console.log("TCL: ConsultaFolioComponent -> ngOnInit -> this.request", this.request);
        this.documentosService.buscaParametros(this.request).subscribe(function (res) {
            _this.tiposfacturas = res['general'];
            console.log("TCL: ConsultaFolioComponent -> ngOnInit ->  this.tiposfacturas ", _this.tiposfacturas);
        });
    };
    ConsultaFolioComponent.prototype.firstDayLastMonth = function (date) {
        var anio = date.getFullYear();
        var mes = date.getMonth();
        var dia = 1;
        var diaStr = dia < 10 ? "0" + dia : dia;
        var mesStr = mes < 10 ? "0" + mes : mes;
        var fechaString = anio + "-" + mesStr + "-" + diaStr;
        return fechaString;
    };
    ConsultaFolioComponent.prototype.dateStringServiceToStringFormatFullSS = function (dateStr) {
        var anio = dateStr.substr(0, 4);
        var mes = dateStr.substr(4, 2);
        var dia = dateStr.substr(6, 2);
        var hh = dateStr.substr(8, 2);
        var mm = dateStr.substr(10, 2);
        var ss = dateStr.substr(12, 2);
        return dia + "-" + mes + "-" + anio + " " + hh + ":" + mm + ":" + ss;
    };
    ConsultaFolioComponent.prototype.creaFolio = function () {
        var initialState = {};
        this.bsModalRef = this.modalService.show(_commonPopUp_creaFoliosAutorizadosPopUp_creaFoliosAutorizados_component__WEBPACK_IMPORTED_MODULE_0__["CreaFoliosAutorizadosComponent"], {
            initialState: initialState
        });
    };
    //abre modal crear nuevo Folio
    ConsultaFolioComponent.prototype.buscaFolios = function () {
        var _this = this;
        this.requestDos.nnumfoliodesde = Number(this.forma.controls.folioDesde.value);
        this.requestDos.nnumfoliohasta = Number(this.forma.controls.folioHasta.value);
        this.requestDos.nrutoperador = Number(this.user.nrutoperador);
        this.requestDos.scodtipodocumento = this.forma.controls.tipoFactura.value;
        this.requestDos.sfechadesde = this.forma.controls.fechaDesde.value.split("-").join("") + "00000000";
        this.requestDos.sfechahasta = this.forma.controls.fechaHasta.value.split("-").join("") + "00000000";
        if (this.forma.controls.radioInput.value == 'M') {
            console.log("M");
            this.requestDos.sindelectronico == 'M';
            this.electronicoOno = 'No';
        }
        else {
            console.log("E");
            this.requestDos.sindelectronico = 'E';
            this.electronicoOno = 'Sí';
        }
        this.documentosService.buscaDocumentosTimbrados(this.requestDos).subscribe(function (res) {
            _this.documentosTimbrados = res['documentos'];
        });
    };
    ConsultaFolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consulta-folio',
            template: __webpack_require__(/*! ./consultaFolio.component.html */ "./src/app/routes/documentos/consultaFolio/consultaFolio.component.html"),
            styles: [__webpack_require__(/*! ./consultaFolio.component.scss */ "./src/app/routes/documentos/consultaFolio/consultaFolio.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ClientesService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _core_consultaService_documentos_service__WEBPACK_IMPORTED_MODULE_7__["DocumentosService"]])
    ], ConsultaFolioComponent);
    return ConsultaFolioComponent;
}());



/***/ }),

/***/ "./src/app/routes/documentos/documento1/documento1.component.html":
/*!************************************************************************!*\
  !*** ./src/app/routes/documentos/documento1/documento1.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <h4>Consultar Facturas</h4>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n      <div class=\"form-group\">\r\n\r\n        <!-- Primera columna -->\r\n        <div class=\"row doc-row\">\r\n          <div class=\"col-sm-5\">\r\n\r\n            <!-- RUT Cliente -->\r\n            <label class=\"col-sm-1 control-label lh-11 documento-label\">Nombre</label>\r\n            <div class=\"col-sm-4\">\r\n\r\n              <!-- validaCliente() -->\r\n              <input appRutFormat formControlName=\"rutCliente\" name=\"rutCliente\" id=\"rutCliente\"\r\n               (change)=\"validaCliente()\" class=\"form-control\" type=\"text\" maxlength=\"9\"\r\n                oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n            </div>\r\n\r\n            <!-- Cliente - Manual-->\r\n            <div class=\"col-sm-6\">\r\n              <input formControlName=\"nombreCliente\" name=\"nombreCliente\" id=\"nombreCliente\" class=\"form-control\"\r\n                type=\"text\"/>\r\n            </div>\r\n\r\n            <!-- Cliente - Pop Up-->\r\n            <a class=\"text\" (click)=\"openModal('cliente', 'Clientes')\">\r\n              <em class=\"fa fa-search\"></em>\r\n            </a>\r\n          </div>\r\n\r\n          <!-- right side, first row -->\r\n          <div class=\"col-sm-7\">\r\n            <!-- CODIGO local -->\r\n            <label class=\"col-sm-1 control-label lh-11 documento-label\">Local</label>\r\n            <div class=\"col-sm-2\">\r\n              <input (change)=\"validaLocal()\" formControlName=\"codLocal\" name=\"codLocal\" id=\"codLocal\" class=\"form-control\" type=\"text\"\r\n                maxlength=\"8\"\r\n                oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n            </div>\r\n\r\n            <!-- NOMBRE LOCAL  manual / Pop up -->\r\n            <div class=\"col-sm-6\">\r\n              <input formControlName=\"nombreLocal\" name=\"nombreLocal\" id=\"nombreLocal\" class=\"form-control\"\r\n                type=\"text\" />\r\n            </div>\r\n            <a class=\"text\" (click)=\"openModal('local', 'Local')\">\r\n              <em class=\"fa fa-search\"></em>\r\n            </a>\r\n\r\n            <!-- BUSCAR FACTURAS -->\r\n\r\n            <button class=\"btn btn-oval btn-sm float-right buscarAllFacturas\" type=\"button\"\r\n              (click)=\"buscarAllFacturas()\">Buscar</button>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- SEGUNDA COLUMNA -->\r\n        <div class=\"row doc-row\">\r\n\r\n          <div class=\"col-sm-6\">\r\n\r\n            <!-- Factura desde-->\r\n            <label class=\"col-sm-1 control-label lh-11 documento-label\">Fecha desde</label>\r\n            <div class=\"col-sm-4\">\r\n              <input type=\"date\" formControlName=\"fechaDesde\" name=\"fechaDesde\" id=\"fechaDesde\" type=\"date\"\r\n                class=\"form-control\" >\r\n            </div>\r\n\r\n            <!-- Factura hasta-->\r\n            <label class=\"col-sm-1 control-label lh-11 documento-label\">Fecha hasta</label>\r\n            <div class=\"col-sm-4\">\r\n              <input type=\"date\" formControlName=\"fechaHasta\" name=\"fechaHasta\" id=\"fechaHasta\" type=\"date\"\r\n                class=\"form-control\" >\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <label class=\"col-sm-1 control-label lh-11 documento-label\">Recorrido</label>\r\n            <div class=\"col-sm-4\">\r\n              <input type=\"date\" formControlName=\"recorrido\" name=\"recorrido\" id=\"recorrido\" type=\"number\"\r\n                class=\"form-control\" >\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- TERCERA COLUMNA -->\r\n        <div class=\"row doc-row\">\r\n\r\n          <div class=\"col-sm-5\">\r\n\r\n            <!-- factura desde-->\r\n            <label class=\"col-sm-1 control-label lh-11 documento-label\">Factura desde</label>\r\n            <div class=\"col-sm-4\">\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"facturaDesde\">\r\n            </div>\r\n\r\n            <!-- factura hasta-->\r\n            <label class=\"col-sm-1 control-label lh-11 documento-label\">Factura hasta</label>\r\n            <div class=\"col-sm-4\">\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"facturaHasta\">\r\n            </div>\r\n          </div>\r\n\r\n          <!-- right side, first row -->\r\n          <div class=\"col-sm-7\">\r\n            <!-- RUT Cliente -->\r\n            <label class=\"col-sm-1 control-label lh-11 documento-label\">Tipo</label>\r\n            <div class=\"col-sm-4\">\r\n\r\n              <select class=\"form-control pv-0\" formControlName=\"tipoFactura\" name=\"tipoFactura\">\r\n                <option value=\"\" selected disabled>(Seleccione tipo)</option>\r\n                <option *ngFor=\"let documento of tipoDocumento\" [value]=\"documento.par_codparametro01 ===  'FACTU' ?  documento.par_codparametro01.slice(0, -1) :  documento.par_codparametro01\">{{documento.par_deslargo01}}</option>\r\n              </select>\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </form>\r\n\r\n    <!--LAST ROW - TABLE-->\r\n    <div class=\"row doc-row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover\">\r\n            <thead>\r\n              <tr>\r\n                <th>N° Factura</th>\r\n                <th>Fecha Emision</th>\r\n                <th>Rut Cliente</th>\r\n                <th>Recorrido</th>\r\n                <th>Tipo</th>\r\n                <th>Monto</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let factura of facturas  |  paginate: {itemsPerPage: 7, currentPage: pageActual}\">\r\n                <td>{{ factura.nidfactura }}</td>\r\n                <td class=\"text-center\">{{ this.utilService.dateStringServiceToStringFormat(factura.dfhoemision) }}</td>\r\n                <td class=\"text-center\">{{ this.utilService.formatDotNumber(factura.nrutcliente)}}-{{factura.sdigverificador}}</td>\r\n                <td class=\"text-center\">{{ factura.nidrecorrido  }}</td>\r\n                <td class=\"text-center\">{{ factura.scodtipo  }}</td>\r\n                <td class=\"text-center\">{{ factura.ntotal  }}</td>\r\n                <td class=\"text-center\">\r\n                  <span class=\"table-remove\">\r\n                    <a class=\"text\" (click)=\" openDetalleFacturaAmpliado(factura)\">\r\n                      <em class=\"fa fa-search\"></em>\r\n                    </a>\r\n                  </span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <br>\r\n          <div class=\"text-right\">\r\n            <pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\">\r\n            </pagination-controls>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/documentos/documento1/documento1.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/routes/documentos/documento1/documento1.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buscarAllFacturas{position:absolute;right:30px}.doc-row{margin-top:1.5em;margin-bottom:1.5em}\n"

/***/ }),

/***/ "./src/app/routes/documentos/documento1/documento1.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/routes/documentos/documento1/documento1.component.ts ***!
  \**********************************************************************/
/*! exports provided: Documento1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Documento1Component", function() { return Documento1Component; });
/* harmony import */ var _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../core/consultaService/clientes.service */ "./src/app/core/consultaService/clientes.service.ts");
/* harmony import */ var _commonPopUp_detalleFacturaPrintPopUp_detalleFacturaPrintPopUp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commonPopUp/detalleFacturaPrintPopUp/detalleFacturaPrintPopUp.component */ "./src/app/routes/commonPopUp/detalleFacturaPrintPopUp/detalleFacturaPrintPopUp.component.ts");
/* harmony import */ var _commonPopUp_clienteOlocalPopUp_clienteOlocalPopUp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commonPopUp/clienteOlocalPopUp/clienteOlocalPopUp.component */ "./src/app/routes/commonPopUp/clienteOlocalPopUp/clienteOlocalPopUp.component.ts");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/consultaService/pedidos.service */ "./src/app/core/consultaService/pedidos.service.ts");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_documentos_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/consultaService/documentos.service */ "./src/app/core/consultaService/documentos.service.ts");
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
var Documento1Component = /** @class */ (function () {
    function Documento1Component(http, documentosService, fb, loader, authService, router, modalService, consultasService, clientesService, cajaCobranzaService, utilService, pedidosService) {
        this.http = http;
        this.documentosService = documentosService;
        this.loader = loader;
        this.authService = authService;
        this.router = router;
        this.modalService = modalService;
        this.consultasService = consultasService;
        this.clientesService = clientesService;
        this.cajaCobranzaService = cajaCobranzaService;
        this.utilService = utilService;
        this.pedidosService = pedidosService;
        this.facturas = [];
        this.notasCredito = [];
        this.date = new Date();
        this.request = {};
        this.requestDos = {};
        this.requestdos = {};
        this.requestTres = {};
        this.requestCuatro = {};
        this.articulos = [];
        this.fact = {};
        this.localesData = [];
        this.user = {};
        this.datos = [];
        this.cargaLocalPedidos = {};
        this.relacionBtns = false;
        this.direccionBtns = false;
        this.pageActual = 1;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            rutCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](),
            nombreCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](),
            tipoFactura: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](""),
            codLocal: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](),
            fechaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](),
            fechaHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](),
            nombreLocal: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](),
            recorrido: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](),
            facturaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](),
            facturaHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]()
        });
        this.currentdate = new Date();
    }
    Documento1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.getDatosUser();
        this.request.parcodparametro01 = "";
        this.request.parcodparametro02 = "";
        this.request.parcodparametro03 = "";
        this.request.parcodparametro04 = "";
        this.request.parcodparametro05 = "";
        this.request.parnumparametro = 21;
        console.log("TCL: ConsultaFolioComponent -> ngOnInit -> this.request", this.request);
        this.documentosService.buscaParametros(this.request).subscribe(function (res) {
            _this.tipoDocumento = res['general'];
        });
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.user = this.authService.getDatosUser();
        console.log("this.user", this.user);
        this.forma.controls.fechaDesde.setValue(this.firstDayLastMonth(this.date));
        this.forma.controls.fechaHasta.setValue(this.currentdate.getFullYear().toString() +
            "-" +
            (this.currentdate.getMonth() + 1).toString().padStart(2, 0) +
            "-" +
            this.currentdate
                .getDate()
                .toString()
                .padStart(2, 0));
        this.rutOperador = parseInt(JSON.parse(localStorage.getItem("DatosUsuario"))["nrutoperador"], 10);
        this.forma.get(["nombreLocal"]).disable();
        this.forma.get(["codLocal"]).disable();
    };
    Documento1Component.prototype.ngOnDestroy = function () {
        if (this.subData != undefined) {
            this.subData.unsubscribe();
        }
    };
    Documento1Component.prototype.setData = function (resData) {
        if (resData !== 0) {
            switch (this.origen) {
                case "cliente": {
                    this.forma.controls.rutCliente.setValue("" + resData.cli_nrutcliente + resData.cli_sdigverificador);
                    this.forma.controls.nombreCliente.setValue(resData.cli_snombre);
                    this.forma.get("nombreLocal").setValue('');
                    this.forma.get("codLocal").setValue('');
                    this.forma.controls.codLocal.enable();
                    break;
                }
                case "local": {
                    this.forma.controls.nombreLocal.setValue(resData.loc_snombre);
                    this.numeroLocal = resData.loc_nnumlocal;
                    this.forma.controls.codLocal.setValue(this.numeroLocal);
                    break;
                }
            }
        }
    };
    Documento1Component.prototype.firstDayLastMonth = function (date) {
        var anio = date.getFullYear();
        var mes = date.getMonth();
        var dia = 1;
        var diaStr = dia < 10 ? "0" + dia : dia;
        var mesStr = mes < 10 ? "0" + mes : mes;
        var fechaString = anio + "-" + mesStr + "-" + diaStr;
        return fechaString;
    };
    Documento1Component.prototype.buscarAllFacturas = function () {
        var _this = this;
        if (this.forma.controls.nombreCliente.value != null || this.forma.controls.nombreCliente.value != "") {
            this.requestCuatro.nnumlocal = 0;
        }
        else {
            this.requestCuatro.nnumlocal = this.forma.controls.codLocal.value;
        }
        this.requestCuatro.nnumfacturadesde = 0;
        this.requestCuatro.nnumfacturahasta = 0;
        this.requestCuatro.nrutoperador = this.rutOperador;
        if (this.forma.controls.rutCliente.value == null) {
            this.requestCuatro.rutCliente = 0;
        }
        else {
            this.requestCuatro.rutCliente = this.forma.controls.rutCliente.value.toString();
            this.requestCuatro.rutCliente = this.requestCuatro.rutCliente.slice(0, -1);
            this.requestCuatro.rutCliente = parseInt(this.requestCuatro.rutCliente, 10);
            console.log('this.requestCuatro.rutCliente', this.requestCuatro.rutCliente);
        }
        if (this.forma.controls.rutCliente.value === null) {
            swal("Seleccione un cliente", "", "error");
            return;
        }
        if (this.forma.controls.fechaHasta.value ===
            this.forma.controls.fechaDesde.value) {
            swal("Seleccione un rango de fecha", "", "error");
            return;
        }
        else {
            this.requestCuatro.sfhoemisiondesde =
                this.forma.controls.fechaDesde.value.split("-").join("") + "00000000";
            this.requestCuatro.sfhoemisionhasta =
                this.forma.controls.fechaHasta.value.split("-").join("") + "00000000";
        }
        if (this.forma.controls.tipoFactura.value == "") {
            swal("Seleccione un tipo de factura", "", "info");
            return;
        }
        else {
            this.requestCuatro.scodtipo = this.forma.controls.tipoFactura.value;
            this.requestCuatro.nidrecorrido = this.forma.controls.recorrido.value;
            console.log('requestCuatro', this.requestCuatro);
        }
        this.loader.show();
        this.documentosService.getFacturas(this.requestCuatro).subscribe(function (data) {
            _this.loader.hide();
            if (data) {
                if (data.documentos.length == 0 && data.error.codError == 0) {
                    swal("Atención! No se encontraron resultados info");
                }
                else {
                    _this.facturas = data.documentos;
                    console.log("this.facturas", _this.facturas);
                }
                if (data.error.codError != 0) {
                    swal("Atención! Ha ocurrido un error inesperado!");
                }
            }
        });
    };
    Documento1Component.prototype.openModal = function (origen, titulo) {
        this.origen = origen;
        if (origen === "cliente") {
            var initialState = {
                titulo: titulo,
                origen: origen,
                th1: "RUT",
                th2: "Nombres",
                modalFor: "Clientes",
                rutClientes: this.requestTres.rutCliente,
                rutOperador: this.requestTres.rutOperador,
                name: this.forma.controls.nombreCliente.value
            };
            this.bsModalRef = this.modalService.show(_commonPopUp_clienteOlocalPopUp_clienteOlocalPopUp_component__WEBPACK_IMPORTED_MODULE_2__["ClienteOlocalPopUpComponent"], {
                initialState: initialState,
                backdrop: "static",
                keyboard: false
            });
        }
        else if (origen === "local") {
            if (!this.forma.controls.rutCliente.value) {
                swal("Seleccione un cliente", "", "warning");
            }
            else {
                // tslint:disable-next-line: max-line-length / crecion del request para locales
                this.documentosService.localRequest.rutCliente = this.requestTres.rutCliente = parseInt(this.forma.controls.rutCliente.value.toString().slice(0, -1), 10);
                this.documentosService.localRequest.rutOperador = this.rutOperador;
                var initialState = {
                    titulo: titulo,
                    origen: 'local',
                    th1: "Número",
                    th2: "Nombres",
                    modalFor: "Locales",
                    rutClientes: this.requestTres.rutCliente,
                    rutOperador: this.requestTres.rutOperador
                };
                this.bsModalRef = this.modalService.show(_commonPopUp_clienteOlocalPopUp_clienteOlocalPopUp_component__WEBPACK_IMPORTED_MODULE_2__["ClienteOlocalPopUpComponent"], {
                    initialState: initialState,
                    backdrop: "static",
                    keyboard: false
                });
            }
        }
    };
    Documento1Component.prototype.openDetalleFacturaAmpliado = function (factura) {
        var initialState = {
            // rutCliente: `${factura.rutCliente}-${factura.sdigverificador}`,
            nidfactura: factura.nidfactura,
            nnumfactura: factura.nnumfactura,
            nRutOperador: parseInt(JSON.parse(localStorage.getItem("DatosUsuario"))["nrutoperador"], 10)
        };
        // request para el detalle factura
        if (factura.scodtipo === 'NOCRE') {
            this.fact.nIdNotaCredito = factura.nidfactura;
            this.fact.nNumNotaCredito = factura.nnumfactura;
            this.fact.nRutOperador = this.rutOperador;
            this.documentosService.selectedFactura = this.fact;
        }
        else if (factura.scodtipo === 'FACT') {
            this.fact.nIdFactura = factura.nidfactura;
            this.fact.nNumFactura = factura.nnumfactura;
            this.fact.nRutOperador = this.rutOperador;
            this.documentosService.selectedFactura = this.fact;
        }
        this.bsModalRef = this.modalService.show(_commonPopUp_detalleFacturaPrintPopUp_detalleFacturaPrintPopUp_component__WEBPACK_IMPORTED_MODULE_1__["DetalleFacturaPrintPopUpComponent"], { initialState: initialState, class: "modal-lg", backdrop: 'static', keyboard: false });
    };
    Documento1Component.prototype.validaCliente = function () {
        var _this = this;
        this.loader.show();
        if (this.forma.controls.rutCliente.value === "" ||
            this.forma.controls.rutCliente.value == null) {
            this.loader.hide();
            this.forma.controls.rutCliente.setValue("");
            this.forma.controls.nombreCliente.setValue("");
            this.forma.get("nombreLocal").setValue('');
            this.forma.get("codLocal").setValue('');
            this.forma.controls.codLocal.disable();
            this.localBtns = false;
        }
        else {
            this.requestdos.rutClientes = this.utilService.rutString2NumberFormatSinVerificador(this.forma.controls.rutCliente.value);
            this.requestdos.rutOperador = Number(this.user.nrutoperador);
            //console.log(this.requestdos);
            this.clientesService.getDetallesClientes(this.requestdos).subscribe(function (data) {
                _this.loader.hide();
                if (data) {
                    if (data.error.codError !== 0) {
                        swal("Atención", "Ha ocurrido un error inesperado!", "error");
                    }
                    else {
                        if (!_this.utilService.isValidRUT(_this.forma.controls.rutCliente.value)) {
                            _this.forma.controls.rutCliente.setValue('');
                            swal('Atención', 'El RUT es incorrecto', 'error');
                        }
                        else {
                            _this.datos = data.cliente;
                            if (_this.datos.length > 0) {
                                // this.estadoCliente = this.datos[0].cli_scodestado;
                                _this.forma.controls.nombreCliente.setValue(_this.datos[0].cli_snombre);
                                _this.forma.get("nombreLocal").setValue('');
                                _this.forma.get("codLocal").setValue('');
                                _this.forma.controls.codLocal.enable();
                                _this.localBtns = true;
                                // this.listarProtestos();
                            }
                            else {
                                _this.forma.controls.rutCliente.setValue("");
                                _this.forma.controls.nombreCliente.setValue("");
                                swal("Atención", "No Existe este Cliente", "warning");
                            }
                        }
                    }
                }
            }, function (error) {
                _this.loader.hide();
                swal("Atención", "Ha ocurrido un error inesperado!", "error");
            });
        }
    };
    Documento1Component.prototype.validaLocal = function () {
        var _this = this;
        this.loader.show();
        if (this.forma.controls.codLocal.value === "") {
            this.loader.hide();
            this.forma.controls.codLocal.setValue("");
            this.forma.controls.descLocal.setValue("");
            this.relacionBtns = false;
        }
        else {
            this.cargaLocalPedidos.numLocal = this.forma.controls.codLocal.value;
            this.cargaLocalPedidos.rutCliente = this.forma.controls.rutCliente.value
                .toString()
                .slice(0, -1);
            this.cargaLocalPedidos.rutOperador = this.rutOperador;
            console.log(this.cargaLocalPedidos);
            this.pedidosService
                .getCargaLocalPedidos(this.cargaLocalPedidos)
                .subscribe(function (data) {
                _this.loader.hide();
                if (data) {
                    if (data.error.codError !== 0) {
                        swal("Atención", "Ha ocurrido un error inesperado!", "error");
                    }
                    else {
                        _this.datos = data.cargaLocal;
                        if (_this.datos.length > 0) {
                            console.log("this.datos", _this.datos);
                            _this.forma.controls.nombreLocal.setValue(_this.datos[0].loc_snombre);
                            _this.relacionBtns = true;
                        }
                        else {
                            console.log("no existe este local");
                            _this.forma.controls.codLocal.setValue("");
                            _this.forma.controls.nombreLocal.setValue("");
                            _this.relacionBtns = false;
                            swal("Atención", "No Existe este Local", "warning");
                        }
                    }
                }
            }, function (error) {
                _this.loader.hide();
                swal("Atención", "Ha ocurrido un error inesperado!", "error");
            });
        }
    };
    Documento1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: "app-documento1",
            template: __webpack_require__(/*! ./documento1.component.html */ "./src/app/routes/documentos/documento1/documento1.component.html"),
            styles: [__webpack_require__(/*! ./documento1.component.scss */ "./src/app/routes/documentos/documento1/documento1.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
            _core_consultaService_documentos_service__WEBPACK_IMPORTED_MODULE_15__["DocumentosService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["BsModalService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_11__["ConsultasService"],
            _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_0__["ClientesService"],
            _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_3__["CajaCobranzaService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_5__["PedidosService"]])
    ], Documento1Component);
    return Documento1Component;
}());



/***/ }),

/***/ "./src/app/routes/documentos/documentos.module.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/documentos/documentos.module.ts ***!
  \********************************************************/
/*! exports provided: routes, DocumentosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosModule", function() { return DocumentosModule; });
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
/* harmony import */ var _commonPopUp_zonasTodasPopUp_zonasTodasPopUp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../commonPopUp/zonasTodasPopUp/zonasTodasPopUp.component */ "./src/app/routes/commonPopUp/zonasTodasPopUp/zonasTodasPopUp.component.ts");
/* harmony import */ var _commonPopUp_rutAsociadoPopUp_rutAsociadoPopUp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../commonPopUp/rutAsociadoPopUp/rutAsociadoPopUp.component */ "./src/app/routes/commonPopUp/rutAsociadoPopUp/rutAsociadoPopUp.component.ts");
/* harmony import */ var _commonPopUp_listaLocalesPopUp_listaLocalesPopUp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../commonPopUp/listaLocalesPopUp/listaLocalesPopUp.component */ "./src/app/routes/commonPopUp/listaLocalesPopUp/listaLocalesPopUp.component.ts");
/* harmony import */ var _commonPopUp_relaComerPedidoPopUp_relaComerPedidoPopUp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../commonPopUp/relaComerPedidoPopUp/relaComerPedidoPopUp.component */ "./src/app/routes/commonPopUp/relaComerPedidoPopUp/relaComerPedidoPopUp.component.ts");
/* harmony import */ var _commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../commonPopUp/sucursalesPopUp/sucursalesPopUp.component */ "./src/app/routes/commonPopUp/sucursalesPopUp/sucursalesPopUp.component.ts");
/* harmony import */ var _commonPopUp_rutasPopUp_rutasPopUp_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../commonPopUp/rutasPopUp/rutasPopUp.component */ "./src/app/routes/commonPopUp/rutasPopUp/rutasPopUp.component.ts");
/* harmony import */ var _commonPopUp_validacionUsuarioPedidoPopUp_validacionUsuarioPedidoPopUp_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../commonPopUp/validacionUsuarioPedidoPopUp/validacionUsuarioPedidoPopUp.component */ "./src/app/routes/commonPopUp/validacionUsuarioPedidoPopUp/validacionUsuarioPedidoPopUp.component.ts");
/* harmony import */ var _commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../commonPopUp/utilGeoPopUp/utilGeoPopUp.component */ "./src/app/routes/commonPopUp/utilGeoPopUp/utilGeoPopUp.component.ts");
/* harmony import */ var _commonPopUp_gestionRecorridoPopUp_gestionRecorridoPopUp_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../commonPopUp/gestionRecorridoPopUp/gestionRecorridoPopUp.component */ "./src/app/routes/commonPopUp/gestionRecorridoPopUp/gestionRecorridoPopUp.component.ts");
/* harmony import */ var _commonPopUp_transportistasPopUp_transportistasPopUp_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../commonPopUp/transportistasPopUp/transportistasPopUp.component */ "./src/app/routes/commonPopUp/transportistasPopUp/transportistasPopUp.component.ts");
/* harmony import */ var _commonPopUp_actualizaclientepopup_actualizaclientepopup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../commonPopUp/actualizaclientepopup/actualizaclientepopup.component */ "./src/app/routes/commonPopUp/actualizaclientepopup/actualizaclientepopup.component.ts");
/* harmony import */ var _documento1_documento1_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./documento1/documento1.component */ "./src/app/routes/documentos/documento1/documento1.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var _impresionFactura_impresionFactura_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./impresionFactura/impresionFactura.component */ "./src/app/routes/documentos/impresionFactura/impresionFactura.component.ts");
/* harmony import */ var _notasCredito_notasCredito_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./notasCredito/notasCredito.component */ "./src/app/routes/documentos/notasCredito/notasCredito.component.ts");
/* harmony import */ var _consultaFolio_consultaFolio_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./consultaFolio/consultaFolio.component */ "./src/app/routes/documentos/consultaFolio/consultaFolio.component.ts");
/* harmony import */ var _solicitudFolios_solicitudFolios_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./solicitudFolios/solicitudFolios.component */ "./src/app/routes/documentos/solicitudFolios/solicitudFolios.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















//my components






var routes = [
    { path: 'consultaFacturas', component: _documento1_documento1_component__WEBPACK_IMPORTED_MODULE_19__["Documento1Component"] },
    { path: 'impresionFactura', component: _impresionFactura_impresionFactura_component__WEBPACK_IMPORTED_MODULE_21__["ImpresionfacturaComponent"] },
    { path: 'notasCredito', component: _notasCredito_notasCredito_component__WEBPACK_IMPORTED_MODULE_22__["NotasCreditoComponent"] },
    { path: 'consultaFolio', component: _consultaFolio_consultaFolio_component__WEBPACK_IMPORTED_MODULE_23__["ConsultaFolioComponent"] },
    { path: 'solicitudFolios', component: _solicitudFolios_solicitudFolios_component__WEBPACK_IMPORTED_MODULE_24__["SolicitudFoliosComponent"] }
];
var DocumentosModule = /** @class */ (function () {
    function DocumentosModule() {
    }
    DocumentosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_2__["Ng2TableModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                _commonPopUp_commonPopUp_module__WEBPACK_IMPORTED_MODULE_6__["CommonPopUpModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["DatepickerModule"].forRoot()
            ],
            declarations: [
                _documento1_documento1_component__WEBPACK_IMPORTED_MODULE_19__["Documento1Component"],
                _impresionFactura_impresionFactura_component__WEBPACK_IMPORTED_MODULE_21__["ImpresionfacturaComponent"],
                _notasCredito_notasCredito_component__WEBPACK_IMPORTED_MODULE_22__["NotasCreditoComponent"],
                _consultaFolio_consultaFolio_component__WEBPACK_IMPORTED_MODULE_23__["ConsultaFolioComponent"],
                _solicitudFolios_solicitudFolios_component__WEBPACK_IMPORTED_MODULE_24__["SolicitudFoliosComponent"],
            ],
            entryComponents: [
                _commonPopUp_zonasTodasPopUp_zonasTodasPopUp_component__WEBPACK_IMPORTED_MODULE_8__["ZonasTodasPopUpComponent"],
                _commonPopUp_rutAsociadoPopUp_rutAsociadoPopUp_component__WEBPACK_IMPORTED_MODULE_9__["RutAsociadoPopUpComponent"],
                _commonPopUp_listaLocalesPopUp_listaLocalesPopUp_component__WEBPACK_IMPORTED_MODULE_10__["ListaLocalesPopUpComponent"],
                _commonPopUp_relaComerPedidoPopUp_relaComerPedidoPopUp_component__WEBPACK_IMPORTED_MODULE_11__["RelaComerPedidoPopUpComponent"],
                _commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_12__["SucursalesPopUpComponent"],
                _commonPopUp_rutasPopUp_rutasPopUp_component__WEBPACK_IMPORTED_MODULE_13__["RutasPopUpComponent"],
                _commonPopUp_validacionUsuarioPedidoPopUp_validacionUsuarioPedidoPopUp_component__WEBPACK_IMPORTED_MODULE_14__["ValidacionUsuarioPedidoPopUpComponent"],
                _commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_15__["UtilGeoPopUpComponent"],
                _commonPopUp_gestionRecorridoPopUp_gestionRecorridoPopUp_component__WEBPACK_IMPORTED_MODULE_16__["GestionRecorridoPopUpComponent"],
                _commonPopUp_transportistasPopUp_transportistasPopUp_component__WEBPACK_IMPORTED_MODULE_17__["TransportistasPopUpComponent"],
                _commonPopUp_actualizaclientepopup_actualizaclientepopup_component__WEBPACK_IMPORTED_MODULE_18__["ActualizaclientepopupComponent"],
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], DocumentosModule);
    return DocumentosModule;
}());



/***/ }),

/***/ "./src/app/routes/documentos/impresionFactura/impresionFactura.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/routes/documentos/impresionFactura/impresionFactura.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"\">\r\n\r\n    <div class=\"modal-header\">\r\n\r\n        <h4>Impresión Facturas</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row  d-flex text-right\">\r\n            <div class=\"col-sm-12 form-horizontal\">\r\n\r\n                <button style=\"margin-right: 9%;\" class=\"btn btn-oval btn-sm\" (click)=\"buscaLotesImpresion()\">Buscar</button>\r\n                \r\n            </div>\r\n            <br>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\r\n            <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n\r\n                <div class=\"col-sm-12 form-horizontal\">\r\n                    <label class=\"col-sm-2 control-label\">Tipo impresión</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"tipoFactura\" name=\"tipoFactura\">\r\n                  <option  *ngFor=\"let tipo of tipos\" value=\"{{tipo.codimpresion}}\">{{tipo.desimpresion}}</option>\r\n                </select>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"col-sm-12 form-horizontal\">\r\n                    <label class=\"col-sm-2 control-label\">Estado</label>\r\n\r\n                    <div class=\"col-sm-3\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"estadoFactura\" name=\"estadoFactura\">\r\n              <option value=\"null\">Todos</option>\r\n              <option  *ngFor=\"let estado of estados\" value=\"{{estado.codestado}}\">{{estado.desestado}}</option>\r\n            </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12 form-horizontal\">\r\n                    <label class=\"col-sm-2 control-label\">Lote</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input formControlName=\"lote\" name=\"lote\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12 form-horizontal\">\r\n                    <label class=\"col-sm-2 control-label\">Recorrido</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input formControlName=\"recorrido\" name=\"recorrido\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12 form-horizontal\">\r\n                    <label class=\"col-sm-2 control-label\">Fecha desde</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input type=\"date\" formControlName=\"fechaDesde\" name=\"fechaDesde\" id=\"fechaDesde\" type=\"date\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                        <a class=\"text\">\r\n                            <em class=\"fa fa-search\"></em>\r\n                        </a>\r\n                    </div>\r\n                    <label class=\"col-sm-2 control-label\">Fecha hasta</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input formControlName=\"fechaHasta\" name=\"fechaHasta\" class=\"form-control\" type=\"date\" />\r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                        <a class=\"text\">\r\n                            <em class=\"fa fa-search\"></em>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n</div> -->\r\n\r\n<!-- <div class=\"dash-table-container\" id=\"print-section\">\r\n    <table class=\"table table-hover\">\r\n        <thead>\r\n            <tr>\r\n                <th>ID Lote</th>\r\n                <th>ID Recorrido</th>\r\n                <th>Tipo Impresión</th>\r\n                <th>Fecha</th>\r\n                <th>Estado</th>\r\n                <th>Cant Doctos</th>\r\n                <th>Cant Doctos Error</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <hr>\r\n\r\n            <tr [hidden]=\"!cargando\">\r\n                <td colspan=\"8\" class=\"text-center\">Cargando ...</td>\r\n            </tr>\r\n            <tr *ngIf=\"resultados == false\">\r\n                <td colspan=\"8\" class=\"text-center\">No se encontraron resultados</td>\r\n            </tr>\r\n\r\n            <tr class=\"text-center\" *ngFor=\"let lott of lotesImp | paginate: {itemsPerPage: 7, currentPage: pActualBuscaCliente, id: 'pageBuscaCliente'};\" (click)=\"openModalError(lott)\">\r\n                <td>{{lott.lot_nidlote}}</td>\r\n                <td>{{lott.lfel_id_recorrido}}</td>\r\n                <td>{{lott.tipoimpresion}}</td>\r\n                <td>{{lott.lot_dfhoentrega}}</td>\r\n                <td>{{lott.estadoloteimpresion}}</td>\r\n                <td>{{lott.lot_cantidaddocumentos}}</td>\r\n                <td>{{lott.lot_cantidaddocerror}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div class=\"text-right\">\r\n        <pagination-controls (pageChange)=\"pActualBuscaCliente = $event\" id=\"pageBuscaCliente\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n    </div>\r\n</div> -->\r\n\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3>Impresión Facturas</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n\r\n            <div class=\"col-sm-12 \">\r\n                <label class=\"col-sm-2 control-label\">Tipo impresión</label>\r\n                <div class=\"col-sm-3\">\r\n                    <select class=\"form-control pv-0\" formControlName=\"tipoFactura\" name=\"tipoFactura\">\r\n                            <option  *ngFor=\"let tipo of tipos\" value=\"{{tipo.codimpresion}}\">{{tipo.desimpresion}}</option>\r\n                        </select>\r\n                </div>\r\n                <div class=\"col-sm-7\">\r\n                    <div class=\"row pull-right\">\r\n                        <button class=\"btn btn-oval btn-sm\" (click)=\"buscaLotesImpresion()\">Buscar</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n                <label class=\"col-sm-2 control-label\">Estado</label>\r\n                <div class=\"col-sm-3\">\r\n                    <select class=\"form-control pv-0\" formControlName=\"estadoFactura\" name=\"estadoFactura\">\r\n                            <option value=\"null\">Todos</option>\r\n                            <option  *ngFor=\"let estado of estados\" value=\"{{estado.codestado}}\">{{estado.desestado}}</option>\r\n                        </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n                <label class=\"col-sm-2 control-label\">Lote</label>\r\n                <div class=\"col-sm-3\">\r\n                    <input formControlName=\"lote\" name=\"lote\" class=\"form-control\" type=\"text\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-12 \">\r\n                <label class=\"col-sm-2 control-label\">Recorrido</label>\r\n                <div class=\"col-sm-3\">\r\n                    <input formControlName=\"recorrido\" name=\"recorrido\" class=\"form-control\" type=\"text\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-12 \">\r\n                <label class=\"col-sm-2 control-label\">Fecha desde</label>\r\n                <div class=\"col-sm-3\">\r\n                    <input type=\"date\" formControlName=\"fechaDesde\" name=\"fechaDesde\" id=\"fechaDesde\" type=\"date\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"col-sm-1\"></div>\r\n                <label class=\"col-sm-2 control-label\">Fecha hasta</label>\r\n                <div class=\"col-sm-3\">\r\n                    <input formControlName=\"fechaHasta\" name=\"fechaHasta\" class=\"form-control\" type=\"date\" />\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div class=\"dash-table-container\" id=\"print-section\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>ID Lote</th>\r\n                        <th>ID Recorrido</th>\r\n                        <th>Tipo Impresión</th>\r\n                        <th>Fecha</th>\r\n                        <th>Estado</th>\r\n                        <th>Cant Doctos</th>\r\n                        <th>Cant Doctos Error</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr [hidden]=\"!cargando\">\r\n                        <td colspan=\"8\" class=\"text-center\">Cargando ...</td>\r\n                    </tr>\r\n                    <tr *ngIf=\"resultados == false\">\r\n                        <td colspan=\"8\" class=\"text-center\">No se encontraron resultados</td>\r\n                    </tr>\r\n\r\n                    <tr class=\"text-center\" *ngFor=\"let lott of lotesImp | paginate: {itemsPerPage: 7, currentPage: pActualBuscaImp, id: 'pageBuscaImpr'};\" (click)=\"openModalError(lott)\">\r\n                        <td>{{lott.lot_nidlote}}</td>\r\n                        <td>{{lott.lfel_id_recorrido}}</td>\r\n                        <td>{{lott.tipoimpresion}}</td>\r\n                        <td>{{lott.lot_dfhoentrega}}</td>\r\n                        <td>{{lott.estadoloteimpresion}}</td>\r\n                        <td>{{lott.lot_cantidaddocumentos}}</td>\r\n                        <td>{{lott.lot_cantidaddocerror}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <div class=\"text-right\">\r\n                <pagination-controls (pageChange)=\"pActualBuscaImp = $event\" id=\"pageBuscaImpr\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/documentos/impresionFactura/impresionFactura.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/routes/documentos/impresionFactura/impresionFactura.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/documentos/impresionFactura/impresionFactura.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/documentos/impresionFactura/impresionFactura.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ImpresionfacturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpresionfacturaComponent", function() { return ImpresionfacturaComponent; });
/* harmony import */ var _core_consultaService_documentos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../core/consultaService/documentos.service */ "./src/app/core/consultaService/documentos.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _commonPopUp_detalleImpresionFacturasErrorPopUp_detalleImpresionFacturasErrorPopUp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../commonPopUp/detalleImpresionFacturasErrorPopUp/detalleImpresionFacturasErrorPopUp.component */ "./src/app/routes/commonPopUp/detalleImpresionFacturasErrorPopUp/detalleImpresionFacturasErrorPopUp.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/consultaService/cajaCobranza.service */ "./src/app/core/consultaService/cajaCobranza.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
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
var ImpresionfacturaComponent = /** @class */ (function () {
    function ImpresionfacturaComponent(documentosService, fb, loader, authService, modalService, consultasService, cajaCobranzaService, utilService) {
        this.documentosService = documentosService;
        this.loader = loader;
        this.authService = authService;
        this.modalService = modalService;
        this.consultasService = consultasService;
        this.cajaCobranzaService = cajaCobranzaService;
        this.utilService = utilService;
        this.hidden = true;
        this.request = {};
        this.requestDos = {};
        this.pActualBuscaImp = 1;
        this.fechaActual = new Date();
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            tipoFactura: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
            estadoFactura: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
            lote: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
            recorrido: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
            fechaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
            fechaHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]()
        });
        this.currentdate = new Date();
    }
    ImpresionfacturaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showResults = false;
        this.cargando = false;
        this.resultados = true;
        this.request.nrutoperador = this.rutOperador = parseInt(JSON.parse(localStorage.getItem("DatosUsuario"))["nrutoperador"], 10);
        this.requestDos.scodsucursal = JSON.parse(localStorage.getItem("SucursalUsuario"))["sus_scodsucursal"];
        this.forma.controls.fechaDesde.setValue(this.currentdate.getFullYear().toString() +
            "-" +
            (this.currentdate.getMonth() + 1).toString().padStart(2, 0) +
            "-" +
            this.currentdate
                .getDate()
                .toString()
                .padStart(2, 0));
        this.forma.controls.fechaHasta.setValue(this.currentdate.getFullYear().toString() +
            "-" +
            (this.currentdate.getMonth() + 1).toString().padStart(2, 0) +
            "-" +
            this.currentdate
                .getDate()
                .toString()
                .padStart(2, 0));
        console.log(this.rutOperador);
        this.documentosService.getestadoLotesImpD(this.request).subscribe(function (res) {
            _this.estados = res["documentos"];
            console.log('this.estados', _this.estados);
        });
        this.documentosService.buscatiposImpresion(this.request).subscribe(function (res) {
            _this.tipos = res["documentos"];
            console.log('this.tipos', _this.tipos);
        });
    };
    ImpresionfacturaComponent.prototype.setFecha = function () {
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
    ImpresionfacturaComponent.prototype.buscaLotesImpresion = function () {
        var _this = this;
        console.log('this.requestDos', this.requestDos);
        this.resultados = true;
        this.cargando = true;
        this.requestDos.ncodlote = this.forma.controls.lote.value;
        this.requestDos.ncodrecorrido = this.forma.controls.recorrido.value;
        this.requestDos.nrutoperador = this.request.nrutoperador;
        this.requestDos.scodestado = this.forma.controls.estadoFactura.value;
        this.requestDos.scodtipoimpresion = this.forma.controls.tipoFactura.value;
        this.requestDos.sfechadesde =
            this.forma.controls.fechaDesde.value.split("-").join("") + "00000000";
        this.requestDos.sfechahasta =
            this.forma.controls.fechaHasta.value.split("-").join("") + "00000000";
        this.requestDos.scodsucursal = this.requestDos.scodsucursal;
        this.documentosService.buscalotesImp(this.requestDos).subscribe(function (res) {
            console.log("res", res);
            _this.cargando = false;
            _this.lotesImp = res["documentos"];
            console.log('this.lotesImp.length', _this.lotesImp.length);
            console.log("this.lotesImp", _this.lotesImp);
            console.log('this.lotesImp despues', _this.lotesImp);
            if (_this.lotesImp.length == 0) {
                _this.resultados = false;
            }
        });
    };
    ImpresionfacturaComponent.prototype.openModalError = function (lott) {
        if (lott === void 0) { lott = {}; }
        console.log(lott);
        var initialState = {
            lote: lott.lot_nidlote,
            idRecorrido: lott.lfel_id_recorrido,
            tipoImpresion: lott.tipoimpresion,
            fechaEntrega: lott.lot_dfhoentrega,
            estadoloteimpresion: lott.estadoloteimpresion,
            cantDocs: lott.lot_cantidaddocumentos,
            cantDocsError: lott.lot_cantidaddocerror,
            request2anterior: this.requestDos
        };
        this.bsModalRefe = this.modalService.show(_commonPopUp_detalleImpresionFacturasErrorPopUp_detalleImpresionFacturasErrorPopUp_component__WEBPACK_IMPORTED_MODULE_6__["DetalleImpresionFacturasErrorPopUpComponent"], { initialState: initialState, backdrop: 'static', class: 'modal-lg' });
    };
    ImpresionfacturaComponent.prototype.imprimir = function () {
        var printContents, popupWin;
        printContents = document.getElementById("print-section").innerHTML;
        popupWin = window.open("", "_blank", "top=0,left=0,height=100%,width=auto");
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>Print tab</title>\n          <style>\n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    ImpresionfacturaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-impresionfactura",
            template: __webpack_require__(/*! ./impresionFactura.component.html */ "./src/app/routes/documentos/impresionFactura/impresionFactura.component.html"),
            styles: [__webpack_require__(/*! ./impresionFactura.component.scss */ "./src/app/routes/documentos/impresionFactura/impresionFactura.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_consultaService_documentos_service__WEBPACK_IMPORTED_MODULE_0__["DocumentosService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_1__["ConsultasService"],
            _core_consultaService_cajaCobranza_service__WEBPACK_IMPORTED_MODULE_8__["CajaCobranzaService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"]])
    ], ImpresionfacturaComponent);
    return ImpresionfacturaComponent;
}());



/***/ }),

/***/ "./src/app/routes/documentos/notasCredito/notasCredito.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/routes/documentos/notasCredito/notasCredito.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <h4>Detalle Nota Crédito</h4>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\" novalidate>\r\n      <div class=\"col-sm-12 pl-0\">\r\n        <div class=\"col-sm-10 pl-0\">\r\n          <div class=\"form-group\">\r\n            <div class=\"col-sm-12 pl-0\">\r\n              <div class=\"col-sm-6\">\r\n                <label class=\"col-sm-2 control-label\">Cliente</label>\r\n                <div class=\"col-sm-3 pr-0\">\r\n                  <input formControlName=\"nRutCliente\" name=\"nRutCliente\" class=\"form-control\" id=\"nRutCliente\"\r\n                    type=\"text\" (change)=\"validaCliente()\" (blur)=\"resetOnRutBlur()\" required />\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <input formControlName=\"nombreCliente\" name=\"nombreCliente\" class=\"form-control\" type=\"text\"\r\n                    data-toggle=\"tooltip\" title=\"Ver Detalle Factura\" />\r\n                </div>\r\n                <div class=\"col-sm-1 pl-0\">\r\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCliente()\" [disabled]=\"tipoOperacion\">\r\n                    <!-- <em class=\"icon-magnifier\"></em> -->\r\n                    <a class=\"text\" data-toggle=\"tooltip\" data-placement=\"bottom\" [title]=\"estadoCliente\">\r\n                      <em class=\"icon-magnifier\"></em>\r\n                    </a>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <label class=\"col-sm-2 control-label\">Local</label>\r\n                <div class=\"col-sm-3 pr-0\">\r\n                  <input formControlName=\"numLocal\" name=\"numLocal\" class=\"form-control\" (change)=\"validaLocal()\"\r\n                    type=\"text\" maxlength=\"2\" required />\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <input formControlName=\"descLocal\" name=\"descLocal\" class=\"form-control\" type=\"text\" />\r\n                </div>\r\n                <div class=\"col-sm-1 pl-0\">\r\n                  <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!localBtns\" (click)=\"openModalLocales()\">\r\n                    <em class=\"icon-magnifier\"></em>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 pl-0\">\r\n              <div class=\"col-sm-6\">\r\n                <label class=\"col-sm-2 control-label\">Rel.Comercial</label>\r\n                <div class=\"col-sm-3 pr-0\">\r\n                  <input formControlName=\"sCodRelacionComer\" name=\"sCodRelacionComer\" class=\"form-control\"\r\n                    (change)=\"validaRelacion()\" type=\"text\" required />\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <input formControlName=\"descRelaComercial\" name=\"descRelaComercial\" class=\"form-control\"\r\n                    type=\"text\" />\r\n                </div>\r\n                <div class=\"col-sm-1 pl-0\">\r\n                  <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!relacionBtns\"\r\n                    (click)=\"openModalRelaciones()\">\r\n                    <em class=\"icon-magnifier\"></em>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-sm-6\">\r\n                <label class=\"col-sm-2 control-label\">Ruta</label>\r\n                <div class=\"col-sm-3 pr-0\">\r\n                  <input formControlName=\"sCodRuta\" name=\"sCodRuta\" class=\"form-control\" (change)=\"validaRutas()\"\r\n                    type=\"text\" [disabled]=\"habilitarFuncionalidades || tipoOperacion !== 'editar'\" required />\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <input formControlName=\"descRuta\" name=\"descRuta\" class=\"form-control\" type=\"text\" />\r\n                </div>\r\n                <div class=\"col-sm-1 pl-0\">\r\n                  <button id=\"btnSucursal\" #btnSucursal type=\"button\" class=\"btn btn-primary\" (click)=\"openModalRutas()\"\r\n                    [attr.disabled]=\"habilitarFuncionalidades\"\r\n                    [disabled]=\"!habilitarFuncionalidades && tipoOperacion !== 'editar'\">\r\n                    <em class=\"icon-magnifier\"></em>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 pl-0\">\r\n              <div class=\"col-sm-6\">\r\n                <label class=\"col-sm-2 control-label\">Territorio</label>\r\n                <div class=\"col-sm-3 pr-0\">\r\n                  <input formControlName=\"sCodTerritorio\" name=\"sCodTerritorio\" class=\"form-control\" type=\"text\"\r\n                    required />\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <input formControlName=\"descTerritorio\" name=\"descTerritorio\" class=\"form-control\" type=\"text\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <label class=\"col-sm-2 control-label\">Direcci&oacute;n</label>\r\n                <div class=\"col-sm-8\">\r\n                  <input formControlName=\"direccionPedido\" name=\"direccionPedido\" class=\"form-control\" type=\"text\"\r\n                    required />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 pl-0\">\r\n\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 pl-0\">\r\n              <div class=\"col-sm-6\">\r\n                <label class=\"col-sm-2 control-label\">Dir. Entrega</label>\r\n                <div class=\"col-sm-3 pr-0\">\r\n                  <input formControlName=\"idDireccionEntrega\" name=\"idDireccionEntrega\" class=\"form-control\" type=\"text\"\r\n                    (change)=\"validarDireccionEntrega()\" [disabled]=\"!habilitarFuncionalidades\" required />\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <input formControlName=\"descDirEntrega\" name=\"descDirEntrega\" class=\"form-control\" type=\"text\" />\r\n                </div>\r\n                <div class=\"col-sm-1 pl-0\">\r\n                  <button type=\"button\" [disabled]=\"!direccionBtns\" class=\"btn btn-primary\"\r\n                    [disabled]=\"!habilitarFuncionalidades && tipoOperacion !== 'editar'\"\r\n                    (click)=\"buscaDireccionesCliente()\">\r\n                    <em class=\"icon-magnifier\"></em>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <label class=\"col-sm-2 control-label pr-0\">Forma Pago</label>\r\n                <div class=\"col-sm-4\">\r\n                  <input formControlName=\"formPago\" name=\"formPago\" class=\"form-control\" type=\"text\" required />\r\n                </div>\r\n                <label class=\"col-sm-2 control-label\">Cupo</label>\r\n                <div *ngIf=\"tipoOperacion !== 'editar'\" class=\"col-sm-4\">\r\n                  <!-- <input formControlName=\"cupos\" name=\"cupos\" class=\"form-control\" type=\"text\" /> -->\r\n                  <label class=\"form-control\"\r\n                    disabled=\"true\">{{this.datos[0]?.rco_ncupodisponible | number:'':'es' }}</label>\r\n                </div>\r\n\r\n                <div *ngIf=\"tipoOperacion === 'editar'\" class=\"col-sm-4\">\r\n                  <!-- <input formControlName=\"cupos\" name=\"cupos\" class=\"form-control\" type=\"text\" /> -->\r\n                  <label class=\"form-control\" disabled=\"true\">{{this.cupoEditar | number:'':'es' }}</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"col-sm-6 pl-0\">\r\n                <label class=\"col-sm-2 control-label lh-11 pr-0\">Fec. Pedido</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fhoPedido\" name=\"fhoPedido\"\r\n                    type=\"date\" required />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-6 pl-2\">\r\n                <label class=\"col-sm-2 control-label lh-11 pr-0\">Fec.Entrega</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input class=\"form-control w-110 ph-1 text-center\" id=\"fhoEntrega\" formControlName=\"fhoEntrega\" name=\"fhoEntrega\"\r\n                    type=\"date\" required />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- cambiar controles -->\r\n            <div class=\"col-sm-12 pl-0\">\r\n              <div class=\"col-sm-6\">\r\n                <label class=\"col-sm-2 control-label\">Motivo</label>\r\n                <div class=\"col-sm-3 pr-0\">\r\n                  <input  (change)=\"llenaDescLocal()\" formControlName=\"codMotivo\" name=\"codMotivo\" class=\"form-control\" (change)=\"validaRelacion()\"\r\n                    type=\"text\" required />\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <input formControlName=\"desMotivo\" name=\"desMotivo\" class=\"form-control\" type=\"text\" />\r\n                </div>\r\n                <div class=\"col-sm-1 pl-0\">\r\n                  <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!relacionBtns\"\r\n                    (click)=\"openModalMotivos()\">\r\n                    <em class=\"icon-magnifier\"></em>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"col-sm-6\">\r\n                <label class=\"col-sm-2 control-label\">\r\n                  Factura\r\n                </label>\r\n                <div class=\"col-sm-7 d-flex\">\r\n                    <input class=\"needsclick\" type=\"checkbox\" [checked]=\"checkTituloJerarquiaSeleccionado\" />\r\n\r\n                  <input formControlName=\"factura\" name=\"factura\" class=\"form-control\" type=\"text\" />\r\n                </div>\r\n                <div class=\"col-sm-1 pl-0\">\r\n                  <button id=\"btnSucursal\" #btnSucursal type=\"button\" class=\"btn btn-primary\" (click)=\"buscaFacturasNcredito()\"\r\n                    [attr.disabled]=\"habilitarFuncionalidades\"\r\n                    [disabled]=\"!habilitarFuncionalidades && tipoOperacion !== 'editar'\">\r\n                    <em class=\"icon-magnifier\"></em>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--sucursal-->\r\n            <div class=\"col-sm-6\">\r\n              <label class=\"col-sm-2 control-label\">Sucursal</label>\r\n              <div class=\"col-sm-3 pr-0\">\r\n                <input formControlName=\"codSucursal\" name=\"codSucursal\" class=\"form-control\"\r\n                  (change)=\"validaSucursales()\" type=\"text\" required />\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <input formControlName=\"descSucursal\" name=\"descSucursal\" class=\"form-control\" type=\"text\" />\r\n              </div>\r\n              <div class=\"col-sm-1 pl-0\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalSucursales()\"\r\n                  [disabled]=\"!habilitarFuncionalidades && tipoOperacion !== 'editar'\">\r\n                  <em class=\"icon-magnifier\"></em>\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <label class=\"col-sm-1 control-label lh-11 pr-0\">Observaciones</label>\r\n              <div class=\"col-sm-11\">\r\n                <input formControlName=\"sObservacion\" name=\"sObservacion\" class=\"form-control\" type=\"text\" />\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <button class=\"btn btn-oval btn-sm\" (click)=\"ejecutarServicio()\" type=\"button\">Generar</button>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- inicio tabla de articulos tipo operacion crear -->\r\n      <div *ngIf=\"arts.length !== 0\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"dash-table-container\">\r\n            <table class=\"table table-hover\">\r\n              <thead>\r\n                <th class=\"w-60\">\r\n                  <div class=\"checkbox c-checkbox needsclick pt-1 w-40 pl-1\">\r\n                    <label class=\"needsclick\">\r\n                      <!-- <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckTituloJerarquia()\" [checked]=\"checkTituloJerarquiaSeleccionado\" />\r\n                                              <span class=\"fa fa-check\"></span> -->\r\n                    </label>\r\n                  </div>\r\n                </th>\r\n                <th>Art&iacute;culo</th>\r\n                <th>Descripci&oacute;n</th>\r\n                <th>Medida</th>\r\n                <th>U.V.</th>\r\n                <th>Fracci&oacute;n</th>\r\n                <th>($) Valor U.V.</th>\r\n                <th>Total s/d</th>\r\n                <th>% Desc.</th>\r\n                <th>Total</th>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let articulo of arts\">\r\n                  <td class=\"pt-0\">\r\n                    <div class=\"checkbox c-checkbox needsclick\">\r\n                      <label class=\"needsclick\">\r\n                        <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckPack(articulo)\"\r\n                          [checked]=\"articulo.bCheck\" />\r\n                        <span class=\"fa fa-check\"></span>\r\n                      </label>\r\n                    </div>\r\n                  </td>\r\n                  <td>{{articulo.dfa_scodformato}}{{articulo.dfa_scodvariedad}}</td>\r\n                  <td>{{articulo.dfa_sdescripcionsku}}</td>\r\n                  <td>{{articulo.dfa_smedida}}</td>\r\n                  <td class=\"text-right\" *ngIf=\"articuloNuevo\">{{hidUnidadesVta}}</td>\r\n                  <td  *ngIf=\"articuloNuevo\">\r\n                    <input appNaturalNumber #uv type=\"number\" class=\"form-control w-70 ph-1 text-right\"\r\n                      [(ngModel)]=\"articulo.uv\" [ngModelOptions]=\"{standalone: true}\"\r\n                      (focusout)=\"validaCantidad(uv, articulo)\" (keydown.Tab)=\"validaCantidad(uv, articulo)\"\r\n                      maxlength=\"6\"\r\n                      oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                  </td>\r\n                  <td class=\"text-right\" *ngIf=\"articuloNuevo\">{{articulo.fraccion}}</td>\r\n                  <td *ngIf=\"articuloNuevo\">\r\n                    <input appNaturalNumber #fraccion type=\"number\" class=\"form-control w-70 ph-1 text-right\"\r\n                      [(ngModel)]=\"articulo.fraccion\" [ngModelOptions]=\"{standalone: true}\"\r\n                      (focusout)=\"validaCantidad(fraccion, articulo)\" (keydown.Tab)=\"validaCantidad(fraccion, articulo)\"\r\n                      maxlength=\"6\"\r\n                      oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                  </td>\r\n                  <td class=\"text-right\">{{articulo.valorUV | number:'':'es'}}</td>\r\n                  <td class=\"text-right\">{{articulo.totalSD | number:'':'es'}}</td>\r\n                  <td class=\"text-right\" *ngIf=\"!articuloNuevo\">\r\n                    {{articulo.porcentaje | number:'.2-2':'es'}}</td>\r\n                  <td *ngIf=\"articuloNuevo\">\r\n                    <input appDecimalNumber #porcentaje type=\"number\" step=\"0.01\"\r\n                      class=\"form-control w-50 ph-1 text-right\" [(ngModel)]=\"articulo.porcentaje\"\r\n                      [ngModelOptions]=\"{standalone: true}\" (focusout)=\"validaPorcentaje(porcentaje)\"\r\n                      (keydown.Tab)=\"validaPorcentaje(porcentaje, articulo)\" maxlength=\"4\"\r\n                      oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                  </td>\r\n                  <td class=\"text-right\">{{articulo.total | number:'':'es'}}</td>\r\n                </tr>\r\n                <tr *ngIf=\"articuloNuevo\">\r\n                  <td></td>\r\n                  <td class=\"align-top pl-0 w-80\">\r\n                    <input #articulo type=\"text\" [(ngModel)]=\"filterData\" [ngModelOptions]=\"{standalone: true}\"\r\n                      class=\"form-control w-80\" (input)=\"setArticulo(articulo)\"\r\n                      (keydown.Tab)=\"validaArticulo(articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\" />\r\n                    <ul *ngIf=\"verListaArticulo\" class=\"list-group filter-list\">\r\n                      <li *ngFor=\"let data of parametrosAutocomplete | filter:filterData\"\r\n                        (click)=\"seleccionaArticulo(data, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\">\r\n                        <a class=\"list-group-item\">{{data.art_scodformato}}-{{data.art_scodvariedad}}</a>\r\n                      </li>\r\n                    </ul>\r\n                  </td>\r\n                  <td class=\"align-top pl-0\">\r\n                    <input #descripcion type=\"text\" [(ngModel)]=\"filterDesc\" [ngModelOptions]=\"{standalone: true}\"\r\n                      class=\"form-control w-200 \" (input)=\"setDescripcion(descripcion)\"\r\n                      (keydown.Tab)=\"validaDescripcion(articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\" />\r\n                    <ul *ngIf=\"verListaDescripcion\" class=\"list-group filter-list\">\r\n                      <li *ngFor=\"let data of parametrosAutocomplete | filterDesc:filterDesc\"\r\n                        (click)=\"seleccionaArticulo(data, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\">\r\n                        <a class=\"list-group-item\">{{data.art_sdescripcion}}</a>\r\n                      </li>\r\n                    </ul>\r\n                  </td>\r\n                  <td class=\"align-top pl-0\">\r\n                    <input #medida type=\"text\" class=\"form-control w-100\" disabled>\r\n                  </td>\r\n                  <td class=\"align-top pl-0\">\r\n                    <input appNaturalNumber #uv type=\"number\" class=\"form-control w-70 ph-1 text-right\"\r\n                      (focusout)=\"validaCantidad(uv)\" (keydown.Tab)=\"validaCantidad(uv)\" maxlength=\"6\"\r\n                      oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                  </td>\r\n                  <td class=\"align-top pl-0\">\r\n                    <input appNaturalNumber #fraccion type=\"number\" class=\"form-control w-70 ph-1 text-right\"\r\n                      (focusout)=\"validaCantidad(fraccion)\" (keydown.Tab)=\"validaCantidad(fraccion)\" maxlength=\"6\"\r\n                      oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                  </td>\r\n                  <td class=\"align-top pl-0\">\r\n                    <input #valorUV type=\"number\" class=\"form-control w-80 text-right\" disabled>\r\n                  </td>\r\n                  <td class=\"align-top pl-0\">\r\n                    <input #totalSD type=\"number\" class=\"form-control w-90\" disabled>\r\n                  </td>\r\n                  <td class=\"align-top pl-0\">\r\n                    <input appDecimalNumber #porcentaje type=\"number\" step=\"0.01\"\r\n                      class=\"form-control w-50 ph-1 text-right\" (focusout)=\"validaPorcentaje(porcentaje)\"\r\n                      (keydown.Tab)=\"validaPorcentaje(porcentaje)\" maxlength=\"4\"\r\n                      oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                      (keyup.enter)=\"agregarArticuloPack(articulo, descripcion, medida, uv, fraccion, valorUV, totalSD, porcentaje, total)\">\r\n                  </td>\r\n                  <td class=\"align-top pl-0\">\r\n                    <input #total type=\"number\" class=\"form-control w-90 text-right\" disabled>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n          </div>\r\n          <br>\r\n        </div>\r\n      </div>\r\n      <!-- fin tabla de articulos tipo operacion crear -->\r\n      <!-- inicio tabla de articulos tipo operacion editar -->\r\n      <div *ngIf=\"tipoOperacion === 'editar'\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"dash-table-container\">\r\n            <table class=\"table table-hover\">\r\n              <thead>\r\n                <th class=\"w-60\">\r\n                  <div class=\"checkbox c-checkbox needsclick pt-1 w-40 pl-1\">\r\n                    <label class=\"needsclick\">\r\n                      <!-- <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckTituloJerarquia()\" [checked]=\"checkTituloJerarquiaSeleccionado\" />\r\n                                              <span class=\"fa fa-check\"></span> -->\r\n                    </label>\r\n                  </div>\r\n                </th>\r\n                <th>Art&iacute;culo</th>\r\n                <th>Descripci&oacute;n</th>\r\n                <th>Medida</th>\r\n                <th>U.V.</th>\r\n                <th>Fracci&oacute;n</th>\r\n                <th>($) Valor U.V.</th>\r\n                <th>Total s/d</th>\r\n                <th>% Desc.</th>\r\n                <th>Total</th>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let articulo of packArticulo\">\r\n                  <td class=\"pt-0\">\r\n                    <div class=\"checkbox c-checkbox needsclick\">\r\n                      <label class=\"needsclick\">\r\n                        <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckPack(articulo)\"\r\n                          [checked]=\"articulo.bCheck\" />\r\n                        <span class=\"fa fa-check\"></span>\r\n                      </label>\r\n                    </div>\r\n                  </td>\r\n                  <td>{{articulo.articulo}}</td>\r\n                  <td>{{articulo.descripcion}}</td>\r\n                  <td>{{articulo.medidaUV}}</td>\r\n                  <td class=\"text-right\" *ngIf=\"!articuloNuevo\">{{articulo.uv}}</td>\r\n                  <td *ngIf=\"articuloNuevo\">\r\n                    <input appNaturalNumber #uv type=\"number\" class=\"form-control w-70 ph-1 text-right\"\r\n                      [(ngModel)]=\"articulo.uv\" [ngModelOptions]=\"{standalone: true}\"\r\n                      (focusout)=\"validaCantidad(uv, articulo)\" (keydown.Tab)=\"validaCantidad(uv, articulo)\"\r\n                      maxlength=\"6\"\r\n                      oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                  </td>\r\n                  <td class=\"text-right\" *ngIf=\"!articuloNuevo\">{{articulo.fraccion}}</td>\r\n                  <td *ngIf=\"articuloNuevo\">\r\n                    <input appNaturalNumber #fraccion type=\"number\" class=\"form-control w-70 ph-1 text-right\"\r\n                      [(ngModel)]=\"articulo.fraccion\" [ngModelOptions]=\"{standalone: true}\"\r\n                      (focusout)=\"validaCantidad(fraccion, articulo)\" (keydown.Tab)=\"validaCantidad(fraccion, articulo)\"\r\n                      maxlength=\"6\"\r\n                      oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                  </td>\r\n                  <td class=\"text-right\">{{articulo.valorUV | number:'':'es'}}</td>\r\n                  <td class=\"text-right\">{{articulo.totalSD | number:'':'es'}}</td>\r\n                  <td class=\"text-right\" *ngIf=\"!articuloNuevo\">\r\n                    {{articulo.porcentaje | number:'.2-2':'es'}}</td>\r\n                  <td *ngIf=\"articuloNuevo\">\r\n                    <input appDecimalNumber #porcentaje type=\"number\" step=\"0.01\"\r\n                      class=\"form-control w-50 ph-1 text-right\" [(ngModel)]=\"articulo.porcentaje\"\r\n                      [ngModelOptions]=\"{standalone: true}\" (focusout)=\"validaPorcentaje(porcentaje)\"\r\n                      (keydown.Tab)=\"validaPorcentaje(porcentaje, articulo)\" maxlength=\"4\"\r\n                      oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                  </td>\r\n                  <td class=\"text-right\">{{articulo.total | number:'':'es'}}</td>\r\n                </tr>\r\n                <tr *ngIf=\"articuloNuevo\">\r\n                  <td></td>\r\n                  <td class=\"align-top pl-0 w-80\">\r\n                    <input #articulo type=\"text\" [(ngModel)]=\"filterData\" [ngModelOptions]=\"{standalone: true}\"\r\n                      class=\"form-control w-80\" (input)=\"setArticulo(articulo)\"\r\n                      (keydown.Tab)=\"validaArticulo(articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\" />\r\n                    <ul *ngIf=\"verListaArticulo\" class=\"list-group filter-list\">\r\n                      <li *ngFor=\"let data of parametrosAutocomplete | filter:filterData\"\r\n                        (click)=\"seleccionaArticulo(data, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\">\r\n                        <a class=\"list-group-item\">{{data.art_scodformato}}-{{data.art_scodvariedad}}</a>\r\n                      </li>\r\n                    </ul>\r\n                  </td>\r\n                  <td class=\"align-top pl-0\">\r\n                    <input #descripcion type=\"text\" [(ngModel)]=\"filterDesc\" [ngModelOptions]=\"{standalone: true}\"\r\n                      class=\"form-control w-200 \" (input)=\"setDescripcion(descripcion)\"\r\n                      (keydown.Tab)=\"validaDescripcion(articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\" />\r\n                    <ul *ngIf=\"verListaDescripcion\" class=\"list-group filter-list\">\r\n                      <li *ngFor=\"let data of parametrosAutocomplete | filterDesc:filterDesc\"\r\n                        (click)=\"seleccionaArticulo(data, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\">\r\n                        <a class=\"list-group-item\">{{data.art_sdescripcion}}</a>\r\n                      </li>\r\n                    </ul>\r\n                  </td>\r\n                  <td class=\"align-top pl-0\">\r\n                    <input #medida type=\"text\" class=\"form-control w-100\" disabled>\r\n                  </td>\r\n                  <td class=\"align-top pl-0\">\r\n                    <input appNaturalNumber #uv type=\"number\" class=\"form-control w-70 ph-1 text-right\"\r\n                      (focusout)=\"validaCantidad(uv)\" (keydown.Tab)=\"validaCantidad(uv)\" maxlength=\"6\"\r\n                      oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                  </td>\r\n                  <td class=\"align-top pl-0\">\r\n                    <input appNaturalNumber #fraccion type=\"number\" class=\"form-control w-70 ph-1 text-right\"\r\n                      (focusout)=\"validaCantidad(fraccion)\" (keydown.Tab)=\"validaCantidad(fraccion)\" maxlength=\"6\"\r\n                      oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                  </td>\r\n                  <td class=\"align-top pl-0\">\r\n                    <input #valorUV type=\"number\" class=\"form-control w-80 text-right\" disabled>\r\n                  </td>\r\n                  <td class=\"align-top pl-0\">\r\n                    <input #totalSD type=\"number\" class=\"form-control w-90\" disabled>\r\n                  </td>\r\n                  <td class=\"align-top pl-0\">\r\n                    <input appDecimalNumber #porcentaje type=\"number\" step=\"0.01\"\r\n                      class=\"form-control w-50 ph-1 text-right\" (focusout)=\"validaPorcentaje(porcentaje)\"\r\n                      (keydown.Tab)=\"validaPorcentaje(porcentaje)\" maxlength=\"4\"\r\n                      oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                      (keyup.enter)=\"agregarArticuloPack(articulo, descripcion, medida, uv, fraccion, valorUV, totalSD, porcentaje, total)\">\r\n                  </td>\r\n                  <td class=\"align-top pl-0\">\r\n                    <input #total type=\"number\" class=\"form-control w-90 text-right\" disabled>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"col-sm-12 ph-0 mt-8\">\r\n              <div class=\"col-sm-2 col-sm-offset-2\">\r\n                <label class=\"col-sm-4 control-label pl-0 lh-11\">Total Neto</label>\r\n                <div class=\"col-sm-8 ph-0\">\r\n                  <label class=\"col-sm-5 form-control text-right pad-sup-2\">{{iTotalNeto | number:'':'es'}}</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <label class=\"col-sm-4 control-label\">I.V.A.</label>\r\n                <div class=\"col-sm-8 ph-0\">\r\n                  <label class=\"col-sm-5 form-control text-right pad-sup-2\">{{iIva | number:'':'es'}}</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2 pr-0\">\r\n                <label class=\"col-sm-4 control-label\">I.A.B.A.</label>\r\n                <div class=\"col-sm-8 ph-0\">\r\n                  <label class=\"col-sm-5 form-control text-right pad-sup-2\">{{iIaba | number:'':'es'}}</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <label class=\"col-sm-4 control-label\">Total</label>\r\n                <div class=\"col-sm-8 ph-0\">\r\n                  <label class=\"col-sm-5 form-control text-right pad-sup-2\">{{iTotal | number:'':'es'}}</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2 pr-0\">\r\n                <label class=\"col-sm-4 control-label pl-0\">Volumen</label>\r\n                <div class=\"col-sm-8 ph-0\">\r\n                  <label class=\"col-sm-5 form-control text-right pad-sup-2\">{{iVolumen | number:'.2-2':'es'}}</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br>\r\n        </div>\r\n      </div>\r\n      <!-- fin tabla de articulos tipo operacion editar -->\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/documentos/notasCredito/notasCredito.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/routes/documentos/notasCredito/notasCredito.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/documentos/notasCredito/notasCredito.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/routes/documentos/notasCredito/notasCredito.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListadoPedidoArticulos, CargaDetallePedido, CargaPedido, PreciosBaseVenta, NotasCreditoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoPedidoArticulos", function() { return ListadoPedidoArticulos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaDetallePedido", function() { return CargaDetallePedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaPedido", function() { return CargaPedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreciosBaseVenta", function() { return PreciosBaseVenta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasCreditoComponent", function() { return NotasCreditoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/pedidos.service */ "./src/app/core/consultaService/pedidos.service.ts");
/* harmony import */ var _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/consultaService/articulo.service */ "./src/app/core/consultaService/articulo.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _commonPopUp_rutAsociadoPopUp_rutAsociadoPopUp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../commonPopUp/rutAsociadoPopUp/rutAsociadoPopUp.component */ "./src/app/routes/commonPopUp/rutAsociadoPopUp/rutAsociadoPopUp.component.ts");
/* harmony import */ var _commonPopUp_listaLocalesPopUp_listaLocalesPopUp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../commonPopUp/listaLocalesPopUp/listaLocalesPopUp.component */ "./src/app/routes/commonPopUp/listaLocalesPopUp/listaLocalesPopUp.component.ts");
/* harmony import */ var _commonPopUp_relaComerPedidoPopUp_relaComerPedidoPopUp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../commonPopUp/relaComerPedidoPopUp/relaComerPedidoPopUp.component */ "./src/app/routes/commonPopUp/relaComerPedidoPopUp/relaComerPedidoPopUp.component.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../commonPopUp/sucursalesPopUp/sucursalesPopUp.component */ "./src/app/routes/commonPopUp/sucursalesPopUp/sucursalesPopUp.component.ts");
/* harmony import */ var _commonPopUp_rutasPopUp_rutasPopUp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../commonPopUp/rutasPopUp/rutasPopUp.component */ "./src/app/routes/commonPopUp/rutasPopUp/rutasPopUp.component.ts");
/* harmony import */ var _commonPopUp_motivosPopUp_motivosPopUp_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../commonPopUp/motivosPopUp/motivosPopUp.component */ "./src/app/routes/commonPopUp/motivosPopUp/motivosPopUp.component.ts");
/* harmony import */ var _commonPopUp_facturasPopUp_facturasPopUp_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../commonPopUp/facturasPopUp/facturasPopUp.component */ "./src/app/routes/commonPopUp/facturasPopUp/facturasPopUp.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../commonPopUp/utilGeoPopUp/utilGeoPopUp.component */ "./src/app/routes/commonPopUp/utilGeoPopUp/utilGeoPopUp.component.ts");
/* harmony import */ var _core_consultaService_documentos_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../../../core/consultaService/documentos.service */ "./src/app/core/consultaService/documentos.service.ts");
/* harmony import */ var _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./../../../core/consultaService/clientes.service */ "./src/app/core/consultaService/clientes.service.ts");
/* harmony import */ var _commonPopUp_notaCreditoDireccionesPopUp_notaCreditoDireccionesPopUp_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./../../commonPopUp/notaCreditoDireccionesPopUp/notaCreditoDireccionesPopUp.component */ "./src/app/routes/commonPopUp/notaCreditoDireccionesPopUp/notaCreditoDireccionesPopUp.component.ts");
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
var NotasCreditoComponent = /** @class */ (function () {
    // fin cambios jl
    function NotasCreditoComponent(modalService, authService, loader, utilService, pedidosService, setearDatos, consultasCliente, sucursalService, route, router, documentosService, articuloService) {
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
        this.documentosService = documentosService;
        this.articuloService = articuloService;
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
        this.requestMotivos = {};
        this.localBtns = false;
        this.relacionBtns = false;
        this.direccionBtns = false;
        this.requestDirEntrega = {};
        this.articulosPedidos = [];
        this.filterData = '';
        this.filterDesc = '';
        this.cargaArticuloPedido = {};
        this.arts = [];
        this.dataArticulo = [];
        this.motivos = [];
        this.direccionCliente = [];
        this.facturas = [];
        // inicio cambios jl
        this.articuloNuevo = true;
        this.packArticulo = [];
        this.hidUnidadesVta = 0;
        this.articuloSeleccionado = {};
        this.requestAutocomplete = {};
        this.existeArticuloPack = false;
        this.habilitarFuncionalidades = false;
        this.request = {};
        this.requestFacturas = {};
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
            sObservacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            codMotivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            desMotivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            factura: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
        });
    }
    NotasCreditoComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('this.fechaActual.getDate()', this.fechaActual.getDate());
        console.log('this.fechaActual.getDate()');
        this.forma.controls.fhoEntrega.setValue(this.NextDay(this.fechaActual));
        this.documentosService.showMotivos().subscribe(function (res) {
            _this.motivos = res['general'];
        });
        // inicio cambios jl
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_18__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_19___default.a);
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
            //console.log('selectedPedido => : ', this.pedidosService.selectedPedido);
            this.deshabilitaControlesFormulario(this.forma);
            this.habilitarControlesEditar();
            this.listarPedidoArticulos();
        }
    };
    NotasCreditoComponent.prototype.NextDay = function (date) {
        var anio = this.fechaActual.getFullYear();
        var mes = this.fechaActual.getMonth() + 1;
        var dia = this.fechaActual.getDate() + 1;
        var diaStr = dia < 10 ? "0" + dia : dia;
        var mesStr = mes < 10 ? "0" + mes : mes;
        var fechaString = anio + "-" + mesStr + "-" + diaStr;
        return fechaString;
    };
    NotasCreditoComponent.prototype.habilitarControlesEditar = function () {
        this.forma.controls.codSucursal.enable();
        this.forma.controls.sCodRuta.enable();
        this.forma.controls.idDireccionEntrega.enable();
        this.forma.controls.fhoEntrega.enable();
        this.forma.controls.sObservacion.enable();
        this.forma.controls.nRutCliente.disable();
    };
    NotasCreditoComponent.prototype.ngOnDestroy = function () {
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
            idPedido: 0,
        };
    };
    NotasCreditoComponent.prototype.openModalCliente = function () {
        this.forma.controls.fhoPedido.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.forma.controls.fhoEntrega.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.origen = 'clientePedido';
        var initialState = {
            titulo: 'Cliente',
            origen: 'clientePedido',
            nRutOperador: this.requestdos.rutClientes
        };
        this.clienteModal = this.modalService.show(_commonPopUp_rutAsociadoPopUp_rutAsociadoPopUp_component__WEBPACK_IMPORTED_MODULE_10__["RutAsociadoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    NotasCreditoComponent.prototype.validaCliente = function () {
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
    NotasCreditoComponent.prototype.openModalLocales = function () {
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
    NotasCreditoComponent.prototype.validaLocal = function () {
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
    NotasCreditoComponent.prototype.openModalRelaciones = function () {
        this.origen = 'relacionesPedidos';
        var initialState = {
            parametro: this.user.nrutoperador,
            parametrodos: this.forma.controls.nRutCliente.value.substr(0, this.forma.controls.nRutCliente.value.length - 1),
            parametrotres: this.forma.controls.numLocal.value,
            origen: 'relacionesPedidos'
        };
        this.relacionesPedidosModal = this.modalService.show(_commonPopUp_relaComerPedidoPopUp_relaComerPedidoPopUp_component__WEBPACK_IMPORTED_MODULE_12__["RelaComerPedidoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    NotasCreditoComponent.prototype.validaRelacion = function () {
        var _this = this;
        this.loader.show();
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
                            _this.forma.controls.fhoEntrega.setValue(_this.utilService.dateToStringFormat(_this.fechaActual));
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
                            swal('Atención', 'No Existe esta Relación', 'warning');
                        }
                    }
                } // aqui ifdata
            }, function (error) {
                _this.loader.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    NotasCreditoComponent.prototype.habilitarSeleccionControles = function () {
        this.habilitarFuncionalidades = true;
        this.forma.controls.codSucursal.enable();
        this.forma.controls.sCodRuta.enable();
        this.forma.controls.idDireccionEntrega.enable();
        this.forma.controls.fhoEntrega.enable();
        this.forma.controls.sObservacion.enable();
    };
    NotasCreditoComponent.prototype.openModalSucursales = function () {
        this.origen = 'sucursales';
        var initialState = {
            parametro: Number(this.user.nrutoperador),
            origen: 'sucursales'
        };
        this.sucursalesPeidosModal = this.modalService.show(_commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_14__["SucursalesPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    NotasCreditoComponent.prototype.validaSucursales = function () {
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
    NotasCreditoComponent.prototype.resetOnRutBlur = function () {
        this.forma.controls.numLocal.reset();
        this.forma.controls.descLocal.reset();
        this.forma.controls.sCodRelacionComer.reset();
        this.forma.controls.descRelaComercial.reset();
        this.forma.controls.codSucursal.reset();
        this.forma.controls.descSucursal.reset();
        this.forma.controls.sCodRuta.reset();
        this.forma.controls.descRuta.reset();
        this.forma.controls.sCodTerritorio.reset();
        this.forma.controls.descTerritorio.reset();
        this.forma.controls.direccionPedido.reset();
        this.forma.controls.idDireccionEntrega.reset();
        this.forma.controls.descDirEntrega.reset();
        this.forma.controls.formPago.reset();
        this.forma.controls.cupos.reset();
        this.forma.controls.fhoPedido.reset();
        this.forma.controls.fhoEntrega.reset();
        this.forma.controls.sObservacion.reset();
        this.forma.controls.codMotivo.reset();
        this.forma.controls.desMotivo.reset();
        this.forma.controls.factura.reset();
    };
    NotasCreditoComponent.prototype.openModalRutas = function () {
        if (!this.forma.controls.fhoEntrega.value) {
            swal('Atención', 'Introduzca una fecha valida de entrega', 'error');
        }
        else {
            this.origen = 'rutaPedido';
            var initialState = {
                parametro: this.forma.controls.codSucursal.value,
                parametroDos: this.forma.controls.fhoEntrega.value,
                origen: 'rutaPedido'
            };
            this.rutasPedidosModal = this.modalService.show(_commonPopUp_rutasPopUp_rutasPopUp_component__WEBPACK_IMPORTED_MODULE_15__["RutasPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        }
    };
    NotasCreditoComponent.prototype.validaRutas = function () {
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
                        console.log(_this.datos.length);
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
    NotasCreditoComponent.prototype.openModalDirecciones = function () {
        this.origen = 'rutaPedido';
        var initialState = {
            parametro: this.forma.controls.codSucursal.value,
            parametroDos: this.forma.controls.fhoEntrega.value,
            origen: 'rutaPedido'
        };
        this.rutasPedidosModal = this.modalService.show(_commonPopUp_rutasPopUp_rutasPopUp_component__WEBPACK_IMPORTED_MODULE_15__["RutasPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    NotasCreditoComponent.prototype.buscar = function () { };
    NotasCreditoComponent.prototype.generateExcel = function () { };
    NotasCreditoComponent.prototype.setData = function (resData) {
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
                    // this.validaRutas();
                    break;
                }
                case 'motivos': {
                    this.forma.controls.desMotivo.setValue(resData.par_deslargo01);
                    this.forma.controls.codMotivo.setValue(resData.par_codparametro01);
                    this.forma.controls.codMotivo.enable();
                    break;
                }
                case 'facturas': {
                    this.forma.controls.factura.setValue(resData.fac_nidfactura);
                    this.forma.controls.factura.enable();
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    NotasCreditoComponent.prototype.setDataArticuloGrilla = function (data, articulo, descripcion, medida, unidadVenta, fraccion, valorUV, descuento) {
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
    NotasCreditoComponent.prototype.setArticulo = function (articulo) {
        if (articulo.value === '') {
            this.verListaArticulo = false;
        }
        else {
            this.verListaArticulo = true;
        }
    };
    NotasCreditoComponent.prototype.validaArticulo = function (articulo, descripcion, medida, unidadVenta, fraccion, valorUV, descuento) {
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
    NotasCreditoComponent.prototype.agregarArticulo = function (articulo, descripcion, medida, unidadVenta, fraccion, valorUV, descuento) {
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
    NotasCreditoComponent.prototype.setDescripcion = function (descripcion) {
        if (descripcion.value === '') {
            this.verListaDescripcion = false;
        }
        else {
            this.verListaDescripcion = true;
        }
    };
    NotasCreditoComponent.prototype.validaDescripcion = function (articulo, descripcion) {
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
    NotasCreditoComponent.prototype.seleccionaDescripcion = function (data, articulo, descripcion) {
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
    NotasCreditoComponent.prototype.seleccionaArticulo = function (data, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje) {
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
    NotasCreditoComponent.prototype.validaExisteProducto = function (str) {
        //console.log('str', str);
        for (var i in this.packArticulo) {
            if (str === this.packArticulo[i].articulo) {
                //console.log('existe');
                return true;
            }
        }
        return false;
    };
    NotasCreditoComponent.prototype.validaCantidad = function (valor, articulo) {
        if (valor.value === '') {
            valor.value = 0;
        }
        if (articulo !== undefined) {
            this.recalcularMontos(articulo);
            this.calcularTotales();
        }
    };
    NotasCreditoComponent.prototype.recalcularMontos = function (articulo) {
        //console.log('recalcular', articulo);
        var iTotalUniVta = (articulo.uv * articulo.valorUV);
        var dPrecioFraccion = (articulo.valorUV / articulo.hidUnidadesVta);
        var iTotalFraccion = articulo.fraccion * Math.round(dPrecioFraccion);
        articulo.totalSD = iTotalUniVta + iTotalFraccion;
        articulo.total = Math.round(articulo.totalSD - ((articulo.totalSD * (parseFloat(articulo.porcentaje)) / 100)));
    };
    NotasCreditoComponent.prototype.calcularTotales = function () {
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
    NotasCreditoComponent.prototype.validaPorcentaje = function (porcentaje, articulo) {
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
    NotasCreditoComponent.prototype.agregarArticuloPack = function (articulo, descripcion, medida, uv, fraccion, valorUV, totalSD, porcentaje, total) {
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
    NotasCreditoComponent.prototype.editarArticuloPack = function (articulo, descripcion, medida, uv, fraccion, valorUV, totalSD, porcentaje, total) {
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
    NotasCreditoComponent.prototype.cargaInfoArticuloAutoComplete = function (codFormato, codVariedad, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje) {
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
    NotasCreditoComponent.prototype.editarInfoArticuloAutoComplete = function (codFormato, codVariedad) {
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
    NotasCreditoComponent.prototype.eliminarArticuloPack = function () {
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
    NotasCreditoComponent.prototype.validaCheckPack = function (articulo) {
        articulo.bCheck = !articulo.bCheck;
        if (articulo.bCheck) {
            console.log('checkeado');
            this.actionBtns = true;
        }
        else {
            this.actionBtns = false;
            console.log('NO checkeado');
        }
        this.listarPedidoArticulos();
    };
    NotasCreditoComponent.prototype.validarInformacionObligatoria = function () {
        var _this = this;
        var _validarInformacionObligatoria = true;
        var _ingresoArticulo = false;
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
        return _validarInformacionObligatoria;
    };
    NotasCreditoComponent.prototype.errorSeleccionArticulo = function (_validarInformacionObligatoria) {
        _validarInformacionObligatoria = false;
        swal('Atención', 'Debe ingresar articulo', 'error');
        return _validarInformacionObligatoria;
    };
    NotasCreditoComponent.prototype.validarInformacionObligatoria2 = function () {
        var _validarInformacionObligatoria = true;
        var _ingresoArticulo = false;
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
        return _validarInformacionObligatoria;
    };
    NotasCreditoComponent.prototype.ejecutarServicio = function (objetoCreacion) {
        var _this = this;
        if (this.validarInformacionObligatoria2()) {
            this.loader.show();
            this.request = new Object();
            this.request.nidfactura = Number(this.forma.controls.factura.value);
            this.request.nrutcliente = this.forma.controls.nRutCliente.value.substr(0, this.forma.controls.nRutCliente.value.length - 1);
            this.request.nrutoperador = Number(this.user.nrutoperador);
            this.request.scodrelcomercial = this.forma.controls.sCodRelacionComer.value;
            console.log("TCL: ejecutarServicio -> this.request", this.request);
            this.documentosService.crearNotaCredito(this.request)
                .subscribe(function (art) {
                _this.loader.hide();
                console.log(art);
                if (art) {
                    if (art.error.codError !== 0) {
                        swal('Atención', "Ha ocurrido un error inesperado : " + art.error.msjError, 'error');
                    }
                    else {
                        _this.arts = art.articulo;
                        console.log(_this.arts);
                    }
                }
            }, function (error) {
                _this.loader.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', error);
            });
        }
    };
    NotasCreditoComponent.prototype.openModalDireBanco = function (data) {
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
    NotasCreditoComponent.prototype.validarDireccionEntrega = function () {
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
    NotasCreditoComponent.prototype.deshabilitaControlesFormulario = function (formulario) {
        Object.keys(formulario.controls).forEach(function (control) {
            var typedControl = formulario.controls[control];
            typedControl.disable();
        });
    };
    NotasCreditoComponent.prototype.listarPedidoArticulos = function () {
        var _this = this;
        this.articuloSeleccionado = [];
        this.packArticulo = [];
        this.loader.show();
        var _bodyParams = {
            idPedido: this.pedidosService.selectedPedido.idPedido,
            nRutOperador: this.user.nrutoperador,
        };
        this.pedidosService.listarPedidosArticulos(_bodyParams)
            .subscribe(function (pedidosArticulos) {
            _this.loader.hide();
            if (pedidosArticulos) {
                if (pedidosArticulos.error.codError !== 0) {
                    swal('Atención', "Ha ocurrido un error inesperado! " + JSON.stringify(pedidosArticulos.error), 'error');
                }
                else {
                    console.log('pedidosArticulos => : ', pedidosArticulos);
                    console.log('pedidosArticulos.cargaPedido => : ', pedidosArticulos.cargaPedido);
                    if (pedidosArticulos.cargaPedido.length > 0) {
                        _this.cargarInformacionPedido(pedidosArticulos.cargaPedido[0]);
                    }
                    if (pedidosArticulos.cargaDetallePedido.length > 0) {
                        pedidosArticulos.cargaDetallePedido.forEach(function (articulo) {
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
                                console.log("TCL: listarPedidoArticulos -> data", data);
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
    NotasCreditoComponent.prototype.cargarInformacionPedido = function (informacionPedido) {
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
    NotasCreditoComponent.prototype.listarProtestos = function () {
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
    NotasCreditoComponent.prototype.openModalMotivos = function () {
        this.origen = 'motivos';
        var initialState = {
            motivos: this.motivos,
            origen: 'motivos'
        };
        this.clienteModal = this.modalService.show(_commonPopUp_motivosPopUp_motivosPopUp_component__WEBPACK_IMPORTED_MODULE_16__["MotivosPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    NotasCreditoComponent.prototype.llenaDescLocal = function () {
        var _this = this;
        if (this.forma.controls.codMotivo.value === '') {
            this.forma.controls.desMotivo.setValue('');
            this.forma.controls.desMotivo.disable();
        }
        else if (this.forma.controls.codMotivo.value.length < 4) {
            swal("Atención", "Código Inválido", "error");
        }
        else {
            this.requestMotivos.parcodparametro01 = this.forma.controls.codMotivo.value;
            this.requestMotivos.parnumparametro = 41;
            this.documentosService.llenaDescLocal(this.requestMotivos).subscribe(function (res) {
                _this.motivos2 = res['general'][0];
                _this.forma.controls.desMotivo.setValue(_this.motivos2.par_deslargo01);
            });
        }
    };
    NotasCreditoComponent.prototype.buscaFacturasNcredito = function () {
        var _this = this;
        this.requestFacturas.nnumfactura = 0;
        this.requestFacturas.nnumlocal = this.forma.controls.numLocal.value;
        this.requestFacturas.nrutoperador = Number(this.user.nrutoperador);
        this.requestFacturas.nrutcliente = this.forma.controls.nRutCliente.value.substr(0, this.forma.controls.nRutCliente.value.length - 1);
        this.requestFacturas.scodrelcomercial = this.forma.controls.sCodRelacionComer.value;
        this.documentosService.buscaFacturasNcredito(this.requestFacturas).subscribe(function (res) {
            _this.origen = 'facturas';
            var initialState = {
                facturas: res['documentos']
            };
            _this.facturasModal = _this.modalService.show(_commonPopUp_facturasPopUp_facturasPopUp_component__WEBPACK_IMPORTED_MODULE_17__["FacturasPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        });
    };
    NotasCreditoComponent.prototype.buscaDireccionesCliente = function () {
        var _this = this;
        this.requestDirEntrega.nRutCliente = Number(this.forma.controls.nRutCliente.value.substr(0, this.forma.controls.nRutCliente.value.length - 1));
        this.requestDirEntrega.nRutOperador = Number(this.user.nrutoperador);
        this.loader.show();
        this.consultasCliente.buscaDireccionesCliente(this.requestDirEntrega).subscribe(function (res) {
            // this.direccionCliente = res['direccionCliente'];
            _this.loader.hide();
            _this.origen = 'direEntregas';
            var initialState = {
                titulo: "Facturas",
                direccionesClientes: res['direccionCliente']
            };
            _this.direccionesCliente = _this.modalService.show(_commonPopUp_notaCreditoDireccionesPopUp_notaCreditoDireccionesPopUp_component__WEBPACK_IMPORTED_MODULE_23__["NotaCreditoDireccionesPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        });
    };
    //esto ya no hace falta
    NotasCreditoComponent.prototype.buscaArticulosFactura = function () {
        this.loader.show();
        var req = {
            nidfactura: this.forma.controls.factura.value,
            nrutcliente: this.forma.controls.nRutCliente.value,
            nrutoperador: Number(this.user.nrutoperador),
            scodrelcomercial: this.forma.controls.sCodRelacionComer.value
        };
        this.articuloService.buscaArticulosFactura(req).subscribe(function (res) {
            console.log("TCL: buscaArticulosFactura -> res", res);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btnSucursal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NotasCreditoComponent.prototype, "btnSucursal", void 0);
    NotasCreditoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notas-credito',
            template: __webpack_require__(/*! ./notasCredito.component.html */ "./src/app/routes/documentos/notasCredito/notasCredito.component.html"),
            styles: [__webpack_require__(/*! ./notasCredito.component.scss */ "./src/app/routes/documentos/notasCredito/notasCredito.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_7__["PedidosService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_9__["ConsultasService"],
            _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_22__["ClientesService"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_13__["AdministracionOperativaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_consultaService_documentos_service__WEBPACK_IMPORTED_MODULE_21__["DocumentosService"],
            _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_8__["ArticuloService"]])
    ], NotasCreditoComponent);
    return NotasCreditoComponent;
}());



/***/ }),

/***/ "./src/app/routes/documentos/solicitudFolios/solicitudFolios.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/documentos/solicitudFolios/solicitudFolios.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <h4>Solicitud de Folios</h4>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\" novalidate>\r\n      <div class=\"row doc-row\">\r\n        <div class=\"col-sm-6\">\r\n          <!-- Fecha desde-->\r\n          <label class=\"col-sm-1 control-label lh-11 documento-label\">Fecha desde</label>\r\n          <div class=\"col-sm-4\">\r\n            <input type=\"date\" formControlName=\"fechaDesde\" name=\"fechaDesde\" id=\"fechaDesde\" type=\"date\"\r\n              class=\"form-control\" />\r\n          </div>\r\n          <!-- <span #dp=\"bsDatepicker\" bsDatepicker class=\"fa fa-search facturas col-sm-1 \" [(bsValue)]=\"fechaDesde\"></span> -->\r\n\r\n          <!-- Fecha hasta-->\r\n          <label class=\"col-sm-1 control-label lh-11 documento-label\">Fecha hasta</label>\r\n          <div class=\"col-sm-4\">\r\n            <input type=\"date\" formControlName=\"fechaHasta\" name=\"fechaHasta\" id=\"fechaHasta\" type=\"date\"\r\n              class=\"form-control\" />\r\n          </div>\r\n          <!-- <em #dp=\"bsDatepicker\" bsDatepicker class=\"fa fa-search facturas col-sm-1 \" [(bsValue)]=\"fechaHasta\"></em> -->\r\n        </div>\r\n        <div class=\"col-sm-6 text-right\">\r\n          <button class=\"btn btn-oval btn-sm ml-2 \" (click)=\"creaSolicitudFolio()\" type=\"button\">\r\n            Nuevo\r\n          </button>\r\n          <button class=\"btn btn-oval btn-sm ml-2 \" (click)=\"buscaFolios()\" type=\"button\">\r\n            Buscar\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <!-- SEGUNDA COLUMNA -->\r\n      <div class=\"row doc-row mt-2\">\r\n        <div class=\"col-sm-6\">\r\n          <!-- Cantidad desde-->\r\n          <label class=\"col-sm-1 control-label lh-11 documento-label\">Cantidad desde</label>\r\n          <div class=\"col-sm-4\">\r\n            <input type=\"date\" formControlName=\"cantidadDesde\" name=\"cantidadDesde\" id=\"cantidadDesde\" type=\"number\"\r\n              class=\"form-control\" />\r\n          </div>\r\n          <!-- <span #dp=\"bsDatepicker\" bsDatepicker class=\"fa fa-search facturas col-sm-1 \"\r\n            [(bsValue)]=\"cantidadDesde\"></span> -->\r\n\r\n          <!-- Cantidad hasta-->\r\n          <label class=\"col-sm-1 control-label lh-11 documento-label\">Cantidad hasta</label>\r\n          <div class=\"col-sm-4\">\r\n            <input type=\"date\" formControlName=\"cantidadHasta\" name=\"cantidadHasta\" id=\"cantidadHasta\" type=\"number\"\r\n              class=\"form-control\" />\r\n          </div>\r\n          <!-- <em #dp=\"bsDatepicker\" bsDatepicker class=\"fa fa-search facturas col-sm-1 \" [(bsValue)]=\"cantidadHasta\"></em> -->\r\n        </div>\r\n\r\n        <div class=\"col-sm-6\">\r\n          <!-- tipo documento -->\r\n          <label class=\"col-sm-1 control-label lh-11 documento-label\">Tipo</label>\r\n          <div class=\"col-sm-4\">\r\n            <select class=\"form-control pv-0\" formControlName=\"tipoFactura\" name=\"tipoFactura\">\r\n              <option value=\"\" selected>Todos</option>\r\n              <option *ngFor=\"let tipofactura of tiposfacturas\" [value]=\"tipofactura.par_codparametro01\">\r\n                {{tipofactura.par_deslargo01}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n    <!--LAST ROW - TABLE-->\r\n    <div class=\"row doc-row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover\">\r\n            <thead>\r\n              <tr>\r\n                <th>Tipo Documento</th>\r\n                <th>Cantidad</th>\r\n                <th>Folio Desde</th>\r\n                <th>Folio Hasta</th>\r\n                <th>Fecha</th>\r\n                <th>Usuario</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\" let folio of foliosDC08  | paginate: { itemsPerPage: 7, currentPage: pageActual } \">\r\n                <td class=\"text-center\">{{ folio.destipodocumento }}</td>\r\n                <td class=\"text-center\">{{ folio.sfn_ncantidad }}</td>\r\n                <td class=\"text-center\">{{ folio.sfn_nfoliodesde }}</td>\r\n                <td class=\"text-center\">{{ folio.sfn_nfoliohasta }}</td>\r\n                <td class=\"text-center\"> {{ this.utilService.dateStringToDateStringBarFormat(folio.sfn_dfhocreacion)}}  </td>\r\n                <td class=\"text-center\">{{ folio.nombreusuariocrea }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <br />\r\n          <div class=\"text-right\">\r\n            <pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\">\r\n            </pagination-controls>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/documentos/solicitudFolios/solicitudFolios.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/documentos/solicitudFolios/solicitudFolios.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/documentos/solicitudFolios/solicitudFolios.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/routes/documentos/solicitudFolios/solicitudFolios.component.ts ***!
  \********************************************************************************/
/*! exports provided: SolicitudFoliosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudFoliosComponent", function() { return SolicitudFoliosComponent; });
/* harmony import */ var _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../core/consultaService/clientes.service */ "./src/app/core/consultaService/clientes.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_documentos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/consultaService/documentos.service */ "./src/app/core/consultaService/documentos.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _commonPopUp_creaSolicitudFolioPopUp_creaSolicitudFolioPopUp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../commonPopUp/creaSolicitudFolioPopUp/creaSolicitudFolioPopUp.component */ "./src/app/routes/commonPopUp/creaSolicitudFolioPopUp/creaSolicitudFolioPopUp.component.ts");
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
var SolicitudFoliosComponent = /** @class */ (function () {
    function SolicitudFoliosComponent(modalService, loader, utilService, documentosService, authService, clientesService) {
        this.modalService = modalService;
        this.loader = loader;
        this.utilService = utilService;
        this.documentosService = documentosService;
        this.authService = authService;
        this.clientesService = clientesService;
        this.requestDos = {};
        this.request = {};
        this.fechaActual = new Date();
        this.user = {};
        this.foliosDC08 = [];
        this.tiposfacturas = [];
        this.pageActual = 1;
        this.date = new Date();
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fechaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.fechaActual.getFullYear() + this.fechaActual.getMonth() + this.fechaActual.getDate()),
            fechaHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            cantidadHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            cantidadDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            tipoFactura: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    SolicitudFoliosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.forma.controls.fechaDesde.setValue(this.firstDayLastMonth(this.fechaActual));
        this.forma.controls.fechaHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.request.parcodparametro01 = "";
        this.request.parcodparametro02 = "";
        this.request.parcodparametro03 = "";
        this.request.parcodparametro04 = "";
        this.request.parcodparametro05 = "";
        this.request.parnumparametro = 21;
        this.documentosService.buscaParametros(this.request).subscribe(function (res) {
            _this.tiposfacturas = res['general'];
            console.log("TCL: ConsultaFolioComponent -> ngOnInit ->  this.tiposfacturas ", _this.tiposfacturas);
        });
    };
    SolicitudFoliosComponent.prototype.firstDayLastMonth = function (date) {
        var anio = date.getFullYear();
        var mes = date.getMonth();
        var dia = 1;
        var diaStr = dia < 10 ? "0" + dia : dia;
        var mesStr = mes < 10 ? "0" + mes : mes;
        var fechaString = anio + "-" + mesStr + "-" + diaStr;
        return fechaString;
    };
    SolicitudFoliosComponent.prototype.creaSolicitudFolio = function () {
        var initialState = {
            th1: "Número",
            th2: "Nombres",
            modalFor: "Locales",
            foliosDC08: this.foliosDC08
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_creaSolicitudFolioPopUp_creaSolicitudFolioPopUp_component__WEBPACK_IMPORTED_MODULE_8__["CreaSolicitudFolioPopUpComponent"], {
            initialState: initialState,
            backdrop: "static",
            keyboard: false
        });
    };
    SolicitudFoliosComponent.prototype.buscaFolios = function () {
        var _this = this;
        this.requestDos.nnumcantidaddesde = Number(this.forma.controls.cantidadDesde.value);
        this.requestDos.nnumcantidadhasta = Number(this.forma.controls.cantidadHasta.value);
        this.requestDos.nrutoperador = Number(this.user.nrutoperador);
        this.requestDos.scodtipodocumento = this.forma.controls.tipoFactura.value;
        this.requestDos.sfechadesde = this.forma.controls.fechaDesde.value.split("-").join("") + "00000000";
        this.requestDos.sfechahasta = this.forma.controls.fechaHasta.value.split("-").join("") + "00000000";
        this.loader.show();
        this.documentosService.solicitudesFolios(this.requestDos).subscribe(function (data) {
            _this.loader.hide();
            if (!data) {
                swal('Atención', 'No se encontraton resultados!', 'error');
            }
            else {
                _this.foliosDC08 = data['documentos'];
            }
        });
    };
    SolicitudFoliosComponent.prototype.closeModal = function () {
        this.bsModalRef.hide();
    };
    SolicitudFoliosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-solicitudFolios-folio',
            template: __webpack_require__(/*! ./solicitudFolios.component.html */ "./src/app/routes/documentos/solicitudFolios/solicitudFolios.component.html"),
            styles: [__webpack_require__(/*! ./solicitudFolios.component.scss */ "./src/app/routes/documentos/solicitudFolios/solicitudFolios.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _core_consultaService_documentos_service__WEBPACK_IMPORTED_MODULE_6__["DocumentosService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _core_consultaService_clientes_service__WEBPACK_IMPORTED_MODULE_0__["ClientesService"]])
    ], SolicitudFoliosComponent);
    return SolicitudFoliosComponent;
}());



/***/ })

}]);
//# sourceMappingURL=documentos-documentos-module.js.map