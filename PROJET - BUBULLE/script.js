const cptElement = document.querySelector("h3");
let cpt = 0;

const genererBulle = () => {
  const bulle = document.createElement("span");
  bulle.classList.add("bulle");
  document.body.appendChild(bulle);

  const size = 100 + Math.random() * 200;
  bulle.style.width = size + "px";
  bulle.style.height = size + "px";

  bulle.style.top = 50 + Math.random() * 100 + "%";
  bulle.style.left = Math.random() * 100 + "%";

  bulle.style.setProperty("--left", Math.random() * 100 + "%");

  bulle.addEventListener("click", () => {
    cpt++; // increment : cpt = cpt + 1
    cptElement.textContent = cpt;
    bulle.remove();
  });
  setTimeout(() => {
    bulle.remove();
  }, 4000);
};

setInterval(genererBulle, 500);
