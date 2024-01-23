$(document).ready(function () {
    // Ocultar la barra de búsqueda al cargar la página
    $(".navbar form").addClass("d-none");
  
    // Mostrar la barra de búsqueda al hacer clic en el icono de lupa
    $(".search-icon").click(function (e) {
      e.stopPropagation(); // Evita que el clic se propague al contenedor general
      $(".navbar form").toggleClass("d-none");
    });
  
    // Ocultar la barra de búsqueda al hacer clic fuera de la barra o el icono
    $(document).click(function (e) {
      if (!$(e.target).closest('.navbar form').length && !$(e.target).hasClass('search-icon')) {
        $(".navbar form").addClass("d-none");
      }
    });
  });
  