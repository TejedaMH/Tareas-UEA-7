function setup () {
 createCanvas(600, 600
 );
}

function draw (){
    background(0,255,0);
    
    noStroke();
    fill (0,0,0);
    rect (380, 400, 20, 80);
    rect (300, 400, 20, 80);
    fill(204, 102, 0);
    ellipse(330, 250, 400, 350);
    fill (0,0,0);
    circle(170, 160, 40);
    circle(260, 160, 40);
    triangle(320, 480, 230, 480, 300, 520);
    triangle(380, 480, 470, 480, 400, 520);
    fill (255,255,0)
    triangle(190, 190, 240, 190, 95, 370);
    fill (153, 77, 0)
    triangle(320, 250, 450, 250, 320, 370);
}