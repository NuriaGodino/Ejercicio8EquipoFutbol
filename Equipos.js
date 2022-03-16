class Equipo {
    constructor() {
        this._id = 0;
        this._nombre = "";
        this._fechaFundacion = new Date();
        this._jugador = new Jugador();
    }
    get jugador() {
        return this._jugador;
    }
    set jugador(value) {
        this._jugador = value;
    }
    get fechaFundacion() {
        return this._fechaFundacion;
    }
    set fechaFundacion(value) {
        this._fechaFundacion = value;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
class Jugador {
    constructor() {
        this._edad = 0;
        this._id = 0;
        this._nombre = "";
        this._pais = "";
    }
    get pais() {
        return this._pais;
    }
    set pais(value) {
        this._pais = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get edad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
}
var jugador1 = new Jugador();
jugador1.id = 1;
jugador1.edad = 25;
jugador1.nombre = "Tony Stark";
jugador1.pais = "EEUU";
var jugador2 = new Jugador();
jugador2.id = 2;
jugador2.edad = 25;
jugador2.nombre = "Steve Rogers";
jugador2.pais = "EEUU";
let equipo1 = new Equipo();
equipo1.id = 1;
equipo1.nombre = "Real Madrid";
equipo1.fechaFundacion = new Date(1996, 11, 5);
equipo1.jugador = jugador1;
equipo1.jugador = jugador2;
console.log(equipo1);
