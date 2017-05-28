$(function() {
    //Prototipo Pentagrama
  var Pregunta = {
    Notes: [],
    Compas : "",
    Clave : ""
  };

    var texto = $("#txt");
    var btn = $("#enviar");
    var OctUp = $("#UP");
    var OctDown = $("#DOWN");
    var $Oct = $("#Cs");
    var $DN = $("#DelN");
    var $DA = $("#DelAll");
    var Octavas = ["C1","C2","C3","C4","C5","C6","C7","C8","C9","C10"];
    var Notas = [];
    var duracion = "q";
    var Ttranscurrido = [];
    var tiempo = 100;
    var OctPos = 3;

    $DN.click(function(){
      Notas.pop();
      Ttranscurrido.pop();
      console.log(Notas);
    });
    $DA.click(function(){
      Notas = [];
      Ttranscurrido = [];
      console.log(Notas);
    });

    var spinTime = $( "#time" ).spinner({
      max: 200
    },{
      min:40
    });

    OctDown.click(function(){
      OctPos++;
      if (OctPos > 9) {
        OctPos = 0;
      }
      $Oct.text(Octavas[OctPos]);
      console.log(Octavas[OctPos]);

    });
    OctUp.click(function(){
      OctPos--;
      if (OctPos < 0) {
        OctPos = 9;
      }
      $Oct.text(Octavas[OctPos]);
      console.log(Octavas[OctPos]);
    });




    btn.click(function(){
      var parameters = texto.val();
      $.ajax({
          method: "GET",
          url: "http://localhost:4000/55030a6884a8aee342aff85d70a418c5/v1",
          data: parameters,
          dataType:"json",
          error: function(){
            console.log("error","Error en el servidor");  //Error de servidor
          },
          success: function(data){
            console.log(data);
          }

    });

  });

function VexFormatter(){

}
  $(document).on('click','.te', function(event) {
      //VEXFLOW
VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "boo".
var div = document.getElementById("Upen")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(1000, 500);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

// Create a stave of width 400 at position 10, 40 on the canvas.
var stave = new VF.Stave(0, 0, 200);

// Add a clef and time signature.
stave.addClef("treble").addTimeSignature("4/4");
// Connect it to the rendering context and draw!
stave.setContext(context).draw();
      
    Nota = $(this).text();
    var Notita = Nota+"/"+ (OctPos + 1);
    Notas.push(Notita);
    //var Tactual = $(this).data('Completar');
    Ttranscurrido.push(duracion);
    //console.log(duracion);
      
    var inside = 1;
    var i;
    var tiempo = 0;
    var notes = [];
    for(i = 0; i < Ttranscurrido.length; i++){
        switch(Ttranscurrido[i]){
                  case '16':
                    tiempo += 25;
                  break;
                  case '8':
                    tiempo += 50;
                  break;
                  case 'q':
                    tiempo += 100;
                  break;
                  case 'h':
                    tiempo += 200;
                  break;
                  case 'w':
                    tiempo += 400;
                  break;
          }
      if(tiempo >= 400 && inside < 5){
          tiempo = 0;
          VF.Formatter.FormatAndDraw(context, stave, notes);
          stave = new VF.Stave(inside * 200, 0, 200);
            stave.setContext(context).draw();
          inside++;
          notes = [];
      }
      else{
          notes.push(
              new VF.StaveNote({ keys: [Notas[i]], duration: Ttranscurrido[i]})
          );
      }
    }
    while(tiempo > 0){
      //FILL THE GAP
      if(tiempo + 200 <= 400){
        tiempo -= 200;
        notes.push(
          new VF.StaveNote({ keys: [Notas[0]], duration: 'hr'})
        );
      }
      else if(tiempo + 100 <= 400){
        tiempo -= 100;
        notes.push(
          new VF.StaveNote({ keys: [Notas[0]], duration: 'qr'})
        );
      }
      else if(tiempo + 50 <= 400){
        tiempo -= 50;
        notes.push(new VF.StaveNote({ keys: [Notas[0]], duration: '8r'}));
      }
      else if(tiempo + 25 <= 400){
        tiempo -= 25;
        notes.push(new VF.StaveNote({ keys: [Notas[0]], duration: '16r'}));
      }
    }
      var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
      voice.addTickables(notes);

      // Format and justify the notes to 400 pixels.
      var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 200);

      // Render voice
      voice.draw(context, stave);

  });

  $(document).on('click','.opTiem', function(event) {
    tiempo = $(this).attr('id');
    console.log(tiempo);
  });

});





/*
// Create the notes
var notes = [
  // A quarter-note C.
  new VF.StaveNote({ keys: ["c/4"], duration: "q" }),
  // A quarter-note D.
  new VF.StaveNote({ keys: ["d/4"], duration: "q" }),

  // A quarter-note rest. Note that the key (b/4) specifies the vertical
  // position of the rest.
  new VF.StaveNote({ keys: ["b/4"], duration: "qr" }),

  // A C-Major chord.
  new VF.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" })
];
VF.Formatter.FormatAndDraw(context, stave, notes);

var stave = new VF.Stave(200, 0, 200);

var notes = [
  // A quarter-note C.
  new VF.StaveNote({ keys: ["c/4"], duration: "q" }),
  // A quarter-note D.
  new VF.StaveNote({ keys: ["d/4"], duration: "q" }),

  // A quarter-note rest. Note that the key (b/4) specifies the vertical
  // position of the rest.
  new VF.StaveNote({ keys: ["b/4"], duration: "8r" }),
    new VF.StaveNote({ keys: ["b/4"], duration: "16r" }),
    new VF.StaveNote({ keys: ["b/4"], duration: "16r" }),
  // A C-Major chord.
  new VF.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" })
];

stave.setContext(context).draw();
// Create a voice in 4/4 and add above notes
var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
voice.addTickables(notes);

// Format and justify the notes to 400 pixels.
var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 200);

// Render voice
voice.draw(context, stave);
*/
