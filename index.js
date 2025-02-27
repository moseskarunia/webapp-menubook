const menus = [{
  title: "Avocado Pesto Salad",
  description: "Home-grown vegetables with load of avocado, topped with mouthwatering pesto salad",
  photoUrl: "https://www.google.com",
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
  photoUrl: "https://www.google.com",
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
  photoUrl: "https://www.google.com",
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
  photoUrl: "https://www.google.com",
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

function addQty(menuIndex, priceIndex) {
  cart[menuIndex][priceIndex]++;
  document.getElementById("qty" + menuIndex + priceIndex).innerHTML = cart[menuIndex][priceIndex];
}

function substractQty(menuIndex, priceIndex) {
  cart[menuIndex][priceIndex]--;
  document.getElementById("qty" + menuIndex + priceIndex).innerHTML = cart[menuIndex][priceIndex];
}