// 1. Costo de un viaje en taxi
function costoTaxi() {
  let distancia = parseFloat(prompt("Ingrese la distancia del viaje en km:"));
  let tarifaBase = 4000;
  let valorKm = 1800;
  let total = tarifaBase + (distancia * valorKm);

  alert("Distancia: " + distancia + " km. Tarifa base: $" + tarifaBase + ". Valor por km: $" + valorKm + ". Total a pagar: $" + total);
}

// 2. Calculo del IMC
function calcularIMC() {
  let peso = parseFloat(prompt("Ingrese su peso en kg:"));
  let altura = parseFloat(prompt("Ingrese su altura en metros (ej: 1.75):"));
  let imc = peso / (altura * altura);

  alert("Peso: " + peso + " kg. Altura: " + altura + " m. Su IMC es: " + imc);
}

// 3. Precio de entrada al cine
function precioCine() {
  let edad = parseInt(prompt("Ingrese la edad de la persona:"));
  let dia = prompt("Que dia es? (escriba: normal o fin de semana)");

  let precio = 0;

  if (edad < 5) {
    precio = 0;
  } else if (edad <= 12) {
    if (dia == "fin de semana") {
      precio = 8000;
    } else {
      precio = 6000;
    }
  } else if (edad <= 60) {
    if (dia == "fin de semana") {
      precio = 15000;
    } else {
      precio = 12000;
    }
  } else {
    if (dia == "fin de semana") {
      precio = 10000;
    } else {
      precio = 8000;
    }
  }

  alert("Edad: " + edad + " años. Dia: " + dia + ". Precio de la entrada: $" + precio);
}

// 4. Descuento en una tienda
function descuentoTienda() {
  let valorCompra = parseFloat(prompt("Ingrese el valor total de la compra:"));
  let descuento = 0;
  let porcentaje = 0;

  if (valorCompra >= 500000) {
    porcentaje = 20;
  } else if (valorCompra >= 200000) {
    porcentaje = 10;
  } else if (valorCompra >= 100000) {
    porcentaje = 5;
  } else {
    porcentaje = 0;
  }

  descuento = valorCompra * (porcentaje / 100);
  let totalPagar = valorCompra - descuento;

  alert("Valor de la compra: $" + valorCompra + ". Descuento: " + porcentaje + "%. Total a pagar: $" + totalPagar);
}

// 5. Contar numeros positivos
function contarPositivos() {
  let cantidad = parseInt(prompt("Cuantos numeros va a ingresar?"));
  let positivos = 0;

  for (let i = 1; i <= cantidad; i++) {
    let num = parseFloat(prompt("Ingrese el numero " + i + ":"));
    if (num > 0) {
      positivos = positivos + 1;
    }
  }

  alert("De los " + cantidad + " numeros ingresados, " + positivos + " fueron positivos.");
}

// 6. Calcular el factorial
function calcularFactorial() {
  let num = parseInt(prompt("Ingrese un numero entero positivo:"));

  if (num < 0) {
    alert("El factorial no esta definido para numeros negativos.");
    return;
  }

  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }

  alert("El factorial de " + num + " es: " + factorial);
}