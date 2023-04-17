"use strict";
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
exports.Ruleta = void 0;
var juegoDeCasino_1 = require("./juegoDeCasino");
//creo la clase hija llamada Ruleta .....
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta(nombreJuego, precio, NumeroDeCasillero) {
        var _this = _super.call(this, nombreJuego, precio) || this;
        _this.NumeroDeCasillero = NumeroDeCasillero;
        return _this;
    }
    Ruleta.prototype.getNumeroDeCasillero = function () {
        return this.NumeroDeCasillero;
    };
    Ruleta.prototype.setNumeroDeCasillero = function (numeroDeCasillero) {
        this.NumeroDeCasillero = numeroDeCasillero;
    };
    Ruleta.prototype.girarRuleta = function () {
        console.log("La bolilla ha caido en el numero ".concat(this.NumeroDeCasillero));
    };
    return Ruleta;
}(juegoDeCasino_1.JuegoDeCasino));
exports.Ruleta = Ruleta;
