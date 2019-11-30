(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reportes-reporte-module"],{

/***/ "./src/app/core/excel/excelNCDO.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/excel/excelNCDO.service.ts ***!
  \*************************************************/
/*! exports provided: ExcelNCDOService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelNCDOService", function() { return ExcelNCDOService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceljs/dist/exceljs.min */ "./node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.js */ "./src/app/core/excel/logo.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExcelNCDOService = /** @class */ (function () {
    function ExcelNCDOService() {
    }
    ExcelNCDOService.prototype.generateExcel = function (title, headerExcel, dataExcel, total, periodo, fileName) {
        var workbook = new exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1__["Workbook"]();
        var worksheet = workbook.addWorksheet(title);
        //Agrega filas y su formato
        var titleRow = worksheet.addRow([title]);
        titleRow.font = {
            name: "Calibri",
            family: 4,
            size: 20,
            underline: "double",
            bold: true
        };
        worksheet.addRow([]);
        worksheet.getCell("B1").value = "Reporte NC por Descuento Omitido";
        worksheet.mergeCells("B1:F3");
        worksheet.getCell("B1").alignment = {
            vertical: "middle",
            horizontal: "center"
        };
        //Add Image
        var logo = workbook.addImage({
            base64: _logo_js__WEBPACK_IMPORTED_MODULE_3__["logoBase64"],
            extension: "png"
        });
        worksheet.addImage(logo, "A1:A3");
        //Fila de separacion (en blanco)
        worksheet.addRow([]);
        var infoRow = worksheet.addRow();
        worksheet.getCell("A" + infoRow.number).value = "Periodo:";
        worksheet.getCell("B" + infoRow.number).value = periodo;
        infoRow.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" }
        };
        //Fila de separacion (en blanco)
        worksheet.addRow([]);
        //Add Header Row
        var headerRow = worksheet.addRow(headerExcel);
        headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
        // Estilo de celda : Fill and Border
        headerRow.eachCell(function (cell, number) {
            cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "FFB0C4DE" },
                bgColor: { argb: "" }
            };
        });
        worksheet.addRows(dataExcel);
        worksheet.getColumn(1).width = 18;
        worksheet.getColumn(2).width = 18;
        worksheet.getColumn(3).width = 14;
        worksheet.getColumn(4).width = 50;
        worksheet.getColumn(5).width = 50;
        worksheet.getColumn(6).width = 14;
        worksheet.addRow([]);
        worksheet.addRow([]);
        var totalDifPrecioRow = worksheet.addRow([]);
        worksheet.getCell("E" + totalDifPrecioRow.number).value = "Total:";
        worksheet.getCell("F" + totalDifPrecioRow.number).value = "$ " + total;
        totalDifPrecioRow.getCell(5).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" }
        };
        //Pie de pagina
        var footerRow = worksheet.addRow(["2019-Disvet"]);
        footerRow.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" }
        };
        //Merge Cells
        worksheet.mergeCells("A" + footerRow.number + ":F" + footerRow.number);
        worksheet.eachRow(function (row, rowNumber) {
            row.eachCell(function (cell, colNumber) {
                cell.border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" }
                };
            });
        });
        if (fileName) {
            var exportName = fileName + ".xlsx";
        }
        else {
            var exportName = title + ".xlsx";
        }
        workbook.xlsx.writeBuffer().then(function (data) {
            var blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            });
            file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](blob, exportName);
        });
    };
    ExcelNCDOService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ExcelNCDOService);
    return ExcelNCDOService;
}());



/***/ }),

/***/ "./src/app/core/excel/excelRAC.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/excel/excelRAC.service.ts ***!
  \************************************************/
/*! exports provided: ExcelRACService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelRACService", function() { return ExcelRACService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceljs/dist/exceljs.min */ "./node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.js */ "./src/app/core/excel/logo.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExcelRACService = /** @class */ (function () {
    function ExcelRACService() {
    }
    ExcelRACService.prototype.generateExcel = function (title, headerExcel, dataExcel, fechaExcel, fileName) {
        //Titulo, Encabezado y Datos
        //Creacion del libro y las hojas
        var workbook = new exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1__["Workbook"]();
        var worksheet = workbook.addWorksheet(title);
        //Agrega filas y su formato
        worksheet.addRow([]);
        //Add Image
        var logo = workbook.addImage({
            base64: _logo_js__WEBPACK_IMPORTED_MODULE_3__["logoBase64"],
            extension: "png"
        });
        worksheet.addImage(logo, "A1:A3");
        //Fila de separacion (en blanco)
        worksheet.addRow([]);
        //Fecha
        worksheet.getCell("A5").value = "Fecha";
        worksheet.getCell("B5").value = fechaExcel;
        //Fila de separacion (en blanco)
        worksheet.addRow([]);
        worksheet.addRow(["Reporte Acciones Comerciales"]);
        worksheet.mergeCells("A7:K7");
        worksheet.getCell("A7").alignment = {
            vertical: "middle",
            horizontal: "center"
        };
        worksheet.getCell("A7").fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" },
            bgColor: { argb: "" }
        };
        //Add Header Row
        var headerRow = worksheet.addRow(headerExcel);
        // Estilo de celda : Fill and Border
        headerRow.eachCell(function (cell, number) {
            cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "FFB0C4DE" },
                bgColor: { argb: "" }
            };
        });
        worksheet.addRows(dataExcel);
        worksheet.getColumn(1).width = 15;
        worksheet.getColumn(2).width = 45;
        worksheet.getColumn(3).width = 29;
        worksheet.getColumn(4).width = 13;
        worksheet.getColumn(5).width = 14;
        worksheet.getColumn(6).width = 12;
        worksheet.getColumn(7).width = 13;
        worksheet.getColumn(8).width = 13;
        worksheet.getColumn(9).width = 45;
        worksheet.getColumn(10).width = 21;
        worksheet.getColumn(11).width = 12;
        //Pie de pagina
        var footerRow = worksheet.addRow(["2019-Disvet"]);
        footerRow.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" }
        };
        //Merge Cells
        worksheet.mergeCells("A" + footerRow.number + ":D" + footerRow.number);
        worksheet.eachRow(function (row, rowNumber) {
            row.eachCell(function (cell, colNumber) {
                cell.border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" }
                };
            });
        });
        //Generate Excel File with given name
        if (fileName) {
            var exportName = fileName + ".xlsx";
        }
        else {
            var exportName = title + ".xlsx";
        }
        workbook.xlsx.writeBuffer().then(function (data) {
            var blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            });
            file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](blob, exportName);
        });
    };
    ExcelRACService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], ExcelRACService);
    return ExcelRACService;
}());



/***/ }),

/***/ "./src/app/core/excel/excelRDP.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/excel/excelRDP.service.ts ***!
  \************************************************/
/*! exports provided: ExcelRDPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelRDPService", function() { return ExcelRDPService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceljs/dist/exceljs.min */ "./node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.js */ "./src/app/core/excel/logo.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExcelRDPService = /** @class */ (function () {
    function ExcelRDPService() {
    }
    ExcelRDPService.prototype.generateExcel = function (title, headerExcel, dataExcel, totalDifPrecio, fechaExcel, snombreoperador, periodo, fileName) {
        //Titulo, Encabezado y Datos
        //Creacion del libro y las hojas
        var workbook = new exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1__["Workbook"]();
        var worksheet = workbook.addWorksheet(title);
        //Agrega filas y su formato
        var titleRow = worksheet.addRow([title]);
        titleRow.font = {
            name: "Calibri",
            family: 4,
            size: 20,
            underline: "double",
            bold: true
        };
        worksheet.addRow([]);
        worksheet.getCell("B1").value = "Reporte Diferencia de Precios";
        worksheet.mergeCells("B1:I3");
        worksheet.getCell("B1").alignment = {
            vertical: "middle",
            horizontal: "center"
        };
        //Add Image
        var logo = workbook.addImage({
            base64: _logo_js__WEBPACK_IMPORTED_MODULE_3__["logoBase64"],
            extension: "png"
        });
        worksheet.addImage(logo, "A1:A3");
        //Fila de separacion (en blanco)
        worksheet.addRow([]);
        var infoRow = worksheet.addRow();
        worksheet.getCell("A" + infoRow.number).value = "Distribuidor:";
        worksheet.getCell("B" + infoRow.number).value = snombreoperador;
        worksheet.mergeCells("B" + infoRow.number + ":E" + infoRow.number);
        worksheet.getCell("F" + infoRow.number).value = "Periodo:";
        worksheet.mergeCells("F" + infoRow.number + ":G" + infoRow.number);
        worksheet.getCell("H" + infoRow.number).value = periodo;
        worksheet.mergeCells("H" + infoRow.number + ":I" + infoRow.number);
        infoRow.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" }
        };
        infoRow.getCell(6).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" }
        };
        infoRow.eachCell(function (cell, number) {
            cell.border = {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" }
            };
        });
        //Fila de separacion (en blanco)
        worksheet.addRow([]);
        //Add Header Row
        var headerRow = worksheet.addRow(headerExcel);
        headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
        // Estilo de celda : Fill and Border
        headerRow.eachCell(function (cell, number) {
            cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "FFB0C4DE" },
                bgColor: { argb: "" }
            };
            cell.border = {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" }
            };
        });
        worksheet.getCell("B1").alignment = {
            vertical: "middle",
            horizontal: "center"
        };
        worksheet.addRows(dataExcel);
        worksheet.getColumn(1).width = 30;
        worksheet.getColumn(2).width = 10;
        worksheet.getColumn(3).width = 55;
        worksheet.getColumn(4).width = 12;
        worksheet.getColumn(5).width = 14;
        worksheet.getColumn(6).width = 13;
        worksheet.getColumn(7).width = 13;
        worksheet.getColumn(8).width = 10;
        worksheet.getColumn(9).width = 12;
        worksheet.addRow([]);
        var totalDifPrecioRow = worksheet.addRow([]);
        worksheet.getCell("F" + totalDifPrecioRow.number).value = "Total:";
        worksheet.mergeCells("F" + totalDifPrecioRow.number + ":G" + totalDifPrecioRow.number);
        worksheet.getCell("H" + totalDifPrecioRow.number).value = totalDifPrecio;
        worksheet.mergeCells("H" + totalDifPrecioRow.number + ":I" + totalDifPrecioRow.number);
        totalDifPrecioRow.getCell(6).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" }
        };
        totalDifPrecioRow.getCell(6).border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" }
        };
        totalDifPrecioRow.getCell(8).border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" }
        };
        //Pie de pagina
        var footerRow = worksheet.addRow(["2019-Disvet"]);
        footerRow.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" }
        };
        footerRow.getCell(1).border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" }
        };
        //Merge Cells
        worksheet.mergeCells("A" + footerRow.number + ":I" + footerRow.number);
        worksheet.eachRow(function (row, rowNumber) {
            row.eachCell(function (cell, colNumber) {
                cell.border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" }
                };
            });
        });
        if (fileName) {
            var exportName = fileName + ".xlsx";
        }
        else {
            var exportName = title + ".xlsx";
        }
        workbook.xlsx.writeBuffer().then(function (data) {
            var blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            });
            file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](blob, exportName);
        });
    };
    ExcelRDPService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], ExcelRDPService);
    return ExcelRDPService;
}());



/***/ }),

/***/ "./src/app/core/excel/excelREFDV.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/excel/excelREFDV.service.ts ***!
  \**************************************************/
/*! exports provided: ExcelREFDVService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelREFDVService", function() { return ExcelREFDVService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceljs/dist/exceljs.min */ "./node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.js */ "./src/app/core/excel/logo.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExcelREFDVService = /** @class */ (function () {
    function ExcelREFDVService() {
    }
    ExcelREFDVService.prototype.generateExcel = function (title, headerExcel, dataExcel, fileName, distribuidor, periodo, lineaDeNegocio) {
        //Titulo, Encabezado y Datos
        //Creacion del libro y las hojas
        var workbook = new exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1__["Workbook"]();
        var worksheet = workbook.addWorksheet(title);
        //Agrega filas y su formato
        var titleRow = worksheet.addRow([title]);
        titleRow.font = {
            name: "Calibri",
            family: 4,
            size: 20,
            underline: "double",
            bold: true
        };
        worksheet.addRow([]);
        /* let subTitleRow = worksheet.addRow(['Date : ' + this.datePipe.transform(new Date(), 'medium')]); */
        worksheet.getCell("B1").value = "Reporte Efectividad Fuerza de Ventas";
        worksheet.mergeCells("B1:M3");
        //Add Image
        var logo = workbook.addImage({
            base64: _logo_js__WEBPACK_IMPORTED_MODULE_3__["logoBase64"],
            extension: "png"
        });
        worksheet.addImage(logo, "A1:A3");
        //Fila de separacion (en blanco)
        worksheet.addRow([]);
        //Info
        var InfoRow1 = worksheet.addRow([]);
        InfoRow1.getCell(1).value = "Distribuidor";
        InfoRow1.getCell(2).value = distribuidor;
        worksheet.mergeCells("B5:C5");
        InfoRow1.getCell(4).value = "Periodo";
        InfoRow1.getCell(5).value = periodo;
        worksheet.mergeCells("E5:F5");
        InfoRow1.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" }
        };
        InfoRow1.getCell(4).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" }
        };
        var InfoRow2 = worksheet.addRow([]);
        InfoRow2.getCell(1).value = "Linea Negocio";
        InfoRow2.getCell(2).value = lineaDeNegocio;
        worksheet.mergeCells("B6:F6");
        InfoRow2.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" }
        };
        //Fila de separacion (en blanco)
        worksheet.addRow([]);
        //Add Header Row
        var headerRow = worksheet.addRow(headerExcel);
        worksheet.addRows(dataExcel);
        worksheet.getColumn(1).width = 23;
        worksheet.getColumn(2).width = 18;
        worksheet.getColumn(3).width = 10;
        worksheet.getColumn(4).width = 10;
        worksheet.getColumn(5).width = 10;
        worksheet.getColumn(6).width = 10;
        worksheet.getColumn(7).width = 10;
        worksheet.getColumn(8).width = 10;
        worksheet.getColumn(9).width = 10;
        worksheet.getColumn(10).width = 10;
        worksheet.getColumn(11).width = 10;
        worksheet.getColumn(12).width = 10;
        worksheet.getColumn(13).width = 10;
        worksheet.getColumn(14).width = 10;
        worksheet.getColumn(15).width = 10;
        worksheet.getColumn(16).width = 10;
        worksheet.getColumn(17).width = 10;
        worksheet.getColumn(18).width = 10;
        worksheet.getColumn(19).width = 10;
        worksheet.getColumn(20).width = 10;
        worksheet.getColumn(21).width = 10;
        worksheet.getColumn(22).width = 10;
        worksheet.getColumn(23).width = 10;
        worksheet.getColumn(24).width = 10;
        worksheet.getColumn(25).width = 10;
        worksheet.getColumn(26).width = 10;
        worksheet.getColumn(27).width = 10;
        worksheet.getColumn(28).width = 10;
        //Pie de pagina
        var footerRow = worksheet.addRow(["2019-Disvet"]);
        footerRow.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" }
        };
        footerRow.getCell(1).border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" }
        };
        //Merge Cells
        worksheet.mergeCells("A" + footerRow.number + ":D" + footerRow.number);
        headerRow.eachCell(function (cell, number) {
            cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "FFB0C4DE" },
                bgColor: { argb: "" }
            };
            cell.border = {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" }
            };
        });
        worksheet.eachRow(function (row, rowNumber) {
            row.eachCell(function (cell, colNumber) {
                // ! Se agrega borde a todas las celdas con contenido
                cell.border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" }
                };
                cell.alignment = {
                    vertical: "middle",
                    horizontal: "right"
                };
                // ! Captura y formateo de los rows que contienen la fecha, por ejemplo "Martes 01-10-2019 " 
                if (/[0-9]{2}[-][0-9]{2}[-][0-9]{4}/.test(cell.value)) {
                    row.eachCell(function (cell, number) {
                        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFB0C4DE" } };
                    });
                }
                ;
                if (/^\s{5}/.test(cell.value)) {
                    row.eachCell(function (cell, number) {
                        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "C0C0C0" } };
                    });
                }
                ;
                if (/^(TOTAL)\s{1}/.test(cell.value)) {
                    var totalCol = worksheet.getColumn(colNumber);
                    totalCol.eachCell(function (cell, rowNumber) {
                        if (rowNumber > 7 && rowNumber < footerRow.number) {
                            cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "C0C0C0" } };
                        }
                    });
                }
                ;
            });
        });
        worksheet.getCell("B1").alignment = {
            vertical: "middle",
            horizontal: "center"
        };
        InfoRow1.eachCell(function (cell, number) {
            cell.alignment = {
                vertical: "middle",
                horizontal: "left"
            };
        });
        InfoRow2.eachCell(function (cell, number) {
            cell.alignment = {
                vertical: "middle",
                horizontal: "left"
            };
        });
        headerRow.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "" }
        };
        headerRow.getCell(2).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "" }
        };
        //Generate Excel File with given name
        var exportName = fileName + ".xlsx";
        workbook.xlsx.writeBuffer().then(function (data) {
            var blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            });
            file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](blob, exportName);
        });
    };
    ExcelREFDVService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], ExcelREFDVService);
    return ExcelREFDVService;
}());



/***/ }),

/***/ "./src/app/core/excel/excelRLC.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/excel/excelRLC.service.ts ***!
  \************************************************/
/*! exports provided: ExcelRLCService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelRLCService", function() { return ExcelRLCService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/exceljs/dist/exceljs.min.js */ "./node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var _node_modules_exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.js */ "./src/app/core/excel/logo.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExcelRLCService = /** @class */ (function () {
    function ExcelRLCService() {
    }
    ExcelRLCService.prototype.generateExcel = function (title, headerExcel, dataExcel, fechaExcel, fileName, snombreoperador, totalTotal, totalMontoPago, totalDiferencia) {
        //Titulo, Encabezado y Datos
        //Creacion del libro y las hojas
        var workbook = new _node_modules_exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_1__["Workbook"]();
        var worksheet = workbook.addWorksheet(title);
        //Agrega filas y su formato
        worksheet.addRow([]);
        worksheet.getCell("C1").value = snombreoperador;
        worksheet.mergeCells("C1:G3");
        worksheet.getCell("C1").alignment = {
            vertical: "middle",
            horizontal: "center"
        };
        worksheet.getCell("C1").font = {
            name: "Calibri",
            family: 4,
            size: 20,
            underline: "double",
            bold: true
        };
        //Add Image
        worksheet.mergeCells("A1:B3");
        var logo = workbook.addImage({
            base64: _logo_js__WEBPACK_IMPORTED_MODULE_3__["logoBase64"],
            extension: "png"
        });
        worksheet.addImage(logo, "A1:B3");
        worksheet.addRow([]);
        worksheet.addRow(["Fecha"]);
        worksheet.getCell("B5").value = fechaExcel;
        worksheet.getCell("A5").fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" },
            bgColor: { argb: "" }
        };
        worksheet.addRow([]);
        worksheet.addRow(["Control Listado de Recorridos Emitidos, Liquidados y pendientes por liquidar"]);
        worksheet.mergeCells("A7:M7");
        worksheet.getCell("A7").fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" },
            bgColor: { argb: "" }
        };
        worksheet.getCell("A7").alignment = {
            vertical: "middle",
            horizontal: "center"
        };
        var subHeaderRow = worksheet.addRow([]);
        worksheet.mergeCells("A8:B8");
        worksheet.getCell("C8").value = "Recorridos Emitidos";
        worksheet.mergeCells("C8:F8");
        worksheet.getCell("G8").value = "Facturas Emitidas";
        worksheet.mergeCells("G8:J8");
        worksheet.getCell("K8").value = "Liquidación";
        worksheet.mergeCells("K8:M8");
        subHeaderRow.eachCell(function (cell, number) {
            cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "FFB0C4DE" },
                bgColor: { argb: "" }
            };
        });
        subHeaderRow.alignment = {
            vertical: "middle",
            horizontal: "center"
        };
        //Add Header Row
        var headerRow = worksheet.addRow(headerExcel);
        // Estilo de celda : Fill and Border
        headerRow.eachCell(function (cell, number) {
            cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "FFB0C4DE" },
                bgColor: { argb: "" }
            };
        });
        headerRow.alignment = {
            vertical: "middle",
            horizontal: "center"
        };
        worksheet.addRows(dataExcel);
        worksheet.getColumn(1).width = 6;
        worksheet.getColumn(2).width = 11;
        worksheet.getColumn(3).width = 11;
        worksheet.getColumn(4).width = 14;
        worksheet.getColumn(5).width = 34;
        worksheet.getColumn(6).width = 44;
        worksheet.getColumn(7).width = 10;
        worksheet.getColumn(8).width = 10;
        worksheet.getColumn(9).width = 14;
        worksheet.getColumn(10).width = 20;
        worksheet.getColumn(11).width = 12;
        worksheet.getColumn(12).width = 13;
        worksheet.getColumn(13).width = 14;
        worksheet.addRow([]);
        var totalRow = worksheet.addRow();
        totalRow.getCell(1).value = "Totales";
        worksheet.mergeCells("A" + totalRow.number + ":H" + totalRow.number);
        totalRow.getCell(1).alignment = {
            vertical: "middle",
            horizontal: "center"
        };
        totalRow.getCell(9).value = totalTotal;
        totalRow.getCell(12).value = totalMontoPago;
        totalRow.getCell(13).value = totalDiferencia;
        // !Pie de pagina
        worksheet.addRow([]);
        var footerRow = worksheet.addRow(["2019-Disvet"]);
        footerRow.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" }
        };
        //Merge Cells
        worksheet.mergeCells("A" + footerRow.number + ":M" + footerRow.number);
        worksheet.eachRow(function (row, rowNumber) {
            row.eachCell(function (cell, colNumber) {
                // ! Se agrega borde a todas las celdas con contenido
                cell.border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" }
                };
            });
        });
        //Generate Excel File with given name
        var exportName = fileName + ".xlsx";
        workbook.xlsx.writeBuffer().then(function (data) {
            var blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            });
            file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](blob, exportName);
        });
    };
    ExcelRLCService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ExcelRLCService);
    return ExcelRLCService;
}());



/***/ }),

/***/ "./src/app/core/excel/excelRLP.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/excel/excelRLP.service.ts ***!
  \************************************************/
/*! exports provided: ExcelRLPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelRLPService", function() { return ExcelRLPService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceljs/dist/exceljs.min */ "./node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.js */ "./src/app/core/excel/logo.js");
/* harmony import */ var _consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExcelRLPService = /** @class */ (function () {
    function ExcelRLPService(authService /* private datePipe: DatePipe */) {
        this.authService = authService; /* private datePipe: DatePipe */
    }
    ExcelRLPService.prototype.generateExcel = function (title, headerExcel, dataExcel, fechaExcel, fechaReporte, fileName) {
        //Titulo, Encabezado y Datos
        //Creacion del libro y las hojas
        var workbook = new exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1__["Workbook"]();
        var worksheet = workbook.addWorksheet(title);
        worksheet.properties.defaultRowHeight = 15;
        //Agrega filas y su formato
        var titleRow = worksheet.addRow([title]);
        titleRow.font = {
            name: "Calibri",
            family: 4,
            size: 20,
            underline: "double",
            bold: true
        };
        worksheet.addRow([]);
        worksheet.getCell("B1").value = this.authService.getDatosUser().snombreoperador;
        worksheet.mergeCells("B1:G3");
        worksheet.getCell('B1').alignment = { vertical: 'middle', horizontal: 'center' };
        //Add Image
        var logo = workbook.addImage({
            base64: _logo_js__WEBPACK_IMPORTED_MODULE_3__["logoBase64"],
            extension: "png"
        });
        worksheet.addImage(logo, "A1:A3");
        //Fila de separacion (en blanco)
        worksheet.addRow([]);
        worksheet.getCell("A4").value = "Reporte Lista de Precios";
        worksheet.mergeCells("A4:G6");
        worksheet.getCell("A4:G6").font = {
            name: "Calibri",
            family: 4,
            size: 20,
            underline: false,
            bold: true
        };
        worksheet.getCell('A4').alignment = { vertical: 'middle', horizontal: 'center' };
        //Fecha
        worksheet.addRow(["Fecha"]);
        worksheet.getCell("B7").value = fechaReporte;
        worksheet.mergeCells("B7:G7");
        worksheet.getCell('B7').alignment = { vertical: 'middle', horizontal: 'center' };
        //Fila de separacion (en blanco)
        worksheet.addRow([]);
        //Add Header Row
        var headerRow = worksheet.addRow(headerExcel);
        worksheet.getCell("A1:G10").alignment = {
            vertical: "middle",
            horizontal: "center"
        };
        // Estilo de celda : Fill and Border
        headerRow.eachCell(function (cell, number) {
            cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "FFB0C4DE" },
                bgColor: { argb: "" }
            };
        });
        headerRow.alignment = { vertical: "middle", horizontal: "center" };
        worksheet.addRows(dataExcel);
        worksheet.getColumn(1).width = 14;
        worksheet.getColumn(2).width = 45;
        worksheet.getColumn(3).width = 8;
        worksheet.getColumn(4).width = 9;
        worksheet.getColumn(5).width = 10;
        worksheet.getColumn(6).width = 13;
        worksheet.getColumn(7).width = 27;
        //Pie de pagina
        var footerRow = worksheet.addRow(["2019-Disvet"]);
        footerRow.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" }
        };
        //Merge Cells
        worksheet.mergeCells("A" + footerRow.number + ":G" + footerRow.number);
        worksheet.eachRow(function (row, rowNumber) {
            row.eachCell(function (cell, colNumber) {
                cell.border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" }
                };
            });
        });
        //Generate Excel File with given name
        if (fileName) {
            var exportName = fileName + ".xlsx";
        }
        else {
            var exportName = title + ".xlsx";
        }
        workbook.xlsx.writeBuffer().then(function (data) {
            var blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            });
            file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](blob, exportName);
        });
    };
    ExcelRLPService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] /* private datePipe: DatePipe */])
    ], ExcelRLPService);
    return ExcelRLPService;
}());



/***/ }),

/***/ "./src/app/core/excel/excelRPS.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/excel/excelRPS.service.ts ***!
  \************************************************/
/*! exports provided: ExcelRPSService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelRPSService", function() { return ExcelRPSService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceljs/dist/exceljs.min */ "./node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.js */ "./src/app/core/excel/logo.js");
/* harmony import */ var _consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExcelRPSService = /** @class */ (function () {
    function ExcelRPSService(authService /* private datePipe: DatePipe */) {
        this.authService = authService; /* private datePipe: DatePipe */
    }
    ExcelRPSService.prototype.generateExcel = function (title, headerExcel, dataExcel, dataTotales, fechaExcel, fileName, columnas) {
        //Titulo, Encabezado y Datos
        //Creacion del libro y las hojas
        var workbook = new exceljs_dist_exceljs_min__WEBPACK_IMPORTED_MODULE_1__["Workbook"]();
        var worksheet = workbook.addWorksheet(title);
        //Agrega filas y su formato
        var titleRow = worksheet.addRow([title]);
        titleRow.font = {
            name: "Calibri",
            family: 4,
            size: 20,
            underline: "double",
            bold: true
        };
        worksheet.addRow([]);
        worksheet.getCell("B1").value = this.authService.getDatosUser().snombreoperador;
        worksheet.mergeCells("B1:H3");
        worksheet.getCell("B1").alignment = {
            vertical: "middle",
            horizontal: "center"
        };
        //Add Image
        var logo = workbook.addImage({
            base64: _logo_js__WEBPACK_IMPORTED_MODULE_3__["logoBase64"],
            extension: "png"
        });
        worksheet.addImage(logo, "A1:A3");
        //Fila de separacion (en blanco)
        worksheet.addRow([]);
        //Fecha
        worksheet.addRow(["Fecha:"]);
        worksheet.getCell("B5").value = fechaExcel;
        //Fila de separacion (en blanco)
        worksheet.addRow([]);
        var infoRow = worksheet.addRow(["Reporte Piramidal Simple"]);
        infoRow.eachCell(function (cell, number) {
            cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "FFB0C4DE" },
                bgColor: { argb: "" }
            };
        });
        worksheet.getCell("A7").alignment = {
            vertical: "middle",
            horizontal: "center"
        };
        var nColumnas = Number(columnas);
        worksheet.mergeCells("A7:H7");
        //Add Header Row
        var headerRow = worksheet.addRow(headerExcel);
        // Estilo de celda : Fill and Border
        headerRow.eachCell(function (cell, number) {
            cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "FFB0C4DE" },
                bgColor: { argb: "" }
            };
        });
        worksheet.addRows(dataExcel);
        worksheet.getColumn(1).width = 11;
        worksheet.getColumn(2).width = 45;
        worksheet.getColumn(3).width = 12;
        worksheet.getColumn(4).width = 12;
        worksheet.getColumn(5).width = 12;
        worksheet.getColumn(6).width = 12;
        worksheet.getColumn(7).width = 12;
        worksheet.getColumn(8).width = 12;
        worksheet.getColumn(9).width = 12;
        worksheet.getColumn(10).width = 12;
        worksheet.getColumn(11).width = 12;
        worksheet.getColumn(12).width = 12;
        worksheet.getColumn(13).width = 12;
        worksheet.getColumn(14).width = 12;
        worksheet.getColumn(15).width = 12;
        worksheet.getColumn(16).width = 12;
        worksheet.getColumn(17).width = 12;
        worksheet.getColumn(18).width = 12;
        worksheet.getColumn(19).width = 12;
        worksheet.getColumn(20).width = 12;
        worksheet.getColumn(21).width = 12;
        worksheet.getColumn(22).width = 12;
        worksheet.getColumn(23).width = 12;
        worksheet.getColumn(24).width = 12;
        worksheet.getColumn(25).width = 12;
        worksheet.getColumn(26).width = 12;
        var TotalesRow = worksheet.addRow(dataTotales);
        worksheet.getCell("A" + TotalesRow.number).value = "";
        worksheet.getCell("B" + TotalesRow.number).value = "TOTALES:";
        TotalesRow.eachCell(function (cell, number) {
            cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "FFB0C4DE" },
                bgColor: { argb: "" }
            };
        });
        //Pie de pagina
        var footerRow = worksheet.addRow(["2019-Disvet"]);
        footerRow.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" }
        };
        //Merge Cells
        worksheet.mergeCells("A" + footerRow.number + ":D" + footerRow.number);
        worksheet.eachRow(function (row, rowNumber) {
            row.eachCell(function (cell, colNumber) {
                cell.border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" }
                };
            });
        });
        //Generate Excel File with given name
        if (fileName) {
            var exportName = fileName + ".xlsx";
        }
        else {
            var exportName = title + ".xlsx";
        }
        workbook.xlsx.writeBuffer().then(function (data) {
            var blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            });
            file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](blob, exportName);
        });
    };
    ExcelRPSService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] /* private datePipe: DatePipe */])
    ], ExcelRPSService);
    return ExcelRPSService;
}());



/***/ }),

/***/ "./src/app/core/excel/excelRTT.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/excel/excelRTT.service.ts ***!
  \************************************************/
/*! exports provided: ExcelRTTService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelRTTService", function() { return ExcelRTTService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/exceljs/dist/exceljs.min.js */ "./node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var _node_modules_exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.js */ "./src/app/core/excel/logo.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExcelRTTService = /** @class */ (function () {
    function ExcelRTTService() {
    }
    ExcelRTTService.prototype.generateExcel = function (title, headerExcel, dataExcel, fileName, transportista, patente, periodo, sumatoriaMesValorFijo, sumatoriaMesFacturasEntregadas, sumatoriaMesRechazosParciales, sumatoriaMesRechazosTotales, porcentajeBonoTransporte, totalAPagar) {
        //Titulo, Encabezado y Datos
        //Creacion del libro y las hojas
        var workbook = new _node_modules_exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_1__["Workbook"]();
        var worksheet = workbook.addWorksheet(title);
        //Agrega filas y su formato
        var titleRow = worksheet.addRow([title]);
        titleRow.font = {
            name: "Calibri",
            family: 4,
            size: 20,
            underline: "double",
            bold: true
        };
        worksheet.addRow([]);
        worksheet.getCell("B1").value = "Reporte Tarifa Transportista";
        worksheet.mergeCells("B1:G3");
        worksheet.getCell("B1").alignment = {
            vertical: "middle",
            horizontal: "center"
        };
        //Add Image
        var logo = workbook.addImage({
            base64: _logo_js__WEBPACK_IMPORTED_MODULE_3__["logoBase64"],
            extension: "png"
        });
        worksheet.addImage(logo, "A1:A3");
        worksheet.addRow([]);
        //Info
        worksheet.addRow(["Transportista:"]);
        worksheet.getCell("B5").value = transportista;
        worksheet.mergeCells("B5:C5");
        worksheet.getCell("A5").fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "003366" },
            bgColor: { argb: "" }
        };
        worksheet.getCell("A5").font = {
            color: { argb: 'FFFFFF' },
        };
        worksheet.addRow(["Patente Vehículo:"]);
        worksheet.getCell("B6").value = patente;
        worksheet.mergeCells("B6:C6");
        worksheet.getCell("A6").fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "003366" },
            bgColor: { argb: "" }
        };
        worksheet.getCell("A6").font = {
            color: { argb: 'FFFFFF' },
        };
        worksheet.addRow(["Periodo:"]);
        worksheet.getCell("B7").value = periodo;
        worksheet.mergeCells("B7:C7");
        worksheet.getCell("A7").fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "003366" },
            bgColor: { argb: "" }
        };
        worksheet.getCell("A7").font = {
            color: { argb: 'FFFFFF' },
        };
        worksheet.addRow([]);
        worksheet.addRow([]);
        //Add Header Row
        var headerRow = worksheet.addRow(headerExcel);
        // Estilo de celda : Fill and Border
        headerRow.eachCell(function (cell, number) {
            cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "003366" },
                bgColor: { argb: "" }
            };
            cell.font = {
                color: { argb: 'FFFFFF' },
            };
        });
        headerRow.alignment = {
            vertical: "middle",
            horizontal: "center"
        };
        worksheet.addRows(dataExcel);
        worksheet.getColumn(1).width = 40;
        worksheet.getColumn(2).width = 20;
        worksheet.getColumn(3).width = 40;
        worksheet.getColumn(4).width = 13;
        worksheet.getColumn(5).width = 22;
        worksheet.getColumn(6).width = 22;
        worksheet.getColumn(7).width = 22;
        worksheet.addRow([]);
        worksheet.addRow([]);
        var totalRow1 = worksheet.addRow(["Resultado Final Mes"]);
        worksheet.mergeCells("A" + totalRow1.number + ":C" + totalRow1.number);
        totalRow1.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "003366" }
        };
        totalRow1.getCell(1).font = {
            color: { argb: 'FFFFFF' },
        };
        totalRow1.alignment = {
            vertical: "middle",
            horizontal: "center"
        };
        var totalRow2 = worksheet.addRow(["Sumatoria Mes Valor Fijo"]);
        totalRow2.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "003366" }
        };
        totalRow2.getCell(1).font = {
            color: { argb: 'FFFFFF' },
        };
        totalRow2.getCell(2).value = sumatoriaMesValorFijo;
        worksheet.mergeCells("B" + totalRow2.number + ":C" + totalRow2.number);
        var totalRow3 = worksheet.addRow(["Sumatoria Mes Facturas Entregadas"]);
        totalRow3.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "003366" }
        };
        totalRow3.getCell(1).font = {
            color: { argb: 'FFFFFF' },
        };
        totalRow3.getCell(2).value = sumatoriaMesFacturasEntregadas;
        worksheet.mergeCells("B" + totalRow3.number + ":C" + totalRow3.number);
        var totalRow4 = worksheet.addRow(["Sumatoria Mes Rechazos Parciales"]);
        totalRow4.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "003366" }
        };
        totalRow4.getCell(1).font = {
            color: { argb: 'FFFFFF' },
        };
        totalRow4.getCell(2).value = sumatoriaMesRechazosParciales;
        worksheet.mergeCells("B" + totalRow4.number + ":C" + totalRow4.number);
        var totalRow5 = worksheet.addRow(["Sumatoria Mes Rechazos Totales"]);
        totalRow5.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "003366" }
        };
        totalRow5.getCell(1).font = {
            color: { argb: 'FFFFFF' },
        };
        totalRow5.getCell(2).value = sumatoriaMesRechazosTotales;
        worksheet.mergeCells("B" + totalRow5.number + ":C" + totalRow5.number);
        var totalRow6 = worksheet.addRow(["Bono Transporte %"]);
        totalRow6.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "003366" }
        };
        totalRow6.getCell(1).font = {
            color: { argb: 'FFFFFF' },
        };
        totalRow6.getCell(2).value = porcentajeBonoTransporte;
        worksheet.mergeCells("B" + totalRow6.number + ":C" + totalRow6.number);
        var totalRow7 = worksheet.addRow(["Total a Pagar"]);
        totalRow7.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "003366" }
        };
        totalRow7.getCell(1).font = {
            color: { argb: 'FFFFFF' },
        };
        totalRow7.getCell(2).value = totalAPagar;
        worksheet.mergeCells("B" + totalRow7.number + ":C" + totalRow7.number);
        // !Pie de pagina
        worksheet.addRow([]);
        var footerRow = worksheet.addRow(["2019-Disvet"]);
        footerRow.getCell(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFB0C4DE" }
        };
        //Merge Cells
        worksheet.mergeCells("A" + footerRow.number + ":G" + footerRow.number);
        worksheet.eachRow(function (row, rowNumber) {
            row.eachCell(function (cell, colNumber) {
                // ! Se agrega borde a todas las celdas con contenido
                cell.border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    bottom: { style: "thin" },
                    right: { style: "thin" }
                };
                // ! Captura y formateo de los rows que contienen la palabra "Sumatoria" 
                if (/^(Sumatoria dia)/.test(cell.value)) {
                    row.eachCell(function (cell, number) {
                        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "009999" } };
                    });
                    row.font = { color: { argb: 'FFFFFF' }, };
                }
                ;
                // ! Captura y formateo de los rows que comienzan con "(" 
                if (/^(TOTAL)/.test(cell.value)) {
                    row.eachCell(function (cell, number) {
                        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "0099CC" } };
                    });
                    row.font = { color: { argb: 'FFFFFF' }, };
                }
                ;
            });
        });
        //Generate Excel File with given name
        if (fileName) {
            var exportName = fileName + ".xlsx";
        }
        else {
            var exportName = title + ".xlsx";
        }
        workbook.xlsx.writeBuffer().then(function (data) {
            var blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            });
            file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](blob, exportName);
        });
    };
    ExcelRTTService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ExcelRTTService);
    return ExcelRTTService;
}());



