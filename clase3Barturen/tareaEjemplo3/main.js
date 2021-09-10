let dato = prompt('Ingresar dato');

while (dato != 'ESC' && dato != 'esc' && dato !=='' && dato !==null ){
alert('Se ingresó el dato ' + dato);
dato = prompt ('Ingresar otro dato. \nPara finalizar, ingrese el texto "ESC", presione enter o Esc.')
}
