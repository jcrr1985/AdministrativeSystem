(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracionOperativa-administracionOperativa-module"],{

/***/ "./src/app/routes/administracionOperativa/administracionOperativa.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/administracionOperativa.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AdministracionOperativaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministracionOperativaModule", function() { return AdministracionOperativaModule; });
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
/* harmony import */ var _transportistas_transportistas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transportistas/transportistas.component */ "./src/app/routes/administracionOperativa/transportistas/transportistas.component.ts");
/* harmony import */ var _transportistas_detalleTransportista_detalleTransportista_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./transportistas/detalleTransportista/detalleTransportista.component */ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/detalleTransportista.component.ts");
/* harmony import */ var _transportistas_detalleTransportista_navTransportista_navTransportista_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transportistas/detalleTransportista/navTransportista/navTransportista.component */ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navTransportista.component.ts");
/* harmony import */ var _rutas_rutas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rutas/rutas.component */ "./src/app/routes/administracionOperativa/rutas/rutas.component.ts");
/* harmony import */ var _rutas_detalleRutas_detalleRutas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rutas/detalleRutas/detalleRutas.component */ "./src/app/routes/administracionOperativa/rutas/detalleRutas/detalleRutas.component.ts");
/* harmony import */ var _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./usuarios/usuarios.component */ "./src/app/routes/administracionOperativa/usuarios/usuarios.component.ts");
/* harmony import */ var _usuarios_detalleUsuarios_detalleUsuarios_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./usuarios/detalleUsuarios/detalleUsuarios.component */ "./src/app/routes/administracionOperativa/usuarios/detalleUsuarios/detalleUsuarios.component.ts");
/* harmony import */ var _usuarios_detalleUsuarios_navUsuarios_navUsuarios_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./usuarios/detalleUsuarios/navUsuarios/navUsuarios.component */ "./src/app/routes/administracionOperativa/usuarios/detalleUsuarios/navUsuarios/navUsuarios.component.ts");
/* harmony import */ var _bodega_bodega_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bodega/bodega.component */ "./src/app/routes/administracionOperativa/bodega/bodega.component.ts");
/* harmony import */ var _sucursal_sucursal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sucursal/sucursal.component */ "./src/app/routes/administracionOperativa/sucursal/sucursal.component.ts");
/* harmony import */ var _bodega_detalleBodega_detalleBodega_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bodega/detalleBodega/detalleBodega.component */ "./src/app/routes/administracionOperativa/bodega/detalleBodega/detalleBodega.component.ts");
/* harmony import */ var _sucursal_detalleSucursal_detalleSucursal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sucursal/detalleSucursal/detalleSucursal.component */ "./src/app/routes/administracionOperativa/sucursal/detalleSucursal/detalleSucursal.component.ts");
/* harmony import */ var _recorrido_recorrido_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./recorrido/recorrido.component */ "./src/app/routes/administracionOperativa/recorrido/recorrido.component.ts");
/* harmony import */ var _recorrido_detalleRecorrido_detalleRecorrido_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./recorrido/detalleRecorrido/detalleRecorrido.component */ "./src/app/routes/administracionOperativa/recorrido/detalleRecorrido/detalleRecorrido.component.ts");
/* harmony import */ var _commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../commonPopUp/utilGeoPopUp/utilGeoPopUp.component */ "./src/app/routes/commonPopUp/utilGeoPopUp/utilGeoPopUp.component.ts");
/* harmony import */ var _transportistas_detalleTransportista_navTransportista_navVehiculo_navVehiculo_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./transportistas/detalleTransportista/navTransportista/navVehiculo/navVehiculo.component */ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navVehiculo/navVehiculo.component.ts");
/* harmony import */ var _transportistas_detalleTransportista_navTransportista_navConductores_navConductores_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./transportistas/detalleTransportista/navTransportista/navConductores/navConductores.component */ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navConductores/navConductores.component.ts");
/* harmony import */ var _commonPopUp_conductororesPopUp_conductororesPopUp_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../commonPopUp/conductororesPopUp/conductororesPopUp.component */ "./src/app/routes/commonPopUp/conductororesPopUp/conductororesPopUp.component.ts");
/* harmony import */ var _commonPopUp_vehiculosPopUp_vehiculosPopUp_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../commonPopUp/vehiculosPopUp/vehiculosPopUp.component */ "./src/app/routes/commonPopUp/vehiculosPopUp/vehiculosPopUp.component.ts");
/* harmony import */ var _commonPopUp_choferPopUp_choferPopUp_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../commonPopUp/choferPopUp/choferPopUp.component */ "./src/app/routes/commonPopUp/choferPopUp/choferPopUp.component.ts");
/* harmony import */ var _commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../commonPopUp/sucursalesPopUp/sucursalesPopUp.component */ "./src/app/routes/commonPopUp/sucursalesPopUp/sucursalesPopUp.component.ts");
/* harmony import */ var _commonPopUp_transportistasPopUp_transportistasPopUp_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../commonPopUp/transportistasPopUp/transportistasPopUp.component */ "./src/app/routes/commonPopUp/transportistasPopUp/transportistasPopUp.component.ts");
/* harmony import */ var _commonPopUp_recorridosGeneralPopUp_recorridosGeneralPopUp_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../commonPopUp/recorridosGeneralPopUp/recorridosGeneralPopUp.component */ "./src/app/routes/commonPopUp/recorridosGeneralPopUp/recorridosGeneralPopUp.component.ts");
/* harmony import */ var _commonPopUp_zonasTodasPopUp_zonasTodasPopUp_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../commonPopUp/zonasTodasPopUp/zonasTodasPopUp.component */ "./src/app/routes/commonPopUp/zonasTodasPopUp/zonasTodasPopUp.component.ts");
/* harmony import */ var _commonPopUp_tarifasPopUp_tarifasPopUp_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../commonPopUp/tarifasPopUp/tarifasPopUp.component */ "./src/app/routes/commonPopUp/tarifasPopUp/tarifasPopUp.component.ts");
/* harmony import */ var _sucursal_detalleSucursal_navSucursales_navSucursales_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./sucursal/detalleSucursal/navSucursales/navSucursales.component */ "./src/app/routes/administracionOperativa/sucursal/detalleSucursal/navSucursales/navSucursales.component.ts");
/* harmony import */ var _commonPopUp_operadoresPopUp_operadoresPopUp_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../commonPopUp/operadoresPopUp/operadoresPopUp.component */ "./src/app/routes/commonPopUp/operadoresPopUp/operadoresPopUp.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var routes = [
    { path: 'transportistas', component: _transportistas_transportistas_component__WEBPACK_IMPORTED_MODULE_8__["TransportistasComponent"] },
    { path: 'detalleTransportista', component: _transportistas_detalleTransportista_detalleTransportista_component__WEBPACK_IMPORTED_MODULE_9__["DetalleTransportistaComponent"] },
    { path: 'rutas', component: _rutas_rutas_component__WEBPACK_IMPORTED_MODULE_11__["RutasComponent"] },
    { path: 'detalleRutas', component: _rutas_detalleRutas_detalleRutas_component__WEBPACK_IMPORTED_MODULE_12__["DetalleRutasComponent"] },
    { path: 'usuarios', component: _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_13__["UsuariosComponent"] },
    { path: 'detalleUsuarios', component: _usuarios_detalleUsuarios_detalleUsuarios_component__WEBPACK_IMPORTED_MODULE_14__["DetalleUsuariosComponent"] },
    { path: 'bodegas', component: _bodega_bodega_component__WEBPACK_IMPORTED_MODULE_16__["BodegaComponent"] },
    { path: 'detalleBodegas', component: _bodega_detalleBodega_detalleBodega_component__WEBPACK_IMPORTED_MODULE_18__["DetalleBodegaComponent"] },
    { path: 'sucursales', component: _sucursal_sucursal_component__WEBPACK_IMPORTED_MODULE_17__["SucursalComponent"] },
    { path: 'detalleSucursales', component: _sucursal_detalleSucursal_detalleSucursal_component__WEBPACK_IMPORTED_MODULE_19__["DetalleSucursalComponent"] },
    { path: 'recorridos', component: _recorrido_recorrido_component__WEBPACK_IMPORTED_MODULE_20__["RecorridoComponent"] },
    { path: 'detalleRecorridos', component: _recorrido_detalleRecorrido_detalleRecorrido_component__WEBPACK_IMPORTED_MODULE_21__["DetalleRecorridoComponent"] }
];
var AdministracionOperativaModule = /** @class */ (function () {
    function AdministracionOperativaModule() {
    }
    AdministracionOperativaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_2__["Ng2TableModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                _commonPopUp_commonPopUp_module__WEBPACK_IMPORTED_MODULE_6__["CommonPopUpModule"]
            ],
            declarations: [
                _transportistas_transportistas_component__WEBPACK_IMPORTED_MODULE_8__["TransportistasComponent"],
                _transportistas_detalleTransportista_detalleTransportista_component__WEBPACK_IMPORTED_MODULE_9__["DetalleTransportistaComponent"],
                _transportistas_detalleTransportista_navTransportista_navTransportista_component__WEBPACK_IMPORTED_MODULE_10__["NavTransportistaComponent"],
                _rutas_rutas_component__WEBPACK_IMPORTED_MODULE_11__["RutasComponent"],
                _rutas_detalleRutas_detalleRutas_component__WEBPACK_IMPORTED_MODULE_12__["DetalleRutasComponent"],
                _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_13__["UsuariosComponent"],
                _usuarios_detalleUsuarios_detalleUsuarios_component__WEBPACK_IMPORTED_MODULE_14__["DetalleUsuariosComponent"],
                _usuarios_detalleUsuarios_navUsuarios_navUsuarios_component__WEBPACK_IMPORTED_MODULE_15__["NavUsuariosComponent"],
                _bodega_bodega_component__WEBPACK_IMPORTED_MODULE_16__["BodegaComponent"],
                _sucursal_sucursal_component__WEBPACK_IMPORTED_MODULE_17__["SucursalComponent"],
                _bodega_detalleBodega_detalleBodega_component__WEBPACK_IMPORTED_MODULE_18__["DetalleBodegaComponent"],
                _sucursal_detalleSucursal_detalleSucursal_component__WEBPACK_IMPORTED_MODULE_19__["DetalleSucursalComponent"],
                _recorrido_recorrido_component__WEBPACK_IMPORTED_MODULE_20__["RecorridoComponent"],
                _recorrido_detalleRecorrido_detalleRecorrido_component__WEBPACK_IMPORTED_MODULE_21__["DetalleRecorridoComponent"],
                _transportistas_detalleTransportista_navTransportista_navVehiculo_navVehiculo_component__WEBPACK_IMPORTED_MODULE_23__["NavVehiculoComponent"],
                _transportistas_detalleTransportista_navTransportista_navConductores_navConductores_component__WEBPACK_IMPORTED_MODULE_24__["NavConductoresComponent"],
                _sucursal_detalleSucursal_navSucursales_navSucursales_component__WEBPACK_IMPORTED_MODULE_33__["NavSucursalesComponent"],
            ],
            entryComponents: [_commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_22__["UtilGeoPopUpComponent"],
                _commonPopUp_conductororesPopUp_conductororesPopUp_component__WEBPACK_IMPORTED_MODULE_25__["ConductororesPopUpComponent"],
                _commonPopUp_vehiculosPopUp_vehiculosPopUp_component__WEBPACK_IMPORTED_MODULE_26__["VehiculosPopUpComponent"],
                _commonPopUp_choferPopUp_choferPopUp_component__WEBPACK_IMPORTED_MODULE_27__["ChoferPopUpComponent"],
                _commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_28__["SucursalesPopUpComponent"],
                _commonPopUp_transportistasPopUp_transportistasPopUp_component__WEBPACK_IMPORTED_MODULE_29__["TransportistasPopUpComponent"],
                _commonPopUp_recorridosGeneralPopUp_recorridosGeneralPopUp_component__WEBPACK_IMPORTED_MODULE_30__["RecorridosGeneralPopUpComponent"],
                _commonPopUp_zonasTodasPopUp_zonasTodasPopUp_component__WEBPACK_IMPORTED_MODULE_31__["ZonasTodasPopUpComponent"],
                _commonPopUp_tarifasPopUp_tarifasPopUp_component__WEBPACK_IMPORTED_MODULE_32__["TarifasPopUpComponent"],
                _commonPopUp_operadoresPopUp_operadoresPopUp_component__WEBPACK_IMPORTED_MODULE_34__["OperadoresPopUpComponent"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AdministracionOperativaModule);
    return AdministracionOperativaModule;
}());



/***/ }),

/***/ "./src/app/routes/administracionOperativa/bodega/bodega.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/bodega/bodega.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3>Bodegas</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"col-sm-2 p-0\">\r\n                        <label class=\"col-sm-4 control-label\">C&oacute;digo</label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input formControlName=\"sCodBodega\" name=\"sCodBodega\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-3 p-0\">\r\n                        <label class=\"col-sm-4 control-label\">Nombre</label>\r\n                        <div class=\"col-sm-8 p-0\">\r\n                            <input formControlName=\"sDescBodega\" name=\"sDescBodega\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-5 pl-0\">\r\n                        <label class=\"col-sm-2 control-label\">Sucursal</label>\r\n                        <div class=\"col-sm-3\">\r\n                            <input formControlName=\"sCodSucursal\" name=\"sCodSucursal\" class=\"form-control\" type=\"text\" (change)=\"validaSucursales()\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6 p-0\">\r\n                            <input formControlName=\"sDescSucursal\" name=\"sDescSucursal\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalSucursales()\">\r\n                              <em class=\"icon-magnifier\"></em>\r\n                          </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-2 p-0\">\r\n                        <div class=\"col-sm-5\">\r\n                            <button name=\"espera\" class=\"btn btn-oval btn\" (click)=\"crearBodegas()\" type=\"button\">Agregar</button>\r\n                        </div>\r\n                        <div class=\"col-sm-6 pl-5\">\r\n                            <button name=\"espera\" class=\"btn btn-oval btn\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\">C&oacute;digo</th>\r\n                        <th scope=\"col\">Nombre</th>\r\n                        <th nowrap scope=\"col\">Encargado</th>\r\n                        <th nowrap scope=\"col\">Sucursal</th>\r\n                        <th nowrap scope=\"col\">Facturable</th>\r\n                        <th nowrap scope=\"col\">Estado</th>\r\n                        <th scope=\"col\">Ver</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let bodega of bodegas | paginate: {itemsPerPage: 7, currentPage: pActualBuscaBodega, id: 'pageBuscaBodega'};\">\r\n                        <td nowrap>{{bodega.bod_scodbodega}}</td>\r\n                        <td nowrap>{{bodega.bod_sdescbodega}}</td>\r\n                        <td nowrap>{{bodega.bod_snombre}} {{bodega.bod_sapepaterno}} {{bodega.bod_sapematerno}}</td>\r\n                        <td nowrap>{{bodega.suc_sdescsucursal}}</td>\r\n                        <td nowrap>{{bodega.bod_scodbodfacturable === 'S' ? 'Si' : 'No'}}</td>\r\n                        <td nowrap>{{bodega.bod_scodestado | estadoVigencia}}</td>\r\n                        <td>\r\n                            <span class=\"table-remove\">\r\n                              <a class=\"text\" (click)=\"editarBodega(bodega)\">\r\n                                  <em class=\"fa fa-search\"></em>\r\n                              </a>\r\n                          </span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <br>\r\n            <div class=\"text-right\">\r\n                <pagination-controls (pageChange)=\"pActualBuscaBodega = $event\" id=\"pageBuscaBodega\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionOperativa/bodega/bodega.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/bodega/bodega.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/administracionOperativa/bodega/bodega.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/bodega/bodega.component.ts ***!
  \***************************************************************************/
