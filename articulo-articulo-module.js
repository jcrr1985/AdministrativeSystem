(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["articulo-articulo-module"],{

/***/ "./src/app/routes/articulo/articulo.module.ts":
/*!****************************************************!*\
  !*** ./src/app/routes/articulo/articulo.module.ts ***!
  \****************************************************/
/*! exports provided: ArticuloModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticuloModule", function() { return ArticuloModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-table/ng2-table */ "./node_modules/ng2-table/ng2-table.js");
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _commonPopUp_commonPopUp_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../commonPopUp/commonPopUp.module */ "./src/app/routes/commonPopUp/commonPopUp.module.ts");
/* harmony import */ var _buscaArticulo_buscaArticulo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buscaArticulo/buscaArticulo.component */ "./src/app/routes/articulo/buscaArticulo/buscaArticulo.component.ts");
/* harmony import */ var _definicionArticulo_definicionArticulo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./definicionArticulo/definicionArticulo.component */ "./src/app/routes/articulo/definicionArticulo/definicionArticulo.component.ts");
/* harmony import */ var _definicionArticulo_navDefinicionArticulo_pack_pack_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./definicionArticulo/navDefinicionArticulo/pack/pack.component */ "./src/app/routes/articulo/definicionArticulo/navDefinicionArticulo/pack/pack.component.ts");
/* harmony import */ var _definicionArticulo_navDefinicionArticulo_pack_totales_totales_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./definicionArticulo/navDefinicionArticulo/pack/totales/totales.component */ "./src/app/routes/articulo/definicionArticulo/navDefinicionArticulo/pack/totales/totales.component.ts");
/* harmony import */ var _jerarquia_jerarquia_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jerarquia/jerarquia.component */ "./src/app/routes/articulo/jerarquia/jerarquia.component.ts");
/* harmony import */ var _jerarquia_pais_pais_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./jerarquia/pais/pais.component */ "./src/app/routes/articulo/jerarquia/pais/pais.component.ts");
/* harmony import */ var _jerarquia_linea_linea_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./jerarquia/linea/linea.component */ "./src/app/routes/articulo/jerarquia/linea/linea.component.ts");
/* harmony import */ var _jerarquia_categoria_categoria_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./jerarquia/categoria/categoria.component */ "./src/app/routes/articulo/jerarquia/categoria/categoria.component.ts");
/* harmony import */ var _jerarquia_agrupacion_agrupacion_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./jerarquia/agrupacion/agrupacion.component */ "./src/app/routes/articulo/jerarquia/agrupacion/agrupacion.component.ts");
/* harmony import */ var _jerarquia_productoBase_productoBase_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./jerarquia/productoBase/productoBase.component */ "./src/app/routes/articulo/jerarquia/productoBase/productoBase.component.ts");
/* harmony import */ var _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component */ "./src/app/routes/commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component.ts");
/* harmony import */ var _commonPopUp_paisPopUp_paisPopUp_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../commonPopUp/paisPopUp/paisPopUp.component */ "./src/app/routes/commonPopUp/paisPopUp/paisPopUp.component.ts");
/* harmony import */ var _commonPopUp_lineaPopUp_lineaPopUp_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../commonPopUp/lineaPopUp/lineaPopUp.component */ "./src/app/routes/commonPopUp/lineaPopUp/lineaPopUp.component.ts");
/* harmony import */ var _commonPopUp_categoriaPopUp_categoriaPopUp_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../commonPopUp/categoriaPopUp/categoriaPopUp.component */ "./src/app/routes/commonPopUp/categoriaPopUp/categoriaPopUp.component.ts");
/* harmony import */ var _commonPopUp_agrupacionPopUp_agrupacionPopUp_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../commonPopUp/agrupacionPopUp/agrupacionPopUp.component */ "./src/app/routes/commonPopUp/agrupacionPopUp/agrupacionPopUp.component.ts");
/* harmony import */ var _commonPopUp_productoBasePopUp_productoBasePopUp_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../commonPopUp/productoBasePopUp/productoBasePopUp.component */ "./src/app/routes/commonPopUp/productoBasePopUp/productoBasePopUp.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [
    { path: 'buscaArticulo', component: _buscaArticulo_buscaArticulo_component__WEBPACK_IMPORTED_MODULE_7__["BuscaArticuloComponent"] },
    { path: 'detalleArticulo', component: _definicionArticulo_definicionArticulo_component__WEBPACK_IMPORTED_MODULE_8__["DefinicionArticuloComponent"] },
    { path: 'jerarquia', component: _jerarquia_jerarquia_component__WEBPACK_IMPORTED_MODULE_11__["JerarquiaComponent"] }
];
var ArticuloModule = /** @class */ (function () {
    function ArticuloModule() {
    }
    ArticuloModule = __decorate([
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
                _buscaArticulo_buscaArticulo_component__WEBPACK_IMPORTED_MODULE_7__["BuscaArticuloComponent"],
                _definicionArticulo_definicionArticulo_component__WEBPACK_IMPORTED_MODULE_8__["DefinicionArticuloComponent"],
                _definicionArticulo_navDefinicionArticulo_pack_pack_component__WEBPACK_IMPORTED_MODULE_9__["PackComponent"],
                _definicionArticulo_navDefinicionArticulo_pack_totales_totales_component__WEBPACK_IMPORTED_MODULE_10__["TotalesComponent"],
                _jerarquia_jerarquia_component__WEBPACK_IMPORTED_MODULE_11__["JerarquiaComponent"],
                _jerarquia_pais_pais_component__WEBPACK_IMPORTED_MODULE_12__["PaisComponent"],
                _jerarquia_linea_linea_component__WEBPACK_IMPORTED_MODULE_13__["LineaComponent"],
                _jerarquia_categoria_categoria_component__WEBPACK_IMPORTED_MODULE_14__["CategoriaComponent"],
                _jerarquia_agrupacion_agrupacion_component__WEBPACK_IMPORTED_MODULE_15__["AgrupacionComponent"],
                _jerarquia_productoBase_productoBase_component__WEBPACK_IMPORTED_MODULE_16__["ProductoBaseComponent"],
            ],
            entryComponents: [_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_17__["BuscarArticuloPopUpComponent"], _commonPopUp_paisPopUp_paisPopUp_component__WEBPACK_IMPORTED_MODULE_18__["PaisPopUpComponent"], _commonPopUp_lineaPopUp_lineaPopUp_component__WEBPACK_IMPORTED_MODULE_19__["LineaPopUpComponent"], _commonPopUp_categoriaPopUp_categoriaPopUp_component__WEBPACK_IMPORTED_MODULE_20__["CategoriaPopUpComponent"], _commonPopUp_agrupacionPopUp_agrupacionPopUp_component__WEBPACK_IMPORTED_MODULE_21__["AgrupacionPopUpComponent"], _commonPopUp_productoBasePopUp_productoBasePopUp_component__WEBPACK_IMPORTED_MODULE_22__["ProductoBasePopUpComponent"]],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ArticuloModule);
    return ArticuloModule;
}());



/***/ }),

/***/ "./src/app/routes/articulo/buscaArticulo/buscaArticulo.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/routes/articulo/buscaArticulo/buscaArticulo.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4> Art&iacute;culos</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Línea</label>\r\n                    <div class=\"col-sm-5 pl-0\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input formControlName=\"codLinea\" name=\"codLinea\" class=\"form-control\" type=\"text\" (change)=\"validaLinea()\" maxlength=\"5\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"descLinea\" name=\"linea\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalLineas()\">\r\n                            <em class=\"icon-magnifier\"></em>\r\n                          </button>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <label class=\"col-sm-1 control-label text-right\">Categor&iacute;a</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input formControlName=\"codCategoria\" name=\"codCategoria\" class=\"form-control\" type=\"text\" (change)=\"validaCategoria()\" maxlength=\"5\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"descCategoria\" name=\"descCategoria\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCategorias()\">\r\n                        <em class=\"icon-magnifier\"></em>\r\n                      </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Agrupaci&oacute;n</label>\r\n                    <div class=\"col-sm-5 pl-0\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input formControlName=\"codAgrupacion\" name=\"codAgrupacion\" class=\"form-control\" type=\"text\" (change)=\"validaAgrupacion()\" maxlength=\"5\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"descAgrupacion\" name=\"descAgrupacion\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalAgrupacion()\">\r\n                          <em class=\"icon-magnifier\"></em>\r\n                        </button>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <label class=\"col-sm-1 control-label text-right\">Prod. Base</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input formControlName=\"codProdBase\" name=\"codProdBase\" class=\"form-control\" type=\"text\" (change)=\"validaProdBase()\" maxlength=\"5\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"descProdBase\" name=\"descProdBase\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalProdBase()\">\r\n                      <em class=\"icon-magnifier\"></em>\r\n                    </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">C&oacute;d. Art&iacute;culo</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"codArtFormato\" name=\"codArtFormato\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"codArtVariedad\" name=\"codArtVariedad\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label text-right\">C&oacute;d. Nestl&eacute;</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input formControlName=\"codNestle\" name=\"codNestle\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label text-right\">Estado</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"estado\" name=\"estado\">\r\n                                <option *ngFor=\"let userEstado of estado\" [ngValue]=\"userEstado.codEstado\">{{userEstado.descEstado}}</option>\r\n                      </select>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"col-lg-12\">\r\n                    <label class=\"col-sm-1 control-label\">Composici&oacute;n</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"composicion\" name=\"composicion\">\r\n                        <option *ngFor=\"let userComposicion of composicion\" [ngValue]=\"userComposicion.codComposicion\">{{userComposicion.descComposicion}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label text-right\">Descriptor</label>\r\n                    <div class=\"col-sm-7\">\r\n                        <input formControlName=\"descriptor\" name=\"descriptor\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n        <div class=\"row pull-left mb-4\">\r\n            <div class=\"col-sm-3 mr-1\">\r\n                <button class=\"btn btn-oval btn-sm\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n            </div>\r\n            <div class=\"col-sm-3 mr-2\">\r\n                <a routerLink=\"/buscaArticulo/detalleArticulo\" (click)=\"AgregarArticulo()\" class=\"btn btn-oval btn-sm\" role=\"button\">Agregar</a>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <button class=\"btn btn-oval btn-sm\" (click)=\"generateExcel()\" [disabled]='!exportar'>Exportar</button>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <br>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th scope=\"col\">LN</th>\r\n                                <th scope=\"col\">CT</th>\r\n                                <th scope=\"col\">AG</th>\r\n                                <th scope=\"col\">PB</th>\r\n                                <th scope=\"col\">Cod. Articulo</th>\r\n                                <th scope=\"col\">Cod. Nestle</th>\r\n                                <th scope=\"col\">Descripcion</th>\r\n                                <th scope=\"col\">Precio</th>\r\n                                <th scope=\"col\">Fecha Vigencia</th>\r\n                                <th scope=\"col\">Estado</th>\r\n                                <th scope=\"col\">Ver</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let articulo of articulos | paginate: {itemsPerPage: 7, currentPage: pageActual};\">\r\n                                <td>{{articulo.jli_scodlinea}}</td>\r\n                                <td>{{articulo.jca_scodcategoria}}</td>\r\n                                <td>{{articulo.jag_scodagrupacion}}</td>\r\n                                <td>{{articulo.jpb_scodproductobase}}</td>\r\n                                <td>{{articulo.art_scodformato}} - {{articulo.art_scodvariedad}}</td>\r\n                                <td>{{articulo.art_scodsap}}</td>\r\n                                <td>{{articulo.art_sdescripcion }}</td>\r\n                                <td class=\"text-right\">{{articulo.pra_nprecio | number:'':'es'}}</td>\r\n                                <td class=\"text-center\">{{articulo.art_dfhocreacion | date: 'dd/MM/yyyy' }}</td>\r\n                                <td>{{articulo.art_scodestado | estadoVigencia }}</td>\r\n                                <td class=\"text-center\">\r\n                                    <span class=\"table-remove\">\r\n                                        <a class=\"text\" data-toggle=\"tooltip\" title=\"Editar Artículo\" (click)=\"editarArticulo(articulo)\">\r\n                                            <em class=\"fa fa-search\"></em>\r\n                                        </a>\r\n                                    </span>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <br>\r\n                    <div class=\"text-right\">\r\n                        <pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\"></pagination-controls>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/articulo/buscaArticulo/buscaArticulo.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/routes/articulo/buscaArticulo/buscaArticulo.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/articulo/buscaArticulo/buscaArticulo.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/routes/articulo/buscaArticulo/buscaArticulo.component.ts ***!
  \**************************************************************************/
