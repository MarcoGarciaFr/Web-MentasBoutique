class Producto {
    constructor(id, name, price, description, material, type, category, subcategory, img, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.material = material;
        this.type = type;
        this.category = category;
        this.subcategory = subcategory;
        this.img = img;
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
    "../../../assets/lista-productos-assets/Perros/Perros/husky.jpg",
    "20"
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
        "../../../assets/lista-productos-assets/Otros Charms/noche-estrellada.png",
        "20"
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
        "../../../assets/lista-productos-assets/Profesiones/medicina corazon.jpg",
        "20"
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
        "../../../assets/lista-productos-assets/Perros/Perros/poodle 3.jpg",
        "20"
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
        "../../../assets/lista-productos-assets/Profesiones/cerebro.png",
        "20"
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
        "../../../assets/lista-productos-assets/Profesiones/medicina pulmon.jpg",
        "20"
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
        "../../../assets/lista-productos-assets/Profesiones/educacion.jpg",
        "20"
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
        "../../../assets/lista-productos-assets/Profesiones/microscopio.jpg",
        "20"
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
        "../../../assets/lista-productos-assets/Perros/Perros/schnauzer.jpg",
        "20"
    ),
    new Producto(
        "10", //id
        "Collar ADN", //name
        350, //price
        "Collar ADN elaborado en plata 925.", //description
        "Plata 925", //material
        "Collar", //type
        "profesiones", //category
        ["Ciencia", "Quimico", "Biologia", "salud"], //subcategory
        "../../../assets/lista-productos-assets/Collar/collar.jpg", //img
        "20" //stock
    )

];


/*2. MANIPULAR EL DOM PARA INSERTAR LOS OBJETOS DENTRO DE HTML*/

var tablaBody = document.getElementById('tabla-body');

function verProductos() {
/*Para evitar que la tabla se acumule al hacer clic en el botón de eliminar, se crea una nueva tabla y se reemplaza la existente por completo */
    const tabla = document.getElementById('miTabla');
    const tablaBody = tabla.getElementsByTagName('tbody')[0];
    tablaBody.innerHTML = ""; // Limpiar el cuerpo de la tabla

listaProductos.forEach(producto => {
//Crear la elementos de la tabla
    let fila = document.createElement('tr');
//Crear las celdas dentro de la fila creada
    let celdaId = document.createElement('td');
    let celdaName = document.createElement('td');
    let celdaPrice = document.createElement('td');
    let celdaDescription = document.createElement('td');
    let celdaMaterial = document.createElement('td');
    let celdaType = document.createElement('td');
    let celdaImagen = document.createElement('td');
    let celdaStock = document.createElement('td');
    let celdaDelete = document.createElement('td');
    let celdaEdit = document.createElement('td');



    // Añadir datos a las celdas
    celdaId.textContent = producto.id;
    celdaName.textContent = producto.name;
    celdaPrice.textContent = producto.price;
    celdaDescription.textContent = producto.description;
    celdaMaterial.textContent = producto.material;
    celdaType.textContent = producto.type;
    celdaStock.textContent = producto.stock;
    celdaEdit.innerHTML = `<button type="button" class="btn btn-secondary">Editar</button>`; //Se agrega botón de editar
    celdaDelete.innerHTML = `<button type="button" class="btn btn-danger">Eliminar</button>`; //Se agrega botón de eliminar


    // Crear un elemento de imagen y establecer la fuente (src) desde el JSON
    let imagen = document.createElement('img');
    imagen.src = producto.img;
    imagen.alt = producto.name;
    celdaImagen.appendChild(imagen);
    //Darle un tamaño pequeño a la imagen
    imagen.style.height = "60px";
    imagen.style.width = "60px";

    // Añadir celdas a la fila
    fila.appendChild(celdaId);
    fila.appendChild(celdaName);
    fila.appendChild(celdaPrice);
    fila.appendChild(celdaDescription);
    fila.appendChild(celdaMaterial);
    fila.appendChild(celdaType);
    fila.appendChild(celdaImagen);
    fila.appendChild(celdaStock);
    fila.appendChild(celdaEdit);
    fila.appendChild(celdaDelete);


    // Añadir fila al cuerpo de la tabla
    tablaBody.appendChild(fila);

    //PopUp de botón eliminar
    celdaDelete.addEventListener("click", function(){
        // Mostrar comprobación para eliminar producto
        popupDelete(producto);
    });

    //PopUp de botón editar
    celdaEdit.addEventListener("click", function(){
        // Mostrar edición del objeto json
        popupEdit(producto);
    });
    

})
};



