import { JuegoDeCasino } from "./juegoDeCasino";

//creo la clase hija llamada Ruleta .....
export class Ruleta extends JuegoDeCasino{
private NumeroDeCasillero: number;

constructor(nombreJuego: string, precio: number, NumeroDeCasillero: number ) {
    super(nombreJuego, precio);
    this.NumeroDeCasillero=NumeroDeCasillero;
}

public getNumeroDeCasillero():number{
    return this.NumeroDeCasillero;
}
public setNumeroDeCasillero (numeroDeCasillero:number):void{
    this.NumeroDeCasillero = numeroDeCasillero;
}

public girarRuleta():void{
 console.log(`La bolilla ha caido en el numero ${this.NumeroDeCasillero}`);
}


}


