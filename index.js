
numero1 = document.getElementById("txt1").value
numero2 = document.getElementById("txt2").value

condicion = prompt ("¿Qué desea hacer?")

if(condicion = "sumar"){
  	suma1 = (numero1 + numero2)
	alert ("El resultado de la suma es: " + suma1)
}
else if(condicion = "multiplicar"){
	multiplica = (numero1*numero2)
	alert ("El resultado de la multiplicación es: " + multiplica)
}
else if(condicion = "dividir"){
	dividir = (numero1/numero2)
	alert ("El resultado de la divición es: " + dividir)
}
else if(condicion = "promedio"){
	promedio = (numero1+numero2)/2
	alert("El promedio es: " + promedio)
}
