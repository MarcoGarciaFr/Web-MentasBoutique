function mostrarPopCard() {
    var popCard = document.getElementById('popCard');
    popCard.classList.toggle('oculto');
}

function cerrarPopCard() {
    var popCard = document.getElementById('popCard');
    popCard.classList.add('oculto');
}

function abrirRed(url) {
    window.open(url, '_blank');
}
