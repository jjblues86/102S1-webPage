'use strict';

//Prompt window
var name = prompt("Please enter your name  ", "");

if(name != null) {
  document.getElementById("welcome").innerHTML = "Hello " + name + " How is it going?";
}


//Confirm window
function response() {
  confirm("You're Wonderful :)")
}

//Math random

// var random = document.getElementById('math').innerHTML;
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


