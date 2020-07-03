
numero1 = document.getElementById("txt1").value
umero2 = document.getElementById("txt2").value

condicion = prompt ("¿Qué desea hacer?")

if(condicion = "0"){
  	suma1 = (numero1+numero2)
	alert ("El resultado de la suma es: " + suma1)
}
else{
	condicion1 = prompt ("¿Qué desea hacer?")
}if(condicion1 = "1"){
	multiplica = (numero1*numero2)
	alert ("El resultado de la multiplicación es: " + multiplica)
}else{ 
	condicion2 = prompt ("¿Qué desea hacer?")
}if(condicion2 = "2"){
	dividir = (numero1/numero2)
	alert ("El resultado de la divición es: " + dividir)
}else{
	condicion3 = prompt ("¿Qué desea hacer?")
}if(condicion3 = "3"){
	promedio = (numero1+numero2)/2
	alert("El promedio es: " + promedio)
}
