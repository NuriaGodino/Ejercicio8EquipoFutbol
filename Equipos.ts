class Equipo{
    private _id: number;
    private _nombre: string;
    private _fechaFundacion: Date;

    private _jugador: Jugador[];

    public get jugador(): Jugador[] {
        return this._jugador;
    }
    public set jugador(value: Jugador[]) {
        this._jugador = value;
    }

    constructor(){
        this._id = 0;
        this._nombre = ""
        this._fechaFundacion = new Date()
        this._jugador = []
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

    private _historial: Historial;

    public get historial(): Historial {
        return this._historial;
    }
    public set historial(value: Historial) {
        this._historial = value;
    }

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
        this._historial = new Historial()
    }
}

class Historial{
    private _id: number;
    private _numGoles: number;
    private _numTarjetasAmarillas: number;
    private _numTarjetasRojas: number;

    constructor(){
        this._id = 0
        this._numGoles = 0
        this._numTarjetasAmarillas = 0
        this._numTarjetasRojas
    }

    public get numTarjetasRojas(): number {
        return this._numTarjetasRojas;
    }
    public set numTarjetasRojas(value: number) {
        this._numTarjetasRojas = value;
    }
    public get numTarjetasAmarillas(): number {
        return this._numTarjetasAmarillas;
    }
    public set numTarjetasAmarillas(value: number) {
        this._numTarjetasAmarillas = value;
    }
    public get numGoles(): number {
        return this._numGoles;
    }
    public set numGoles(value: number) {
        this._numGoles = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

}

//Creacion Historial
var historial1:Historial = new Historial();
var historial2:Historial = new Historial();
var historial3:Historial = new Historial();
var historial4:Historial = new Historial();
var historial5:Historial = new Historial();
var historial6:Historial = new Historial();

historial1.id = 1
historial1.numGoles = 1
historial1.numTarjetasAmarillas = 0
historial1.numTarjetasRojas = 1

historial2.id = 2
historial2.numGoles = 2
historial2.numTarjetasAmarillas = 0
historial2.numTarjetasRojas = 0

historial3.id = 3
historial3.numGoles = 0
historial3.numTarjetasAmarillas = 0
historial3.numTarjetasRojas = 1

historial4.id = 4
historial4.numGoles = 4
historial4.numTarjetasAmarillas = 0
historial4.numTarjetasRojas = 0

historial5.id = 5
historial5.numGoles = 1
historial5.numTarjetasAmarillas = 2
historial5.numTarjetasRojas = 0

historial6.id = 6
historial6.numGoles = 1
historial6.numTarjetasAmarillas = 0
historial6.numTarjetasRojas = 1



//Creacion de jugadores
var jugador1:Jugador = new Jugador()
var jugador2:Jugador = new Jugador()
var jugador3:Jugador = new Jugador()
var jugador4:Jugador = new Jugador()
var jugador5:Jugador = new Jugador()
var jugador6:Jugador = new Jugador()

jugador1.id = 1;
jugador1.edad = 25;
jugador1.nombre = "Tony Stark"
jugador1.pais = "EEUU"
jugador1.historial = historial1

jugador2.id = 2;
jugador2.edad = 25;
jugador2.nombre = "Steve Rogers"
jugador2.pais = "EEUU"
jugador2.historial = historial2

jugador3.id = 3;
jugador3.edad = 26;
jugador3.nombre = "Wanda Maximoff"
jugador3.pais = "Sokovia"
jugador3.historial = historial3

jugador4.id = 4;
jugador4.edad = 17;
jugador4.nombre = "Peter Parker"
jugador4.pais = "EEUU"
jugador4.historial = historial4

jugador5.id = 5;
jugador5.edad = 40;
jugador5.nombre = "Dr Octopus"
jugador5.pais = "EEUU"
jugador5.historial = historial5

jugador6.id = 6;
jugador6.edad = 39;
jugador6.nombre = "Thanos"
jugador6.pais = "Titan"
jugador6.historial = historial6

//Creacion de equipos
let equipo1:Equipo = new Equipo()
let equipo2:Equipo = new Equipo()

equipo1.id = 1;
equipo1.nombre = "Heroes"
equipo1.fechaFundacion = new Date(1996, 11, 5)
equipo1.jugador.push(jugador1)
equipo1.jugador.push(jugador2)
equipo1.jugador.push(jugador3)
equipo1.jugador.push(jugador4)


equipo2.id = 2;
equipo2.nombre = "Villanos"
equipo2.fechaFundacion = new Date(1997, 5, 5)
equipo2.jugador.push(jugador5)
equipo2.jugador.push(jugador6)

//Mostrando
console.log("****************Mostrando un historial****************")
console.log(historial1)
console.log("***************Mostrando jugadores*****************")
console.log(jugador1)
console.log(jugador2)
console.log("**************Mostrando equipos*****************")
console.log(equipo1)
console.log(equipo2)