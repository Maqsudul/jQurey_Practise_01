$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
    $(".btn").click(function(){
    $('.hide').hide();
  });
    
    $(".btn2").click(function(){
    $('.Togg').toggle();
  });
    
    $(".btn3").click(function(){
    $('p').toggle();
  });
    
    $(".btn4").mouseover(function(){
    $('.me').hide();
  });
    
    $(".btn5").mouseenter(function(){
    $('.met').toggle();
    });
    
    $(".hide").click(function(){
    $('.onoff').hide();
    });
    
    $(".show").click(function(){
    $('.onoff').show();
    });
    
    $(".butt").click(function(){
    $("#div1").fadeIn(500);
    $("#div2").fadeIn(1000);
    $("#div3").fadeIn(1500);
    });
});