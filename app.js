"use strict";
exports.__esModule = true;
var Tragamonedas_1 = require("./Tragamonedas");
var Ruleta_1 = require("./Ruleta");
var Casino_1 = require("./Casino");
// creo una instancia  de la clase Tragamonedas
var miTragamonedas = new Tragamonedas_1.Tragamonedas("Tragamonedas 1", 7, 4);
console.log("El Precio de Juego es ".concat(miTragamonedas.getPrecio()));
miTragamonedas.juegoElegido();
miTragamonedas.girarRodillos();
//creo la instancia de la clase Ruleta
var miRuleta = new Ruleta_1.Ruleta("Ruleta 1", 11, 32);
console.log("Precio del juego:".concat(miRuleta.getPrecio()));
miRuleta.juegoElegido();
miRuleta.girarRuleta();
// Creo la instancia de la clase Casino 
var miCasino = new Casino_1.Casino(miRuleta, miTragamonedas);
miCasino.jugarTragamonedas();
miCasino.jugarRuleta();
