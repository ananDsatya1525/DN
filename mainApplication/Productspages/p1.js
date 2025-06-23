const products = [
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 1, name: 'Apple', category: 'fruits', image: '/images/fruits/apple.jpeg' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 2, name: 'Banana', category: 'fruits', image: '/images/fruits/grape.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 3, name: 'Carrot', category: 'vegetables', image: '/images/vegetables/aaloooo.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 4, name: 'Tomato', category: 'vegetables', image: '/images/vegetables/broclli.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 5, name: 'Coca Cola', category: 'cool-drinks', image: '/images/cooldrinks/coca-cola-diet.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 6, name: 'Pepsi', category: 'cool-drinks', image: '/images/cooldrinks/mozito.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 7, name: 'Rice', category: 'grocery', image: '/images/grocery/red-beans.jpg' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 8, name: 'Wheat', category: 'grocery', image: '/images/grocery/groundut.jpg' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 9, name: 'Apple', category: 'fruits', image: '/images/fruits/green-mango.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 10, name: 'Banana', category: 'fruits', image: '/images/fruits/green-lemon.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 11, name: 'Carrot', category: 'vegetables', image: '/images/vegetables/cabagge.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 12, name: 'Tomato', category: 'vegetables', image: '/images/vegetables/califlower.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 13, name: 'Coca Cola', category: 'cool-drinks', image: '/images/cooldrinks/pepsi.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 14, name: 'Pepsi', category: 'cool-drinks', image: '/images/cooldrinks/coca-cola.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 15, name: 'Rice', category: 'grocery', image: '/images/grocery/cornflour.jpg' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 16, name: 'Wheat', category: 'grocery', image: '/images/grocery/chilly-powder.jpg' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 17, name: 'Apple', category: 'fruits', image: '/images/fruits/guva.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 18, name: 'Banana', category: 'fruits', image: '/images/fruits/mango.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 19, name: 'Carrot', category: 'vegetables', image: '/images/vegetables/carrot.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 20, name: 'Tomato', category: 'vegetables', image: '/images/vegetables/cucumber.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 21, name: 'Coca Cola', category: 'cool-drinks', image: '/images/cooldrinks/mozito.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 22, name: 'Pepsi', category: 'cool-drinks', image: '/images/cooldrinks/coca-cola-diet.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 23, name: 'Rice', category: 'grocery', image: '/images/grocery/sunflower-oil.jpg' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 24, name: 'Wheat', category: 'grocery', image: '/images/grocery/turmeric-powder.jpg' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 25, name: 'Apple', category: 'fruits', image: '/images/fruits/orrange.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 26, name: 'Banana', category: 'fruits', image: '/images/fruits/kiwi.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 27, name: 'Carrot', category: 'vegetables', image: '/images/vegetables/eggplant.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 28, name: 'Tomato', category: 'vegetables', image: '/images/vegetables/green-chilli.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 29, name: 'Coca Cola', category: 'cool-drinks', image: '/images/cooldrinks/coca-cola-diet.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 30, name: 'Pepsi', category: 'cool-drinks', image: '/images/cooldrinks/coco-cola-diet.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 31, name: 'Rice', category: 'grocery', image: '/images/grocery/sugar.jpg' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 32, name: 'Wheat', category: 'grocery', image: '/images/grocery/red-beans.jpg' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 33, name: 'Apple', category: 'fruits', image: '/images/fruits/pinapple.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 34, name: 'Banana', category: 'fruits', image: '/images/fruits/pappaya.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 35, name: 'Carrot', category: 'vegetables', image: '/images/vegetables/onions.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 36, name: 'Tomato', category: 'vegetables', image: '/images/vegetables/tomato.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 37, name: 'Coca Cola', category: 'cool-drinks', image: '/images/cooldrinks/coca-cola-diet.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 38, name: 'Pepsi', category: 'cool-drinks', image: '/images/cooldrinks/sprite.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 39, name: 'Rice', category: 'grocery', image: '/images/grocery/groundut.jpg' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 40, name: 'Wheat', category: 'grocery', image: '/images/grocery/maida.jpg' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 41, name: 'Apple', category: 'fruits', image: '/images/fruits/pommogranet.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 42, name: 'Banana', category: 'fruits', image: '/images/fruits/watermelon.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 43, name: 'Carrot', category: 'vegetables', image: '/images/vegetables/onions.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 44, name: 'Tomato', category: 'vegetables', image: '/images/vegetables/tomato.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 45, name: 'Coca Cola', category: 'cool-drinks', image: '/images/cooldrinks/sprite.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 46, name: 'Pepsi', category: 'cool-drinks', image: '/images/cooldrinks/coca-cola-diet.png' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 47, name: 'Rice', category: 'grocery', image: '/images/grocery/olive-oil.jpg' },
  {pricePerKg: 5,defaultPrice: 20,defaultQuantity: 250, id: 48, name: 'Wheat', category: 'grocery', image: '/images/grocery/ghee.jpg' },
  // Add more products as needed
  // Add 50+ products for the sake of example
];

