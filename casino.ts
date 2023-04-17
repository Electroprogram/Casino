
import { Ruleta } from "./Ruleta";

import  { Tragamonedas } from  "./Tragamonedas";



export class Casino {
    private ruleta: Ruleta;
    private tragamonedas: Tragamonedas;


constructor (ruleta: Ruleta, tragamonedas:Tragamonedas){
    this. ruleta = ruleta;
    this.tragamonedas = tragamonedas;
}


public jugarRuleta(){
    this.ruleta.girarRuleta();
}

public jugarTragamonedas (){
    this.tragamonedas.girarRodillos();
}



}
