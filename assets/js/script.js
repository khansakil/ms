  $(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.header-menu').addClass("sticky")
        }else{
            $('.header-menu').removeClass("sticky")
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
    });
    $(".menubar").click(function(){
      $(".menu").toggle(1000);
    });
        // Scroll Slide Up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
  });