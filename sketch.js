let ele;
let img;
let angle=0;

function setup() {
  ele = createAudio('Bread.mp3');
  createCanvas(500, 500,WEBGL);
  ele.autoplay(true);
  img=loadImage('faceSH.jpg');
}

function draw() {
  background(random(255),random(255),random(255));
  rotateX(angle*mouseX*0.001);
  rotateY(angle*mouseY*0.001);
  rotateZ(angle*0.1);
  box(200);
  texture(img);
  
  angle += 0.03;
}