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

//2️⃣ Bucle while: Cuenta regresiva del n al 1 (n es ingresado por teclado) Crea un programa que muestre una cuenta regresiva desde n hasta 1 utilizando un bucle while.

function ejercicio2() {

    let contador = parseInt(prompt("Ingresar Numero"));
    let resultado = "contamos:"
    while (contador > 0) {
        resultado += ` ${contador}`;
        contador--;
    }
    alert(resultado)
}

//3️⃣ Bucle while: Sumar los n primeros números Usando un bucle for, calcula la suma de los números n primeros números  muestra el resultado en la consola.

function ejercicio3() {

    let suma = 0;
    let numero = parseInt(prompt("Ingresar un numero: "))
    let contador = 1;
    let resultado = "Suma: 0";
    while (contador <= numero) {
        suma += contador;
        resultado += `  + ${contador}`;
        contador++
    }
    alert(` ${resultado} = ${suma} `);
}

//4️⃣ Bucle while: Imprimir múltiplos de 2 del 1 al n (n es el límite de números a encontrar) Escribe un programa que use un bucle for para imprimir los múltiplos de 2 que hay entre 1 y 10 (inclusive).

function ejercicio4() {

    let numero = parseInt(prompt("Ingresa número: "))
    let count = 1;
    let resultado = " El resultado es: "
    while (count <= numero) {
        count++

        if (count %2 == 0) {
            resultado += `${count}`
        }

    }
    alert(` ${resultado}`)
}
