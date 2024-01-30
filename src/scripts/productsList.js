/*El código a continuación tiene dos objetivos:
    1. Crear listado de objetos (10)
    2. Manipular el DOM para insertar los objetos dentro de HTML
    3. Generar estilos para los objetos creados dentro de HTML
    4. Asignar un data-name a cada uno de los objetos
    5. Crear las popups en el dom virtual
    6. Vincular los popups con su correspondiente data-target */


/*1. LISTADO DE OBJETOS */

class Producto {
    constructor(name, price, description, material, type, category, subcategory, img) {
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
    "Charm Husky", 
    390, 
    "Charm Husky elaborado en plata 925 compatible con pulseras de charms varias marcas.",
    "Plata 925",
    "Charm",
    "Mascotas",
    "Perro",
    ""
    ),
    new Producto(
        "La Noche Estrellada",
        390,
        "Charm elaborado en plata 925 quintado, compatible con pulseras de charms.",
        "Plata 925",
        "Charm",
        ["Otros", "Arte"],
        "",
        ""
    ),
    new Producto(
        "Corazón Anatómico",
        390,
        "",
        "Plata 925",
        "Charm",
        "Profesiones",
        ["Salud", "Medicina"],
        ""
    ),
    new Producto(
        "French Poodle",
        390,
        "",
        "Plata 925",
        "Charm",
        "Mascotas",
        ["Perros"],
        ""
    ),
    new Producto(
        "Cerebro Anatomico",
        390,
        "",
        "Plata 925",
        "Charm",
        "Profesiones",
        ["Salud", "Medicina", "Psicologia"],
        ""
    ),
    new Producto(
        "Pulmon Anatómico",
        370,
        "",
        "Plata 925",
        "Charm",
        "Profesiones",
        ["Medicina", "Salud"],
        ""
    ),
    new Producto(
        "Maestra",
        370,
        "",
        "Plata 925",
        "Charm",
        "Profesiones",
        ["Educacion", "Psicologia"],
        ""
    ),
    new Producto(
        "Microscopio",
        370,
        "",
        "Plata 925",
        "Charm",
        "Profesiones",
        ["Salud", "Quimico", "Ciencia", "Biologia"],
        ""
    ),
    new Producto(
        "Schnauzer",
        390,
        "",
        "Plata 925",
        "Charm",
        "Mascotas",
        ["Perro"],
        ""
    ),
    new Producto(
        "Collar ADN",
        350,
        "",
        "Plata 925",
        "Collar",
        "Profesiones",
        ["Ciencia", "Quimico", "Biologia", "Salud"],
        ""
    )

];


/*2. MANIPULAR EL DOM PARA INSERTAR LOS OBJETOS DENTRO DE HTML*/

  // Obtener referencia al contenedor HTML donde se insertarán los objetos
const productosContainer = document.getElementById('productosContainer');

  // Iterar sobre la lista de productos (los 10 objetos creados)
listaProductos.forEach(function(producto) { 
    // Crear un div para cada propiedad del producto
    for (let propiedad in producto) { /* La estructura de bucle for...in en JavaScript itera sobre las propiedades enumerables de un objeto. En este caso, producto es un objeto de la clase Producto, y propiedad se utiliza como una variable que toma el nombre de cada propiedad del objeto en cada iteración.
    */
        if (producto.hasOwnProperty(propiedad)) {
        let div = document.createElement('div');
        div.innerHTML = `${producto[propiedad]}`;
        productosContainer.appendChild(div);
        div.classList.add("prueba");
        }
    }

    // Agregar un separador entre productos
    var separador = document.createElement('hr');
    productosContainer.appendChild(separador);

    });