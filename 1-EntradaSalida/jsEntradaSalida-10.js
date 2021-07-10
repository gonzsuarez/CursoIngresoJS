/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeSueldo;
	var descuento;
	var sueldoFinal;
	var resultado;

	importeSueldo = txtIdImporte.value;
	importeSueldo = parseFloat(importeSueldo);

	descuento = importeSueldo * 0.25;
	sueldoFinal= importeSueldo - descuento;

	txtIdResultado.value = sueldoFinal;
			
	alert("El total es: "+ sueldoFinal);
}
