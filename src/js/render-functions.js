

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


export const createGallery = (images) => {
    const galleryContainer = document.querySelector('.gallery');
    const markup = images
        .map(image => {
            return `
                <li class="gallery-item">
                    <a href="${image.largeImageURL}" class="gallery-link">
                        <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image" />
                    </a>
                    <div class="image-info">
                        <p><b>Likes:</b> ${image.likes} | <b>Views:</b> ${image.views} | <b>Comments:</b> ${image.comments} | <b>Downloads:</b> ${image.downloads}</p>
                    </div>
                </li>
            `;
        })
        .join('');
    galleryContainer.insertAdjacentHTML('beforeend', markup);
};



export const clearGallery = () => {
    document.querySelector('.gallery').innerHTML = '';
  };
  
  export const showLoader = () => {
    document.getElementById('loader').style.display = 'block';
  };
  
  export const hideLoader = () => {
    document.getElementById('loader').style.display = 'none';
  };



