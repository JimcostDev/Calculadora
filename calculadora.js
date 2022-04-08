function getOperacion(){
	operacion = document.getElementById('operacion').value;
	return operacion;
}

function getNumeroUno(){
	x = parseFloat(document.getElementById('numero1').value);
	return x;
}

function getNumeroDos(){
	y = parseFloat(document.getElementById('numero2').value);
	return y;
}

function ejecutarOperacion(){
	if (getOperacion() == 'suma'){
		console.log('entre-suma')
		suma();
	} else if (getOperacion() == 'resta'){
		console.log('entre-resta')
		resta();
	} else if (getOperacion() == 'division'){
		console.log('entre-division')
		division();
	} else if (getOperacion() == 'multiplicacion'){
		console.log('entre-multiplicacion')
		multiplicacion();
	} else {
		alert ('No elegiste una operación correcta');
	}


	function suma(x, y){
		var x = getNumeroUno();
		var y = getNumeroDos();
		var resultado = x + y;
		console.log(resultado);
		document.getElementById('resultado').value = resultado;
	}

	function resta(x, y){
		var x = getNumeroUno();
		var y = getNumeroDos();
		var resultado = x - y;
		console.log(resultado);
		document.getElementById('resultado').value = resultado;
	}
	
	function division(x, y){
		var x = getNumeroUno();
		var y = getNumeroDos();
		var resultado;
		if (y == 0){
			resultado = 'No se puede dividir entre cero';
		}else{
			resultado = x / y;
			console.log(resultado);
		}
		document.getElementById('resultado').value = resultado;
	}
	
	function multiplicacion(x, y){
		var x = getNumeroUno();
		var y = getNumeroDos();
		var resultado = x * y;
		console.log(resultado);
		document.getElementById('resultado').value = resultado;
	}
}



