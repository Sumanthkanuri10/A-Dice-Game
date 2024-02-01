var number1= Math.floor(Math.random()*6)+1;
var img1="dice"+number1+".png";
document.querySelectorAll("img")[0].setAttribute("src",img1);

var number2= Math.floor(Math.random()*6)+1;
var img2="dice"+number2+".png";
document.querySelectorAll("img")[1].setAttribute("src",img2);

if (number1>number2){
    document.querySelector("h1").innerHTML=" Player1 wins";
}
else if (number1>number2){
    document.querySelector("h1").innerHTML="Player2 Wins";

}
else {
    document.querySelector("h1").innerHTML="It is a Draw";
}