/*! exports provided: BodegaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodegaComponent", function() { return BodegaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../commonPopUp/sucursalesPopUp/sucursalesPopUp.component */ "./src/app/routes/commonPopUp/sucursalesPopUp/sucursalesPopUp.component.ts");
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
var BodegaComponent = /** @class */ (function () {
    function BodegaComponent(http, fb, modalService, authService, loader, router, bodegasService) {
        this.http = http;
        this.modalService = modalService;
        this.authService = authService;
        this.loader = loader;
        this.router = router;
        this.bodegasService = bodegasService;
        this.pActualBuscaBodega = 1;
        this.user = {};
        this.bodegas = [];
        this.request = {};
        this.requestdos = {};
        this.detalleRutas = {};
        this.datos = [];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            sCodBodega: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sCodEstado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sCodSucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sDescSucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            sDescBodega: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            runOperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    BodegaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.getDatosUser();
        if (this.bodegasService.busquedaBodega !== undefined) {
            this.buscar(true);
        }
        this.subData = this.bodegasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    BodegaComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
    };
    BodegaComponent.prototype.openModalSucursales = function () {
        this.origen = 'sucursales';
        var initialState = {
            titulo: 'Sucursales',
            origen: 'sucursales'
        };
        this.sucursalModal = this.modalService.show(_commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_8__["SucursalesPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    BodegaComponent.prototype.validaSucursales = function () {
        var _this = this;
        this.loader.show();
        if (this.forma.controls.sCodSucursal.value === '') {
            this.loader.hide();
            this.forma.controls.sCodSucursal.setValue('');
            this.forma.controls.sDescSucursal.setValue('');
        }
        else {
            this.requestdos.nRutOperador = Number(this.user.nrutoperador);
            this.requestdos.sCodSucursal = this.forma.controls.sCodSucursal.value.toUpperCase();
            this.bodegasService.getCargaSucursales(this.requestdos)
                .subscribe(function (data) {
                _this.loader.hide();
                if (data) {
                    if (data.error.codError !== 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.sucursal;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.sDescSucursal.setValue(_this.datos[0].suc_sdescsucursal);
                        }
                        else {
                            _this.forma.controls.sCodSucursal.setValue('');
                            _this.forma.controls.sDescSucursal.setValue('');
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
    BodegaComponent.prototype.setData = function (resData) {
        if (resData !== 0) {
            switch (this.origen) {
                case 'sucursales': {
                    this.forma.controls.sCodSucursal.setValue(resData.suc_scodsucursal);
                    this.forma.controls.sDescSucursal.setValue(resData.suc_sdescsucursal);
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    BodegaComponent.prototype.buscar = function (conBusqueda) {
        var _this = this;
        this.loader.show();
        if (conBusqueda) {
            this.request = this.bodegasService.busquedaBodega;
            this.forma = this.bodegasService.formaBodega;
        }
        else {
            this.forma.controls.runOperador.setValue(Number(this.user.nrutoperador));
            this.request.runOperador = Number(this.forma.controls.runOperador.value);
            this.request.sCodBodega = this.forma.controls.sCodBodega.value.toUpperCase();
            this.request.sCodEstado = this.forma.controls.sCodEstado.value;
            this.request.sCodSucursal = this.forma.controls.sCodSucursal.value;
            this.request.sDescBodega = this.forma.controls.sDescBodega.value;
            this.bodegasService.busquedaBodega = Object.assign({}, this.request);
            this.bodegasService.formaBodega = this.forma;
        }
        this.bodegasService.getBodegas(this.request)
            .subscribe(function (data) {
            _this.loader.hide();
            if (data) {
                if (data.bodegas === null || data.error.codError !== 0) {
                    swal('Atención', data.error.msjError, 'error');
                }
                else {
                    if (data.bodegas.length === 0 && data.error.codError === 0) {
                        swal('Atención', 'No se encontraron resultados', 'info');
                    }
                    else {
                        (_this.bodegas = data.bodegas);
                    }
                }
            }
            else {
                swal('Atención', data.error.msjError, 'error');
            }
        }, function (error) {
            _this.loader.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    BodegaComponent.prototype.editarBodega = function (bodega) {
        this.loader.show();
        this.bodegasService.selectedBodega = Object.assign({}, bodega);
        if (this.bodegasService.selectedBodega !== undefined) {
            this.router.navigate(['/administracionOperativa/detalleBodegas']);
            this.loader.hide();
        }
        else {
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            this.loader.hide();
        }
    };
    BodegaComponent.prototype.crearBodegas = function () {
        this.bodegasService.selectedBodega = undefined;
        this.router.navigate(['/administracionOperativa/detalleBodegas']);
    };
    BodegaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bodega',
            template: __webpack_require__(/*! ./bodega.component.html */ "./src/app/routes/administracionOperativa/bodega/bodega.component.html"),
            styles: [__webpack_require__(/*! ./bodega.component.scss */ "./src/app/routes/administracionOperativa/bodega/bodega.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_7__["AdministracionOperativaService"]])
    ], BodegaComponent);
    return BodegaComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionOperativa/bodega/detalleBodega/detalleBodega.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/bodega/detalleBodega/detalleBodega.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3>Detalle de Bodega</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"col-sm-12 pb-1\">\r\n            <div class=\"row pull-left ml-2\">\r\n                <div class=\"col-sm-6 mr-2\">\r\n                    <button class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"guardarBodega()\">Guardar</button>\r\n                </div>\r\n                <div class=\"col-sm-5\">\r\n                    <button class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"volver()\">Volver</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <form [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <h5><strong>Detalle Bodega</strong></h5>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"col-sm-3 pl-0 pr-0\">\r\n                                    <label class=\"col-sm-4 control-label\">C&oacute;digo</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <input formControlName=\"bod_scodbodega\" name=\"bod_scodbodega\" class=\"form-control\" type=\"text\" />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3 pl-0\">\r\n                                    <label class=\"col-sm-3 control-label\">Regi&oacute;n</label>\r\n                                    <div class=\"col-sm-7 pl-0\">\r\n                                        <input formControlName=\"bod_sdesregion\" name=\"bod_sdesregion\" class=\"form-control\" type=\"text\" />\r\n                                    </div>\r\n                                    <div class=\"col-sm-1 pl-0\">\r\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalRegiones()\">\r\n                                            <em class=\"icon-magnifier\"></em>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3 pl-0\">\r\n                                    <label class=\"col-sm-3 control-label\">Ciudad</label>\r\n                                    <div class=\"col-sm-7 pl-0\">\r\n                                        <input formControlName=\"bod_sdesciudad\" name=\"bod_sdesciudad\" class=\"form-control\" type=\"text\" />\r\n                                    </div>\r\n                                    <div class=\"col-sm-1 pl-0\">\r\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCiudades()\">\r\n                                            <em class=\"icon-magnifier\"></em>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3 pl-0\">\r\n                                    <label class=\"col-sm-3 control-label\">Comuna</label>\r\n                                    <div class=\"col-sm-7 pl-0\">\r\n                                        <input formControlName=\"bod_sdescomuna\" name=\"bod_sdescomuna\" class=\"form-control\" type=\"text\" />\r\n                                    </div>\r\n                                    <div class=\"col-sm-1 pl-0\">\r\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalComunas()\">\r\n                                            <em class=\"icon-magnifier\"></em>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12\">\r\n                                <label class=\"col-sm-1 control-label\">Direcci&oacute;n</label>\r\n                                <div class=\"col-sm-5\">\r\n                                    <input formControlName=\"bod_sdireccion\" name=\"bod_sdireccion\" class=\"form-control\" type=\"text\" />\r\n                                </div>\r\n                                <label class=\"col-sm-1 control-label\">Estado</label>\r\n                                <div class=\"col-sm-2\">\r\n                                    <select class=\"form-control pv-0\" formControlName=\"bod_scodestado\" name=\"bod_scodestado\">\r\n                                        <option *ngFor=\"let userEstado of estado\" [ngValue]=\"userEstado.bod_scodestado\">{{userEstado.descEstado}}</option>\r\n                                    </select>\r\n                                </div>\r\n                                <label class=\"col-sm-1 control-label\">Tipo</label>\r\n                                <div class=\"col-sm-2\">\r\n                                    <select class=\"form-control pv-0\" formControlName=\"bod_scodtipo\" name=\"bod_scodtipo\">\r\n                                        <option *ngFor=\"let userTipo of tipo\" [ngValue]=\"userTipo.bod_scodtipo\">{{userTipo.descTipo}}</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12\">\r\n                                <label class=\"col-sm-1 control-label\">Descripci&oacute;n</label>\r\n                                <div class=\"col-sm-4\">\r\n                                    <input formControlName=\"bod_sdescbodega\" name=\"bod_sdescbodega\" class=\"form-control\" type=\"text\" />\r\n                                </div>\r\n                                <div class=\"col-sm-2 checkbox p-0\">\r\n                                    <label><input type=\"checkbox\" formControlName=\"bod_scodbodfacturable\" name=\"bod_scodbodfacturable\" (click)=\"cambio()\" [(checked)] = \"checkedBodega\"/>Bodega Facturable</label>\r\n                                </div>\r\n                                <div class=\"col-sm-5 pl-0\">\r\n                                    <label class=\"col-sm-2 control-label\">Sucursal</label>\r\n                                    <div class=\"col-sm-3\">\r\n                                        <input formControlName=\"bod_scodsucursal\" name=\"bod_scodsucursal\" class=\"form-control\" type=\"text\" (change)=\"validaSucursales()\" />\r\n                                    </div>\r\n                                    <div class=\"col-sm-6 p-0\">\r\n                                        <input formControlName=\"suc_sdescsucursal\" name=\"suc_sdescsucursal\" class=\"form-control\" type=\"text\" />\r\n                                    </div>\r\n                                    <div class=\"col-sm-1\">\r\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalSucursales()\">\r\n                                            <em class=\"icon-magnifier\"></em>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <h5><strong>Responsable</strong></h5>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-12\">\r\n                                <label class=\"col-sm-2 control-label\">R.U.T Responsable</label>\r\n                                <div class=\"col-sm-2\">\r\n                                    <input formControlName=\"bod_nrutresponsable\" name=\"bod_nrutresponsable\" class=\"form-control\" type=\"text\" maxlength=\"12\" appRutFormat (change)=\"validaRut()\" />\r\n                                </div>\r\n                                <label class=\"col-sm-1 control-label\">Nombre</label>\r\n                                <div class=\"col-sm-4\">\r\n                                    <input formControlName=\"bod_snombre\" name=\"bod_snombre\" class=\"form-control\" type=\"text\" maxlength=\"100\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12\">\r\n                                <label class=\"col-sm-2 control-label\">Apellido Paterno</label>\r\n                                <div class=\"col-sm-4\">\r\n                                    <input formControlName=\"bod_sapepaterno\" name=\"bod_sapepaterno\" class=\"form-control\" type=\"text\" maxlength=\"100\" />\r\n                                </div>\r\n                                <label class=\"col-sm-2 control-label\">Apellido Materno</label>\r\n                                <div class=\"col-sm-4\">\r\n                                    <input formControlName=\"bod_sapematerno\" name=\"bod_sapematerno\" class=\"form-control\" type=\"text\" maxlength=\"100\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionOperativa/bodega/detalleBodega/detalleBodega.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/bodega/detalleBodega/detalleBodega.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/administracionOperativa/bodega/detalleBodega/detalleBodega.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/bodega/detalleBodega/detalleBodega.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DetalleBodegaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleBodegaComponent", function() { return DetalleBodegaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../commonPopUp/utilGeoPopUp/utilGeoPopUp.component */ "./src/app/routes/commonPopUp/utilGeoPopUp/utilGeoPopUp.component.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../commonPopUp/sucursalesPopUp/sucursalesPopUp.component */ "./src/app/routes/commonPopUp/sucursalesPopUp/sucursalesPopUp.component.ts");
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
var DetalleBodegaComponent = /** @class */ (function () {
    function DetalleBodegaComponent(http, fb, modalService, setearDatos, authService, loader, router, datePipe, bodegasService, utilService) {
        this.http = http;
        this.modalService = modalService;
        this.setearDatos = setearDatos;
        this.authService = authService;
        this.loader = loader;
        this.router = router;
        this.datePipe = datePipe;
        this.bodegasService = bodegasService;
        this.utilService = utilService;
        this.estado = [
            {
                bod_scodestado: 'VIGEN',
                descEstado: 'Vigente'
            },
            {
                bod_scodestado: 'NOVIG',
                descEstado: 'No Vigente'
            }
        ];
        this.tipo = [
            {
                bod_scodtipo: 'ALMAC',
                descTipo: 'ALMACENAMIENTO'
            },
            {
                bod_scodtipo: 'CENTR',
                descTipo: 'CENTRAL'
            }
        ];
        this.user = {};
        this.saveBodega = {};
        this.request = {};
        this.longitud_rutTransporte2 = 0;
        this.detallesTransporte = {};
        this.requestdos = {};
        this.datos = [];
        this.longitud_rutClientes2 = 0;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            bod_nrutresponsable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            bod_snombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            bod_sapepaterno: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            bod_sapematerno: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            bod_scodbodega: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            bod_sdescbodega: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            bod_scodestado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            bod_sdireccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            bod_sdesregion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            bod_sdesciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            bod_sdescomuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            bod_scodcomuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bod_scodciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bod_scodregion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bod_sdigitoverificador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bod_scodtipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bod_scodbodfacturable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bod_scodsucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            suc_sdescsucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true })
        });
    }
    DetalleBodegaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subData = this.setearDatos.datosGeo$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.subData2 = this.bodegasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.user = this.authService.getDatosUser();
        this.setDataBodega();
    };
    DetalleBodegaComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
        if (this.subData2 !== undefined) {
            this.subData2.unsubscribe();
        }
    };
    DetalleBodegaComponent.prototype.setDataBodega = function () {
        if (this.bodegasService.selectedBodega === undefined) {
            console.log('es nuevo');
            this.checkedBodega = false;
            this.edit = 'N';
        }
        else {
            this.forma.setValue(this.bodegasService.selectedBodega);
            this.forma.controls.bod_nrutresponsable.setValue((this.utilService.formatDotNumber(this.bodegasService.selectedBodega.bod_nrutresponsable)) + '-' + (this.bodegasService.selectedBodega.bod_sdigitoverificador));
            /*
                  this.forma.controls.bod_nrutresponsable.setValue(
                    this.bodegasService.selectedBodega.bod_nrutresponsable + this.bodegasService.selectedBodega.bod_sdigitoverificador); */
            this.edit = 'S';
            if (this.forma.controls.bod_scodbodfacturable.value === 'S') {
                this.checkedBodega = true;
            }
            else {
                this.checkedBodega = false;
            }
            this.forma.controls.bod_scodbodega.disable();
            this.forma.controls.bod_scodtipo.disable();
        }
    };
    DetalleBodegaComponent.prototype.validaRut = function () {
        this.rutValido = false;
        this.longitud_rutClientes = this.forma.controls.bod_nrutresponsable.value.toString();
        this.longitud_rutClientes2 = this.longitud_rutClientes.length;
        this.formatRut = this.utilService.formatDotNumber(this.longitud_rutClientes.substr(0, this.longitud_rutClientes2 - 1));
        this.formatVerificador = this.longitud_rutClientes.substr((this.longitud_rutClientes2 - 1), 1);
        if (!this.utilService.isValidRUT(this.forma.controls.bod_nrutresponsable.value)) {
            this.forma.controls.bod_nrutresponsable.setValue('');
            swal('Atención', 'El RUT es incorrecto', 'error');
        }
        else {
            this.rutValido = true;
            this.forma.controls.bod_nrutresponsable.setValue(this.formatRut + '-' + this.formatVerificador);
        }
    };
    DetalleBodegaComponent.prototype.openModalRegiones = function () {
        this.origen = 'region';
        var initialState = {
            titulo: 'Region',
            origen: 'region'
        };
        this.utilGeoModal = this.modalService.show(_commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_10__["UtilGeoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleBodegaComponent.prototype.openModalCiudades = function () {
        this.origen = 'ciudad';
        var initialState = {
            titulo: 'Ciudad',
            origen: 'ciudad',
            regionSeleccionada: this.territorioSeleccionado
        };
        this.utilGeoModal = this.modalService.show(_commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_10__["UtilGeoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleBodegaComponent.prototype.openModalComunas = function () {
        this.origen = 'comuna';
        var initialState = {
            titulo: 'Comúna',
            origen: 'comuna',
            regionSeleccionada: this.territorioSeleccionado,
            ciudadSeleccionada: this.ciudadSeleccionado
        };
        this.utilGeoModal = this.modalService.show(_commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_10__["UtilGeoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleBodegaComponent.prototype.openModalSucursales = function () {
        this.origen = 'sucursales';
        var initialState = {
            titulo: 'Sucursales',
            origen: 'sucursales'
        };
        this.sucursalModal = this.modalService.show(_commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_12__["SucursalesPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleBodegaComponent.prototype.validaSucursales = function () {
        var _this = this;
        this.loader.show();
        if (this.forma.controls.bod_scodsucursal.value === '') {
            this.loader.hide();
            this.forma.controls.bod_scodsucursal.setValue('');
            this.forma.controls.suc_sdescsucursal.setValue('');
        }
        else {
            this.requestdos.nRutOperador = Number(this.user.nrutoperador);
            this.requestdos.sCodSucursal = this.forma.controls.bod_scodsucursal.value;
            this.bodegasService.getCargaSucursales(this.requestdos)
                .subscribe(function (data) {
                _this.loader.hide();
                if (data) {
                    if (data.error.codError !== 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.sucursal;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.suc_sdescsucursal.setValue(_this.datos[0].suc_sdescsucursal);
                        }
                        else {
                            _this.forma.controls.bod_scodsucursal.setValue('');
                            _this.forma.controls.suc_sdescsucursal.setValue('');
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
    DetalleBodegaComponent.prototype.setData = function (resData) {
        if (resData !== 0) {
            switch (this.origen) {
                case 'region': {
                    this.forma.controls.bod_scodregion.setValue(resData.par_codparametro01);
                    this.forma.controls.bod_sdesregion.setValue(resData.par_deslargo01);
                    this.forma.controls.bod_scodciudad.setValue('');
                    this.forma.controls.bod_sdesciudad.setValue('');
                    this.forma.controls.bod_scodcomuna.setValue('');
                    this.forma.controls.bod_sdescomuna.setValue('');
                    this.territorioSeleccionado = resData.par_codparametro01;
                    break;
                }
                case 'ciudad': {
                    this.forma.controls.bod_scodciudad.setValue(resData.par_codparametro01);
                    this.forma.controls.bod_sdesciudad.setValue(resData.par_deslargo01);
                    this.forma.controls.bod_scodcomuna.setValue('');
                    this.forma.controls.bod_sdescomuna.setValue('');
                    this.ciudadSeleccionado = resData.par_codparametro01;
                    break;
                }
                case 'comuna': {
                    this.forma.controls.bod_scodcomuna.setValue(resData.par_codparametro01);
                    this.forma.controls.bod_sdescomuna.setValue(resData.par_deslargo01);
                    break;
                }
                case 'sucursales': {
                    this.forma.controls.bod_scodsucursal.setValue(resData.suc_scodsucursal);
                    this.forma.controls.suc_sdescsucursal.setValue(resData.suc_sdescsucursal);
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    DetalleBodegaComponent.prototype.cambio = function () {
        if (this.checkedBodega === false) {
            this.checkedBodega = true;
        }
        else {
            if (this.checkedBodega === true) {
                this.checkedBodega = false;
            }
        }
    };
    DetalleBodegaComponent.prototype.guardarBodega = function () {
        var _this = this;
        if (this.forma.valid) {
            this.longitud_rutTransporte = this.utilService.stringFormatSinPuntos(this.forma.controls.bod_nrutresponsable.value).toString();
            this.longitud_rutTransporte2 = this.longitud_rutTransporte.length;
            this.loader.show();
            this.saveBodega.nRunUsuarioActualiza = Number(this.user.nrunusuario);
            this.saveBodega.nRunUsuarioCrea = Number(this.user.nrunusuario);
            this.saveBodega.nRutOperador = Number(this.user.nrutoperador);
            //this.saveBodega.nRutResponsable = this.forma.controls.bod_nrutresponsable.value;
            this.saveBodega.nRutResponsable = Number(this.longitud_rutTransporte.substr(0, this.longitud_rutTransporte2 - 1));
            this.saveBodega.sApaterno = this.forma.controls.bod_sapepaterno.value;
            if (this.checkedBodega === true) {
                this.saveBodega.sCodBodFacturable = 'S';
            }
            else {
                if (this.checkedBodega === false) {
                    this.saveBodega.sCodBodFacturable = 'N';
                }
            }
            //this.saveBodega.sCodBodFacturable = this.forma.controls.bod_scodbodfacturable.value;
            this.saveBodega.sCodBodega = this.forma.controls.bod_scodbodega.value.toUpperCase();
            this.saveBodega.sCodCiudad = this.forma.controls.bod_scodciudad.value;
            this.saveBodega.sCodComuna = this.forma.controls.bod_scodcomuna.value;
            this.saveBodega.sCodEstado = this.forma.controls.bod_scodestado.value;
            this.saveBodega.sCodRegion = this.forma.controls.bod_scodregion.value;
            this.saveBodega.sCodSucursal = this.forma.controls.bod_scodsucursal.value;
            this.saveBodega.sDesCiudad = this.forma.controls.bod_sdesciudad.value;
            this.saveBodega.sDesRegion = this.forma.controls.bod_sdesregion.value;
            this.saveBodega.sDescBodega = this.forma.controls.bod_sdescbodega.value;
            this.saveBodega.sDescomuna = this.forma.controls.bod_sdescomuna.value;
            //this.saveBodega.sDgitoVerificador = this.forma.controls.bod_sdigitoverificador.value;
            if (this.forma.controls.bod_sdigitoverificador.value === '' ||
                this.forma.controls.bod_sdigitoverificador.value === null || this.forma.controls.bod_sdigitoverificador.value === undefined) {
                this.saveBodega.sDgitoVerificador = this.longitud_rutTransporte.substr((this.longitud_rutTransporte2 - 1), 1);
            }
            else {
                this.saveBodega.sDgitoVerificador = this.forma.controls.bod_sdigitoverificador.value;
            }
            this.saveBodega.sDireccion = this.forma.controls.bod_sdireccion.value;
            this.saveBodega.sMaterno = this.forma.controls.bod_sapematerno.value;
            this.saveBodega.sNombre = this.forma.controls.bod_snombre.value;
            this.saveBodega.sTipo = this.forma.controls.bod_scodtipo.value;
            this.bodegasService.saveBodegas(this.saveBodega)
                .subscribe(function (data) {
                if (data) {
                    if (data.error.codError === null || data.error.codError !== 0) {
                        _this.loader.hide();
                        swal('Atención', data.error.msjError, 'error');
                    }
                    else {
                        if (data.error.codError === 0) {
                            if (_this.edit === 'N') {
                                _this.loader.hide();
                                swal('Bien', 'Los datos han sido ingresados satisfactoriamente.', 'success');
                                _this.forma.reset();
                                _this.setDataBodega();
                            }
                            else {
                                if (_this.edit === 'S') {
                                    _this.bodegasService.selectedBodega = undefined;
                                    _this.forma.reset();
                                    swal('Bien', 'Los datos han sido actualizados satisfactoriamente.', 'success');
                                    _this.router.navigate(['/administracionOperativa/bodegas']);
                                }
                            }
                        }
                    }
                }
                else {
                    swal('Atención', 'Ha ocurrido un error inesperado, intente nuevamente', 'error');
                    _this.loader.hide();
                }
            }, function (error) {
                _this.loader.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
        else {
            swal('Atención', 'Existen campos requeridos no ingresados', 'error');
            if (!this.forma.controls.bod_nrutresponsable.valid) {
                $('[name=bod_nrutresponsable]').addClass('error-form');
            }
            else {
                $('[name=bod_nrutresponsable]').removeClass('error-form');
            }
            if (!this.forma.controls.bod_snombre.valid) {
                $('[name=bod_snombre]').addClass('error-form');
            }
            else {
                $('[name=bod_snombre]').removeClass('error-form');
            }
            if (!this.forma.controls.bod_sapepaterno.valid) {
                $('[name=bod_sapepaterno]').addClass('error-form');
            }
            else {
                $('[name=bod_sapepaterno]').removeClass('error-form');
            }
            if (!this.forma.controls.bod_sapematerno.valid) {
                $('[name=bod_sapematerno]').addClass('error-form');
            }
            else {
                $('[name=bod_sapematerno]').removeClass('error-form');
            }
            if (!this.forma.controls.bod_scodbodega.valid) {
                $('[name=bod_scodbodega]').addClass('error-form');
            }
            else {
                $('[name=bod_scodbodega]').removeClass('error-form');
            }
            if (!this.forma.controls.bod_sdescbodega.valid) {
                $('[name=bod_sdescbodega]').addClass('error-form');
            }
            else {
                $('[name=bod_sdescbodega]').removeClass('error-form');
            }
            if (!this.forma.controls.bod_scodestado.valid) {
                $('[name=bod_scodestado]').addClass('error-form');
            }
            else {
                $('[name=bod_scodestado]').removeClass('error-form');
            }
            if (!this.forma.controls.bod_sdireccion.valid) {
                $('[name=bod_sdireccion]').addClass('error-form');
            }
            else {
                $('[name=bod_sdireccion]').removeClass('error-form');
            }
            if (!this.forma.controls.bod_sdesregion.valid) {
                $('[name=bod_sdesregion]').addClass('error-form');
            }
            else {
                $('[name=bod_sdesregion]').removeClass('error-form');
            }
            if (!this.forma.controls.bod_sdesciudad.valid) {
                $('[name=bod_sdesciudad]').addClass('error-form');
            }
            else {
                $('[name=bod_sdesciudad]').removeClass('error-form');
            }
            if (!this.forma.controls.bod_sdescomuna.valid) {
                $('[name=bod_sdescomuna]').addClass('error-form');
            }
            else {
                $('[name=bod_sdescomuna]').removeClass('error-form');
            }
            if (!this.forma.controls.bod_scodsucursal.valid) {
                $('[name=bod_scodsucursal]').addClass('error-form');
            }
            else {
                $('[name=bod_scodsucursal]').removeClass('error-form');
            }
        }
        this.loader.hide();
    };
    DetalleBodegaComponent.prototype.volver = function () {
        console.log('CHAO');
        this.bodegasService.selectedBodega = undefined;
        this.router.navigate(['/administracionOperativa/bodegas']);
    };
    DetalleBodegaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalleBodega',
            template: __webpack_require__(/*! ./detalleBodega.component.html */ "./src/app/routes/administracionOperativa/bodega/detalleBodega/detalleBodega.component.html"),
            styles: [__webpack_require__(/*! ./detalleBodega.component.scss */ "./src/app/routes/administracionOperativa/bodega/detalleBodega/detalleBodega.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__["ConsultasService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_11__["AdministracionOperativaService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]])
    ], DetalleBodegaComponent);
    return DetalleBodegaComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionOperativa/recorrido/detalleRecorrido/detalleRecorrido.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/recorrido/detalleRecorrido/detalleRecorrido.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3>Recorrido</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <form [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">C&oacute;digo</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"codRecorrido\" name=\"codRecorrido\" class=\"form-control\" type=\"text\" maxlength=\"5\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Descripci&oacute;n</label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input formControlName=\"desRecorrido\" name=\"desRecorrido\" class=\"form-control\" type=\"text\" maxlength=\"100\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Sucursal</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"codSucursal\" name=\"codSucursal\" class=\"form-control\" type=\"text\" (change)=\"validaSucursales()\" />\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        <input formControlName=\"desSucursal\" name=\"desSucursal\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalSucursales()\">\r\n                        <em class=\"icon-magnifier\"></em>\r\n                    </button>\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">D&iacute;a</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"diaRecorrido\" name=\"diaRecorrido\">\r\n                        <option *ngFor=\"let userDias of daiasRecorridos\" [ngValue]=\"userDias.dre_Sdia\">{{userDias.descDia}}</option>\r\n                    </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Transportista</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input formControlName=\"nombreTransportista\" name=\"nombreTransportista\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Veh&iacute;culo</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"patente\" name=\"patente\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Chofer</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"nobreChofer\" name=\"nobreChofer\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalChofer()\">\r\n                          <em class=\"icon-magnifier\"></em>\r\n                    </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Volumen(m3)</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"volumen\" name=\"volumen\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Cant.Max. Facturas</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"cantFacturas\" name=\"cantFacturas\" class=\"form-control\" type=\"number\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Carga(Ton)</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"carga\" name=\"carga\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Estado</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"estado\" name=\"estado\">\r\n                        <option *ngFor=\"let userEstado of estado\" [ngValue]=\"userEstado.dre_scodestado\">{{userEstado.descEstado}}</option>\r\n                    </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row pull-left ml-2\">\r\n                    <div class=\"col-sm-6 mr-2\">\r\n                        <button class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"guardarRecorrido()\">Guardar</button>\r\n                    </div>\r\n                    <div class=\"col-sm-5\">\r\n                        <button class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"volver()\">Volver</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"row mt-2\" *ngIf=\"tabs===2\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">Rutas</div>\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th scope=\"col\">C&oacute;digo</th>\r\n                                        <th scope=\"col\">Descripci&oacute;n</th>\r\n                                        <th nowrap scope=\"col\">Territorio</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let rutas of rutasRecorridos | paginate: {itemsPerPage: 7, currentPage: pageActual};\">\r\n                                        <td nowrap>{{rutas.rut_scodruta}}</td>\r\n                                        <td nowrap>{{rutas.rut_sdesruta}}</td>\r\n                                        <td nowrap>{{rutas.ter_sdesterritorio}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <br>\r\n                            <div class=\"text-right\">\r\n                                <pagination-controls (pageChange)=\"pageActual = $event\" autoHide=\"true\"></pagination-controls>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionOperativa/recorrido/detalleRecorrido/detalleRecorrido.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/recorrido/detalleRecorrido/detalleRecorrido.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/administracionOperativa/recorrido/detalleRecorrido/detalleRecorrido.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/recorrido/detalleRecorrido/detalleRecorrido.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DetalleRecorridoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleRecorridoComponent", function() { return DetalleRecorridoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../commonPopUp/sucursalesPopUp/sucursalesPopUp.component */ "./src/app/routes/commonPopUp/sucursalesPopUp/sucursalesPopUp.component.ts");
/* harmony import */ var _commonPopUp_transportistasPopUp_transportistasPopUp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../commonPopUp/transportistasPopUp/transportistasPopUp.component */ "./src/app/routes/commonPopUp/transportistasPopUp/transportistasPopUp.component.ts");
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
var DetalleRecorridoComponent = /** @class */ (function () {
    function DetalleRecorridoComponent(http, fb, modalService, setearDatos, authService, loader, router, datePipe, recorridoService) {
        this.http = http;
        this.modalService = modalService;
        this.setearDatos = setearDatos;
        this.authService = authService;
        this.loader = loader;
        this.router = router;
        this.datePipe = datePipe;
        this.recorridoService = recorridoService;
        this.pageActual = 1;
        this.user = {};
        this.saveRecorrido = {};
        this.request = {};
        this.requestdos = {};
        this.consultaRuta = {};
        this.longitud_rutTransporte2 = 0;
        this.detallesTransporte = {};
        this.rutasRecorridos = [];
        this.estado = [
            {
                dre_scodestado: 'VIGEN',
                descEstado: 'Vigente'
            },
            {
                dre_scodestado: 'NOVIG',
                descEstado: 'No Vigente'
            }
        ];
        this.daiasRecorridos = [
            {
                dre_Sdia: 'LUNES',
                descDia: 'Lunes'
            },
            {
                dre_Sdia: 'MARTE',
                descDia: 'Martes'
            },
            {
                dre_Sdia: 'MIERC',
                descDia: 'Miercoles'
            },
            {
                dre_Sdia: 'JUEVE',
                descDia: 'Jueves'
            },
            {
                dre_Sdia: 'VIERN',
                descDia: 'Viernes'
            },
            {
                dre_Sdia: 'SABAD',
                descDia: 'Sabado'
            },
            {
                dre_Sdia: 'DOMIN',
                descDia: 'Domingo'
            }
        ];
        this.datos = [];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            codRecorrido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            desRecorrido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            codSucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            desSucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            diaRecorrido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            rutTransportista: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            nombreTransportista: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            patente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            runChofer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nobreChofer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            volumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cantFacturas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            carga: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            rutOperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.tabs = 2;
    }
    DetalleRecorridoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subData = this.recorridoService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.user = this.authService.getDatosUser();
        this.setDataRecorrido();
    };
    DetalleRecorridoComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
    };
    DetalleRecorridoComponent.prototype.setDataRecorrido = function () {
        if (this.recorridoService.selectedRecorrido === undefined) {
            //this.tabs = 1;
            console.log('es nuevo');
            this.edit = 'N';
            this.forma.controls.rutOperador.setValue(this.user.nrutoperador);
            this.forma.controls.desSucursal.disable();
            this.forma.controls.nombreTransportista.disable();
            this.forma.controls.patente.disable();
            this.forma.controls.nobreChofer.disable();
            this.forma.controls.volumen.disable();
            this.forma.controls.carga.disable();
            this.forma.controls.cantFacturas.setValue(0);
        }
        else {
            //this.tabs = 2;
            this.edit = 'S';
            this.tableRutas();
            console.log(this.recorridoService.selectedRecorrido);
            this.forma.controls.codRecorrido.setValue(this.recorridoService.selectedRecorrido.dre_scodrecorrido);
            this.forma.controls.codRecorrido.disable();
            this.forma.controls.desRecorrido.setValue(this.recorridoService.selectedRecorrido.dre_sdesrecorrido);
            this.forma.controls.codSucursal.setValue(this.recorridoService.selectedRecorrido.dre_scodsucursal);
            this.forma.controls.desSucursal.setValue(this.recorridoService.selectedRecorrido.suc_sdescsucursal);
            this.forma.controls.desSucursal.disable();
            this.forma.controls.diaRecorrido.setValue(this.recorridoService.selectedRecorrido.dre_Sdia);
            this.forma.controls.rutTransportista.setValue(this.recorridoService.selectedRecorrido.dre_nruttransportista);
            this.forma.controls.nombreTransportista.setValue(this.recorridoService.selectedRecorrido.tra_srazonsocial);
            this.forma.controls.nombreTransportista.disable();
            this.forma.controls.patente.setValue(this.recorridoService.selectedRecorrido.dre_spatente);
            this.forma.controls.patente.disable();
            this.forma.controls.runChofer.setValue(this.recorridoService.selectedRecorrido.cho_nrunchofer);
            this.forma.controls.nobreChofer.setValue(this.recorridoService.selectedRecorrido.cho_snombre);
            this.forma.controls.nobreChofer.disable();
            this.forma.controls.volumen.setValue(this.recorridoService.selectedRecorrido.cam_nvolumen);
            this.forma.controls.volumen.disable();
            this.forma.controls.carga.setValue(this.recorridoService.selectedRecorrido.cam_ncarga);
            this.forma.controls.carga.disable();
            this.forma.controls.cantFacturas.setValue(this.recorridoService.selectedRecorrido.dre_nnumfacturasmax);
            this.forma.controls.estado.setValue(this.recorridoService.selectedRecorrido.dre_scodestado);
            this.forma.controls.rutOperador.setValue(this.recorridoService.selectedRecorrido.dre_nrutoperador);
        }
    };
    DetalleRecorridoComponent.prototype.tableRutas = function () {
        var _this = this;
        this.consultaRuta.nRutOperador = this.recorridoService.selectedRecorrido.dre_nrutoperador;
        this.consultaRuta.sCodRecorrido = this.recorridoService.selectedRecorrido.dre_scodrecorrido;
        this.recorridoService.getRutasRecorrido(this.consultaRuta)
            .subscribe(function (data) {
            if (data.rutasAdministracion.length === 0 && data.error.codError === 0) {
                console.log('Sin Rutas');
            }
            else {
                if (data.rutasAdministracion === null) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
                else {
                    (_this.rutasRecorridos = data.rutasAdministracion);
                }
            }
            if (data.error.codError !== 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    DetalleRecorridoComponent.prototype.openModalSucursales = function () {
        this.origen = 'sucursales';
        var initialState = {
            titulo: 'Sucursales',
            origen: 'sucursales'
        };
        this.sucursalModal = this.modalService.show(_commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_10__["SucursalesPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleRecorridoComponent.prototype.validaSucursales = function () {
        var _this = this;
        this.loader.show();
        if (this.forma.controls.codSucursal.value === '') {
            this.loader.hide();
            this.forma.controls.codSucursal.setValue('');
            this.forma.controls.desSucursal.setValue('');
        }
        else {
            this.requestdos.nRutOperador = Number(this.user.nrutoperador);
            this.requestdos.sCodSucursal = this.forma.controls.codSucursal.value;
            console.log(this.requestdos);
            this.recorridoService.getCargaSucursales(this.requestdos)
                .subscribe(function (data) {
                console.log(data);
                _this.loader.hide();
                if (data) {
                    if (data.error.codError !== 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.sucursal;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.desSucursal.setValue(_this.datos[0].suc_sdescsucursal);
                        }
                        else {
                            _this.forma.controls.codSucursal.setValue('');
                            _this.forma.controls.desSucursal.setValue('');
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
    DetalleRecorridoComponent.prototype.openModalChofer = function () {
        this.origen = 'chofer';
        var initialState = {
            dia: this.forma.controls.diaRecorrido.value,
            origen: 'chofer'
        };
        this.choferModal = this.modalService.show(_commonPopUp_transportistasPopUp_transportistasPopUp_component__WEBPACK_IMPORTED_MODULE_11__["TransportistasPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleRecorridoComponent.prototype.setData = function (resData) {
        if (resData !== 0) {
            switch (this.origen) {
                case 'sucursales': {
                    this.forma.controls.codSucursal.setValue(resData.suc_scodsucursal);
                    this.forma.controls.desSucursal.setValue(resData.suc_sdescsucursal);
                    break;
                }
                case 'chofer': {
                    this.forma.controls.runChofer.setValue(resData.cho_nrunchofer);
                    this.forma.controls.nobreChofer.setValue(resData.cho_snombre);
                    this.forma.controls.patente.setValue(resData.cam_spatente);
                    this.forma.controls.volumen.setValue(resData.cam_nvolumen);
                    this.forma.controls.carga.setValue(resData.cam_ncarga);
                    this.forma.controls.nombreTransportista.setValue(resData.tra_srazonsocial);
                    this.forma.controls.rutTransportista.setValue(resData.tra_nruttransportista);
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    DetalleRecorridoComponent.prototype.guardarRecorrido = function () {
        var _this = this;
        if (this.forma.valid) {
            $('*').removeClass('error-form');
            this.loader.show();
            if (this.edit === 'S') {
                this.saveRecorrido.nNumFacturaMax = this.forma.controls.cantFacturas.value;
                this.saveRecorrido.nRunUsuarioActualiza = this.user.nrunusuario;
                this.saveRecorrido.nRutOperador = this.forma.controls.rutOperador.value;
                this.saveRecorrido.nRutTransportista = this.forma.controls.rutTransportista.value;
                this.saveRecorrido.sCodEstado = this.forma.controls.estado.value;
                this.saveRecorrido.sCodRecorrido = this.forma.controls.codRecorrido.value;
                this.saveRecorrido.sCodSucursal = this.forma.controls.codSucursal.value;
                this.saveRecorrido.sDescripcion = this.forma.controls.desRecorrido.value;
                this.saveRecorrido.sDia = this.forma.controls.diaRecorrido.value;
                this.saveRecorrido.sPatente = this.forma.controls.patente.value;
                this.recorridoService.updateDefinicionRecorridos(this.saveRecorrido)
                    .subscribe(function (data) {
                    if (data) {
                        if (data.error.codError === null || data.error.codError !== 0) {
                            _this.loader.hide();
                            swal('Atención', data.error.msjError, 'error');
                            //swal('Atención', 'Ha ocurrido un error inesperado, intente nuevamente', 'error');
                        }
                        else {
                            if (data.error.codError === 0) {
                                _this.loader.hide();
                                swal('Bien', 'Los datos han sido actualizados satisfactoriamente.', 'success');
                                _this.router.navigate(['/administracionOperativa/recorridos']);
                            }
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
            }
            else {
                this.saveRecorrido.nNumFacturaMax = this.forma.controls.cantFacturas.value;
                this.saveRecorrido.nRutOperador = this.forma.controls.rutOperador.value;
                this.saveRecorrido.nRutTransportista = this.forma.controls.rutTransportista.value;
                this.saveRecorrido.nRutUsuarioCrea = this.user.nrunusuario;
                this.saveRecorrido.sCodEstado = this.forma.controls.estado.value;
                this.saveRecorrido.sCodRecorrido = this.forma.controls.codRecorrido.value;
                this.saveRecorrido.sCodSucusal = this.forma.controls.codSucursal.value;
                this.saveRecorrido.sDescripcion = this.forma.controls.desRecorrido.value;
                this.saveRecorrido.sDia = this.forma.controls.diaRecorrido.value;
                this.saveRecorrido.sPatente = this.forma.controls.patente.value;
                this.recorridoService.saveRecorridos(this.saveRecorrido)
                    .subscribe(function (data) {
                    if (data) {
                        if (data.error.codError === null || data.error.codError !== 0) {
                            _this.loader.hide();
                            //swal('Atención', 'Ha ocurrido un error inesperado, intente nuevamente', 'error');
                            swal('Atención', data.error.msjError, 'error');
                        }
                        else {
                            if (data.error.codError === 0) {
                                _this.loader.hide();
                                swal('Bien', 'Los datos han sido ingresados satisfactoriamente.', 'success');
                                _this.forma.reset();
                                _this.setDataRecorrido();
                            }
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
            }
        }
        else {
            swal('Atención', 'Existen campos requeridos no ingresados', 'error');
            if (!this.forma.controls.codRecorrido.valid) {
                $('[name=codRecorrido]').addClass('error-form');
            }
            else {
                $('[name=codRecorrido]').removeClass('error-form');
            }
            if (!this.forma.controls.desRecorrido.valid) {
                $('[name=desRecorrido]').addClass('error-form');
            }
            else {
                $('[name=desRecorrido]').removeClass('error-form');
            }
            if (!this.forma.controls.codSucursal.valid) {
                $('[name=codSucursal]').addClass('error-form');
            }
            else {
                $('[name=codSucursal]').removeClass('error-form');
            }
            if (!this.forma.controls.diaRecorrido.valid) {
                $('[name=diaRecorrido]').addClass('error-form');
            }
            else {
                $('[name=diaRecorrido]').removeClass('error-form');
            }
            if (!this.forma.controls.nombreTransportista.valid) {
                $('[name=nombreTransportista]').addClass('error-form');
            }
            else {
                $('[name=nombreTransportista]').removeClass('error-form');
            }
            if (!this.forma.controls.patente.valid) {
                $('[name=patente]').addClass('error-form');
            }
            else {
                $('[name=patente]').removeClass('error-form');
            }
            if (!this.forma.controls.nobreChofer.valid) {
                $('[name=nobreChofer]').addClass('error-form');
            }
            else {
                $('[name=nobreChofer]').removeClass('error-form');
            }
            if (!this.forma.controls.volumen.valid) {
                $('[name=volumen]').addClass('error-form');
            }
            else {
                $('[name=volumen]').removeClass('error-form');
            }
            if (!this.forma.controls.carga.valid) {
                $('[name=carga]').addClass('error-form');
            }
            else {
                $('[name=carga]').removeClass('error-form');
            }
            if (!this.forma.controls.estado.valid) {
                $('[name=estado]').addClass('error-form');
            }
            else {
                $('[name=estado]').removeClass('error-form');
            }
        }
    };
    DetalleRecorridoComponent.prototype.volver = function () {
        console.log('CHAO');
        this.recorridoService.selectedRecorrido = undefined;
        this.tabs = 1;
        this.router.navigate(['/administracionOperativa/recorridos']);
    };
    DetalleRecorridoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalleRecorrido',
            template: __webpack_require__(/*! ./detalleRecorrido.component.html */ "./src/app/routes/administracionOperativa/recorrido/detalleRecorrido/detalleRecorrido.component.html"),
            styles: [__webpack_require__(/*! ./detalleRecorrido.component.scss */ "./src/app/routes/administracionOperativa/recorrido/detalleRecorrido/detalleRecorrido.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__["ConsultasService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_9__["AdministracionOperativaService"]])
    ], DetalleRecorridoComponent);
    return DetalleRecorridoComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionOperativa/recorrido/recorrido.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/recorrido/recorrido.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3>Recorridos</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">C&oacute;digo</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"codRecorrido\" name=\"codRecorrido\" id=\"codRecorrido\" class=\"form-control\" type=\"number\" maxlength=\"8\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Descripci&oacute;n</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input formControlName=\"descripcion\" name=\"descripcion\" id=\"descripcion\" class=\"form-control\" type=\"text\" maxlength=\"100\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">D&iacute;a</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"diasRecorridos\" name=\"diasRecorridos\">\r\n                          <option *ngFor=\"let userDias of daiasRecorridos\" [ngValue]=\"userDias.codDia\">{{userDias.descEstado}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                        <button class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"crearRecorrido()\">Agregar</button>\r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                        <button class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"buscar()\">Buscar</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\">C&oacute;digo</th>\r\n                        <th scope=\"col\">Descripci&oacute;n</th>\r\n                        <th nowrap scope=\"col\">D&iacute;a</th>\r\n                        <th scope=\"col\">Chofer</th>\r\n                        <th scope=\"col\">Vol.(m3)</th>\r\n                        <th scope=\"col\">Carga(Ton)</th>\r\n                        <th scope=\"col\">Cant.Facturas</th>\r\n                        <th scope=\"col\">Ver</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let recorrido of recorridos | paginate: {itemsPerPage: 7, currentPage: pActualBuscaRecorridos, id: 'pageBuscaRecorridos'};\">\r\n                        <td nowrap>{{recorrido.dre_scodrecorrido}}</td>\r\n                        <td nowrap>{{recorrido.dre_sdesrecorrido}}</td>\r\n                        <td nowrap>{{recorrido.dre_sdia | dias}}</td>\r\n                        <td nowrap>{{recorrido.cho_snombre}}</td>\r\n                        <td nowrap>{{recorrido.cam_nvolumen}}</td>\r\n                        <td nowrap>{{recorrido.cam_ncarga}}</td>\r\n                        <td nowrap>{{recorrido.dre_nnumfacturasMax}}</td>\r\n                        <td>\r\n                            <span class=\"table-remove\">\r\n                                <a class=\"text\" (click)=\"editarRecorrido(recorrido)\">\r\n                                    <em class=\"fa fa-search\"></em>\r\n                                </a>\r\n                            </span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <br>\r\n            <div class=\"text-right\">\r\n                <pagination-controls (pageChange)=\"pActualBuscaRecorridos = $event\" id=\"pageBuscaRecorridos\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionOperativa/recorrido/recorrido.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/recorrido/recorrido.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/administracionOperativa/recorrido/recorrido.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/recorrido/recorrido.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RecorridoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecorridoComponent", function() { return RecorridoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
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
var RecorridoComponent = /** @class */ (function () {
    function RecorridoComponent(http, fb, recorridosService, loader, authService, router) {
        this.http = http;
        this.recorridosService = recorridosService;
        this.loader = loader;
        this.authService = authService;
        this.router = router;
        this.daiasRecorridos = [
            {
                codDia: null,
                descEstado: '(Todos)'
            },
            {
                codDia: 'LUNES',
                descEstado: 'Lunes'
            },
            {
                codDia: 'MARTE',
                descEstado: 'Martes'
            },
            {
                codDia: 'MIERC',
                descEstado: 'Miercoles'
            },
            {
                codDia: 'JUEVE',
                descEstado: 'Jueves'
            },
            {
                codDia: 'VIERN',
                descEstado: 'Viernes'
            },
            {
                codDia: 'SABAD',
                descEstado: 'Sabado'
            },
            {
                codDia: 'DOMIN',
                descEstado: 'Domingo'
            }
        ];
        this.datos = [];
        this.user = {};
        this.request = {};
        this.requestdos = {};
        this.recorridos = [];
        this.pActualBuscaRecorridos = 1;
        this.detalleRecorrido = {};
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            codRecorrido: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            diasRecorridos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    RecorridoComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getDatosUser();
        if (this.recorridosService.busquedaRecorrido !== undefined) {
            this.buscar(true);
        }
    };
    RecorridoComponent.prototype.buscar = function (conBusqueda) {
        var _this = this;
        this.loader.show();
        if (conBusqueda) {
            this.request = this.recorridosService.busquedaRecorrido;
            this.forma = this.recorridosService.formaRecorrido;
        }
        else {
            this.request.nRutOperador = this.user.nrutoperador;
            this.request.sCodRecorrido = this.forma.controls.codRecorrido.value;
            this.request.sDesRecorrido = this.forma.controls.descripcion.value;
            this.request.sDia = this.forma.controls.diasRecorridos.value;
            this.recorridosService.busquedaRecorrido = Object.assign({}, this.request);
            this.recorridosService.formaRecorrido = this.forma;
        }
        this.recorridosService.getRecorridos(this.request)
            .subscribe(function (data) {
            _this.loader.hide();
            if (data.recorridosAdministracion === null || data.error.codError !== 0) {
                swal('Atención', data.error.msjError, 'error');
            }
            else {
                if (data.recorridosAdministracion.length === 0 && data.error.codError === 0) {
                    swal('Atención', 'No se encontraron resultados', 'info');
                }
                else {
                    (_this.recorridos = data.recorridosAdministracion);
                }
            }
        }, function (error) {
            _this.loader.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    RecorridoComponent.prototype.editarRecorrido = function (recorrido) {
        var _this = this;
        this.loader.show();
        this.requestdos.nRutOperador = recorrido.dre_nrutoperador;
        this.requestdos.sCodRecorrido = recorrido.dre_scodrecorrido;
        this.recorridosService.getDetallesRecorridos(this.requestdos)
            .subscribe(function (data) {
            if (data.definicionRecorrido != null) {
                (_this.detalleRecorrido = data.definicionRecorrido);
                _this.recorridosService.selectedRecorrido = Object.assign({}, _this.detalleRecorrido[0]);
            }
            else {
                swal('Atención', data.error.msjError, 'error');
                _this.loader.hide();
            }
            if (_this.recorridosService.selectedRecorrido !== undefined) {
                _this.router.navigate(['/administracionOperativa/detalleRecorridos']);
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
    RecorridoComponent.prototype.crearRecorrido = function () {
        this.recorridosService.selectedRecorrido = undefined;
        this.router.navigate(['/administracionOperativa/detalleRecorridos']);
    };
    RecorridoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recorrido',
            template: __webpack_require__(/*! ./recorrido.component.html */ "./src/app/routes/administracionOperativa/recorrido/recorrido.component.html"),
            styles: [__webpack_require__(/*! ./recorrido.component.scss */ "./src/app/routes/administracionOperativa/recorrido/recorrido.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_6__["AdministracionOperativaService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RecorridoComponent);
    return RecorridoComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionOperativa/rutas/detalleRutas/detalleRutas.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/rutas/detalleRutas/detalleRutas.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3>Detalles</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">C&oacute;digo</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"rut_scodruta\" name=\"rut_scodruta\" class=\"form-control\" type=\"text\" maxlength=\"5\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Descripci&oacute;n</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <input formControlName=\"rut_sdesruta\" name=\"rut_sdesruta\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">D&iacute;a</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"rut_sdia\" name=\"rut_sdia\">\r\n                        <option *ngFor=\"let userDias of daiasRecorridos\" [ngValue]=\"userDias.rut_sdia\">{{userDias.descEstado}}</option>\r\n                    </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Recorrido</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"rut_scodrecorrido\" name=\"rut_scodrecorrido\" class=\"form-control\" type=\"text\" (change)=\"validaRecorridos()\" />\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"dre_sdesrecorrido\" name=\"dre_sdesrecorrido\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalRecorridos()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                          </button>\r\n                    </div>\r\n\r\n                    <label class=\"col-sm-1 control-label\">Territorio</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"ter_scodterritorio\" name=\"ter_scodterritorio\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"ter_sdesterritorio\" name=\"ter_sdesterritorio\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalTerritorios()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                          </button>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Volumen(m3)</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"cam_nvolumen\" name=\"cam_nvolumen\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Carga(ton)</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"cam_ncarga\" name=\"cam_ncarga\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Cant.Max. Facturas</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"dre_nnumfacturasmax\" name=\"dre_nnumfacturasmax\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Estado</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"rut_scodestado\" name=\"rut_scodestado\">\r\n                        <option *ngFor=\"let userEstado of estado\" [ngValue]=\"userEstado.rut_scodestado\">{{userEstado.descEstado}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Cuadrante</label>\r\n                    <div class=\"col-sm-4\">\r\n                        <input formControlName=\"rut_sdescuadrante\" name=\"rut_sdescuadrante\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Tarifa</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"rut_nidtarifa\" name=\"rut_nidtarifa\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        <input formControlName=\"ttr_nkilometrosdesde\" name=\"ttr_nkilometrosdesde\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalTarifas()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                          </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row pull-right wd-md\">\r\n                    <div class=\"col-sm-6\">\r\n                        <button class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"guardarRuta()\">Guardar</button>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <button class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"volver()\">Volver</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionOperativa/rutas/detalleRutas/detalleRutas.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/rutas/detalleRutas/detalleRutas.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/administracionOperativa/rutas/detalleRutas/detalleRutas.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/rutas/detalleRutas/detalleRutas.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DetalleRutasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleRutasComponent", function() { return DetalleRutasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _commonPopUp_recorridosGeneralPopUp_recorridosGeneralPopUp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../commonPopUp/recorridosGeneralPopUp/recorridosGeneralPopUp.component */ "./src/app/routes/commonPopUp/recorridosGeneralPopUp/recorridosGeneralPopUp.component.ts");
/* harmony import */ var _commonPopUp_zonasTodasPopUp_zonasTodasPopUp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../commonPopUp/zonasTodasPopUp/zonasTodasPopUp.component */ "./src/app/routes/commonPopUp/zonasTodasPopUp/zonasTodasPopUp.component.ts");
/* harmony import */ var _commonPopUp_tarifasPopUp_tarifasPopUp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../commonPopUp/tarifasPopUp/tarifasPopUp.component */ "./src/app/routes/commonPopUp/tarifasPopUp/tarifasPopUp.component.ts");
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
var DetalleRutasComponent = /** @class */ (function () {
    function DetalleRutasComponent(http, fb, modalService, authService, loader, router, rutasService, consultasService) {
        this.http = http;
        this.modalService = modalService;
        this.authService = authService;
        this.loader = loader;
        this.router = router;
        this.rutasService = rutasService;
        this.consultasService = consultasService;
        this.pageActual = 1;
        this.user = {};
        this.saveRuta = {};
        this.consultaRuta = {};
        this.requestdos = {};
        this.longitud_rutTransporte2 = 0;
        this.detallesTransporte = {};
        this.rutasRecorridos = [];
        this.estado = [
            {
                rut_scodestado: 'VIGEN',
                descEstado: 'Vigente'
            },
            {
                rut_scodestado: 'NOVIG',
                descEstado: 'No Vigente'
            }
        ];
        this.daiasRecorridos = [
            {
                rut_sdia: 'LUNES',
                descEstado: 'Lunes'
            },
            {
                rut_sdia: 'MARTE',
                descEstado: 'Martes'
            },
            {
                rut_sdia: 'MIERC',
                descEstado: 'Miercoles'
            },
            {
                rut_sdia: 'JUEVE',
                descEstado: 'Jueves'
            },
            {
                rut_sdia: 'VIERN',
                descEstado: 'Viernes'
            },
            {
                rut_sdia: 'SABAD',
                descEstado: 'Sabado'
            },
            {
                rut_sdia: 'DOMIN',
                descEstado: 'Domingo'
            }
        ];
        this.datos = [];
        this.idTerritorio = 0;
        this.idTarifa = 0;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            rut_scodruta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            rut_sdesruta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            rut_sdia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            rut_scodrecorrido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            dre_sdesrecorrido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ter_scodterritorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ter_sdesterritorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cam_nvolumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cam_ncarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            dre_nnumfacturasmax: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            rut_scodestado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            rut_sdescuadrante: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            ttr_nkilometrosdesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ttr_nkilometroshasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            ttr_ntoneladasdesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            ttr_ntoneladashasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            rut_nrutoperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            rut_nidtarifa: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            rut_nidterritorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sdestiporecorrido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            suc_sdescsucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            dre_scodsucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.nuevo = 1;
    }
    DetalleRutasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subData = this.rutasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.subData2 = this.consultasService.datosGeo$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.user = this.authService.getDatosUser();
        this.setDataRutas();
    };
    DetalleRutasComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
        if (this.subData2 !== undefined) {
            this.subData2.unsubscribe();
        }
    };
    DetalleRutasComponent.prototype.setDataRutas = function () {
        if (this.rutasService.selectedRutas === undefined) {
            console.log('es nuevo');
            this.nuevo = 1;
            this.forma.controls.rut_nrutoperador.setValue(this.user.nrutoperador);
        }
        else {
            this.nuevo = 0;
            this.forma.setValue(this.rutasService.selectedRutas);
            console.log(this.rutasService.selectedRutas);
            /* this.tarifaConsolidada = (this.rutasService.selectedRutas.ttr_nkilometrosdesde +
              this.rutasService.selectedRutas.ttr_nkilometroshasta + 'km diarios' + '/' +
              this.rutasService.selectedRutas.ttr_ntoneladasdesde + this.rutasService.selectedRutas.ttr_ntoneladashasta + 'toneladas'); */
            this.tarifaConsolidada = this.rutasService.selectedRutas.ttr_nkilometrosdesde + "-" + this.rutasService.selectedRutas.ttr_nkilometroshasta + " km diarios / " + this.rutasService.selectedRutas.ttr_ntoneladasdesde + "-" + this.rutasService.selectedRutas.ttr_ntoneladashasta + " toneladas";
            this.forma.controls.ttr_nkilometrosdesde.setValue(this.tarifaConsolidada);
            this.forma.controls.rut_scodruta.disable();
            this.forma.controls.rut_nidtarifa.setValue(this.rutasService.selectedRutas.sdestiporecorrido);
            this.idTerritorio = this.rutasService.selectedRutas.rut_nidterritorio;
            this.idTarifa = this.rutasService.selectedRutas.rut_nidtarifa;
        }
    };
    DetalleRutasComponent.prototype.openModalRecorridos = function () {
        this.origen = 'recorridosRutas';
        var initialState = {
            titulo: 'Recorridos',
            origen: 'recorridosRutas'
        };
        this.recorridosRutaModal = this.modalService.show(_commonPopUp_recorridosGeneralPopUp_recorridosGeneralPopUp_component__WEBPACK_IMPORTED_MODULE_9__["RecorridosGeneralPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleRutasComponent.prototype.validaRecorridos = function () {
        var _this = this;
        this.loader.show();
        if (this.forma.controls.rut_scodrecorrido.value === '') {
            this.loader.hide();
            this.forma.controls.rut_scodrecorrido.setValue('');
            this.forma.controls.dre_sdesrecorrido.setValue('');
        }
        else {
            this.requestdos.nRutOperador = Number(this.user.nrutoperador);
            this.requestdos.sCodRecorrido = this.forma.controls.rut_scodrecorrido.value;
            this.rutasService.getDetallesRecorridos(this.requestdos)
                .subscribe(function (data) {
                console.log(data);
                _this.loader.hide();
                if (data) {
                    if (data.error.codError !== 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.definicionRecorrido;
                        if (_this.datos.length > 0 && _this.datos[0].dre_scodestado === 'VIGEN') {
                            _this.forma.controls.dre_sdesrecorrido.setValue(_this.datos[0].dre_sdesrecorrido);
                        }
                        else {
                            _this.forma.controls.rut_scodrecorrido.setValue('');
                            _this.forma.controls.dre_sdesrecorrido.setValue('');
                            swal('Atención', 'No Existe este Recorrido', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.loader.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    DetalleRutasComponent.prototype.openModalTerritorios = function () {
        this.origen = 'territorios';
        var initialState = {
            parametro: this.forma.controls.rut_nrutoperador.value,
            origen: 'territorios'
        };
        this.territoriosTodosModal = this.modalService.show(_commonPopUp_zonasTodasPopUp_zonasTodasPopUp_component__WEBPACK_IMPORTED_MODULE_10__["ZonasTodasPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleRutasComponent.prototype.openModalTarifas = function () {
        this.origen = 'tarifasRutas';
        var initialState = {
            titulo: 'Tarifas',
            origen: 'tarifasRutas'
        };
        this.tarifasRutasModal = this.modalService.show(_commonPopUp_tarifasPopUp_tarifasPopUp_component__WEBPACK_IMPORTED_MODULE_11__["TarifasPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleRutasComponent.prototype.setData = function (resData) {
        if (resData !== 0) {
            switch (this.origen) {
                case 'recorridosRutas': {
                    this.forma.controls.rut_scodrecorrido.setValue(resData.dre_scodrecorrido);
                    this.forma.controls.dre_sdesrecorrido.setValue(resData.dre_sdesrecorrido);
                    this.forma.controls.cam_nvolumen.setValue(resData.cam_nvolumen);
                    this.forma.controls.cam_ncarga.setValue(resData.cam_ncarga);
                    this.forma.controls.dre_nnumfacturasmax.setValue(resData.dre_nnumfacturasMax);
                    break;
                }
                case 'territorios': {
                    this.idTerritorio = resData.ter_nidterritorio;
                    this.forma.controls.ter_scodterritorio.setValue(resData.ter_scodterritorio);
                    this.forma.controls.ter_sdesterritorio.setValue(resData.ter_sdesterritorio);
                    break;
                }
                case 'tarifasRutas': {
                    this.idTarifa = resData.ttr_nidtarifa;
                    this.forma.controls.rut_nidtarifa.setValue(resData.sdestiporecorrido);
                    /*  this.tarifaConsolidada = (resData.ttr_nkilometrosdesde + resData.ttr_nkilometroshasta + 'km diarios' + '/' +
                     resData.ttr_ntoneladasdesde + resData.ttr_ntoneladashasta + 'toneladas'); */
                    this.tarifaConsolidada =
                        resData.ttr_nkilometrosdesde + "-" + resData.ttr_nkilometroshasta + " km diarios /" + resData.ttr_ntoneladasdesde + "-" + resData.ttr_ntoneladashasta + " toneladas";
                    this.forma.controls.ttr_nkilometrosdesde.setValue(this.tarifaConsolidada);
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    DetalleRutasComponent.prototype.guardarRuta = function () {
        var _this = this;
        if (this.forma.valid) {
            this.loader.show();
            if (this.nuevo === 1) {
                if (this.forma.controls.rut_nidtarifa.value === '' || this.forma.controls.rut_nidtarifa.value === undefined) {
                    this.saveRuta.nIdTarifa = 0;
                }
                else {
                    this.saveRuta.nIdTarifa = Number(this.idTarifa);
                }
                this.saveRuta.nIdTerritorio = Number(this.idTerritorio);
                this.saveRuta.nRunUsuarioCrea = Number(this.user.nrunusuario);
                this.saveRuta.nRutOperador = Number(this.forma.controls.rut_nrutoperador.value);
                this.saveRuta.sCodEstado = this.forma.controls.rut_scodestado.value;
                this.saveRuta.sCodRecorrido = this.forma.controls.rut_scodrecorrido.value;
                this.saveRuta.sCodRuta = this.forma.controls.rut_scodruta.value;
                this.saveRuta.sDesCuadrante = this.forma.controls.rut_sdescuadrante.value;
                this.saveRuta.sDesRuta = this.forma.controls.rut_sdesruta.value;
                this.saveRuta.sDia = this.forma.controls.rut_sdia.value;
                this.rutasService.saveDefinicionRutas(this.saveRuta)
                    .subscribe(function (data) {
                    if (data.error.codError === 0) {
                        _this.loader.hide();
                        swal('Bien', 'Los datos han sido ingresados satisfactoriamente.', 'success');
                        _this.forma.reset();
                        _this.setDataRutas();
                    }
                    else {
                        swal('Atención', data.error.msjError, 'error');
                        _this.loader.hide();
                    }
                }, function (error) {
                    _this.loader.hide();
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                });
            }
            else {
                this.saveRuta.nIdTarifa = Number(this.idTarifa);
                this.saveRuta.nIdTerritorio = Number(this.idTerritorio);
                this.saveRuta.nRunActualiza = Number(this.user.nrunusuario);
                this.saveRuta.nRutOperador = Number(this.forma.controls.rut_nrutoperador.value);
                this.saveRuta.sCodEstado = this.forma.controls.rut_scodestado.value;
                this.saveRuta.sCodRecorrido = this.forma.controls.rut_scodrecorrido.value;
                this.saveRuta.sCodRuta = this.forma.controls.rut_scodruta.value;
                this.saveRuta.sDesCuadrante = this.forma.controls.rut_sdescuadrante.value;
                this.saveRuta.sDesRuta = this.forma.controls.rut_sdesruta.value;
                this.saveRuta.sDia = this.forma.controls.rut_sdia.value;
                this.rutasService.updateDefinicionRutas(this.saveRuta)
                    .subscribe(function (data) {
                    if (data.error.codError === 0) {
                        _this.loader.hide();
                        swal('Bien', 'Los datos han sido ingresados satisfactoriamente.', 'success');
                        _this.rutasService.selectedRutas = undefined;
                        _this.nuevo = 1;
                        _this.router.navigate(['/administracionOperativa/rutas']);
                    }
                    else {
                        swal('Atención', data.error.msjError, 'error');
                        _this.loader.hide();
                    }
                }, function (error) {
                    _this.loader.hide();
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                });
            }
        }
        else {
            swal('Atención', 'Existen campos requeridos no ingresados', 'error');
            if (!this.forma.controls.rut_scodruta.valid) {
                $('[name=rut_scodruta]').addClass('error-form');
            }
            else {
                $('[name=rut_scodruta]').removeClass('error-form');
            }
            if (!this.forma.controls.rut_sdesruta.valid) {
                $('[name=rut_sdesruta]').addClass('error-form');
            }
            else {
                $('[name=rut_sdesruta]').removeClass('error-form');
            }
            if (!this.forma.controls.rut_sdia.valid) {
                $('[name=rut_sdia]').addClass('error-form');
            }
            else {
                $('[name=rut_sdia]').removeClass('error-form');
            }
            if (!this.forma.controls.rut_scodrecorrido.valid) {
                $('[name=rut_scodrecorrido]').addClass('error-form');
            }
            else {
                $('[name=rut_scodrecorrido]').removeClass('error-form');
            }
            if (!this.forma.controls.dre_sdesrecorrido.valid) {
                $('[name=dre_sdesrecorrido]').addClass('error-form');
            }
            else {
                $('[name=dre_sdesrecorrido]').removeClass('error-form');
            }
            if (!this.forma.controls.ter_scodterritorio.valid) {
                $('[name=ter_scodterritorio]').addClass('error-form');
            }
            else {
                $('[name=ter_scodterritorio]').removeClass('error-form');
            }
            if (!this.forma.controls.ter_sdesterritorio.valid) {
                $('[name=ter_sdesterritorio]').addClass('error-form');
            }
            else {
                $('[name=ter_sdesterritorio]').removeClass('error-form');
            }
            if (!this.forma.controls.cam_nvolumen.valid) {
                $('[name=cam_nvolumen]').addClass('error-form');
            }
            else {
                $('[name=cam_nvolumen]').removeClass('error-form');
            }
            if (!this.forma.controls.cam_ncarga.valid) {
                $('[name=cam_ncarga]').addClass('error-form');
            }
            else {
                $('[name=cam_ncarga]').removeClass('error-form');
            }
            if (!this.forma.controls.rut_scodestado.valid) {
                $('[name=rut_scodestado]').addClass('error-form');
            }
            else {
                $('[name=rut_scodestado]').removeClass('error-form');
            }
        }
        this.loader.hide();
    };
    DetalleRutasComponent.prototype.volver = function () {
        console.log('CHAO');
        this.rutasService.selectedRutas = undefined;
        this.nuevo = 1;
        this.router.navigate(['/administracionOperativa/rutas']);
    };
    DetalleRutasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalleRutas',
            template: __webpack_require__(/*! ./detalleRutas.component.html */ "./src/app/routes/administracionOperativa/rutas/detalleRutas/detalleRutas.component.html"),
            styles: [__webpack_require__(/*! ./detalleRutas.component.scss */ "./src/app/routes/administracionOperativa/rutas/detalleRutas/detalleRutas.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_8__["AdministracionOperativaService"], _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__["ConsultasService"]])
    ], DetalleRutasComponent);
    return DetalleRutasComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionOperativa/rutas/rutas.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/rutas/rutas.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3>Rutas</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n\r\n                    <div class=\"col-sm-2 p-0\">\r\n                        <label class=\"col-sm-4 control-label\">C&oacute;digo</label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input formControlName=\"sCodRuta\" name=\"sCodRuta\" class=\"form-control\" type=\"text\" maxlength=\"5\" />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-3 p-0\">\r\n                        <label class=\"col-sm-4 control-label\">Descripci&oacute;n</label>\r\n                        <div class=\"col-sm-8 p-0\">\r\n                            <input formControlName=\"sDescripcion\" name=\"sDescripcion\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-5 pl-0\">\r\n                        <label class=\"col-sm-2 control-label\">Recorrido</label>\r\n                        <div class=\"col-sm-3\">\r\n                            <input formControlName=\"sCodRecorrido\" name=\"sCodRecorrido\" class=\"form-control\" type=\"text\" (change)=\"validaRecorridos()\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6 p-0\">\r\n                            <input formControlName=\"recorrido\" name=\"recorrido\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalRecorridos()\">\r\n                                <em class=\"icon-magnifier\"></em>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-2 p-0\">\r\n                        <div class=\"col-sm-5\">\r\n                            <button name=\"espera\" class=\"btn btn-oval btn\" (click)=\"crearRutas()\" type=\"button\">Agregar</button>\r\n                        </div>\r\n                        <div class=\"col-sm-6 pl-5\">\r\n                            <button name=\"espera\" class=\"btn btn-oval btn\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\">C&oacute;digo</th>\r\n                        <th scope=\"col\">Descripci&oacute;n</th>\r\n                        <th nowrap scope=\"col\">Recorrido</th>\r\n                        <th scope=\"col\">Ver</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let ruta of rutas | paginate: {itemsPerPage: 7, currentPage: pActualBuscaRutas, id: 'pageBuscaRutas'};\">\r\n                        <td nowrap>{{ruta.rut_scodruta}}</td>\r\n                        <td nowrap>{{ruta.rut_sdesruta}}</td>\r\n                        <td nowrap>{{ruta.dre_sdesrecorrido}}</td>\r\n                        <td>\r\n                            <span class=\"table-remove\">\r\n                                <a class=\"text\" (click)=\"editarRuta(ruta)\">\r\n                                    <em class=\"fa fa-search\"></em>\r\n                                </a>\r\n                            </span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <br>\r\n            <div class=\"text-right\">\r\n                <pagination-controls (pageChange)=\"pActualBuscaRutas = $event\" id=\"pageBuscaRutas\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionOperativa/rutas/rutas.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/rutas/rutas.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/administracionOperativa/rutas/rutas.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/rutas/rutas.component.ts ***!
  \*************************************************************************/
/*! exports provided: RutasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutasComponent", function() { return RutasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _commonPopUp_recorridosGeneralPopUp_recorridosGeneralPopUp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../commonPopUp/recorridosGeneralPopUp/recorridosGeneralPopUp.component */ "./src/app/routes/commonPopUp/recorridosGeneralPopUp/recorridosGeneralPopUp.component.ts");
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
var RutasComponent = /** @class */ (function () {
    function RutasComponent(http, fb, modalService, authService, loader, router, rutasService) {
        this.http = http;
        this.modalService = modalService;
        this.authService = authService;
        this.loader = loader;
        this.router = router;
        this.rutasService = rutasService;
        this.pActualBuscaRutas = 1;
        this.user = {};
        this.rutas = [];
        this.request = {};
        this.requestdos = {};
        this.detalleRutas = {};
        this.datos = [];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            sCodRuta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sDescripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sCodRecorrido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            recorrido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            nRutOperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    RutasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.getDatosUser();
        if (this.rutasService.busquedaRutas !== undefined) {
            this.buscar(true);
        }
        this.subData = this.rutasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    RutasComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
    };
    RutasComponent.prototype.openModalRecorridos = function () {
        this.origen = 'recorridosRutas';
        var initialState = {
            titulo: 'Recorridos',
            origen: 'recorridosRutas'
        };
        this.recorridosRutaModal = this.modalService.show(_commonPopUp_recorridosGeneralPopUp_recorridosGeneralPopUp_component__WEBPACK_IMPORTED_MODULE_8__["RecorridosGeneralPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    RutasComponent.prototype.validaRecorridos = function () {
        var _this = this;
        this.loader.show();
        if (this.forma.controls.sCodRecorrido.value === '') {
            this.loader.hide();
            this.forma.controls.sCodRecorrido.setValue('');
            this.forma.controls.recorrido.setValue('');
        }
        else {
            this.requestdos.nRutOperador = Number(this.user.nrutoperador);
            this.requestdos.sCodRecorrido = this.forma.controls.sCodRecorrido.value;
            this.rutasService.getDetallesRecorridos(this.requestdos)
                .subscribe(function (data) {
                _this.loader.hide();
                if (data) {
                    if (data.error.codError !== 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.definicionRecorrido;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.recorrido.setValue(_this.datos[0].dre_sdesrecorrido);
                        }
                        else {
                            _this.forma.controls.sCodRecorrido.setValue('');
                            _this.forma.controls.recorrido.setValue('');
                            swal('Atención', 'No Existe este Recorrido', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.loader.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    RutasComponent.prototype.setData = function (resData) {
        if (resData !== 0) {
            switch (this.origen) {
                case 'recorridosRutas': {
                    this.forma.controls.sCodRecorrido.setValue(resData.dre_scodrecorrido);
                    this.forma.controls.recorrido.setValue(resData.dre_sdesrecorrido);
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    RutasComponent.prototype.buscar = function (conBusqueda) {
        var _this = this;
        this.loader.show();
        if (conBusqueda) {
            this.request = this.rutasService.busquedaRutas;
            this.forma = this.rutasService.formaRutas;
        }
        else {
            this.forma.controls.nRutOperador.setValue(Number(this.user.nrutoperador));
            this.request = this.forma.value;
            this.rutasService.busquedaRutas = Object.assign({}, this.request);
            this.rutasService.formaRutas = this.forma;
        }
        this.rutasService.getRutas(this.request)
            .subscribe(function (data) {
            _this.loader.hide();
            if (data.rutasAdministracion.length === 0 && data.error.codError === 0) {
                swal('Atención', 'No se encontraron resultados', 'info');
            }
            else {
                if (data.rutasAdministracion === null) {
                    swal('Atención', data.error.msjError, 'error');
                }
                else {
                    (_this.rutas = data.rutasAdministracion);
                }
            }
            if (data.error.codError !== 0) {
                swal('Atención', data.error.msjError, 'error');
            }
        }, function (error) {
            _this.loader.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    RutasComponent.prototype.editarRuta = function (ruta) {
        var _this = this;
        this.loader.show();
        this.requestdos.nRutOperador = ruta.rut_nrutoperador;
        this.requestdos.sCodRuta = ruta.rut_scodruta;
        this.rutasService.getDetallesRutas(this.requestdos)
            .subscribe(function (data) {
            _this.loader.hide();
            if (data.rutas != null) {
                (_this.detalleRutas = data.rutas);
                _this.rutasService.selectedRutas = Object.assign({}, _this.detalleRutas[0]);
                if (_this.rutasService.selectedRutas !== undefined) {
                    _this.router.navigate(['/administracionOperativa/detalleRutas']);
                }
                else {
                    _this.loader.hide();
                }
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            _this.loader.hide();
        });
    };
    RutasComponent.prototype.crearRutas = function () {
        this.rutasService.selectedRutas = undefined;
        this.router.navigate(['/administracionOperativa/detalleRutas']);
    };
    RutasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rutas',
            template: __webpack_require__(/*! ./rutas.component.html */ "./src/app/routes/administracionOperativa/rutas/rutas.component.html"),
            styles: [__webpack_require__(/*! ./rutas.component.scss */ "./src/app/routes/administracionOperativa/rutas/rutas.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_7__["AdministracionOperativaService"]])
    ], RutasComponent);
    return RutasComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionOperativa/sucursal/detalleSucursal/detalleSucursal.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/sucursal/detalleSucursal/detalleSucursal.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3>Sucursales</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-sm-12\">\r\n                        <label class=\"col-sm-1 control-label\">C&oacute;digo</label>\r\n                        <div class=\"col-sm-2\">\r\n                            <input formControlName=\"suc_scodsucursal\" name=\"suc_scodsucursal\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <label class=\"col-sm-1 control-label\">Nombre</label>\r\n                        <div class=\"col-sm-5\">\r\n                            <input formControlName=\"suc_sdescsucursal\" name=\"suc_sdescsucursal\" class=\"form-control\" type=\"text\" maxlength=\"100\" />\r\n                        </div>\r\n                        <label class=\"col-sm-1 control-label\">Estado</label>\r\n                        <div class=\"col-sm-2\">\r\n                            <select class=\"form-control pv-0\" formControlName=\"suc_scodestado\" name=\"suc_scodestado\">\r\n                            <option *ngFor=\"let userEstado of estado\" [ngValue]=\"userEstado.suc_scodestado\">{{userEstado.descEstado}}</option>\r\n                        </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-12\">\r\n                        <label class=\"col-sm-1 control-label\">Direcci&oacute;n</label>\r\n                        <div class=\"col-sm-3\">\r\n                            <input formControlName=\"suc_sdireccion\" name=\"suc_sdireccion\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <label class=\"col-sm-1 control-label\">Regi&oacute;n</label>\r\n                        <div class=\"col-sm-2\">\r\n                            <input formControlName=\"suc_sdesregion\" name=\"suc_sdesregion\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalRegiones()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                        </button>\r\n                        </div>\r\n                        <label class=\"col-sm-1 control-label\">Ciudad</label>\r\n                        <div class=\"col-sm-2\">\r\n                            <input formControlName=\"suc_sdesciudad\" name=\"suc_sdesciudad\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCiudades()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                        </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-12\">\r\n                        <label class=\"col-sm-1 control-label\">Tel&eacute;fono</label>\r\n                        <div class=\"col-sm-2\">\r\n                            <input formControlName=\"suc_stelefono\" name=\"suc_stelefono\" class=\"form-control\" type=\"number\" />\r\n                        </div>\r\n                        <label class=\"col-sm-1 control-label\">Celular</label>\r\n                        <div class=\"col-sm-2\">\r\n                            <input formControlName=\"suc_smovil\" name=\"suc_smovil\" class=\"form-control\" type=\"number\" />\r\n                        </div>\r\n                        <label class=\"col-sm-1 control-label\">Responsable</label>\r\n                        <div class=\"col-sm-5\">\r\n                            <input formControlName=\"suc_sresponsable\" name=\"suc_sresponsable\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"row pull-left ml-2\">\r\n                        <div class=\"col-sm-6 mr-2\">\r\n                            <button class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"guardarSucursal()\">Guardar</button>\r\n                        </div>\r\n                        <div class=\"col-sm-5\">\r\n                            <button class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"volver()\">Volver</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"row mt-2\" *ngIf=\"tabs===2\">\r\n            <div class=\"col-sm-12\">\r\n                <app-navSucursales></app-navSucursales>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionOperativa/sucursal/detalleSucursal/detalleSucursal.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/sucursal/detalleSucursal/detalleSucursal.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/administracionOperativa/sucursal/detalleSucursal/detalleSucursal.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/sucursal/detalleSucursal/detalleSucursal.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DetalleSucursalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleSucursalComponent", function() { return DetalleSucursalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../commonPopUp/utilGeoPopUp/utilGeoPopUp.component */ "./src/app/routes/commonPopUp/utilGeoPopUp/utilGeoPopUp.component.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../commonPopUp/sucursalesPopUp/sucursalesPopUp.component */ "./src/app/routes/commonPopUp/sucursalesPopUp/sucursalesPopUp.component.ts");
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
var DetalleSucursalComponent = /** @class */ (function () {
    function DetalleSucursalComponent(http, fb, modalService, setearDatos, authService, loader, router, datePipe, sucursalService) {
        this.http = http;
        this.modalService = modalService;
        this.setearDatos = setearDatos;
        this.authService = authService;
        this.loader = loader;
        this.router = router;
        this.datePipe = datePipe;
        this.sucursalService = sucursalService;
        this.estado = [
            {
                suc_scodestado: 'VIGEN',
                descEstado: 'Vigente'
            },
            {
                suc_scodestado: 'NOVIG',
                descEstado: 'No Vigente'
            }
        ];
        this.tipo = [
            {
                bod_scodtipo: 'ALMAC',
                descTipo: 'ALMACENAMIENTO'
            },
            {
                bod_scodtipo: 'CENTR',
                descTipo: 'CENTRAL'
            }
        ];
        this.user = {};
        this.saveSucursales = {};
        this.requestdos = {};
        this.longitud_rutTransporte2 = 0;
        this.detalleSucursales = {};
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            suc_scodsucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            suc_sdescsucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            suc_sdireccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            suc_scodregion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            suc_sdesregion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            suc_scodciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            suc_sdesciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            suc_stelefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            suc_smovil: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            suc_sresponsable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            suc_scodestado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.tabs = 1;
    }
    DetalleSucursalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subData = this.setearDatos.datosGeo$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.subData2 = this.sucursalService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.user = this.authService.getDatosUser();
        this.setDataSucursal();
    };
    DetalleSucursalComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
        if (this.subData2 !== undefined) {
            this.subData2.unsubscribe();
        }
    };
    DetalleSucursalComponent.prototype.setDataSucursal = function () {
        if (this.sucursalService.selectedSucursal === undefined) {
            console.log('es nuevo');
            this.edit = 'N';
            this.tabs = 1;
        }
        else {
            this.forma.setValue(this.sucursalService.selectedSucursal);
            this.edit = 'S';
            this.tabs = 2;
            this.forma.controls.suc_scodsucursal.disable();
        }
    };
    DetalleSucursalComponent.prototype.openModalRegiones = function () {
        this.origen = 'region';
        var initialState = {
            titulo: 'Region',
            origen: 'region'
        };
        this.utilGeoModal = this.modalService.show(_commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_9__["UtilGeoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleSucursalComponent.prototype.openModalCiudades = function () {
        this.origen = 'ciudad';
        var initialState = {
            titulo: 'Ciudad',
            origen: 'ciudad',
            regionSeleccionada: this.territorioSeleccionado
        };
        this.utilGeoModal = this.modalService.show(_commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_9__["UtilGeoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleSucursalComponent.prototype.openModalSucursales = function () {
        this.origen = 'sucursales';
        var initialState = {
            titulo: 'Sucursales',
            origen: 'sucursales'
        };
        this.sucursalModal = this.modalService.show(_commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_11__["SucursalesPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleSucursalComponent.prototype.setData = function (resData) {
        if (resData !== 0) {
            switch (this.origen) {
                case 'region': {
                    this.forma.controls.suc_scodregion.setValue(resData.par_codparametro01);
                    this.forma.controls.suc_sdesregion.setValue(resData.par_deslargo01);
                    this.forma.controls.suc_scodciudad.setValue('');
                    this.forma.controls.suc_sdesciudad.setValue('');
                    this.territorioSeleccionado = resData.par_codparametro01;
                    break;
                }
                case 'ciudad': {
                    this.forma.controls.suc_scodciudad.setValue(resData.par_codparametro01);
                    this.forma.controls.suc_sdesciudad.setValue(resData.par_deslargo01);
                    this.setearDatos.selectedGeo = Object.assign({}, resData);
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    DetalleSucursalComponent.prototype.guardarSucursal = function () {
        var _this = this;
        if (this.forma.valid) {
            $('*').removeClass('error-form');
            this.loader.show();
            this.saveSucursales.codCiudad = this.forma.controls.suc_scodciudad.value;
            this.saveSucursales.codEstado = this.forma.controls.suc_scodestado.value;
            this.saveSucursales.codRegion = this.forma.controls.suc_scodregion.value;
            this.saveSucursales.codSucursal = this.forma.controls.suc_scodsucursal.value;
            this.saveSucursales.desCiudad = this.forma.controls.suc_sdesciudad.value;
            this.saveSucursales.desRegion = this.forma.controls.suc_sdesregion.value;
            this.saveSucursales.descSucursal = this.forma.controls.suc_sdescsucursal.value;
            this.saveSucursales.direccion = this.forma.controls.suc_sdireccion.value;
            this.saveSucursales.movil = (this.forma.controls.suc_smovil.value).toString();
            this.saveSucursales.responsable = this.forma.controls.suc_sresponsable.value;
            this.saveSucursales.runUsuario = Number(this.user.nrunusuario);
            this.saveSucursales.rutOperador = Number(this.user.nrutoperador);
            this.saveSucursales.telefono = (this.forma.controls.suc_stelefono.value).toString();
            this.sucursalService.saveSucursales(this.saveSucursales)
                .subscribe(function (data) {
                if (data) {
                    if (data.guardaSucursalDTO === null || data.error.codError !== 0) {
                        _this.loader.hide();
                        swal('Atención', data.error.msjError, 'error');
                    }
                    else {
                        if (data.error.codError === 0) {
                            _this.loader.hide();
                            if (_this.edit === 'N') {
                                swal('Bien', 'Los datos han sido ingresados satisfactoriamente. Continue su registro', 'success');
                                _this.requestdos.nRutOperador = _this.user.nrutoperador;
                                _this.requestdos.sCodSucursal = _this.forma.controls.suc_scodsucursal.value;
                                _this.sucursalService.getCargaSucursales(_this.requestdos)
                                    .subscribe(function (data) {
                                    _this.loader.hide();
                                    if (data.sucursal != null) {
                                        (_this.detalleSucursales = data.sucursal);
                                        _this.sucursalService.selectedSucursal = Object.assign({}, _this.detalleSucursales[0]);
                                        if (_this.sucursalService.selectedSucursal !== undefined && _this.sucursalService.selectedSucursal !== '') {
                                            _this.tabs = 2;
                                            _this.setDataSucursal();
                                        }
                                        else {
                                            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                                        }
                                    }
                                }, function (error) {
                                    _this.loader.hide();
                                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                                });
                            }
                            else {
                                if (_this.edit === 'S') {
                                    _this.loader.hide();
                                    swal('Bien', 'Los datos han sido actualizados satisfactoriamente', 'success');
                                    _this.tabs = 1;
                                    _this.sucursalService.selectedSucursal = undefined;
                                    _this.router.navigate(['/administracionOperativa/sucursales']);
                                }
                            }
                        }
                        else {
                            swal('Atención', data.error.msjError, 'error');
                            _this.loader.hide();
                        }
                    }
                }
                else {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    _this.loader.hide();
                }
            }, function (error) {
                _this.loader.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
        else {
            swal('Atención', 'Existen campos requeridos no ingresados', 'error');
            if (!this.forma.controls.suc_scodsucursal.valid) {
                $('[name=suc_scodsucursal]').addClass('error-form');
            }
            else {
                $('[name=suc_scodsucursal]').removeClass('error-form');
            }
            if (!this.forma.controls.suc_sdescsucursal.valid) {
                $('[name=suc_sdescsucursal]').addClass('error-form');
            }
            else {
                $('[name=suc_sdescsucursal]').removeClass('error-form');
            }
            if (!this.forma.controls.suc_sdireccion.valid) {
                $('[name=suc_sdireccion]').addClass('error-form');
            }
            else {
                $('[name=suc_sdireccion]').removeClass('error-form');
            }
            if (!this.forma.controls.suc_scodregion.valid) {
                $('[name=suc_sdesregion]').addClass('error-form');
            }
            else {
                $('[name=suc_sdesregion]').removeClass('error-form');
            }
            if (!this.forma.controls.suc_scodciudad.valid) {
                $('[name=suc_sdesciudad]').addClass('error-form');
            }
            else {
                $('[name=suc_sdesciudad]').removeClass('error-form');
            }
            if (!this.forma.controls.suc_stelefono.valid) {
                $('[name=suc_stelefono]').addClass('error-form');
            }
            else {
                $('[name=suc_stelefono]').removeClass('error-form');
            }
            if (!this.forma.controls.suc_smovil.valid) {
                $('[name=suc_smovil]').addClass('error-form');
            }
            else {
                $('[name=suc_smovil]').removeClass('error-form');
            }
            if (!this.forma.controls.suc_sresponsable.valid) {
                $('[name=suc_sresponsable]').addClass('error-form');
            }
            else {
                $('[name=suc_sresponsable]').removeClass('error-form');
            }
            if (!this.forma.controls.suc_scodestado.valid) {
                $('[name=suc_scodestado]').addClass('error-form');
            }
            else {
                $('[name=suc_scodestado]').removeClass('error-form');
            }
        }
    };
    DetalleSucursalComponent.prototype.volver = function () {
        console.log('CHAO');
        this.sucursalService.selectedSucursal = undefined;
        this.router.navigate(['/administracionOperativa/sucursales']);
    };
    DetalleSucursalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalleSucursal',
            template: __webpack_require__(/*! ./detalleSucursal.component.html */ "./src/app/routes/administracionOperativa/sucursal/detalleSucursal/detalleSucursal.component.html"),
            styles: [__webpack_require__(/*! ./detalleSucursal.component.scss */ "./src/app/routes/administracionOperativa/sucursal/detalleSucursal/detalleSucursal.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__["ConsultasService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_10__["AdministracionOperativaService"]])
    ], DetalleSucursalComponent);
    return DetalleSucursalComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionOperativa/sucursal/detalleSucursal/navSucursales/navSucursales.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/sucursal/detalleSucursal/navSucursales/navSucursales.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n    <div class=\"panel\">\r\n        <tabset>\r\n            <tab>\r\n                <ng-template tabHeading>Usuarios</ng-template>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-7\">\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\">Usuarios Seleccionados</div>\r\n                            <div class=\"panel-body\">\r\n                                <div class=\"table-responsive\">\r\n                                    <table class=\"table table-hover\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th scope=\"col\">Rut</th>\r\n                                                <th scope=\"col\">Nombre</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let usuarioSeleccionado of usuariosSeleccionadosSucursal | paginate: {itemsPerPage: 7, currentPage: pActualSucursales, id: 'pageSucursales'};\">\r\n                                                <td>{{usuarioSeleccionado.usu_nrunusuario + usuarioSeleccionado.usu_sdigverificador | formatoRut}}</td>\r\n                                                <td>{{usuarioSeleccionado.nombre}}</td>\r\n                                                <!-- <td class=\"text-center\">\r\n                                                        <span class=\"table-edit\">\r\n                                                        <a class=\"text\" (click)=\"editarRelacion(relacion)\">\r\n                                                            <em class=\"fa fa-edit\"></em>\r\n                                                        </a>\r\n                                                    </span>\r\n                                                    </td> -->\r\n                                                <td>\r\n                                                    <span>\r\n                                                        <a class=\"text\" (click)=\"eliminar(usuarioSeleccionado)\">\r\n                                                            <em class=\"fa fa-trash\"></em>\r\n                                                        </a>\r\n                                                    </span>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                    <br>\r\n                                    <div class=\"text-right\">\r\n                                        <pagination-controls (pageChange)=\"pActualSucursales = $event\" id=\"pageSucursales\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-5\">\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\">Usuarios Disponibles</div>\r\n                            <div class=\"panel-body\">\r\n                                <form [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <div class=\"col-sm-9\">\r\n                                                <select class=\"form-control pv-0\" formControlName=\"nRutUsuario\" name=\"nRutUsuario\">\r\n                                                    <option *ngFor=\"let users of usuariosSucursal\" [ngValue]=\"users.usu_nrunusuario\">{{users.nombre}}</option>\r\n                                                </select>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <button class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"agregarUsuario()\">Agregar</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </tab>\r\n        </tabset>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionOperativa/sucursal/detalleSucursal/navSucursales/navSucursales.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/sucursal/detalleSucursal/navSucursales/navSucursales.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/administracionOperativa/sucursal/detalleSucursal/navSucursales/navSucursales.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/sucursal/detalleSucursal/navSucursales/navSucursales.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: NavSucursalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavSucursalesComponent", function() { return NavSucursalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
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
var NavSucursalesComponent = /** @class */ (function () {
    function NavSucursalesComponent(http, fb, modalService, setearDatos, authService, loader, router, datePipe, sucursalService) {
        this.http = http;
        this.modalService = modalService;
        this.setearDatos = setearDatos;
        this.authService = authService;
        this.loader = loader;
        this.router = router;
        this.datePipe = datePipe;
        this.sucursalService = sucursalService;
        this.buscaUsuarios = {};
        this.listarUsuarios = {};
        this.deleteUsuario = {};
        this.saveUsuarioSucursal = {};
        this.user = {};
        this.usuariosSucursal = [];
        this.usuariosSeleccionadosSucursal = [];
        this.pActualSucursales = 1;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nRutOperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            nRutUsuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            sCodSucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    NavSucursalesComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getDatosUser();
        this.usuariosDisponibles();
        this.listarUsuariosSeleccionados();
    };
    NavSucursalesComponent.prototype.usuariosDisponibles = function () {
        var _this = this;
        this.buscaUsuarios.nRutOperador = Number(this.user.nrutoperador);
        this.buscaUsuarios.sCodSucursal = this.sucursalService.selectedSucursal.suc_scodsucursal;
        this.sucursalService.getUsuariosSucursales(this.buscaUsuarios)
            .subscribe(function (data) {
            (_this.usuariosSucursal = data.usuarioSucursal);
            _this.forma.controls.nRutUsuario.setValue(_this.usuariosSucursal[0].usu_nrunusuario);
        });
    };
    NavSucursalesComponent.prototype.listarUsuariosSeleccionados = function () {
        var _this = this;
        this.listarUsuarios.nRutOperador = Number(this.user.nrutoperador);
        this.listarUsuarios.sCodSucursal = this.sucursalService.selectedSucursal.suc_scodsucursal;
        this.sucursalService.getUsuariosSeleccionadosSucursales(this.listarUsuarios)
            .subscribe(function (data) {
            (_this.usuariosSeleccionadosSucursal = data.usuarioSucursal);
        });
    };
    NavSucursalesComponent.prototype.agregarUsuario = function () {
        var _this = this;
        this.forma.controls.sCodSucursal.setValue(this.sucursalService.selectedSucursal.suc_scodsucursal);
        this.forma.controls.nRutOperador.setValue(Number(this.user.nrutoperador));
        this.saveUsuarioSucursal = this.forma.value;
        this.loader.show();
        this.sucursalService.saveUsuariosSeleccionadosSucursales(this.saveUsuarioSucursal)
            .subscribe(function (data) {
            if (data.error.codError === 0) {
                _this.loader.hide();
                swal('Bien', 'El Usuario se ha agregado correctamente', 'success');
                _this.listarUsuariosSeleccionados();
                _this.usuariosDisponibles();
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
    NavSucursalesComponent.prototype.eliminar = function (usuarioSeleccionado) {
        var _this = this;
        this.loader.show();
        this.deleteUsuario.nRunUsuario = usuarioSeleccionado.usu_nrunusuario;
        this.deleteUsuario.nRutOperador = Number(this.user.nrutoperador);
        this.deleteUsuario.sCodSucursal = this.sucursalService.selectedSucursal.suc_scodsucursal;
        this.sucursalService.deleteUsuariosSeleccionadosSucursales(this.deleteUsuario)
            .subscribe(function (data) {
            if (data.error.codError === 0) {
                _this.loader.hide();
                swal('Bien', 'El usuario se ha eliminado correctamente', 'success');
                _this.listarUsuariosSeleccionados();
                _this.usuariosDisponibles();
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
    NavSucursalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navSucursales',
            template: __webpack_require__(/*! ./navSucursales.component.html */ "./src/app/routes/administracionOperativa/sucursal/detalleSucursal/navSucursales/navSucursales.component.html"),
            styles: [__webpack_require__(/*! ./navSucursales.component.scss */ "./src/app/routes/administracionOperativa/sucursal/detalleSucursal/navSucursales/navSucursales.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__["ConsultasService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_9__["AdministracionOperativaService"]])
    ], NavSucursalesComponent);
    return NavSucursalesComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionOperativa/sucursal/sucursal.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/sucursal/sucursal.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3>Sucursales</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n\r\n                    <label class=\"col-sm-1 control-label\">C&oacute;digo</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"sCodSucursal\" name=\"sCodSucursal\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n\r\n                    <label class=\"col-sm-1 control-label\">Nombre</label>\r\n                    <div class=\"col-sm-4\">\r\n                        <input formControlName=\"sDescSucursal\" name=\"sDescSucursal\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-2 p-0\">\r\n                        <div class=\"col-sm-5\">\r\n                            <button name=\"espera\" class=\"btn btn-oval btn\" (click)=\"crearSucursales()\" type=\"button\">Agregar</button>\r\n                        </div>\r\n                        <div class=\"col-sm-6 pl-5\">\r\n                            <button name=\"espera\" class=\"btn btn-oval btn\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\">C&oacute;digo</th>\r\n                        <th scope=\"col\">Nombre</th>\r\n                        <th nowrap scope=\"col\">Direcci&oacute;n</th>\r\n                        <th nowrap scope=\"col\">Regi&oacute;n</th>\r\n                        <th nowrap scope=\"col\">Comuna</th>\r\n                        <th nowrap scope=\"col\">Responsable</th>\r\n                        <th scope=\"col\">Ver</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let sucursal of sucursales | paginate: {itemsPerPage: 7, currentPage: pActualBuscaSucursales, id: 'pageBuscaSucursales'};\">\r\n                        <td nowrap>{{sucursal.suc_scodsucursal}}</td>\r\n                        <td nowrap>{{sucursal.suc_sdescsucursal}}</td>\r\n                        <td nowrap>{{sucursal.suc_sdireccion}}</td>\r\n                        <td nowrap>{{sucursal.suc_sdesregion}}</td>\r\n                        <td nowrap>{{sucursal.suc_sdesciudad}}</td>\r\n                        <td nowrap>{{sucursal.suc_sresponsable}}</td>\r\n                        <td>\r\n                            <span class=\"table-remove\">\r\n                              <a class=\"text\" (click)=\"editarSucursal(sucursal)\">\r\n                                  <em class=\"fa fa-search\"></em>\r\n                              </a>\r\n                          </span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <br>\r\n            <div class=\"text-right\">\r\n                <pagination-controls (pageChange)=\"pActualBuscaSucursales = $event\" id=\"pageBuscaSucursales\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionOperativa/sucursal/sucursal.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/sucursal/sucursal.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/administracionOperativa/sucursal/sucursal.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/sucursal/sucursal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SucursalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SucursalComponent", function() { return SucursalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
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
var SucursalComponent = /** @class */ (function () {
    function SucursalComponent(http, fb, modalService, authService, loader, router, sucursalService) {
        this.http = http;
        this.modalService = modalService;
        this.authService = authService;
        this.loader = loader;
        this.router = router;
        this.sucursalService = sucursalService;
        this.pActualBuscaSucursales = 1;
        this.user = {};
        this.sucursales = [];
        this.request = {};
        this.requestdos = {};
        this.detalleSucursales = {};
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            sDescSucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sCodSucursal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sCodEstado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nRutOperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    SucursalComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getDatosUser();
        if (this.sucursalService.busquedaSucursal !== undefined) {
            this.buscar(true);
        }
    };
    SucursalComponent.prototype.buscar = function (conBusqueda) {
        var _this = this;
        this.loader.show();
        if (conBusqueda) {
            this.request = this.sucursalService.busquedaSucursal;
            this.forma = this.sucursalService.formaSucursal;
        }
        else {
            this.forma.controls.nRutOperador.setValue(Number(this.user.nrutoperador));
            this.request.nRutOperador = Number(this.forma.controls.nRutOperador.value);
            this.request.sCodEstado = this.forma.controls.sCodEstado.value;
            this.request.sCodSucursal = this.forma.controls.sCodSucursal.value.toUpperCase();
            this.request.sDescSucursal = this.forma.controls.sDescSucursal.value;
            this.sucursalService.busquedaSucursal = Object.assign({}, this.request);
            this.sucursalService.formaSucursal = this.forma;
        }
        this.sucursalService.getSucursales(this.request)
            .subscribe(function (data) {
            _this.loader.hide();
            if (data) {
                if (data.sucursalExistencia === null || data.error.codError !== 0) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
                else {
                    if (data.sucursalExistencia.length === 0 && data.error.codError === 0) {
                        swal('Atención', 'No se encontraron resultados', 'info');
                    }
                    else {
                        (_this.sucursales = data.sucursalExistencia);
                    }
                }
            }
            else {
                swal('Atención', data.error.msjError, 'error');
            }
        }, function (error) {
            _this.loader.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    SucursalComponent.prototype.editarSucursal = function (sucursal) {
        var _this = this;
        this.loader.show();
        this.forma.controls.sCodSucursal.setValue(sucursal.suc_scodsucursal);
        this.requestdos = this.forma.value;
        this.sucursalService.getCargaSucursales(this.requestdos)
            .subscribe(function (data) {
            _this.loader.hide();
            if (data.sucursal != null) {
                (_this.detalleSucursales = data.sucursal);
                _this.sucursalService.selectedSucursal = Object.assign({}, _this.detalleSucursales[0]);
                if (_this.sucursalService.selectedSucursal !== undefined) {
                    _this.router.navigate(['/administracionOperativa/detalleSucursales']);
                }
                else {
                    _this.loader.hide();
                }
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            _this.loader.hide();
        });
    };
    SucursalComponent.prototype.crearSucursales = function () {
        this.sucursalService.selectedSucursal = undefined;
        this.router.navigate(['/administracionOperativa/detalleSucursales']);
    };
    SucursalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sucursal',
            template: __webpack_require__(/*! ./sucursal.component.html */ "./src/app/routes/administracionOperativa/sucursal/sucursal.component.html"),
            styles: [__webpack_require__(/*! ./sucursal.component.scss */ "./src/app/routes/administracionOperativa/sucursal/sucursal.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_7__["AdministracionOperativaService"]])
    ], SucursalComponent);
    return SucursalComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/detalleTransportista.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/transportistas/detalleTransportista/detalleTransportista.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3>Transportista</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Rut</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"rutTransportista\" name=\"rutTransportista\" class=\"form-control\" type=\"text\" maxlength=\"9\" appRutFormat (change)=\"validaRut()\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Raz&oacute;n Social</label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input formControlName=\"razonSocial\" name=\"razonSocial\" class=\"form-control\" type=\"text\" maxlength=\"100\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Direcci&oacute;n</label>\r\n                    <div class=\"col-sm-6\">\r\n                        <input formControlName=\"direccion\" name=\"direccion\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Regi&oacute;n</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"region\" name=\"region\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalRegiones()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Ciudad</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"ciudad\" name=\"ciudad\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCiudades()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                        </button>\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Comuna</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"comuna\" name=\"comuna\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalComunas()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                        </button>\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Estado</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"estado\" name=\"estado\">\r\n                            <option *ngFor=\"let userEstado of estado\" [ngValue]=\"userEstado.tra_scodestado\">{{userEstado.descEstado}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row pull-left ml-2\">\r\n                    <div class=\"col-sm-6 mr-2\">\r\n                        <button class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"guardarTransporte()\">Guardar</button>\r\n                    </div>\r\n                    <div class=\"col-sm-5\">\r\n                        <button class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"volver()\">Volver</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"row mt-2\" *ngIf=\"tabs===2\">\r\n            <div class=\"col-sm-12\">\r\n                <app-navTransportista></app-navTransportista>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/detalleTransportista.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/transportistas/detalleTransportista/detalleTransportista.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul,ol{margin-top:0}\n"

/***/ }),

/***/ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/detalleTransportista.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/transportistas/detalleTransportista/detalleTransportista.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: DetalleTransportistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleTransportistaComponent", function() { return DetalleTransportistaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../commonPopUp/utilGeoPopUp/utilGeoPopUp.component */ "./src/app/routes/commonPopUp/utilGeoPopUp/utilGeoPopUp.component.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
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
var DetalleTransportistaComponent = /** @class */ (function () {
    function DetalleTransportistaComponent(http, fb, modalService, setearDatos, authService, loader, router, utilService, datePipe, transportistaService) {
        this.http = http;
        this.modalService = modalService;
        this.setearDatos = setearDatos;
        this.authService = authService;
        this.loader = loader;
        this.router = router;
        this.utilService = utilService;
        this.datePipe = datePipe;
        this.transportistaService = transportistaService;
        this.estado = [
            {
                tra_scodestado: 'VIGEN',
                descEstado: 'Vigente'
            },
            {
                tra_scodestado: 'NOVIG',
                descEstado: 'No Vigente'
            }
        ];
        this.user = {};
        this.saveTransporte = {};
        this.request = {};
        this.longitud_rutTransporte2 = 0;
        this.detallesTransporte = {};
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            rutTransportista: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            rutOperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            digVerificador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            razonSocial: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            codRegion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            region: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            codCiudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            codComuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            comuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.tabs = 1;
    }
    DetalleTransportistaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subData = this.setearDatos.datosGeo$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.user = this.authService.getDatosUser();
        this.setDataTransportista();
    };
    DetalleTransportistaComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
    };
    DetalleTransportistaComponent.prototype.setDataTransportista = function () {
        if (this.transportistaService.selectedTransportista === undefined) {
            this.tabs = 1;
            this.edit = 'S';
            console.log('es nuevo');
            this.forma.controls.rutOperador.setValue(this.user.nrutoperador);
        }
        else {
            this.tabs = 2;
            this.edit = 'N';
            this.forma.controls.rutTransportista.setValue(this.transportistaService.selectedTransportista.tra_nruttransportista +
                this.transportistaService.selectedTransportista.tra_sdigitoverificador);
            this.forma.controls.rutTransportista.disable();
            this.forma.controls.rutOperador.setValue(this.transportistaService.selectedTransportista.tra_nrutoperador);
            this.forma.controls.digVerificador.setValue(this.transportistaService.selectedTransportista.tra_sdigitoverificador);
            this.forma.controls.razonSocial.setValue(this.transportistaService.selectedTransportista.tra_srazonsocial);
            this.forma.controls.direccion.setValue(this.transportistaService.selectedTransportista.tra_sdireccion);
            this.forma.controls.codRegion.setValue(this.transportistaService.selectedTransportista.tra_scodregion);
            this.forma.controls.region.setValue(this.transportistaService.selectedTransportista.tra_sdesregion);
            this.forma.controls.codCiudad.setValue(this.transportistaService.selectedTransportista.tra_scodciudad);
            this.forma.controls.ciudad.setValue(this.transportistaService.selectedTransportista.tra_sdesciudad);
            this.forma.controls.codComuna.setValue(this.transportistaService.selectedTransportista.tra_scodcomuna);
            this.forma.controls.comuna.setValue(this.transportistaService.selectedTransportista.tra_sdescomuna);
            this.forma.controls.estado.setValue(this.transportistaService.selectedTransportista.tra_scodestado);
        }
    };
    DetalleTransportistaComponent.prototype.validaRut = function () {
        this.rutValido = false;
        if (!this.utilService.isValidRUT(this.forma.controls.rutTransportista.value)) {
            this.forma.controls.rutTransportista.setValue('');
            swal('Atención', 'El RUT es incorrecto', 'error');
        }
        else {
            this.rutValido = true;
        }
    };
    DetalleTransportistaComponent.prototype.openModalRegiones = function () {
        this.origen = 'region';
        var initialState = {
            titulo: 'Region',
            origen: 'region'
        };
        this.utilGeoModal = this.modalService.show(_commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_10__["UtilGeoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleTransportistaComponent.prototype.openModalCiudades = function () {
        this.origen = 'ciudad';
        var initialState = {
            titulo: 'Ciudad',
            origen: 'ciudad',
            regionSeleccionada: this.territorioSeleccionado
        };
        this.utilGeoModal = this.modalService.show(_commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_10__["UtilGeoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleTransportistaComponent.prototype.openModalComunas = function () {
        this.origen = 'comuna';
        var initialState = {
            titulo: 'Comúna',
            origen: 'comuna',
            regionSeleccionada: this.territorioSeleccionado,
            ciudadSeleccionada: this.ciudadSeleccionado
        };
        this.utilGeoModal = this.modalService.show(_commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_10__["UtilGeoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleTransportistaComponent.prototype.setData = function (resData) {
        if (resData !== 0) {
            switch (this.origen) {
                case 'region': {
                    this.forma.controls.codRegion.setValue(resData.par_codparametro01);
                    this.forma.controls.region.setValue(resData.par_deslargo01);
                    this.forma.controls.codCiudad.setValue('');
                    this.forma.controls.ciudad.setValue('');
                    this.forma.controls.codComuna.setValue('');
                    this.forma.controls.comuna.setValue('');
                    this.territorioSeleccionado = resData.par_codparametro01;
                    break;
                }
                case 'ciudad': {
                    this.forma.controls.codCiudad.setValue(resData.par_codparametro01);
                    this.forma.controls.ciudad.setValue(resData.par_deslargo01);
                    this.forma.controls.codComuna.setValue('');
                    this.forma.controls.comuna.setValue('');
                    this.ciudadSeleccionado = resData.par_codparametro01;
                    break;
                }
                case 'comuna': {
                    this.forma.controls.codComuna.setValue(resData.par_codparametro01);
                    this.forma.controls.comuna.setValue(resData.par_deslargo01);
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    DetalleTransportistaComponent.prototype.guardarTransporte = function () {
        var _this = this;
        if (this.forma.valid) {
            this.longitud_rutTransporte = this.forma.controls.rutTransportista.value.toString();
            this.longitud_rutTransporte2 = this.longitud_rutTransporte.length;
            $('*').removeClass('error-form');
            this.loader.show();
            this.saveTransporte.codCiudad = this.forma.controls.codCiudad.value;
            this.saveTransporte.codComuna = this.forma.controls.codComuna.value;
            this.saveTransporte.codEstado = this.forma.controls.estado.value;
            this.saveTransporte.codRegion = this.forma.controls.codRegion.value;
            this.saveTransporte.desCiudad = this.forma.controls.ciudad.value;
            this.saveTransporte.desComuna = this.forma.controls.comuna.value;
            this.saveTransporte.desRegion = this.forma.controls.region.value;
            this.saveTransporte.digitoVerificador = this.longitud_rutTransporte.substr((this.longitud_rutTransporte2 - 1), 1);
            this.saveTransporte.direccion = this.forma.controls.direccion.value;
            this.saveTransporte.indedicion = this.edit;
            this.saveTransporte.razonSocial = this.forma.controls.razonSocial.value;
            this.saveTransporte.rutCreador = this.user.nrunusuario;
            this.saveTransporte.rutOperador = this.forma.controls.rutOperador.value;
            this.saveTransporte.rutTransportista = Number(this.longitud_rutTransporte.substr(0, this.longitud_rutTransporte2 - 1));
            this.transportistaService.saveTransportista(this.saveTransporte)
                .subscribe(function (data) {
                if (data.error.codError === 0) {
                    if (_this.edit === 'S') {
                        _this.loader.hide();
                        swal('Bien', 'Los datos han sido ingresados satisfactoriamente. Continue su registro', 'success');
                        _this.request.codEstadoTrans = _this.forma.controls.estado.value;
                        _this.request.razonSocialTrans = _this.forma.controls.razonSocial.value;
                        _this.request.rutTransportista = _this.saveTransporte.rutTransportista;
                        _this.request.rutOperador = _this.forma.controls.rutOperador.value;
                        _this.transportistaService.getTransportista(_this.request)
                            .subscribe(function (data) {
                            (_this.detallesTransporte = data.buscaTransportistaDTO);
                            _this.transportistaService.selectedTransportista = Object.assign({}, _this.detallesTransporte[0]);
                            if (_this.transportistaService.selectedTransportista !== undefined) {
                                _this.tabs = 2;
                                _this.edit = 'N';
                                _this.setDataTransportista();
                                _this.loader.hide();
                            }
                            else {
                                _this.loader.hide();
                            }
                        }, function (error) {
                            _this.loader.hide();
                            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                        });
                    }
                    else {
                        if (_this.edit === 'N') {
                            _this.loader.hide();
                            swal('Bien', 'Los datos han sido actualizados satisfactoriamente', 'success');
                            _this.transportistaService.selectedTransportista = undefined;
                            _this.tabs = 1;
                            _this.router.navigate(['/administracionOperativa/transportistas']);
                        }
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
        }
        else {
            if (this.edit === 'S') {
                swal('Atención', 'Existen campos requeridos no ingresados', 'error');
                if (!this.forma.controls.rutTransportista.valid) {
                    $('[name=rutTransportista]').addClass('error-form');
                }
                else {
                    $('[name=rutTransportista]').removeClass('error-form');
                }
                if (!this.forma.controls.razonSocial.valid) {
                    $('[name=razonSocial]').addClass('error-form');
                }
                else {
                    $('[name=razonSocial]').removeClass('error-form');
                }
                if (!this.forma.controls.direccion.valid) {
                    $('[name=direccion]').addClass('error-form');
                }
                else {
                    $('[name=direccion]').removeClass('error-form');
                }
                if (!this.forma.controls.codRegion.valid) {
                    $('[name=region]').addClass('error-form');
                }
                else {
                    $('[name=region]').removeClass('error-form');
                }
                if (!this.forma.controls.codCiudad.valid) {
                    $('[name=ciudad]').addClass('error-form');
                }
                else {
                    $('[name=ciudad]').removeClass('error-form');
                }
                if (!this.forma.controls.codComuna.valid) {
                    $('[name=comuna]').addClass('error-form');
                }
                else {
                    $('[name=comuna]').removeClass('error-form');
                }
                if (!this.forma.controls.estado.valid) {
                    $('[name=estado]').addClass('error-form');
                }
                else {
                    $('[name=estado]').removeClass('error-form');
                }
            }
            else {
                if (this.edit === 'N') {
                    swal('Atención', 'Existen campos requeridos no ingresados', 'error');
                    if (!this.forma.controls.razonSocial.valid) {
                        $('[name=razonSocial]').addClass('error-form');
                    }
                    else {
                        $('[name=razonSocial]').removeClass('error-form');
                    }
                    if (!this.forma.controls.direccion.valid) {
                        $('[name=direccion]').addClass('error-form');
                    }
                    else {
                        $('[name=direccion]').removeClass('error-form');
                    }
                    if (!this.forma.controls.codRegion.valid) {
                        $('[name=region]').addClass('error-form');
                    }
                    else {
                        $('[name=region]').removeClass('error-form');
                    }
                    if (!this.forma.controls.codCiudad.valid) {
                        $('[name=ciudad]').addClass('error-form');
                    }
                    else {
                        $('[name=ciudad]').removeClass('error-form');
                    }
                    if (!this.forma.controls.codComuna.valid) {
                        $('[name=comuna]').addClass('error-form');
                    }
                    else {
                        $('[name=comuna]').removeClass('error-form');
                    }
                    if (!this.forma.controls.estado.valid) {
                        $('[name=estado]').addClass('error-form');
                    }
                    else {
                        $('[name=estado]').removeClass('error-form');
                    }
                }
            }
        }
    };
    DetalleTransportistaComponent.prototype.volver = function () {
        console.log('CHAO');
        this.transportistaService.selectedTransportista = undefined;
        this.tabs = 1;
        this.router.navigate(['/administracionOperativa/transportistas']);
    };
    DetalleTransportistaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalleTransportista',
            template: __webpack_require__(/*! ./detalleTransportista.component.html */ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/detalleTransportista.component.html"),
            styles: [__webpack_require__(/*! ./detalleTransportista.component.scss */ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/detalleTransportista.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__["ConsultasService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_11__["AdministracionOperativaService"]])
    ], DetalleTransportistaComponent);
    return DetalleTransportistaComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navConductores/navConductores.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navConductores/navConductores.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Conductores</div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"table-responsive\">\r\n            <span class=\"table-add float-right\">\r\n              <a class=\"text\" (click)=\"openModalConductor()\">\r\n                  <strong><em class=\"fa fa-plus\"></em></strong>\r\n              </a>\r\n          </span>\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\">RUN</th>\r\n                        <th scope=\"col\">Conductor</th>\r\n                        <th scope=\"col\">Estado</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let conductor of conductores | paginate: {itemsPerPage: 7, currentPage: pActualconductor, id: 'pageConductor'};\">\r\n                        <td>{{conductor.cho_nrunchofer}}-{{conductor.cho_sdigitoverificador}}</td>\r\n                        <td>{{conductor.cho_snombre}} {{conductor.cho_sapepaterno}} {{conductor.cho_sapematerno}}</td>\r\n                        <td>{{conductor.cho_scodestado | estadoVigencia}}</td>\r\n                        <td>\r\n                            <span class=\"table-edit\">\r\n                              <a class=\"text\" (click)=\"editarConductor(conductor)\">\r\n                                  <em class=\"fa fa-edit\"></em>\r\n                              </a>\r\n                          </span>\r\n                        </td>\r\n                        <!-- <td>\r\n                          <span>\r\n                              <a class=\"text\" (click)=\"remove(id)\">\r\n                                  <em class=\"fa fa-trash\"></em>\r\n                              </a>\r\n                          </span>\r\n                      </td> -->\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <br>\r\n            <div class=\"text-right\">\r\n                <pagination-controls (pageChange)=\"pActualconductor = $event\" id=\"pageConductor\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navConductores/navConductores.component.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navConductores/navConductores.component.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navConductores/navConductores.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navConductores/navConductores.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: NavConductoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavConductoresComponent", function() { return NavConductoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _commonPopUp_choferPopUp_choferPopUp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../commonPopUp/choferPopUp/choferPopUp.component */ "./src/app/routes/commonPopUp/choferPopUp/choferPopUp.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavConductoresComponent = /** @class */ (function () {
    function NavConductoresComponent(http, transportistaService, modalService, loader) {
        this.http = http;
        this.transportistaService = transportistaService;
        this.modalService = modalService;
        this.loader = loader;
        this.request = {};
        this.conductores = [];
        this.ruttransporte = this.transportistaService.selectedTransportista.tra_nruttransportista;
        this.rutoperador = this.transportistaService.selectedTransportista.tra_nrutoperador;
        this.pActualconductor = 1;
    }
    NavConductoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reloadTabla = this.transportistaService.datos$.subscribe(function (resData) {
            _this.setTipo(resData);
        });
        this.listadoConductores();
    };
    NavConductoresComponent.prototype.ngOnDestroy = function () {
        if (this.reloadTabla !== undefined) {
            this.reloadTabla.unsubscribe();
        }
    };
    NavConductoresComponent.prototype.listadoConductores = function () {
        var _this = this;
        this.request.rutOperador = this.rutoperador;
        this.request.rutTransportista = this.ruttransporte;
        this.transportistaService.getConductores(this.request)
            .subscribe(function (data) {
            (_this.conductores = data.conductores);
        });
    };
    NavConductoresComponent.prototype.editarConductor = function (conductor) {
        this.origen = 'conductor';
        var initialState = {
            titulo: 'Detalle Conductor',
            conductor: conductor
        };
        this.loader.show();
        this.choferesModal = this.modalService.show(_commonPopUp_choferPopUp_choferPopUp_component__WEBPACK_IMPORTED_MODULE_5__["ChoferPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        this.loader.hide();
    };
    NavConductoresComponent.prototype.openModalConductor = function () {
        this.origen = 'conductor';
        var initialState = {
            titulo: 'Detalle Conductor',
            origen: 'conductor',
        };
        this.choferesModal = this.modalService.show(_commonPopUp_choferPopUp_choferPopUp_component__WEBPACK_IMPORTED_MODULE_5__["ChoferPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    NavConductoresComponent.prototype.setTipo = function (resData) {
        if (resData !== 0) {
            switch (this.origen) {
                case 'conductor': {
                    if (resData = 'succesChofer') {
                        this.listadoConductores();
                    }
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    NavConductoresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navConductores',
            template: __webpack_require__(/*! ./navConductores.component.html */ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navConductores/navConductores.component.html"),
            styles: [__webpack_require__(/*! ./navConductores.component.scss */ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navConductores/navConductores.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_4__["AdministracionOperativaService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], NavConductoresComponent);
    return NavConductoresComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navTransportista.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navTransportista.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"panel\">\r\n    <tabset [justified]=\"true\">\r\n        <tab>\r\n            <ng-template tabHeading>Veh&iacute;culos</ng-template>\r\n            <div>\r\n                <app-navVehiculo></app-navVehiculo>\r\n            </div>\r\n        </tab>\r\n        <tab>\r\n            <ng-template tabHeading>Conductores</ng-template>\r\n            <div>\r\n                <app-navConductores></app-navConductores>\r\n            </div>\r\n        </tab>\r\n    </tabset>\r\n</form>"

/***/ }),

/***/ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navTransportista.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navTransportista.component.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navTransportista.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navTransportista.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: NavTransportistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavTransportistaComponent", function() { return NavTransportistaComponent; });
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

var NavTransportistaComponent = /** @class */ (function () {
    function NavTransportistaComponent() {
    }
    NavTransportistaComponent.prototype.ngOnInit = function () {
    };
    NavTransportistaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navTransportista',
            template: __webpack_require__(/*! ./navTransportista.component.html */ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navTransportista.component.html"),
            styles: [__webpack_require__(/*! ./navTransportista.component.scss */ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navTransportista.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavTransportistaComponent);
    return NavTransportistaComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navVehiculo/navVehiculo.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navVehiculo/navVehiculo.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Veh&iacute;culos</div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"table-responsive\">\r\n            <span class=\"table-add float-right\">\r\n                <a class=\"text\" (click)=\"openModalVehiculo()\">\r\n                    <strong><em class=\"fa fa-plus\"></em></strong>\r\n                </a>\r\n            </span>\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\">Patente</th>\r\n                        <th scope=\"col\">Tipo Veh&iacute;culo</th>\r\n                        <th scope=\"col\">Volumen(m3)</th>\r\n                        <th scope=\"col\">Carga(Kg)</th>\r\n                        <th scope=\"col\">Conductor</th>\r\n                        <th scope=\"col\">Estado</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let vehiculo of vehiculos | paginate: {itemsPerPage: 7, currentPage: pActualvehiculo, id: 'pageVehiculo'};\">\r\n                        <td>{{vehiculo.cam_spatente}}</td>\r\n                        <td>{{vehiculo.destipocamion}}</td>\r\n                        <td>{{vehiculo.cam_nvolumen}}</td>\r\n                        <td>{{vehiculo.cam_ncarga}}</td>\r\n                        <td>{{vehiculo.cho_snombre}} {{vehiculo.cho_sapepaterno}} {{vehiculo.cho_sapematerno}}</td>\r\n                        <td>{{vehiculo.cam_scodestado | estadoVigencia}}</td>\r\n                        <td>\r\n                            <span class=\"table-edit\">\r\n                                <a class=\"text\" (click)=\"editarVehiculo(vehiculo)\">\r\n                                    <em class=\"fa fa-edit\"></em>\r\n                                </a>\r\n                            </span>\r\n                        </td>\r\n                        <!-- <td>\r\n                            <span>\r\n                                <a class=\"text\" (click)=\"remove(id)\">\r\n                                    <em class=\"fa fa-trash\"></em>\r\n                                </a>\r\n                            </span>\r\n                        </td> -->\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <br>\r\n            <div class=\"text-right\">\r\n                <pagination-controls (pageChange)=\"pActualvehiculo = $event\" id=\"pageVehiculo\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navVehiculo/navVehiculo.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navVehiculo/navVehiculo.component.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navVehiculo/navVehiculo.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navVehiculo/navVehiculo.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: NavVehiculoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavVehiculoComponent", function() { return NavVehiculoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _commonPopUp_vehiculosPopUp_vehiculosPopUp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../commonPopUp/vehiculosPopUp/vehiculosPopUp.component */ "./src/app/routes/commonPopUp/vehiculosPopUp/vehiculosPopUp.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavVehiculoComponent = /** @class */ (function () {
    function NavVehiculoComponent(http, transportistaService, modalService, loader) {
        this.http = http;
        this.transportistaService = transportistaService;
        this.modalService = modalService;
        this.loader = loader;
        this.vehiculosTransportista = {};
        this.vehiculos = [];
        this.ruttransporte = this.transportistaService.selectedTransportista.tra_nruttransportista;
        this.rutoperador = this.transportistaService.selectedTransportista.tra_nrutoperador;
        this.pActualvehiculo = 1;
    }
    NavVehiculoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reloadTabla = this.transportistaService.datos$.subscribe(function (resData) {
            _this.setTipo(resData);
        });
        this.listadoVehiculos();
    };
    NavVehiculoComponent.prototype.ngOnDestroy = function () {
        if (this.reloadTabla !== undefined) {
            this.reloadTabla.unsubscribe();
        }
    };
    NavVehiculoComponent.prototype.listadoVehiculos = function () {
        var _this = this;
        this.vehiculosTransportista.rutOperador = this.rutoperador;
        this.vehiculosTransportista.rutTransportista = this.ruttransporte;
        this.transportistaService.getVehiculos(this.vehiculosTransportista)
            .subscribe(function (data) {
            console.log(data);
            (_this.vehiculos = data.vehiculos);
        });
    };
    NavVehiculoComponent.prototype.editarVehiculo = function (vehiculo) {
        this.origen = 'vehiculos';
        var initialState = {
            titulo: 'Detalle Vehículos',
            vehiculo: vehiculo
        };
        this.loader.show();
        this.veiculosModal = this.modalService.show(_commonPopUp_vehiculosPopUp_vehiculosPopUp_component__WEBPACK_IMPORTED_MODULE_5__["VehiculosPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
        this.loader.hide();
    };
    NavVehiculoComponent.prototype.openModalVehiculo = function () {
        this.origen = 'vehiculos';
        var initialState = {
            titulo: 'Detalle Vehículos',
            origen: 'vehiculos',
        };
        this.veiculosModal = this.modalService.show(_commonPopUp_vehiculosPopUp_vehiculosPopUp_component__WEBPACK_IMPORTED_MODULE_5__["VehiculosPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    NavVehiculoComponent.prototype.setTipo = function (resData) {
        if (resData !== 0) {
            switch (this.origen) {
                case 'vehiculos': {
                    if (resData = 'succesLocales') {
                        this.listadoVehiculos();
                    }
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    NavVehiculoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navVehiculo',
            template: __webpack_require__(/*! ./navVehiculo.component.html */ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navVehiculo/navVehiculo.component.html"),
            styles: [__webpack_require__(/*! ./navVehiculo.component.scss */ "./src/app/routes/administracionOperativa/transportistas/detalleTransportista/navTransportista/navVehiculo/navVehiculo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_4__["AdministracionOperativaService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], NavVehiculoComponent);
    return NavVehiculoComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionOperativa/transportistas/transportistas.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/transportistas/transportistas.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3>Transportista</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Rut</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"rutTransportista\" name=\"rutTransportista\" class=\"form-control\" type=\"text\" maxlength=\"9\" appRutFormat (change)=\"validaRut()\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Raz&oacute;n Social</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input formControlName=\"razonSocialTrans\" name=\"razonSocialTrans\" class=\"form-control\" type=\"text\" maxlength=\"100\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Estado</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"codEstadoTrans\" name=\"codEstadoTrans\">\r\n                            <option *ngFor=\"let userEstado of estado\" [ngValue]=\"userEstado.codEstadoTrans\">{{userEstado.descEstado}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                        <button class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"crearTransporte()\">Agregar</button>\r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                        <button class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"buscar()\">Buscar</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\">RUT</th>\r\n                        <th scope=\"col\">Raz&oacute;n Social</th>\r\n                        <th nowrap scope=\"col\">Direcci&oacute;n</th>\r\n                        <th scope=\"col\">Estado</th>\r\n                        <th scope=\"col\">Ver</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let transportistaDatos of transportistas | paginate: {itemsPerPage: 7, currentPage: pActualBuscaTransportistas, id: 'pageBuscaTransportistas'};\">\r\n                        <td nowrap>{{transportistaDatos.tra_nruttransportista}} - {{transportistaDatos.tra_sdigitoverificador}}</td>\r\n                        <td nowrap>{{transportistaDatos.tra_srazonsocial}}</td>\r\n                        <td nowrap>{{transportistaDatos.tra_sdireccion}}</td>\r\n                        <td nowrap>{{transportistaDatos.tra_scodestado | estadoVigencia}}</td>\r\n                        <td>\r\n                            <span class=\"table-remove\">\r\n                                <a class=\"text\" (click)=\"editarTransportista(transportistaDatos)\">\r\n                                    <em class=\"fa fa-search\"></em>\r\n                                </a>\r\n                            </span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <br>\r\n            <div class=\"text-right\">\r\n                <pagination-controls (pageChange)=\"pActualBuscaTransportistas = $event\" id=\"pageBuscaTransportistas\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionOperativa/transportistas/transportistas.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/transportistas/transportistas.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/administracionOperativa/transportistas/transportistas.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/transportistas/transportistas.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TransportistasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportistasComponent", function() { return TransportistasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
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
var TransportistasComponent = /** @class */ (function () {
    function TransportistasComponent(http, fb, transportistaService, utilService, loader, authService, router) {
        this.http = http;
        this.transportistaService = transportistaService;
        this.utilService = utilService;
        this.loader = loader;
        this.authService = authService;
        this.router = router;
        this.estado = [
            {
                codEstadoTrans: null,
                descEstado: '(Todos)'
            },
            {
                codEstadoTrans: 'VIGEN',
                descEstado: 'Vigente'
            },
            {
                codEstadoTrans: 'NOVIG',
                descEstado: 'No Vigente'
            }
        ];
        this.user = {};
        this.request = {};
        this.requestdos = {};
        this.transportistas = [];
        this.pActualBuscaTransportistas = 1;
        this.detalleTransporte = {};
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            rutTransportista: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            razonSocialTrans: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            codEstadoTrans: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            rutOperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    TransportistasComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getDatosUser();
        if (this.transportistaService.busquedaTransportistas !== undefined) {
            this.buscar(true);
        }
    };
    TransportistasComponent.prototype.validaRut = function () {
        this.rutValido = false;
        if (!this.utilService.isValidRUT(this.forma.controls.rutTransportista.value)) {
            this.forma.controls.rutTransportista.setValue('');
            this.forma.controls.razonSocialTrans.setValue('');
            swal('Atención', 'El RUT es incorrecto', 'error');
            this.transportistas = [];
        }
        else {
            this.rutValido = true;
        }
    };
    TransportistasComponent.prototype.buscar = function (conBusqueda) {
        var _this = this;
        this.loader.show();
        if (conBusqueda) {
            this.request = this.transportistaService.busquedaTransportistas;
            this.forma = this.transportistaService.formaTransportistas;
        }
        else {
            this.forma.controls.rutOperador.setValue(this.user.nrutoperador);
            if ((this.forma.controls.rutTransportista.pristine) ||
                (this.forma.controls.rutTransportista.value === '') ||
                (this.forma.controls.rutTransportista.value === null)) {
                this.forma.controls.rutTransportista.setValue(0);
            }
            else {
                this.forma.controls.rutTransportista.setValue(Number(this.forma.controls.rutTransportista.value.substr(0, this.forma.controls.rutTransportista.value.length - 1)));
            }
            this.request = this.forma.value;
            this.transportistaService.busquedaTransportistas = Object.assign({}, this.request);
            this.transportistaService.formaTransportistas = this.forma;
        }
        this.transportistaService.getTransportista(this.request)
            .subscribe(function (data) {
            _this.loader.hide();
            _this.forma.controls.rutTransportista.setValue('');
            if (data) {
                if (data.buscaTransportistaDTO === null || data.error.codError !== 0) {
                    swal('Atención', data.error.msjError, 'error');
                }
                else {
                    if (data.buscaTransportistaDTO.length === 0 && data.error.codError === 0) {
                        swal('Atención', 'No se encontraron resultados', 'info');
                    }
                    else {
                        (_this.transportistas = data.buscaTransportistaDTO);
                    }
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
    TransportistasComponent.prototype.editarTransportista = function (transportistaDatos) {
        this.loader.show();
        this.detalleTransporte = transportistaDatos;
        this.transportistaService.selectedTransportista = Object.assign({}, this.detalleTransporte);
        this.router.navigate(['/administracionOperativa/detalleTransportista']);
        this.loader.hide();
    };
    TransportistasComponent.prototype.crearTransporte = function () {
        this.transportistaService.selectedTransportista = undefined;
        this.router.navigate(['/administracionOperativa/detalleTransportista']);
    };
    TransportistasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transportistas',
            template: __webpack_require__(/*! ./transportistas.component.html */ "./src/app/routes/administracionOperativa/transportistas/transportistas.component.html"),
            styles: [__webpack_require__(/*! ./transportistas.component.scss */ "./src/app/routes/administracionOperativa/transportistas/transportistas.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_7__["AdministracionOperativaService"], _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TransportistasComponent);
    return TransportistasComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionOperativa/usuarios/detalleUsuarios/detalleUsuarios.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/usuarios/detalleUsuarios/detalleUsuarios.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3>Usuario</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"col-sm-12 pb-1\">\r\n                <div class=\"col-sm-6\">\r\n                    <label class=\"col-sm-2 control-label\">Operador</label>\r\n                    <div class=\"col-sm-9\">\r\n                        <input formControlName=\"ope_snombre\" name=\"ope_snombre\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"col-sm-1 pl-0\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalOperadores()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row pull-right mr-2\">\r\n                    <div class=\"col-sm-6 mr-2\">\r\n                        <button class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"guardarUsuario()\">Guardar</button>\r\n                    </div>\r\n                    <div class=\"col-sm-5\">\r\n                        <button class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"volver()\">Volver</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <h5><strong>Datos Personales</strong></h5>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-12\">\r\n                                <label class=\"col-sm-1 control-label\">Run Usuario</label>\r\n                                <div class=\"col-sm-3\">\r\n                                    <input appRutFormat formControlName=\"nRunUsuario\" name=\"nRunUsuario\" class=\"form-control\" type=\"text\" (change)=\"validaRut()\" />\r\n                                </div>\r\n                                <label class=\"col-sm-1 control-label\">Username</label>\r\n                                <div class=\"col-sm-3\">\r\n                                    <input formControlName=\"sNomUsuario\" name=\"sNomUsuario\" class=\"form-control\" type=\"text\" autocomplete=\"off\" />\r\n                                </div>\r\n                                <label class=\"col-sm-2 control-label\">Fecha Creaci&oacute;n</label>\r\n                                <div class=\"col-sm-2\">\r\n                                    <input formControlName=\"usu_dfhocreacion\" name=\"usu_dfhocreacion\" class=\"form-control\" type=\"date\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12\">\r\n                                <label class=\"col-sm-1 control-label\">Nombre</label>\r\n                                <div class=\"col-sm-3\">\r\n                                    <input formControlName=\"sNombre\" name=\"sNombre\" class=\"form-control\" type=\"text\" />\r\n                                </div>\r\n                                <label class=\"col-sm-1 control-label\">Ap. Paterno</label>\r\n                                <div class=\"col-sm-3\">\r\n                                    <input formControlName=\"sApePaterno\" name=\"sApePaterno\" class=\"form-control\" type=\"text\" />\r\n                                </div>\r\n                                <label class=\"col-sm-2 control-label\">Ap. Materno</label>\r\n                                <div class=\"col-sm-2\">\r\n                                    <input formControlName=\"sApeMaterno\" name=\"sApeMaterno\" class=\"form-control\" type=\"text\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <h5><strong>Datos Demogr&aacute;ficos</strong></h5>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-12\">\r\n                                <label class=\"col-sm-1 control-label\">Direcci&oacute;n</label>\r\n                                <div class=\"col-sm-5\">\r\n                                    <input formControlName=\"sDireccion\" name=\"sDireccion\" class=\"form-control\" type=\"text\" />\r\n                                </div>\r\n                                <div class=\"col-sm-3 pl-0\">\r\n                                    <label class=\"col-sm-3 control-label\">Regi&oacute;n</label>\r\n                                    <div class=\"col-sm-7 pl-0\">\r\n                                        <input formControlName=\"sNomRegion\" name=\"sNomRegion\" class=\"form-control\" type=\"text\" />\r\n                                    </div>\r\n                                    <div class=\"col-sm-1 pl-0\">\r\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalRegiones()\">\r\n                                            <em class=\"icon-magnifier\"></em>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3 pl-0\">\r\n                                    <label class=\"col-sm-3 control-label\">Ciudades</label>\r\n                                    <div class=\"col-sm-7 pl-0\">\r\n                                        <input formControlName=\"sNomCiudad\" name=\"sNomCiudad\" class=\"form-control\" type=\"text\" />\r\n                                    </div>\r\n                                    <div class=\"col-sm-1 pl-0\">\r\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCiudades()\">\r\n                                            <em class=\"icon-magnifier\"></em>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12\">\r\n                                <label class=\"col-sm-1 control-label\">Tel&eacute;fono</label>\r\n                                <div class=\"col-sm-2\">\r\n                                    <input formControlName=\"sTelefono\" name=\"sTelefono\" class=\"form-control\" type=\"number\" maxlength=\"10\" />\r\n                                </div>\r\n                                <label class=\"col-sm-1 control-label\">Celular</label>\r\n                                <div class=\"col-sm-2\">\r\n                                    <input formControlName=\"sMovil\" name=\"sMovil\" class=\"form-control\" type=\"number\" maxlength=\"10\" />\r\n                                </div>\r\n                                <label class=\"col-sm-1 control-label\">Email</label>\r\n                                <div class=\"col-sm-2\">\r\n                                    <input formControlName=\"sEmail\" name=\"sEmail\" class=\"form-control\" type=\"email\" />\r\n                                </div>\r\n                                <label class=\"col-sm-1 control-label\">Sexo</label>\r\n                                <div class=\"col-sm-2\">\r\n                                    <select class=\"form-control pv-0\" formControlName=\"sSexo\" name=\"sSexo\">\r\n                                        <option *ngFor=\"let userSexo of sexo\" [ngValue]=\"userSexo.sSexo\">{{userSexo.descSexo}}</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <h5><strong>Estado</strong></h5>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-12\">\r\n                                <label class=\"col-sm-1 control-label\">Estado</label>\r\n                                <div class=\"col-sm-3\">\r\n                                    <select *ngIf=\"edit===2\" class=\"form-control pv-0\" formControlName=\"sIndEstado\" name=\"sIndEstado\">\r\n                                        <option *ngFor=\"let userEstado of estado\" [ngValue]=\"userEstado.sIndEstado\">{{userEstado.descEstado}}</option>\r\n                                    </select>\r\n                                    <select *ngIf=\"edit===1\" class=\"form-control pv-0\" formControlName=\"sIndEstado\" name=\"sIndEstado\">\r\n                                        <option *ngFor=\"let userEstado of estadoDos\" [ngValue]=\"userEstado.sIndEstado\">{{userEstado.descEstado}}</option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-sm-2\">\r\n                                    <button *ngIf=\"tabs===2\" class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"cambiarEstado()\">Cambiar</button>\r\n                                </div>\r\n                                <label class=\"col-sm-1 control-label\">Clave</label>\r\n                                <div class=\"col-sm-3\">\r\n                                    <!-- <div class=\"col-sm-8\">\r\n                                        <input formControlName=\"sClaveAcceso\" name=\"sClaveAcceso\" class=\"form-control\" [type]=\"showPassword ? 'text' : 'password'\" autocomplete=\"off\" />\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <em class=\"icon-eye\" (click)=\"showPassword = !showPassword\"></em>\r\n                                    </div> -->\r\n\r\n                                    <div class=\"input-group\">\r\n                                        <input formControlName=\"sClaveAcceso\" name=\"sClaveAcceso\" class=\"form-control\" [type]=\"showPassword\" autocomplete=\"off\" />\r\n                                        <em class=\"icon-eye input-group-addon\" (click)=\"mostrarPass()\"></em>\r\n                                    </div>\r\n                                    <!-- <button (click)=\"showPassword = !showPassword\">s</button> -->\r\n                                </div>\r\n                                <div class=\"col-sm-2\">\r\n                                    <button *ngIf=\"tabs===2\" class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"resetearPass()\">Resetear</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div *ngIf=\"tabs===2\">\r\n            <app-navUsuarios></app-navUsuarios>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionOperativa/usuarios/detalleUsuarios/detalleUsuarios.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/usuarios/detalleUsuarios/detalleUsuarios.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/administracionOperativa/usuarios/detalleUsuarios/detalleUsuarios.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/usuarios/detalleUsuarios/detalleUsuarios.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DetalleUsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleUsuariosComponent", function() { return DetalleUsuariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../commonPopUp/utilGeoPopUp/utilGeoPopUp.component */ "./src/app/routes/commonPopUp/utilGeoPopUp/utilGeoPopUp.component.ts");
/* harmony import */ var _commonPopUp_operadoresPopUp_operadoresPopUp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../commonPopUp/operadoresPopUp/operadoresPopUp.component */ "./src/app/routes/commonPopUp/operadoresPopUp/operadoresPopUp.component.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/util.service */ "./src/app/services/util.service.ts");
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
var DetalleUsuariosComponent = /** @class */ (function () {
    function DetalleUsuariosComponent(http, fb, modalService, setearDatos, authService, loader, router, datePipe, usuariosService, utilService) {
        this.http = http;
        this.modalService = modalService;
        this.setearDatos = setearDatos;
        this.authService = authService;
        this.loader = loader;
        this.router = router;
        this.datePipe = datePipe;
        this.usuariosService = usuariosService;
        this.utilService = utilService;
        this.datos = [];
        this.estado = [
            {
                sIndEstado: 'H',
                descEstado: 'Habilitado'
            },
            {
                sIndEstado: 'D',
                descEstado: 'Deshabilitado'
            }
        ];
        this.estadoDos = [
            {
                sIndEstado: 'H',
                descEstado: 'Habilitado'
            }
        ];
        this.sexo = [
            {
                sSexo: 'M',
                descSexo: 'Masculino'
            },
            {
                sSexo: 'F',
                descSexo: 'Femenino'
            }
        ];
        this.edit = 0;
        this.user = {};
        this.saveUsuario = {};
        this.request = {};
        this.longitud_rut2 = 0;
        this.detalleUsuario = {};
        this.cambioEstadoUsuario = {};
        this.cambioPassUsuario = {};
        this.fechaActual = new Date();
        this.rutCambio = 0;
        this.showPassword = 'password';
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            sClaveAcceso: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nRunUsuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            nRutOperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sApeMaterno: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            sApePaterno: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            sCodCiudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            sCodRegion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            sDigVerificador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sDireccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            sEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            sIndEstado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            sMovil: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sNomCiudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            sNomRegion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            sNomUsuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            sNombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            sSexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            sTelefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            ope_snombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            usu_dfhocreacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
        });
    }
    DetalleUsuariosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subData = this.setearDatos.datosGeo$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.subData2 = this.usuariosService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.user = this.authService.getDatosUser();
        this.setDataUsuarios();
    };
    DetalleUsuariosComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
        if (this.subData2 !== undefined) {
            this.subData2.unsubscribe();
        }
    };
    DetalleUsuariosComponent.prototype.mostrarPass = function () {
        this.showPassword === 'password' ? this.showPassword = 'text' : this.showPassword = 'password';
    };
    DetalleUsuariosComponent.prototype.setDataUsuarios = function () {
        if (this.usuariosService.selectedUsers === undefined) {
            console.log('es nuevo');
            this.edit = 1;
            this.tabs = 1;
            this.forma.controls.nRutOperador.setValue(Number(this.user.nrutoperador));
            this.forma.controls.nRunUsuario.enable();
            this.forma.controls.usu_dfhocreacion.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
        else {
            this.edit = 2;
            this.tabs = 2;
            this.rutCambio = this.usuariosService.selectedUsers.usu_nrunusuario;
            this.forma.controls.nRunUsuario.setValue("" + ((this.usuariosService.selectedUsers.usu_nrunusuario) + (this.usuariosService.selectedUsers.usu_sdigverificador)));
            this.forma.controls.nRutOperador.setValue(this.usuariosService.selectedUsers.usu_nrutoperador);
            this.forma.controls.sApeMaterno.setValue(this.usuariosService.selectedUsers.usu_sapematerno);
            this.forma.controls.sApePaterno.setValue(this.usuariosService.selectedUsers.usu_sapepaterno);
            this.forma.controls.sCodCiudad.setValue(this.usuariosService.selectedUsers.usu_scodciudad);
            this.forma.controls.sCodRegion.setValue(this.usuariosService.selectedUsers.usu_scodregion);
            this.forma.controls.sDigVerificador.setValue(this.usuariosService.selectedUsers.usu_sdigverificador);
            this.forma.controls.sDireccion.setValue(this.usuariosService.selectedUsers.usu_sdireccion);
            this.forma.controls.sEmail.setValue(this.usuariosService.selectedUsers.usu_semail);
            this.forma.controls.sIndEstado.setValue(this.usuariosService.selectedUsers.usu_sindestado);
            this.forma.controls.sMovil.setValue(this.usuariosService.selectedUsers.usu_smovil);
            this.forma.controls.sNomCiudad.setValue(this.usuariosService.selectedUsers.usu_snomciudad);
            this.forma.controls.sNomRegion.setValue(this.usuariosService.selectedUsers.usu_snomregion);
            this.forma.controls.sNomUsuario.setValue(this.usuariosService.selectedUsers.usu_snomusuario);
            this.forma.controls.sNombre.setValue(this.usuariosService.selectedUsers.usu_snombre);
            this.forma.controls.sSexo.setValue(this.usuariosService.selectedUsers.usu_ssexo);
            this.forma.controls.sTelefono.setValue(this.usuariosService.selectedUsers.usu_stelefono);
            this.forma.controls.ope_snombre.setValue(this.usuariosService.selectedUsers.ope_snombre);
            //this.forma.controls.usu_dfhocreacion.setValue(this.usuariosService.selectedUsers.usu_dfhocreacion);
            this.forma.controls.usu_dfhocreacion.setValue(this.utilService.dateStringServiceToStringFormat(this.usuariosService.selectedUsers.usu_dfhocreacion));
        }
    };
    DetalleUsuariosComponent.prototype.validaRut = function () {
        this.rutValido = false;
        if (!this.utilService.isValidRUT(this.forma.controls.nRunUsuario.value)) {
            this.forma.controls.nRunUsuario.setValue('');
            swal('Atención', 'El RUT es incorrecto', 'error');
        }
        else {
            this.rutValido = true;
        }
    };
    DetalleUsuariosComponent.prototype.openModalOperadores = function () {
        this.origen = 'operadores';
        var initialState = {
            titulo: 'Operadores',
            origen: 'operadores'
        };
        this.operadoresUsuarioModal = this.modalService.show(_commonPopUp_operadoresPopUp_operadoresPopUp_component__WEBPACK_IMPORTED_MODULE_11__["OperadoresPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleUsuariosComponent.prototype.openModalRegiones = function () {
        this.origen = 'region';
        var initialState = {
            titulo: 'Region',
            origen: 'region'
        };
        this.utilGeoModal = this.modalService.show(_commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_10__["UtilGeoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleUsuariosComponent.prototype.openModalCiudades = function () {
        this.origen = 'ciudad';
        var initialState = {
            titulo: 'Ciudad',
            origen: 'ciudad',
            regionSeleccionada: this.territorioSeleccionado
        };
        this.utilGeoModal = this.modalService.show(_commonPopUp_utilGeoPopUp_utilGeoPopUp_component__WEBPACK_IMPORTED_MODULE_10__["UtilGeoPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DetalleUsuariosComponent.prototype.setData = function (resData) {
        if (resData !== 0) {
            switch (this.origen) {
                case 'region': {
                    this.forma.controls.sCodRegion.setValue(resData.par_codparametro01);
                    this.forma.controls.sNomRegion.setValue(resData.par_deslargo01);
                    this.forma.controls.sCodCiudad.setValue('');
                    this.forma.controls.sNomCiudad.setValue('');
                    this.territorioSeleccionado = resData.par_codparametro01;
                    break;
                }
                case 'ciudad': {
                    this.forma.controls.sCodCiudad.setValue(resData.par_codparametro01);
                    this.forma.controls.sNomCiudad.setValue(resData.par_deslargo01);
                    break;
                }
                case 'operadores': {
                    this.forma.controls.nRutOperador.setValue(resData.ope_nrutoperador);
                    this.forma.controls.ope_snombre.setValue(resData.ope_snombre);
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    DetalleUsuariosComponent.prototype.cambiarEstado = function () {
        var _this = this;
        this.loader.show();
        this.forma.controls.nRunUsuario.enable();
        if (this.forma.controls.sIndEstado.value !== '' || this.forma.controls.sIndEstado.value !== undefined) {
            this.cambioEstadoUsuario.nRunUsuario = this.rutCambio;
            this.cambioEstadoUsuario.sIndEstado = this.forma.controls.sIndEstado.value;
            console.log();
            this.usuariosService.changeEstadoUsuario(this.cambioEstadoUsuario)
                .subscribe(function (data) {
                console.log(data);
                if (data.error.codError === 0) {
                    _this.loader.hide();
                    swal('Bien', 'Se ha actualizado correctamente el estado del usuario', 'success');
                }
                else {
                    swal('Atención', data.error.msjError, 'error');
                    _this.loader.hide();
                }
            }, function (error) {
                _this.loader.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
        else {
            this.loader.hide();
            swal('Atención', 'Seleccione un estado valido para el Usuario', 'error');
        }
    };
    DetalleUsuariosComponent.prototype.resetearPass = function () {
        var _this = this;
        this.loader.show();
        this.cambioPassUsuario.nRunUsuario = this.rutCambio;
        this.cambioPassUsuario.sClaveAcceso = this.forma.controls.sClaveAcceso.value;
        this.passFormat = this.forma.controls.sClaveAcceso.value;
        this.usuariosService.changePassUsuario(this.cambioPassUsuario)
            .subscribe(function (data) {
            if (data.error.codError === 0) {
                swal('Bien', 'Se ha reseteado correctamente la contraseña', 'success');
                //this.forma.controls.nRunUsuario.disable();
                _this.loader.hide();
                _this.forma.controls.sClaveAcceso.setValue(_this.passFormat);
            }
            else {
                swal('Atención', data.error.msjError, 'error');
                //this.forma.controls.nRunUsuario.disable();
                _this.loader.hide();
                _this.forma.controls.sClaveAcceso.setValue(_this.passFormat);
            }
        }, function (error) {
            _this.loader.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    DetalleUsuariosComponent.prototype.saveDataUsuario = function () {
        var _this = this;
        this.forma.controls.nRunUsuario.enable();
        this.longitud_rut = this.forma.controls.nRunUsuario.value.toString();
        this.longitud_rut2 = this.longitud_rut.length;
        this.forma.controls.sDigVerificador.setValue(this.longitud_rut.substr((this.longitud_rut2 - 1), 1));
        this.forma.controls.nRunUsuario.setValue(Number(this.longitud_rut.substr(0, this.longitud_rut2 - 1)));
        this.passFormat = this.forma.controls.sClaveAcceso.value;
        $('*').removeClass('error-form');
        this.loader.show();
        //this.saveUsuario = this.forma.value;
        this.saveUsuario.nRunUsuario = Number(this.forma.controls.nRunUsuario.value),
            this.saveUsuario.nRutOperador = Number(this.forma.controls.nRutOperador.value),
            this.saveUsuario.sApeMaterno = this.forma.controls.sApeMaterno.value,
            this.saveUsuario.sApePaterno = this.forma.controls.sApePaterno.value,
            this.saveUsuario.sClaveAcceso = this.forma.controls.sClaveAcceso.value,
            this.saveUsuario.sCodCiudad = this.forma.controls.sCodCiudad.value,
            this.saveUsuario.sCodRegion = this.forma.controls.sCodRegion.value,
            this.saveUsuario.sDigVerificador = this.forma.controls.sDigVerificador.value,
            this.saveUsuario.sDireccion = this.forma.controls.sDireccion.value,
            this.saveUsuario.sEmail = this.forma.controls.sEmail.value,
            this.saveUsuario.sIndEstado = this.forma.controls.sIndEstado.value,
            this.saveUsuario.sMovil = this.forma.controls.sMovil.value.toString(),
            this.saveUsuario.sNomCiudad = this.forma.controls.sNomCiudad.value,
            this.saveUsuario.sNomRegion = this.forma.controls.sNomRegion.value,
            this.saveUsuario.sNomUsuario = this.forma.controls.sNomUsuario.value,
            this.saveUsuario.sNombre = this.forma.controls.sNombre.value,
            this.saveUsuario.sSexo = this.forma.controls.sSexo.value,
            this.saveUsuario.sTelefono = this.forma.controls.sTelefono.value.toString();
        console.log(this.saveUsuario);
        this.usuariosService.saveUsuario(this.saveUsuario)
            .subscribe(function (data) {
            console.log(data);
            if (data.error.codError === 0) {
                if (_this.edit === 1) {
                    _this.loader.hide();
                    swal('Bien', 'Los datos han sido ingresados satisfactoriamente. Continue su registro', 'success');
                    _this.request.nRunOperador = Number(_this.saveUsuario.nRutOperador);
                    _this.request.nRunUsuario = Number(_this.saveUsuario.nRunUsuario);
                    _this.usuariosService.getDetallesUsuarios(_this.request)
                        .subscribe(function (data) {
                        _this.loader.hide();
                        if (data.cargaUsuario != null) {
                            (_this.detalleUsuario = data.cargaUsuario);
                            _this.usuariosService.selectedUsers = Object.assign({}, _this.detalleUsuario[0]);
                            if (_this.usuariosService.selectedUsers !== undefined) {
                                _this.tabs = 2;
                                _this.edit = 2;
                                _this.setDataUsuarios();
                                _this.forma.controls.nRunUsuario.disable();
                                _this.forma.controls.sClaveAcceso.setValue(_this.passFormat);
                            }
                            else {
                                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                                _this.forma.controls.nRunUsuario.disable();
                            }
                        }
                        else {
                            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                            _this.forma.controls.nRunUsuario.disable();
                        }
                    }, function (error) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                        _this.loader.hide();
                    });
                }
                else {
                    if (_this.edit === 2) {
                        _this.loader.hide();
                        swal('Bien', 'Los datos han sido actualizados satisfactoriamente', 'success');
                        _this.usuariosService.selectedUsers = undefined;
                        _this.forma.reset();
                        _this.tabs = 1;
                        _this.edit = 1;
                        _this.router.navigate(['/administracionOperativa/usuarios']);
                    }
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
    DetalleUsuariosComponent.prototype.guardarUsuario = function () {
        console.log(this.forma.controls.sClaveAcceso.value);
        if (this.forma.valid && this.forma.controls.sClaveAcceso.value !== '') {
            this.saveDataUsuario();
        }
        else {
            if (!this.forma.valid) {
                if (this.edit === 1) {
                    swal('Atención', 'Existen campos requeridos no ingresados', 'error');
                    if (!this.forma.controls.nRunUsuario.valid) {
                        $('[name=nRunUsuario]').addClass('error-form');
                    }
                    else {
                        $('[name=nRunUsuario]').removeClass('error-form');
                    }
                    if (!this.forma.controls.sApeMaterno.valid) {
                        $('[name=sApeMaterno]').addClass('error-form');
                    }
                    else {
                        $('[name=sApeMaterno]').removeClass('error-form');
                    }
                    if (!this.forma.controls.sApePaterno.valid) {
                        $('[name=sApePaterno]').addClass('error-form');
                    }
                    else {
                        $('[name=sApePaterno]').removeClass('error-form');
                    }
                    if (!this.forma.controls.sCodCiudad.valid) {
                        $('[name=sNomCiudad]').addClass('error-form');
                    }
                    else {
                        $('[name=sNomCiudad]').removeClass('error-form');
                    }
                    if (!this.forma.controls.sCodRegion.valid) {
                        $('[name=sNomRegion]').addClass('error-form');
                    }
                    else {
                        $('[name=sNomRegion]').removeClass('error-form');
                    }
                    if (!this.forma.controls.sDireccion.valid) {
                        $('[name=sDireccion]').addClass('error-form');
                    }
                    else {
                        $('[name=sDireccion]').removeClass('error-form');
                    }
                    if (!this.forma.controls.sEmail.valid) {
                        $('[name=sEmail]').addClass('error-form');
                    }
                    else {
                        $('[name=sEmail]').removeClass('error-form');
                    }
                    if (!this.forma.controls.sIndEstado.valid) {
                        $('[name=sIndEstado]').addClass('error-form');
                    }
                    else {
                        $('[name=sIndEstado]').removeClass('error-form');
                    }
                    if (!this.forma.controls.sNomUsuario.valid) {
                        $('[name=sNomUsuario]').addClass('error-form');
                    }
                    else {
                        $('[name=sNomUsuario]').removeClass('error-form');
                    }
                    if (!this.forma.controls.sNombre.valid) {
                        $('[name=sNombre]').addClass('error-form');
                    }
                    else {
                        $('[name=sNombre]').removeClass('error-form');
                    }
                    if (!this.forma.controls.sSexo.valid) {
                        $('[name=sSexo]').addClass('error-form');
                    }
                    else {
                        $('[name=sSexo]').removeClass('error-form');
                    }
                    if (this.forma.controls.sClaveAcceso.value === '') {
                        $('[name=sClaveAcceso]').addClass('error-form');
                    }
                    else {
                        $('[name=sClaveAcceso]').removeClass('error-form');
                    }
                }
                else {
                    if (this.edit === 2) {
                        swal('Atención', 'Existen campos requeridos no ingresados', 'error');
                        if (!this.forma.controls.sApeMaterno.valid) {
                            $('[name=sApeMaterno]').addClass('error-form');
                        }
                        else {
                            $('[name=sApeMaterno]').removeClass('error-form');
                        }
                        if (!this.forma.controls.sApePaterno.valid) {
                            $('[name=sApePaterno]').addClass('error-form');
                        }
                        else {
                            $('[name=sApePaterno]').removeClass('error-form');
                        }
                        if (!this.forma.controls.sCodCiudad.valid) {
                            $('[name=sNomCiudad]').addClass('error-form');
                        }
                        else {
                            $('[name=sNomCiudad]').removeClass('error-form');
                        }
                        if (!this.forma.controls.sCodRegion.valid) {
                            $('[name=sNomRegion]').addClass('error-form');
                        }
                        else {
                            $('[name=sNomRegion]').removeClass('error-form');
                        }
                        if (!this.forma.controls.sDireccion.valid) {
                            $('[name=sDireccion]').addClass('error-form');
                        }
                        else {
                            $('[name=sDireccion]').removeClass('error-form');
                        }
                        if (!this.forma.controls.sEmail.valid) {
                            $('[name=sEmail]').addClass('error-form');
                        }
                        else {
                            $('[name=sEmail]').removeClass('error-form');
                        }
                        if (!this.forma.controls.sIndEstado.valid) {
                            $('[name=sIndEstado]').addClass('error-form');
                        }
                        else {
                            $('[name=sIndEstado]').removeClass('error-form');
                        }
                        if (!this.forma.controls.sNomUsuario.valid) {
                            $('[name=sNomUsuario]').addClass('error-form');
                        }
                        else {
                            $('[name=sNomUsuario]').removeClass('error-form');
                        }
                        if (!this.forma.controls.sNombre.valid) {
                            $('[name=sNombre]').addClass('error-form');
                        }
                        else {
                            $('[name=sNombre]').removeClass('error-form');
                        }
                        if (!this.forma.controls.sSexo.valid) {
                            $('[name=sSexo]').addClass('error-form');
                        }
                        else {
                            $('[name=sSexo]').removeClass('error-form');
                        }
                    }
                }
            }
            else if (this.forma.controls.sClaveAcceso.value === '' && this.edit === 1) {
                swal('Atención', 'Existen campos requeridos no ingresados', 'error');
                if (this.forma.controls.sClaveAcceso.value === '') {
                    $('[name=sClaveAcceso]').addClass('error-form');
                }
                else {
                    $('[name=sClaveAcceso]').removeClass('error-form');
                }
            }
            else if (this.forma.valid && this.forma.controls.sClaveAcceso.value === '') {
                if (this.edit === 1) {
                    swal('Atención', 'Existen campos requeridos no ingresados', 'error');
                    if (this.forma.controls.sClaveAcceso.value === '') {
                        $('[name=sClaveAcceso]').addClass('error-form');
                    }
                    else {
                        $('[name=sClaveAcceso]').removeClass('error-form');
                    }
                }
                else {
                    this.saveDataUsuario();
                }
            }
        }
    };
    DetalleUsuariosComponent.prototype.volver = function () {
        console.log('CHAO');
        this.usuariosService.selectedUsers = undefined;
        this.router.navigate(['/administracionOperativa/usuarios']);
        this.edit = 1;
        this.tabs = 1;
        this.forma.reset();
    };
    DetalleUsuariosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalleUsuarios',
            template: __webpack_require__(/*! ./detalleUsuarios.component.html */ "./src/app/routes/administracionOperativa/usuarios/detalleUsuarios/detalleUsuarios.component.html"),
            styles: [__webpack_require__(/*! ./detalleUsuarios.component.scss */ "./src/app/routes/administracionOperativa/usuarios/detalleUsuarios/detalleUsuarios.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__["ConsultasService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_9__["AdministracionOperativaService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"]])
    ], DetalleUsuariosComponent);
    return DetalleUsuariosComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionOperativa/usuarios/detalleUsuarios/navUsuarios/navUsuarios.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/usuarios/detalleUsuarios/navUsuarios/navUsuarios.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n    <div class=\"panel\">\r\n        <tabset>\r\n            <tab>\r\n                <ng-template tabHeading>Perfiles</ng-template>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-7\">\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\">Perfiles del Usuario</div>\r\n                            <div class=\"panel-body\">\r\n                                <div class=\"table-responsive\">\r\n                                    <table class=\"table table-hover\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th scope=\"col\">Aplicaci&oacute;n</th>\r\n                                                <th scope=\"col\">C&oacute;digo</th>\r\n                                                <th scope=\"col\">Perfil</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let perfileSeleccionado of perfilesSeleccionados | paginate: {itemsPerPage: 7, currentPage: pActualPerfilesSeleccionados, id: 'pagePerfilesSeleccionados'};\">\r\n                                                <td>{{perfileSeleccionado.per_scodapp}}</td>\r\n                                                <td>{{perfileSeleccionado.per_scodperfil}}</td>\r\n                                                <td>{{perfileSeleccionado.par_deslargo01}}</td>\r\n                                                <!-- <td class=\"text-center\">\r\n                                                        <span class=\"table-edit\">\r\n                                                        <a class=\"text\" (click)=\"editarRelacion(relacion)\">\r\n                                                            <em class=\"fa fa-edit\"></em>\r\n                                                        </a>\r\n                                                    </span>\r\n                                                    </td> -->\r\n                                                <td>\r\n                                                    <span>\r\n                                                        <a class=\"text\" (click)=\"eliminar(perfileSeleccionado)\">\r\n                                                            <em class=\"fa fa-trash\"></em>\r\n                                                        </a>\r\n                                                    </span>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                    <br>\r\n                                    <div class=\"text-right\">\r\n                                        <pagination-controls (pageChange)=\"pActualPerfilesSeleccionados = $event\" id=\"pagePerfilesSeleccionados\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-5\">\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\">Perfiles Disponibles</div>\r\n                            <div class=\"panel-body\">\r\n                                <form [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <div class=\"col-sm-9\">\r\n                                                <select class=\"form-control pv-0\" formControlName=\"sCodPerfil\" name=\"sCodPerfil\">\r\n                                                  <option *ngFor=\"let perfiles of perfilesDisponibles\" [ngValue]=\"perfiles.par_codparametro02\">{{perfiles.par_deslargo01}}</option>\r\n                                                </select>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <button class=\"btn btn-oval btn-sm\" type=\"submit\" (click)=\"agregarPerfil()\">Agregar</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </tab>\r\n        </tabset>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionOperativa/usuarios/detalleUsuarios/navUsuarios/navUsuarios.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/usuarios/detalleUsuarios/navUsuarios/navUsuarios.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/administracionOperativa/usuarios/detalleUsuarios/navUsuarios/navUsuarios.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/usuarios/detalleUsuarios/navUsuarios/navUsuarios.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: NavUsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavUsuariosComponent", function() { return NavUsuariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
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
var NavUsuariosComponent = /** @class */ (function () {
    function NavUsuariosComponent(http, fb, modalService, setearDatos, authService, loader, router, datePipe, usuariosService) {
        this.http = http;
        this.modalService = modalService;
        this.setearDatos = setearDatos;
        this.authService = authService;
        this.loader = loader;
        this.router = router;
        this.datePipe = datePipe;
        this.usuariosService = usuariosService;
        this.buscaUsuarios = {};
        this.request = {};
        this.deletePerfil = {};
        this.savePerfil = {};
        this.user = {};
        this.pActualPerfilesSeleccionados = 1;
        this.perfilesSeleccionados = [];
        this.perfilesDisponibles = [];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nRunUsuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sCodPerfil: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    NavUsuariosComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getDatosUser();
        this.listarPerfilesUsuario();
    };
    NavUsuariosComponent.prototype.listarPerfilesUsuario = function () {
        var _this = this;
        this.request.nRunUsuario = Number(this.usuariosService.selectedUsers.usu_nrunusuario);
        this.usuariosService.getPerfilesUsuario(this.request)
            .subscribe(function (data) {
            (_this.perfilesSeleccionados = data.perfilesActuales);
            (_this.perfilesDisponibles = data.perfilesDisponibles);
            _this.forma.controls.sCodPerfil.setValue(_this.perfilesDisponibles[0].par_codparametro02);
        });
    };
    NavUsuariosComponent.prototype.agregarPerfil = function () {
        var _this = this;
        this.loader.show();
        this.forma.controls.nRunUsuario.setValue(Number(this.usuariosService.selectedUsers.usu_nrunusuario));
        this.savePerfil = this.forma.value;
        this.usuariosService.savePerfilesUsuario(this.savePerfil)
            .subscribe(function (data) {
            if (data.error.codError === 0) {
                _this.loader.hide();
                swal('Bien', 'El Perfil se ha agregado correctamente', 'success');
                _this.forma.controls.sCodPerfil.setValue('');
                _this.listarPerfilesUsuario();
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
    NavUsuariosComponent.prototype.eliminar = function (perfileSeleccionado) {
        var _this = this;
        this.loader.show();
        this.deletePerfil.nRunUsuario = Number(perfileSeleccionado.per_nrunusuario);
        this.deletePerfil.sCodPerfil = perfileSeleccionado.per_scodperfil;
        this.usuariosService.deletePerfilesUsuario(this.deletePerfil)
            .subscribe(function (data) {
            if (data.error.codError === 0) {
                _this.loader.hide();
                swal('Bien', 'El Perfil se ha eliminado correctamente', 'success');
                _this.listarPerfilesUsuario();
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
    NavUsuariosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navUsuarios',
            template: __webpack_require__(/*! ./navUsuarios.component.html */ "./src/app/routes/administracionOperativa/usuarios/detalleUsuarios/navUsuarios/navUsuarios.component.html"),
            styles: [__webpack_require__(/*! ./navUsuarios.component.scss */ "./src/app/routes/administracionOperativa/usuarios/detalleUsuarios/navUsuarios/navUsuarios.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__["ConsultasService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_9__["AdministracionOperativaService"]])
    ], NavUsuariosComponent);
    return NavUsuariosComponent;
}());



/***/ }),

/***/ "./src/app/routes/administracionOperativa/usuarios/usuarios.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/usuarios/usuarios.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h3>Usuarios</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Run Usuario</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input appRutFormat formControlName=\"nRunUsuario\" name=\"nRunUsuario\" class=\"form-control\" type=\"text\" (change)=\"validaRut()\" maxlength=\"9\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Nombre</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"sNombre\" name=\"sNombre\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Username</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"sUsername\" name=\"sUsername\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Ap. Paterno</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"sAppaterno\" name=\"sAppaterno\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-2 p-0\">\r\n                    <div class=\"col-sm-5\">\r\n                        <button name=\"espera\" class=\"btn btn-oval btn\" (click)=\"crearUsuarios()\" type=\"button\">Agregar</button>\r\n                    </div>\r\n                    <div class=\"col-sm-6 pl-5\">\r\n                        <button name=\"espera\" class=\"btn btn-oval btn\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\">RUN</th>\r\n                        <th scope=\"col\">Username</th>\r\n                        <th nowrap scope=\"col\">Nombre</th>\r\n                        <th nowrap scope=\"col\">Ap. Paterno</th>\r\n                        <th nowrap scope=\"col\">Ap. Materno</th>\r\n                        <th nowrap scope=\"col\">Estado</th>\r\n                        <th scope=\"col\">Ver</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let usuario of usuarios | paginate: {itemsPerPage: 7, currentPage: pActualBuscaUsuarios, id: 'pageBuscaUsuarios'};\">\r\n                        <td nowrap>{{usuario.usu_nrunusuario}}-{{usuario.usu_sdigverificador}}</td>\r\n                        <td nowrap>{{usuario.usu_snomusuario}}</td>\r\n                        <td nowrap>{{usuario.usu_snombre}}</td>\r\n                        <td nowrap>{{usuario.usu_sapepaterno}}</td>\r\n                        <td nowrap>{{usuario.usu_sapematerno}}</td>\r\n                        <td nowrap>{{usuario.usu_sindestado === 'H' ? 'Habilitado' : 'Deshabilitado'}}</td>\r\n                        <td>\r\n                            <span class=\"table-remove\">\r\n                                <a class=\"text\" (click)=\"editarUsuario(usuario)\">\r\n                                    <em class=\"fa fa-search\"></em>\r\n                                </a>\r\n                            </span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <br>\r\n            <div class=\"text-right\">\r\n                <pagination-controls (pageChange)=\"pActualBuscaUsuarios = $event\" id=\"pageBuscaUsuarios\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/administracionOperativa/usuarios/usuarios.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/usuarios/usuarios.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/administracionOperativa/usuarios/usuarios.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/administracionOperativa/usuarios/usuarios.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
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
var UsuariosComponent = /** @class */ (function () {
    function UsuariosComponent(http, fb, usuariosService, utilService, loader, authService, router) {
        this.http = http;
        this.usuariosService = usuariosService;
        this.utilService = utilService;
        this.loader = loader;
        this.authService = authService;
        this.router = router;
        this.user = {};
        this.request = {};
        this.requestdos = {};
        this.usuarios = [];
        this.pActualBuscaUsuarios = 1;
        this.detalleUsuario = {};
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nRunUsuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sNombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sUsername: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sAppaterno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            nRutOperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    UsuariosComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getDatosUser();
        if (this.usuariosService.busquedaUsuario !== undefined) {
            this.buscar(true);
        }
    };
    UsuariosComponent.prototype.validaRut = function () {
        this.rutValido = false;
        if (!this.utilService.isValidRUT(this.forma.controls.nRunUsuario.value)) {
            this.forma.controls.nRunUsuario.setValue('');
            this.forma.controls.sNombre.setValue('');
            this.forma.controls.sUsername.setValue('');
            swal('Atención', 'El RUT es incorrecto', 'error');
            this.usuarios = [];
        }
        else {
            this.rutValido = true;
        }
    };
    UsuariosComponent.prototype.buscar = function (conBusqueda) {
        var _this = this;
        this.loader.show();
        if (conBusqueda) {
            this.request = this.usuariosService.busquedaUsuario;
            this.forma = this.usuariosService.formaUsuario;
        }
        else {
            if ((this.forma.controls.nRunUsuario.pristine) ||
                (this.forma.controls.nRunUsuario.value === '') ||
                (this.forma.controls.nRunUsuario.value === null)) {
                this.forma.controls.nRunUsuario.setValue(0);
            }
            else {
                this.forma.controls.nRunUsuario.setValue(Number(this.forma.controls.nRunUsuario.value.substr(0, this.forma.controls.nRunUsuario.value.length - 1)));
            }
            this.forma.controls.nRutOperador.setValue(Number(this.user.nrutoperador));
            this.request = this.forma.value;
            this.usuariosService.busquedaUsuario = Object.assign({}, this.request);
            this.usuariosService.formaUsuario = this.forma;
        }
        this.usuariosService.getUsuarios(this.request)
            .subscribe(function (data) {
            _this.loader.hide();
            if (data.usuario === null) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
            else {
                if (data.usuario.length === 0 && data.error.codError === 0) {
                    swal('Atención', 'No se encontraron resultados', 'info');
                    _this.forma.controls.nRunUsuario.setValue('');
                    _this.forma.controls.sNombre.setValue('');
                    _this.forma.controls.sUsername.setValue('');
                    _this.forma.controls.sAppaterno.setValue('');
                }
                else {
                    (_this.usuarios = data.usuario);
                    _this.forma.controls.nRunUsuario.setValue('');
                    _this.forma.controls.sNombre.setValue('');
                    _this.forma.controls.sUsername.setValue('');
                    _this.forma.controls.sAppaterno.setValue('');
                }
            }
            if (data.error.codError !== 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.loader.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    UsuariosComponent.prototype.editarUsuario = function (usuario) {
        var _this = this;
        this.loader.show();
        this.requestdos.nRunOperador = Number(usuario.usu_nrutoperador);
        this.requestdos.nRunUsuario = Number(usuario.usu_nrunusuario);
        this.usuariosService.getDetallesUsuarios(this.requestdos)
            .subscribe(function (data) {
            console.log(data);
            _this.loader.hide();
            if (data.cargaUsuario != null) {
                (_this.detalleUsuario = data.cargaUsuario);
                _this.usuariosService.selectedUsers = Object.assign({}, _this.detalleUsuario[0]);
                if (_this.usuariosService.selectedUsers !== undefined) {
                    _this.router.navigate(['/administracionOperativa/detalleUsuarios']);
                }
                else {
                    _this.loader.hide();
                }
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            _this.loader.hide();
        });
    };
    UsuariosComponent.prototype.crearUsuarios = function () {
        this.usuariosService.selectedUsers = undefined;
        this.router.navigate(['/administracionOperativa/detalleUsuarios']);
    };
    UsuariosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuarios',
            template: __webpack_require__(/*! ./usuarios.component.html */ "./src/app/routes/administracionOperativa/usuarios/usuarios.component.html"),
            styles: [__webpack_require__(/*! ./usuarios.component.scss */ "./src/app/routes/administracionOperativa/usuarios/usuarios.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_7__["AdministracionOperativaService"], _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], UsuariosComponent);
    return UsuariosComponent;
}());



/***/ })

}]);
//# sourceMappingURL=administracionOperativa-administracionOperativa-module.js.map