"use strict";
// creo una clase hija llamada Tragamonedas  que hereda de JuegoDeCasino
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Tragamonedas = void 0;
var juegoDeCasino_1 = require("./juegoDeCasino");
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas(nombre, precio, numeroDeCoincidencias) {
        var _this = _super.call(this, nombre, precio) || this;
        _this.numeroDecoincidencias = numeroDeCoincidencias;
        return _this;
    }
    Tragamonedas.prototype.getNumeroDeCoincidencias = function () {
        return this.numeroDecoincidencias;
    };
    Tragamonedas.prototype.setNumeroDeCoincidencias = function (numeroDeCoincidencias) {
        this.numeroDecoincidencias = numeroDeCoincidencias;
    };
    Tragamonedas.prototype.girarRodillos = function () {
        console.log("Has logrado ".concat(this.numeroDecoincidencias, " coincidencias"));
    };
    return Tragamonedas;
}(juegoDeCasino_1.JuegoDeCasino));
exports.Tragamonedas = Tragamonedas;
