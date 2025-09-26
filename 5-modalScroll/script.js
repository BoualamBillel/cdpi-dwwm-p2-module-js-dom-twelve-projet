/**
 * removeEventListener
 * Scroll Event
 */

// 1. Je recupere la section à partir de laquelle je veux faire apparaite la modale
const section3 = document.querySelector(".three");
// Je récupère la position de la section 3
const positionSection3 = section3.offsetTop;
console.log("Position de la section 3 : " + positionSection3);
// Je récupère la position du haut de la page (ViewPort)
const ViewPort = ()=>document.documentElement.scrollTop; // Transformation en fonction (Programmation réactive)
console.log("Position du ViewPort : " + ViewPort);

// 2. Je recupere la modale
const modal = document.querySelector(".modal");
// 3. Je recupere le bouton quitter de la modale
const modalQuit = document.querySelector(".modal-quit");
console.log(modalQuit);

// 4. Je lance la fonction onScrollDisplayModal sur l'evenement scroll de la fenetre
window.addEventListener("scroll",onScrollDisplayModal);

// 5. Je fais disparaite la modale au clique sur la croix
modalQuit.addEventListener("click",function(){
    // ...
    modal.style.display = "none";
    window.removeEventListener("scroll",onScrollDisplayModal);
});

/**
 *  Fonction à passer en parametre de addEventListener("scroll",function)
 *  Obligatoire pour pouvoir utiliser removeEventListener(function)
 */
function onScrollDisplayModal(){
    console.log("Ouiiii je scroollll");
    if (ViewPort() >= positionSection3){
        modal.classList.add("container");
    }


}
