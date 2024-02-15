/*El código a continuación tiene dos objetivos:
    1. Crear listado de objetos (10)
    2. Manipular el DOM para insertar los objetos dentro de HTML
    3. Generar estilos para los objetos creados dentro de HTML
    4. Crear las popups en el dom virtual


/*1. LISTADO DE OBJETOS */
/*let lista = localStorage.getItem("listaProductos")
const listaProductos = JSON.parse(lista)
console.log(listaProductos);*/

/*****************************************************************/




/******************************************************************* */


// ELIMINE EL CUERPO DE LA CLASE PRODUCTO YA QUE YA NO LO USAREMOS

// DEJE ESTA LISTA DE PRODUCTOS QUE ES UNA COPIA DE LA QUE VIENE DE LA BASE DE DATOS PARA QUE PUEDAS TRABAJAR CON ELLAS Y LOS DATOS QUE TIENE LOS DATOS COMPLETOS
//PUEDES COMENTAR LAS PRIMERAS 3 LINEAS PARA QUE NO TE CAUSEN PROBLEMA
const listaProductos = [
    {
        "id": 1,
        "nombre": "Charm Perro Perrito",
        "precio": 390,
        "descripcion": "Charm elaborado en plata 925 compatible con pulseras de charms varias marcas.",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "mascotas",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_984748-MLM70666689893_072023-O.webp",
        "stock": 12
    },
    {
        "id": 2,
        "nombre": "Charm Enfermera Enfermería",
        "precio": 390,
        "descripcion": "Charm elaborado en plata 925 y esmalte, quintado. Compatible con pulseras de charm varias marcas.",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "profesiones",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_868872-MLM70657973526_072023-O.webp",
        "stock": 15
    },
    {
        "id": 3,
        "nombre": "Charm Ojo Turco Protección",
        "precio": 370,
        "descripcion": "Charm ojo turco para protección elaborado en plata 925 y circonias. Quintado. Compatible con pulseras para charms.",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "otros",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_639832-MLM73081208707_112023-O.webp",
        "stock": 10
    },
    {
        "id": 4,
        "nombre": "Charm Dálmata",
        "precio": 450,
        "descripcion": "Charm dálmata elaborado en plata 925 quintado, con detalles en esmalte. Compatible con pulseras de charms.",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "mascotas",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_992574-MLM72046195497_102023-O.webp",
        "stock": 13
    },
    {
        "id": 5,
        "nombre": "Charm Graduación",
        "precio": 390,
        "descripcion": "Charm elaborado en plata 925 quintado, con detalles en esmalte y circonia rosa. Compatible con pulseras de charms.",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "profesiones",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_827937-MLM73000029742_112023-O.webp",
        "stock": 16
    },
    {
        "id": 6,
        "nombre": "Charm Buda",
        "precio": 390,
        "descripcion": "Charm elaborado en plata 925 quintado, compatible con pulseras de charms.",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "otros",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_850524-MLM71169531540_082023-O.webp",
        "stock": 5
    },
    {
        "id": 7,
        "nombre": "Charm Medicina Enfermería Reflexión",
        "precio": 620,
        "descripcion": "Charm elaborado en plata 925, compatible con pulsera reflexión (la pulsera delgada). Modelo elaborado con circonias y detalle en esmalte.",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "profesiones",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_842825-MLM71609754155_092023-O.webp",
        "stock": 8
    },
    {
        "id": 8,
        "nombre": "Charm Enfermería Estetoscopio",
        "precio": 390,
        "descripcion": "Charm elaborado en plata 925, compatible con pulseras de charms.",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "profesiones",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_860371-MLM71092409842_082023-O.webp",
        "stock": 14
    },
    {
        "id": 9,
        "nombre": "Charm La Biblia Primera Comunión Confirmación",
        "precio": 390,
        "descripcion": "Charm elaborado en plata 925, quintado, compatible con pulseras de charms",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "otros",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_745559-MLM71436958290_092023-O.webp",
        "stock": 5
    },
    {
        "id": 10,
        "nombre": "Charm Cerebro Medicina Neurólogo Psicólogo",
        "precio": 370,
        "descripcion": "Charm elaborado en plata 925. Compatible con pulseras de charm varias marcas",
        "material": "Plata 925",
        "tipo": "Charms",
        "categoria": "profesiones",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_650090-MLM73000021004_112023-F.webp",
        "stock": 10
    },
    {
        "id": 11,
        "nombre": "Charm La Noche Estrellada",
        "precio": 390,
        "descripcion": "Charm elaborado en plata 925 quintado, compatible con pulseras de charms.",
        "material": "Plata 925",
        "tipo": "charm",
        "categoria": "otros",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_695025-MLM71169988348_082023-F.webp",
        "stock": 10
    },
    {
        "id": 12,
        "nombre": "Charm Piscologo Psicología",
        "precio": 390,
        "descripcion": "Charm elaborado en plata 925. Compatible con pulseras de charm varias marcas",
        "material": "Plata 925",
        "tipo": "charm",
        "categoria": "profesiones",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_724882-MLM70686589905_072023-F.webp",
        "stock": 10
    },
    {
        "id": 13,
        "nombre": "Charm Maestra Teacher",
        "precio": 370,
        "descripcion": "Charm elaborado en plata 925. Compatible con pulseras de charm varias marcas",
        "material": "Plata 925",
        "tipo": "Charms",
        "categoria": "profesiones",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_773667-MLM71437129168_092023-F.webp",
        "stock": 10
    },
    {
        "id": 14,
        "nombre": "Charm Corazón Anatómico Medicina Médico",
        "precio": 390,
        "descripcion": "Charm elaborado en plata 925 compatible con pandora.",
        "material": "Plata 925",
        "tipo": "Charms",
        "categoria": "profesiones",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_825059-MLM71436790810_092023-F.webp",
        "stock": 10
    },
    {
        "id": 15,
        "nombre": "Charm Schnauzer",
        "precio": 390,
        "descripcion": "Charm elaborado en plata 925 compatible con pandora.",
        "material": "Plata 925",
        "tipo": "Charms",
        "categoria": "mascotas",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_999207-MLM70645888091_072023-F.webp",
        "stock": 10
    },
    {
        "id": 16,
        "nombre": "Charm Schnauzer Perro",
        "precio": 390,
        "descripcion": "Charm elaborado en plata 925 compatible con pulseras de charms varias marcas.",
        "material": "Plata 925",
        "tipo": "Charms",
        "categoria": "mascotas",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_601198-MLM71482831661_092023-F.webp",
        "stock": 10
    },
    {
        "id": 17,
        "nombre": "Charm Husky",
        "precio": 390,
        "descripcion": "Charm elaborado en plata 925 compatible con pulseras de charms varias marcas.",
        "material": "Plata 925",
        "tipo": "Charms",
        "categoria": "mascotas",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_705360-MLM70617517324_072023-F.webp",
        "stock": 10
    },
    {
        "id": 18,
        "nombre": "Charm Shih Tzu",
        "precio": 390,
        "descripcion": "Charm Shih Tzu elaborado en plata 925, quintado, compatible con pulsera de charms",
        "material": "Plata 925",
        "tipo": "Charms",
        "categoria": "mascotas",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_655222-MLM73081719473_112023-F.webp",
        "stock": 10
    },
    {
        "id": 19,
        "nombre": "Charm Abuelo Abuelito",
        "precio": 370,
        "descripcion": "Charm Shih Tzu elaborado en plata 925, quintado, compatible con pulsera de charms",
        "material": "Plata 925",
        "tipo": "Charms",
        "categoria": "otros",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_859410-MLM71482444223_092023-F.webp",
        "stock": 10
    },
    {
        "id": 20,
        "nombre": "Charm Perro Perrito",
        "precio": 390,
        "descripcion": "Charm Shih Tzu elaborado en plata 925, quintado, compatible con pulsera de charms",
        "material": "Plata 925",
        "tipo": "Charms",
        "categoria": "mascotas",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_984748-MLM70666689893_072023-F.webp",
        "stock": 10
    },
    {
        "id": 21,
        "nombre": "Charm Dentista Diente Muela",
        "precio": 390,
        "descripcion": "Charm elaborado en plata 925 y esmalte el quintado está por dentro de el ojal. Compatible con pulseras de charm varias marcas.",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "profesiones",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_614213-MLM70657119440_072023-F.webp",
        "stock": 10
    },
    {
        "id": 22,
        "nombre": "Charm Bailarina De Ballet Azul",
        "precio": 390,
        "descripcion": "Charm elaborado en plata 925 quintado, compatible con pulseras de charms.",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "profesiones",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_648078-MLM71169765878_082023-F.webp",
        "stock": 10
    },
    {
        "id": 23,
        "nombre": "Murano Ojo De Tigre Natural Charm",
        "precio": 390,
        "descripcion": "Charm Murano de piedra natural elaborado en piedra natural ojo de tigre; puede contener impurezas propias de las piedras naturales. Compatible con pulseras de charms.",
        "material": "ojo de tigre",
        "tipo": "Charms",
        "categoria": "otros",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_909148-MLM72046197423_102023-F.webp",
        "stock": 10
    },
    {
        "id": 24,
        "nombre": "Collar Adn Ciencia Química Biología",
        "precio": 350,
        "descripcion": "Collar ADN elaborado en plata 925 quintado.\nMide *60 cm*",
        "material": "Plata",
        "tipo": "Collares",
        "categoria": "otros",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_990927-MLM73000107992_112023-F.webp",
        "stock": 10
    },
    {
        "id": 25,
        "nombre": "Charm Medicina Doctor",
        "precio": 390,
        "descripcion": "Charm elaborado en plata 925, quintado. Compatible con pulseras de charm varias marcas",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "profesiones",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_787957-MLM70657972014_072023-F.webp",
        "stock": 10
    },
    {
        "id": 26,
        "nombre": "Charm Navideño Santa Claus Navidad",
        "precio": 370,
        "descripcion": "Charm navideño elaborado en plata 925 compatible con pulsera pandora.",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "otros",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_933308-MLM72348970800_102023-F.webp",
        "stock": 10
    },
    {
        "id": 27,
        "nombre": "Charm Enfermera Reflexión",
        "precio": 620,
        "descripcion": "Charm enfermera elaborado en plata 100% auténtica 925, quintado dentro del charm, con circonias y detalles en esmalte; compatible solo con pulsera reflexión.",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "profesiones",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_816569-MLM71609270553_092023-F.webp",
        "stock": 10
    },
    {
        "id": 28,
        "nombre": "Aretes De Van Gogh",
        "precio": 350,
        "descripcion": "Aretes de acero inoxidable de van Gogh asimétricos.",
        "material": "Acero inoxidable",
        "tipo": "Aretes",
        "categoria": "otros",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_853244-MLM72349580286_102023-F.webp",
        "stock": 10
    },
    {
        "id": 29,
        "nombre": "Charm Calavera Catrina Halloween Día De Muertos Músico",
        "precio": 450,
        "descripcion": "Charm catrin calavera elaborado en plata 925 Compatible con pulseras de charms",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "otros",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_802341-MLM71849788862_092023-F.webp",
        "stock": 10
    },
    {
        "id": 30,
        "nombre": "Charm Navidad Regalo",
        "precio": 390,
        "descripcion": "Charm plata 925 Compatible con pulseras de charms.",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "otros",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_903621-MLM72210150356_102023-F.webp",
        "stock": 10
    },
    {
        "id": 31,
        "nombre": "Charm Gato Sirena",
        "precio": 370,
        "descripcion": "Hermoso charm gato sirena elaborado en plata 925 (tiene quintado) compatible con pulsera pandora.",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "otros",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_924235-MLM50742788956_072022-F.webp",
        "stock": 10
    },
    {
        "id": 32,
        "nombre": "Charm Santa Claus Navidad",
        "precio": 390,
        "descripcion": "Charm elaborado en plata 925 compatible con pulseras de charms.",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "otros",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_838192-MLM72416117379_102023-F.webp",
        "stock": 10
    },
    {
        "id": 33,
        "nombre": "Charm Navidad Regalo Perro",
        "precio": 390,
        "descripcion": "Charm elaborado en plata 925 compatible con pulseras de charms.",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "mascotas",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_655654-MLM72349848020_102023-O.webp",
        "stock": 10
    },
    {
        "id": 34,
        "nombre": "Charm Bruja Sombrero Halloween",
        "precio": 420,
        "descripcion": "Charm bruja brujita sombrero elaborado en plata 925 Compatible con pulseras de charms.",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "otros",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_720071-MLM71849703458_092023-F.webp",
        "stock": 10
    },
    {
        "id": 35,
        "nombre": "Charm Foco",
        "precio": 350,
        "descripcion": "Hermoso charm de foco, brilla en la oscuridad, se recarga con luz solar; elaborado en plata 925 (tiene quintado) compatible con pulsera pandora.",
        "material": "Plata",
        "tipo": "Charms",
        "categoria": "otros",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_792232-MLM50865340357_072022-F.webp",
        "stock": 10
    }
]

