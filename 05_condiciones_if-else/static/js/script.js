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
   if (calificacion >= 4.0 && calificacion <= 7.0){
    alert("Aprobado con " + calificacion)
   } 
   else if (calificacion >= 1.0 && calificacion < 3.9){
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

if (usuario ==nombreUsuario)
    alert("Bienvenido, administrador" );
    
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


