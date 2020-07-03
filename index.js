
numero1 = document.getElementById("txt1").value
numero2 = document.getElementById("txt2").value

condicion = prompt ("¿Qué desea hacer?")

if (condicion == "0"){
  	suma1 = (numero1+numero2)
	alert ("El resultado de la suma es: " + suma1)
}
else if (condicion == "1"){
	multiplica = (numero1*numero2)
	alert ("El resultado de la multiplicación es: " + multiplica)
}
else if (condicion == "2"){
	dividir = (numero1/numero2)
	alert ("El resultado de la divición es: " + dividir)
}
else if (condicion == "3"){
	promedio = (numero1+numero2)/2
	alert("El promedio es: " + promedio)
}
else if (condicion == "4"){
	resta = (numero1-numero2)
	alert = ("El resultado de la suma es: " + resta)
}