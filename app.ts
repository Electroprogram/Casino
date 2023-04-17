import {JuegoDeCasino} from "./juegoDeCasino"
import {Tragamonedas} from "./Tragamonedas"
import {Ruleta} from "./Ruleta"
import { Casino } from "./Casino";

// creo una instancia  de la clase Tragamonedas


const miTragamonedas = new Tragamonedas( "Tragamonedas 1",7,4);

console.log(`El Precio de Juego es ${miTragamonedas.getPrecio()}`);

miTragamonedas.juegoElegido();
miTragamonedas.girarRodillos();

//creo la instancia de la clase Ruleta

const miRuleta =new Ruleta ("Ruleta 1",11,32);
console.log(`Precio del juego:${miRuleta.getPrecio()}`);


miRuleta.juegoElegido();
miRuleta.girarRuleta ();

// Creo la instancia de la clase Casino 

const miCasino = new Casino(miRuleta,miTragamonedas);
miCasino.jugarTragamonedas();
miCasino.jugarRuleta();