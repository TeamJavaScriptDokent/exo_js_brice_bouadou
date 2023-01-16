let p1 = document.getElementsByTagName("p");
let height = document.querySelector("#height");
let width = document.querySelector("#width");

function changeColor(color) { 
    document.getElementById('myID').style.backgroundColor = color;
}

p1[0].style.color = "#fff"; // Change la couleur du texte de l'élément à blanche
p1[0].style.backgroundColor = "#000"; // Change la couleur de fond de l'élément en noir
p1[0].style.fontWeight = "bold"; // Met le texte de l'élément en gras

window.addEventListener("resize", function(e) {
    height.textContent = document.documentElement.clientHeight;
    width.textContent = document.documentElement.clientWidth;
})