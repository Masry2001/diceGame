var number1 = Math.ceil(Math.random() * 6); // a number between 1 and 6
var number2 = Math.ceil(Math.random() * 6);
var randomImage1 = "images/dice" + number1 + ".png";
var randomImage2 = "images/dice" + number2 + ".png";
document.querySelector(".special1").setAttribute("src", randomImage1);
document.querySelector(".special2").setAttribute("src", randomImage2);

if (number1 === number2) {
    document.querySelector("h1").innerHTML = "Draw, play again";

} else if (number1 > number2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";

} else {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}

let reloadButton = document.getElementById("reloadButton");
reloadButton.addEventListener("click", function () {
    location.reload();
});