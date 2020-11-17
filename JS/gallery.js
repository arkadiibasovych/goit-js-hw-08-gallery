import galleryItems from "./gallery-items.js";

const ref = {
    gallery: document.querySelector('.js-gallery'),

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





і