var flg_start = false;
function setup() {
  createCanvas(705, 607.5);
  textFont("monospace");
  angleMode(DEGREES);
  rectMode(CENTER);
  imageMode(CENTER);
  setupMario();
  draw();
  noLoop();
  frameRate(60);
}

function draw() {
  drawMario();
  if (flg_start == false) {
    textAlign(CENTER, CENTER);
    text("Press space key to start", width / 2, height / 2);
    textAlign(LEFT, TOP);
  }
}

function keyPressed() {
  if (key == 'a') {
    goLeft();
  }
  if (key == 'd') {
    goRight();
  }
  if (key == 'w') {
    goJump();
  }
  if (key == 's') {
    goDown();
  }
  if (key == 'f') {
    goFire();
  }
  if (key == ' ') {
    loop();
    flg_start = true;
    grafika.millis = millis();
  }
}

function keyReleased() {
  if (key == 'a') {
    stopLeft();
  }
  if (key == 'd') {
    stopRight();
  }
  if (key == 's') {
    stopDown();
  }
  if (key == 'f') {
    stopFire();
  }
}