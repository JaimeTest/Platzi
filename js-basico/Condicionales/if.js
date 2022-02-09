var pie = "piedra";
var pap = "papel";
var tij = "tijera";

var resultado;
var usuario;
var cpu;

var winner;
//0 = perdio; 1 = empato; 2 = gano
function ppot(usuario,cpu){
    if (usuario == pie) {
        if (cpu == pie) {
            resultado = 1;
        } else if (cpu == pap) {
            resultado = 0;
        } else {
            resultado = 2; 
        }
    } else if (usuario == pap) {
        if (cpu == pie) {
            resultado = 2;
        } else if (cpu == pap) {
            resultado = 1;
        } else {
            resultado = 0; 
        }
    } else {
        if (cpu == pie) {
            resultado = 0;
        } else if (cpu == pap) {
            resultado = 2;
        } else {
            resultado = 1; 
        }    
    }
    
    if (resultado == 0) {
        console.log("Gano el cpu");
    } else if (resultado == 1) {
        console.log("empataron");
    } else {
        console.log("ganaste");
    }
}

