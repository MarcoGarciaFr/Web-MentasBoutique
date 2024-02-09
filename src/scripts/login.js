// Función autoejecutable para encapsular el código
(function () {
    'use strict';

    // Obtener usuarios del localStorage o usar un conjunto predeterminado si no hay datos
    let users = JSON.parse(localStorage.getItem('users')) || [
        { email: 'aldo@example.com', password: 'aldopassword', username: 'Aldo' },
        { email: 'paulina@example.com', password: 'paulinapassword', username: 'Paulina' },
        { email: 'marco@example.com', password: 'marcopassword', username: 'Marco' },
        { email: 'gonzalo@example.com', password: 'gonzalopassword', username: 'Gonzalo' },
        { email: 'carlos@example.com', password: 'carlospassword', username: 'Carlos' },
        { email: 'lucero@example.com', password: 'luceropassword', username: 'Lucero' },
    ];

    // Seleccionar todos los formularios con la clase 'my-form'
    let forms = document.querySelectorAll('.my-form');

    // Función para verificar las credenciales del usuario
    function verifyUser(email, password) {
        let user = users.find(function (u) {
            return u.email === email && u.password === password;
        });
        return user;
    }

    // Función para mostrar la información del usuario y almacenarlo en localStorage
    function displayUser(user) {
        console.log('Inicio de sesión exitoso para usuario:');
        console.log('Email:', user.email);
        console.log('Password:', user.password);
        console.log('Username:', user.username);

        // Añadir el usuario al localStorage
        let storedUsers = JSON.parse(localStorage.getItem('storedUsers')) || [];
        storedUsers.push(user);
        localStorage.setItem('storedUsers', JSON.stringify(storedUsers));
    }

    // Función para guardar el array de usuarios en el localStorage
    function saveToLocalStorage(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Iterar sobre cada formulario y agregar un evento de escucha para el evento 'submit'
    Array.from(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();

            let emailInput = form.querySelector('#email');
            let passwordInput = form.querySelector('#password');
            let errorMessage = form.querySelector('#error-message');

            // Obtener las referencias de las clases de éxito y error
            let successClass = 'is-success';
            let errorClass = 'is-error';

            // Restablecer los estilos antes de verificar nuevamente
            emailInput.classList.remove(successClass, errorClass);
            passwordInput.classList.remove(successClass, errorClass);

            let user = verifyUser(emailInput.value, passwordInput.value);

            if (user) {
                // Cambiar los estilos a éxito
                emailInput.classList.add(successClass);
                passwordInput.classList.add(successClass);
            
                // Redirigir al usuario hacia la página principal
                window.location.href = "../../home.html";

                // Guardar los usuarios actualizados en el localStorage
                saveToLocalStorage(users);
            } else {
                // Cambiar los estilos a error en caso de credenciales incorrectas
                emailInput.classList.add(errorClass);
                passwordInput.classList.add(errorClass);

                errorMessage.classList.remove('d-none');
            }

            form.classList.add('was-validated');
        }, false);
    });

    // Mostrar información de usuarios almacenados en el localStorage en la consola
    console.log('Usuarios permitidos en localStorage:', JSON.parse(localStorage.getItem('users')));
    console.log('Usuarios almacenados en localStorage:', JSON.parse(localStorage.getItem('storedUsers')));
})();
