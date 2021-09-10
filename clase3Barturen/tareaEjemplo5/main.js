let nombre = prompt('Ingrese su nombre');
while(nombre !='ESC'){
    switch(nombre){
        case 'Cami':
            alert('Bienvenida, Cami.');
            break;
        case 'Emiliano':
            alert('Bienvenido, Emiliano.');
            break;
        case 'Julieta':
            alert('Bienvenida, Julieta.');
            break;
        case 'Vicky':
            alert('Bienvenida, Vicky.');
            break;
        default:
            alert ('Acceso denegado')
            break;
    }
    nombre = prompt('Ingrese su nombre')
}
