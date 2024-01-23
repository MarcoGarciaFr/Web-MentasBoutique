// Selecciona el elemento de formulario con la clase "needs-validation"
const form = document.querySelector(".needs-validation");

// Define una función para mostrar un mensaje de éxito luego de hacer submit al formulario
const showSuccessMessage = () => {
    // Obtiene el elemento con el id "successMessage"
    const successMessage = document.getElementById('successMessage');
    // Modifica el contenido del elemento para mostrar el mensaje de éxito
    successMessage.innerHTML = `
        <div id="successMessage" style="display: block;">
            <p>¡Envío exitoso! Gracias por tu mensaje.</p>
        </div>`;
};

// Agrega un escuchador de eventos para el envío del formulario
form.addEventListener('submit', async event => {
    event.preventDefault();

    // Quita la clase 'was-validated' para restablecer los estilos
    form.classList.remove('was-validated');

    // Elimina los mensajes de validación existentes
    form.querySelectorAll('.invalid-feedback').forEach((element) => {
        element.parentNode.removeChild(element);
    });

    if (!form.checkValidity()) {
        event.stopPropagation();

        // Agrega la clase 'was-validated' para aplicar los estilos de validación
        form.classList.add('was-validated');

        // Agrega un mensaje de validación debajo de cada campo no válido
        form.querySelectorAll('.form-control:invalid').forEach((element) => {
            const validationMessage = document.createElement('div');
            validationMessage.className = 'invalid-feedback';
            validationMessage.innerHTML = element.validationMessage;
            element.parentNode.appendChild(validationMessage);
        });

    } else {
        // Si el formulario es válido, guarda los datos, muestra el mensaje de éxito y reinicia el formulario
        saveData();
        showSuccessMessage();
        form.reset();
    }
}, false);


// Objeto para almacenar datos del mensaje (aunque no se utiliza actualmente en el código)
const messageData = {
    name: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
};

// Define una función para obtener los valores de los campos del formulario
const saveData = () => {
    // Obtiene los valores de los campos de entrada del formulario
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastname").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


};