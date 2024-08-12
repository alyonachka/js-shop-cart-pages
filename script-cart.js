const PRODUCT_IN_BASKET_KEY = 'product-in-basket';
const PRODUCT_IN_FAVORITE_KEY = 'product-in-favorites';
const DELIVERY_PRICE = 16;
const DELIVERY_DATE = 5;
const MONTH = [];
const PROMOCODES = {
    'summer10': 0.1,
    'best_kyrator': 0.5,
}

const getFromLS = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        console.log(e);
    }
}

const setToLS = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
        console.log(e);
    }
}

const createCartProduct = (product) => {
    const productWrapper = document.createElement('div');
    productWrapper.classList.add('product');

    const productImage = document.createElement('img');
    productImage.classList.add('photo');
    productImage.src = product.image;

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = product.name;

    const priceWrapper = document.createElement('div');
    priceWrapper.classList.add('price-wrapper');

    const priceAndQuantity = document.createElement('div');
    priceAndQuantity.classList.add('price-and-quantity');

    const price = document.createElement('div');
    price.classList.add('price');

    if (product.oldPrice) {
        const oldPrice = document.createElement('div');
        oldPrice.classList.add('old-price');
        oldPrice.innerHTML = '$' + product.oldPrice;
        price.appendChild(oldPrice);
    }

    const currentPrice = document.createElement('div');
    currentPrice.classList.add('current-price');
    currentPrice.innerHTML = '$' + product.price;

    price.appendChild(currentPrice);

    const quantity = document.createElement('div');
    quantity.classList.add('quantity');

    const countButtonMinus = document.createElement('div');
    countButtonMinus.classList.add('count-button');
    countButtonMinus.innerHTML = '-';

    const count = document.createElement('div');
    count.classList.add('count');
    count.innerHTML = product.quantity;

    const countButtonPlus = document.createElement('div');
    countButtonPlus.classList.add('count-button');
    countButtonPlus.innerHTML = '+';

    countButtonMinus.addEventListener('click', () => {
        reduceProductCount(product, count, totalPrice);
    })

    countButtonPlus.addEventListener('click', () => {
        increaseProductCount(product, count, totalPrice);
    })

    quantity.appendChild(countButtonMinus);
    quantity.appendChild(count);
    quantity.appendChild(countButtonPlus);

    priceAndQuantity.appendChild(price);
    priceAndQuantity.appendChild(quantity);

    const totalPrice = document.createElement('div');
    totalPrice.classList.add('total-price');
    totalPrice.innerHTML = '$' + (product.price * product.quantity).toFixed(2);

    priceWrapper.appendChild(priceAndQuantity);
    priceWrapper.appendChild(totalPrice);

    const close = document.createElement('div');
    close.classList.add('close');
    close.innerHTML = 'X';
    close.addEventListener('click', () => deleteProductFromCart(product))

    productInfo.appendChild(title);
    productInfo.appendChild(priceWrapper);
    productInfo.appendChild(close);

    productWrapper.appendChild(productImage);
    productWrapper.appendChild(productInfo);

    return productWrapper
}

const createProductCartList = () => {
    const productsInCart = getFromLS(PRODUCT_IN_BASKET_KEY);
    const produductsWrapper = document.getElementsByClassName('js-product-list')[0];

    produductsWrapper.innerHTML = '';

    for (product of productsInCart) {
        const createdProduct = createCartProduct(product);
        produductsWrapper.appendChild(createdProduct);
    }
}

const deleteProductFromCart = (product) => {

    const productsInCart = getFromLS(PRODUCT_IN_BASKET_KEY);
    const productsInFav = getFromLS(PRODUCT_IN_FAVORITE_KEY);

    let updatedProducts = productsInCart.filter(
        (item) => item.id !== product.id
    )

    setToLS(PRODUCT_IN_BASKET_KEY, updatedProducts);

    let updatedFavProducts = productsInFav.filter(
        (item) => item.id !== product.id
    )

    setToLS(PRODUCT_IN_FAVORITE_KEY, updatedFavProducts);

    createProductCartList();
    updateFavCounter();
    updateBasketInHeader();
    updateTotalPrice();
}