/***/ }),

/***/ "./src/app/routes/reportes/abastecimientoItemCero/abastecimientoItemCero.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/routes/reportes/abastecimientoItemCero/abastecimientoItemCero.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4>Reporte Items con Cantidad Cero </h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\" style=\"-webkit-box-shadow: 1px 1px 5px 1px #000000; box-shadow: 1px 1px 5px 1px #000000;\">\r\n                    <div class=\"card-body\" style=\"padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;\">\r\n                        <div class=\"card-text\">\r\n                            <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                                <div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-5 form-group\">\r\n                                            <label class=\"col-sm-3 control-label\">Linea</label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <input formControlName=\"codLinea\" name=\"codLinea\" class=\"form-control\" type=\"text\" />\r\n                                            </div>\r\n                                            <div class=\"col-sm-4\" style=\" padding-right: 0px;\">\r\n                                                <input formControlName=\"descLinea\" name=\"descLinea\" class=\"form-control\" type=\"text\" />\r\n                                            </div>\r\n                                            <div class=\"col-sm-2\">\r\n                                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalLineas()\">\r\n                                                        <em class=\"icon-magnifier\"></em>\r\n                                                    </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group col-sm-6\">\r\n                                            <label class=\"col-sm-3 control-label\">Fecha </label>\r\n                                            <div class=\"col-sm-9\">\r\n                                                <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fecha\" name=\"fecha\" type=\"date\" (focusout)=\"actualizarFecha()\" />\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-5 form-group\">\r\n                                            <label class=\"col-sm-3 control-label\">Categoria</label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <input formControlName=\"codCategoria\" name=\"codCategoria\" class=\"form-control\" type=\"text\" />\r\n                                            </div>\r\n                                            <div class=\"col-sm-4\" style=\" padding-right: 0px;\">\r\n                                                <input formControlName=\"descCategoria\" name=\"descCategoria\" class=\"form-control\" type=\"text\" />\r\n                                            </div>\r\n                                            <div class=\"col-sm-2\">\r\n                                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCategorias()\">\r\n                                                        <em class=\"icon-magnifier\"></em>\r\n                                                    </button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-5 form-group\">\r\n                                            <label class=\"col-sm-3 control-label\">Agrupacion</label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <input formControlName=\"codAgrupacion\" name=\"codAgrupacion\" class=\"form-control\" type=\"text\" />\r\n                                            </div>\r\n                                            <div class=\"col-sm-4\" style=\" padding-right: 0px;\">\r\n                                                <input formControlName=\"descAgrupacion\" name=\"descAgrupacion\" class=\"form-control\" type=\"text\" />\r\n                                            </div>\r\n                                            <div class=\"col-sm-2\">\r\n                                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalAgrupacion()\">\r\n                                                        <em class=\"icon-magnifier\"></em>\r\n                                                    </button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-5 form-group\">\r\n                                            <label class=\"col-sm-3 control-label\">Producto Base</label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <input formControlName=\"codProdBase\" name=\"codProdBase\" class=\"form-control\" type=\"text\" />\r\n                                            </div>\r\n                                            <div class=\"col-sm-4\" style=\" padding-right: 0px;\">\r\n                                                <input formControlName=\"descProdBase\" name=\"descProdBase\" class=\"form-control\" type=\"text\" />\r\n                                            </div>\r\n                                            <div class=\"col-sm-2\">\r\n                                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalProdBase()\">\r\n                                                        <em class=\"icon-magnifier\"></em>\r\n                                                    </button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-offset-5 col-md-5\">\r\n                                    <button class=\"btn btn-oval btn-sm\">Generar</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/reportes/abastecimientoItemCero/abastecimientoItemCero.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/routes/reportes/abastecimientoItemCero/abastecimientoItemCero.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AbastecimientoItemsCeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimientoItemsCeroComponent", function() { return AbastecimientoItemsCeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/consultaService/articulo.service */ "./src/app/core/consultaService/articulo.service.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../core/consultaService/reportes.service */ "./src/app/core/consultaService/reportes.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component */ "./src/app/routes/commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component.ts");
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
var AbastecimientoItemsCeroComponent = /** @class */ (function () {
    function AbastecimientoItemsCeroComponent(cargador, authService, excelService, utilService, consultasService, modalService, articuloService, reportesService, administracionOperativaServiceDatos) {
        this.cargador = cargador;
        this.authService = authService;
        this.excelService = excelService;
        this.utilService = utilService;
        this.consultasService = consultasService;
        this.modalService = modalService;
        this.articuloService = articuloService;
        this.reportesService = reportesService;
        this.administracionOperativaServiceDatos = administracionOperativaServiceDatos;
        this.fechaActual = new Date();
        this.request = {};
        this.user = {};
        this.datos = [];
        this.origen = '';
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            descLinea: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            codLinea: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            descCategoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            codCategoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            descAgrupacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            codAgrupacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            descProdBase: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            codProdBase: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    AbastecimientoItemsCeroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.getDatosUser();
        this.initData();
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    AbastecimientoItemsCeroComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
    };
    AbastecimientoItemsCeroComponent.prototype.initData = function () {
        this.forma.controls.fecha.setValue(this.utilService.dateToStringFormat(this.fechaActual));
    };
    AbastecimientoItemsCeroComponent.prototype.setData = function (resData) {
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
            }
        }
        $('body').removeClass('modal-open');
    };
    AbastecimientoItemsCeroComponent.prototype.actualizarFecha = function () {
        if (this.forma.controls.fecha.value === '') {
            this.forma.controls.fecha.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
        if (!this.utilService.DateValidator(this.forma.controls.fecha.value)) {
            this.forma.controls.fecha.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
    };
    AbastecimientoItemsCeroComponent.prototype.validaLinea = function () {
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
    AbastecimientoItemsCeroComponent.prototype.validaCategoria = function () {
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
    AbastecimientoItemsCeroComponent.prototype.validaAgrupacion = function () {
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
    AbastecimientoItemsCeroComponent.prototype.validaProdBase = function () {
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
    AbastecimientoItemsCeroComponent.prototype.openModalLineas = function () {
        this.origen = 'linea';
        var initialState = {
            titulo: 'Líneas',
            origen: 'linea'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    AbastecimientoItemsCeroComponent.prototype.openModalCategorias = function () {
        this.origen = 'categoria';
        var initialState = {
            titulo: 'Categorías',
            origen: 'categoria'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    AbastecimientoItemsCeroComponent.prototype.openModalAgrupacion = function () {
        this.origen = 'agrupacion';
        var initialState = {
            titulo: 'Agrupaciones',
            origen: 'agrupacion'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    AbastecimientoItemsCeroComponent.prototype.openModalProdBase = function () {
        this.origen = 'prodbase';
        var initialState = {
            titulo: 'Productos Base',
            origen: 'prodbase'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_11__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    AbastecimientoItemsCeroComponent.prototype.setGenerar = function () {
        var _this = this;
        console.log("Construyo excel");
        this.cargador.show();
        this.request.nrutoperador = Number(this.user.nrutoperador);
        this.request.scodagrupacion = this.forma.controls.codAgrupacion.value;
        this.request.scodcategoria = this.forma.controls.codCategoria.value;
        this.request.scodlinea = this.forma.controls.codLinea.value;
        this.request.scodproductobase = this.forma.controls.codProdBase.value;
        this.request.sfecha = (this.forma.controls.fecha.value).replace(/-/g, '');
        this.reportesService.getRptItemsCantidadCero(this.request)
            .subscribe(function (data) {
            _this.request = {};
            _this.cargador.hide();
            if (data.rptItemsCantidadCero.length === 0 || data.error.codError === 500) {
                swal('Atención', 'No se encontraron resultados', 'info');
            }
            else {
                var auxData = data.rptItemsCantidadCero;
                /*       "art_sdescripcion": "string",
                    "dpl_ncantfracciones": 0,
                    "dpl_scodformato": "string",
                    "dpl_scodvariedad": "string",
                    "jag_scodagrupacion": "string",
                    "jag_sdesagrupacion": "string",
                    "jca_scodcategoria": "string",
                    "jca_sdescategoria": "string",
                    "jli_scodlinea": "string",
                    "jli_sdeslinea": "string",
                    "jpb_scodproductobase": "string",
                    "jpb_sdesproductobase": "string",
                    "ped_dfhocreacion": "string",
                    "ped_nidpedido": 0 */
                var fechaExcel = _this.utilService.dateToLocalStringFormat(_this.fechaActual);
                var nombreExcel = 'Resporte Items con Cantidad Cero' + _this.utilService.dateToStringDateFullFormat(_this.fechaActual);
                //this.excelService.generateExcel(nombreExcel, headerExcel, dataExcel, fechaExcel);
                swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
            }
        }),
            function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                console.log('error en el request');
            };
    };
    AbastecimientoItemsCeroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-abastecimiento-items-cero',
            template: __webpack_require__(/*! ./abastecimientoItemCero.component.html */ "./src/app/routes/reportes/abastecimientoItemCero/abastecimientoItemCero.component.html")
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__["ConsultasService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"],
            _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_6__["ArticuloService"],
            _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_8__["ReportesService"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_7__["AdministracionOperativaService"]])
    ], AbastecimientoItemsCeroComponent);
    return AbastecimientoItemsCeroComponent;
}());



/***/ }),

/***/ "./src/app/routes/reportes/accionesComerciales/accionesComerciales.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/routes/reportes/accionesComerciales/accionesComerciales.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4> Reporte Acciones Comerciales</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\" style=\"-webkit-box-shadow: 1px 1px 5px 1px #000000; box-shadow: 1px 1px 5px 1px #000000;\">\r\n                    <div class=\"card-body\" style=\"padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;\">\r\n                        <div class=\"card-text\">\r\n                            <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                                <div class=\"form-row col-md-12\">\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Mes</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <select class=\"form-control pv-0\" formControlName=\"mes\" name=\"mes\">\r\n                                                <option *ngFor=\"let mes of meses\" [ngValue]=\"mes.codMes\">{{mes.descMes}}</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Año</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <select class=\"form-control pv-0\" formControlName=\"anio\" name=\"anio\">\r\n                                                <option *ngFor=\"let anio of anios\" [ngValue]=\"anio.codAnio\">{{anio.descAnio}}</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-offset-5 col-sm-6\">\r\n                                    <button class=\"btn btn-oval btn-sm\">Buscar</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/reportes/accionesComerciales/accionesComerciales.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/routes/reportes/accionesComerciales/accionesComerciales.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AccionComercialesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccionComercialesComponent", function() { return AccionComercialesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/consultaService/reportes.service */ "./src/app/core/consultaService/reportes.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_excel_excelRAC_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/excel/excelRAC.service */ "./src/app/core/excel/excelRAC.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
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
var AccionComercialesComponent = /** @class */ (function () {
    function AccionComercialesComponent(excelService, cargador, utilService, reportesService) {
        this.excelService = excelService;
        this.cargador = cargador;
        this.utilService = utilService;
        this.reportesService = reportesService;
        this.fechaActual = new Date();
        this.request = {};
        this.operadores = [];
        this.user = {};
        this.meses = [
            { codMes: "01", descMes: "Enero" },
            { codMes: "02", descMes: "Febrero" },
            { codMes: "03", descMes: "Marzo" },
            { codMes: "04", descMes: "Abril" },
            { codMes: "05", descMes: "Mayo" },
            { codMes: "06", descMes: "Junio" },
            { codMes: "07", descMes: "Julio" },
            { codMes: "08", descMes: "Agosto" },
            { codMes: "09", descMes: "Septiembre" },
            { codMes: "10", descMes: "Octubre" },
            { codMes: "11", descMes: "Noviembre" },
            { codMes: "12", descMes: "Diciembre" }
        ];
        this.anios = [];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            mes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            anio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    AccionComercialesComponent.prototype.ngOnInit = function () {
        this.setGenerar();
    };
    AccionComercialesComponent.prototype.setGenerar = function () {
        this.cargaComboAnios();
        this.forma.controls.mes.setValue(this.dateToStringMonthFormat(this.fechaActual));
        this.forma.controls.anio.setValue(this.fechaActual.getFullYear());
    };
    AccionComercialesComponent.prototype.cargaComboAnios = function () {
        for (var i = 1900; i <= 2100; i++) {
            var anio = {
                codAnio: i,
                descAnio: "" + i
            };
            this.anios.push(anio);
        }
    };
    AccionComercialesComponent.prototype.generar = function () {
        this.cargador.show();
        this.Anio = this.forma.controls.anio.value;
        this.Mes = this.forma.controls.mes.value;
        var fecha = this.Anio + this.Mes;
        this.request.nrutoperador = 0;
        this.request.sfecha = fecha;
        this.accionesComerciales();
    };
    AccionComercialesComponent.prototype.accionesComerciales = function () {
        var _this = this;
        this.reportesService.getRptAccionesComerciales(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            if (data.accionesComerciales.length === 0 && data.error.codError === 0) {
                swal('Atención', 'No se encontraron resultados', 'info');
            }
            else {
                if (data.accionesComerciales === null) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
                else {
                    _this.generateExcel(data.accionesComerciales);
                }
            }
            if (data.error.codError !== 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    AccionComercialesComponent.prototype.generateExcel = function (data) {
        var _this = this;
        var headerExcel = [
            "Id Accion Com.",
            "Accion Comercial",
            "Tipo Descuento",
            "Fecha Inicio",
            "Fecha Termino",
            "Cod Formato",
            "Cod Variedad",
            "Rut Operador",
            "Operador",
            "Categoria de Negocio",
            "% Descuento"
        ];
        var dataExcel = [];
        data.forEach(function (e) {
            var rut = "";
            if (e.eac_nrutoperador !== null && e.eac_nrutoperador !== 0) {
                rut = _this.rutFormater(String(_this.utilService.formatDotNumber(e.eac_nrutoperador)), e.ope_sdigverificador);
            }
            dataExcel.push([
                e.aco_nidaccion,
                e.aco_sdescripcion,
                e.par_deslargo01,
                _this.utilService.dateStringServiceToReverseStringFormat(e.aco_dfhoinicio),
                _this.utilService.dateStringServiceToReverseStringFormat(e.aco_dfhotermino),
                e.dac_scodformato,
                e.dac_scodvariedad,
                rut,
                e.ope_snombre,
                e.can_sdescatnegocio,
                e.dac_nporcdescto
            ]);
        });
        var fechaExcel = this.utilService.dateToStringDateBarFormat(this.fechaActual);
        var titulo = "Acciones Comerciales " + this.dateToStringDateTitleExcelFormat(new Date());
        var fileName = "Reporte de Acciones Comerciales " + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        this.excelService.generateExcel(titulo, headerExcel, dataExcel, fechaExcel, fileName);
        this.cargador.hide();
        swal("Perfecto", "Su reporte ha sido generado con exito!", "success");
    };
    // Funciones Auxiliares
    AccionComercialesComponent.prototype.rutFormater = function (rut, digverificador) {
        return rut + "-" + digverificador;
    };
    // Thu Jul 18 2019 12:08:08 GMT-0400 (hora estándar de Chile) => 201907
    AccionComercialesComponent.prototype.dateToStringDateTitleExcelFormat = function (date) {
        var anio = date.getFullYear();
        var mes = date.getMonth() + 1;
        var mesStr = mes < 10 ? "0" + mes : mes;
        var fechaString = "" + anio + mesStr;
        return fechaString;
    };
    // Thu Jul 18 2019 12:08:08 GMT-0400 (hora estándar de Chile) => 07
    AccionComercialesComponent.prototype.dateToStringMonthFormat = function (date) {
        var mes = date.getMonth() + 1;
        var mesStr = mes < 10 ? "0" + mes : mes;
        var fechaString = "" + mesStr;
        return fechaString;
    };
    AccionComercialesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-acciones-comerciales',
            template: __webpack_require__(/*! ./accionesComerciales.component.html */ "./src/app/routes/reportes/accionesComerciales/accionesComerciales.component.html")
        }),
        __metadata("design:paramtypes", [_core_excel_excelRAC_service__WEBPACK_IMPORTED_MODULE_4__["ExcelRACService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_2__["ReportesService"]])
    ], AccionComercialesComponent);
    return AccionComercialesComponent;
}());



/***/ }),

/***/ "./src/app/routes/reportes/consolidadoCtasClientes/consolidadoCtasClientes.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/routes/reportes/consolidadoCtasClientes/consolidadoCtasClientes.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nTABLE{\r\n    \r\n\tBORDER-RIGHT: 0px;\r\n    BORDER-TOP: 0px;\r\n    BORDER-LEFT: 0px;\r\n    BORDER-BOTTOM: 0px\r\n}\r\nTD\r\n{\r\n    FONT: 10px Arial, Helvetica, sans-serif;\r\n    COLOR: #333333;\r\n}\r\n#fila_tabla_encabezado\r\n{\r\n    HEIGHT: 20px\r\n}\r\n#fila_tabla_encabezado TD\r\n{\r\n    /*BACKGROUND-IMAGE: url(../../imagenes/interior_05.gif);*/\r\n    BACKGROUND: #82B4CD;\r\n    /*FONT: bold 11px Arial, Helvetica, sans-serif;*/\r\n    FONT: bold 9px Verdana, Arial, Helvetica, sans-serif;\r\n    COLOR: #ffffff;\r\n}\r\nTD.columna_tabla_encabezado\r\n{\r\n    /*BACKGROUND-IMAGE: url(../../imagenes/interior_05.gif);*/\r\n    BACKGROUND: #82B4CD;\r\n\tFONT: bold 9px Verdana, Arial, Helvetica, sans-serif;\r\n    COLOR: #ffffff\r\n}\r\n#fila_tabla_recorridos\r\n{\r\n    HEIGHT: 20px\r\n}\r\n#fila_tabla_recorridos TD\r\n{\r\n    /*BACKGROUND-IMAGE: url(../../imagenes/interior_05.gif);*/\r\n\tBACKGROUND: #82B4CD;\r\n    FONT: bold 9px Arial, Helvetica, sans-serif;\r\n    COLOR: #ffffff\r\n}\r\n#fila_tabla_rutas\r\n{\r\n    HEIGHT: 20px\r\n}\r\n#fila_tabla_rutas TD\r\n{\r\n    BACKGROUND: #6EBEC5;\r\n    FONT: bold 9px Arial, Helvetica, sans-serif;\r\n    COLOR: #FFFFFF\r\n}\r\n#fila_tabla_facturas\r\n{\r\n    HEIGHT: 20px\r\n}\r\n#fila_tabla_facturas TD\r\n{\r\n    BACKGROUND: #0070c0;\r\n    FONT: bold 9px Arial, Helvetica, sans-serif;\r\n    COLOR: #ffffff\r\n}\r\n#fila_tabla_pedidos\r\n{\r\n    HEIGHT: 20px\r\n}\r\n#fila_tabla_pedidos TD\r\n{\r\n    BACKGROUND: #A5D6DA;\r\n    FONT: bold 9px Arial, Helvetica, sans-serif;\r\n    COLOR: #FFFFFF\r\n}\r\n#tabla_listado TR, #tblDetallePagos TR\r\n{\r\n    HEIGHT: 20px\r\n}\r\n#tabla_listado TR.fila_tabla_anchos, #tblDetallePagos TR.fila_tabla_anchos\r\n{\r\n    HEIGHT: 0px\r\n}\r\n#tabla_listado TR.lineaTablaHide\r\n{\r\n    BACKGROUND: #ffffff;\r\n    HEIGHT: 0px\r\n}\r\n.tableborder\r\n{\r\n    BORDER-RIGHT: #345487 1px solid;\r\n    PADDING-RIGHT: 0px;\r\n    BORDER-TOP: #345487 1px solid;\r\n    PADDING-LEFT: 0px;\r\n    PADDING-BOTTOM: 0px;\r\n    BORDER-LEFT: #345487 1px solid;\r\n    WIDTH: 485px;\r\n    PADDING-TOP: 0px;\r\n    BORDER-BOTTOM: #345487 1px solid;\r\n    BACKGROUND-COLOR: #fff\r\n}\r\nBACKGROUND-COLOR: #ffffff\r\n\r\n.TextoTablaAlarmaRojo\r\n{\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: 10px;\r\n    COLOR: #ff0000;\r\n    FONT-STYLE: normal;\r\n    TEXT-DECORATION: none\r\n}\r\n.LineaTablaImpar\r\n{\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: 10px;\r\n    BACKGROUND-IMAGE: none;\r\n    COLOR: #191970;\r\n    BACKGROUND-REPEAT: repeat;\r\n    FONT-STYLE: normal;\r\n    BACKGROUND-COLOR: #f5f5f5;\r\n    TEXT-DECORATION: none\r\n}\r\n.LineaTablaPar\r\n{\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: 10px;\r\n    BACKGROUND: #ffffff;\r\n    FONT-STYLE: normal;\r\n    TEXT-DECORATION: none\r\n}\r\n.LineaTablaOver TD\r\n{\r\n    FONT-WEIGHT: normal;\r\n    FONT-SIZE: 10px;\r\n    BACKGROUND: #2BD4FF;\r\n    COLOR: #ffffff;\r\n    FONT-STYLE: normal;\r\n    TEXT-DECORATION: none\r\n}\r\nth {\r\n    text-align: right !important;\r\n}"

/***/ }),

/***/ "./src/app/routes/reportes/consolidadoCtasClientes/consolidadoCtasClientes.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/routes/reportes/consolidadoCtasClientes/consolidadoCtasClientes.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4> Reporte Consolidado Cuentas Clientes</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n                    <tbody>\r\n                        <tr>\r\n                            <!-- Encabezados -->\r\n                            <td width=\"865px\" valign=\"top\">\r\n                                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <!-- Encabezados -->\r\n                                            <td width=\"70px\" valign=\"top\">\r\n                                                <table border=\"0\" cellspacing=\"1\" cellpadding=\"0\" width=\"100%\" height=\"20\"id=\"tabla_listado\">\r\n                                                    <tbody>\r\n                                                        <tr>\r\n                                                            <td></td>\r\n                                                        </tr>\r\n                                                        <tr id=\"fila_tabla_encabezado\">\r\n                                                            <td>Facturas</td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaImpar\">\r\n                                                            <td>Corporativo</td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaPar\">\r\n                                                            <td></td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaImpar\">\r\n                                                            <td>Divisional</td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaPar\">\r\n                                                            <td></td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaImpar\">\r\n                                                            <th>Total</th>\r\n                                                        </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </td>\r\n                \r\n                                            <!-- Por Vencer -->\r\n                                            <td width=\"70px\" valign=\"top\">\r\n                                                <table border=\"0\" cellspacing=\"1\" cellpadding=\"0\" width=\"100%\" height=\"20\" id=\"tabla_listado\">\r\n                                                    <tbody>\r\n                                                        <tr>\r\n                                                            <td></td>\r\n                                                        </tr>\r\n                                                        <tr id=\"fila_tabla_encabezado\">\r\n                                                            <td align=\"center\">Por Vencer</td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaImpar\">\r\n                                                            <td align=\"right\">{{nMontoPorVencerCor  |  number}}</td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaPar\">\r\n                                                            <td></td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaImpar\">\r\n                                                            <td align=\"right\">{{nMontoPorVencerDiv  |  number}}</td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaPar\">\r\n                                                            <td></td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaImpar\">\r\n                                                            <th align=\"right\">{{nMontoPorVencer  |  number}}</th>\r\n                                                        </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </td>\r\n                                            <!-- Vencidos-->\r\n                                            <td width=\"725\" valign=\"top\">\r\n                                                <table border=\"0\" cellspacing=\"1\" cellpadding=\"0\" width=\"100%\" height=\"20\" id=\"tabla_listado\">\r\n                                                    <tbody>\r\n                                                        <tr id=\"fila_tabla_encabezado\">\r\n                                                            <td colspan=\"9\" align=\"center\">Vencidos por Tramo</td>\r\n                                                        </tr>\r\n                                                        <!-- tramo-->\r\n                                                        <tr id=\"fila_tabla_encabezado\">\r\n                \r\n                                                            <td width=\"75\" align=\"center\">T1 : 1 - 5</td>\r\n                \r\n                \r\n                                                            <td width=\"75\" align=\"center\">T2 : 6 - 15</td>\r\n                \r\n                \r\n                                                            <td width=\"75\" align=\"center\">T3 : 16 - 30</td>\r\n                \r\n                \r\n                                                            <td width=\"75\" align=\"center\">T4 : 31 - 45</td>\r\n                \r\n                \r\n                                                            <td width=\"75\" align=\"center\">T5 : 46 - 60</td>\r\n                \r\n                \r\n                                                            <td width=\"90\" align=\"center\">T6 : 61 - 120</td>\r\n                \r\n                \r\n                                                            <td width=\"90\" align=\"center\">T7 : 121 - 180</td>\r\n                \r\n                \r\n                                                            <td width=\"90\" align=\"center\">T8 : 181 y mas</td>\r\n                \r\n                \r\n                                                            <td width=\"80\" align=\"center\">Total Vencido</td>\r\n                                                        </tr>\r\n                                                        <!-- corporativo -->\r\n                                                        <tr class=\"LineaTablaImpar\">\r\n                \r\n                                                            <td width=\"75\" align=\"right\">{{dataTramos[0]?.totalCorporativoPorDias  |  number}}</td>\r\n                \r\n                \r\n                                                            <td width=\"75\" align=\"right\">{{dataTramos[1]?.totalCorporativoPorDias  |  number}}</td>\r\n                \r\n                \r\n                                                            <td width=\"75\" align=\"right\">{{dataTramos[2]?.totalCorporativoPorDias  |  number}}</td>\r\n                \r\n                \r\n                                                            <td width=\"75\" align=\"right\">{{dataTramos[3]?.totalCorporativoPorDias  |  number}}</td>\r\n                \r\n                \r\n                                                            <td width=\"75\" align=\"right\">{{dataTramos[4]?.totalCorporativoPorDias  |  number}}</td>\r\n                \r\n                \r\n                                                            <td width=\"90\" align=\"right\">{{dataTramos[5]?.totalCorporativoPorDias  |  number}}</td>\r\n                \r\n                \r\n                                                            <td width=\"90\" align=\"right\">{{dataTramos[6]?.totalCorporativoPorDias  |  number}}</td>\r\n                \r\n                \r\n                                                            <td width=\"90\" align=\"right\">{{dataTramos[7]?.totalCorporativoPorDias  |  number}}</td>\r\n                \r\n                \r\n                                                            <td width=\"90\" align=\"right\">{{totalCorporativo  |  number}}</td>\r\n                \r\n                \r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaPar\">\r\n                                                            <td></td>\r\n                                                        </tr>\r\n                                                        <!-- divisional -->\r\n                                                        <tr class=\"LineaTablaImpar\">\r\n                \r\n                                                            <td width=\"75\" align=\"right\">{{dataTramos[0]?.totalDivisionalPorDias  |  number}}</td>\r\n                \r\n                \r\n                                                            <td width=\"75\" align=\"right\">{{dataTramos[1]?.totalDivisionalPorDias  |  number}}</td>\r\n                \r\n                \r\n                                                            <td width=\"75\" align=\"right\">{{dataTramos[2]?.totalDivisionalPorDias  |  number}}</td>\r\n                \r\n                \r\n                                                            <td width=\"75\" align=\"right\">{{dataTramos[3]?.totalDivisionalPorDias  |  number}}</td>\r\n                \r\n                \r\n                                                            <td width=\"75\" align=\"right\">{{dataTramos[4]?.totalDivisionalPorDias  |  number}}</td>\r\n                \r\n                \r\n                                                            <td width=\"90\" align=\"right\">{{dataTramos[5]?.totalDivisionalPorDias  |  number}}</td>\r\n                \r\n                \r\n                                                            <td width=\"90\" align=\"right\">{{dataTramos[6]?.totalDivisionalPorDias  |  number}}</td>\r\n                \r\n                \r\n                                                            <td width=\"90\" align=\"right\">{{dataTramos[7]?.totalDivisionalPorDias  |  number}}</td>\r\n                \r\n                \r\n                                                            <td width=\"90\" align=\"right\">{{totalDivisional  |  number}}</td>\r\n                \r\n                \r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaPar\">\r\n                                                            <td></td>\r\n                                                        </tr>\r\n                                                        <!-- Total -->\r\n                                                        <tr class=\"LineaTablaImpar\">\r\n                \r\n                                                            <th width=\"75\" align=\"right\">{{dataTramos[0]?.totalDivisionalPorDias+dataTramos[0]?.totalCorporativoPorDias  |  number}}</th>\r\n                \r\n                \r\n                                                            <th width=\"75\" align=\"right\">{{dataTramos[1]?.totalDivisionalPorDias+dataTramos[1]?.totalCorporativoPorDias  |  number}}</th>\r\n                \r\n                \r\n                                                            <th width=\"75\" align=\"right\">{{dataTramos[2]?.totalDivisionalPorDias+dataTramos[2]?.totalCorporativoPorDias  |  number}}</th>\r\n                \r\n                \r\n                                                            <th width=\"75\" align=\"right\">{{dataTramos[3]?.totalDivisionalPorDias+dataTramos[3]?.totalCorporativoPorDias  |  number}}</th>\r\n                \r\n                \r\n                                                            <th width=\"75\" align=\"right\">{{dataTramos[4]?.totalDivisionalPorDias+dataTramos[4]?.totalCorporativoPorDias  |  number}}</th>\r\n                \r\n                \r\n                                                            <th width=\"90\" align=\"right\">{{dataTramos[5]?.totalDivisionalPorDias+dataTramos[5]?.totalCorporativoPorDias  |  number}}</th>\r\n                \r\n                \r\n                                                            <th width=\"90\" align=\"right\">{{dataTramos[6]?.totalDivisionalPorDias+dataTramos[6]?.totalCorporativoPorDias  |  number}}</th>\r\n                \r\n                \r\n                                                            <th width=\"90\" align=\"right\">{{dataTramos[7]?.totalDivisionalPorDias+dataTramos[7]?.totalCorporativoPorDias  |  number}}</th>\r\n                \r\n                \r\n                                                            <th width=\"90\" align=\"right\">{{totalCorporativo + totalDivisional  |  number}}</th>\r\n                \r\n                \r\n                                                        </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </td>\r\n                            <td width=\"110px\" valign=\"top\">\r\n                                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <!-- Total -->\r\n                                            <td width=\"70px\" valign=\"top\">\r\n                                                <table border=\"0\" cellspacing=\"1\" cellpadding=\"0\" width=\"100%\" height=\"20\" id=\"tabla_listado\">\r\n                                                    <tbody>\r\n                                                        <tr>\r\n                                                            <td></td>\r\n                                                        </tr>\r\n                                                        <tr id=\"fila_tabla_encabezado\">\r\n                                                            <td align=\"center\">Total</td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaImpar\">\r\n                                                            <td align=\"right\">{{totalCorporativo + nMontoPorVencerCor |  number}}</td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaPar\">\r\n                                                            <td></td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaImpar\">\r\n                                                            <td align=\"right\">{{totalDivisional + nMontoPorVencerDiv |  number}}</td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaPar\">\r\n                                                            <td></td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaImpar\">\r\n                                                            <th align=\"right\">{{totalGeneral |  number}}</th>\r\n                                                        </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </td>\r\n                                            <!-- Dias Cartera-->\r\n                                            <td width=\"40px\" valign=\"top\">\r\n                                                <table border=\"0\" cellspacing=\"1\" cellpadding=\"0\" width=\"100%\" height=\"20\"\r\n                                                    id=\"tabla_listado\">\r\n                                                    <tbody>\r\n                                                        <tr>\r\n                                                            <td></td>\r\n                                                        </tr>\r\n                                                        <tr id=\"fila_tabla_encabezado\">\r\n                                                            <td align=\"center\" title=\"Dias Cartera\">D.C.</td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaImpar\">\r\n                                                            <td align=\"right\" title=\"Dias Cartera\">{{nDiasCarteraCorp |  number}}</td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaPar\">\r\n                                                            <td></td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaImpar\">\r\n                                                            <td align=\"right\" title=\"Dias Cartera\">{{nDiasCarteraDivi |  number}}</td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaPar\">\r\n                                                            <td></td>\r\n                                                        </tr>\r\n                                                        <tr class=\"LineaTablaImpar\">\r\n                                                            <th align=\"right\" title=\"Dias Cartera\">{{nDiasCartera |  number}}</th>\r\n                                                        </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <!-- Encabezados -->\r\n                            <td width=\"865px\" valign=\"top\" height=\"20px\">\r\n                                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <!-- Encabezados -->\r\n                                            <td width=\"140px\" colspan=\"2\"></td>\r\n                                            <td width=\"725\" valign=\"top\"></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </td>\r\n                            <td width=\"110px\" valign=\"top\"></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <!-- Encabezados -->\r\n                            <td width=\"865px\" valign=\"top\">\r\n                                <table border=\"0\" cellpadding=\"0\" cellspacing=\"1\">\r\n                                    <tbody>\r\n                                        <tr id=\"fila_tabla_encabezado\">\r\n                                            <!-- Encabezados -->\r\n                                            <td width=\"140px\">Otros</td>\r\n                                            <td width=\"725px\">\r\n                                                <table border=\"0\" cellspacing=\"1\" cellpadding=\"0\" width=\"100%\" height=\"20\"\r\n                                                    id=\"tabla_listado\">\r\n                                                    <tbody>\r\n                                                        <tr id=\"fila_tabla_encabezado\">\r\n                                                            <td width=\"75px\" align=\"center\">T1</td>\r\n                                                            <td width=\"75px\" align=\"center\">T2</td>\r\n                                                            <td width=\"75px\" align=\"center\">T3</td>\r\n                                                            <td width=\"75px\" align=\"center\">T4</td>\r\n                                                            <td width=\"75px\" align=\"center\">T5</td>\r\n                                                            <td width=\"90px\" align=\"center\">T6</td>\r\n                                                            <td width=\"90px\" align=\"center\">T7</td>\r\n                                                            <td width=\"90px\" align=\"center\">T8</td>\r\n                                                            <td width=\"80px\" align=\"center\">Total por Tipo</td>\r\n                                                        </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </td>\r\n                            <td width=\"110px\" valign=\"top\"></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <!-- Encabezados -->\r\n                            <td width=\"865px\" valign=\"top\" height=\"20px\">\r\n                \r\n                                <table border=\"0\" cellspacing=\"1\" cellpadding=\"0\">\r\n                                    <tbody>\r\n                                        <tr class=\"LineaTablaImpar\">\r\n                \r\n                                            <td width=\"140px\">EFECTIVO</td>\r\n                                            <td width=\"725px\">\r\n                                                <table border=\"0\" cellspacing=\"1\" cellpadding=\"0\">\r\n                                                    <tbody>\r\n                                                        <tr height=\"20\">\r\n                \r\n                                                            <td align=\"right\" width=\"75px\">{{dataOtrosMontos[0]?.rg1 |  number}}</td>\r\n                \r\n                                                            <td align=\"right\" width=\"75px\">{{dataOtrosMontos[0]?.rg2 |  number}}</td>\r\n                \r\n                                                            <td align=\"right\" width=\"75px\">{{dataOtrosMontos[0]?.rg3 |  number}}</td>\r\n                \r\n                                                            <td align=\"right\" width=\"75px\">{{dataOtrosMontos[0]?.rg4 |  number}}</td>\r\n                \r\n                                                            <td align=\"right\" width=\"75px\">{{dataOtrosMontos[0]?.rg5 |  number}}</td>\r\n                \r\n                                                            <td align=\"right\" width=\"90px\">{{dataOtrosMontos[0]?.rg6 |  number}}</td>\r\n                \r\n                                                            <td align=\"right\" width=\"90px\">{{dataOtrosMontos[0]?.rg7 |  number}}</td>\r\n                \r\n                                                            <td align=\"right\" width=\"90px\">{{dataOtrosMontos[0]?.rg8 |  number}}</td>\r\n                                                            <td align=\"right\" width=\"80px\">{{totalesPorTipo[0] |  number}}</td>\r\n                                                        </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </td>\r\n                \r\n                                        </tr>\r\n                \r\n                                        <tr>\r\n                                            <td></td>\r\n                                            <td></td>\r\n                                        </tr>\r\n                \r\n                                    </tbody>\r\n                                </table>\r\n                \r\n                                <table border=\"0\" cellspacing=\"1\" cellpadding=\"0\">\r\n                                    <tbody>\r\n                                        <tr class=\"LineaTablaImpar\">\r\n                \r\n                                            <td width=\"140px\">GARANTIA</td>\r\n                                            <td width=\"725px\">\r\n                                                <table border=\"0\" cellspacing=\"1\" cellpadding=\"0\">\r\n                                                    <tbody>\r\n                                                        <tr height=\"20\">\r\n                                                                <td align=\"right\" width=\"75px\">{{dataOtrosMontos[1]?.rg1 |  number}}</td>\r\n                \r\n                                                                <td align=\"right\" width=\"75px\">{{dataOtrosMontos[1]?.rg2 |  number}}</td>\r\n                    \r\n                                                                <td align=\"right\" width=\"75px\">{{dataOtrosMontos[1]?.rg3 |  number}}</td>\r\n                    \r\n                                                                <td align=\"right\" width=\"75px\">{{dataOtrosMontos[1]?.rg4 |  number}}</td>\r\n                    \r\n                                                                <td align=\"right\" width=\"75px\">{{dataOtrosMontos[1]?.rg5 |  number}}</td>\r\n                    \r\n                                                                <td align=\"right\" width=\"90px\">{{dataOtrosMontos[1]?.rg6 |  number}}</td>\r\n                    \r\n                                                                <td align=\"right\" width=\"90px\">{{dataOtrosMontos[1]?.rg7 |  number}}</td>\r\n                    \r\n                                                                <td align=\"right\" width=\"90px\">{{dataOtrosMontos[1]?.rg8 |  number}}</td>\r\n                                                                <td align=\"right\" width=\"80px\">{{totalesPorTipo[1] |  number}}</td>\r\n                                                        </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </td>\r\n                \r\n                                        </tr>\r\n                \r\n                                        <tr>\r\n                                            <td></td>\r\n                                            <td></td>\r\n                                        </tr>\r\n                \r\n                                    </tbody>\r\n                                </table>\r\n                \r\n                                <table border=\"0\" cellspacing=\"1\" cellpadding=\"0\">\r\n                                    <tbody>\r\n                                        <tr class=\"LineaTablaImpar\">\r\n                \r\n                                            <td width=\"140px\">NOTA DE CREDITO</td>\r\n                                            <td width=\"725px\">\r\n                                                <table border=\"0\" cellspacing=\"1\" cellpadding=\"0\">\r\n                                                    <tbody>\r\n                                                        <tr height=\"20\">\r\n                \r\n                                                                <td align=\"right\" width=\"75px\">{{dataOtrosMontos[2]?.rg1 |  number}}</td>\r\n                \r\n                                                                <td align=\"right\" width=\"75px\">{{dataOtrosMontos[2]?.rg2 |  number}}</td>\r\n                    \r\n                                                                <td align=\"right\" width=\"75px\">{{dataOtrosMontos[2]?.rg3 |  number}}</td>\r\n                    \r\n                                                                <td align=\"right\" width=\"75px\">{{dataOtrosMontos[2]?.rg4 |  number}}</td>\r\n                    \r\n                                                                <td align=\"right\" width=\"75px\">{{dataOtrosMontos[2]?.rg5 |  number}}</td>\r\n                    \r\n                                                                <td align=\"right\" width=\"90px\">{{dataOtrosMontos[2]?.rg6 |  number}}</td>\r\n                    \r\n                                                                <td align=\"right\" width=\"90px\">{{dataOtrosMontos[2]?.rg7 |  number}}</td>\r\n                    \r\n                                                                <td align=\"right\" width=\"90px\">{{dataOtrosMontos[2]?.rg8 |  number}}</td>\r\n                                                                <td align=\"right\" width=\"80px\">{{totalesPorTipo[2] |  number}}</td>\r\n                                                        </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </td>\r\n                \r\n                                        </tr>\r\n                \r\n                                        <tr>\r\n                                            <td></td>\r\n                                            <td></td>\r\n                                        </tr>\r\n                \r\n                                    </tbody>\r\n                                </table>\r\n                \r\n                                <table border=\"0\" cellspacing=\"1\" cellpadding=\"0\">\r\n                                    <tbody>\r\n                                        <tr class=\"LineaTablaImpar\">\r\n                \r\n                                            <td width=\"140px\">PROTESTO</td>\r\n                                            <td width=\"725px\">\r\n                                                <table border=\"0\" cellspacing=\"1\" cellpadding=\"0\">\r\n                                                    <tbody>\r\n                                                        <tr height=\"20\">\r\n                \r\n                                                                <td align=\"right\" width=\"75px\">{{dataOtrosMontos[3]?.rg1 |  number}}</td>\r\n                \r\n                                                                <td align=\"right\" width=\"75px\">{{dataOtrosMontos[3]?.rg2 |  number}}</td>\r\n                    \r\n                                                                <td align=\"right\" width=\"75px\">{{dataOtrosMontos[3]?.rg3 |  number}}</td>\r\n                    \r\n                                                                <td align=\"right\" width=\"75px\">{{dataOtrosMontos[3]?.rg4 |  number}}</td>\r\n                    \r\n                                                                <td align=\"right\" width=\"75px\">{{dataOtrosMontos[3]?.rg5 |  number}}</td>\r\n                    \r\n                                                                <td align=\"right\" width=\"90px\">{{dataOtrosMontos[3]?.rg6 |  number}}</td>\r\n                    \r\n                                                                <td align=\"right\" width=\"90px\">{{dataOtrosMontos[3]?.rg7 |  number}}</td>\r\n                    \r\n                                                                <td align=\"right\" width=\"90px\">{{dataOtrosMontos[3]?.rg8 |  number}}</td>\r\n                                                                <td align=\"right\" width=\"80px\">{{totalesPorTipo[3] |  number}}</td>\r\n                                                        </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </td>\r\n                \r\n                                        </tr>\r\n                \r\n                                        <tr>\r\n                                            <td></td>\r\n                                            <td></td>\r\n                                        </tr>\r\n                \r\n                                    </tbody>\r\n                                </table>\r\n                \r\n                                <table border=\"0\" cellspacing=\"1\" cellpadding=\"0\">\r\n                                    <tbody>\r\n                                        <tr class=\"LineaTablaImpar\">\r\n                \r\n                                            <th width=\"140px\">Total</th>\r\n                                            <td width=\"725px\">\r\n                                                <table border=\"0\" cellspacing=\"1\" cellpadding=\"0\">\r\n                                                    <tbody>\r\n                                                        <tr class=\"LineaTablaImpar\">\r\n                \r\n                                                            <th align=\"right\" width=\"75px\">{{totalT1 |  number}}</th>\r\n                \r\n                                                            <th align=\"right\" width=\"75px\">{{totalT2 |  number}}</th>\r\n                \r\n                                                            <th align=\"right\" width=\"75px\">{{totalT3 |  number}}</th>\r\n                                                            <th align=\"right\" width=\"75px\">{{totalT4 |  number}}</th>\r\n                                                            <th align=\"right\" width=\"75px\">{{totalT5 |  number}}</th>\r\n                \r\n                                                            <th align=\"right\" width=\"90px\">{{totalT6 |  number}}</th>\r\n                \r\n                                                            <th align=\"right\" width=\"90px\">{{totalT7 |  number}}</th>\r\n                \r\n                                                            <th align=\"right\" width=\"90px\">{{totalT8 |  number}}</th>\r\n                                                            <th align=\"right\" width=\"80px\">{{totalGeneralOtrosMontos |  number}}</th>\r\n                                                        </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </td>\r\n                \r\n                                        </tr>\r\n                \r\n                                    </tbody>\r\n                                </table>\r\n                \r\n                            </td>\r\n                            <td width=\"110px\" valign=\"top\"></td>\r\n                        </tr>\r\n            \r\n                \r\n                    </tbody>\r\n                </table> \r\n                <br>\r\n                <div class=\"col-md-offset-5 col-sm-6\">\r\n                    <button class=\"btn btn-oval btn-sm\" [disabled]='valido' (click)=\"generateExcel()\">Generar</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/reportes/consolidadoCtasClientes/consolidadoCtasClientes.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/routes/reportes/consolidadoCtasClientes/consolidadoCtasClientes.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ConsolidadoCtasClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolidadoCtasClientesComponent", function() { return ConsolidadoCtasClientesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/consultaService/reportes.service */ "./src/app/core/consultaService/reportes.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
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
var ConsolidadoCtasClientesComponent = /** @class */ (function () {
    function ConsolidadoCtasClientesComponent(authService, reportesService, utilService, excelService, cargador) {
        this.authService = authService;
        this.reportesService = reportesService;
        this.utilService = utilService;
        this.excelService = excelService;
        this.cargador = cargador;
        this.request = {};
        this.user = {};
        this.fechaActual = new Date();
        this.dataOtrosMontos = [];
        this.dataTramos = [];
        this.nDiasCartera = 0;
        this.nDiasCarteraCorp = 0;
        this.nDiasCarteraDivi = 0;
        this.nMontoPorVencer = 0;
        this.nMontoPorVencerCor = 0;
        this.nMontoPorVencerDiv = 0;
        this.totalCorporativo = 0;
        this.totalDivisional = 0;
        this.totalGeneral = 0;
        this.dataReporte = [];
        this.totalT1 = 0;
        this.totalT2 = 0;
        this.totalT3 = 0;
        this.totalT4 = 0;
        this.totalT5 = 0;
        this.totalT6 = 0;
        this.totalT7 = 0;
        this.totalT8 = 0;
        this.totalGeneralOtrosMontos = 0;
        this.totalesPorTipo = [];
        this.valido = true;
    }
    ConsolidadoCtasClientesComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getDatosUser();
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_6___default.a);
        this.initData();
    };
    ConsolidadoCtasClientesComponent.prototype.initData = function () {
        var _this = this;
        this.cargador.show();
        this.request.nRutOperador = Number(this.user.nrutoperador);
        this.reportesService.getConsolidadoCta(this.request)
            .subscribe(function (data) {
            _this.request = {};
            _this.cargador.hide();
            if (data.montos.length == 0 || data.otrosMontos.length == 0 || data.tramos.length == 0 && data.error.codError == 0) {
                swal("Atención", "No se encontraron resultados", "info");
                _this.valido = true;
            }
            else {
                _this.valido = false;
                var auxDataMontos = data.montos;
                _this.dataOtrosMontos = data.otrosMontos;
                _this.dataTramos = data.tramos;
                _this.nDiasCartera = data.nDiasCartera;
                _this.nDiasCarteraCorp = data.nDiasCarteraCorp;
                _this.nDiasCarteraDivi = data.nDiasCarteraDivi;
                _this.nMontoPorVencer = data.nMontoPorVencer;
                _this.nMontoPorVencerCor = data.nMontoPorVencerCor;
                _this.nMontoPorVencerDiv = data.nMontoPorVencerDiv;
                for (var i in _this.dataTramos) {
                    _this.dataTramos[i].totalCorporativoPorDias = 0;
                    _this.dataTramos[i].totalDivisionalPorDias = 0;
                    for (var j in auxDataMontos) {
                        if (_this.dataTramos[i].par_numero01 >= auxDataMontos[j].dias && auxDataMontos[j].dias <= _this.dataTramos[i].par_numero02) {
                            _this.dataTramos[i].totalCorporativoPorDias += auxDataMontos[j].corporativo;
                            _this.dataTramos[i].totalDivisionalPorDias += auxDataMontos[j].divisional;
                        }
                    }
                }
                _this.totalCorporativo = 0;
                _this.totalDivisional = 0;
                for (var i in _this.dataTramos) {
                    _this.totalCorporativo += _this.dataTramos[i].totalCorporativoPorDias;
                    _this.totalDivisional += _this.dataTramos[i].totalDivisionalPorDias;
                }
                _this.totalGeneral += _this.totalCorporativo + _this.nMontoPorVencerCor + _this.totalDivisional + _this.nMontoPorVencerDiv;
                console.log(_this.dataTramos);
                for (var i in _this.dataOtrosMontos) {
                    _this.totalT1 += _this.dataOtrosMontos[i].rg1;
                    _this.totalT2 += _this.dataOtrosMontos[i].rg2;
                    _this.totalT3 += _this.dataOtrosMontos[i].rg3;
                    _this.totalT4 += _this.dataOtrosMontos[i].rg4;
                    _this.totalT5 += _this.dataOtrosMontos[i].rg5;
                    _this.totalT6 += _this.dataOtrosMontos[i].rg6;
                    _this.totalT7 += _this.dataOtrosMontos[i].rg7;
                    _this.totalT8 += _this.dataOtrosMontos[i].rg8;
                    console.log(_this.totalT1);
                    _this.totalGeneralOtrosMontos += _this.totalT1 + _this.totalT2 + _this.totalT3 + _this.totalT4 + _this.totalT5 + _this.totalT6 + _this.totalT7 + _this.totalT8;
                    var aux = _this.totalT1 + _this.totalT2 + _this.totalT3 + _this.totalT4 + _this.totalT5 + _this.totalT6 + _this.totalT7 + _this.totalT8;
                    _this.totalesPorTipo.push(aux);
                }
                console.log(_this.totalesPorTipo);
            }
        }),
            function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                console.log('error en el request');
            };
    };
    ;
    ConsolidadoCtasClientesComponent.prototype.generateExcel = function () {
        var parametros = {
            dataOtrosMontos: this.dataOtrosMontos,
            dataTramos: this.dataTramos,
            nDiasCartera: this.nDiasCartera,
            nDiasCarteraCorp: this.nDiasCarteraCorp,
            nDiasCarteraDivi: this.nDiasCarteraDivi,
            nMontoPorVencer: this.nMontoPorVencer,
            nMontoPorVencerCor: this.nMontoPorVencerCor,
            nMontoPorVencerDiv: this.nMontoPorVencerDiv,
            totalCorporativo: this.totalCorporativo,
            totalDivisional: this.totalDivisional,
            totalGeneral: this.totalGeneral,
            totalT1: this.totalT1,
            totalT2: this.totalT2,
            totalT3: this.totalT3,
            totalT4: this.totalT4,
            totalT5: this.totalT5,
            totalT6: this.totalT6,
            totalT7: this.totalT7,
            totalT8: this.totalT8,
            totalGeneralOtrosMontos: this.totalGeneralOtrosMontos,
            totalesPorTipo: this.totalesPorTipo,
        };
        var fechaExcel = this.utilService.dateToLocalStringFormat(this.fechaActual);
        var nombreExcel = 'Consolidado Cuenta Corriente' + this.utilService.dateToStringDateFullFormat(this.fechaActual);
        this.excelService.generateExcelConsolidoCta(nombreExcel, 'Reporte Consolidado Cuenta Corriente', parametros, fechaExcel);
        swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
    };
    ConsolidadoCtasClientesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consolidado-ctas-clientes',
            template: __webpack_require__(/*! ./consolidadoCtasClientes.component.html */ "./src/app/routes/reportes/consolidadoCtasClientes/consolidadoCtasClientes.component.html"),
            styles: [__webpack_require__(/*! ./consolidadoCtasClientes.component.css */ "./src/app/routes/reportes/consolidadoCtasClientes/consolidadoCtasClientes.component.css")]
        }),
        __metadata("design:paramtypes", [_core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_3__["ReportesService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], ConsolidadoCtasClientesComponent);
    return ConsolidadoCtasClientesComponent;
}());



/***/ }),

/***/ "./src/app/routes/reportes/diferenciaPrecio/diferenciaPrecio.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/reportes/diferenciaPrecio/diferenciaPrecio.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4> Reporte Diferencia Precio </h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\" style=\"-webkit-box-shadow: 1px 1px 5px 1px #000000; box-shadow: 1px 1px 5px 1px #000000;\">\r\n                    <div class=\"card-body\" style=\"padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;\">\r\n                        <div class=\"card-text\">\r\n                            <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                                <div class=\"form-row col-md-12\">\r\n                                    <div class=\"col-sm-6 form-group\">\r\n                                        <label class=\"col-sm-3 control-label\">Operador: </label>\r\n                                        <div class=\"col-sm-7\" style=\" padding-right: 0px;\">\r\n                                            <input formControlName=\"ope_snombre\" name=\"ope_snombre\" class=\"form-control\" type=\"text\" />\r\n                                        </div>\r\n                                        <div class=\"col-sm-2\">\r\n                                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalOperadores()\">\r\n                                                <em class=\"icon-magnifier\"></em>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-row col-md-12\">\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Mes: </label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <select class=\"form-control pv-0\" formControlName=\"mes\" name=\"mes\">\r\n                                                <option *ngFor=\"let mes of meses\" [ngValue]=\"mes.codMes\">{{mes.descMes}}</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Año: </label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <select class=\"form-control pv-0\" formControlName=\"anio\" name=\"anio\">\r\n                                                <option *ngFor=\"let anio of anios\" [ngValue]=\"anio.codAnio\">{{anio.descAnio}}</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-offset-5 col-sm-6\">\r\n                                    <button class=\"btn btn-oval btn-sm\" (click)=\"generar()\">Generar</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/reportes/diferenciaPrecio/diferenciaPrecio.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/routes/reportes/diferenciaPrecio/diferenciaPrecio.component.ts ***!
  \********************************************************************************/
/*! exports provided: DiferenciaPrecioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiferenciaPrecioComponent", function() { return DiferenciaPrecioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/consultaService/reportes.service */ "./src/app/core/consultaService/reportes.service.ts");
/* harmony import */ var _core_excel_excelRDP_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/excel/excelRDP.service */ "./src/app/core/excel/excelRDP.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _routes_commonPopUp_operadoresPopUp_operadoresPopUp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../routes/commonPopUp/operadoresPopUp/operadoresPopUp.component */ "./src/app/routes/commonPopUp/operadoresPopUp/operadoresPopUp.component.ts");
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
var DiferenciaPrecioComponent = /** @class */ (function () {
    function DiferenciaPrecioComponent(authService, setearDatos, usuariosService, reportesService, excelService, utilService, cargador, modalService) {
        this.authService = authService;
        this.setearDatos = setearDatos;
        this.usuariosService = usuariosService;
        this.reportesService = reportesService;
        this.excelService = excelService;
        this.utilService = utilService;
        this.cargador = cargador;
        this.modalService = modalService;
        this.fechaActual = new Date();
        this.request = {};
        this.operadores = [];
        this.user = {};
        this.meses = [
            { codMes: "01", descMes: "Enero" },
            { codMes: "02", descMes: "Febrero" },
            { codMes: "03", descMes: "Marzo" },
            { codMes: "04", descMes: "Abril" },
            { codMes: "05", descMes: "Mayo" },
            { codMes: "06", descMes: "Junio" },
            { codMes: "07", descMes: "Julio" },
            { codMes: "08", descMes: "Agosto" },
            { codMes: "09", descMes: "Septiembre" },
            { codMes: "10", descMes: "Octubre" },
            { codMes: "11", descMes: "Noviembre" },
            { codMes: "12", descMes: "Diciembre" }
        ];
        this.anios = [];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nRutOperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ope_snombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            mes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            anio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    DiferenciaPrecioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subData = this.setearDatos.datosGeo$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.subData2 = this.usuariosService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.user = this.authService.getDatosUser();
        this.setGenerar();
    };
    DiferenciaPrecioComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
        if (this.subData2 !== undefined) {
            this.subData2.unsubscribe();
        }
    };
    DiferenciaPrecioComponent.prototype.setGenerar = function () {
        this.cargaComboAnios();
        this.forma.controls.nRutOperador.setValue(Number(this.user.nrutoperador));
        this.request.nRutOperador = Number(this.user.nrutoperador);
        this.operadorComercialDefault();
        this.forma.controls.mes.setValue(this.dateToStringMonthFormat(this.fechaActual));
        this.forma.controls.anio.setValue(this.fechaActual.getFullYear());
    };
    DiferenciaPrecioComponent.prototype.cargaComboAnios = function () {
        for (var i = 1900; i <= 2100; i++) {
            var anio = {
                codAnio: i,
                descAnio: "" + i
            };
            this.anios.push(anio);
        }
    };
    DiferenciaPrecioComponent.prototype.operadorComercialDefault = function () {
        var _this = this;
        this.usuariosService.getOperadoresUsuarios(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            if (data.operadores.length === 0 && data.error.codError === 0) {
                swal('Atención', 'No se encontraron resultados', 'info');
            }
            else {
                if (data.operadores === null) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
                else {
                    _this.forma.controls.nRutOperador.setValue(data.operadores[0].ope_nrutoperador);
                    _this.forma.controls.ope_snombre.setValue(data.operadores[0].ope_snombrefantasia);
                }
            }
            if (data.error.codError !== 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    DiferenciaPrecioComponent.prototype.openModalOperadores = function () {
        this.origen = 'operadores';
        var initialState = {
            titulo: 'Operadores',
            origen: 'operadores',
            busquedaCompleta: true
        };
        this.operadoresUsuarioModal = this.modalService.show(_routes_commonPopUp_operadoresPopUp_operadoresPopUp_component__WEBPACK_IMPORTED_MODULE_10__["OperadoresPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    DiferenciaPrecioComponent.prototype.setData = function (resData) {
        if (resData !== 0) {
            switch (this.origen) {
                case 'operadores': {
                    this.forma.controls.nRutOperador.setValue(resData.ope_nrutoperador);
                    this.forma.controls.ope_snombre.setValue(resData.ope_snombre);
                    break;
                }
            }
        }
    };
    DiferenciaPrecioComponent.prototype.generar = function () {
        this.request = {};
        this.cargador.show();
        this.Anio = this.forma.controls.anio.value;
        this.Mes = this.forma.controls.mes.value;
        var fecha = this.Anio + this.Mes;
        this.periodo = this.meses[Number(this.Mes) - 1].descMes + " - " + this.Anio;
        this.request.nrutoperador = this.forma.controls.nRutOperador.value;
        this.request.sfecha = fecha;
        this.operadoresComerciales();
    };
    DiferenciaPrecioComponent.prototype.operadoresComerciales = function () {
        var _this = this;
        this.reportesService.getReporteDiferenciaPrecio(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            if (data.diferenciaPrecio.length === 0 && data.error.codError === 0) {
                swal('Atención', 'No se encontraron resultados', 'info');
            }
            else {
                if (data.diferenciaPrecio === null) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
                else {
                    _this.generateExcel(data.diferenciaPrecio);
                }
            }
            if (data.error.codError !== 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    DiferenciaPrecioComponent.prototype.generateExcel = function (data) {
        var _this = this;
        var headerExcel = [
            "Categoria",
            "Cod Sku",
            "Descripcion",
            "Costo FIFO",
            "Precio Venta",
            "PB Desde",
            "PB Hasta",
            "Cantidad",
            "Dif Precio"
        ];
        var dataExcel = [];
        var totalDifPrecio = 0;
        data.forEach(function (e) {
            dataExcel.push([
                e.jca_sdescategoria,
                _this.skuFormater(e.art_scodformato, e.art_scodvariedad),
                e.art_sdescripcion,
                e.preciocostovta,
                e.preciobase,
                _this.utilService.dateStringServiceToReverseStringFormat(e.pra_dfhoiniciovigencia),
                _this.utilService.dateStringServiceToReverseStringFormat(e.pra_dfhofinvigencia),
                e.cantidadarticulos,
                e.diferenciaprecio
            ]);
            totalDifPrecio = totalDifPrecio + Math.round(e.diferenciaprecio);
        });
        var fechaExcel = this.utilService.dateToLocalStringFormat(this.fechaActual);
        var titulo = "Diferencia de Precios " + this.utilService.dateToStringDateTitleExcelFormat(new Date());
        var fileName = "Reporte Diferencia de Precios " + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        var snombreoperador = this.forma.controls.ope_snombre.value;
        this.excelService.generateExcel(titulo, headerExcel, dataExcel, totalDifPrecio, fechaExcel, snombreoperador, this.periodo, fileName);
        this.cargador.hide();
        swal("Perfecto", "Su reporte ha sido generado con exito!", "success");
    };
    // Funciones Auxiliares
    DiferenciaPrecioComponent.prototype.skuFormater = function (art_scodformato, art_scodvariedad) {
        return art_scodformato + "-" + art_scodvariedad;
    };
    // Thu Jul 18 2019 12:08:08 GMT-0400 (hora estándar de Chile) => 07
    DiferenciaPrecioComponent.prototype.dateToStringMonthFormat = function (date) {
        var mes = date.getMonth() + 1;
        var mesStr = mes < 10 ? "0" + mes : mes;
        var fechaString = "" + mesStr;
        return fechaString;
    };
    DiferenciaPrecioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-diferencia-precio",
            template: __webpack_require__(/*! ./diferenciaPrecio.component.html */ "./src/app/routes/reportes/diferenciaPrecio/diferenciaPrecio.component.html")
        }),
        __metadata("design:paramtypes", [_core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_4__["ConsultasService"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_5__["AdministracionOperativaService"],
            _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_6__["ReportesService"],
            _core_excel_excelRDP_service__WEBPACK_IMPORTED_MODULE_7__["ExcelRDPService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalService"]])
    ], DiferenciaPrecioComponent);
    return DiferenciaPrecioComponent;
}());



/***/ }),

/***/ "./src/app/routes/reportes/documentosSinFolio/documentosSinFolio.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/routes/reportes/documentosSinFolio/documentosSinFolio.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n      <h4>Reporte Documentos Sin Folio</h4>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n              <div class=\"card\" style=\"-webkit-box-shadow: 1px 1px 5px 1px #000000; box-shadow: 1px 1px 5px 1px #000000;\">\r\n                  <div class=\"card-body\" style=\"padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;\">\r\n                      <div class=\"card-text\">\r\n                          <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                              <div class=\"form-row col-md-12\">\r\n                                  <div class=\"form-group col-sm-6\">\r\n                                      <label class=\"col-sm-3 control-label\">Mes:</label>\r\n                                      <div class=\"col-sm-9\">\r\n                                          <select class=\"form-control pv-0\" formControlName=\"mes\" name=\"mes\">\r\n                                              <option *ngFor=\"let mes of meses\" [ngValue]=\"mes.codMes\">{{mes.descMes}}</option>\r\n                                          </select>\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"form-group col-sm-6\">\r\n                                      <label class=\"col-sm-3 control-label\">Año:</label>\r\n                                      <div class=\"col-sm-9\">\r\n                                          <select class=\"form-control pv-0\" formControlName=\"anio\" name=\"anio\">\r\n                                              <option *ngFor=\"let anio of anios\" [ngValue]=\"anio.codAnio\">{{anio.descAnio}}</option>\r\n                                          </select>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </form>\r\n\r\n                          <div class=\"row\">\r\n                              <div class=\"col-md-offset-5 col-sm-6\">\r\n                                  <button class=\"btn btn-oval btn-sm\" (click)=\"buscar()\">Buscar</button>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/reportes/documentosSinFolio/documentosSinFolio.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/routes/reportes/documentosSinFolio/documentosSinFolio.component.ts ***!
  \************************************************************************************/
/*! exports provided: DocumentosSinFolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosSinFolioComponent", function() { return DocumentosSinFolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/consultaService/reportes.service */ "./src/app/core/consultaService/reportes.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
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
var DocumentosSinFolioComponent = /** @class */ (function () {
    function DocumentosSinFolioComponent(cargador, authService, utilService, reportesService) {
        this.cargador = cargador;
        this.authService = authService;
        this.utilService = utilService;
        this.reportesService = reportesService;
        this.fechaActual = new Date();
        this.request = {};
        this.operadores = [];
        this.user = {};
        this.meses = [
            { codMes: "01", descMes: "Enero" },
            { codMes: "02", descMes: "Febrero" },
            { codMes: "03", descMes: "Marzo" },
            { codMes: "04", descMes: "Abril" },
            { codMes: "05", descMes: "Mayo" },
            { codMes: "06", descMes: "Junio" },
            { codMes: "07", descMes: "Julio" },
            { codMes: "08", descMes: "Agosto" },
            { codMes: "09", descMes: "Septiembre" },
            { codMes: "10", descMes: "Octubre" },
            { codMes: "11", descMes: "Noviembre" },
            { codMes: "12", descMes: "Diciembre" }
        ];
        this.anios = [];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            mes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            anio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    DocumentosSinFolioComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getDatosUser();
        this.setGenerar();
    };
    DocumentosSinFolioComponent.prototype.setGenerar = function () {
        this.cargaComboAnios();
        this.forma.controls.mes.setValue(this.utilService.dateToStringMonthFormat(this.fechaActual));
        this.forma.controls.anio.setValue(this.fechaActual.getFullYear());
    };
    DocumentosSinFolioComponent.prototype.cargaComboAnios = function () {
        for (var i = 1900; i <= 2100; i++) {
            var anio = {
                codAnio: i,
                descAnio: "" + i
            };
            this.anios.push(anio);
        }
    };
    DocumentosSinFolioComponent.prototype.buscar = function () {
        this.cargador.show();
        this.Anio = this.forma.controls.anio.value;
        this.Mes = this.forma.controls.mes.value;
        var fecha = this.Anio + this.Mes;
        // this.request.nrutoperador = 0;
        // this.forma.controls.nRutOperador.setValue(Number(this.user.nrutoperador));
        this.request.periodo = fecha;
        console.log("this.request", this.request);
        this.resumenDoctosSinFolio();
    };
    DocumentosSinFolioComponent.prototype.resumenDoctosSinFolio = function () {
        var _this = this;
        this.reportesService.getResumenDoctosSinFolio(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            if (data.length === 0 && data.error.codError === 0) {
                swal('Atención', 'No se encontraron resultados', 'info');
            }
            else {
                if (data === null) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
                else {
                    console.log(data);
                }
            }
            if (data.error.codError !== 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    DocumentosSinFolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documentossinfolio',
            template: __webpack_require__(/*! ./documentosSinFolio.component.html */ "./src/app/routes/reportes/documentosSinFolio/documentosSinFolio.component.html")
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_2__["ReportesService"]])
    ], DocumentosSinFolioComponent);
    return DocumentosSinFolioComponent;
}());



/***/ }),

/***/ "./src/app/routes/reportes/efectividadFuerzaDeVentas/efectividadFuerzaDeVentas.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/routes/reportes/efectividadFuerzaDeVentas/efectividadFuerzaDeVentas.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n      <h4>Reporte Efectividad de Fuerza de Ventas</h4>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n              <div class=\"card\" style=\"-webkit-box-shadow: 1px 1px 5px 1px #000000; box-shadow: 1px 1px 5px 1px #000000;\">\r\n                  <div class=\"card-body\" style=\"padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;\">\r\n                      <div class=\"card-text\">\r\n                          <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                              <div class=\"form-row col-md-12\">\r\n                                  <div class=\"col-sm-6 form-group\">\r\n                                      <label class=\"col-sm-3 control-label\">Operador: </label>\r\n                                      <div class=\"col-sm-7\" style=\" padding-right: 0px;\">\r\n                                          <input formControlName=\"ope_snombre\" name=\"ope_snombre\" class=\"form-control\" type=\"text\" />\r\n                                      </div>\r\n                                      <div class=\"col-sm-2\">\r\n                                          <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalOperadores()\">\r\n                                              <em class=\"icon-magnifier\"></em>\r\n                                          </button>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"form-row col-md-12\">\r\n                                <div class=\"col-sm-6 form-group\">\r\n                                    <label class=\"col-sm-3 control-label\">Relacion Comercial: </label>\r\n                                    <div class=\"col-sm-2\" style=\" padding-right: 0px;\">\r\n                                      <input formControlName=\"rel_scodrelacioncomercial\" name=\"rel_scodrelacioncomercial\" class=\"form-control\" type=\"text\" />\r\n                                    </div>                                    \r\n                                    <div class=\"col-sm-5\" style=\" padding-right: 0px;\">\r\n                                        <input formControlName=\"rel_sdescripcionrelacioncomerc\" name=\"rel_sdescripcionrelacioncomerc\" class=\"form-control\" type=\"text\" />\r\n                                    </div>\r\n                                    <div class=\"col-sm-2\">\r\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalRelacionesComerciales()\">\r\n                                            <em class=\"icon-magnifier\"></em>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                             </div>                              \r\n                              <div class=\"form-row col-md-12\">\r\n                                  <div class=\"form-group col-sm-6\">\r\n                                      <label class=\"col-sm-3 control-label\">Mes: </label>\r\n                                      <div class=\"col-sm-9\">\r\n                                          <select class=\"form-control pv-0\" formControlName=\"mes\" name=\"mes\">\r\n                                              <option *ngFor=\"let mes of meses\" [ngValue]=\"mes.codMes\">{{mes.descMes}}</option>\r\n                                          </select>\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"form-group col-sm-6\">\r\n                                      <label class=\"col-sm-3 control-label\">Año: </label>\r\n                                      <div class=\"col-sm-9\">\r\n                                          <select class=\"form-control pv-0\" formControlName=\"anio\" name=\"anio\">\r\n                                              <option *ngFor=\"let anio of anios\" [ngValue]=\"anio.codAnio\">{{anio.descAnio}}</option>\r\n                                          </select>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </form>\r\n\r\n                          <div class=\"row\">\r\n                              <div class=\"col-md-offset-5 col-sm-6\">\r\n                                  <button class=\"btn btn-oval btn-sm\" (click)=\"generar()\">Generar</button>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/reportes/efectividadFuerzaDeVentas/efectividadFuerzaDeVentas.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/routes/reportes/efectividadFuerzaDeVentas/efectividadFuerzaDeVentas.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EfectividadFuerzaDeVentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EfectividadFuerzaDeVentasComponent", function() { return EfectividadFuerzaDeVentasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/consultaService/reportes.service */ "./src/app/core/consultaService/reportes.service.ts");
/* harmony import */ var _core_excel_excelREFDV_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/excel/excelREFDV.service */ "./src/app/core/excel/excelREFDV.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _routes_commonPopUp_operadoresPopUp_operadoresPopUp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../routes/commonPopUp/operadoresPopUp/operadoresPopUp.component */ "./src/app/routes/commonPopUp/operadoresPopUp/operadoresPopUp.component.ts");
/* harmony import */ var _routes_commonPopUp_relacionesComercialesPopUp_relacionesComercialesPopUp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../routes/commonPopUp/relacionesComercialesPopUp/relacionesComercialesPopUp.component */ "./src/app/routes/commonPopUp/relacionesComercialesPopUp/relacionesComercialesPopUp.component.ts");
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
var EfectividadFuerzaDeVentasComponent = /** @class */ (function () {
    function EfectividadFuerzaDeVentasComponent(authService, setearDatos, usuariosService, reportesService, excelService, utilService, cargador, modalService) {
        this.authService = authService;
        this.setearDatos = setearDatos;
        this.usuariosService = usuariosService;
        this.reportesService = reportesService;
        this.excelService = excelService;
        this.utilService = utilService;
        this.cargador = cargador;
        this.modalService = modalService;
        this.fechaActual = new Date();
        this.request = {};
        this.operadores = [];
        this.user = {};
        this.meses = [
            { codMes: "01", descMes: "Enero" },
            { codMes: "02", descMes: "Febrero" },
            { codMes: "03", descMes: "Marzo" },
            { codMes: "04", descMes: "Abril" },
            { codMes: "05", descMes: "Mayo" },
            { codMes: "06", descMes: "Junio" },
            { codMes: "07", descMes: "Julio" },
            { codMes: "08", descMes: "Agosto" },
            { codMes: "09", descMes: "Septiembre" },
            { codMes: "10", descMes: "Octubre" },
            { codMes: "11", descMes: "Noviembre" },
            { codMes: "12", descMes: "Diciembre" }
        ];
        this.anios = [];
        this.efectividades = {};
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nRutOperador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ope_snombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            mes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            anio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            rel_scodrelacioncomercial: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            rel_sdescripcionrelacioncomerc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    EfectividadFuerzaDeVentasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subData = this.setearDatos.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.subData2 = this.usuariosService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.user = this.authService.getDatosUser();
        this.setGenerar();
    };
    EfectividadFuerzaDeVentasComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
        if (this.subData2 !== undefined) {
            this.subData2.unsubscribe();
        }
    };
    EfectividadFuerzaDeVentasComponent.prototype.setGenerar = function () {
        this.cargaComboAnios();
        this.forma.controls.nRutOperador.setValue(Number(this.user.nrutoperador));
        this.request.nRutOperador = Number(this.user.nrutoperador);
        this.forma.controls.mes.setValue(this.dateToStringMonthFormat(this.fechaActual));
        this.forma.controls.anio.setValue(this.fechaActual.getFullYear());
        this.forma.controls.rel_scodrelacioncomercial.setValue("");
        this.forma.controls.rel_sdescripcionrelacioncomerc.setValue("(Todas)");
        this.operadorComercialDefault();
    };
    EfectividadFuerzaDeVentasComponent.prototype.cargaComboAnios = function () {
        for (var i = 1900; i <= 2100; i++) {
            var anio = {
                codAnio: i,
                descAnio: "" + i
            };
            this.anios.push(anio);
        }
    };
    EfectividadFuerzaDeVentasComponent.prototype.operadorComercialDefault = function () {
        var _this = this;
        this.usuariosService.getOperadoresUsuarios(this.request).subscribe(function (data) {
            _this.cargador.hide();
            if (data.operadores.length === 0 && data.error.codError === 0) {
                swal("Atención", "No se encontraron resultados", "info");
            }
            else {
                if (data.operadores === null) {
                    swal("Atención", "Ha ocurrido un error inesperado!", "error");
                }
                else {
                    _this.forma.controls.nRutOperador.setValue(data.operadores[0].ope_nrutoperador);
                    _this.forma.controls.ope_snombre.setValue(data.operadores[0].ope_snombrefantasia);
                }
            }
            if (data.error.codError !== 0) {
                swal("Atención", "Ha ocurrido un error inesperado!", "error");
            }
        }, function (error) {
            _this.cargador.hide();
            swal("Atención", "Ha ocurrido un error inesperado!", "error");
        });
    };
    EfectividadFuerzaDeVentasComponent.prototype.openModalOperadores = function () {
        this.origen = "operadores";
        var initialState = {
            titulo: "Operadores",
            origen: "operadores",
            busquedaCompleta: true
        };
        this.operadoresUsuarioModal = this.modalService.show(_routes_commonPopUp_operadoresPopUp_operadoresPopUp_component__WEBPACK_IMPORTED_MODULE_9__["OperadoresPopUpComponent"], { initialState: initialState, backdrop: "static", keyboard: false });
    };
    EfectividadFuerzaDeVentasComponent.prototype.openModalRelacionesComerciales = function () {
        this.origen = "relacion";
        var initialState = {
            titulo: "Relaciones Comerciales",
            origen: "relacion"
        };
        this.relacionesComercialesModal = this.modalService.show(_routes_commonPopUp_relacionesComercialesPopUp_relacionesComercialesPopUp_component__WEBPACK_IMPORTED_MODULE_10__["RelacionesComercialesPopUpComponent"], { initialState: initialState, backdrop: "static", keyboard: false });
    };
    EfectividadFuerzaDeVentasComponent.prototype.setData = function (resData) {
        if (resData !== 0) {
            switch (this.origen) {
                case "operadores": {
                    this.forma.controls.nRutOperador.setValue(resData.ope_nrutoperador);
                    this.forma.controls.ope_snombre.setValue(resData.ope_snombre);
                    break;
                }
                case "relacion": {
                    this.forma.controls.rel_scodrelacioncomercial.setValue(resData.rel_scodrelacioncomercial);
                    this.forma.controls.rel_sdescripcionrelacioncomerc.setValue(resData.rel_sdescripcionrelacioncomerc);
                    break;
                }
            }
        }
    };
    EfectividadFuerzaDeVentasComponent.prototype.generar = function () {
        this.request = {};
        this.cargador.show();
        this.Anio = this.forma.controls.anio.value;
        this.Mes = this.forma.controls.mes.value;
        this.fecha = this.Anio + this.Mes;
        this.periodo = this.meses[Number(this.Mes) - 1].descMes + " - " + this.Anio;
        this.request.nRutOperador = this.forma.controls.nRutOperador.value;
        this.request.sCodRelacionComercial = this.forma.controls.rel_scodrelacioncomercial.value;
        if (this.request.nRutOperador === 0) {
            this.request.sCodReporte = "OPERA";
        }
        else {
            this.request.sCodReporte = "TERRI";
        }
        this.request.sPeriodo = this.fecha;
        this.buscarEfectividades();
    };
    EfectividadFuerzaDeVentasComponent.prototype.buscarEfectividades = function () {
        var _this = this;
        this.reportesService.getRptEfectividadFuerzaVentas(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            if (data.efectividades.length === 0 && data.error.codError === 0) {
                swal('Atención', 'No se encontraron resultados', 'info');
            }
            else {
                if (data.efectividades === null) {
                    swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                }
                else {
                    _this.generateExcel(data.efectividades);
                }
            }
            if (data.error.codError !== 0) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
            }
        }, function (error) {
            _this.cargador.hide();
            swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
        });
    };
    EfectividadFuerzaDeVentasComponent.prototype.generateExcel = function (data) {
        this.efectividades = {};
        var distribuidores = [];
        // ! Generacion del encabezado
        var unique = function (value, index, self) {
            return self.indexOf(value) === index;
        };
        if (this.request.sCodReporte === "OPERA") {
            for (var i in data) {
                distribuidores.push(data[i].rit_nrutoperador);
            }
        }
        else if (this.request.sCodReporte === "TERRI") {
            for (var i in data) {
                distribuidores.push(data[i].descripcion);
            }
        }
        this.uniqueDistribuidores = distribuidores.filter(unique);
        var headerExcel = ["", ""];
        this.uniqueDistribuidores.forEach(function (e) {
            headerExcel.push(e);
        });
        headerExcel.push("TOTAL ");
        // ! Generacion del contenedor intermedio de data
        for (var i = 1; i <= this.utilService.lastDayOfMonth(this.Mes); i++) {
            var fechaString = this.utilService.dateStringServiceToLocalStringFormat(this.fecha + (i < 10 ? "0" + i : i));
            var diaDeLaSemana = this.utilService.dayOfWeek(this.fecha + (i < 10 ? "0" + i : i));
            var efectividad = {
                dia: diaDeLaSemana + "   " + fechaString,
                Distribuidores: []
            };
            this.efectividades[i] = efectividad;
            for (var j in this.uniqueDistribuidores) {
                var distribuidor_1 = {
                    distribuidor: this.uniqueDistribuidores[j],
                    IPT: 0,
                    "Pedido IPT": 0,
                    "% Efectividad": 0,
                    Entrega: 0,
                    "% Efec. entrega": 0,
                    "Fuera de Ruta": 0,
                    "% Fuera de Ruta": 0
                };
                this.efectividades[i]["Distribuidores"].push(distribuidor_1);
            }
        }
        for (var i in data) {
            var key = Number(data[i].rit_dfechaproceso);
            var fueraDeRuta = 0;
            if (data[i].cantidad_visita !== 0) {
                fueraDeRuta =
                    (data[i].cantidad_rfr /
                        (data[i].cantidad_visita + data[i].cantidad_rfr)) *
                        100;
            }
            var objIndex = 0;
            if (this.request.sCodReporte === "OPERA") {
                objIndex = this.efectividades[key]["Distribuidores"].findIndex(function (obj) { return obj.distribuidor == data[i].rit_nrutoperador; });
            }
            else if (this.request.sCodReporte === "TERRI") {
                objIndex = this.efectividades[key]["Distribuidores"].findIndex(function (obj) { return obj.distribuidor == data[i].descripcion; });
            }
            this.efectividades[key]["Distribuidores"][objIndex]["IPT"] = data[i].cantidad_ipt;
            this.efectividades[key]["Distribuidores"][objIndex]["Pedido IPT"] = data[i].cantidad_visita;
            this.efectividades[key]["Distribuidores"][objIndex]["% Efectividad"] = data[i].porc_visita;
            this.efectividades[key]["Distribuidores"][objIndex]["Entrega"] = data[i].cantidad_entrega;
            this.efectividades[key]["Distribuidores"][objIndex]["% Efec. entrega"] = data[i].porc_entrega;
            this.efectividades[key]["Distribuidores"][objIndex]["Fuera de Ruta"] = data[i].cantidad_rfr;
            this.efectividades[key]["Distribuidores"][objIndex]["% Fuera de Ruta"] = fueraDeRuta;
        }
        // ! Generacion del contenedor intermedio, secundario de data
        this.distribuidores = {};
        for (var i in data) {
            var dt = void 0;
            if (this.request.sCodReporte === "OPERA") {
                dt = data[i].rit_nrutoperador;
            }
            else if (this.request.sCodReporte === "TERRI") {
                dt = data[i].descripcion;
            }
            if (!this.distribuidores.hasOwnProperty(dt)) {
                var distribuidor_2 = {
                    Dia: []
                };
                this.distribuidores[dt] = distribuidor_2;
            }
            var fueraDeRuta = 0;
            if (data[i].cantidad_visita !== 0) {
                fueraDeRuta =
                    (data[i].cantidad_rfr /
                        (data[i].cantidad_visita + data[i].cantidad_rfr)) *
                        100;
            }
            var distribuidor_3 = {
                IPT: data[i].cantidad_ipt,
                "Pedido IPT": data[i].cantidad_visita,
                "% Efectividad": data[i].porc_visita,
                Entrega: data[i].cantidad_entrega,
                "% Efec. entrega": data[i].porc_entrega,
                "Fuera de Ruta": data[i].cantidad_rfr,
                "% Fuera de Ruta": fueraDeRuta
            };
            this.distribuidores[dt]["Dia"].push(distribuidor_3);
        }
        for (var i in this.distribuidores) {
            var totalIPT_1 = 0;
            var totalPedidoIPT_1 = 0;
            var totalPorcentajeEfectividad_1 = 0;
            var totalEntrega_1 = 0;
            var totalPorcentajeEfecEntrega = 0;
            var totalFueradeRuta = 0;
            var totalPorcentajeFueradeRuta = 0;
            for (var j in this.distribuidores[i]["Dia"]) {
                totalIPT_1 = totalIPT_1 + this.distribuidores[i]["Dia"][j]["IPT"];
                totalPedidoIPT_1 = totalPedidoIPT_1 + this.distribuidores[i]["Dia"][j]["Pedido IPT"];
                totalEntrega_1 = totalEntrega_1 + this.distribuidores[i]["Dia"][j]["Entrega"];
                totalFueradeRuta = totalFueradeRuta + this.distribuidores[i]["Dia"][j]["Fuera de Ruta"];
            }
            if (totalIPT_1 !== 0) {
                totalPorcentajeEfectividad_1 = (totalPedidoIPT_1 / totalIPT_1) * 100;
            }
            if (totalIPT_1 !== 0) {
                totalPorcentajeEfecEntrega = (totalEntrega_1 / totalIPT_1) * 100;
            }
            if ((totalPedidoIPT_1 + totalFueradeRuta) !== 0) {
                totalPorcentajeFueradeRuta =
                    (totalFueradeRuta / (totalPedidoIPT_1 + totalFueradeRuta)) * 100;
            }
            this.distribuidores[i].totalIPT = totalIPT_1;
            this.distribuidores[i].totalPedidoIPT = totalPedidoIPT_1;
            this.distribuidores[i].totalPorcentajeEfectividad = this.numberDecimalFixed(totalPorcentajeEfectividad_1);
            this.distribuidores[i].totalEntrega = totalEntrega_1;
            this.distribuidores[i].totalPorcentajeEfecEntrega = this.numberDecimalFixed(totalPorcentajeEfecEntrega);
            this.distribuidores[i].totalFueradeRuta = totalFueradeRuta;
            this.distribuidores[i].totalPorcentajeFueradeRuta = this.numberDecimalFixed(totalPorcentajeFueradeRuta);
        }
        // ! Generacion de las filas del excel
        var dataExcel = [];
        var totalTodosIPT = 0;
        var totalTodosPedidoIPT = 0;
        // let totalTodosEfectividad = 0;
        var totalTodosEntrega = 0;
        var totalTodosEfecEntrega = 0;
        var totalTodosFueraDeRuta = 0;
        var totalTodosPorcentajeFueraDeRuta = 0;
        for (var i in this.efectividades) {
            var rowFecha = [];
            rowFecha[0] = this.efectividades[i]["dia"];
            // ! Push de la linea cabecera del dia
            dataExcel.push(rowFecha);
            // ! Generacion de las lineas de efectividad
            var rowEfectividad = [];
            rowEfectividad[0] = null;
            rowEfectividad[1] = "IPT";
            var totalIPT = 0;
            for (var j = 0; j < this.efectividades[i]["Distribuidores"].length; j++) {
                rowEfectividad[2 + j] = this.efectividades[i]["Distribuidores"][j]["IPT"];
                totalIPT = totalIPT + this.efectividades[i]["Distribuidores"][j]["IPT"];
            }
            totalTodosIPT = totalTodosIPT + totalIPT;
            rowEfectividad.push(totalIPT);
            dataExcel.push(rowEfectividad);
            // !___________________________
            rowEfectividad = [];
            rowEfectividad[0] = null;
            rowEfectividad[1] = "Pedido IPT";
            var totalPedidoIPT = 0;
            for (var j = 0; j < this.efectividades[i]["Distribuidores"].length; j++) {
                rowEfectividad[2 + j] = this.efectividades[i]["Distribuidores"][j]["Pedido IPT"];
                totalPedidoIPT = totalPedidoIPT + this.efectividades[i]["Distribuidores"][j]["Pedido IPT"];
            }
            totalTodosPedidoIPT = totalTodosPedidoIPT + totalPedidoIPT;
            rowEfectividad.push(totalPedidoIPT);
            dataExcel.push(rowEfectividad);
            // !___________________________
            rowEfectividad = [];
            rowEfectividad[0] = null;
            rowEfectividad[1] = "% Efectividad";
            var totalPorcentajeEfectividad = 0;
            if (totalIPT !== 0) {
                totalPorcentajeEfectividad = (totalPedidoIPT / totalIPT) * 100;
            }
            for (var j = 0; j < this.efectividades[i]["Distribuidores"].length; j++) {
                rowEfectividad[2 + j] = this.numberDecimalFixed(this.efectividades[i]["Distribuidores"][j]["% Efectividad"]);
            }
            rowEfectividad.push(this.numberDecimalFixed(totalPorcentajeEfectividad));
            dataExcel.push(rowEfectividad);
            // !___________________________
            rowEfectividad = [];
            rowEfectividad[0] = null;
            rowEfectividad[1] = "Entrega";
            var totalEntrega = 0;
            for (var j = 0; j < this.efectividades[i]["Distribuidores"].length; j++) {
                rowEfectividad[2 + j] = this.efectividades[i]["Distribuidores"][j]["Entrega"];
                totalEntrega = totalEntrega + this.efectividades[i]["Distribuidores"][j]["Entrega"];
            }
            totalTodosEntrega = totalTodosEntrega + totalEntrega;
            rowEfectividad.push(totalEntrega);
            dataExcel.push(rowEfectividad);
            // !___________________________
            rowEfectividad = [];
            rowEfectividad[0] = null;
            rowEfectividad[1] = "% Efec. entrega";
            var totalPorcentajeEntrega = 0;
            if (totalIPT !== 0) {
                totalPorcentajeEntrega = (totalEntrega / totalIPT) * 100;
            }
            for (var j = 0; j < this.efectividades[i]["Distribuidores"].length; j++) {
                rowEfectividad[2 + j] = this.numberDecimalFixed(this.efectividades[i]["Distribuidores"][j]["% Efec. entrega"]);
            }
            rowEfectividad.push(this.numberDecimalFixed(totalPorcentajeEntrega));
            dataExcel.push(rowEfectividad);
            // !___________________________
            rowEfectividad = [];
            rowEfectividad[0] = null;
            rowEfectividad[1] = "Fuera de Ruta";
            var totalFueraDeRuta = 0;
            for (var j = 0; j < this.efectividades[i]["Distribuidores"].length; j++) {
                rowEfectividad[2 + j] = this.efectividades[i]["Distribuidores"][j]["Fuera de Ruta"];
                totalFueraDeRuta = totalFueraDeRuta + this.efectividades[i]["Distribuidores"][j]["Fuera de Ruta"];
            }
            totalTodosFueraDeRuta = totalTodosFueraDeRuta + totalFueraDeRuta;
            rowEfectividad.push(totalFueraDeRuta);
            dataExcel.push(rowEfectividad);
            // !___________________________
            rowEfectividad = [];
            rowEfectividad[0] = null;
            rowEfectividad[1] = "% Fuera de Ruta";
            var totalPorcentajeFueraDeRuta = 0;
            if (totalPedidoIPT !== 0) {
                totalPorcentajeFueraDeRuta =
                    (totalFueraDeRuta / (totalFueraDeRuta + totalPedidoIPT)) * 100;
            }
            for (var j = 0; j < this.efectividades[i]["Distribuidores"].length; j++) {
                rowEfectividad[2 + j] = this.numberDecimalFixed(this.efectividades[i]["Distribuidores"][j]["% Fuera de Ruta"]);
            }
            rowEfectividad.push(this.numberDecimalFixed(totalPorcentajeFueraDeRuta));
            dataExcel.push(rowEfectividad);
            // !__________________________________________________
        }
        var rowVacia = [];
        dataExcel.push(rowVacia);
        // !___________________________
        var rowTotal = [];
        rowTotal[0] = "     TOTAL";
        rowTotal[1] = "IPT";
        for (var i = 0; i < this.uniqueDistribuidores.length; i++) {
            rowTotal[2 + i] = this.distribuidores[this.uniqueDistribuidores[i]]["totalIPT"];
        }
        rowTotal.push(totalTodosIPT);
        dataExcel.push(rowTotal);
        // !___________________________
        rowTotal = [];
        rowTotal[0] = "     ";
        rowTotal[1] = "Pedido IPT";
        for (var i = 0; i < this.uniqueDistribuidores.length; i++) {
            rowTotal[2 + i] = this.distribuidores[this.uniqueDistribuidores[i]]["totalPedidoIPT"];
        }
        rowTotal.push(totalTodosPedidoIPT);
        dataExcel.push(rowTotal);
        // !___________________________
        rowTotal = [];
        rowTotal[0] = "     ";
        rowTotal[1] = "% Efectividad";
        var totalTodosPorcentajeEfectividad = 0;
        if (totalTodosIPT !== 0) {
            totalTodosPorcentajeEfectividad = (totalTodosPedidoIPT / totalTodosIPT) * 100;
        }
        for (var i = 0; i < this.uniqueDistribuidores.length; i++) {
            rowTotal[2 + i] = this.distribuidores[this.uniqueDistribuidores[i]]["totalPorcentajeEfectividad"];
        }
        rowTotal.push(this.numberDecimalFixed(totalTodosPorcentajeEfectividad));
        dataExcel.push(rowTotal);
        // !___________________________
        rowTotal = [];
        rowTotal[0] = "     ";
        rowTotal[1] = "Entrega";
        for (var i = 0; i < this.uniqueDistribuidores.length; i++) {
            rowTotal[2 + i] = this.distribuidores[this.uniqueDistribuidores[i]]["totalEntrega"];
        }
        rowTotal.push(totalTodosEntrega);
        dataExcel.push(rowTotal);
        // !___________________________
        rowTotal = [];
        rowTotal[0] = "     ";
        rowTotal[1] = "% Efec. entrega";
        var totalTodosPorcentajeEfecEntrega = 0;
        if (totalIPT !== 0) {
            totalTodosPorcentajeEfecEntrega = (totalTodosEntrega / totalTodosIPT) * 100;
        }
        for (var i = 0; i < this.uniqueDistribuidores.length; i++) {
            rowTotal[2 + i] = this.distribuidores[this.uniqueDistribuidores[i]]["totalPorcentajeEfecEntrega"];
        }
        rowTotal.push(this.numberDecimalFixed(totalTodosPorcentajeEfecEntrega));
        dataExcel.push(rowTotal);
        // !___________________________
        rowTotal = [];
        rowTotal[0] = "     ";
        rowTotal[1] = "Fuera de Ruta";
        for (var i = 0; i < this.uniqueDistribuidores.length; i++) {
            rowTotal[2 + i] = this.distribuidores[this.uniqueDistribuidores[i]]["totalFueradeRuta"];
        }
        rowTotal.push(totalTodosFueraDeRuta);
        dataExcel.push(rowTotal);
        // !___________________________
        rowTotal = [];
        rowTotal[0] = "     ";
        rowTotal[1] = "% Fuera de Ruta";
        for (var i = 0; i < this.uniqueDistribuidores.length; i++) {
            rowTotal[2 + i] = this.distribuidores[this.uniqueDistribuidores[i]]["totalPorcentajeFueradeRuta"];
        }
        if (totalTodosPedidoIPT !== 0) {
            totalTodosPorcentajeFueraDeRuta =
                (totalTodosFueraDeRuta /
                    (totalTodosFueraDeRuta + totalTodosPedidoIPT)) *
                    100;
        }
        rowTotal.push(this.numberDecimalFixed(totalTodosPorcentajeFueraDeRuta));
        dataExcel.push(rowTotal);
        var titulo = "Efec. Fuerza de Ventas " + this.utilService.dateToStringDateTitleExcelFormat(new Date());
        var fileName = "Reporte Efectividad Fuerza de Ventas " + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        var distribuidor = this.forma.controls.ope_snombre.value;
        var lineaDeNegocio = this.forma.controls.rel_sdescripcionrelacioncomerc.value;
        this.excelService.generateExcel(titulo, headerExcel, dataExcel, fileName, distribuidor, this.periodo, lineaDeNegocio);
        this.cargador.hide();
        swal("Perfecto", "Su reporte ha sido generado con exito!", "success");
    };
    // Funciones Auxiliares
    EfectividadFuerzaDeVentasComponent.prototype.numberDecimalFixed = function (num) {
        return String((Math.round(num * 10) / 10).toFixed(2)) + "%";
    };
    // Thu Jul 18 2019 12:08:08 GMT-0400 (hora estándar de Chile) => 07
    EfectividadFuerzaDeVentasComponent.prototype.dateToStringMonthFormat = function (date) {
        var mes = date.getMonth() + 1;
        var mesStr = mes < 10 ? "0" + mes : mes;
        var fechaString = "" + mesStr;
        return fechaString;
    };
    EfectividadFuerzaDeVentasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-efectividadfuerzadeventas",
            template: __webpack_require__(/*! ./efectividadFuerzaDeVentas.component.html */ "./src/app/routes/reportes/efectividadFuerzaDeVentas/efectividadFuerzaDeVentas.component.html")
        }),
        __metadata("design:paramtypes", [_core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_5__["ReportesService"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_4__["AdministracionOperativaService"],
            _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_5__["ReportesService"],
            _core_excel_excelREFDV_service__WEBPACK_IMPORTED_MODULE_6__["ExcelREFDVService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]])
    ], EfectividadFuerzaDeVentasComponent);
    return EfectividadFuerzaDeVentasComponent;
}());



