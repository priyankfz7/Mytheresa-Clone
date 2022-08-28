window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.querySelector('#navbar').classList.add('nav-change');
    } else {
        document.querySelector('#navbar').classList.remove('nav-change');
    }

}
document.getElementById("account").setAttribute("href", "signup.html")
document.getElementById("women").setAttribute("href", "index.html")
document.getElementById("life").setAttribute("href", "life.html")
let form = document.getElementById("details");
form.addEventListener("submit", function(e){
    e.preventDefault();
    let email=document.getElementById("email").value;
    let password= document.getElementById("password").value;
    let name=document.getElementById("name").value;
    let obj={
        email,
        password,
        name
    }
    localStorage.setItem("del",JSON.stringify(obj));
    alert("Sign Up successfull....")




})
let logf=document.getElementById("logf");
let del=JSON.parse(localStorage.getItem("del"));
logf.addEventListener("submit",function(e){
    e.preventDefault();
    let email =document.getElementById("givenemail").value;
    let password=document.getElementById("givenpass").value;
    
    if (email==del.email && password==del.password){
        alert("Successfully logged in..........")
    }else{
        alert("you filled wrong details");
        console.log(del)
    }
})
