const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const cercles = document.querySelectorAll(".cercle")
const leftSpan = document.querySelector(".leftSpan");
const topSpan = document.querySelector(".topSpan");

window.addEventListener("mousemove",(e)=>{
    //Permet afficher coordonnées souris dans les deux span
    leftSpan.innerHTML = e.x;
    topSpan.innerHTML = e.y;

    //Permet afficher coordonnées souris dans la console.
    // console.log(e.x,e.y);

    //Methode 1
    // c1.style.left= e.x + "px";
    // c1.style.top= e.y + "px";
    // c2.style.left= e.x + "px";
    // c2.style.top= e.y + "px";
    // c3.style.left= e.x + "px";
    // c3.style.top= e.y + "px";

    //Methode 2
    cercles.forEach(c => {
        c.style.left = e.x + "px";
        c.style.top = e.y + "px";
    });
});