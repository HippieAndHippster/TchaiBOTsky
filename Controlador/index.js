$(function() {
    var texto = $("#txt");
    var btn = $("#enviar");

    $('#Controlador').spinner({
               min: 2,
               max: 20,
               step: 2
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
});
