// Slider Functionality (Mantido conforme seu código original)
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

    // Inicializa os sliders para mostrar o primeiro slide
    document.querySelectorAll('.slider-container').forEach((container, index) => {
        container.classList.add(`slider${index + 1}`);
        container.querySelector('.slide').style.display = 'block';
    });
});

// Modal and Carousel Functionality

// Pega o modal
var modal = document.getElementById("modal");

// Pega os links que abrem o modal
var cursoEsmaltacao = document.getElementById("curso-esmaltacao");
var cursoCilios = document.getElementById("curso-cilios");

// Pega o elemento <span> que fecha o modal
var closeModal = document.getElementsByClassName("close")[0];

// Pega os elementos das setas
var prev = document.getElementById("prev");
var next = document.getElementById("next");

// Pega o elemento de imagem do carrossel
var carouselImage = document.getElementById("carousel-image");

// Listas de imagens para cada curso
var imagesEsmaltacao = [
    "images/curso-esmalte1.jpg",
    "images/curso-esmalte2.jpg",
    "images/curso-esmalte3.jpg",
    "images/curso-esmalte4.jpg",
    "images/curso-esmalte5.jpg",
    "images/curso-esmalte6.jpg",
    "images/curso-esmalte7.jpg",
    "images/curso-esmalte8.jpg",
    "images/curso-esmalte9.jpg"
];

var imagesCilios = [
    "images/curso-cilios1.jpg",
    "images/curso-cilios2.jpg",
    "images/curso-cilios3.jpg",
    "images/curso-cilios4.jpg",
    "images/curso-cilios5.jpg",
    "images/curso-cilios6.jpg",
    "images/curso-cilios7.jpg",
    "images/curso-cilios8.jpg",
    "images/curso-cilios9.jpg",
    "images/curso-cilios10.jpg",
    "images/curso-cilios11.jpg"
];

// Posição atual do carrossel
var currentImageIndex = 0;

// Array atual de imagens sendo exibidas
var currentImages = [];

// Função para atualizar a imagem do carrossel
function updateCarouselImage() {
    if (currentImages.length > 0) {
        carouselImage.src = currentImages[currentImageIndex];
    }
}

// Função para abrir o modal com as imagens específicas
function openModal(images) {
    currentImages = images;
    currentImageIndex = 0;
    updateCarouselImage();
    modal.style.display = "block";
}

// Quando o usuário clicar no link "Curso Esmaltação em Gel", abre o modal com imagensEsmaltacao
cursoEsmaltacao.onclick = function (event) {
    event.preventDefault();  // Evita o comportamento padrão do link
    openModal(imagesEsmaltacao);
}

// Quando o usuário clicar no link "Curso Extensão de Cílios", abre o modal com imagesCilios
cursoCilios.onclick = function (event) {
    event.preventDefault();  // Evita o comportamento padrão do link
    openModal(imagesCilios);
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
    if (currentImages.length > 0) {
        currentImageIndex = (currentImageIndex === 0) ? currentImages.length - 1 : currentImageIndex - 1;
        updateCarouselImage();
    }
}

// Navegar para a próxima imagem
next.onclick = function () {
    if (currentImages.length > 0) {
        currentImageIndex = (currentImageIndex === currentImages.length - 1) ? 0 : currentImageIndex + 1;
        updateCarouselImage();
    }
}
