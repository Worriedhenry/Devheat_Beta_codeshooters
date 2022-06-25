 backtofeed
function addphoto() {
    window.location.href = "addphoto.html"
}
// restriction display
let resdisplay=document.getElementById("openrestriction")
var swap=0
function displayres(){
if(swap%2==0){
    document.getElementById("res").style.display="flex"
    swap+=1
}
else{
    document.getElementById("res").style.display="none"
    swap+=1
}}
function settinglimit(){
    const conf=confirm("do you want to change Reaction restriction")
    if(conf==true){
        if(document.getElementById("limit").value!=null){
            localStorage.setItem("limitsetted",document.getElementById("limit").value)
            swap=0
            document.querySelector(".appliednotice").style.display="flex"
            setTimeout(() => {
                document.querySelector(".appliednotice").style.display="none"
                window.location.href="setting.html"
            }, 1000);
        }
    }
}
function changename(ele){
    currentuser=localStorage.getItem("currentuser")
    let parent=ele.parentNode.parentNode
    console.log(parent.children[1])
    console.log(JSON.parse(localStorage.getItem(currentuser)))
    const confo=confirm("Do you want change name?")
    if(confo==true){
        // console.log(JSON.parse(localStorage.getItem(currentuser)))
        let array=JSON.parse(localStorage.getItem(currentuser))
        array[1]=parent.children[1].value
        localStorage.setItem(currentuser,JSON.stringify(array))
        document.querySelector(".appliednotice").style.display="flex"
        setTimeout(() => {
            document.querySelector(".appliednotice").style.display="none"
            window.location.href="setting.html"
            }, 1000);
    }
}
function changeans(){
    const oldans=document.getElementById("anseditorold").value
    currentuser=localStorage.getItem("currentuser")
    actuallans=JSON.parse(localStorage.getItem(currentuser))[4]
    newans=document.getElementById("anseditornew")
    console.log(currentuser,actuallans,"one",newans,oldans)
    if(actuallans==oldans){
         console.log("running")
        JSON.parse(localStorage.getItem(currentuser))[4]=newans
        document.querySelector(".appliednotice").style.display="flex"
        setTimeout(() => {
            document.querySelector(".appliednotice").style.display="none"
            window.location.href="setting.html"
            }, 1000);
     }
     
}
function backtofeed(){
    window.location.href = "feed.html"
}