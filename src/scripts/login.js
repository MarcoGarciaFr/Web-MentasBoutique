
// Seleccionar todos los formularios con la clase 'my-form'
let form = document.querySelector('.my-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let passwordInput = document.getElementById('password')
    let emailInput = document.getElementById('email')
    let errorMessage = document.getElementById('error-message');
    const url = `http://localhost:8080/admin/users/byEmail?email=${emailInput.value}`

    if (!form.checkValidity()) {
        errorMessage.classList.remove('d-none');
        return;
    } else {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                // console.log(emailInput.value + passwordInput.value);
                if (data.email == emailInput.value && data.password == passwordInput.value && emailInput.value != "" && passwordInput.value != "" && data.rol == 1) {
                    console.log('Inicio de sesión exitoso para usuario:');
                    console.log('Email:', data.email);
                    errorMessage.classList.add('d-none');
                    setTimeout(() => {
                        window.location.href = "../../src/html/Dashboard Administracion/interfazCrearProductos.html";
                    }, 2000);
                } if (data.email == emailInput.value && data.password == passwordInput.value && emailInput.value != "" && passwordInput.value != "" && data.rol == 2) {
                    console.log('Inicio de sesión exitoso para usuario:');
                    console.log('Email:', data.email);
                    errorMessage.classList.add('d-none');
                    setTimeout(() => {
                        window.location.href = "../../home.html";
                    }, 2000);
                } else {

                    // console.log("Email o contraseña invalidos");
                    // errorMessage.classList.remove('d-none');
                }

            })
            .catch(error => {

                console.log(error);
                errorMessage.classList.remove('d-none');
            })

        form.classList.add('was-validated');
    }

}, false);

