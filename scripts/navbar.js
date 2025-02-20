
const navbar = ()=> {

    let card =`<div id ="nav-container">
    <a id ="logo" href ="index.html">ORDER ON-LINE</a>
    <div id="search-container">
    <input type="text" id="search-bar" placeholder= "     Search products...">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="search-icon">
        <path fill="gray" d="M21.71 20.29l-5.4-5.4A7 7 0 1015 16l5.4 5.4a1 1 0 001.41-1.41zM10 15a5 5 0 115-5 5 5 0 01-5 5z"></path>
    </svg>
     </div>

    <div id ="nav-links">
        <a href="signup.html">Signup</a>
        <a href="login.html">Login</a>
        <a href="products.html">Products</a>
        <a href="cart.html">cart</a>
    </div>
     </div>
    </div>`;

    document.getElementById("nav").innerHTML =card;
};
navbar();
