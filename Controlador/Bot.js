$(document).on('click','.emogi', function(event) {
  var feeling = $("this").attr('id');
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
});


/*funtion Bot(){

}

funtion Hi(){

}*/
