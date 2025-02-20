import { baseUrl } from "../scripts/baseUrl.js";

function loadCart() {
    fetch("https://nebulous-jazzy-quince.glitch.me/cart")
        .then(res => res.json())
        .then(cartItems => {
            let cartContainer = document.getElementById("cart-container");
            cartContainer.innerHTML = ""; // Clear previous items

            cartItems.forEach(item => {
                let itemDiv = document.createElement("div");
                itemDiv.classList.add("cart-item");
                itemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <button class="remove-from-cart" onclick="removeFromCart(${item.id})">Remove</button>
                `;
                cartContainer.appendChild(itemDiv);
            });
        })
        .catch(err => console.error("Error loading cart:", err));
}

window.onload = loadCart; // Load cart on page load
function removeFromCart(productId) {
    fetch(`https://nebulous-jazzy-quince.glitch.me/cart/${productId}`, {
        method: "DELETE"
    })
    .then(() => {
        alert("Item removed from cart!");
        loadCart(); // Refresh cart
    })
    .catch(err => console.error("Error removing item:", err));
}


