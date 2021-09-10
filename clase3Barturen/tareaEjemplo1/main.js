let i = parseInt(prompt('Ingresar numero del 1 al 20'));
if ((i > 0) || (i === 0)) {
    for (i; i <= 20; i++) {
        console.log('Iterando de ' + i + ' hasta 20.')
    }
}
else{
    alert('Error. No ingresó un número del 1 al 20.');
    }