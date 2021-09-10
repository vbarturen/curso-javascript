do{
    number = prompt('Ingresar un numero.');
    if(!isNaN(number)){ 
    alert('Se ingresó ' + number)}
    else{
        alert('Error. No se ingresó un número.')
    }
} while (parseInt(number));