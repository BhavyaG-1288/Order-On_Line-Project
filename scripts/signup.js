import { baseUrl } from "../scripts/baseUrl.js";

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    // Get input values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!username || !email || !password) {
        alert("Please fill out all fields.");
        return;
    }

    // Object to send to db.json
    const userData = { username, email, password };

    // Send Data to JSON Server
    fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("Response:",data);
        alert("Signup successful! Redirecting to login...");
        window.location.href = "login.html"; // Redirect after signup
    })
    .catch(err => console.error("Error:", err));
});
