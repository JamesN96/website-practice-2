// DOM ELEMENTS
let drinkTab = document.getElementById("drink-tab");
let drinkMenu = document.getElementById("drink");
let eatTab = document.getElementById("eat-tab");
let eatMenu = document.getElementById("food");


// EventListeners

let drinkButton = () => {
    drinkMenu.classList.toggle("hide");
    eatMenu.classList.toggle("hide");
    drinkTab.classList.toggle("current");
    eatTab.classList.toggle("current");

}

let foodButton = () => {
    drinkMenu.classList.toggle("hide");
    eatMenu.classList.toggle("hide");
    drinkTab.classList.toggle("current");
    eatTab.classList.toggle("current");

}

drinkTab.addEventListener('click', drinkButton);
eatTab.addEventListener('click', foodButton);

