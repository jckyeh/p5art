// View here: file:///Users/jackyeh/repositories/tutorials/p5/empty-example/index.html

function setup() {
  // put setup code here
  
  createCanvas(640, 480);
  // print("Hello");
  background(0, 0, 0);
}


function draw() {
  // put drawing code here
  
  // set background
  // let r = map(mouseX, 0, width, 0, 255)
  // let g = map(mouseY, 0, height, 0, 255)
  // background(r, g, 0);
  
  // draw ellipse
  noStroke();
  fill(255, 255, 255, 50);
  ellipse(mouseX, mouseY, 20, 20);

  // random ellipses appear
  // noStroke()
  // fill(random(0, 255), random(0, 255), random(0, 255), 100)
  // ellipse(random(0, width), random(0, height), 20, 20)
  
  // if (mouseIsPressed) {
  //   fill(0);
  // } else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);
}
    
function mousePressed() {
  background(0, 0, 0);

  fill(0, 0, 0);
  ellipse(mouseX, mouseY, 20, 20);
}