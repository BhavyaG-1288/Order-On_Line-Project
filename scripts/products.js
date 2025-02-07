import { baseUrl } from "./baseUrl.js";


console.log(baseUrl)

const products = {
    vegetables: [
        { name: "Carrot", price: 2, image: "assets/images/vegtables/carrot.jpg" },
        { name: "Broccoli", price: 3, image: "https://via.placeholder.com/200x150?text=Broccoli" },
        { name: "Potato", price: 1, image: "https://via.placeholder.com/200x150?text=Potato" }
    ],
    fruits: [
        { name: "Apple", price: 4, image: "https://via.placeholder.com/200x150?text=Apple" },
        { name: "Banana", price: 1, image: "https://via.placeholder.com/200x150?text=Banana" },
        { name: "Grapes", price: 5, image: "https://via.placeholder.com/200x150?text=Grapes" }
    ],
    dairy: [
        { name: "Milk", price: 2, image: "https://via.placeholder.com/200x150?text=Milk" },
        { name: "Cheese", price: 5, image: "https://via.placeholder.com/200x150?text=Cheese" },
        { name: "Yogurt", price: 3, image: "https://via.placeholder.com/200x150?text=Yogurt" }
    ],
    beauty: [
        { name: "Shampoo", price: 8, image: "https://via.placeholder.com/200x150?text=Shampoo" },
        { name: "Conditioner", price: 7, image: "https://via.placeholder.com/200x150?text=Conditioner" },
        { name: "Face Cream", price: 15, image: "https://via.placeholder.com/200x150?text=Face+Cream" }
    ]
};

// Function to display products based on selected category
function displayProducts(category) {
    const productsList = document.getElementById("productsList");
    productsList.innerHTML = ""; // Clear any existing products

    const categoryProducts = products[category] || [];
    categoryProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productElement.appendChild(productImage);

        const productName = document.createElement("h3");
        productName.textContent = product.name;
        productElement.appendChild(productName);

        const productPrice = document.createElement("p");
        productPrice.textContent = `$${product.price}`;
        productElement.appendChild(productPrice);

        productsList.appendChild(productElement);
    });
}

// Event listeners for category buttons
document.getElementById("vegetablesBtn").addEventListener("click", function() {
    displayProducts("vegetables");
});

document.getElementById("fruitsBtn").addEventListener("click", function() {
    displayProducts("fruits");
});

document.getElementById("dairyBtn").addEventListener("click", function() {
    displayProducts("dairy");
});

document.getElementById("beautyBtn").addEventListener("click", function() {
    displayProducts("beauty");
});