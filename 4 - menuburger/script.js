
// 1. Je recupere le burger
const burger = document.querySelector(".burger");
console.log(burger);
// 2. Je recupere la fenetre modal
const modal = document.querySelector(".modal");
console.log(modal);
 // J'écoute l'événement Click sur le Bouton Burger
 burger.addEventListener("click", () =>{
    modal.classList.toggle("show-modal");
    burger.classList.toggle("show-modal");
     // Je change l'icône du burger
    if (burger.classList.contains("show-modal")) {
        burger.classList.replace("fa-bars", "fa-times"); 
    } else {
        burger.classList.replace("fa-times", "fa-bars"); 
    }
});