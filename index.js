var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1 = 1 + Math.floor(randomNumber1);

var b = "dice"+randomNumber1+".png";
var c = "./images/"+b;

var image1 = document.querySelectorAll("img")[0]; //selects the first img1 image as img is tag and 0 indicates the index 

image1.setAttribute("src", c);// this changes the attribute of src to c which means now the random image will be shown 

var randomNumber2=Math.floor(Math.random()*6)+1;

var c1="./images/dice"+randomNumber2+".png";

var image2= document.querySelectorAll("img")[1].setAttribute("src", c1);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Yayy Player 1 Wins!!!";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML="Yayy Player 2 Wins!!!";
}
else
{
    document.querySelector("h1").innerHTML="Draw !!!";
}