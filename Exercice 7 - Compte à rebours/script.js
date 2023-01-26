const form = document.querySelector("form");
let displayMinutes = 0;
let displaySeconds = 0;
let timeoutID;
const displayTime = (sec) => {
  if (sec) {
    displayMinutes = Math.floor(sec / 60);
    displaySeconds = sec % 60;
    minuteSpan.innerHTML = displayMinutes;
    secondeSpan.innerHTML = displaySeconds;
    sec--;
    timeoutID = setTimeout(() => {
      displayTime(sec);
    }, 1000);
  } else {
    minuteSpan.innerHTML = "";
    secondeSpan.innerHTML = "";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearTimeout(timeoutID);
  let totalMinutes = minuteInput.value;
  let totalSecondes = totalMinutes * 60;
  displayTime(totalSecondes);
});
