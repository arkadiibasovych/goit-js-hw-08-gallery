import galleryItems from "./gallery-items.js";

const ref = {
    gallery: document.querySelector('.js-gallery'),
    largeImage: document.querySelector('.lightbox__image'),
    lightBox: document.querySelector('.lightbox'),
    clotheButton: document.querySelector('.lightbox__button')

};

//Создание и рендер разметки по массиву данных и предоставленному шаблону

const addgalleryItems = galleryItems.map(({ preview, original, description }) => {
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

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);
    
    ref.gallery.appendChild(galleryItem);
});

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения


const setLargeImageURL = (url) => ref.largeImage.src = url;

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

    ref.lightBox.classList.add('is-open');

};

ref.gallery.addEventListener('click', onGalleryClick);


