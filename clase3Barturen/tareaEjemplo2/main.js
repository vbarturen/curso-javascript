let letters = /^[A-Za-z]+$/;

for (i = 1; i <= 5; i++){
    let nombre = prompt('Ingresar nombre');
    if ((nombre !==null) && (nombre.match(letters)) && (nombre !=='')){
    console.log('Nombre '+ i + ' de 5: ' + nombre)
    }
}