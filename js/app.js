var inicioJuego = 0;
var colorActual = "amarillo";
var puntuacion = 0;
var movimientos = 0;

// carga la pagina
$(document).ready(function () {
	// funcion sobre el titulo
	setInterval(function(){
		//valor inicial del titulo amarillo
	if (colorActual == "amarillo"){
		//si es amarillo cambia a blanco
		$(".main-titulo").css("color", "white")
		//cambia valor a blanco
		colorActual = "blanco"
		//en cambio si es blanco 
	} else if (colorActual == "blanco") {
		//cambia a amarillo
		$(".main-titulo").css("color", "yellow")
		// vambia valor a amarillo
		colorActual="amarillo"
	}
	//funcion cada 1 segundo
	},1000);
});

// funcion que se activa al oprimir el boton INICIO
$(".btn-reinicio").click(function(){
	switch (inicioJuego) {
		case 0:
			// Cambia el texto por Reiniciar
			$(this).html("Reiniciar");
			// Llama a la función de cargar las imágenes
			ObtenerImagenes();
			// Cambia el valor de inicioJuego
			inicioJuego = 1;
			break;
		case 1:
			// borra el contenido del tablero
			$("img").remove();
			// reinicia el reloj
			pararReloj();
			// puntos vuelve a 0
			puntuacion = 0;
			$("#score-text").html("0");
			// movimientos vuelve a 0
			movimientos = 0;
			$("#movimientos-text").html("0");
			// vuelvo a cargar las imagenes
			ObtenerImagenes();
			break;
		case 2:	
			// Vuelve a estado inicial de carga		
			location.reload();
			break;
		}

	});

function ObtenerImagenes(){
	// Recorro las filas	
	for (var j = 1; j < 8; j++) { 
	// Recorro las columnas
		for (var i = 0; i < 8; i++) {
			// declaro a las imagenes
			var caramelo = new Image();
	     	// declaro el numero aleatorio de las imagenes
	     	var numeroImagen = Math.floor(Math.random() * 4) + 1;
	     	//numeroImagen = 1
	     	// declaro y concateno la ruta de la imagen aleatoria
	     	var src = "image/"+numeroImagen+".png"
	     	// declaro y concateno el id que le doy a cada imagen
	    	var id = j+""+i
			// asigno la ruta
		   	caramelo.src = src;
		   	// asigno el id
	    	caramelo.id = id;
	    	//caramlelo.css = "scale= 10%";
	    	// agrego a cada columna las imagenes con los atributos expuestos
	    	$(".col-"+i).append(caramelo)
	    	// Achica tamaño
    		$("img").attr("width","89%");
		}
	}
	// Inicia el relojj en pantalla
	iniciarReloj();
	// Comienza el juego comprobando si hay coincidencias en las filas
	comprobarFilas();
	// activa movimientos
	movimiento();
};


function comprobarFilas(){
	// Recorre las columnas
	for (var columna = 1; columna < 8; columna++) {
	 	// Recorro las filas
		for (var fila = 1; fila < 8; fila++) { 
			// Declaro variables para solo para escribir menos codigo en los condicionales
			var c1 = ($("#"+fila+""+columna).attr("src"))
			var c2 = ($("#"+Number(fila+1)+""+columna).attr("src"))
			var c3 = ($("#"+Number(fila+2)+""+columna).attr("src"))
			var c4 = ($("#"+Number(fila+3)+""+columna).attr("src"))
			var c5 = ($("#"+Number(fila+4)+""+columna).attr("src"))
			var c6 = ($("#"+Number(fila+5)+""+columna).attr("src"))
			var c7 = ($("#"+Number(fila+6)+""+columna).attr("src"))

			// Condicional, si se repite el atributo src en 7 imagenes consecutivas
			if ((c1 == c2) && (c1 == c3) && (c1 == c4) && (c1 == c5) && (c1 == c6) && (c1 == c7)) {
				$("#"+fila+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+1)+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+2)+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+3)+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+4)+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+5)+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+6)+""+columna).attr("class", "eliminar");
				puntuacion = puntuacion + 70
				break;
			// Condicional, si se repite el atributo src en 6 imagenes consecutivas	
			} else if ((c1 == c2) && (c1 == c3) && (c1 == c4) && (c1 == c5) && (c1 == c6)) {
				$("#"+fila+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+1)+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+2)+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+3)+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+4)+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+5)+""+columna).attr("class", "eliminar");
				puntuacion = puntuacion + 60
				break;
			// Condicional, si se repite el atributo src en 5 imagenes consecutivas
			} else if ((c1 == c2) && (c1 == c3) && (c1 == c4) && (c1 == c5)) {
				$("#"+fila+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+1)+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+2)+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+3)+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+4)+""+columna).attr("class", "eliminar");
				puntuacion = puntuacion + 50
				break;
			// Condicional, si se repite el atributo src en 4 imagenes consecutivas
			} else if ((c1 == c2) && (c1 == c3) && (c1 == c4)) {
				$("#"+fila+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+1)+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+2)+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+3)+""+columna).attr("class", "eliminar");
				puntuacion = puntuacion + 40
				break;
			// Condicional, si se repite el atributo src en 3 imagenes consecutivas	
			} else if ((c1 == c2) && (c1 == c3)) {
				$("#"+fila+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+1)+""+columna).attr("class", "eliminar");
				$("#"+Number(fila+2)+""+columna).attr("class", "eliminar");
				puntuacion = puntuacion + 40
			}
		}
 	}
	// paso a comprobar las columnas
	comprobarColumnas();
};

