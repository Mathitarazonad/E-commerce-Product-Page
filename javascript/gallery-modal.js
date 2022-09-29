import { changeBigImg, changeSelectedThumbnail } from './scripts.js';

const bigImg = document.querySelector('.main-img'); 
const galBigImg = document.querySelector('.gallery-selected-img');
const galNextIcon = document.querySelector('#gall-next');
const galPreviousIcon = document.querySelector('#gall-previous');
const getCurrentImg = () => galBigImg.getAttribute('src').match(/[1-4]/)[0];

//Open and close gallery
bigImg.addEventListener('click', () => {
  let galleryModal = document.querySelector('.gallery-modal');
  if(!galleryModal.classList.contains('open')) {
    galleryModal.classList.add('open');
  }
});
  
document.querySelector('#gall-close').addEventListener('click', () => {
  document.querySelector('.gallery-modal').classList.remove('open')
});

//Gallery interaction
export function galChangeSelectedThumbnail (img) {
  document.querySelectorAll('.gall-thumbnail').forEach(thumbnail => {
    if (thumbnail.classList.contains('gal-selected')) {
      thumbnail.classList.remove('gal-selected');
    };
  });
  document.querySelector(`img[src*="./images/image-product-${img}-thumbnail.jpg"][class="gl-thumbnail"]`).parentNode.classList.add('gal-selected'); 
};

export function galChangeBigImg (img) {
  galBigImg.src = `./images/image-product-${img}.jpg`
};

galNextIcon.addEventListener('click', () => {
  let currentImg = parseInt(getCurrentImg());

  if (currentImg === 4) {
    currentImg = 1;
  } else {
    currentImg++
  }
  galChangeBigImg(currentImg);
  galChangeSelectedThumbnail(currentImg);
  changeBigImg(currentImg);
  changeSelectedThumbnail(currentImg);

});

galPreviousIcon.addEventListener('click', () => {
  let currentImg = parseInt(getCurrentImg());

  if (currentImg === 1) {
    currentImg = 4;
  } else {
    currentImg--;
  }
  galChangeBigImg(currentImg);
  galChangeSelectedThumbnail(currentImg);
  changeBigImg(currentImg);
  changeSelectedThumbnail(currentImg);
});

//Gallery thumbnails click
const galThumbnails = document.querySelectorAll('.gall-thumbnail');

//Change in gal as well as in main container
galThumbnails[0].addEventListener('click', () => {
  galChangeBigImg(1);
  galChangeSelectedThumbnail(1);
  changeBigImg(1);
  changeSelectedThumbnail(1);
});

galThumbnails[1].addEventListener('click', () => {
  galChangeBigImg(2);
  galChangeSelectedThumbnail(2);
  changeBigImg(2);
  changeSelectedThumbnail(2);
});

galThumbnails[2].addEventListener('click', () => {
  galChangeBigImg(3);
  galChangeSelectedThumbnail(3);
  changeBigImg(3);
  changeSelectedThumbnail(3);
});

galThumbnails[3].addEventListener('click', () => {
  galChangeBigImg(4);
  galChangeSelectedThumbnail(4);
  changeBigImg(4);
  changeSelectedThumbnail(4);
});






