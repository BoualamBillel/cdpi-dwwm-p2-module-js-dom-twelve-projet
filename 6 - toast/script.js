/**
 * document.createElement()
 * element.classList.add()
 * element.innerHTML
 * elemParent.appendChild(elemEnfant)
 * element.remove()
 * setTimeout()
 */

// 1. Je recupere le bouton Enregistrer
const btn = document.querySelector("button");
// 2. Je recupere le conteneur de toasts
const ctnToasts = document.querySelector(".container-toasts");
console.log(ctnToasts);
// J'ecoute l'événement Click sur le Bouton Enregister
btn.addEventListener("click", () => {
    const toast_div = document.createElement("div"); // Je crée la div toast 
    const pTag_element = document.createElement("p"); // Je crée un paragraphe
    toast_div.className = ("toast"); // J'assigne une classe à la div
    toast_div.classList.add("text-content"); // Ajout de la classe text-content dans la div toast
    pTag_element.innerText = "Votre fichier est enregistré !";
    ctnToasts.appendChild(toast_div); // J'insère la div toast dans le conteneur toasts
    toast_div.appendChild(pTag_element); // J'insère le paragraphe dans la div toast

    // j'ecoute l'événement Click sur la div toast
    toast_div.addEventListener("click", () => {
        toast_div.classList.add("fade-out"); // Transition en fade out pour faire disparaitre la div
        setTimeout(() => { toast_div.remove(); }, 600); // Suppression de la div dans le html
    });

});

