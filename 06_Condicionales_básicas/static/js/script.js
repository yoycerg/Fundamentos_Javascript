//conparar dos palabras para ver quien tiene mas letras y muestra cual tiene mas letras y cual tiene menos letras}
function compararPalabras() {
    let palabra1 = prompt("Ingrese la primera palabra:");
    let palabra2 = prompt("Ingrese la segunda palabra:");

    if (palabra1.length > palabra2.length) {
        alert("La palabra '" + palabra1 + "' tiene más letras que '" + palabra2 + "'.");
    } else if (palabra1.length < palabra2.length) {
        alert("La palabra '" + palabra2 + "' tiene más letras que '" + palabra1 + "'.");
    } else {
        alert("Ambas palabras tienen la misma cantidad de letras.");
    }
}

// Pide al usuario que ingrese un correo. Verifica si el texto contiene el símbolo @. Si lo tiene, muestra "Correo válido", si no, "Correo inválido".

function verificarCorreo() {
    let correo = prompt("Ingrese su correo electrónico:");

    if (correo.includes("@gmail.com")) {
        alert("Correo válido " + correo);
    } else {
        alert("Correo inválido");
    }
}

//   Verificar si un número es positivo o negativo Solicita un número. Muestra si es positivo, negativo o cero.

function verificarNumero() {
    let numero = parseFloat(prompt("Ingrese un número:"));

    if (numero > 0) {
        alert("El número " + numero + " es positivo.");
    } else if (numero < 0) {
        alert("El número " + numero + " es negativo.");
    } else {
        alert("El número es cero.");
    }
}


// Saludo personalizado según hora Pide la hora actual (en formato 24 horas). Si es antes de las 12, muestra "Buenos días", si es entre 12 y 18, "Buenas tardes", y si es mayor a 18, "Buenas noches".


function saludoPorHora() {
    let hora = parseInt(prompt("Ingrese la hora actual (0-23):"));

    if (hora >= 0 && hora < 12) {
        alert("Buenos días");
    } else if (hora >= 12 && hora < 18) {
        alert("Buenas tardes");
    } else if (hora >= 18 && hora < 24) {
        alert("Buenas noches");
    } else {
        alert("Hora inválida. Por favor, ingrese una hora entre 0 y 23.");
    }
}


//  Verificar si una palabra contiene la letra "e" Solicita una palabra. Verifica si contiene la letra "e" (minúscula). Si la tiene, muestra "Contiene la letra 'e'", si no, muestra "No contiene la letra 'e'".

function verificarLetraE() {
    let palabra = prompt("Ingrese una palabra:");

    if (palabra.includes("e")) {
        alert("Contiene la letra 'e'");
    } else {
        alert("No contiene la letra 'e'");
    }
}
