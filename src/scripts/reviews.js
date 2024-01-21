/*Crear los nodos con los que trabajaremos.
En este caso son cada card de review */
let previewContainer = document.querySelector('.products-preview');
let previewBox = document.querySelectorAll('.preview');

document.querySelectorAll('seccion--quinta .reviews').forEach(reviews =>{
    reviews.onClick = () =>{
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close=>{
    close.querySelector('.fa-xmark').onClick = () =>{
    close.classList.remove('active');
    previewContainer.style.display = 'none';
    };
});