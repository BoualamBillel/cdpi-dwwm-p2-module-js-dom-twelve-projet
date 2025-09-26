/*
Nouvelles compétences:
- querySelector // Selectionne le premier element seulement mieux que getElementsBy
- HTMLElement.style 
*/

// 1. Je recupere le bouton "Accepter les cookies"*
const acceptCookies_btn = document.body.querySelector(".btn-accept")
console.log(acceptCookies_btn)

// 2. Je recupere la banniere de cookies
const cookies_banner = document.body.querySelector(".cookies")
console.log(cookies_banner)

// 3. J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"
acceptCookies_btn.addEventListener("click", () => {
    cookies_banner.style.display = "none";
});
