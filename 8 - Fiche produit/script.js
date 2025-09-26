/**
 * let
 * element.getAttribute()
 * element.setAttribute()
 * ++ operator
 * operateur ternaire
 */

// 1. Je recupere toutes les petites vignettes
const vignettes = document.querySelectorAll(".small");
// 2. Je recupere la grande photo
const fullImg = document.getElementById("full");

// 3. Je recupere le bouton AJOUTER
const btnAdd = document.querySelector(".btn-add");

// 4. Je recupere la balise vide de message d'ajout du panier
const panierMsg = document.querySelector(".panier-msg");
// 5. Je crée une variable qui contient le nombre de produits ajoutées ua panier
let panier = 0;
// J'écoute l"événement Click sur le bouton Ajouter
btnAdd.addEventListener("click", () => {
    panier++; // J'incrémente la valeur de panier à chaque click
    panierMsg.innerText = "Vous avez " + panier + " produits dans votre panier.";
})
// J'écoute l'événement Click sur les vignettes
vignettes.forEach(vignette => {
    vignette.addEventListener("click", () => {
        const srcImgVignette = vignette.getAttribute("src");
        const srcImgFullImg = fullImg.getAttribute("src");
        fullImg.setAttribute("src", srcImgVignette);
        vignette.setAttribute("src", srcImgFullImg);
        console.log(srcImgVignette);
    })


})

// ...