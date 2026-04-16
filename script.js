const products = [

/* 👕 CLOTHES */
{
  name: "Black Hoodie",
  price: 35,
  category: "clothes",
  img: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=800"
},
{
  name: "White T-Shirt",
  price: 20,
  category: "clothes",
  img: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800"
},
{
  name: "Denim Jacket",
  price: 55,
  category: "clothes",
  img: "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=800"
},
{
  name: "Cargo Pants",
  price: 45,
  category: "clothes",
  img: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800"
},

/* 👟 SHOES */
{
  name: "Nike Sneakers",
  price: 90,
  category: "shoes",
  img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
},
{
  name: "Running Shoes",
  price: 70,
  category: "shoes",
  img: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800"
},

/* 🎧 TECH */
{
  name: "Wireless Headphones",
  price: 80,
  category: "tech",
  img: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=800"
},
{
  name: "Smart Watch",
  price: 120,
  category: "tech",
  img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800"
},
{
  name: "Bluetooth Speaker",
  price: 60,
  category: "tech",
  img: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&w=800"
},

/* 💻 GADGETS */
{
  name: "Laptop Pro",
  price: 900,
  category: "tech",
  img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800"
},
{
  name: "Tablet Device",
  price: 400,
  category: "tech",
  img: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800"
},

/* 🧢 ACCESSORIES */
{
  name: "Cap Hat",
  price: 15,
  category: "clothes",
  img: "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=800"
},
{
  name: "Sunglasses",
  price: 25,
  category: "clothes",
  img: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=800"
}

];

let cart = [];
let currentFilter = "all";

const list = document.getElementById("product-list");
const search = document.getElementById("search");

/* RENDER */
function render(data){
  list.innerHTML = "";
  data.forEach((p,i)=>{
    list.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <div class="card-content">
          <h3>${p.name}</h3>
          <p>$${p.price}</p>
          <button onclick="addToCart(${i})">Add</button>
        </div>
      </div>
    `;
  });
}

render(products);

/* FILTER */
function filter(cat){
  currentFilter = cat;
  apply();
}

/* SEARCH */
search.addEventListener("input", apply);

function apply(){
  let value = search.value.toLowerCase();

  let filtered = products.filter(p=>{
    let matchCat = currentFilter==="all" || p.category===currentFilter;
    let matchSearch = p.name.toLowerCase().includes(value);
    return matchCat && matchSearch;
  });

  render(filtered);
}

/* CART */
function addToCart(i){
  cart.push(products[i]);
  document.getElementById("cart-count").innerText = cart.length;
  renderCart();
}

function renderCart(){
  let box = document.getElementById("cart-items");
  let total = 0;
  box.innerHTML = "";

  cart.forEach(c=>{
    total += c.price;
    box.innerHTML += `<p>${c.name} - $${c.price}</p>`;
  });

  document.getElementById("total").innerText = total;
}

/* CART UI */
function openCart(){
  document.getElementById("cart").classList.add("active");
}

function closeCart(){
  document.getElementById("cart").classList.remove("active");
}

/* CHECKOUT */
function checkout(){
  let msg = "Order:\n";
  cart.forEach(i=>{
    msg += `${i.name} - $${i.price}\n`;
  });

  window.open(`https://wa.me/2349168144059?text=${encodeURIComponent(msg)}`);
}