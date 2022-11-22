const marcadorjugador = document.querySelector("#marcadorjugador") 
const marcadorpc = document.querySelector("#marcadorpc")


function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function eleccion(jugada){
  let resultado = ""
  if(jugada == 1){
    resultado = "piedra ✊"
} else if( jugada == 2){
    resultado = "papel ✋"
} else if(jugada == 3){
    resultado = "tijera ✌️"
} else {
resultado = "mal elegido"
}
return resultado
}


function combate(pc,jugador){
    // combate 
    let u;
    let p;
if(pc == jugador){
    alert("empate ")
    }else if (jugador == 1 && pc == 3){
    alert("ganaste")
    u=parseInt(marcadorjugador.textContent)
    p=u+1;
    marcadorjugador.textContent=p;
    } else if (jugador == 2 && pc == 1 ){
    alert("ganaste")
    u=parseInt(marcadorjugador.textContent)
    p=u+1;
    marcadorjugador.textContent=p;
    } else if (jugador == 3 && pc == 2){
    alert("ganaste")
    u=parseInt(marcadorjugador.textContent)
    p=u+1;
    marcadorjugador.textContent=p;
    }else{
    alert("Perdiste")
    u=parseInt(marcadorpc.textContent)
    p=u+1;
    marcadorpc.textContent=p;
    }
}

const piedra = document.querySelector("#piedra");

piedra.addEventListener("click",()=>{
let jugador = 0 
let pc = aleatorio(1,3)
alert("pc elige " + eleccion(pc) )

jugador=1;
alert("tu eliges " + eleccion(jugador))
combate(pc,jugador);
})

const papel = document.querySelector("#papel");
papel.addEventListener("click",()=>{
    let jugador = 0 
    let pc = aleatorio(1,3)
    alert("pc elige " + eleccion(pc) )
    
    jugador=2;
    alert("tu eliges " + eleccion(jugador))
    combate(pc,jugador);
    })
const tijera = document.querySelector("#tijera");
tijera.addEventListener("click",()=>{
    let jugador = 0 
    let pc = aleatorio(1,3)
    alert("pc elige " + eleccion(pc) )
    
    jugador=3;
    alert("tu eliges " + eleccion(jugador))
    combate(pc,jugador);
    })


                                