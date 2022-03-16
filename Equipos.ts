class Equipo{
    private _id: number;
    private _nombre: string;
    private _fechaFundacion: Date;

    private _jugador: Jugador;

    public get jugador(): Jugador {
        return this._jugador;
    }
    public set jugador(value: Jugador) {
        this._jugador = value;
    }


    constructor(){
        this._id = 0;
        this._nombre = ""
        this._fechaFundacion = new Date()
        this._jugador = new Jugador()
    }

    public get fechaFundacion(): Date {
        return this._fechaFundacion;
    }
    public set fechaFundacion(value: Date) {
        this._fechaFundacion = value;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}

class Jugador{
    private _id: number;
    private _nombre: string;
    private _edad: number;
    private _pais: string;

    public get pais(): string {
        return this._pais;
    }
    public set pais(value: string) {
        this._pais = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }

    constructor(){
        this._edad = 0
        this._id = 0
        this._nombre = ""
        this._pais = ""
    }
}
var jugador1:Jugador = new Jugador()
jugador1.id = 1;
jugador1.edad = 25;
jugador1.nombre = "Tony Stark"
jugador1.pais = "EEUU"
var jugador2:Jugador = new Jugador()
jugador2.id = 2;
jugador2.edad = 25;
jugador2.nombre = "Steve Rogers"
jugador2.pais = "EEUU"
let equipo1:Equipo = new Equipo()
equipo1.id = 1;
equipo1.nombre = "Real Madrid"
equipo1.fechaFundacion = new Date(1996, 11, 5)
equipo1.jugador = jugador1
equipo1.jugador = jugador2
console.log(equipo1)