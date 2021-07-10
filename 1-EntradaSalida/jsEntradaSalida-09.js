/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importeSueldo;
	var resultado;

	importeSueldo = txtIdSueldo.value;
	importeSueldo = parseFloat(importeSueldo);

	resultado = importeSueldo * 1.1;

	txtIdResultado.value = resultado;
			
	alert("El total es: "+ resultado);
}
//txtIdSueldo
//txtIdResultado