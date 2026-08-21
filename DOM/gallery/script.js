const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');

gallery.querySelectorAll('.gallery-item').forEach((thumb) => {
  thumb.addEventListener('click', () => {
    const fullSizeSrc = thumb.src.replace('-thumbnail', '');
    lightboxImage.src = fullSizeSrc;
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = 'none';
  }
});