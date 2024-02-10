const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// const button = document.getElementById("");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    //keeps task crossed out
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    //deletes task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//saving so when we leave, it will stay
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//this displays the data whenever we open the website again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
