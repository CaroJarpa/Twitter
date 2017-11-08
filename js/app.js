/* llamar a boton */
var twett = document.getElementById('btn');

/*cuando se haga click se va a ejecutar la funcion */
twett.addEventListener('click', function(){

/* Ingresar al textarea, con value se agarra ese texto ingresado por el usuario*/
var texto_ingresado = document.getElementById('texto_ingresado').value;

/*luego se limpia el textarea, con esto no permanece guardado el texto que se ingreso
Para eso se ingresa un campo vacio a traves de '' */
document.getElementById('texto_ingresado').value = '';

/*a continuacion se llama al contenedor creado en el HTML*/
var receptor_texto = document.getElementById('receptor_texto');

/* tambien se crea el div que recepcionara el mensaje ingresado*/
var newtwitt = document.createElement('div');

/*No permitir que el usuario ingrese un valor vacio*/
if (texto_ingresado.leng == 0 || texto_ingresado == null) { /*si el usuario ingresa un valor 
	de longitud 0 o un valor nulo*/
	return twett.disabled =true; /*se desactiva el boton*/

	}else}
}

/*crear el nodo de texto de textarea*/
var textNewTwitt = document.createTextNode(texto_ingresado);

/*crear elemento p que es un parrafo para contener el nodo de texto, 
donde se guardara el texto ingresado por el usuario en textarea*/
var guardar_texto = document.createElement("p");

/* a cada padre le entregare el hijo que le corresponde, 
en este caso al padre texto_ingresado le agrego el hijo textNewTwitt*/
texto_ingresado.appendChild(textNewTwitt);

