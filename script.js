const products = [
  {
    name: "Classic T-Shirt",
    price: 25,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    name: "Luxury Sneakers",
    price: 80,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    name: "iPhone 14",
    price: 900,
    img: "https://images.unsplash.com/photo-1661961112957-3c8d4db7b0c5"
  },
  {
    name: "Hoodie",
    price: 45,
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7"
  }
];

let cart = [];

const productList = document.getElementById("product-list");

products.forEach((p, index) => {
  productList.innerHTML += `
    <div class="product">
      <img src="${p.img}?auto=format&fit=crop&w=500&q=80">
      <div class="product-content">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
      </div>
    </div>
  `;
});

function addToCart(index) {
  cart.push(products[index]);
  document.getElementById("cart-count").innerText = cart.length;
  renderCart();
}

function renderCart() {
  let items = document.getElementById("cart-items");
  let total = 0;
  items.innerHTML = "";

  cart.forEach(item => {
    total += item.price;
    items.innerHTML += `<p>${item.name} - $${item.price}</p>`;
  });

  document.getElementById("total").innerText = total;
}

function openCart() {
  document.getElementById("cart").classList.add("active");
}

function closeCart() {
  document.getElementById("cart").classList.remove("active");
}

function checkout() {
  let message = "Hello, I want to order:\n";
  cart.forEach(item => {
    message += item.name + " - $" + item.price + "\n";
  });

  window.open(`https://wa.me/2349168144059?text=${encodeURIComponent(message)}`);
}