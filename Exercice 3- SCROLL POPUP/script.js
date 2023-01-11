let popopen = true;
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.style.height = "50px";
  } else {
    navbar.style.height = "90px";
  }

  let scrollPercent =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  //   console.log(scrollPercent);
  if (scrollPercent > 0.4) {
    imgImprovise.style.opacity = 1;
  }

  if (scrollPercent > 0.8 && popopen == true) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(400px)";
  popopen = false;
});
