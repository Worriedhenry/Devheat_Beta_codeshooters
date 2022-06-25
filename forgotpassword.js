let captchaText = document.querySelector('#captcha');
var ctx = captchaText.getContext("2d");
ctx.font = "30px Roboto";
ctx.fillStyle = "#08e5ff";

let userText = document.querySelector('#textBox');
let username = document.querySelector('#userBox');
console.log(username)
let submitButton = document.querySelector('#submitButton');
let output = document.querySelector('#output');
let refreshButton = document.querySelector('#refreshButton');
let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = [];
for (let i = 1; i <= 5; i++) {
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
var c = emptyArr.join('');
ctx.fillText(emptyArr.join(''), captchaText.width / 4, captchaText.height / 2);
userText.addEventListener('keyup', function (e) {
    currentuser=localStorage.getItem(username.value)
    answer=JSON.parse(localStorage.getItem(username.value))[4]
    inputedanswer=document.getElementById("securityBox").value
    console.log(inputedanswer,answer)
    if (e.keyCode === 13 && answer==inputedanswer) {
        if (userText.value === c) {
            output.classList.add("correctCaptcha");
            console.log(JSON.parse(localStorage.getItem(username.value)),username,localStorage.getItem(username))
            if (JSON.parse(localStorage.getItem(username.value)) ==null) {
                output.innerHTML = `Your username is invalid`;
            } 
            else {
                output.innerHTML = `Your password is => ${JSON.parse(localStorage.getItem(username.value))[0]}`;
                setTimeout(() => {
                    window.location.href="login.html"
                }, 3000);
            }
        }
        else {
            output.classList.add("incorrectCaptcha-or-Security-answer");
            output.innerHTML = "Incorrect, please try again";
        }
    }
});
submitButton.addEventListener('click', function () {
    currentuser=localStorage.getItem("currentuser")
    answer=JSON.parse(localStorage.getItem(username.value))[4]
    inputedanswer=document.getElementById("securityBox").value
    console.log(inputedanswer,answer)
    if (userText.value === c  && answer==inputedanswer) {
        output.classList.add("correctCaptcha");
        console.log(JSON.parse(localStorage.getItem(username.value)),username,localStorage.getItem(username))
        if (JSON.parse(localStorage.getItem(username.value)) ==null) {
            output.innerHTML = `Your username is invalid`;
        } 
        else {
            output.innerHTML = `Your password is => ${JSON.parse(localStorage.getItem(username.value))[0]}`;
            setTimeout(() => {
                window.location.href="login.html"
            }, 3000);
        }
    }
    else {
        output.classList.add("incorrectCaptcha-or-Securityanswer");
        output.innerHTML = "Incorrect, please try again";
    }
});
refreshButton.addEventListener('click', function () {
    userText.value = "";
    let refreshArr = [];
    for (let j = 1; j <= 7; j++) {
        refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    ctx.clearRect(0, 0, captchaText.width, captchaText.height);
    c = refreshArr.join('');
    ctx.fillText(refreshArr.join(''), captchaText.width / 4, captchaText.height / 2);
    output.innerHTML = "";
});