let currentPage = 1;
const productsPerPage = 12;




function renderProducts(filter = 'all', page = 1) {
  const productGrid = document.getElementById('productGrid');
  const noResults = document.getElementById('noResults');
  productGrid.innerHTML = '';
  noResults.style.display = 'none';

  const filteredProducts = products.filter(product => filter === 'all' || product.category === filter);
  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  if (totalProducts === 0) {
      noResults.style.display = 'block';
      return;
  }

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = Math.min(startIndex + productsPerPage, totalProducts);

  filteredProducts.slice(startIndex, endIndex).forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';

      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">Price: <span class="product-price">${product.pricePerKg}</span> Rs </p>
            <div class="quantity">
                <button class='decrease' onclick="changeQuantity(this, -250)">-</button>
                <span class="product-quantity">250</span> grams
                <button class='increase' onclick="changeQuantity(this, 250)">+</button>
            </div>
            <button class="add-to-cart" id='addtocart' onclick="addToCart(${product.id})">Add to Cart</button>
        `;

      productGrid.appendChild(productCard);
  });

  currentPage = page;
  updatePagination(totalPages);

}


//change quantity of the product as
function changeQuantity(button, amount) {
  const quantitySpan = button.parentNode.querySelector('.product-quantity');
  const priceSpan = button.parentNode.parentNode.querySelector('.product-price');
  let quantity = parseInt(quantitySpan.innerText);
  let price = parseInt(priceSpan.innerText);
  quantity += amount;
  if (quantity < 250) quantity = 250;

  price = (quantity / 1000) * 20;

  quantitySpan.innerText = quantity;
  priceSpan.innerText = price;
  
}







function addToCart(productId) {
  const product = products.find(p => p.id === productId);

  // Get the current product card
  const productCard = Array.from(document.querySelectorAll('.product-card')).find(card =>
      card.querySelector('h3').innerText === product.name
  );

  if (productCard) {
      const quantity = parseInt(productCard.querySelector('.product-quantity').innerText);
      const price = parseInt(productCard.querySelector('.product-price').innerText);

      // Retrieve the current cart from localStorage or initialize an empty cart
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Check if the product is already in the cart
      const existingProductIndex = cart.findIndex(item => item.id === productId);

      if (existingProductIndex >= 0) {
          // If the product is already in the cart, update its quantity and price
          cart[existingProductIndex].quantity += quantity;
          cart[existingProductIndex].cost += price;
      } else {
          // If the product is not in the cart, add it
          cart.push({
              id: product.id,
              name: product.name,
              image: product.image,
              quantity: quantity,
              cost:price
          });
          
      }

      // Save the updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));

      // Log the values to the console for debugging purposes
      console.log(`Product: ${product.name}`);
      console.log(`Quantity: ${quantity} grams`);
      console.log(`Price: Rs ${price}`);
      

      // Display a message or update the cart UI accordingly (optional)
      alert(`${product.name} has been added to your cart.`);
    

  }
}






function filterProducts(category) {
  renderProducts(category, 1);
  setTimeout(function(){
    document.getElementById('sidebar').classList.remove('show');
  },100)
}

function searchProducts() {
  const searchBar = document.getElementById('searchBar');
  const filter = searchBar.value.toLowerCase();
  const productCards = document.querySelectorAll('.product-card');

  let found = false;
  productCards.forEach(card => {
      const productName = card.querySelector('h3').innerText.toLowerCase();
      if (productName.includes(filter)) {
          card.style.display = '';
          found = true;
      } else {
          card.style.display = 'none';
      }
  });

  const noResults = document.getElementById('noResults');
  noResults.style.display = found ? 'none' : 'block';
}

function nextPage() {
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  if (currentPage < totalPages) {
      renderProducts('all', currentPage + 1);
  }
}

function prevPage() {
  if (currentPage > 1) {
      renderProducts('all', currentPage - 1);
  }
}

function updatePagination(totalPages) {
  const pagination = document.querySelector('.pagination');
  pagination.style.display = totalPages > 1 ? 'flex' : 'none';
}
// function toggleMenu() {
//   const sidebar = document.getElementById('sidebar');
//   sidebar.style.display = 'blok'
// }
document.getElementById('toggle').addEventListener('click',function(){
  document.getElementById('sidebar').classList.toggle('show');
})

// document.getElementById('X').addEventListener('click',function(){
//   document.getElementById('sidebar').classList.remove('show');
// })
document.querySelector('.close').addEventListener('click',function(){
  document.getElementById('sidebar').classList.remove('show');
})
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  
  let slideIndex = 0;
  showSlides();
  
  function plusSlides(n) {
      showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
      showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
  
      if (n > slides.length) { slideIndex = 1 }    
      if (n < 1) { slideIndex = slides.length }
  
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
  
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
  
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
  }
  
  function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      
      setTimeout(showSlides, 3000); // Change image every 3 seconds
  }
  
});
