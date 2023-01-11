// Créer un événément au scroll
// window.addEventListener("scroll",()=>{console.log(window.scrollY);});

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu
// window.addEventListener("scroll", () => {
//   if (scrollPrecedent < window.scrollY) {
//     console.log("JE DESCENDS");
//   } else {
//     console.log("JE MONTE");
//   }
//   scrollPrecedent = window.scrollY;
// });

// Cacher la navbar si l'utilisateur commence à descendre et la faire apparaître quand il remonte
// const nav = document.querySelector("#navbar");
// const nav = document.getElementById("navbar");
// console.log(navbar);
let scrollPrecedent = 0;
window.addEventListener("scroll", () => {
  if (scrollPrecedent < window.scrollY) {
    navbar.style.top = "-60px";
  } else {
    navbar.style.top = 0;
  }
  scrollPrecedent = window.scrollY;
});
