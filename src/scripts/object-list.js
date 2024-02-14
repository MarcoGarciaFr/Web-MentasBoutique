class Producto {
    constructor(name, price, description, material, type, category, subcategory, img){
        this.name = name;
        this.price = price;
        this.description = description;
        this.material = material;
        this.type = type;
        this.category = category;
        this.subcategory = [subcategory];
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
console.log(listaProductos)

