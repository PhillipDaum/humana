/* creates typing effect */

var i = 0;
var speed = 50; 
var txt = "death, the final frontier?";

function eyeLiner() {
  if (i < txt.length) {
    document.getElementById("headline").innerHTML += txt.charAt(i);
    i++;
    setTimeout(eyeLiner, speed);
  }
}

