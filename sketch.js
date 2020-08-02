function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // default was radians so we wanna change it to degrees
  textFont('Michroma');
}

function draw() {
  background(0);
  
  // set relative position
  let rel_x = 200;
  let rel_y = 200;  
  
  // angle starts at East in p5
  // but clock starts at North
  // so we need to rotate it relative to the arc position
  translate(rel_x, rel_y);
  rotate(-90);
  
  // get current time
  let hr = hour();
  let min = minute();
  let sec = second();
  
  // get arc angle
  let hr_angle = map(hr%12, 0, 12, 0, 360);
  let min_angle = map(min, 0, 60, 0, 360);
  let sec_angle = map(sec, 0, 60, 0, 360);

  // set arc radius
  let hr_radius = 240;
  let min_radius = 270;
  let sec_radius = 300;
  
  // set significant figure (need 2 before decimal place)
  let sigfig = 2;
  
  // hr arc
  strokeWeight(10);
  stroke(150,100,255);
  noFill();
  arc(0, 0, hr_radius, hr_radius, 0, hr_angle); // width and length has to be the same to be a circle
  
  // min arc
  strokeWeight(10);
  stroke(100,255,150);
  noFill();
  arc(0, 0, min_radius, min_radius, 0, min_angle);
  
  // sec arc
  strokeWeight(10);
  stroke(255,100,150);
  noFill();
  arc(0, 0, sec_radius, sec_radius, 0, sec_angle);
  
  // display clock text
  rotate(90); // need to rotate back to normal
  fill(255);
  noStroke();
  textSize(26);
  text(nf(hr, sigfig) + " : " + nf(min, sigfig) + " : " + nf(sec, sigfig), 0, 10);
  textAlign(CENTER);
}