/***/ }),

/***/ "./src/app/routes/reportes/generarReportes/generarReporte.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/reportes/generarReportes/generarReporte.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4> Reportes</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Tipo reporte</label>\r\n                    <div class=\"col-sm-2\">\r\n                        <select class=\"form-control pv-0\" formControlName=\"tipoReporte\" name=\"tipoReporte\">\r\n\t\t\t\t\t\t\t<!-- <option *ngFor=\"let item of tipoReportes\" [ngValue]=\"userEstado.tipoCliente\">{{userEstado.descTipo}}</option> -->\r\n\t\t\t\t\t\t</select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Fecha</label>\r\n                    <div class=\"col-sm-3\">\r\n                        <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fecha\" name=\"fecha\" type=\"date\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Código Catergoria</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input formControlName=\"codCategoria\" name=\"codCategoria\" class=\"form-control\" (change)=\"validaCategoria()\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"descCategoria\" name=\"descCategoria\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCategorias()\">\r\n\t\t\t\t\t\t\t\t<em class=\"icon-magnifier\"></em>\r\n\t\t\t\t\t\t\t</button>\r\n                        </div>\r\n                    </div>\r\n                    <label class=\"col-sm-1 control-label text-right\">Categor&iacute;a</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input formControlName=\"codCategoria\" name=\"codCategoria\" class=\"form-control\" (change)=\"validaCategoria()\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input formControlName=\"descCategoria\" name=\"descCategoria\" class=\"form-control\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCategorias()\">\r\n\t\t\t\t\t\t\t\t<em class=\"icon-magnifier\"></em>\r\n\t\t\t\t\t\t\t</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"col-sm-1 control-label\">Territorio</label>\r\n                    <div class=\"col-sm-1 pr-0\">\r\n                        <input formControlName=\"codTerritorio\" name=\"codTerritorio\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <input formControlName=\"territorio\" name=\"territorio\" class=\"form-control\" type=\"text\" />\r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                        <button type=\"button\" class=\"btn btn-primary\">\r\n\t\t\t\t\t\t\t<em class=\"icon-magnifier\"></em>\r\n\t\t\t\t\t\t</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"row pull-left mb-4\">\r\n            <div class=\"col-sm-4\">\r\n                <button class=\"btn btn-oval btn-sm\" (click)=\"generateExcel()\" [disabled]='!exportar'>Generar</button>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <!-- <div class=\"row\">\r\n\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"> </th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"> </th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"> </th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"> </th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"> </th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"> </th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"> </th>\r\n\t\t\t\t\t\t\t\t<th class=\"col\">Disponibles</th>\r\n\t\t\t\t\t\t\t\t<th class=\"col\"></th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">Reservado</th>\r\n\t\t\t\t\t\t\t\t<th class=\"col\"></th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">Mal Estado</th>\r\n\t\t\t\t\t\t\t\t<th class=\"col\"></th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">Total</th>\r\n\t\t\t\t\t\t\t\t<th class=\"col\"></th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">LN</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">CT</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">AG</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">PB</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">Cod. Articulo</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">Descripcion</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">Medida</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">u.v - Frac</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"></th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">u.v - Frac.</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"></th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">u.v - Frac.</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"></th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">u.v - Frac.</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\"></th>\r\n\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr\r\n\t\t\t\t\t\t\t\t*ngFor=\"let articulo of stockArticulos \t| paginate: {itemsPerPage: 7, currentPage: pageActual};\">\r\n\t\t\t\t\t\t\t\t<td>{{articulo.jli_sdeslinea}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{articulo.jca_sdescategoria}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{articulo.jag_sdesagrupacion}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{articulo.jpb_sdesproductobase}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{articulo.art_scodformato}} - {{articulo.art_scodvariedad}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{articulo.art_sdescripcion }}</td>\r\n\t\t\t\t\t\t\t\t<td>{{articulo.art_smedida}}</td>\r\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{articulo.uventadisponibles}} - {{articulo.fraccionesdisponibles}} </td>\r\n\t\t\t\t\t\t\t\t<td class=\"text-center\"></td>\r\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{articulo.uventareserva}} - {{articulo.fraccionesreserva}}\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td class=\"text-center\"></td>\r\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{articulo.uvtamalestado}} - {{articulo.fraccionesvtamalestado}}\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td class=\"text-center\"></td>\r\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{articulo.uvtatotales}} - {{articulo.fraccionestotales}} </td>\r\n\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<div class=\"text-right\">\r\n\t\t\t\t\t\t<pagination-controls (pageChange)=\"pageActual = $event\" previousLabel=\"Anterior\"\r\n\t\t\t\t\t\t\tnextLabel=\"Siguiente\"></pagination-controls>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/reportes/generarReportes/generarReporte.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/routes/reportes/generarReportes/generarReporte.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GenerarReporteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerarReporteComponent", function() { return GenerarReporteComponent; });
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
var GenerarReporteComponent = /** @class */ (function () {
    function GenerarReporteComponent(existenciasService, cargador, authService, excelService, utilService, consultasService, modalService, articuloService, administracionOperativaServiceDatos) {
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
    GenerarReporteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.getDatosUser();
        // console.log('user Stock ' + this.user.nrutoperador);
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14___default.a);
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
    };
    GenerarReporteComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
    };
    GenerarReporteComponent.prototype.validaLinea = function () {
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
    GenerarReporteComponent.prototype.validaCategoria = function () {
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
    GenerarReporteComponent.prototype.validaAgrupacion = function () {
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
    GenerarReporteComponent.prototype.validaProdBase = function () {
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
    GenerarReporteComponent.prototype.validaBodega = function () {
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
    GenerarReporteComponent.prototype.validaSucursal = function () {
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
    GenerarReporteComponent.prototype.openModalLineas = function () {
        this.origen = 'linea';
        var initialState = {
            titulo: 'Líneas',
            origen: 'linea'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_13__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    GenerarReporteComponent.prototype.openModalCategorias = function () {
        this.origen = 'categoria';
        var initialState = {
            titulo: 'Categorías',
            origen: 'categoria'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_13__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    GenerarReporteComponent.prototype.openModalAgrupacion = function () {
        this.origen = 'agrupacion';
        var initialState = {
            titulo: 'Agrupaciones',
            origen: 'agrupacion'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_13__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    GenerarReporteComponent.prototype.openModalProdBase = function () {
        this.origen = 'prodbase';
        var initialState = {
            titulo: 'Productos Base',
            origen: 'prodbase'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_13__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    GenerarReporteComponent.prototype.openModalSucursales = function () {
        console.log("entra al modal sucursal");
        this.origen = 'sucursales';
        var initialState = {
            titulo: 'Sucursales',
            origen: 'sucursales'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_sucursalesPopUp_sucursalesPopUp_component__WEBPACK_IMPORTED_MODULE_12__["SucursalesPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    GenerarReporteComponent.prototype.openModalBodega = function () {
        this.origen = 'bodega';
        var initialState = {
            titulo: 'Bodegas',
            origen: 'bodega'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_bodegaPopUp_bodegaPopUp_component__WEBPACK_IMPORTED_MODULE_15__["BodegaPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    GenerarReporteComponent.prototype.setData = function (resData) {
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
    GenerarReporteComponent.prototype.buscar = function ($event) {
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
    GenerarReporteComponent.prototype.generateExcel = function () {
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
    GenerarReporteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generarReporte',
            template: __webpack_require__(/*! ./generarReporte.component.html */ "./src/app/routes/reportes/generarReportes/generarReporte.component.html")
        }),
        __metadata("design:paramtypes", [_core_consultaService_existencias_service__WEBPACK_IMPORTED_MODULE_3__["ExistenciasService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"], _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_7__["ConsultasService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["BsModalService"],
            _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_8__["ArticuloService"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_9__["AdministracionOperativaService"]])
    ], GenerarReporteComponent);
    return GenerarReporteComponent;
}());



/***/ }),

/***/ "./src/app/routes/reportes/gestionComercial/gestionComercial.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/reportes/gestionComercial/gestionComercial.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4> Reportes</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <!-- Gestión Comercial -->\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\" style=\"-webkit-box-shadow: 1px 1px 5px 1px #000000; box-shadow: 1px 1px 5px 1px #000000;\">\r\n                    <div class=\"card-body\" style=\"padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;\">\r\n                        <h5 class=\"card-title\">Reporte Gestión Comercial</h5>\r\n                        <div class=\"card-text\">\r\n                            <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                                <div class=\"form-row col-md-12\">\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Fecha</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fecha\" name=\"fecha\" type=\"date\" (focusout)=\"actualizarFecha()\" />\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Tipo reporte</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <select class=\"form-control pv-0\" formControlName=\"tipoReporte\" name=\"tipoReporte\" (change)=\"seleccionoReporte()\" required >\r\n                                                \r\n                                                <option *ngFor=\"let item of tiposReportes\" [ngValue]=\"item.codReporte\">\r\n                                                    {{item.descReporte}}</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-row col-md-12\" [hidden]=\"ocultar\">\r\n                                    <div class=\"col-sm-6 form-group\">\r\n                                            <label class=\"col-sm-3 control-label\">Categor&iacute;a</label>                                                   \r\n                                            <div class=\"col-sm-3\">\r\n                                                <input formControlName=\"codCategoria\" name=\"codCategoria\" class=\"form-control\"(change)=\"validaCategoria()\" type=\"text\" />\r\n                                            </div>\r\n                                            <div class=\"col-sm-4\" style=\" padding-left: 0px; padding-right: 0px;\">\r\n                                                <input formControlName=\"descCategoria\" name=\"descCategoria\" class=\"form-control\"type=\"text\" />\r\n                                            </div>\r\n                                            <div class=\"col-sm-2\">\r\n                                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalCategorias()\"><em class=\"icon-magnifier\"></em></button>\r\n                                            </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6 form-group\">\r\n                                        <label class=\"col-sm-3 control-label\">Territorio</label>\r\n                                        <div class=\"col-sm-3\">\r\n                                            <input formControlName=\"codTerritorio\" name=\"codTerritorio\" class=\"form-control\"\r\n                                                type=\"text\" />\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\" style=\" padding-right: 0px;\">\r\n                                            <input formControlName=\"territorio\" name=\"territorio\" class=\"form-control\"type=\"text\" />\r\n                                        </div>\r\n                                        <div class=\"col-sm-2\">\r\n                                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalTerritoriosTodos()\">\r\n                                                <em class=\"icon-magnifier\"></em>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-offset-5 col-sm-6\">\r\n                                    <button class=\"btn btn-oval btn-sm\" (click)=\"generateExcelGestionComercial()\">Generar</button>\r\n                                </div>\r\n                            </div>                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <!-- Quiebres de Stock -->\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\" style=\"-webkit-box-shadow: 1px 1px 5px 1px #000000; box-shadow: 1px 1px 5px 1px #000000;\">\r\n                    <div class=\"card-body\" style=\"padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;\">\r\n                        <h5 class=\"card-title\">Reporte Quiebres de Stock</h5>\r\n                        <div class=\"card-text\">\r\n                            <form ngNativeValidate [formGroup]=\"forma2\" class=\"form-horizontal\">\r\n                                <div class=\"form-row col-md-12\">\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Fecha Desde </label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaDesde\" name=\"fechaDesde\" type=\"date\" (focusout)=\"actualizarFecha()\" />\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Fecha Hasta </label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaHasta\" name=\"fechaHasta\" type=\"date\" (focusout)=\"actualizarFecha()\" />\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Bodega</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <select class=\"form-control pv-0\" formControlName=\"ListaBodega\"\r\n                                                name=\"ListaBodega\" required>\r\n                                                <option value=\"\">(Totas)</option>\r\n                                                <option *ngFor=\"let item of ListaBodegas\" [ngValue]=\"item.bod_scodbodega\" >\r\n                                                    {{item.bod_sdescbodega}}</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-offset-5 col-sm-6\">\r\n                                    <button class=\"btn btn-oval btn-sm\" (click)=\"generateExcelQuiebresStock()\" >Generar</button>\r\n                                </div>\r\n                            </div>                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <!--  Efectividades -->\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\" style=\"-webkit-box-shadow: 1px 1px 5px 1px #000000; box-shadow: 1px 1px 5px 1px #000000;\">\r\n                    <div class=\"card-body\" style=\"padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;\">\r\n                        <h5 class=\"card-title\">Reporte Efectividades</h5>\r\n                        <div class=\"card-text\">\r\n                            <form ngNativeValidate [formGroup]=\"forma3\" class=\"form-horizontal\">\r\n                                <div class=\"form-row col-md-12\">\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Fecha Desde</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fechaDesde\" name=\"fechaDesde\" type=\"date\" (focusout)=\"actualizarFecha()\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-offset-5 col-sm-6\">\r\n                                    <button class=\"btn btn-oval btn-sm\" (click)=\"generateExcelEfectividades()\" >Generar</button>\r\n                                </div>\r\n                            </div>                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>        \r\n        <br>\r\n        <!--  Productos Pack-->\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\" style=\"-webkit-box-shadow: 1px 1px 5px 1px #000000; box-shadow: 1px 1px 5px 1px #000000;\">\r\n                    <div class=\"card-body\" style=\"padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;\">\r\n                        <h5 class=\"card-title\">Reporte Productos Pack</h5>\r\n                        <div class=\"card-text\">\r\n                            <form ngNativeValidate [formGroup]=\"forma4\" class=\"form-horizontal\">\r\n                                <div class=\"form-row col-md-12\">\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Mes</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <select class=\"form-control pv-0\" formControlName=\"Mes\"\r\n                                                name=\"Mes\"required>\r\n                                                \r\n                                                <option *ngFor=\"let item of Meses\" [ngValue]=\"item.cod\">\r\n                                                    {{item.desc}}</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Año</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <select class=\"form-control pv-0\" formControlName=\"Years\"\r\n                                                name=\"Years\">\r\n                                                <option value=\"\">(Todas)</option>\r\n                                                <option *ngFor=\"let item of Years\" [ngValue]=\"item\">\r\n                                                    {{item}}</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>                                    \r\n                                </div>\r\n                                <div class=\"form-row col-md-12\">\r\n                                    <div class=\"col-sm-6 form-group\">\r\n                                        <label class=\"col-sm-3 control-label\">Territorio</label>\r\n                                        <div class=\"col-sm-3\">\r\n                                            <input formControlName=\"codTerritorio\" name=\"codTerritorio\" class=\"form-control\"\r\n                                                type=\"text\" />\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\" style=\" padding-right: 0px;\">\r\n                                            <input formControlName=\"territorio\" name=\"territorio\" class=\"form-control\"\r\n                                                type=\"text\" />\r\n                                        </div>\r\n                                        <div class=\"col-sm-2\">\r\n                                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalTerritoriosTodos_2()\">\r\n                                                <em class=\"icon-magnifier\"></em>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-offset-5 col-sm-6\">\r\n                                    <button class=\"btn btn-oval btn-sm\" (click)=\"generateExcelProductosPack()\">Generar</button>\r\n                                </div>\r\n                            </div>                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>  \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/reportes/gestionComercial/gestionComercial.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/routes/reportes/gestionComercial/gestionComercial.component.ts ***!
  \********************************************************************************/
/*! exports provided: GestionComercialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionComercialComponent", function() { return GestionComercialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/consultaService/articulo.service */ "./src/app/core/consultaService/articulo.service.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../core/consultaService/reportes.service */ "./src/app/core/consultaService/reportes.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component */ "./src/app/routes/commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component.ts");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _commonPopUp_zonasTodasPopUp_zonasTodasPopUp_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../commonPopUp/zonasTodasPopUp/zonasTodasPopUp.component */ "./src/app/routes/commonPopUp/zonasTodasPopUp/zonasTodasPopUp.component.ts");
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
var GestionComercialComponent = /** @class */ (function () {
    function GestionComercialComponent(cargador, authService, excelService, utilService, consultasService, modalService, articuloService, ReportesService, administracionOperativaServiceDatos) {
        this.cargador = cargador;
        this.authService = authService;
        this.excelService = excelService;
        this.utilService = utilService;
        this.consultasService = consultasService;
        this.modalService = modalService;
        this.articuloService = articuloService;
        this.ReportesService = ReportesService;
        this.administracionOperativaServiceDatos = administracionOperativaServiceDatos;
        this.fechaActual = new Date();
        this.request = {};
        this.user = {};
        this.exportar = false;
        this.datos = [];
        this.origen = '';
        this.ocultar = true;
        this.tiposReportes = [
            { codReporte: 'REPAV', descReporte: 'Avance de Venta' },
            { codReporte: 'REPAVRE', descReporte: 'Avance de Venta Resumido' },
            { codReporte: 'REPAVPZ', descReporte: 'Avance de Venta por Zona' },
            { codReporte: 'REPPV', descReporte: 'Punto de Venta' },
            { codReporte: 'REPPVPS', descReporte: 'Punto de Venta por SKU' },
        ];
        this.ListaBodegas = [];
        this.Meses = [
            { cod: "01", desc: 'Enero' },
            { cod: "02", desc: 'Febrero' },
            { cod: "03", desc: 'Marzo' },
            { cod: "04", desc: 'Abril' },
            { cod: "05", desc: 'Mayo' },
            { cod: "06", desc: 'Junio' },
            { cod: "07", desc: 'Julio' },
            { cod: "08", desc: 'Agosto' },
            { cod: "09", desc: 'Septiembre' },
            { cod: "10", desc: 'Octubre' },
            { cod: "11", desc: 'Noviembre' },
            { cod: "12", desc: 'Diciembre' },
        ];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tipoReporte: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            codCategoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            descCategoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            territorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            codTerritorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.forma2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fechaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            fechaHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ListaBodega: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.forma3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fechaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.forma4 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Mes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Years: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            territorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            codTerritorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    GestionComercialComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13___default.a);
        this.user = this.authService.getDatosUser();
        this.request.nRutOperador = Number(this.user.nrutoperador);
        this.request.sCodBodega = "";
        this.request.sCodSucursal = JSON.parse(localStorage.getItem('SucursalUsuario')).sus_scodsucursal;
        this.request.sDescBodega = "";
        this.administracionOperativaServiceDatos.getBodega(this.request)
            .subscribe(function (data) {
            _this.request = {};
            _this.ListaBodegas = data.bodega;
        }),
            function (error) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                _this.ListaBodegas = [];
            };
        this.request = {};
        this.initData();
        this.subData = this.consultasService.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.subData2 = this.consultasService.datosGeo$.subscribe(function (resData) {
            _this.setTipo(resData);
        });
    };
    GestionComercialComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
        if (this.subData2 !== undefined) {
            this.subData2.unsubscribe();
        }
    };
    GestionComercialComponent.prototype.initData = function () {
        this.Years = ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020',
            '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'];
        this.forma.controls.fecha.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.forma2.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.forma2.controls.fechaHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.forma3.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        this.forma4.controls.Mes.setValue((this.fechaActual.getMonth() + 1).toString());
        this.forma4.controls.Years.setValue((this.fechaActual.getFullYear()).toString());
    };
    GestionComercialComponent.prototype.actualizarFecha = function () {
        if (this.forma.controls.fecha.value === '') {
            this.forma.controls.fecha.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
        if (!this.utilService.DateValidator(this.forma.controls.fecha.value)) {
            this.forma.controls.fecha.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
        if (this.forma2.controls.fechaDesde.value === '') {
            this.forma2.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
        if (!this.utilService.DateValidator(this.forma2.controls.fechaDesde.value)) {
            this.forma2.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
        if (this.forma2.controls.fechaHasta.value === '') {
            this.forma2.controls.fechaHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
        if (!this.utilService.DateValidator(this.forma2.controls.fechaHasta.value)) {
            this.forma2.controls.fechaHasta.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
        if (this.forma3.controls.fechaDesde.value === '') {
            this.forma3.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
        if (!this.utilService.DateValidator(this.forma3.controls.fechaDesde.value)) {
            this.forma3.controls.fechaDesde.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
    };
    GestionComercialComponent.prototype.setData = function (resData) {
        if (resData != 0) {
            switch (this.origen) {
                case 'categoria': {
                    this.forma.controls.codCategoria.setValue(resData.jca_scodcategoria);
                    this.forma.controls.descCategoria.setValue(resData.jca_sdescategoria);
                    break;
                }
            }
        }
    };
    GestionComercialComponent.prototype.setTipo = function (resData) {
        if (resData !== 0) {
            switch (this.origen) {
                case 'territorios': {
                    if (this.auxRepo) {
                        this.forma4.controls.codTerritorio.setValue(resData.ter_scodterritorio);
                        this.forma4.controls.territorio.setValue(resData.ter_sdesterritorio);
                        this.auxRepo = false;
                    }
                    else {
                        this.forma.controls.codTerritorio.setValue(resData.ter_scodterritorio);
                        this.forma.controls.territorio.setValue(resData.ter_sdesterritorio);
                    }
                    break;
                }
            }
        }
        $('body').removeClass('modal-open');
    };
    GestionComercialComponent.prototype.seleccionoReporte = function () {
        var aux = this.forma.controls.tipoReporte.value;
        if (aux === 'REPAV')
            this.ocultar = false;
        else
            this.ocultar = true;
    };
    GestionComercialComponent.prototype.validaCategoria = function () {
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
                _this.request = {};
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
    GestionComercialComponent.prototype.openModalCategorias = function () {
        this.origen = 'categoria';
        var initialState = {
            titulo: 'Categorías',
            origen: 'categoria'
        };
        this.bsModalRef = this.modalService.show(_commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_12__["BuscarArticuloPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    GestionComercialComponent.prototype.openModalTerritoriosTodos = function () {
        this.origen = 'territorios';
        var initialState = {
            parametro: this.user.nrutoperador,
            parametroDos: null,
            origen: 'territorios'
        };
        this.territoriosTodosModal = this.modalService.show(_commonPopUp_zonasTodasPopUp_zonasTodasPopUp_component__WEBPACK_IMPORTED_MODULE_14__["ZonasTodasPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    GestionComercialComponent.prototype.openModalTerritoriosTodos_2 = function () {
        this.origen = 'territorios';
        this.auxRepo = true;
        var initialState = {
            parametro: this.user.nrutoperador,
            parametroDos: null,
            origen: 'territorios'
        };
        this.territoriosTodosModal = this.modalService.show(_commonPopUp_zonasTodasPopUp_zonasTodasPopUp_component__WEBPACK_IMPORTED_MODULE_14__["ZonasTodasPopUpComponent"], { initialState: initialState, backdrop: 'static', keyboard: false });
    };
    GestionComercialComponent.prototype.IsEqualCodZone = function (element) {
        return (element >= 10);
    };
    GestionComercialComponent.prototype.generateExcelGestionComercial = function () {
        var _this = this;
        var tipoRepo = this.forma.controls.tipoReporte.value;
        var validFecha = this.forma.controls.fecha.value;
        console.log(this.forma.valid);
        this.cargador.show();
        switch (tipoRepo) {
            case 'REPAVRE': {
                this.request.nrutoperador = Number(this.user.nrutoperador);
                this.request.sfecha = (this.forma.controls.fecha.value).replace(/-/g, '');
                this.ReportesService.getRptGestionComercialResumen(this.request)
                    .subscribe(function (data) {
                    _this.request = {};
                    _this.cargador.hide();
                    _this.request = {};
                    if (data.rptGestionComercialResumen.length == 0 || data.error.codError == 500) {
                        swal("Atención", "No se encontraron resultados", "info");
                    }
                    else {
                        var auxData = data.rptGestionComercialResumen;
                        var headerExcel = ['Cod. Supervisor', 'Territorio', 'TONELADAS OBJETIVO', ' TONELADAS TON EFECT', 'TONELADAS % CUMPL',
                            ' PNV OBJETIVO', 'PNV EFECT', 'PNV % CUMPL', ' VENTAS DIAS ANTERIOR TON', 'VENTAS DIAS ANTERIOR PNV',
                            'VENTAS DIAS ANTERIOR K/PROM', 'Toneladas Promedio Diaria', 'Participación Toneladas Objetivo',
                            'PNV Promedio Diaria', 'Participación PNV Objetivo', 'Proyección Toneladas Mes Efectivo',
                            ' Proyección PNV Mes Efectivo', 'Cierre Proyectado TON', 'Cierre Proyectado PNV',
                            'Proyección Toneladas Mes Efectivo', ' Proyección PNV Mes Efectivo', 'Cierre Proyectado TON (%)',
                            ' Cierre Proyectado  PNV (%)'];
                        var dataExcel = [];
                        /*for (let i in headerExcel) {
                            let articulo = [
                                headerExcel[i].ter_scodsupervisor,
                                headerExcel[i].ter_scodterritorio,
                                headerExcel[i].objtoneladas,
                                headerExcel[i].tonefectivas,
                                headerExcel[i].objpnv,
                                headerExcel[i].objtoneladas,
                                headerExcel[i].objtoneladas,
                                headerExcel[i].toneladasefectivodiaanterior,
                                headerExcel[i].pnvefectivodiaanterior,
                                headerExcel[i].objtoneladas,
                                headerExcel[i].tonpromedio,
                                headerExcel[i].objtoneladas,
                                headerExcel[i].objtoneladas,
                                headerExcel[i].objtoneladas,
                                headerExcel[i].objtoneladas,
                                headerExcel[i].proytons,
                                headerExcel[i].proypnv,
                                headerExcel[i].cierreproytons,
                                headerExcel[i].cierreproypnv,
                                headerExcel[i].cierreproypnv,
                                headerExcel[i].cierreproypnv,
                                headerExcel[i].cierreproypnv,
                                headerExcel[i].cierreproypnv,

                            ]
                            dataExcel.push(articulo);
                        } */
                        var fechaExcel = _this.utilService.dateToStringFormat(_this.fechaActual);
                        var nombreExcel = 'Gestion Comercial' + _this.utilService.dateToStringDateFullFormat(_this.fechaActual);
                        _this.excelService.generateExcelConSubTitulo(nombreExcel, headerExcel, dataExcel, fechaExcel, 'Avance de Venta Resumido', headerExcel.length);
                        _this.forma.controls.fecha.setValue('');
                        _this.forma.controls.tipoReporte.setValue('');
                        swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
                    }
                    if (data.error.codError != 0) {
                        swal("Atención", "Ha ocurrido un error inesperado!", "error");
                    }
                }),
                    function (error) {
                        _this.cargador.hide();
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                        console.log('error en el request');
                    };
                break;
            }
            case 'REPAVPZ': {
                this.request.nRutOperador = this.user.nrutoperador;
                this.request.sFecha = (this.forma.controls.fecha.value).replace(/-/g, '');
                this.ReportesService.getRptAvanceVtaZona(this.request)
                    .subscribe(function (data) {
                    _this.request = {};
                    _this.cargador.hide();
                    var auxData = data.gestionComercial;
                    if (data.gestionComercial.length == 0 || data.error.codError == 500) {
                        swal("Atención", "No se encontraron resultados", "info");
                    }
                    else {
                        var headerExcel = ['Zona', 'Codigo Supervisor', 'Nombre Supervisor', 'Categoria', 'TONELADAS OBJECTIVO', 'TONELADAS TON EFECT', 'PNV % CUMPL',
                            'PNV % Crec. Diario', ' TONELADAS  OBJETIVO', ' TONELADAS PNV EFECT', 'Crecimiento Diario % CUMPL', 'VENTAS DIAS ANTERIOR % Crec. Diario',
                            ' VENTAS DIAS ANTERIOR K/PROM de Efectivo', ' VENTAS DIAS ANTERIOR  TON', 'Toneladas Promedio Diaria', 'Participación Toneladas Objetivo',
                            'PNV Promedio Diaria', 'Participación PNV Objetivo', ' Proyección Toneladas PNV', ' Proyección PNV  K/PROM', 'Cierre Proyectado Mes Efectivo',
                            ' Cierre Proyectado Mes Efectivo', ' Proyección  Toneladas', ' Proyección  PNV ', 'Cierre Proyectado Mes Efectivo', ' Cierre Proyectado Mes Efectivo',
                            'TON (%)', 'PNV (%)'];
                        var auxData_1 = data.gestionComercial;
                        var countZonas_1 = [];
                        auxData_1.forEach(function (element) {
                            if (countZonas_1.length > 0) {
                                if (!_this.findZona(element.ter_scodzona, countZonas_1)) {
                                    countZonas_1.push(element.ter_scodzona);
                                }
                            }
                            else {
                                countZonas_1.push(element.ter_scodzona);
                            }
                        });
                        console.log(countZonas_1);
                        var dataExcel_1 = [];
                        var TotalRepo_1 = {
                            "objtoneladas": 0,
                            "objpnv": 0,
                            "pnvefectivo": 0,
                            "porccumplimientopnv": 0,
                            "tonefectivas": 0,
                            "porccumplimientotoneladas": 0,
                            "toneladasefectivodiaanterior": 0,
                            "pnvefectivodiaanterior": 0,
                            "tonpromedio": 0,
                            "prompnvdiario": 0,
                            "promtondiario": 0,
                            "proytons": 0,
                            "proypnv": 0,
                            "cierreproytons": 0,
                            "cierreproypnv": 0
                        };
                        countZonas_1.forEach(function (element) {
                            var auxLista = auxData_1.filter(_this.IsEqualCodZone);
                            var totalZona = {
                                tonEfect: 0,
                                pnvEfect: 0,
                                desZona: ''
                            };
                            for (var i in auxLista) {
                                var item_1 = [
                                    auxLista[i].zon_sdeszona,
                                    auxLista[i].ter_scodsupervisor,
                                    auxLista[i].sup_snombre,
                                    auxLista[i].jca_sdescategoria,
                                    auxLista[i].objtoneladas,
                                    auxLista[i].tonefectivas,
                                    auxLista[i].porccumplimientopnv + '%',
                                    '',
                                    auxLista[i].objpnv,
                                    auxLista[i].pnvefectivo,
                                    '0 %',
                                    '',
                                    auxLista[i].pnvefectivodiaanterior,
                                    auxLista[i].toneladasefectivodiaanterior,
                                    '',
                                    auxLista[i].promtondiario,
                                    '',
                                    auxLista[i].prompnvdiario,
                                    '',
                                    auxLista[i].proytons,
                                    auxLista[i].proypnv,
                                    '',
                                    '',
                                    '',
                                    '',
                                    '',
                                    '',
                                    auxLista[i].cierreproytons,
                                    auxLista[i].cierreproypnv,
                                ];
                                totalZona.tonEfect += auxLista[i].tonefectivas;
                                totalZona.pnvEfect += auxLista[i].pnvefectivo;
                                totalZona.desZona = auxLista[i].zon_sdeszona;
                                TotalRepo_1.proytons += auxLista[i].proytons;
                                TotalRepo_1.objpnv += auxLista[i].objpnv;
                                TotalRepo_1.pnvefectivo += auxLista[i].pnvefectivo;
                                TotalRepo_1.porccumplimientopnv += auxLista[i].porccumplimientopnv;
                                TotalRepo_1.tonefectivas += auxLista[i].tonefectivas;
                                TotalRepo_1.porccumplimientotoneladas += auxLista[i].porccumplimientotoneladas;
                                TotalRepo_1.toneladasefectivodiaanterior += auxLista[i].toneladasefectivodiaanterior;
                                TotalRepo_1.pnvefectivodiaanterior += auxLista[i].pnvefectivodiaanterior;
                                TotalRepo_1.tonpromedio += auxLista[i].tonpromedio;
                                TotalRepo_1.prompnvdiario += auxLista[i].prompnvdiario;
                                TotalRepo_1.promtondiario += auxLista[i].promtondiario;
                                TotalRepo_1.proytons += auxLista[i].proytons;
                                TotalRepo_1.proypnv += auxLista[i].proypnv;
                                TotalRepo_1.cierreproytons += auxLista[i].cierreproytons;
                                TotalRepo_1.cierreproypnv += auxLista[i].cierreproypnv;
                                dataExcel_1.push(item_1);
                            }
                            // ingreso total zona
                            var item = [
                                '',
                                '',
                                '',
                                'Total ' + totalZona.desZona,
                                '',
                                totalZona.tonEfect,
                                '',
                                '',
                                totalZona.pnvEfect,
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                            ];
                            dataExcel_1.push(item);
                        });
                        // ingreso total Reporte
                        var item = [
                            '',
                            '',
                            '',
                            'Totales GENERALES',
                            TotalRepo_1.objtoneladas,
                            TotalRepo_1.tonefectivas,
                            '',
                            '',
                            TotalRepo_1.pnvefectivo,
                            '',
                            '',
                            TotalRepo_1.pnvefectivodiaanterior,
                            '',
                            TotalRepo_1.promtondiario,
                            '',
                            TotalRepo_1.prompnvdiario,
                            '',
                            TotalRepo_1.proytons,
                            TotalRepo_1.proypnv,
                            TotalRepo_1.cierreproytons,
                            TotalRepo_1.cierreproypnv,
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                        ];
                        var fechaExcel = _this.utilService.dateToStringFormat(_this.fechaActual);
                        var nombreExcel = 'Gestion Comercial' + _this.utilService.dateToStringDateFullFormat(_this.fechaActual);
                        _this.excelService.generateExcelConSubTitulo(nombreExcel, headerExcel, dataExcel_1, fechaExcel, 'Reporte Avance de Venta por Zona', headerExcel.length);
                        swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
                    }
                }),
                    function (error) {
                        _this.cargador.hide();
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                        console.log('error en el request');
                    };
                break;
            }
            case 'REPPV': {
                this.request.nrutoperador = Number(this.user.nrutoperador);
                this.request.sfecha = (this.forma.controls.fecha.value).replace(/-/g, '');
                this.ReportesService.getRptPuntoVenta(this.request)
                    .subscribe(function (data) {
                    _this.request = {};
                    _this.cargador.hide();
                    if (data.cur_territorios.length == 0 || data.error.codError == 500) {
                        swal("Atención", "No se encontraron resultados", "info");
                    }
                    else {
                        var auxData = data.cur_territorios;
                        var headerExcel = [
                            "Cod. Supervisor", "Nombre Supervisor", "Territorio", "Efectivo", "Objetivo", "% Cump"
                        ];
                        var dataExcel = [];
                        for (var i in auxData) {
                            var item = [
                                auxData[i].ter_scodsupervisor,
                                auxData[i].sup_snombre,
                                auxData[i].codterritorio,
                                auxData[i].efectivo,
                                auxData[i].objetivo === '' ? '0' : auxData[i].objetivo,
                                auxData[i].efectivo === '0' || auxData[i].efectivo === '' ? '0%' : (Number(auxData[i].objetivo) / Number(auxData[i].efectivo)).toString
                            ];
                            dataExcel.push(item);
                        }
                        var fechaExcel = _this.utilService.dateToStringFormat(_this.fechaActual);
                        var nombreExcel = 'Gestion Comercial' + _this.utilService.dateToStringDateFullFormat(_this.fechaActual);
                        _this.excelService.generateExcelConSubTitulo(nombreExcel, headerExcel, dataExcel, fechaExcel, 'Reporte Punto de Venta', headerExcel.length);
                        swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
                    }
                }),
                    function (error) {
                        _this.cargador.hide();
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                        console.log('error en el request');
                    };
                break;
            }
            case 'REPPVPS': {
                this.request.nRutOperador = Number(this.user.nrutoperador);
                this.request.sFecha = (this.forma.controls.fecha.value).replace(/-/g, '');
                this.ReportesService.getRptPuntoVentaSKU(this.request)
                    .subscribe(function (data) {
                    _this.request = {};
                    _this.cargador.hide();
                    if (data.avanceVtaSku.length == 0 || data.error.codError == 500) {
                        swal("Atención", "No se encontraron resultados", "info");
                    }
                    else {
                        var auxData = data.avanceVtaSku;
                        var headerExcel = ['COD. ZONA', 'DES.ZONA', 'COD. SUPERVISOR',
                            'NOM. SUPERVISOR', 'COD. TERRITORIO', 'DES. TERRITORIO',
                            'RUT OPERADOR', 'COD. SKU', 'DES. SKU', 'COD. CATEGORIA',
                            'DES. CATEGORIA', 'OBJETIVO', 'PTO. VENTA', '% CUMPL'];
                        var dataExcel = [];
                        for (var i in auxData) {
                            var articulo = [
                                auxData[i].codzona,
                                auxData[i].deszona,
                                auxData[i].sup_snombre,
                                auxData[i].codterritorio,
                                auxData[i].desterritorio,
                                auxData[i].rutoperador,
                                auxData[i].formato,
                                auxData[i].descripcionsku,
                                auxData[i].codcategoria,
                                auxData[i].descategoria,
                                auxData[i].objetivo,
                                auxData[i].ptovta,
                                (Number(auxData[i].objetivo) / Number(auxData[i].ptovta)).toString() + '%',
                            ];
                            dataExcel.push(articulo);
                        }
                        var fechaExcel = _this.utilService.dateToStringFormat(_this.fechaActual);
                        var nombreExcel = 'Gestion Comercial' + _this.utilService.dateToStringDateFullFormat(_this.fechaActual);
                        _this.excelService.generateExcelConSubTitulo(nombreExcel, headerExcel, dataExcel, fechaExcel, 'Reporte Punto de Venta po SKU', headerExcel.length);
                        swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
                    }
                }),
                    function (error) {
                        _this.cargador.hide();
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                        console.log('error en el request');
                    };
                break;
            }
            default: {
                this.request = {};
                this.request.nrutoperador = Number(this.user.nrutoperador);
                this.request.sfecha = (this.forma.controls.fecha.value).replace(/-/g, '');
                this.request.nidterritorio = this.forma.controls.codTerritorio.value;
                this.request.scodcategoria = this.forma.controls.codCategoria.value;
                this.ReportesService.getRptGestionComercial(this.request)
                    .subscribe(function (data) {
                    _this.request = {};
                    _this.cargador.hide();
                    if (data.getRptGestionComercial.length == 0 || data.error.codError == 500) {
                        swal("Atención", "No se encontraron resultados", "info");
                    }
                    else {
                        var auxData = data.getRptGestionComercial;
                        var headerExcel = [
                            'Cod Supervisor', 'Nombre Supervisor', 'Territorio', 'TONELADAS Lineas', 'TONELADAS Categoría',
                            'TONELADAS OBJETIVO', 'PNV TON EFECT', 'PNV % CUMPL', 'PNV OBJETIVO', 'VENTAS DIAS ANTERIOR PNV EFECT',
                            ' VENTAS DIAS ANTERIOR % CUMPL', ' VENTAS DIAS ANTERIOR  TON', 'Toneladas Promedio Diaria',
                            'Participación Toneladas Objetivo', 'PNV Promedio Diaria', 'Participación PNV Objetivo',
                            'Proyección Toneladas PNV', 'Proyección PNV K/PROM', 'Cierre Proyectado Mes Efectivo',
                            ' Cierre Proyectado Mes Efectivo', 'Proyección Toneladas TON', 'Proyección PNV', 'Cierre Proyectado Mes Efectivo',
                            ' Cierre Proyectado Mes Efectivo', 'TON (%)', 'PNV (%)'
                        ];
                        var dataExcel = [];
                        /* for (let i in this.stockArticulos) {
                                {
                                    "cierreproypnv": 0,
                                    "cierreproytons": 0,
                                    "jli_scodlinea": "string",
                                    "jli_sdeslinea": "string",
                                    "objpnv": 0,
                                    "objtoneladas": 0,
                                    "pnvefectivo": 0,
                                    "pnvefectivodiaanterior": 0,
                                    "porccumplimientopnv": 0,
                                    "porccumplimientotoneladas": 0,
                                    "prompnvdiario": 0,
                                    "promtondiario": 0,
                                    "proypnv": 0,
                                    "proytons": 0,
                                    "sup_sapematerno": "string",
                                    "sup_sapepaterno": "string",
                                    "sup_snombre": "string",
                                    "ter_nRutOperador": 0,
                                    "ter_scodfuerzavta": "string",
                                    "ter_scodsupervisor": "string",
                                    "ter_scodterritorio": "string",
                                    "ter_scodzona": "string",
                                    "tonefectivas": 0,
                                    "toneladasefectivodiaanterior": 0,
                                    "tonpromedio": 0,
                                    "tpv_scodcategoria": "string"
                                    }
                            let articulo = [
                                this.stockArticulos[i].jli_sdeslinea,
                                this.stockArticulos[i].jca_sdescategoria,
                                this.stockArticulos[i].jag_sdesagrupacion,
                                this.stockArticulos[i].jpb_sdesproductobase,
                                `${this.stockArticulos[i].art_scodformato} - ${this.stockArticulos[i].art_scodvariedad}`,
                                this.stockArticulos[i].art_smedida,
                                `${this.stockArticulos[i].uventadisponibles} - ${this.stockArticulos[i].fraccionesdisponibles}`,
                                `${this.stockArticulos[i].uventareserva} - ${this.stockArticulos[i].fraccionesreserva}`,
                                `${this.stockArticulos[i].uvtamalestado} - ${this.stockArticulos[i].fraccionesvtamalestado}`,
                                `${this.stockArticulos[i].uvtatotales} - ${this.stockArticulos[i].fraccionestotales}`,
                            ]
                            dataExcel.push(articulo);
                        } */
                        var fechaExcel = _this.utilService.dateToLocalStringFormat(_this.fechaActual);
                        var nombreExcel = 'Gestion Comercial' + _this.utilService.dateToStringDateFullFormat(_this.fechaActual);
                        _this.excelService.generateExcelConSubTitulo(nombreExcel, headerExcel, dataExcel, fechaExcel, 'Avance de Venta', headerExcel.length);
                        swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
                    }
                }),
                    function (error) {
                        _this.cargador.hide();
                        swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                        console.log('error en el request');
                    };
                break;
            }
        }
    };
    GestionComercialComponent.prototype.generateExcelQuiebresStock = function () {
        var _this = this;
        this.cargador.show();
        this.request.nrutoperador = Number(this.user.nrutoperador);
        this.request.scodbodega = this.forma2.controls.ListaBodega.value;
        this.request.sfhdesde = (this.forma2.controls.fechaDesde.value).replace(/-/g, '');
        this.request.sfhohasta = (this.forma2.controls.fechaHasta.value).replace(/-/g, '');
        if (this.request.sfhohasta < this.request.sfhdesde) {
            swal("Atención", "Fecha Hasta debe ser mayor a la Fecha Desde!", "error");
            return;
        }
        this.ReportesService.getRptQuiebreStock(this.request)
            .subscribe(function (data) {
            _this.request = {};
            _this.cargador.hide();
            if (data.rptQuiebreStock.length === 0 || data.error.codError == 500) {
                swal("Atención", "No se encontraron resultados", "info");
            }
            else {
                var auxData = data.rptQuiebreStock;
                var headerExcel = [
                    'ZONA', 'TERRITORIO', 'RUT CLIENTE', 'RAZON SOCIAL CLIENTE',
                    'FECHA PEDIDO', 'ID PEDIDO', 'FORMATO', 'VARIEDAD', 'DESCRIPCION',
                    'FRACCIONES', 'CANT. FACTURADA', 'QUIEBRE', 'VALORIZADO', 'BODEGA'
                ];
                var dataExcel = [];
                for (var i in auxData) {
                    var articulo = [
                        auxData[i].zon_scodzona,
                        auxData[i].ter_scodterritorio,
                        auxData[i].ped_nrutcliente,
                        auxData[i].razonsocial,
                        auxData[i].ped_dfhocreacion,
                        auxData[i].ped_nidpedido,
                        auxData[i].dpe_scodformato,
                        auxData[i].dpe_scodvariedad,
                        auxData[i].art_sdescripcion,
                        auxData[i].dpe_ncantfracciones,
                        auxData[i].dpe_ncantfacturada,
                        auxData[i].quiebre,
                        auxData[i].valorizado,
                        auxData[i].bod_sdescbodega,
                    ];
                    dataExcel.push(articulo);
                }
                var fechaExcel = _this.utilService.dateToLocalStringFormat(_this.fechaActual);
                var nombreExcel = 'Gestion Comercial ' + _this.utilService.dateToStringDateFullFormat(_this.fechaActual);
                _this.excelService.generateExcelConSubTitulo(nombreExcel, headerExcel, dataExcel, fechaExcel, 'Reporte Quiebres de Stock', headerExcel.length);
                swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
            }
        }),
            function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                console.log('error en el request');
            };
    };
    GestionComercialComponent.prototype.generateExcelEfectividades = function () {
        var _this = this;
        this.cargador.show();
        this.request.nrutoperador = Number(this.user.nrutoperador);
        this.request.sfhodesde = (this.forma3.controls.fechaDesde.value).replace(/-/g, '');
        this.request.sfhohasta = (this.utilService.dateToStringFormat(this.fechaActual)).replace(/-/g, '');
        this.ReportesService.getRptEfectividad(this.request)
            .subscribe(function (data) {
            _this.request = {};
            _this.cargador.hide();
            if (data.rptEfectividad.length === 0 || data.rptEfectividad2.length === 0 || data.error.codError === 500) {
                swal('Atención', 'No se encontraron resultados', 'info');
            }
            else {
                var auxDataPadre = data.rptEfectividad;
                var auxDataHijo_1 = data.rptEfectividad2;
                var headerExcel = ['RECORRIDO', 'RAZON SOCIAL', 'DATOS'];
                for (var i = 1; i < 32; i++) {
                    if (i < 10) {
                        headerExcel.push('0' + i.toString());
                    }
                    else {
                        headerExcel.push(i.toString());
                    }
                }
                headerExcel.push('TOTAL GENERAL');
                // Construir Matriz de datos
                auxDataPadre.forEach(function (element) {
                    var lista = [];
                    lista = auxDataHijo_1.filter(function (item) { return item.rec_scodrecorrido === element.rec_scodrecorrido; });
                    element.lista = lista;
                });
                var dataExcel = [];
                var TotalesPnv_1 = ['', '', ''];
                var TotalesFacturas_1 = ['', '', ''];
                var TotalesKilo_1 = ['', '', ''];
                var totalPnvGeneral = 0;
                var totalFacturasGeneral = 0;
                var totalKilosGeneral = 0;
                var countDias = [];
                var countDias2 = [];
                var countDias3 = [];
                for (var j = 1; j < 32; j++) {
                    TotalesPnv_1.push('0');
                    TotalesFacturas_1.push('0');
                    TotalesKilo_1.push('0');
                    countDias.push(0);
                    countDias2.push(0);
                    countDias3.push(0);
                }
                var _loop_1 = function (i) {
                    var totalPnvIndiv = 0;
                    var totalFacturasIndv = 0;
                    var totalKilosIndv = 0;
                    /* % PNV */
                    var item = [
                        auxDataPadre[i].rec_scodrecorrido,
                        auxDataPadre[i].tra_srazonsocial,
                        '% PNV'
                    ];
                    for (var j = 1; j < 32; j++) {
                        item.push('0');
                    }
                    auxDataPadre[i].lista.forEach(function (element) {
                        var dia = element.dia + 2;
                        item[dia] = element.kpi1;
                        totalPnvIndiv += element.kpi1;
                        TotalesPnv_1[dia] = (Number(TotalesPnv_1[dia]) + element.kpi1).toString();
                    });
                    totalPnvGeneral += totalPnvIndiv / auxDataPadre[i].lista.length;
                    item.push(totalPnvIndiv / auxDataPadre[i].lista.length);
                    dataExcel.push(item);
                    /*FIN % PNV */
                    /* % N° Facturas */
                    item = [];
                    item = [
                        '',
                        '',
                        '% N° Facturas'
                    ];
                    for (var j = 1; j < 32; j++) {
                        item.push('0');
                    }
                    auxDataPadre[i].lista.forEach(function (element) {
                        var dia = element.dia + 2;
                        item[dia] = element.kpi2;
                        totalFacturasIndv += element.kpi2;
                        TotalesFacturas_1[dia] = (Number(TotalesFacturas_1[dia]) + element.kpi2).toString();
                    });
                    totalFacturasGeneral += totalFacturasIndv / auxDataPadre[i].lista.length;
                    item.push(totalFacturasIndv / auxDataPadre[i].lista.length);
                    dataExcel.push(item);
                    /*FIN % N° Facturas */
                    /* % Kilos */
                    item = [];
                    item = [
                        '',
                        '',
                        '% Kilos'
                    ];
                    for (var j = 1; j < 32; j++) {
                        item.push('0');
                    }
                    auxDataPadre[i].lista.forEach(function (element) {
                        var dia = element.dia + 2;
                        item[dia] = element.kpi3;
                        totalKilosIndv += element.kpi3;
                        TotalesKilo_1[dia] = (Number(TotalesKilo_1[dia]) + element.kpi3).toString();
                    });
                    totalKilosGeneral += totalKilosIndv / auxDataPadre[i].lista.length;
                    item.push(totalKilosIndv / auxDataPadre[i].lista.length);
                    dataExcel.push(item);
                    /*FIN % Kilos */
                };
                for (var i in auxDataPadre) {
                    _loop_1(i);
                }
                for (var i = 0; i < dataExcel.length; i = i + 3) {
                    var auxLista = dataExcel[i];
                    for (var j = 3; j < 34; j++) {
                        if (auxLista[j] !== '') {
                            countDias[j - 2]++;
                        }
                    }
                }
                for (var i = 1; i < dataExcel.length; i = i + 3) {
                    var auxLista = dataExcel[i];
                    for (var j = 3; j < 34; j++) {
                        if (auxLista[j] !== '') {
                            countDias2[j - 2]++;
                        }
                    }
                }
                for (var i = 2; i < dataExcel.length; i = i + 3) {
                    var auxLista = dataExcel[i];
                    for (var j = 3; j < 34; j++) {
                        if (auxLista[j] !== '') {
                            countDias3[j - 2]++;
                        }
                    }
                }
                for (var j = 3; j < 33; j++) {
                    if (countDias[j - 2] !== 0) {
                        TotalesPnv_1[j] = (Number(TotalesPnv_1[j]) / countDias[j - 2]).toString();
                    }
                    if (countDias2[j - 2] !== 0) {
                        TotalesFacturas_1[j] = (Number(TotalesFacturas_1[j]) / countDias2[j - 2]).toString();
                    }
                    if (countDias3[j - 2] !== 0) {
                        TotalesKilo_1[j] = (Number(TotalesKilo_1[j]) / countDias3[j - 2]).toString();
                    }
                }
                // Totales
                TotalesPnv_1.push((totalPnvGeneral / auxDataPadre.length).toString());
                TotalesFacturas_1.push((totalFacturasGeneral / auxDataPadre.length).toString());
                TotalesKilo_1.push((totalKilosGeneral / auxDataPadre.length).toString());
                TotalesPnv_1[2] = 'Total % PNV';
                TotalesFacturas_1[2] = 'Total % N° Facturas';
                TotalesKilo_1[2] = 'Total % Kilos';
                /* <console.log(dataExcel);
                console.log(TotalesPnv);
                console.log(TotalesFacturas);
                console.log(TotalesKilo);> */
                dataExcel.push(TotalesPnv_1);
                dataExcel.push(TotalesFacturas_1);
                dataExcel.push(TotalesKilo_1);
                var fechaExcel = _this.utilService.dateToLocalStringFormat(_this.fechaActual);
                var nombreExcel = 'Gestion Comercial ' + _this.utilService.dateToStringDateFullFormat(_this.fechaActual);
                _this.excelService.generateExcelConSubTitulo(nombreExcel, headerExcel, dataExcel, fechaExcel, 'Reporte Efectividades', headerExcel.length);
                swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
            }
        }),
            function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                console.log('error en el request');
            };
    };
    GestionComercialComponent.prototype.generateExcelProductosPack = function () {
        var _this = this;
        this.cargador.show();
        this.request.nRutOperador = Number(this.user.nrutoperador);
        this.request.dFechaO2c = this.forma4.controls.Years.value + this.forma4.controls.Mes.value;
        this.request.sCodTerritorio = this.forma4.controls.codTerritorio.value;
        this.ReportesService.getRptAvanceVentaPack(this.request)
            .subscribe(function (data) {
            _this.request = {};
            _this.cargador.hide();
            if (data.pack.length === 0 || data.error.codError === 500) {
                swal('Atención', 'No se encontraron resultados', 'info');
            }
            else {
                var auxData = data.pack;
                var headerExcel = ['CODIGO PACK', 'DESCRIPCIÓN', 'DETALLE PACK', 'ACCION COMERCIAL', 'CATEGORIA', 'TERRITORIO PNV', 'TERRITORIO VOLUMEN', 'TOTAL PACK PNV', 'TOTAL PACK VOLUMEN'];
                var dataExcel = [];
                var totalGeneral = {
                    'pnv': 0,
                    'ton': 0
                };
                for (var i in auxData) {
                    var item = [
                        auxData[i].codarticulo,
                        auxData[i].art_sdescripcion,
                        '',
                        '',
                        '',
                        auxData[i].pnv,
                        auxData[i].ton,
                        auxData[i].pnv,
                        auxData[i].ton,
                    ];
                    totalGeneral.pnv = totalGeneral.pnv + auxData[i].pnv;
                    totalGeneral.ton = totalGeneral.ton + auxData[i].ton;
                    dataExcel.push(item);
                }
                var itemTotal = ['', '', '', '', 'TOTAL', totalGeneral.pnv, totalGeneral.ton, totalGeneral.pnv, totalGeneral.ton];
                dataExcel.push(itemTotal);
                var fechaExcel = _this.utilService.dateToLocalStringFormat(_this.fechaActual);
                var nombreExcel = 'Gestion Comercial' + _this.utilService.dateToStringDateFullFormat(_this.fechaActual);
                _this.excelService.generateExcel(nombreExcel, headerExcel, dataExcel, fechaExcel);
                swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
            }
        }),
            function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                console.log('error en el request');
            };
    };
    GestionComercialComponent.prototype.findZona = function (codZona, array) {
        array.forEach(function (element) {
            console.log(element === codZona);
            if (element === codZona) {
                return true;
            }
        });
        return false;
    };
    GestionComercialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gestion-comercial',
            template: __webpack_require__(/*! ./gestionComercial.component.html */ "./src/app/routes/reportes/gestionComercial/gestionComercial.component.html")
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_6__["ConsultasService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["BsModalService"],
            _core_consultaService_articulo_service__WEBPACK_IMPORTED_MODULE_7__["ArticuloService"],
            _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_9__["ReportesService"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_8__["AdministracionOperativaService"]])
    ], GestionComercialComponent);
    return GestionComercialComponent;
}());



/***/ }),

/***/ "./src/app/routes/reportes/informesDescuenstos/informesDescuenstos.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/routes/reportes/informesDescuenstos/informesDescuenstos.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4> Reporte Informe Descuentos</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\" style=\"-webkit-box-shadow: 1px 1px 5px 1px #000000; box-shadow: 1px 1px 5px 1px #000000;\">\r\n                    <div class=\"card-body\" style=\"padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;\">\r\n                        <div class=\"card-text\">\r\n                            <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                                <div class=\"form-row col-md-12\">\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Fecha Desde</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fecha\" name=\"fecha\" type=\"date\" (focusout)=\"actualizarFecha()\" />\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-offset-5 col-sm-6\">\r\n                                    <button class=\"btn btn-oval btn-sm\" (click)=\"generateExcel()\">Generar</button>\r\n                                </div>\r\n                            </div>                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/reportes/informesDescuenstos/informesDescuenstos.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/routes/reportes/informesDescuenstos/informesDescuenstos.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InformesDescuenstosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformesDescuenstosComponent", function() { return InformesDescuenstosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/consultaService/reportes.service */ "./src/app/core/consultaService/reportes.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_7__);
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
var InformesDescuenstosComponent = /** @class */ (function () {
    function InformesDescuenstosComponent(cargador, authService, excelService, utilService, ReportesService) {
        this.cargador = cargador;
        this.authService = authService;
        this.excelService = excelService;
        this.utilService = utilService;
        this.ReportesService = ReportesService;
        this.fechaActual = new Date();
        this.request = {};
        this.user = {};
        //Incia con fecha de hoy por defecto
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    InformesDescuenstosComponent.prototype.ngOnInit = function () {
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_7___default.a);
        this.user = this.authService.getDatosUser();
        console.log(this.utilService.dateToStringFormat(this.fechaActual));
        this.forma.controls.fecha.setValue(this.utilService.dateToStringFormat(this.fechaActual));
    };
    InformesDescuenstosComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
    };
    InformesDescuenstosComponent.prototype.actualizarFecha = function () {
        if (this.forma.controls.fecha.value === '') {
            this.forma.controls.fecha.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
        if (!this.utilService.DateValidator(this.forma.controls.fecha.value)) {
            this.forma.controls.fecha.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
    };
    InformesDescuenstosComponent.prototype.generateExcel = function () {
        var _this = this;
        this.cargador.show();
        console.log('entra al metodo generarExel');
        var ListaInforme = [];
        this.request.nrutoperador = Number(this.user.nrutoperador);
        this.request.sfecha = (this.forma.controls.fecha.value).replace(/-/g, '');
        this.ReportesService.getRptDescuentos(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            if (data.rptDescuentos.length == 0 && data.error.codError == 0) {
                swal("Atención", "No se encontraron resultados", "info");
            }
            else {
                ListaInforme = data.rptDescuentos;
                var headerExcel = ['RUT OPERADOR', 'CATEGORIA', 'FORMATO', 'VARIEDAD', 'DESCRIPCION', 'PNV MENSUAL',
                    'PNV ANUAL', 'FUNCIONAL', 'PTP ACUMULADO AUTOMATICO', 'PTP ACUMULADO MANUAL',
                    'BONIFICADO'];
                var dataExcel = [];
                for (var i in ListaInforme) {
                    var item = [
                        ListaInforme[i].fac_nrutoperador,
                        ListaInforme[i].jca_sdescategoria,
                        ListaInforme[i].art_scodformato,
                        ListaInforme[i].art_scodvariedad,
                        ListaInforme[i].art_sdescripcion,
                        ListaInforme[i].jpb_sdesproductobase,
                        ListaInforme[i].pnvmensual,
                        ListaInforme[i].pnvanual,
                        ListaInforme[i].funcional,
                        ListaInforme[i].ptpacumuladoautomatico,
                        ListaInforme[i].ptpacumuladomanual,
                        ListaInforme[i].bonificado,
                    ];
                    dataExcel.push(item);
                }
                var fechaExcel = _this.utilService.dateToLocalStringFormat(_this.fechaActual);
                var nombreExcel = 'Descuento ' + _this.utilService.dateToStringDateFullFormat(_this.fechaActual);
                _this.excelService.generateExcel(nombreExcel, headerExcel, dataExcel, fechaExcel);
                swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
            }
        }),
            function (error) {
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                console.log('error en el request');
            };
    };
    InformesDescuenstosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-informes-descuenstos',
            template: __webpack_require__(/*! ./informesDescuenstos.component.html */ "./src/app/routes/reportes/informesDescuenstos/informesDescuenstos.component.html")
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_5__["ReportesService"]])
    ], InformesDescuenstosComponent);
    return InformesDescuenstosComponent;
}());



/***/ }),

/***/ "./src/app/routes/reportes/liquidacion/liquidacion.component.html":
/*!************************************************************************!*\
  !*** ./src/app/routes/reportes/liquidacion/liquidacion.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4> Reporte Liquidación</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\"\r\n                    style=\"-webkit-box-shadow: 1px 1px 5px 1px #000000; box-shadow: 1px 1px 5px 1px #000000;\">\r\n                    <div class=\"card-body\"\r\n                        style=\"padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;\">\r\n                        <div class=\"card-text\">\r\n                            <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                                <div class=\"form-row col-md-12\">\r\n                                    <div class=\"col-sm-6 form-group\">\r\n                                        <label class=\"col-sm-3 control-label\">Transportista: </label>\r\n                                        <div class=\"col-sm-7\" style=\" padding-right: 0px;\">\r\n                                            <input formControlName=\"transportista\" name=\"transportista\"\r\n                                                class=\"form-control\" type=\"text\" />\r\n                                        </div>\r\n                                        <div class=\"col-sm-2\">\r\n                                            <button type=\"button\" class=\"btn btn-primary\"\r\n                                                (click)=\"openModalTransportista()\">\r\n                                                <em class=\"icon-magnifier\"></em>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6 form-group\">\r\n                                        <label class=\"col-sm-3 control-label\">Vehiculo: </label>\r\n                                        <div class=\"col-sm-7\" style=\" padding-right: 0px;\">\r\n                                            <input formControlName=\"patente\" name=\"patente\" class=\"form-control\"\r\n                                                type=\"text\" />\r\n                                        </div>\r\n                                        <div class=\"col-sm-2\">\r\n                                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalVehiculo()\">\r\n                                                <em class=\"icon-magnifier\"></em>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-row col-md-12\">\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Mes: </label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <select class=\"form-control pv-0\" formControlName=\"mes\" name=\"mes\">\r\n                                                <option *ngFor=\"let mes of meses\" [ngValue]=\"mes.codMes\">{{mes.descMes}}\r\n                                                </option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Año: </label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <select class=\"form-control pv-0\" formControlName=\"anio\" name=\"anio\">\r\n                                                <option *ngFor=\"let anio of anios\" [ngValue]=\"anio.codAnio\">\r\n                                                    {{anio.descAnio}}</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-offset-5 col-sm-6\">\r\n                                    <button class=\"btn btn-oval btn-sm\" (click)=\"generar()\">Generar</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/reportes/liquidacion/liquidacion.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/routes/reportes/liquidacion/liquidacion.component.ts ***!
  \**********************************************************************/
/*! exports provided: LiquidacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiquidacionComponent", function() { return LiquidacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_excel_excelRTT_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/excel/excelRTT.service */ "./src/app/core/excel/excelRTT.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _routes_commonPopUp_transportistasPopUp_transportistasPopUp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../routes/commonPopUp/transportistasPopUp/transportistasPopUp.component */ "./src/app/routes/commonPopUp/transportistasPopUp/transportistasPopUp.component.ts");
/* harmony import */ var _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/consultaService/administracionOperativa.service */ "./src/app/core/consultaService/administracionOperativa.service.ts");
/* harmony import */ var _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/consultaService/reportes.service */ "./src/app/core/consultaService/reportes.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
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
var LiquidacionComponent = /** @class */ (function () {
    function LiquidacionComponent(authService, excelService, setearDatosTransportista, reportesService, cargador, utilService, modalService) {
        this.authService = authService;
        this.excelService = excelService;
        this.setearDatosTransportista = setearDatosTransportista;
        this.reportesService = reportesService;
        this.cargador = cargador;
        this.utilService = utilService;
        this.modalService = modalService;
        this.fechaActual = new Date();
        this.request = {};
        this.user = {};
        this.anios = [];
        this.liquidacionTransportistas = {};
        this.meses = [
            { codMes: "01", descMes: "Enero" },
            { codMes: "02", descMes: "Febrero" },
            { codMes: "03", descMes: "Marzo" },
            { codMes: "04", descMes: "Abril" },
            { codMes: "05", descMes: "Mayo" },
            { codMes: "06", descMes: "Junio" },
            { codMes: "07", descMes: "Julio" },
            { codMes: "08", descMes: "Agosto" },
            { codMes: "09", descMes: "Septiembre" },
            { codMes: "10", descMes: "Octubre" },
            { codMes: "11", descMes: "Noviembre" },
            { codMes: "12", descMes: "Diciembre" }
        ];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            transportista: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            patente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            mes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            anio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    LiquidacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.getDatosUser();
        this.subData = this.setearDatosTransportista.datos$.subscribe(function (resData) {
            _this.setData(resData);
        });
        this.setGenerar();
    };
    LiquidacionComponent.prototype.ngOnDestroy = function () {
        if (this.subData !== undefined) {
            this.subData.unsubscribe();
        }
    };
    LiquidacionComponent.prototype.setGenerar = function () {
        this.cargaComboAnios();
        this.forma.controls.mes.setValue(this.dateToStringMonthFormat(this.fechaActual));
        this.forma.controls.anio.setValue(this.fechaActual.getFullYear());
        this.request.nruttransportista = 0;
    };
    LiquidacionComponent.prototype.cargaComboAnios = function () {
        for (var i = 1900; i <= 2100; i++) {
            var anio = {
                codAnio: i,
                descAnio: "" + i
            };
            this.anios.push(anio);
        }
    };
    LiquidacionComponent.prototype.openModalTransportista = function () {
        this.origen = "transportistas";
        var initialState = {
            titulo: "Transportistas",
            origen: "transportistas",
            busquedaCompleta: true
        };
        this.transportistasModal = this.modalService.show(_routes_commonPopUp_transportistasPopUp_transportistasPopUp_component__WEBPACK_IMPORTED_MODULE_5__["TransportistasPopUpComponent"], { initialState: initialState, backdrop: "static", keyboard: false });
    };
    LiquidacionComponent.prototype.openModalVehiculo = function () {
        this.origen = "vehiculo";
        var initialState = {
            titulo: "Vehiculo",
            origen: "vehiculo",
            busquedaCompleta: true,
            rutTransportista: this.request.nruttransportista
        };
        this.vehiculosModal = this.modalService.show(_routes_commonPopUp_transportistasPopUp_transportistasPopUp_component__WEBPACK_IMPORTED_MODULE_5__["TransportistasPopUpComponent"], {
            initialState: initialState,
            backdrop: "static",
            keyboard: false
        });
    };
    LiquidacionComponent.prototype.setData = function (resData) {
        if (resData !== 0) {
            switch (this.origen) {
                case "transportistas": {
                    this.request.nruttransportista = resData.tra_nruttransportista;
                    this.forma.controls.transportista.setValue(resData.tra_srazonsocial);
                    break;
                }
                case "vehiculo": {
                    this.forma.controls.patente.setValue(resData.cam_spatente);
                    break;
                }
            }
        }
    };
    LiquidacionComponent.prototype.generar = function () {
        this.cargador.show();
        this.request.nrutoperador = this.user.nrutoperador;
        this.request.spatente = this.forma.controls.patente.value;
        this.request.sfecha =
            this.forma.controls.anio.value + this.forma.controls.mes.value;
        if (this.validarEntradasFormularioTransportista()) {
            if (this.validarEntradasFormularioVehiculo()) {
                this.dataLiquidacionTransportista();
            }
        }
    };
    LiquidacionComponent.prototype.validarEntradasFormularioTransportista = function () {
        var _validarEntradasFormulario = true;
        if (this.request.nruttransportista === 0 || this.request.nruttransportista === null) {
            swal("Atención", "Debe Seleccionar Transportista para generar el reporte", "error");
            _validarEntradasFormulario = false;
            this.cargador.hide();
        }
        return _validarEntradasFormulario;
    };
    LiquidacionComponent.prototype.validarEntradasFormularioVehiculo = function () {
        var _validarEntradasFormulario = true;
        if (this.request.spatente === "" || this.request.spatente === null) {
            swal("Atención", "Debe Seleccionar Vehículo para generar el reporte", "error");
            _validarEntradasFormulario = false;
            this.cargador.hide();
        }
        return _validarEntradasFormulario;
    };
    LiquidacionComponent.prototype.dataLiquidacionTransportista = function () {
        var _this = this;
        this.reportesService
            .getReporteLiquidacionTransportista(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            if (data.dataLiquidacionTransportista.length === 0 &&
                data.error.codError === 0) {
                swal("Atención", "No se encontraron resultados", "info");
            }
            else {
                if (data.dataLiquidacionTransportista === null) {
                    swal("Atención", "Ha ocurrido un error inesperado!", "error");
                }
                else {
                    _this.nporcentaje_kp1 = data.nporcentaje_kp1;
                    _this.nbono_transportista = data.nbono_transportista;
                    _this.generateExcel(data.dataLiquidacionTransportista);
                }
            }
            if (data.error.codError !== 0) {
                swal("Atención", "Ha ocurrido un error inesperado!", "error");
            }
        }, function (error) {
            _this.cargador.hide();
            swal("Atención", "Ha ocurrido un error inesperado!", "error");
        });
    };
    LiquidacionComponent.prototype.generateExcel = function (data) {
        // ! Generacion del contenedor intermedio de data
        this.liquidacionTransportistas = {};
        for (var i in data) {
            var dia = data[i].rlt_dfhorecorrido;
            var recorrido = "(" + data[i].rlt_scodrecorrido + ")" + data[i].rlt_sdesrecorrido;
            if (!this.liquidacionTransportistas.hasOwnProperty(dia)) {
                var facturasDelDia = {
                    dia: dia,
                    Recorrido: recorrido,
                    "Valor Fijo": "",
                    Rutas: []
                };
                this.liquidacionTransportistas[dia] = facturasDelDia;
            }
            var facturasDespachadas = data[i].rlt_nentregaefectiva +
                data[i].rlt_nrechazosparciales +
                data[i].rlt_nrechazototal;
            var facturacionRuta = {
                Ruta: data[i].rlt_scodruta,
                "Facturas Despachadas": data[i].rlt_sdesruta + " (" + facturasDespachadas + " Facturas)",
                "Valor Fijo": data[i].rlt_ntarfijadiaria,
                "Valor Facturas Entregadas": data[i].rlt_ntarfactefectiva,
                "Valor Rechazos Parciales": data[i].rlt_ntarfactparcial,
                "Valor Rechazos Totales": data[i].rlt_ntarfactreachazada,
                "Contador Facturas Entregadas": data[i].rlt_nentregaefectiva,
                "Contador Rechazos Parciales": data[i].rlt_nrechazosparciales,
                "Contador Rechazos Totales": data[i].rlt_nrechazototal,
                facturasDespachadas: facturasDespachadas
            };
            this.liquidacionTransportistas[dia]["Rutas"].push(facturacionRuta);
        }
        var dataExcel = [];
        var sumatoriaMesValorFijo = 0;
        var sumatoriaMesFacturasEntregadas = 0;
        var sumatoriaMesRechazosParciales = 0;
        var sumatoriaMesRechazosTotales = 0;
        var totalAPagar = 0;
        for (var i in this.liquidacionTransportistas) {
            var rutas = [];
            var contadorFacturasDespachadas = 0;
            var contadorFacturasEntregadas = 0;
            var contadorRechazosParciales = 0;
            var contadorRechazosTotales = 0;
            var totalValorFijo = 0;
            var totalValorFacturasEntregadas = 0;
            var totalValorRechazosParciales = 0;
            var totalValorRechazosTotales = 0;
            for (var j in this.liquidacionTransportistas[i]["Rutas"]) {
                rutas.push(this.liquidacionTransportistas[i]["Rutas"][j].Ruta);
                contadorFacturasDespachadas =
                    contadorFacturasDespachadas +
                        this.liquidacionTransportistas[i]["Rutas"][j]["facturasDespachadas"];
                contadorFacturasEntregadas =
                    contadorFacturasEntregadas +
                        this.liquidacionTransportistas[i]["Rutas"][j]["Contador Facturas Entregadas"];
                contadorRechazosParciales =
                    contadorRechazosParciales +
                        this.liquidacionTransportistas[i]["Rutas"][j]["Contador Rechazos Parciales"];
                contadorRechazosTotales =
                    contadorRechazosTotales +
                        this.liquidacionTransportistas[i]["Rutas"][j]["Contador Rechazos Totales"];
                totalValorFijo =
                    totalValorFijo +
                        this.liquidacionTransportistas[i]["Rutas"][j]["Valor Fijo"];
                totalValorFacturasEntregadas =
                    totalValorFacturasEntregadas +
                        this.liquidacionTransportistas[i]["Rutas"][j]["Valor Facturas Entregadas"];
                totalValorRechazosParciales =
                    totalValorRechazosParciales +
                        this.liquidacionTransportistas[i]["Rutas"][j]["Valor Rechazos Parciales"];
                totalValorRechazosTotales =
                    totalValorRechazosTotales +
                        this.liquidacionTransportistas[i]["Rutas"][j]["Valor Rechazos Totales"];
            }
            var row = [];
            row[0] = this.liquidacionTransportistas[i].Recorrido;
            row[1] = rutas.join(" ");
            row[2] = contadorFacturasDespachadas + " Facturas Despachadas";
            row[3] = "";
            row[4] = contadorFacturasEntregadas + " Facturas";
            row[5] = contadorRechazosParciales + " Facturas";
            row[6] = contadorRechazosTotales + " Facturas";
            // ! Push de la linea cabecera del dia
            dataExcel.push(row);
            // ! Generacion de las lineas de facturacion por ruta
            for (var j in this.liquidacionTransportistas[i]["Rutas"]) {
                var rowFacturacion = [];
                rowFacturacion[0] = null;
                rowFacturacion[1] = null;
                rowFacturacion[2] = this.liquidacionTransportistas[i]["Rutas"][j]["Facturas Despachadas"];
                rowFacturacion[3] = this.liquidacionTransportistas[i]["Rutas"][j]["Valor Fijo"];
                rowFacturacion[4] = this.liquidacionTransportistas[i]["Rutas"][j]["Valor Facturas Entregadas"];
                rowFacturacion[5] = this.liquidacionTransportistas[i]["Rutas"][j]["Valor Rechazos Parciales"];
                rowFacturacion[6] = this.liquidacionTransportistas[i]["Rutas"][j]["Valor Rechazos Totales"];
                dataExcel.push(rowFacturacion);
            }
            var rowSumatoria = [];
            rowSumatoria[0] = null;
            rowSumatoria[1] = null;
            rowSumatoria[2] =
                "Sumatoria dia: " +
                    this.utilService.dateStringServiceToReverseStringFormat(this.liquidacionTransportistas[i]["dia"]);
            rowSumatoria[3] = totalValorFijo;
            rowSumatoria[4] = totalValorFacturasEntregadas;
            rowSumatoria[5] = totalValorRechazosParciales;
            rowSumatoria[6] = totalValorRechazosTotales;
            dataExcel.push(rowSumatoria);
            sumatoriaMesValorFijo = sumatoriaMesValorFijo + totalValorFijo;
            sumatoriaMesFacturasEntregadas =
                sumatoriaMesFacturasEntregadas + totalValorFacturasEntregadas;
            sumatoriaMesRechazosParciales =
                sumatoriaMesRechazosParciales + totalValorRechazosParciales;
            sumatoriaMesRechazosTotales =
                sumatoriaMesRechazosTotales + totalValorRechazosTotales;
            totalAPagar =
                sumatoriaMesValorFijo +
                    sumatoriaMesFacturasEntregadas +
                    sumatoriaMesRechazosParciales +
                    sumatoriaMesRechazosTotales;
        }
        var headerExcel = [
            "Recorrido",
            "Rutas",
            "Facturas despachadas",
            "Valor Fijo",
            "Facturas Entregadas",
            "Rechazos Parciales",
            "Rechazos Totales"
        ];
        var titulo = "Tarifa Transportista " + this.utilService.dateToStringDateTitleExcelFormat(new Date());
        var fileName = "Reporte Tarifa Transportista " + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        var transportista = this.forma.controls.transportista.value;
        var patente = this.forma.controls.patente.value;
        var Anio = this.forma.controls.anio.value;
        var Mes = this.forma.controls.mes.value;
        var periodo = this.meses[Number(Mes) - 1].descMes + " - " + Anio;
        this.excelService.generateExcel(titulo, headerExcel, dataExcel, fileName, transportista, patente, periodo, sumatoriaMesValorFijo, sumatoriaMesFacturasEntregadas, sumatoriaMesRechazosParciales, sumatoriaMesRechazosTotales, this.nbono_transportista, totalAPagar);
        this.cargador.hide();
        swal("Perfecto", "Su reporte ha sido generado con exito!", "success");
    };
    // Thu Jul 18 2019 12:08:08 GMT-0400 (hora estándar de Chile) => 07
    LiquidacionComponent.prototype.dateToStringMonthFormat = function (date) {
        var mes = date.getMonth() + 1;
        var mesStr = mes < 10 ? "0" + mes : mes;
        var fechaString = "" + mesStr;
        return fechaString;
    };
    LiquidacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-liquidacion",
            template: __webpack_require__(/*! ./liquidacion.component.html */ "./src/app/routes/reportes/liquidacion/liquidacion.component.html")
        }),
        __metadata("design:paramtypes", [_core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _core_excel_excelRTT_service__WEBPACK_IMPORTED_MODULE_3__["ExcelRTTService"],
            _core_consultaService_administracionOperativa_service__WEBPACK_IMPORTED_MODULE_6__["AdministracionOperativaService"],
            _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_7__["ReportesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], LiquidacionComponent);
    return LiquidacionComponent;
}());



/***/ }),

/***/ "./src/app/routes/reportes/listadoPrecios/listadoPrecios.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/routes/reportes/listadoPrecios/listadoPrecios.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4> Reporte Listado de Precios</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\" style=\"-webkit-box-shadow: 1px 1px 5px 1px #000000; box-shadow: 1px 1px 5px 1px #000000;\">\r\n                    <div class=\"card-body\" style=\"padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;\">\r\n                        <div class=\"card-text\">\r\n                            <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                                <div class=\"form-row col-md-12\">\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Fecha: </label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input type=\"date\" class=\"form-control w-110 ph-1 text-center\" (change)=\"onFechaChange($event)\" name=\"fecha\" formControlName=\"fecha\" value=\"{{ fechaActualFormGroup | date:'yyyy-MM-dd' }}\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Reporte: </label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <select class=\"form-control pv-0\" formControlName=\"categoria\" name=\"categoria\">\r\n                                                <option *ngFor=\"let categoria of categorias\" [ngValue]=\"categoria.scodcatnegocio\">{{categoria.can_sdescatnegocio}}</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-offset-5 col-sm-6\">\r\n                                    <button class=\"btn btn-oval btn-sm\" (click)=\"generar()\">Generar</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/reportes/listadoPrecios/listadoPrecios.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/routes/reportes/listadoPrecios/listadoPrecios.component.ts ***!
  \****************************************************************************/
/*! exports provided: ListadoPreciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoPreciosComponent", function() { return ListadoPreciosComponent; });
/* harmony import */ var _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../core/consultaService/reportes.service */ "./src/app/core/consultaService/reportes.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_excel_excelRLP_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/excel/excelRLP.service */ "./src/app/core/excel/excelRLP.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
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
var ListadoPreciosComponent = /** @class */ (function () {
    function ListadoPreciosComponent(excelService, cargador, reportesService, utilService) {
        this.excelService = excelService;
        this.cargador = cargador;
        this.reportesService = reportesService;
        this.utilService = utilService;
        this.fechaActual = new Date();
        this.fechaActualFormGroup = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().split("T")[0];
        this.request = {};
        this.categorias = [
            { scodcatnegocio: "", can_sdescatnegocio: "Seleccione ..." },
            { scodcatnegocio: "67", can_sdescatnegocio: "ATC" },
            { scodcatnegocio: "17", can_sdescatnegocio: "ALMACEN A" },
            { scodcatnegocio: "94", can_sdescatnegocio: "ALMACEN B" },
            { scodcatnegocio: "95", can_sdescatnegocio: "AMBULANTES" },
            { scodcatnegocio: "96", can_sdescatnegocio: "CANALES ESPECIALIZADOS" },
            { scodcatnegocio: "97", can_sdescatnegocio: "CASH" },
            { scodcatnegocio: "62", can_sdescatnegocio: "COLEGIOS/UNIVERSIDADES" },
            { scodcatnegocio: "5", can_sdescatnegocio: "DISTRIBUIDORES" },
            { scodcatnegocio: "24", can_sdescatnegocio: "FARMACIAS" },
            { scodcatnegocio: "89", can_sdescatnegocio: "FERIA LIBRE" },
            { scodcatnegocio: "26", can_sdescatnegocio: "KIOSCOS" },
            { scodcatnegocio: "4", can_sdescatnegocio: "MAYORISTAS" },
            { scodcatnegocio: "3", can_sdescatnegocio: "MINI MARKET" },
            { scodcatnegocio: "92", can_sdescatnegocio: "MINI MARKET B" },
            { scodcatnegocio: "21", can_sdescatnegocio: "PANADERIAS Y/O PASTELERIAS" },
            { scodcatnegocio: "1", can_sdescatnegocio: "SUPERMERCADOS" },
            { scodcatnegocio: "15", can_sdescatnegocio: "TRANSPORTISTAS" }
        ];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            categoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ListadoPreciosComponent.prototype.ngOnInit = function () {
        this.setGenerar();
    };
    ListadoPreciosComponent.prototype.setGenerar = function () {
        this.forma.controls.fecha.setValue(this.utilService.dateToStringDateRequestFullFormat(new Date()));
        this.forma.controls.categoria.setValue(this.categorias[0].scodcatnegocio);
    };
    ListadoPreciosComponent.prototype.onFechaChange = function (event) {
        this.forma.patchValue({ fecha: event.target.value });
    };
    ListadoPreciosComponent.prototype.generar = function () {
        this.cargador.show();
        this.request.scodcatnegocio = this.forma.controls.categoria.value;
        this.request.sestado = "";
        this.request.sfecha = this.utilService.stringFormatSinSeparador(this.forma.controls.fecha.value);
        this.listadoPrecios();
    };
    ListadoPreciosComponent.prototype.listadoPrecios = function () {
        var _this = this;
        this.reportesService.getRptListadoPrecios(this.request).subscribe(function (data) {
            _this.cargador.hide();
            if (data.dataListadoRecorridos.length === 0 &&
                data.error.codError === 0) {
                swal("Atención", "No se encontraron resultados", "info");
            }
            else {
                if (data.dataListadoRecorridos === null) {
                    swal("Atención", "Ha ocurrido un error inesperado!", "error");
                }
                else {
                    _this.generateExcel(data.dataListadoRecorridos);
                }
            }
            if (data.error.codError !== 0) {
                swal("Atención", "Ha ocurrido un error inesperado!", "error");
            }
        }, function (error) {
            _this.cargador.hide();
            swal("Atención", "Ha ocurrido un error inesperado!", "error");
        });
    };
    ListadoPreciosComponent.prototype.generateExcel = function (data) {
        var headerExcel = [
            "COD. Articulo",
            "Descripcion",
            "Estado",
            "Precio",
            "Descuento",
            "Precio Final",
            "Categoria"
        ];
        var dataExcel = [];
        data.forEach(function (e) {
            dataExcel.push([
                e.art_scodformato + "-" + e.art_scodvariedad,
                e.art_sdescripcion,
                e.art_sdesestado,
                e.pra_nprecio,
                e.def_nporcdescto,
                e.preciocondesc,
                e.can_sdescatnegocio
            ]);
        });
        var fechaExcel = this.utilService.dateToStringDateBarFormat(this.fechaActual);
        var fechaReporte = this.utilService.dateStringServiceToReverseStringFormat(this.request.sfecha);
        var titulo = "Lista de Precios " + this.dateToStringDateTitleExcelFormat(new Date());
        var fileName = "Reporte Lista de Precios " + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        this.excelService.generateExcel(titulo, headerExcel, dataExcel, fechaExcel, fechaReporte, fileName);
        this.cargador.hide();
        swal("Perfecto", "Su reporte ha sido generado con exito!", "success");
    };
    // Funciones Auxiliares
    // Thu Jul 18 2019 12:08:08 GMT-0400 (hora estándar de Chile) => 201907
    ListadoPreciosComponent.prototype.dateToStringDateTitleExcelFormat = function (date) {
        var anio = date.getFullYear();
        var mes = date.getMonth() + 1;
        var mesStr = mes < 10 ? "0" + mes : mes;
        var fechaString = "" + anio + mesStr;
        return fechaString;
    };
    ListadoPreciosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-listado-precios",
            template: __webpack_require__(/*! ./listadoPrecios.component.html */ "./src/app/routes/reportes/listadoPrecios/listadoPrecios.component.html")
        }),
        __metadata("design:paramtypes", [_core_excel_excelRLP_service__WEBPACK_IMPORTED_MODULE_3__["ExcelRLPService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_0__["ReportesService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
    ], ListadoPreciosComponent);
    return ListadoPreciosComponent;
}());



/***/ }),

/***/ "./src/app/routes/reportes/listadoRecorrido/listadoRecorrido.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/reportes/listadoRecorrido/listadoRecorrido.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n            <h4> Reporte Listado Recorrido</h4>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"card\" style=\"-webkit-box-shadow: 1px 1px 5px 1px #000000; box-shadow: 1px 1px 5px 1px #000000;\">\r\n                        <div class=\"card-body\" style=\"padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;\">\r\n                            <div class=\"card-text\">\r\n                                <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                                    <div class=\"form-row col-md-12\">\r\n                                        <div class=\"form-group col-sm-6\">\r\n                                            <label class=\"col-sm-3 control-label\">Mes</label>\r\n                                            <div class=\"col-sm-9\">\r\n                                                <select class=\"form-control pv-0\" formControlName=\"mes\"\r\n                                                    name=\"mes\">\r\n                                                    \r\n                                                    <option *ngFor=\"let mes of meses\" [ngValue]=\"mes.codMes\">\r\n                                                        {{mes.descMes}}</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group col-sm-6\">\r\n                                            <label class=\"col-sm-3 control-label\">Año</label>\r\n                                            <div class=\"col-sm-9\">\r\n                                                <select class=\"form-control pv-0\" formControlName=\"anio\"\r\n                                                    name=\"anio\">\r\n                                                    \r\n                                                    <option *ngFor=\"let anio of anios\" [ngValue]=\"anio.codAnio\">\r\n                                                        {{anio.descAnio}}</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>                                    \r\n                                    </div>\r\n                                </form>\r\n    \r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-offset-5 col-sm-6\">\r\n                                        <button class=\"btn btn-oval btn-sm\" (click)=\"generar()\">Generar</button>\r\n                                    </div>\r\n                                </div>                                 \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/routes/reportes/listadoRecorrido/listadoRecorrido.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/routes/reportes/listadoRecorrido/listadoRecorrido.component.ts ***!
  \********************************************************************************/
/*! exports provided: listadoRecorridoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listadoRecorridoComponent", function() { return listadoRecorridoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_excel_excelRLC_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/excel/excelRLC.service */ "./src/app/core/excel/excelRLC.service.ts");
/* harmony import */ var _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/consultaService/reportes.service */ "./src/app/core/consultaService/reportes.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
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
var listadoRecorridoComponent = /** @class */ (function () {
    function listadoRecorridoComponent(cargador, authService, excelService, utilService, reportesService) {
        this.cargador = cargador;
        this.authService = authService;
        this.excelService = excelService;
        this.utilService = utilService;
        this.reportesService = reportesService;
        this.request = {};
        this.fechaActual = new Date();
        this.user = {};
        this.meses = [
            { codMes: "01", descMes: "Enero" },
            { codMes: "02", descMes: "Febrero" },
            { codMes: "03", descMes: "Marzo" },
            { codMes: "04", descMes: "Abril" },
            { codMes: "05", descMes: "Mayo" },
            { codMes: "06", descMes: "Junio" },
            { codMes: "07", descMes: "Julio" },
            { codMes: "08", descMes: "Agosto" },
            { codMes: "09", descMes: "Septiembre" },
            { codMes: "10", descMes: "Octubre" },
            { codMes: "11", descMes: "Noviembre" },
            { codMes: "12", descMes: "Diciembre" }
        ];
        this.anios = [];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            mes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            anio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    listadoRecorridoComponent.prototype.ngOnInit = function () {
        this.setGenerar();
    };
    listadoRecorridoComponent.prototype.setGenerar = function () {
        this.cargaComboAnios();
        this.forma.controls.mes.setValue(this.utilService.dateToStringMonthFormat(this.fechaActual));
        this.forma.controls.anio.setValue(this.fechaActual.getFullYear());
    };
    listadoRecorridoComponent.prototype.cargaComboAnios = function () {
        for (var i = 1900; i <= 2100; i++) {
            var anio = {
                codAnio: i,
                descAnio: "" + i
            };
            this.anios.push(anio);
        }
    };
    listadoRecorridoComponent.prototype.generar = function () {
        this.cargador.show();
        this.user = this.authService.getDatosUser();
        this.request.nrutoperador = Number(this.user.nrutoperador);
        this.Anio = this.forma.controls.anio.value;
        this.Mes = this.forma.controls.mes.value;
        var fecha = this.Anio + this.Mes;
        this.request.sfecha = fecha;
        this.listadoRecorridos();
    };
    listadoRecorridoComponent.prototype.listadoRecorridos = function () {
        var _this = this;
        this.reportesService.getDataListadoRecorridos(this.request).subscribe(function (data) {
            _this.cargador.hide();
            if (data.listadoRecorridos.length === 0 && data.error.codError === 0) {
                swal("Atención", "No se encontraron resultados", "info");
            }
            else {
                if (data.listadoRecorridos === null) {
                    swal("Atención", "Ha ocurrido un error inesperado!", "error");
                }
                else {
                    _this.generateExcel(data.listadoRecorridos);
                }
            }
            if (data.error.codError !== 0) {
                swal("Atención", "Ha ocurrido un error inesperado!", "error");
            }
        }, function (error) {
            _this.cargador.hide();
            swal("Atención", "Ha ocurrido un error inesperado!", "error");
        });
    };
    listadoRecorridoComponent.prototype.generateExcel = function (data) {
        var _this = this;
        var headerExcel = [
            "Nº",
            "Dia",
            "Fecha",
            "Nº Recorrido",
            "Localidad",
            "Transporte",
            "Desde",
            "Hasta",
            "Valor",
            "Estado",
            "Fecha",
            "Valor",
            "Diferencia"
        ];
        var dataExcel = [];
        var totalTotal = 0;
        var totalMontoPago = 0;
        data.forEach(function (e, index) {
            totalTotal += e.ntotal;
            totalMontoPago += e.nmontopago;
            dataExcel.push([
                index + 1,
                _this.utilService.dayOfWeek(e.rec_dfhorecorrido),
                _this.utilService.dateStringServiceToReverseStringFormat(e.rec_dfhorecorrido),
                e.rec_nidrecorrido,
                e.rec_sdesrecorrido,
                e.tra_srazonsocial,
                _this.utilService.formatDotNumber(e.nnumfacturadesde),
                _this.utilService.formatDotNumber(e.nnumfacturahasta),
                _this.utilService.formatDotNumber(e.ntotal),
                e.rec_scodestado,
                e.fechaliquidacion !== " "
                    ? _this.utilService.dateStringServiceToReverseStringFormat(e.fechaliquidacion)
                    : "",
                _this.utilService.formatDotNumber(e.nmontopago),
                _this.utilService.formatDotNumber(e.nmontopago - e.ntotal)
            ]);
        });
        var fechaExcel = this.utilService.dateToStringDateBarFormat(this.fechaActual);
        var titulo = "Listado Recorridos " + this.utilService.dateToStringDateTitleExcelFormat(new Date());
        var fileName = "Listado Recorridos " + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        var snombreoperador = this.user.snombreoperador;
        var totalDiferencia = totalMontoPago - totalTotal;
        this.excelService.generateExcel(titulo, headerExcel, dataExcel, fechaExcel, fileName, snombreoperador, this.utilService.formatDotNumber(totalTotal), this.utilService.formatDotNumber(totalMontoPago), this.utilService.formatDotNumber(totalDiferencia));
        this.cargador.hide();
        swal("Perfecto", "Su reporte ha sido generado con exito!", "success");
    };
    listadoRecorridoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-listado-recorrido",
            template: __webpack_require__(/*! ./listadoRecorrido.component.html */ "./src/app/routes/reportes/listadoRecorrido/listadoRecorrido.component.html")
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _core_excel_excelRLC_service__WEBPACK_IMPORTED_MODULE_3__["ExcelRLCService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_4__["ReportesService"]])
    ], listadoRecorridoComponent);
    return listadoRecorridoComponent;
}());



/***/ }),

/***/ "./src/app/routes/reportes/motivoDevolucion/motivoDevolucion.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/reportes/motivoDevolucion/motivoDevolucion.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4> Reporte Motivo Devolución</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\" style=\"-webkit-box-shadow: 1px 1px 5px 1px #000000; box-shadow: 1px 1px 5px 1px #000000;\">\r\n                    <div class=\"card-body\" style=\"padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;\">\r\n                        <div class=\"card-text\">\r\n                            <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                                <div class=\"form-row col-md-12\">\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Fecha Desde</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <input class=\"form-control w-110 ph-1 text-center\" formControlName=\"fecha\" name=\"fecha\" type=\"date\" (focusout)=\"actualizarFecha()\" />\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-offset-5 col-sm-6\">\r\n                                    <button class=\"btn btn-oval btn-sm\" (click)=\"generateExcel()\" >Generar</button>\r\n                                </div>\r\n                            </div>                           \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/reportes/motivoDevolucion/motivoDevolucion.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/routes/reportes/motivoDevolucion/motivoDevolucion.component.ts ***!
  \********************************************************************************/
/*! exports provided: MotivoDevolucionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivoDevolucionComponent", function() { return MotivoDevolucionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/consultaService/consultas.service */ "./src/app/core/consultaService/consultas.service.ts");
/* harmony import */ var _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/consultaService/reportes.service */ "./src/app/core/consultaService/reportes.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
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
var MotivoDevolucionComponent = /** @class */ (function () {
    function MotivoDevolucionComponent(cargador, authService, excelService, utilService, consultasService, ReportesService) {
        this.cargador = cargador;
        this.authService = authService;
        this.excelService = excelService;
        this.utilService = utilService;
        this.consultasService = consultasService;
        this.ReportesService = ReportesService;
        this.request = {};
        this.fechaActual = new Date();
        this.user = {};
        //Incia con fecha de hoy por defecto
        console.log(this.fechaActual);
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    MotivoDevolucionComponent.prototype.ngOnInit = function () {
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8___default.a);
        this.user = this.authService.getDatosUser();
        this.forma.controls.fecha.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        console.log('user Stock ' + this.user);
    };
    MotivoDevolucionComponent.prototype.ngOnDestroy = function () {
    };
    MotivoDevolucionComponent.prototype.generateExcel = function () {
        var _this = this;
        this.cargador.show();
        console.log('entra al metodo generarExel');
        var ListaMotivoDevolucion = [];
        this.request.nrutoperador = Number(this.user.nrutoperador);
        this.request.sfecha = (this.forma.controls.fecha.value).replace(/-/g, '');
        this.ReportesService.getRptMotivoDevolucion(this.request)
            .subscribe(function (data) {
            _this.cargador.hide();
            if (data.rptMotivoDevolucion.length == 0 && data.error.codError == 0) {
                swal("Atención", "No se encontraron resultados", "info");
            }
            else {
                ListaMotivoDevolucion = data.rptMotivoDevolucion;
                var headerExcel = [
                    'COD. TERRITORIO', 'DES. TERRITORIO', 'RUT CLIENTE', 'NOMBRE CLIENTE', 'DIRECCION',
                    'COMUNA', 'CIUDAD', 'COD. MATERIAL', 'DES. MATERIAL', 'COD. MOTIVO', 'DES. MOTIVO',
                    'Nº DOCUMENTO', 'Nº RECORRIDO', 'NOM. TRANSPORTISTA', 'PNV'
                ];
                var dataExcel = [];
                for (var i in ListaMotivoDevolucion) {
                    var articulo = [
                        ListaMotivoDevolucion[i].ter_scodterritorio,
                        ListaMotivoDevolucion[i].ter_sdesterritorio,
                        ListaMotivoDevolucion[i].cli_nrutcliente,
                        ListaMotivoDevolucion[i].sdireccionentrega,
                        ListaMotivoDevolucion[i].sdescomunaentrega,
                        ListaMotivoDevolucion[i].sdesciudadentrega,
                        '',
                        '',
                        ListaMotivoDevolucion[i].rli_scodmotivorechazo,
                        '',
                        '',
                        ListaMotivoDevolucion[i].nidrecorrido,
                        '',
                        ListaMotivoDevolucion[i].pnv,
                    ];
                    dataExcel.push(articulo);
                }
                var fechaExcel = _this.utilService.dateToLocalStringFormat(_this.fechaActual);
                var nombreExcel = 'Motivo Devolucion ' + _this.utilService.dateToStringDateFullFormat(_this.fechaActual);
                _this.excelService.generateExcel(nombreExcel, headerExcel, dataExcel, fechaExcel);
                swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
            }
        }),
            function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                console.log('error en el request');
            };
    };
    MotivoDevolucionComponent.prototype.actualizarFecha = function () {
        if (this.forma.controls.fecha.value === '') {
            this.forma.controls.fecha.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
        if (!this.utilService.DateValidator(this.forma.controls.fecha.value)) {
            this.forma.controls.fecha.setValue(this.utilService.dateToStringFormat(this.fechaActual));
        }
    };
    MotivoDevolucionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-motivo-devolucion',
            template: __webpack_require__(/*! ./motivoDevolucion.component.html */ "./src/app/routes/reportes/motivoDevolucion/motivoDevolucion.component.html")
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
            _core_consultaService_consultas_service__WEBPACK_IMPORTED_MODULE_5__["ConsultasService"],
            _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_6__["ReportesService"]])
    ], MotivoDevolucionComponent);
    return MotivoDevolucionComponent;
}());



