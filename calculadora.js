// Funciones para cada operación
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        alert("No se puede dividir por cero");
        return "";
    }
    return a / b;
}

// Función principal para ejecutar la operación seleccionada
function calculadora() {
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    const operacion = document.getElementById("operacion").value;
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    // Ejecutar la operación basada en la selección
    switch (operacion) {
        case "suma":
            resultado = sumar(num1, num2);
            break;
        case "resta":
            resultado = restar(num1, num2);
            break;
        case "multiplicacion":
            resultado = multiplicar(num1, num2);
            break;
        case "division":
            resultado = dividir(num1, num2);
            break;
        default:
            alert("Operación no válida");
            return;
    }

    document.getElementById("resultado").value = resultado;
}
