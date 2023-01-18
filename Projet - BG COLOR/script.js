// let elementh2 = document.querySelector("h2");
const changeColor = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  // const bgcolor = "rgb(" + r + "," + g + "," + b + ")";
  const bgcolor = `rgb(  ${r} , ${g} , ${b} )`;

  document.body.style.background = bgcolor;
  //   elementh2.innerHTML = bgcolor;
  document.body.innerHTML = `<h2>${bgcolor}</h2>`;
};

setInterval(changeColor, 1000);