/***/ }),

/***/ "./src/app/routes/reportes/notaCreditoDescuentoOmitido/notaCreditoDescuentoOmitido.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/routes/reportes/notaCreditoDescuentoOmitido/notaCreditoDescuentoOmitido.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <h4>Reporte Nota Crédito Descuento Omitido</h4>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\" style=\"-webkit-box-shadow: 1px 1px 5px 1px #000000; box-shadow: 1px 1px 5px 1px #000000;\">\r\n          <div class=\"card-body\"\r\n            style=\"padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;\">\r\n            <div class=\"card-text\">\r\n              <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                <div class=\"form-row col-md-12\">\r\n                  <div class=\"form-group col-sm-6\">\r\n                    <label class=\"col-sm-3 control-label\">Mes:</label>\r\n                    <div class=\"col-sm-9\">\r\n\r\n                      <select class=\"form-control pv-0\" formControlName=\"mes\" name=\"mes\" (change)=\"setMonthNumber()\">\r\n                        <option>Seleccione ..</option>\r\n                        <option *ngFor=\"let mes of meses\" [ngValue]=\"mes.numMes\">\r\n                          {{mes.nombreMes}}</option>\r\n                      </select>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group col-sm-6\">\r\n                    <label class=\"col-sm-3 control-label\">Año:</label>\r\n                    <div class=\"col-sm-9\">\r\n\r\n                      <select class=\"form-control pv-0\" formControlName=\"years\" name=\"years\" (change)=\"setYearNumber()\">\r\n                        <option>Seleccione ..</option>\r\n                        <option *ngFor=\"let year of years\" [ngValue]=\"year\">\r\n                          {{year}}</option>\r\n                      </select>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row col-md-12\">\r\n                  <div class=\"form-group col-sm-6\">\r\n                    <label class=\"col-sm-3 control-label\">Motivos:</label>\r\n                    <div class=\"col-sm-9\">\r\n\r\n                      <select class=\"form-control pv-0\" formControlName=\"motives\" name=\"motives\"\r\n                        (change)=\"sendCodigoMotivo()\">\r\n                        <option>Seleccione ..</option>\r\n                        <option value=\"\">(Todos)</option>\r\n                        <option [ngValue]=\"motivo.par_codparametro01\" *ngFor=\"let motivo of motivos\">\r\n                          {{motivo.par_deslargo01}}</option>\r\n                      </select>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-offset-5 col-sm-6\">\r\n                  <button class=\"btn btn-oval btn-sm\" (click)=\"buscar()\" type=\"button\">Buscar</button>\r\n                  <button class=\"btn btn-oval btn-sm\" (click)=\"generateExcel()\"\r\n                    [disabled]=\"!actionBtns\">Exportar</button>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row mt-4\" [hidden]=\"notasCreditos.length === 0\">\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th scope=\"col\">Fecha de emisión</th>\r\n                          <th scope=\"col\">N° Nota Crédito</th>\r\n                          <th nowrap scope=\"col\">Rut Cliente</th>\r\n                          <th scope=\"col\">Cliente</th>\r\n                          <th nowrap scope=\"col\">Local</th>\r\n                          <th scope=\"col\">Monto</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr\r\n                          *ngFor=\"let nc of notasCreditos | paginate: {itemsPerPage: 7, currentPage: pActualBuscaCliente, id: 'pageBuscaCliente'};\">\r\n                          <td>{{nc.ncr_dfhoemision}}</td>\r\n                          <td>{{nc.ncr_nnumnotacredito}}</td>\r\n                          <td>{{nc.ncr_nrutcliente + \"-\" + nc.ncr_sdigverificador}}</td>\r\n                          <td>{{nc.ncr_snombre}}</td>\r\n                          <td>{{\"(\" + nc.ncr_nnumlocal + \") \" + nc.loc_snombre}}</td>\r\n                          <td>{{this.utilService.formatDotNumber(nc.ncr_ntotal)}}</td>\r\n                          <td>\r\n                            <span class=\"table-remove\">\r\n                              <a class=\"text\" (click)=\"openModalnotaDeCredito(nc)\">\r\n                                <em class=\"fa fa-search\"></em>\r\n                              </a>\r\n                            </span>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                    <div class=\"row d-flex justify-content-end\">\r\n                      <div class=\"col-sm-3 col-3 text-right pt-3\">\r\n                        Total $: <input style=\"width: 38%;\" class=\"text-right\" type=\"text\" value={{this.utilService.formatDotNumber(sumatoria)}} disabled>\r\n                      </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"text-right\">\r\n                      <pagination-controls (pageChange)=\"pActualBuscaCliente = $event\" id=\"pageBuscaCliente\"\r\n                        previousLabel=\"Anterior\" nextLabel=\"Siguiente\" autoHide=\"true\"></pagination-controls>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/reportes/notaCreditoDescuentoOmitido/notaCreditoDescuentoOmitido.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/routes/reportes/notaCreditoDescuentoOmitido/notaCreditoDescuentoOmitido.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: NotaCreditoDescuentoOmitidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotaCreditoDescuentoOmitidoComponent", function() { return NotaCreditoDescuentoOmitidoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/consultaService/reportes.service */ "./src/app/core/consultaService/reportes.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _routes_commonPopUp_notaDeCreditoPopUp_notaDeCreditoPopUp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../routes/commonPopUp/notaDeCreditoPopUp/notaDeCreditoPopUp.component */ "./src/app/routes/commonPopUp/notaDeCreditoPopUp/notaDeCreditoPopUp.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_excel_excelNCDO_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/excel/excelNCDO.service */ "./src/app/core/excel/excelNCDO.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/util.service */ "./src/app/services/util.service.ts");
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
var NotaCreditoDescuentoOmitidoComponent = /** @class */ (function () {
    function NotaCreditoDescuentoOmitidoComponent(cargador, http, reportesService, excelService, utilService, loader, modalService) {
        this.cargador = cargador;
        this.http = http;
        this.reportesService = reportesService;
        this.excelService = excelService;
        this.utilService = utilService;
        this.loader = loader;
        this.modalService = modalService;
        this.request = { parnumparametro: 41 };
        this.user = {};
        this.notasCreditos = [];
        this.fechaActual = new Date();
        this.buscaNotasCredito = {};
        this.requestdos = {};
        this.noteDetail = {};
        this.sumatoria = 0;
        this.pActualBuscaCliente = 1;
        this.meses = [
            { nombreMes: "Enero", numMes: "01" },
            { nombreMes: "Febrero", numMes: "02" },
            { nombreMes: "Marzo", numMes: "03" },
            { nombreMes: "Abril", numMes: "04" },
            { nombreMes: "Mayo", numMes: "05" },
            { nombreMes: "Junio", numMes: "06" },
            { nombreMes: "Julio", numMes: "07" },
            { nombreMes: "Agosto", numMes: "08" },
            { nombreMes: "Septiembre", numMes: "09" },
            { nombreMes: "Octubre", numMes: "10" },
            { nombreMes: "Noviembre", numMes: "11" },
            { nombreMes: "Diciembre", numMes: "12" }
        ];
        this.years = [
            "2002",
            "2003",
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025",
            "2026",
            "2027",
            "2028",
            "2029",
            "2030"
        ];
        this.actionBtns = false;
        this.ncDescOmitRequest = {
            nrutoperador: 0,
            sfechareporte: "",
            smotivo: ""
        };
        this.detalleNCRequest = {
            nIdNotaCredito: 0,
            nNumNotaCredito: 0,
            nRutOperador: 0
        };
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            mes: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
            years: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
            motives: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("")
        });
    }
    NotaCreditoDescuentoOmitidoComponent.prototype.ngOnInit = function () {
        this.forma.controls.mes.setValue(this.dateToStringMonthFormat(this.fechaActual));
        this.forma.controls.years.setValue(String(this.fechaActual.getFullYear()));
        this.showMotivos();
        this.ncDescOmitRequest.nrutoperador = JSON.parse(localStorage.getItem("DatosUsuario"))["nrutoperador"];
        this.detalleNCRequest.nRutOperador = +JSON.parse(localStorage.getItem("DatosUsuario"))["nrutoperador"];
    };
    NotaCreditoDescuentoOmitidoComponent.prototype.ngOnDestroy = function () { };
    NotaCreditoDescuentoOmitidoComponent.prototype.showMotivos = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json",
            Accept: "*/*"
        });
        return this.http
            .post("http://10.185.204.122:8080/rest-apiDisvet-0.0.1/general/busca/parametros", {
            parnumparametro: 41
        }, { headers: headers })
            .subscribe(function (data) {
            _this.motivos = data.general;
        });
    };
    //SETTING REQUEST OBJECT
    NotaCreditoDescuentoOmitidoComponent.prototype.setFechaEmision = function () {
        this.ncDescOmitRequest.sfechareporte = "" + this.year + this.month;
    };
    NotaCreditoDescuentoOmitidoComponent.prototype.setMonthNumber = function () {
        this.month = this.forma.controls.mes.value;
    };
    NotaCreditoDescuentoOmitidoComponent.prototype.setYearNumber = function () {
        this.year = this.forma.controls.years.value;
    };
    NotaCreditoDescuentoOmitidoComponent.prototype.sendCodigoMotivo = function () {
        this.ncDescOmitRequest.smotivo = this.forma.controls.motives.value;
    };
    // BUSCAR FACTURAS
    NotaCreditoDescuentoOmitidoComponent.prototype.buscar = function () {
        var _this = this;
        this.loader.show();
        this.month = this.forma.controls.mes.value;
        this.year = this.forma.controls.years.value;
        this.periodo = this.meses[Number(this.month) - 1].nombreMes + " - " + this.year;
        console.log("this.periodo", this.periodo);
        this.setFechaEmision();
        this.sumatoria = 0;
        this.reportesService
            .getNcDescuentoOmitido(this.ncDescOmitRequest)
            .subscribe(function (data) {
            _this.loader.hide();
            if (data.descuentoOmitidoDTO === null) {
                swal("Atención", "Ha ocurrido un error inesperado!", "error");
            }
            else {
                if (data.descuentoOmitidoDTO.length === 0 &&
                    data.error.codError === 0) {
                    swal("Atención", "No se encontraron resultados", "info");
                }
                else {
                    _this.notasCreditos = data.descuentoOmitidoDTO;
                    _this.actionBtns = true;
                    _this.cargarData(data.descuentoOmitidoDTO);
                    _this.notasCreditos.forEach(function (item) {
                        _this.sumatoria += item.ncr_ntotal;
                    });
                }
            }
        }, function (error) {
            _this.loader.hide();
            swal("Atención", "Ha ocurrido un error inesperado!", "error");
        });
    };
    NotaCreditoDescuentoOmitidoComponent.prototype.cargarData = function (data) {
        this.notasForExcel = [];
        for (var i in data) {
            this.tiposNotas = "";
            var notasForExcel = {
                ncr_nrutcliente: data[i].ncr_nrutcliente,
                ncr_nidnotacredito: data[i].ncr_nidnotacredito,
                ncr_sapematerno: data[i].ncr_sapematerno,
                ncr_nnumlocal: data[i].ncr_nnumlocal,
                ncr_dfhoemision: data[i].ncr_dfhoemision,
                ncr_sapepaterno: data[i].ncr_sapepaterno,
                loc_snombre: data[i].loc_snombre,
                ncr_sdigverificador: data[i].ncr_sdigverificador,
                ncr_nnumnotacredito: data[i].ncr_nnumnotacredito,
                ncr_snombre: data[i].ncr_snombre,
                ncr_ntotal: data[i].ncr_ntotal,
                tipoPedidoModif: this.tiposNotas
            };
            this.notasForExcel.push(notasForExcel);
        }
    };
    NotaCreditoDescuentoOmitidoComponent.prototype.generateExcel = function () {
        var headerExcel = [
            "Fecha de emisión",
            "N° Nota Crédito",
            "Rut Cliente",
            "Cliente",
            "Local",
            "Monto"
        ];
        var dataExcel = [];
        for (var i in this.notasForExcel) {
            var notaCredito = [
                this.notasForExcel[i].ncr_dfhoemision,
                this.notasForExcel[i].ncr_nnumnotacredito,
                this.utilService.formatDotNumber(this.notasForExcel[i].ncr_nrutcliente) + "-" + this.notasForExcel[i].ncr_sdigverificador,
                this.notasForExcel[i].ncr_snombre,
                "(" + this.notasForExcel[i].ncr_nnumlocal + ") " + this.notasForExcel[i].loc_snombre,
                this.notasForExcel[i].ncr_ntotal
            ];
            dataExcel.push(notaCredito);
        }
        var titulo = "NC Descuento Omitido " + this.utilService.dateToStringDateTitleExcelFormat(new Date());
        var fileName = "Reporte NC por Descuento Omitido " + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        this.excelService.generateExcel(titulo, headerExcel, dataExcel, this.utilService.formatDotNumber(this.sumatoria), this.periodo, fileName);
        swal("Perfecto", "Su reporte ha sido generado con exito!", "success");
    };
    NotaCreditoDescuentoOmitidoComponent.prototype.openModalnotaDeCredito = function (nota) {
        this.request = {};
        this.origen = "notaDeCredito";
        this.request.nIdNotaCredito = nota.ncr_nidnotacredito;
        this.request.nNumNotaCredito = nota.ncr_nnumnotacredito;
        var initialState = {
            titulo: "Detalle Nota Credito",
            origen: "notaDeCredito",
            request: this.request
        };
        this.notaDeCreditoModal = this.modalService.show(_routes_commonPopUp_notaDeCreditoPopUp_notaDeCreditoPopUp_component__WEBPACK_IMPORTED_MODULE_4__["NotaDeCreditoPopUpComponent"], { initialState: initialState, backdrop: "static", keyboard: false,
            class: 'big-model-dialog' });
    };
    NotaCreditoDescuentoOmitidoComponent.prototype.dateToStringMonthFormat = function (date) {
        var mes = date.getMonth() + 1;
        var mesStr = mes < 10 ? "0" + mes : mes;
        var fechaString = "" + mesStr;
        return fechaString;
    };
    NotaCreditoDescuentoOmitidoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-notaCredito-descuento-omitido",
            template: __webpack_require__(/*! ./notaCreditoDescuentoOmitido.component.html */ "./src/app/routes/reportes/notaCreditoDescuentoOmitido/notaCreditoDescuentoOmitido.component.html")
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_2__["ReportesService"],
            _core_excel_excelNCDO_service__WEBPACK_IMPORTED_MODULE_6__["ExcelNCDOService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], NotaCreditoDescuentoOmitidoComponent);
    return NotaCreditoDescuentoOmitidoComponent;
}());



