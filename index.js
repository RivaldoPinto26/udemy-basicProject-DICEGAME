/* player1 */
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
console.log(`randomNumber1: ${randomNumber1}`); //console
var randomImage1 = "./images/" + "dice" + randomNumber1 + ".png"
var image1 = document.getElementsByClassName("img1")[0].setAttribute("src", randomImage1);


/* player2 */
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6;
console.log(`randomNumber2: ${randomNumber2}`);//console
var randomImage2 = "./images/" + "dice" + randomNumber2 + ".png"
var image2 = document.getElementsByClassName("img2")[0].setAttribute("src", randomImage2);

/* statement for title, who is the winner */
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " 🚩 Player 1 Wins! ";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = " 🚩 Player 2 Wins! ";
} else {
  document.querySelector("h1").innerHTML = " Draw! ";
}



