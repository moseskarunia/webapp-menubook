const menus = [{
  title: "Avocado Pesto Salad",
  description: "Home-grown vegetables with load of avocado, topped with mouthwatering pesto salad",
  photoUrl: "images/salad.jpg",
  prices: [{
      label: "",
      price: 35
  }, {
      label: "+Grilled Salmon",
      price: 55
  }]
}, {
  title: "Triple Cheese Pizza",
  description: "Indulge yourself in this simple yet delicious delicacy",
  photoUrl: "images/pizza.jpg",
  prices: [{
      label: "1 Slice",
      price: 15
  }, {
      label: "Pan (6 slices)",
      price: 60
  }]
}, {
  title: "Seasonal Wine",
  description: "A great meal becomes perfect when combined with a good wine",
  photoUrl: "images/wine.jpg",
  prices: [{
      label: "Glass",
      price: 100
  }, {
      label: "Bottle",
      price: 1500
  }]
}, {
  title: "Coffee",
  description: "The best coffee you can have from the land of Indonesia",
  photoUrl: "images/coffee.jpg",
  prices: [{
      label: "Americano",
      price: 25
  }, {
      label: "Latte",
      price: 30
  }]
}];

const cart = [
  [0,0],[0,0],[0,0],[0,0],
];

for (let i = 0; i < menus.length; i++) {
  const e = menus[i];

  document.getElementById("menu-area").innerHTML += `
    <div class="menu-tile">
      <div class="menu-photo">
        <img
          src=${e.photoUrl}
          alt=${e.title}>
      </div>
      <div class="menu-tile-name">${e.title}</div>
      <div class="menu-tile-description">
        ${e.description}
      </div>
      ${e.prices.map((p,pIndex)=>`
        <div class="menu-price-row">
          <span class="price-description">${p.label}</span>
          <div class="price-and-qty">
            <span class="price">${p.price}</span>
            <button onclick="substractQty(${i},${pIndex})">
              <img src="images/minus-circle.png" width="16" height="16" alt="minus-circle" class="icon-button">
            </button>
            <span class="qty" id="qty${i}${pIndex}">0</span>
            <button onclick="addQty(${i},${pIndex})">
              <img src="images/plus-circle.png" width="16" height="16" alt="plus-circle" class="icon-button">
            </button>
          </div>
        </div>
        `).join('')}
    </div>
  `;
}

function addQty(menuIndex, priceIndex) {
  cart[menuIndex][priceIndex]++;
  document.getElementById("qty" + menuIndex + priceIndex).innerHTML = cart[menuIndex][priceIndex];
}

function substractQty(menuIndex, priceIndex) {
  cart[menuIndex][priceIndex]--;
  document.getElementById("qty" + menuIndex + priceIndex).innerHTML = cart[menuIndex][priceIndex];
}