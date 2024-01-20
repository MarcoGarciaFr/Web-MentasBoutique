document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('register-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        validatePasswords();
    });

    function validatePasswords() {
        const password = document.getElementById('password').value;
        const againPassword = document.getElementById('again-password').value;

        if (password !== againPassword) {
            alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        } else {
            form.submit(); // Envía el formulario si las contraseñas coinciden
        }
    }
});
