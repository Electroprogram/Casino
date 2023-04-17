"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(ruleta, tragamonedas) {
        this.ruleta = ruleta;
        this.tragamonedas = tragamonedas;
    }
    Casino.prototype.jugarRuleta = function () {
        this.ruleta.girarRuleta();
    };
    Casino.prototype.jugarTragamonedas = function () {
        this.tragamonedas.girarRodillos();
    };
    return Casino;
}());
exports.Casino = Casino;
