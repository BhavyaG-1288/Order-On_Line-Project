import { baseUrl } from "../scripts/baseUrl.js";

document.addEventListener("DOMContentLoaded", function () {
    fetchProducts();
});

// Function to fetch products from the API
function fetchProducts() {
    console.log("fetching Products..");

    fetch("https://nebulous-jazzy-quince.glitch.me/products") 
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched products:", data); // Debugging
            displayProducts(data);
        })
        .catch(error =>("Error fetching products:", error));
}
document.addEventListener("DOMContentLoaded", fetchProducts);

// Function to display products on the page
function displayProducts(products) {
   // console.log("Running displayProducts function...");

    let container = document.getElementById("products-container");
    //console.log("checking container:", container);

    if (!container) {
        console.error(" Error: #products-container not found in HTML!");
        return;
    }

    container.innerHTML = ""; // Clear previous content

    if (!products||products.length === 0) {
        container.innerHTML = "<p>No products available.</p>";
        console.warn(" No products found!");
        return;
    }

    Object.keys(products).forEach(category => {
        let categoryProducts = products[category]; // Array of products

        categoryProducts.forEach(product => {
            let productDiv = document.createElement("div");
            productDiv.classList.add("product");

            let imagePath = product.image.replace("Order-On_Line-Project/", ""); 
            ? product.image  // If it's an absolute URL
            : `./${product.image}`; // Ensure relative path works



            productDiv.innerHTML = `
           <img src="${imagePath}" alt="${product.name}" width="150" onerror="this.onerror=null; this.src='assets/images/default.jpg';">
            <h3>${product.name}</h3>
            <p>${product.description}</p>                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <button class="add-to-cart">Add to Cart</button>
                <button class="remove-from-cart">Remove</button>
            `;

            container.appendChild(productDiv);
        });
    });

    console.log("✅ Products displayed successfully!");
}
// Dummy functions for add to cart / remove from cart (implement these in cart.js)
function addToCart(productId) {
    console.log("Added to cart:", productId);
}

function removeFromCart(productId) {
    console.log("Removed from cart:", productId);
}