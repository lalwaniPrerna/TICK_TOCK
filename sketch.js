function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

	//Using a -90 degree rotation 

function draw() {
  background("grey");
  translate(300, 300);
  rotate(-90);
  
  //setting the time 
 
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  //second angel rotation 
  
  strokeWeight(2);
  stroke(color(255, 255, 255));
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);
  
  //minute angel rotation 
  
  stroke('Black');
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);
  
  //hour angel rotation 
  
  stroke('#58B95F');
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);
  
  //inside second line movement 
  
  push();
  rotate(secondAngle);
  stroke('#black');
  line(0, 0, 100, 0);
  pop();
  
  //inside minute line movement 
  
  push();
  rotate(minuteAngle);
  stroke(0, 0, 0);
  line(0, 0, 80, 0);
  pop();
  
  //inside hour line movement 
  
  push();
  rotate(hourAngle);
  stroke(88, 185, 95);
  line(0, 0, 60, 0);
  pop();
  
  //center point 
  
  stroke(300);
  point(0, 0);

}