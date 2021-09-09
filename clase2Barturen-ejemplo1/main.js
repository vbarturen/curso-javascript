let ingresoNumero = prompt('Ingrese un número');
let numero = parseInt(ingresoNumero);

if ((numero > 1000) || (numero === 1000)) {
    alert('El número es igual o mayor a mil.')
} 
else {
    alert('El número es menor a mil.')
}
