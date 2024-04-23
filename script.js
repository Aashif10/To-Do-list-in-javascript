let input=document.getElementById("input");
let list=document.getElementById("list");
let button=document.getElementById("button");

let span=document.getElementsByTagName("span")

button.addEventListener("click",function(){
    if(input.value=="")
    {
        alert("Add your task please!");
    }
    else{
    let task=document.createElement("li");
    task.textContent=input.value
    list.appendChild(task)

    let span=document.createElement("span");
    span.textContent='\u00d7';
    task.appendChild(span);
    }
    input.value=''
    saveData()
});

    list.addEventListener("click",function(e){
        if(e.target.tagName=="SPAN")
              e.target.parentElement.remove();
            saveData()
    })
    function saveData(){
        localStorage.setItem("task",list.innerHTML)

    }

    function showData(){
        list.innerHTML=localStorage.getItem("task")
    }
    showData()  
