//Estas son las dos funciones flecha que usamos para calcular el promedio y mostrarlo//

const sacarPromedio = (a,b) => a/b

const mostrar = (mensaje) => alert(mensaje)


//Esta variable nos devuelve la Cantidad total de evaluaciones que se tomaron en el semestre. También hace la validación de que lo ingresado es un número.//

let totalEvaluaciones = parseFloat(prompt('Total de evaluaciones del semestre:'));
    if(!isNaN(totalEvaluaciones)){ 
    console.log('Se ingresó ' + totalEvaluaciones + '.')}
    else{
        alert('Error. No se ingresó un número. Actualice la página.');
    }


//Este es el ciclo que devolverá el resultado de la suma de las notas que el alumno obtuvo en el semestre. Va a preguntar cada nota y las va a sumar hasta que se complete la cantidad de evaluaciones tomadas.//

let totalNotas = 0;

for (i = 1; i <= totalEvaluaciones;i++){
    let nota = parseFloat(prompt('Ingresar nota '+ i + ' de ' + totalEvaluaciones + ':'));
        if(!isNaN(nota) && (0<=nota) && (10>=nota)){ 
            console.log('Nota '+ i + ' de ' + totalEvaluaciones + ': ' + nota);
            totalNotas = totalNotas + nota;
            console.log('Suma '+ i + ' de ' + totalEvaluaciones + ': ' + totalNotas)
        }
        else{
            alert('Error. No se ingresó un número del 0 al 10. Actualice la página y vuelva a realizar el proceso.');
        }
    }

    
// Aquí se ejecutan las funciones de calcular el promedio y mostrarlo//

sacarPromedio(totalNotas,totalEvaluaciones);

mostrar('El promedio es: ' + sacarPromedio(totalNotas,totalEvaluaciones + '.'));