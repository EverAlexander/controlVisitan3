// Script para evitar letras en el campo de entrada numérica
document.getElementById('edad').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, ''); // Elimina todo excepto números
    if (this.value.length > 3) {
        this.value = this.value.slice(0, 3); // Limita a 3 dígitos
    }
});

document.getElementById('numDocu').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, ''); // Elimina todo excepto números
    if (this.value.length > 9) {
        this.value = this.value.slice(0, 9); // Limita a 9 dígitos
    }
});

document.getElementById('tiempoJuego').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, ''); // Elimina todo excepto números
});

//Validacion de letra y espacios
document.getElementById('nombreUser').addEventListener('input', function() {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, ''); // Elimina todo excepto letras y espacios
});