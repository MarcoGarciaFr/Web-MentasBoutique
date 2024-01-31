// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('register-form');

//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//         validatePasswords();
//     });

//     function validatePasswords() {
//         const password = document.getElementById('password').value;
//         const againPassword = document.getElementById('again-password').value;

//         if (password !== againPassword) {
//             alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
//         } else {
//             form.submit(); // Envía el formulario si las contraseñas coinciden
//         }
//     }
// });


// script.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('register-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        validateField('name');
        validateField('email');
        validatePasswords();
    }

    function validateField(fieldName) {
        const field = document.getElementById(fieldName);
        const invalidFeedback = field.nextElementSibling; // Siguiente elemento después del campo

        if (field.value.trim() === '') {
            invalidFeedback.style.display = 'block';
        } else {
            invalidFeedback.style.display = 'none';
        }
    }

    function validatePasswords() {
        const password = document.getElementById('password').value;
        const againPassword = document.getElementById('again-password').value;

        const mensajeInvalidoPassword = document.getElementById('mensajeInvalidoPassword');
        const mensajeValidoPassword = document.getElementById('mensajeValidoPassword');

        if (password !== againPassword) {
            mensajeInvalidoPassword.style.display = 'block';
            mensajeValidoPassword.style.display = 'none';
        } else {
            mensajeInvalidoPassword.style.display = 'none';
            mensajeValidoPassword.style.display = 'block';
            form.submit();
        }
    }
});
