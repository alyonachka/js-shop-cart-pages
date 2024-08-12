const products = [
  {
    "id": 1,
    "name": "Textured turtleneck with zip",
    "price": 52.99,
    "oldPrice": 53.99,
    "isSale": true,
    "isNew": false,
    "categories": [
      "Men"
    ],
    "color": "Brown",
    "image": "https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/54cdbf69f8e60ba13e2e795cd495567f.png/s/f1200x/a/534336/sc/265"
  },
  {
    "id": 2,
    "name": "Spray wrap skirt",
    "price": 35.99,
    "oldPrice": null,
    "isSale": false,
    "isNew": false,
    "categories": [
      "Women"
    ],
    "color": "Red",
    "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/061c4e0891851d157cbcf6984295b7ed.png/s/f1200x/a/534336/sc/111"
  },
  {
    "id": 3,
    "name": "Short shorts with straps",
    "price": 20.99,
    "oldPrice": null,
    "isSale": false,
    "isNew": false,
    "categories": [
      "Men"
    ],
    "color": "Blue",
    "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/b56c73f8da5404fddf58b7a5a540130f.png/s/f1200x/a/534336/sc/238"
  },
  {
    "id": 4,
    "name": "Fashionee - catton shirt",
    "price": 110.99,
    "oldPrice": null,
    "isSale": false,
    "isNew": false,
    "categories": [
      "Men"
    ],
    "color": "Brown",
    "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/911e17505fb10478ce04f078943bf74e.png/s/f1200x/a/534336/sc/55"
  },
  {
    "id": 5,
    "name": "Warm casual sweater",
    "price": 80.99,
    "oldPrice": null,
    "isSale": false,
    "isNew": true,
    "categories": [
      "Women"
    ],
    "color": "Brown",
    "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/ec9bc0e735f3c75eab9d4d8c4f8630fe.png/s/f1200x/a/534336/sc/400"
  },
  {
    "id": 6,
    "name": "Retro style handbag",
    "price": 45.99,
    "oldPrice": 52.99,
    "isSale": true,
    "isNew": false,
    "categories": [
      "Women",
      "Accessories"
    ],
    "color": "Brown",
    "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/c3d454c3b46f6a62d4d036f928a56705.png/s/f1200x/a/534336/sc/100"
  },
  {
    "id": 7,
    "name": "Style Handbag",
    "price": 180.99,
    "oldPrice": null,
    "isSale": false,
    "isNew": false,
    "categories": [
      "Women",
      "Accessories"
    ],
    "color": "Black",
    "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/14e10d5f0aaf5e8405fad852e8344182.png/s/f1200x/a/534336/sc/138"
  },
  {
    "id": 8,
    "name": "Blouse with insert and ruffles",
    "price": 30.99,
    "oldPrice": null,
    "isSale": false,
    "isNew": true,
    "categories": [
      "Women"
    ],
    "color": "Blue",
    "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/2b269ee1c83fd5758f3763f9a45a5605.png/s/f1200x/a/534336/sc/116"
  },
  {
    "id": 9,
    "name": "Long oversized T-shirt",
    "price": 30.99,
    "oldPrice": 52.99,
    "isSale": true,
    "isNew": false,
    "categories": [
      "Men"
    ],
    "color": "Blue",
    "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/92be8394b48b6911690745902643f92d.png/s/f1200x/a/534336/sc/439"
  },
  {
    "id": 10,
    "name": "Stylish and comfortable cap",
    "price": 40.99,
    "oldPrice": null,
    "isSale": false,
    "isNew": false,
    "categories": [
      "Accessories"
    ],
    "color": "White",
    "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/aa0d17c1bd58fc6066aa1f602fe8ab59.png/s/f1200x/a/534336/sc/325"
  },
  {
    "id": 11,
    "name": "Shoulder bag",
    "price": 210.99,
    "oldPrice": null,
    "isSale": false,
    "isNew": true,
    "categories": [
      "Women",
      "Accessories"
    ],
    "color": "Red",
    "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/ad5a7f75f7e3463aaafec1149cd2bfbd.png/s/f1200x/a/534336/sc/477"
  },
  {
    "id": 12,
    "name": "High-heeled shoes",
    "price": 52.99,
    "oldPrice": 70.99,
    "isSale": true,
    "isNew": false,
    "categories": [
      "Women"
    ],
    "color": "Black",
    "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/b14b37c5f1fbd94505697d827305348b.png/s/f1200x/a/534336/sc/57"
  },
  {
    "id": 13,
    "name": "Textured turtleneck with zip (2)",
    "price": 45.99,
    "oldPrice": 53.99,
    "isSale": true,
    "isNew": false,
    "categories": [
      "Men"
    ],
    "color": "Brown",
    "image": "https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/54cdbf69f8e60ba13e2e795cd495567f.png/s/f1200x/a/534336/sc/265"
  },
  {
    "id": 14,
    "name": "Spray wrap skirt (2)",
    "price": 25.99,
    "oldPrice": null,
    "isSale": false,
    "isNew": false,
    "categories": [
      "Women"
    ],
    "color": "Red",
    "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/061c4e0891851d157cbcf6984295b7ed.png/s/f1200x/a/534336/sc/111"
  },
  {
    "id": 15,
    "name": "Short shorts with straps (2)",
    "price": 30.99,
    "oldPrice": null,
    "isSale": false,
    "isNew": false,
    "categories": [
      "Men"
    ],
    "color": "Blue",
    "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/b56c73f8da5404fddf58b7a5a540130f.png/s/f1200x/a/534336/sc/238"
  },
  {
    "id": 16,
    "name": "Fashionee - catton shirt (2)",
    "price": 99.99,
    "oldPrice": null,
    "isSale": false,
    "isNew": false,
    "categories": [
      "Men"
    ],
    "color": "Brown",
    "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/911e17505fb10478ce04f078943bf74e.png/s/f1200x/a/534336/sc/55"
  },
  {
    "id": 17,
    "name": "Warm casual sweater (2)",
    "price": 70.99,
    "oldPrice": null,
    "isSale": false,
    "isNew": true,
    "categories": [
      "Women"
    ],
    "color": "Brown",
    "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/ec9bc0e735f3c75eab9d4d8c4f8630fe.png/s/f1200x/a/534336/sc/400"
  },
  {
    "id": 18,
    "name": "Retro style handbag (2)",
    "price": 35.99,
    "oldPrice": 52.99,
    "isSale": true,
    "isNew": false,
    "categories": [
      "Women",
      "Accessories"
    ],
    "color": "Brown",
    "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/c3d454c3b46f6a62d4d036f928a56705.png/s/f1200x/a/534336/sc/100"
  },
  {
    "id": 19,
    "name": "Style Handbag (2)",
    "price": 170.99,
    "oldPrice": null,
    "isSale": false,
    "isNew": false,
    "categories": [
      "Women",
      "Accessories"
    ],
    "color": "Black",
    "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/14e10d5f0aaf5e8405fad852e8344182.png/s/f1200x/a/534336/sc/138"
  },
  {
    "id": 20,
    "name": "Blouse with insert and ruffles (2)",
    "price": 25.99,
    "oldPrice": null,
    "isSale": false,
    "isNew": true,
    "categories": [
      "Women"
    ],
    "color": "Blue",
    "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/2b269ee1c83fd5758f3763f9a45a5605.png/s/f1200x/a/534336/sc/116"
  },
  {
    "id": 21,
    "name": "Long oversized T-shirt (2)",
    "price": 25.99,
    "oldPrice": 52.99,
    "isSale": true,
    "isNew": false,
    "categories": [
      "Men"
    ],
    "color": "Blue",
    "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/92be8394b48b6911690745902643f92d.png/s/f1200x/a/534336/sc/439"
  },
  {
    "id": 22,
    "name": "Stylish and comfortable cap (3)",
    "price": 35.99,
    "oldPrice": null,
    "isSale": false,
    "isNew": false,
    "categories": [
      "Accessories"
    ],
    "color": "White",
    "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/aa0d17c1bd58fc6066aa1f602fe8ab59.png/s/f1200x/a/534336/sc/325"
  },
  {
    "id": 23,
    "name": "Shoulder bag (2)",
    "price": 200.99,
    "oldPrice": null,
    "isSale": false,
    "isNew": true,
    "categories": [
      "Women",
      "Accessories"
    ],
    "color": "Red",
    "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/ad5a7f75f7e3463aaafec1149cd2bfbd.png/s/f1200x/a/534336/sc/477"
  },
  {
    "id": 24,
    "name": "High-heeled shoes (2)",
    "price": 45.99,
    "oldPrice": 70.99,
    "isSale": true,
    "isNew": false,
    "categories": [
      "Women"
    ],
    "color": "Black",
    "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/b14b37c5f1fbd94505697d827305348b.png/s/f1200x/a/534336/sc/57"
  }
];

