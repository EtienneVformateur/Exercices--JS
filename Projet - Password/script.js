const listeMinuscule = "azertyuiopqsdfghjklmwxcvbn";
const listeMajuscule = listeMinuscule.toUpperCase();
const listeNombre = "0123456789";
const listeSymbols = ",;:@!?ç";
let data = [];
let password = "";

const genererMdp = () => {
  data = [];
  password = "";
  //SI MINUSCULE EST COCHE
  if (minuscule.checked) {
    //ALORS J'AJOUTE DANS DATA CHAQUE LETTRE MINUSCULE
    for (let index = 0; index < listeMinuscule.length; index++) {
      data.push(listeMinuscule[index]);
    }
  }
  if (majuscule.checked) {
    for (let index = 0; index < listeMajuscule.length; index++) {
      data.push(listeMajuscule[index]);
    }
  }
  if (nombre.checked) {
    for (let index = 0; index < listeNombre.length; index++) {
      data.push(listeNombre[index]);
    }
  }
  if (symbole.checked) {
    for (let index = 0; index < listeSymbols.length; index++) {
      data.push(listeSymbols[index]);
    }
  }

  if (data.length == 0) {
    alert("Attention veuillez cocher au moins une case");
  } else {
    for (let index = 0; index < tailleMdp.value; index++) {
      password += data[Math.floor(Math.random() * data.length)];
    }
    displayMdp.textContent = password;
    // displayMdp.select();
    // document.execCommand("copy");
    navigator.clipboard.writeText(password);

    genererBouton.textContent = "Copié !";
    setTimeout(() => {
      genererBouton.textContent = "Générer mot de passe";
    }, 2000);
  }
};

genererBouton.addEventListener("click", genererMdp);
