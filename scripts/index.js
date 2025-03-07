import { baseUrl } from "../scripts/baseUrl";


document.getElementById("search-bar").addEventListener("search-bar", function() {
    let query = this.value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let name = product.getAttribute("data-name").toLowerCase();
        if (name.includes(query)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
   
});

document.querySelectorAll(".product-link").forEach((product) => {
    product.addEventListener("click", function (event) {
      event.preventDefault();
      if (localStorage.getItem("isLoggedIn")) {
        window.location.href = "products.html";
      } else {
        alert("Please sign up or log in first.");
        window.location.href = "signup.html";
      }
    });
  });


  document.querySelectorAll(".add-to-cart-btn").forEach(button => {
    button.addEventListener("click", () => {
        const productId = button.getAttribute("data-id");
        addToCart(productId);
    });
});

