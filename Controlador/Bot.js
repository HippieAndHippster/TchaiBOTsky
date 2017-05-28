/*$(document).on('click','.emogi', function(event) {
/*console.log($("this"));
var feeling = $("this").attr('id');
console.log(feeling);*/
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

//toast('info','e we');

function answer(feeling){
  console.log(feeling);
  switch (feeling) {
    case 'HappyEmogi':
        toast('warning','Oh vaya que tambien lo siento');
        toast('danger','Hagamozlo');
        toast('success','\(^o^)/');
        break;
    case 'SadEmogi':
        toast('warning','Baia Baia');
        toast('info','Entonces una melodia triste');
        break;
    case 'MehEmogi':
        toast('success','Tienes razon');
        toast('info','dame un momento');
        break;
    case 'Aladin':
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
        break;
    }
}


/*funtion Bot(){

}

funtion Hi(){

}*/