const currentFilter = {
  category: 'All',
  price: {
    min: 0,
    max: 999999
  },
  colors: []
}

let oldFilter = {
  category: 'All',
  price: {
    min: 0,
    max: 999999
  },
  colors: []
}

let searchValue = '';
let sort = '';
const paginationInfo = {
  activePage: 0,
  perPage: 12,
}

const PRODUCT_IN_BASKET_KEY = 'product-in-basket';
const PRODUCT_IN_FAVORITE_KEY = 'product-in-favorites';

const debaunce = (f, t) => {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && ((this.lastCall - previousCall) <= t)) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => f(args), t);
  }
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

const updataBasketInHeader = () => {
  const basketCounter = document.querySelector('.js-basket-counter');

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

const buyProduct = (product) => {
  const productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY);

  if (!productsInBasket) {
    setToLS(PRODUCT_IN_BASKET_KEY, [{ ...product, quantity: 1 }]);
    updataBasketInHeader();
    return true
  }

  let hasProductInBasket = false;

  const updatedProducts = productsInBasket.map((productInBasket) => {
    if (productInBasket.id === product.id) {
      hasProductInBasket = true;

      return {
        ...productInBasket,
        quantity: productInBasket.quantity + 1
      }
    }

    return productInBasket
  })

  if (hasProductInBasket) {
    setToLS(PRODUCT_IN_BASKET_KEY, updatedProducts);
    updataBasketInHeader();

    return true
  }

  productsInBasket.push({ ...product, quantity: 1 });
  setToLS(PRODUCT_IN_BASKET_KEY, productsInBasket);
  updataBasketInHeader();
}