const updateFavCounter = () => {
    const favCounter = document.querySelector('.js-fav-counter');
    const productsInFav = getFromLS(PRODUCT_IN_FAVORITE_KEY);
    if (productsInFav) {
        favCounter.innerHTML = productsInFav.length;
    } else {
        favCounter.innerHTML = 0;
    }
}

const updateBasketInHeader = () => {
    const basketCounter = document.querySelector('.js-cart-counter');

    if (!basketCounter) {
        return false
    }

    const productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY);

    if (!productsInBasket) {
        return false
    }

    let countInBasket = 0;

    productsInBasket.forEach(element => {
        countInBasket += element.quantity
    });

    basketCounter.innerHTML = countInBasket;
}

const reduceProductCount = (product, productCount, totalPrice) => {

    if (productCount.innerHTML == 1) {
        deleteProductFromCart(product);
        return
    }

    const products = getFromLS(PRODUCT_IN_BASKET_KEY);
    products.forEach((item) => {
        if (item.id === product.id) {
            item.quantity -= 1;
            product.quantity -= 1;
        }
    })

    setToLS(PRODUCT_IN_BASKET_KEY, products);

    productCount.innerHTML = product.quantity;
    totalPrice.innerHTML = "$" + (product.price * product.quantity).toFixed(2);

    updateBasketInHeader();
    updatePromo();

}

const increaseProductCount = (product, productCount, totalPrice) => {

    const products = getFromLS(PRODUCT_IN_BASKET_KEY);
    products.forEach((item) => {
        if (item.id === product.id) {
            item.quantity += 1;
            product.quantity += 1;
        }
    })

    setToLS(PRODUCT_IN_BASKET_KEY, products);

    productCount.innerHTML = product.quantity;
    totalPrice.innerHTML = "$" + (product.price * product.quantity).toFixed(2);

    updateBasketInHeader();
    updatePromo();
}

const updateTotalPrice = () => {
    const priceWrapper = document.querySelector('.js-price');
    const products = getFromLS(PRODUCT_IN_BASKET_KEY);

    let totalPrice = 0;

    for (const product of products) {
        totalPrice += product.price * product.quantity;
    }

    priceWrapper.innerHTML = "$" + totalPrice.toFixed(2);

    const deliveryPrice = document.querySelector('.js-delivery-price');
    deliveryPrice.innerHTML = "$" + DELIVERY_PRICE;

    const totalPriceWrapper = document.querySelector('.js-total-price');
    totalPriceWrapper.innerHTML = "$" + (totalPrice + DELIVERY_PRICE).toFixed(2);

}

const promocodeBtn = document.querySelector('.js-promocode');
promocodeBtn.addEventListener('click', updatePromo)

const updateDateDelivery = () => {
    const date = new Date();
    const dateWrapper = document.getElementsByClassName('js-date')[0];

    const month = date.toLocaleString('en', { month: 'short' });

    dateWrapper.innerHTML = `(${month} ${date.getDate() + DELIVERY_DATE} at 16:00)`
}

function updatePromo() {
    updateTotalPrice();

    const promoInput = document.querySelector('.js-promo-input').value;
    const discount = document.querySelector('.js-promo-discount');

    if (PROMOCODES[promoInput]) {
        const sale = PROMOCODES[promoInput];

        discount.innerHTML = 'Yes';

        const priceWrapper = document.querySelector('.js-price');
        const price = priceWrapper.innerHTML.slice(1);

        priceWrapper.innerHTML = "$" + (Number(price) * (1 - sale)).toFixed(2);

        const totalPriceWrapper = document.querySelector('.js-total-price');
        totalPriceWrapper.innerHTML = "$" + (Number(priceWrapper.innerHTML.slice(1)) + DELIVERY_PRICE).toFixed(2);

        return
    }

    discount.innerHTML = 'No';
    // возможно тут надо сделать сообщение что промокод неверный
}

createProductCartList();
updateFavCounter();
updateBasketInHeader();
updateTotalPrice();
updateDateDelivery()