/*! exports provided: BuscaArticuloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscaArticuloComponent", function() { return BuscaArticuloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/articulo.service */ "./src/app/core/consultaService/articulo.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component */ "./src/app/routes/commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var BuscaArticuloComponent = /** @class */ (function () {
    function BuscaArticuloComponent(fb, http, excelService, articuloService, consultasService, cargador, modalService, utilService, authService, router, datePipe) {
        this.http = http;
        this.excelService = excelService;
        this.articuloService = articuloService;
        this.consultasService = consultasService;
        this.cargador = cargador;
        this.modalService = modalService;
        this.utilService = utilService;
        this.authService = authService;
        this.router = router;
        this.datePipe = datePipe;
        this.fechaActual = new Date();
        this.origen = '';
        this.request = {};
        this.articulos = [];
        this.pageActual = 1;
        this.estado = [
            {
                codEstado: null,
                descEstado: '(Todos)'
            },
            {
                codEstado: 'VIGEN',
                descEstado: 'Vigente'
            },
            {
                codEstado: 'NOVIG',
                descEstado: 'No Vigente'
            }
        ];
        this.composicion = [
            {
                codComposicion: null,
                descComposicion: '(Todos)'
            },
            {
                codComposicion: 'UNITA',
                descComposicion: 'Unitarios'
            },
            {
                codComposicion: 'PACKS',
                descComposicion: 'Packs'
            }
        ];
        this.exportar = false;
        this.datos = [];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroup"]({
            codLinea: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            descLinea: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required),
            codCategoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            descCategoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required),
            codAgrupacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            descAgrupacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required),
            codProdBase: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            descProdBase: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required),
            codArtFormato: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            codArtVariedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            codNestle: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](),
            composicion: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](),
            descriptor: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('')
        });
        this.parametros = authService.getParametrosArticulo();
    }
    BuscaArticuloComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.articuloService.busqueda !== undefined) {
            this.buscar(true);
        }
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8___default.a);
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    BuscaArticuloComponent.prototype.ngOnDestroy = function () {
        if (this.subData != undefined) {
            this.subData.unsubscribe();
        }
    };
    BuscaArticuloComponent.prototype.validaLinea = function () {
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
    BuscaArticuloComponent.prototype.validaCategoria = function () {
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
    BuscaArticuloComponent.prototype.validaAgrupacion = function () {
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
    BuscaArticuloComponent.prototype.validaProdBase = function () {
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
    BuscaArticuloComponent.prototype.openModalLineas = function () {
        this.origen = 'linea';
        var initialState = {
            titulo: 'Líneas',
            origen: 'linea'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_12__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    BuscaArticuloComponent.prototype.openModalCategorias = function () {
        this.origen = 'categoria';
        var initialState = {
            titulo: 'Categorías',
            origen: 'categoria'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_12__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    BuscaArticuloComponent.prototype.openModalAgrupacion = function () {
        this.origen = 'agrupacion';
        var initialState = {
            titulo: 'Agrupaciones',
            origen: 'agrupacion'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_12__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    BuscaArticuloComponent.prototype.openModalProdBase = function () {
        this.origen = 'prodbase';
        var initialState = {
            titulo: 'Productos Base',
            origen: 'prodbase'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_12__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    BuscaArticuloComponent.prototype.setData = function (resData) {
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
            }
        }
        $('body').removeClass('modal-open');
    };
    BuscaArticuloComponent.prototype.buscar = function (conBusqueda) {
        var _this = this;
        if (conBusqueda) {
            this.request = this.articuloService.busqueda;
            this.forma = this.articuloService.forma;
        }
        else {
            this.request.scodagrupacion = this.forma.controls.codAgrupacion.value;
            this.request.scodcategoria = this.forma.controls.codCategoria.value;
            this.request.scodcomposicion = this.forma.controls.composicion.value;
            this.request.scodestado = this.forma.controls.estado.value;
            this.request.scodformato = this.forma.controls.codArtFormato.value;
            this.request.scodlinea = this.forma.controls.codLinea.value;
            this.request.scodproductobase = this.forma.controls.codProdBase.value;
            this.request.scodsap = this.forma.controls.codNestle.value;
            this.request.scodvariedad = this.forma.controls.codArtVariedad.value;
            this.request.snomdescriptor = this.forma.controls.descriptor.value;
            this.articuloService.busqueda = Object.assign({}, this.request);
            this.articuloService.forma = this.forma;
        }
        this.cargador.show();
        this.articulos = [];
        this.exportar = false;
        this.articuloService.getArticulos(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            if (data.articulo) {
                if (data.articulo.length == 0 && data.error.codError == 0) {
                    swal('Atención', 'No se encontraron resultados', 'info');
                }
                else {
                    _this.exportar = true;
                    (_this.articulos = data.articulo);
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
    BuscaArticuloComponent.prototype.editarArticulo = function (articulo) {
        var _this = this;
        this.cargador.show();
        this.articuloService.selectedArticulo = Object.assign({}, articulo);
        this.request = {
            "scodformato": this.articuloService.selectedArticulo.art_scodformato,
            "scodvariedad": this.articuloService.selectedArticulo.art_scodvariedad
        };
        this.articuloService.getCargaArticuloPack(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            console.log('data carga articulo', data);
            _this.articuloService.selectedArticuloDetail = Object.assign(data.articulo);
            console.log('this.articuloService.selectedArticuloDetail', _this.articuloService.selectedArticuloDetail);
            _this.articuloService.selectedArticuloDetailPack = Object.assign(data.pack);
            console.log('this.articuloService.selectedArticuloDetailPack', _this.articuloService.selectedArticuloDetailPack);
            if ((Object.keys(_this.articuloService.selectedArticuloDetail).length)) {
                _this.router.navigate(['/buscaArticulo/detalleArticulo']);
            }
            else {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
            if (data.error.codError != 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    BuscaArticuloComponent.prototype.AgregarArticulo = function () {
        this.articuloService.selectedArticulo = Object.assign({});
    };
    BuscaArticuloComponent.prototype.generateExcel = function () {
        var headerExcel = [
            "Línea", "Categoría", "Agrupación", "Prod. Base", "Cod. Articulo", "Cod. Nestle", "Descripción", "Precio",
            "Fecha Vigencia", "Estado"
        ];
        var dataExcel = [];
        for (var i in this.articulos) {
            console.log('fecha art', this.articulos[i].art_dfhocreacion);
            var articulo = [
                this.articulos[i].jli_scodlinea,
                this.articulos[i].jca_scodcategoria,
                this.articulos[i].jag_scodagrupacion,
                this.articulos[i].jpb_scodproductobase,
                this.articulos[i].art_scodformato + " - " + this.articulos[i].art_scodvariedad,
                this.articulos[i].art_scodsap,
                this.articulos[i].art_sdescripcion,
                this.articulos[i].pra_nprecio,
                this.datePipe.transform(this.articulos[i].art_dfhocreacion, "dd-MM-yyyy"),
                "" + (this.articulos[i].art_scodestado === "VIGEN" ? "Vigente" : "No Vigente")
            ];
            dataExcel.push(articulo);
        }
        var fechaExcel = this.utilService.dateToLocalStringFormat(this.fechaActual);
        var titulo = "Articulos_" + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        this.excelService.generateExcel(titulo, headerExcel, dataExcel, fechaExcel);
        swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
        this.exportar = false;
    };
    BuscaArticuloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buscaArticulo',
            template: __webpack_require__(/*! ./buscaArticulo.component.html */ "./src/app/routes/articulo/buscaArticulo/buscaArticulo.component.html"),
            styles: [__webpack_require__(/*! ./buscaArticulo.component.scss */ "./src/app/routes/articulo/buscaArticulo/buscaArticulo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_2__["ExcelService"],
            _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_3__["ArticuloService"], _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_4__["ConsultasService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["BsModalService"], _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]])
    ], BuscaArticuloComponent);
    return BuscaArticuloComponent;
}());



/***/ }),

/***/ "./src/app/routes/articulo/definicionArticulo/definicionArticulo.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/routes/articulo/definicionArticulo/definicionArticulo.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Definici&oacute;n</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal mb-4\" role=\"form\" data-toggle=\"validator\">\r\n            <div class=\"form-group\">\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">C&oacute;digo</label>\r\n                    <div class=\"col-sm-3 ph-0\">\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"codigoFormato\" name=\"codigoFormato\" class=\"form-control\" type=\"text\" maxlength=\"5\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"codigoVariedad\" name=\"codigoVariedad\" class=\"form-control\" type=\"text\" maxlength=\"5\" />\r\n                        </div>\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label\">Descripci&oacute;n</label>\r\n                    <div class=\"col-sm-7 pr-0\">\r\n                        <div class=\"col-sm-7 pl-0\">\r\n                            <input formControlName=\"descripcion\" name=\"descripcion\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <label class=\"col-sm-1 control-label\">Medida</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input formControlName=\"medida\" name=\"medida\" class=\"form-control\" type=\"text\" maxlength=\"40\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">C&oacute;digoSAP</label>\r\n\r\n                    <div class=\"col-sm-3\">\r\n                        <input appNaturalNumber formControlName=\"codSap\" name=\"codSap\" class=\"form-control\" type=\"number\" maxlength=\"18\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                    </div>\r\n\r\n                    <label class=\"col-sm-1 control-label\">Origen</label>\r\n                    <div class=\"col-sm-4 pr-0\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"origen\" name=\"origen\">\r\n                                <option *ngFor=\"let userOrigen of origen\" [ngValue]=\"userOrigen.par_codparametro01\">{{userOrigen.par_deslargo01}}</option>\r\n                            </select>\r\n                    </div>\r\n\r\n                    <label class=\"col-sm-1 control-label text-center\">Estado</label>\r\n                    <div class=\"col-sm-2 pl-0\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"estado\" name=\"estado\">\r\n                                <option *ngFor=\"let userEstado of estado\" [ngValue]=\"userEstado.codEstado\">{{userEstado.descEstado}}</option>\r\n                            </select>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label lh-12\">Cob. Existencia</label>\r\n                    <div class=\"col-sm-10 pl-0\">\r\n                        <div class=\"col-sm-2\">\r\n                            <input appNaturalNumber formControlName=\"coberExistencia\" name=\"coberExistencia\" class=\"form-control\" type=\"number\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <select class=\"form-control pv-0\" formControlName=\"codExistenciaParam\" name=\"codExistenciaParam\">\r\n                                <option *ngFor=\"let userCobExistencia of cobExistencia\" [ngValue]=\"userCobExistencia.par_codparametro01\">{{userCobExistencia.par_deslargo01}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <label class=\"col-sm-2 control-label text-right\">Tipo Art&iacute;culo</label>\r\n                        <div class=\"col-sm-3\">\r\n                            <select class=\"form-control pv-0\" formControlName=\"tipoArticulo\" name=\"tipoArticulo\">\r\n                                <option *ngFor=\"let userTipoArticulo of tipoArticulo\" [ngValue]=\"userTipoArticulo.par_codparametro01\">{{userTipoArticulo.par_deslargo01}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <div class=\"checkbox c-checkbox needsclick pt-0\">\r\n                                <label class=\"needsclick control-label\">\r\n                                   <input class=\"needsclick\" type=\"checkbox\" name=\"prodPack\" (change)=\"validaCheck()\" [checked]=\"checkSeleccionado\" [disabled]=\"disableCheck\" />\r\n                                   <span class=\"fa fa-check\"></span>Prod. Pack</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label lh-12\">Unid. Min. Pedido</label>\r\n                    <div class=\"col-sm-5 pl-0\">\r\n                        <div class=\"col-sm-3\">\r\n                            <input appNaturalNumber formControlName=\"unidadPedido1\" name=\"unidadPedido1\" class=\"form-control\" type=\"number\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <select class=\"form-control pv-0\" formControlName=\"unidadPedido2\" name=\"unidadPedido2\">\r\n                                <option *ngFor=\"let userUnidadPedido of unidadPedido\" [ngValue]=\"userUnidadPedido.par_codparametro01\">{{userUnidadPedido.par_deslargo01}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <input formControlName=\"unidadPedido3\" name=\"unidadPedido3\" class=\"form-control\" type=\"text\" maxlength=\"40\" />\r\n                        </div>\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label lh-12\">Unid. Min. Devoluci&oacute;n</label>\r\n                    <div class=\"col-sm-5 ph-0\">\r\n                        <div class=\"col-sm-3 pl-0\">\r\n                            <input appNaturalNumber formControlName=\"unidadDevo1\" name=\"unidadDevo1\" class=\"form-control\" type=\"number\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <select class=\"form-control pv-0\" formControlName=\"unidadDevo2\" name=\"unidadDevo2\">\r\n                                <option *ngFor=\"let userUnidadDevolucion of unidadDevolucion\" [ngValue]=\"userUnidadDevolucion.par_codparametro01\">{{userUnidadDevolucion.par_deslargo01}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <input formControlName=\"unidadDevo3\" name=\"unidadDevo3\" class=\"form-control\" type=\"text\" maxlength=\"40\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row pull-left mt-2\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"col-sm-6\">\r\n                            <button class=\"btn btn-oval btn-sm\" type=\"button\" (click)=\"guardarArticulo()\">Guardar</button>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <a routerLink=\"/buscaArticulo/buscaArticulo\" class=\"btn btn-oval btn-sm\" role=\"button\">Volver</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"panel\">\r\n                <tabset [justified]=\"true\">\r\n                    <tab>\r\n                        <ng-template tabHeading>Medidas, Plazos e Impuestos</ng-template>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-7\">\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading mt-2\"><b>Medidas</b></div>\r\n                                    <div class=\"panel-body\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-sm-3 control-label\">Peso/ Volumen Neto</label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <input #peso appDecimalNumber type=\"number\" step=\"0.01\" formControlName=\"peso\" name=\"peso\" class=\"form-control\" maxlength=\"10\" (focusout)=\"validaFormatoPorciento(peso)\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                />\r\n                                            </div>\r\n                                            <div class=\"col-sm-6\">\r\n                                                <select class=\"form-control pv-0\" formControlName=\"volumen\" name=\"volumen\">\r\n                                                    <option value=\"0\" selected>(Ninguna)</option>\r\n                                                    <option *ngFor=\"let uservolumen of volumen\" [ngValue]=\"uservolumen.par_codparametro01\">{{uservolumen.par_deslargo01}}</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-sm-3 control-label\">Unidad Estadistica</label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <select class=\"form-control pv-0\" formControlName=\"estadistica\" name=\"estadistica\">\r\n                                                    <option value=\"0\" selected>(Ninguna)</option>\r\n                                                    <option *ngFor=\"let userestadistica of estadistica\" [ngValue]=\"userestadistica.par_codparametro01\">{{userestadistica.par_deslargo01}}</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-sm-3 control-label\">Unidad Manejo Precio</label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <select class=\"form-control pv-0\" formControlName=\"manejoPrecio\" name=\"manejoPrecio\">\r\n                                                    <option value=\"0\" selected>(Ninguna)</option>\r\n                                                    <option *ngFor=\"let userunidadManejoPrecio of manejoPrecio\" [ngValue]=\"userunidadManejoPrecio.par_codparametro01\">{{userunidadManejoPrecio.par_deslargo01}}</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col-sm-5\">\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading mt-2\"><b>Impuestos</b></div>\r\n                                    <div class=\"panel-body\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-sm-2 control-label\">I.V.A</label>\r\n                                            <div class=\"col-sm-4\">\r\n                                                <select class=\"form-control pv-0\" formControlName=\"iva\" name=\"iva\">\r\n                                                    <option value=\"N\">No</option>\r\n                                                    <option value=\"S\">Si</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-sm-2 control-label\">I.A.B.A</label>\r\n                                            <div class=\"col-sm-4\">\r\n                                                <select class=\"form-control pv-0\" formControlName=\"iaba\" name=\"iaba\">\r\n                                                    <option value=\"N\">No</option>\r\n                                                    <option value=\"S\">Si</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-7\">\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading mt-2\"><b>Plazos</b></div>\r\n                                    <div class=\"panel-body\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-sm-3 control-label\">Permanencia Almacen</label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <input appNaturalNumber formControlName=\"permanencia\" name=\"permanencia\" class=\"form-control\" type=\"number\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-sm-3 control-label\">Validez Consumo</label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <input appNaturalNumber formControlName=\"validez\" name=\"validez\" class=\"form-control\" type=\"number\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-sm-3 control-label\">Manejo Clave</label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <input appNaturalNumber formControlName=\"manejoClave\" name=\"manejoClave\" class=\"form-control\" type=\"number\" (change)=\"validaManejoClave()\" maxlength=\"5\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                />\r\n                                            </div>\r\n                                            <div class=\"col-sm-6\">\r\n                                                <input formControlName=\"manejoClaveDesc\" name=\"manejoClaveDesc\" class=\"form-control\" type=\"text\" />\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-5\"></div>\r\n                        </div>\r\n                    </tab>\r\n                    <tab>\r\n                        <ng-template tabHeading>Unidades de Manejo</ng-template>\r\n                        <div>\r\n                            <div class=\"table-responsive form-group\">\r\n                                <table class=\"table table-hover\">\r\n                                    <thead>\r\n                                        <th class=\"text-center\">UM</th>\r\n                                        <th class=\"text-center\">Unid. Presentaci&oacute;n</th>\r\n                                        <th class=\"text-center\">Peso Bruto (gr)</th>\r\n                                        <th class=\"text-center\">Largo</th>\r\n                                        <th class=\"text-center\">Ancho</th>\r\n                                        <th class=\"text-center\">Alto</th>\r\n                                        <th class=\"text-center\">U.Medida</th>\r\n                                        <th class=\"text-center\">U. Cama</th>\r\n                                        <th class=\"text-center\">Factor Apill.</th>\r\n                                        <th class=\"text-center\">C&oacute;d. Barra</th>\r\n                                        <th class=\"text-center mw-80\">Comp. UM</th>\r\n                                        <th class=\"text-center\">UM Equiva</th>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>UD</td>\r\n                                            <td>\r\n                                                <select class=\"form-control pv-0 ph-1 mw-70\" formControlName=\"presentacionUD\" name=\"presentacionUD\">\r\n                                                    <option value=\"\" selected>(Ninguna)</option>\r\n                                                    <option *ngFor=\"let userPresentacionUD of presentacionUD\" [ngValue]=\"userPresentacionUD.par_codparametro01\">{{userPresentacionUD.par_deslargo01}}</option>\r\n                                                </select>\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appDecimalNumber #pesoBrutoUD type=\"number\" step=\"0.01\" formControlName=\"pesoBrutoUD\" name=\"pesoBrutoUD\" class=\"form-control\" (focusout)=\"validaFormatoPorciento(pesoBrutoUD)\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appDecimalNumber #largoUD type=\"number\" step=\"0.01\" formControlName=\"largoUD\" name=\"largoUD\" class=\"form-control\" (focusout)=\"validaFormatoPorciento(largoUD)\" maxlength=\"7\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appDecimalNumber #anchoUD type=\"number\" step=\"0.01\" formControlName=\"anchoUD\" name=\"anchoUD\" class=\"form-control\" (focusout)=\"validaFormatoPorciento(anchoUD)\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appDecimalNumber #altoUD type=\"number\" step=\"0.01\" formControlName=\"altoUD\" name=\"altoUD\" class=\"form-control\" (focusout)=\"validaFormatoPorciento(altoUD)\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                />\r\n                                            </td>\r\n                                            <td>\r\n                                                <select class=\"form-control pv-0 ph-1\" formControlName=\"medidaUD\" name=\"medidaUD\">\r\n                                                    <option value=\"\" selected>(Ninguna)</option>\r\n                                                    <option *ngFor=\"let userMedidaUD of medidaUD\" [ngValue]=\"userMedidaUD.par_codparametro01\">{{userMedidaUD.par_deslargo01}}</option>\r\n                                                </select>\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appNaturalNumber formControlName=\"uCamaUD\" name=\"uCamaUD\" class=\"form-control\" type=\"number\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appNaturalNumber formControlName=\"factorApilUD\" name=\"factorApilUD\" class=\"form-control\" type=\"number\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input formControlName=\"codBarraUD\" name=\"codBarraUD\" class=\"form-control mw-120\" type=\"text\" maxlength=\"20\" />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appNaturalNumber formControlName=\"compUMUD\" name=\"compUMUD\" class=\"form-control\" type=\"number\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                                            </td>\r\n                                            <td>UE</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>UE</td>\r\n                                            <td>\r\n                                                <select class=\"form-control pv-0 ph-1\" formControlName=\"presentacionUE\" name=\"presentacionUE\">\r\n                                                    <option value=\"\" selected>(Ninguna)</option>\r\n                                                    <option *ngFor=\"let userPresentacionUE of presentacionUE\" [ngValue]=\"userPresentacionUE.par_codparametro01\">{{userPresentacionUE.par_deslargo01}}</option>\r\n                                                </select>\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appDecimalNumber #pesoBrutoUE type=\"number\" step=\"0.01\" formControlName=\"pesoBrutoUE\" name=\"pesoBrutoUE\" class=\"form-control\" (focusout)=\"validaFormatoPorciento(pesoBrutoUE)\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appDecimalNumber #largoUE type=\"number\" step=\"0.01\" formControlName=\"largoUE\" name=\"largoUE\" class=\"form-control\" (focusout)=\"validaFormatoPorciento(largoUE)\" maxlength=\"7\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appDecimalNumber #anchoUE type=\"number\" step=\"0.01\" formControlName=\"anchoUE\" name=\"anchoUE\" class=\"form-control\" (focusout)=\"validaFormatoPorciento(anchoUE)\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appDecimalNumber #altoUE type=\"number\" step=\"0.01\" formControlName=\"altoUE\" name=\"altoUE\" class=\"form-control\" (focusout)=\"validaFormatoPorciento(altoUE)\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                />\r\n                                            </td>\r\n                                            <td class=\"mw-120\">\r\n                                                <select class=\"form-control pv-0 ph-1\" formControlName=\"medidaUE\" name=\"medidaUE\">\r\n                                                        <option value=\"\" selected>(Ninguna)</option>\r\n                                                        <option *ngFor=\"let userMedidaUE of medidaUE\" [ngValue]=\"userMedidaUE.par_codparametro01\">{{userMedidaUE.par_deslargo01}}</option>\r\n                                                    </select>\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appNaturalNumber formControlName=\"uCamaUE\" name=\"uCamaUE\" class=\"form-control\" type=\"number\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appNaturalNumber formControlName=\"factorApilUE\" name=\"factorApilUE\" class=\"form-control\" type=\"number\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input formControlName=\"codBarraUE\" name=\"codBarraUE\" class=\"form-control\" type=\"text\" maxlength=\"20\" />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appNaturalNumber formControlName=\"compUMUE\" name=\"compUMUE\" class=\"form-control\" type=\"number\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                                            </td>\r\n                                            <td>UV</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>UV</td>\r\n                                            <td>\r\n                                                <select class=\"form-control pv-0 ph-1\" formControlName=\"presentacionUV\" name=\"presentacionUV\">\r\n                                                    <option value=\"\" selected>(Ninguna)</option>\r\n                                                    <option *ngFor=\"let userPresentacionUV of presentacionUV\" [ngValue]=\"userPresentacionUV.par_codparametro01\">{{userPresentacionUV.par_deslargo01}}</option>\r\n                                                </select>\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appDecimalNumber #pesoBrutoUV type=\"number\" step=\"0.01\" formControlName=\"pesoBrutoUV\" name=\"pesoBrutoUV\" class=\"form-control\" (focusout)=\"validaFormatoPorciento(pesoBrutoUV)\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appDecimalNumber #largoUV type=\"number\" step=\"0.01\" formControlName=\"largoUV\" name=\"largoUV\" class=\"form-control\" (focusout)=\"validaFormatoPorciento(largoUV)\" maxlength=\"7\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appDecimalNumber #anchoUV type=\"number\" step=\"0.01\" formControlName=\"anchoUV\" name=\"anchoUV\" class=\"form-control\" (focusout)=\"validaFormatoPorciento(anchoUV)\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appDecimalNumber #altoUV type=\"number\" step=\"0.01\" formControlName=\"altoUV\" name=\"altoUV\" class=\"form-control\" (focusout)=\"validaFormatoPorciento(altoUV)\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                />\r\n                                            </td>\r\n                                            <td>\r\n                                                <select class=\"form-control pv-0 ph-1\" formControlName=\"medidaUV\" name=\"medidaUV\">\r\n                                                    <option value=\"\" selected>(Ninguna)</option>\r\n                                                    <option *ngFor=\"let userMedidaUV of medidaUV\" [ngValue]=\"userMedidaUV.par_codparametro01\">{{userMedidaUV.par_deslargo01}}</option>\r\n                                                </select>\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appNaturalNumber formControlName=\"uCamaUV\" name=\"uCamaUV\" class=\"form-control\" type=\"number\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appNaturalNumber formControlName=\"factorApilUV\" name=\"factorApilUV\" class=\"form-control\" type=\"number\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input formControlName=\"codBarraUV\" name=\"codBarraUV\" class=\"form-control\" type=\"text\" maxlength=\"20\" />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appNaturalNumber formControlName=\"compUMUV\" name=\"compUMUV\" class=\"form-control\" type=\"number\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" />\r\n                                            </td>\r\n                                            <td>F1</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>F1</td>\r\n                                            <td>\r\n                                                <select class=\"form-control pv-0 ph-1\" formControlName=\"presentacionF1\" name=\"presentacionF1\">\r\n                                                    <option value=\"\" selected>(Ninguna)</option>\r\n                                                    <option *ngFor=\"let userPresentacionF1 of presentacionF1\" [ngValue]=\"userPresentacionF1.par_codparametro01\">{{userPresentacionF1.par_deslargo01}}</option>\r\n                                                </select>\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appDecimalNumber #pesoBrutoF1 type=\"number\" step=\"0.01\" formControlName=\"pesoBrutoF1\" name=\"pesoBrutoF1\" class=\"form-control\" (focusout)=\"validaFormatoPorciento(pesoBrutoF1)\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appDecimalNumber #largoF1 type=\"number\" step=\"0.01\" formControlName=\"largoF1\" name=\"largoF1\" class=\"form-control\" (focusout)=\"validaFormatoPorciento(largoF1)\" maxlength=\"7\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appDecimalNumber #anchoF1 type=\"number\" step=\"0.01\" formControlName=\"anchoF1\" name=\"anchoF1\" class=\"form-control\" (focusout)=\"validaFormatoPorciento(anchoF1)\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input appDecimalNumber #altoF1 type=\"number\" step=\"0.01\" formControlName=\"altoF1\" name=\"altoF1\" class=\"form-control\" (focusout)=\"validaFormatoPorciento(altoF1)\" maxlength=\"10\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                />\r\n                                            </td>\r\n                                            <td>\r\n                                                <select class=\"form-control pv-0 ph-1\" formControlName=\"medidaF1\" name=\"medidaF1\">\r\n                                                    <option value=\"\" selected>(Ninguna)</option>\r\n                                                    <option *ngFor=\"let userMedidaF1 of medidaF1\" [ngValue]=\"userMedidaF1.par_codparametro01\">{{userMedidaF1.par_deslargo01}}</option>\r\n                                                </select>\r\n                                            </td>\r\n                                            <td></td>\r\n                                            <td></td>\r\n                                            <td>\r\n                                                <input formControlName=\"codBarraF1\" name=\"codBarraF1\" class=\"form-control\" type=\"text\" maxlength=\"20\" />\r\n                                            </td>\r\n                                            <td></td>\r\n                                            <td></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </tab>\r\n\r\n                    <tab>\r\n                        <ng-template tabHeading>Agrupaciones</ng-template>\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading mt-2\"><b>Agrupaciones</b></div>\r\n                            <div class=\"panel-body\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-1 control-label\">Línea</label>\r\n                                    <div class=\"col-sm-2\">\r\n                                        <input formControlName=\"codLinea\" name=\"codLinea\" class=\"form-control\" type=\"text\" (change)=\"validaLinea()\" />\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <input formControlName=\"descLinea\" name=\"descLinea\" class=\"form-control\" type=\"text\" />\r\n                                    </div>\r\n                                    <div class=\"col-sm-1\">\r\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalLineas()\">\r\n                                              <em class=\"icon-magnifier\"></em>\r\n                                          </button>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-1 control-label\">Categor&iacute;a</label>\r\n                                    <div class=\"col-sm-2\">\r\n                                        <input formControlName=\"codCategoria\" name=\"codCategoria\" class=\"form-control\" type=\"text\" (change)=\"validaCategoria()\" />\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <input formControlName=\"descCategoria\" name=\"descCategoria\" class=\"form-control\" type=\"text\" />\r\n                                    </div>\r\n                                    <div class=\"col-sm-1\">\r\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCategorias()\">\r\n                                                <em class=\"icon-magnifier\"></em>\r\n                                              </button>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-1 control-label\">Agrupaci&oacute;n</label>\r\n                                    <div class=\"col-sm-2\">\r\n                                        <input formControlName=\"codAgrupacion\" name=\"codAgrupacion\" class=\"form-control\" type=\"text\" (change)=\"validaAgrupacion()\" />\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <input formControlName=\"descAgrupacion\" name=\"descAgrupacion\" class=\"form-control\" type=\"text\" />\r\n                                    </div>\r\n                                    <div class=\"col-sm-1\">\r\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalAgrupacion()\">\r\n                                                  <em class=\"icon-magnifier\"></em>\r\n                                                </button>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-1 control-label\">Prod. Base</label>\r\n                                    <div class=\"col-sm-2\">\r\n                                        <input formControlName=\"codProdBase\" name=\"codProdBase\" class=\"form-control\" type=\"text\" (change)=\"validaProdBase()\" />\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <input formControlName=\"descProdBase\" name=\"descProdBase\" class=\"form-control\" type=\"text\" />\r\n                                    </div>\r\n                                    <div class=\"col-sm-1\">\r\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalProdBase()\">\r\n                                          <em class=\"icon-magnifier\"></em>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </tab>\r\n                    <tab>\r\n                        <ng-template tabHeading>Stock</ng-template>\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading mt-2\"><b>Stock</b></div>\r\n                            <div class=\"panel-body\">\r\n                                <div class=\"col-md-7\">\r\n                                    <div class=\"table responsive\">\r\n                                        <table class=\"table table-bordered table-hover\">\r\n                                            <thead>\r\n                                                <th class=\"text-center\"></th>\r\n                                                <th class=\"text-center mw-40\">U.V.</th>\r\n                                                <th class=\"text-center\">Fracción</th>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <td class=\"td-title\">Disponible</td>\r\n                                                    <td class=\"text-right\"><span *ngIf=\"stockArticulo.length > 0\">{{stockArticulo[0].uventadisponibles}}</span></td>\r\n                                                    <td class=\"text-right\"><span *ngIf=\"stockArticulo.length > 0\">{{stockArticulo[0].fraccionesdisponibles}}</span></td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td class=\"td-title\">Reservado</td>\r\n                                                    <td class=\"text-right\"><span *ngIf=\"stockArticulo.length > 0\">{{stockArticulo[0].uventadisponibles}}</span></td>\r\n                                                    <td class=\"text-right\"><span *ngIf=\"stockArticulo.length > 0\">{{stockArticulo[0].fraccionesreserva}}</span></td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td class=\"td-title\">Mal Estado</td>\r\n                                                    <td class=\"text-right\"><span *ngIf=\"stockArticulo.length > 0\">{{stockArticulo[0].uvtamalestado}}</span></td>\r\n                                                    <td class=\"text-right\"><span *ngIf=\"stockArticulo.length > 0\">{{stockArticulo[0].fraccionesvtamalestado}}</span></td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td class=\"td-title\">Total</td>\r\n                                                    <td class=\"text-right\"><span *ngIf=\"stockArticulo.length > 0\">{{stockArticulo[0].uvtatotales}}</span></td>\r\n                                                    <td class=\"text-right\"><span *ngIf=\"stockArticulo.length > 0\">{{stockArticulo[0].fraccionestotales}}</span></td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </tab>\r\n                    <tab *ngIf=\"checkSeleccionado\">\r\n                        <ng-template tabHeading>Pack</ng-template>\r\n                        <div *ngIf=\"articuloNuevo\" class=\"row pull-left mb-2\">\r\n                            <div class=\"col-sm-3 mr-3\">\r\n                                <button class=\"btn btn-oval btn-sm\" type=\"button\" [disabled]='noVigente' (click)=\"eliminarArticuloPack()\">Eliminar</button>\r\n                            </div>\r\n                        </div>\r\n                        <!--Consulta Pack-->\r\n                        <div class=\"dash-table-container\">\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <th class=\"w-60\">\r\n                                        <div class=\"checkbox c-checkbox needsclick pt-1 w-40 pl-1\">\r\n                                            <label class=\"needsclick\">\r\n                                                <!-- <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckTituloJerarquia()\" [checked]=\"checkTituloJerarquiaSeleccionado\" />\r\n                                                <span class=\"fa fa-check\"></span> -->\r\n                                            </label>\r\n                                        </div>\r\n                                    </th>\r\n                                    <th>Art&iacute;culo</th>\r\n                                    <th>Descripci&oacute;n</th>\r\n                                    <th>Medida</th>\r\n                                    <th>U.V.</th>\r\n                                    <th>Fracci&oacute;n</th>\r\n                                    <th>($) Valor U.V.</th>\r\n                                    <th>Total s/d</th>\r\n                                    <th>% Desc.</th>\r\n                                    <th>Total</th>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let articulo of packArticulo\">\r\n                                        <td class=\"pt-0\">\r\n                                            <div class=\"checkbox c-checkbox needsclick\">\r\n                                                <label class=\"needsclick\">\r\n                                                    <input class=\"needsclick\" type=\"checkbox\" (change)=\"validaCheckPack(articulo)\" [checked]=\"articulo.bCheck\" />\r\n                                                    <span class=\"fa fa-check\"></span>\r\n                                                </label>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>{{articulo.articulo}}</td>\r\n                                        <td>{{articulo.descripcion}}</td>\r\n                                        <td>{{articulo.medidaUV}}</td>\r\n                                        <td class=\"text-right\" *ngIf=\"!articuloNuevo\">{{articulo.uv}}</td>\r\n                                        <td *ngIf=\"articuloNuevo\">\r\n                                            <input appNaturalNumber #uv type=\"number\" class=\"form-control w-70 ph-1 text-right\" [(ngModel)]=\"articulo.uv\" [ngModelOptions]=\"{standalone: true}\" (focusout)=\"validaCantidad(uv, articulo)\" (keydown.Tab)=\"validaCantidad(uv, articulo)\" maxlength=\"6\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                        </td>\r\n                                        <td class=\"text-right\" *ngIf=\"!articuloNuevo\">{{articulo.fraccion}}</td>\r\n                                        <td *ngIf=\"articuloNuevo\">\r\n                                            <input appNaturalNumber #fraccion type=\"number\" class=\"form-control w-70 ph-1 text-right\" [(ngModel)]=\"articulo.fraccion\" [ngModelOptions]=\"{standalone: true}\" (focusout)=\"validaCantidad(fraccion, articulo)\" (keydown.Tab)=\"validaCantidad(fraccion, articulo)\"\r\n                                                maxlength=\"6\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                        </td>\r\n                                        <td class=\"text-right\">{{articulo.valorUV | number:'':'es'}}</td>\r\n                                        <td class=\"text-right\">{{articulo.totalSD | number:'':'es'}}</td>\r\n                                        <td class=\"text-right\" *ngIf=\"!articuloNuevo\">{{articulo.porcentaje | number:'.2-2':'es'}}</td>\r\n                                        <td *ngIf=\"articuloNuevo\">\r\n                                            <input appDecimalNumber #porcentaje type=\"number\" step=\"0.01\" class=\"form-control w-50 ph-1 text-right\" [(ngModel)]=\"articulo.porcentaje\" [ngModelOptions]=\"{standalone: true}\" (focusout)=\"validaPorcentaje(porcentaje)\" (keydown.Tab)=\"validaPorcentaje(porcentaje, articulo)\"\r\n                                                maxlength=\"4\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                        </td>\r\n                                        <td class=\"text-right\">{{articulo.total | number:'':'es'}}</td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"articuloNuevo\">\r\n                                        <td></td>\r\n                                        <td class=\"align-top pl-0 w-80\">\r\n                                            <input #articulo type=\"text\" [(ngModel)]=\"filterData\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control w-80\" (input)=\"setArticulo(articulo)\" (keydown.Tab)=\"validaArticulo(articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\" />\r\n                                            <ul *ngIf=\"verListaArticulo\" class=\"list-group filter-list\">\r\n                                                <li *ngFor=\"let data of parametrosAutocomplete | filter:filterData\" (click)=\"seleccionaArticulo(data, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\">\r\n                                                    <a class=\"list-group-item\">{{data.art_scodformato}}-{{data.art_scodvariedad}}</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </td>\r\n                                        <td class=\"align-top pl-0\">\r\n                                            <input #descripcion type=\"text\" [(ngModel)]=\"filterDesc\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control w-200 \" (input)=\"setDescripcion(descripcion)\" (keydown.Tab)=\"validaDescripcion(articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\"\r\n                                            />\r\n                                            <ul *ngIf=\"verListaDescripcion\" class=\"list-group filter-list\">\r\n                                                <li *ngFor=\"let data of parametrosAutocomplete | filterDesc:filterDesc\" (click)=\"seleccionaArticulo(data, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje)\">\r\n                                                    <a class=\"list-group-item\">{{data.art_sdescripcion}}</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </td>\r\n                                        <td class=\"align-top pl-0\">\r\n                                            <input #medida type=\"text\" class=\"form-control w-100\" disabled>\r\n                                        </td>\r\n                                        <td class=\"align-top pl-0\">\r\n                                            <input appNaturalNumber #uv type=\"number\" class=\"form-control w-70 ph-1 text-right\" (focusout)=\"validaCantidad(uv)\" (keydown.Tab)=\"validaCantidad(uv)\" maxlength=\"6\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                        </td>\r\n                                        <td class=\"align-top pl-0\">\r\n                                            <input appNaturalNumber #fraccion type=\"number\" class=\"form-control w-70 ph-1 text-right\" (focusout)=\"validaCantidad(fraccion)\" (keydown.Tab)=\"validaCantidad(fraccion)\" maxlength=\"6\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\">\r\n                                        </td>\r\n                                        <td class=\"align-top pl-0\">\r\n                                            <input #valorUV type=\"number\" class=\"form-control w-80 text-right\" disabled>\r\n                                        </td>\r\n                                        <td class=\"align-top pl-0\">\r\n                                            <input #totalSD type=\"number\" class=\"form-control w-90\" disabled>\r\n                                        </td>\r\n                                        <td class=\"align-top pl-0\">\r\n                                            <input appDecimalNumber #porcentaje type=\"number\" step=\"0.01\" class=\"form-control w-50 ph-1 text-right\" (focusout)=\"validaPorcentaje(porcentaje)\" (keydown.Tab)=\"validaPorcentaje(porcentaje)\" maxlength=\"4\" oninput=\"if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                                                (keyup.enter)=\"agregarArticuloPack(articulo, descripcion, medida, uv, fraccion, valorUV, totalSD, porcentaje, total)\">\r\n                                        </td>\r\n                                        <td class=\"align-top pl-0\">\r\n                                            <input #total type=\"number\" class=\"form-control w-90 text-right\" disabled>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"col-sm-12 ph-0 mt-8\">\r\n                                <div class=\"col-sm-2 col-sm-offset-2\">\r\n                                    <label class=\"col-sm-4 control-label pl-0 lh-11\">Total Neto</label>\r\n                                    <div class=\"col-sm-8 ph-0\">\r\n                                        <label class=\"col-sm-5 form-control text-right pad-sup-2\">{{iTotalNeto | number:'':'es'}}</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-2\">\r\n                                    <label class=\"col-sm-4 control-label\">I.V.A.</label>\r\n                                    <div class=\"col-sm-8 ph-0\">\r\n                                        <label class=\"col-sm-5 form-control text-right pad-sup-2\">{{iIva | number:'':'es'}}</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-2 pr-0\">\r\n                                    <label class=\"col-sm-4 control-label\">I.A.B.A.</label>\r\n                                    <div class=\"col-sm-8 ph-0\">\r\n                                        <label class=\"col-sm-5 form-control text-right pad-sup-2\">{{iIaba | number:'':'es'}}</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-2\">\r\n                                    <label class=\"col-sm-4 control-label\">Total</label>\r\n                                    <div class=\"col-sm-8 ph-0\">\r\n                                        <label class=\"col-sm-5 form-control text-right pad-sup-2\">{{iTotal | number:'':'es'}}</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-2 pr-0\">\r\n                                    <label class=\"col-sm-4 control-label pl-0\">Volumen</label>\r\n                                    <div class=\"col-sm-8 ph-0\">\r\n                                        <label class=\"col-sm-5 form-control text-right pad-sup-2\">{{iVolumen | number:'.2-2':'es'}}</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!--Nuevo Pack-->\r\n                    </tab>\r\n\r\n\r\n                </tabset>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/articulo/definicionArticulo/definicionArticulo.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/routes/articulo/definicionArticulo/definicionArticulo.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=number]{text-align:right}.pad-sup-2{padding-top:2px}.no-border-bottom{border-bottom:1px solid #85b3cd !important}.filter-list{list-style:none;max-height:200px;overflow-y:scroll}.width-30-porc{width:30% !important}\n"

/***/ }),

/***/ "./src/app/routes/articulo/definicionArticulo/definicionArticulo.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/routes/articulo/definicionArticulo/definicionArticulo.component.ts ***!
  \************************************************************************************/
/*! exports provided: DefinicionArticuloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinicionArticuloComponent", function() { return DefinicionArticuloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../core/consultaService/articulo.service */ "./src/app/core/consultaService/articulo.service.ts");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component */ "./src/app/routes/commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/consultaService/pedidos.service */ "./src/app/core/consultaService/pedidos.service.ts");
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
var DefinicionArticuloComponent = /** @class */ (function () {
    function DefinicionArticuloComponent(fb, articuloService, authService, consultasService, modalService, pedidosService, cargador, router, utilService) {
        this.articuloService = articuloService;
        this.authService = authService;
        this.consultasService = consultasService;
        this.modalService = modalService;
        this.pedidosService = pedidosService;
        this.cargador = cargador;
        this.router = router;
        this.utilService = utilService;
        this.origenModal = '';
        this.estado = [
            {
                codEstado: 'VIGEN',
                descEstado: 'Vigente'
            },
            {
                codEstado: 'NOVIG',
                descEstado: 'No Vigente'
            }
        ];
        this.origen = [];
        this.cobExistencia = [];
        this.tipoArticulo = [];
        this.unidadPedido = [];
        this.unidadDevolucion = [];
        this.volumen = [];
        this.estadistica = [];
        this.manejoPrecio = [];
        this.stockArticulo = [];
        this.packArticulo = [];
        this.presentacionUD = [];
        this.presentacionUE = [];
        this.presentacionUV = [];
        this.presentacionF1 = [];
        this.medidaUD = [];
        this.medidaUE = [];
        this.medidaUV = [];
        this.medidaF1 = [];
        this.request = {};
        this.requestActualiza = {};
        this.requestStock = {};
        this.requestAutocomplete = {};
        this.articuloNuevo = false;
        this.checkSeleccionado = false;
        this.disableCheck = false;
        this.isValidVolumen = false;
        this.isValidEstadistica = false;
        this.isValidManejo = false;
        this.isPresentacionUD = false;
        this.isPresentacionUE = false;
        this.isPresentacionUV = false;
        this.isMedidaUD = false;
        this.isMedidaUE = false;
        this.isMedidaUV = false;
        this.datos = [];
        this.filterData = '';
        this.hidUnidadesVta = 0;
        this.existeArticuloPack = false;
        this.articuloSeleccionado = {};
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            codigoFormato: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            codigoVariedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            medida: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            codSap: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            origen: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('VIGEN'),
            codExistenciaParam: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            coberExistencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            tipoArticulo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            prodPack: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            unidadPedido1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            unidadPedido2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            unidadPedido3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            unidadDevo1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            unidadDevo2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            unidadDevo3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            peso: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            volumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('0'),
            estadistica: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('0'),
            manejoPrecio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('0'),
            iva: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('N'),
            iaba: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('N'),
            permanencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            validez: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            manejoClave: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            manejoClaveDesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            presentacionUD: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            pesoBrutoUD: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            largoUD: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            anchoUD: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            altoUD: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            medidaUD: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            uCamaUD: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            factorApilUD: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            codBarraUD: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            compUMUD: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            presentacionUE: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            pesoBrutoUE: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            largoUE: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            anchoUE: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            altoUE: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            medidaUE: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            uCamaUE: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            factorApilUE: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            codBarraUE: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            compUMUE: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            presentacionUV: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            pesoBrutoUV: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            largoUV: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            anchoUV: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            altoUV: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            medidaUV: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            uCamaUV: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            factorApilUV: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            codBarraUV: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            compUMUV: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            presentacionF1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            pesoBrutoF1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            largoF1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            anchoF1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            altoF1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            medidaF1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            codBarraF1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            codLinea: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            descLinea: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            codCategoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            descCategoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            codAgrupacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            descAgrupacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            codProdBase: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            descProdBase: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true })
        });
    }
    ;
    DefinicionArticuloComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parametrosUsuario = this.authService.getDatosUser();
        this.cargaCombos();
        console.log('this.articuloService.selectedArticulo', this.articuloService.selectedArticulo);
        if (this.articuloService.selectedArticulo !== undefined && this.articuloService.selectedArticulo.art_scodformato) {
            //cargar datos del articulo detalle
            this.forma.controls.codigoFormato.disable();
            this.forma.controls.codigoVariedad.disable();
            this.disableCheck = true;
            this.forma.controls.compUMUV.disable();
            if (this.articuloService.selectedArticuloDetailPack.length > 0) {
                this.checkSeleccionado = true;
                this.bloqueaInfoPack();
            }
            this.cargarDatosArticuloDetalle();
        }
        else {
            console.log('nuevo');
            this.articuloNuevo = true;
            this.parametrosAutocomplete = this.authService.getArticuloAutocomplete();
        }
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    DefinicionArticuloComponent.prototype.ngOnDestroy = function () {
        if (this.subData != undefined) {
            this.subData.unsubscribe();
        }
    };
    DefinicionArticuloComponent.prototype.setArticulo = function (articulo) {
        if (articulo.value === '') {
            this.verListaArticulo = false;
        }
        else {
            this.verListaArticulo = true;
        }
    };
    DefinicionArticuloComponent.prototype.setDescripcion = function (descripcion) {
        if (descripcion.value === '') {
            this.verListaDescripcion = false;
        }
        else {
            this.verListaDescripcion = true;
        }
    };
    DefinicionArticuloComponent.prototype.validaArticulo = function (articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje) {
        var articuloExiste = false;
        if (articulo.value !== '') {
            for (var i in this.parametrosAutocomplete) {
                var str = this.parametrosAutocomplete[i].art_scodformato + "-" + this.parametrosAutocomplete[i].art_scodvariedad;
                if (str.startsWith("" + articulo.value)) {
                    console.log(str, this.parametrosAutocomplete[i], 'llamar al servcio');
                    console.log('this.articulosPack.length', this.packArticulo.length);
                    if (this.packArticulo.length === 0) {
                        this.cargaInfoArticuloAutoComplete(this.parametrosAutocomplete[i].art_scodformato, this.parametrosAutocomplete[i].art_scodvariedad, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje);
                    }
                    else {
                        console.log('validar existe prod.');
                        this.existeArticuloPack = this.validaExisteProducto(str);
                        console.log('this.existeArticuloPack', this.existeArticuloPack);
                        if (!this.existeArticuloPack) {
                            console.log('buscar info');
                            this.cargaInfoArticuloAutoComplete(this.parametrosAutocomplete[i].art_scodformato, this.parametrosAutocomplete[i].art_scodvariedad, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje);
                        }
                        else {
                            articulo.value = '';
                            descripcion.value = '';
                            articulo.focus();
                        }
                    }
                    // articulo.value = str;
                    // descripcion.value = this.parametrosAutocomplete[i].art_sdescripcion;
                    // medida.value = this.parametrosAutocomplete[i].art_smedida;
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
    DefinicionArticuloComponent.prototype.validaDescripcion = function (articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje) {
        var articuloExiste = false;
        if (descripcion.value !== '') {
            for (var i in this.parametrosAutocomplete) {
                var str = (this.parametrosAutocomplete[i].art_sdescripcion).toLowerCase();
                if (str.startsWith("" + (descripcion.value).toLowerCase())) {
                    console.log(str, this.parametrosAutocomplete[i]);
                    console.log('this.articulosPack.length', this.packArticulo.length);
                    if (this.packArticulo.length === 0) {
                        this.cargaInfoArticuloAutoComplete(this.parametrosAutocomplete[i].art_scodformato, this.parametrosAutocomplete[i].art_scodvariedad, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje);
                    }
                    else {
                        console.log('validar existe prod.');
                        this.existeArticuloPack = this.validaExisteProducto(this.parametrosAutocomplete[i].art_scodformato + "-" + this.parametrosAutocomplete[i].art_scodvariedad);
                        console.log('this.existeArticuloPack', this.existeArticuloPack);
                        if (!this.existeArticuloPack) {
                            console.log('buscar info');
                            this.cargaInfoArticuloAutoComplete(this.parametrosAutocomplete[i].art_scodformato, this.parametrosAutocomplete[i].art_scodvariedad, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje);
                        }
                        else {
                            articulo.value = '';
                            descripcion.value = '';
                            articulo.focus();
                        }
                    }
                    // articulo.value = `${this.parametrosAutocomplete[i].art_scodformato}-${this.parametrosAutocomplete[i].art_scodvariedad}`;
                    // descripcion.value = this.parametrosAutocomplete[i].art_sdescripcion;
                    articuloExiste = true;
                    this.verListaDescripcion = false;
                    // medida.focus();
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
    DefinicionArticuloComponent.prototype.seleccionaArticulo = function (data, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje) {
        console.log('seleccionaArticulo');
        console.log('articulosPack.length', this.packArticulo.length);
        if (this.packArticulo.length === 0) {
            this.cargaInfoArticuloAutoComplete(data.art_scodformato, data.art_scodvariedad, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje);
        }
        else {
            console.log('validar existe prod.');
            var str = data.art_scodformato + "-" + data.art_scodvariedad;
            this.existeArticuloPack = this.validaExisteProducto(str);
            console.log('this.existeArticuloPack', this.existeArticuloPack);
            if (!this.existeArticuloPack) {
                console.log('buscar info');
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
    // seleccionaDescripcion(data, articulo, descripcion, cantidad){
    //   articulo.value = `${data.art_scodformato}-${data.art_scodvariedad}`;
    //   descripcion.value = data.art_sdescripcion;
    //   // cantidad.focus();
    //   this.verListaDescripcion = false;
    // }
    DefinicionArticuloComponent.prototype.validaExisteProducto = function (str) {
        console.log('str', str);
        for (var i in this.packArticulo) {
            if (str === this.packArticulo[i].articulo) {
                console.log('existe');
                return true;
            }
        }
        return false;
    };
    DefinicionArticuloComponent.prototype.cargaInfoArticuloAutoComplete = function (codFormato, codVariedad, articulo, descripcion, medida, uv, fraccion, valorUV, porcentaje) {
        var _this = this;
        this.puedeAgregar = false;
        this.cargador.show();
        this.requestAutocomplete.nNumLocal = 0;
        this.requestAutocomplete.nRutCliente = 0;
        this.requestAutocomplete.nRutOperador = Number(this.parametrosUsuario.nrutoperador);
        this.requestAutocomplete.sCodBodega = null;
        this.requestAutocomplete.sCodFormato = codFormato;
        this.requestAutocomplete.sCodRelacionComer = null;
        this.requestAutocomplete.sCodVariedad = codVariedad;
        this.pedidosService.getCargaArticuloAutoComplete(this.requestAutocomplete)
            .subscribe(function (data) {
            _this.cargador.hide();
            _this.articuloSeleccionado = data.articulo[0];
            console.log('this.articuloSeleccionado', _this.articuloSeleccionado);
            articulo.value = _this.articuloSeleccionado.art_scodformato + "-" + _this.articuloSeleccionado.art_scodvariedad;
            descripcion.value = _this.articuloSeleccionado.art_sdescripcion;
            medida.value = _this.articuloSeleccionado.art_smedida;
            valorUV.value = _this.articuloSeleccionado.nprecioventa;
            uv.value = 0;
            fraccion.value = 0;
            porcentaje.value = 0.0;
            _this.hidUnidadesVta = _this.articuloSeleccionado.art_nunidadventa;
            _this.hidIndIaba = _this.articuloSeleccionado.art_sindiaba;
            _this.puedeAgregar = true;
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    DefinicionArticuloComponent.prototype.validaCantidad = function (valor, articulo) {
        if (valor.value === '') {
            valor.value = 0;
        }
        if (articulo !== undefined) {
            this.recalcularMontos(articulo);
            this.calcularTotales();
        }
    };
    DefinicionArticuloComponent.prototype.validaPorcentaje = function (porcentaje, articulo) {
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
    DefinicionArticuloComponent.prototype.validaCheckPack = function (articulo) {
        articulo.bCheck = !articulo.bCheck;
        if (articulo.bCheck) {
            console.log('checkeado');
        }
        else {
            console.log('NO checkeado');
        }
    };
    DefinicionArticuloComponent.prototype.recalcularMontos = function (articulo) {
        console.log('recalcular', articulo);
        var iTotalUniVta = (articulo.uv * articulo.valorUV);
        var dPrecioFraccion = (articulo.valorUV / articulo.hidUnidadesVta);
        var iTotalFraccion = articulo.fraccion * Math.round(dPrecioFraccion);
        articulo.totalSD = iTotalUniVta + iTotalFraccion;
        articulo.total = Math.round(articulo.totalSD - ((articulo.totalSD * (parseFloat(articulo.porcentaje)) / 100)));
    };
    DefinicionArticuloComponent.prototype.agregarArticuloPack = function (articulo, descripcion, medida, uv, fraccion, valorUV, totalSD, porcentaje, total) {
        //valida tipo de impuesto
        if (this.packArticulo.length > 0) {
            console.log('this.packArticulo[0].art_sindiaba', this.packArticulo[0].art_sindiaba);
            console.log('this.articuloSeleccionado.art_sindiaba', this.articuloSeleccionado.art_sindiaba);
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
            console.log('en agregar art. pack');
            console.log('uv.value', uv.value, 'fraccion.value', fraccion.value);
            if (uv.value === '0' && fraccion.value === '0') {
                swal('Atención', 'Debe Agregar fracciones o Unidades al Articulo', 'warning');
            }
            else {
                console.log('this.hidUnidadesVta', this.hidUnidadesVta);
                var iUV = Math.round((parseInt(fraccion.value) / this.hidUnidadesVta) + parseInt(uv.value));
                var iFraccion = (parseInt(fraccion.value) % this.hidUnidadesVta);
                console.log('iUV', iUV);
                console.log('iFraccion', iFraccion);
                var iTotalUniVta = (iUV * parseInt(valorUV.value));
                var dPrecioFraccion = (parseInt(valorUV.value) / this.hidUnidadesVta);
                var iTotalFraccion = iFraccion * Math.round(dPrecioFraccion);
                var iTotalSD = iTotalUniVta + iTotalFraccion;
                var iNetoDetalle = Math.round(iTotalSD - ((iTotalSD * (parseFloat(porcentaje.value)) / 100)));
                console.log('iTotalUniVta', iTotalUniVta);
                console.log('dPrecioFraccion', dPrecioFraccion);
                console.log('iTotalFraccion', iTotalFraccion);
                console.log('totalSD', iTotalSD);
                console.log('iNetoDetalle', iNetoDetalle);
                var objeto = {
                    bCheck: false,
                    articulo: articulo.value,
                    descripcion: descripcion.value,
                    medidaUV: medida.value,
                    uv: iUV,
                    fraccion: iFraccion,
                    valorUV: parseInt(valorUV.value),
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
                    art_sindiaba: this.articuloSeleccionado.art_sindiaba
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
    DefinicionArticuloComponent.prototype.calcularTotales = function () {
        this.iTotalNetoIaba = 0;
        this.iTotalNeto = 0;
        this.iIva = 0;
        this.iIaba = 0;
        this.iTotal = 0;
        this.iVolumen = 0;
        for (var i in this.packArticulo) {
            //Totales
            this.iTotalNeto = this.iTotalNeto + this.packArticulo[i].total;
            console.log('this.iTotalNeto', this.iTotalNeto);
            if (this.hidIndIaba === 'S') {
                this.iTotalNetoIaba = this.iTotalNetoIaba + this.packArticulo[i].total;
            }
            //IVA
            var iva = this.authService.getParametrosIvaIaba().filter(function (item) { return item.par_codparametro01 === '00001'; });
            this.iIva = Math.round((this.iTotalNeto * iva[0].par_numero01) / 100);
            //IABA
            var iaba = this.authService.getParametrosIvaIaba().filter(function (item) { return item.par_codparametro01 === '00002'; });
            this.iIaba = Math.round((this.iTotalNetoIaba * iaba[0].par_numero01) / 100);
            //Total
            this.iTotal = this.iTotalNeto + this.iIva + this.iIaba;
            //Volumen
            var iVolumenArticulo = this.utilService.calculaVolumen(this.packArticulo[i].art_nlargovta, this.packArticulo[i].art_nanchovta, this.packArticulo[i].art_naltovta, this.packArticulo[i].nconvermedidavta) * this.packArticulo[i].uv;
            this.iVolumen = this.iVolumen + iVolumenArticulo;
            iVolumenArticulo = this.utilService.calculaVolumen(this.packArticulo[i].art_nlargofraccion, this.packArticulo[i].art_nanchofraccion, this.packArticulo[i].art_naltofraccion, this.packArticulo[i].nconvermedidafraccion) * this.packArticulo[i].fraccion;
            this.iVolumen = this.iVolumen + iVolumenArticulo;
        }
    };
    DefinicionArticuloComponent.prototype.eliminarArticuloPack = function () {
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
    DefinicionArticuloComponent.prototype.bloqueaInfoPack = function () {
        // MediaDevices, Plazos e Impuestos
        this.forma.controls.peso.disable();
        this.forma.controls.volumen.disable();
        this.forma.controls.estadistica.disable();
        this.forma.controls.manejoPrecio.disable();
        this.forma.controls.iva.disable();
        this.forma.controls.iaba.disable();
        this.forma.controls.permanencia.disable();
        this.forma.controls.validez.disable();
        this.forma.controls.manejoClave.disable();
        this.forma.controls.manejoClaveDesc.disable();
        // Unidades de Manejo
        this.forma.controls.presentacionUD.disable();
        this.forma.controls.presentacionUE.disable();
        this.forma.controls.presentacionUV.disable();
        if (!this.articuloNuevo) {
            this.forma.controls.presentacionF1.disable();
        }
        this.forma.controls.pesoBrutoUD.disable();
        this.forma.controls.pesoBrutoUE.disable();
        this.forma.controls.pesoBrutoUV.disable();
        this.forma.controls.pesoBrutoF1.disable();
        this.forma.controls.largoUD.disable();
        this.forma.controls.largoUE.disable();
        this.forma.controls.largoUV.disable();
        this.forma.controls.largoF1.disable();
        this.forma.controls.anchoUD.disable();
        this.forma.controls.anchoUE.disable();
        this.forma.controls.anchoUV.disable();
        this.forma.controls.anchoF1.disable();
        this.forma.controls.altoUD.disable();
        this.forma.controls.altoUE.disable();
        this.forma.controls.altoUV.disable();
        this.forma.controls.altoF1.disable();
        this.forma.controls.medidaUD.disable();
        this.forma.controls.medidaUE.disable();
        this.forma.controls.medidaUV.disable();
        if (!this.articuloNuevo) {
            this.forma.controls.medidaF1.disable();
        }
        this.forma.controls.uCamaUD.disable();
        this.forma.controls.uCamaUE.disable();
        this.forma.controls.uCamaUV.disable();
        this.forma.controls.factorApilUD.disable();
        this.forma.controls.factorApilUE.disable();
        this.forma.controls.factorApilUV.disable();
        this.forma.controls.codBarraUD.disable();
        this.forma.controls.codBarraUE.disable();
        this.forma.controls.codBarraUV.disable();
        this.forma.controls.codBarraF1.disable();
        this.forma.controls.compUMUD.disable();
        this.forma.controls.compUMUE.disable();
        this.forma.controls.compUMUV.disable();
    };
    DefinicionArticuloComponent.prototype.desbloqueaInfoPack = function () {
        // MediaDevices, Plazos e Impuestos
        this.forma.controls.peso.enable();
        this.forma.controls.volumen.enable();
        this.forma.controls.estadistica.enable();
        this.forma.controls.manejoPrecio.enable();
        this.forma.controls.iva.enable();
        this.forma.controls.iaba.enable();
        this.forma.controls.permanencia.enable();
        this.forma.controls.validez.enable();
        this.forma.controls.manejoClave.enable();
        this.forma.controls.manejoClaveDesc.enable();
        // Unidades de Manejo
        this.forma.controls.presentacionUD.enable();
        this.forma.controls.presentacionUE.enable();
        this.forma.controls.presentacionUV.enable();
        this.forma.controls.pesoBrutoUD.enable();
        this.forma.controls.pesoBrutoUE.enable();
        this.forma.controls.pesoBrutoUV.enable();
        this.forma.controls.pesoBrutoF1.enable();
        this.forma.controls.largoUD.enable();
        this.forma.controls.largoUE.enable();
        this.forma.controls.largoUV.enable();
        this.forma.controls.largoF1.enable();
        this.forma.controls.anchoUD.enable();
        this.forma.controls.anchoUE.enable();
        this.forma.controls.anchoUV.enable();
        this.forma.controls.anchoF1.enable();
        this.forma.controls.altoUD.enable();
        this.forma.controls.altoUE.enable();
        this.forma.controls.altoUV.enable();
        this.forma.controls.altoF1.enable();
        this.forma.controls.medidaUD.enable();
        this.forma.controls.medidaUE.enable();
        this.forma.controls.medidaUV.enable();
        this.forma.controls.uCamaUD.enable();
        this.forma.controls.uCamaUE.enable();
        this.forma.controls.uCamaUV.enable();
        this.forma.controls.factorApilUD.enable();
        this.forma.controls.factorApilUE.enable();
        this.forma.controls.factorApilUV.enable();
        this.forma.controls.codBarraUD.enable();
        this.forma.controls.codBarraUE.enable();
        this.forma.controls.codBarraUV.enable();
        this.forma.controls.codBarraF1.enable();
        this.forma.controls.compUMUD.enable();
        this.forma.controls.compUMUE.enable();
        this.forma.controls.compUMUV.enable();
    };
    DefinicionArticuloComponent.prototype.validaCheck = function () {
        //REsetea valores de psetañas
        this.forma.controls.peso.setValue(0);
        this.forma.controls.volumen.setValue('0');
        this.forma.controls.estadistica.setValue('0');
        this.forma.controls.manejoPrecio.setValue('0');
        this.forma.controls.permanencia.setValue(0);
        this.forma.controls.validez.setValue(0);
        this.forma.controls.manejoClave.setValue(null);
        this.forma.controls.manejoClaveDesc.setValue('');
        this.forma.controls.iva.setValue('N');
        this.forma.controls.iaba.setValue('N');
        this.forma.controls.presentacionUD.setValue('');
        this.forma.controls.presentacionUE.setValue('');
        this.forma.controls.presentacionUV.setValue('');
        this.forma.controls.presentacionF1.setValue('');
        this.forma.controls.medidaUD.setValue('');
        this.forma.controls.medidaUE.setValue('');
        this.forma.controls.medidaUV.setValue('');
        this.forma.controls.medidaF1.setValue('');
        $('*').removeClass('error-form');
        this.checkSeleccionado = !this.checkSeleccionado;
        if (this.checkSeleccionado && this.articuloNuevo) {
            this.setearUnosPack();
            this.bloqueaInfoPack();
        }
        else {
            console.log('volver a cero');
            this.setearCerosPack();
            this.desbloqueaInfoPack();
        }
    };
    DefinicionArticuloComponent.prototype.setearUnosPack = function () {
        // Unidad de Manejo
        this.forma.controls.pesoBrutoUD.setValue(1);
        this.forma.controls.largoUD.setValue(1);
        this.forma.controls.anchoUD.setValue(1);
        this.forma.controls.altoUD.setValue(1);
        this.forma.controls.uCamaUD.setValue(1);
        this.forma.controls.factorApilUD.setValue(1);
        this.forma.controls.codBarraUD.setValue('1');
        this.forma.controls.compUMUD.setValue(1);
        this.forma.controls.pesoBrutoUE.setValue(1);
        this.forma.controls.largoUE.setValue(1);
        this.forma.controls.anchoUE.setValue(1);
        this.forma.controls.altoUE.setValue(1);
        this.forma.controls.uCamaUE.setValue(1);
        this.forma.controls.factorApilUE.setValue(1);
        this.forma.controls.codBarraUE.setValue('1');
        this.forma.controls.compUMUE.setValue(1);
        this.forma.controls.pesoBrutoUV.setValue(1);
        this.forma.controls.largoUV.setValue(1);
        this.forma.controls.anchoUV.setValue(1);
        this.forma.controls.altoUV.setValue(1);
        this.forma.controls.uCamaUV.setValue(1);
        this.forma.controls.factorApilUV.setValue(1);
        this.forma.controls.codBarraUV.setValue('1');
        this.forma.controls.compUMUV.setValue(1);
        this.forma.controls.pesoBrutoF1.setValue(1);
        this.forma.controls.largoF1.setValue(1);
        this.forma.controls.anchoF1.setValue(1);
        this.forma.controls.altoF1.setValue(1);
        this.forma.controls.codBarraF1.setValue('1');
    };
    DefinicionArticuloComponent.prototype.setearCerosPack = function () {
        // Unidad de Manejo
        this.forma.controls.pesoBrutoUD.setValue(0);
        this.forma.controls.largoUD.setValue(0);
        this.forma.controls.anchoUD.setValue(0);
        this.forma.controls.altoUD.setValue(0);
        this.forma.controls.uCamaUD.setValue(0);
        this.forma.controls.factorApilUD.setValue(0);
        this.forma.controls.codBarraUD.setValue('');
        this.forma.controls.compUMUD.setValue(0);
        this.forma.controls.pesoBrutoUE.setValue(0);
        this.forma.controls.largoUE.setValue(0);
        this.forma.controls.anchoUE.setValue(0);
        this.forma.controls.altoUE.setValue(0);
        this.forma.controls.uCamaUE.setValue(0);
        this.forma.controls.factorApilUE.setValue(0);
        this.forma.controls.codBarraUE.setValue('');
        this.forma.controls.compUMUE.setValue(0);
        this.forma.controls.pesoBrutoUV.setValue(0);
        this.forma.controls.largoUV.setValue(0);
        this.forma.controls.anchoUV.setValue(0);
        this.forma.controls.altoUV.setValue(0);
        this.forma.controls.uCamaUV.setValue(0);
        this.forma.controls.factorApilUV.setValue(0);
        this.forma.controls.codBarraUV.setValue('');
        this.forma.controls.compUMUV.setValue(0);
        this.forma.controls.pesoBrutoF1.setValue(0);
        this.forma.controls.largoF1.setValue(0);
        this.forma.controls.anchoF1.setValue(0);
        this.forma.controls.altoF1.setValue(0);
        this.forma.controls.codBarraF1.setValue('');
    };
    DefinicionArticuloComponent.prototype.seteaManejoClave = function (valor) {
        var _this = this;
        this.request.parcodparametro01 = (valor).toString();
        this.request.parnumparametro = 15;
        this.consultasService.getParametros(this.request)
            .subscribe(function (data) {
            // this.cargador.hide();
            if (data) {
                if (data.error.codError != 0) {
                    swal('Atención', 'Ha ocurrido un error al cargar descripción de Manejo Clave', 'error');
                }
                else {
                    _this.datos = data.general;
                    if (_this.datos.length > 0) {
                        _this.forma.controls.manejoClaveDesc.setValue(_this.datos[0].par_deslargo01);
                    }
                    else {
                        _this.forma.controls.manejoClave.setValue(null);
                        _this.forma.controls.manejoClaveDesc.setValue('');
                        swal('Atención', 'No Existe Parámetro', 'warning');
                    }
                }
            }
        }, function (error) {
            // this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    DefinicionArticuloComponent.prototype.validaManejoClave = function () {
        var _this = this;
        if (this.forma.controls.manejoClave.value === null) {
            this.forma.controls.manejoClave.setValue(null);
            this.forma.controls.manejoClaveDesc.setValue('');
        }
        else {
            this.request.parcodparametro01 = (this.forma.controls.manejoClave.value).toString();
            this.request.parnumparametro = 15;
            this.cargador.show();
            this.consultasService.getParametros(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                if (data) {
                    if (data.error.codError != 0) {
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                    }
                    else {
                        _this.datos = data.general;
                        if (_this.datos.length > 0) {
                            _this.forma.controls.manejoClaveDesc.setValue(_this.datos[0].par_deslargo01);
                        }
                        else {
                            _this.forma.controls.manejoClave.setValue(null);
                            _this.forma.controls.manejoClaveDesc.setValue('');
                            swal('Atención', 'No Existe Parámetro', 'warning');
                        }
                    }
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    DefinicionArticuloComponent.prototype.validaLinea = function () {
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
    DefinicionArticuloComponent.prototype.validaCategoria = function () {
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
    DefinicionArticuloComponent.prototype.validaAgrupacion = function () {
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
    DefinicionArticuloComponent.prototype.validaProdBase = function () {
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
    DefinicionArticuloComponent.prototype.openModalLineas = function () {
        this.origenModal = 'linea';
        var initialState = {
            titulo: 'Líneas',
            origen: 'linea'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_8__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DefinicionArticuloComponent.prototype.openModalCategorias = function () {
        this.origenModal = 'categoria';
        var initialState = {
            titulo: 'Categorías',
            origen: 'categoria'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_8__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DefinicionArticuloComponent.prototype.openModalAgrupacion = function () {
        this.origenModal = 'agrupacion';
        var initialState = {
            titulo: 'Agrupaciones',
            origen: 'agrupacion'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_8__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DefinicionArticuloComponent.prototype.openModalProdBase = function () {
        this.origenModal = 'prodbase';
        var initialState = {
            titulo: 'Productos Base',
            origen: 'prodbase'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_8__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DefinicionArticuloComponent.prototype.cargaCombos = function () {
        this.parametros = this.authService.getParametrosArticulo();
        //Origen
        this.origen = this.parametros.filter(function (origenItem) {
            return origenItem.par_numparametro === 11;
        });
        //Estado
        //Cob. Existencia
        this.cobExistencia = this.parametros.filter(function (cobExistenciaItem) {
            return cobExistenciaItem.par_numparametro === 31;
        });
        //Tipo Articulo
        this.tipoArticulo = this.parametros.filter(function (tipoArtItem) {
            return tipoArtItem.par_numparametro === 13;
        });
        //Unid. Min. Pedido
        this.unidadPedido = this.parametros.filter(function (unidadPedidoItem) {
            return unidadPedidoItem.par_numparametro === 14;
        });
        //Unid. Min. Devolucion
        this.unidadDevolucion = this.parametros.filter(function (unidadDevolucionItem) {
            return unidadDevolucionItem.par_numparametro === 14;
        });
        //volumen
        this.volumen = this.parametros.filter(function (volumenItem) {
            return volumenItem.par_numparametro === 6;
        });
        //Unidad Estadistica
        this.estadistica = this.parametros.filter(function (estadisticaItem) {
            return estadisticaItem.par_numparametro === 6;
        });
        //Unidad manejo precio
        this.manejoPrecio = this.parametros.filter(function (manejoPrecioItem) {
            return manejoPrecioItem.par_numparametro === 14;
        });
        //Unidad Presentación
        this.presentacionUD = this.parametros.filter(function (UnidPresUDItem) {
            return UnidPresUDItem.par_numparametro === 4;
        });
        this.presentacionUE = this.parametros.filter(function (UnidPresUDItem) {
            return UnidPresUDItem.par_numparametro === 4;
        });
        this.presentacionUV = this.parametros.filter(function (UnidPresUDItem) {
            return UnidPresUDItem.par_numparametro === 4;
        });
        this.presentacionF1 = this.parametros.filter(function (UnidPresUDItem) {
            return UnidPresUDItem.par_numparametro === 4;
        });
        //Unidad de Medida
        this.medidaUD = this.parametros.filter(function (medidaItem) {
            return medidaItem.par_numparametro === 5;
        });
        this.medidaUE = this.parametros.filter(function (medidaItem) {
            return medidaItem.par_numparametro === 5;
        });
        this.medidaUV = this.parametros.filter(function (medidaItem) {
            return medidaItem.par_numparametro === 5;
        });
        this.medidaF1 = this.parametros.filter(function (medidaItem) {
            return medidaItem.par_numparametro === 5;
        });
    };
    DefinicionArticuloComponent.prototype.setData = function (resData) {
        console.log('resData', resData);
        if (resData != 0 && resData != 'guardar') {
            switch (this.origenModal) {
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
            }
        }
        $('body').removeClass('modal-open');
    };
    DefinicionArticuloComponent.prototype.cargarDatosArticuloDetalle = function () {
        var _this = this;
        console.log('this.articuloService.selectedArticuloDetail', this.articuloService.selectedArticuloDetail);
        console.log('this.articuloService.selectedArticuloDetailPack', this.articuloService.selectedArticuloDetailPack);
        // this.packArticulo = this.articuloService.selectedArticuloDetailPack;
        this.forma.controls.codigoFormato.setValue(this.articuloService.selectedArticuloDetail[0].art_scodformato);
        this.forma.controls.codigoVariedad.setValue(this.articuloService.selectedArticuloDetail[0].art_scodvariedad);
        this.forma.controls.descripcion.setValue(this.articuloService.selectedArticuloDetail[0].art_sdescripcion);
        this.forma.controls.medida.setValue(this.articuloService.selectedArticuloDetail[0].art_smedida);
        this.forma.controls.codSap.setValue(this.articuloService.selectedArticuloDetail[0].art_scodsap);
        this.forma.controls.origen.setValue(this.articuloService.selectedArticuloDetail[0].art_scodorigen);
        this.forma.controls.estado.setValue(this.articuloService.selectedArticuloDetail[0].art_scodestado);
        this.forma.controls.coberExistencia.setValue(this.articuloService.selectedArticuloDetail[0].art_ncantcoberexist);
        this.forma.controls.codExistenciaParam.setValue(this.articuloService.selectedArticuloDetail[0].art_scodcoberexist);
        this.forma.controls.tipoArticulo.setValue(this.articuloService.selectedArticuloDetail[0].art_scodtipoarticulo);
        this.forma.controls.unidadPedido1.setValue(this.articuloService.selectedArticuloDetail[0].art_ncantminpedido);
        this.forma.controls.unidadPedido2.setValue(this.articuloService.selectedArticuloDetail[0].art_scodfomatopedido);
        this.forma.controls.unidadPedido3.setValue(this.articuloService.selectedArticuloDetail[0].art_sdesformatopedido);
        this.forma.controls.unidadDevo1.setValue(this.articuloService.selectedArticuloDetail[0].art_ncantmindevolucion);
        this.forma.controls.unidadDevo2.setValue(this.articuloService.selectedArticuloDetail[0].art_scodfomatodevolucion);
        this.forma.controls.unidadDevo3.setValue(this.articuloService.selectedArticuloDetail[0].art_sdesformatodevolucion);
        // Medida Plazo Impuesto
        this.forma.controls.peso.setValue(this.articuloService.selectedArticuloDetail[0].art_npesovol);
        this.forma.controls.volumen.setValue(this.articuloService.selectedArticuloDetail[0].art_scodtipopeso);
        this.forma.controls.estadistica.setValue(this.articuloService.selectedArticuloDetail[0].art_scodunidadestadistica);
        this.forma.controls.manejoPrecio.setValue(this.articuloService.selectedArticuloDetail[0].art_scodmanejoprecio);
        this.forma.controls.iva.setValue(this.articuloService.selectedArticuloDetail[0].art_sindiva);
        this.forma.controls.iaba.setValue(this.articuloService.selectedArticuloDetail[0].art_sindiaba);
        this.forma.controls.permanencia.setValue(this.articuloService.selectedArticuloDetail[0].art_npermalmacen);
        this.forma.controls.validez.setValue(this.articuloService.selectedArticuloDetail[0].art_nvalidezconsumo);
        this.forma.controls.manejoClave.setValue(this.articuloService.selectedArticuloDetail[0].art_scodmanejoclave);
        if ((this.forma.controls.manejoClave.value).trim() !== '') {
            this.seteaManejoClave(this.forma.controls.manejoClave.value);
        }
        // Unidad de Manejo
        this.forma.controls.presentacionUD.setValue(this.articuloService.selectedArticuloDetail[0].art_scodformatodistribucion);
        this.forma.controls.pesoBrutoUD.setValue(this.articuloService.selectedArticuloDetail[0].art_npesogrmsdistrib);
        this.forma.controls.largoUD.setValue(this.articuloService.selectedArticuloDetail[0].art_nlargodistrib);
        this.forma.controls.anchoUD.setValue(this.articuloService.selectedArticuloDetail[0].art_nanchodistrib);
        this.forma.controls.altoUD.setValue(this.articuloService.selectedArticuloDetail[0].art_naltodistrib);
        this.forma.controls.medidaUD.setValue(this.articuloService.selectedArticuloDetail[0].art_scodtipomedidadistrib);
        this.forma.controls.uCamaUD.setValue(this.articuloService.selectedArticuloDetail[0].art_nunicamadistrib);
        this.forma.controls.factorApilUD.setValue(this.articuloService.selectedArticuloDetail[0].art_nfactorapildistrib);
        this.forma.controls.codBarraUD.setValue(this.articuloService.selectedArticuloDetail[0].art_scodeandistrib);
        this.forma.controls.compUMUD.setValue(this.articuloService.selectedArticuloDetail[0].art_nunidaddistribucion);
        this.forma.controls.presentacionUE.setValue(this.articuloService.selectedArticuloDetail[0].art_scodformatoexpedicion);
        this.forma.controls.pesoBrutoUE.setValue(this.articuloService.selectedArticuloDetail[0].art_npesogrmsexped);
        this.forma.controls.largoUE.setValue(this.articuloService.selectedArticuloDetail[0].art_nlargoexped);
        this.forma.controls.anchoUE.setValue(this.articuloService.selectedArticuloDetail[0].art_nanchoexped);
        this.forma.controls.altoUE.setValue(this.articuloService.selectedArticuloDetail[0].art_naltoexped);
        this.forma.controls.medidaUE.setValue(this.articuloService.selectedArticuloDetail[0].art_scodtipomedidaexped);
        this.forma.controls.uCamaUE.setValue(this.articuloService.selectedArticuloDetail[0].art_nunicamaexped);
        this.forma.controls.factorApilUE.setValue(this.articuloService.selectedArticuloDetail[0].art_nfactorapilexped);
        this.forma.controls.codBarraUE.setValue(this.articuloService.selectedArticuloDetail[0].art_scodeanexped);
        this.forma.controls.compUMUE.setValue(this.articuloService.selectedArticuloDetail[0].art_nunidadexpedicion);
        this.forma.controls.presentacionUV.setValue(this.articuloService.selectedArticuloDetail[0].art_scodformatoventa);
        this.forma.controls.pesoBrutoUV.setValue(this.articuloService.selectedArticuloDetail[0].art_npesogrmsvta);
        this.forma.controls.largoUV.setValue(this.articuloService.selectedArticuloDetail[0].art_nlargovta);
        this.forma.controls.anchoUV.setValue(this.articuloService.selectedArticuloDetail[0].art_nanchovta);
        this.forma.controls.altoUV.setValue(this.articuloService.selectedArticuloDetail[0].art_naltovta);
        this.forma.controls.medidaUV.setValue(this.articuloService.selectedArticuloDetail[0].art_scodtipomedidavta);
        this.forma.controls.uCamaUV.setValue(this.articuloService.selectedArticuloDetail[0].art_nunicamavta);
        this.forma.controls.factorApilUV.setValue(this.articuloService.selectedArticuloDetail[0].art_nfactorapilvta);
        this.forma.controls.codBarraUV.setValue(this.articuloService.selectedArticuloDetail[0].art_scodeanvta);
        this.forma.controls.compUMUV.setValue(this.articuloService.selectedArticuloDetail[0].art_nunidadventa);
        this.forma.controls.presentacionF1.setValue(this.articuloService.selectedArticuloDetail[0].art_scodformatofraccion);
        this.forma.controls.pesoBrutoF1.setValue(this.articuloService.selectedArticuloDetail[0].art_npesogrmsfraccion);
        this.forma.controls.largoF1.setValue(this.articuloService.selectedArticuloDetail[0].art_nlargofraccion);
        this.forma.controls.anchoF1.setValue(this.articuloService.selectedArticuloDetail[0].art_nanchofraccion);
        this.forma.controls.altoF1.setValue(this.articuloService.selectedArticuloDetail[0].art_naltofraccion);
        this.forma.controls.medidaF1.setValue(this.articuloService.selectedArticuloDetail[0].art_scodtipomedidafraccion);
        this.forma.controls.codBarraF1.setValue(this.articuloService.selectedArticuloDetail[0].art_scodeanfraccion);
        //Agrupaciones
        this.forma.controls.codLinea.setValue(this.articuloService.selectedArticuloDetail[0].jli_scodlinea);
        this.forma.controls.descLinea.setValue(this.articuloService.selectedArticuloDetail[0].jli_sdeslinea);
        this.forma.controls.codCategoria.setValue(this.articuloService.selectedArticuloDetail[0].jca_scodcategoria);
        this.forma.controls.descCategoria.setValue(this.articuloService.selectedArticuloDetail[0].jca_sdescategoria);
        this.forma.controls.codAgrupacion.setValue(this.articuloService.selectedArticuloDetail[0].jag_scodagrupacion);
        this.forma.controls.descAgrupacion.setValue(this.articuloService.selectedArticuloDetail[0].jag_sdesagrupacion);
        this.forma.controls.codProdBase.setValue(this.articuloService.selectedArticuloDetail[0].jpb_scodproductobase);
        this.forma.controls.descProdBase.setValue(this.articuloService.selectedArticuloDetail[0].jpb_sdesproductobase);
        //Stock
        this.requestStock = {
            nrutoperador: this.parametrosUsuario.nrutoperador,
            scodagrupacion: "",
            scodbodega: "",
            scodcategoria: "",
            scodformato: this.articuloService.selectedArticuloDetail[0].art_scodformato,
            scodlinea: "",
            scodproductobase: "",
            scodvariedad: this.articuloService.selectedArticuloDetail[0].art_scodvariedad
        };
        console.log('this.requestStock', this.requestStock);
        this.articuloService.getExistenciaArticulo(this.requestStock)
            .subscribe(function (data) {
            console.log('data exsitencia', data);
            if (data.articulo) {
                _this.stockArticulo = data.articulo;
            }
            if (data.error.codError != 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
        //Pack
        if (this.articuloService.selectedArticuloDetailPack.length > 0) {
            var iVolumenTotal = 0;
            this.iTotalNetoIaba = 0;
            this.iTotalNeto = 0;
            for (var i in this.articuloService.selectedArticuloDetailPack) {
                var iUnidadesVenta = Math.floor(this.articuloService.selectedArticuloDetailPack[i].dpk_ncantfracciones / this.articuloService.selectedArticuloDetailPack[i].art_nunidadventa);
                var iFracciones = this.articuloService.selectedArticuloDetailPack[i].dpk_ncantfracciones % this.articuloService.selectedArticuloDetailPack[i].art_nunidadventa;
                var iTotalUniVta = iUnidadesVenta * this.articuloService.selectedArticuloDetailPack[i].precio;
                var dPrecioFraccion = this.articuloService.selectedArticuloDetailPack[i].precio / this.articuloService.selectedArticuloDetailPack[i].art_nunidadventa;
                var iTotalFraccion = iFracciones * Math.round(dPrecioFraccion);
                var iTotalSinDescto = iTotalUniVta + iTotalFraccion;
                var iNetoDetalle = Math.round(iTotalSinDescto - ((iTotalSinDescto * (this.articuloService.selectedArticuloDetailPack[i].dpk_nporcdescuento) / 100)));
                var lTotalNeto = iNetoDetalle;
                console.log('iUnidadesVenta', iUnidadesVenta);
                console.log('iFracciones', iFracciones);
                console.log('iTotalUniVta', iTotalUniVta);
                console.log('dPrecioFraccion', dPrecioFraccion);
                console.log('iTotalFraccion', iTotalFraccion);
                console.log('iTotalSinDescto', iTotalSinDescto);
                console.log('iNetoDetalle', iNetoDetalle);
                console.log('lTotalNeto', lTotalNeto);
                console.log('******************************************');
                //Totales
                this.iTotalNeto = this.iTotalNeto + iNetoDetalle;
                if (this.articuloService.selectedArticuloDetailPack[i].art_sindiaba === 'S') {
                    this.iTotalNetoIaba = this.iTotalNetoIaba + iNetoDetalle;
                }
                console.log('iTotalNeto', this.iTotalNeto);
                console.log('*********************************');
                //Volumen
                var iVolumenArticulo = this.utilService.calculaVolumen(this.articuloService.selectedArticuloDetailPack[i].art_nlargovta, this.articuloService.selectedArticuloDetailPack[i].art_nanchovta, this.articuloService.selectedArticuloDetailPack[i].art_naltovta, this.articuloService.selectedArticuloDetailPack[i].nconvermedidavta) * iUnidadesVenta;
                iVolumenTotal = iVolumenTotal + iVolumenArticulo;
                iVolumenArticulo = this.utilService.calculaVolumen(this.articuloService.selectedArticuloDetailPack[i].art_nlargofraccion, this.articuloService.selectedArticuloDetailPack[i].art_nanchofraccion, this.articuloService.selectedArticuloDetailPack[i].art_naltofraccion, this.articuloService.selectedArticuloDetailPack[i].nconvermedidafraccion) * iFracciones;
                iVolumenTotal = iVolumenTotal + iVolumenArticulo;
                console.log('iVolumenTotal', iVolumenTotal);
                console.log('******************************');
                //agrega objeto a arreglo pack
                var objeto = {
                    articulo: this.articuloService.selectedArticuloDetailPack[i].dpk_scodformato + "-" + this.articuloService.selectedArticuloDetailPack[i].dpk_scodvariedad,
                    descripcion: this.articuloService.selectedArticuloDetailPack[i].art_sdescripcion,
                    medidaUV: this.articuloService.selectedArticuloDetailPack[i].art_smedida,
                    uv: iUnidadesVenta,
                    fraccion: iFracciones,
                    valorUV: this.articuloService.selectedArticuloDetailPack[i].precio,
                    totalSD: iTotalSinDescto,
                    porcentaje: this.articuloService.selectedArticuloDetailPack[i].dpk_nporcdescuento,
                    total: lTotalNeto
                };
                this.packArticulo.push(objeto);
            }
            //IVA
            var iva = this.authService.getParametrosIvaIaba().filter(function (item) { return item.par_codparametro01 === '00001'; });
            console.log('iva', iva[0].par_numero01);
            this.iIva = Math.round((this.iTotalNeto * iva[0].par_numero01) / 100);
            //IABA
            var iaba = this.authService.getParametrosIvaIaba().filter(function (item) { return item.par_codparametro01 === '00002'; });
            console.log('iva', iaba[0].par_numero01);
            this.iIaba = Math.round((this.iTotalNetoIaba * iaba[0].par_numero01) / 100);
            //Total
            this.iTotal = this.iTotalNeto + this.iIva + this.iIaba;
            //Volumen
            this.iVolumen = iVolumenTotal;
        }
    };
    DefinicionArticuloComponent.prototype.guardarArticulo = function () {
        var _this = this;
        console.log('forma.valid', this.forma);
        this.validaNoProdPack();
        if (this.forma.valid && this.isValidVolumen && this.isValidEstadistica && this.isValidManejo && this.isPresentacionUD && this.isPresentacionUE
            && this.isPresentacionUV && this.isMedidaUD && this.isMedidaUE && this.isMedidaUV) {
            $('*').removeClass('error-form');
            if (this.forma.controls.compUMUD.value < 1) {
                swal('Atención', 'Debe Ingresar Composición U.D.', 'warning');
                $('[name=compUMUD]').addClass('error-form');
            }
            else if (this.forma.controls.compUMUE.value < 1) {
                swal('Atención', 'Debe Ingresar Composición U.E.', 'warning');
                $('[name=compUMUE]').addClass('error-form');
            }
            else if (this.forma.controls.compUMUV.value < 1) {
                swal('Atención', 'Debe Ingresar Composición U.V.', 'warning');
                $('[name=compUMUV]').addClass('error-form');
            }
            else if (this.checkSeleccionado && this.packArticulo.length === 0) {
                swal('Atención', 'Debe Ingresar algún Artículo al Pack', 'warning');
            }
            else if (this.checkSeleccionado && this.packArticulo.length === 1) {
                swal({
                    title: 'Atención',
                    text: '¿Desea crear pack con menos de 2 Artículos?',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#85b3cd',
                    confirmButtonText: 'Aceptar',
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: true
                }, function () {
                    _this.grabaArticulo();
                });
            }
            else {
                // guardar
                this.grabaArticulo();
            }
        }
        else {
            swal('Atención', 'Existen campos requeridos no ingresados', 'warning');
            if (!this.forma.controls.codigoFormato.valid && this.forma.controls.codigoFormato.disabled !== true) {
                $('[name=codigoFormato]').addClass('error-form');
            }
            else {
                $('[name=codigoFormato]').removeClass('error-form');
            }
            if (!this.forma.controls.codigoVariedad.valid && this.forma.controls.codigoVariedad.disabled !== true) {
                $('[name=codigoVariedad]').addClass('error-form');
            }
            else {
                $('[name=codigoVariedad]').removeClass('error-form');
            }
            if (!this.forma.controls.descripcion.valid) {
                $('[name=descripcion]').addClass('error-form');
            }
            else {
                $('[name=descripcion]').removeClass('error-form');
            }
            if (!this.forma.controls.origen.valid) {
                $('[name=origen]').addClass('error-form');
            }
            else {
                $('[name=origen]').removeClass('error-form');
            }
            if (!this.forma.controls.codExistenciaParam.valid) {
                $('[name=codExistenciaParam]').addClass('error-form');
            }
            else {
                $('[name=codExistenciaParam]').removeClass('error-form');
            }
            if (!this.forma.controls.coberExistencia.valid) {
                $('[name=coberExistencia]').addClass('error-form');
            }
            else {
                $('[name=coberExistencia]').removeClass('error-form');
            }
            if (!this.forma.controls.tipoArticulo.valid) {
                $('[name=tipoArticulo]').addClass('error-form');
            }
            else {
                $('[name=tipoArticulo]').removeClass('error-form');
            }
            if (!this.forma.controls.unidadPedido1.valid) {
                $('[name=unidadPedido1]').addClass('error-form');
            }
            else {
                $('[name=unidadPedido1]').removeClass('error-form');
            }
            if (!this.forma.controls.unidadPedido2.valid) {
                $('[name=unidadPedido2]').addClass('error-form');
            }
            else {
                $('[name=unidadPedido2]').removeClass('error-form');
            }
            if (!this.forma.controls.unidadPedido3.valid) {
                $('[name=unidadPedido3]').addClass('error-form');
            }
            else {
                $('[name=unidadPedido3]').removeClass('error-form');
            }
            if (!this.forma.controls.unidadDevo1.valid) {
                $('[name=unidadDevo1]').addClass('error-form');
            }
            else {
                $('[name=unidadDevo1]').removeClass('error-form');
            }
            if (!this.forma.controls.unidadDevo2.valid) {
                $('[name=unidadDevo2]').addClass('error-form');
            }
            else {
                $('[name=unidadDevo2]').removeClass('error-form');
            }
            if (!this.forma.controls.unidadDevo3.valid) {
                $('[name=unidadDevo3]').addClass('error-form');
            }
            else {
                $('[name=unidadDevo3]').removeClass('error-form');
            }
            if (this.forma.controls.peso.value < 0) {
                $('[name=peso]').addClass('error-form');
            }
            else {
                $('[name=peso]').removeClass('error-form');
            }
            // if(!this.forma.controls.presentacionUD.valid){
            //   $('[name=presentacionUD]').addClass('error-form');
            // }
            // else{
            //   $('[name=presentacionUD]').removeClass('error-form');
            // }
            // if(!this.forma.controls.presentacionUE.valid){
            //   $('[name=presentacionUE]').addClass('error-form');
            // }
            // else{
            //   $('[name=presentacionUE]').removeClass('error-form');
            // }
            // if(!this.forma.controls.presentacionUV.valid){
            //   $('[name=presentacionUV]').addClass('error-form');
            // }
            // else{
            //   $('[name=presentacionUV]').removeClass('error-form');
            // }
            if (!this.forma.controls.presentacionF1.valid) {
                $('[name=presentacionF1]').addClass('error-form');
            }
            else {
                $('[name=presentacionF1]').removeClass('error-form');
            }
            // if(!this.forma.controls.medidaUD.valid){
            //   $('[name=medidaUD]').addClass('error-form');
            // }
            // else{
            //   $('[name=medidaUD]').removeClass('error-form');
            // }
            // if(!this.forma.controls.medidaUE.valid){
            //   $('[name=medidaUE]').addClass('error-form');
            // }
            // else{
            //   $('[name=medidaUE]').removeClass('error-form');
            // }
            // if(!this.forma.controls.medidaUV.valid){
            //   $('[name=medidaUV]').addClass('error-form');
            // }
            // else{
            //   $('[name=medidaUV]').removeClass('error-form');
            // }
            if (!this.forma.controls.medidaF1.valid) {
                $('[name=medidaF1]').addClass('error-form');
            }
            else {
                $('[name=medidaF1]').removeClass('error-form');
            }
            if (!this.forma.controls.codProdBase.valid) {
                $('[name=codProdBase]').addClass('error-form');
            }
            else {
                $('[name=codProdBase]').removeClass('error-form');
            }
            if (!this.forma.controls.compUMUD.valid && this.forma.controls.compUMUV.disabled !== true) {
                $('[name=compUMUD]').addClass('error-form');
            }
            else {
                $('[name=compUMUD]').removeClass('error-form');
            }
            if (!this.forma.controls.compUMUE.valid && this.forma.controls.compUMUV.disabled !== true) {
                $('[name=compUMUE]').addClass('error-form');
            }
            else {
                $('[name=compUMUE]').removeClass('error-form');
            }
            if (!this.forma.controls.compUMUV.valid && this.forma.controls.compUMUV.disabled !== true) {
                $('[name=compUMUV]').addClass('error-form');
            }
            else {
                $('[name=compUMUV]').removeClass('error-form');
            }
        }
    };
    DefinicionArticuloComponent.prototype.validaNoProdPack = function () {
        if (this.forma.controls.volumen.value === '0' && !this.checkSeleccionado) {
            $('[name=volumen]').addClass('error-form');
            this.isValidVolumen = false;
        }
        else {
            $('[name=volumen]').removeClass('error-form');
            this.isValidVolumen = true;
        }
        if (this.forma.controls.estadistica.value === '0' && !this.checkSeleccionado) {
            $('[name=estadistica]').addClass('error-form');
            this.isValidEstadistica = false;
        }
        else {
            $('[name=estadistica]').removeClass('error-form');
            this.isValidEstadistica = true;
        }
        if (this.forma.controls.manejoPrecio.value === '0' && !this.checkSeleccionado) {
            $('[name=manejoPrecio]').addClass('error-form');
            this.isValidManejo = false;
        }
        else {
            $('[name=manejoPrecio]').removeClass('error-form');
            this.isValidManejo = true;
        }
        if (this.forma.controls.presentacionUD.value === '' && !this.checkSeleccionado) {
            $('[name=presentacionUD]').addClass('error-form');
            this.isPresentacionUD = false;
        }
        else {
            $('[name=presentacionUD]').removeClass('error-form');
            this.isPresentacionUD = true;
        }
        if (this.forma.controls.presentacionUE.value === '' && !this.checkSeleccionado) {
            $('[name=presentacionUE]').addClass('error-form');
            this.isPresentacionUE = false;
        }
        else {
            $('[name=presentacionUE]').removeClass('error-form');
            this.isPresentacionUE = true;
        }
        if (this.forma.controls.presentacionUV.value === '' && !this.checkSeleccionado) {
            $('[name=presentacionUV]').addClass('error-form');
            this.isPresentacionUV = false;
        }
        else {
            $('[name=presentacionUV]').removeClass('error-form');
            this.isPresentacionUV = true;
        }
        if (this.forma.controls.medidaUD.value === '' && !this.checkSeleccionado) {
            $('[name=medidaUD]').addClass('error-form');
            this.isMedidaUD = false;
        }
        else {
            $('[name=medidaUD]').removeClass('error-form');
            this.isMedidaUD = true;
        }
        if (this.forma.controls.medidaUE.value === '' && !this.checkSeleccionado) {
            $('[name=medidaUE]').addClass('error-form');
            this.isMedidaUE = false;
        }
        else {
            $('[name=medidaUE]').removeClass('error-form');
            this.isMedidaUE = true;
        }
        if (this.forma.controls.medidaUV.value === '' && !this.checkSeleccionado) {
            $('[name=medidaUV]').addClass('error-form');
            this.isMedidaUV = false;
        }
        else {
            $('[name=medidaUV]').removeClass('error-form');
            this.isMedidaUV = true;
        }
    };
    DefinicionArticuloComponent.prototype.validaVacio = function (dato) {
        if (dato.value === '') {
            dato.value = 0;
        }
    };
    DefinicionArticuloComponent.prototype.validaFormatoPorciento = function (dato) {
        if (dato.value === '') {
            dato.value = 0;
        }
        dato.value = parseFloat(dato.value).toFixed(2);
    };
    DefinicionArticuloComponent.prototype.grabaArticulo = function () {
        var _this = this;
        //obtiene tipo de impuesto.
        if (this.checkSeleccionado) {
            if (this.packArticulo[0].art_sindiaba === 'S') {
                this.forma.controls.iva.setValue('S');
                this.forma.controls.iaba.setValue('S');
            }
            else {
                this.forma.controls.iva.setValue('S');
                this.forma.controls.iaba.setValue('N');
            }
        }
        this.request.calculaPrecioPackRequest = {
            scodformato: this.forma.controls.codigoFormato.value,
            scodvariedad: this.forma.controls.codigoVariedad.value
        };
        this.request.creaArticuloRequest = {
            artnaltodistrib: this.forma.controls.altoUD.value,
            artnaltoexped: this.forma.controls.altoUE.value,
            artnaltofraccion: this.forma.controls.altoF1.value,
            artnaltovta: this.forma.controls.altoUV.value,
            artnanchodistrib: this.forma.controls.anchoUD.value,
            artnanchoexped: this.forma.controls.anchoUE.value,
            artnanchofraccion: this.forma.controls.anchoF1.value,
            artnanchovta: this.forma.controls.anchoUV.value,
            artncantcoberexist: this.forma.controls.coberExistencia.value,
            artncantmindevolucion: this.forma.controls.unidadDevo1.value,
            artncantminpedido: this.forma.controls.unidadPedido1.value,
            artnfactorapildistrib: this.forma.controls.factorApilUD.value,
            artnfactorapilexped: this.forma.controls.factorApilUE.value,
            artnfactorapilvta: this.forma.controls.factorApilUV.value,
            artnlargodistrib: this.forma.controls.largoUD.value,
            artnlargoexped: this.forma.controls.largoUE.value,
            artnlargofraccion: this.forma.controls.largoF1.value,
            artnlargovta: this.forma.controls.largoUV.value,
            artnpermalmacen: this.forma.controls.permanencia.value,
            artnpesogrmsdistrib: this.forma.controls.pesoBrutoUD.value,
            artnpesogrmsexped: this.forma.controls.pesoBrutoUE.value,
            artnpesogrmsfraccion: this.forma.controls.pesoBrutoF1.value,
            artnpesogrmsvta: this.forma.controls.pesoBrutoUV.value,
            artnpesovol: this.forma.controls.peso.value,
            artnrunusuariocrea: parseInt(this.authService.getDatosUser().nrunusuario),
            artnunicamadistrib: this.forma.controls.uCamaUD.value,
            artnunicamaexped: this.forma.controls.uCamaUE.value,
            artnunicamavta: this.forma.controls.uCamaUV.value,
            artnunidaddistribucion: this.forma.controls.compUMUD.value,
            artnunidadexpedicion: this.forma.controls.compUMUE.value,
            artnunidadventa: this.forma.controls.compUMUV.value,
            artnvalidezconsumo: this.forma.controls.validez.value,
            artscodcoberexist: this.forma.controls.codExistenciaParam.value,
            artscodcomposicion: this.checkSeleccionado ? 'PACKS' : 'UNITA',
            artscodeandistrib: this.forma.controls.codBarraUD.value,
            artscodeanexped: this.forma.controls.codBarraUE.value,
            artscodeanfraccion: this.forma.controls.codBarraF1.value,
            artscodeanvta: this.forma.controls.codBarraUV.value,
            artscodestado: this.forma.controls.estado.value,
            artscodfomatodevolucion: this.forma.controls.unidadDevo2.value,
            artscodfomatopedido: this.forma.controls.unidadPedido2.value,
            artscodformato: this.forma.controls.codigoFormato.value,
            artscodformatodistribucion: this.checkSeleccionado ? this.forma.controls.presentacionF1.value : this.forma.controls.presentacionUD.value,
            artscodformatoexpedicion: this.checkSeleccionado ? this.forma.controls.presentacionF1.value : this.forma.controls.presentacionUE.value,
            artscodformatofraccion: this.forma.controls.presentacionF1.value,
            artscodformatoventa: this.checkSeleccionado ? this.forma.controls.presentacionF1.value : this.forma.controls.presentacionUV.value,
            artscodjerproducbase: this.forma.controls.codProdBase.value,
            artscodmanejoclave: this.forma.controls.manejoClave.value === null ? '' : this.forma.controls.manejoClave.value.toString(),
            artscodmanejoprecio: this.forma.controls.manejoPrecio.value === '0' ? '0' : this.forma.controls.manejoPrecio.value,
            artscodorigen: this.forma.controls.origen.value,
            artscodsap: this.forma.controls.codSap.value,
            artscodtipoarticulo: this.forma.controls.tipoArticulo.value,
            artscodtipomedidadistrib: this.checkSeleccionado ? this.forma.controls.medidaF1.value : this.forma.controls.medidaUD.value,
            artscodtipomedidaexped: this.checkSeleccionado ? this.forma.controls.medidaF1.value : this.forma.controls.medidaUE.value,
            artscodtipomedidafraccion: this.forma.controls.medidaF1.value,
            artscodtipomedidavta: this.checkSeleccionado ? this.forma.controls.medidaF1.value : this.forma.controls.medidaUV.value,
            artscodtipopeso: this.forma.controls.volumen.value === '0' ? '0' : this.forma.controls.volumen.value,
            artscodunidadestadistica: this.forma.controls.estadistica.value === '0' ? '0' : this.forma.controls.estadistica.value,
            artscodvariedad: this.forma.controls.codigoVariedad.value,
            artsdescripcion: this.forma.controls.descripcion.value,
            artsdesformatodevolucion: this.forma.controls.unidadDevo3.value,
            artsdesformatopedido: this.forma.controls.unidadPedido3.value,
            artsindiaba: this.forma.controls.iaba.value,
            artsindiva: this.forma.controls.iva.value,
            artsmedida: this.forma.controls.medida.value
        };
        this.request.creaDetallePackRequest = [];
        if (this.checkSeleccionado) {
            for (var i in this.packArticulo) {
                var pack = {
                    ncantfracciones: this.packArticulo[i].uv * this.packArticulo[i].art_nunidadventa + this.packArticulo[i].fraccion,
                    nporcdescuento: this.packArticulo[i].porcentaje,
                    scodformato: (this.packArticulo[i].articulo.split('-'))[0],
                    scodformatopack: this.forma.controls.codigoFormato.value,
                    scodvariedad: (this.packArticulo[i].articulo.split('-'))[1],
                    scodvariedadpack: this.forma.controls.codigoVariedad.value
                };
                this.request.creaDetallePackRequest.push(pack);
            }
        }
        //request Actualizacion
        this.requestActualiza = {
            artnaltodistrib: this.forma.controls.altoUD.value,
            artnaltoexped: this.forma.controls.altoUE.value,
            artnaltofraccion: this.forma.controls.altoF1.value,
            artnaltovta: this.forma.controls.altoUV.value,
            artnanchodistrib: this.forma.controls.anchoUD.value,
            artnanchoexped: this.forma.controls.anchoUE.value,
            artnanchofraccion: this.forma.controls.anchoF1.value,
            artnanchovta: this.forma.controls.anchoUV.value,
            artncantcoberexist: this.forma.controls.coberExistencia.value,
            artncantmindevolucion: this.forma.controls.unidadDevo1.value,
            artncantminpedido: this.forma.controls.unidadPedido1.value,
            artnfactorapildistrib: this.forma.controls.factorApilUD.value,
            artnfactorapilexped: this.forma.controls.factorApilUE.value,
            artnfactorapilvta: this.forma.controls.factorApilUV.value,
            artnlargodistrib: this.forma.controls.largoUD.value,
            artnlargoexped: this.forma.controls.largoUE.value,
            artnlargofraccion: this.forma.controls.largoF1.value,
            artnlargovta: this.forma.controls.largoUV.value,
            artnpermalmacen: this.forma.controls.permanencia.value,
            artnpesogrmsdistrib: this.forma.controls.pesoBrutoUD.value,
            artnpesogrmsexped: this.forma.controls.pesoBrutoUE.value,
            artnpesogrmsfraccion: this.forma.controls.pesoBrutoF1.value,
            artnpesogrmsvta: this.forma.controls.pesoBrutoUV.value,
            artnpesovol: this.forma.controls.peso.value,
            artnrunusuarioactualiza: parseInt(this.authService.getDatosUser().nrunusuario),
            artnunicamadistrib: this.forma.controls.uCamaUD.value,
            artnunicamaexped: this.forma.controls.uCamaUE.value,
            artnunicamavta: this.forma.controls.uCamaUV.value,
            artnunidaddistribucion: this.forma.controls.compUMUD.value,
            artnunidadexpedicion: this.forma.controls.compUMUE.value,
            artnunidadventa: this.forma.controls.compUMUV.value,
            artnvalidezconsumo: this.forma.controls.validez.value,
            artscodcoberexist: this.forma.controls.codExistenciaParam.value,
            artscodeandistrib: this.forma.controls.codBarraUD.value,
            artscodeanexped: this.forma.controls.codBarraUE.value,
            artscodeanfraccion: this.forma.controls.codBarraF1.value,
            artscodeanvta: this.forma.controls.codBarraUV.value,
            artscodestado: this.forma.controls.estado.value,
            artscodfomatodevolucion: this.forma.controls.unidadDevo2.value,
            artscodfomatopedido: this.forma.controls.unidadPedido2.value,
            artscodformato: this.forma.controls.codigoFormato.value,
            artscodformatodistribucion: this.checkSeleccionado ? this.forma.controls.presentacionF1.value : this.forma.controls.presentacionUD.value,
            artscodformatoexpedicion: this.checkSeleccionado ? this.forma.controls.presentacionF1.value : this.forma.controls.presentacionUE.value,
            artscodformatofraccion: this.forma.controls.presentacionF1.value,
            artscodformatoventa: this.checkSeleccionado ? this.forma.controls.presentacionF1.value : this.forma.controls.presentacionUV.value,
            artscodjerproducbase: this.forma.controls.codProdBase.value,
            artscodmanejoclave: this.forma.controls.manejoClave.value === null ? '' : this.forma.controls.manejoClave.value.toString(),
            artscodmanejoprecio: this.forma.controls.manejoPrecio.value === '0' ? '0' : this.forma.controls.manejoPrecio.value,
            artscodorigen: this.forma.controls.origen.value,
            artscodsap: this.forma.controls.codSap.value,
            artscodtipoarticulo: this.forma.controls.tipoArticulo.value,
            artscodtipomedidadistrib: this.checkSeleccionado ? this.forma.controls.medidaF1.value : this.forma.controls.medidaUD.value,
            artscodtipomedidaexped: this.checkSeleccionado ? this.forma.controls.medidaF1.value : this.forma.controls.medidaUE.value,
            artscodtipomedidafraccion: this.forma.controls.medidaF1.value,
            artscodtipomedidavta: this.checkSeleccionado ? this.forma.controls.medidaF1.value : this.forma.controls.medidaUV.value,
            artscodtipopeso: this.forma.controls.volumen.value === '0' ? '0' : this.forma.controls.volumen.value,
            artscodunidadestadistica: this.forma.controls.estadistica.value === '0' ? '0' : this.forma.controls.estadistica.value,
            artscodvariedad: this.forma.controls.codigoVariedad.value,
            artsdescripcion: this.forma.controls.descripcion.value,
            artsdesformatodevolucion: this.forma.controls.unidadDevo3.value,
            artsdesformatopedido: this.forma.controls.unidadPedido3.value,
            artsindiaba: this.forma.controls.iaba.value,
            artsindiva: this.forma.controls.iva.value,
            artsmedida: this.forma.controls.medida.value
        };
        console.log('request graba articulo', this.request);
        console.log('request Actualiza articulo', this.requestActualiza);
        this.cargador.show();
        if (this.articuloNuevo) {
            this.articuloService.creaArticulo(this.request)
                .subscribe(function (data) {
                _this.cargador.hide();
                if (data.error.codError != 0) {
                    swal('Atención', data.error.msjError, 'error');
                }
                else {
                    _this.consultasService.setDatos('guardar');
                    swal('Atención', 'Artículo creado correctamente', 'success');
                    _this.router.navigate(['/buscaArticulo/buscaArticulo']);
                    _this.articuloNuevo = false;
                    _this.forma.controls.codigoFormato.disable();
                    _this.forma.controls.codigoVariedad.disable();
                    _this.disableCheck = true;
                    _this.forma.controls.compUMUV.disable();
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
        else {
            this.articuloService.actualizaArticulo(this.requestActualiza)
                .subscribe(function (data) {
                _this.cargador.hide();
                if (data.error.codError != 0) {
                    swal('Atención', data.error.msjError, 'error');
                }
                else {
                    _this.consultasService.setDatos('guardar');
                    swal('Atención', 'Artículo guardado correctamente', 'success');
                    _this.router.navigate(['/buscaArticulo/buscaArticulo']);
                }
            }, function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            });
        }
    };
    DefinicionArticuloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-definicionArticulo',
            template: __webpack_require__(/*! ./definicionArticulo.component.html */ "./src/app/routes/articulo/definicionArticulo/definicionArticulo.component.html"),
            styles: [__webpack_require__(/*! ./definicionArticulo.component.scss */ "./src/app/routes/articulo/definicionArticulo/definicionArticulo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_2__["ArticuloService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_4__["ConsultasService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"], _core_consultaService_pedidos_service__WEBPACK_IMPORTED_MODULE_10__["PedidosService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"]])
    ], DefinicionArticuloComponent);
    return DefinicionArticuloComponent;
}());



/***/ }),

/***/ "./src/app/routes/articulo/definicionArticulo/navDefinicionArticulo/pack/pack.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/routes/articulo/definicionArticulo/navDefinicionArticulo/pack/pack.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dash-table-container\">\r\n    <span class=\"table-add float-right\">\r\n        <a class=\"text\" (click)=\"add()\">\r\n            <strong><em class=\"fa fa-plus\"></em></strong>\r\n        </a>\r\n      </span>\r\n    <table class=\"table table-hover\">\r\n        <thead>\r\n            <th>Art&iacute;culo</th>\r\n            <th>Descripci&oacute;n</th>\r\n            <th>Medida UV</th>\r\n            <th>Fracci&oacute;n</th>\r\n            <th>($) Valor U.V</th>\r\n            <th>Total s/d</th>\r\n            <th>% Desc.</th>\r\n            <th>Total</th>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let person of packList; let id = index\">\r\n                <td>\r\n                    <span (keyup)=\"changeValue(id, 'articulo', $event)\" (blur)=\"updateList(id, 'articulo', $event)\" contenteditable=\"false\">{{person.articulo}}</span>\r\n                </td>\r\n                <td>\r\n                    <span contenteditable=\"true\" (keyup)=\"changeValue(id, 'descripcion', $event)\" (blur)=\"updateList(id, 'descripcion', $event)\">{{person.descripcion}}</span>\r\n                </td>\r\n                <td>\r\n                    <span contenteditable=\"true\" (keyup)=\"changeValue(id, 'medidaUv', $event)\" (blur)=\"updateList(id, 'medidaUv', $event)\">{{person.medidaUv}}</span>\r\n                </td>\r\n                <td>\r\n                    <span contenteditable=\"true\" (keyup)=\"changeValue(id, 'fraccion', $event)\" (blur)=\"updateList(id, 'fraccion', $event)\">{{person.fraccion}}</span>\r\n                </td>\r\n                <td>\r\n                    <span contenteditable=\"true\" (keyup)=\"changeValue(id, 'valorUv', $event)\" (blur)=\"updateList(id, 'valorUv', $event)\">{{person.valorUv}}</span>\r\n                </td>\r\n                <td>\r\n                    <span contenteditable=\"true\" (keyup)=\"changeValue(id, 'totalSd', $event)\" (blur)=\"updateList(id, 'totalSd', $event)\">{{person.totalSd}}</span>\r\n                </td>\r\n                <td>\r\n                    <span contenteditable=\"true\" (keyup)=\"changeValue(id, 'descuento', $event)\" (blur)=\"updateList(id, 'descuento', $event)\">{{person.descuento}}</span>\r\n                </td>\r\n                <td>\r\n                    <span contenteditable=\"true\" (keyup)=\"changeValue(id, 'unidadCama', $event)\" (blur)=\"updateList(id, 'unidadCama', $event)\">{{person.unidadCama}}</span>\r\n                </td>\r\n                <td>\r\n                    <span contenteditable=\"true\" (keyup)=\"changeValue(id, 'total', $event)\" (blur)=\"updateList(id, 'total', $event)\">{{person.total}}</span>\r\n                </td>\r\n                <td>\r\n                    <span class=\"table-remove\">\r\n                        <a class=\"text\" (click)=\"remove(id)\">\r\n                            <em class=\"fa fa-trash\"></em>\r\n                        </a>\r\n                  </span>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<br>\r\n<app-totales></app-totales>"

/***/ }),

/***/ "./src/app/routes/articulo/definicionArticulo/navDefinicionArticulo/pack/pack.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/routes/articulo/definicionArticulo/navDefinicionArticulo/pack/pack.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table>thead{background:#85b3cd;color:#fff;width:30px;padding:2px 2px;text-align:center}.table>thead>tr>th{background:#85b3cd;color:#fff;width:30px;padding:2px 2px;text-align:center}.btn{background-color:#2f5967;color:white;width:80px;text-align:center;padding:0px 10px}\n"

/***/ }),

/***/ "./src/app/routes/articulo/definicionArticulo/navDefinicionArticulo/pack/pack.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/routes/articulo/definicionArticulo/navDefinicionArticulo/pack/pack.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackComponent", function() { return PackComponent; });
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

var PackComponent = /** @class */ (function () {
    function PackComponent() {
        this.packList = [
            { articulo: '', descripcion: '', medidaUv: '', fraccion: '', valorUv: '', totalSd: '', descuento: '0', total: '' },
        ];
        this.agregaList = [
            { articulo: '', descripcion: '', medidaUv: '', fraccion: '', valorUv: '', totalSd: '', descuento: '0', total: '' },
            { articulo: '', descripcion: '', medidaUv: '', fraccion: '', valorUv: '', totalSd: '', descuento: '0', total: '' },
            { articulo: '', descripcion: '', medidaUv: '', fraccion: '', valorUv: '', totalSd: '', descuento: '0', total: '' },
        ];
    }
    PackComponent.prototype.ngOnInit = function () {
    };
    PackComponent.prototype.updateList = function (id, property, event) {
        var editField = event.target.textContent;
        this.packList[id][property] = editField;
    };
    PackComponent.prototype.add = function () {
        if (this.agregaList.length > 0) {
            var person = this.agregaList[0];
            this.packList.push(person);
            this.agregaList.splice(0, 1);
        }
    };
    PackComponent.prototype.remove = function (id) {
        this.agregaList.push(this.packList[id]);
        this.packList.splice(id, 1);
    };
    PackComponent.prototype.changeValue = function (id, property, event) {
        this.editField = event.target.textContent;
    };
    PackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pack',
            template: __webpack_require__(/*! ./pack.component.html */ "./src/app/routes/articulo/definicionArticulo/navDefinicionArticulo/pack/pack.component.html"),
            styles: [__webpack_require__(/*! ./pack.component.scss */ "./src/app/routes/articulo/definicionArticulo/navDefinicionArticulo/pack/pack.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PackComponent);
    return PackComponent;
}());



/***/ }),

/***/ "./src/app/routes/articulo/definicionArticulo/navDefinicionArticulo/pack/totales/totales.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/routes/articulo/definicionArticulo/navDefinicionArticulo/pack/totales/totales.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n        <label class=\"col-sm-1 control-label\">Total Neto</label>\r\n        <div class=\"col-sm-2\">\r\n            <input formControlName=\"totalNeto\" name=\"totalNeto\" class=\"form-control\" type=\"text\" />\r\n        </div>\r\n        <div class=\"col-sm-9\">\r\n            <label class=\"col-sm-1 control-label\">I.V.A</label>\r\n            <div class=\"col-sm-2\">\r\n                <input formControlName=\"iva\" name=\"iva\" class=\"form-control\" type=\"text\" />\r\n            </div>\r\n            <label class=\"col-sm-1 control-label\">I.A.B.A</label>\r\n            <div class=\"col-sm-2\">\r\n                <input formControlName=\"iaba\" name=\"iaba\" class=\"form-control\" type=\"text\" />\r\n            </div>\r\n            <label class=\"col-sm-1 control-label\">Total</label>\r\n            <div class=\"col-sm-2\">\r\n                <input formControlName=\"total\" name=\"total\" class=\"form-control\" type=\"text\" />\r\n            </div>\r\n            <label class=\"col-sm-1 control-label\">Volumen</label>\r\n            <div class=\"col-sm-2\">\r\n                <input formControlName=\"volumen\" name=\"volumen\" class=\"form-control\" type=\"text\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/routes/articulo/definicionArticulo/navDefinicionArticulo/pack/totales/totales.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/routes/articulo/definicionArticulo/navDefinicionArticulo/pack/totales/totales.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{background-color:#2f5967;color:#fff;height:30px}.form-horizontal .control-label{text-align:left;padding:2px 10px;margin-bottom:5px;font-size:smaller}.form-control{height:30px;margin-bottom:5px}\n"

/***/ }),

/***/ "./src/app/routes/articulo/definicionArticulo/navDefinicionArticulo/pack/totales/totales.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/routes/articulo/definicionArticulo/navDefinicionArticulo/pack/totales/totales.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: TotalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalesComponent", function() { return TotalesComponent; });
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


var TotalesComponent = /** @class */ (function () {
    function TotalesComponent(fb) {
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            totalNeto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            iva: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            iaba: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            total: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            volumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    TotalesComponent.prototype.ngOnInit = function () {
    };
    TotalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-totales',
            template: __webpack_require__(/*! ./totales.component.html */ "./src/app/routes/articulo/definicionArticulo/navDefinicionArticulo/pack/totales/totales.component.html"),
            styles: [__webpack_require__(/*! ./totales.component.scss */ "./src/app/routes/articulo/definicionArticulo/navDefinicionArticulo/pack/totales/totales.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], TotalesComponent);
    return TotalesComponent;
}());



/***/ }),

/***/ "./src/app/routes/articulo/jerarquia/agrupacion/agrupacion.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/routes/articulo/jerarquia/agrupacion/agrupacion.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\r\n    <div class=\"table-add float-right\">\r\n        <a class=\"text\" data-toggle=\"tooltip\" title=\"Agregar Agrupación\" (click)=\"openAgregarAgrupacion()\">\r\n            <strong><em class=\"fa fa-plus\"></em></strong>\r\n        </a>\r\n    </div>\r\n    <table class=\"table table-hover\">\r\n        <thead>\r\n            <th>C&oacute;digo Pa&iacute;s</th>\r\n            <th>C&oacute;digo L&iacute;nea</th>\r\n            <th>C&oacute;digo Categor&iacute;a</th>\r\n            <th>C&oacute;digo Agrupaci&oacute;n</th>\r\n            <th>Descripci&oacute;n</th>\r\n            <th>Estado</th>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let agrupacion of agrupaList\">\r\n                <td>\r\n                    <span>{{agrupacion.jpa_scodpais}}</span>\r\n                </td>\r\n                <td>\r\n                    <span>{{agrupacion.jli_scodlinea}}</span>\r\n                </td>\r\n                <td>\r\n                    <span>{{agrupacion.jca_scodcategoria}}</span>\r\n                </td>\r\n                <td>\r\n                    <span>{{agrupacion.jag_scodagrupacion}}</span>\r\n                </td>\r\n                <td>\r\n                    <span>{{agrupacion.jag_sdesagrupacion}}</span>\r\n                </td>\r\n                <td>\r\n                    <span>{{agrupacion.jag_scodestado | estadoVigencia}}</span>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                    <div class=\"table-edit\">\r\n                        <a class=\"text\" data-toggle=\"tooltip\" title=\"Editar Agrupación\" (click)=\"openEditarAgrupacion(agrupacion)\">\r\n                            <em class=\"fa fa-edit\"></em>\r\n                        </a>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/articulo/jerarquia/agrupacion/agrupacion.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/routes/articulo/jerarquia/agrupacion/agrupacion.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/articulo/jerarquia/agrupacion/agrupacion.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/routes/articulo/jerarquia/agrupacion/agrupacion.component.ts ***!
  \******************************************************************************/
/*! exports provided: AgrupacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgrupacionComponent", function() { return AgrupacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/consultaService/articulo.service */ "./src/app/core/consultaService/articulo.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _commonPopUp_agrupacionPopUp_agrupacionPopUp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../commonPopUp/agrupacionPopUp/agrupacionPopUp.component */ "./src/app/routes/commonPopUp/agrupacionPopUp/agrupacionPopUp.component.ts");
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
var AgrupacionComponent = /** @class */ (function () {
    function AgrupacionComponent(articuloService, cargador, modalService, consultasService) {
        this.articuloService = articuloService;
        this.cargador = cargador;
        this.modalService = modalService;
        this.consultasService = consultasService;
        this.request = {};
        this.agrupaList = [];
    }
    AgrupacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cargarAgrupaciones();
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    AgrupacionComponent.prototype.ngOnDestroy = function () {
        if (this.subData != undefined) {
            this.subData.unsubscribe();
        }
    };
    AgrupacionComponent.prototype.cargarAgrupaciones = function () {
        var _this = this;
        this.request.scodagrupacion = "";
        this.request.scodcategoria = "";
        this.request.scodestado = "";
        this.cargador.show();
        this.articuloService.getAgrupacion(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            _this.agrupaList = data.articulo;
            if (data.error.codError != 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    AgrupacionComponent.prototype.setData = function (resData) {
        if (resData === 'guardar') {
            this.cargarAgrupaciones();
        }
    };
    AgrupacionComponent.prototype.openEditarAgrupacion = function (agrupacion) {
        window.scroll(0, 0);
        var initialState = {
            titulo: 'Editar',
            agrupacion: agrupacion
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_agrupacionPopUp_agrupacionPopUp_component__WEBPACK_IMPORTED_MODULE_5__["AgrupacionPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    AgrupacionComponent.prototype.openAgregarAgrupacion = function () {
        var initialState = {
            titulo: 'Agregar'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_agrupacionPopUp_agrupacionPopUp_component__WEBPACK_IMPORTED_MODULE_5__["AgrupacionPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    AgrupacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agrupacion',
            template: __webpack_require__(/*! ./agrupacion.component.html */ "./src/app/routes/articulo/jerarquia/agrupacion/agrupacion.component.html"),
            styles: [__webpack_require__(/*! ./agrupacion.component.scss */ "./src/app/routes/articulo/jerarquia/agrupacion/agrupacion.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_1__["ArticuloService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_4__["ConsultasService"]])
    ], AgrupacionComponent);
    return AgrupacionComponent;
}());



/***/ }),

/***/ "./src/app/routes/articulo/jerarquia/categoria/categoria.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/routes/articulo/jerarquia/categoria/categoria.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\r\n    <div class=\"table-add float-right\">\r\n        <a class=\"text\" data-toggle=\"tooltip\" title=\"Agregar Categoría\" (click)=\"openAgregarCategoria()\">\r\n            <strong><em class=\"fa fa-plus\"></em></strong>\r\n        </a>\r\n        <table class=\"table table-hover table-responsive\">\r\n            <thead>\r\n                <th>C&oacute;digo Pa&iacute;s</th>\r\n                <th>C&oacute;digo L&iacute;nea</th>\r\n                <th>C&oacute;digo Categor&iacute;a</th>\r\n                <th>Descripci&oacute;n</th>\r\n                <th>Estado</th>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let categoria of catList\">\r\n                    <td>\r\n                        <span>{{categoria.jpa_scodpais}}</span>\r\n                    </td>\r\n                    <td>\r\n                        <span>{{categoria.jli_scodlinea}}</span>\r\n                    </td>\r\n                    <td>\r\n                        <span>{{categoria.jca_scodcategoria}}</span>\r\n                    </td>\r\n                    <td>\r\n                        <span>{{categoria.jca_sdescategoria}}</span>\r\n                    </td>\r\n                    <td>\r\n                        <span>{{categoria.jca_scodestado | estadoVigencia}}</span>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <div class=\"table-edit\">\r\n                            <a class=\"text\" data-toggle=\"tooltip\" title=\"Editar Categoría\" (click)=\"openEditarCategoria(categoria)\">\r\n                                <em class=\"fa fa-edit\"></em>\r\n                            </a>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>"

/***/ }),

/***/ "./src/app/routes/articulo/jerarquia/categoria/categoria.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/routes/articulo/jerarquia/categoria/categoria.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/articulo/jerarquia/categoria/categoria.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/routes/articulo/jerarquia/categoria/categoria.component.ts ***!
  \****************************************************************************/
/*! exports provided: CategoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaComponent", function() { return CategoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/consultaService/articulo.service */ "./src/app/core/consultaService/articulo.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _commonPopUp_categoriaPopUp_categoriaPopUp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../commonPopUp/categoriaPopUp/categoriaPopUp.component */ "./src/app/routes/commonPopUp/categoriaPopUp/categoriaPopUp.component.ts");
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
var CategoriaComponent = /** @class */ (function () {
    function CategoriaComponent(articuloService, cargador, modalService, consultasService) {
        this.articuloService = articuloService;
        this.cargador = cargador;
        this.modalService = modalService;
        this.consultasService = consultasService;
        this.request = {};
        this.catList = [];
    }
    CategoriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cargarCategorias();
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    CategoriaComponent.prototype.ngOnDestroy = function () {
        if (this.subData != undefined) {
            this.subData.unsubscribe();
        }
    };
    CategoriaComponent.prototype.cargarCategorias = function () {
        var _this = this;
        this.request.scodcategoria = "";
        this.request.scodestado = "";
        this.request.scodlinea = "";
        this.cargador.show();
        this.articuloService.getCategorias(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            _this.catList = data.articulo;
            if (data.error.codError != 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    CategoriaComponent.prototype.setData = function (resData) {
        if (resData === 'guardar') {
            this.cargarCategorias();
        }
    };
    CategoriaComponent.prototype.openEditarCategoria = function (categoria) {
        window.scroll(0, 0);
        var initialState = {
            titulo: 'Editar',
            categoria: categoria
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_categoriaPopUp_categoriaPopUp_component__WEBPACK_IMPORTED_MODULE_5__["CategoriaPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    CategoriaComponent.prototype.openAgregarCategoria = function () {
        var initialState = {
            titulo: 'Agregar'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_categoriaPopUp_categoriaPopUp_component__WEBPACK_IMPORTED_MODULE_5__["CategoriaPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    CategoriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categoria',
            template: __webpack_require__(/*! ./categoria.component.html */ "./src/app/routes/articulo/jerarquia/categoria/categoria.component.html"),
            styles: [__webpack_require__(/*! ./categoria.component.scss */ "./src/app/routes/articulo/jerarquia/categoria/categoria.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_1__["ArticuloService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_4__["ConsultasService"]])
    ], CategoriaComponent);
    return CategoriaComponent;
}());



/***/ }),

/***/ "./src/app/routes/articulo/jerarquia/jerarquia.component.html":
/*!********************************************************************!*\
  !*** ./src/app/routes/articulo/jerarquia/jerarquia.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Jerarqu&iacute;a</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form class=\"panel\">\r\n            <tabset [justified]=\"true\">\r\n                <tab>\r\n                    <ng-template tabHeading>Pa&iacute;s</ng-template>\r\n                    <div>\r\n                        <app-pais></app-pais>\r\n                    </div>\r\n                </tab>\r\n                <tab>\r\n                    <ng-template tabHeading>L&iacute;nea</ng-template>\r\n                    <div>\r\n                        <app-linea></app-linea>\r\n                    </div>\r\n                </tab>\r\n                <tab>\r\n                    <ng-template tabHeading>Categor&iacute;a</ng-template>\r\n                    <div>\r\n                        <app-categoria></app-categoria>\r\n                    </div>\r\n                </tab>\r\n                <tab>\r\n                    <ng-template tabHeading>Agrupaci&oacute;n</ng-template>\r\n                    <div>\r\n                        <app-agrupacion></app-agrupacion>\r\n                    </div>\r\n                </tab>\r\n                <tab>\r\n                    <ng-template tabHeading>Producto base</ng-template>\r\n                    <div>\r\n                        <app-productoBase></app-productoBase>\r\n                    </div>\r\n                </tab>\r\n            </tabset>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/articulo/jerarquia/jerarquia.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/routes/articulo/jerarquia/jerarquia.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/articulo/jerarquia/jerarquia.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/routes/articulo/jerarquia/jerarquia.component.ts ***!
  \******************************************************************/
/*! exports provided: JerarquiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JerarquiaComponent", function() { return JerarquiaComponent; });
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

var JerarquiaComponent = /** @class */ (function () {
    function JerarquiaComponent() {
    }
    JerarquiaComponent.prototype.ngOnInit = function () {
    };
    JerarquiaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jerarquia',
            template: __webpack_require__(/*! ./jerarquia.component.html */ "./src/app/routes/articulo/jerarquia/jerarquia.component.html"),
            styles: [__webpack_require__(/*! ./jerarquia.component.scss */ "./src/app/routes/articulo/jerarquia/jerarquia.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JerarquiaComponent);
    return JerarquiaComponent;
}());



/***/ }),

/***/ "./src/app/routes/articulo/jerarquia/linea/linea.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/routes/articulo/jerarquia/linea/linea.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dash-table-container\">\r\n    <div class=\"table-add float-right\">\r\n        <a class=\"text\" data-toggle=\"tooltip\" title=\"Agregar Línea\" (click)=\"openAgregarLinea()\">\r\n            <strong><em class=\"fa fa-plus\"></em></strong>\r\n        </a>\r\n    </div>\r\n    <table class=\"table table-hover\">\r\n        <thead>\r\n            <th>C&oacute;digo Pa&iacute;s</th>\r\n            <th>C&oacute;digo L&iacute;nea</th>\r\n            <th>Descripci&oacute;n</th>\r\n            <th>Estado</th>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let linea of lineaList\">\r\n                <td>\r\n                    <span>{{linea.jpa_scodpais}}</span>\r\n                </td>\r\n                <td>\r\n                    <span>{{linea.jli_scodlinea}}</span>\r\n                </td>\r\n                <td>\r\n                    <span>{{linea.jli_sdeslinea}}</span>\r\n                </td>\r\n                <td>\r\n                    <span>{{linea.jli_scodestado | estadoVigencia}}</span>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                    <div class=\"table-edit\">\r\n                        <a class=\"text\" data-toggle=\"tooltip\" title=\"Editar Línea\" (click)=\"openEditarLinea(linea)\">\r\n                            <em class=\"fa fa-edit\"></em>\r\n                        </a>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/articulo/jerarquia/linea/linea.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/routes/articulo/jerarquia/linea/linea.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/articulo/jerarquia/linea/linea.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/routes/articulo/jerarquia/linea/linea.component.ts ***!
  \********************************************************************/
/*! exports provided: LineaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineaComponent", function() { return LineaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/consultaService/articulo.service */ "./src/app/core/consultaService/articulo.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _commonPopUp_lineaPopUp_lineaPopUp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../commonPopUp/lineaPopUp/lineaPopUp.component */ "./src/app/routes/commonPopUp/lineaPopUp/lineaPopUp.component.ts");
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
var LineaComponent = /** @class */ (function () {
    function LineaComponent(articuloService, cargador, modalService, consultasService) {
        this.articuloService = articuloService;
        this.cargador = cargador;
        this.modalService = modalService;
        this.consultasService = consultasService;
        this.request = {};
        this.lineaList = [];
    }
    LineaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cargarLineas();
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    LineaComponent.prototype.ngOnDestroy = function () {
        if (this.subData != undefined) {
            this.subData.unsubscribe();
        }
    };
    LineaComponent.prototype.cargarLineas = function () {
        var _this = this;
        this.request.scodestado = "";
        this.request.scodlinea = "";
        this.request.scodpais = "";
        this.cargador.show();
        this.articuloService.getLineas(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            _this.lineaList = data.articulo;
            if (data.error.codError != 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    LineaComponent.prototype.setData = function (resData) {
        if (resData === 'guardar') {
            this.cargarLineas();
        }
    };
    LineaComponent.prototype.openEditarLinea = function (linea) {
        window.scroll(0, 0);
        var initialState = {
            titulo: 'Editar',
            linea: linea
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_lineaPopUp_lineaPopUp_component__WEBPACK_IMPORTED_MODULE_5__["LineaPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    LineaComponent.prototype.openAgregarLinea = function () {
        var initialState = {
            titulo: 'Agregar'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_lineaPopUp_lineaPopUp_component__WEBPACK_IMPORTED_MODULE_5__["LineaPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    LineaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-linea',
            template: __webpack_require__(/*! ./linea.component.html */ "./src/app/routes/articulo/jerarquia/linea/linea.component.html"),
            styles: [__webpack_require__(/*! ./linea.component.scss */ "./src/app/routes/articulo/jerarquia/linea/linea.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_1__["ArticuloService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_4__["ConsultasService"]])
    ], LineaComponent);
    return LineaComponent;
}());



/***/ }),

/***/ "./src/app/routes/articulo/jerarquia/pais/pais.component.html":
/*!********************************************************************!*\
  !*** ./src/app/routes/articulo/jerarquia/pais/pais.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dash-table-container\">\r\n    <div class=\"table-add float-right\">\r\n        <a class=\"text\" data-toggle=\"tooltip\" title=\"Agregar País\" (click)=\"openAgregarPais()\">\r\n            <strong><em class=\"fa fa-plus\"></em></strong>\r\n        </a>\r\n    </div>\r\n    <table class=\"table table-hover\">\r\n        <thead>\r\n            <th>C&oacute;digo</th>\r\n            <th>Descripci&oacute;n</th>\r\n            <th>Estado</th>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let pais of paisList\">\r\n                <td>\r\n                    <span>{{pais.jpa_scodpais}}</span>\r\n                </td>\r\n                <td>\r\n                    <span>{{pais.jpa_sdespais}}</span>\r\n                </td>\r\n                <td>\r\n                    <span>{{pais.jpa_scodestado | estadoVigencia }}</span>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                    <div class=\"table-edit\">\r\n                        <a class=\"text\" data-toggle=\"tooltip\" title=\"Editar País\" (click)=\"openEditarPais(pais)\">\r\n                            <em class=\"fa fa-edit\"></em>\r\n                        </a>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/articulo/jerarquia/pais/pais.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/routes/articulo/jerarquia/pais/pais.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/articulo/jerarquia/pais/pais.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/routes/articulo/jerarquia/pais/pais.component.ts ***!
  \******************************************************************/
/*! exports provided: PaisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisComponent", function() { return PaisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/consultaService/articulo.service */ "./src/app/core/consultaService/articulo.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _commonPopUp_paisPopUp_paisPopUp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../commonPopUp/paisPopUp/paisPopUp.component */ "./src/app/routes/commonPopUp/paisPopUp/paisPopUp.component.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
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
var PaisComponent = /** @class */ (function () {
    function PaisComponent(articuloService, cargador, modalService, consultasService) {
        this.articuloService = articuloService;
        this.cargador = cargador;
        this.modalService = modalService;
        this.consultasService = consultasService;
        this.request = {};
        this.paisList = [];
    }
    PaisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cargarPaises();
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    PaisComponent.prototype.ngOnDestroy = function () {
        if (this.subData != undefined) {
            this.subData.unsubscribe();
        }
    };
    PaisComponent.prototype.cargarPaises = function () {
        var _this = this;
        this.request.scodestado = "";
        this.request.scodpais = "";
        this.cargador.show();
        this.articuloService.getPais(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            _this.paisList = data.articulo;
            if (data.error.codError != 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    PaisComponent.prototype.openEditarPais = function (pais) {
        window.scroll(0, 0);
        var initialState = {
            titulo: 'Editar',
            pais: pais
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_paisPopUp_paisPopUp_component__WEBPACK_IMPORTED_MODULE_4__["PaisPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    PaisComponent.prototype.openAgregarPais = function () {
        var initialState = {
            titulo: 'Agregar',
            origen: 'categoria'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_paisPopUp_paisPopUp_component__WEBPACK_IMPORTED_MODULE_4__["PaisPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    PaisComponent.prototype.setData = function (resData) {
        if (resData === 'guardar') {
            this.cargarPaises();
        }
    };
    PaisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pais',
            template: __webpack_require__(/*! ./pais.component.html */ "./src/app/routes/articulo/jerarquia/pais/pais.component.html"),
            styles: [__webpack_require__(/*! ./pais.component.scss */ "./src/app/routes/articulo/jerarquia/pais/pais.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_1__["ArticuloService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__["ConsultasService"]])
    ], PaisComponent);
    return PaisComponent;
}());



/***/ }),

/***/ "./src/app/routes/articulo/jerarquia/productoBase/productoBase.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/routes/articulo/jerarquia/productoBase/productoBase.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\r\n    <div class=\"table-add float-right\">\r\n        <a class=\"text\" data-toggle=\"tooltip\" title=\"Agregar Producto Base\" (click)=\"openAgregarProductoBase()\">\r\n            <strong><em class=\"fa fa-plus\"></em></strong>\r\n        </a>\r\n    </div>\r\n    <table class=\"table table-hover\">\r\n        <thead>\r\n            <th>C&oacute;digo Pa&iacute;s</th>\r\n            <th>C&oacute;digo L&iacute;nea</th>\r\n            <th>C&oacute;digo Categor&iacute;a</th>\r\n            <th>C&oacute;digo Agrupaci&oacute;n</th>\r\n            <th>C&oacute;digo Prod. Base</th>\r\n            <th>Descripci&oacute;n</th>\r\n            <th>Estado</th>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let prodbase of prodBaseList; let id = index\">\r\n                <td>\r\n                    <span>{{prodbase.jpa_scodpais}}</span>\r\n                </td>\r\n                <td>\r\n                    <span>{{prodbase.jli_scodlinea}}</span>\r\n                </td>\r\n                <td>\r\n                    <span>{{prodbase.jca_scodcategoria}}</span>\r\n                </td>\r\n                <td>\r\n                    <span>{{prodbase.jag_scodagrupacion}}</span>\r\n                </td>\r\n                <td>\r\n                    <span>{{prodbase.jpb_scodproductobase}}</span>\r\n                </td>\r\n                <td>\r\n                    <span>{{prodbase.jpb_sdesproductobase}}</span>\r\n                </td>\r\n                <td>\r\n                    <span>{{prodbase.jpb_scodestado | estadoVigencia}}</span>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                    <div class=\"table-edit\">\r\n                        <a class=\"text\" data-toggle=\"tooltip\" title=\"Editar Producto Base\" (click)=\"openEditarProductoBase(prodbase)\">\r\n                            <em class=\"fa fa-edit\"></em>\r\n                        </a>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/articulo/jerarquia/productoBase/productoBase.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/routes/articulo/jerarquia/productoBase/productoBase.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/articulo/jerarquia/productoBase/productoBase.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/articulo/jerarquia/productoBase/productoBase.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductoBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoBaseComponent", function() { return ProductoBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/consultaService/articulo.service */ "./src/app/core/consultaService/articulo.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _commonPopUp_productoBasePopUp_productoBasePopUp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../commonPopUp/productoBasePopUp/productoBasePopUp.component */ "./src/app/routes/commonPopUp/productoBasePopUp/productoBasePopUp.component.ts");
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
var ProductoBaseComponent = /** @class */ (function () {
    function ProductoBaseComponent(articuloService, cargador, modalService, consultasService) {
        this.articuloService = articuloService;
        this.cargador = cargador;
        this.modalService = modalService;
        this.consultasService = consultasService;
        this.request = {};
        this.prodBaseList = [];
    }
    ProductoBaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cargarProductosBase();
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    ProductoBaseComponent.prototype.ngOnDestroy = function () {
        if (this.subData != undefined) {
            this.subData.unsubscribe();
        }
    };
    ProductoBaseComponent.prototype.cargarProductosBase = function () {
        var _this = this;
        this.request.scodagrupacion = "";
        this.request.scodcategoria = "";
        this.request.scodestado = "";
        this.cargador.show();
        this.articuloService.getProdBase(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            _this.prodBaseList = data.articulo;
            if (data.error.codError != 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    ProductoBaseComponent.prototype.setData = function (resData) {
        if (resData === 'guardar') {
            this.cargarProductosBase();
        }
    };
    ProductoBaseComponent.prototype.openEditarProductoBase = function (prodBase) {
        window.scroll(0, 0);
        var initialState = {
            titulo: 'Editar',
            prodBase: prodBase
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_productoBasePopUp_productoBasePopUp_component__WEBPACK_IMPORTED_MODULE_5__["ProductoBasePopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    ProductoBaseComponent.prototype.openAgregarProductoBase = function () {
        var initialState = {
            titulo: 'Agregar'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_productoBasePopUp_productoBasePopUp_component__WEBPACK_IMPORTED_MODULE_5__["ProductoBasePopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    ProductoBaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-productoBase',
            template: __webpack_require__(/*! ./productoBase.component.html */ "./src/app/routes/articulo/jerarquia/productoBase/productoBase.component.html"),
            styles: [__webpack_require__(/*! ./productoBase.component.scss */ "./src/app/routes/articulo/jerarquia/productoBase/productoBase.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_1__["ArticuloService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_4__["ConsultasService"]])
    ], ProductoBaseComponent);
    return ProductoBaseComponent;
}());



/***/ })

}]);
//# sourceMappingURL=articulo-articulo-module.js.map