// function to remove product from favorites
const removeFromLS = (key, product, favoriteIcon) => {
  const productsInFav = getFromLS(key);

  let updatedProducts = productsInFav.filter(
    (item) => item.id !== product.id
  )

  favoriteIcon.src = "./icons/favorites.svg";

  setToLS(PRODUCT_IN_FAVORITE_KEY, updatedProducts);

}

// function add product to favorites
const addToFavorite = (product, favoriteIcon) => {

  const productInFav = checkProductInFavorites(product);
  const productsInFav = getFromLS(PRODUCT_IN_FAVORITE_KEY);

  if (!productsInFav) {

    setToLS(PRODUCT_IN_FAVORITE_KEY, [{ ...product }]);
    favoriteIcon.src = "./icons/favorites-red.svg";
    updateFavCounter();
    return true
  }

  switch (productInFav) {
    case (true): {
      removeFromLS(PRODUCT_IN_FAVORITE_KEY, product, favoriteIcon);
      updateFavCounter();
      break;
    }
    case (false): {
      productsInFav.push({ ...product });
      favoriteIcon.src = "./icons/favorites-red.svg";
      setToLS(PRODUCT_IN_FAVORITE_KEY, productsInFav);
      updateFavCounter();
      break;
    }
  }

}

// function to update favorites counter
const updateFavCounter = () => {
  const favCounter = document.querySelector('.js-favorites-counter');
  const productsInFav = getFromLS(PRODUCT_IN_FAVORITE_KEY);
  if (productsInFav) {
    favCounter.innerHTML = productsInFav.length;
  } else {
    favCounter.innerHTML = 0;
  }
}

// function check product in favorites
const checkProductInFavorites = (product) => {

  const productsInFav = getFromLS(PRODUCT_IN_FAVORITE_KEY);

  if (productsInFav) {
    return productsInFav.some(function (el) {
      return el.id === product.id;
    })
  }

  return false
}

