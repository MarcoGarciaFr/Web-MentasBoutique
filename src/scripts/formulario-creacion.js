let listaProductos = [];

async function getProducts() {
const response = await fetch("http://localhost:8080/admin/products");
const data = await response.json();
listaProductos = data;
console.log(listaProductos);
}


const form = document.querySelector(".formulario");
form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Evitar el envío predeterminado del formulario

    // Validar el formulario con Bootstrap
    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add("was-validated");
    } else {
        // Si el formulario es válido, publicar el producto
        publishProduct();
        // Restablecer el formulario
        form.classList.remove("was-validated");
        form.reset();

    }
});

 function publishProduct() {

    // Obtener valores del formulario
    let productName = document.getElementById("name").value;
    let productPrice = document.getElementById("lastName").value;
    let productDescription = document.getElementById("productDescription").value;
    let productMaterial = document.getElementById("productMaterial").value;
    let productType = document.getElementById("productType").value;
    let productCategory = document.getElementById("productCategory").value;
    let productImage = document.getElementById("productImage").value;
    let productStock = document.getElementById("productStock").value;

    let producto = {
        nombre: productName,
        precio: productPrice,
        descripcion: productDescription,
        material: productMaterial,
        tipo: productType,
        categoria: productCategory,
        imagen: productImage,
        stock: productStock,
    };
    console.log(producto);


    const crearProducto = async () => {
        const url = `http://localhost:8080/admin/products`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            });
            const data = await response.json();
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    let isDuplicate = false;

    for (let i = 0; i < listaProductos.length; i++) {
        let existingProduct = listaProductos[i];
    
        if (
            existingProduct.nombre == producto.nombre &&
            existingProduct.precio == parseInt(producto.precio) &&
            existingProduct.descripcion == producto.descripcion &&
            existingProduct.material == producto.material &&
            existingProduct.tipo == producto.tipo &&
            existingProduct.categoria == producto.categoria &&
            existingProduct.imagen == producto.imagen
        ) {
            console.log("El producto ya existe");
            isDuplicate = true;
            break;
        }
    }
    
    if (!isDuplicate) {
        crearProducto();
    }

}





getProducts();

