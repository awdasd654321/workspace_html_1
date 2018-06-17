var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

var myImage = document.querySelector("img");

myImage.onclick = function() {
  var myScr = myImage.getAttribute("src");
  if (myScr === "images/lenna.png") {
    myImage.setAttribute("src", "images/anime1.jpg");
  } else {
    myImage.setAttribute("src", "images/lenna.png");
  }
};
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}