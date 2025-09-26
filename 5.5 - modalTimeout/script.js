
// 1. Je recupere la modale
const modal = document.querySelector(".modal");
// 2. Je recupere le bouton quitter de la modale
const modalQuit = document.querySelector(".modal-quit");
console.log(modalQuit);

// 3. Je fais disparaite la modale au clique sur la croix
modalQuit.addEventListener("click", function () {
    // ...
    modal.style.display = "none";
});

// Affichage du Modal
function displayModal() {

    modal.style.display = "flex";

}
// Après 3sec de délai
setTimeout(displayModal, 3000);