/***/ }),

/***/ "./src/app/routes/reportes/piramidal/piramidal.component.html":
/*!********************************************************************!*\
  !*** ./src/app/routes/reportes/piramidal/piramidal.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4> Reporte Piramidal</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\" style=\"-webkit-box-shadow: 1px 1px 5px 1px #000000; box-shadow: 1px 1px 5px 1px #000000;\">\r\n                    <div class=\"card-body\" style=\"padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;\">\r\n                        <div class=\"card-text\">\r\n                            <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n                                <div class=\"form-row col-md-12\">\r\n                                    <div class=\"form-group col-sm-6\">\r\n                                        <label class=\"col-sm-3 control-label\">Año</label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <select class=\"form-control pv-0\" formControlName=\"anio\" name=\"anio\">\r\n                                                <option *ngFor=\"let item of Years\" [ngValue]=\"item\">\r\n                                                    {{item}}\r\n                                                </option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-offset-5 col-sm-6\">\r\n                                    <button class=\"btn btn-oval btn-sm\" (click)=\"generateExcel()\">Generar</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/reportes/piramidal/piramidal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/routes/reportes/piramidal/piramidal.component.ts ***!
  \******************************************************************/
/*! exports provided: PiramidalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiramidalComponent", function() { return PiramidalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/excel/excel.service */ "./src/app/core/excel/excel.service.ts");
/* harmony import */ var _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/consultaService/reportes.service */ "./src/app/core/consultaService/reportes.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_7__);
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
var PiramidalComponent = /** @class */ (function () {
    function PiramidalComponent(authService, ReportesService, utilService, cargador, excelService) {
        this.authService = authService;
        this.ReportesService = ReportesService;
        this.utilService = utilService;
        this.cargador = cargador;
        this.excelService = excelService;
        this.fechaActual = new Date();
        this.request = {};
        this.user = {};
        this.Years = [];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            anio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    PiramidalComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getDatosUser();
        // console.log('user Stock ' + this.user.nrutoperador);
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_7___default.a);
        this.initData();
    };
    PiramidalComponent.prototype.initData = function () {
        for (var i = 1960; i <= 2100; i++) {
            var aux = i.toString();
            this.Years.push(aux);
        }
        this.forma.controls.anio.setValue(this.fechaActual.getFullYear());
    };
    PiramidalComponent.prototype.generateExcel = function () {
        var _this = this;
        this.cargador.show();
        this.request.nRutOperador = Number(this.user.nrutoperador);
        this.request.sAno = this.forma.controls.anio.value;
        this.ReportesService.getRptPiramidal(this.request)
            .subscribe(function (data) {
            _this.request = {};
            _this.cargador.hide();
            if (data.piramidal.length == 0 && data.error.codError == 0) {
                swal("Atención", "No se encontraron resultados", "info");
            }
            else {
                var auxData = data.piramidal;
                var headerExcel = [
                    'COD. ZONA', 'DES. ZONA', 'COD. SUPERVISOR',
                    'NOMBRE SUPERVISOR', 'COD. TERRITORIO', 'DES. TERRITORIO',
                    'RUT CLIENTE', 'NUM. LOCAL', 'COD. RELACION COMERCIAL',
                    'NOMBRE', 'DIRECCION LEGAL', 'DES. COMUNA LEGAL',
                    'DIRECCION VISITA', 'DES. COMUNA VISITA', 'DIRECCION ENTREGA',
                    'DES. COMUNA ENTREGA', 'DIRECCION PAGO', 'DES. COMUNA PAGO',
                    'COD. FRECUENCIA VISITA', 'IND. LUNES', 'IND. MARTES',
                    'IND. MIERCOLES', 'IND. JUEVES', 'IND. VIERNES', 'IND. SABADO',
                    'IND. DOMINGO', 'COD. CATEGORIA NEGOCIO', 'DES. CAT. NEGOCIO',
                    'COD. CANAL VENTA', 'COD. ESTADO', 'IND. BLOQUEO', 'FHO. ESTADO',
                    'DIAS CREDITO', 'COD. TIPO PAGO', 'DES. TIPO PAGO', 'COD. TIPO COBRO', 'DES. TIPO COBRO',
                    'KG ENERO', 'MONTO ENERO',
                    'KG FEBRERO', 'MONTO FEBRERO',
                    'KG MARZO', 'MONTO MARZO',
                    'KG ABRIL', 'MONTO ABRIL',
                    'KG MAYO', 'MONTO MAYO',
                    'KG JUNIO', 'MONTO JUNIO',
                    'KG JULIO', 'MONTO JULIO',
                    'KG AGOSTO', 'MONTO AGOSTO',
                    'KG SEPTIEMBRE', 'MONTO SEPTIEMBRE',
                    'KG OCTUBRE', 'MONTO OCTUBRE',
                    'KG NOVIEMBRE', 'MONTO NOVIEMBRE',
                    'KG DICIEMBRE', 'MONTO DICIEMBRE',
                ];
                var dataExcel = [];
                for (var i in auxData) {
                    var item = [
                        auxData[i].zon_scodzona,
                        auxData[i].zon_sdeszona,
                        auxData[i].ter_scodsupervisor,
                        auxData[i].sup_snombre,
                        auxData[i].ter_scodterritorio,
                        auxData[i].ter_sdesterritorio,
                        auxData[i].cli_nrutcliente + '-' + auxData[i].cli_sdigverificador,
                        auxData[i].loc_nnumlocal,
                        auxData[i].rco_scodrelacioncomercial,
                        auxData[i].nombre,
                        auxData[i].direccionlegal,
                        auxData[i].comunalegal,
                        auxData[i].direccionvisita,
                        auxData[i].comunavisita,
                        auxData[i].direccionentrega,
                        auxData[i].comunaentrega,
                        auxData[i].direccionpago,
                        auxData[i].comunapago,
                        auxData[i].rco_scodfrecuenciavisita,
                        auxData[i].rco_sindlunes,
                        auxData[i].rco_sindmartes,
                        auxData[i].rco_sindmiercoles,
                        auxData[i].rco_sindjueves,
                        auxData[i].rco_sindviernes,
                        auxData[i].rco_sindsabado,
                        auxData[i].rco_sinddomingo,
                        auxData[i].loc_scodcategorianegocio,
                        auxData[i].can_sdescatnegocio,
                        auxData[i].rco_scodcanalventa,
                        auxData[i].cli_scodestado,
                        auxData[i].cli_sindbloqueo,
                        auxData[i].cli_dfhoestado,
                        auxData[i].rco_ndiascredito,
                        auxData[i].rco_scodtipopago,
                        auxData[i].destipopago,
                        auxData[i].rco_scodtipocobro,
                        auxData[i].destipocobro,
                        auxData[i].kilos_enero,
                        auxData[i].pnv_enero,
                        auxData[i].kilos_febrero,
                        auxData[i].pnv_febrero,
                        auxData[i].kilos_marzo,
                        auxData[i].pnv_marzo,
                        auxData[i].kilos_abril,
                        auxData[i].pnv_abril,
                        auxData[i].kilos_mayo,
                        auxData[i].pnv_mayo,
                        auxData[i].kilos_junio,
                        auxData[i].pnv_junio,
                        auxData[i].kilos_julio,
                        auxData[i].pnv_julio,
                        auxData[i].kilos_agosto,
                        auxData[i].pnv_agosto,
                        auxData[i].kilos_septiembre,
                        auxData[i].pnv_septiembre,
                        auxData[i].kilos_octubre,
                        auxData[i].pnv_octubre,
                        auxData[i].kilos_noviembre,
                        auxData[i].pnv_noviembre,
                        auxData[i].kilos_diciembre,
                        auxData[i].pnv_diciembre
                    ];
                    dataExcel.push(item);
                }
                var fechaExcel = _this.utilService.dateToLocalStringFormat(_this.fechaActual);
                var nombreExcel = 'Piramidal ' + _this.utilService.dateToStringDateFullFormat(_this.fechaActual);
                _this.excelService.generateExcel(nombreExcel, headerExcel, dataExcel, fechaExcel);
                swal('Perfecto', 'Su reporte ha sido generado con exito!', 'success');
            }
        }),
            function (error) {
                _this.cargador.hide();
                swal('Atención', 'Ha ocurrido un error inesperado!', 'error');
                console.log('error en el request');
            };
    };
    PiramidalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-piramidal',
            template: __webpack_require__(/*! ./piramidal.component.html */ "./src/app/routes/reportes/piramidal/piramidal.component.html")
        }),
        __metadata("design:paramtypes", [_core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_5__["ReportesService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _core_excel_excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"]])
    ], PiramidalComponent);
    return PiramidalComponent;
}());



