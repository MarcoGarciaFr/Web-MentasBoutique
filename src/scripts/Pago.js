
//Deshabilitar el envío de formularios si hay campos no válidos
(() => {
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
})();


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


const finalizarPago = document.getElementById("finalizar");

finalizarPago.addEventListener("click", (event) => {
    // Obtener el formulario por su ID (ajusta según tu HTML)
    
    const formulario = document.getElementById("formulario");

    if (formulario.classList.contains("was-validated") || formulario.classList.contains("needs-validation")) {
        // Si tiene la clase, mostrar la popcard
        popupConfirmacion();
        event.preventDefault();
    }
});

function popupConfirmacion() {
    // Obtener el modal y el overlay
    let modal = document.querySelector('.preview');
    let overlay = document.querySelector('.pago-preview');


    // Actualizar el contenido del modal con la información del producto
    modal.innerHTML = `
    <div class="gracias">
        <h3>¡Muchas gracias por tu compra!</h3>
        <div class="icon">
            <i class="fa-solid fa-heart"></i>
        </div>
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
        const formulario = document.getElementById("formulario");
        if (formulario.classList.contains("was-validated")|| formulario.classList.contains("needs-validation")) {
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = "../../home.html";    
        }

    });
}
