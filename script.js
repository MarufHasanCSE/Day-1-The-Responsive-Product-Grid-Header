const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 2, name: "Smart Watch", price: 149.50, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
    { id: 3, name: "Premium Backpack", price: 75.00, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },
    
    { id: 5, name: "Premium Backpack", price: 75.00, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },
    
    { id: 6, name: "Premium Backpack", price: 75.00, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },

    { id: 4, name: "Mechanical Keyboard", price: 120.00, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500" }
];

const container = document.getElementById('product-container');
const cartCount = document.getElementById('cart-count');
let itemsInCart = 0;

function displayProducts() {
    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

window.addToCart = function(id) {
    itemsInCart++;
    cartCount.textContent = itemsInCart;
    
    const btn = event.target;
    btn.textContent = "Added!";
    btn.style.background = "#10b981";
    
    setTimeout(() => {
        btn.textContent = "Add to Cart";
        btn.style.background = "";
    }, 1000);
}

displayProducts();