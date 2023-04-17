"use strict";
// Creo la clase JuegoDeCasino
exports.__esModule = true;
exports.JuegoDeCasino = void 0;
var JuegoDeCasino = /** @class */ (function () {
    function JuegoDeCasino(NombreJuego, precio) {
        this.nombreJuego = NombreJuego;
        this.precio = precio;
    }
    JuegoDeCasino.prototype.getPrecio = function () {
        return this.precio;
    };
    JuegoDeCasino.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    JuegoDeCasino.prototype.getNombreJuego = function () {
        return this.nombreJuego;
    };
    JuegoDeCasino.prototype.setNombreJuego = function (nombreJuego) {
        this.nombreJuego = nombreJuego;
    };
    JuegoDeCasino.prototype.juegoElegido = function () {
        console.log("Estas jugando al juego ".concat(this.nombreJuego));
    };
    return JuegoDeCasino;
}());
exports.JuegoDeCasino = JuegoDeCasino;
