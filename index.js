var val1 = Math.random();
var val2 = Math.random();
val1 = Math.floor(val1*6)+1;
val2 = Math.floor(val2*6)+1;
if(val1===val2){
    document.querySelector("h1").innerHTML = "Draw";

}
else if(val1>val2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 wins";
}

var image1 = "dice" + val1 + ".png";
var image1loc = "images/" + image1;
var image2 = "dice" + val2 + ".png";
var image2loc = "images/" + image2;
document.querySelectorAll("img")[0].setAttribute("src",image1loc);
document.querySelectorAll("img")[1].setAttribute("src",image2loc);

