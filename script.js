function mostrarMensaje() {
    document.getElementById('mensajeFinal').style.display = 'block';
    document.querySelector('.botones').style.display = 'none';
    document.querySelector('.corazon').style.animation = 'none';
}

function moverBoton() {
    const btnNo = document.getElementById('btnNo');
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    
    btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
}