const params = new URLSearchParams(window.location.search);

const cart = JSON.parse(params.get('cart'));
const totalPrice = parseInt(params.get('totalPrice'));

let content = '';

// content += `<div>Total Price = ${totalPrice}</div>`;

for (let i = 0; i < cart.length; i++) {
  const e = cart[i];

  if (e[0] > 0) {
    content += `<div class="price-row"><div>${e[0]} ${menus[i].title} (${
      menus[i].prices[0].label
    })</div><div>${(
      e[0] *
      menus[i].prices[0].price *
      1000
    ).toLocaleString()}</div></div>`;
  }

  if (e[1] > 0) {
    content += `<div class="price-row"><div>${e[1]} ${menus[i].title} (${
      menus[i].prices[1].label
    })</div><div>${(
      e[1] *
      menus[i].prices[1].price *
      1000
    ).toLocaleString()}</div></div>`;
  }
}

document.getElementById('ordered-menus').innerHTML = content;
