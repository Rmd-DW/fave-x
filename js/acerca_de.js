
// ACERCA DE
document.addEventListener('DOMContentLoaded', () => {
    
    // ---  Lógica del Carrusel (Flechas) ---
    const slider = document.getElementById('faveGallerySlider');
    const btnLeft = document.getElementById('slideLeftBtn');
    const btnRight = document.getElementById('slideRightBtn');

    if (slider && btnLeft && btnRight) {
        const scrollAmount = 240; 
        
        btnLeft.addEventListener('click', () => {
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        btnRight.addEventListener('click', () => {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }


    const imageLightboxModal = document.getElementById('imageLightboxModal');
    const expandedGalleryImg = document.getElementById('expandedGalleryImg');
    const imageLoadingSpinner = document.getElementById('imageLoadingSpinner');

    if (imageLightboxModal) {
        
        // Al abrir el modal
        imageLightboxModal.addEventListener('show.bs.modal', function (event) {
            const clickedThumbnail = event.relatedTarget;
            const highResImageSrc = clickedThumbnail.getAttribute('data-large-src');

        
            imageLoadingSpinner.classList.remove('d-none');

            expandedGalleryImg.classList.add('d-none');
        
            expandedGalleryImg.setAttribute('src', highResImageSrc);
        });

        
        expandedGalleryImg.addEventListener('load', function() {
           
            imageLoadingSpinner.classList.add('d-none');
           
            expandedGalleryImg.classList.remove('d-none');
        });

        
        imageLightboxModal.addEventListener('hidden.bs.modal', function () {
            expandedGalleryImg.setAttribute('src', '');
            expandedGalleryImg.classList.add('d-none');
            imageLoadingSpinner.classList.remove('d-none');
        });
    }
});