/***/ }),

/***/ "./src/app/routes/reportes/piramidalSimple/piramidalSimple.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/routes/reportes/piramidalSimple/piramidalSimple.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n        <h4> Reporte Piramidal Simple</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form ngNativeValidate [formGroup]=\"forma\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-10\">\r\n                        <label class=\"col-sm-1 control-label\">Desde:</label>\r\n                        <label class=\"col-sm-1 control-label\">Mes:</label>\r\n                        <div class=\"col-sm-2 pl-0\">\r\n                            <select class=\"form-control pv-0\" formControlName=\"desdeMes\" name=\"desdeMes\">\r\n                                <option *ngFor=\"let mes of meses\" [ngValue]=\"mes.codMes\">{{mes.descMes}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <label class=\"col-sm-1 control-label text-right\">Año</label>\r\n                        <div class=\"col-sm-2\">\r\n                            <select class=\"form-control pv-0\" formControlName=\"desdeAnio\" name=\"desdeAnio\">\r\n                                <option *ngFor=\"let anio of anios\" [ngValue]=\"anio.codAnio\">{{anio.descAnio}}</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-10\">\r\n                        <label class=\"col-sm-1 control-label\">Hasta:</label>\r\n                        <label class=\"col-sm-1 control-label\">Mes:</label>\r\n                        <div class=\"col-sm-2 pl-0\">\r\n                            <select class=\"form-control pv-0\" formControlName=\"hastaMes\" name=\"hastaMes\">\r\n                                <option *ngFor=\"let mes of meses\" [ngValue]=\"mes.codMes\">{{mes.descMes}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <label class=\"col-sm-1 control-label text-right\">Año</label>\r\n                        <div class=\"col-sm-2\">\r\n                            <select class=\"form-control pv-0\" formControlName=\"hastaAnio\" name=\"hastaAnio\">\r\n                                <option *ngFor=\"let anio of anios\" [ngValue]=\"anio.codAnio\">{{anio.descAnio}}</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-2 pr-0 mt-5\">\r\n                        <!-- <div class=\"col-sm-2 col-sm-offset-7\"> -->\r\n                        <div class=\"col-sm-2\">\r\n                            <button class=\"btn btn-oval btn-sm\" type=\"button\" (click)=\"generar()\">Generar</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/reportes/piramidalSimple/piramidalSimple.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/routes/reportes/piramidalSimple/piramidalSimple.component.ts ***!
  \******************************************************************************/
