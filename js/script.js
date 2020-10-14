
function mensajeContinuacion(){

     return confirm("quieres continuar");
    }

     $('#nombre').focus(function(){
      $(this).css("border", "9px", "solido black");
     });

     $('#nombre').blur(function(){
     $(this).css("border", "4px","solido black");
     });

     $('#email').focus(function(){
          $(this).css("border", "9px","solido black");
     
         });
     
     $('#email').blur(function(){
      $(this).css("border", "4px","solido black");
     });
     
     $('#tel').focus(function(){
        $(this).css("border", "9px","solido black");
          
      });
          
     $('#tel').blur(function(){
      $(this).css("border", "4px","solido black");
      });

     $('#mensaje').focus(function(){
        $(this).css("border", "9px","solido black");
               
     });
               
      $('#mensaje').blur(function(){
          $(this).css("border", "4px","solido black");
      });

      $('.boxin').mouseover(function(){
          $(this).css("background","yellow").css("color","pink" )
      });
  
      $('.boxin').mouseout(function(){
          $(this).css("background","lightpink").css("color","lawngreen" )
      });
      