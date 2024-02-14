const lista = localStorage.getItem("listaProductos");

function showPopup(productData){
    // Obtener el modal y el overlay
    let modal = document.querySelector('.modal-info');
    let overlay = document.querySelector('.overlay');
   
    // Actualizar el contenido del modal con la información del producto
    modal.innerHTML = `
        <div class="container">
          <div id="imagen--product">
              <img id="img-product" src="${productData.img}" alt="${productData.name}">
          </div>
          <div class="more--info">
              <h3 class="product--name">${productData.name}</h3>
              <p class="product--description">${productData.description}</p>
              <p class="product--material">Material: ${productData.material}</p>
              <p class="product--type">Tipo: ${productData.type}</p>
              <div class="price">$${productData.price}</div>
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
   

fillCarousel(lista);


//array de contenedores de cards
let cardContainers= document.querySelectorAll(".card-container");
//traer botones
const botonNext = document.querySelector(".carousel__btn-next")
const botonPrev = document.querySelector(".carousel__btn-prev")

//añadir event listener al botonNext que inicializa la funcion para cambiar las cards
botonNext.addEventListener("click", () =>{nextContainer()})
botonPrev.addEventListener("click", () =>{prevContainer()})

//funcion para cambiar a la siguiente card dentro del array de elementos
function nextContainer(){
    //variable que sirve para registrar la carta mostrada actualmente
let actualCard = 0

//ciclo for para recorrer el array de elementos y encontrar la tarjeta activa (osea, la que se visibiliza actualmente)
for(i=0; i<=(cardContainers.length-1); i++){
    if(cardContainers[i].className.includes("active")){
        actualCard = i
        console.log(actualCard);
        }
    }

/*el siguiente if statement detecta en que posicion del array nos encontramos. y en caso de encontrarnos en la ultima carta, 
se reinicia el carusel empezando por el index 0 (o la primera carta)

funciona de la siguiente manera:

la unica carta visible del array es la que tiene la clase "active" en ella, esta clase tiene una unica caracteristica que es:
display: "flex"; lo cual hace visible la carta, ya que por default todas cartas tienen un display: "none";
el programa acontinuacion funciona de la siguiente manera
1. se agrega la clase "animated-out" a la carta activa lo cual inicia la animacion de salida,
2. tras un timeout basado en la duracion de la animacion, las clases animated-out y active son removidas de la carta actual
3. se agrega las clases active y animated-in a la siguiente carta del carusel, lo cual activa, al mismo tiempo, su visibilidad y su animacion de entrada.
4. tras la finalizacion de la animacion, se remueve la clase animated-in para no causar conflicto con la siguiente carta. 
nota: el else statement hace exactamente lo mismo pero adaptado para la ultima carta del carusel
*/ 
    if(actualCard < (cardContainers.length-1)){
        cardContainers[actualCard].classList += " animated-out"
        
        setTimeout(() => {
            cardContainers[actualCard].classList.remove("animated-out");
            cardContainers[actualCard].classList.remove("active");
            cardContainers[actualCard+1].classList += " active" + " animated-in"
     
        }, 2000); 
        setTimeout(()=>{
            cardContainers[actualCard+1].classList.remove("animated-in")}, 4000
        )

    }else {
        cardContainers[cardContainers.length-1].classList +=" animated-out"
        
        setTimeout(() => {
            cardContainers[cardContainers.length-1].classList.remove("animated-out");
            cardContainers[cardContainers.length-1].classList.remove("active");
            cardContainers[0].classList += " active" + " animated-in"
        }, 2000); 
        setTimeout(()=>{
            cardContainers[0].classList.remove("animated-in")}, 4000
        )
    }
    }



    function prevContainer(){
        //variable que sirve para registrar la carta mostrada actualmente
    let actualCard = 0
    
    //ciclo for para recorrer el array de elementos y encontrar la tarjeta activa (osea, la que se visibiliza actualmente)
    for(i=0; i<=(cardContainers.length-1); i++){
        if(cardContainers[i].className.includes("active")){
            actualCard = i
            console.log(actualCard);
            }
        }
    
    /*el siguiente if statement detecta en que posicion del array nos encontramos. y en caso de encontrarnos en la ultima carta, 
    se reinicia el carusel empezando por el index 0 (o la primera carta)
    
    funciona de la siguiente manera:
    
    la unica carta visible del array es la que tiene la clase "active" en ella, esta clase tiene una unica caracteristica que es:
    display: "flex"; lo cual hace visible la carta, ya que por default todas cartas tienen un display: "none";
    el programa acontinuacion funciona de la siguiente manera
    1. se agrega la clase "animated-out" a la carta activa lo cual inicia la animacion de salida,
    2. tras un timeout basado en la duracion de la animacion, las clases animated-out y active son removidas de la carta actual
    3. se agrega las clases active y animated-in a la siguiente carta del carusel, lo cual activa, al mismo tiempo, su visibilidad y su animacion de entrada.
    4. tras la finalizacion de la animacion, se remueve la clase animated-in para no causar conflicto con la siguiente carta. 
    nota: el else statement hace exactamente lo mismo pero adaptado para la ultima carta del carusel
    */ 
        if(actualCard == 0){
            cardContainers[actualCard].classList += " animated-out-p"
            
            setTimeout(() => {
                cardContainers[actualCard].classList.remove("animated-out-p");
                cardContainers[actualCard].classList.remove("active");
                cardContainers[cardContainers.length-1].classList += " active" + " animated-in-p"
                
            }, 2000); 
            setTimeout(()=>{
                cardContainers[cardContainers.length-1].classList.remove("animated-in-p")}, 4000
            )
    
        }else {
            cardContainers[actualCard].classList +=" animated-out-p"
            
            setTimeout(() => {
                cardContainers[actualCard].classList.remove("animated-out-p");
                cardContainers[actualCard].classList.remove("active");
                cardContainers[actualCard-1].classList += " active" + " animated-in-p"
            }, 2000); 
            setTimeout(()=>{
                cardContainers[actualCard-1].classList.remove("animated-in-p")}, 4000
            )
        }
        }



function fillCarousel(lista){
 const data= JSON.parse(lista)
 //creacion del div que contiene las cards
const cardContainer = document.createElement("div")
cardContainer.classList.add("card-container")

//creacion de las cards
const card = document.createElement("div")
card.classList.add("card")
//creacion de botones
const btnPrev = `<button type="button" class="carousel__btn-prev">
<img src="./assets/home-assets/triangle.png" class="arrow-prev" alt="prev">
</button>`
const btnNext = `<button type="button" class="carousel__btn-next">
<img src="./assets/home-assets/triangle.png" class="arrow-next" alt="next">
</button>`

//llamar al carusel para insertar los elementos
let carousel = document.querySelector(".carousel-container")

carousel.innerHTML += btnPrev

//se agregan 3 contenedores
for (let i = 0; i < 3; i++) {
    carousel.appendChild(cardContainer.cloneNode(true))
}

let containers = carousel.querySelectorAll(".card-container");
containers[0].classList += " active";
    // Loop through each card container
    containers.forEach((container) => {
        //insert 3 cards in each container
        for (let i = 0; i < 3; i++) {
            //append the new card
            const newCard = card.cloneNode(true)
            container.appendChild(newCard)
        }
    });

//Element array off all the cards
let allCards = carousel.querySelectorAll(".card")
console.log(allCards);
//loop through each card
allCards.forEach((card, i) => {
    
            // Set inner HTML of the card
            card.innerHTML = `
                <div class="card-link" id="productId${data[i].id}">
                    <img src="${data[i].img}" alt="${data[i].name}" class="img-card">
                </div>
                <p class="product">${data[i].name}</p>
                <p class="price">$${data[i].price}.00</p>`;

                
});

//fue necesario 
setTimeout(() => {
    const cardLinks = document.querySelectorAll(".card-link")
    cardLinks.forEach( (link , f)=>{
        console.log(card + f);
        
        link.addEventListener("click", () =>{
            showPopup(data[f]);
        })
    })
    
}, 2000);


carousel.innerHTML += btnNext



}






    
//Programa para desplegar cartas al hacer click sobre un elemento
//la carta desplegada es un elemento HTML dialog, modificado con CSS para ocupar el viewport actual del usuario

const careInfo = document.querySelector(".care-info-card")
const careCard= document.querySelector(".care-info")

const packingInfo = document.querySelector(".packing-info-card")
const packingCard = document.querySelector(".packing-info")
const divPrueba = document.querySelector(".div-prueba")


careCard.addEventListener("click", () =>{
    careInfo.showModal()

})

packingCard.addEventListener("click", () =>{
    packingInfo.showModal();


})



//evento para redicreccion de los botones descubrir
const btnDescubrelo = document.querySelector(".btn--mentas-descubrelo")
btnDescubrelo.addEventListener("click", ()=>{
    window.location.href = "./src/html/listaProductos.html"
}) 

const btnConocenos = document.querySelector(".btn--mentas-descubrelo-small")
btnConocenos.addEventListener("click", ()=>{
    window.location.href = "./src/html/conocenos.html"
}) 

//evento para redireccion de las cards de categorias
const cardProfesiones = document.getElementById("profesiones");
cardProfesiones.addEventListener("click", () =>{
    const url = "./src/html/listaProductos.html#profesiones";
    window.open(url, '_blank');
})
const cardMascotas = document.getElementById("mascotas");
cardMascotas.addEventListener("click", () =>{
    const url = "./src/html/listaProductos.html#mascotas";
    window.open(url, '_blank');
})