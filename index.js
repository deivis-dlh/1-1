
numero1 = document.getElementById("txt1").value
umero2 = document.getElementById("txt2").value

condicion = prompt ("¿Qué desea hacer?")

if (condicion = sumar){
  	suma1 = (numero1 + numero2)
	alert ("El resultado de la suma es: " + suma1)
}
else{
	condicion2 = prompt ("¿Qué desea hacer?")
}if(condicion2 = multiplicar){
	multiplica = (numero1*numero2)
	alert ("El resultado de la multiplicación es: " + multiplica)
}else{ 
	condicion3 = prompt ("¿Qué desea hacer?")
}if(condicion3 = dividir){
	dividir = (numero1/numero2)
	alert ("El resultado de la divición es: " + dividir)
}else{
	condicion4 = prompt ("¿Qué desea hacer?")
}if(condicion4 = promedio){
	promedio = (numero1+numero2)/2
	alert("El promedio es: " + promedio)
}
