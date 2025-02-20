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
    alert("item added to cart.");
    fetch("https://nebulous-jazzy-quince.glitch.me/cart")
    .then(res =>res.json())
    .then(products=>{
        let product =products.find(item=>item.id ==productId);
        if(!product){
            console.log("Product Not Found")
        }
    })
    fetch("https://nebulous-jazzy-quince.glitch.me/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id:productId, quality:1})
    })
    .then(response => response.json())
    .then(data => {
        console.log("Added to cart:", data);
        alert("Product added to cart!");
    })
    .catch(error => console.error("Error adding to cart:", error));
}

function removeFromCart(productId) {
    function removeFromCart(productId) {
        fetch(`https://nebulous-jazzy-quince.glitch.me/cart/${productId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(data => {
            console.log("Removed from cart:", productId);
            alert("Product removed from cart!");
        })
        .catch(error => console.error("Error removing from cart:", error));
    }
}