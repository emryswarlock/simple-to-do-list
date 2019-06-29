
// get the element
var input = document.getElementById("input");
var button = document.getElementById("button");
var ul = document.querySelector("ul");



function inputLength() {
    return input.value.length;
}

function createList() {

    var label = document.createElement("label");
    label.innerHTML = input.value;
    label.onclick = doneFunction;

    var chcklst = document.createElement("button");
    chcklst.innerHTML = '✔';
    chcklst.onclick = doneFunction;

    var delb = document.createElement("button");
    delb.innerHTML = "❌";
    delb.onclick = removeParentList;

    var li = document.createElement("li");
    li.appendChild(label);
    li.appendChild(chcklst);
    li.appendChild(delb);
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


// if user clicked on list item so it will correct
var labelList = document.querySelectorAll("li label");
// if checklist button click so the list item also will be correction
var checklistButton  = document.querySelectorAll("li button.checklist ");

for (let i = 0; i < labelList.length; i++) { // it is for a couple first list item
    const element = labelList[i];
    element.addEventListener("click",doneFunction);
    const check = checklistButton[i];
    check.addEventListener("click",doneFunction);
}

function doneFunction(event){
    console.log(event.target.parentElement.querySelector("label").classList.toggle("done")); // add class "done" to label.
}


// if delte button clicked, the list item will be removing
var deleteButton = document.querySelectorAll("li button.delete");
for (let ii = 0; ii < deleteButton.length; ii++) {
    const element = deleteButton[ii];
    element.addEventListener("click",removeParentList); // add a click triger
}

function removeParentList(event) {
    console.log(event.target.parentElement.remove()); // remove list item
}