/*2. MANIPULAR EL DOM PARA INSERTAR LOS OBJETOS DENTRO DE HTML*/

document.addEventListener('DOMContentLoaded', function () {
    listaProductos.forEach(producto => {
        // Crear un nuevo div para cada producto
        let productDiv = document.createElement('div');
        productDiv.className = 'producto';


        // insertar HTML al div
        productDiv.innerHTML = `
      <div class="product">
        <div class="imagen--container--producto">
        <img src="${producto.imagen}" alt="${producto.nombre}" id="imagen--producto">
        </div>
        <h4>${producto.nombre}</h4>
        <p>Precio: $${producto.precio}</p>
        <button class="btn--comprar">Comprar</button>
      </div>
    `;

        // Obtener el div de categoría según la categoría del producto
        let categoryDiv = document.querySelector(`#${producto.categoria}`);

        // Agregar el div del producto a la categoría div
        if (categoryDiv) {
            // Aplicar un estilo para hacer que los elementos productDiv estén en línea
            productDiv.style.display = 'inline-block';
            categoryDiv.appendChild(productDiv);

            // Agregar un evento de clic al productDiv
            productDiv.addEventListener('click', function () {
                // Mostrar el modal con la información del producto
                showPopup(producto);
            });
        } else {
            console.error(`Category not found for product: ${producto.nombre}`);
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
            <img id="img-preview" src="${producto.imagen}" alt="${producto.nombre}">
        </div>
        <div class="more--info">
            <h3 class="product--name">${producto.nombre}</h3>
            <p class="product--description">${producto.descripcion}</p>
            <p class="product--material">Material: ${producto.material}</p>
            <p class="product--type">Tipo: ${producto.tipo}</p>
            <div class="price">$${producto.precio}</div>
            <div class="preview--buttons">
                <button class="cart" id="${producto.id}">Agregar al carrito</button>
            </div>
        </div>
      </div>
  `;

    /*************************************************************************** */

    let botonesAgregar = document.querySelectorAll(".cart");
    const numerito = document.querySelector("#numerito");


    function actualizarBotonesAgregar() {
        botonesAgregar = document.querySelectorAll(".cart");

        botonesAgregar.forEach(boton => {
            boton.addEventListener("click", agregarAlCarrito);
        });
    }

    actualizarBotonesAgregar();




    let productosEnCarrito;

    let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

    if (productosEnCarritoLS) {
        productosEnCarrito = JSON.parse(productosEnCarritoLS);
        //actualizarNumerito();
    } else {
        productosEnCarrito = [];
    }



    function agregarAlCarrito(e) {
        const idBoton = e.currentTarget.id;
        console.log(idBoton);
        const productoAgregado = listaProductos.find(producto => producto.id === parseInt(idBoton));

        if (productoAgregado) {
            let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];

            // Verificar si el producto ya está en el carrito
            const productoExistente = productosEnCarrito.find(producto => producto.id === productoAgregado.id);

            if (productoExistente) {
                // Si el producto ya está en el carrito, aumenta la cantidad
                productoExistente.cantidad++;
            } else {
                // Si es un nuevo producto, agrégalo al carrito con cantidad 1
                productoAgregado.cantidad = 1;
                productosEnCarrito.push(productoAgregado);
            }

            // Guardar el carrito actualizado en el almacenamiento local
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            //Al presionar el botón agregar carrito se cierra el modal y overlay
            modal.style.display = 'none';
            overlay.style.display = 'none';
        }


    }
    /*function actualizarNumerito() {
        let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
        numerito.innerText = nuevoNumerito;
    }*/

    /*************************************************************************** */
    // Mostrar el modal y el overlay
    modal.style.display = 'inline-block';
    overlay.style.display = 'inline-block';

    // Agregar un evento de clic al overlay para cerrar el modal
    overlay.addEventListener('click', function () {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Agregar un evento de clic al modal para evitar el cierre al hacer clic dentro de él
    modal.addEventListener('click', function (event) {
        event.stopPropagation(); // Evita que el clic se propague al overlay
    });

    
}


const pruebafinal = document.querySelector(".pruebafinal");

pruebafinal.addEventListener("click", () => {

    console.log(localStorage.getItem("productos-en-carrito"));

})

