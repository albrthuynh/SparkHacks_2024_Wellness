
var user_1 = prompt("What's your name?");
var answerElement = document.getElementById("answer")
answerElement.innerText = user_1;

document.body.innerHTML = "<h1> Hello! " + user_1 + "</h1>"