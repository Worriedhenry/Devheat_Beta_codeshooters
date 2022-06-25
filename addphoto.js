 //Function for adding photo to local storage
function addphototolocal() {
    const caption = document.querySelector(".inputphotocaption")
    const addphoto = document.querySelector("#addedphoto")
    console.log(addphoto.value)
    let user = localStorage.getItem('currentuser')
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    if (localStorage.getItem("newimage") == null) {
        stroingimage = []
    }
    else {
        stroingimage = JSON.parse(localStorage.getItem("newimage"))
    }
    if (caption.value == "" && addphoto.value == "") {
        alert("enter at least one field")
        console.log("if")
    }
    
    else {
        console.log("else")
        let temp = addphoto
        console.log(temp.files)
        const reader = new FileReader()

        reader.addEventListener('load', () => {
            console.log(reader.result)
            console.log(reader.result)
            stroingimage.push([reader.result, caption.value, user,today])
            localStorage.setItem("newimage", JSON.stringify(stroingimage))
        })
        // localStorage.setItem("newimage",JSON.stringify([reader.result,caption.value]))
        // document.querySelector(".appliednotice").style.display="flex"
        reader.readAsDataURL(temp.files[0])
        setTimeout(() => {
            // document.querySelector(".appliednotice").style.display="none"
            //     window.location.href="setting.html"
            window.location.href="feed.html"
        }, 1000);


    }
}
//Function for backtofeed
function backtofeed(){
    window.location.href = "feed.html"
}