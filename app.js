'use strict';

//Prompt window
var name = prompt("Please enter your name  ", "");
name = name.toUpperCase();
// name = toString.call(name);
// name = String();

if(name != null) {
  document.getElementById("welcome").innerHTML = "Hello " + name + " How is it going?";
 } else {
 prompt('you need to enter your name');
 }


//Confirm window
function response() {
  confirm("You're Wonderful :)")
}

//Math random
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18) {
  greeting = 'Good evening!';
} else if (hourNow > 12) {
  greeting = 'Good afternoon!';
} else if (hourNow > 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome';
}

document.write('<h3>' + greeting + '</h3>');