const createProduct = (product) => {
  const productWrapper = document.createElement('div');
  productWrapper.classList.add('product');

  const photo = document.createElement('div');
  photo.classList.add('photo');

  const topBar = document.createElement('div');
  topBar.classList.add('top-bar');

  const labels = document.createElement('div');
  labels.classList.add('labels');

  if (product.isSale) {
    const label = document.createElement('div');
    label.classList.add('label');
    label.classList.add('sale');
    label.innerHTML = 'Sale';
    labels.appendChild(label);
  }

  if (product.isNew) {
    const label = document.createElement('div');
    label.classList.add('label');
    label.classList.add('new');
    label.innerHTML = 'New';
    labels.appendChild(label);
  }

  const favorites = document.createElement('div');
  favorites.classList.add('favorites');

  const favoriteIcon = document.createElement('img');
  favoriteIcon.src = checkProductInFavorites(product) ? './icons/favorites-red.svg' : './icons/favorites.svg'; // changed
  favoriteIcon.alt = "Favorite icon";
  favoriteIcon.addEventListener('click', function () {
    addToFavorite(product, favoriteIcon);
  })

  favorites.appendChild(favoriteIcon);

  topBar.appendChild(labels);
  topBar.appendChild(favorites);

  const productImage = document.createElement('img');
  productImage.src = product.image;
  productImage.classList.add('product-image');

  photo.appendChild(topBar);
  photo.appendChild(productImage);

  const info = document.createElement('div');
  info.classList.add('info');

  const name = document.createElement('div');
  name.classList.add('name');
  name.innerHTML = product.name;

  const price = document.createElement('div');
  price.classList.add('price');

  const currentPrice = document.createElement('div');
  currentPrice.classList.add('current-price');
  currentPrice.innerHTML = `$${product.price}`;

  price.appendChild(currentPrice);

  if (product.oldPrice) {
    const oldPrice = document.createElement('div');
    oldPrice.classList.add('old-price');
    oldPrice.innerHTML = `$${product.oldPrice}`;

    price.appendChild(oldPrice);
  }

  info.appendChild(name);
  info.appendChild(price);

  const buyButton = document.createElement('button');
  buyButton.classList.add('buy-btn');
  buyButton.textContent = "Buy";
  buyButton.addEventListener('click', () => {
    buyProduct(product);
  })

  info.appendChild(buyButton);

  productWrapper.appendChild(photo);
  productWrapper.appendChild(info);

  return productWrapper
}

const createPagination = (productsCount) => {
  const jsPages = document.getElementsByClassName('js-pages');
  const pagination = document.getElementById('pagination');

  if (!productsCount) {
    pagination.classList.add('hide');
    return
  }

  if (!jsPages.length) {
    return
  }

  pagination.classList.remove('hide');

  const jsPagesContainer = jsPages[0];
  jsPagesContainer.innerHTML = '';

  const pageCount = Math.ceil(productsCount / paginationInfo.perPage);

  for (let i = 0; i < pageCount; i++) {

    const page = document.createElement('div');
    const underline = document.createElement('div');
    underline.classList.add('underline');
    page.classList.add('page');

    page.innerHTML = i + 1;
    page.dataset.index = i;

    page.appendChild(underline);

    if (i === paginationInfo.activePage) {
      page.classList.add('active');
    }

    page.addEventListener('click', (e) => {
      const currentElement = e.target;

      const alreadyActive = document.querySelectorAll(".page.active");

      if (alreadyActive?.length) {
        alreadyActive[0].classList.remove('active');
      }

      currentElement.classList.add('active');

      paginationInfo.activePage = Number(currentElement.dataset.index);

      const { filteredProducts, productsCount } = filterProducts(searchValue, oldFilter, sort, paginationInfo);

      createProductList(filteredProducts, productsCount);

    })

    jsPagesContainer.appendChild(page)
  }
}

const createProductList = (products, productsCount) => {
  const jsProducts = document.getElementsByClassName('js-products');

  if (!jsProducts.length) {
    return
  }

  jsProducts[0].innerHTML = '';
  for (const product of products) {
    const createdProduct = createProduct(product);
    jsProducts[0].appendChild(createdProduct)
  }

  createPagination(productsCount);
}

const updateProductsCount = (count) => {
  document.getElementById("products-count").innerHTML = count;
}


const filterBySearchValue = (products, value) => {
  return products.filter((product) => {
    return product.name.toLowerCase().includes(value.toLowerCase());
  })
}