// ******************************** Función de popup para confirmar eliminar producto****************************
function popupDelete(producto) {
    // Obtener el modal y el overlay
    let modal = document.querySelector('.delete-preview');
    let overlay = document.querySelector('.delete-background'); //El overlay es el fondo que se pondrá cuando se abra la popup
    // Actualizar el contenido del modal con la información del producto
    modal.innerHTML = `
        <div class="alinearDelete">
            <h5>¿Desea eliminar ${producto.name}?</h5>
            <div class="confirmation">
                <button id="yes">Sí</button>
                <button id="no">No</button>
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

    // Agregar evento onclick al botón "no" para cerrar el modal
    document.getElementById("no").onclick = function(){close()};
    function close(){
        modal.style.display = 'none';
        overlay.style.display = 'none';
    };

    //Agregar escuchador de eventos para eliminar el objeto 
    const botonEliminar = document.getElementById("yes");
    botonEliminar.addEventListener('click', function() {
        eliminarProducto(producto.id);

    });
    
};


//Función para eliminar un producto con base en su id
function eliminarProducto(id){
listaProductos = listaProductos.filter(function(producto){
    return producto.id !== id
});
verProductos(); // Vuelve a llenar la tabla después de eliminar el objeto
}



//Llamar la función de verProductos para que se despliegue la tabla inicialmente
verProductos();



// ***************************** Función de popup para editar  producto ***********************************
function popupEdit(producto) {
    // Obtener el modal y el overlay
    let modal = document.querySelector('.edit-preview');
    let overlay = document.querySelector('.edit-background'); //El overlay es el fondo que se pondrá cuando se abra la popup
    // Actualizar el contenido del modal con la información del producto
    modal.innerHTML = `
        <div class="alinearEdit">
            <h5>Edición de ${producto.name}</h5>
            <div class="edit">
                <form class="formulario needs-validation" novalidate>
                <div class="fila">
                    <div class="mb-4">
                    <label for="newId" class="form-label">Ingrese un nuevo id: </label>
                    <input placeholder="${producto.id}" type="number" min="1" class="form-control" id="newId" required autocomplete="off"></input>
                        <div class="invalid-feedback">
                            Ingrese un número
                        </div>
                    </div>
                    <div class="mb-4">
                        <label for="newName" class="form-label">Ingrese un nuevo nombre: </label>
                        <input placeholder="${producto.name}" type="name" class="form-control" id="newName" required autocomplete="off"></input>
                            <div class="invalid-feedback">
                                Ingrese un nombre válido
                            </div>
                    </div>
                    <div class="mb-4">
                        <label for="newType" class="form-label">Ingrese nuevo tipo de producto: </label>
                        <input placeholder="${producto.type}" type="text" class="form-control" id="newType" required autocomplete="off"></input>
                            <div class="invalid-feedback">
                                Válido solo charm, aretes, collares, pulseras 
                            </div>
                    </div>
                </div>

                <div class="fila">
                    <div class="mb-4">
                        <label for="newStock" class="form-label">Ingrese cantidad de piezas en stock: </label>
                        <input placeholder="${producto.stock} piezas actuales" type="number" min="1" class="form-control" id="newStock" required autocomplete="off"></input>
                            <div class="invalid-feedback">
                                Ingrese una cantidad válida
                            </div>
                    </div>
                    <div class="mb-4">
                        <label for="newPrice" class="form-label">Ingrese precio en MXN y con dos decimales: </label>
                        <input placeholder="$${producto.price} actualmente" type="number" min="150" class="form-control" id="newPrice" required autocomplete="off"></input>
                            <div class="invalid-feedback">
                                Ingrese un precio válido
                            </div>
                    </div>
                </div>
                    <div class="mb-4">
                        <label for="newDescription" class="form-label">Ingrese nueva descripción: </label>
                        <input placeholder="${producto.description}" type="text" class="form-control" id="newDescription" required autocomplete="off"></input>
                    </div>
                    <div class="mb-4">                        
                        <label for="newImage" class="form-label">Cargar una nueva imagen con medidas 509px x 540px: </label><br>
                        <input type="file" id="newImage" accept="image/*" required>
                    </div>
                        <button id="update" type="submit" name="contact" class="btn btn-success">Actualizar</Button>
                        <button id="noEdit" type="button" class="btn btn-secondary">Cancelar</button>
                </form>
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

    // Agregar evento onclick al botón no para cerrar el modal
    document.getElementById("noEdit").onclick = function(){close()};
    function close(){
        modal.style.display = 'none';
        overlay.style.display = 'none';
    };

    //Sustituir datos del objeto json
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que se recargue la página al enviar el formulario
        // Obtener el valor del input
        let newId = document.getElementById('newId').value;
        let newName = document.getElementById('newName').value;
        let newPrice = document.getElementById('newPrice').value;
        let newDescription = document.getElementById('newDescription').value;
        let newType = document.getElementById('newType').value;
        let newImage = document.getElementById('newImage').value;
        let newStock = document.getElementById('newStock').value;
        // Actualizar el objeto JSON con la nueva información
        producto.id = newId;
        producto.name = newName;
        producto.price = newPrice;
        producto.description = newDescription;
        producto.type = newType;
        producto.img = newImage;
        producto.stock = newStock;
    });
    console.log(listaProductos);
}

console.log(listaProductos);