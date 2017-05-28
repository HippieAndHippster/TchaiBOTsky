var nBarras = 4;
var BarraWidth = 250;

/*    VEXFLOW    */

VF = Vex.Flow;
// Create an SVG renderer and attach it to the DIV element named "Upen".
var renderer = new VF.Renderer(Upen, VF.Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(800, 400);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

// Create a stave of width 400 at position 10, 40 on the canvas.
var stave = new VF.Stave(0, 0, 250);

// Add a clef and time signature.
stave.addClef("treble").addTimeSignature("4/4");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();
