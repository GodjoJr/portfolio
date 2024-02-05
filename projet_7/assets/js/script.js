// AVANT CE PROJET JE N'AVAIS JAMAIS TOUCHÉ À JS C'EST POURQUOI J'AI DU SUIVRE CE TUTO (https://www.youtube.com/watch?v=EN1EZVspMOQ)
// POUR POUVOIR RÉALISER LE PREMIER CARROUSEL. LE CODE EST SIMILAIRE CAR J'AI SUIVI LE TUTO CEPENDANT J'AI COMPRIS CE QUE FAISAIT CHAQUE LIGNE.
// MERCI DE VOTRE COMPRÉHENSION.



// CAROUSEL SECTION 1

// créé une variable pour récupérer les boutons
const buttons = document.querySelectorAll(".btn-carousel");
// créé une variable pour récupérer les images du carrousel
const slides = document.querySelectorAll(".slide");


// pour chaque boutons, on ajoute un évènement e lorsque l'on clique dessus.
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // on récupère l'id du bouton cliqué
    const calcNextSlide = e.target.id === "next" ? 1 : -1;
    // on récupère l'image ayant la classe "active"
    const slideActive = document.querySelector(".active");

    // on calcule l'index de l'image avec la classe "active"
    newIndex = calcNextSlide + [...slides].indexOf(slideActive);


    // on gère les erreurs si l'index est négatif ou supérieur au nombre d'images
    if (newIndex < 0) newIndex = [...slides].length - 1;
    if (newIndex >= [...slides].length) newIndex = 0;

    // on ajoute la classe "active" à l'image correspondante
    slides[newIndex].classList.add("active");

    // on enlève la classe "active" à l'image précédente
    slideActive.classList.remove("active");
  });
});




// SLIDER SECTION 6 - tuto (https://www.youtube.com/watch?v=7HPsdVQhpRw)


// crée une variable pour récupérer le slider
const galerie = document.querySelector(".galerie-slider");


// crée une variable pour récupérer la première image du slider
firstImg = galerie.querySelectorAll(".card")[0];
// crée une variable pour récupérer la dernière image du slider
lastImg = galerie.querySelectorAll(".card")[galerie.querySelectorAll(".card").length - 1];

// crée une variable pour récupérer les flèches du slider
arrowIcons = document.querySelectorAll(".btn-slider")

// défini la situation de base du slider
let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 20;
if (galerie.scrollLeft === 0) arrowIcons[0].classList.add("end");


// ajoute un évènement au clic sur les flèches
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // si l'icone cliquée est la flèche de gauche, on déplace le slider vers la gauche, sinon vers la droite
    galerie.scrollLeft += icon.id == "prev-slide" ? -firstImgWidth : firstImgWidth;


    // j'ai essayé, à l'aide du code du carrousel d'avant (et de longues recherches sur internet), de trouver une méthode pour changer  
    // la couleur des boutons lorsque l'on arrive au début ou à la fin du slider. Cela fonctionne à peu près mais n'ayant aucune 
    // connaissance en javascript j'éspère que ce bout de code ne vous donnera pas trop envie de vous arracher les cheveux.
    if (galerie.scrollLeft <= 0) {
      document.getElementById("prev-slide").classList.add("end");
    } else {
      document.getElementById("prev-slide").classList.remove("end");
    }
    if (galerie.scrollLeft >= 1200) {
      document.getElementById("next-slide").classList.add("end");
    } else {
      document.getElementById("next-slide").classList.remove("end");
    }
  });
});


// crée une fonction pour gérer le déplacement du slider lors d'un clic
const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = galerie.scrollLeft;
}


// crée une fonction pour gérer le déplacement du slider pendant le clic
const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  galerie.scrollLeft = prevScrollLeft - positionDiff;
}


// crée une fonction pour gérer le déplacement du slider lors d'un relachement
const dragStop = () => {
  isDragStart = false;
}

// crée 3 fonctions pour quand on clique, on se déplace et on relache le slider
galerie.addEventListener("mousedown", dragStart);
galerie.addEventListener("mousemove", dragging);
galerie.addEventListener("mouseup", dragStop);



