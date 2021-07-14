// DOM ELEMENTS
let drinkTab = document.getElementById("drink-tab");
let drinkMenu = document.getElementById("drink");
let eatTab = document.getElementById("eat-tab");
let eatMenu = document.getElementById("food");


// EventListeners
// let openMenu = () => drinkMenu.classList.toggle("hide");
// let closeMenu = () => eatMenu.classList.toggle("show")
// drinkTab.addEventListener('click', openMenu);
// drinkTab.addEventListener('click', closeMenu);

let drinkButton = () => {
    drinkMenu.classList.toggle("hide");
    eatMenu.classList.toggle("hide");
}

let foodButton = () => {
    drinkMenu.classList.toggle("hide");
    eatMenu.classList.toggle("hide");
}

drinkTab.addEventListener('click', drinkButton);
eatTab.addEventListener('click', foodButton);

