//Function for adding comments
function addcomments(ele) {
    const dim = ele.parentNode
    const dim2 = dim.parentNode
    console.log(dim2.parentNode)
    const dim3 = dim2.children
    const text = dim3[4].innerText
    if(localStorage.getItem("limitsetted")==null){
        limits=1000
    }
    else{
        limits= parseInt(localStorage.getItem("limitsetted"))
    }

    var v=1
    userrun=localStorage.getItem(`user${username}${text}`)
    if(userrun==null){
        localStorage.setItem(`user${username}`,"0")
        runs=1
    }
    else{
        runs=parseInt(userrun)
    }
    
    // console.log(localStorage.getItem(`user${username}${text}`),runs)
    if(runs<=limits){
        limitcoment(username,userrun,text)
    lineadder(ele, dim3[1], dim3[3], text)
    
    let commenter = localStorage.getItem(`commenter${text}`);
    if (commenter == null) {
        commenterobj = [];
    } else {
        commenterobj = JSON.parse(commenter);
    }

    commenterobj.push(username)
    localStorage.setItem(`commenter${text}`,JSON.stringify(commenterobj))
    showcomments(dim3[3], text ,v)}
    else{
        alert("maximum limit reached")
    }

}

let currentuser = localStorage.getItem('currentuser')
//Function for deletephoto
function deletephoto(){
    currentuser = localStorage.getItem('currentuser')
    array=JSON.parse(localStorage.getItem("newimage"))
    va=array.length
    array.pop()
    localStorage.removeItem(`commenter${va+2}`)
    localStorage.removeItem(`comments${va+2}`)
    localStorage.removeItem(`user${currentuser}${va+2}`)
    console.log("deleting")
    localStorage.setItem("newimage",JSON.stringify(array))
    window.location.href="feed.html"
}
document.getElementById("username").innerText = localStorage.getItem('currentuser')
document.getElementById("proname").innerText = JSON.parse(localStorage.getItem(currentuser))[1]
const cb = document.getElementsByClassName("comments")
const commentbox = Object.entries(cb)
let commentbutton = Object.entries(document.getElementsByClassName("submitcomment"))
//Function for adding line in comment
function lineadder(commentbuttontest, inputcomment, notesElm, text) {
        if (inputcomment.value != "") {
            // inputcomment = document.getElementsByClassName('addcontent')[index]
            let notes = localStorage.getItem(`comments${text}`);
            if (notes == null) {
                commentObj = [];
            } else {
                commentObj = JSON.parse(notes);
            }
            commentObj.push(inputcomment.value);
            console.log(commentObj, JSON.stringify(commentObj))
            localStorage.setItem(`comments${text}`, JSON.stringify(commentObj));
            // console.log(localStorage.getItem("comments"))
            // console.log(newcomment)
            showcomments(notesElm, text)
        }
}
//Function for shoeing commens
function showcomments(notesElm, text,v) {
    // inputcomment = document.getElementById('addcontent')
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    let notes = localStorage.getItem(`comments${text}`);
    if (notes == null) {
        commentObj = [];
    } else {
        commentObj = JSON.parse(notes);
    }
    username = localStorage.getItem('currentuser')
    const date = new Date()
    // commentObj.push(inputcomment.value);
    console.log(commentObj, "Hello")
    // localStorage.setItem("comments", JSON.stringify(commentObj));
    let html = "";
    if(JSON.parse(localStorage.getItem(`commenter${text}`))!=null){
        const revcommentObj=commentObj.slice().reverse()
        
    revcommentObj.forEach(function (ele,index) {

        html += `<div style="display:flex;"><p class="usernameincomment"><b>${JSON.parse(localStorage.getItem(`commenter${text}`)).reverse()[index]}</b></p><b>:</b> <p class="sizeincrease">${ele}</p></div>
        <p >${today}</p>
        <hr>`;
    });}

    if (commentObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add comment" section above to add comments.`;
    }
}

function addphoto() {
    window.location.href = "addphoto.html"
}
var i=0
//adding photo
if (localStorage.getItem("newimage") != null) {
    console.log("loading")
    let addingdiv = document.createElement('div')
    const date1 = new Date()
    html=""
    array=JSON.parse(localStorage.getItem("newimage"))
    const revarray=array.slice().reverse()
    revarray.forEach((element,index)=>{
        i++
        html+=`<div class="postimages">
        <div>
        <img src="${element[0]}" class="postimage">
            <div class="postdown">
                <p class="white">${element[2]}</p>
                <p class="white">${element[3]}</p>
                <p><i class="fa fa-fire"onclick="like(this)" style="font-size:20px;color:white;font-"></i><span class="white">55k</span></P>
                <i onclick="hidesection(this) "class="fa fa-comments" style="font-size:20px;color:white" id="commentvisible"></i>
                </div>
            <p class="caption">Caption: ${element[1]} </p>
        </div>
        <div class="comments" id="comment-section" style="display:none;flex-direction: column;">
            <div class="sb-center">
                <p>Comments</p>
                <button type="submit" class="submitcomment" onclick="addcomments(this)"
                    id="Add-comments">Add comments</button>
            </div>
            <input type="text" class="addcontent" id="addcontent">
            <hr>
            <div class="actuallcomments">
    
            </div>
            <div style="display:none;">${index+3}</div>
            <div style="display:none;">4</div>
        </div>
    </div>`
    })
    addingdiv.innerHTML = html

    let feedpost=document.querySelector(".clo1")

    feedpost.appendChild(addingdiv)
    
}
var num = document.getElementById("noofpost")
var parentnum = document.getElementById("noofpostfinder")
//no of post finder
console.log(parentnum.children.length)
if((parentnum.children.length+i-1)<0){
num.innerText =0
}
else{
    num.innerText  =parentnum.children.length+i-1
}
function hidesection(t){
    username=localStorage.getItem("currentuser")
    greycomment=t.parentNode.parentNode.parentNode.children[1]
    image=t.parentNode.parentNode.parentNode.children[0].children[0]
    console.log(image)
    dim2=greycomment
    const dim3 = dim2.children
    const text = dim3[4].innerText
    showcomments(dim3[3], text ,v)
    console.log("hiding")
    var v=1
    showcomments(dim3[3], text,v)
    console.log(greycomment.style.display)
    if(greycomment.style.display=="none"){
        console.log("hiding")
        t.style.color="magenta"
        greycomment.style.display="flex"
        image.style.width="30vw"
        image.style.hight="60vw"
        console.log(image.parentNode)
        image.parentNode.parentNode.style.height="135vh"

    }
    else{
        t.style.color="white"
        greycomment.style.display="none"
        image.style.width="50vw"
        image.style.height="auto"
        image.parentNode.style.height="200vh"
    }
}
function logout(){
    window.location.href="login.html"
}
function limitcoment(ele1,ele2,ele3){
    ele2+=1
    console.log("cumming bro")
    console.log(ele2)
    localStorage.setItem(`user${ele1}${ele3}`,JSON.stringify(ele2))
}
function gotosetting(){
    window.location.href="setting.html"
}
function like(ele){
    if(ele.style.color=="white"){
        ele.style.color="magenta"
    }
    else{
        ele.style.color="white"
    }
}