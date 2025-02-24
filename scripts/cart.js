import { baseUrl } from "../scripts/baseUrl.js";

document.addEventListener("DOMContentLoaded", function () {
    fetchCartItems();
});

// Function to fetch and display cart items
async function fetchCartItems() {
    console.log("Fetching Cart Items...");
    try {
        let response = await fetch("https://nebulous-jazzy-quince.glitch.me/cart");
        if (!response.ok) {
            throw new Error("Failed to fetch cart items");
        }
        let cartItems = await response.json();
        console.log("Cart items:", cartItems);
        displayCartItems(cartItems);
    } catch (error) {
        console.error("Error fetching cart items:", error);
    }
}

// Function to display cart items on the cart page
function displayCartItems(cartItems) {
    let cartContainer = document.getElementById("cart-container");

    if (!cartContainer) {
        console.error("Error: #cart-container not found in HTML!");
        return;
    }

    if (!cartItems || cartItems.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartContainer.innerHTML = ""; // Clear previous cart items

    cartItems.forEach(item => {
        let cartDiv = document.create
    })
}