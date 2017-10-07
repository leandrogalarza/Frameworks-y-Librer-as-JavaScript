var segundos = 0;
var minutos = 2; 
var control;

function iniciarReloj () {
	control = setInterval(reloj,1000);
}

function pararReloj () {
	segundos = 0;
	minutos = 2;
	clearInterval(control);
	timer.innerHTML = "02:00";
}

function reloj () {
	if (segundos == 0){
		segundos =+ 60
		minutos = minutos-1 
	}	

	if (segundos <= 60){
		segundos--

	if (segundos < 10){
		segundos = "0"+segundos
	}

}
if ((minutos == 0) && (segundos == 0)){
	timer.innerHTML = "00:00";
	pararReloj();
	juegoTerminado();
//	alert("Game Over")// texto que indique que perdio
	} else {
	timer.innerHTML = "0"+minutos+":"+segundos;
	}

}
