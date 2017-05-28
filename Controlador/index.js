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
    tiempo = "q";
    OctPos = 3;

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


  $(document).on('click','.te', function(event) {
    Nota = $(this).text();
    OctPos += 1;
    var Notita = Nota+"/"+ OctPos;
    Notas.push(Notita);
    OctPos -= 1;
    var Tactual = $(this).data('Completar');
    Ttranscurrido.push(Tactual);
    VexFormatter(Notita);
    console.log(Notas);

    tiempo = 400;
    var i;
    var tiempo = 0;
    var notes = [];
    var stave = new VF.Stave(0, 0, 250);
    var in = 1;
    for(i = 0; i < Ttranscurrido.length; i++){
      tiempo = Ttranscurrido[i];
      if(tiempo >= 400 && in < 5){
        tiempo = 0;


        stave = new VF.Stave(in * 200, 0, 200);
        in++;
        notes = [];
      }
      else{
        notes.push(
          new VF.StaveNote({ keys: Notas[i], duration: duration})
        );
      }
    }
    while(tiempo > 0){
      //FILL THE GAP
      if(tiempo + 200 <= 400){
        tiempo += 200;
        notes.push(
          new VF.StaveNote({ keys: Notas[i], duration: 'hr'})
        );
      }
      else if(tiempo + 100 <= 400){
        tiempo += 100;
        notes.push(
          new VF.StaveNote({ keys: Notas[i], duration: 'qr'})
        );
      }
      if(tiempo + 50 <= 400){
        tiempo += 50;
        notes.push(
          new VF.StaveNote({ keys: Notas[i], duration: '8r'})
        );
      }
      if(tiempo + 25 <= 400){
        tiempo += 25;
        notes.push(
          new VF.StaveNote({ keys: Notas[i], duration: '16'})
        );
      }
    }
  });

  $(document).on('click','.opTiem', function(event) {
    tiempo = $(this).attr('id');
    console.log(tiempo);
  });

});
/* Preubas */
function VexFormatter(Nota){

  var nuevasN = [
      new VF.StaveNote({ keys: Nota , duration: tiempo})
  ];
  var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
  voice.addTickables(nuevasN);
  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

}


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
stave.setContext(context).draw();
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










var stave = new VF.Stave(250, 0, 200);


// Connect it to the rendering context and draw!
//stave.setContext(context).draw();

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
stave.setEndBarType(VF.Barline.type.END);
//stave.setContext(context).draw();
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
//VF.Formatter.FormatAndDraw(context, stave, notes);







stave.setContext(context).draw();
// Create a voice in 4/4 and add above notes
var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
voice.addTickables(notes);

// Format and justify the notes to 400 pixels.
var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 200);

// Render voice
voice.draw(context, stave);
