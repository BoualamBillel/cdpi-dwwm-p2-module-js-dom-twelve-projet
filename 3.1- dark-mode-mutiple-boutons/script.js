
//1. Je recupere tout les switchs
const switchElems = document.querySelectorAll(".switch"); 

//2. Je recupere tout les elements html de ma page
const allElem = document.querySelectorAll("*");

// Récupération du bouton
const btnStatus = document.querySelector(".btn");

// J'écoute l'événement Click sur le bouton
btnStatus.addEventListener("click", () => {
//3. Je parcours tout les switchs:
switchElems.forEach(element => {
    element.classList.toggle("darkmode");
});
})
