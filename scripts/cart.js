import { baseUrl } from "../scripts/baseUrl";

const cartContainer = document.getElementById("cart-items");

async function loadCart() {
    const cartItems = await fetch(`${baseUrl}/cart`).then(res => res.json());
    cartContainer.innerHTML = cartItems.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" />
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `).join('');
}

async function addToCart(productId) {
    const product = await fetch(`${baseUrl}/products/${productId}`).then(res => res.json());
    
    const response = await fetch(`${baseUrl}/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    });

    if (response.ok) {
        alert("Item added to cart!");
    } else {
        alert("Failed to add to cart.");
    }
}

// Remove item from cart
async function removeFromCart(productId) {
    await fetch(`${baseUrl}/cart/${productId}`, { method: 'DELETE' });
    loadCart();  // Refresh cart
}

loadCart();
