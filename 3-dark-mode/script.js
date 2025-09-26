/*
Nouvelles compétences:
- forEach
- querySelectorAll
*/

                            // SANS TOGGLE
// const switch_elem = document.querySelector(".switch");
// const icon_element = document.querySelector(".icon");

// // Variable booléenne pour l'état du mode sombre
// let isDarkModeEnabled = false;

// switch_elem.addEventListener("click", () => {
//     // Basculer l'état
//     isDarkModeEnabled = !isDarkModeEnabled;
    
//     console.log("Mode sombre activé :", isDarkModeEnabled);
    
//     if (isDarkModeEnabled) {
//         // Activer le mode sombre
//         document.body.classList.add("darkmode");
//         document.querySelector("section").classList.add("darkmode");
//         switch_elem.classList.add("darkmode");
//         document.querySelector(".btn").classList.add("darkmode");
//         icon_element.classList.add("darkmode");
        
//         // Changer l'icône vers la lune
//         icon_element.classList.remove("fa-sun");
//         icon_element.classList.add("fa-moon");
//     } else {
//         // Désactiver le mode sombre
//         document.body.classList.remove("darkmode");
//         document.querySelector("section").classList.remove("darkmode");
//         switch_elem.classList.remove("darkmode");
//         document.querySelector(".btn").classList.remove("darkmode");
//         icon_element.classList.remove("darkmode");
        
//         // Changer l'icône vers le soleil
//         icon_element.classList.remove("fa-moon");
//         icon_element.classList.add("fa-sun");
//     }
// });


                                    // AVEC TOGGLE
// Récupération de touts les éléments
const allElem = document.querySelectorAll("*");
console.log(allElem);
// Récupération du Bouton
const btnStatus = document.querySelector(".btn");
// Ecoute de l'événement Click sur le bouton
btnStatus.addEventListener("click", () => {
    allElem.forEach(element => {
        element.classList.toggle("darkmode");
    });
});


