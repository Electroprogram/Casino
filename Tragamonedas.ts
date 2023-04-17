// creo una clase hija llamada Tragamonedas  que hereda de JuegoDeCasino

import { JuegoDeCasino } from "./juegoDeCasino";

export class Tragamonedas extends JuegoDeCasino{
    private numeroDecoincidencias: number;


constructor (nombre: string, precio: number, numeroDeCoincidencias: number){
    super (nombre,precio);
    this.numeroDecoincidencias = numeroDeCoincidencias;
}

public getNumeroDeCoincidencias(): number{
    return this.numeroDecoincidencias;
}

public setNumeroDeCoincidencias (numeroDeCoincidencias:number):void{
    this.numeroDecoincidencias=numeroDeCoincidencias
}
 public girarRodillos():void{
    console.log(`Has logrado ${this.numeroDecoincidencias} coincidencias`);
 }
 }
