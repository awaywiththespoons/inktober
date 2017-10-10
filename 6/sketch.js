var video;
var vScale = 16;
var sporn;
//var slider;
var cols = 40;
var rows = 30;


function setup() {
    createCanvas(windowWidth, windowHeight);
  pixelDensity(1); //for high res display
  video = createCapture(VIDEO);

  video.size(width / vScale, width / vScale);
  //video.hide();
  sporn = loadImage('images/sporn.png')
  imageMode(CENTER);
  //slider = createSlider(0, 255, 55);

} // end of setup

function draw() {
  background(255);

  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];

      var bright = (r + g + b) / 3;
      // map size based on brightness
      //  var w = map(bright, 0, 255, 0, vScale * 4);
      var threshold = 65;

      noStroke();

      if (bright > threshold) {
        fill(255);
        rect(x * vScale, y * vScale, vScale, vScale)
      } else {
       var imgSize = random(5, 40);
       var movingSpot = random(1,3);
        image(sporn, x * vScale+ movingSpot, y * vScale+movingSpot, imgSize, imgSize);
      }


    }
  }

} // end of draw

/*
canvas set up

     w  i  d  t  h
     0 1 2 3 4 5 6 7 8 9
h  0 _ _ _ _ _ _ _ _ _ _
e  1 _ _ _ _ _ _ _ _ _ _
i  2 _ _ _ _ _ _ _ _ _ _
g  3 _ _ _ _ _ _ _ _ _ _
h  4 _ _ _ _ _ _ _ _ _ _
t  5 _ _ _ _ _ _ _ _ _ _

10 x 6
60 pixels total
get()
set()

pixels []

[0R, 0G, 0B, 0A]
60 pixels = 4 (i.e R, G, B, A)
= 240 pixel values total
each pixel index goes up by 4

(x + y * width) * 4

*/
