import  {baseUrl} from "./baseUrl.js";

const products = {
    vegetables: [
      { name: "Carrot", price: "$1.50", image: "https://via.placeholder.com/150" },
      { name: "Tomato", price: "$2.00", image: "https://via.placeholder.com/150 },
      { name: "Broccoli", price: "$1.80", image: "https://via.placeholder.com/150" }
    ],
    fruits: [
      { name: "Apple", price: "$1.00", image: "https://via.placeholder.com/150" },
      { name: "Banana", price: "$0.50", image: "https://via.placeholder.com/150" },
      { name: "Orange", price: "$1.20", image: "https://via.placeholder.com/150" }
    ],
    beauty: [
      { name: "Face Cream", price: "$10.00", image: "https://via.placeholder.com/150" },
      { name: "Shampoo", price: "$8.00", image: "https://via.placeholder.com/150" },
      { name: "Lipstick", price: "$5.00", image: "https://via.placeholder.com/150" }
    ],
    cakes: [
      { name: "Chocolate Cake", price: "$15.00", image: "https://via.placeholder.com/150" },
      { name: "Vanilla Cake", price: "$12.00", image: "https://via.placeholder.com/150" },
      { name: "Strawberry Cake", price: "$18.00", image: "https://via.placeholder.com/150" }
    ],
    dairy: [
      { name: "Milk", price: "$3.00", image: "https://via.placeholder.com/150" },
      { name: "Cheese", price: "$5.00", image: "https://via.placeholder.com/150" },
      { name: "Yogurt", price: "$2.50", image: "https://via.placeholder.com/150" }
    ]
  };
  
  // Function to render products
  function renderProducts(category, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear previous content
  
    products[category].forEach(product => {
      const productCard = `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <button>Add to Cart</button>
        </div>
      `;
      container.innerHTML += productCard;
    });
  }
  
  // Render products for each category
  renderProducts("vegetables", "vegetables-container");
  renderProducts("fruits", "fruits-container");
  renderProducts("beauty", "beauty-container");
  renderProducts("cakes", "cakes-container");
  renderProducts("dairy", "dairy-container");
  products();