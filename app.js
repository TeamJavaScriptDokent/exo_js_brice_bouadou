var div = document.getElementById("myDiv");

alert(div);

var divs = document.getElementsByTagName("div");

for (var i = 0, c = divs.length; i < c; i++) {
    alert("Element n° " + (i + 1) + " : " + divs[i]);
}


var query = document.querySelector("#menu .item span"),
queryAll = document.querySelectorAll("#menu .item span");
alert(query.innerHTML);
alert(queryAll.length);
alert(queryAll[0].innerHTML + ' - ' + queryAll[1].innerHTML);


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