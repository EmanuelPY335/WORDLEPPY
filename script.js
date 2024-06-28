const h1 = document.getElementById("titulo"); 
const button = document.getElementById("guess-button");
const input = document.getElementById("guess-input");
const GRID = document.getElementById("grid");
const attemp = document.getElementById("intentosR");

let intentos = 6;
const diccionario = ["PAPAS","ARBOL","FELIZ","PELAO","PEPAS","JAGUA","XDLOL","LETRA","LIBRO","POLLO","FRITO","MOUSE","RATON","ARROZ","HUEVO","PRESS","BARNI"];
const ran = Math.floor(Math.random() * (diccionario.length));
const palabra = diccionario[ran];
const valor = input.value;

function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}

window.addEventListener('load', init);

function Intentar(){
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#82B805";
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
	intentos--;
    attemp.textContent = "intentos restantes " + intentos;
    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!😎</h1>")
        const audiop4 = document.getElementById("miAudio3");
        const audiop2 = document.getElementById("Audio");
        audiop2.pause();
        audiop4.play();
        return
    }
    if (intentos == 0){
        terminar("<h1>PERDISTE!💀</h1>")
        const audiop = document.getElementById("miAudio");
        const audiop2 = document.getElementById("Audio");
        const audiop3 = document.getElementById("miAudio2");
        audiop2.pause();
        audiop.play();
        audiop3.play();
    }

}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
    const reintentar = document.createElement("button");
    reintentar.innerHTML = "Reintentar";
    reintentar.id = "reset";
    GRID.appendChild(reintentar);
    reintentar.onclick = function () {
        location.reload();  
    }
    

}


function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    
    if(intento.length < 5){
        for(let i = intento.length; i < 5; i++){
            intento += "-";
        }
    }
    else if(intento.length > 5){
        intento = intento.substring(0,5);
    }

    intento = intento.toUpperCase(); 
    return intento;
}



button.addEventListener(
    "click",
    Intentar
)  

