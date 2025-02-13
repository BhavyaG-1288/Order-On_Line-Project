
const navbar = ()=> {

    let card =`<div id ="nav-container">
    <a id ="logo" href ="index.html">ORDER ON-LINE</a>
    <div id ="nav-links">
        <a href="signup.html">Signup</a>
        <a href="login.html">Login</a>
        <a href="products.html">Products</a>
        <a href="expenses.html">Expenses</a>
    </div>
    </div>`;

    document.getElementById("nav").innerHTML =card;
};
navbar();
