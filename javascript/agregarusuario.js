function sendDataToServer() {
    var formData = {
        fecha: document.getElementById('fecha').value,
        encargado: document.getElementById('encargado').value,
        pais: document.getElementById('pais').value,
        tipoDocu: document.getElementById('tipoDocu').value,
        numDocu: document.getElementById('numDocu').value,
        lector: document.getElementById('lector').value,
        inicio: document.getElementById('inicio').value,
        finalizacion: document.getElementById('finalizacion').value
    };

    // Envía los datos al servidor
    gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: '15AVsnqdZ1RT_bRJJ-pr9gvJ4UHctiT3xOo-UxC5B2dA',
        range: 'lectura!A2:K', // Cambia el rango según donde quieras que se agreguen los datos
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: {
            values: [
                [formData.fecha, formData.encargado, formData.pais, formData.tipoDocu, formData.numDocu, formData.lector, formData.inicio, formData.finalizacion]
            ]
        }
    }).then(function(response) {
        // Aquí puedes manejar la respuesta si es necesario
        console.log('Datos guardados correctamente:', response);
        
        // Redirige al usuario a la página deseada
        window.location.href = 'https://everalexander.github.io/controlVisita3/pages/usuarios/agregarVisitas.html';
    }, function(error) {
        console.error('Error al guardar datos:', error);
    });
}
