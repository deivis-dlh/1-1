
campo1 = document.getElementById('txt1')
campo2 = document.getElementById('txt2')
result = document.getElementById('res')

let numero1
let numero2

boton = document.getElementById('send')
boton.addEventListener('click', main)

function main()
{
	numero1 = parseInt(campo1.value)
	numero2 = parseInt(campo2.value)

	condicion = document.getElementById('cars').value 

	if(condicion == "0"){
		  result.innerText = (numero1 + numero2)
	}
	else if(condicion == "1"){
			 result.innerText = (numero1*numero2)
	}
	else if(condicion == "2"){
			result.innerText = (numero1/numero2)
	}
	else if(condicion == "3"){
			result.innerText = (numero1+numero2)/2
	}
	else if(condicion == "4"){
			result.innerText = (numero1-numero2)
	}
}
