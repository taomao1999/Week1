function setup() {
  // put setup code here
createCanvas(displayWidth,displayHeight)

background(51)
rectMode(CENTER)
}

function draw() {
  // put drawing code here
  background(random(240,250),random(220,230),random(250,255))
  noStroke()
  fill(80,90,120)
  ellipse(400,400,200,200)
  stroke(180,200,240)
  strokeWeight(50)
  point(mouseX,mouseY)
stroke(random(255),random(255),random(255))
fill(220,220,240)
strokeWeight(random(30,50))
  rect(1000,400,200,200)

noStroke()
fill(125,80,90)
  triangle(600,400,800,400,700,530)
fill(255,255,255)
  strokeWeight(30)
  line(30, 20, 85, 75)



}
