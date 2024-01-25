/*Crear los nodos con los que trabajaremos.
En este caso son cada card de review */
let previewContainer = document.querySelector('.products-preview');
let previewBox = document.querySelectorAll('.preview');

document.querySelectorAll('.center .reviews--quinta').forEach(reviews =>{
    reviews.addEventListener('click', () =>{
        previewContainer.style.display = 'flex';
        let name = reviews.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }else{
                preview.classList.remove('active');
            }
        });
    });
});

previewBox.forEach(close=>{
    close.querySelector('.fa-xmark').addEventListener( 'click', () => {
    close.classList.remove('active');
    previewContainer.style.display = 'none';
    });
});