/*! exports provided: PiramidalSimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiramidalSimpleComponent", function() { return PiramidalSimpleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consultaService/auth.service */ "./src/app/core/consultaService/auth.service.ts");
/* harmony import */ var _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/consultaService/reportes.service */ "./src/app/core/consultaService/reportes.service.ts");
/* harmony import */ var _core_excel_excelRPS_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/excel/excelRPS.service */ "./src/app/core/excel/excelRPS.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/services/util.service.ts");
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
var PiramidalSimpleComponent = /** @class */ (function () {
    function PiramidalSimpleComponent(authService, reportesService, excelService, utilService, cargador) {
        this.authService = authService;
        this.reportesService = reportesService;
        this.excelService = excelService;
        this.utilService = utilService;
        this.cargador = cargador;
        this.piramidalSimpleReportes = {};
        this.request = {};
        this.clientes = {};
        this.indexPeriodos = {};
        this.fechaActual = new Date();
        this.user = {};
        this.meses = [
            { codMes: "01", descMes: "Enero" },
            { codMes: "02", descMes: "Febrero" },
            { codMes: "03", descMes: "Marzo" },
            { codMes: "04", descMes: "Abril" },
            { codMes: "05", descMes: "Mayo" },
            { codMes: "06", descMes: "Junio" },
            { codMes: "07", descMes: "Julio" },
            { codMes: "08", descMes: "Agosto" },
            { codMes: "09", descMes: "Septiembre" },
            { codMes: "10", descMes: "Octubre" },
            { codMes: "11", descMes: "Noviembre" },
            { codMes: "12", descMes: "Diciembre" }
        ];
        this.anios = [];
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            desdeAnio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            desdeMes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            hastaAnio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            hastaMes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    PiramidalSimpleComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getDatosUser();
        this.cargaComboAnios();
        this.forma.controls.desdeMes.setValue(this.dateToStringMonthFormat(this.fechaActual));
        this.forma.controls.hastaMes.setValue(this.dateToStringMonthFormat(this.fechaActual));
        this.forma.controls.desdeAnio.setValue(this.fechaActual.getFullYear());
        this.forma.controls.hastaAnio.setValue(this.fechaActual.getFullYear());
    };
    PiramidalSimpleComponent.prototype.cargaComboAnios = function () {
        for (var i = 1900; i <= 2100; i++) {
            var anio = {
                codAnio: i,
                descAnio: "" + i
            };
            this.anios.push(anio);
        }
    };
    PiramidalSimpleComponent.prototype.generar = function () {
        this.cargador.show();
        this.desdeAnio = this.forma.controls.desdeAnio.value;
        this.desdeMes = this.forma.controls.desdeMes.value;
        var desde = this.desdeAnio + this.desdeMes;
        this.desdeDate = new Date(Number(this.desdeAnio), Number(this.desdeMes) - 1);
        this.hastaAnio = this.forma.controls.hastaAnio.value;
        this.hastaMes = this.forma.controls.hastaMes.value;
        var hasta = this.hastaAnio + this.hastaMes;
        this.hastaDate = new Date(Number(this.hastaAnio), Number(this.hastaMes) - 1);
        if (this.validarEntradasFormulario()) {
            this.request.nRutOperador = Number(this.user.nrutoperador);
            this.request.sPeriodoDesde = desde;
            this.request.sPeriodoHasta = hasta;
            this.piramidalSimpleReporte();
        }
    };
    PiramidalSimpleComponent.prototype.validarEntradasFormulario = function () {
        var _validarEntradasFormulario = true;
        if (this.hastaDate < this.desdeDate) {
            swal("Atención", "La fecha 'Hasta' debe ser mayor a la fecha 'Desde'!", "error");
            _validarEntradasFormulario = false;
            this.cargador.hide();
        }
        this.periodos = this.diff_months(this.desdeDate, this.hastaDate);
        if (this.periodos >= 24) {
            swal("Atención", "Período a Consultar no debe ser mayor a 2 años!", "error");
            _validarEntradasFormulario = false;
            this.cargador.hide();
        }
        return _validarEntradasFormulario;
    };
    PiramidalSimpleComponent.prototype.piramidalSimpleReporte = function () {
        var _this = this;
        this.reportesService.getRptPiramidalSimple(this.request).subscribe(function (data) {
            _this.cargador.hide();
            if (data) {
                if (data.length == 0 && data.error.codError == 0) {
                    swal("Atención", "No se encontraron resultados", "info");
                }
                else {
                    _this.generateExcel(data.piramidal);
                }
            }
            if (data.error.codError != 0) {
                swal("Atención", "Ha ocurrido un error inesperado!", "error");
            }
        }, function (error) {
            _this.cargador.hide();
            swal("Atención", "Ha ocurrido un error inesperado!", "error");
        });
    };
    PiramidalSimpleComponent.prototype.generateExcel = function (data) {
        // ! Generacion de la cabezera excel, contadores e indices
        var headerExcel = ["Rut", "Nombre"];
        var indexPeriodo = 0;
        for (var i = Number(this.desdeAnio); i <= Number(this.hastaAnio); i++) {
            if (Number(this.desdeAnio) === Number(this.hastaAnio)) {
                for (var j = Number(this.desdeMes); j <= Number(this.hastaMes); j++) {
                    var periodoKilos = "KG   " + j + "-" + i;
                    var periodoPnv = "$   " + j + "-" + i;
                    headerExcel.push(periodoKilos);
                    headerExcel.push(periodoPnv);
                    var ind = j + "-" + i;
                    indexPeriodo += 2;
                    this.indexPeriodos[ind] = indexPeriodo;
                }
            }
            else if (i === Number(this.desdeAnio)) {
                for (var j = Number(this.desdeMes); j <= 12; j++) {
                    var periodoKilos = "KG   " + j + "-" + i;
                    var periodoPnv = "$   " + j + "-" + i;
                    headerExcel.push(periodoKilos);
                    headerExcel.push(periodoPnv);
                    var ind = j + "-" + i;
                    indexPeriodo += 2;
                    this.indexPeriodos[ind] = indexPeriodo;
                }
            }
            else if (i === Number(this.hastaAnio)) {
                for (var j = 1; j <= Number(this.hastaMes); j++) {
                    var periodoKilos = "KG   " + j + "-" + i;
                    var periodoPnv = "$   " + j + "-" + i;
                    headerExcel.push(periodoKilos);
                    headerExcel.push(periodoPnv);
                    var ind = j + "-" + i;
                    indexPeriodo += 2;
                    this.indexPeriodos[ind] = indexPeriodo;
                }
            }
            else {
                for (var j = 1; j <= 12; j++) {
                    var periodoKilos = "KG   " + j + "-" + i;
                    var periodoPnv = "$   " + j + "-" + i;
                    headerExcel.push(periodoKilos);
                    headerExcel.push(periodoPnv);
                    var ind = j + "-" + i;
                    indexPeriodo += 2;
                    this.indexPeriodos[ind] = indexPeriodo;
                }
            }
        }
        // ! Generacion del contenedor intermedio de data
        this.clientes = {};
        for (var i in data) {
            var key = this.rutFormater(data[i].cli_nrutcliente, data[i].cli_sdigverificador);
            if (!this.clientes.hasOwnProperty(key)) {
                var cliente_1 = {
                    Rut: key,
                    Nombre: data[i].nombre
                };
                this.clientes[key] = cliente_1;
            }
            var kgPvn = {
                kilos: data[i].kilos,
                pnv: data[i].pnv
            };
            var dt = this.sPeriodo2ExcelPeriodo(data[i].rpp_speriodo);
            this.clientes[key][dt] = kgPvn;
        }
        var dataExcel = [];
        var dataTotales = Array.from(Array(Number(this.periodos) * 2 + 4), function () { return 0; });
        for (var i in this.clientes) {
            var cliente = Array.from(Array(Number(this.periodos) * 2 + 4), function () { return 0; });
            cliente[0] = this.clientes[i].Rut;
            cliente[1] = this.clientes[i].Nombre;
            for (var j in this.clientes[i]) {
                if (this.indexPeriodos.hasOwnProperty(j)) {
                    cliente[this.indexPeriodos[j]] = this.clientes[i][j]["kilos"];
                    cliente[this.indexPeriodos[j] + 1] = this.clientes[i][j]["pnv"];
                    dataTotales[this.indexPeriodos[j]] = dataTotales[this.indexPeriodos[j]] + this.clientes[i][j]["kilos"];
                    dataTotales[this.indexPeriodos[j] + 1] = dataTotales[this.indexPeriodos[j] + 1] + this.clientes[i][j]["pnv"];
                }
            }
            dataExcel.push(cliente);
        }
        var fechaExcel = this.utilService.dateToLocalStringFormat(this.fechaActual);
        var titulo = "Reporte Piramidal Simple " + this.dateToStringDateTitleExcelFormat(new Date());
        var fileName = "Reporte Piramidal Simple " + this.utilService.dateToStringDateFullFormat(new Date()) + "00";
        var tamaño = Number(this.periodos * 2 + 2);
        this.excelService.generateExcel(titulo, headerExcel, dataExcel, dataTotales, fechaExcel, fileName, tamaño);
        this.cargador.hide();
        swal("Perfecto", "Su reporte ha sido generado con exito!", "success");
    };
    // Funciones Auxiliares
    PiramidalSimpleComponent.prototype.rutFormater = function (rut, digverificador) {
        return rut + "-" + digverificador;
    };
    PiramidalSimpleComponent.prototype.diff_months = function (dateFrom, dateTo) {
        return (dateTo.getMonth() -
            dateFrom.getMonth() +
            12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
    };
    PiramidalSimpleComponent.prototype.sPeriodo2ExcelPeriodo = function (rpp_speriodo) {
        //   rpp_speriodo
        //   201905 => 5-2019
        var anio = rpp_speriodo.substr(0, 4);
        var mes = String(Number(rpp_speriodo.substr(4, 2)));
        return mes + "-" + anio;
    };
    // Thu Jul 18 2019 12:08:08 GMT-0400 (hora estándar de Chile) => 201907
    PiramidalSimpleComponent.prototype.dateToStringDateTitleExcelFormat = function (date) {
        var anio = date.getFullYear();
        var mes = date.getMonth() + 1;
        var mesStr = mes < 10 ? "0" + mes : mes;
        var fechaString = "" + anio + mesStr;
        return fechaString;
    };
    // Thu Jul 18 2019 12:08:08 GMT-0400 (hora estándar de Chile) => 07
    PiramidalSimpleComponent.prototype.dateToStringMonthFormat = function (date) {
        var mes = date.getMonth() + 1;
        var mesStr = mes < 10 ? "0" + mes : mes;
        var fechaString = "" + mesStr;
        return fechaString;
    };
    PiramidalSimpleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-piramidal-simple",
            template: __webpack_require__(/*! ./piramidalSimple.component.html */ "./src/app/routes/reportes/piramidalSimple/piramidalSimple.component.html")
        }),
        __metadata("design:paramtypes", [_core_consultaService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _core_consultaService_reportes_service__WEBPACK_IMPORTED_MODULE_4__["ReportesService"],
            _core_excel_excelRPS_service__WEBPACK_IMPORTED_MODULE_5__["ExcelRPSService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], PiramidalSimpleComponent);
    return PiramidalSimpleComponent;
}());



/***/ }),

