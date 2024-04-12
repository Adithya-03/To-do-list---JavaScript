let button = document.getElementById("button-addon2");
let containerbox = document.querySelector(".list");
let inputbox = document.getElementById("inputbox");






button.addEventListener("click", addfunction => {
    let li = document.createElement("li");
        li.innerText = inputbox.value
        containerbox.appendChild(li); 
        inputbox.value = " ";
        console.log(li)
        let span = document.createElement("span");
        span.innerHTML = " \u00d7"
        li.appendChild(span); 
        li.addEventListener("click",function (){
            li.style.textDecoration = "line-through"
        
        
        })
        span.addEventListener("dblclick",function (){
            containerbox.removeChild(li); 
        })
})


