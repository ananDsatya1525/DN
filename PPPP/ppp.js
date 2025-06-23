const productsPerPageDesktop = 4; // Number of products to display per page on desktop
const productsPerPageMobile = 1;  // Number of products to display per page on mobile

const products = {
    vegetables: Array.from({ length: 20 }, (_, i) => ({
        id: i + 21,
        name: `Vegetable ${i + 1}`,
        price: 10,
        image: 'vegetable.jpg'
    })),
    leafygreens: Array.from({ length: 20 }, (_, i) => ({
        id: i + 41,
        name: `Grocery ${i + 1}`,
        price: 10,
        image: 'grocery.jpg'
    })),
    rootVegetables: Array.from({ length: 20 }, (_, i) => ({
        id: i + 41,
        name: `Grocery ${i + 1}`,
        price: 10,
        image: 'grocery.jpg'
    })),
    cruciferousvegetables: Array.from({ length: 20 }, (_, i) => ({
        id: i + 41,
        name: `Grocery ${i + 1}`,
        price: 10,
        image: 'grocery.jpg'
    })),
    legumes: Array.from({ length: 20 }, (_, i) => ({
        id: i + 41,
        name: `Grocery ${i + 1}`,
        price: 10,
        image: 'grocery.jpg'
    })),
    nightshades: Array.from({ length: 20 }, (_, i) => ({
        id: i + 41,
        name: `Grocery ${i + 1}`,
        price: 10,
        image: 'grocery.jpg'
    })),
    alliums: Array.from({ length: 20 }, (_, i) => ({
        id: i + 41,
        name: `Grocery ${i + 1}`,
        price: 10,
        image: 'grocery.jpg'
    })),
    

};

function createProductCard(id, name, price, image) {
    return `
        <div class="product-card" id="product-${id}">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <div class="price">Price: <span class="price-value">₹${price}</span></div>
            <div class="quantity">
                <button onclick="changeQuantity(${id}, -1)">-</button>
                <input type="text" id="quantity-${id}" value="250" readonly>
                <button onclick="changeQuantity(${id}, 1)">+</button>
            </div>
            <button class="add-to-cart" onclick="addToCart(${id}, '${name}', ${price})">Add to Cart</button>
        </div>
    `;
}

function populateProducts(category) {
    const container = document.getElementById(`${category}-container`);
    container.innerHTML = '';
    products[category].forEach(product => {
        container.innerHTML += createProductCard(product.id, product.name, product.price, product.image);
    });
}

// function scrollProducts(category, direction) {
//     const container = document.getElementById(`${category}-container`);
//     const isMobile = window.innerWidth <= 480;
//     const productsPerPage = isMobile ? productsPerPageMobile : productsPerPageDesktop;
//     const scrollAmount = container.offsetWidth / productsPerPage * direction;
//     container.scrollLeft += scrollAmount;
// }

function changeQuantity(id, delta) {
    const input = document.getElementById(`quantity-${id}`);
    let quantity = parseInt(input.value);
    quantity += delta * 250;
    if (quantity < 250) quantity = 250;
    input.value = quantity;
    const price = 10 * (quantity / 250);
    document.querySelector(`#product-${id} .price-value`).textContent = `₹${price.toFixed(2)}`;
}

function addToCart(id, name, price) {
    alert(`${name} added to cart for ₹${price}`);
}

// Populate categories
[ 'vegetables',  'leafygreens','rootVegetables','cruciferousvegetables','legumes','nightshades','alliums'].forEach(category => {
    populateProducts(category);
});

// Update scroll behavior on resize
window.addEventListener('resize', () => {
    ['vegetables','leafygreens','rootVegetables','cruciferousvegetables','legumes','nightshades','alliums'].forEach(category => {
        const container = document.getElementById(`${category}-container`);
        const scrollAmount = container.offsetWidth / (window.innerWidth <= 480 ? productsPerPageMobile : productsPerPageDesktop);
        container.scrollLeft = Math.round(container.scrollLeft / scrollAmount) * scrollAmount;
    });
});
//  

// Improved Search functionality
function searchProducts() {
    let searchInput = document.getElementById('search-input').value.toLowerCase().replace(/\s+/g, ''); // Remove spaces from search input
    const searchResultsContainer = document.getElementById('search-results-container');
    const searchResultsDiv = document.getElementById('search-results');
    const categories = document.querySelectorAll('.category');

    searchResultsContainer.innerHTML = '';

    let foundProducts = [];

    // Exact match filtering without spaces in product names
    Object.keys(products).forEach(category => {
        foundProducts = foundProducts.concat(
            products[category].filter(product => product.name.toLowerCase().replace(/\s+/g, '').includes(searchInput))
        );
    });

    // Show search results or related products
    if (searchInput.length > 0 && foundProducts.length > 0) {
        // If search keyword exists and products are found, hide all categories and display search results
        categories.forEach(category => category.style.display = 'none');
        searchResultsDiv.style.display = 'block';
        foundProducts.forEach(product => {
            searchResultsContainer.innerHTML += createProductCard(product.id, product.name, product.price, product.image);
        });
    } else if (searchInput.length > 0 && foundProducts.length === 0) {
        // If search keyword exists but no exact match is found, show related products based on partial keyword
        let relatedProducts = [];
        Object.keys(products).forEach(category => {
            relatedProducts = relatedProducts.concat(
                products[category].filter(product => product.name.toLowerCase().replace(/\s+/g, '').includes(searchInput))
            );
        });

        // If related products found, show them
        if (relatedProducts.length > 0) {
            categories.forEach(category => category.style.display = 'none');
            searchResultsDiv.style.display = 'block';
            searchResultsContainer.innerHTML = '<h3>Showing related products:</h3>';
            relatedProducts.forEach(product => {
                searchResultsContainer.innerHTML += createProductCard(product.id, product.name, product.price, product.image);
            });
        } else {
            // If no related products found, show "No products found" message
            categories.forEach(category => category.style.display = 'none');
            searchResultsDiv.style.display = 'block';
            searchResultsContainer.innerHTML = '<h3>No products found</h3>';
        }
    } else {
        // If no search keyword, show all categories and hide search results
        categories.forEach(category => category.style.display = 'block');
        searchResultsDiv.style.display = 'none';
    }
}

// Populate categories
['vegetables','leafygreens','rootVegetables','cruciferousvegetables','legumes','nightshades','alliums'].forEach(category => {
    populateProducts(category);
});

// Update scroll behavior on resize
window.addEventListener('resize', () => {
    ['vegetables','leafygreens','rootVegetables','cruciferousvegetables','legumes','nightshades','alliums'].forEach(category => {
        const container = document.getElementById(`${category}-container`);
        const scrollAmount = container.offsetWidth / (window.innerWidth <= 480 ? productsPerPageMobile : productsPerPageDesktop);
        container.scrollLeft = Math.round(container.scrollLeft / scrollAmount) * scrollAmount;
    });
});

let scrollAmount = 0;

function scrollProducts(category, direction) {
    const container = document.getElementById(`${category}-container`);
    const containerWidth = container.getBoundingClientRect().width;
    const cardWidth = container.querySelector('.product-card').getBoundingClientRect().width + 20; // 20 is for margin
    const visibleCards = Math.floor(containerWidth / cardWidth);

    if (direction === 1) {
        scrollAmount += cardWidth * visibleCards;
    } else {
        scrollAmount -= cardWidth * visibleCards;
    }

    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
    const maxScroll = container.scrollWidth - containerWidth;
    if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll;
    }

    container.style.transform = `translateX(-${scrollAmount}px)`;
}
