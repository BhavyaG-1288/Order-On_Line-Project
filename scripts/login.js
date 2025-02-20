import { baseUrl } from "../scripts/baseUrl.js";

let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Check if user exists
    fetch(`${baseUrl}/user`)
    .then(res => res.json())
    .then((data) => {
      console.log("Fetched Users:",data);
        
      let user = data.filter((el) => el.email == email);
        if (user.length != 0) {
            // Check password
            if (user[0].password == password) {
                alert("Login Success...");
                localStorage.setItem("loginData", JSON.stringify(user[0]));
                window.location.href = "products.html";
            } else {
                alert("Password is wrong, please login with correct password");
            }
        } else {
            alert("User not registered, Please signup....");
            window.location.href = "signup.html";
        }
    })
    .catch(err => console.error("Error:", err));
});