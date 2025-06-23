document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.product-list');
    const noProductsMessage = document.querySelector('.no-products');
    let UserCreds = sessionStorage.getItem("user-creds");
    
    const products = [
        { defaultPrice: 20, defaultQuantity: 250, id: 23, name: 'Mango/మామిడి', category: 'fruits', price: 50, image: '/images/fruits/mango.png' },
        { defaultPrice: 20, defaultQuantity: 250, id: 24, name: 'Pineapple/అనాసపండు', category: 'fruits', price: 45, image: '/images/fruits/pinapple.png' },
        { defaultPrice: 20, defaultQuantity: 250, id: 25, name: 'Green Chilli/పచ్చి మిర్చి', category: 'vegetables', price: 12, image: '/images/vegetables/green-chilli.png' },
        { defaultPrice: 20, defaultQuantity: 250, id: 26, name: 'Garlic/వెల్లులి', category: 'vegetables', price: 30, image: '/images/grocery/veg2.png' },
        { defaultPrice: 20, defaultQuantity: 250, id: 27, name: 'Ginger/అల్లం', category: 'vegetables', price: 35, image: '/images/vegetables/ginger.jpeg' },
        { defaultPrice: 20, defaultQuantity: 250, id: 28, name: 'Pomegranate/దానిమ్మ', category: 'fruits', price: 60, image: '/images/Bekary/cake4.png' },
        { defaultPrice: 20, defaultQuantity: 250, id: 29, name: 'Kiwi/కివి పండు', category: 'fruits', price: 70, image: '/images/ibacco/ice-cream1.png' },
        { defaultPrice: 20, defaultQuantity: 250, id: 30, name: 'Coconut/కొబ్బరి', category: 'fruits', price: 20, image: '/images/vegetables/tomato.png' },
        { defaultPrice: 20, defaultQuantity: 250, id: 31, name: 'Almond/బదం', category: 'groceries', price: 90, image: '/images/food/burger.png' },
        { defaultPrice: 20, defaultQuantity: 250, id: 32, name: 'Cashew/జీడిపప్పు', category: 'groceries', price: 80, image: '/images/ibacco/ice-cream2.png' },
        { defaultPrice: 20, defaultQuantity: 250, id: 33, name: 'Bread/బ్రెడ్', category: 'groceries', price: 25, image:'/images/Bekary/cake2.png' },
    ];
  
   
    // console.log(pdurl)
    function renderProducts(products , isSubscribed) {
        productList.innerHTML = '';
        if (products.length === 0) {
            noProductsMessage.style.display = 'block';
        } else {
            noProductsMessage.style.display = 'none';
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                 
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Price: <span class="product-cost">${product.defaultPrice} Rs</span></p>
                    <div class="quantity-controls">
                        <button class="decrease-btn">-</button>
                        <span class="quantity">${product.defaultQuantity} grams</span>
                        <button class="increase-btn">+</button>
                    </div>
                    
                    <button class="add-to-cart">Add to Cart</button>
                   
                `;
                productList.appendChild(productItem);

                const increaseBtn = productItem.querySelector('.increase-btn');
                const decreaseBtn = productItem.querySelector('.decrease-btn');
                const quantitySpan = productItem.querySelector('.quantity');
                const costSpan = productItem.querySelector('.product-cost');
                const addToCartBtn = productItem.querySelector('.add-to-cart');

                let quantity = product.defaultQuantity;
                let cost = product.defaultPrice;

                increaseBtn.addEventListener('click', (e) => {
                   
                    quantity += 250;
                    cost = (quantity / 250) * product.defaultPrice;
                    quantitySpan.textContent = `${quantity} grams`;
                    costSpan.textContent = `${cost} Rs`;
                });

                decreaseBtn.addEventListener('click', (e) => {
                 
                    if (quantity > 250) {
                        quantity -= 250;
                        cost = (quantity / 250) * product.defaultPrice;
                        quantitySpan.textContent = `${quantity} grams`;
                        costSpan.textContent = `${cost} Rs`;
                    }
                });

                addToCartBtn.addEventListener('click', () => {
                    let cart = JSON.parse(localStorage.getItem('cart')) || [];

                    // Ensure cart is an array
                    if (!Array.isArray(cart)) {
                        cart = [];
                    }

                    const existingProductIndex = cart.findIndex(item => item.id === product.id);

                    if (existingProductIndex > -1) {
                        // Product already in cart, update quantity and cost
                        cart[existingProductIndex].quantity += quantity;
                        cart[existingProductIndex].cost = (cart[existingProductIndex].quantity / 250) * product.defaultPrice;
                    } else {
                        // Product not in cart, add new entry
                        cart.push({
                            ...product,
                            quantity,
                            cost
                        });
                    }

                    localStorage.setItem('cart', JSON.stringify(cart));
                    alert(`${product.name} added to cart`);
                });
            });
        }
    }

// document.getElementById('discount-tag').style.display = 'block';
// subscription model js 


    const subscribeBanner = document.getElementById('subscribe-banner');
    const closeBannerBtn = document.getElementById('close-banner');
    const subscribeButton = document.getElementById('subscribe-button');

    // Show the banner after 5 seconds
    setTimeout(() => {
        subscribeBanner.classList.add('show');
    }, 5000);

    // Close banner when close button is clicked
    closeBannerBtn.addEventListener('click', () => {
        subscribeBanner.classList.remove('show');
    });

    // Subscription button click event
    subscribeButton.addEventListener('click', () => {
       // Replace this function with your actual login check
       if (checkLoginStatus(()=>{
        window.location.href = '/payments/payments.html'
       }));

        
    });

 
   
    function checkLoginStatus(callback){
      if(!UserCreds){
        localStorage.setItem('redirectTo', 'payment');
        window.location.href = '/mainApplication/RALpages/login.html';
      }
      else{
         // If the user is logged in, execute the callback function
         callback();
      }
             
     
     
    }

// end of subscription model



    document.getElementById('category').addEventListener('change', (event) => {
        const category = event.target.value;
        const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
        renderProducts(filteredProducts);
    });

    document.getElementById('search').addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        renderProducts(filteredProducts);
    });

    renderProducts(products);
    let curIndex = 0;
    function slideNext() {
        const carousel = document.querySelector('.carousel');
        const totalCards = document.querySelectorAll('.card').length;
        const visibleCards = 2.5; // 2 and a half cards
        const cardWidth = carousel.clientWidth / visibleCards;
    
        if (curIndex < totalCards - visibleCards) {
            curIndex++;
        } else {
            curIndex = 0; // Loop back to the beginning
        }
        carousel.style.transform = `translateX(-${curIndex * cardWidth}px)`;
    }
    
    // Auto slide every 3 seconds
    setInterval(slideNext, 3000);

    
    let currentIndex = 0;

function autoSlide() {
    const slideshow = document.querySelector('.slideshow');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Calculate the width of each slide
    const slideWidth = slides[0].offsetWidth;

    // Slide to the next slide
    currentIndex++;

    // If we have reached the last slide, reset to the first slide
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    // Apply the transform to slide
    slideshow.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Auto slide every 4 seconds
setInterval(autoSlide, 4000);

// Adjust slide on window resize
window.addEventListener('resize', () => {
    const slideshow = document.querySelector('.slideshow');
    const slideWidth = document.querySelector('.slide').offsetWidth;
    slideshow.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

    
});
