

function usarString() {    // Uso de Strings Ejemplo


    let nombre = prompt("Ingrese su nombre: ") // Variable tipo texto
    let primeraLetra = nombre[0]; // Asignamos valor a la primera letra  con posición 0 de nombre
    let ultimaLetra = nombre[nombre.length - 1]; // Asignamos valos a la ultima letra con posición -1 de nombre
    alert("Primera letra es : " + primeraLetra + "\nUltma letra es : " + ultimaLetra); // Mostrar resultados


}


// tarea : imprimir segunda letra 
// y penultima del  apellido


function manipularApellido() {// Uso de Strings Ejemplo

    let apellido = prompt("Ingrese su apellido: "); // variable tipo texto
    let segundaLetra = apellido[1]; // Asignamos valos a la segunda letra con posición 1 de apellido
    let penultimaLetra = apellido[apellido.length - 2]; // Asignamos valos a la penultima letra con posición -2 de apellido
    alert("Segunda letra es : " + segundaLetra + "\nPenultima letra es : " + penultimaLetra); // Mostrar resultados


}