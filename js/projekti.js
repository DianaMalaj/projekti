console.log("hello")
// show hide paragraf

let paragraf = document.getElementsByClassName("newPara")[0];
let buttonShowHide = document.getElementsByClassName("showHide")[0];
console.log(buttonShowHide)
buttonShowHide.addEventListener("click", function () {
    if(paragraf.style.display == "none") {
        paragraf.style.display="block";  
    
} else {
    paragraf.style.display="none"
}
}
)
/*<p>*/

//year
document.getElementById("year").textContent= new Date().getFullYear()