function comprobarColumnas(){
	// Recorre las filas
	for (var fila = 1; fila < 8; fila++) { 
		// Recorre las columnas
	 	for (var columna = 1; columna < 8; columna++) {
	 		// Declaro variables para solo para escribir menos codigo en los condicionales
	 		var c1 = ($("#"+fila+""+columna).attr("src"))
			var c2 = ($("#"+fila+""+Number(columna+1)).attr("src"))
			var c3 = ($("#"+fila+""+Number(columna+2)).attr("src"))
			var c4 = ($("#"+fila+""+Number(columna+3)).attr("src"))
			var c5 = ($("#"+fila+""+Number(columna+4)).attr("src"))
			var c6 = ($("#"+fila+""+Number(columna+5)).attr("src"))
			var c7 = ($("#"+fila+""+Number(columna+6)).attr("src"))
			// Condicional, si se repite el atributo src en 7 imagenes consecutivas
	 		if ((c1 == c2) && (c1 == c3) && (c1 == c4) && (c1 == c5) && (c1 == c6) && (c1 == c7)) {
				$("#"+fila+""+columna).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+1)).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+2)).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+3)).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+4)).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+5)).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+6)).attr("class", "eliminar");
				puntuacion = puntuacion + 70
				break;
			// Condicional, si se repite el atributo src en 6 imagenes consecutivas	
			} else if ((c1 == c2) && (c1 == c3) && (c1 == c4) && (c1 == c5) && (c1 == c6)) {
				$("#"+fila+""+columna).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+1)).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+2)).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+3)).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+4)).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+5)).attr("class", "eliminar");
				puntuacion = puntuacion + 60
				break;
			// Condicional, si se repite el atributo src en 5 imagenes consecutivas	
			} else if ((c1 == c2) && (c1 == c3) && (c1 == c4) && (c1 == c5)) {
				$("#"+fila+""+columna).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+1)).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+2)).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+3)).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+4)).attr("class", "eliminar");
				puntuacion = puntuacion + 50
				break;
			// Condicional, si se repite el atributo src en 4 imagenes consecutivas
			} else if ((c1 == c2) && (c1 == c3) && (c1 == c4)) {
				$("#"+fila+""+columna).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+1)).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+2)).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+3)).attr("class", "eliminar");
				puntuacion = puntuacion + 40
				break;
			// Condicional, si se repite el atributo src en 3 imagenes consecutivas
			} else if ((c1 == c2) && (c1 == c3)) {
				$("#"+fila+""+columna).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+1)).attr("class", "eliminar");
				$("#"+fila+""+Number(columna+2)).attr("class", "eliminar");
				puntuacion = puntuacion + 30
			}
		}
 	}
	// llama a la función para que elimine todos los caramelos seleccionados
	eliminarCaramamelos();
	
};

function eliminarCaramamelos(){
	// Selecciona los elementos con la clase eliminar, agrega efecto de jqueryUI, y borra las imagenes
	$(".eliminar").effect("explode", 1000, function borrar(){
	// borra el elemento
	$(this).remove();
	// cuenta la cantidad de piezas
	var cantidad = $("img").length;
	// Si el numero de piezas es menor a 35
		if (cantidad < 50){
			// Entonces rellena
			rellenar();
		}
	});
	// Imprime en pantalla la puntuación acumulada
	$("#score-text").html(puntuacion);
};

