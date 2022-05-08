
var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
if(loggedInUser)
{
    window.location.href = "login.html"
}

 document.getElementById("submit").addEventListener("click", formSubmitted);

function formSubmitted()
{
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;


if(email.length == 0)
{
    alert("Email field can't be blank!!!");
    return;
}
if(password.length == 0)
{
    alert("Password field can't be blank!!!");
    return;
}

var data =  JSON.parse(localStorage.getItem("SignedupData")) || [];

var flag = false;
var name = "";
data.forEach(el=>{
    if(el.email == email && el.password == password)
    {
        
        flag = true;
        name = el.name;
    }
    else if(flag==false)
    {
        alert("Credentials are wrong, please try again")
        return;
    }
})


var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    var obj = {
        "email":email,
        "password":password,
        "name":name
    }
    localStorage.setItem("loggedInUser", JSON.stringify(obj));
    window.location.href = "homepage.html"
alert("you have successfully logged in")


}