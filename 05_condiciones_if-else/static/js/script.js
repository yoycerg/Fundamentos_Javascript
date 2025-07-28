//Ejercicio Condiciones IF - ELSE
console.log("Conexión con js establecida...");

/* Edad pa votar
solicita la edad del usuario mediante promt().
Muestra con alert() si puede votar
(18 años o mas) o no.
*/

function edadVotar() {
    let edad = parseInt(prompt("Ingrese su edad: ")); // Input conversíon string a número
    //Condición IF - else if - else 
    if (edad >= 18) {
        alert("Su edad " + edad + " aprobada para votar.")
    } else if (edad >= 0 && edad < 18) {
        alert("Su edad " + edad + " no esta aprobada para votar.")

    } else {
        alert("Ingrese un valor válido")
    }
}
// Verificar contraseña
function contrasenaValidad() {
    let contrasena = "1234";
    let pass = prompt("Ingrese su contraseña: ")
    if (pass == contrasena) {
        alert("acceso permitido...");

    } else {
        alert("Acceso denegado")

    }

}

// ejemplo de MOD --> modulo de divición = resto

function verificarParImpar() {
    let numero = parseInt(prompt("Ingrese un número: "));
    if (numero % 2 == 1) {
        alert("El número " + numero + " es par.");
    } else if (numero % 2 == 0) {
        alert("El número " + numero + " es impar.")
    }
    else {
        alert("Ingrese un número válido.")
    }

}
// Verificar la temperatura
function verificarTemperatura() {

    let temperatura = parseInt(prompt("Ingrese la temperatura:"));
    if (temperatura >= 30) {
        alert("Hace calor")
    } else if (temperatura <= 30) {
        alert("Clima agradable")
    }
    else {
        alert("Ingrese un valor válido.")
    }

}

//Compara dos numeros

function compararDosNumeros() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"))

    if (num1 > num2) {
        alert("El número " + num1 + " es mayor que " + num2)
    }
    else if (num1 < num2) {
        alert("El número " + num2 + " es mayor que " + num1)
    }
    else if (num1 == num2) {
        alert("Los números son iguales: " + num1 + " = " + num2)
    }
    else {
        alert("Ingrese un valor válido.")
    }
}

//Calificación escolar

function calificacionEscolar() {
    let calificacion = parseInt(prompt("Ingrese su calificación:"));
    if (calificacion >= 4.0 && calificacion <= 7.0) {
        alert("Aprobado con " + calificacion)
    }
    else if (calificacion >= 1.0 && calificacion < 3.9) {
        alert("Reprobado con " + calificacion)
    }
    else {
        alert("Ingrese un valor válido.")
    }
}

// Nombre de usuario válido

function verificarNombreUsuario() {
    let nombreUsuario = "admin";
    let usuario = prompt("Ingrese su nombre de usuario:");

    if (usuario == nombreUsuario)
        alert("Bienvenido, administrador");

    else {
        alert("Usuario no reconocido");

    }

}

// Verificar si una palabra empieza con "A"

function verificarPalabra() {
    let palabra = prompt("Ingrese una palabra:")
    let palabraA = "A";
    if (palabra[0] == "A") {
        alert("La palabra " + palabra + " empieza con A.")
    }


    else {
        alert("La palabra " + palabra + " no empieza con A.")
    }


}

//Precio con descuento Solicita el precio de un producto. Si el precio es mayor a 10000, muestra que aplica descuento. Si no, indica precio normal.
function verificarPrecio() {
    let precio = prompt("Ingrese el precio del producto:");
let iva = 0.21;
    if (precio > 10000) {
        alert("El precio del producto es " + precio + " y el descuento es de: " + (precio * iva) + ".")
    } else if (precio <= 10000) {
        alert("El precio del producto es " + precio + " y no aplica descuento.")
    } else {
        alert("Ingrese un valor válido.")
    }

}

//Verificar si una persona puede conducir Solicita la edad del usuario y si tiene licencia (por ejemplo, respondiendo "sí" o "no"). Si tiene 18 o más y respondió que tiene licencia, muestra “Puede conducir”. Si no, muestra “No puede conducir”.
 
function verificarConduccion() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    let tieneLicencia = prompt("¿Tiene licencia?").toLocaleLowerCase();

    if (edad >= 18 && tieneLicencia === "si") {
        alert("Puede conducir.");
    } else {
        alert("No puede conducir.");
    }
}


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

