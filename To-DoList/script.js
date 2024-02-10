//getting access to input box and toDoList box
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
var numCoins = 0; //for coins on main page
var counter= 0;

//adding the tasks onto list once user types and adds something 
function addTask(){
    //if they try to add something without putting text, don't add anything and output message
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    //else, add the user's text onto the list
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

//waiting for the page to load so we can update the coins and store them
document.addEventListener('DOMContentLoaded', function () {
    if (typeof(Storage) !== "undefined") {
      const coins = localStorage.getItem(numCoins); 
   
    }
});

//listening in for a click on ther star button
listContainer.addEventListener("click", function(e){
    //keeps task crossed out if star was clicked
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        counter++; //increment coins everytime task is crossed out
    
        localStorage.setItem("numCoins", counter); //setting numCoins equal to counter
        saveData(); //saving information into localStorage
    }
    //deletes task if user presses on x
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); //removes element
        saveData(); //saves the deletion
    }
}, false);

//saving so when we leave page, what we changed will stay
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//this displays the data whenever we open the website again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
