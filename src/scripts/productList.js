/*El código a continuación tiene dos objetivos:
    1. Crear listado de objetos (10)
    2. Manipular el DOM para insertar los objetos dentro de HTML
    3. Generar estilos para los objetos creados dentro de HTML
    4. Crear las popups en el dom virtual


/*1. LISTADO DE OBJETOS */

class Producto {
    constructor(id, name, price, description, material, type, category, subcategory, img) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.material = material;
        this.type = type;
        this.category = category;
        this.subcategory = subcategory;
        this.img = img;
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
        "profesiones",
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
        "collares", //category 
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
    
    // Obtener el div de categoría según la categoría del producto
    let categoryDiv = document.querySelector(`#${producto.category}`);
    
    // Agregar el div del producto a la categoría div
    if (categoryDiv) {
      // Aplicar un estilo para hacer que los elementos productDiv estén en línea
      productDiv.style.display = 'inline-block';
      categoryDiv.appendChild(productDiv);

      // Agregar un evento de clic al productDiv
      productDiv.addEventListener('click', function() {
        // Mostrar el modal con la información del producto
        showPopup(producto);
      });
    } else {
      console.error(`Category not found for product: ${producto.name}`);
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