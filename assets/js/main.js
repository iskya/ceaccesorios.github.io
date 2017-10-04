$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if (scroll != 54) {
        
        $(".nk-navbar-transparent").css("background" , "white");
        $("#logo").attr('src','assets/images/Logo-home.png');
      
            }

      else{
          
          $("#logo").attr('src','assets/images/logo-blanco.png');
          $(".nk-navbar-transparent").css("background" , "white");


      }
  });
});