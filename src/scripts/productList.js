/*El código a continuación tiene dos objetivos:
    1. Crear listado de objetos (10)
    2. Manipular el DOM para insertar los objetos dentro de HTML
    3. Generar estilos para los objetos creados dentro de HTML
    4. Asignar un data-name a cada uno de los objetos
    5. Crear las popups en el dom virtual
    6. Vincular los popups con su correspondiente data-target */


/*1. LISTADO DE OBJETOS */

class Producto {
    constructor(id, nombre, precio, descripcion, material, tipo, categoria, imagen, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.material = material;
        this.tipo = tipo;
        this.categoria = categoria;
        this.imagen = imagen;
        this.stock = stock;
    }
}

let listaProductos = [
    new Producto(
    "01",
    "Charm Husky", 
    390, 
    "Charm Husky elaborado en plata 925 compatible con pulseras de charms varias marcas.",
    "Plata 925",
    "Charm",
    "mascotas",
    "perros",
    "../../assets/lista-productos-assets/Perros/Perros/husky.jpg"
    ),
    new Producto(
        "02",
        "La Noche Estrellada",
        390,
        "Charm elaborado en plata 925 quintado, compatible con pulseras de charms.",
        "Plata 925",
        "Charm",
        "otros",
        "arte",
        "../../assets/lista-productos-assets/Otros Charms/noche-estrellada.png"
    ),
    new Producto(
        "03",
        "Corazón Anatómico",
        390,
        "Charm Corazón anatómico, elaborado en plata 925 compatible con pulseras de charms varias marcas.",
        "Plata 925",
        "Charm",
        "profesiones",
        ["salud", "Medicina"],
        "../../assets/lista-productos-assets/Profesiones/medicina corazon.jpg"
    ),
    new Producto(
        "04",
        "French Poodle",
        390,
        "Charm French Poodle, elaborado en plata 925 compatible con pulseras de charms varias marcas.",
        "Plata 925",
        "Charm",
        "mascotas",
        "perros",
        "../../assets/lista-productos-assets/Perros/Perros/poodle 3.jpg"
    ),
    new Producto(
        "05",
        "Cerebro Anatomico",
        390,
        "Charm Cerebro anatómico, elaborado en plata 925 compatible con pulseras de charms varias marcas.",
        "Plata 925",
        "Charm",
        "profesiones",
        ["salud", "Medicina", "Psicologia"],
        "../../assets/lista-productos-assets/Profesiones/cerebro.png"
    ),
    new Producto(
      "06",
        "Pulmon Anatómico",
        370,
        "Charm Pulmón anatómico, elaborado en plata 925 compatible con pulseras de charms varias marcas.",
        "Plata 925",
        "Charm",
        "profesiones",
        ["salud", "Medicina"],
        "../../assets/lista-productos-assets/Profesiones/medicina pulmon.jpg"
    ),
    new Producto(
        "07",
        "Maestra",
        370,
        "Charm educación, elaborado en plata 925 compatible con pulseras de charms varias marcas.",
        "Plata 925",
        "Charm",
        "profesiones",
        "diversosProfesiones",
        "../../assets/lista-productos-assets/Profesiones/educacion.jpg"
    ),
    new Producto(
        "08",
        "Microscopio",
        370,
        "Charm microscopio, elaborado en plata 925 compatible con pulseras de charms varias marcas.",
        "Plata 925",
        "Charm",
        "Profesiones",
        ["salud", "Quimico", "Ciencia", "Biologia"],
        "../../assets/lista-productos-assets/Profesiones/microscopio.jpg"
    ),
    new Producto(
        "09",
        "Schnauzer",
        390,
        "Charm schnauzer, elaborado en plata 925 compatible con pulseras de charms varias marcas.",
        "Plata 925",
        "Charm",
        "mascotas",
        ["perros"],
        "../../assets/lista-productos-assets/Perros/Perros/schnauzer.jpg"
    ),
    new Producto( 
        "10",
        "Collar ADN", //name
        350, //price
        "Collar ADN elaborado en plata 925.", //description
        "Plata 925", //material
        "Collar", //type
        "profesiones", //category 
        ["Ciencia", "Quimico", "Biologia", "salud"], //subcategory
        "../../assets/lista-productos-assets/Collar/collar.jpg" //img
    )

];


/*2. MANIPULAR EL DOM PARA INSERTAR LOS OBJETOS DENTRO DE HTML*/

document.addEventListener('DOMContentLoaded', function() {
  listaProductos.forEach(producto => {
    // Crear un nuevo div para cada producto
    let productDiv = document.createElement('div');
    productDiv.className = 'producto';

    
    // insertar HTML al div
    productDiv.innerHTML = `
      <div class="product">
        <div class="imagen--container--producto">
        <img src="${producto.img}" alt="${producto.name}" id="imagen--producto">
        </div>
        <h4>${producto.name}</h4>
        <p>Precio: $${producto.price}</p>
        <button class="btn--comprar">Comprar</button>
      </div>
    `;
    
    // Obtener el div de subcategoría según la subcategoría del producto
    let subcategoryDiv = document.querySelector(`.${producto.subcategory}`);
    
    // Agregar el div del producto a la subcategoría div
    if (subcategoryDiv) {
      // Aplicar un estilo para hacer que los elementos productDiv estén en línea
      productDiv.style.display = 'inline-block';
      subcategoryDiv.appendChild(productDiv);

      // Agregar un evento de clic al productDiv
      productDiv.addEventListener('click', function() {
        // Mostrar el modal con la información del producto
        showPopup(producto);
      });
    } else {
      console.error(`Subcategory not found for product: ${producto.name}`);
    }
  });
});


//3. Crear popup

// Función para mostrar el modal con la información del producto
function showPopup(producto) {
  // Obtener el modal y el overlay
  let modal = document.querySelector('.preview');
  let overlay = document.querySelector('.products-preview');

  // Actualizar el contenido del modal con la información del producto
  modal.innerHTML = `
      <div class="container">
        <div id="imagen--preview">
            <img id="img-preview" src="${producto.img}" alt="${producto.name}">
        </div>
        <div class="more--info">
            <h3 class="product--name">${producto.name}</h3>
            <p class="product--description">${producto.description}</p>
            <p class="product--material">Material: ${producto.material}</p>
            <p class="product--type">Tipo: ${producto.type}</p>
            <div class="price">$${producto.price}</div>
            <div class="preview--buttons">
                <button class="buy">Comprar</button>
                <button class="cart">Agregar al carrito</button>
            </div>
        </div>
      </div>
  `;

  // Mostrar el modal y el overlay
  modal.style.display = 'inline-block';
  overlay.style.display = 'inline-block';

  // Agregar un evento de clic al overlay para cerrar el modal
  overlay.addEventListener('click', function() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  });

  // Agregar un evento de clic al modal para evitar el cierre al hacer clic dentro de él
  modal.addEventListener('click', function(event) {
    event.stopPropagation(); // Evita que el clic se propague al overlay
  });
}