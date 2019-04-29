var canvas;
const yaxis = 1;
let yoff = 0.0;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(150);
}

function setup() {
  // put setup code here
  canvas = createCanvas(2880, 3000);
  canvas.position(0,0);
  canvas.style('z-index','-1')
  background(75,40,0);
  c2 = color(87,233,255);
  c1 = color(0, 0, 0);
}

function draw() {
strokeWeight(1);
  // put drawing code here
    // sky
  beginShape();
fill(166, 220, 255);
stroke(166, 220, 255)
  vertex(width/3.03,height/7.55);
  vertex(width/3.03,height/8.05);
  vertex(width/3.07, height/8.05);
  vertex(width/3.15, height/7.9);
  vertex(width/3.16, height/9.1);
  vertex(width/3.2, height/10.4);
  vertex(width/3.185, height/10.7);
  vertex(width/3.2, height/11);
  vertex(width/3.2, height/11.3);
  vertex(width/3.2, height/11);
  vertex(width/3.215, height/10.7);
  vertex(width/3.2, height/10.4);
  vertex(width/3.23, height/9.1);
  vertex(width/3.23, height/8);
  vertex(width/3.26, height/8);
  vertex(width/3.26, height/9.3);
  vertex(width/3.28, height/9.3);
  vertex(width/3.28, height/9.9);
  vertex(width/3.33, height/9.9);
  vertex(width/3.33, height/9.3);
  vertex(width/3.35, height/9.3);
  vertex(width/3.35, height/8.7);
  vertex(width/3.36, height/8.9);
  vertex(width/3.45, height/8.9);
  vertex(width/3.45, height/8.7);
  vertex(width/3.48, height/8.4);
  vertex(width/3.48, height/8);
  vertex(width/3.5, height/8);
  vertex(width/3.5, height/7.6);
  vertex(width/3.56, height/7.6);
  vertex(width/3.56, height/9.8);
  vertex(width/3.69, height/9.8);
  vertex(width/3.69, height/9.2);
  vertex(width/3.71, height/9.2);
  vertex(width/3.71, height/10);
  vertex(width/3.79, height/10);
  vertex(width/3.79, height/9);
  vertex(width/3.82, height/9);
  vertex(width/3.84, height/8.5);
  vertex(width/3.84, height/8.2);
  vertex(width/3.87, height/8.2);
  vertex(width/3.87, height/7.9);
  vertex(width/3.94, height/7.9);
  vertex(width/3.94, height/8.2);
  vertex(width/3.96, height/8.2);
  vertex(width/3.96, height/7.9);
  vertex(width/3.98, height/7.9);
  vertex(width/3.98, height/9.2);
  vertex(width/4.01, height/9);
  vertex(width/4.05, height/10.2);
  vertex(width/4.1, height/9);
  vertex(width/4.13, height/9.2);
  vertex(width/4.13, height/8.8);
  vertex(width/4.19, height/8.8);
  vertex(width/4.19, height/8.5);
  vertex(width/4.25, height/8.5);
  vertex(width/4.25, height/8.75);
  vertex(width/4.32, height/8.75);
  vertex(width/4.32, height/9.7);
  vertex(width/4.39, height/9.7);
  vertex(width/4.39, height/10.7);
  vertex(width/4.51, height/10.7);
  vertex(width/4.51, height/10.5);
  vertex(width/4.6, height/10.5);
  vertex(width/4.6, height/10.2);
  vertex(width/4.63, height/10.2);
  vertex(width/4.63, height/10.75);
  vertex(width/4.75, height/10.75);
  vertex(width/4.75, height/10.2);
  vertex(width/4.87, height/10.2);
  vertex(width/4.87, height/10.6);
  vertex(width/5.09, height/10.6);
  vertex(width/5.09, height/9.4);
  vertex(width/5.11, height/9.1);
  vertex(width/5.2, height/9.1);
  vertex(width/5.2, height/9.7);
  vertex(width/5.24, height/9.9);
  vertex(width/5.28, height/9.7);
  vertex(width/5.28, height/9.1);
  vertex(width/5.34, height/9.1);
  vertex(width/5.34, height/8);
  vertex(width/5.42, height/8.2);
  vertex(width/5.42, height/8.4);
  vertex(width/5.46, height/8.5);
  vertex(width/5.53, height/8.4);
  vertex(width/5.53, height/9.9);
  vertex(width/5.63, height/9.9);
  vertex(width/5.63, height/10.2);
  vertex(width/5.84, height/10.2);
  vertex(width/5.84, height/9.45);
  vertex(width/5.95, height/9.45);
  vertex(width/5.95, height/8.2);
  vertex(width/6.03, height/8.2);
  vertex(width/6.08, height/7.8);
  vertex(width/6.08, height/11.8);
  vertex(width/6.77, height/11.8);
  vertex(width/6.77, height/8.6);
  vertex(width/7.02, height/8.6);
  vertex(width/7.02, height/8.2);
  vertex(width/7.1, height/8);
  vertex(width/7.18, height/8.2);
  vertex(width/7.18, height/8.4);
  vertex(width/7.37, height/8.4);
  vertex(width/7.37, height/9.5);
  vertex(width/7.53, height/9.5);
  vertex(width/7.53, height/10.4);
  vertex(width/7.75, height/10.4);
  vertex(width/7.75, height/10.8);
  vertex(width/8, height/10.8);
  vertex(width/8, height/11.4);
  vertex(width/8.21, height/11.4);
  vertex(width/8.21, height/10.8);
  vertex(width/8.29, height/10.8);
  vertex(width/8.29, height/10.4);
  vertex(width/8.75, height/10.4);
  vertex(width/8.75, height/9.6);
  vertex(width/9.8, height/9.6);
  vertex(width/9.8, height/9.9);
  vertex(width/10, height/9.9);
  vertex(width/10, height/12);
  vertex(width/10.75, height/12);
  vertex(width/10.75, height/11.6);
  vertex(width/11, height/11.6);
  vertex(width/11, height/9.3);
  vertex(width/11.2, height/9.3);
  vertex(width/11.2, height/10.8);
  vertex(width/11.4, height/10.8);
  vertex(width/11.4, height/11);
  vertex(width/12, height/11);
  vertex(width/12, height/10.8);
  vertex(width/13.2, height/10.8);
  vertex(width/13.2, height/9.75);
  vertex(width/13.6, height/9.75);
  vertex(width/13.6, height/15);
  vertex(width/13.7, height/15);
  vertex(width/13.7, height/18);
  vertex(width/14, height/18);
  vertex(width/14, height/20.2);
  vertex(width/14.7, height/24);
  vertex(width/14.8, height/33);
  vertex(width/15.1, height/36);
  vertex(width/15.2, height/80);
  vertex(width/15.3, height/36);
  vertex(width/15.6, height/33);
  vertex(width/15.7, height/24);
  vertex(width/16.9, height/20.2);
  vertex(width/17, height/18);
  vertex(width/17.3, height/18);
  vertex(width/17.3, height/15);
  vertex(width/17.6, height/15);
  vertex(width/17.6, height/9.75);
  vertex(width/20.5, height/9.75);
  vertex(width/20.5, height/10);
  vertex(width/27, height/10);
  vertex(width/27, height/9.7);
  vertex(width/37, height/9.7);
  vertex(width/37, height/8.6);
  vertex(width/42, height/8.6);
  vertex(width/42, height/14.5);
  vertex(width/44, height/14.5);
  vertex(width/44, height/15.6);
  vertex(width/75, height/16.5);
  vertex(width/85, height/16.3);
  vertex(width/160, height/16.3);
  vertex(width/160, height/15);
  vertex(width/230, height/15);
  vertex(width/230, height/9.5);
  // stroke(0);
  vertex(width/1000, height/9.5);
  vertex(width/1000, height/10000);
  vertex(width, height/10000);
  vertex(width, height/7.55);
  vertex(width/3.03, height/7.55)
endShape();

// buildings
beginShape();
fill(150);
stroke(150);
vertex(width/3.03,height/7.55);
vertex(width/3.03,height/8.05);
vertex(width/3.07, height/8.05);
vertex(width/3.15, height/7.9);
vertex(width/3.16, height/9.1);
vertex(width/3.2, height/10.4);
vertex(width/3.185, height/10.7);
vertex(width/3.2, height/11);
vertex(width/3.2, height/11.3);
vertex(width/3.2, height/11);
vertex(width/3.215, height/10.7);
vertex(width/3.2, height/10.4);
vertex(width/3.23, height/9.1);
vertex(width/3.23, height/8);
vertex(width/3.26, height/8);
vertex(width/3.26, height/9.3);
vertex(width/3.28, height/9.3);
vertex(width/3.28, height/9.9);
vertex(width/3.33, height/9.9);
vertex(width/3.33, height/9.3);
vertex(width/3.35, height/9.3);
vertex(width/3.35, height/8.7);
vertex(width/3.36, height/8.9);
vertex(width/3.45, height/8.9);
vertex(width/3.45, height/8.7);
vertex(width/3.48, height/8.4);
vertex(width/3.48, height/8);
vertex(width/3.5, height/8);
vertex(width/3.5, height/7.6);
vertex(width/3.56, height/7.6);
vertex(width/3.56, height/9.8);
vertex(width/3.69, height/9.8);
vertex(width/3.69, height/9.2);
vertex(width/3.71, height/9.2);
vertex(width/3.71, height/10);
vertex(width/3.79, height/10);
vertex(width/3.79, height/9);
vertex(width/3.82, height/9);
vertex(width/3.84, height/8.5);
vertex(width/3.84, height/8.2);
vertex(width/3.87, height/8.2);
vertex(width/3.87, height/7.9);
vertex(width/3.94, height/7.9);
vertex(width/3.94, height/8.2);
vertex(width/3.96, height/8.2);
vertex(width/3.96, height/7.9);
vertex(width/3.98, height/7.9);
vertex(width/3.98, height/9.2);
vertex(width/4.01, height/9);
vertex(width/4.05, height/10.2);
vertex(width/4.1, height/9);
vertex(width/4.13, height/9.2);
vertex(width/4.13, height/8.8);
vertex(width/4.19, height/8.8);
vertex(width/4.19, height/8.5);
vertex(width/4.25, height/8.5);
vertex(width/4.25, height/8.75);
vertex(width/4.32, height/8.75);
vertex(width/4.32, height/9.7);
vertex(width/4.39, height/9.7);
vertex(width/4.39, height/10.7);
vertex(width/4.51, height/10.7);
vertex(width/4.51, height/10.5);
vertex(width/4.6, height/10.5);
vertex(width/4.6, height/10.2);
vertex(width/4.63, height/10.2);
vertex(width/4.63, height/10.75);
vertex(width/4.75, height/10.75);
vertex(width/4.75, height/10.2);
vertex(width/4.87, height/10.2);
vertex(width/4.87, height/10.6);
vertex(width/5.09, height/10.6);
vertex(width/5.09, height/9.4);
vertex(width/5.11, height/9.1);
vertex(width/5.2, height/9.1);
vertex(width/5.2, height/9.7);
vertex(width/5.24, height/9.9);
vertex(width/5.28, height/9.7);
vertex(width/5.28, height/9.1);
vertex(width/5.34, height/9.1);
vertex(width/5.34, height/8);
vertex(width/5.42, height/8.2);
vertex(width/5.42, height/8.4);
vertex(width/5.46, height/8.5);
vertex(width/5.53, height/8.4);
vertex(width/5.53, height/9.9);
vertex(width/5.63, height/9.9);
vertex(width/5.63, height/10.2);
vertex(width/5.84, height/10.2);
vertex(width/5.84, height/9.45);
vertex(width/5.95, height/9.45);
vertex(width/5.95, height/8.2);
vertex(width/6.03, height/8.2);
vertex(width/6.08, height/7.8);
vertex(width/6.08, height/11.8);
vertex(width/6.77, height/11.8);
vertex(width/6.77, height/8.6);
vertex(width/7.02, height/8.6);
vertex(width/7.02, height/8.2);
vertex(width/7.1, height/8);
vertex(width/7.18, height/8.2);
vertex(width/7.18, height/8.4);
vertex(width/7.37, height/8.4);
vertex(width/7.37, height/9.5);
vertex(width/7.53, height/9.5);
vertex(width/7.53, height/10.4);
vertex(width/7.75, height/10.4);
vertex(width/7.75, height/10.8);
vertex(width/8, height/10.8);
vertex(width/8, height/11.4);
vertex(width/8.21, height/11.4);
vertex(width/8.21, height/10.8);
vertex(width/8.29, height/10.8);
vertex(width/8.29, height/10.4);
vertex(width/8.75, height/10.4);
vertex(width/8.75, height/9.6);
vertex(width/9.8, height/9.6);
vertex(width/9.8, height/9.9);
vertex(width/10, height/9.9);
vertex(width/10, height/12);
vertex(width/10.75, height/12);
vertex(width/10.75, height/11.6);
vertex(width/11, height/11.6);
vertex(width/11, height/9.3);
vertex(width/11.2, height/9.3);
vertex(width/11.2, height/10.8);
vertex(width/11.4, height/10.8);
vertex(width/11.4, height/11);
vertex(width/12, height/11);
vertex(width/12, height/10.8);
vertex(width/13.2, height/10.8);
vertex(width/13.2, height/9.75);
vertex(width/13.6, height/9.75);
vertex(width/13.6, height/15);
vertex(width/13.7, height/15);
vertex(width/13.7, height/18);
vertex(width/14, height/18);
vertex(width/14, height/20.2);
vertex(width/14.7, height/24);
vertex(width/14.8, height/33);
vertex(width/15.1, height/36);
vertex(width/15.2, height/80);
vertex(width/15.3, height/36);
vertex(width/15.6, height/33);
vertex(width/15.7, height/24);
vertex(width/16.9, height/20.2);
vertex(width/17, height/18);
vertex(width/17.3, height/18);
vertex(width/17.3, height/15);
vertex(width/17.6, height/15);
vertex(width/17.6, height/9.75);
vertex(width/20.5, height/9.75);
vertex(width/20.5, height/10);
vertex(width/27, height/10);
vertex(width/27, height/9.7);
vertex(width/37, height/9.7);
vertex(width/37, height/8.6);
vertex(width/42, height/8.6);
vertex(width/42, height/14.5);
vertex(width/44, height/14.5);
vertex(width/44, height/15.6);
vertex(width/75, height/16.5);
vertex(width/85, height/16.3);
vertex(width/160, height/16.3);
vertex(width/160, height/15);
vertex(width/230, height/15);
vertex(width/230, height/9.5);
vertex(width/1000, height/9.5);
vertex(width/1000, height/7.55);
vertex(width/3.03, height/7.55);
endShape();

// perlin noise fluxuating waves
beginShape();
fill(87,233,255);
stroke(87,233,255);
 let xoff = 0; // Option #1: 2D Noise
 // let xoff = yoff; // Option #2: 1D Noise

 // Iterate over horizontal pixels
 for (let x = 950; x <= width; x += 20) {
   // Calculate a y value according to noise, map to

   // Option #1: 2D Noise
   let y = map(noise(xoff, yoff), 0, 1, 420, 355);

   // Option #2: 1D Noise
   // let y = map(noise(xoff), 0, 1, 200,300);

   // Set the vertex
   vertex(x, y);
   // Increment x dimension for noise
   xoff += 0.1;
 }
 // increment y dimension for noise
 yoff += 0.02;
 vertex(width, height/7.55);
 vertex(width/3.03, height/7.55);
 endShape(CLOSE);

// ocean gradient
setGradient(950, 397, 2880-950, 3000-397, c2, c1, yaxis);
// ocean shape
beginShape();
fill(75,40,0);
stroke(75,40,0)
strokeWeight(1);
curveVertex(949, 397);
curveVertex(949, 397);
curveVertex(970, 410);
curveVertex(1010, 420);
curveVertex(1050, 425);
curveVertex(1090, 460);
curveVertex(1110, 500);
curveVertex(1130, 540);
curveVertex(1180, 560);
curveVertex(1230, 570);
curveVertex(1280, 580);
curveVertex(1350, 600);
curveVertex(1400, 630);
curveVertex(1440, 700);
curveVertex(1460, 800);
curveVertex(1480, 1200);
curveVertex(1500, 1600);
curveVertex(1520, 2000);
curveVertex(1540, 2400);
curveVertex(1560, 2600);
curveVertex(1580, 2700);
curveVertex(1630, 2750);
curveVertex(1680, 2800);
curveVertex(1800, 2850);
curveVertex(1950, 2880);
curveVertex(2100, 2870);
curveVertex(2200, 2850);
curveVertex(2250, 2840);
curveVertex(2350, 2850);
curveVertex(2450, 2880);
curveVertex(2530, 2940);
curveVertex(2630, 2960);
curveVertex(2630, 2960);
curveVertex(2730, 2950);
curveVertex(2830, 2920);
vertex(2880, 2900);
vertex(3000, 2900);
vertex(2880, 3000);
vertex(949, 3000);
vertex(949, 397);
// vertex(950, 397);
endShape();


// messages that pop up with the bubbles
// jelly fish
// whale
// fish
// coral
// sand tiger shark
// plastic bag, straw, soda rings, bottles
// fish swim by pop up info
// another trash bag float in from vacation and have a conversation (ocean currents)
// timer on website, how long have you been here for?
// counter for how many easter eggs you've found and how many are left
// more trash as you descend futher down

// for next monday
// first plastic bag blowing into ocean animation
// make cursor plastic bag
// layer 1 seagull with the rings around its neck (blank speech bubble)
// layer 2 two trash bags meet and talk about their journeys
// layer 3 turtle sees bag and thinks is a jellyfish to eat, chokes and spits out





}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
}
}