const filterProductsByFilterInfo = (products, filter) => {
  let filteredProducts = products;

  if (filter.category !== 'All') {
    filteredProducts = filteredProducts.filter((product) => {
      return product.categories.includes(filter.category)
    })
  }

  if (filter.price.min || filter.price.max) {
    filteredProducts = filteredProducts.filter((product) => {
      return (product.price >= filter.price.min && product.price <= filter.price.max);
    })
  }

  if (filter.colors.length > 0) {
    filteredProducts = filteredProducts.filter((product) => {
      return filter.colors.includes(product.color);
    })
  }

  return filteredProducts
}

const sortProducts = (products, sort) => {
  products.sort((a, b) => {
    if (sort === 'ASC') {
      if (a.name > b.name) return 1;
      if (a.name === b.name) return 0;
      if (a.name < b.name) return -1;
    }
    if (a.name > b.name) return -1;
    if (a.name === b.name) return 0;
    if (a.name < b.name) return 1;
  })
}

const paginateProducts = (products, paginInfo) => {
  const productsCount = products.length;

  const { perPage, activePage } = paginInfo;
  const firstIndex = activePage * perPage;
  const paginatedProducts = products.slice(firstIndex, ((activePage + 1) * perPage))

  return {
    productsCount,
    paginatedProducts
  }
}

const filterProducts = (searchValue, filter, sort, pagination) => {
  let filteredProducts = [...products];

  if (searchValue) {
    filteredProducts = filterBySearchValue(filteredProducts, searchValue);
  }

  filteredProducts = filterProductsByFilterInfo(filteredProducts, filter);

  if (sort) {
    sortProducts(filteredProducts, sort);
  }

  const { paginatedProducts, productsCount } = paginateProducts(filteredProducts, pagination);

  return {
    filteredProducts: paginatedProducts,
    productsCount
  }
}

const toggleBlockFilterBtn = () => {
  const applyFilter = document.getElementById("apply-filter");

  if (currentFilter.category !== oldFilter.category ||
    currentFilter.price.min !== oldFilter.price.min ||
    currentFilter.price.max !== oldFilter.price.max ||
    !compareArrays(currentFilter.colors, oldFilter.colors)
  ) {
    applyFilter.removeAttribute('disabled');
  } else {
    applyFilter.setAttribute('disabled', 'disabled');
  }
}

document.getElementById("search-row").addEventListener('keyup', debaunce((e) => {
  searchValue = e.target.value;
  paginationInfo.activePage = 0;
  const { filteredProducts, productsCount } = filterProducts(searchValue, oldFilter, sort, paginationInfo);

  createProductList(filteredProducts, productsCount);
  updateProductsCount(productsCount);
}, 1000))


// на каждый клик по категории обновляем фильтр и обновляем состояние кнопки Apply filter
const categoryItems = document.getElementsByClassName('js-category');
for (let i = 0; i < categoryItems.length; i++) {
  categoryItems[i].addEventListener('click', (e) => {

    currentFilter['category'] = e.target.dataset.category;

    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active');
      categoryItems[0].classList.add('active');
      currentFilter['category'] = "All";

      toggleBlockFilterBtn();

      return
    }

    const alreadyActive = document.querySelectorAll('.js-category.active');

    if (alreadyActive?.length) {
      alreadyActive[0].classList.remove('active');
    }

    e.target.classList.add('active');

    toggleBlockFilterBtn();

  })

}

// js-price-min
const priceMin = document.querySelector('.js-price-min');
priceMin.addEventListener('input', (e) => {

  currentFilter.price.min = Number(e.target.value);

  toggleBlockFilterBtn();
})

// js-price-max
const priceMax = document.querySelector('.js-price-max');
priceMax.addEventListener('input', (e) => {

  if (e.target.value !== '') {
    currentFilter.price.max = Number(e.target.value);
  } else {
    currentFilter.price.max = 999999;
  }

  toggleBlockFilterBtn();

})

// Обработка нажатия на кнопку Apply Filter
document.getElementById("apply-filter").addEventListener('click', (e) => {
  paginationInfo.activePage = 0;
  const { filteredProducts, productsCount } = filterProducts(searchValue, currentFilter, sort, paginationInfo);

  createProductList(filteredProducts, productsCount);
  updateProductsCount(productsCount);

  e.target.setAttribute('disabled', 'disabled');
  cloneObject();
})

