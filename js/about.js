var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;        
        panel.style.margin = "0";
        this.style.backgroundColor = "#65afa9";
        this.style.color = "#fff";
    } else {
        panel.style.maxHeight = panel.scrollHeight+200 + "px";
        panel.style.margin = "20px 30px";
        this.style.backgroundColor = "#fff";
        this.style.color = "#124854";
    }
  });
}

let listul = document.getElementById("listul");
let listicon = document.getElementById("listicon");
let header = document.getElementById("header");

listicon.onclick = function(){
    if (listul.style.display == "flex"){
        listul.style.display = "none";
        listul.style.paddingTop = "0px";
    } else {
        listul.style.display = "flex";
        listul.style.paddingTop = "10px";
    }
}