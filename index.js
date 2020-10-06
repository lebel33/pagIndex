$(document).ready(function(){

    let nombre_emp = $("<h1></h1>").text("metik");

    let height = $(window).height();

      $('.info').height(height);

    $("#header").append(nombre_emp);
    $("h1").attr("id","nombre_empresa");
    var contenido;
    
    $('#contenido').html( muestraImg() );
    
    $( "a[id=mision]" ).click(function()  {

        var nombre = (this).getAttribute("id");
        let imagen = "nosotros";
        let mision = "Proporcionar soluciones específicas para las empresas y negocios que les permita mejorar sus procesos y así potenciar su negocio.";           
        contenido = $("div[id=contenido]").children().get();
        let id = contenido[0].getAttribute("id");

        if ( id != "mision") {
         
          if ( id != "vision" || id != "hacemos" ) {
            $( "."+id ).replaceWith(muestraX(nombre, imagen));
         
            $("p.card-text").html(mision);
          } else {
            $("div#"+id).removeAttr();
            $("div#"+id).attr("id","mision");
            $("p.card-text").html(mision);
          }
        }
    });   

      $( "a[id=vision]" ).click(function() {
        var nombre = (this).getAttribute("id");
        let imagen = "nosotros";
        let vision = "Ser la principal empresa en el ramo de la tecnología siendo la más competitiva e innovadora del mercado, y adaptandose a las necesidades del cliente.";
        
        contenido = $("div[id=contenido]").children().get();
        let id = contenido[0].getAttribute("id");

        if ( id != "vision") {
         
          if ( id != "mision" || id != "hacemos") {
            
              $( "."+id ).replaceWith(muestraX(nombre, imagen));
              $("p.card-text").html(vision);
            } else {
              $("div#"+id).removeAttr();
              $("div#"+id).attr("id","vision");
              $("p.card-text").html(vision);
          }
        }
                
      });  

      $( "a[id=hacemos]" ).click(function() {
        var nombre = (this).getAttribute("id");
        let imagen = "hacemos";
        let info = "Somos una empresa joven dedicada al desarrollo de software así como también implementar soluciones en electrónica.";
        contenido = $("div[id=contenido]").children().get();
        let id = contenido[0].getAttribute("id");  

        if (id != "hacemos") {
          if ( id != "mision" || id != "vision") {
            
            $( "."+id ).replaceWith(muestraX(nombre, imagen));
            $("p.card-text").html(info);
          } else {
            $("div#"+id).removeAttr();
            $("div#"+id).attr("id","hacemos");
            $("img").removeAttr("src","");
            $("img").addAttribute("src","imagenes/"+nombre+".jpg");
            
            $("p.card-text").html(info);
          }
        }
                
      });  

      $( "a[id=inicio]" ).click(function() {
          
        contenido = $("div[id=contenido]").children().get();
        let id = contenido[0].getAttribute("id");

        if (id != "imagenes") {
          
          $( "."+id ).replaceWith(muestraImg());
        }
      }); 

      $( "a[id=contacto]" ).click(function() {
        
        contenido = $("div[id=contenido]").children().get();
        
        if (contenido[0].getAttribute("id") != "cont") {
          $( "."+contenido[0].getAttribute("id") ).replaceWith(muestraForma());

          $('form').submit( function(event) {
            var email = $("#email").val();
            var nombre = $("form :input").not("#enviar");

            for (var i = 0; i < nombre.length; i++) {
              var componente = nombre[i];
              var identifica = componente.getAttribute("id");
              var valor = $("#"+identifica).val()

              if ( valor == '') {
                
                $("#"+identifica).removeClass("is-valid");
                $("#"+identifica).addClass("is-invalid");

              } else {

                $("#"+identifica).removeClass("is-invalid");
                $("#"+identifica).addClass("is-valid");
                
              }

              if ( identifica == 'email') {
                if (validarEmail(email)) {
                
                  $("#"+identifica).removeClass("is-invalid");
                  $("#"+identifica).addClass("is-valid");
                } else {
                 
                  $("#"+identifica).removeClass("is-valid");
                  $("#"+identifica).addClass("is-invalid")
                }
              }
              
            }
            /*$.post( 'some-url', $('form').serialize(), function(data) {
                  // ... do something with response from server
                },
                'json' // I expect a JSON response
             );*/
             
             event.preventDefault();
           });
        }

      }); 

})

function muestraImg() {

    var carousel = '<div id="imagenes" class="imagenes">';
    carousel += '<div id="carousel" class="carousel slide" data-ride="carousel">';
    carousel += '<ol class="carousel-indicators">';
    carousel += '<li data-target="#carousel" data-slide-to="0" class="active"></li>';
    carousel += '<li data-target="#carousel" data-slide-to="1"></li>';
    carousel += '<li data-target="#carousels" data-slide-to="2"></li>';
    carousel += '</ol>';
    carousel += '<div class="carousel-inner">';
    carousel += '<div class="carousel-item active">';
    carousel += '<img src="imagenes/saludo.jpg" class="d-block w-100" width="500px" heigth="332px" alt="...">';
    carousel += '</div>';
    carousel += '<div class="carousel-item">';
    carousel += '<img src="imagenes/grafica.jpeg" class="d-block w-100" width="500px" heigth="332px" alt="...">';
    carousel += '</div>';
    carousel += '<div class="carousel-item">';
    carousel += '<img src="imagenes/proyecto.jpg" class="d-block w-100" width="500px" heigth="332px" alt="...">';
    carousel += '</div>';
    carousel += '</div>';
    carousel += '<a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">';
    carousel += '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
    carousel += '<span class="sr-only">Previous</span>';
    carousel += '</a>';
    carousel += '<a class="carousel-control-next" href="#carousel" role="button" data-slide="next">';
    carousel += '<span class="carousel-control-next-icon" aria-hidden="true"></span>';
    carousel += '<span class="sr-only">Next</span>';
    carousel += '</a>';
    carousel += '</div>';
    carousel += '</div>';
    carousel += '</div>';

    return carousel;
}

function muestraX(nombre, imagen) {

    var sobre = '<div id="'+nombre+'"  class="row '+nombre+' ">';
    sobre += '<div class="col-8 mx-auto">';
    sobre += '<div class="card " style="width: 20rem;">';
    sobre += '<img src="imagenes/'+imagen+'.jpg" class="card-img-top" alt="...">';
    sobre += '<div class="card-body">';
    sobre += '<p class="card-text text-justify"></p>';
    sobre += '</div>';
    sobre += '</div>';
    sobre += '</div>';
    sobre += '</div>';
  
    return sobre;
}

function muestraForma() {
  
  var forma = '<div class="cont" id="cont">';
  forma += '<form>';
  forma += '<div class="form-group">';
  forma += '<label for="exampleFormControlInput1">Nombre</label>';
  forma += '<input type="text" class="form-control" id="nombre">';
  forma += '</div>';
  forma += '<div class="form-group">';
  forma += '<label for="exampleFormControlInput1">Dirección email</label>';
  forma += '<input type="email" class="form-control" id="email" placeholder="nombre@ejemplo.com">';
  forma += '</div>';
  forma += '<div class="form-group">';
  forma += '<label for="exampleFormControlTextarea1">Comentarios</label>';
  forma += '<textarea class="form-control" id="comentario" rows="3"></textarea>';
  forma += '</div>';
  forma += '<input type="submit" id="enviar" />';
  forma += '</form>';
  forma += '</div>';

  return forma;
}

function validarEmail(valor) {
  let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (emailRegex.test(valor)){
   return true
  } else {
   return false
  }
}
