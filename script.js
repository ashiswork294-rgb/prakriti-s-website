const viewer = document.getElementById('photo-viewer');
const viewerImage = document.getElementById('viewer-image');
const viewerCaption = document.getElementById('viewer-caption');
document.querySelectorAll('.gallery-item').forEach((item) => {
  item.addEventListener('click', () => {
    viewerImage.src = item.dataset.full;
    viewerImage.alt = item.querySelector('img').alt;
    viewerCaption.textContent = item.dataset.caption || '';
    viewer.showModal();
  });
});
document.querySelector('.close-viewer').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', (event) => {
  if (event.target === viewer) viewer.close();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && viewer.open) viewer.close();
});
