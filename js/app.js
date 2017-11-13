
function add(){
	/*obtener el comentario ingresado en textarea*/
	var tweet = document.getElementById('texto_ingresado').value;//

	/* limpiar el textarea*/
	document.getElementById('texto_ingresado').value = "";//

	/*pasar comentario ingresado a contenedor que se creo en html*/
	var contenedor = document.getElementById('receptor_texto');//

	/*cada comentario pasa al div receptor de texto */
	var newtweet = document.createElement('div');//

	/*el nuevo comentario ira al div receptor de texto pero que sera blanco*/
	newtweet.setAttribute('class', 'cajita')//

	/*hay que crear un parrafo*/
	var paragraph = document.createElement('p');//

	/*no permitir que textarea no tenga un tweet*/
	if(tweet == 0 || tweet== null){
		alert('Tienes que escribir un tweet');
		return false;
	}
	/*Se transforman las variables en un nodo de texto*/
	var nodoText = document.createTextNode(tweet);
	paragraph.appendChild(nodoText);
	newtweet.appendChild(paragraph);
	contenedor.appendChild(newtweet);
}

/*contador de texto*/
function long(){
	var twitter= document.getElementById('texto_ingresado').value;
	var largo= twitter.length;
	var max = 140;
	var	contador = document.getElementById('contador');
	contador.innerHTML = max-twitter.length ;

}
function contar(){ 
     document.forms[0].caracteres.value=document.forms[0].texto.value.length 
}  

/*el textarea se agranda segun la cantidad de caracteres ingresados*/

	var textarea = document.getElementById("texto_ingresado");
	var limit = 140;

	texto_ingresado.oninput = function() {
 	textarea.style.height = "";
  	textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px";
}

/*cambio de colores*/



///////////////////////////////////////
