$(document).ready(function(){
    $('body').css("text-align","center");

    });
     $('.body1').css("text-align","center").css("background-color","aquamarine");


 
   $('#parrafo').css("font-size","40px").css("color","violet").css("tex-align","center");

   $('.parrafo2').css("background","blueviolet").css("color", "black").css("font-size","28px").css("tex-align","center");
   $('.titulo1').css("font-size","37px").css("color","purple").css("background","violet").css("tex-align","center");
   $('.parrafo3').css("font-size","37px").css("color","purple").css("background","violet").css("tex-align","center");

   $('li').css("text-align", "left").css("font-size","25px").css("color","crimson");
   $('[title= link1]').css("background","violet")
   $('[title= link2]').css("background","cornflowerblue");
   $('[title= link3]').css("background","green");
   $('[title= link4]').css("background","deepskyblue");

     $('li').click(function(){
         $(this).addClass('resaltar');
     })

     $('li').dblclick(function(){
        $(this).addClass('resaltar2');
    });

    $('.box1').mouseover(function(){
        $(this).css("background","yellow").css("color","pink" )
    });

    $('.box1').mouseout(function(){
        $(this).css("background","lightpink").css("color","lawngreen" )
    });

    $('.box2').mouseover(function(){
        $(this).css("background","fuchsia").css("color","green" )
    });

    $('.box2').mouseout(function(){
        $(this).css("background","darkorchid").css("color","deepskyblue" )
    });

    $('.box3').mouseover(function(){
        $(this).css("background","blue").css("color","red" )
    });

    $('.box3').mouseout(function(){
        $(this).css("background","green").css("color","fuchsia" )
    });

    $('.box4').mouseover(function(){
      $(this).css("background","aqua").css("color","darkorchid" )
    });

    $('.box4').mouseout(function(){
      $(this).css("background","indianred").css("color","indigo") 
     });
    
    