const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const meminfo_card1 = document.getElementById('meminfo-card1');
function meminfo1(){
    meminfo_card1.classList.add("open");
}
function meminfo1_close(){
    meminfo_card1.classList.remove("open");
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
