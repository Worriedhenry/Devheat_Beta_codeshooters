
var logincheak=0;
const signin=document.getElementById("signin")
const signup=document.getElementById("signup")
const signupdetails=document.getElementById("singupdetails")
const signindetails=document.getElementById("signindetails")
//function for switching to signup
signup.addEventListener("click",()=>{
  console.log("hello")
  signindetails.style.display="none"
  signupdetails.style.display="flex"
  signup.style.borderBottom="3px solid #d905ff"
  signin.style.borderBottom="0px solid magenta"
  document.getElementById("createaccount").style.display="flex"
})
//function for switching to sign in
signin.addEventListener("click",()=>{
  console.log("hello")
  signupdetails.style.display="none"
  signindetails.style.display="flex"
  signin.style.borderBottom="3px solid #d905ff"
  signup.style.borderBottom="0px solid #d905ff"
  console.log("hello")
  document.getElementById("createaccount").style.display="none"
})

const login=document.getElementById('loginbutton')
//function for login
login.addEventListener('click',()=>{
let logusername=document.getElementById('signinusername').value
let logpassword=document.getElementById('signinpassword').value
console.log(logusername)
//
if(logpassword==JSON.parse(localStorage.getItem(logusername))[0]){
  logincheak=1;
}
  if(logincheak==1){
    login.setAttribute('value','Loging in')
    login.style.backgroundColor="blue"
    localStorage.setItem("currentuser",logusername)
    setTimeout(() => {
      window.location.href="feed.html"
      login.setAttribute('value','log in')
      // login.style.background-color="blue"
      login.style.backgroundColor="pink";
    }, 3000);
    logusername=""
    logpassword=""
  }
  else{
    logusername=""
    logpassword=""
    alert("Username or password is incorrect")
  }
})
const createaccount=document.getElementById("createaccount")
// Function for crating account
createaccount.addEventListener("click",()=>{
  const username=document.getElementById('signupusername').value
  const password=document.getElementById('signuppass').value
  const signupname=document.getElementById('signupname').value
  const DOB=document.getElementById('signupdate').value
  const signupemail=document.getElementById('signupemail').value
  const security=document.getElementById('Security').value
  if(username!="" && password!="" && signupname!=""){
    let obje=[]
    obje.push(password,signupname,DOB,signupemail,security)
    localStorage.setItem(username,JSON.stringify(obje))
    console.log(JSON.parse(localStorage.getItem(username))[0],"Hello")
    createaccount.setAttribute('value',"creating account")
    setTimeout(() => {
      window.location.href="login.html"
      createaccount.setAttribute('value','sign up')

    }, 1500);
  }
})
//Function for paasword visiblity
let passwordvisible=document.getElementById("passwordbutton")
passwordvisible.addEventListener("click",()=>{
  if(passwordvisible.innerText=="Show password" ||passwordvisible.innerText=="" ){
    passwordvisible.innerText="Hide"
    document.getElementById('signinpassword').setAttribute('type','text')
  }
  else{
    passwordvisible.innerText="Show password"
    document.getElementById('signinpassword').setAttribute('type','password')
  }
})
//Function for forgot password
function forgotpass(){
  window.location.href="forgotpassword.html"
}