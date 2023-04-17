// Creo la clase JuegoDeCasino

export class JuegoDeCasino{
    private nombreJuego:string;
    private precio: number;
    

    constructor(NombreJuego: string, precio:number){
        this.nombreJuego = NombreJuego;
        this.precio = precio;
    }

    public getPrecio(): number{
        return this.precio;
    }
    
    public setPrecio(precio:number): void{
        this.precio = precio
    }

    public getNombreJuego():string{
        return this.nombreJuego;
    }

    public setNombreJuego(nombreJuego:string):void{
        this.nombreJuego = nombreJuego

    }

    public juegoElegido(): void{
        console.log (`Estas jugando al juego ${this.nombreJuego}`);
    }
    }
