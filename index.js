// Función para calcular el factorial
function calculoDeFactorial() {
    // parseint comprueba el primer argumento, una cadena, e intenta devolver un entero de la base especificada.
    const n = parseInt(document.getElementById("inputFactorial").value);
    let result = 1;
    for (let i = 1; i <= n; i++) result *= i;
    document.getElementById("resultadoFactorial").textContent = `El factorial de ${n} es ${result}`;
}

// Función para encontrar el mayor número de un array
function numerosMayores() {
    const arr = document.getElementById("inputArrayMayor").value.split(',').map(Number);
    const mayor = Math.max(...arr);
    document.getElementById("resultadoMayor").textContent = `El mayor número es: ${mayor}`;
}

// Función para ordenar un array
function ordenarUnArray() {
    const arr = document.getElementById("inputArrayOrdenar").value.split(',').map(Number);
    arr.sort((a, b) => a - b);
    document.getElementById("resultadoOrdenar").textContent = `Array ordenado: ${arr.join(', ')}`;
}

// Función para filtrar números mayores con un valor dado
function numerosSegunValorDado() {
    const arr = document.getElementById("inputArrayFiltrar").value.split(',').map(Number);
    const valor = parseInt(document.getElementById("valorFiltrar").value);
    const filtrados = arr.filter(num => num > valor);
    document.getElementById("resultadoFiltrar").textContent = `Números filtrados: ${filtrados.join(', ')}`;
}

// Función para sumar todos los elementos de un array
function sumarArrayElementos() {
    const arr = document.getElementById("inputArraySumar").value.split(',').map(Number);
    const suma = arr.reduce((acc, num) => acc + num, 0);
    document.getElementById("resultadoSumar").textContent = `La suma de los elementos del array es: ${suma}`;
}
