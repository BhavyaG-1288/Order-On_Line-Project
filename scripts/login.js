
import { baseUrl } from "./baseUrl.js";


console.log(baseUrl)

let form =document.getElementById("form");
form.addEventListener("submit", function(){
    event.preventDefault();

    let email =form.email.value;
    let password =form.password.value;
    let uersObj={email, password};

    fetch(`${baseUrl}/users`)
    .then((res)=>res.json())
    .then((data)=>{
        let user = data.filter((el, i) => el.email == email);
        if (user.length != 0) {
          /// user present
          alert("User already registred, please login");
          window.location.href = "products.html"
        } else {
            fetch(`${baseUrl}/users`,{
                method:"POST",
                headers:{
                    "content-type":"application/json",
                },
                body:JSON.stringify(userObj),
            }).then(()=>{
                alert("Login Successfull");
                window.location.href ="products.html"
            });
        }
        })
        .catch((err)=>{
            console.log(err);
            alert("Something went wrong, please try again later")
        });
    });