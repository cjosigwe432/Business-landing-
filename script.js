const products = [
  {
    name: "iPhone 14 Pro",
    price: 999,
    img: "https://images.unsplash.com/photo-1664478546381-1f6b1c2c6d5e"
  },
  {
    name: "iPhone 13",
    price: 799,
    img: "https://images.unsplash.com/photo-1632661674596-618e2b9b1f63"
  },
  {
    name: "MacBook Pro",
    price: 1500,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    name: "Laptop Setup",
    price: 1200,
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  },
  {
    name: "iPad Pro",
    price: 900,
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
  },
  {
    name: "Tablet Device",
    price: 600,
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e"
  },
  {
    name: "AirPods",
    price: 199,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
  },
  {
    name: "Wireless Headphones",
    price: 250,
    img: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd"
  },
  {
    name: "Smart Watch",
    price: 300,
    img: "https://images.unsplash.com/photo-1511732351661-7f07a1d5c04c"
  },
  {
    name: "Bluetooth Speaker",
    price: 120,
    img: "https://images.unsplash.com/photo-1589003077984-894e133dabab"
  }
];

let cart = [];

const productList = document.getElementById("product-list");

products.forEach((p, index) => {
  productList.innerHTML += `
    <div class="product">
      <img src="${p.img}?auto=format&fit=crop&w=600&q=80">
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