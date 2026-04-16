const products = [
  // 📱 iPhones
  { name: "iPhone 15 Pro Max", price: 1200, img: "https://source.unsplash.com/600x600/?iphone,15" },
  { name: "iPhone 14 Pro", price: 1000, img: "https://source.unsplash.com/600x600/?iphone,14" },
  { name: "iPhone 13", price: 800, img: "https://source.unsplash.com/600x600/?iphone,13" },
  { name: "iPhone 12", price: 600, img: "https://source.unsplash.com/600x600/?iphone,12" },

  // 💻 Laptops
  { name: "MacBook Pro M2", price: 1600, img: "https://source.unsplash.com/600x600/?macbook" },
  { name: "Dell XPS 13", price: 1400, img: "https://source.unsplash.com/600x600/?laptop,dell" },
  { name: "HP Spectre x360", price: 1350, img: "https://source.unsplash.com/600x600/?hp,laptop" },
  { name: "Lenovo ThinkPad", price: 1200, img: "https://source.unsplash.com/600x600/?thinkpad" },

  // 📲 Tablets
  { name: "iPad Pro", price: 999, img: "https://source.unsplash.com/600x600/?ipad" },
  { name: "Samsung Galaxy Tab", price: 700, img: "https://source.unsplash.com/600x600/?tablet,samsung" },
  { name: "Amazon Fire Tablet", price: 250, img: "https://source.unsplash.com/600x600/?tablet" },

  // 🎧 Accessories
  { name: "AirPods Pro", price: 250, img: "https://source.unsplash.com/600x600/?airpods" },
  { name: "Wireless Headphones", price: 180, img: "https://source.unsplash.com/600x600/?headphones" },
  { name: "Bluetooth Speaker", price: 120, img: "https://source.unsplash.com/600x600/?speaker" },
  { name: "Smart Watch", price: 300, img: "https://source.unsplash.com/600x600/?smartwatch" },

  // 🔌 Tech Accessories
  { name: "Fast Charger", price: 40, img: "https://source.unsplash.com/600x600/?charger" },
  { name: "Power Bank 20000mAh", price: 60, img: "https://source.unsplash.com/600x600/?powerbank" },
  { name: "USB-C Cable", price: 15, img: "https://source.unsplash.com/600x600/?usb,cable" },
  { name: "Phone Case", price: 25, img: "https://source.unsplash.com/600x600/?phone,case" },

  // 🎮 Extra (to make it feel like real store)
  { name: "PlayStation 5", price: 600, img: "https://source.unsplash.com/600x600/?ps5" },
  { name: "Xbox Series X", price: 550, img: "https://source.unsplash.com/600x600/?xbox" },
  { name: "Gaming Controller", price: 70, img: "https://source.unsplash.com/600x600/?controller" },
  { name: "Gaming Headset", price: 150, img: "https://source.unsplash.com/600x600/?gaming,headset" }
];

let cart = [];

const productList = document.getElementById("product-list");

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
