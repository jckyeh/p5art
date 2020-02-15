// View here: file:///Users/jackyeh/repositories/tutorials/p5/empty-example/index.html

function setup() {
  // put setup code here
  
  createCanvas(640, 480);
  // print("Hello");
  background(220, 0, 0);
}

function draw() {
  // put drawing code here


  // draw ellipse
  noStroke();
  fill(255, 255, 255, 50);
  ellipse(mouseX, mouseY, 20, 20);
  
  // if (mouseIsPressed) {
  //   fill(0);
  // } else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);
}