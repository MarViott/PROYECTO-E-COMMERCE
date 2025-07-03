document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    /* Lógica para verificar el email y contraseña*/
    
    if(email === 'usuario@ejemplo.com' && password === 'contraseña123') {
        document.getElementById('message').innerText = '¡Inicio de sesión exitoso!';
    } else {
        document.getElementById('message').innerText = '¡Credenciales incorrectas! Inténtalo de nuevo.';
    }
});