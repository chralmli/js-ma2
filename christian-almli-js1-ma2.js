// question 1
// my answer for question 1

const myFunctionExpression = function() {
    console.log("Christian Almli");
};

// question 2
// my answer for question 2
const myButton = document.querySelector(".btn");

function callAfterButtonClick() {
    console.log("I was clicked");
};

myButton.addEventListener("click", callAfterButtonClick);

// question 3
// my answer for question 3
const inputFirstName = document.querySelector("#firstName");

function callAfterAKeyIsPressed() {
    console.log("A key was pressed");
};

inputFirstname.addEventListener("keydown", callAfterAKeyIsPressed);

// question 4
// my answer for question 4
const animalButton = document.querySelector("button");

function callOnHover() {
    console.log("The cursor moved over the button");
};

animalButton.addEventListener("mouseover", callOnHover);

// question 5
// my answer for question 5
const animalButton = document.querySelector("[data-animal='dog']");

function callAfterMouseMovesOff() {
    console.log("The cursor moved off the button");
}

animalButton.removeEventListener("mouseover", callOnHover);

// question 6
// my answer for question 6
const lists = document.querySelectorAll("li");

for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener("mouseover", callOnMouseHover);
}

function callOnMouseHover() {
    console.log("The cursor moved over one of the list elements");
}

// question 7
// my answer for question 7
switch (animal) {
    case "cat":
        console.log("Meow");
        break;

    case "cow":
        console.log("Moo");
        break;
    
    case "cat":
        console.log("Tweet");
        break;

    default:
        console.log("Harrumph");
}

// question 8
// my answer for question 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheep) {
    console.log(sheep);
});

function eachSheep(sheep) {
    console.log(sheep);
}

sheep.forEach(eachSheep);

// question 9
// my answer for question 9
function logHello() {
    console.log(hello());

    if(counter === 5) {
        clearInterval(intervalId);
    }

    counter++;

}

let counter = 0;

const intervalId = setInterval(logHello, 500);

setInterval(logHello, 500);

// question 10
// my answer for question 10
