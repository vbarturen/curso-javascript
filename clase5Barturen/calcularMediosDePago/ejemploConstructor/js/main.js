//Definición de funciones a utilizar en el calculador//
const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;

const ivaFuncion = x => x * 0.21;
const efectivoFuncion = x => x * 0.10;
const mercadoPagoFuncion = x => x * 0.10;
const ahora12Funcion = x => x * 0.8;
const ahora18Funcion = x => x * 0.14

/*Solicito precio de producto por prompt*/
let precioDeLista = parseFloat(prompt('Ingresa el precio del producto.'));

//Cálculo para pago en Efectivo//
let pagoEfectivo = resta (suma (precioDeLista, ivaFuncion(precioDeLista)), efectivoFuncion(precioDeLista)); 

//Cálculo para pago con MercadoPago QR//
let pagoMercadoPagoQR = suma(precioDeLista, ivaFuncion(precioDeLista)); 

//Cálculo para pago con MercadoPago Tarjetas//
let pagoMercadoPagoTarjetas = suma (suma (precioDeLista, ivaFuncion(precioDeLista)), mercadoPagoFuncion(precioDeLista)); 

//Cálculo para pago con Ahora12//
let pagoAhora12 = suma (suma (precioDeLista, ivaFuncion(precioDeLista)), ahora12Funcion(precioDeLista));

//Cálculo para pago con Ahora12//
let pagoAhora18 = suma(suma(precioDeLista, ivaFuncion(precioDeLista)), ahora18Funcion(precioDeLista)); 

//Constructor con método//
class MedioDePago {
    constructor (nombre, descripcion){
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion;
    }
    descripcionPorLog () {
        console.log (this.nombre + ': ' + this.descripcion)        
    }
}
const iva = new MedioDePago ('IVA', 'Impuesto al valor agregado.');
iva.descripcionPorLog();
const efectivo = new MedioDePago ('Efectivo', '(En Efectivo, obtiene un descuento del 10%.)');
efectivo.descripcionPorLog();
const mercadoPagoQR = new MedioDePago ('QR de Mercado Pago','(Con QR de Mercado Pago, paga el precio de lista + IVA.)' );
mercadoPagoQR.descripcionPorLog();
const mercadoPago = new MedioDePago ('Mercado Pago (excepto QR)','(Abonando con Mercado Pago, tiene un recargo del 10%.)' );
mercadoPago.descripcionPorLog();
const ahora12 = new MedioDePago ('Plan Ahora 12','(El plan "Ahora 12" permite financiar en 12 cuotas con un recargo del 8% sobre el total de la compra.)' );
ahora12.descripcionPorLog();
const ahora18 = new MedioDePago ('Plan Ahora 18','(El plan "Ahora 18" permite financiar en 18 cuotas con un recargo del 14% sobre el total de la compra.)' );
ahora18.descripcionPorLog();

//Alert donde se indicará cuánto se debe abonar según el medio de pago//
//Para más información de cada medio de pago, se debe abrir la consola//
alert ('Si abona en ' + efectivo.nombre + ', pagará un total de ' + '$' + pagoEfectivo + '.'+ '\n' + '\n' + 
'Si abona con ' + mercadoPagoQR.nombre + ', pagará un total de ' + '$' + pagoMercadoPagoQR + '.'+ '\n' + '\n' +
'Si abona con ' + mercadoPago.nombre + ', pagará un total de ' + '$' + pagoMercadoPagoTarjetas + '.'+ '\n'  + '\n' + 
'Si abona con ' + ahora12.nombre + ', pagará un total de ' + '$' + pagoAhora12 + '.'+ '\n' + '\n' +
'Si abona con ' + ahora18.nombre + ', pagará un total de ' + '$' + pagoAhora18 + '.')