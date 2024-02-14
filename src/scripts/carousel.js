//traer botones
const botonNext = document.querySelector(".carousel__btn-next")
const botonPrev = document.querySelector(".carousel__btn-prev")

//array de contenedores de cards
let cardContainers= document.querySelectorAll(".card-container");

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


