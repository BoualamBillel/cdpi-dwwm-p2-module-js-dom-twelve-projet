/*
Nouvelles compétences:
 - Font awesome
 - type Boolean
 - if else
 - HTMLElement.classList
    - toggle Inverse l'etat de la classe : present ou pas
    * add
    * remove
    * replace
*/

// 1. Je recupere l'icone smiley
const smiley_elem = document.querySelector("#emoji");

// 2. Je recupere le bouton ABONNER
const subBtn_elem = document.querySelector(".btn-sub");

// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur
let isSub_bool = false;

// 4. J'ecoute le clique sur l'icone smiley
smiley_elem.addEventListener("click", (event) => {
    event.target.classList.remove("fa-face-meh");
    event.target.classList.add("fa-thumbs-up");

});

// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ
subBtn_elem.addEventListener("click", (event) => {
    // subBtn_elem.innerText = "Abonné";
    event.target.innerText = "Abonné";
    isSub_bool = true;
    console.log(isSub_bool);


});