class Producto {
    constructor(name, price, description, material, type, category, subcategory, img, id){
        this.name = name;
        this.price = price;
        this.description = description;
        this.material = material;
        this.type = type;
        this.category = category;
        this.subcategory = subcategory;
        this.img = img;
        this.id = id;
        
    }
} //clase producto creada para construir el objeto y pensando en agregar posibles metodos relacionados con el backend. 

const productosData = [
    {
        name: "Charm Husky",
        price: 390,
        description: "Charm Husky elaborado en plata 925 compatible con pulseras de charms varias marcas.",
        material: "Plata 925",
        type: "Charm",
        category: "Mascotas",
        subcategories: ["Perro"],
        img: "../../assets/lista-productos-assets/Perros/Perros/husky.jpg",
        id: "01"
    },
    {
        name: "La Noche Estrellada",
        price: 390,
        description: "Charm elaborado en plata 925 quintado, compatible con pulseras de charms.",
        material: "Plata 925",
        type: "Charm",
        category: "Arte",
        subcategories: ["Otros", "Arte"],
        img: "../../assets/lista-productos-assets/Otros Charms/noche-estrellada.png",
        id: "02"
    },
    {
        name: "Corazón Anatómico",
        price: 390,
        description: "Charm Corazón anatómico, elaborado en plata 925 compatible con pulseras de charms varias marcas.",
        material: "Plata 925",
        type: "Charm",
        category: "Profesiones",
        subcategories: ["salud", "Medicina"],
        img: "../../assets/lista-productos-assets/Profesiones/medicina corazon.jpg",
        id: "03"
    },
    {
        name: "French Poodle",
        price: 390,
        description: "Charm French Poodle, elaborado en plata 925 compatible con pulseras de charms varias marcas.",
        material: "Plata 925",
        type: "Charm",
        category: "Mascotas",
        subcategories: ["Perros"],
        img: "../../assets/lista-productos-assets/Perros/Perros/poodle 3.jpg",
        id: "04"
    },
    {
        name: "Cerebro Anatomico",
        price: 390,
        description: "Charm Cerebro anatómico, elaborado en plata 925 compatible con pulseras de charms varias marcas.",
        material: "Plata 925",
        type: "Charm",
        category: "Profesiones",
        subcategories: ["salud", "Medicina", "Psicologia"],
        img: "../../assets/lista-productos-assets/Profesiones/cerebro.png",
        id: "05"
    },
    {
        name: "Pulmon Anatómico",
        price: 370,
        description: "Charm Pulmón anatómico, elaborado en plata 925 compatible con pulseras de charms varias marcas.",
        material: "Plata 925",
        type: "Charm",
        category: "Profesiones",
        subcategories: ["salud", "Medicina"],
        img: "../../assets/lista-productos-assets/Profesiones/medicina pulmon.jpg",
        id: "06"
    },
    {
        name: "Maestra",
        price: 370,
        description: "Charm educación, elaborado en plata 925 compatible con pulseras de charms varias marcas.",
        material: "Plata 925",
        type: "Charm",
        category: "Profesiones",
        subcategories: ["Educacion", "Psicologia"],
        img: "../../assets/lista-productos-assets/Profesiones/educacion.jpg",
        id: "07"
    },
    {
        name: "Microscopio",
        price: 370,
        description: "Charm microscopio, elaborado en plata 925 compatible con pulseras de charms varias marcas.",
        material: "Plata 925",
        type: "Charm",
        category: "Profesiones",
        subcategories: ["salud", "Quimico", "Ciencia", "Biologia"],
        img: "../../assets/lista-productos-assets/Profesiones/microscopio.jpg",
        id: "08"
    },
    {
        name: "Schnauzer",
        price: 390,
        description: "Charm schnauzer, elaborado en plata 925 compatible con pulseras de charms varias marcas.",
        material: "Plata 925",
        type: "Charm",
        category: "Mascotas",
        subcategories: ["perros"],
        img: "../../assets/lista-productos-assets/Perros/Perros/schnauzer.jpg",
        id: "09"
    },
    {
        name: "Collar ADN",
        price: 350,
        description: "Collar ADN elaborado en plata 925.",
        material: "Plata 925",
        type: "Collar",
        category: "Profesiones",
        subcategories: ["Ciencia", "Quimico", "Biologia", "salud"],
        img: "../../assets/lista-productos-assets/Collar/collar.jpg",
        id: "10"
    }
];


const listaProductos = productosData.map(productData => 
    new Producto(
        productData.name,
        productData.price,
        productData.description,
        productData.material,
        productData.type,
        productData.category,
        productData.subcategories,
        productData.img,
        productData.id
    )
);
console.log(listaProductos);

localStorage.setItem("listaProductos", JSON.stringify(listaProductos));



