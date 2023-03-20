const accordionContent = document.querySelectorAll(".accordion_content");

accordionContent.forEach((item,index) => {
    let title = item.querySelector(".title");
    title.addEventListener("click",()=>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if (item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`;
            description.style.margin = "20px 30px";
            title.style.backgroundColor = "#fff";
            title.style.color = "#124854";
        }else{
            description.style.height = "0";
            description.style.margin = "0";
            title.style.backgroundColor = "#65afa9";
            title.style.color = "#fff";
        }
    })
})