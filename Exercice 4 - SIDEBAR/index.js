const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".content");

// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus
// let btnActive = false;
btn.addEventListener("click", () => {
  //Methode 1 :
  //   if (btnActive == false) {
  //     sidebar.classList.add("active");
  //     btnActive = true;
  //   } else {
  //     sidebar.classList.remove("active");
  //     btnActive = false;
  //   }
  // Methode 2:
  sidebar.classList.toggle("active");
});
// Ranger la sidebar si on click sur le contenu principal
content.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
