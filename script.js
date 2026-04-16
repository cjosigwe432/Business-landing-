const products = [
  // 📱 PHONES
  {
    name: "iPhone 14 Pro",
    price: 999,
    img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg"
  },
  {
    name: "iPhone 13",
    price: 799,
    img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg"
  },
  {
    name: "iPhone 12",
    price: 650,
    img: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg"
  },

  // 💻 LAPTOPS
  {
    name: "MacBook Pro",
    price: 1500,
    img: "https://images.pexels.com/photos/18105/pexels-photo.jpg"
  },
  {
    name: "Dell Laptop",
    price: 1100,
    img: "https://images.pexels.com/photos/7974/pexels-photo.jpg"
  },

  // 📲 TABLETS
  {
    name: "iPad Pro",
    price: 900,
    img: "https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg"
  },

  // 🎧 ACCESSORIES
  {
    name: "AirPods",
    price: 199,
    img: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg"
  },
  {
    name: "Wireless Headphones",
    price: 250,
    img: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
  },
  {
    name: "Smart Watch",
    price: 300,
    img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg"
  },

  // 🔌 TECH GEAR
  {
    name: "Power Bank",
    price: 60,
    img: "https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg"
  },
  {
    name: "Phone Case",
    price: 25,
    img: "https://images.pexels.com/photos/4526413/pexels-photo-4526413.jpeg"
  },

  // 🎮 GAMING
  {
    name: "PlayStation 5",
    price: 600,
    img: "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg"
  }
];

let cart = [];

const productList = document.getElementById("product-list");

/* =========================
   RENDER PRODUCTS
========================= */
products.forEach((p, index) => {
  productList.innerHTML += `
    <div class="product">
      <img src="${p.img}" alt="${p.name}">
      <div class="product-content">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
      </div>
    </div>
  `;
});

/* =========================
   ADD TO CART
========================= */
function addToCart(index) {
  cart.push(products[index]);
  document.getElementById("cart-count").innerText = cart.length;
  renderCart();
}

/* =========================
   CART UI
========================= */
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

/* =========================
   CART ACTIONS
========================= */
function openCart() {
  document.getElementById("cart").classList.add("active");
}

function closeCart() {
  document.getElementById("cart").classList.remove("active");
}

/* =========================
   CHECKOUT (WHATSAPP)
========================= */
function checkout() {
  let message = "Hello, I want to order:\n\n";

  cart.forEach(item => {
    message += `• ${item.name} - $${item.price}\n`;
  });

  message += `\nTotal: $${cart.reduce((a, b) => a + b.price, 0)}`;

  window.open(
    `https://wa.me/2349168144059?text=${encodeURIComponent(message)}`
  );
}