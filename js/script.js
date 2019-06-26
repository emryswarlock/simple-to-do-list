
// get the element
var input = document.getElementById("input");
var button = document.getElementById("button");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createList() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

// function for click
function click() {
    if(inputLength() > 0 ){
        createList();
    }
}

// function for enter pressed
function pressEnter(event) {
    if (inputLength() > 0 && event.which === 13) {    
        createList();
    }
}

// if button entered so make a new list item
button.addEventListener("click", click);

// if user press enter , it also will mak a new list item
input.addEventListener("keypress",pressEnter);