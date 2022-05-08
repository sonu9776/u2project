document.querySelector("#submit").addEventListener("click",formsubmit)
function formsubmit(){
    var name=document.getElementById("name").value
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    if(name.length==0){
        alert("name cant be empty")
        return
    }
     if(email.length==0){
        alert("email can't be empty")
        return;
    }
    if(password.length==0){
        alert("password can't be empty")
        return
    }
    if(password.length<8){
        alert("password length can' be less then 8 digit")
    }
    var obj={
        "name":name,
        "email":email,
        "password":password
    }
    var data=JSON.parse(localStorage.getItem("signupData")) || [];
var flag=false;
    data.forEach(el => {
        if(el.email==email){
            flag=true
        }
    });
    if(flag==true){
        alert("This email already register")
        return;
    }
    data.push(obj);
  localStorage.setItem("signupData",JSON.stringify(data)) 
  window.location.href="login.html"     
}