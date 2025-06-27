document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // Aquí puedes agregar la lógica para almacenar el email y contraseña en una base de datos
    alert("¡Gracias por registrarte! Usuario: " + email + " Contraseña: " + password);
    document.getElementById("registrationForm").reset();
});