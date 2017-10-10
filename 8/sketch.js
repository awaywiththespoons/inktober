//inktober 2017
//8
//lemons
//this p5 play library is amazing thankyou.

var walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //WALKER
  walker = createSprite(width / 2, height / 4);
  walker.addAnimation("walking", "walker001.png", "walker003.png");
} //end of setup

function draw() {
  background(255);

  //every 10 frames
  if (frameCount % 40 == 0) {
    var closedLemon;
    closedLemon = createSprite(walker.position.x, walker.position.y - 120);
    closedLemon.addAnimation("normal", "closedLemon001.png", "closedLemon006.png");
    closedLemon.rotation = random(360);
    closedLemon.life = 1000;
  }

  drawSprites();
} //end of draw


function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    walker.mirrorX(-1);
    walker.setSpeed(1.5, 0);
  } else if (keyCode == DOWN_ARROW) {
    walker.setSpeed(1.5, 90);
  } else if (keyCode == LEFT_ARROW) {
    walker.mirrorX(1);
    walker.setSpeed(1.5, 180);
  } else if (key == ' ') {
    walker.setSpeed(0, 0);
  }

} //end of keypressed





