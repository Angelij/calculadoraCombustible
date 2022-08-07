
function calcularPrecio(params) {
    // Coge los valores de los input boxes y los guarda a sus variables
    var kilometrosRecorridos = document.getElementById('kmRecorridos').value;
    var consumoAvg = document.getElementById('consumoMedio').value;
    var precioFuel = document.getElementById('precioCombustible').value;

    // Calcular el precio del viaje
    var precioDelViaje;
    var litrosUsados;
    litrosUsados = kilometrosRecorridos * (consumoAvg/100);
    precioDelViaje = litrosUsados * precioFuel;

    var precioDelViajeRedondeado = precioDelViaje.toFixed(2);;

    // Cambia el texto de 'resultText' 
    var resultParagraph = "El viaje costará " + precioDelViajeRedondeado + "€";
    var resultTxt = document.getElementById("resultText").textContent=resultParagraph; 
}