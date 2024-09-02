
    let currentSlideIndex1 = 0;
    let currentSlideIndex2 = 0;
    let currentSlideIndex3 = 0; // Novo índice para o slider de sobrancelha

    function changeSlide(direction, sliderId) {
        const slides = document.querySelectorAll(`.${sliderId} .slide`);
        let currentSlideIndex = sliderId === 'slider1' ? currentSlideIndex1 : (sliderId === 'slider2' ? currentSlideIndex2 : currentSlideIndex3);

        // Oculta o slide atual
        slides[currentSlideIndex].style.display = 'none';

        if (direction === 'next') {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        } else {
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        }

        // Mostra o novo slide
        slides[currentSlideIndex].style.display = 'block';

        if (sliderId === 'slider1') {
            currentSlideIndex1 = currentSlideIndex;
        } else if (sliderId === 'slider2') {
            currentSlideIndex2 = currentSlideIndex;
        } else {
            currentSlideIndex3 = currentSlideIndex;
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        const detailsElements = document.querySelectorAll('details');
    
        detailsElements.forEach(detail => {
            detail.addEventListener('click', function () {
                // Fecha todos os <details> exceto o clicado
                detailsElements.forEach(otherDetail => {
                    if (otherDetail !== detail) {
                        otherDetail.removeAttribute('open');
                    }
                });
            });
        });
    });
    
    // Inicializa os sliders para mostrar o primeiro slide
    document.querySelectorAll('.slider-container').forEach((container, index) => {
        container.classList.add(`slider${index + 1}`);
        container.querySelector('.slide').style.display = 'block';
    });
