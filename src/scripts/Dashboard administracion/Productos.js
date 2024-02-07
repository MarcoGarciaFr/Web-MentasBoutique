const crearProducto = document.getElementById("#crear");

crearProducto.addEventListener("click", function(){
    let formularioDiv = document.querySelector(".cambio")
    formularioDiv.innerHTML=`
    <h2 class="encabezados">Formulario de Publicación de Producto</h2>

    <div class="container">
        <form class="formulario needs-validation" novalidate>
            <div class="mb-3">
                <label for="name" class="form-label">Nombre del producto</label>
                <input type="text" class="form-control" id="name" max="100" required autocomplete="off">
                <div class="invalid-feedback">
                    Este campo es requerido
                </div>
                <div class="valid-feedback">
                    Correcto!
                </div>
            </div>

            <div class="mb-3">
                <label for="lastName" class="form-label">Precio del producto</label>
                <input type="text" class="form-control" id="lastName" min="1" max="100" required autocomplete="off">
                <div class="invalid-feedback">
                    Este campo es requerido
                </div>
                <div class="valid-feedback">
                    Correcto!
                </div>
            </div>

            <div class="mb-3">
                <label for="productDescription" class="form-label">Descripción del Producto:</label>
                <input type="text" class="form-control" id="productDescription" min="1" max="100" required autocomplete="off">
                <div class="invalid-feedback">
                    Este campo es requerido
                </div>
                <div class="valid-feedback">
                    Correcto!
                </div>
            </div>

            <div class="mb-3">
                <label for="productMaterial" class="form-label">Material:</label>
                <input type="text" class="form-control" id="productMaterial" min="1" max="100" required autocomplete="off">
                <div class="invalid-feedback">
                    Este campo es requerido
                </div>
                <div class="valid-feedback">
                    Correcto!
                </div>
            </div>

            <div class="mb-3">
                <label for="productType" class="form-label">Tipo:</label>
                <input type="text" class="form-control" id="productType" min="1" max="100" required autocomplete="off">
                <div class="invalid-feedback">
                    Este campo es requerido
                </div>
                <div class="valid-feedback">
                    Correcto!
                </div>
            </div>

            <div class="mb-3">
                <label for="productCategory" class="form-label">Categoria:</label>
                <input type="text" class="form-control" id="productCategory" min="1" max="100" required autocomplete="off">
                <div class="invalid-feedback">
                    Este campo es requerido
                </div>
                <div class="valid-feedback">
                    Correcto!
                </div>
            </div>

            <div class="mb-3">
                <label for="productSubcategory" class="form-label">Subcategoria:</label>
                <input type="text" class="form-control" id="productSubcategory" min="1" max="100" required autocomplete="off">
                <div class="invalid-feedback">
                    Este campo es requerido
                </div>
                <div class="valid-feedback">
                    Correcto!
                </div>
            </div>

            <div class="mb-3">
                <label for="image" class="form-label">Imagen</label>
                <button class="btn btn-light" id="btn">Buscar imagen</button>
    <input type="file" id="image" accept="image/*" style="display: none;" required>
    <div class="invalid-feedback">
        Este campo es requerido
    </div>
    <div class="valid-feedback">
        Correcto!
    </div></div>
        
        
            <div class="mb-3">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                    <label class="form-check-label" for="invalidCheck">
                        ¡Estoy list@ para publicar un nuevo producto!
                    </label>
                    <div class="invalid-feedback">
                        Debes aceptar antes de enviar
                    </div>
                </div>
            </div>

            <div class="col-12">
                <button class="btn btn-light" type="submit" onclick="publishProduct()">Publicar</button>
            </div>
        </form>
    </div>

    <div id="productListContainer">
        <h2 class="encabezados">Lista de Productos</h2>
        <div class="cardProducto" id="productList"></div>
    </div>
    `;
    
})