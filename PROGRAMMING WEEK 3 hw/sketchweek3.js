function setup() {
  createCanvas(400,650);
}

function draw() {
  background(243,244,235);

  if (mouseIsPressed) {
    /Purple Quad/
  	fill(69,54,99);
    noStroke();
  	quad(200,5,310,40,240,190,130,155);

    /Yellow Quad/
    fill(242,201,53)
    noStroke();
    quad(200,325,300,330,270,460,200,450);

    /Dark Blue Line/
    fill(43,61,145)
  	noStroke();
    quad(75,415,325,450,323,460,75,425);

    /Black Square/
  	fill(0,0,0)
  	rect(100,400,75,75);

    /Black Rect/
    fill(0,0,0)
    quad(140,510,200,475,220,500,160,535);

    /Red Rect/
    fill(204,61,14)
    quad(200,520,230,510,235,525,205,535);

    /Red Line/
    fill(204,61,14)
    quad(220,535,275,537,273,542,218,540);

    /Green Circle/
    fill(52,173,36)
    noStroke();
    ellipse(240,555,25,25);

} else {
  textSize(16);
  text('press', 50, 50);
  fill(52,173,36);

	/Purple Quad/
	fill(255);
  stroke(69,54,99)
  quad(200,5,310,40,240,190,130,155);

  /Yellow Quad/
  fill(255)
  stroke(242,201,53)
  quad(200,325,300,330,270,460,200,450);

  /Dark Blue Line/
  fill(255)
	stroke(43,61,145)
  quad(75,415,325,450,323,460,75,425);

  /Black Square/
	fill(255)
  stroke(0)
	rect(100,400,75,75);

  /Black Rect/
  fill(255)
  stroke(0)
  quad(140,510,200,475,220,500,160,535);

  /Red Rect/
  fill(255)
  stroke(204,61,14)
  quad(200,520,230,510,235,525,205,535);

  /Red Line/
  fill(255)
  stroke(204,61,14)
  quad(220,535,275,537,273,542,218,540);

  /Green Circle/
  fill(255)
  stroke(52,173,36)
  ellipse(240,555,25,25);
}
}
