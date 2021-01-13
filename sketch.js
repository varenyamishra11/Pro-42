var hr,min,sec
var secAngle,minAngle,hrAngle;

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);

  hr = hour();
  min = minute();
  sec = second();

  textFont("Comic sans MS");
  fill(255);
  textSize(25);
  //text("12",195,90)
  text(hr + ":" + min + ":" + sec,400,500); 

  translate(50,450);
  rotate(270);

  strokeWeight(2);
  stroke(164, 252, 172);
  noFill();
  secAngle = map(sec,0,59,0,360);
  arc(200,200,300,300,0,secAngle);

  push();
  rotate(secAngle);
  line(20,200,20,100)
  pop();

  strokeWeight(4);
  stroke(0, 199, 255);
  noFill(); 
  minAngle = map(min,0,60,0,360);
  arc(200,200,280,280,0,minAngle);

  push();
  rotate(minAngle);;
  line(200,0,10,0)
  pop();

  strokeWeight(6);
  stroke(244, 75, 177);
  noFill();
  hrAngle = map(hr%12,0,12,0,360);
  arc(200,200,260,260,0,hrAngle);

  push();
  rotate(hrAngle);
  line(90,-200,10,0)
  pop();

  drawSprites();
}