document.addEventListener('DOMContentLoaded', function () {
    // Obtener el elemento de entrada de fecha y hora
    var fechaInput = document.getElementById('fecha');

    // Realizar una solicitud a la API de WorldTimeAPI para El Salvador
    fetch('https://worldtimeapi.org/api/timezone/America/El_Salvador')
        .then(response => response.json())
        .then(data => {
            // Obtener la fecha y hora actual de El Salvador
            var fechaElSalvador = new Date(data.datetime);

            // Formatear la fecha y hora en formato ISO (yyyy-mm-ddThh:mm)
            var fechaElSalvadorISO = fechaElSalvador.toISOString().slice(0, 16);

            // Establecer la fecha y hora actual de El Salvador como valor predeterminado
            fechaInput.value = fechaElSalvadorISO;
        })
        .catch(error => {
            console.error('Error al obtener la hora de El Salvador:', error);
        });
});