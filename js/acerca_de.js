
// ACERCA DE
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Lógica del Carrusel (Flechas) ---
    const slider = document.getElementById('faveGallerySlider');
    const btnLeft = document.getElementById('slideLeftBtn');
    const btnRight = document.getElementById('slideRightBtn');

    if (slider && btnLeft && btnRight) {
        const scrollAmount = 240; // Ancho de la tarjeta + gap
        
        btnLeft.addEventListener('click', () => {
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        btnRight.addEventListener('click', () => {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

    // --- 2. Lógica del Modal (Alta Resolución y Spinner) ---
    const imageLightboxModal = document.getElementById('imageLightboxModal');
    const expandedGalleryImg = document.getElementById('expandedGalleryImg');
    const imageLoadingSpinner = document.getElementById('imageLoadingSpinner');

    if (imageLightboxModal) {
        
        // Al abrir el modal
        imageLightboxModal.addEventListener('show.bs.modal', function (event) {
            const clickedThumbnail = event.relatedTarget;
            const highResImageSrc = clickedThumbnail.getAttribute('data-large-src');

            // 1. Mostramos el spinner de "Cargando..."
            imageLoadingSpinner.classList.remove('d-none');
            // 2. Ocultamos la imagen anterior o vacía
            expandedGalleryImg.classList.add('d-none');
            // 3. Empezamos a descargar la imagen grande
            expandedGalleryImg.setAttribute('src', highResImageSrc);
        });

        // Cuando la imagen grande ya se descargó completamente
        expandedGalleryImg.addEventListener('load', function() {
            // Ocultamos el spinner
            imageLoadingSpinner.classList.add('d-none');
            // Mostramos la foto en alta calidad
            expandedGalleryImg.classList.remove('d-none');
        });

        // Al cerrar el modal, vaciamos la imagen para ahorrar memoria
        imageLightboxModal.addEventListener('hidden.bs.modal', function () {
            expandedGalleryImg.setAttribute('src', '');
            expandedGalleryImg.classList.add('d-none');
            imageLoadingSpinner.classList.remove('d-none');
        });
    }
});