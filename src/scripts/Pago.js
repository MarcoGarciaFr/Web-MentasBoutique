
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
