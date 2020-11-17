import galleryItems from "./gallery-items.js";

const ref = {
    gallery: document.querySelector('.js-gallery'),
    largeImage: document.querySelector('.lightbox__image'),
    lightBox: document.querySelector('.lightbox'),
    closeButton: document.querySelector('.lightbox__button'),
    overlay: document.querySelector('.lightbox__overlay')

};


//Создание и рендер разметки по массиву данных и предоставленному шаблону

const addgalleryItems = galleryItems.map(({ preview, original, description }, index) => {
    const galleryItem = document.createElement('li');
    galleryItem.setAttribute('class', 'gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.setAttribute('class', 'gallery__link');
    galleryLink.setAttribute('href', original);

    const galleryImage = document.createElement('img');
    galleryImage.setAttribute('class', 'gallery__image');
    galleryImage.setAttribute('src', preview);
    galleryImage.setAttribute('data-source', original);
    galleryImage.setAttribute('alt', description);
    galleryImage.setAttribute('data-index', index);


    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);
    
    ref.gallery.appendChild(galleryItem);
});

console.log(ref.gallery);

const setLargeImageURL = (url) => ref.largeImage.src = url;

//Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"]

const closeModal = function () {
    window.removeEventListener('keydown', onPressEscape);
    window.removeEventListener('keydown', onPressArray);

    ref.lightBox.classList.remove('is-open');

    //Очистка значения атрибута src элемента img.lightbox__image
    ref.largeImage.src = '';

};

// const largeImageArray = document.querySelectorAll('[data-index]');

const onPressEscape = function (event) {
    if (event.code === 'Escape') {
        closeModal();
    }
};

const onPressArray = function (event) {
if (event.code === 'ArrowLeft') {
         console.log('Left!');
           
        };

        if (event.code === 'ArrowRight') {
            console.log('Right!');
        };

};

const openModal = function () {

    ref.lightBox.classList.add('is-open'); 

//Закрытие модального окна по нажатию клавиши ESC
    window.addEventListener('keydown', onPressEscape);

//Переключатель больших изображений
    window.addEventListener('keydown', onPressArray);
    
};

const onGalleryClick = function (event) {
    event.preventDefault();

    const imageRef = event.target;

    if (imageRef.nodeName !== 'IMG') {
        return;
    }

    // Подмена значения атрибута src элемента img.lightbox__image

    const largeImageURL = imageRef.dataset.source;


    setLargeImageURL(largeImageURL);
    

    // Открытие модального окна по клику на элементе галереи

    openModal();

};

ref.gallery.addEventListener('click', onGalleryClick);



ref.closeButton.addEventListener('click', closeModal);

// Закрытие модального окна по клику на div.lightbox__overlay

const overlayCloseMoadal = function (event) {
    if (event.target === event.currentTarget) {
        closeModal();
    }
};

ref.overlay.addEventListener('click', overlayCloseMoadal);







