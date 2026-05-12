const closeButton = document.querySelector('.video__close');
const playButton = document.querySelector('.play-video__link');
const videoPage = document.querySelector('.page__video');
const iframe = document.querySelector('.video__iframe');

closeButton.addEventListener('click', () => {
  console.log(123);
  videoPage.style.display = 'none';
  iframe.src = iframe.src;
});

playButton.addEventListener('click', () => {
  videoPage.style.display = 'block';
});
