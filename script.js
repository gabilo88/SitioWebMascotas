
// Capturar el evento submit del formulario
document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mascota = document.getElementById('mascota').value;
    const mensaje = document.getElementById('mensaje').value;
    const termino = document.getElementById('terminos').value;

    // Validar los datos (opcional)
    if (!nombre || !email || !mascota || !mensaje || !termino ) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Enviar el formulario 
    alert(`Formulario enviado con éxito: 
           Nombre: ${nombre}, 
           Email: ${email}, 
           Mascota: ${mascota}, 
           Mesaje: ${mensaje}, 
           Acepta terminos: ${termino}`);
});