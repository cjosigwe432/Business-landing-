const products = [

/* =========================
   📱 IPHONE SERIES
========================= */
{
  name: "iPhone 17 Pro Max",
  price: 1599,
  img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg"
},
{
  name: "iPhone 17 Pro",
  price: 1499,
  img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
},
{
  name: "iPhone 16 Pro Max",
  price: 1399,
  img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg"
},
{
  name: "iPhone 16 Pro",
  price: 1299,
  img: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg"
},
{
  name: "iPhone 16",
  price: 1099,
  img: "https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg"
},
{
  name: "iPhone 15 Pro Max",
  price: 1199,
  img: "https://images.pexels.com/photos/18105/pexels-photo.jpg"
},
{
  name: "iPhone 15 Pro",
  price: 1099,
  img: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg"
},
{
  name: "iPhone 15",
  price: 999,
  img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg"
},
{
  name: "iPhone 14 Pro Max",
  price: 899,
  img: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg"
},
{
  name: "iPhone 14 Pro",
  price: 799,
  img: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg"
},
{
  name: "iPhone 13",
  price: 599,
  img: "https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg"
},
{
  name: "iPhone 12",
  price: 499,
  img: "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg"
},

/* =========================
   💻 MAC
========================= */
{
  name: "MacBook Pro M3",
  price: 1999,
  img: "https://images.pexels.com/photos/18105/pexels-photo.jpg"
},
{
  name: "MacBook Air",
  price: 1299,
  img: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg"
},

/* =========================
   📱 IPAD
========================= */
{
  name: "iPad Pro",
  price: 999,
  img: "https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg"
},
{
  name: "iPad Air",
  price: 799,
  img: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg"
},

/* =========================
   🎧 ACCESSORIES
========================= */
{
  name: "AirPods Pro",
  price: 249,
  img: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg"
},
{
  name: "Apple Watch Series",
  price: 399,
  img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg"
},
{
  name: "MagSafe Charger",
  price: 59,
  img: "https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg"
},
{
  name: "iPhone Case Premium",
  price: 29,
  img: "https://images.pexels.com/photos/4526413/pexels-photo-4526413.jpeg"
}

];

let cart = [];

const productList = document.getElementById("product-list");

/* RENDER PRODUCTS */
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

/* ADD TO CART */
function addToCart(index) {
  cart.push(products[index]);
  document.getElementById("cart-count").innerText = cart.length;
  renderCart();
}

/* CART */
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

/* CART UI */
function openCart() {
  document.getElementById("cart").classList.add("active");
}

function closeCart() {
  document.getElementById("cart").classList.remove("active");
}

/* CHECKOUT */
function checkout() {
  let msg = "Order:\n";
  cart.forEach(i => {
    msg += `${i.name} - $${i.price}\n`;
  });

  window.open(`https://wa.me/2349168144059?text=${encodeURIComponent(msg)}`);
}