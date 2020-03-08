var eraser= 0.9;
var t = 350;
var l = 80;
var k = 0;
var targetX;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  targetX = (mouseX * eraser) - eraser
  fill("blue");
  head=circle(targetX+90, t - 75 - 150 - 50 - k, 150)
  leg1=rect(targetX + 15 + 50, t - 50 - 20 - 10, 20, l);
  leg2 = rect(targetX + 15 + 50 + 40, t - 50 - 20 - 10, 20, l);
  body1= rect(targetX + 50, t - 150 - 50 - k, 90, 150);
  foot1 = rect(targetX + 10, t, 80, 30);
  foot2 = rect(targetX + 80 + 20, t, 80, 30);
  fill("red");
  eye1 = rect(targetX + 150, t - 150 - 75 -50 - k, 10, 10);
  eye2 = rect(targetX + 30, t - 150 - 75 -50 - k, 10, 10);
  mouth = rect(targetX + 75, t - 150 - 100 - k, 55, 10);
  
  if(mouseIsPressed){
    k=30
  }else{
    k=0
  }
  
  
}