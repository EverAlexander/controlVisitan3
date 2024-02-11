 // Configura la API de Google Sheets
 function initClient() {
    gapi.client.init({
        'apiKey': 'AIzaSyBNbG0WKX0IcWXwxbL_O2noeGPAPB-BUx4',
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4']
    }).then(function () {
        // Llama a la función para obtener datos
        getDataFromSheet();
    });
}

// Obtiene datos de la hoja de cálculo
function getDataFromSheet() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '15AVsnqdZ1RT_bRJJ-pr9gvJ4UHctiT3xOo-UxC5B2dA',
        range: 'lectura!A2:K' // Ajusta el rango para incluir las columnas que deseas, hasta la K
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            var output = '<div class="table-responsive"><table class="table table-striped">';
            output += '<thead class="alert-info"><tr>';
            output += '<th>Fecha</th>';
            output += '<th>Encargado</th>';
            output += '<th>País</th>';
            output += '<th>Documento</th>';
            output += '<th>Número</th>';
            output += '<th>Lector</th>';
            output += '<th>Inicio</th>'; // Nombre de la columna adicional
            output += '<th>Finalizacion</th>'; // Nombre de la columna adicional
            output += '</tr></thead>';
            output += '<tbody>';
            for (var i = 0; i < range.values.length; i++) {
                output += '<tr>';
                // Concatenar los valores de las columnas G, K y H
                output += '<td>' + range.values[i][0] + '</td>'; // Fecha
                output += '<td>' + range.values[i][1] + '</td>'; // Encargado
                output += '<td>' + range.values[i][2] + '</td>'; // País
                output += '<td>' + range.values[i][3] + '</td>'; // Documento
                output += '<td>' + range.values[i][4] + '</td>'; // Número Documento
                output += '<td>' + range.values[i][5] + '</td>'; // Lector
                output += '<td>' + range.values[i][8] + '</td>'; // Inicio
                output += '<td>' + range.values[i][9] + '</td>'; // Finalizacion
                output += '</tr>';
            }
            output += '</tbody></table></div>';
            $('#sheetData').html(output);
        } else {
            $('#sheetData').html('No se encontraron datos.');
        }
    }, function (response) {
        $('#sheetData').html('Error: ' + response.result.error.message);
    });
}

// Inicializa la API
gapi.load('client', initClient);