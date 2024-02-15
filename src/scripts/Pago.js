
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

document.addEventListener("DOMContentLoaded", function() {

    // Si hay un total almacenado, hacer algo con él (por ejemplo, mostrarlo en la página de cobro)
    //if (totalCarrito) {
        // Por ejemplo, mostrar el total en un elemento HTML con id "total-cobro"
        totalDiv.innerHTML = `
            <p>El total de su compra ${totalCarrito}</p>
        `
        totalCobro.appendChild(totalDiv);
    //} else {
        // Manejar el caso en que no hay total almacenado
        
    //}
});

const finalizarPago = document.getElementById("finalizar");

finalizarPago.addEventListener("click", () =>{
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "../../home.html";
})