const cloneObject = () => {
  oldFilter.category = currentFilter.category;
  oldFilter.price = { ...currentFilter.price };
  oldFilter.colors = [...currentFilter.colors];
}

// обработка выбора цветов для фильтрации
const colorCheckbox = document.getElementsByClassName('color-checkbox');
for (let i = 0; i < colorCheckbox.length; i++) {
  colorCheckbox[i].addEventListener('click', function (e) {
    if (this.checked) {
      currentFilter.colors.push(e.target.value);
      toggleBlockFilterBtn();
      return
    }

    let indexColor = currentFilter.colors.indexOf(e.target.value);
    currentFilter.colors.splice(indexColor, 1);
    toggleBlockFilterBtn();
  })
}

const compareArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    return arr1.every((el) => {
      return arr2.indexOf(el) !== -1
    })
  }
  return false
}

document.getElementById("sort").addEventListener('change', (e) => {
  sort = e.target.value;
  const { filteredProducts, productsCount } = filterProducts(searchValue, oldFilter, sort, paginationInfo);

  createProductList(filteredProducts, productsCount);
  updateProductsCount(productsCount);
})

const getRandomProducts = (products, count) => {
  const newProducts = [...products];
  const randProducts = [];

  do {
    const randomNumber = Math.floor(Math.random() * newProducts.length);

    randProducts[randProducts.length] = newProducts.splice(randomNumber
      , 1)[0];
  } while (randProducts.length < count);

  return randProducts
}

const generateRandomProduct = (product) => {
  const productWrapper = document.createElement('div');
  productWrapper.classList.add('product');

  const photo = document.createElement('div');
  photo.classList.add('image');

  const productImage = document.createElement('img');
  productImage.src = product.image;
  productImage.classList.add('product-image');

  photo.appendChild(productImage);

  productWrapper.appendChild(photo);

  const info = document.createElement('div');
  info.classList.add('info');

  const name = document.createElement('div');
  name.classList.add('name');
  name.innerHTML = product.name;

  const price = document.createElement('div');
  price.classList.add('price');

  const currentPrice = document.createElement('div');
  currentPrice.classList.add('current-price');
  currentPrice.innerHTML = `$${product.price}`;

  price.appendChild(currentPrice);

  if (product.oldPrice) {
    const oldPrice = document.createElement('div');
    oldPrice.classList.add('old-price');
    oldPrice.innerHTML = `$${product.oldPrice}`;

    price.appendChild(oldPrice);
  }

  info.appendChild(name);
  info.appendChild(price);

  productWrapper.appendChild(info);

  return productWrapper

}

const generateReviewedByYouProducts = () => {
  const randomProducts = getRandomProducts(products, 3);
  const container = document.getElementsByClassName('js-reviewed-products')[0];

  container.innerHTML = '';

  randomProducts.forEach((product) => {
    const randomProduct = generateRandomProduct(product);
    container.appendChild(randomProduct)

  })

}

// пагинация по левой стрелке
const paginationLeftArrow = document.getElementsByClassName('js-left-arrow')[0];
paginationLeftArrow.addEventListener('click', (e) => {

  if (paginationInfo.activePage === 0) {
    return
  }

  paginationInfo.activePage -= 1;

  const { filteredProducts, productsCount } = filterProducts(searchValue, oldFilter, sort, paginationInfo);

  createProductList(filteredProducts, productsCount);
  updateProductsCount(productsCount);
})

const paginationRightArrow = document.getElementsByClassName('js-right-arrow')[0];
paginationRightArrow.addEventListener('click', (e) => {

  const lastPage = document.querySelector('.page:last-of-type');

  if (paginationInfo.activePage == lastPage.dataset.index) {
    return
  }

  paginationInfo.activePage += 1;

  const { filteredProducts, productsCount } = filterProducts(searchValue, oldFilter, sort, paginationInfo);
  createProductList(filteredProducts, productsCount);
  updateProductsCount(productsCount);
})


const { paginatedProducts, productsCount } = paginateProducts(products, paginationInfo);

createProductList(paginatedProducts, productsCount);
updataBasketInHeader();
updateFavCounter();
updateProductsCount(products.length);
generateReviewedByYouProducts();