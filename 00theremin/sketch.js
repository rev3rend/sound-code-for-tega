// theremin
// <3 rld

var osc; // an oscillator

function setup()
{
  createCanvas(800, 600);
  background(0);
  noStroke();

  // setup the oscillator:
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start(); // this is important

}

function draw()
{
  background(0);
  var f = map(mouseX, 0, width, 100, 3000); // x => frequency
  var a = map(mouseY, 0, height, 0.1, 0.); // y => amplitude

  fill(255);
  ellipse(mouseX, mouseY, 50, 50);

  osc.amp(sqrt(a)); // use equal-power volume
  osc.freq(f);

}

// constrained integer map function:
function imap(v, a, b, c, d)
{
  return(constrain(floor(map(v, a, b, c, d)), min(c,d), max(c, d)-1));
}
