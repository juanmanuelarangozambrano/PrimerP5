/* eslint-disable no-undef, no-unused-vars */
let indice = 0;
const MENSAJE = "Arango";
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2);

  // Put setup code here
}

//const foo = "bar";
function draw() {
  background(0, 0, 0);
  // Put drawings here
  fill(234, 31, 81);
  noStroke();
  rect(50, 50, 250, 250);
  fill(255);
  textStyle(BOLD);
  textSize(50);
  indice++;
  text(MENSAJE + indice, 60, 250);
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
