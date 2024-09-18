
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

// Pega o modal
// Pega o modal
var modal = document.getElementById("modal");

// Pega o link que abre o modal
var cursoEsmaltacao = document.getElementById("curso-esmaltacao");

// Pega o elemento <span> que fecha o modal
var closeModal = document.getElementsByClassName("close")[0];

// Lista de imagens do carrossel
var images = [
    "images/pdf1.jpg",
    "images/pdf2.jpg",
    "images/pdf3.jpg",
    "images/pdf4.jpg",
    "images/pdf5.jpg",
    "images/pdf6.jpg",
    "images/pdf7.jpg",
    "images/pdf8.jpg",
    "images/pdf9.jpg"
];

// Posição atual do carrossel
var currentImageIndex = 0;

// Pega os elementos das setas
var prev = document.getElementById("prev");
var next = document.getElementById("next");

// Pega o elemento de imagem do carrossel
var carouselImage = document.getElementById("carousel-image");

// Função para atualizar a imagem do carrossel
function updateCarouselImage() {
    carouselImage.src = images[currentImageIndex];
}

// Quando o usuário clicar no link "Curso Esmaltação em Gel", abre o modal
cursoEsmaltacao.onclick = function (event) {
    event.preventDefault();  // Evita o comportamento padrão do link
    modal.style.display = "block";
    updateCarouselImage(); // Mostra a primeira imagem
}

// Quando o usuário clicar no <span> (x), fecha o modal
closeModal.onclick = function () {
    modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, fecha o modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Navegar para a imagem anterior
prev.onclick = function () {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    updateCarouselImage();
}

// Navegar para a próxima imagem
next.onclick = function () {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    updateCarouselImage();
}

// Inicializa os sliders para mostrar o primeiro slide
document.querySelectorAll('.slider-container').forEach((container, index) => {
    container.classList.add(`slider${index + 1}`);
    container.querySelector('.slide').style.display = 'block';
});
