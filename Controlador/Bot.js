/*$(document).on('click','.emogi', function(event) {
/*console.log($("this"));
var feeling = $("this").attr('id');
console.log(feeling);*/
$("#ComponerBTN").click(function(){
  sendBOT();
  console.log("enviado");
});

function sendBOT(){
    melody = [];
    for(var i = 0; i < Notas.length; i++){
        var note = Notas[i].split('/');
        note = note[0];
        var duration;
        switch(Ttranscurrido[i]){
              case '16':
                duration = 1;
              break;
              case '8':
                duration = 2;
              break;
              case 'q':
                duration = 4;
              break;
              case 'h':
                duration = 8;
              break;
              case 'w':
                duration = 16;
              break;
      }
        melody.push([note,duration]);
    }
    var parameters = {
        tempo : bpm,
        velocidad: speed,
        sentimiento: mood,
        melodia : melody
    }
    console.log(parameters);
    $.ajax({
      method: "POST",
      url: "https://us-west-1-bot.recime.io/55030a6884a8aee342aff85d70a418c5/v1",
      //url: "http://localhost:4000/55030a6884a8aee342aff85d70a418c5/v1",
      data: parameters,
      dataType:"json",
      error: function(){
        console.log("error","Error en el servidor");  //Error de servidor
      },
      success: function(data){
        //Reproduccion del archivo
        console.log(data);
        $('.contenedor').append("<a class='btn btn-danger' href='"+ data.url +""'>Escucha Mi recomendacion</a>");

      }

});
}

function toast(tipo,texto){
  var $contenido = $('.contenedor');
  switch (tipo) {
    case 'error':
      $contenido.append("<div class='container'><div id='tostada' class='alert alert-danger tostada'>"+ texto +"</div></div>");
      break;
    case 'warning':
      $contenido.append("<div class='container'><div id='tostada' class='alert alert-warning tostada'>"+ texto +"</div></div>");
      break;
    case 'success':
      $contenido.append("<div class='container'><div id='tostada' class='alert alert-success tostada'>"+ texto +"</div></div>");
      break;
    case 'info':
      $contenido.append("<div class='container'><div id='tostada'class='alert alert-info tostada'>"+ texto +"</div></div>");
      break;
    default:
      console.log('No se reconocio tipo de toast');
  }
  $(".tostada").click(function(){
      $(this).fadeOut(1000);
  });
  $(".tostada").animate({'right':'0px'}, 1000)
  setTimeout(function(){
    $(".tostada").fadeOut(1000);
  },7000);
}

function initA(){
  toast('info','Hola antes de empezar dime que tipo de melodia estas esperando');
}
//toast('info','e we');

function answer(feeling){
  console.log(feeling);
  switch (feeling) {
    case 'HappyEmogi':
        mood = 0;
        speed = 0;
        toast('warning','Oh vaya que tambien lo siento');
        toast('danger','Hagamozlo');
        toast('success','\(^o^)/');
        break;
    case 'SadEmogi':
        speed = 2;
        mood = 1;
        toast('warning','Baia Baia');
        toast('info','Entonces una melodia triste');
        break;
    case 'MehEmogi':
        speed = 1;
        mood = 3;
        toast('success','Tienes razon');
        toast('info','dame un momento');
        break;
    case 'Aladin':
        mood = 2;
        speed = 1;
        toast('info','Dont worry its not a trap');
        toast('success','Vamos a Batiproducirlo Robin');
        break;
    case 'Like':
        toast('info','Bien le heche ganas');
        toast('info','o(^-^)o');
        toast('warning','Para volver a hacerlo recarga la pagina >.<');
        break;
    case 'Dislike':
        toast('default',"Veo que no te gusto (T-T)");
        toast('info',"Lo intentaremos otra vez o('^')o");
        toast('success','(^-^)');
        sendBOT();
        break;
    }
}




/*funtion Bot(){

}

funtion Hi(){

}*/
