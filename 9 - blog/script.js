/**
 * Template string `${}`
 * innerHTML ou template
 * += operator
 */

// 1. Je recupere le conteneur de publications
const postsContainer = document.querySelector(".posts");

// 2. Voici ma base de données factise 
const posts =
    [
        {
            titre: "SEO, les bonnes pratiques",
            hashtag: "#SEO",
            link: "#",
            extrait: "Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
        },
        {
            titre: "Bien, les bonnes pratiques",
            hashtag: "#JS",
            link: "#",
            extrait: "Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
        },
        {
            titre: "Content, les bonnes pratiques",
            hashtag: "#PHP",
            link: "#",
            extrait: "Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
        }
    ];

// 3. Je parcours la bdd
posts.forEach(function (post) {
    // Je crée mes divs
    const divTitre_element = document.createElement("div");
    divTitre_element.className = "post-titre";

    const divExtrait_element = document.createElement("div");
    divExtrait_element.className = "post-extrait";

    const divHastag_element = document.createElement("div");
    divHastag_element.className = "post-hashtag";

    // 4. Je créer un nouveau post dans le conteneur de post pour chaque post de la BDD
    const title_element = document.createElement("a"); // Je crée la balise a pour le titre
    const extrait_element = document.createElement("p"); // Je crée la balise p pour l'extrait
    title_element.innerText = post['titre']; // J'insère le texte dans l'élément
    extrait_element.innerText = post['extrait']; // J'insère le texte dans l'élément
    title_element.setAttribute('href' , post['link']);

    // J'insère dans les divs
    divTitre_element.appendChild(title_element);
    divExtrait_element.appendChild(extrait_element);
    divHastag_element.innerText = (post['hashtag'])

    // 5. Je l'ajoute dans le conteneur de publication
    postsContainer.appendChild(divTitre_element);
    postsContainer.appendChild(divExtrait_element);
    postsContainer.appendChild(divHastag_element);
});