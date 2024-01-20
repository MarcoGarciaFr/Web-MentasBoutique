// Selecciona el elemento de formulario con la clase "needs-validation"
const form = document.querySelector(".needs-validation");

// Define una función para mostrar un mensaje de éxito
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
    // Evita el comportamiento predeterminado de envío del formulario
    event.preventDefault();

    // Verifica la validez del formulario
    if (!form.checkValidity()) {
        // Detiene la propagación del evento si el formulario no es válido
        event.stopPropagation();
    } else {
        // Si el formulario es válido, guarda los datos, muestra el mensaje de éxito y reinicia el formulario
        saveData();
        showSuccessMessage();
        form.reset();
    }

    // Agrega la clase 'was-validated' al formulario
    form.classList.add('was-validated');
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
