
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;
let closeAttemptCount = 0;
let isLightboxOpen = false;

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
            <div class="info-labels">
              <span>Likes</span>
              <span>Views</span>
              <span>Comments</span>
              <span>Downloads</span>
            </div>
            <div class="info-values">
              <span>${image.likes}</span>
              <span>${image.views}</span>
              <span>${image.comments}</span>
              <span>${image.downloads}</span>
            </div>
          </div>
        </li>
      `;
    })
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      close: false, // вимикаємо стандартну кнопку закриття
    });

    // Відстежуємо відкриття/закриття
    lightbox.on('shown.simplelightbox', () => {
      isLightboxOpen = true;
    });

    lightbox.on('closed.simplelightbox', () => {
      isLightboxOpen = false;
      closeAttemptCount = 0;
    });

    setupCustomCloseBehavior();
  } else {
    lightbox.refresh();
  }
};

function setupCustomCloseBehavior() {
  // натискання ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isLightboxOpen) {
      handleCloseAttempt();
    }
  });

  // клік поза зображенням (по оверлею)
  document.addEventListener('click', (e) => {
    const overlay = document.querySelector('.sl-overlay');
    if (isLightboxOpen && overlay && e.target === overlay) {
      handleCloseAttempt();
    }
  });
}

function handleCloseAttempt() {
  closeAttemptCount += 1;
  console.log(`Close attempt #${closeAttemptCount}`);

  if (closeAttemptCount >= 3) {
    lightbox.close();
    closeAttemptCount = 0;
  }
}

// інші функції
export const clearGallery = () => {
  document.querySelector('.gallery').innerHTML = '';
};

export const showLoader = () => {
  document.getElementById('loader').style.display = 'block';
};

export const hideLoader = () => {
  document.getElementById('loader').style.display = 'none';
};


