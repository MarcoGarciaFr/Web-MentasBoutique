
//Deshabilitar el envío de formularios si hay campos no válidos
const validacion = () => {
    'use strict';

    // Selecciona todos los elementos del DOM que tienen la clase 'needs-validation' y los almacena en la variable forms.
    const forms = document.querySelectorAll('.needs-validation');

    // Convierte la colección de elementos 'forms' en un array y, para cada formulario, agrega un event listener para el evento 'submit'.
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => { // Event listener para el evento 'submit'.
            // Verifica si el formulario no es válido.
            if (!form.checkValidity()) {
                // Si el formulario no es válido, evita que se envíe el formulario y detiene la propagación del evento.
                event.preventDefault();
                event.stopPropagation();
            }

            // Añade la clase 'was-validated' al formulario, esto activa las clases de validación de Bootstrap para resaltar los campos inválidos.
            form.classList.add('was-validated');
        }, false);
    });
};


// Recuperar el total del carrito del sessionStorage
let total = sessionStorage.getItem("totalCarrito");
let totalCarrito = JSON.parse(total);
const totalCobro = document.getElementById("total-cobro");
let totalDiv = document.createElement('div');

document.addEventListener("DOMContentLoaded", function () {

    // Si hay un total almacenado, hacer algo con él (por ejemplo, mostrarlo en la página de cobro)
    //if (totalCarrito) {
    // Por ejemplo, mostrar el total en un elemento HTML con id "total-cobro"
    totalDiv.innerHTML = `
            <div class="resumen-pagos">
                <h5>Resumen del pedido</h5>
                <hr>
                <h6>El total de su compra es: $${totalCarrito}</h6>
                <hr>
                <p>Al comprar, acepta los Términos y Condiciones de la tienda online, incluida la Política de Privacidad.<p>
            </div>
        `
    totalCobro.appendChild(totalDiv);
    //} else {
    // Manejar el caso en que no hay total almacenado

    //}
});

function habilitarBoton() {
    var input1Value = document.getElementById('validationCustom01').value;
    var input2Value = document.getElementById('validationCustom02').value;
    var input3Value = document.getElementById('validationCustom03').value;
    var fechaValue = document.getElementById('validationCustom04').value;
    var input5Value = document.getElementById('validationCustom05').value;
    var radioDebit = document.getElementById('debit');
    var radioPaypal = document.getElementById('paypal');
    var checkbox = document.getElementById('invalidCheck');
    var submitButton = document.getElementById('finalizar');

    // Verificar si todos los campos de texto están llenos
    let inputLleno =  input1Value.trim() !== '' && input2Value.trim() !== '' && input3Value.trim() !== ''  && input5Value.trim() !== '';
    
    // Verificar que el campo de fecha esté lleno
    var fechaLlena = fechaValue.trim() !== '';
    
    // Verificar si al menos una opción de radio está seleccionada
    let radioLleno = radioDebit.checked || radioPaypal.checked;
        
    // Verificar si la checkbox está seleccionado
    let checkboxLleno = checkbox.checked;

    // Habilitar el botón solo si todos los criterios se cumplen
    submitButton.disabled = !(inputLleno && fechaLlena && radioLleno && checkboxLleno);
}


const finalizarPago = document.getElementById("finalizar");

finalizarPago.addEventListener("click", (event) => {
    const formulario = document.getElementById("formulario");
    if (formulario.classList.contains("was-validated")) {
        // Si tiene la clase, mostrar la popcard
        popupConfirmacion();
        event.preventDefault();
    }else{
        validacion();
        event.preventDefault();
        popupConfirmacion();
    }
});

function popupConfirmacion() {
    // Obtener el modal y el overlay
    let modal = document.querySelector('.preview');
    let overlay = document.querySelector('.pago-preview');


    // Actualizar el contenido del modal con la información del producto
    modal.innerHTML = `
    <div class="gracias">
        <h5>¡Muchas gracias por tu compra!</h5>
        <div class="icon">
            <i class="fa-solid fa-heart"></i>
        </div>
        <p>En breve recibirás tu pedido.</p>
        <div class="home">
            <button id="aceptar">Aceptar</button>
        </div>
    </div>
`;

    // Mostrar el modal y el overlay
    modal.style.display = 'inline-block';
    overlay.style.display = 'inline-block';

    const aceptar = document.getElementById('aceptar');
    aceptar.addEventListener('click', function () {
        // modal.style.display = 'none';
        // overlay.style.display = 'none';
        
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = "../../home.html";    
        

    });
}
