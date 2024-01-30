document.addEventListener("DOMContentLoaded", function () {
    // Obtener el formulario y agregar evento de envío
    let form = document.querySelector(".formulario");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío predeterminado del formulario

        // Validar el formulario con Bootstrap
        if (form.checkValidity() === false) {
            event.stopPropagation();
            form.classList.add("was-validated");
        } else {
            // Si el formulario es válido, publicar el producto
            publishProduct();
            // Restablecer el formulario
            form.classList.remove("was-validated");
            form.reset();
            // Actualizar la lista de productos después de la publicación
            displayProducts();
        }
    });

    const btnEl = document.getElementById('btn');
    const fileEl = document.getElementById('image');

    // Agregar evento de clic al botón de búsqueda de imagen
    btnEl.addEventListener('click', function () {
        fileEl.click();
    });

    // Agregar evento al cambio de archivo para manejar la imagen
    fileEl.addEventListener('change', () => {
        const fr = new FileReader();
        fr.readAsDataURL(fileEl.files[0]);
        fr.addEventListener('load', () => {
            const url = fr.result;
            // Almacenar la imagen en el localStorage con una clave específica
            localStorage.setItem('my-image', url);
        });
    });

    // Cargar productos al cargar la página
    displayProducts();
});
function publishProduct() {
    // Obtener valores del formulario
    let productName = document.getElementById("name").value;
    let productPrice = document.getElementById("lastName").value;
    let productDescription = document.getElementById("productDescription").value;
    let productMaterial = document.getElementById("productMaterial").value;
    let productType = document.getElementById("productType").value;
    let productCategory = document.getElementById("productCategory").value;
    let productSubcategory = document.getElementById("productSubcategory").value;

    // Obtener la imagen del localStorage
    let productImage = localStorage.getItem('my-image');

    // Obtener productos existentes en local storage e inicializar un array vacío
    let existingProducts = JSON.parse(localStorage.getItem("products")) || [];

    // Verificar si el producto esta duplicado antes de agregarlo
    let isDuplicate = existingProducts.some(existingProduct => {
        return (
            existingProduct.name === productName &&
            existingProduct.price === productPrice &&
            existingProduct.description === productDescription &&
            existingProduct.material === productMaterial &&
            existingProduct.type === productType &&
            existingProduct.category === productCategory &&
            existingProduct.subcategory === productSubcategory &&
            existingProduct.image === productImage
        );
    });

    if (isDuplicate) {
        console.log("El producto ya existe en la lista.");
        return;
    }

    // Crear un objeto con los datos del producto
    let product = {
        name: productName,
        price: productPrice,
        description: productDescription,
        material: productMaterial,
        type: productType,
        category: productCategory,
        subcategory: productSubcategory,
        image: productImage,
    };

    // Agregar el nuevo producto al array
    existingProducts.push(product);

    // Guardar el array actualizado en local storage
    localStorage.setItem("products", JSON.stringify(existingProducts));

    // Mostrar mensaje de éxito
    console.log("Producto publicado con éxito");
}

function displayProducts() {
    // Obtener productos almacenados en local storage
    let storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    // Obtener el elemento donde mostrar los productos
    let productListContainer = document.getElementById("productList");


    // Crear una lista de productos
    let productList = document.createElement("ul");

    // Recorrer los productos y agregarlos a la lista
    storedProducts.forEach(function (product) {
        let listItem = document.createElement("ul");
        let imgElement = document.createElement("img");
        listItem.classList.add("prueba");
        listItem.textContent = `${product.name} - ${product.price} - ${product.description}- ${product.material}- ${product.type}- ${product.category}- ${product.subcategory}`;

        // Agregar la imagen 
        listItem.classList.add("imagenprueba");
        imgElement.src = product.image;
    
        listItem.appendChild(imgElement);
        productList.appendChild(listItem);
    });

    // Agregar la lista al contenedor
    productListContainer.appendChild(productList);
}

document.addEventListener("DOMContentLoaded", function () {
    //localStorage.clear(); // opcion para limpiar el localstorage
});