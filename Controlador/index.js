var texto = $("#txt");
var btn = $("#enviar");

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
