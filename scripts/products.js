import { baseUrl } from "../scripts/baseUrl.js";

const productsContainer = document.getElementById("products-container");

// Define categories
const categories = ["Vegetables", "Fruits" , "Dairy", "Baby Care"];

// Sample product images (corrected paths)
const productImages = {
    "Vegetables": [
        "assets/images/vegtables/Beans.jpg",
        "assets/images/vegtables/beetroot.jpg",
        "assets/images/vegtables/bellpapper.jpg",
        "assets/images/vegtables/Brinjol.jpg",
        "assets/images/vegtables/cabbage.jpg",
        "assets/images/vegtables/potato.jpg",
        "assets/images/vegtables/Radish.jpg",
        "assets/images/vegtables/spinach.jpg",
        "assets/images/vegtables/tomoto.jpg",
        "assets/images/vegtables/bellpapper.jpg"

    ],
    "Dairy": [
        "assets/images/dairy/badham.jpg",
        "assets/images/dairy/butter.jpg",
        "assets/images/dairy/curd.jpg",
        "assets/images/dairy/ghee.jpg",
        "assets/images/dairy/milk.jpg",
        "assets/images/dairy/paneer.jpg"


    ],
    "Baby Care": [
        "assets/images/babyproducts/baby.jpg",
        "assets/images/babyproducts/jin baby.jpg",
        "assets/images/babyproducts/baby.jpg",
        "assets/images/babyproducts/atogla.jpg",
        "assets/images/babyproducts/himalaya.jpg",
        "assets/images/babyproducts/johnsonbaby.jpg",
        "assets/images/babyproducts/mamaearth.jpg",
        "assets/images/babyproducts/pamper.jpg",
        "assets/images/babyproducts/wipes.jpg",
    ],
    "Fruites": [
        "assets/images/fruits/apples.jpg",
        "assets/images/fruits/banana.jpg",
        "assets/images/fruits/dragon.jpg",
        "assets/images/fruits/kiwi.jpg",
        "assets/images/fruits/papaya.jpg",
        "assets/images/fruits/pomogrante.jpg",
        "assets/images/fruits/watermelon.jpg",
        "assets/images/fruits/photo-1464965911861-746a04b4bca6.jpg"
    ]
};

const products = [];
for (let i = 1; i <= 40; i++) {
    const category = categories[i % categories.length]; // Assign category cyclically

    // Pick a random image
    const images = productImages[category];
    if (!images || images.length === 0) continue;

    const image = images[Math.floor(Math.random() * images.length)];

    // Extract a proper product name from the image filename
    const imageName = image.split('/').pop().split('.')[0]; // Extract file name
    const formattedName = imageName.charAt(0).toUpperCase() + imageName.slice(1); // Capitalize

    products.push({
        id: i,
        name: formattedName, // Use extracted file name as product name
        price: (Math.random() * 100).toFixed(2),
        discount: `${Math.floor(Math.random() * 50)}%`,
        category: category,
        image: image
    });
}

// Function to render products
function renderProducts() {
    productsContainer.innerHTML = "";
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-card");

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3> <!-- Now shows real product name -->
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Discount:</strong> ${product.discount}</p>
            <button class="add-to-cart">Add to Cart</button>
            <button class="remove">Remove</button>
        `;

        productsContainer.appendChild(productDiv);
    });
}

// Render the products
renderProducts();