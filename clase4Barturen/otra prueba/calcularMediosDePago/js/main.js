const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;

const iva = x => x * 0.21;
const descuentoefectivo = x => x * 0.10;
const mercadoPago = x => x * 0.10;
const ahora12 = x => x * 0.8;
const ahora18 = x => x * 0.14

let precioDeLista = parseFloat(prompt('Ingresa el precio del producto.'));

//Cálculo para pago en Efectivo//
let pagoEfectivo = resta (suma (precioDeLista, iva(precioDeLista)), descuentoefectivo(precioDeLista)); 

//Cálculo para pago con MercadoPago QR//
let pagoMercadoPagoQR = suma(precioDeLista, iva(precioDeLista)); 

//Cálculo para pago con MercadoPago Tarjetas//
let pagoMercadoPagoTarjetas = suma (suma (precioDeLista, iva(precioDeLista)), mercadoPago(precioDeLista)); 

//Cálculo para pago con Ahora12//
let pagoAhora12 = suma (suma (precioDeLista, iva(precioDeLista)), ahora12(precioDeLista));

//Cálculo para pago con Ahora12//
let pagoAhora18 = suma(suma(precioDeLista, iva(precioDeLista)), ahora18(precioDeLista)); 


alert ('Si abona en efectivo, pagará un total de: ' + pagoEfectivo + '.' + /n + 'Si abona con Mercado Pago QR, pagará un total de: ' + pagoMercadoPagoQR + '.'+ /n + 'Si abona con Mercado Pago, pagará un total de: ' + pagoMercadoPagoTarjetas + '.'+ /n + 'Si abona financiación "Ahora 12", pagará un total de: ' + pagoAhora12 + '.'+ /n + 'Si abona financiación "Ahora 12", pagará un total de: ' + pagoAhora18 + '.')