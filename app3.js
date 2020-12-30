console.log('Inicio del programa');

setTimeout(function() {
    console.log('Primer Timeout');
}, 3000);

setTimeout(function() {
    console.log('Segundo TimeOut');
}, 0);
setTimeout(function() {
    console.log('Tercer TimeOut');
}, 0);
console.log('Fin del programa');