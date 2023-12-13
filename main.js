let totalEdad = 0;
let contadorPersonas = 0;

function ingresarEdad() {
  let edad = prompt("Ingresa tu edad (o ingresa 'fin' para terminar):");
  if (edad.toLowerCase() === 'fin') {
    return null; // Retorna null para indicar el fin de la entrada
  }
  return parseInt(edad);
}

while (true) {
  let edad = ingresarEdad();

  if (edad === null) {
    break; // Si se ingresa 'fin', terminar el bucle
  }

  if (isNaN(edad)) {
    alert("Por favor ingresa un número válido.");
    continue; // Volver al inicio del ciclo si no se ingresa un número válido
  }

  totalEdad += edad;
  contadorPersonas++;
}

function calcularEdadPromedio(total, cantidad) {
  if (cantidad === 0) {
    return 0;
  }
  return total / cantidad;
}

let edadPromedio = calcularEdadPromedio(totalEdad, contadorPersonas);

if (contadorPersonas > 0) {
  alert(`La edad promedio de las ${contadorPersonas} personas registradas es: ${edadPromedio.toFixed(2)}`);
  console.log(`La edad promedio de las ${contadorPersonas} personas registradas es: ${edadPromedio.toFixed(2)}`);
} else {
  alert("No se ingresaron edades válidas.");
  console.log("No se ingresaron edades válidas.");
}
