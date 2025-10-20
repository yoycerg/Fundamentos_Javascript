console.log("Conexión exitosa.")

/*
contar numeros del 10 al 1 - ejemplo
*/

// Creación función bucle while

function ejecutarWhile() {
    let resultado = "El resultado es: ";
    let count = 10;
    while (count > 0) {
        resultado += ` ${count}`;
        console.log(count);
        count--
    }
    alert(resultado);
}


// Creación función bucle for 
function ejecutarFor() {
    let resultado = "El resultado es: ";

    for (let i = 10; i > 0; i--) {
        resultado += ` ${i}`;
    }
    alert(resultado)
}

//1️⃣ Bucle while: Imprimir del 1 a n (n es ingresado por teclado).
// Escribe un programa que utilice un bucle while para imprimir los números del 1 al n con un solo Alert.

function ejercicio1() {
    let resultado = parseInt(prompt("Ingresar un numero"));
    let inicio = 1;
    while (inicio <= resultado) {
        console.log(inicio)
        alert(inicio)
        inicio++
    }


}