/***/ "./src/app/routes/reportes/reporte.module.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/reportes/reporte.module.ts ***!
  \***************************************************/
/*! exports provided: ReporteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteModule", function() { return ReporteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _commonPopUp_commonPopUp_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../commonPopUp/commonPopUp.module */ "./src/app/routes/commonPopUp/commonPopUp.module.ts");
/* harmony import */ var _generarReportes_generarReporte_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generarReportes/generarReporte.component */ "./src/app/routes/reportes/generarReportes/generarReporte.component.ts");
/* harmony import */ var _gestionComercial_gestionComercial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gestionComercial/gestionComercial.component */ "./src/app/routes/reportes/gestionComercial/gestionComercial.component.ts");
/* harmony import */ var _consolidadoCtasClientes_consolidadoCtasClientes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./consolidadoCtasClientes/consolidadoCtasClientes.component */ "./src/app/routes/reportes/consolidadoCtasClientes/consolidadoCtasClientes.component.ts");
/* harmony import */ var _diferenciaPrecio_diferenciaPrecio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./diferenciaPrecio/diferenciaPrecio.component */ "./src/app/routes/reportes/diferenciaPrecio/diferenciaPrecio.component.ts");
/* harmony import */ var _informesDescuenstos_informesDescuenstos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./informesDescuenstos/informesDescuenstos.component */ "./src/app/routes/reportes/informesDescuenstos/informesDescuenstos.component.ts");
/* harmony import */ var _liquidacion_liquidacion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./liquidacion/liquidacion.component */ "./src/app/routes/reportes/liquidacion/liquidacion.component.ts");
/* harmony import */ var _listadoPrecios_listadoPrecios_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./listadoPrecios/listadoPrecios.component */ "./src/app/routes/reportes/listadoPrecios/listadoPrecios.component.ts");
/* harmony import */ var _motivoDevolucion_motivoDevolucion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./motivoDevolucion/motivoDevolucion.component */ "./src/app/routes/reportes/motivoDevolucion/motivoDevolucion.component.ts");
/* harmony import */ var _notaCreditoDescuentoOmitido_notaCreditoDescuentoOmitido_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notaCreditoDescuentoOmitido/notaCreditoDescuentoOmitido.component */ "./src/app/routes/reportes/notaCreditoDescuentoOmitido/notaCreditoDescuentoOmitido.component.ts");
/* harmony import */ var _piramidal_piramidal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./piramidal/piramidal.component */ "./src/app/routes/reportes/piramidal/piramidal.component.ts");
/* harmony import */ var _accionesComerciales_accionesComerciales_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./accionesComerciales/accionesComerciales.component */ "./src/app/routes/reportes/accionesComerciales/accionesComerciales.component.ts");
/* harmony import */ var _listadoRecorrido_listadoRecorrido_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./listadoRecorrido/listadoRecorrido.component */ "./src/app/routes/reportes/listadoRecorrido/listadoRecorrido.component.ts");
/* harmony import */ var _piramidalSimple_piramidalSimple_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./piramidalSimple/piramidalSimple.component */ "./src/app/routes/reportes/piramidalSimple/piramidalSimple.component.ts");
/* harmony import */ var _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component */ "./src/app/routes/commonPopUp/buscarArticuloPopUp/buscarArticuloPopUp.component.ts");
/* harmony import */ var _commonPopUp_zonasTodasPopUp_zonasTodasPopUp_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../commonPopUp/zonasTodasPopUp/zonasTodasPopUp.component */ "./src/app/routes/commonPopUp/zonasTodasPopUp/zonasTodasPopUp.component.ts");
/* harmony import */ var _commonPopUp_operadoresPopUp_operadoresPopUp_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../commonPopUp/operadoresPopUp/operadoresPopUp.component */ "./src/app/routes/commonPopUp/operadoresPopUp/operadoresPopUp.component.ts");
/* harmony import */ var _commonPopUp_transportistasPopUp_transportistasPopUp_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../commonPopUp/transportistasPopUp/transportistasPopUp.component */ "./src/app/routes/commonPopUp/transportistasPopUp/transportistasPopUp.component.ts");
/* harmony import */ var _commonPopUp_notaDeCreditoPopUp_notaDeCreditoPopUp_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./../commonPopUp/notaDeCreditoPopUp/notaDeCreditoPopUp.component */ "./src/app/routes/commonPopUp/notaDeCreditoPopUp/notaDeCreditoPopUp.component.ts");
/* harmony import */ var _commonPopUp_relacionesComercialesPopUp_relacionesComercialesPopUp_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./../commonPopUp/relacionesComercialesPopUp/relacionesComercialesPopUp.component */ "./src/app/routes/commonPopUp/relacionesComercialesPopUp/relacionesComercialesPopUp.component.ts");
/* harmony import */ var _efectividadFuerzaDeVentas_efectividadFuerzaDeVentas_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./efectividadFuerzaDeVentas/efectividadFuerzaDeVentas.component */ "./src/app/routes/reportes/efectividadFuerzaDeVentas/efectividadFuerzaDeVentas.component.ts");
/* harmony import */ var _documentosSinFolio_documentosSinFolio_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./documentosSinFolio/documentosSinFolio.component */ "./src/app/routes/reportes/documentosSinFolio/documentosSinFolio.component.ts");
/* harmony import */ var _abastecimientoItemCero_abastecimientoItemCero_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./abastecimientoItemCero/abastecimientoItemCero.component */ "./src/app/routes/reportes/abastecimientoItemCero/abastecimientoItemCero.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var routes = [
    { path: "gestionComercial", component: _gestionComercial_gestionComercial_component__WEBPACK_IMPORTED_MODULE_7__["GestionComercialComponent"] },
    { path: "accionesComerciales", component: _accionesComerciales_accionesComerciales_component__WEBPACK_IMPORTED_MODULE_16__["AccionComercialesComponent"] },
    { path: "consolidadoCtasClientes", component: _consolidadoCtasClientes_consolidadoCtasClientes_component__WEBPACK_IMPORTED_MODULE_8__["ConsolidadoCtasClientesComponent"] },
    { path: "diferenciaPrecio", component: _diferenciaPrecio_diferenciaPrecio_component__WEBPACK_IMPORTED_MODULE_9__["DiferenciaPrecioComponent"] },
    { path: "informesDescuenstos", component: _informesDescuenstos_informesDescuenstos_component__WEBPACK_IMPORTED_MODULE_10__["InformesDescuenstosComponent"] },
    { path: "liquidacion", component: _liquidacion_liquidacion_component__WEBPACK_IMPORTED_MODULE_11__["LiquidacionComponent"] },
    { path: "listadoPrecios", component: _listadoPrecios_listadoPrecios_component__WEBPACK_IMPORTED_MODULE_12__["ListadoPreciosComponent"] },
    { path: "motivoDevolucion", component: _motivoDevolucion_motivoDevolucion_component__WEBPACK_IMPORTED_MODULE_13__["MotivoDevolucionComponent"] },
    { path: "notaCreditoDescuento", component: _notaCreditoDescuentoOmitido_notaCreditoDescuentoOmitido_component__WEBPACK_IMPORTED_MODULE_14__["NotaCreditoDescuentoOmitidoComponent"] },
    { path: "piramidal", component: _piramidal_piramidal_component__WEBPACK_IMPORTED_MODULE_15__["PiramidalComponent"] },
    { path: "listadoRecorrido", component: _listadoRecorrido_listadoRecorrido_component__WEBPACK_IMPORTED_MODULE_17__["listadoRecorridoComponent"] },
    { path: "piramidalSimple", component: _piramidalSimple_piramidalSimple_component__WEBPACK_IMPORTED_MODULE_18__["PiramidalSimpleComponent"] },
    { path: "accionesComerciales", component: _accionesComerciales_accionesComerciales_component__WEBPACK_IMPORTED_MODULE_16__["AccionComercialesComponent"] },
    { path: 'efectividadFuerzaDeVentas', component: _efectividadFuerzaDeVentas_efectividadFuerzaDeVentas_component__WEBPACK_IMPORTED_MODULE_25__["EfectividadFuerzaDeVentasComponent"] },
    { path: 'documentosSinFolio', component: _documentosSinFolio_documentosSinFolio_component__WEBPACK_IMPORTED_MODULE_26__["DocumentosSinFolioComponent"] },
    { path: 'abastecimientoItemsCero', component: _abastecimientoItemCero_abastecimientoItemCero_component__WEBPACK_IMPORTED_MODULE_27__["AbastecimientoItemsCeroComponent"] }
];
var ReporteModule = /** @class */ (function () {
    function ReporteModule() {
    }
    ReporteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                _commonPopUp_commonPopUp_module__WEBPACK_IMPORTED_MODULE_5__["CommonPopUpModule"]
            ],
            declarations: [
                _generarReportes_generarReporte_component__WEBPACK_IMPORTED_MODULE_6__["GenerarReporteComponent"],
                _gestionComercial_gestionComercial_component__WEBPACK_IMPORTED_MODULE_7__["GestionComercialComponent"],
                _accionesComerciales_accionesComerciales_component__WEBPACK_IMPORTED_MODULE_16__["AccionComercialesComponent"],
                _consolidadoCtasClientes_consolidadoCtasClientes_component__WEBPACK_IMPORTED_MODULE_8__["ConsolidadoCtasClientesComponent"],
                _diferenciaPrecio_diferenciaPrecio_component__WEBPACK_IMPORTED_MODULE_9__["DiferenciaPrecioComponent"],
                _informesDescuenstos_informesDescuenstos_component__WEBPACK_IMPORTED_MODULE_10__["InformesDescuenstosComponent"],
                _liquidacion_liquidacion_component__WEBPACK_IMPORTED_MODULE_11__["LiquidacionComponent"],
                _abastecimientoItemCero_abastecimientoItemCero_component__WEBPACK_IMPORTED_MODULE_27__["AbastecimientoItemsCeroComponent"],
                _listadoPrecios_listadoPrecios_component__WEBPACK_IMPORTED_MODULE_12__["ListadoPreciosComponent"],
                _motivoDevolucion_motivoDevolucion_component__WEBPACK_IMPORTED_MODULE_13__["MotivoDevolucionComponent"],
                _notaCreditoDescuentoOmitido_notaCreditoDescuentoOmitido_component__WEBPACK_IMPORTED_MODULE_14__["NotaCreditoDescuentoOmitidoComponent"],
                _piramidal_piramidal_component__WEBPACK_IMPORTED_MODULE_15__["PiramidalComponent"],
                _listadoRecorrido_listadoRecorrido_component__WEBPACK_IMPORTED_MODULE_17__["listadoRecorridoComponent"],
                _piramidalSimple_piramidalSimple_component__WEBPACK_IMPORTED_MODULE_18__["PiramidalSimpleComponent"],
                _efectividadFuerzaDeVentas_efectividadFuerzaDeVentas_component__WEBPACK_IMPORTED_MODULE_25__["EfectividadFuerzaDeVentasComponent"],
                _documentosSinFolio_documentosSinFolio_component__WEBPACK_IMPORTED_MODULE_26__["DocumentosSinFolioComponent"]
            ],
            entryComponents: [
                _commonPopUp_operadoresPopUp_operadoresPopUp_component__WEBPACK_IMPORTED_MODULE_21__["OperadoresPopUpComponent"],
                _commonPopUp_transportistasPopUp_transportistasPopUp_component__WEBPACK_IMPORTED_MODULE_22__["TransportistasPopUpComponent"],
                _commonPopUp_buscarArticuloPopUp_buscarArticuloPopUp_component__WEBPACK_IMPORTED_MODULE_19__["BuscarArticuloPopUpComponent"],
                _commonPopUp_zonasTodasPopUp_zonasTodasPopUp_component__WEBPACK_IMPORTED_MODULE_20__["ZonasTodasPopUpComponent"],
                _commonPopUp_notaDeCreditoPopUp_notaDeCreditoPopUp_component__WEBPACK_IMPORTED_MODULE_23__["NotaDeCreditoPopUpComponent"],
                _commonPopUp_relacionesComercialesPopUp_relacionesComercialesPopUp_component__WEBPACK_IMPORTED_MODULE_24__["RelacionesComercialesPopUpComponent"]
            ]
        })
    ], ReporteModule);
    return ReporteModule;
}());



/***/ })

}]);
//# sourceMappingURL=reportes-reporte-module.js.map