import { baseUrl } from "./baseurl";
document.addEventListener("DOMContentLoaded", function () {
    displayCart();
});

function displayCart() {
    let cartContainer = document.getElementById("cart-container");
    let cartTotal = document.getElementById("cart-total");
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<h3>Your cart is empty!</h3>";
        return;
    }

    fetch("baseUrl")
        .then(response => response.json())
        .then(products => {
            cartContainer.innerHTML = "";
            let total = 0;

            cartItems.forEach(productId => {
                let product = products.find(p => p.id === productId);
                if (product) {
                    total += product.price;

                    let cartItem = document.createElement("div");
                    cartItem.classList.add("cart-item");

                    cartItem.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>₹${product.price}</p>
                        <button onclick="removeFromCart(${product.id})">Remove</button>
                    `;
                    cartContainer.appendChild(cartItem);
                }
            });

            cartTotal.innerText = total;
        })
        .catch(error => console.error("Error loading cart:", error));
}

// Remove item from cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(id => id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Proceed to checkout
function checkout() {
    window.location.href = "checkout.html";
}