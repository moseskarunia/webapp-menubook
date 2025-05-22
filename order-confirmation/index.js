const params = new URLSearchParams(window.location.search);

const cart = JSON.parse(params.get('cart'));
const totalPrice = parseInt(params.get('totalPrice'));

let content = '';

content += `<div>Total Price = ${totalPrice}</div>`;

for (let i = 0; i < cart.length; i++) {
  const e = cart[i];

  if (e[0] > 0) {
    content += `<div>${menus[i].title} (${menus[i].prices[0].label}): ${e[0]}</div>`;
  }

  if (e[1] > 0) {
    content += `<div>${menus[i].title} (${menus[i].prices[1].label}): ${e[1]}</div>`;
  }
}

document.getElementById('outer').innerHTML = content;
