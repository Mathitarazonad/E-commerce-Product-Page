const shopIcon = document.querySelector('.shop-icons');
const shopModal = document.querySelector('.shop-cart');

//Open and close shop
shopIcon.addEventListener('click', () => {
  if(!shopModal.classList.contains('open')) {
    shopModal.classList.add('open');
  } else {
    shopModal.classList.remove('open');
  }
});

const shopIconQuantity = document.querySelector('#items-quantity');

//Specify quantity of items
const minusIcon = document.querySelector('#minus-icon');
const plusIcon = document.querySelector('#plus-icon');
let quantity = parseInt(document.querySelector('#quantity-counter').textContent);
let quantityCounter = document.querySelector('#quantity-counter');
let cartQuantity = 0;


minusIcon.addEventListener('click', () => {
  if (parseInt(quantity) !== 0) {
    quantity--;
    quantityCounter.innerHTML = `
    ${quantity}`;
  }
});

plusIcon.addEventListener('click', () => {
  quantity++;
  quantityCounter.innerHTML = `${quantity}`;
});

//Cart Modal variables
const singleItemPrice = 125.00;
const shopQuantityElement = document.querySelector('#cart-quantity');
let totalPrice = 0;
const totalPriceElement = document.querySelector('#total-price');

//Add to Cart button
const addToCartBtn = document.querySelector('.product-buy-button');

addToCartBtn.addEventListener('click', () => {
  if(quantity !== 0) {
    cartQuantity += quantity;
    totalPrice += 125.00 * quantity;

    shopIconQuantity.innerHTML = `${cartQuantity}`;

    shopModal.classList.replace('empty', 'not-empty');

    if (!shopIcon.classList.contains('show-quantity')) {
      shopIcon.classList.add('show-quantity');
    }

    shopQuantityElement.innerHTML = `${cartQuantity}`;
    totalPriceElement.innerHTML = `$${totalPrice}.00`;

  }


  quantity = 0;
  quantityCounter.innerHTML = `${quantity}`
});

//Delete Items from shop
const deleteIcon = document.querySelector('.delete-icon');

deleteIcon.addEventListener('click', () => {
  totalPrice = 0;
  cartQuantity = 0;
  shopIconQuantity.innerHTML = `${cartQuantity}`;
  totalPriceElement.innerHTML = `$${totalPrice}`;
  shopIcon.classList.remove('show-quantity');
  shopModal.classList.replace('not-empty', 'empty');
});


//If has items has-items class