// View here: file:///Users/jackyeh/repositories/tutorials/p5/empty-example/index.html

let circle = {
  x: 100,
  y: 480/2,
  diameter: 50
};
let increment = 6;
let incrementy = 6;

function setup() {
  // put setup code here
  
  createCanvas(600, 400);
  // print("Hello");
  // background(0, 0, 0);
}

function draw() {
  // put drawing code here
  
  // set background
  // let r = map(mouseX, 0, width, 0, 255)
  // let g = map(mouseY, 0, height, 0, 255)
  // background(r, g, 0);
  
  // draw ellipse
  // noStroke();
  // fill(255, 255, 255, 50);
  // ellipse(mouseX, mouseY, 20, 20);

  // random ellipses appear
  // noStroke()
  // fill(random(0, 255), random(0, 255), random(0, 255), 100)
  // ellipse(random(0, width), random(0, height), 20, 20)

  // ellipse changes color and shape conditional
  // background(255, 0, 0)
  // noStroke()
  // noFill()
  // if (mouseX >= width/2) {
  //   fill(255, 255, 200);
  // }
  // ellipse(width/2, height/2, 150, 150);
  
  // if (mouseIsPressed) {
  //   fill(0);
  // } else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);

  // ball bounce back
  background(0);
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
  if (circle.x >= (width - circle.diameter/2) 
    || circle.x <= circle.diameter/2) {
    increment = increment*-1;
  }
  if (circle.y >= (height - circle.diameter/2) 
    || circle.y <= circle.diameter/2) {
    incrementy = incrementy*-1;
  }
  circle.x = circle.x + increment;
  circle.y = circle.y + incrementy;
  console.log(circle.x);

  // // Draw grid of ellipses
  // background(0);
  // strokeWeight(4);
  // stroke(255);
  // for (let x=0; x<=width; x+=circle.diameter) {
  //   for (let y=0; y<=height; y+=circle.diameter) {
  //     fill(random(255), 0, random(255));
  //     ellipse(x, y, circle.diameter/2, circle.diameter/2);
  //   }
  // }
}
    
// function mousePressed() {
//   background(0, 0, 0);
//   fill(0, 0, 0);
//   ellipse(mouseX, mouseY, 20, 20);
// }