function rellenar(){
var cantidad;
var faltante;
// Recorre las columnas	
	for (var columna = 1; columna < 8; columna++) {
		// Determina la cantidad de pizas por cada columna
		cantidad = $(".col-"+columna).children().length;
		// Establece el faltante
		faltante = 7 - cantidad;
		// Condicional si el faltante es distinto a 0
		if (faltante !=0){
			// Recorre la cantidad faltante agregando las imagenes
			for	(var agrega = cantidad; agrega < 7; agrega++){
				var image = new Image();
		    	var numeroImagen = Math.floor(Math.random() * 4) + 1;
			   	var src = "image/"+numeroImagen+".png";
			   	image.src = src;
				// Adiciona la imagen
				
		    	$(".col-"+columna).prepend(image);
    
		    	// Achica tamaño
		    	$("img").attr("width","89%");
			}
		}
	}
// Vuelve a reasignar las piezas en el tablero
queue = true
reasignar();

};

function reasignar(){
// Recorre las columnas
	for (var columna = 1; columna < 8; columna++) {
	// Recorre las filas
		for (var fila = 1; fila < 8; fila++) { 
			// Asigna id
			$($(".col-"+columna).children()[fila-1]).attr("id", fila+""+columna)
		}
	}
// Vuelve a comprobar si hay coincidencias
comprobarFilas();
// Vuelve a activar la posibilidad de movimiento para las imagenes nuevas
movimiento();
// Se genera un bucle siempre y cuando la cantidad de fichas sea menor a 35
}

function movimiento(){
// Metodo para poder mover las imagenes
  $("img").draggable({
  	// Dentro del tablero
    containment: ".panel-tablero",
    // Destino las mismas imagenes
    droppable: $("img"),
    revert: true,
    // Duracion del intercambio
    revertDuration: 1000,
    zIndex: 10,
    // Limita el movimiento dentro del tablero
	drag: limitarmovimiento
  });

// Metodo para poder recibir las imagenes drag
  $("img").droppable({
  	tolerance:"intersect",
  	// Función que realiza el cambio de atributos
 	drop: intercambioAtributos
  });
}

function intercambioAtributos(event, imagen1) {
	// Declara la imagen de origen  
	var imagen1 = $(imagen1.draggable);
  	// Toma el atributo src
	var imagen1src = imagen1.attr("src");

	// Declara el destino
    var imagen2 = $(this);
    // Capta el atributo src
    var imagen2src = imagen2.attr('src');
  
  	// Limita solo poder intercambiar entre la imagen que esta arriba, abajo, izquierda o derecha
    var der= Number($(imagen1).attr("id"))+1;
    var izq= Number($(imagen1).attr("id"))-1;
    var arr= Number($(imagen1).attr("id"))-10;
    var aba= Number($(imagen1).attr("id"))+10;

    // Si cumple con la condicion de que el origen y el destino se encuentran al lado
	if (($(imagen2).attr("id") == der) || ($(imagen2).attr("id") == izq) || ($(imagen2).attr("id") == arr) || ($(imagen2).attr("id") == aba)) {
		// Intercambia
		imagen1.attr("src", imagen2src) 
		imagen2.attr("src", imagen1src) 
		// Si el movimiento es válido suma movimiento
		movimientos = movimientos + 1
		// Imprime movimiento
		$("#movimientos-text").html(movimientos);
	}
	// Comprueba nuevas coincidencias
	comprobarFilas();
}

function limitarmovimiento(){
// ya limitado por el containment: ".panel-tablero",
}


function juegoTerminado(){
// Esconde el panel del juego
$(".panel-tablero, .time").hide(1000);

// Agrega Juego terminado
$("<div class= 'game_over' ><h2 class='data-titulo'>Juego Terminado</h2></div>").insertBefore($(".score"));
// Centra texto 
$(".game_over").css("text-align", "center")
// Animación de la puntuacion y movimientos
$(".score, .moves, .panel-score").animate(
	// Cambio de atributos
    {
   	height: "80%",
   	marginTop: "20",
   	marginBottom: "20",
   	width: "100%"
    }, 1000, function gamefin(){
    	// Otro efecto sobre Juego Terminado
		$(".game_over").effect("shake", 1000);
    })
// Agranda el boton
$(".buttons").css("height", "60");
$(".btn-reinicio").html("Volver");
//cambia variable para volver
inicioJuego = 2
}

