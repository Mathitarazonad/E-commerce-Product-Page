import {galChangeBigImg, galChangeSelectedThumbnail} from './gallery-modal.js';

// Nav bar from mobile
const menuIcon = document.querySelector('#menu-icon');
const mobileMenu = document.querySelector('.mobile-nav');
const closeIcon = document.querySelector('.close-nav');

// Display nav bar
menuIcon.addEventListener('click', () => {
  if(!mobileMenu.classList.contains('active')) {
    mobileMenu.classList.add('active');
  }
});

// Desactivate nav bar
closeIcon.addEventListener('click', () => {
  mobileMenu.classList.remove('active')
});

//Next and previous img functions
const nextIcon = document.querySelector('#next-icon');
const previousIcon = document.querySelector('#previous-icon');
const bigImg = document.querySelector('.main-img'); 
const getCurrentImg = () => bigImg.getAttribute('src').match(/[1-4]/)[0];

export function changeSelectedThumbnail (img) {
  document.querySelectorAll('.border-thumbnail').forEach(thumbnail => {
    if (thumbnail.classList.contains('selected')) {
      thumbnail.classList.remove('selected');
    };
  });
  document.querySelector(`img[src*="./images/image-product-${img}-thumbnail.jpg"][class="product-thumbnail"]`).parentNode.classList.add('selected'); 
};

export function changeBigImg (img) {
  bigImg.src = `./images/image-product-${img}.jpg`
}

nextIcon.addEventListener('click', () => {
  let currentImg = parseInt(getCurrentImg());

  if (currentImg === 4) {
    currentImg = 1;
  } else {
    currentImg++
  }
  changeBigImg(currentImg);
  changeSelectedThumbnail(currentImg);
  galChangeBigImg(currentImg);
  galChangeSelectedThumbnail(currentImg);

});

previousIcon.addEventListener('click', () => {
  let currentImg = parseInt(getCurrentImg());

  if (currentImg === 1) {
    currentImg = 4;
  } else {
    currentImg--;
  }

  changeBigImg(currentImg);
  changeSelectedThumbnail(currentImg);
  galChangeBigImg(currentImg);
  galChangeSelectedThumbnail(currentImg);
});

//Thumbnail selection

let thumbnails = document.querySelectorAll('.border-thumbnail');

//Change in main container as well as in gal

thumbnails[0].addEventListener('click', () => {
  changeBigImg(1);
  changeSelectedThumbnail(1);
  galChangeBigImg(1);
  galChangeSelectedThumbnail(1);
});

thumbnails[1].addEventListener('click', () => {
  changeBigImg(2);
  changeSelectedThumbnail(2);
  galChangeBigImg(2);
  galChangeSelectedThumbnail(2);
});

thumbnails[2].addEventListener('click', () => {
  changeBigImg(3);
  changeSelectedThumbnail(3);
  galChangeBigImg(3);
  galChangeSelectedThumbnail(3);
});

thumbnails[3].addEventListener('click', () => {
  changeBigImg(4);
  changeSelectedThumbnail(4);
  galChangeBigImg(4);
  galChangeSelectedThumbnail(4);
});



