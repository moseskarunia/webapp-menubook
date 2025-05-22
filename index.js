let totalPrice = 0;
let cart = [];

resetCart();

function addQty(menuIndex, priceIndex) {
  cart[menuIndex][priceIndex] = cart[menuIndex][priceIndex] + 1;

  totalPrice += menus[menuIndex].prices[priceIndex].price;

  document.getElementById('checkout').innerHTML =
    'Rp ' + (totalPrice * 1000).toLocaleString();

  document.getElementById('qty' + menuIndex + priceIndex).innerHTML =
    cart[menuIndex][priceIndex];
}

function substractQty(menuIndex, priceIndex) {
  if (cart[menuIndex][priceIndex] > 0) {
    cart[menuIndex][priceIndex] = cart[menuIndex][priceIndex] - 1;

    totalPrice -= menus[menuIndex].prices[priceIndex].price;

    document.getElementById('checkout').innerHTML =
      'Rp ' + (totalPrice * 1000).toLocaleString();

    document.getElementById('qty' + menuIndex + priceIndex).innerHTML =
      cart[menuIndex][priceIndex];
  }
}

function showSummary() {
  window.location.href = `order-confirmation/index.html?cart=${JSON.stringify(
    cart
  )}&totalPrice=${totalPrice}`;
  cart = [];
  totalPrice = 0;

  document.getElementById('checkout').innerHTML =
    'Rp ' + (totalPrice * 1000).toLocaleString();

  resetCart();
}

function resetCart() {
  for (let i = 0; i < menus.length; i++) {
    cart.push([0, 0]);
  }
  
  let menuArea = '';

  for (let i = 0; i < menus.length; i++) {
    const e = menus[i];
    let menuPrices = '';

    for (let j = 0; j < e.prices.length; j++) {
      const f = e.prices[j];
      menuPrices += `
            <div class="menu-price-row">
                <span class="price-description">${f.label}</span>
                <div class="price-and-qty">
                    <span class="price">${f.price}</span>
                    <button onclick='substractQty(${i},${j})'>
                        <img src="assets/circle-minus.png" width="16" height="16" alt="minus-circle" />
                    </button>
                    <span class="qty" id="qty${i}${j}">0</span>
                    <button onclick='addQty(${i},${j})'>
                        <img src="assets/circle-plus.png" width="16" height="16" alt="plus-circle" />
                    </button>
                </div>
            </div>
        `;
    }

    menuArea += `
        <div class="menu-tile">
            <div class="menu-photo">
                <img src="${e.photoUrl}" alt="${e.title}">
            </div>
            <div class="menu-tile-name">${e.title}</div>
            <div class="menu-tile-description">${e.description}</div>
            ${menuPrices}
        </div>
    `;
  }
  document.getElementById('menu-area').innerHTML = menuArea;
}
