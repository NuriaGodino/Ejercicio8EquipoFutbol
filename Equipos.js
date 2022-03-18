class Equipo {
    constructor() {
        this._id = 0;
        this._nombre = "";
        this._fechaFundacion = new Date();
        this._jugador = [];
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
        this._historial = new Historial();
    }
    get historial() {
        return this._historial;
    }
    set historial(value) {
        this._historial = value;
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
class Historial {
    constructor() {
        this._id = 0;
        this._numGoles = 0;
        this._numTarjetasAmarillas = 0;
        this._numTarjetasRojas;
    }
    get numTarjetasRojas() {
        return this._numTarjetasRojas;
    }
    set numTarjetasRojas(value) {
        this._numTarjetasRojas = value;
    }
    get numTarjetasAmarillas() {
        return this._numTarjetasAmarillas;
    }
    set numTarjetasAmarillas(value) {
        this._numTarjetasAmarillas = value;
    }
    get numGoles() {
        return this._numGoles;
    }
    set numGoles(value) {
        this._numGoles = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
//Creacion Historial
var historial1 = new Historial();
var historial2 = new Historial();
var historial3 = new Historial();
var historial4 = new Historial();
var historial5 = new Historial();
var historial6 = new Historial();
historial1.id = 1;
historial1.numGoles = 1;
historial1.numTarjetasAmarillas = 0;
historial1.numTarjetasRojas = 1;
historial2.id = 2;
historial2.numGoles = 2;
historial2.numTarjetasAmarillas = 0;
historial2.numTarjetasRojas = 0;
historial3.id = 3;
historial3.numGoles = 0;
historial3.numTarjetasAmarillas = 0;
historial3.numTarjetasRojas = 1;
historial4.id = 4;
historial4.numGoles = 4;
historial4.numTarjetasAmarillas = 0;
historial4.numTarjetasRojas = 0;
historial5.id = 5;
historial5.numGoles = 1;
historial5.numTarjetasAmarillas = 2;
historial5.numTarjetasRojas = 0;
historial6.id = 6;
historial6.numGoles = 1;
historial6.numTarjetasAmarillas = 0;
historial6.numTarjetasRojas = 1;
//Creacion de jugadores
var jugador1 = new Jugador();
var jugador2 = new Jugador();
var jugador3 = new Jugador();
var jugador4 = new Jugador();
var jugador5 = new Jugador();
var jugador6 = new Jugador();
jugador1.id = 1;
jugador1.edad = 25;
jugador1.nombre = "Tony Stark";
jugador1.pais = "EEUU";
jugador1.historial = historial1;
jugador2.id = 2;
jugador2.edad = 25;
jugador2.nombre = "Steve Rogers";
jugador2.pais = "EEUU";
jugador2.historial = historial2;
jugador3.id = 3;
jugador3.edad = 26;
jugador3.nombre = "Wanda Maximoff";
jugador3.pais = "Sokovia";
jugador3.historial = historial3;
jugador4.id = 4;
jugador4.edad = 17;
jugador4.nombre = "Peter Parker";
jugador4.pais = "EEUU";
jugador4.historial = historial4;
jugador5.id = 5;
jugador5.edad = 40;
jugador5.nombre = "Dr Octopus";
jugador5.pais = "EEUU";
jugador5.historial = historial5;
jugador6.id = 6;
jugador6.edad = 39;
jugador6.nombre = "Thanos";
jugador6.pais = "Titan";
jugador6.historial = historial6;
//Creacion de equipos
let equipo1 = new Equipo();
let equipo2 = new Equipo();
equipo1.id = 1;
equipo1.nombre = "Heroes";
equipo1.fechaFundacion = new Date(1996, 11, 5);
equipo1.jugador.push(jugador1);
equipo1.jugador.push(jugador2);
equipo1.jugador.push(jugador3);
equipo1.jugador.push(jugador4);
equipo2.id = 2;
equipo2.nombre = "Villanos";
equipo2.fechaFundacion = new Date(1997, 5, 5);
equipo2.jugador.push(jugador5);
equipo2.jugador.push(jugador6);
//Mostrando
console.log("****************Mostrando un historial****************");
console.log(historial1);
console.log("***************Mostrando jugadores*****************");
console.log(jugador1);
console.log(jugador2);
console.log("**************Mostrando equipos*****************");
console.log(equipo1);
console.log(equipo2);
