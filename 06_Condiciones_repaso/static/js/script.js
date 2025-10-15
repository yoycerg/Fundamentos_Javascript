
//1️⃣ Edad y etapa de vida

function verificarEtapa() {
    let edad = parseInt(prompt("Ingrese su edad: "));

    if (edad < 13) {
        alert("Eres un niño!");

    } else if (edad >= 13 && edad < 18) {
        alert("Eres un adolecente")

    } else {
        alert("Eres un adulto")
    }

}


//2️⃣ Validar contraseña exacta


function contraValida() {
    let clave = parseInt(prompt("Ingrese su contraseña: "));

    if (clave === 12345) {
        alert("Contraseña Correcta")
    }

    else {
        alert("Contraseña invalida, intente denuevo")
    }
}

// 3️⃣ Verificar letra en palabra



function verificarLetra() {
    let palabra = prompt("Ingrese su palabra: ");

    if (palabra.toLowerCase().includes('e')) {
        alert("Tu palabra incluye la letra E")

    }

    else {
        alert("Su palabra no incluye la letra e")
    }

}


//4️⃣ Comparar dos números

function numeroMayorQue() {
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


// 5️⃣ Determinar si el número es par o impar



function parImpar() {

    let numero = parseInt(prompt("Ingrese su numero: "));

    if (numero % 2 == 0) {
        alert("Tu numero es par")
    }

    else {
        alert("Número impar")
    }


}


// 6️⃣ Revisar palabra inicial


function primLetra() {
    let palabra = prompt("Ingrese su palabra");


    if (palabra[0].toLowerCase() === 'a') {
        alert("Tu palabra empieza por la letra a")
    }

    else {
        alert("No empieza con A")
    }
}

// 7️⃣ Temperatura ambiente


function tempAmbiente() {
    let temperatura = parseInt(prompt("Ingresa tu temperatura actual"));

    if (temperatura < 10) {
        alert("Hace frio")
    }

    else if (temperatura >= 10 && temperatura <= 25) {
        alert("Esta templado")
    }

    else if (temperatura >= 26) {
        alert("Hace calor");
    }

}


// 8️⃣ Nombre reconocido


function nombreConocido() {
    let nombre = prompt("Ingrese el nombre: ");

    if (nombre == "Dany") {
        alert("Hola profesor")
    }

    else if (nombre == "Ely") {
        alert("Hola mamá")
    }

    else {
        alert("Hola visitante.")
    }
}



// 9️⃣ Nota de evaluación



function notaValida() {
    let nota = parseInt(prompt("Ingresa tu nota: "));

    if (nota >= 1 && nota < 4) {
        alert("Reprobaste")

    }

    else if (nota >= 4 && nota <= 7) {
        alert("Aprobaste")
    }

    else {
        alert("Nota inválida")
    }


}



// 🔟 Verificar si contiene una palabra clave



function palabraClave() {

    let palabra = prompt("Ingresa tu palabra");

    if (palabra.toLowerCase().includes('jesús')) {
        alert("Tu frase tiene la palabra clave 🙌")
    }

    else {
        alert("No contiene la palabra clave ")
    }


}
