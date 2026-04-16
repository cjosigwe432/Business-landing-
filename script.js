const products = [

/* 👕 CLOTHES */
{ name:"Black Hoodie", price:35, category:"clothes", img:"https://source.unsplash.com/600x600/?hoodie" },
{ name:"White T-Shirt", price:20, category:"clothes", img:"https://source.unsplash.com/600x600/?tshirt" },
{ name:"Denim Jacket", price:55, category:"clothes", img:"https://source.unsplash.com/600x600/?jacket" },
{ name:"Cargo Pants", price:45, category:"clothes", img:"https://source.unsplash.com/600x600/?pants" },
{ name:"Streetwear Hoodie", price:60, category:"clothes", img:"https://source.unsplash.com/600x600/?streetwear" },

/* 👟 SHOES */
{ name:"Nike Sneakers", price:90, category:"shoes", img:"https://source.unsplash.com/600x600/?sneakers" },
{ name:"Running Shoes", price:70, category:"shoes", img:"https://source.unsplash.com/600x600/?running-shoes" },
{ name:"Sport Shoes", price:80, category:"shoes", img:"https://source.unsplash.com/600x600/?sport-shoes" },

/* 🎧 TECH */
{ name:"Wireless Headphones", price:80, category:"tech", img:"https://source.unsplash.com/600x600/?headphones" },
{ name:"Smart Watch", price:120, category:"tech", img:"https://source.unsplash.com/600x600/?smartwatch" },
{ name:"Bluetooth Speaker", price:60, category:"tech", img:"https://source.unsplash.com/600x600/?speaker" },
{ name:"Gaming Mouse", price:40, category:"tech", img:"https://source.unsplash.com/600x600/?gaming-mouse" },
{ name:"Mechanical Keyboard", price:90, category:"tech", img:"https://source.unsplash.com/600x600/?keyboard" },

/* 💻 GADGETS */
{ name:"Laptop Pro", price:900, category:"tech", img:"https://source.unsplash.com/600x600/?laptop" },
{ name:"Tablet Pro", price:400, category:"tech", img:"https://source.unsplash.com/600x600/?tablet" },

/* 🧢 ACCESSORIES */
{ name:"Cap Hat", price:15, category:"clothes", img:"https://source.unsplash.com/600x600/?cap" },
{ name:"Sunglasses", price:25, category:"clothes", img:"https://source.unsplash.com/600x600/?sunglasses" },
{ name:"Watch Luxury", price:150, category:"tech", img:"https://source.unsplash.com/600x600/?luxury-watch" }

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