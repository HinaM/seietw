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